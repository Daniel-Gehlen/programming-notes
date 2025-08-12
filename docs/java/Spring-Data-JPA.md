# Conhecendo o Projeto Spring Data JPA com Java na Prática

## Objetivo

Conhecer os principais conceitos de mapeamento objeto-relacional (ORM) usando o Spring Data JPA. Uma API RESTful será desenvolvida com ênfase na modelagem de suas entidades, no contexto de uma academia de ginástica.

---

## Pré-requisitos

- Fundamentos do **Spring Boot**
- Noções de **SQL**

---

## Tecnologias Utilizadas

- **IDE**: IntelliJ
- **Linguagem**: Java 11
- **Gerenciador de Dependências**: Maven
- **Frameworks**:
  - Spring Web
  - Spring Data JPA
  - Hibernate Validator
  - Lombok
- **Banco de Dados**: PostgreSQL Driver
- **Ferramenta de Testes**: Postman

---

## Percurso do Projeto

### 1. Apresentação do Projeto

- Introdução aos objetivos e escopo do projeto.

### 2. Construindo as Operações de CRUD

- Implementação das operações básicas de **criação, leitura, atualização e exclusão**.

### 3. Consultas Avançadas

- Desenvolvimento de consultas complexas usando o **Spring Data JPA**.

---

## Estrutura do Projeto

### Diagrama ER BD

- Modelagem do banco de dados para a academia de ginástica.

### Fluxo Back-end

1. **Client**: Interface de consumo da API.
2. **Controller**: Camada de controle para receber e responder requisições HTTP.
3. **Service**: Lógica de negócio da aplicação.
4. **Repository**: Camada de acesso a dados com Spring Data JPA.
5. **PostgreSQL**: Banco de dados relacional.

---

## Recursos Adicionais

Para saber mais sobre:

- [Trabalhando com banco de dados utilizando JDBC e JPA](https://spring.io/guides/gs/accessing-data-jpa/)
- [Conceitos e melhores práticas com bancos de dados PostgreSQL](https://www.postgresql.org/docs/)
- [JPA com Hibernate](https://hibernate.org/orm/documentation/)
