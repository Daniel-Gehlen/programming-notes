# KEDA (Kubernetes-based Event Driven Autoscaling)

## Introdução ao KEDA
O KEDA (Kubernetes-based Event Driven Autoscaling) é uma ferramenta que complementa o Kubernetes, permitindo a escalabilidade de aplicações baseadas em eventos. Enquanto o Kubernetes permite a escalabilidade baseada em métricas como CPU e memória, o KEDA permite a escalabilidade baseada em eventos como mensagens em filas, eventos de logs, entre outros.

### Principais Características do KEDA
- **Escalabilidade baseada em eventos**: O KEDA permite que as aplicações escalem com base em eventos, como mensagens em filas, que são comuns em arquiteturas de microsserviços.
- **Suporte a múltiplas tecnologias**: O KEDA suporta uma ampla variedade de tecnologias e serviços de mensageria, incluindo Kafka, RabbitMQ, AWS SQS, Azure Event Hubs, entre outros.
- **Customização**: Além de suportar várias tecnologias de mensageria, o KEDA permite que os desenvolvedores criem seus próprios scalers personalizados, permitindo uma flexibilidade enorme na forma como as aplicações podem escalar.
- **Integração com HPA (Horizontal Pod Autoscaler)**: O KEDA se integra com o HPA do Kubernetes, estendendo suas capacidades de escalabilidade.

---

## Demonstração Prática
Vamos agora para uma demonstração prática, onde mostraremos como configurar o KEDA para escalar uma aplicação baseada em eventos. A aplicação será uma votação simples, onde cada voto é um evento que precisa ser processado.

### Passos da Demonstração
1. **Configuração do Cluster Kubernetes**: Primeiramente, configuramos um cluster Kubernetes onde o KEDA será instalado.
2. **Instalação do KEDA**: Utilizando o Helm ou o Kubectl, instalamos o KEDA no cluster Kubernetes.
3. **Configuração do Scaler**: Configuramos um scaler no KEDA que escalará a aplicação com base em eventos de uma fila de mensagens (por exemplo, RabbitMQ).
4. **Deploy da Aplicação**: Realizamos o deploy da aplicação de votação no Kubernetes.
5. **Teste da Escalabilidade**: Disparamos um volume de mensagens para a fila e observamos o KEDA escalando a aplicação automaticamente para lidar com o aumento na carga.

---

## Autoscaling no Kubernetes com KEDA
O Kubernetes nativo oferece opções limitadas de autoscaling, principalmente baseadas em métricas de CPU e memória. No entanto, quando processamos eventos ou filas de mensagens, essas métricas podem ser insuficientes para determinar a real carga da aplicação. Por exemplo, o consumo de CPU e memória pode não refletir a quantidade de mensagens acumuladas esperando para serem processadas.

### Limitações e Soluções
Embora seja possível trabalhar com métricas personalizadas utilizando Prometheus, essa não é uma implementação trivial. O Horizontal Pod Autoscaler (HPA) do Kubernetes nativo é limitado a recursos básicos, o que leva à necessidade de ferramentas adicionais como o KEDA (Kubernetes Event-Driven Autoscaling).

---

## O Projeto KEDA
O KEDA surgiu como uma iniciativa do time do Azure Functions, refletido no seu logotipo com um raio, similar ao do Azure Functions. Diferente de soluções como AWS Lambda e Google Cloud Functions, onde o controle de escala é limitado, o KEDA permite uma configuração mais granular, escalando com base em eventos e métricas customizadas.

### Características do KEDA
- **Integrável com qualquer ambiente Kubernetes**: Pode ser utilizado em clusters no Azure, AWS, GCP, ou até em ambientes on-premises.
- **Compatibilidade com diversas tecnologias**: Suporta escalabilidade com base em métricas de serviços como RabbitMQ, Kafka, Azure Storage, entre outros.
- **Utiliza HPA**: Estende as capacidades do HPA nativo do Kubernetes, permitindo escalabilidade baseada em eventos.

---

## Exemplo de Uso
Vamos ver um exemplo de implementação do KEDA para escalar uma aplicação baseada em eventos utilizando o Azure Event Hubs.

### Configuração do Cluster
1. **Instalação do KEDA**: Utilizando o Helm para adicionar o repositório do KEDA e instalar o KEDA no cluster Kubernetes.
   ```bash
   kubectl create namespace keda
   helm repo add kedacore https://kedacore.github.io/charts
   helm install keda kedacore/keda --namespace keda
   ```
