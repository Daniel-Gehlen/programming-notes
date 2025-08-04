# Monitoramento e Análise na AWS

## Objetivo Geral

Apresentar as principais ferramentas para monitoramento e análise eficiente de serviços e contas AWS.

## Percurso

### Etapa 1: Amazon CloudWatch

#### Funcionalidades Principais

| Funcionalidade | Descrição                                         | Caso de Uso                                   |
| -------------- | ------------------------------------------------- | --------------------------------------------- |
| **Métricas**   | Monitora performance de recursos AWS e aplicações | Identificar picos de CPU em instâncias EC2    |
| **Alertas**    | Notificações baseadas em limites pré-definidos    | Alertar quando uso do S3 ultrapassar 85%      |
| **Logs**       | Centralização e análise de logs                   | Solucionar problemas em aplicações serverless |

**Exemplo de configuração de alarme**:

```bash
aws cloudwatch put-metric-alarm \
    --alarm-name "AltoUsoCPU" \
    --metric-name "CPUUtilization" \
    --namespace "AWS/EC2" \
    --threshold 80 \
    --comparison-operator "GreaterThanThreshold" \
    --evaluation-periods 2 \
    --alarm-actions "arn:aws:sns:us-east-1:123456789012:MeuTopicoAlerta"
```

🔗 **Recursos**:
[CloudWatch](https://aws.amazon.com/cloudwatch/)
[Documentação](https://docs.aws.amazon.com/cloudwatch/)

---

### Etapa 2: AWS CloudTrail

#### Fluxo de Operação

1. **Registro**: Captura todas as chamadas API
2. **Armazenamento**: Armazena em S3 com criptografia
3. **Análise**: Integração com Athena para consultas SQL

**Benefícios Chave**:

- Compliance com regulamentações (GDPR, HIPAA)
- Detecção de atividades suspeitas
- Histórico de mudanças (90 dias grátis)

⚠️ **Melhor Prática**: Ativar CloudTrail em todas as regiões

🔗 **Recursos**:
[CloudTrail](https://aws.amazon.com/cloudtrail/)
[CloudTrail Insights](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events.html)

---

### Etapa 3: AWS Trusted Advisor

#### Checklist de Recomendações

| Categoria       | Exemplo                      | Impacto Potencial   |
| --------------- | ---------------------------- | ------------------- |
| **Segurança**   | MFA não habilitado para root | Alto risco          |
| **Custo**       | Instâncias EC2 subutilizadas | Economia de até 40% |
| **Performance** | EBS com IOPS baixo           | Redução de latência |
| **Tolerância**  | RDS sem Multi-AZ             | Risco de downtime   |

**Recomendações Prioritárias**:
✅ Ativar MFA para todas contas IAM
✅ Configurar backups diários de RDS

🔗 **Recursos**:
[Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/)
[Boas Práticas](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html)

---

## Fluxo de Monitoramento Recomendado

1. **Coleta**: CloudWatch para métricas em tempo real
2. **Auditoria**: CloudTrail para registro de atividades
3. **Otimização**: Trusted Advisor para recomendações
4. **Ação**: Configurar alertas proativos e automatizar respostas

📊 **Exemplo de Dashboard**:

```plaintext
Recurso         Status          Ação Necessária
EC2            CPU 90%         Scale out
RDS            Storage 95%     Aumentar capacidade
IAM            MFA ausente     Configurar MFA
```

💡 **Dica**: Integre com Slack/SNS para notificações em tempo real!
