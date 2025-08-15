# Grails

Grails é um framework de aplicação web baseado em Groovy que roda na JVM, construído sobre o Spring Framework e projetado para desenvolvimento ágil seguindo o princípio de "convenção sobre configuração".

## Principais Características

### Baseado em Groovy

- Linguagem dinâmica com sintaxe simplificada
- Total interoperabilidade com Java
- Executado na JVM

### Convenção sobre Configuração

- Estrutura de projeto padronizada
- Configuração mínima necessária
- Foco na lógica de negócios

### Integração com Spring

- Aproveita toda a potência do Spring Framework
- Injeção de dependências nativa
- Acesso ao ecossistema Spring

### Arquitetura MVC

- Separação clara entre:
  - Model (GORM para persistência)
  - View (GSP para templates)
  - Controller (Lógica de aplicação)

### Scaffolding Automático

- Geração automática de interfaces CRUD
- Acelera desenvolvimento de protótipos
- Customizável conforme necessidade

### Ecossistema de Plugins

- +800 plugins disponíveis
- Facilidade de adicionar funcionalidades:
  - Segurança
  - APIs REST
  - Testes
  - Front-end

### Segurança Integrada

- Proteção contra XSS e CSRF
- Autenticação baseada em roles
- Integração com Spring Security

## Exemplo Prático

**Domínio Product:**

```groovy
class Product {
    String name
    BigDecimal price

    static constraints = {
        name(blank: false)
        price(nullable: false, min: 0.0)
    }
}
```

**Geração automática:**

```bash
grails create-app myapp
grails create-domain-class Product
grails generate-all Product
```

## Vantagens

✅ **Alta produtividade** - Desenvolvimento rápido
✅ **Integração Java** - Acesso a todo ecossistema Java
✅ **GORM** - ORM poderoso baseado no Hibernate
✅ **Comunidade ativa** - Suporte e evolução contínua

## Conclusão

Grails é ideal para times Java que buscam:

- Desenvolvimento ágil de aplicações web
- Produtividade elevada
- Integração com ecossistema Java/Spring
- Projetos de pequeno a médio porte