2. **Visualização do Cluster**: Ferramenta `k9s` para gerenciar e visualizar o estado do cluster Kubernetes.
   ```bash
   k9s
   ```

### Configuração do KEDA
1. **Configuração do ScaledObject**: Arquivo YAML de configuração do KEDA, especificando os triggers e regras de escalabilidade.
   ```yaml
   apiVersion: keda.sh/v1alpha1
   kind: ScaledObject
   metadata:
     name: event-hub-scaledobject
     namespace: default
   spec:
     scaleTargetRef:
       apiVersion: apps/v1
       kind: Deployment
       name: event-processor
     minReplicaCount: 1
     maxReplicaCount: 10
     triggers:
     - type: azure-eventhub
       metadata:
         connection: EVENTHUB_CONNECTION_STRING
         eventHubName: my-eventhub
         consumerGroup: $Default
         blobContainer: my-container
         checkpointStrategy: blobMetadata
         blobPrefix: my-checkpoint
         storageConnection: STORAGE_CONNECTION_STRING
   ```

### Deploy e Teste
1. **Deploy da Aplicação e do ScaledObject**: Aplicação de processamento de eventos configurada para escalar com base nos eventos do Event Hub.
   ```bash
   kubectl apply -f event-processor-deployment.yaml
   kubectl apply -f event-hub-scaledobject.yaml
   ```
2. **Monitoramento e Verificação**: Monitorar o número de réplicas da aplicação utilizando `kubectl` ou `k9s`, garantindo que o KEDA está escalando conforme esperado.
   ```bash
   kubectl get pods -w
   ```

---

## Conclusão
O KEDA é uma solução poderosa para escalar aplicações Kubernetes com base em eventos, superando as limitações do HPA nativo. Ele oferece flexibilidade e granularidade para adaptar a escalabilidade da aplicação às necessidades específicas do seu ambiente, integrando-se com uma vasta gama de serviços e tecnologias.

### Referências
- [KEDA](https://keda.sh/)
- [Kubernetes Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

Essa abordagem permite uma gestão eficiente de recursos, assegurando que a aplicação consiga lidar com picos de carga de maneira automática e eficiente.

_por Daniel Gehlen_

---

## Resumo Kubernetes e Keda

1. **Introdução ao Kubernetes e Keda**
   - Kubernetes permite a criação de ambientes separados usando namespaces.
   - Keda (Kubernetes Event-driven Autoscaling) ajusta a escala dos pods com base em eventos.

2. **Criação de Recursos no Kubernetes**
   - Criação de um Secret para armazenar informações sensíveis.
   - Deployment de um pod único utilizando uma imagem pública do Docker Hub.

3. **Monitoramento e Escalabilidade**
   - Aplicação acessível através de um site para votação (Copa América).
   - Configuração do scale object no Keda com parâmetros como polling interval, cooldown period, e replica count.

4. **Funcionamento do Scale Object**
   - Polling interval define a frequência de verificação de eventos.
   - Cooldown period define o tempo de inatividade antes de matar uma instância.
   - Min e Max replica count estabelecem os limites de escalabilidade.
   - Configuração de triggers para escalabilidade baseada em eventos não processados.

5. **Demonstração de Escalabilidade**
   - Site de votação testado com múltiplos votos para acionar a escalabilidade.
   - A aplicação escalou rapidamente de 1 para 5 instâncias com base nos eventos recebidos.
   - Os containers dividem o trabalho de processamento de maneira igual.

6. **Finalização e Observações**
   - Cooldown period reduz as instâncias quando não há mais eventos.
   - Monitoramento do processamento de eventos no Event Hub.
   - Dados de votação são auditáveis e mostram o balanceamento de carga entre containers.

7. **Obs: DBA e Índices de Banco de Dados**
   - Índices não são permanentes e podem ser removidos ou recalculados.
   - Monitoramento contínuo é essencial para otimizar o desempenho do banco de dados.

9. **Obs: Escalabilidade de Aplicações**
   - Métricas de escalabilidade devem ser ajustadas ao longo do tempo.
   - Necessário monitorar e ajustar os limites de escalabilidade conforme o uso da aplicação.

### Conclusão
Kubernetes e Keda juntos oferecem uma solução eficiente para escalabilidade automática baseada em eventos, demonstrando rápida adaptação às necessidades da carga de trabalho e otimização de recursos.
