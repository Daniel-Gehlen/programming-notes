# Monorepo (Monolithic Repository)

Um monorepo, abreviação de "monolithic repository", é um único repositório de controle de versão que armazena o código de múltiplos projetos que podem estar relacionados ou não. Em vez de ter um repositório separado para cada projeto ou componente, todos os projetos são armazenados juntos em um único repositório.

## Características de um Monorepo

- **Código Centralizado**: Todo o código fonte de múltiplos projetos reside em um único repositório.
- **Histórico Compartilhado**: Um histórico de commits compartilhado, facilitando a rastreabilidade e a coordenação entre projetos.
- **Dependências Internas**: Facilita o compartilhamento de bibliotecas e módulos internos entre diferentes projetos sem a necessidade de gerenciar versões e pacotes.
- **Consistência de Ferramentas**: Uso consistente de ferramentas de build, testes e integração contínua (CI/CD) em todos os projetos.

## Vantagens de um Monorepo

- **Facilita a Refatoração e Reuso de Código**: Com todos os projetos no mesmo repositório, é mais fácil mover e refatorar o código compartilhado.
- **Gerenciamento Simplificado de Dependências**: Dependências internas entre projetos são mais fáceis de gerenciar, pois não é necessário versionar e publicar pacotes.
- **Histórico Unificado**: Um histórico unificado facilita a rastreabilidade e a compreensão de como as mudanças afetam diferentes partes do sistema.
- **Coerência entre Projetos**: Configurações, scripts e ferramentas de desenvolvimento são consistentes entre todos os projetos.

## Desvantagens de um Monorepo

- **Escalabilidade**: À medida que o repositório cresce, pode se tornar difícil de gerenciar e escalar, especialmente em termos de tempo de clonagem e espaço em disco.
- **Complexidade de Build**: Pode exigir ferramentas de build sofisticadas para lidar com a compilação e testes de múltiplos projetos interdependentes.
- **Coordenação de Times**: Pode ser mais difícil coordenar times diferentes que trabalham em diferentes partes do repositório, especialmente se não houver processos claros de comunicação e integração.

## Ferramentas e Práticas para Gerenciar um Monorepo

Para gerenciar um monorepo de forma eficiente, várias ferramentas e práticas podem ser adotadas:

### Ferramentas de Build e Gerenciamento de Dependências

- **Bazel**: Uma ferramenta de build que lida bem com grandes bases de código e dependências complexas.
- **Nx**: Um conjunto de extensões para monorepos, especialmente popular no ecossistema JavaScript/TypeScript.
- **Lerna**: Um gerenciador de pacotes para projetos JavaScript, que facilita o gerenciamento de múltiplos pacotes dentro de um monorepo.

### Integração Contínua e Deploy Contínuo (CI/CD)

- **GitHub Actions, GitLab CI/CD, Jenkins**: Configurar pipelines de CI/CD para garantir que os builds e testes sejam executados eficientemente em escala.

### Gerenciamento de Releases

- **semantic-release**: Ajuda a automatizar o versionamento e a publicação de pacotes a partir de um monorepo.

### Divisão de Diretórios

- Organizar o repositório em subdiretórios claramente definidos para cada projeto ou componente, facilitando a navegação e o entendimento da estrutura do repositório.

## Exemplos de Empresas que Usam Monorepos

- **Google**: Um dos maiores exemplos de uso de monorepo, com um repositório que contém a maior parte de seu código.
- **Facebook**: Usa um monorepo para gerenciar o código de seus principais projetos, incluindo o React.
- **Microsoft**: Usa um monorepo para gerenciar o código do Visual Studio Code e outras ferramentas.

## Conclusão

Um monorepo oferece diversas vantagens em termos de consistência, facilidade de refatoração e gerenciamento de dependências, mas também traz desafios em termos de escalabilidade e coordenação. A adoção de ferramentas adequadas e práticas de gerenciamento eficientes pode ajudar a mitigar esses desafios e permitir que os times aproveitem ao máximo os benefícios de um monorepo.

---

# Mani

"Mani" é uma ferramenta de gerenciamento de monorepos projetada para lidar com múltiplos repositórios dentro de um monorepo. Ela facilita a coordenação, sincronização e organização de projetos que compartilham um único repositório. Ao contrário de outras ferramentas que focam em aspectos específicos como builds ou dependências, Mani fornece uma abordagem mais geral para gerenciar o ciclo de vida de projetos em um monorepo.

