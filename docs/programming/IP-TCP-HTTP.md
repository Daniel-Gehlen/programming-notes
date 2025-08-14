# IP, TCP e HTTP: Protocolos Fundamentais da Internet

## IP (Internet Protocol) - Camada de Rede

### Funções Principais

- **Endereçamento lógico** (IPv4/IPv6)
- **Roteamento de pacotes** entre redes
- **Fragmentação** de pacotes quando necessário

| IPv4 vs IPv6  | IPv4                | IPv6                      |
| ------------- | ------------------- | ------------------------- |
| **Formato**   | 32 bits (4 octetos) | 128 bits (16 octetos)     |
| **Exemplo**   | 192.168.1.1         | 2001:0db8:85a3::8a2e:0370 |
| **Endereços** | ~4.3 bilhões        | 3.4×10³⁸ endereços        |

## TCP (Transmission Control Protocol) - Camada de Transporte

### Características Chave

- **Orientado a conexão** (3-way handshake)
- **Entrega confiável** (ACKs e retransmissão)
- **Controle de fluxo** (janela deslizante)

```plaintext
Three-way Handshake:
1. SYN       (Cliente → Servidor)
2. SYN-ACK   (Servidor → Cliente)
3. ACK       (Cliente → Servidor)
```

## HTTP (Hypertext Transfer Protocol) - Camada de Aplicação

### Versões Principais

| Versão   | Ano  | Características                         |
| -------- | ---- | --------------------------------------- |
| HTTP/1.1 | 1997 | Conexões persistentes, pipelining       |
| HTTP/2   | 2015 | Multiplexação, compressão de cabeçalhos |
| HTTP/3   | 2022 | Baseado em QUIC (sobre UDP)             |

### Métodos HTTP Comuns

```http
GET /api/users HTTP/1.1
Host: example.com

POST /api/users HTTP/1.1
Content-Type: application/json
{"name": "John Doe"}
```

## Fluxo Completo de Comunicação

1. **Navegador** faz requisição HTTP (ex: GET /index.html)
2. **TCP** divide em segmentos, estabelece conexão
3. **IP** roteia pacotes através da rede
4. **Servidor** processa e envia resposta HTTP
5. **TCP** reassembla dados no cliente
6. **Navegador** renderiza conteúdo

## Comparação de Camadas

| Camada OSI | Protocolo | Unidade de Dados | Função Principal                    |
| ---------- | --------- | ---------------- | ----------------------------------- |
| Rede       | IP        | Pacote           | Roteamento entre redes              |
| Transporte | TCP       | Segmento         | Comunicação confiável ponto-a-ponto |
| Aplicação  | HTTP      | Mensagem         | Transferência de dados web          |
