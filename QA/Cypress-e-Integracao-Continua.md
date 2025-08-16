# Cypress e Integração Contínua

## Objetivo
- Reforçar conceitos de CI/CD no contexto de qualidade e automação de testes.
- Entender os recursos que o Cypress fornece para essas práticas.
- Compreender o papel do QA nesses processos.

## Conteúdo

### Aula 1: Conceitos de CI/CD no Contexto de Automação

#### 1. Revisando DEVOPS
- **Início**: Por volta de 2007
- **Filosofia**: Une desenvolvimento e operações.
- **Práticas**: Automação, ferramentas e abordagens para acelerar processos que geram valor.
- **Mudança Cultural**: Comunicação frequente, colaboração, empatia e confiança.
- **Práticas Complementares**:
  - DataOps: Soluções para grandes organizações com arquiteturas complexas.
  - ArchOps: Foco na integração de segurança durante o ciclo de vida.
  - DevSecOps: Integração de segurança.
  - QAOps: Garantia da qualidade durante todo o processo de desenvolvimento e implantação.

#### 2. Relação entre DEVOPS e CI/CD
- **CI/CD**: Integração Contínua e Entrega Contínua (e Implantação Contínua).
- **Automação**: Build, testes e merges.
- **Benefícios**:
  - Aceleração do processo de desenvolvimento.
  - Controle de versão confiável.
  - Agilidade em feedbacks.
  - Ciclo de teste rápido.

#### 3. Metodologias Ágeis e DEVOPS
- **Agilidade**: Foco na iteração e colaboração entre equipes.
- **DEVOPS**: Foco na automação e colaboração entre desenvolvimento e operações.

#### 4. QAOps: O Papel do QA
- **Funções e Skills**: Integração de aspectos de qualidade em processos automatizados.
- **Ferramentas**: Checkmarx, linters, style checkers (Sonarqube, Snyk, Blackduck, Veracode).
- **Metodologias**: Testes de fumaça, testes de regressão, paralelismo, escalabilidade.

#### 5. Tendências de Qualidade
- **Tecnologia**:
  - IA, análise e gerenciamento de dados.
  - Novas ferramentas de automação e codificação.
  - Nuvem.
- **Pilares**:
  - Multidisciplinaridade e colaboração.
  - Automação de ponta a ponta.
  - Definição e rastreamento de indicadores de qualidade.

### Aula 2: Universo CI/CD e Cypress Cloud

#### 1. Integração Contínua e Cypress
- **Processo CI**: Repositório central, controle de versão, servidor de integração.
- **Execução do Cypress em CI**:
  - Instalação.
  - Execução.
  - Paralelismo.
  - Uso de bibliotecas como `wait-on` e `start-server-and-test`.

#### 2. Configuração do Cypress Cloud
- **Benefícios**:
  - Visualização e depuração de resultados.
  - Análise e diagnóstico da saúde dos testes.
  - Orquestração estratégica.
- **Configuração**:
  - Criar uma conta.
  - Adicionar `projectId` e `recordKey`.

#### 3. Funcionalidades do Cypress Cloud
- **Test Replay**: Permite "voltar no tempo" no momento do erro.
- **Branch Review**: Melhora o processo de pull requests para códigos de testes automatizados.
- **Flaky Test Management**: Identifica e elimina testes não determinísticos.
- **Analytics e Insights**: Dashboard com gráficos e métricas das execuções.
- **Smart Orchestration**:
  - Paralelização.
  - Load balancing.
  - Priorização de specs.
  - Cancelamento de execução.

## Recursos Adicionais
- [DevOps: O que é e quais as vantagens? - Luan Oliveira]()
- [Pipeline de CI/CD: Aprenda o que é e a sua importância - Xpeducacao]()
- [Agilidade vs. DevOps - Atlassian]()
- [What is QAOps? (With Methodologies) - BrowserStack]()
- [World Quality Report 2022-23 - Sogeti]()
- [O que é Integração Contínua? - School of Net]()
- [Como o V8 Compila o Código JavaScript? - Acervo Lima]()
- [Getting Started with Cypress - Cypress Documentation]()
