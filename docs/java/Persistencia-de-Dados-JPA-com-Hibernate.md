# Persistência de Dados JPA com Hibernate

## Objetivo

- Entender o que é o **JDBC**.
- Compreender o conceito de **ORM**.
- Conhecer o que é o **JPA**.
- Aprender a utilizar o **JPA** na prática.

---

## O QUE É JDBC?

### **JDBC (Java Database Connectivity)**

- É um conjunto de classes e interfaces (API) escritas em Java que permite o envio de instruções SQL para qualquer banco de dados relacional.

### Função do JDBC

- Facilita a comunicação entre aplicativos Java e bancos de dados relacionais, permitindo a execução de operações de **CRUD** (Create, Read, Update, Delete) diretamente no banco de dados.

---

## O QUE É UM ORM?

### **ORM (Object-Relational Mapping)**

- É uma técnica que mapeia objetos de um aplicativo para tabelas de um banco de dados relacional. Isso permite que os dados sejam manipulados como objetos Java, simplificando a interação com o banco de dados.

### Benefícios do ORM

- Reduz a necessidade de código SQL direto.
- Facilita a manipulação de dados no banco de dados usando conceitos de programação orientada a objetos.

---

## O QUE É O JPA?

### **JPA (Java Persistence API)**

- É uma API padrão da linguagem Java que define uma interface comum para frameworks de persistência de dados.
- A JPA descreve um meio de mapeamento objeto-relacional para objetos Java, padronizando a forma como os dados são persistidos.

### JPA e Hibernate

- **Hibernate**: Tecnologia de ORM pioneira em Java e uma das implementações mais populares da JPA. Foi criada antes do JPA e ajudou a definir o padrão.
- **JPA**: É uma especificação que define como frameworks de ORM devem ser implementados. Hibernate é uma das implementações da JPA, mas outras também existem, como o **EclipseLink**.

### Vantagens de usar JPA e Hibernate

- **Abstração de Banco de Dados**: Permite trabalhar com dados como objetos Java sem se preocupar com a complexidade do SQL.
- **Facilidade de Migração**: Ao seguir as especificações da JPA, a troca de implementações de ORM (como Hibernate para EclipseLink) não requer mudanças significativas no código.

---

## Por que utilizar o Hibernate?

- Mapeia tabelas do banco de dados com classes Java.
- Oferece um pacote de classes úteis que simplifica a interação com o banco de dados.
- Minimiza a necessidade de escrever consultas SQL complexas.
- Permite a migração entre bancos de dados sem alterações no código, desde que as especificações do framework sejam seguidas corretamente.
