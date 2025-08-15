# I/O (Input/Output) em Sistemas Computacionais

## Conceitos Fundamentais

Comunicação entre CPU e dispositivos externos (periféricos, redes, armazenamento) através de operações de leitura/escrita.

## Tipos de Operações I/O

### 1. Bloqueante (Blocking I/O)

- **Característica**: Processo fica suspenso até conclusão da operação
- **Vantagem**: Simplicidade de implementação
- **Desvantagem**: Baixa eficiência em cenários concorrentes
- **Exemplo**:
  ```python
  with open('arquivo.txt', 'r') as f:  # Bloqueia até ler
      data = f.read()
  ```

### 2. Não-Bloqueante (Non-blocking I/O)

- **Característica**: Retorna imediatamente (com sucesso ou erro)
- **Vantagem**: Maior responsividade
- **Desvantagem**: Necessidade de verificação constante (polling)
- **Exemplo**:
  ```python
  sock.setblocking(False)  # Socket não-bloqueante
  try:
      data = sock.recv(1024)
  except BlockingIOError:
      # Nenhum dado disponível
  ```

### 3. Assíncrono (Async I/O)

- **Característica**: Operação executa em background com notificação
- **Vantagem**: Máxima eficiência em operações concorrentes
- **Desvantagem**: Complexidade de implementação
- **Exemplo** (Python asyncio):
  ```python
  async def read_data():
      reader, writer = await asyncio.open_connection('host', 80)
      data = await reader.read(100)
  ```

## Técnicas de Gerenciamento

| Técnica        | Descrição                | Vantagens  | Desvantagens            |
| -------------- | ------------------------ | ---------- | ----------------------- |
| **Polling**    | Verificação periódica    | Simples    | Ineficiente (CPU waste) |
| **Interrupts** | Dispositivo notifica CPU | Eficiente  | Overhead de contexto    |
| **DMA**        | Acesso direto à memória  | Libera CPU | Hardware adicional      |

## Desafios e Soluções

**Problema**: Gargalos de performance
**Solução**:

- Buffering
- Caching (ex: Redis)
- I/O assíncrono (ex: Node.js, Nginx)

**Problema**: Concorrência
**Solução**:

- Epoll/kqueue (Linux/BSD)
- Reactor Pattern
- Thread pools

**Problema**: Confiabilidade
**Solução**:

- Sistemas de arquivos journaling
- Transações ACID
- Checksums

## Arquiteturas Modernas

- **Event-driven**: Nginx, Node.js
- **Multi-threaded**: Apache (MPM)
- **Hybrid**: Java NIO

> **Dica de Performance**: Para aplicações I/O-bound, priorize modelos não-bloqueantes/assíncronos com multiplexação (select/epoll). Para CPU-bound, considere multi-threading.
