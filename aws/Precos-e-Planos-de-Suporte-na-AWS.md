# Preços e Planos de Suporte da AWS

## Objetivo Geral

Apresentar o modelo de preços da AWS, ferramentas relacionadas e planos de suporte disponíveis.

## Percurso

### Etapa 1: Filosofia de Preços AWS

#### Modelos de Pagamento

| Modelo               | Descrição                     | Benefício           |
| -------------------- | ----------------------------- | ------------------- |
| **Pay-as-you-go**    | Pague apenas pelo que usar    | Flexibilidade total |
| **Savings Plans**    | Compromisso de uso (1-3 anos) | Até 72% de economia |
| **Volume Discounts** | Descontos progressivos        | Economia automática |

🔹 **Free Tier**: 750h/mês EC2 t2.micro + 5GB S3 por 12 meses
🔗 **Links**: [Calculadora de Preços](https://calculator.aws/) | [Free Tier](https://aws.amazon.com/free/)

---

### Etapa 2: Preço Amazon EC2

#### Comparativo de Modelos

| Modelo                 | Economia | Flexibilidade | Melhor Para                         |
| ---------------------- | -------- | ------------- | ----------------------------------- |
| **On-Demand**          | -        | Alta          | Cargas imprevisíveis                |
| **Savings Plans**      | Até 72%  | Média         | Uso consistente                     |
| **Reserved Instances** | Até 75%  | Baixa         | Workloads fixos                     |
| **Spot Instances**     | Até 90%  | Variável      | Workloads tolerantes a interrupções |

💡 **Dica**: Use Spot para batch processing + Reserved para bancos de dados

🔗 **Links**: [EC2 Pricing](https://aws.amazon.com/ec2/pricing/)

---

### Etapa 3: Painel de Cobrança

#### Principais Funcionalidades

- **Cost Explorer**: Visualização gráfica de gastos
- **Budget Alerts**: Notificações quando atingir 80%/90%/100% do orçamento
- **RI Utilization Tracking**: Monitoramento de instâncias reservadas

📊 **Exemplo**:

```plaintext
Serviço         Custo Mensal   Tendência
EC2            $1,200         ▲ 15%
S3             $350           ▼ 5%
Lambda         $90            ► Estável
```

🔗 **Link**: [Painel de Cobrança](https://console.aws.amazon.com/billing/)

---

### Etapa 4: Faturamento Consolidado

#### Benefícios

- **Unified Billing**: Todas contas em uma fatura
- **Shared Discounts**: Economia agregada em Savings Plans
- **Cost Allocation Tags**: Divisão por departamentos/projetos

⚠️ **Importante**: Necessário AWS Organizations ativado
🔗 **Link**: [Faturamento Consolidado](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

---

### Etapa 5: AWS Budgets

#### Tipos de Budgets

1. **Cost Budgets**: Limite monetário ($500/mês)
2. **Usage Budgets**: Limite de consumo (1000 GB/mês)
3. **RI Utilization**: Alerta se <80% de uso

🔔 **Configuração Recomendada**:

- Alerta em 80% do orçamento
- Notificação via SNS + Email

🔗 **Link**: [AWS Budgets](https://aws.amazon.com/aws-cost-management/aws-budgets/)

---

### Etapa 6: AWS Cost Explorer

#### Recursos Avançados

- **Forecasting**: Previsão de gastos (12 meses)
- **Group by Tags**: Análise por tags (ex: `Environment=Production`)
- **RI Recommendations**: Sugestões de compra de instâncias reservadas

📈 **Caso de Uso**: Identificar serviços com maior crescimento de custos
🔗 **Link**: [Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/)

---

### Etapa 7: Planos de Suporte

#### Comparativo de Planos

| Plano          | SLA Resposta | Recursos                 | Preço      |
| -------------- | ------------ | ------------------------ | ---------- |
| **Basic**      | -            | Documentação             | Grátis     |
| **Developer**  | 24h          | Suporte geral            | $29/mês    |
| **Business**   | 1h (crítico) | Trusted Advisor completo | % do gasto |
| **Enterprise** | 15min        | TAM dedicado             | Contato    |

🔹 **Recomendação**: Business para workloads em produção
🔗 **Link**: [Planos de Suporte](https://aws.amazon.com/premiumsupport/plans/)

---

### Etapa 8: AWS Marketplace

#### Vantagens

- **BYOL (Bring Your Own License)**: Para softwares existentes
- **AMI Pré-configuradas**: Wordpress, Jenkins, etc.
- **Billing Integrado**: Cobrança na fatura AWS

🛒 **Exemplo Popular**:

- **Datadog**: $0.02/host/hora
- **Cisco Firewall**: $1.50/hora

🔗 **Link**: [AWS Marketplace](https://aws.amazon.com/marketplace)
