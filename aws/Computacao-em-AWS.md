# Computação em AWS

## Objetivo Geral

Conhecer os principais serviços de computação na AWS.

## Percurso

### Etapa 1: Elastic Compute Cloud – EC2

#### Cenário Real

Imagine que você está montando um data center. Considere:

- Custos elevados de infraestrutura
- Necessidade de escalabilidade
- Risco de infraestrutura não suportar crescimento

#### EC2 - Elastic Compute Cloud

- Oferece capacidade computacional segura e redimensionável
- Permite configurar:
  - CPU
  - Memória
  - Rede
  - Armazenamento
  - Sistema operacional
- Modelo de preços baseado no uso

#### Conceito Chave - Instância

Servidor virtual na nuvem AWS com configurações de:

- Memória
- CPU
- Disco
- Rede
- Sistema operacional

#### Tipos de Instância

| Tipo                              | Descrição                                       | Casos de Uso                              |
| --------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| **Uso Geral**                     | Equilíbrio entre computação, memória e rede     | Aplicações web, servidores de jogos       |
| **Otimizadas para Computação**    | Alto desempenho de processadores                | Processamento em lote, análise científica |
| **Otimizadas para Memória**       | Alto desempenho para processar dados na memória | Bancos de dados, análise em tempo real    |
| **Computação Acelerada**          | Usa hardware especializado (GPUs/FPGAs)         | Machine Learning, processamento gráfico   |
| **Otimizadas para Armazenamento** | Alto throughput de armazenamento                | Data warehouses, sistemas de arquivos     |

#### Recursos

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Documentação do EC2](https://docs.aws.amazon.com/ec2/)
- [Tipos de Instâncias](https://aws.amazon.com/ec2/instance-types/)

---

### Etapa 2: Amazon EC2 Auto Scaling

#### Cenário com EC2

Escalonamento para:

- Capacidade total
- Capacidade média
- Demanda em tempo real

#### Amazon EC2 Auto Scaling

- Escalabilidade horizontal automática
- Melhora tolerância a falhas
- Tipos de scaling:
  - **Preditivo**: Baseado em previsões
  - **Dinâmico**: Baseado em métricas em tempo real
- Otimização de custos

#### Recursos

- [AWS Auto Scaling](https://aws.amazon.com/autoscaling/)
- [Escalabilidade](https://aws.amazon.com/autoscaling/scaling/)
- [Scaling Preditivo](https://aws.amazon.com/autoscaling/predictive-scaling/)
- [Scaling Dinâmico](https://aws.amazon.com/autoscaling/dynamic-scaling/)

---

### Etapa 3: Elastic Load Balancing – ELB

#### ELB

- Balanceamento de carga para:
  - Aplicações
  - Gateways
  - Redes
- Escalabilidade automática
- Alta disponibilidade
- Tipos:
  - Application Load Balancer
  - Network Load Balancer
  - Gateway Load Balancer

#### Recursos

- [AWS Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/)
- [Documentação do ELB](https://docs.aws.amazon.com/elasticloadbalancing/)

---

### Etapa 4: Serviços de Mensageria

#### Amazon SQS (Simple Queue Service)

- Sistema de filas de mensagens
- Modelo produtor-consumidor
- Mensagens persistidas até processamento

#### Amazon SNS (Simple Notification Service)

- Sistema pub/sub (publicação/assinatura)
- Tópicos para distribuição de mensagens
- Notificações em tempo real

#### Recursos

- [AWS Messaging](https://aws.amazon.com/messaging/)
- [Amazon SQS](https://aws.amazon.com/sqs/)
- [Amazon SNS](https://aws.amazon.com/sns/)

---

### Etapa 5: Computação sem Servidor

#### AWS Lambda

- Execução de código sem gerenciar servidores
- Cobrança por tempo de execução
- Integração com diversos serviços AWS
- Suporte a múltiplas linguagens:
  - Python
  - Node.js
  - Java
  - C#
  - Go

#### Recursos

- [AWS Lambda - Comece Aqui](https://aws.amazon.com/lambda/getting-started/)
- [Documentação do Lambda](https://docs.aws.amazon.com/lambda/)

---

### Etapa 6: Containers em AWS

#### Serviços Principais

| Serviço         | Descrição                                       |
| --------------- | ----------------------------------------------- |
| **Amazon ECR**  | Registro privado para imagens Docker            |
| **Amazon ECS**  | Serviço de orquestração de containers           |
| **Amazon EKS**  | Serviço gerenciado de Kubernetes                |
| **AWS Fargate** | Execução de containers sem gerenciar servidores |

#### Recursos

- [AWS Containers](https://aws.amazon.com/containers/)
- [Amazon ECR](https://aws.amazon.com/ecr/)
- [Amazon ECS](https://aws.amazon.com/ecs/)
- [Amazon EKS](https://aws.amazon.com/eks/)
