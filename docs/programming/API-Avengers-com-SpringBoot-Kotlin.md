# API Avengers com SpringBoot + Kotlin

## Conceitos

### Estilo Arquitetural REST

**REST**: Representational State Transfer; estilo arquitetural apresentado por Roy Fielding. É interoperável e agnóstico a linguagem ou tecnologia, facilitando a integração entre sistemas de diferentes stacks tecnológicas.

#### Constraints do REST

- **Interface Uniforme**: Baseado em recursos, onde o cliente se comunica com o servidor.
- **Cliente-Servidor**: Cliente e servidor são desenvolvidos separadamente e são independentes.
- **Sem Estado**: O servidor não guarda estado entre as requisições. Informações necessárias devem ser incluídas a cada requisição.
- **Sistema Em Camadas**: Permite distribuição de recursos, como separar API, armazenamento de dados e autenticação em servidores distintos.
- **Cache**: Permite armazenar respostas para reduzir a necessidade de comunicação com o servidor. Pode ser gerenciado client-side ou server-side.
- **Código Sobre Demanda (Opcional)**: Possibilidade de retornar componentes executáveis via API.

#### Resource Naming Guide

Estratégia para expor recursos com base em estrutura de nomes e parâmetros.

#### Caching

**Elementos**: Tempo de expiração, Cache-Control, E-tag, Last Modified.

#### Versionamento

Permite a evolução da API sem quebra de contratos:

- **URI**: Exemplo: `http://api.example.com/v1`
- **Header Customizado**: `Accept-version: v1`
- **Content Negotiation**: `Accept: application/vnd.example.v1+json`

#### Verbos HTTP

`GET`, `POST`, `PUT`, `PATCH`, `DELETE`

#### Códigos HTTP

- `1xx` - Informativo
- `2xx` - Sucesso
- `3xx` - Redirecionamento
- `4xx` - Erro do cliente
- `5xx` - Erro do servidor

#### Idempotência

**Idempotente**: Requisição cujo efeito é o mesmo independentemente do número de execuções. Exemplo: `GET`, `PUT`, `DELETE`. `POST` não é idempotente.

#### N+1 em REST APIs

Problemas e estratégias para evitar consultas N+1 em APIs RESTful.

#### API First

**Conceito**: Desenvolver APIs primeiro, definindo contratos antes da implementação.
**Referências**: `Swagger`, `Swagger Editor`

---

## Arquitetura e Implementação

### Arquitetura Hexagonal

- **Application Layer**: Configurações, Controllers, DTOs, Validações.
- **Domain Layer**: Entidades, Interfaces, Services.
- **Resource Layer**: Repositórios Spring Data, Proxies.
- **Testes**: `Spring Initializr`

### Clean Architecture

**Objetivo**: Organizar o código para encapsular a lógica de negócios, mantendo-a independente das interfaces e tecnologias utilizadas.
**Vantagens**: Independência da UI, da stack tecnológica e melhor testabilidade e manutenção.
**Referência**: "Clean Architecture" por Robert C. Martin.

### Ports and Adapters

- **Primary / Driving Adapter**: Interfaces que recebem inputs.
- **Secondary / Driven Adapter**: Interfaces que expõem outputs.

---

## Sistema de Gerenciamento de Banco de Dados

### Conceitos de Banco de Dados

- **ACID Transactions**: Garantias de Atomicidade, Consistência, Isolamento e Durabilidade.
- **SQL vs NoSQL**: Comparação entre bancos de dados relacionais e não relacionais.
- **NewSQL**: Combina vantagens de SQL e NoSQL.

---

## Ferramentas

### Postman

Ferramenta para testar APIs. Utiliza collections para organizar requisições.

### Dockerização e Heroku

- **Docker**: Criação de imagens e configuração com `docker-compose`.
- **Heroku**: Automatização do pipeline de deploy e integração com GitHub.
