# EJB (Enterprise JavaBeans)

EJB (Enterprise JavaBeans) é uma tecnologia da plataforma Java EE (Java Enterprise Edition) que permite o desenvolvimento de componentes de negócio distribuídos, transacionais e seguros para aplicações corporativas. Os EJBs são projetados para simplificar o desenvolvimento de aplicações corporativas robustas e escaláveis, fornecendo uma série de serviços de infraestrutura, como gerenciamento de transações, segurança, concorrência e conectividade.

## Tipos de EJB:

### Session Beans

:
**Stateless Session Beans**
: Não mantêm estado entre chamadas de métodos. Cada chamada ao bean é independente e não depende do estado interno do bean.

**Stateful Session Beans**
: Mantêm estado entre chamadas de métodos. O estado é mantido enquanto o cliente interage com o bean.

**Singleton Session Beans**
: Um único bean é compartilhado entre todos os clientes e permanece vivo enquanto a aplicação estiver ativa. É utilizado para estados globais e compartilhados.

### Message-Driven Beans (MDBs)

:
MDBs são utilizados para processar mensagens assíncronas do sistema de mensagens Java Message Service (JMS). Eles permitem a integração de componentes EJB com sistemas de mensagens, facilitando a comunicação assíncrona.

### Entity Beans (Descontinuado em favor do JPA)

:
Entity Beans eram usados para representar dados persistentes e a lógica de negócios associada a esses dados. Foram substituídos pelo Java Persistence API (JPA) para mapeamento objeto-relacional.

## Principais Serviços e Recursos dos EJB:

### Gerenciamento de Transações

:
EJBs suportam gerenciamento de transações declarativo e programático. Com transações declarativas, você pode definir políticas de transação usando anotações ou descritores de implantação, enquanto as transações programáticas permitem o controle manual das transações.

### Segurança

:
EJBs fornecem mecanismos de segurança robustos, permitindo que você defina permissões de acesso a métodos de bean e implemente controle de acesso baseado em funções (Role-Based Access Control - RBAC).

### Injeção de Dependências

:
EJBs suportam a injeção de dependências, facilitando a configuração e o gerenciamento de recursos externos, como conexões de banco de dados, filas JMS e outros EJBs.

### Concorrência

:
EJBs gerenciam automaticamente a concorrência, permitindo que múltiplos clientes acessem os mesmos componentes de maneira segura e eficiente.

### Ciclo de Vida Gerenciado

:
O container EJB gerencia o ciclo de vida dos beans, incluindo criação, inicialização, ativação, passivação e destruição, liberando os desenvolvedores da necessidade de gerenciar esses aspectos manualmente.

## Exemplo de um Stateless Session Bean:

```java
import javax.ejb.Stateless;

@Stateless
public class CalculatorBean implements CalculatorBeanLocal {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }
}
```

## Exemplo de Injeção de Dependência em um Cliente EJB:

```java
import javax.ejb.EJB;
import javax.servlet.http.HttpServlet;

public class CalculatorServlet extends HttpServlet {
    @EJB
    private CalculatorBeanLocal calculatorBean;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int result = calculatorBean.add(5, 3);
        response.getWriter().println("Result: " + result);
    }
}
```

## Benefícios do EJB:

**Simplificação do Desenvolvimento**
: EJBs simplificam o desenvolvimento de componentes de negócios complexos, fornecendo um conjunto de serviços de infraestrutura prontos para uso.

**Escalabilidade e Desempenho**
: EJBs são projetados para aplicações corporativas que requerem alta escalabilidade e desempenho.

**Transações e Segurança**
: EJBs oferecem suporte robusto para gerenciamento de transações e segurança, facilitando o desenvolvimento de aplicações seguras e confiáveis.

**Desenvolvimento Modular**
: EJBs promovem o desenvolvimento modular, onde a lógica de negócios é encapsulada em componentes reutilizáveis.

## Limitações dos EJB:

**Complexidade**
: Embora EJBs simplifiquem muitos aspectos do desenvolvimento de aplicações corporativas, eles podem introduzir uma camada adicional de complexidade, especialmente para desenvolvedores que estão apenas começando.

**Overhead**
: A infraestrutura EJB pode introduzir algum overhead, especialmente em termos de desempenho, quando comparada a soluções mais leves.

**Curva de Aprendizado**
: Dominar EJB e seus conceitos associados pode exigir um tempo considerável, especialmente para desenvolvedores que não estão familiarizados com a plataforma Java EE.

## Conclusão:

EJBs são uma poderosa tecnologia para o desenvolvimento de aplicações corporativas distribuídas, fornecendo um conjunto abrangente de serviços de infraestrutura que facilitam o desenvolvimento, a segurança e a escalabilidade. Embora possam introduzir alguma complexidade adicional, os benefícios que oferecem em termos de robustez e capacidade de gerenciamento tornam-nos uma escolha popular para grandes aplicações empresariais.
