# Primeiros Passos Com Cypress

## Objetivo
Fornecer a base necessária para criar seus primeiros testes automatizados usando o Cypress. Serão abordados o surgimento, vantagens, desvantagens e aspectos diferenciais em relação ao Selenium, além de conceitos iniciais para quem está começando a entender esse framework em crescimento no mercado.

## Pré-Requisitos
- Fundamentos de qualidade de software
- Fundamentos de automação de testes
- Git
- Conhecimentos básicos em JavaScript
- Conhecimentos básicos em CLI

## Percurso

### Aula 1: O que é Cypress?

#### Objetivos:
- Contextualização sobre o surgimento do Cypress.
- Instalação e configuração.
- Abertura e execução de testes.
- Conhecimento do projeto a ser automatizado.

#### Etapa 1: Surgimento
- **O que é Cypress?**
  - Ferramenta para criação, configuração, execução e depuração de testes automatizados.
  - Executa diretamente no browser, permitindo acesso a ferramentas e ações do navegador.
- **Como surgiu?**
  - Surgiu para resolver limitações do Selenium e atender melhor às necessidades de QA e desenvolvedores.

- **Relembrando o Selenium**
  - **Limitações Gerais**:
    - Configurações complexas.
    - Pré-condições difíceis.
    - Sem geração automática de relatórios.
    - Problemas com espera de elementos.
    - Foco em testes E2E.

- **Missão do Cypress**:
  - Ecossistema open-source.
  - Aumento de produtividade.
  - Melhor experiência com testes.
  - Boa documentação.
  - Integração entre desenvolvedores e QA.

- **Público-Alvo**:
  - Desenvolvedores, principalmente front-end.
  - Engenheiros de automação/QA.

- **Níveis de Testes**:
  - End-to-end (E2E)
  - Componentes
  - Integração/API
  - Unidade

- **Funcionalidades**:
  - Time Travel
  - Depuração
  - Espera automática
  - Spies, Stubs and Clocks
  - Controle de tráfego de rede
  - Resultados consistentes
  - Screenshots/Vídeos
  - Cross-browsing
  - Orquestração inteligente
  - Detecção de testes não-confiáveis

#### Etapa 2: Instalação e Configuração
- **Requisitos**:
  - macOS 10.9+, Linux Ubuntu 12.04+, Windows 7+.
  - Node.js (14/16/18).
  - 4GB de RAM.

- **Instalação**:
  - Crie seu projeto: `npm init`
  - Acesse a pasta do projeto.
  - Instale o Cypress: `npm install cypress --save-dev`

- **Abrindo o App**:
  - Use o comando `npx cypress open` para abrir o Cypress.

#### Etapa 3: Executando Meu Primeiro Teste
- **Launchpad**:
  - Guia para decisões e configurações.
  - Escolha do tipo de teste (E2E, Component).
  - Configurações rápidas.
  - Seleção de browser e testes para execução.

- **O que Notar na UI de Execução**:
  - Menu para trocar de browser.
  - Acesso à documentação.
  - Página de Specs e Configuração.
  - Página 'Runs' e 'Debug' para integração com Cypress Cloud.

#### Etapa 4: Conhecendo a Demo para Automação
- **Processo de Acompanhamento**:
  - Utilize o site Automation Exercise para aprender.
  - Acesse a documentação do Cypress e o repositório do curso no GitHub para referência e código.

### Aula 2: Conceitos Iniciais para Automação E2E com Cypress

#### Objetivos:
- Acessar e interagir com elementos e requisições de uma página.
- Fazer validações/asserções.
- Entender o encadeamento de comandos.
- Interagir via linha de comando.

#### Etapa 1: Acessando e Interagindo com Elementos da Página
- **Métodos Úteis**:
  - `get`, `find`, `contains`, `type`, `click`.

- **Melhores Práticas**:
  - Uso de seletores `data-*`.
  - Evitar seletores baseados em texto.

- **Testes de API**:
  - Métodos `intercept` e `request` para validações.

#### Etapa 2: Entendendo Validações e Asserções
- **O que são Asserções?**
  - Perguntas sobre atributos ou estados dos elementos.

- **Modelos de Asserções**:
  - Bibliotecas: Chai, Chai-Sinon, Chain-jQuery.
  - Exemplo: `cy.get('button').should('have.class', 'active')`.

- **Auxiliares na Validação**:
  - `aliases` e `.then()` para compartilhar contextos e fixtures.

#### Etapa 3: Entendendo Encadeamento de Comandos
- **O que é Encadeamento?**
  - Uso aninhado de métodos, passagem de valores entre comandos.

- **Considerações**:
  - Comandos começam com `cy.[command]`.
  - Uso de `.then()` para acessar diretamente o sujeito repassado.

#### Etapa 4: Cypress CLI
- **Abrindo o App**:
  - Comando `npx cypress open`.

- **Executando Sem UI**:
  - Comando para execução via prompt: `npx cypress run`.
  - Argumentos comuns: `--browser`, `--config-file`, `--env`.

- **Outros Comandos Úteis**:
  - `cypress info`, `cypress verify`, `cypress version`.

#### Etapa 5: Faça Você Mesmo!
- **Desafio**:
  - Crie pelo menos 6 casos de teste.
  - Use no mínimo 8 comandos.
  - Faça testes de API com dois endpoints.
  - Utilize hooks `before` ou `beforeEach` para pré-condições.
