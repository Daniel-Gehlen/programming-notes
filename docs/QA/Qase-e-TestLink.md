# Qase e TestLink

## Visão Geral

Qase e TestLink são ferramentas de gerenciamento de testes com abordagens distintas. Enquanto o Qase é uma solução moderna com foco em automação e integração, o TestLink é uma ferramenta open-source mais tradicional para gerenciamento manual de testes.

---

## Qase

### Principais Funcionalidades

- **Gestão de Casos de Teste**: Criação, organização e execução de casos.
- **Execução de Testes**: Planejamento de ciclos e registro de resultados.
- **Automação**: API para integração com Selenium, Cypress, Postman, etc.
- **Relatórios**: Dashboards avançados com métricas de cobertura e progresso.
- **Integrações**: Jira, GitHub, GitLab, Slack.

### Fluxo de Trabalho

1. Criar casos de teste no Qase.
2. Agrupar em suites ou ciclos de teste.
3. Registrar resultados manualmente ou via automação.
4. Gerar relatórios automáticos.

### Exemplo de Uso

```markdown
1. Acesse o Qase e crie um novo projeto.
2. Adicione casos de teste com passos detalhados.
3. Planeje um ciclo de teste (test run).
4. Execute testes manualmente ou integre com automação via API.
5. Analise os dashboards de resultados.
```

---

## TestLink

### Principais Funcionalidades

- **Gestão de Casos de Teste**: Organização em suites e projetos.
- **Planejamento**: Criação de planos de teste e ciclos de execução.
- **Execução Manual**: Registro direto de resultados na plataforma.
- **Relatórios**: Gráficos básicos de progresso.
- **Integrações**: Limitadas (Jira via plugins).

### Fluxo de Trabalho

1. Criar casos de teste e organizar em suites.
2. Definir um plano de teste para o projeto.
3. Atribuir casos a testadores.
4. Registrar resultados manualmente.
5. Gerar relatórios simples.

### Exemplo de Uso

```markdown
1. Instale o TestLink em seu servidor.
2. Crie um projeto e adicione suites de teste.
3. Desenvolva casos de teste com critérios de aceitação.
4. Execute os testes e registre os resultados.
5. Exporte relatórios em PDF/Excel.
```

---

## Comparativo

| Recurso         | Qase                         | TestLink                       |
| --------------- | ---------------------------- | ------------------------------ |
| **Tipo**        | SaaS/Cloud (pago)            | Open-Source (auto-hospedado)   |
| **Automação**   | Suporte robusto (API, CI/CD) | Limitado (plugins)             |
| **Integrações** | Jira, GitHub, Slack, etc.    | Básico (Jira via plugins)      |
| **Relatórios**  | Dashboards avançados         | Relatórios simples             |
| **Usabilidade** | Interface moderna            | Interface menos intuitiva      |
| **Custo**       | Planos variados              | Gratuito (custo de hospedagem) |

---

## Qual Escolher?

- **Qase**: Ideal para times com automação e necessidade de integração com DevOps.
- **TestLink**: Adequado para projetos pequenos com foco em testes manuais e orçamento limitado.
