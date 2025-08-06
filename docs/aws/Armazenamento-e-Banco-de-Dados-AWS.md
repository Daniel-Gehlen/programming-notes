# Armazenamento e Banco de Dados AWS

## Objetivo Geral

Conhecer os principais serviços de Armazenamento e Banco de Dados da AWS e compreender seus casos de uso.

## Percurso

### Etapa 1: Armazenamento de Dados em Nuvem

#### Tipos de Armazenamento

| Tipo                                          | Descrição                                 | Casos de Uso               |
| --------------------------------------------- | ----------------------------------------- | -------------------------- |
| **Armazenamento de Objetos** (Object Storage) | Dados como objetos (arquivos + metadados) | Data lakes, mídias, backup |
| **Armazenamento de Arquivos** (File Storage)  | Sistemas de arquivos compartilhados       | Dev tools, diretórios      |
| **Armazenamento de Blocos** (Block Storage)   | Discos virtuais (HDD/SSD)                 | VMs, containers, DBs       |

🔗 **Links úteis**:
[Armazenamento em Nuvem](https://aws.amazon.com/storage/)
[Armazenamento de Arquivos](https://aws.amazon.com/storage/file/)
[Armazenamento de Objetos](https://aws.amazon.com/s3/)
[Armazenamento de Blocos](https://aws.amazon.com/ebs/)

---

### Etapa 2: Amazon EBS (Elastic Block Store)

#### Características

- Armazenamento em blocos persistente para EC2
- Tipos de volumes:
  - **HDD**: Econômico (throughput otimizado)
  - **SSD**: Alto desempenho (IOPS provisionados)
- Snapshots incrementais para backup

🔗 **Links úteis**:
[Amazon EBS](https://aws.amazon.com/ebs/)
[Tipos de Volumes](https://aws.amazon.com/ebs/volume-types/)
[Backups EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html)

---

### Etapa 3: Amazon S3 (Simple Storage Service)

#### Principais Recursos

- **Estrutura**: Buckets > Objetos (Chave+Valor+Metadados)
- **Classes de Armazenamento**:
  | Classe | Latência | Custo | Caso de Uso |
  |--------|----------|-------|-------------|
  | S3 Standard | Baixa | Alto | Dados acessados frequentemente |
  | S3 Glacier | Minutos-Horas | Muito baixo | Arquivamento |

🔗 **Links úteis**:
[Amazon S3](https://aws.amazon.com/s3/)
[Classes de Armazenamento](https://aws.amazon.com/s3/storage-classes/)
[S3 Intelligent-Tiering](https://aws.amazon.com/s3/storage-classes/intelligent-tiering/)

---

### Etapa 4: Amazon EFS (Elastic File System)

#### Diferenciais

- Sistema de arquivos compartilhado
- Escala automática (PB-scale)
- Compatível com NFSv4
- Casos de uso: CI/CD, machine learning

🔗 **Links úteis**:
[Amazon EFS](https://aws.amazon.com/efs/)
[Documentação EFS](https://docs.aws.amazon.com/efs/)

---

### Etapa 5: Amazon RDS (Relational Database Service)

#### Bancos Suportados

- MySQL, PostgreSQL, MariaDB
- Oracle, SQL Server
- **Amazon Aurora** (5x mais rápido que MySQL)

#### Vantagens

- Gerenciamento automatizado
- Multi-AZ para alta disponibilidade
- Backups automáticos

🔗 **Links úteis**:
[Amazon RDS](https://aws.amazon.com/rds/)
[Amazon Aurora](https://aws.amazon.com/rds/aurora/)

---

### Etapa 6: DynamoDB (NoSQL)

#### Características Chave

- Performance single-digit ms
- Escala automática
- Modelo chave-valor/documento
- Ideal para: apps serverless, jogos, IoT

🔗 **Links úteis**:
[DynamoDB](https://aws.amazon.com/dynamodb/)
[Best Practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)

---

### Etapa 7: Outros Serviços de Banco de Dados

#### Comparativo

| Serviço         | Tipo       | Diferencial                    |
| --------------- | ---------- | ------------------------------ |
| **DocumentDB**  | Documentos | Compatível com MongoDB         |
| **Neptune**     | Grafos     | Para relacionamentos complexos |
| **QLDB**        | Ledger     | Histórico imutável             |
| **ElastiCache** | Cache      | Redis/Memcached                |

🔗 **Links úteis**:
[DocumentDB](https://aws.amazon.com/documentdb/)
[Neptune](https://aws.amazon.com/neptune/)
[QLDB](https://aws.amazon.com/qldb/)

---

### Etapa 8: Big Data com Amazon Redshift

- Data warehouse para análises em PB-scale
- Integração com BI tools (Tableau, QuickSight)
- 10x mais rápido que soluções tradicionais

🔗 **Links úteis**:
[Amazon Redshift](https://aws.amazon.com/redshift/)
[Getting Started](https://docs.aws.amazon.com/redshift/latest/gsg/)
