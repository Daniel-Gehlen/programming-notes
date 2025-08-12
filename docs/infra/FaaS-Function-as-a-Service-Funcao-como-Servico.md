# FaaS "Function as a Service" (Função como Serviço)

## Definição e Conceitos

FaaS significa "Function as a Service" (Função como Serviço) e é um modelo de computação em nuvem que permite aos desenvolvedores executar pequenas partes de código (funções) sem precisar se preocupar com a infraestrutura subjacente.

### Pontos-Chave:

- **Execução sob demanda**: As funções são executadas apenas quando acionadas por eventos ou solicitações, eliminando a necessidade de servidores sempre ativos.
- **Escalabilidade automática**: A infraestrutura escala automaticamente conforme a demanda.
- **Abstração de infraestrutura**: Os desenvolvedores focam na lógica da aplicação, sem gerenciar servidores, SO ou rede.
- **Pagamento baseado no uso**: Cobrança por invocações e tempo de execução.
- **Integração com outros serviços**: Facilita a conexão com armazenamento, bancos de dados e mensageria.

### Exemplos de Plataformas:

- AWS Lambda (Amazon)
- Azure Functions (Microsoft)
- Google Cloud Functions (Google)
- IBM Cloud Functions (IBM)

---

## Mapeamento de Banco de Dados para FaaS

### Considerações:

- **Tempo de inicialização**: Bibliotecas devem estabelecer conexões rapidamente.
- **Uso de recursos**: Eficiência no gerenciamento de conexões.
- **Compatibilidade**: Verificar suporte para a plataforma FaaS utilizada.
- **Concorrência**: Lidar com operações concorrentes adequadamente.

### Bibliotecas Populares:

- **Sequelize (Node.js)**: ORM para bancos SQL.
- **SQLAlchemy (Python)**: Flexível para bancos relacionais.
- **Entity Framework Core (.NET)**: Ideal para desenvolvedores .NET.
- **Mongoose (Node.js para MongoDB)**: Para bancos NoSQL.

---

## MVCC (Multi-Version Concurrency Control)

### Funcionamento:

- **Versões de linhas**: Atualizações criam novas versões dos dados.
- **Controle de versões**: Transações veem uma visão consistente dos dados.
- **Isolamento**: Evita leituras sujas e escritas fantasma.

### Vantagens:

- Menos bloqueios.
- Alto isolamento entre transações.
- Leituras consistentes.

### SGBDs com MVCC:

- PostgreSQL
- MySQL (InnoDB)
- Oracle Database
- SQLite

---

## Desnormalização em Bancos de Dados Relacionais

### Benefícios:

- Melhoria no desempenho de consultas.
- Redução de complexidade.
- Menos overhead de joins.

### Técnicas:

- Incorporação de dados.
- Campos compostos.
- Tabelas de sumarização.

### Considerações:

- Redundância controlada.
- Impacto nas atualizações.
- Custo de armazenamento.

---

## Materialized Views (Visões Materializadas)

### Funcionamento:

- Armazenam resultados de consultas complexas fisicamente.
- Atualizadas periodicamente.

### Benefícios:

- Melhoria no desempenho de consultas.
- Redução de carga de processamento.
- Suporte a relatórios e análises.

### Exemplos de Implementação:

- Oracle
- PostgreSQL
- SQL Server (Indexed Views)

---

## Quando Dados Precisam Ser Normalizados?

### Caso de Dados Estáticos:

- Redundância não é crítica.
- Facilidade de manutenção irrelevante.
- Desnormalização pode ser vantajosa.

### Quando Normalizar:

- Integração com outros sistemas.
- Padrões de design.
- Escalabilidade futura.

---

## Entendendo o Cache Miss

### Tipos:

- L1, L2, Cache Miss de Memória Principal.

### Causas:

- Primeiro acesso.
- Políticas de substituição.
- Prefetching ineficiente.

### Impacto:

- Aumento no tempo de acesso.
- Redução do desempenho.

