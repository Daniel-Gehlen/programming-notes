# O Dia a Dia de um QA: A Prática de Testes Manuais Funcionais

## Objetivo do Projeto

Revisar conceitos úteis para testes manuais no mundo ágil e praticar atividades do cotidiano de um QA, com foco em **testes manuais funcionais**.

---

## Parte 1: Configuração de Ferramentas

### JIRA

- **Função**: Gerenciamento de projetos ágeis com quadros (Kanban/Scrum).
- **Recursos**:
  - Relatórios personalizados.
  - Integração com ferramentas como Confluence, GitHub.
- **Exemplo de Uso**:
  ```markdown
  1. Criar um projeto no JIRA.
  2. Definir fluxos de trabalho (ex: "To Do" → "In Progress" → "QA" → "Done").
  ```

### Confluence

- **Função**: Documentação colaborativa de requisitos e testes.
- **Recursos**:
  - Templates para planos de teste.
  - Vinculação com issues do JIRA.

---

## Parte 2: Planejamento do Fluxo de Trabalho

### SCRUM e Status de Trabalho

- **Fluxo Básico**:
  ```mermaid
  graph LR
    A[Backlog] --> B[Sprint Planning] --> C[Development] --> D[QA Testing] --> E[Done]
  ```
- **Prática**:
  - Configurar um projeto no JIRA com os status acima.

---

## Parte 3: Escrevendo Histórias de Usuário

### Estrutura de User Stories

- **Fórmula**:
  > "Como [usuário], quero [ação] para [benefício]."
- **Critérios INVEST**:
  - **Independente**, **Negociável**, **Valiosa**, **Estimável**, **Pequena**, **Testável**.

### Exemplo

```markdown
**Épico**: Autenticação de Usuário
**User Story**:
"Como usuário, quero fazer login com e-mail e senha para acessar minha conta."
**Critérios de Aceite**:

1. Campos obrigatórios validados.
2. Mensagem de erro para credenciais inválidas.
```

---

## Parte 4: O Dia da Planning

### Papel do QA na Planning

- **Atividades**:
  - Validar testabilidade das User Stories.
  - Participar do **Planning Poker** (usando Fibonacci: 1, 2, 3, 5, 8...).
- **Exemplo**:
  ```markdown
  User Story: "Login com Google" → Estimativa: 5 pontos (complexidade média).
  ```

---

## Parte 5: Documentação de Teste

### Tipos de Documentos

| Tipo                | Descrição                          | Ferramenta  |
| ------------------- | ---------------------------------- | ----------- |
| **Plano de Testes** | Estratégia e escopo de testes.     | Confluence  |
| **Casos de Teste**  | Passos detalhados para execução.   | JIRA/Xray   |
| **Mind Map**        | Visualização de cenários de teste. | MindMeister |

### Exemplo de Caso de Teste (Step-by-Step)

```markdown
**Caso**: CT-001 - Login com credenciais válidas
**Passos**:

1. Acessar a página de login.
2. Inserir e-mail e senha válidos.
3. Clicar em "Entrar".
   **Resultado Esperado**: Redirecionar para o dashboard.
```

### Exemplo de Caso de Teste (BDD)

```gherkin
Cenário: Login bem-sucedido
  Dado que estou na página de login
  Quando insiro "user@teste.com" e "Senha123"
  Então sou redirecionado para "/dashboard"
```

---

## Parte 6: Prática

### Atividades

1. Criar um **mind map** para a User Story de login.
2. Gerar um **plano de testes** no Confluence.
3. Escrever 2 casos de teste (step-by-step e BDD) no JIRA.

---

## Parte 8: Entrega do Projeto

### Artefatos Requeridos

- **GitHub (PDF)**:
  - Fluxo de trabalho e ciclo de vida de bugs.
  - 2 User Stories documentadas.
- **Documentos de Teste**:
  - Mind map.
  - 4 casos de teste (2 step-by-step + 2 BDD).

---

## Ferramentas Recomendadas

| Tipo             | Ferramentas             |
| ---------------- | ----------------------- |
| **Gestão**       | JIRA, Confluence        |
| **Testes**       | Xray (JIRA), TestRail   |
| **Documentação** | MindMeister, Lucidchart |
