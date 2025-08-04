# Infraestrutura Global AWS

## Objetivo Geral

Compreender o que é Infraestrutura Global AWS e sua estrutura adjacente, além de conhecer sobre a provisão de recursos e a interação com serviços.

## Percurso

### Etapa 1: O que é Infraestrutura Global AWS?

#### Definição

A **Infraestrutura Global AWS** refere-se aos datacenters distribuídos globalmente que fornecem os serviços da AWS. É composta por **Regiões** e **Zonas de Disponibilidade**.

#### Vantagens

- Alta disponibilidade
- Tolerância a falhas

#### Recursos

- Infraestrutura Global AWS

---

### Etapa 2: Regiões e Zonas de Disponibilidade

#### Regiões

- Locais onde estão hospedados os datacenters da AWS.
- Cada Região é conectada por uma rede de alta velocidade.
- Proporciona:
  - Isolamento de dados
  - Conformidade com regulamentações locais.

#### Zonas de Disponibilidade (AZs)

- Também chamadas de **Availability Zones**.
- Agrupamento de datacenters isolados dentro de uma Região.
- Características:
  - Redundância em rede, energia e conectividade.
  - Proximidade para baixa latência, mas distância suficiente para evitar que um desastre afete múltiplas AZs.
- **Recomendação**: Execute aplicações em pelo menos duas AZs.

#### Recursos

- Zonas de Disponibilidade e Regiões
- Infraestrutura Global AWS - Regiões e AZs
- Infraestrutura Regional e Serviços

---

### Etapa 3: Pontos de Presença

#### Definição

Pontos de presença, também chamados de **Edge Locations**, são locais específicos ao redor do mundo que distribuem conteúdo de forma rápida.

#### Serviços Relacionados

- **Amazon CloudFront**:
  - Serviço de entrega de conteúdo (CDN).
  - Melhora a performance com:
    - Baixa latência
    - Alta taxa de transferência
  - Fornece conteúdo próximo aos usuários.
- **Amazon Route 53**:
  - Serviço de DNS que ajuda a redirecionar requisições corretamente.

#### Recursos

- Edge Networking AWS
- Amazon CloudFront - Início Rápido
- Como Funciona o CloudFront
- Recursos do CloudFront

---

### Etapa 4: Provisionamento de Recursos na AWS

#### Interação com Serviços AWS

- **Console de Gerenciamento**:
  - Interface web para gerenciar recursos.
  - Acesso em: [Console AWS](https://aws.amazon.com/console/)
- **AWS CLI**:
  - Ferramenta de linha de comando instalada localmente que opera com APIs da AWS.
  - Acesso em: [AWS CLI](https://aws.amazon.com/cli/)
- **AWS SDKs**:
  - Kits de desenvolvimento para acessar APIs AWS em várias linguagens (Java, C#, Go, Python, JavaScript).
  - Acesso:
    - [AWS SDK para Java](https://aws.amazon.com/sdk-for-java/)
    - [AWS SDK para .NET](https://aws.amazon.com/sdk-for-net/)
    - [AWS SDK para Go](https://aws.amazon.com/sdk-for-go/)

#### Ferramentas de Provisionamento

- **Elastic Beanstalk**:
  - Serviço para implantação e gerenciamento de aplicações.
  - Acesso em: [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- **CloudFormation**:
  - Serviço para modelar e provisionar recursos usando arquivos de configuração.
  - Acesso em: [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
