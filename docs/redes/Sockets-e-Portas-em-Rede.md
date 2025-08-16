# Sockets e Portas em Rede

## Conceitos Fundamentais

### Sockets em Computação
- **Definição**: Interfaces de comunicação que permitem troca de dados entre programas em redes locais (LAN) ou na Internet
- **Componentes**:
  - **Socket**: Ponto final de comunicação bidirecional
  - **Endereço IP**: Identifica um dispositivo específico na rede
  - **Porta**: Identifica um aplicativo/serviço específico no dispositivo

### Tipos de Sockets
| Tipo | Descrição | Protocolo | Características |
|------|-----------|-----------|-----------------|
| Unix Domain | Comunicação entre processos na mesma máquina | - | Usa arquivos do sistema |
| Internet TCP | Comunicação entre máquinas | TCP | Orientado a conexão, entrega confiável |
| Internet UDP | Comunicação entre máquinas | UDP | Sem conexão, mais rápido |

## Portas de Rede

### Categorias de Portas
| Faixa | Tipo | Exemplos |
|-------|------|----------|
| 0-1023 | Bem Conhecidas | 80 (HTTP), 443 (HTTPS), 22 (SSH) |
| 1024-49151 | Registradas | 3306 (MySQL), 5432 (PostgreSQL) |
| 49152-65535 | Dinâmicas/Privadas | Atribuídas temporariamente pelo SO |

### Portas Bem Conhecidas (Well-Known Ports)
- **20/21**: FTP (transferência de arquivos)
- **22**: SSH (acesso remoto seguro)
- **25**: SMTP (envio de e-mails)
- **53**: DNS (resolução de nomes)
- **80**: HTTP (tráfego web)
- **443**: HTTPS (web seguro)
- **3389**: RDP (área de trabalho remota)

## Comunicação com Sockets

### Fluxo Básico TCP
1. **Servidor**:
   - Cria socket (`socket()`)
   - Associa a IP e porta (`bind()`)
   - Escuta conexões (`listen()`)
   - Aceita conexão (`accept()`)
   - Troca dados (`send()`/`recv()`)
   - Fecha conexão (`close()`)

2. **Cliente**:
   - Cria socket (`socket()`)
   - Conecta ao servidor (`connect()`)
   - Troca dados (`send()`/`recv()`)
   - Fecha conexão (`close()`)

### Exemplo em Python
**Servidor TCP**:
```python
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 65432))
server_socket.listen()
conn, addr = server_socket.accept()
data = conn.recv(1024)
conn.sendall(data)
conn.close()
```

**Cliente TCP**:
```python
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 65432))
client_socket.sendall(b'Hello')
data = client_socket.recv(1024)
client_socket.close()
```

## Conceitos Avançados

### Comunicação Interprocessual (IPC)
- **Mecanismos**:
  - Pipes (tubos nomeados/não nomeados)
  - Memória compartilhada
  - Filas de mensagens
  - Sockets (incluindo Unix Domain Sockets)

### TTL (Time to Live)
- **IP**: Número máximo de saltos (hops) antes do pacote ser descartado
- **DNS**: Tempo que um registro DNS pode ficar em cache

### Loopback
- **Endereço**: 127.0.0.1 (localhost)
- **Uso**: Testes locais sem interface de rede física

## Programas por Tempo de Vida

| Característica | Short-Lived | Long-Lived |
|----------------|-------------|------------|
| Duração | Curta (segundos/minutos) | Longa (horas/dias) |
| Exemplos | Scripts CLI, utilitários | Servidores, daemons |
| Gerenciamento | Termina após execução | Permanece em memória |

## Ferramentas e Comandos Úteis
- `netstat`: Mostra conexões de rede e portas abertas
- `lsof`: Lista arquivos abertos (incluindo sockets)
- `ping`: Testa conectividade (usa ICMP)
- `telnet`: Testa conectividade em portas TCP
- `traceroute`: Mostra rota dos pacotes na rede

## Boas Práticas
1. Para serviços locais, usar endereço de loopback (127.0.0.1)
2. Escolher portas adequadas (evitar conflitos com serviços conhecidos)
3. Implementar timeout nas conexões
4. Sempre fechar sockets após uso
5. Para serviços críticos, considerar implementação de heartbeat

Este resumo abrange os principais conceitos sobre sockets e portas em redes de computadores, desde os fundamentos até aplicações práticas, conforme apresentado no material original.
