# Sistema para Eleição Usando Quarkus Framework

## Orientações Gerais

### Planejamento do Escopo
**Definição do Escopo:**
- Candidatos são listados, cadastrados e editados
- Todos os candidatos registrados participam de uma eleição quando iniciada
- Candidatos recebem votos de eleitores
- Resultado disponível em tempo real

**Requisitos não funcionais:**
- Confiabilidade
- Disponibilidade
- Interoperabilidade
- Escalabilidade

---

## Proposta Técnica

1. **Docker:**
   - Plataforma de virtualização de contêineres
   - Permite empacotar e distribuir aplicativos em ambientes isolados
   - Facilita a implantação em qualquer ambiente

2. **Docker Compose:**
   - Define e executa aplicativos multi-contêiner
   - Gerencia aplicativos compostos por vários serviços

3. **Traefik:**
   - Roteamento de tráfego e balanceamento de carga
   - Atua como proxy reverso em ambientes de contêineres

4. **MariaDB:**
   - Sistema de gerenciamento de banco de dados relacional
   - Oferece transações ACID e replicação

5. **Redis:**
   - Armazenamento chave-valor em memória
   - Usado como banco de dados, cache e broker de mensagens

6. **Observabilidade:**
   - Graylog: Gerenciamento de logs em tempo real
   - OpenSearch: Busca e análise de dados
   - MongoDB: Banco de dados NoSQL
   - Jaeger Tracing: Rastreamento distribuído

7. **Linguagem:**
   - Java (orientada a objetos)
   - JDK (Java Development Kit)

8. **Quarkus Framework:**
   - Foco em eficiência e inicialização rápida
   - Suporte para GraalVM e Kubernetes

9. **Java Native Image:**
   - Cria executáveis nativos
   - Reduz tempo de inicialização e consumo de memória

10. **Testes:**
    - JUnit: Testes de unidade
    - Testcontainers: Testes de integração com Docker

11. **ORM:**
    - Hibernate: Mapeamento objeto-relacional

12. **Migração:**
    - Flyway: Gerenciamento de esquema de banco de dados

---

## Desenvolvimento

### Gerenciamento de Candidatos - Serviço
**Conceitos:**
- Domain Model
- Java Record
- Test Driven Development
- Service Layer
- Dependency Injection
- Repository Pattern

### Gerenciamento de Candidatos - Repositório
**Conceitos:**
- Flyway Migrations
- Testcontainers
- Hibernate ORM

### API JSON Rest Services
**Conceitos:**
- REST JSON
- OpenAPI/Swagger UI
- Integration Testing

### Mensageria com Redis PUBSUB
**Alternativas:**
- RabbitMQ
- SNS/SQS
- Kafka

### Programação Reativa
**Bibliotecas:**
- ReactiveX (RxJava)
- Project Reactor
- Vert.X
- Mutiny

---

## Demonstração e Desafios

### Desafios para Developers:
1. Adicionar métricas com Grafana
2. Implementar CRUD completo para candidatos
3. Migrar para REST Data with Panache
4. Tornar aplicações mais reativas

### Desafios para DevOps:
1. Configurar réplica de leitura no MariaDB
2. Planejar migração para Kubernetes

### Desafios para DevSecOps:
1. Modelagem de Ameaças para DDoS

### Outros Desafios:
- Documentar ADRs para prevenção de fraudes
- Modelar análise preditiva de resultados
- Criar roadmap de funcionalidades

---

## Leitura Recomendada
- Domain Driven Design
- Java Records
- Test Driven Development
- Quarkus Reactive
- Architectural Decision Records
