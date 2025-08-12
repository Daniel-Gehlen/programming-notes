# Contextualizando o Desenvolvimento Web com Spring Boot 3 e Kotlin

## Objetivo Geral

Explorar ferramentas e conceitos importantes para o desenvolvimento de uma aplicação web, especificamente uma REST API usando Spring Boot e Kotlin.

---

## Pré-Requisitos

- **IDE**: IntelliJ Community (para desenvolvimento Kotlin)
- **JDK**: 17+
- **Kotlin**: 1.7.22
- **Conhecimentos**:
  - Sintaxe básica de Kotlin
  - Programação Orientada a Objetos (POO)

---

## Percurso

### Parte 1: Entendendo a Arquitetura REST

#### **O que é API?**

- **API (Application Programming Interface)**: Contrato de serviço entre aplicações, definindo como se comunicam via solicitações e respostas.

#### **Como as APIs Funcionam?**

- **APIs SOAP**: Troca de mensagens usando XML.
- **APIs RPC**: Cliente executa funções no servidor e recebe saídas.
- **APIs WebSocket**: Comunicação bidirecional eficiente.
- **APIs REST**: Troca de dados via HTTP (CRUD) com ausência de estado.

#### **JSON**

- Formato leve para troca de dados, amplamente usado em APIs RESTful.

**Referências:**

- [Introdução ao JSON](https://www.json.org/json-pt.html)
- [Design de APIs RESTful (Melhores Práticas)](https://restfulapi.net/)

---

### Parte 2: Overview do Spring Framework

#### **O que é o Spring Framework?**

- Framework Java que simplifica o desenvolvimento com **IoC (Inversão de Controle)** e **DI (Injeção de Dependência)**.

#### **Spring Boot**

- Framework open source que acelera o desenvolvimento com configuração mínima e funcionalidades prontas.

#### **Spring Boot Starters**

- Dependências que agrupam outras para propósitos específicos (ex: `spring-boot-starter-test` para testes).

#### **Spring Initializr**

- Ferramenta para criar projetos Spring Boot de forma rápida.

**Referências:**

- [Introduction to Spring Framework](https://spring.io/guides/gs/spring-boot/)
- [Spring Boot: Como começar](https://start.spring.io/)

---

### Parte 3: Arquiteturas de Três Camadas

#### **Arquitetura em Três Camadas**

- **Apresentação**: Interface com o usuário.
- **Negócio**: Lógica da aplicação.
- **Dados**: Acesso a banco de dados.

#### **Configuração em Spring Boot**

- Arquivos: `application.properties` ou `application.yml`.

**Referências:**

- [Arquitetura de Três Camadas](https://pt.wikipedia.org/wiki/Arquitetura_de_tr%C3%AAs_camadas)
- [Common Application Properties](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html)

---

**Recursos Adicionais:**

- [Spring Initializr](https://start.spring.io/)
- [Documentação Oficial Spring Boot](https://spring.io/projects/spring-boot)

```

**Destaques:**
- Kotlin + Spring Boot 3: Combinação moderna para APIs RESTful eficientes.
- Arquitetura em camadas: Organização clara e manutenção simplificada.
- Configuração simplificada: Spring Boot abstrai complexidades.

*"Menos configuração, mais código funcional!"* 🚀
```
