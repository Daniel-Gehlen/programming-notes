# Testes de API: Dos Manuais aos Automatizados

## Tipos de APIs

### RPC (Remote Procedure Call)

**Definição**:
Chamada de métodos remotos via argumentos

**Implementações**:

- XML-RPC
- JSON-RPC
- SOAP
- gRPC

### REST (Representational State Transfer)

**Definição**:
Utiliza verbos HTTP (GET, POST, PUT, DELETE) para interação

**Características**:
✓ Simplicidade
✓ Independência de plataforma
✓ Stateless

### GraphQL

**Definição**:
Linguagem de consulta para APIs

**Vantagens**:

- Consultas flexíveis
- Organização por tipos/campos
- Redução de over-fetching

---

## Importância dos Testes de API

| Tipo de Teste | Objetivo                            |
| ------------- | ----------------------------------- |
| Funcional     | Valida status code e schema         |
| Carga         | Avalia performance sob alto volume  |
| Segurança     | Testa resistência a ataques         |
| Fuzzing       | Envia dados aleatórios para análise |

**Benefícios**:

- Detecção precoce de erros
- Garantia de contratos API
- Melhoria na qualidade

---

## Planejamento de Testes

1. **Revisão de Especificações**

   - Documentação OpenAPI/Swagger
   - Regras de negócio

2. **Definição de Cenários**

   - Happy paths
   - Edge cases
   - Tratamento de erros

3. **Seleção de Ferramentas**

**Ferramentas Recomendadas**:

- Postman (automação e collections)
- Insomnia (testes manuais)
- Rest Assured (Java)
- SoapUI (SOAP/REST)

---

## Postman - Fluxo de Trabalho

**Estrutura Básica**:

```javascript
// Pre-request Script
pm.environment.set("token", "abc123");

// Test Script
pm.test("Status 200", () => {
  pm.response.to.have.status(200);
});
```

**Recursos Avançados**:

- Environments (variáveis)
- Monitors (agendamento)
- Newman (CLI para CI/CD)

---

## Padrões e Documentação

**OpenAPI/Swagger**:

- Especificação padrão para APIs REST
- Geração automática de:
  - Documentação interativa
  - SDKs client-side
  - Testes básicos

**Boas Práticas**:

- Versionamento semântico (v1, v2)
- Paginação em collections
- Cache control headers

> **Dica**: Sempre valide contratos com `jsonschema` e inclua testes de segurança (OWASP Top 10) no pipeline.