### Estratégias de Mitigação:

- Políticas de substituição eficientes.
- Aumento do tamanho do cache.
- Prefetching inteligente.

---

## RabbitMQ

### Funcionalidades:

- Fila de mensagens.
- Protocolo AMQP.
- Modelos de mensagens (ponto a ponto, pub/sub).
- Durabilidade e persistência.

### Casos de Uso:

- Integração de sistemas.
- Processamento em segundo plano.
- Event Sourcing e CQRS.

### Componentes:

- Producer
- Consumer
- Exchange
- Queue
- Binding

### Mitigação de Timeouts:

- Configuração adequada de timeout.
- Reconexão automática.
- Heartbeats.
- Monitoramento proativo.

---

## Full Text Search (FTS)

### Funcionalidades:

- Tokenização.
- Listas invertidas.
- Operadores lógicos (AND, OR, NOT).
- Ranking por relevância.

### Implementação:

- **MySQL**: Índices full-text.
- **PostgreSQL**: Módulo `pg_trgm`.
- **Elasticsearch**: Busca distribuída.

### Casos de Uso:

- Motores de busca.
- Análise de dados não estruturados.
- Sistemas de suporte a decisão.

---

## Elasticsearch

### Características:

- Indexação e busca de texto completo.
- Distribuído e altamente disponível.
- Documentos JSON.
- API RESTful.

### Casos de Uso:

- Busca em tempo real.
- Análise de logs.
- Recomendação de produtos.

### Exemplo de Consulta:

```json
GET /articles/_search
{
  "query": {
    "match": {
      "title": "elastic"
    }
  }
}
```

---

## AWS Aurora, RDS e Google Cloud SQL

### Comparação:

| **Serviço**          | **Performance** | **Compatibilidade**     | **Escalabilidade**         |
| -------------------- | --------------- | ----------------------- | -------------------------- |
| **AWS Aurora**       | Alta (5x MySQL) | MySQL, PostgreSQL       | 15 réplicas de leitura     |
| **Amazon RDS**       | Variável        | MySQL, PostgreSQL, etc. | Escala vertical/horizontal |
| **Google Cloud SQL** | Variável        | MySQL, PostgreSQL       | Escala vertical/horizontal |

---

## Google Cloud Functions

### Características:

- Serverless.
- Acionado por eventos.
- Suporte a múltiplas linguagens.
- Escalabilidade automática.

### Casos de Uso:

- Processamento de eventos.
- Webhooks e APIs.
- Integração de serviços.

### Exemplo (Node.js):

```javascript
exports.processarArquivo = (event, context) => {
  const file = event;
  console.log(`Arquivo ${file.name} recebido no bucket ${file.bucket}`);
  return "Processamento concluído!";
};
```

---

## Serviços da Cloudflare

### Funcionalidades:

- CDN (Content Delivery Network).
- WAF (Firewall de Aplicação Web).
- Proteção contra DDoS.
- DNS rápido e seguro.

### Benefícios:

- Melhoria de performance.
- Segurança avançada.
- Disponibilidade global.

---

## SLA (Service Level Agreement)

### Componentes:

- Objetivos de nível de serviço.
- Responsabilidades das partes.
- Compensação por não cumprimento.
- Métricas de monitoramento.

### Exemplo de Métricas:

- Disponibilidade: 99.9% uptime.
- Tempo de resposta: <1 hora para suporte.

---

## Walled Garden (Jardim Murado)

### Características:

- Controle centralizado.
- Limitações de acesso.
- Exemplos: Apple App Store, Facebook.

### Considerações Éticas:

- Monopólio e concorrência.
- Privacidade e proteção de dados.

---

## Trade-Off Entre Propriedade e Conveniência

### Propriedade:

- Controle total.
- Privacidade e segurança.
- Independência.

### Conveniência:

- Facilidade de uso.
- Integração.
- Atualizações automáticas.

### Exemplos:

- Ecossistemas digitais (Apple, Google).
- Serviços de streaming.
