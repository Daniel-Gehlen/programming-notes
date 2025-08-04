# Exame de Certificação AWS Cloud Practitioner

## Objetivo Geral
Apresentar uma visão geral do exame de certificação AWS Certified Cloud Practitioner.

## Percurso

### Etapa 1: Estrutura Geral do Exame

#### A Prova é para Mim?
**Recomendação AWS**:
- 6 meses de exposição à AWS Cloud
- Compreensão básica dos serviços de TI e seus usos na AWS
- Conhecimento dos principais serviços da AWS, modelos de cobrança e preços, conceitos de segurança e impacto da nuvem nos negócios.

#### Domínios Abordados

#### Tipos de Questão
- Múltipla escolha, Resposta múltipla

#### Quantidade
- 65 questões no total, sendo 50 avaliadas

#### Aprovação
- 70% (Pontuação de 0 a 1000, mínimo 700)

#### Exemplo de Questão
**Pergunta**: Qual serviço da AWS simplificaria a migração de um banco de dados para a AWS?
- AWS Storage Gateway
- AWS Database Migration Service (AWS DMS)
- Amazon EC2
- Amazon AppStream 2.0

#### Recursos
- Certificação AWS Certified Cloud Practitioner
- Guia do Exame
- Repositório de Estudos
- Questões de Amostra

### Etapa 2: Dicas de Estudo e Preparo para o Exame

#### Dicas de Estudo
- **Sugestões**: Repetição espaçada, mapas mentais
- **Simulados**: Faça muitos simulados!
- **Documentação da AWS**: Leia a documentação oficial.
- **Materiais Alternativos**: Procure outros recursos na web.
- **Compreensão dos Serviços**: Entenda cada serviço que estiver estudando.

#### Dicas para o Dia do Exame
- **Descanso**: Descanse bem no dia anterior.
- **Chegada Antecipada**: Chegue com antecedência se for realizar o exame em um centro autorizado.
- **Instruções**: Verifique as instruções enviadas por e-mail.

#### Recursos
- Mind Maps
- Quizlet
- Curso na Udemy

---

# Introdução a Cloud

## Objetivo Geral
Entender o que é Cloud Computing, seus principais benefícios e descrever os modelos de serviço e de implantação.

## Percurso

### Etapa 1: Afinal, o que é Cloud Computing?

#### Um Mundo Pré-Cloud
- **Modelo Cliente-Servidor**: Estrutura onde servidores fornecem serviços a clientes através de uma rede.
- **Ambientes On-Premises**: Recursos de TI localizados nas instalações da empresa.
- **Virtualização**: Tecnologia para criar ambientes virtuais sobre um hardware físico.

#### Benefício Chave
- **Pagamento Conforme Uso (Pay as You Go)**: Modelo de cobrança baseado no uso real dos recursos.

#### Definição de Cloud Computing
**Cloud Computing** é a entrega de recursos de TI sob demanda através da Internet, com um modelo de precificação baseado no uso.

#### Recursos
- História da Computação em Nuvem
- O que é Cloud Computing?
- Visão Geral da AWS

### Etapa 2: Benefícios de Cloud Computing

#### Principais Benefícios
- Troque Despesas Iniciais por Despesas Variáveis: Reduza custos iniciais e pague conforme o uso.
- Pare de Tentar Adivinhar a Capacidade: Ajuste a capacidade conforme a demanda.
- Beneficie-se de Enormes Economias de Escala: Aproveite custos reduzidos de grandes provedores.
- Aumente a Velocidade e Agilidade: Provisione recursos rapidamente e com flexibilidade.
- Ter Alcance Global em Minutos: Expanda suas operações para diferentes regiões com facilidade.

#### Recursos
- Seis Vantagens da Computação em Nuvem

### Etapa 3: Modelos de Serviço

#### Definição
Modelos de serviço na nuvem são categorizados com base no tipo de serviço fornecido e na responsabilidade do usuário.

#### Tipos de Modelos de Serviço
- **IaaS (Infraestrutura como Serviço)**:
  - Descrição: Fornecimento de recursos básicos de TI como discos, memória e CPU.
  - Usuário: Sysadmin.
  - Responsabilidade: Gerenciar a infraestrutura.
- **PaaS (Plataforma como Serviço)**:
  - Descrição: Plataforma para implantar aplicações sem se preocupar com a infraestrutura subjacente.
  - Usuário: Desenvolvedores.
  - Responsabilidade: Foco no desenvolvimento e implantação de aplicações.
- **SaaS (Software como Serviço)**:
  - Descrição: Produto completo, executado e gerenciado pelo provedor.
  - Usuário: Usuário final.
  - Responsabilidade: Usar o software sem se preocupar com a infraestrutura.

#### Recursos
- Tipos de Computação em Nuvem

### Etapa 4: Modelos de Implantação

#### Definição
Modelos de implantação descrevem como os recursos de computação são estruturados e distribuídos.

#### Tipos de Modelos de Implantação
- **On-Premise**: Recursos e infraestrutura localizados nas instalações da empresa.
- **Híbrido**: Combinação de ambientes on-premises e nuvem.
- **Cloud**: Recursos totalmente gerenciados e hospedados na nuvem.

