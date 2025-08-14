# GIL (Global Interpreter Lock)

## O que é o GIL?

O **Global Interpreter Lock (GIL)** é um mecanismo de bloqueio usado em interpretadores de linguagens como Python e Ruby para gerenciar acesso concorrente à memória.

### Funcionamento Básico:

- **Mutex Global**: Atua como um bloqueio que permite apenas uma thread executar código interpretado por vez
- **Aquisição/Liberação**:
  - Threads devem adquirir o GIL para executar operações
  - Liberado quando:
    - A thread termina sua execução
    - Realiza operações de I/O
    - Atinge timeout pré-definido

## Impactos do GIL

| Vantagem                            | Desvantagem                                      |
| ----------------------------------- | ------------------------------------------------ |
| Simplifica gerenciamento de memória | Limita paralelismo real                          |
| Evita condições de corrida          | Restringe escalabilidade em CPUs multi-core      |
| Torna C extensions mais seguras     | Reduz benefícios de threads para CPU-bound tasks |

## Exemplo Prático (Python)

```python
import threading
import time

def count_up():
    i = 0
    while i < 1000000:
        i += 1

# Mesmo com threads, o GIL limita a execução paralela
thread1 = threading.Thread(target=count_up)
thread2 = threading.Thread(target=count_up)

start = time.time()
thread1.start()
thread2.start()
thread1.join()
thread2.join()
print(f"Tempo com GIL: {time.time() - start:.2f}s")
```

## Alternativas para Contornar o GIL

1. **Multiprocessing**:

   ```python
   from multiprocessing import Process  # Cada processo tem seu próprio GIL
   ```

2. **Extensões em C**:

   - Bibliotecas como NumPy liberam o GIL durante operações intensivas

3. **Async I/O**:

   ```python
   import asyncio  # Para I/O-bound applications
   ```

4. **Implementações alternativas**:
   - Jython, IronPython (sem GIL)
   - PyPy (com GIL mas JIT optimized)

## Quando o GIL não é problema?

- Aplicações I/O-bound (servidores web, APIs)
- Quando usando extensões que liberam o GIL
- Em workloads distribuídos entre processos
