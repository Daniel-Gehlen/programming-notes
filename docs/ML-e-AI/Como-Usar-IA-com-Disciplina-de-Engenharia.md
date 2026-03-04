# Como Usar IA com Disciplina de Engenharia

## Introdução: A Surpresa Sobre IA

Recentemente, uma live do canal [Mano Deyvin](https://www.youtube.com/watch?v=cWY7iBafw7I) sobre desenvolvimento de software gerou grande repercussão. Muitas pessoas ficaram surpresas ao descobrir que alguém, Akita on Rails, conhecido por ser crítico em relação à inteligência artificial na verdade não odeia IA — o que Akita realmente critica é a mediocridade que tem sido vendida como "programação com IA".

O que parecia ser uma postura contra tecnologias de IA revelou-se, na verdade, uma defesa do uso disciplinado e consciente dessas ferramentas. O método apresentado propõe algo completamente diferente do chamado "vibe coding" — aquela prática de simplesmente pedir para a IA gerar código e aceitar tudo sem questionar.

---

Mano Devin desenhou o desafio de 7 dias criado por Akita: a seguir a explicação do passo a passo desse método de uso da IA no desenvolvimento.

## Capítulo 1: A Base de Tudo — Dois Tipos de Projeto

Antes de entender como usar IA de forma eficiente, é preciso compreender um conceito fundamental: você precisa separar seus projetos em duas categorias completamente diferentes.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    SEUS PROJETOS                        │
│                                                         │
├─────────────────────────┬───────────────────────────────┤
│                         │                               │
│  PROJETOS PARA GANHAR   │    PROJETOS PARA APRENDER    │
│        DINHEIRO         │                               │
│                         │                               │
│  • Trabalho formal      │  • Projetos pessoais         │
│  • Clientes pagando      │  • Experimentos              │
│  • Sustento financeiro   │  • Estudos                   │
│                         │                               │
│  Prioridade:            │  Prioridade:                  │
│  Estabilidade e         │  Aprendizado e                │
│  Entrega                │  Inovação                     │
│                         │                               │
└─────────────────────────┴───────────────────────────────┘
```

### Projetos para Ganhar Dinheiro (Build to Earn)

São aqueles que garantem seu sustento:

- Seu trabalho formal
- Projetos para clientes
- Sistemas em produção que geram receita

**Característica principal:** O aprendizado aqui é consequência, não objetivo. Você não deve arriscar tecnologias experimentais ou abordagens não testadas.

### Projetos para Aprender (Build to Learn)

São seus laboratórios particulares:

- Projetos paralelos sem compromisso financeiro
- Experimentos com novas tecnologias
- Ambiente seguro para testar abordagens diferentes

**Característica principal:** O objetivo é exclusivamente aprender. Não espere ganhar dinheiro com isso — a recompensa é o conhecimento adquirido.

### O Erro Comum

Muitos desenvolvedores cometem um equívoco: tentam usar projetos profissionais como campo de experimentação. Isso resulta em:

- Introdução de complexidade desnecessária
- Tecnologias imaturas em ambiente crítico
- Atrasos por curva de aprendizado
- Dívida técnica precoce

Da mesma forma, tentar ganhar dinheiro com projetos de aprendizado desvia o foco do que realmente importa: absorver conhecimento sem pressão por resultados financeiros.

---

## Capítulo 2: O Que NÃO É Vibe Coding

Antes de apresentar o método disciplinado, é importante esclarecer o conceito de "vibe coding" — a prática que se quer evitar.

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                    VIBE CODING                      │
│                                                     │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐        │
│  │ Abrir   │───>│ Pedir   │───>│ Aceitar │        │
│  │ agente  │    │ recurso │    │ cegamente│        │
│  │ de IA   │    │ completo│    │         │        │
│  └─────────┘    └─────────┘    └────┬────┘        │
│                                      │             │
│                                      ▼             │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐        │
│  │ Descobrir│<───│ Colocar │<───│ Ignorar │        │
│  │ problemas│    │ em      │    │ o código│        │
│  │ em prod  │    │ produção│    │ gerado  │        │
│  └─────────┘    └─────────┘    └─────────┘        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Características do vibe coding:**

- Prompt único para criar sistemas completos
- Aceitação do código sem leitura ou compreensão
- Ausência de testes automatizados
- Descoberta de erros apenas em produção
- Intuição como guia principal

O método disciplinado propõe exatamente o oposto: mais estrutura, mais planejamento e mais verificação.

---

## Capítulo 3: O Mito do One-Shot Prompt

Um dos conceitos mais importantes é desmistificar a ideia de que é possível criar um sistema complexo com um único prompt.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│               MITO: PROMPT ÚNICO                        │
│                                                         │
│  "Crie um sistema financeiro completo"                  │
│                    │                                     │
│                    ▼                                     │
│  ┌──────────────────────────────────────┐              │
│  │                                      │              │
│  │    Código gerado:                     │              │
│  │    • Sem estrutura definida           │              │
│  │    • Arquitetura aleatória            │              │
│  │    • Padrões inconsistentes           │              │
│  │    • Escalabilidade ignorada          │              │
│  │    • Segurança questionável           │              │
│  │                                      │              │
│  └──────────────────────────────────────┘              │
│                    │                                     │
│                    ▼                                     │
│         RESULTADO: BIG BALL OF MUD                      │
│         (Grande bola de lama)                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### O Que Realmente Funciona

A abordagem correta é pensar na IA como uma ferramenta que preenche detalhes a partir de uma estrutura bem definida — como um esqueleto que recebe órgãos.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         ABORDAGEM CORRETA: ESQUELETO E ÓRGÃOS           │
│                                                         │
│  ┌─────────────────────┐                               │
│  │   VOCÊ (DEV)        │                               │
│  │   Define:           │                               │
│  │   • Arquitetura     │                               │
│  │   • Padrões         │                               │
│  │   • Estrutura       │                               │
│  │   • Regras          │                               │
│  └──────────┬──────────┘                               │
│             │                                           │
│             │ Fornece o esqueleto                       │
│             ▼                                           │
│  ┌─────────────────────┐                               │
│  │       IA            │                               │
│  │   Preenche:         │                               │
│  │   • Implementações  │                               │
│  │   • Código repetitivo│                              │
│  │   • Detalhes         │                              │
│  │   • Consultas        │                              │
│  └─────────────────────┘                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Capítulo 4: Arquitetura e Documentação — O Ponto de Partida

### O Arquivo .claude.md

Antes de escrever qualquer linha de código, é preciso documentar tudo. O arquivo `.claude.md` (ou similar, dependendo da ferramenta) funciona como a memória permanente do projeto.

**O que deve conter:**

- Visão geral da arquitetura
- Stack tecnológica completa
- Variáveis de ambiente necessárias
- Estrutura de diretórios
- Responsabilidades de cada módulo
- Regras de negócio fundamentais

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ESTRUTURA DO .claude.md                    │
│                                                         │
│  ├─ VISÃO GERAL                                         │
│  │  └─ Propósito do sistema                             │
│  │                                                      │
│  ├─ STACK TECNOLÓGICA                                   │
│  │  ├─ Front-end: Next.js                              │
│  │  ├─ Back-end: Go                                     │
│  │  ├─ Banco: PostgreSQL                                │
│  │  └─ Cache: Redis                                     │
│  │                                                      │
│  ├─ ESTRUTURA DE DIRETÓRIOS                             │
│  │  ├─ /services                                        │
│  │  ├─ /models                                          │
│  │  └─ /jobs                                            │
│  │                                                      │
│  └─ REGRAS DE NEGÓCIO                                   │
│     └─ Descrição detalhada                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Um exemplo real pode chegar a mais de 700 linhas de documentação. Isso não é exagero — é a fundação para que a IA entenda exatamente o que precisa ser feito.

---

## Capítulo 5: Extreme Programming (XP) como Filosofia

O Extreme Programming (XP) é uma metodologia ágil focada em engenharia e qualidade de código, diferente do Scrum que é mais focado em times e reuniões.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│     SCRUM                        XP                     │
│                                                         │
│  • Times                     • Engenharia               │
│  • Reuniões                  • Qualidade de código      │
│  • Papéis formais            • Técnicas                 │
│  • Burocracia                • Práticas                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Programação em Par (Pair Programming) com IA

O conceito tradicional de programação em par envolve dois desenvolvedores:

- Um "piloto" que escreve o código
- Um "copiloto" que pensa na estratégia

No método disciplinado com IA, essa dinâmica se adapta:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         PROGRAMAÇÃO EM PAR COM IA                       │
│                                                         │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │    VOCÊ         │      │       IA        │          │
│  │  (COPILOTO)     │      │   (PILOTO)      │          │
│  ├─────────────────┤      ├─────────────────┤          │
│  │ • Pensa         │      │ • Escreve       │          │
│  │ • Planeja       │      │ • Implementa    │          │
│  │ • Revisa        │      │ • Refatora      │          │
│  │ • Orienta       │      │ • Executa       │          │
│  └────────┬────────┘      └────────┬────────┘          │
│           │                        │                    │
│           └──────────┬─────────────┘                    │
│                      │                                   │
│                      ▼                                   │
│           ┌─────────────────────┐                       │
│           │  CÓDIGO GERADO      │                       │
│           │  com qualidade       │                       │
│           └─────────────────────┘                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Ciclo de Vida do XP com IA

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│            CICLO XP ADAPTADO PARA IA                    │
│                                                         │
│    ┌──────────┐                                         │
│    │Planejamento│ <──────────────────┐                  │
│    └────┬─────┘                       │                  │
│         │                             │                  │
│         ▼                             │                  │
│    ┌──────────┐                       │                  │
│    │  Design  │                       │                  │
│    └────┬─────┘                       │                  │
│         │                             │                  │
│         ▼                             │                  │
│    ┌──────────┐                       │                  │
│    │  Testes  │ ──┐                   │                  │
│    └────┬─────┘   │                   │                  │
│         │         │                   │                  │
│         ▼         │                   │                  │
│    ┌──────────┐   │  Red → código     │                  │
│    │ Codificação│◀─┘  só passa        │                  │
│    └────┬─────┘        com teste       │                  │
│         │                              │                  │
│         ▼                              │                  │
│    ┌──────────┐                        │                  │
│    │ Validação│────────────────────────┘                  │
│    └──────────┘   Feedback                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Capítulo 6: TDD — Test Driven Development com IA

O Test Driven Development (Desenvolvimento Guiado por Testes) é uma prática onde os testes são escritos **antes** do código.

### O Fluxo do TDD

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                 FLUXO TDD COMPLETO                      │
│                                                         │
│  1. ESCREVA O TESTE                                     │
│     ┌─────────────────┐                                 │
│     │ test("deve...") │                                 │
│     │ expect(...)     │                                 │
│     └────────┬────────┘                                 │
│              │                                           │
│              ▼                                           │
│  2. VEJA FALHAR                                         │
│     ┌─────────────────┐                                 │
│     │ ❌ Teste falhou  │                                 │
│     │ (esperado)       │                                 │
│     └────────┬────────┘                                 │
│              │                                           │
│              ▼                                           │
│  3. ESCREVA O CÓDIGO MÍNIMO                             │
│     ┌─────────────────┐                                 │
│     │ function algo() │                                 │
│     │ { return ... }  │                                 │
│     └────────┬────────┘                                 │
│              │                                           │
│              ▼                                           │
│  4. VEJA PASSAR                                         │
│     ┌─────────────────┐                                 │
│     │ ✅ Teste passou  │                                 │
│     └────────┬────────┘                                 │
│              │                                           │
│              ▼                                           │
│  5. REFATORE                                           │
│     ┌─────────────────┐                                 │
│     │ Melhore o código│                                 │
│     │ Mantendo testes │                                 │
│     └─────────────────┘                                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Por Que TDD é Ainda Mais Importante com IA

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│        SEM TESTES                 COM TESTES            │
│                                                         │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ IA modifica     │      │ IA modifica     │          │
│  │ código          │      │ código          │          │
│  └────────┬────────┘      └────────┬────────┘          │
│           │                        │                    │
│           ▼                        ▼                    │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ "Parece que    │      │ Roda testes     │          │
│  │ funciona"      │      │ automaticamente │          │
│  └────────┬────────┘      └────────┬────────┘          │
│           │                        │                    │
│           ▼                        ├── ✅ Passou → OK   │
│  ┌─────────────────┐               │                    │
│  │ Descobre erro  │               └── ❌ Falhou →       │
│  │ em produção    │                   Ajusta           │
│  └─────────────────┘                                     │
│                                                         │
│  Cada mudança = aposta         Testes = rede de segurança│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Um projeto bem estruturado pode ter mais de mil testes automatizados. Isso significa que cada alteração proposta pela IA pode ser validada instantaneamente, garantindo que nada quebre.

### Como Aplicar com IA

1. **Primeiro prompt:** Peça para a IA escrever apenas os testes
2. **Exija mocks:** Para funcionalidades não implementadas
3. **Recuse código sem teste:** Toda feature precisa ter seu teste correspondente
4. **Insista:** Force a IA a rodar os testes antes de cada alteração

---

## Capítulo 7: O Agente no Terminal

Uma das diferenças fundamentais é onde e como a IA opera.

### Comparação de Abordagens

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│      EDITOR/CHAT                  TERMINAL              │
│                                                         │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ Código no       │      │ IA integrada    │          │
│  │ editor          │      │ ao terminal     │          │
│  └────────┬────────┘      └────────┬────────┘          │
│           │                        │                    │
│           ▼                        ▼                    │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ Copia e cola   │      │ Acesso direto   │          │
│  │ para IA        │      │ ao sistema de   │          │
│  │                │      │ arquivos        │          │
│  └────────┬────────┘      └────────┬────────┘          │
│           │                        │                    │
│           ▼                        ▼                    │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ Contexto        │      │ Contexto        │          │
│  │ limitado        │      │ completo do     │          │
│  │                 │      │ monorepo        │          │
│  └─────────────────┘      └─────────────────┘          │
│                                                         │
│  Manual                       Automático                 │
│  Propenso a erro              Consistente                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Vantagens do Agente no Terminal

1. **Acesso ao sistema de arquivos:** A IA pode ler, modificar e criar arquivos diretamente
2. **Contexto completo:** Enxerga todo o projeto
3. **Execução de comandos:** Pode rodar testes, builds, migrações
4. **Menos cópia/cola:** Elimina erros de transcrição

---

## Capítulo 8: Monorepo — Por Que Funciona com IA

O monorepo (um único repositório contendo múltiplos projetos) traz vantagens específicas quando se trabalha com IA.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    MONOREPO                              │
│                                                         │
│  ┌─────────────────────────────────────────────┐       │
│  │                                             │       │
│  │  /projeto                                   │       │
│  │  ├── /servico-newsletter                    │       │
│  │  ├── /servico-podcast                       │       │
│  │  ├── /servico-blog                          │       │
│  │  └── /bot-discord                           │       │
│  │                                             │       │
│  │  [IA enxerga TUDO]                          │       │
│  │                                             │       │
│  └─────────────────────────────────────────────┘       │
│                         │                                │
│         ┌───────────────┼───────────────┐               │
│         ▼               ▼               ▼               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│  │ Contexto    │ │ Refatoração │ │ Testes      │       │
│  │ compartilhado│ │ multi-serviço│ │ cruzados    │       │
│  └─────────────┘ └─────────────┘ └─────────────┘       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Benefícios Específicos

1. **Contexto compartilhado:** A IA sabe como os serviços se relacionam
2. **Refatoração multi-serviço:** Mudar um campo em todos os lugares ao mesmo tempo
3. **Testes de integração:** Validar comunicação entre serviços facilmente
4. **Consistência:** Padrões uniformes em todo o ecossistema

---

## Capítulo 9: Segurança — A Jaula da IA (AI Jail)

Trabalhar com IA que pode modificar arquivos exige cuidados especiais com segurança.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                CONTAINER COMO JAULA                     │
│                                                         │
│  ┌─────────────────────────────────────────────┐       │
│  │         SEU COMPUTADOR                       │       │
│  │                                             │       │
│  │  ┌─────────────────────────────────┐       │       │
│  │  │        CONTAINER DOCKER          │       │       │
│  │  │                                 │       │       │
│  │  │  ┌─────────────────────────┐    │       │       │
│  │  │  │         IA              │    │       │       │
│  │  │  │   (roda aqui dentro)    │    │       │       │
│  │  │  └─────────────────────────┘    │       │       │
│  │  │                                 │       │       │
│  │  │  • Acesso limitado              │       │       │
│  │  │  • Sistema de arquivos isolado  │       │       │
│  │  │  • Permissões controladas       │       │       │
│  │  └─────────────────────────────────┘       │       │
│  │                                             │       │
│  │  Fora do container: seus arquivos           │       │
│  │  pessoais e sistema ficam seguros           │       │
│  └─────────────────────────────────────────────┘       │
│                                                         │
│  rm -rf / só afeta o container                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Modelo de Permissões

Ferramentas como Claude Code implementam um modelo onde a IA **sempre pergunta** antes de executar ações potencialmente perigosas:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│            FLUXO DE PERMISSÕES                          │
│                                                         │
│  IA: "Preciso executar: rake db:migrate"               │
│       ┌─────────────────────────────────┐              │
│       │ POSSO EXECUTAR? (s/n)           │              │
│       └─────────────────────────────────┘              │
│                    │                                    │
│         ┌──────────┴──────────┐                        │
│         ▼                      ▼                        │
│  ┌─────────────┐        ┌─────────────┐                │
│  │ Sim →       │        │ Não →       │                │
│  │ Executa     │        │ Cancela     │                │
│  └─────────────┘        └─────────────┘                │
│                                                         │
│  VOCÊ SEMPRE NO CONTROLE                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Capítulo 10: Desapego vs Senioridade

Um dos conceitos mais desafiadores é a ideia de **não colocar a mão no código**.

### A Regra do Desapego

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         O QUE FAZER QUANDO A IA ERRA                    │
│                                                         │
│  ┌───────────────────────────────────────────┐         │
│  │                                           │         │
│  │   IA GEROU CÓDIGO ERRADO                  │         │
│  │                                           │         │
│  └─────────────────┬─────────────────────────┘         │
│                    │                                     │
│         ┌──────────┴──────────┐                         │
│         ▼                      ▼                         │
│  ┌─────────────┐        ┌─────────────┐                 │
│  │ INSTINTO    │        │ DISCIPLINA  │                 │
│  │             │        │             │                 │
│  │ "Vou corrigir│        │ "Vou explicar│                │
│  │  na mão"    │        │  para IA"   │                 │
│  └─────────────┘        └──────┬──────┘                 │
│         │                      │                         │
│         ▼                      ▼                         │
│  ┌─────────────┐        ┌─────────────┐                 │
│  │ Código      │        │ IA aprende  │                 │
│  │ corrigido   │        │ e não repete│                 │
│  │ (por você)  │        │ o erro      │                 │
│  └─────────────┘        └─────────────┘                 │
│         │                      │                         │
│         ▼                      ▼                         │
│  ┌─────────────┐        ┌─────────────┐                 │
│  │ Próximo erro│        │ Evolução   │                  │
│  │ repetido   │        │ contínua   │                  │
│  └─────────────┘        └─────────────┘                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Por Que É Tão Difícil

Para desenvolvedores experientes, é instintivo corrigir problemas manualmente. O método proposto exige:

- Explicar detalhadamente o erro
- Atualizar a documentação (.claude.md) com a correção
- Permitir que a IA tente novamente
- Confiar no processo

**Importante:** Esta prática é recomendada **apenas em projetos de aprendizado**. Em projetos profissionais, a abordagem pode (e deve) ser diferente.

---

## Capítulo 11: O Desafio de 7 Dias — Do Zero à Produção

A proposta central é uma imersão de uma semana onde você **não escreve código manualmente** — tudo é feito através da IA, seguindo o método disciplinado.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              CRONOGRAMA DOS 7 DIAS                      │
│                                                         │
│  ┌─────┬────────────────────────────────┐              │
│  │ DIA │             ATIVIDADE          │              │
│  ├─────┼────────────────────────────────┤              │
│  │  1  │ JAULA DA IA                     │              │
│  │     │ • Configurar container Docker  │              │
│  │     │ • Isolar ambiente               │              │
│  │     │ • Aprender contêinerização     │              │
│  ├─────┼────────────────────────────────┤              │
│  │  2  │ FUNDAÇÃO                        │              │
│  │     │ • Escrever histórias           │              │
│  │     │ • Decidir stack                 │              │
│  │     │ • Documentar arquitetura       │              │
│  │     │ • Criar .claude.md             │              │
│  │     │ • Configurar docker-compose    │              │
│  │     │ • Estruturar monorepo          │              │
│  ├─────┼────────────────────────────────┤              │
│  │  3  │ TESTES                          │              │
│  │     │ • Escrever TODOS os testes     │              │
│  │     │ • Usar mocks                    │              │
│  │     │ • Recusar código sem teste     │              │
│  ├─────┼────────────────────────────────┤              │
│  │  4  │ CÓDIGO                          │              │
│  │     │ • Implementar features         │              │
│  │     │ • Fazer testes passarem        │              │
│  │     │ • Ignorar performance          │              │
│  ├─────┼────────────────────────────────┤              │
│  │  5  │ OTIMIZAÇÃO                      │              │
│  │     │ • Refatorar                    │              │
│  │     │ • Melhorar performance         │              │
│  │     │ • Ajustar gargalos             │              │
│  ├─────┼────────────────────────────────┤              │
│  │  6  │ INTERFACE                       │              │
│  │     │ • Front-end (se necessário)    │              │
│  │     │ • Bot/CLI/Web                  │              │
│  │     │ • Experiência do usuário       │              │
│  ├─────┼────────────────────────────────┤              │
│  │  7  │ DEPLOY                          │              │
│  │     │ • Configurar CI/CD             │              │
│  │     │ • Validadores de código        │              │
│  │     │ • Análise de vulnerabilidades  │              │
│  │     │ • Configurar servidor          │              │
│  │     │ • Deploy                        │              │
│  └─────┴────────────────────────────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Detalhamento de Cada Dia

#### Dia 1: Jaula da IA

- Configure um container Docker
- Instale o agente de IA dentro do container
- Teste as limitações de acesso
- Garanta que seus arquivos pessoais estão protegidos

#### Dia 2: Fundação

- Escreva histórias de usuário detalhadas
- Tome decisões arquiteturais conscientes (por que usar X e não Y?)
- Documente TUDO no .claude.md
- Configure docker-compose com todos os serviços
- Estruture o monorepo

#### Dia 3: Testes

- Peça para IA escrever testes para todas as funcionalidades
- Exija mocks para dependências não implementadas
- Recuse qualquer código que não tenha teste
- Valide que os testes falham (vermeIho)

#### Dia 4: Código

- Implemente as funcionalidades para fazer os testes passarem
- Ignore performance e otimizações
- Foque em fazer o código funcionar
- Mantenha todos os testes verdes

#### Dia 5: Otimização

- Identifique gargalos de performance
- Refatore código duplicado ou mal estruturado
- Adicione cache se necessário
- Melhore consultas e algoritmos

#### Dia 6: Interface

- Desenvolva a camada de apresentação
- Pode ser web, bot, CLI, API
- Conecte com o backend já implementado
- Teste a experiência completa

#### Dia 7: Deploy

- Configure pipeline de CI/CD
- Adicione linters e validadores
- Inclua análise de vulnerabilidades
- Configure servidor de produção
- Faça o primeiro deploy

---

## Conclusão: A Mudança de Mentalidade

O método apresentado não é sobre "programar com IA" no sentido superficial. É sobre:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         ANTES                     DEPOIS                │
│                                                         │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ "Como faço IA   │      │ "Como estruturo │          │
│  │  escrever       │      │  para IA        │          │
│  │  código?"       │      │  ser eficiente?"│          │
│  └─────────────────┘      └─────────────────┘          │
│                                                         │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ "Aceitar tudo"  │      │ "Validar tudo"  │          │
│  └─────────────────┘      └─────────────────┘          │
│                                                         │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ "Intuição"      │      │ "Disciplina"    │          │
│  └─────────────────┘      └─────────────────┘          │
│                                                         │
│  ┌─────────────────┐      ┌─────────────────┐          │
│  │ "Vibe coding"   │      │ "Engenharia"    │          │
│  └─────────────────┘      └─────────────────┘          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### O Verdadeiro Objetivo

Ao final dos 7 dias, a expectativa não é apenas ter um projeto funcionando. É ter experimentado uma mudança fundamental na forma de pensar sobre desenvolvimento:

- A IA não substitui o pensamento arquitetural
- Testes são mais importantes do que nunca
- Documentação é a chave para comunicação eficaz com IA
- Disciplina supera intuição

### Para Quem É Este Método

- Desenvolvedores que querem aumentar produtividade sem perder qualidade
- Equipes que desejam incorporar IA de forma estruturada
- Projetos novos onde se pode estabelecer as bases corretas
- Ambientes de aprendizado e experimentação

### Quando NÃO Usar

- Em sistemas legados sem cobertura de testes
- Em projetos com deadlines críticos (inicialmente)
- Quando a equipe não está alinhada com a metodologia
- Em ambientes sem possibilidade de isolamento (container)

---

## Próximos Passos

O desafio está lançado: uma semana de imersão total no método disciplinado de uso de IA. A promessa é que, após essa experiência, a visão sobre "programação com IA" muda completamente.

[Do Zero à Pós-Produção em 1 Semana - Como usar IA em Projetos de Verdade | Bastidores do The M.Akita Chronicles - Akita on Rails](https://akitaonrails.com/2026/02/20/do-zero-a-pos-producao-em-1-semana-como-usar-ia-em-projetos-de-verdade-bastidores-do-the-m-akita-chronicles/#o-claudemd-a-spec-que-evolui)

Não se trata de aceitar cegamente o que a ferramenta produz, mas de construir uma relação onde o desenvolvedor define a estrutura, a arquitetura e as regras, e a IA preenche os detalhes com eficiência — sempre validada por uma rede de segurança de testes automatizados.

O resultado não é "código gerado", mas **software construído** com disciplina, qualidade e o melhor dos dois mundos: a visão estratégica humana e a capacidade operacional da máquina.

[RANT: o Akita abriu as pernas pra IA??](https://akitaonrails.com/2026/02/24/rant-o-akita-abriu-as-pernas-pra-ia/)