#### Recursos
- Tipos de Computação em Nuvem
- Definição de Nuvem Privada
- Visão Geral da AWS
- Modelos de Implantação de Cloud

---

# Introdução à Infraestrutura Global AWS

## Objetivo Geral
Compreender a Infraestrutura Global AWS, a estrutura adjacente, e conhecer sobre o provisionamento de recursos e interação com serviços.

## Percurso

### Etapa 1: O que é Infraestrutura Global AWS?

#### Definição
A Infraestrutura Global AWS é composta por datacenters espalhados pelo mundo que fornecem os diversos serviços disponíveis na AWS. Inclui **Regiões** e **Zonas de Disponibilidade**.

#### Vantagens
- Alta disponibilidade
- Tolerância a falhas

#### Recursos
- Infraestrutura Global AWS

### Etapa 2: Regiões e Zonas de Disponibilidade

#### Regiões
- Locais onde estão hospedados os datacenters da AWS.
- Cada Região possui locais isolados chamados **Zonas de Disponibilidade**.
- Todas as regiões estão conectadas por uma rede de alta velocidade.
- Proporcionam isolamento de dados e regulação local.

#### Zonas de Disponibilidade (AZs)
- Agrupamento de datacenters isolados dentro de uma Região.
- Possuem rede, energia e conectividade redundantes.
- Estão próximas o suficiente para manter baixa latência, mas longe o suficiente para evitar que um desastre afete mais de uma AZ.
- **Recomendação**: Execute pelo menos em duas AZs para maior resiliência.

### Etapa 3: Pontos de Presença

#### Definição
Também conhecidos como **Edge Locations** ou **Locais de Borda**. São pontos específicos ao redor do globo que distribuem conteúdo de forma rápida e eficiente.

#### Funções
- **Distribuição de Conteúdo**:
  - **Amazon CloudFront**:
    - Serviço de entrega de conteúdo (CDN).
    - Melhora a performance com baixa latência e alta taxa de transferência.
    - Provê conteúdo o mais próximo possível do usuário.
- **Serviço de DNS**:
  - **Amazon Route 53**:
    - Ajuda a redirecionar corretamente as requisições de DNS.

#### Recursos
- Edge Networking
- Amazon CloudFront

### Etapa 4: Provisionamento de Recursos

#### Métodos de Interação com Serviços AWS
- **Console de Gerenciamento**:
  - Interface web para gerenciar e provisionar recursos.
- **AWS CLI**:
  - Interface de linha de comando instalada na sua máquina.
  - Opera com APIs da AWS.
- **AWS SDKs**:
  - Kits de desenvolvimento de software para acesso às APIs da AWS.
  - Disponíveis para várias linguagens: Java, C#, Go, Python, JavaScript.

#### Provisionamento de Infraestrutura
- **Elastic Beanstalk**:
  - Plataforma como serviço (PaaS) para deploy de aplicações.
- **CloudFormation**:
  - Serviço para criar e gerenciar recursos AWS usando templates.

#### Recursos
- Console de Gerenciamento AWS
- AWS CLI
- AWS SDK para Java
- AWS SDK para .NET
- AWS SDK para Go
- Elastic Beanstalk
- CloudFormation

---

# Computação em AWS

## Objetivo Geral
Conhecer os principais serviços de computação na AWS.

## Percurso

### Etapa 1: Elastic Compute Cloud – EC2

#### Cenário Real
- **Desafio**: Montar um data center pode exigir um investimento significativo.
- **Questão**: O investimento pode não ser necessário se a demanda variar.
- **Solução Ideal**:
  - Economia de Recursos e Custos: Evita o gasto excessivo com infraestrutura.
  - Escalabilidade e Elasticidade: Ajusta recursos conforme a demanda.
  - Disponibilidade: Garante que a infraestrutura suporte o crescimento do negócio.

#### Definição
**EC2 (Elastic Compute Cloud)**:
- Fornece capacidade computacional segura e redimensionável na nuvem.

#### Conceito Chave
- **Instância**: Servidor virtual na nuvem AWS com configurações de memória, CPU, disco, rede e sistema operacional.

#### Tipos de Instância
- **Uso Geral**: Equilíbrio entre computação, memória e rede.
- **Otimizadas para Computação**: Alto desempenho de processadores.
- **Otimizadas para Memória**: Processamento eficiente de grandes quantidades de dados na memória.
- **Computação Acelerada**: Usa aceleração de hardware ou coprocessadores.
- **Otimizadas para Armazenamento**: Acesso de leitura e gravação com grande volume de dados.

#### Links Úteis
- Amazon EC2
- Conceitos do EC2
- Tipos de Instância EC2

### Etapa 2: Amazon EC2 Auto Scaling

#### Cenário com EC2
Escalar para capacidade total, média ou conforme a necessidade.

#### Amazon EC2 Auto Scaling
- Proporciona escalabilidade horizontal.
- Melhora a tolerância a falhas com identificação de instâncias indisponíveis e implantação multi-AZ.
- Melhora o gerenciamento de custos.

#### Tipos de Escalabilidade
- **Scaling Preditivo**: Ajusta recursos com base em previsões de demanda.
- **Scaling Dinâmico**: Ajusta recursos conforme a demanda em tempo real.
- **Combinação dos Dois**: Possível combinar escalabilidade preditiva e dinâmica.

