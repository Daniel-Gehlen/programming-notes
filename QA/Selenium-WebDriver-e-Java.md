# Automação de Testes com Selenium WebDriver e Java

## Visão Geral

O **Selenium WebDriver** é a principal ferramenta para automação de testes em navegadores web, combinado com **Java** para criar scripts robustos e escaláveis.

---

## Pré-Requisitos

- **JDK 8+**: Instalação do Java Development Kit.
- **IDE**: Eclipse ou IntelliJ IDEA.
- **Conhecimentos Básicos**:
  - Sintaxe Java
  - HTML/CSS e JavaScript
  - Testes unitários (JUnit)

---

## Parte 1: Pirâmide de Testes

### Tipos de Testes

| Tipo           | Foco                        | Ferramentas Típicas |
| -------------- | --------------------------- | ------------------- |
| **Unitários**  | Funções/métodos isolados    | JUnit, TestNG       |
| **Integração** | Interação entre componentes | JUnit, Mockito      |
| **E2E (UI)**   | Fluxos completos do usuário | Selenium, Cypress   |

**Exemplo de Teste Unitário (JUnit 5)**:

```java
@Test
void testSoma() {
    assertEquals(4, Calculadora.soma(2, 2));
}
```

---

## Parte 2: Configuração do Ambiente

### Passos para Iniciar

1. **Adicionar Dependências no `pom.xml` (Maven)**:

```xml
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.1.0</version>
</dependency>
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.8.2</version>
    <scope>test</scope>
</dependency>
```

2. **Baixar WebDrivers**:
   - Chrome: [ChromeDriver](https://sites.google.com/chromium.org/driver/)
   - Firefox: [GeckoDriver](https://github.com/mozilla/geckodriver)

---

## Parte 3: Testes E2E com Selenium WebDriver

### Exemplo Básico

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.jupiter.api.Test;

public class TesteLogin {
    @Test
    public void testLoginValido() {
        System.setProperty("webdriver.chrome.driver", "caminho/para/chromedriver");
        WebDriver driver = new ChromeDriver();

        driver.get("https://exemplo.com/login");
        driver.findElement(By.id("username")).sendKeys("usuario");
        driver.findElement(By.id("password")).sendKeys("senha123");
        driver.findElement(By.id("login-btn")).click();

        assertTrue(driver.getCurrentUrl().contains("dashboard"));
        driver.quit();
    }
}
```

### Boas Práticas

- **Page Object Model (POM)**:

  ```java
  public class LoginPage {
      WebDriver driver;
      By usernameField = By.id("username");
      By passwordField = By.id("password");

      public LoginPage(WebDriver driver) {
          this.driver = driver;
      }

      public void login(String user, String pass) {
          driver.findElement(usernameField).sendKeys(user);
          driver.findElement(passwordField).sendKeys(pass);
      }
  }
  ```

---

## Parte 4: Recursos Avançados

### Selenium Grid

- **Para testes paralelos** em múltiplos navegadores/sistemas.
- Configuração:
  ```bash
  java -jar selenium-server-standalone.jar -role hub
  java -jar selenium-server-standalone.jar -role node -hub http://localhost:4444/grid/register
  ```

### Integração com CI/CD

- Exemplo de **`.github/workflows/test.yml`** (GitHub Actions):

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Selenium Tests
        run: mvn test
```

---

## Ferramentas Complementares

- **Relatórios**: Allure Report, ExtentReports.
- **Gerenciamento de Dados**: TestNG DataProvider, Apache POI (Excel).
- **Bancos de Dados**: JDBC para validação de dados.

---

## Conclusão

- **Selenium + Java** é ideal para automação web escalável.
- **JUnit 5** simplifica a criação de testes unitários e E2E.
- **POM** e **Selenium Grid** melhoram a manutenção e eficiência.
