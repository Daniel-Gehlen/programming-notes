# Scheduler e Threads

## Conceitos Fundamentais

### Scheduler (Escalonador)

- Componente do sistema operacional
- Responsável por alocar tempo de CPU entre threads/processos
- Decide:
  - Qual thread executar
  - Por quanto tempo
  - Ordem de execução

### Threads

- Unidades leves de execução dentro de processos
- Compartilham recursos do processo (memória, arquivos)
- Permitem concorrência e paralelismo

## Tipos de Scheduler

| Tipo               | Características                                                         |
| ------------------ | ----------------------------------------------------------------------- |
| **Preemptivo**     | Interrompe threads em execução baseado em: prioridades, fatias de tempo |
| **Não-Preemptivo** | Threads executam até completar (requer cooperação)                      |

## Políticas de Escalonamento

1. **FCFS** (First-Come, First-Served)

   - Ordem de chegada na fila
   - Simples mas pode causar starvation

2. **Round-Robin**

   - Fatias de tempo iguais (time slices)
   - Alternância circular entre threads
   - Equitativo para tarefas similares

3. **Por Prioridade**

   - Threads prioritárias executam primeiro
   - Pode ser dinâmico (ajustável durante execução)

4. **Multi-Level Feedback Queue**
   - Combina múltiplas filas com políticas diferentes
   - Threads migram entre filas conforme comportamento

## Gerenciamento de Concorrência

### Desafios

- Race conditions
- Deadlocks
- Starvation

### Mecanismos de Sincronização

- **Mutexes**: Exclusão mútua
- **Semáforos**: Controle de acesso
- **Variáveis de Condição**: Comunicação entre threads

## Importância do Scheduler

### Benefícios de um Bom Escalonamento

- Melhor utilização da CPU
- Responsividade do sistema
- Justiça na alocação de recursos
- Atendimento a requisitos de tempo real

### Impacto no Desempenho

- Balanceamento entre:
  - Throughput (tarefas completadas)
  - Latência (tempo de resposta)
  - Fairness (distribuição justa)

## Conclusão

- Scheduler é essencial para sistemas multitarefa
- Threads permitem concorrência eficiente
- Políticas de escalonamento variam conforme necessidades
- Mecanismos de sincronização garantem segurança