#### Links Úteis
- Amazon EC2 Auto Scaling
- Escalabilidade Preditiva
- Escalabilidade Dinâmica

### Etapa 3: Elastic Load Balancing – ELB

#### ELB – Elastic Load Balancing
- Balanceamento de carga de aplicação, gateway e rede.
- Escopo regional com escalabilidade automática.
- Trabalha em conjunto com EC2 Auto Scaling para criar aplicações altamente disponíveis.

#### Links Úteis
- Elastic Load Balancing
- Introdução ao ELB

### Etapa 4: Serviços de Mensageria

#### Amazon Simple Queue Service – SQS
- Sistema de enfileiramento de mensagens.
- Um usuário envia uma mensagem para a fila; outro lê, processa e a exclui.

#### Amazon Simple Notification Service – SNS
- Sistema pub/sub com tópicos.
- Usuários publicam mensagens em tópicos e assinantes recebem.

#### Links Úteis
- Amazon SQS
- Amazon SNS

### Etapa 5: Computação Sem Servidor

#### Definição
**Computação Sem Servidor (Serverless)**: Execução de código sem necessidade de provisionar ou gerenciar servidores. A capacidade é ajustada automaticamente pelo serviço, sem configuração adicional.

#### Serviço Principal
- **AWS Lambda**: Permite a execução de código sem provisionamento de servidores.

#### Links Úteis
- AWS Lambda

---

# Redes em AWS

### Etapa 1: Amazon VPC

#### Definição
**Amazon VPC (Virtual Private Cloud)**: Permite construir e configurar redes virtuais na AWS.

#### Conceitos Chave
- **VPC**: Rede virtual isolada onde você pode definir sub-redes privadas e públicas.
- **Caso de Uso**: Organizar recursos como se estivessem em um escritório, mas na nuvem AWS.

#### Links Úteis
- O que é Amazon VPC?
- Página do Amazon VPC
- Vídeo de Introdução ao Amazon VPC

### Etapa 2: Conectividade com AWS

#### Conectando sua VPC
- **Gateway da Internet**: Conecta sua VPC à Internet.
- **AWS Direct Connect**: Conecta sua VPC a uma rede local ou a outros serviços.

#### Links Úteis
- Gateway da Internet
- Vídeo sobre Gateway da Internet
- Conexões VPN

### Etapa 3: Sub-redes e Listas de Controle de Acesso

#### Controle de Tráfego
- **Network ACLs (Access Control Lists)**:
  - Controle o tráfego de entrada e saída de sub-redes.
  - Comportamento **Stateless**: Permite todo tráfego por padrão, com permissões explícitas.
- **Grupos de Segurança**:
  - Controle o tráfego de entrada e saída de instâncias EC2.
  - Comportamento **Stateful**: Permite tráfego de saída por padrão e nega tráfego de entrada por padrão, permitindo tráfego de resposta.

#### Comparação
- **Network ACLs**: Segurança a nível de sub-rede, Stateless.
- **Grupos de Segurança**: Segurança a nível de instância EC2, Stateful.

#### Links Úteis
- Network ACLs
- Grupos de Segurança

---

# Armazenamento e Banco de Dados

## Objetivo Geral
Conhecer os principais serviços de armazenamento e banco de dados da AWS e compreender seus casos de uso alvo.

## Percurso

### Etapa 1: Armazenamento de Dados em Nuvem

#### Tipos de Armazenamento
- **Armazenamento de Objetos (Object Storage)**:
  - Descrição: Dados armazenados como objetos (arquivos e metadados).
  - Características: Dados não estruturados.
  - Casos de Uso: Data lakes, mídias, backup e recuperação.
- **Armazenamento de Arquivos (File Storage)**:
  - Descrição: Sistemas de arquivos compartilhados.
  - Características: Permite acesso por meio de servidores, aplicações e usuários.
  - Casos de Uso: Ferramentas de desenvolvimento, diretórios pessoais.
- **Armazenamento de Blocos (Block Storage)**:
  - Descrição: Armazenamento de blocos em HDD ou SSD.
  - Características: Dispositivo com diferentes configurações de leitura e escrita.
  - Casos de Uso: Máquinas virtuais, containers, banco de dados.

#### Links Úteis
- O que é Armazenamento em Nuvem?
- O que é Armazenamento de Arquivos?
- O que é Armazenamento de Objetos?
- O que é Armazenamento de Blocos?

### Etapa 2: Amazon Elastic Block Store (EBS)

#### Tipos de Armazenamento
- **Volume Instance Store**:
  - Descrição: Armazenamento de blocos anexado fisicamente ao computador host.
  - Características: Ideal para dados temporários como buffers, caches, dados de rascunho.
  - Perda de Dados: Se ocorrer falha de disco, instância parada, hibernada ou encerrada.
- **Amazon Elastic Block Store (EBS)**:
  - Descrição: Armazenamento em blocos projetado para Amazon EC2.
  - Funcionamento:
    - Defina o tipo do volume.
    - Escolha tamanho e configurações.
    - Anexe o volume a uma instância EC2.

#### Tipos de Volume
- **HDD (Hard Disk Drive)**: Mais lento e barato.
- **SSD (Solid State Drive)**: Mais rápido e caro.

