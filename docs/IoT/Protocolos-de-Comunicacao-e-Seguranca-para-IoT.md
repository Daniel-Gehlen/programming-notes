# Protocolos de Comunicação e Segurança para IoT

## Definição e Propriedades Fundamentais

### O Que São Protocolos de Comunicação?

Conjunto de regras que governam:

- **Sintaxe**: Formato dos dados (ex: JSON, XML)
- **Semântica**: Significado dos comandos (ex: GET, POST)
- **Sincronização**: Controle de fluxo e temporização

### Propriedades Essenciais:

1. **Estabelecimento de Conexão**
   - Detecção de nós ativos na rede
2. **Handshaking**
   - TCP 3-way handshake: `SYN → SYN-ACK → ACK`
3. **Negociação de Parâmetros**
   - Acordo sobre MTU, velocidade, criptografia
4. **Formato de Mensagens**
   - Exemplo MQTT:
     ```
     [Fixed Header][Variable Header][Payload]
     ```
5. **Tratamento de Erros**
   - CRC, checksum, ACK/NACK
6. **Detecção de Desconexão**
   - Keepalive packets, timeout

---

## Modelos de Referência

### Comparativo TCP/IP vs OSI

| **Camada TCP/IP** | **Camada OSI**                  | **Protocolos IoT**     |
| ----------------- | ------------------------------- | ---------------------- |
| Aplicação         | Aplicação, Apresentação, Sessão | MQTT, CoAP, HTTP/HTTPS |
| Transporte        | Transporte                      | TCP, UDP, DTLS         |
| Internet          | Rede                            | IPv6, 6LoWPAN          |
| Acesso à Rede     | Enlace, Física                  | LoRa, BLE, Zigbee      |

**Key Insight**:
O modelo TCP/IP é dominante na prática, enquanto o OSI serve como referência teórica.

---

## Protocolos IoT por Camada

### Camada de Aplicação

| **Protocolo** | **Transporte** | **Segurança** | **Casos de Uso**              |
| ------------- | -------------- | ------------- | ----------------------------- |
| MQTT          | TCP            | SSL/TLS       | Telemetria de baixo consumo   |
| CoAP          | UDP            | DTLS          | Microcontroladores            |
| LwM2M         | UDP            | OSCORE        | Gerenciamento de dispositivos |

### Camada de Transporte

- **TCP**:
  - `Throughput = (Window Size)/(RTT)`
  - Ideal para atualizações de firmware
- **UDP**:
  - Cabeçalho de 8 bytes vs 20 bytes do TCP
  - Melhor para streaming de sensores

### Camada de Rede

- **6LoWPAN**:
  - Compressão de cabeçalho IPv6 para redes IEEE 802.15.4
  - Exemplo: `2001:db8::1` → formato compactado

---

## Técnicas de Segurança

### Criptografia por Camada

1. **Física/Acesso**:
   - AES-128 em Zigbee/Thread
2. **Transporte**:
   - DTLS para UDP (CoAP)
   - TLS 1.3 para TCP (MQTT)
3. **Aplicação**:
   - OSCORE (Object Security for CoAP)

### Mecanismos de Autenticação

- **PSK (Pre-Shared Keys)**: Para dispositivos limitados
- **Certificados X.509**: Em gateways industriais
- **ECDSA**: Assinatura digital em chips TPM

---

## Casos Práticos

### Smart City (Iluminação Pública)

- **Protocolo**: LoRaWAN + CoAP
- **Segurança**: AES-128 + OTAA (Over-The-Air Activation)
- **Vazão**: 300 mensagens/dia por dispositivo

### Indústria 4.0 (Monitoramento)

- **Protocolo**: MQTT-SN over TCP
- **Segurança**: TLS 1.3 com client certificates
- **QoS**: Nível 2 (exactly once)

---

**Checklist de Implementação**:

- [ ] Definir requisitos de latência/confiabilidade
- [ ] Selecionar stack de segurança por camada
- [ ] Testar interoperabilidade com gateways
- [ ] Implementar monitoramento contínuo (ex: Wireshark + Grafana)

> **Nota**: Para projetos críticos, considere **hardware security modules (HSMs)** em gateways.

**Referências**:

- [RFC 8446 (TLS 1.3)](https://tools.ietf.org/html/rfc8446)
- [LoRaWAN Security Whitepaper](https://lora-alliance.org/resource_hub/lorawan-security-whitepaper/)
- [IoT Security Foundation Guidelines](https://www.iotsecurityfoundation.org/best-practice-guidelines/)
