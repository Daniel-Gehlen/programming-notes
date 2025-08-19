# Fundamentos de Automação de Testes

## Objetivo

Introduzir os conceitos essenciais de automação de testes, seu propósito e os fatores críticos para implementação bem-sucedida no ciclo de vida do software.

---

## Aula 1: Fundamentos para Projetos de Automação

### Propósito da Automação

- **Ciclo de Vida do Teste**:
  ```mermaid
  graph LR
    A[Planejamento] --> B[Design] --> C[Implementação] --> D[Execução] --> E[Relatório]
  ```
- **Objetivos**:
  - ✅ Aumentar eficiência e cobertura
  - ✅ Reduzir custos e tempo de execução
  - ✅ Permitir testes impossíveis manualmente (ex: carga/performance)

### Vantagens vs Desvantagens

| **Vantagens**            | **Desvantagens**             |
| ------------------------ | ---------------------------- |
| Feedback rápido          | Alto custo inicial           |
| Redução de erros humanos | Complexidade de manutenção   |
| Execução em paralelo     | Requer habilidades de código |

---

## Aula 2: Arquitetura e Design para Automação

### Arquitetura Genérica

1. **Camada de Geração**:
   - Dados de teste (ex: `Faker` para dados aleatórios)
2. **Camada de Definição**:
   - Especificação em Gherkin (BDD)
   ```gherkin
   Cenário: Login válido
     Dado um usuário registrado
     Quando insere credenciais corretas
     Então acessa o dashboard
   ```
3. **Camada de Execução**:
   - Frameworks (Selenium, Cypress)
4. **Camada de Adaptação**:
   - Integração com CI/CD (Jenkins, GitHub Actions)

### Abordagens Principais

- **Captura e Reprodução**: Katalon Recorder
- **Orientado a Dados**: TestNG + Excel
- **BDD**: Cucumber + Selenium

---

## Aula 3: Padrões para Testes E2E

### Page Object Model (POM)

```java
// Exemplo em Java
public class LoginPage {
  By usernameField = By.id("user");
  By passwordField = By.id("pass");

  public void login(String user, String pass) {
    driver.findElement(usernameField).sendKeys(user);
    driver.findElement(passwordField).sendKeys(pass);
  }
}
```

**Vantagens**: Reusabilidade, baixo acoplamento
**Desvantagens**: Overhead para pequenos projetos

### ScreenPlay Pattern

```python
# Exemplo em Python com Serenity
@step
def login_as(user):
  user.attempts_to(
    Enter.the_value("user@test.com").into(USERNAME_FIELD),
    Click.on(LOGIN_BUTTON)
  )
```

**Benefícios**: Legibilidade, foco em comportamentos

### Comparativo de Padrões

| Padrão      | Complexidade | Manutenção | Indicado Para           |
| ----------- | ------------ | ---------- | ----------------------- |
| POM         | Média        | Alta       | Projetos médios/grandes |
| ScreenPlay  | Alta         | Muito Alta | Equipes experientes     |
| App Actions | Baixa        | Média      | Testes de performance   |

---

## Ferramentas Recomendadas

| Tipo       | Exemplos                      |
| ---------- | ----------------------------- |
| **Web**    | Selenium, Cypress, Playwright |
| **Mobile** | Appium, Espresso, XCUITest    |
| **API**    | Postman, RestAssured          |
| **BDD**    | Cucumber, SpecFlow            |

---

## Checklist para Implementação

1. **Definir Escopo**: Quais testes automatizar? (Priorizar regressivos/repetitivos)
2. **Escolher Stack**: Linguagem + Framework + Ferramentas de CI
3. **Padronizar**: Adotar POM ou ScreenPlay
4. **Integrar**: Pipeline CI/CD (ex: Gatilho após cada commit)
5. **Manter**: Revisar scripts a cada nova feature
