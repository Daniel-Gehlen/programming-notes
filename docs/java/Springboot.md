# Spring Boot

## Objetivo Geral

Conhecer o Spring Boot e suas funcionalidades para simplificar a configuração e o desenvolvimento de aplicações Java.

---

## 1: Introdução ao Spring Boot

### O que é Spring Boot?

- **Spring Boot**: Framework baseado no Spring que foca na configuração automática e simplificação do desenvolvimento.
- Enquanto o **Spring Framework** é baseado no padrão de injeção de dependências, o **Spring Boot** foca na configuração automática.

### Antes do Spring Boot

**Desafios com a configuração do projeto:**

- Dependência individual
- Verbosidade
- Incompatibilidade de versões
- Complexidade de gestão
- Configurações complexas e repetitivas

### Spring Boot Starters

- **Starters**: Descritores de dependência que facilitam a inclusão de bibliotecas comuns.

#### Principais Starters

- `spring-boot-starter-data-jpa`: Integração ao banco de dados via JPA (Hibernate).
- `spring-boot-starter-data-mongodb`: Interação com banco de dados MongoDB.
- `spring-boot-starter-web`: Inclusão do container Tomcat para aplicações REST.
- `spring-boot-starter-web-services`: Webservices baseados na arquitetura SOAP.
- `spring-boot-starter-batch`: Implementação de JOBs de processos.
- `spring-boot-starter-test`: Recursos para testes unitários como JUnit.
- `spring-boot-starter-openfeign`: Client HTTP baseado em interfaces.
- `spring-boot-starter-actuator`: Gerenciamento e monitoramento da aplicação.

### Benefícios do Spring Boot

- Coesão
- Versões compatíveis
- Otimização do tempo
- Configuração simples
- Foco no negócio

### Referências

- Diferença entre Spring Framework e Spring Boot
- Spring vs Spring Boot
- Webservices SOAP e REST
- Diferença entre Spring e Spring Boot

---

## 2: Primeiros Passos com Spring Boot

### Criando um Projeto com Initializr

### Importando o projeto Maven no IntelliJ

### Conhecendo a Estrutura Spring Boot

### Bean e CommandLineRunner

- **Beans vs Components**
  - Quem são eles?
  - Quando usar `@Bean`?
  - Quando usar `@Component`?

### Implementar a IoC (Inversão de Controle) e DI (Injeção de Dependência)

- **Singleton ou Prototype?**
  - Quantos irei precisar?
  - Conceito de Scope
  - Configurando objeto Singleton
  - Configurando objetos Prototype

### Properties Value

- Nem tudo é `=`
- O poderoso `application.properties`
- `@Value`
- Default value

### Configuration Properties

- É sério isso?
- O poderoso `application.properties`
- `@ConfigurationProperties` (prefix)

---

## Java Persistence API (JPA)

### Objetivo Geral

Compreender o conceito de ORM e JPA, e aprender como mapear entidades para o banco de dados.

### 2: Conceito de ORM e JPA

#### O que é ORM?

- **Object-Relational Mapping (ORM)**: Técnica para mapear objetos para tabelas relacionais, facilitando a interação com o banco de dados.
- **Uso do ORM**: Mapeamento de objetos para tabelas por meio de bibliotecas ou frameworks.

#### O que é JPA?

- **Java Persistence API (JPA)**: Especificação para operações de persistência de objetos em Java.
- **JPA - Implementações**: Frameworks que implementam a especificação JPA para realizar operações de persistência.

#### Mapeamento na Prática

**Aspectos das Anotações de Mapeamento do JPA:**

- Identificação
- Definição
- Relacionamento
- Herança

- **EntityManager**: Interface que fornece as operações de persistência e controle de entidades.