#### Links Úteis
- Amazon EBS
- EBS vs Instance Store
- Tipos de Volume EBS
- Snapshots EBS

### Etapa 3: Amazon S3

#### O que é Amazon S3?
- Descrição: Serviço de armazenamento de objetos.
- Nome: S3 – Simple Storage Service.

#### Composição de um Objeto no S3
- **Chave**: Nome atribuído ao objeto, usado para recuperação.
- **Valor**: Conteúdo armazenado.
- **Metadados**: Conjunto de pares de nome-valor com informações relacionadas ao objeto.

#### Buckets S3
- Descrição: Contêineres para objetos armazenados no Amazon S3.
- Características:
  - Armazena qualquer número de objetos.
  - Objetos podem ter de 0 a 5TB.
  - Você pode ter até 100 buckets na conta.
  - Controlar acesso por objeto.
  - Utilizar versionamento de objetos.

#### Classes de Armazenamento
- **S3 Standard**:
  - Descrição: Projetado para dados acessados com frequência.
  - Características: Armazena dados em um mínimo de três Zonas de Disponibilidade.
  - Custo: Mais alto.
- **S3 Standard-Infrequent Access (S3 Standard-IA)**:
  - Descrição: Ideal para dados acessados com pouca frequência.
  - Custo: Taxa por GB de armazenamento e recuperação mais baixo.
- **S3 One Zone-Infrequent Access (S3 One Zone-IA)**:
  - Descrição: Armazena dados em uma única Zona de Disponibilidade.
  - Características: Menor custo de armazenamento.
- **S3 Intelligent-Tiering**:
  - Descrição: Ideal para dados com padrões de acesso desconhecidos ou variáveis.
  - Características: Gerencia automaticamente o ciclo de vida dos objetos otimizando custos.
- **S3 Glacier Instant Retrieval**:
  - Descrição: Dados de longa duração, raramente acessados mas que exigem recuperação rápida.
- **S3 Glacier Flexible Retrieval**:
  - Descrição: Dados que não requerem acesso imediato.
- **S3 Glacier Deep Archive**:
  - Descrição: Suporte a retenção e preservação digital de longo prazo.

#### Links Úteis
- O que é Amazon S3
- Visão Geral de Objetos no S3
- Trabalhar com Metadados de Objetos
- Visão Geral dos Buckets
- Versionamento de Buckets
- Classes de Armazenamento S3
- S3 Intelligent-Tiering

### Etapa 4: Amazon Elastic File System (EFS)

#### O que é EFS?
- Descrição: Elastic File System.
- Características:
  - Fornece um sistema de arquivos.
  - Sem servidor e totalmente elástico.
  - Escala até petabytes.
  - Compatível com protocolo NFS (Network File System).
  - Acesso simultâneo aos mesmos dados sem problemas de performance.

#### Classes de Armazenamento
- **Padrão (Instância Regional)**:
  - Tipos: Standard e Standard-IA (Infrequent Access).
- **Uma Zona (One Zone)**:
  - Tipos: One Zone e One Zone-IA (Infrequent Access).

#### Casos de Uso
- Ideal para sistemas de arquivos compartilhados que precisam de escalabilidade e alta disponibilidade.

#### Links Úteis
- Página do Produto EFS
- O que é EFS?

### Etapa 5: Amazon Relational Database Service (RDS)

#### O que é Amazon RDS?
- Descrição: Serviço de banco de dados relacional.
- Requisitos:
  - Relação de dados.
  - SQL como linguagem de consulta.
  - RDBMS (Sistema de Gerenciamento de Banco de Dados).

#### Vendors Compatíveis
- Mecanismos: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server.

#### Amazon Aurora
- Descrição: RDBMS servless com suporte a PostgreSQL e MySQL.
- Características:
  - Preço 1/10 de outros vendors.
  - Replicação multi-regional.
  - Até 15 réplicas de leitura.
  - Backup contínuo via S3.

#### Como usar na nuvem?
- **EC2**: Você usa, você gerencia.
- **RDS**: Facilita configuração e provisionamento de hardware, patches automatizados, backups, redundância, failover e recuperação de desastres.

#### Links Úteis
- Página do RDS
- O que é RDS?
- Página Amazon Aurora
- Documentação Amazon Aurora

### Etapa 6: Amazon DynamoDB

#### O que é DynamoDB?
- Descrição: Banco de dados não relacional (NoSQL).
- Características:
  - Gerenciado e servless.
  - Performance abaixo de 10 milissegundos.
  - Escala automaticamente.
  - Replicação de dados regional.
- Casos de Uso: Ideal para aplicações com muitos dados e baixa latência.

#### Estrutura dos Dados
- Organização: Armazenamento de dados não estruturados, ideal para grandes volumes de dados com alta performance.

#### Links Úteis
- Página do DynamoDB
- Documentação do DynamoDB

### Outros Serviços de Banco de Dados

#### A Escolha do Banco de Dados Correto
- Descrição: A escolha do banco de dados correto depende das necessidades do negócio. Diferentes serviços são adequados para diferentes casos de uso.

#### Amazon DocumentDB
- Descrição: Banco de dados de documentos.
- Casos de Uso: Gerenciamento de conteúdo, catálogos, perfis de usuário.
- Compatível com: Cargas de trabalho MongoDB.

