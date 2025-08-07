# Computação: Entendendo o Throughput

## Definição e Uso

O **throughput** em computação refere-se à quantidade de trabalho realizado em um determinado período de tempo. É uma métrica essencial para medir a eficiência e o desempenho de sistemas computacionais, redes e dispositivos de comunicação.

### Definição Geral

- Representa a taxa na qual um sistema ou componente processa dados ou tarefas.
- Quantifica o trabalho concluído com sucesso em uma unidade de tempo específica.

### Aplicações

1. **Redes de Computadores**:

   - Mede a quantidade de dados transferidos entre partes do sistema em um intervalo de tempo.
   - Exemplo: Largura de banda de uma conexão de rede, medida em bits por segundo (bps).

2. **Sistemas de Armazenamento**:

   - Refere-se à velocidade de leitura/gravação de dados, geralmente em MB/s ou GB/s.

3. **Computação em Nuvem**:
   - Crucial para determinar a capacidade de processamento e transferência de grandes volumes de dados entre nós.

---

## Medição e Fatores que Afetam o Throughput

### Unidades de Medida

- **Redes**: bps, Bps.
- **Armazenamento**: MB/s, GB/s.

### Fatores de Impacto

- Capacidade de processamento do sistema.
- Largura de banda da rede.
- Protocolos de comunicação.
- Tráfego na rede e capacidade de armazenamento.

---

## Importância

- **Alto throughput**: Indica capacidade de lidar com grande volume de trabalho em curto período.
- **Baixo throughput**: Sinaliza gargalos ou limitações que requerem otimização.

> "Throughput é uma medida crítica para otimizar desempenho e capacidade em aplicações computacionais."

---

# Ingress em Computação

## Definição e Uso

**Ingress** refere-se ao processo de entrada de dados ou tráfego em um sistema, rede ou aplicação, especialmente em contextos distribuídos.

### Características

1. **Entrada de Dados**:

   - Recebimento de dados externos (ex: dispositivos de entrada, sensores).

2. **Redes de Computadores**:

   - Aceitação de pacotes em pontos de entrada como roteadores.

3. **Balanceamento de Carga**:

   - Distribuição de tráfego entre servidores para melhorar desempenho.

4. **Segurança**:
   - Monitoramento de entrada para proteger contra ameaças (firewalls, sistemas de detecção).

---

## Implementação e Medição

- **Pontos de Ingress**: Configurados em data centers ou nuvem para eficiência operacional.
- **Monitoramento**: Ferramentas acompanham fluxo de tráfego para otimização.

> "Ingress é fundamental para eficiência, segurança e escalabilidade em ambientes computacionais modernos."

---

# Escalabilidade Vertical ("Scaling Up")

## Definição

Aumento do poder de processamento ou capacidade de um único dispositivo (ex: servidor) por meio de:

- Mais CPU, RAM, armazenamento.

### Benefícios

- **Simplicidade**: Facilidade de implementação.
- **Performance**: Melhoria direta no desempenho.

### Desafios

- **Limitações físicas**: Restrições de hardware.
- **Ponto único de falha**: Risco de interrupção.

> "Escalabilidade vertical é ideal para cargas de trabalho intensivas, mas pode ser limitada a longo prazo."

---

# Escalabilidade Horizontal ("Scaling Out")

## Definição

Adição de mais instâncias/nós idênticos para distribuir carga.

### Benefícios

- **Resiliência**: Falhas são isoladas.
- **Elasticidade**: Ajuste dinâmico conforme demanda.

### Desafios

- **Complexidade**: Gerenciamento de múltiplos nós.

> "Escalabilidade horizontal é a base para sistemas distribuídos modernos, como aplicações web em nuvem."

---

# Dynos no Heroku

## Definição

Unidades de computação isoladas que executam aplicações na plataforma Heroku (PaaS).

### Tipos

1. **Web Dynos**: Lidam com requisições HTTP/S.
2. **Worker Dynos**: Processam tarefas em segundo plano.

### Gerenciamento

- Escalonamento manual ou automático.
- Monitoramento via ferramentas integradas.

> "Dynos simplificam a implantação e escalabilidade de aplicações na nuvem."

---

# Pool de Conexões

## Definição

Técnica para gerenciar e reutilizar conexões de rede/banco de dados.

### Benefícios

- Redução de overhead.
- Melhoria de desempenho.

### Exemplo

```java
// Configuração de pool no Spring Boot (application.properties)
spring.datasource.hikari.maximum-pool-size=10
```

> "Pools de conexão são vitais para otimizar recursos em aplicações de alto tráfego."

---

# Caching para Reduzir Requisições ao Banco de Dados

## Estratégias

1. **Cache de Consultas**: Armazenar resultados de consultas frequentes.
2. **Cache de Objetos**: Manter dados acessados repetidamente.

### Exemplo (Redis + Node.js)

```javascript
client.get("chave", (err, data) => {
  if (data) return data;
  else {
    const dbData = fetchFromDB();
    client.setex("chave", 3600, dbData); // Expira em 1h
  }
});
```

> "Caching acelera aplicações e reduz a carga em bancos de dados."

---

# Ferramentas de Monitoramento (APM)

## Exemplos

1. **New Relic**: Análise detalhada de transações.
2. **Prometheus + Grafana**: Monitoramento de métricas em tempo real.

### Caso de Uso

- Identificar consultas lentas no banco de dados.
- Alertas para picos de CPU.

> "APMs são essenciais para manter aplicações performáticas em produção."

---

# Analogias entre Arquitetura Web e RPG

## Comparações

- **Cliente/Servidor** ↔ **Jogador/Mestre**.
- **APIs** ↔ **Habilidades Especiais**.
- **Banco de Dados** ↔ **Biblioteca de Conhecimentos**.

> "Analogias facilitam o entendimento de conceitos complexos de arquitetura."

---

# Otimização de CDN com Helpers

## Implementação (Node.js + EJS)

```javascript
app.locals.cdn = (path) => `https://cdn.example.com${path}`;
```

### Uso no Template

```html
<img src="<%= cdn('/images/logo.png') %>" />
```

> "Helpers simplificam a integração com CDN e melhoram a performance de recursos estáticos."
