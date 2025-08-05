# O que são Threads?

## Definição

Unidades básicas de processamento dentro de um processo que permitem execução simultânea de múltiplas tarefas, compartilhando o mesmo espaço de memória e recursos do processo pai.

## Exemplos Práticos

### 1. Interface Gráfica (GUI)

- **Aplicação**: Navegadores web, editores de texto
- **Uso**: Thread principal para interface + thread secundária para carregamento de conteúdo

### 2. Servidores de Rede

- **Aplicação**: Servidores web, bancos de dados
- **Uso**: Thread separada para cada conexão de cliente

### 3. Processamento Pesado

- **Aplicação**: Renderização 3D, processamento de vídeo
- **Uso**: Divisão do trabalho entre threads para paralelização

## Vantagens

| Benefício          | Impacto                                   |
| ------------------ | ----------------------------------------- |
| **Multitarefa**    | Execução concorrente de operações         |
| **Responsividade** | Interface não trava durante processamento |
| **Eficiência**     | Melhor aproveitamento de CPUs multicore   |

## Desafios

| Problema             | Solução Típica     |
| -------------------- | ------------------ |
| Condições de corrida | Mutexes/Semáforos  |
| Deadlocks            | Ordenação de locks |
| Overhead             | Pool de threads    |

## Implementação em Python

```python
import threading
import time

def tarefa(nome):
    print(f"Thread {nome} iniciada")
    time.sleep(2)
    print(f"Thread {nome} finalizada")

# Criação de threads
t1 = threading.Thread(target=tarefa, args=("1",))
t2 = threading.Thread(target=tarefa, args=("2",))

# Início das threads
t1.start()
t2.start()

# Espera término
t1.join()
t2.join()
```

## Boas Práticas

1. **Minimize compartilhamento de estado**
2. **Use estruturas thread-safe**
3. **Prefira pools a criação dinâmica**
4. **Monitore deadlocks**

## Modelos Alternativos

- **Async/Await**: Para I/O bound
- **Processos**: Para CPU bound (multiprocessing)
- **Green Threads**: Threads leves (ex: Go)
