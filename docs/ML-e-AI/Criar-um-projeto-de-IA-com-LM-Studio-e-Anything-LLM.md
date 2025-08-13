# Guia Completo para Criar um Projeto de IA com LM Studio e Anything LLM

## Visão Geral do Projeto

Este tutorial ensina a criar um assistente de IA personalizado usando:

- **LM Studio**: Para executar modelos de linguagem localmente
- **Anything LLM**: Para treinar a IA com seus próprios dados

## Pré-requisitos

- Computador com pelo menos 16GB RAM (recomendado 32GB para modelos maiores)
- 20GB de espaço livre em disco
- Conexão estável com a internet para download dos modelos

## Passo 1: Configuração do LM Studio

### Instalação

1. Acesse [https://lmstudio.ai/](https://lmstudio.ai/)
2. Baixe a versão para seu sistema operacional
3. Execute o instalador

### Carregando Modelos

1. Na interface do LM Studio:
   - Pesquise por "Mistral 7B" ou "Llama 3"
   - Selecione o formato GGUF (otimizado para execução local)
   - Baixe o modelo (tamanho variando de 4GB a 8GB)

### Configuração do Servidor

1. Acesse a aba "Local Server"
2. Ative o servidor com as configurações:
   - Porta: 1234 (padrão)
   - Contexto: 2048 tokens
3. Anote o endereço: `http://localhost:1234`

## Passo 2: Instalação do Anything LLM

### Download e Instalação

1. Acesse [https://useanything.com/](https://useanything.com/)
2. Baixe a versão desktop
3. Siga o assistente de instalação

### Configuração Inicial

1. Selecione "LM Studio" como provedor LLM
2. Insira a URL do servidor: `http://localhost:1234`
3. Escolha o banco de dados vetorial:
   - LanceDB (recomendado para iniciantes)
   - ChromaDB (para projetos avançados)

## Passo 3: Preparação dos Dados

### Formatos Aceitos

- PDF, DOCX, TXT, CSV
- Transcrições de YouTube
- Páginas web (via URL)

### Processo de Upload

1. Crie um novo Workspace
2. Arraste os arquivos para a interface
3. Configure o processamento:
   - Divisão de chunks: 512 tokens
   - Sobreposição: 128 tokens

## Passo 4: Personalização do Assistente

### Configuração do Prompt

```markdown
Você é um assistente especializado em [SEU TÓPICO]. Responda em português brasileiro com linguagem clara e técnica quando necessário. Baseie suas respostas estritamente nos documentos fornecidos. Se não souber a resposta, diga "Não encontrei essa informação em meus documentos".
```

### Modelos de Embedding Recomendados

- `nomic-embed-text` (para português)
- `all-MiniLM-L6-v2` (multilíngue)

## Passo 5: Integração e Uso

### Via Interface Web

1. Acesse o chat integrado
2. Teste com perguntas sobre seus documentos

### Via API (Exemplo Python)

```python
import requests

url = "http://localhost:3001/api/v1/workspace/[WORKSPACE_ID]/chat"
headers = {
    "Authorization": "Bearer [SUA_CHAVE_API]",
    "Content-Type": "application/json"
}
data = {
    "message": "Explique os conceitos principais do documento",
    "mode": "query"
}

response = requests.post(url, json=data, headers=headers)
print(response.json()["textResponse"])
```

## Otimização e Dicas

### Para Melhor Desempenho

1. Use modelos quantizados (GGUF) para economizar memória
2. Limite o contexto a 2048 tokens se tiver pouca RAM
3. Pré-processe documentos grandes em partes menores

### Solução de Problemas Comuns

- **Erros de memória**: Reduza o tamanho do modelo
- **Respostas imprecisas**: Ajuste o prompt ou adicione mais documentos
- **Lentidão**: Use GPUs se disponível (via CUDA)

## Próximos Passos Avançados

1. Experimente com modelos maiores (Llama 3 70B)
2. Integre com ferramentas como Obsidian ou Notion
3. Implemente RAG (Retrieval-Augmented Generation)

## Considerações Finais

- **Privacidade**: Todos os dados permanecem em sua máquina
- **Custo**: Zero custo após a instalação
- **Personalização**: Adaptável a qualquer domínio de conhecimento

**Tempo estimado para implementação**: 1-2 horas para configuração inicial
