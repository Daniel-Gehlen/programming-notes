# Formatos para Estórias de Usuário e Features em BDD

## 📌 Formatos Comuns

| Extensão   | Ferramenta Principal | Vantagens                   | Melhor Para                         |
| ---------- | -------------------- | --------------------------- | ----------------------------------- |
| `.feature` | Cucumber             | Sintaxe Gherkin padronizada | Equipes BDD com devs/não-devs       |
| `.txt`     | Qualquer editor      | Simplicidade universal      | Documentação rápida e informal      |
| `.md`      | GitHub/GitLab        | Formatação rica (Markdown)  | Documentação técnica compartilhada  |
| `.yaml`    | Ferramentas CI/CD    | Estrutura hierárquica       | Configurações complexas e pipelines |

---

## 1. Formato `.feature` (Cucumber/Gherkin)

**Exemplo Completo:**

```gherkin
Feature: Mesclagem de Acordes
  Como um compositor de música
  Quero mesclar duas listas de acordes
  Para criar partituras harmoniosas

  Scenario: Mesclagem de listas válidas
    Given a lista da Orquestra Harmony [1, 3, 5, 7, 0, 0, 0, 0]
    And a lista do Quarteto Melodia [2, 4, 6, 8]
    When executo a mesclagem
    Then o resultado deve ser [1, 2, 3, 4, 5, 6, 7, 8]
```

**Estrutura:**

- `Feature`: Contexto geral
- `Scenario`: Caso de teste específico
- `Given/When/Then`: Passos do teste

---

## 2. Formato `.txt` (Simples)

**Exemplo:**

```
TÍTULO: Mesclagem de Acordes

PERSONA: Compositor musical

REQUISITO:
Mesclar listas de acordes mantendo ordenação

CRITÉRIOS:
1. Recebe duas listas (music1 com espaços vazios)
2. Combina elementos de music2 em music1
3. Retorna lista única ordenada
```

**Quando Usar:**

- Brainstorming inicial
- Documentação interna rápida

---

## 3. Formato `.md` (Markdown)

**Exemplo Estruturado:**

````markdown
# 🎼 Feature: Mesclagem de Acordes

## User Story

**Como** compositor
**Quero** mesclar listas de acordes
**Para** criar arranjos musicais completos

## Critérios de Aceite

```python
# Input
music1 = [1, 3, 5, 7, 0, 0, 0, 0]
music2 = [2, 4, 6, 8]

# Output esperado
assert merged == [1, 2, 3, 4, 5, 6, 7, 8]
```
````

**Vantagens:**

- Suporte a blocos de código
- Visualização em repositórios Git

---

## 4. Formato `.yaml` (Estrutura Hierárquica)

**Exemplo:**

```yaml
feature:
  title: "Mesclagem de Acordes"
  description: |
    Como compositor, preciso combinar listas de acordes
    para produção de partituras completas.
  scenarios:
    - name: "Listas válidas"
      given:
        - music1: [1, 3, 5, 7, 0, 0, 0, 0]
        - music2: [2, 4, 6, 8]
      then: [1, 2, 3, 4, 5, 6, 7, 8]
```

**Melhor Uso:**

- Integração com ferramentas CI/CD
- Especificações técnicas complexas

---

## 🔄 Comparação de Aplicação

| Cenário                  | Formato Recomendado |
| ------------------------ | ------------------- |
| Testes automatizados     | `.feature`          |
| Documentação técnica     | `.md`               |
| Configuração de pipeline | `.yaml`             |
| Anotações rápidas        | `.txt`              |

> **Dica**: Combine `.feature` para testes com `.md` para documentação no mesmo repositório!
