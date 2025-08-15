# POSIX (Portable Operating System Interface)

## Visão Geral

Conjunto de padrões IEEE para compatibilidade entre sistemas operacionais, facilitando a portabilidade de software.

## Componentes Principais

| Padrão       | Descrição                                                          |
| ------------ | ------------------------------------------------------------------ |
| **POSIX.1**  | Chamadas de sistema básicas (arquivos, processos, sinais, threads) |
| **POSIX.2**  | Utilitários de shell e linha de comando                            |
| **POSIX.1b** | Extensões em tempo real (prioridades, timers, IPC)                 |
| **POSIX.1c** | API de threads (pthreads) para programação concorrente             |

## Exemplos de APIs POSIX

### Manipulação de Arquivos

```c
#include <fcntl.h>
int fd = open("file.txt", O_RDWR);
read(fd, buffer, size);
write(fd, data, size);
close(fd);
```

### Gerenciamento de Processos

```c
pid_t pid = fork();
if (pid == 0) {
    execl("/bin/ls", "ls", NULL);  // Processo filho
} else {
    wait(NULL);  // Processo pai
}
```

### Sinais

```c
#include <signal.h>
void handler(int sig) { /* ... */ }
signal(SIGINT, handler);  // Captura Ctrl+C
```

### Threads (pthreads)

```c
pthread_t thread;
pthread_create(&thread, NULL, thread_func, NULL);
pthread_join(thread, NULL);
```

## Sistemas Compatíveis

✅ **Unix-like**: Linux, macOS, BSD
✅ **Windows**: Via WSL ou Cygwin
✅ **Embarcados**: Vários RTOS

## NGPT vs NPTL

| Característica | NGPT                        | NPTL (Padrão atual) |
| -------------- | --------------------------- | ------------------- |
| Modelo         | N:M (User:Kernel threads)   | 1:1                 |
| Desempenho     | Bom para multiprocessadores | Superior            |
| Complexidade   | Alta (mapeamento complexo)  | Baixa               |
| Suporte        | Descontinuado               | Integrado na glibc  |

> **Impacto**: O POSIX estabeleceu bases para:
>
> - Portabilidade entre sistemas
> - APIs consistentes para desenvolvimento
> - Evolução de sistemas concorrentes
> - Padronização de comportamento em tempo real
