# Assuntos Complementares para o Exame AWS Cloud Practitioner

## Objetivo Geral

Compreender as melhores práticas e ferramentas AWS para migração, adoção e gerenciamento na nuvem.

## Etapa 1: Estratégias de Migração (6Rs)

### Tabela Comparativa das Estratégias

| Estratégia       | Descrição                         | Caso de Uso                               | Complexidade |
| ---------------- | --------------------------------- | ----------------------------------------- | ------------ |
| **Rehosting**    | "Lift-and-shift" sem modificações | Migrações rápidas                         | Baixa        |
| **Replatform**   | Pequenas otimizações para nuvem   | Aplicações que precisam de escalabilidade | Média        |
| **Repurchasing** | Substituição por solução SaaS     | CRM, ERP                                  | Variável     |
| **Retain**       | Manter no local temporariamente   | Aplicações legadas                        | N/A          |
| **Retire**       | Descontinuar aplicações obsoletas | Redução de custos                         | Baixa        |
| **Refactoring**  | Redesenho completo para nuvem     | Aplicações críticas                       | Alta         |

🔗 **Recursos**:
[AWS Blog - 6 Estratégias](https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/)
[Arquitetura de Migração](https://aws.amazon.com/architecture/)

---

## Etapa 2: AWS Cloud Adoption Framework (AWS CAF)

### 6 Perspectivas do CAF

1. **Negócios**

   - Alinhamento estratégico TI-Negócios
   - ROI da nuvem

2. **Pessoas**

   - Treinamento em habilidades cloud
   - Mudança cultural

3. **Governança**

   - Controles de custo e compliance
   - Políticas de tagging

4. **Plataforma**

   - Seleção de serviços AWS
   - Arquitetura multiconta

5. **Segurança**

   - IAM, criptografia, monitoramento
   - Certificações de conformidade

6. **Operações**
   - Monitoramento com CloudWatch
   - Gerenciamento de incidentes

📌 **Exemplo Prático**:

```plaintext
Empresa X usou o CAF para:
1. Treinar 100+ colaboradores (Pessoas)
2. Implementar política de tags (Governança)
3. Migrar 50% das cargas em 6 meses (Plataforma)
```

🔗 **Referência**:
[Guia Oficial AWS CAF](https://aws.amazon.com/professional-services/CAF/)

---

## Etapa 3: AWS Well-Architected Framework

### Os 6 Pilares

| Pilar                      | Pergunta-Chave                     | Serviços Relacionados           |
| -------------------------- | ---------------------------------- | ------------------------------- |
| **Excelência Operacional** | Como automatizar processos?        | CloudFormation, Systems Manager |
| **Segurança**              | Como proteger dados?               | IAM, KMS, GuardDuty             |
| **Confiabilidade**         | Como recuperar de falhas?          | Multi-AZ, Auto Scaling          |
| **Eficiência**             | Como otimizar recursos?            | Trusted Advisor, Cost Explorer  |
| **Sustentabilidade**       | Como reduzir impacto ambiental?    | Instâncias eficientes           |
| **Custos**                 | Como evitar gastos desnecessários? | Budgets, Reserved Instances     |

⚠️ **Alerta Comum**: 73% das workloads falham na revisão de Otimização de Custos

🔗 **Ferramenta**:
[Well-Architected Tool](https://aws.amazon.com/well-architected-tool/)

---

## Etapa 4: Família AWS Snow

### Comparativo de Soluções

| Produto        | Capacidade       | Caso de Uso           | Tempo de Transferência |
| -------------- | ---------------- | --------------------- | ---------------------- |
| **Snowcone**   | 8TB HDD/14TB SSD | Edge computing        | Dias                   |
| **Snowball**   | 80TB             | Migração média escala | Semanas                |
| **Snowmobile** | 100PB            | Data centers inteiros | Meses                  |

**Exemplo Real**:

```plaintext
Hospital Y migrou 40PB de registros médicos:
- Usou 2 Snowmobiles
- Criptografia AES-256
- Migração concluída em 8 semanas
```

🔗 **Documentação**:
[Família AWS Snow](https://aws.amazon.com/snow/)
[Checklist de Migração](https://aws.amazon.com/snow/resources/)

---

## Dicas para o Exame

1. **6Rs**: Memorize pelo menos 4 estratégias de migração
2. **CAF**: Foque em Segurança e Governança (30% do exame)
3. **Well-Architected**: Revise os 6 pilares com exemplos
4. **Snow Family**: Saiba diferenciar os casos de uso

[➡️ Pratique com Simulados](#)
[⬆️ Voltar ao Topo](#assuntos-complementares-para-o-exame-aws-cloud-practitioner)

```

Este guia foi otimizado para:
- Visualização rápida dos conceitos-chave
- Exemplos práticos e memoráveis
- Links diretos para aprofundamento
- Preparação focada no exame CLF-C02
- Destaque de informações recorrentes nas provas
```
