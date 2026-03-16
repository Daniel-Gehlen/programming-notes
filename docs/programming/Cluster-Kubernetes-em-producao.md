# Cluster Kubernetes em Produção: Guia Essencial

## 🏗️ Arquitetura Básica

| Componente         | Função Principal                      | Exemplo de Configuração        |
| ------------------ | ------------------------------------- | ------------------------------ |
| **Worker Nodes**   | Executam os Pods da aplicação         | `kubectl get nodes`            |
| **Control Plane**  | Gerencia o estado do cluster          | `kubeadm init --control-plane` |
| **kube-apiserver** | Interface de administração do cluster | `--secure-port=6443`           |
| **etcd**           | Banco de dados distribuído do cluster | `--data-dir=/var/lib/etcd`     |

---

## 🛠️ Componentes do Control Plane

### 1. **kube-scheduler**

```yaml
# Exemplo de configuração de scheduler
apiVersion: kubescheduler.config.k8s.io/v1beta1
kind: KubeSchedulerConfiguration
profiles:
  - schedulerName: default-scheduler
    plugins:
      filter:
        enabled:
          - name: NodeResourcesFit
```

### 2. **kube-controller-manager**

Principais controladores:

- Deployment Controller
- ReplicaSet Controller
- Node Controller

### 3. **etcd** (High Availability)

```bash
# Comando para verificar saúde do etcd
ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt endpoint health
```

---

## ☁️ Kubernetes Gerenciado (Cloud)

| Serviço         | AWS (EKS)            | GCP (GKE)        | Azure (AKS)             |
| --------------- | -------------------- | ---------------- | ----------------------- |
| **Custo**       | $$$                  | $$               | $$                      |
| **Integração**  | IAM, ALB             | Stackdriver, GCR | Active Directory, ACR   |
| **Diferencial** | Fargate (serverless) | Autopilot Mode   | Azure Arc (multi-cloud) |

**Exemplo EKS:**

```bash
eksctl create cluster \
  --name prod-cluster \
  --region us-east-1 \
  --nodegroup-name workers \
  --node-type t3.large \
  --nodes 3
```

---

## 🔒 Boas Práticas para Produção

1. **Segurança**:
   - RBAC ativado
   - Network Policies
   - Pod Security Policies

   ```bash
   kubectl apply -f - <<EOF
   apiVersion: networking.k8s.io/v1
   kind: NetworkPolicy
   metadata:
     name: default-deny
   spec:
     podSelector: {}
     policyTypes:
     - Ingress
     - Egress
   EOF
   ```

2. **Monitoramento**:
   - Prometheus + Grafana
   - EFK Stack (Elasticsearch, Fluentd, Kibana)

3. **Disponibilidade**:
   - Multi-AZ para nós
   - PDB (Pod Disruption Budgets)
   ```yaml
   apiVersion: policy/v1
   kind: PodDisruptionBudget
   metadata:
     name: zk-pdb
   spec:
     minAvailable: 2
     selector:
       matchLabels:
         app: zookeeper
   ```

---

## 🚀 Ferramentas Essenciais

| Ferramenta  | Uso                    | Comando Exemplo                    |
| ----------- | ---------------------- | ---------------------------------- |
| **kubectl** | Interface principal    | `kubectl get pods -A`              |
| **kubeadm** | Bootstrap do cluster   | `kubeadm init`                     |
| **Helm**    | Gerenciador de pacotes | `helm install nginx bitnami/nginx` |
| **Lens**    | GUI para Kubernetes    | -                                  |

---

## 📈 Escalando na Nuvem

**Padrão Recomendado:**

- 3 nós para Control Plane (HA)
- Auto Scaling Groups para Workers
- Spot Instances para workloads tolerantes a falhas

**Exemplo GKE:**

```bash
gcloud container clusters create prod-cluster \
  --num-nodes=3 \
  --enable-autoscaling \
  --min-nodes=1 \
  --max-nodes=10 \
  --region=us-central1
```

> **Dica**: Use `kubectl drain <node>` antes de manutenções para migrar Pods sem downtime! 🛡️
