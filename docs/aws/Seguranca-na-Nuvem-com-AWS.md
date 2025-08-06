# Segurança na Nuvem com AWS

## Objetivo Geral

Apresentar e discutir os conceitos de segurança na nuvem com AWS, incluindo serviços e recursos relacionados.

## Percurso

### Etapa 1: Modelo de Responsabilidade Compartilhada

#### Divisão de Responsabilidades

| Área                   | Responsabilidade AWS                  | Responsabilidade Cliente           |
| ---------------------- | ------------------------------------- | ---------------------------------- |
| **Segurança DA Nuvem** | Infraestrutura física, hardware, rede | -                                  |
| **Segurança NA Nuvem** | -                                     | Dados, configurações, IAM, patches |

🔹 **Exemplo Prático**:

- AWS garante a segurança dos data centers
- Cliente gerencia quem acessa seus buckets S3

🔗 **Referências**:
[Modelo de Responsabilidade](https://aws.amazon.com/compliance/shared-responsibility-model/)
[Vídeo Explicativo](https://youtu.be/aws-security-model)

---

### Etapa 2: Criptografia

#### Tipos de Criptografia

| Tipo            | Serviços Aplicáveis | Solução AWS                  |
| --------------- | ------------------- | ---------------------------- |
| **Em Repouso**  | EBS, S3, RDS        | AWS KMS (chaves gerenciadas) |
| **Em Trânsito** | EC2, API Gateway    | Certificados TLS/SSL         |

#### AWS KMS (Key Management Service)

- Criação e rotação automática de chaves
- Integração nativa com:
  - S3 (SSE-KMS)
  - EBS (encryption-by-default)

🔗 **Referências**:
[AWS KMS](https://aws.amazon.com/kms/)
[Guia de Criptografia](https://docs.aws.amazon.com/security/encryption)

---

### Etapa 3: IAM (Identity and Access Management)

#### Melhores Práticas

1. **Nunca usar root** para operações diárias
2. **MFA obrigatório** para usuários privilegiados
3. **Princípio do menor privilégio**
4. **Roles** para serviços AWS

```json
// Exemplo de política IAM (JSON)
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::meu-bucket/*"
    }
  ]
}
```

🔗 **Referências**:
[IAM Best Practices](https://aws.amazon.com/iam/features/)
[Documentação IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/)

---

### Etapa 4: AWS Organizations

#### Funcionalidades Chave

- **SCPs (Service Control Policies)**:
  ```yaml
  # Exemplo de SCP para bloquear regiões
  Effect: Deny
  Action: *
  Resource: *
  Condition:
    StringNotEquals:
      aws:RequestedRegion: us-east-1
  ```
- **Faturamento consolidado**
- **Isolamento de contas** (dev/prod)

🔗 **Referências**:
[AWS Organizations](https://aws.amazon.com/organizations/)
[SCPs na Prática](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)

---

### Etapa 5: Conformidade

#### Serviços Essenciais

| Serviço          | Função                     | Certificações Suportadas |
| ---------------- | -------------------------- | ------------------------ |
| **AWS Artifact** | Relatórios de conformidade | SOC2, ISO 27001          |
| **AWS Config**   | Auditoria contínua         | HIPAA, GDPR              |

🔹 **Checklist de Conformidade**:
✅ Habilitar registro no CloudTrail
✅ Criptografar todos os buckets S3

🔗 **Referências**:
[Centro de Conformidade](https://aws.amazon.com/compliance/)
[AWS Artifact](https://aws.amazon.com/artifact/)

---

### Etapa 6: Serviços Avançados

#### Comparativo de Serviços

| Serviço        | Protege Contra   | Camada OSI | Integração                |
| -------------- | ---------------- | ---------- | ------------------------- |
| **AWS WAF**    | SQLi, XSS        | Aplicação  | ALB, API Gateway          |
| **AWS Shield** | DDoS             | Rede       | CloudFront, EC2           |
| **GuardDuty**  | Ameaças internas | -          | CloudTrail, VPC Flow Logs |

🔹 **Cenário Típico**:
CloudFront + WAF + Shield Advanced para proteção de aplicações web

🔗 **Referências**:
[Proteção Contra DDoS](https://aws.amazon.com/shield/)
[Amazon GuardDuty](https://aws.amazon.com/guardduty/)
[Detecção de Vulnerabilidades](https://aws.amazon.com/inspector/)
