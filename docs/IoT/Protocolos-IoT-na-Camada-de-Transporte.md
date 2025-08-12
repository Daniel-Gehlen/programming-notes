# Protocolos IoT na Camada de Transporte

## Visão Geral do Modelo OSI

**Contexto**:
O Modelo OSI divide redes em 7 camadas, sendo a **Camada de Transporte** (4) crítica para IoT, responsável por:

- Controle de fluxo
- Confiabilidade na entrega
- Multiplexação de conexões

---

## Protocolos Principais

### 1. TCP vs UDP

| **Característica**   | **TCP**                               | **UDP**                                |
| -------------------- | ------------------------------------- | -------------------------------------- |
| **Orientação**       | Conexão                               | Sem conexão                            |
| **Confiabilidade**   | Garantida (ACKs, retransmissões)      | Não garantida                          |
| **Overhead**         | Alto (20 bytes cabeçalho)             | Baixo (8 bytes cabeçalho)              |
| **Casos de Uso IoT** | Dados críticos (ex: firmware updates) | Streaming de sensores (ex: telemetria) |

**Equação de Throughput TCP**:

```
Throughput ≈ Window Size / RTT
```

### 2. Protocolos de Aplicação sobre TCP/UDP

| **Protocolo** | **Base** | **Segurança** | **Modelo**       | **IoT Ideal Para**                 |
| ------------- | -------- | ------------- | ---------------- | ---------------------------------- |
| **MQTT**      | TCP      | SSL/TLS       | Pub/Sub          | Dispositivos com bateria limitada  |
| **CoAP**      | UDP      | DTLS          | Request/Response | Redes LPWAN (ex: LoRaWAN)          |
| **AMQP**      | TCP      | TLS           | Filas/Pub/Sub    | Sistemas empresariais              |
| **DDS**       | TCP/UDP  | TLS/DTLS      | P2P              | Sistemas em tempo real (ex: saúde) |

---

## Comparativo Detalhado

### MQTT (Message Queuing Telemetry Transport)

- **QoS Levels**:
  - 0: No ACK
  - 1: At least once
  - 2: Exactly once
- **Exemplo Broker**: Mosquitto, HiveMQ

### CoAP (Constrained Application Protocol)

- **Métodos RESTful**: GET, POST, PUT, DELETE
- **Observação de Recursos**:
  `coap://device/temperature?observe`
- **Formato Mensagem**: Binário (vs HTTP textual)

### AMQP 1.0 vs 0.9

| **Versão** | **Vantagem**            | **Limitação**                  |
| ---------- | ----------------------- | ------------------------------ |
| 0.9        | Compatibilidade ampla   | Sem suporte a segurança nativa |
| 1.0        | Segurança TLS integrada | Incompatibilidade com 0.9      |

---

## Guia de Seleção por Cenário

### 1. Monitoramento Remoto (Baixo Consumo)

- **Protocolo**: CoAP over UDP
- **Por quê?**:
  - Eficiência energética
  - Suporte a DTLS para segurança

### 2. Indústria 4.0 (Confiabilidade)

- **Protocolo**: MQTT-SN (TCP) com QoS 2
- **Por quê?**:
  - Entrega garantida em redes instáveis

### 3. Veículos Autônomos (Baixa Latência)

- **Protocolo**: DDS over UDP
- **Por quê?**:
  - Comunicação P2P para decisões em ms

---

## Tabela de Overhead Comparativo

| **Protocolo** | **Tamanho Cabeçalho** | **Exemplo Payload Máximo** |
| ------------- | --------------------- | -------------------------- |
| HTTP/1.1      | ~200 bytes            | 1460 bytes (MTU típico)    |
| MQTT          | ~10 bytes             | 256 MB (teórico)           |
| CoAP          | ~4 bytes              | 1152 bytes                 |

> **Nota**: Para dispositivos com **≤64KB RAM**, prefira CoAP ou MQTT-SN.

---

**Referências Críticas**:

- [RFC 7252 (CoAP)](https://tools.ietf.org/html/rfc7252)
- [MQTT 5.0 Specification](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)
- [DDS Security Standard](https://www.omg.org/spec/DDS-SECURITY/)

**Ferramentas Recomendadas**:

- **Teste de Protocolos**: Wireshark + IoT Plugfest Packets
- **Brokers MQTT**: EMQX, VerneMQ
