# Guia Avançado para Criação de Agentes com Pydantic AI

## 1. Configuração Inicial Avançada

### Ambiente Virtual Recomendado

```bash
python -m venv pydantic_ai_env
source pydantic_ai_env/bin/activate  # Linux/Mac
pydantic_ai_env\Scripts\activate  # Windows
```

### Instalação Completa

```bash
pip install pydantic-ai[all] openai python-dotenv logfire
```

### Configuração Segura de API Keys

```python
from pydantic import SecretStr
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    OPENAI_API_KEY: SecretStr
    ANTHROPIC_API_KEY: SecretStr = None

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

config = Settings()
```

## 2. Arquitetura de Agentes Profissionais

### Tipos de Agentes Especializados

```python
from enum import Enum

class AgentType(str, Enum):
    CUSTOMER_SUPPORT = "customer_support"
    DATA_ANALYST = "data_analyst"
    CONTENT_CREATOR = "content_creator"
    PERSONAL_ASSISTANT = "personal_assistant"
```

### Factory Pattern para Criação de Agentes

```python
from pydantic_ai import Agent, OpenAI

def create_agent(agent_type: AgentType, **kwargs):
    base_config = {
        "model": OpenAI(model="gpt-4-turbo"),
        "retries": 3,
        "timeout": 30.0
    }

    configurations = {
        AgentType.CUSTOMER_SUPPORT: {
            "system_prompt": "Você é um especialista em atendimento ao cliente...",
            "tools": [knowledge_base_search, ticket_system]
        },
        AgentType.DATA_ANALYST: {
            "system_prompt": "Você é um analista de dados senior...",
            "tools": [sql_query, visualization_generator]
        }
    }

    return Agent(**{**base_config, **configurations[agent_type], **kwargs})
```

## 3. Modelos de Resposta Complexos

### Hierarquia de Modelos Pydantic

```python
from pydantic import BaseModel, Field
from typing import List, Optional, Dict

class Product(BaseModel):
    id: str = Field(..., description="ID único do produto")
    name: str
    price: float
    categories: List[str]

class Recommendation(BaseModel):
    products: List[Product]
    alternatives: Optional[List[Product]]
    reasoning: str = Field(..., description="Explicação da recomendação")
    confidence: float = Field(ge=0, le=1)

class UserResponse(BaseModel):
    request_id: str
    timestamp: str
    data: Dict[str, Recommendation]
    metadata: Dict[str, str]
```

## 4. Ferramentas Avançadas

### Integração com Bancos de Dados

```python
from pydantic_ai import Tool
import sqlite3

@Tool
def query_database(query: str, db_path: str = "data.db") -> List[Dict]:
    """Executa consultas SQL em banco de dados SQLite"""
    with sqlite3.connect(db_path) as conn:
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute(query)
        return [dict(row) for row in cursor.fetchall()]
```

### Chamadas a APIs Externas

```python
import httpx
from pydantic import HttpUrl

@Tool(retries=3)
def fetch_api_data(
    endpoint: HttpUrl,
    params: Dict[str, str] = None,
    headers: Dict[str, str] = None
) -> Dict:
    """Busca dados de APIs REST"""
    async with httpx.AsyncClient() as client:
        response = await client.get(
            str(endpoint),
            params=params,
            headers=headers,
            timeout=10.0
        )
        response.raise_for_status()
        return response.json()
```

## 5. Pipeline de Processamento

### Fluxo de Trabalho com Múltiplos Agentes

```python
from pydantic_ai import Pipeline

class AnalysisPipeline(Pipeline):
    def setup(self):
        self.add_stage(
            name="data_collection",
            agent=create_agent(AgentType.DATA_ANALYST),
            input_map={"query": "original_query"}
        )
        self.add_stage(
            name="report_generation",
            agent=create_agent(AgentType.CONTENT_CREATOR),
            input_map={"data": "previous_stage_output"}
        )

    async def run_pipeline(self, query: str):
        results = {}
        results["data"] = await self.stages["data_collection"].run(query)
        results["report"] = await self.stages["report_generation"].run(results["data"])
        return results
```

## 6. Monitoramento e Logging

### Configuração com Logfire

```python
import logfire

logfire.configure(
    token="your-logfire-token",
    project="pydantic-ai-agents",
    additional_packages=["pydantic_ai"]
)

@logfire.instrument("Process Recommendation")
async def process_recommendation(user_query: str, context: Dict):
    agent = create_agent(AgentType.PERSONAL_ASSISTANT)
    return await agent.run(user_query, deps=context)
```

## 7. Padrões Avançados

### Cache de Respostas

```python
from datetime import timedelta
from pydantic_ai.cache import RedisCache

redis_cache = RedisCache(
    host="localhost",
    port=6379,
    ttl=timedelta(hours=1)

agent = Agent(
    model=OpenAI(model="gpt-4"),
    cache=redis_cache,
    cache_key_fn=lambda x: f"agent:{hash(x)}"
)
```

### Circuit Breaker Pattern

```python
from pydantic_ai.failures import CircuitBreaker

breaker = CircuitBreaker(
    failure_threshold=5,
    recovery_timeout=60
)

@breaker
async def sensitive_operation():
    # Operação que pode falhar
    return await agent.run("Consulta crítica")
```

## 8. Exemplo Completo: Sistema de Recomendações

```python
from pydantic_ai import Agent, OpenAI, Tool
from pydantic import BaseModel, HttpUrl
import httpx
import logfire

# Configuração
logfire.configure(project="recommendation-system")

# Modelos
class Product(BaseModel):
    id: str
    name: str
    price: float
    rating: float

class RecommendationResponse(BaseModel):
    recommendations: List[Product]
    reasoning: str
    alternatives: List[Product]

# Ferramentas
@Tool
async def fetch_products(api_url: HttpUrl) -> List[Product]:
    """Busca produtos de API externa"""
    async with httpx.AsyncClient() as client:
        response = await client.get(str(api_url))
        return [Product(**item) for item in response.json()]

# Agente Principal
recommendation_agent = Agent(
    model=OpenAI(model="gpt-4-turbo"),
    system_prompt="""
    Você é um especialista em recomendações de produtos. Analise o histórico do usuário e
    sugira produtos relevantes usando as ferramentas disponíveis. Retorne no formato especificado.
    """,
    result_type=RecommendationResponse,
    tools=[fetch_products],
    retries=3
)

# Execução
@logfire.instrument("Generate Recommendations")
async def get_recommendations(user_id: str):
    products = await fetch_products("https://api.store.com/products")
    context = {"user_id": user_id, "products": products}
    return await recommendation_agent.run(
        f"Recomende produtos para o usuário {user_id}",
        deps=context
    )
```

## Práticas Recomendadas

1. **Segurança**:

   - Valide todas as entradas do usuário
   - Use Pydantic para sanitização de dados
   - Limite escopos de API keys

2. **Performance**:

   - Implemente cache estratégico
   - Use chamadas assíncronas
   - Monitore latências com Logfire

3. **Manutenção**:
   - Versionamento de agentes
   - Testes unitários para ferramentas
   - Documentação automática com pdoc

**Próximos Passos**:

- Implementar RAG com bancos de dados vetoriais
- Adicionar avaliação contínua de qualidade
- Criar painel de monitoramento com Grafana
