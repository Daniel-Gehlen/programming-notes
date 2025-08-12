# Stripe: Plataforma de Pagamentos Online

## Visão Geral

**Fundação**: 2010 por Patrick e John Collison
**Foco**: Soluções de pagamento online para startups, PMEs e grandes empresas

## Principais Recursos Técnicos

### 1. API de Pagamentos

- **Funcionalidades**:
  - Processamento de cartões (crédito/débito) e carteiras digitais (Apple/Google Pay)
  - Assinaturas e cobrança recorrente
  - Suporte a marketplaces via Stripe Connect
- **Linguagens suportadas**:
  ```python,javascript,ruby,php,java

  ```

### 2. Segurança

| **Recurso**     | **Benefício**                                          |
| --------------- | ------------------------------------------------------ |
| PCI-DSS Level 1 | Máxima certificação de segurança para dados de cartões |
| Tokenização     | Substitui dados sensíveis por tokens únicos            |
| 3D Secure 2.0   | Autenticação forte para reduzir chargebacks            |

### 3. Ferramentas para Devs

- **SDKs pré-construídos**:
  - Web (JS), Mobile (iOS/Android), Server-side
- **Webhooks**:
  - Notificações em tempo real para:
    - Pagamentos bem-sucedidos
    - Falhas na transação
    - Renovações de assinatura

## Soluções Especializadas

### Para Marketplaces/SaaS

```diff
+ Stripe Connect: Divisão automática de pagamentos entre plataforma/vendedores
+ Stripe Billing: Gestão avançada de assinaturas (pró-rata, upgrades/downgrades)
! Stripe Tax: Cálculo automático de impostos em 40+ países
```

### Ferramentas Avançadas

- **Stripe Radar**:
  - Prevenção de fraudes com machine learning
  - Customização de regras de risco
- **Stripe Atlas**:
  - Incorporação de empresas nos EUA (incluindo conta bancária)

## Vantagens Competitivas

**Globalização**:

- 135+ moedas aceitas
- Conformidade regulatória local pronta (ex.: SCA na Europa)

**Análises**:

- Dashboard com métricas de:
  - Taxa de conversão
  - Churn rate
  - MRR/ARR para SaaS

## Casos de Uso Comuns

1. **E-commerce**: Checkout único com suporte a múltiplos gateways
2. **SaaS**: Cobrança recorrente com trial gratuito
3. **Marketplaces**: Split payments com repasse automático a vendedores
4. **Fintechs**: White-label para soluções bancárias

## Exemplo de Código (Node.js)

```javascript
const stripe = require("stripe")("sk_test_...");

async function createPayment() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000, // R$20.00
    currency: "brl",
    payment_method_types: ["card"],
  });
  return paymentIntent.client_secret;
}
```

> 🔍 **Dica para Devs**: Use o modo teste (`sk_test_`) para simular todos os cenários de pagamento (sucesso/fraude/chargeback) antes de ir para produção. Documentação completa em [stripe.com/docs](https://stripe.com/docs).
