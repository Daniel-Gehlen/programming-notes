# OpenMP e OpenMPI: Tecnologias para Programação Paralela

## OpenMP (Open Multi-Processing)

### Conceito Principal

API para paralelismo em sistemas de **memória compartilhada** (multicore/multiprocessador)

### Características Chave

- Modelo de programação baseado em diretivas (`#pragma`)
- Paralelismo com threads (fork-join)
- Gerenciamento automático de threads
- Compartilhamento de memória entre threads

### Exemplo em C++

```cpp
#include <omp.h>
#include <iostream>

int main() {
    #pragma omp parallel for
    for (int i = 0; i < 8; i++) {
        std::cout << "Thread " << omp_get_thread_num()
                  << " processa iteração " << i << std::endl;
    }
    return 0;
}
```

**Vantagens:**

- Fácil de implementar
- Boa escalabilidade em CPUs multicore
- Baixo overhead de comunicação

## OpenMPI (Open Message Passing Interface)

### Conceito Principal

Biblioteca para paralelismo em sistemas **distribuídos** (clusters)

### Características Chave

- Comunicação via passagem de mensagens
- Modelo SPMD (Single Program Multiple Data)
- Suporte a operações coletivas (broadcast, reduce)
- Tolerância a falhas

### Exemplo Básico

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);

    int world_size, world_rank;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    printf("Processo %d de %d\n", world_rank, world_size);

    MPI_Finalize();
    return 0;
}
```

**Vantagens:**

- Escalabilidade em grandes clusters
- Flexibilidade na distribuição de carga
- Portabilidade entre arquiteturas

## Comparação Direta

| Característica       | OpenMP                 | OpenMPI               |
| -------------------- | ---------------------- | --------------------- |
| **Modelo**           | Memória compartilhada  | Memória distribuída   |
| **Unidade Paralela** | Threads                | Processos             |
| **Comunicação**      | Memória compartilhada  | Passagem de mensagens |
| **Escalabilidade**   | Núcleos de uma máquina | Múltiplos nós         |
| **Complexidade**     | Baixa                  | Alta                  |

## Casos de Uso Típicos

**OpenMP:**

- Processamento de imagens
- Cálculos matriciais
- Aplicações desktop multicore

**OpenMPI:**

- Simulações científicas
- Big Data distribuído
- Modelos climáticos
