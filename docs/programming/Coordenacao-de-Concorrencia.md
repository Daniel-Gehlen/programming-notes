# Coordenação de Concorrência

## Conceito Fundamental

Coordenação de concorrência em computação refere-se à gestão e organização de múltiplas tarefas ou processos que ocorrem simultaneamente em um sistema computacional, seja em:

- Um único processador com múltiplas threads
- Vários processadores independentes

## Problemas da Concorrência

Principais desafios a serem evitados:

| Problema            | Descrição                                                                 |
| ------------------- | ------------------------------------------------------------------------- |
| Condição de Corrida | Resultado depende da ordem de execução das threads                        |
| Deadlock            | Bloqueio mútuo entre threads/processos impedindo progresso                |
| Starvation          | Thread/processo não consegue acessar recursos necessários por longo tempo |

## Mecanismos de Coordenação

### 1. Mutex (Exclusão Mútua)

- **Função**: Garante acesso exclusivo a um recurso
- **Implementação**: `pthread_mutex_lock()` / `pthread_mutex_unlock()`
- **Cenário típico**: Acesso a variáveis compartilhadas

### 2. Semáforos

- **Tipos**:
  - Binários (similar a mutex)
  - Contadores (permitem N acessos simultâneos)
- **Operações**:
  - `wait()` (decrementa)
  - `signal()` (incrementa)

### 3. Monitores

- **Características**:
  - Encapsulamento de dados + operações
  - Bloqueio automático
  - Linguagens: Java (`synchronized`), C# (`lock`)

### 4. Transações (ACID)

- **Propriedades**:
  - Atomicidade
  - Consistência
  - Isolamento
  - Durabilidade
- **Aplicação**: Bancos de dados relacionais

### 5. Algoritmos Distribuídos

- **Exemplos**:
  - Algoritmo de Lamport
  - Algoritmo de Ricart-Agrawala
- **Uso**: Sistemas distribuídos

## Importância Prática

A coordenação eficaz é essencial para:
✅ Garantir consistência de dados
✅ Evitar erros de programação
✅ Melhorar desempenho em sistemas paralelos
✅ Habilitar processamento de grandes volumes em tempo real