#### Links Úteis
- Amazon DocumentDB

#### Amazon Neptune
- Descrição: Banco de dados de grafos.
- Casos de Uso: Redes sociais, mecanismos de recomendação, detecção de fraude, gráficos de conhecimento.

#### Links Úteis
- Amazon Neptune

#### Amazon QLDB
- Descrição: Quantum Ledger Database, banco de dados de serviço ledger.
- Características: Imutabilidade, indicado para históricos, registros digitais, transações financeiras.

#### Links Úteis
- Amazon QLDB

#### Amazon DynamoDB Accelerator (DAX)
- Descrição: Camada de cache nativa para otimizar tempo de leitura de dados no DynamoDB.

#### Links Úteis
- Amazon DAX

#### Amazon ElastiCache
- Descrição: Camada de cache sobre bancos de dados.
- Compatível com: Redis e Memcached.

#### Links Úteis
- Amazon ElastiCache

#### Para Saber Mais
- Fórum/Artigos
- Comunidade Online (Discord)
- Dúvidas?

---

# Big Data com Amazon Redshift

## Introdução
**Contexto**: Cada vez mais dados são gerados a partir de diversas fontes, exigindo respostas rápidas e inteligentes para perguntas de negócios.

## Amazon Redshift
- Descrição: Serviço de Data Warehouse para análise de Big Data.
- Características:
  - Coleta informações de muitas fontes de dados.
  - Projeta relações e tendências de dados.
  - Usando Redshift Spectrum, é possível executar comandos SQL em cima de todas as fontes de dados agrupadas.

#### Links Úteis
- Amazon Redshift
- Documentação

---

# Segurança na Nuvem com AWS

## Objetivo Geral
Apresentar e discutir os conceitos relativos à segurança na nuvem com AWS, bem como falar sobre os principais serviços e recursos relacionados.

## Percurso

### Etapa 1: O Modelo de Responsabilidade Compartilhada
- **Descrição**: Entender quem é responsável pela segurança - você ou a AWS.
- **Analogia**:
  - **Segurança na Nuvem**: Responsabilidade do cliente sobre o conteúdo e dados dentro da nuvem.
  - **Segurança da Nuvem**: Responsabilidade da AWS pela segurança física dos data centers, infraestrutura de hardware e software, infraestrutura de rede e virtualização.
- **Exemplo**:
  - **Segurança da Nuvem**: AWS é responsável pela segurança física dos data centers e pela infraestrutura que suporta os serviços.
  - **Segurança na Nuvem**: O cliente é responsável pela segurança do conteúdo e configuração dentro dos serviços da nuvem.

#### Links Úteis
- Modelo de Responsabilidade Compartilhada - AWS
- Vídeo Explicativo

### Etapa 2: Criptografia
- **O que é Criptografia**: Prática de proteger informações por meio de algoritmos codificados, hashes e assinaturas.
- **Informações que queremos proteger**:
  - **Repouso**: Dados em volumes EBS, em buckets S3.
  - **Trânsito**: Dados enviados de uma origem para um destino.
- **AWS Key Management Service (KMS)**:
  - Gerenciado, controle e gestão de chaves criptográficas.
  - Criptografia em Repouso e em Trânsito com KMS.

#### Links Úteis
- O que é Criptografia - AWS
- AWS Key Management Service
- Características do KMS

### Etapa 3: Gerenciamento de Acessos

#### AWS Identity and Access Management (IAM)
- Descrição: Serviço gratuito para gerenciamento de acessos e identidades.
- Recursos:
  - Criação de usuários, grupos, políticas e roles.
  - Ativação de MFA (Multi-Factor Authentication).
  - Definição de políticas de senha.
  - Suporte a federação.
- **Conceito do Privilégio Mínimo**: Aplicar o menor nível de acesso necessário.

#### Usuários
- Representa uma identidade criada na AWS (pessoa ou aplicação).
- Composto por nomes e credenciais.
- **Recomendação**: Não utilizar o usuário root.

#### Grupos
- Conjunto de usuários IAM.
- Permite especificar várias permissões.
- Um usuário pode pertencer a vários grupos, mas grupos não podem ser aninhados.

#### Políticas IAM
- Definem permissões e são armazenadas na AWS como documentos JSON.

#### Roles
- Identidade IAM com permissões específicas, assumida por usuários, aplicativos ou serviços.

#### Links Úteis
- AWS IAM - Página do Produto
- Usuário Root - Documentação
- Usuários - Documentação
- Como Funciona o IAM - Vídeo
- Grupos - Documentação
- Políticas de Acesso - Documentação
- Roles - Documentação

### Etapa 4: AWS Organizations

#### Contexto
A gestão de várias contas AWS pode levar a desafios relacionados a custos e limites.

#### Problemas que Podem Surgir
- Dificuldade em gerenciar custos.
- Soft e hard limits na AWS.
- **Solução**: Separação de contas para melhor gerenciamento.

#### AWS Organizations
- Descrição:
  - Serviço gratuito para gerenciamento centralizado de contas AWS.
  - Permite faturamento consolidado e agrupamento hierárquico.
  - Utiliza Políticas de Controle de Serviço (SCPs) para gerenciar permissões.

