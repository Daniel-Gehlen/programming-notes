# Gerenciamento de Dependências e Build com Maven

## Objetivo

Ser capaz de:

- Criar um projeto utilizando a ferramenta Maven.
- Entender os principais conceitos por trás do Maven.
- Gerenciar dependências do seu projeto.
- Configurar plugins e projetos com necessidades específicas.

---

## Percurso

### 1: Definição e Instalação

**Objetivos:**

- Entender o que é o Apache Maven e sua utilidade.
- Compreender como executar a instalação do Maven.

#### Parte 1: O que é Apache Maven?

- Ferramenta para gerenciar build e dependências de um projeto.
- Primeira versão em julho de 2004, mantido pela Apache Software Foundation.
- Endereça como o software foi construído e suas dependências através do **POM (Project Object Model)**.

#### Parte 2: Instalação e Configuração

**Pré-requisitos:**

- JDK instalado (versão 11 recomendada).

**Instalação:**

- Baixar e descompactar o pacote do [site oficial do Apache Maven](https://maven.apache.org/).

**Configuração:**

- **No Windows:** Adicionar no `Path` via Painel de Controle.
- **No Linux:** Adicionar no `PATH`.

---

### 2: Primeiro Projeto e Conceitos

**Objetivos:**

- Entender como criar um projeto usando o Maven.
- Aprender alguns comandos úteis.
- Criar diferentes tipos de projeto.

#### Parte 1: Criando um Projeto via Linha de Comando

```bash
mvn archetype:generate -DgroupId=com.exemplo -DartifactId=meu-projeto -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

#### Parte 2: Comandos que Auxiliam o Dia a Dia

- **Compilar:** `mvn compile`
- **Testar:** `mvn test`
- **Empacotar:** `mvn package`
- **Limpar diretório de trabalho:** `mvn clean`

#### Parte 3: Criando Diferentes Tipos de Projeto

- Utilizar **Maven archetype** para criar projetos com base em templates.

---

### 3: POM, Dependências e Repositórios

**Objetivos:**

- Entender a estrutura do POM e sua função para o Maven.
- Conhecer os tipos de repositórios e como configurá-los.
- Adicionar e gerenciar dependências no projeto.

#### Parte 1: O POM (Project Object Model)

- Estrutura XML fundamental para o Maven.
- Detalha o projeto, como construir o projeto e suas dependências.

#### Parte 2: Repositórios

- **Repositório Remoto:** Maven Central e configuração via `pom.xml` ou `settings.xml`.
- **Repositório Local:** Caching de artefatos na máquina local.

#### Parte 3: Como Adicionar Dependências

- Configuração com `groupId`, `artifactId`, e `version`.
- Exemplos de adição e download de dependências.

---

### 4: Gerenciando Dependências

**Objetivos:**

- Entender os tipos de dependência e como gerenciá-las.
- Compreender transitividade e escopos.

#### Parte 1: Tipos de Dependências

- Dependências Diretas e Transitivas.

#### Parte 2: Transitividade e Escopos

- Escopos: `compile`, `provided`, `runtime`, `test`, `system`, e `import`.

#### Parte 3: Dicas sobre Escopos, Dependências Opcionais e Exclusões

- Utilização de comandos Maven para ver o classpath e gerenciar dependências opcionais e exclusões.

---

### 5: Maven Build Lifecycle

**Objetivos:**

- Compreender os ciclos de vida do Maven e suas fases.

**Ciclos de Vida:**

- **Default Lifecycle:** Composto por 23 fases principais.
- **Clean Lifecycle:** Para limpeza do projeto.
- **Site Lifecycle:** Para criação do site de documentação do projeto.

---

### 6: Projetos Multi-módulos

**Objetivos:**

- Entender como estruturar projetos com múltiplos módulos.

**Para saber mais:**

- [Guia de Projetos Multi-módulos](https://maven.apache.org/guides/mini/guide-multiple-modules.html)

---

### 7: Plugins

**Objetivos:**

- Conhecer os plugins do Maven e como utilizá-los.

**Plugins Comumente Utilizados:**

- `eclipse`, `jacoco`, `ear`, `war`, `compile`, `clean`, `checkstyle`, `javadoc`.

**Uso e Configuração:**

- Comando: `mvn [plugin-name]:[goal-name]`.
- Gerar Javadoc no projeto.

**Para Aprofundar:**

- [Guia Oficial do Maven](https://maven.apache.org/guides/)
- _"Apache Maven 3 Cookbook"_ por Srirangan, 2011, Packt Publishing.
