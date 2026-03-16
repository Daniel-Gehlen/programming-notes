# Guia Completo para o Exame AWS Certified Cloud Practitioner (CLF-C02)

## Visão Geral do Exame

- **Propósito**: Validar conhecimento fundamental sobre nuvem AWS
- **Nível**: Básico (iniciantes)
- **Experiência Recomendada**: Até 6 meses com AWS
- **Duração**: 90 minutos
- **Formato**: 65 questões (50 contam para nota)
- **Pontuação**: 700/1000 para aprovação

## Domínios do Exame e Peso

### Domínio 1: Conceitos da Nuvem (24%)

| Tópico                         | Detalhes                                               |
| ------------------------------ | ------------------------------------------------------ |
| **Benefícios AWS**             | Economia de custos, elasticidade, modelo pay-as-you-go |
| **Well-Architected Framework** | 6 pilares (Excelência Operacional, Segurança, etc.)    |
| **Migração para Nuvem**        | 6 Rs (Rehost, Replatform, Refactor)                    |
| **Economia da Nuvem**          | CAPEX vs OPEX, custos totais de propriedade            |

### Domínio 2: Segurança e Conformidade (30%)

| Tópico                             | Detalhes                                |
| ---------------------------------- | --------------------------------------- |
| **Responsabilidade Compartilhada** | AWS vs Cliente                          |
| **IAM**                            | Usuários, Grupos, Roles, Políticas      |
| **Proteção de Dados**              | KMS, Criptografia (em trânsito/repouso) |
| **Serviços de Segurança**          | WAF, Shield, GuardDuty                  |

### Domínio 3: Tecnologia (34%)

| Categoria          | Serviços Chave                 |
| ------------------ | ------------------------------ |
| **Computação**     | EC2, Lambda, Elastic Beanstalk |
| **Armazenamento**  | S3 (classes), EBS, EFS         |
| **Banco de Dados** | RDS, DynamoDB, Aurora          |
| **Rede**           | VPC, Route 53, CloudFront      |

### Domínio 4: Custos e Suporte (12%)

| Tópico               | Ferramentas                         |
| -------------------- | ----------------------------------- |
| **Modelos de Preço** | On-Demand, Reserved, Spot           |
| **Otimização**       | Cost Explorer, Budgets              |
| **Suporte**          | Planos (Basic, Developer, Business) |

## Tipos de Questões

- **Múltipla Escolha**: 1 correta em 4 opções
- **Múltipla Resposta**: 2+ corretas em 5+ opções
- **15 questões experimentais** (não contam)

## Estratégia de Estudo

### Plano de 4 Semanas

1. **Semana 1-2**: Fundamentos AWS + Domínio 1
   - Assistir [AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/)
   - Criar conta Free Tier

2. **Semana 3**: Domínios 2 e 3
   - Praticar com IAM, S3, EC2
   - Estudar [Whitepapers de Segurança](https://aws.amazon.com/security/)

3. **Semana 4**: Domínio 4 + Revisão
   - Simulados (mínimo 3)
   - Revisar erros com documentação

## Recursos Essenciais

| Tipo             | Link                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| **Guia Oficial** | [AWS Exam Guide](https://aws.amazon.com/certification/certified-cloud-practitioner/) |
| **Simulados**    | [ExamTopics](https://www.examtopics.com/exams/amazon/clf-c02/)                       |
| **Flashcards**   | [Anki AWS CCP](https://ankiweb.net/shared/decks/aws)                                 |
| **Laboratórios** | [Qwiklabs AWS](https://www.qwiklabs.com/quests/66)                                   |

## Dicas para o Exame

1. **Gerenciamento de Tempo**: ~1 minuto por questão
2. **Eliminação**: Descartar opções claramente erradas
3. **Palavras-Chave**: Identificar termos como "mais econômico", "mais seguro"
4. **Casos de Uso**:
   - Migração de banco: **AWS DMS**
   - CDN: **CloudFront**
   - Computação sem servidor: **Lambda**

## Exemplo de Questão

**Qual serviço fornece capacidade computacional sob demanda e redimensionável?**

- [ ] Amazon S3
- [x] Amazon EC2
- [ ] AWS Lambda
- [ ] Amazon RDS

💡 **Explicação**: EC2 oferece servidores virtuais escaláveis, enquanto Lambda é para funções event-driven.

[➡️ Próximos Passos](#estratégia-de-estudo)

```

Este guia foi formatado para:
1. Organização visual clara por domínios
2. Links diretos para recursos oficiais
3. Dicas práticas de estudo e exame
4. Exemplos concretos de questões
5. Plano de estudo estruturado

Recomendo salvar como referência e complementar com hands-on na Free Tier!
```