#### Links Úteis
- AWS Organizations - Página do Produto
- Introdução ao AWS Organizations - Documentação
- Vídeo Explicativo

### Etapa 5: Conformidade e Suporte

#### Conformidade
- A responsabilidade pela conformidade é compartilhada entre você e a AWS.

#### AWS Artifact
- AWS Artifact Agreements e AWS Artifact Reports.

#### Links Úteis
- Página de Conformidade - AWS
- Certificações da AWS
- AWS Artifact
- Centro de Conformidade - AWS
- O que é AWS Artifact - Vídeo

### Etapa 6: Serviços Adicionais

#### AWS WAF (Web Application Firewall)
- Protege aplicações web contra exploits como SQL Injection e Cross-site Scripting.
- Oferece regras default e customizadas.
- Integra-se com serviços AWS como ELB, EC2 e API Gateway.

#### AWS Shield
- Protege contra ataques DDoS.
- **AWS Shield Standard**: Sem custo adicional, protege contra ataques DDoS mais comuns.
- **AWS Shield Advanced**: Serviço pago, oferece proteção para ataques mais elaborados e integra-se com AWS WAF.

#### Amazon Inspector
- Ferramenta de segurança gerenciada que verifica atualizações e vulnerabilidades.
- Ajuda em processos de auditoria.

#### Links Úteis
- AWS Shield - Página do Produto
- AWS WAF - Página do Produto
- Amazon Inspector - Página do Produto
- O que é Amazon Inspector - Vídeo

#### Amazon GuardDuty
- Serviço de detecção de ameaças inteligente.
- Analisa diversas fontes de dados e usa Machine Learning para prever atividades inesperadas.

#### Links Úteis
- Amazon GuardDuty - Documentação

---

# Monitoramento e Análise

### Etapa 1: Amazon CloudWatch
- Coleta e visualiza logs, métricas e dados de eventos em tempo real.
- Permite definir alarmes baseados nas métricas, que podem disparar ações.

#### Links Úteis
- Amazon CloudWatch - Página do Produto
- Documentação CloudWatch

### Etapa 2: Amazon CloudTrail
- **Descrição**:
  - Registra transações chamadas de API para auditoria.
  - Cada transação é registrada no CloudTrail e os dados são salvos em buckets S3.
  - Fornece informações sobre o quê, quem, quando e como.
- **Recursos**:
  - CloudTrail Insights para detectar atividades anômalas.

#### Links Úteis
- Página do Produto - Amazon CloudTrail
- Documentação CloudTrail

### Etapa 3: AWS Trusted Advisor
- **Descrição**:
  - Atua como um "consultor automatizado" que inspeciona o ambiente AWS em tempo real.
  - Oferece recomendações baseadas em boas práticas recomendadas pela AWS.
  - Permite configurar alertas por e-mail.
- **Pilares**:
  - Otimização de custos
  - Desempenho
  - Segurança
  - Tolerância a falhas
  - Limites de serviço
- **Exemplos de Recomendações**:
  - MFA root
  - Instâncias ociosas
  - Volumes EBS sem snapshots
  - Otimização de volumes
  - Política de senha fraca
  - Implantação multi-AZ
  - Quantidade limite de VPCs numa região

#### Links Úteis
- Página do Produto - AWS Trusted Advisor
- Documentação - AWS Trusted Advisor

---

# Preços e Planos de Suporte

### Etapa 1: Filosofia de Preços AWS

#### Modelos de Pagamento
- **Pagamento conforme o uso (pay-as-you-go)**: Pague apenas pelo que usar.
- **Economize ao reservar**: Use Savings Plans para economizar ao se comprometer com uma quantidade específica por um período de 1 a 3 anos.
- **Pague menos usando mais**: Maior uso pode resultar em descontos adicionais.

#### Experimentar
- **Free Tier/Nível Gratuito**: Ofertas para testes, gratuito e sempre gratuito.

#### Links Úteis
- Calculadora de Preços da AWS
- Página de Preços AWS
- Nível Gratuito da AWS

### Etapa 2: Preço Amazon EC2

#### Cobrança por Segundo
- O custo é calculado com base no tempo de uso, em segundos.

#### Modelos de Preço
- **Sob Demanda**:
  - Ideal para cenários sem padrão de utilização dos recursos.
  - Sem compromissos de longo prazo ou pagamentos antecipados.
  - Permite aumentar ou diminuir a capacidade computacional conforme necessário.
- **Savings Plans**:
  - Ideal para cargas de trabalho com uso previsível e de longo prazo.
  - Preços baixos em troca de compromisso com uma quantidade consistente de uso (medido em USD/hora).
  - Compromisso de 1 a 3 anos; qualquer uso acima do acordo é cobrado por demanda.
- **Instâncias Reservadas**:
  - Ideal para cargas de trabalho previsíveis e de longo prazo.
  - Preços baixos em troca de compromisso com uma instância específica.
  - Compromisso de 1 a 3 anos.
- **Instâncias Spot**:
  - Ideal para cargas de trabalho que podem sofrer interrupção.
  - Até 90% mais barato em relação às instâncias sob demanda.
  - Utiliza capacidade computacional não utilizada na AWS.
- **Hosts Dedicados**:
  - Ideal para softwares específicos que exigem hardware dedicado por questões de licenciamento.
  - Máquinas de uso exclusivo do usuário, ajudando a cumprir requisitos de conformidade.

