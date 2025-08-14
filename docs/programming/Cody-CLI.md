# Cody CLI

O **Cody CLI** é uma ferramenta experimental do Sourcegraph que permite usar o assistente de código Cody diretamente no terminal. Criado para desenvolvedores, o Cody CLI expande as funcionalidades típicas de autocomplete e chat de IA além do editor de código (como VS Code), fornecendo uma interface de linha de comando para consultas sobre o código e melhorias automáticas. Ele foi projetado principalmente para os usuários do Cody Enterprise, permitindo que eles façam perguntas sobre seu código enquanto utilizam o contexto de repositórios específicos de maneira similar ao que fariam dentro do editor integrado, mas sem a necessidade de abrir o IDE.

---

## Funcionalidades

- **Explicação de Código**: Peça ao Cody que explique como certas funções estão implementadas ou como um processo é gerenciado em um código específico.
- **Ambientes sem Interface Gráfica**: Mais praticidade em sistemas automatizados de análise de código ou servidores de desenvolvimento sem interface gráfica.

---

## Versões Disponíveis

- **Cody Free**: Versão gratuita com acesso básico a funcionalidades como sugestões de código e autocompletar, voltada para desenvolvedores individuais ou iniciantes.
- **Cody Pro e Cody Enterprise**: Versões pagas com funcionalidades avançadas de contexto, como uso completo de repositórios remotos e integração com múltiplos repositórios, projetadas para desenvolvedores profissionais e equipes.

---

## Instalação e Configuração

### Pré-requisitos

- Node.js instalado.

### Passos para Instalação

1. **Instalação do Cody CLI**:

   ```bash
   npm install -g @sourcegraph/cody
   ```

2. **Configuração das Variáveis de Ambiente**:
   - `SRC_ENDPOINT`: Define o URL do Sourcegraph (ex.: `https://sourcegraph.com`).
   - `SRC_ACCESS_TOKEN`: Crie este token em Sourcegraph, no menu de configurações de usuário.

### Uso Básico

- **Iniciar uma Interação de Chat**:
  ```bash
  cody chat -m 'Explique como usar fetch com AbortController'
  ```

---

## Recursos Adicionais

- **Documentação Completa**: Consulte o [repositório no GitHub](https://github.com/sourcegraph/cody) ou o [site da Sourcegraph](https://sourcegraph.com) para mais informações sobre o Cody CLI e recursos avançados.
