# Diferenças Entre BDD, TDD e DDD

## 🔍 Visão Geral Comparativa

| Conceito | Foco Principal              | Origem         | Benefícios-Chave                                   | Ferramentas Exemplo |
| -------- | --------------------------- | -------------- | -------------------------------------------------- | ------------------- |
| **TDD**  | Design do código via testes | Kent Beck (XP) | Código testável, design emergente                  | JUnit, pytest       |
| **BDD**  | Comportamento do sistema    | Dan North      | Alinhamento com negócio, documentação viva         | Cucumber, Behave    |
| **DDD**  | Modelagem de domínio        | Eric Evans     | Comunicação clara, arquitetura alinhada ao negócio | -                   |

---

## 🧪 TDD (Test-Driven Development)

### Ciclo RED-GREEN-REFACTOR

1. **RED**: Escreve teste que falha
   ```java
   @Test
   public void testSoma() {
       assertEquals(4, Calculadora.soma(2, 2));
   }
   ```
2. **GREEN**: Implementa mínimo para passar
   ```java
   public class Calculadora {
       public static int soma(int a, int b) {
           return a + b;
       }
   }
   ```
3. **REFACTOR**: Melhora código mantendo testes

**Quando usar**:

- Quando precisar de alta cobertura de testes
- Para evitar over-engineering

---

## 📝 BDD (Behavior-Driven Development)

### Estrutura Gherkin (Cucumber)

```gherkin
Funcionalidade: Login
  Cenário: Login válido
    Dado que estou na página de login
    Quando insiro "usuário@exemplo.com" e "senha123"
    Então devo ser redirecionado para o dashboard
```

**Componentes**:

- **Given**: Pré-condições
- **When**: Ação do usuário
- **Then**: Resultado esperado

**Quando usar**:

- Para alinhar devs/QA/negócio
- Quando requisitos são complexos

---

## 🏛️ DDD (Domain-Driven Design)

### Conceitos-Chave

- **Bounded Context**:
  ```mermaid
  graph LR
    A[Vendas] -- Integração --> B[Estoque]
  ```
- **Linguagem Úbiqua**: Glossário compartilhado
- **Domain Models**:
  ```python
  class Pedido:
      def __init__(self, itens):
          self.itens = itens  # Lista de objetos Item
  ```

**Quando usar**:

- Sistemas complexos de negócio
- Quando domínio é crítico

---

## 🔄 Como Integrar?

1. **DDD** define o domínio e linguagem
2. **BDD** especifica comportamentos (testes de aceite)
3. **TDD** implementa unidades que satisfazem BDD

**Fluxo**:
`Requisitos → DDD → BDD (Gherkin) → TDD → Implementação`

---

## 🏆 Quando Usar Cada Um?

| Cenário                      | Abordagem Recomendada     |
| ---------------------------- | ------------------------- |
| API com regras simples       | TDD                       |
| Sistema com fluxos complexos | BDD + DDD                 |
| Migração de legado           | DDD para entender domínio |

_Referências_:

- [TDD Prático - DevMedia](https://www.devmedia.com.br)
- [Livro DDD - Eric Evans](https://domainlanguage.com)

> **Dica**: Combine BDD+DDD para sistemas críticos e TDD para microsserviços! 🚀