#### Links Úteis
- Preço Amazon EC2
- Sob Demanda
- Savings Plans
- Instâncias Reservadas
- Instâncias Spot
- Hosts Dedicados

### Etapa 3: Painel de Cobrança
- **Descrição**:
  - Também chamado de Painel de Faturamento.
  - Permite pagar faturas, monitorar uso e controlar custos.
  - Oferece previsões de custo com base no mês atual.
  - Visualiza o nível de uso gratuito e gerencia Savings Plans.

#### Links Úteis
- Documentação do Painel de Cobrança

### Etapa 4: Faturamento Consolidado
- **Descrição**:
  - Recurso do AWS Organizations também chamado de cobrança consolidada.
  - Permite visualizar os custos combinados de todas as contas membro da sua organização.
  - Oferece uma única fatura para todas as contas e benefícios de compartilhamento de desconto por volume Savings Plans e instâncias reservadas.

#### Links Úteis
- Documentação sobre Faturamento Consolidado

### Etapa 5: AWS Budgets
- **Descrição**:
  - Cria orçamentos para planejar o uso dos serviços.
  - Atualiza informações 3 vezes ao dia.
  - Permite definir alertas personalizados para quando o uso excede o valor orçado.
  - Gerencia orçamentos, realiza previsões de custo (forecast), e permite integração com e-mail/SNS e ações com Lambda.
  - Visualiza custos por tags incluídas nos serviços.

#### Links Úteis
- Página do AWS Budgets
- O que é e para que serve AWS Budgets

### Etapa 6: AWS Cost Explorer
- **Descrição**:
  - Permite visualizar, interpretar e gerenciar custos ao longo do tempo.
  - Inclui um relatório básico dos custos e a capacidade de aplicar filtros e grupos personalizados para análise detalhada.
- **Funcionalidades**:
  - Análise de Custo: Detalhamento e interpretação dos gastos.
  - Previsões: Projeções de custos futuros.
  - Reports: Relatórios detalhados.
  - Gráficos: Visualizações gráficas dos dados de custo.
  - Filtros: Personalização na visualização dos dados.
  - Tags: Análise de custos por tags associadas aos recursos.

#### Links Úteis
- Página do AWS Cost Explorer
- O que é e para que serve o Cost Explorer

### Etapa 7: Planos de Suporte

#### Planos Disponíveis
- **Basic**:
  - Gratuito e incluído para todos os clientes da AWS.
  - Acesso ao atendimento ao cliente 24/7.
  - Documentação, whitepapers, e AWS Trusted Advisor.
  - AWS Personal Health Dashboard.
- **Developer**:
  - Recomendado para experimentação ou teste da AWS.
  - Inclui tudo do plano Basic.
  - Orientações gerais com SLA de até 24 horas.
  - Orientações de arquitetura e verificações básicas de segurança.
- **Business**:
  - Nível mínimo recomendado para workloads em produção.
  - Inclui tudo dos planos Basic e Developer.
  - Conjunto completo de verificações no AWS Trusted Advisor.
  - Contato direto com engenheiros de suporte: SLA de 4h para resposta e 1h para sistemas afetados.
  - Gerenciamento de eventos de infraestrutura e orientações de arquitetura.
- **Enterprise On-Ramp**:
  - Recomendado para workloads essenciais à produção ou negócios.
  - Inclui todos os benefícios dos planos anteriores.
  - SLA de resposta para sistemas essenciais em menos de 30 minutos.
  - Orientações de arquitetura com análise consultiva.
  - Grupo de gerentes de contas técnicos para orientação.
- **Enterprise**:
  - Recomendado para negócios e workloads essenciais na AWS.
  - Inclui tudo dos planos anteriores.
  - AWS Trusted Advisor: Recomendações priorizadas.
  - SLA de resposta para sistemas essenciais em menos de 15 minutos.
  - Gerente Técnico de Conta (TAM) dedicado.
  - Acesso a treinamentos e suporte avançado.

#### Technical Account Manager (TAM)
- Parte da equipe de suporte.
- Fornece apoio no gerenciamento de eventos de infraestrutura.
- Auxilia na revisão do Well-Architected Framework.

#### Links Úteis
- Planos de Suporte AWS
- Well-Architected Framework

### Etapa 8: AWS Marketplace
- **Descrição**:
  - Catálogo digital com ofertas de soluções de fornecedores independentes de software.
  - Permite procurar, testar e comprar software para execução na AWS.
  - Ofertas incluem informações detalhadas sobre preços, suporte e avaliações de clientes.
- **Funcionalidades**:
  - Categorias: Soluções de software por setor e caso de uso.

#### Links Úteis
- AWS Marketplace
- Parceiros do AWS Marketplace

---

# Assuntos Complementares

## Objetivo Geral
Apresentar temas que podem surgir no exame de certificação AWS Cloud Practitioner.

## Percurso
- **Etapa 1**: Migrando para AWS.
- **Etapa 2**: AWS Well-Architected Framework.
- **Etapa 3**: AWS Cloud Adoption Framework (AWS CAF).
- **Etapa 4**: [Conteúdo a ser adicionado]

