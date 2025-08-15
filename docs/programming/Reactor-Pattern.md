# Reactor Pattern

## Conceito Fundamental

Padrão arquitetural para manipulação eficiente de eventos e I/O concorrente, amplamente utilizado em sistemas de alta performance como servidores web (ex: NGINX).

## Componentes Principais

| Componente              | Função                                                      |
| ----------------------- | ----------------------------------------------------------- |
| **Handle/Descriptor**   | Recurso gerador de eventos (sockets, arquivos)              |
| **Reactor**             | Núcleo do sistema - gerencia registro e despacho de eventos |
| **Event Demultiplexer** | Monitora handles (select/poll/epoll/kqueue)                 |
| **Event Handlers**      | Lógica específica para processamento de cada tipo de evento |

## Fluxo de Operação

1. **Registro**

   - Handles são registrados no Reactor com seus handlers correspondentes

2. **Monitoramento**

   - Demultiplexer observa handles por eventos (bloqueante)

3. **Despacho**

   - Quando eventos ocorrem, Reactor aciona o handler apropriado

4. **Ciclo Contínuo**
   - Processo se repete em loop (Event Loop)

## Vantagens

✅ **Alta Escalabilidade**

- Single-thread pode gerenciar milhares de conexões

✅ **Eficiência de Recursos**

- Evita overhead de múltiplas threads/processos

✅ **Baixa Latência**

- Resposta rápida a eventos de I/O

## Exemplo em Python

```python
import selectors
import socket

selector = selectors.DefaultSelector()

def accept(sock, mask):
    conn, addr = sock.accept()
    selector.register(conn, selectors.EVENT_READ, read)

def read(conn, mask):
    data = conn.recv(1024)
    if data:
        conn.send(data)  # Echo
    else:
        selector.unregister(conn)
        conn.close()

sock = socket.socket()
sock.bind(('localhost', 12345))
sock.listen()
selector.register(sock, selectors.EVENT_READ, accept)

while True:  # Event Loop
    events = selector.select()
    for key, mask in events:
        key.data(key.fileobj, mask)
```

**Implementações Comuns**:

- NGINX (servidor web)
- Node.js (runtime JavaScript)
- Twisted (Python)
- Netty (Java)

> **Padrões Relacionados**: Proactor Pattern (para operações assíncronas completas) e Observer Pattern (para sistemas de eventos genéricos).
