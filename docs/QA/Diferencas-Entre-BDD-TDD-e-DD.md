# Entendendo as Diferenças Entre BDD, TDD e DDD

## Objetivo

Reforçar comparativamente conceitos amplamente utilizados no desenvolvimento de software: **BDD**, **TDD** e **DDD**.

---

## 1. TDD (Test-Driven Development)

### Surgimento

- Desenvolvido por **Kent Beck** no contexto do **Extreme Programming (XP)**.
- Inversão da ordem tradicional: testes são escritos antes do código.

### Benefícios

- Auxilia no design emergente do código.
- Facilita alterações devido a mudanças de requisitos.
- Permite refatoração segura.

### Estratégia (Ciclo RED-GREEN-REFACTOR)

1. **RED**: Escrever um teste que falha.
2. **GREEN**: Implementar o código mínimo para passar no teste.
3. **REFACTOR**: Melhorar o código sem alterar seu comportamento.

### Exemplo Prático

```python
# RED (Teste falha)
def test_soma():
    assert soma(2, 3) == 5

# GREEN (Implementação mínima)
def soma(a, b):
    return a + b

# REFACTOR (Melhorar legibilidade, se necessário)
```

---

## 2. BDD (Behavior-Driven Development)

### Surgimento

- Conceituado por **Dan North** nos anos 2000.
- Foco no **comportamento do sistema** e **requisitos do cliente**.

### Benefícios

- Documentação dinâmica através de cenários.
- Melhora a comunicação entre desenvolvedores e stakeholders.
- Critérios de aceite claros.

### Ferramentas

- **Cucumber** (para automação de testes).
- **Gherkin** (linguagem para escrever cenários).

### Exemplo de Cenário (Gherkin)

```gherkin
Funcionalidade: Login de usuário
  Cenário: Login bem-sucedido
    Dado que o usuário está na página de login
    Quando ele insere credenciais válidas
    Então o sistema redireciona para o dashboard
```

### Integração com TDD

- BDD complementa o TDD ao focar no **"COMO"** (comportamento) em vez do **"O QUE"** (testes unitários).

---

## 3. DDD (Domain-Driven Design)

### Surgimento

- Popularizado por **Eric Evans** em 2003.
- Foco na **modelagem do domínio** e **linguagem ubíqua**.

### Componentes Principais

- **Bounded Contexts**: Divisão do domínio em contextos menores.
- **Linguagem Ubíqua**: Terminologia comum entre desenvolvedores e especialistas.
- **Domain Models**: Representação do conhecimento do problema.

### Exemplo Prático

```java
// Domínio: E-commerce
class Pedido {
    private List<Item> itens;
    void adicionarItem(Item item) { ... }
}
```

### Integração com TDD e BDD

- **TDD**: Auxilia na implementação técnica dos modelos de domínio.
- **BDD**: Define comportamentos esperados do domínio (ex: fluxo de pedidos).

---

## Comparativo

| Critério        | TDD                       | BDD                        | DDD                   |
| --------------- | ------------------------- | -------------------------- | --------------------- |
| **Foco**        | Testes unitários e design | Comportamento do sistema   | Modelagem do domínio  |
| **Abordagem**   | Técnica (código)          | Colaborativa (cenários)    | Estratégica (negócio) |
| **Ferramentas** | JUnit, pytest             | Cucumber, SpecFlow         | Diagramas de contexto |
| **Quando Usar** | Desenvolvimento iterativo | Alinhamento com requisitos | Sistemas complexos    |

---

## Como Eles Se Integram?

- **TDD** garante código testável e bem projetado.
- **BDD** assegura que o comportamento atenda aos requisitos.
- **DDD** organiza o domínio para refletir o problema real.

### Fluxo Ideal

1. **DDD**: Modelar o domínio com especialistas.
2. **BDD**: Definir cenários de comportamento.
3. **TDD**: Implementar testes e código iterativamente.

---

## Conclusão

- **TDD**: Para qualidade técnica e design emergente.
- **BDD**: Para alinhamento com stakeholders.
- **DDD**: Para sistemas complexos com regras de negócio intrincadas.
