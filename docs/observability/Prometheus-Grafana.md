# **Prometheus + Grafana**

---

## **Introdução ao Monitoramento com Prometheus + Grafana**

### **O que você precisa para começar:**

- **Ambiente de teste**:
  - Computador local (Windows/Mac/Linux)
  - Máquina virtual gratuita (AWS/Google Cloud)
  - Servidor caseiro (Raspberry Pi)

- **Ferramentas básicas**:
  - Docker (recomendado para instalação fácil)
  - Ou instalação nativa (mais complexa)

---

## **Passo a Passo para Iniciantes**

### **1. Instale o Prometheus (coletor de métricas)**

```bash
docker run -d --name prometheus -p 9090:9090 prom/prometheus
```

- Acesse: [http://localhost:9090](http://localhost:9090) (UI do Prometheus)

### **2. Instale o Grafana (visualização de dados)**

```bash
docker run -d --name grafana -p 3000:3000 grafana/grafana
```

- Acesse: [http://localhost:3000](http://localhost:3000)
- Login padrão: `admin` / `admin`

### **3. Conecte o Grafana ao Prometheus**

1. No Grafana, vá em **Configuration > Data Sources**
2. Adicione **Prometheus** como fonte
3. URL: `http://prometheus:9090` (Docker) ou `http://localhost:9090`

---

## **Primeiro Objetivo Prático**

### **Monitore seu computador/servidor com `node_exporter`**

1. **Instale o `node_exporter`** (coleta CPU, memória, disco):

   ```bash
   docker run -d --name node_exporter -p 9100:9100 prom/node-exporter
   ```

2. **Configure o Prometheus** para ler o `node_exporter`:
   Edite `prometheus.yml`:

   ```yaml
   scrape_configs:
     - job_name: "node"
       static_configs:
         - targets: ["node_exporter:9100"] # Ou 'localhost:9100'
   ```

   Reinicie o Prometheus:

   ```bash
   docker restart prometheus
   ```

3. **Importe um Dashboard no Grafana**:
   - Vá em **Create > Import** e use o ID `1860` (dashboard para `node_exporter`)

---

## **O que você vai aprender**

✅ Como métricas são coletadas (Prometheus)
✅ Visualização de dados em tempo real (Grafana)
✅ Básico de configuração YAML
✅ Uso de exportadores (ex.: `node_exporter`)

---

## **Próximos Passos**

- Monitore uma aplicação web (ex.: Nginx, Python/Node.js)
- Configure alertas (ex.: e-mail se CPU > 90%)
- Explore outros exportadores (`mysql_exporter`, `blackbox_exporter`)

---

## **Dica Bônus: Docker Compose**

Crie `docker-compose.yml`:

```yaml
version: "3"
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
  node_exporter:
    image: prom/node-exporter
    ports:
      - "9100:9100"
```

Execute:

```bash
docker-compose up -d
```

---

## **Ferramentas Recomendadas para Observabilidade**

| **Ferramenta**           | **Melhor para**                     | **Dificuldade** |
| ------------------------ | ----------------------------------- | --------------- |
| **Prometheus + Grafana** | Métricas e dashboards               | Fácil           |
| **Elastic Stack (ELK)**  | Análise de logs                     | Moderada        |
| **Loki + Grafana**       | Logs leves                          | Fácil           |
| **Jaeger**               | Tracing distribuído                 | Moderada        |
| **SigNoz**               | All-in-one (métricas, logs, traces) | Fácil           |

---

## **Dica Final**

Comece com **Prometheus + Grafana** para métricas ou **SigNoz** para uma solução completa. Todos têm versões gratuitas e tutoriais disponíveis! 🚀