### Família AWS Snow, Migrando para AWS, AWS Cloud Adoption Framework (AWS CAF), e AWS Well-Architected Framework

#### Etapa 1: Migrando para AWS
**Estratégias de Migração (6Rs)**:
- **Rehosting**: Mover aplicações para a nuvem sem modificações.
- **Replatform**: Modificar aplicações para se adaptar melhor à nuvem sem alterar a arquitetura.
- **Repurchasing**: Substituir aplicações existentes por soluções SaaS.
- **Retire**: Descontinuar aplicações que não são mais necessárias.
- **Retain**: Manter aplicações no local até que uma estratégia de migração seja definida.
- **Refactoring ou Re-architecting**: Redesenhar aplicações para aproveitar ao máximo as características da nuvem.

#### Links Úteis
- 6 Estratégias para Migrar Aplicações para a Nuvem
- Estratégias de Migração para a Nuvem
- Arquitetura AWS

#### Etapa 2: AWS Cloud Adoption Framework (AWS CAF)
**Descrição**:
Migrar para a nuvem é um trabalho que envolve todas as áreas de uma empresa e requer a colaboração de diferentes perspectivas. O AWS Cloud Adoption Framework (AWS CAF) ajuda a preparar a organização para a nuvem, abordando seis perspectivas:

**Seis Perspectivas do AWS CAF**:
- **Negócios**: Alinhar TI às necessidades de negócios e garantir que os investimentos em TI estejam vinculados aos resultados principais.
- **Pessoas**: Alterar a estrutura organizacional para suportar a nuvem e preencher lacunas de habilidades.
- **Governança**: Alinhar habilidades e processos para garantir a governança de negócios na nuvem e minimizar riscos.
- **Plataforma**: Definir princípios e padrões para a implementação de soluções na nuvem e migração de cargas de trabalho.
- **Segurança**: Garantir a segurança da organização com controles de visibilidade, auditoria, controle e agilidade.
- **Operações**: Habilitar e gerenciar cargas de trabalho de TI conforme definido com os stakeholders da empresa.

#### Links Úteis
- AWS Cloud Adoption Framework

#### Etapa 3: AWS Well-Architected Framework
**Descrição**:
O AWS Well-Architected Framework ajuda a construir infraestruturas seguras, resilientes, eficientes e de alta performance para aplicações e workloads na nuvem. Descreve conceitos, princípios e práticas recomendadas para projetar e executar workloads.

**Os 6 Pilares do Well-Architected Framework**:
- **Excelência Operacional**: Melhorar e gerenciar operações.
- **Segurança**: Proteger informações e sistemas.
- **Confiabilidade**: Garantir a recuperação e a resiliência dos sistemas.
- **Eficiência de Performance**: Otimizar o uso dos recursos.
- **Sustentabilidade**: Minimizar o impacto ambiental.
- **Otimização de Custos**: Controlar e reduzir os gastos.

#### Links Úteis
- AWS Well-Architected Framework
- Arquitetura AWS

#### Etapa 4: Família AWS Snow
**Descrição**:
**Desafio**: Migrar ou copiar grandes volumes de dados para a AWS pode ser demorado e caro se depender de redes de alta velocidade.

**Soluções**:
- **AWS Snowcone**:
  - Armazenamento de até 8TB HDD e 14TB.
  - Ideal para computação de borda.
  - Recebe em casa, copia os dados e envia para a AWS.
- **AWS Snowball**:
  - Transferência de dados offline ou armazenamento remoto para a nuvem.
  - Duas categorias: Otimizado para computação e armazenamento.
  - Conecta em racks e é compatível com AWS Lambda.
- **AWS Snowmobile**:
  - Transferência massiva de dados com capacidade de 100 PB.
  - Ideal para migração de grandes volumes de dados e desligamento de data centers.
  - Impermeável e resistente a incêndios, com GPS.

#### Links Úteis
- AWS Snowcone
- AWS Snowball
- AWS Snowmobile
- Família AWS Snow

#### AWS Snowmobile
**Descrição**:
AWS Snowmobile é uma solução para a transferência massiva de dados com capacidade de até 100 PB. Ideal para migração de grandes volumes de dados e para casos onde é necessário desligar data centers. Equipamento impermeável e resistente a incêndios, com GPS para rastreamento.

#### Links Úteis
- AWS Snowmobile
- AWS Snow
- AWS Snowball
- AWS Snowcone

---

# Dicas de Estudo para o Exame AWS Cloud Practitioner

## Objetivo Geral
Fornecer orientações gerais sobre o exame AWS Cloud Practitioner, incluindo dicas de estudo e materiais de preparação.

## Percurso de Estudo
- **Etapa 1: Por Que Tirar a Certificação?**
  - **Reflexões**:
    - É para mim? Avalie se a certificação se alinha aos seus objetivos e perfil.
    - Mercado: A certificação é valorizada no mercado de trabalho e faz parte do caminho de certificações AWS.
- **Etapa 2: Compra do Voucher**
  - Instruções sobre como adquirir o voucher para o exame.
- **Etapa 3: Estrutura do Exame**
  - Detalhes sobre o formato e os conteúdos abordados no exame.
- **Etapa 4: Estudo e Material de Apoio**
  - Recomendações de materiais de estudo e métodos eficazes para se preparar para o exame.