## O Que é Mani?

Mani é uma ferramenta de linha de comando que ajuda a organizar e gerenciar múltiplos repositórios dentro de um monorepo. Ela fornece comandos para sincronizar, executar scripts e gerenciar projetos, simplificando o fluxo de trabalho para desenvolvedores que trabalham com monorepos.

## Principais Funcionalidades de Mani

- **Gerenciamento de Projetos**: Define e gerencia projetos dentro do monorepo, facilitando a navegação e a execução de comandos específicos para cada projeto.
- **Execução de Comandos**: Permite a execução de comandos em múltiplos projetos simultaneamente, agilizando tarefas comuns como builds, testes e deploys.
- **Sincronização de Repositórios**: Sincroniza repositórios dentro do monorepo, garantindo que todos os projetos estejam atualizados e em um estado consistente.
- **Automação de Fluxos de Trabalho**: Automatiza fluxos de trabalho comuns, como inicialização de novos desenvolvedores, configuração de ambientes e manutenção de dependências.

## Configuração do Mani

A configuração do Mani é geralmente feita através de um arquivo de configuração YAML (`mani.yaml`). Este arquivo define os projetos, suas dependências e os comandos a serem executados.

### Exemplo de Arquivo `mani.yaml`

```yaml
projects:
  projectA:
    path: path/to/projectA
    url: git@github.com:user/projectA.git
  projectB:
    path: path/to/projectB
    url: git@github.com:user/projectB.git

commands:
  sync:
    description: "Sync all projects"
    steps:
      - run: git pull
        projects: ["projectA", "projectB"]
  build:
    description: "Build all projects"
    steps:
      - run: make build
        projects: ["projectA", "projectB"]
```

## Como Usar Mani

1. **Instalar Mani**:

   - Primeiro, você precisa instalar a ferramenta Mani. A instalação pode ser feita via Homebrew (para macOS) ou baixando diretamente do repositório oficial.
     ```bash
     brew install mani
     ```

2. **Inicializar Mani no Repositório**:

   - No diretório raiz do seu monorepo, inicialize o Mani:
     ```bash
     mani init
     ```

3. **Configurar o Arquivo `mani.yaml`**:

   - Edite o arquivo `mani.yaml` para definir seus projetos e comandos.

4. **Executar Comandos com Mani**:
   - Use a CLI do Mani para executar comandos definidos no arquivo de configuração.
     ```bash
     mani sync
     mani build
     ```

## Benefícios de Usar Mani

- **Organização e Navegação Simplificada**: Mani organiza projetos de forma clara, facilitando a navegação e a identificação de dependências.
- **Automação e Eficiência**: Automatiza tarefas repetitivas, reduzindo o tempo gasto em operações manuais e aumentando a eficiência do time de desenvolvimento.
- **Consistência**: Garante que todos os desenvolvedores tenham um ambiente de desenvolvimento consistente e que todos os projetos estejam sincronizados.
- **Flexibilidade**: Permite a definição de comandos personalizados e flexíveis, adaptando-se às necessidades específicas de cada projeto ou equipe.

## Exemplos Práticos

1. **Sincronizar Todos os Projetos**:

   - Para sincronizar todos os projetos definidos no arquivo `mani.yaml`:
     ```bash
     mani sync
     ```

2. **Executar um Comando de Build**:

   - Para executar um comando de build em todos os projetos:
     ```bash
     mani build
     ```

3. **Adicionar um Novo Projeto**:
   - Para adicionar um novo projeto, edite o arquivo `mani.yaml` e adicione as informações do novo projeto:
     ```yaml
     projects:
       projectC:
         path: path/to/projectC
         url: git@github.com:user/projectC.git
     ```

## Conclusão

Mani é uma ferramenta poderosa para gerenciar monorepos, oferecendo uma abordagem unificada para organizar, sincronizar e automatizar tarefas em múltiplos projetos. Com a configuração centralizada e a capacidade de executar comandos em todos os projetos simultaneamente, Mani pode melhorar significativamente a eficiência e a consistência do desenvolvimento em ambientes de monorepos.
