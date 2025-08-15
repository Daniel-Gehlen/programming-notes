# CoW (Copy-on-Write)

## Conceito Fundamental

Técnica de otimização que adia a cópia de dados até o momento da primeira modificação, permitindo compartilhamento inicial de recursos.

## Mecanismo de Funcionamento

1. **Compartilhamento Inicial**

   - Processos/estruturas compartilham os mesmos dados
   - Exemplo: `fork()` no Linux - pai e filho compartilham páginas de memória

2. **Modificação**
   ```mermaid
   graph LR
       A[Dados Originais] --> B[Processo 1]
       A --> C[Processo 2]
       C -->|Tenta modificar| D[Cópia dos Dados]
       D --> E[Processo 2 usa cópia]
   ```

## Aplicações Práticas

### 1. Sistemas Operacionais

- **`fork()`**:
  ```c
  pid_t pid = fork();  // Cria processo com páginas compartilhadas
  if (pid == 0) {
      // Modificações disparam cópias privadas
  }
  ```
- **Gerenciamento de Memória Virtual**

### 2. Sistemas de Arquivos

- **ZFS/Btrfs**:
  - Snapshots eficientes
  - Apenas blocos modificados são copiados
  ```bash
  # Exemplo: Criar snapshot Btrfs
  btrfs subvolume snapshot /data /data/snapshot1
  ```

### 3. Estruturas de Dados

- **Coleções Imutáveis** (Haskell, Clojure):
  ```clojure
  (def v1 [1 2 3])
  (def v2 (conj v1 4))  ; Compartilha estrutura original até modificação
  ```

## Vantagens vs Desvantagens

| ✅ Vantagens         | ❌ Desafios                   |
| -------------------- | ----------------------------- |
| Economia de memória  | Overhead na primeira escrita  |
| Snapshots eficientes | Complexidade de implementação |
| Fork rápido          | Gerenciamento de referências  |

## Casos de Uso Típicos

- Virtualização (QCOW2)
- Bancos de dados (MVCC)
- Versionamento de arquivos
- Sistemas de containers (Docker layers)

> **Otimização**: CoW é especialmente eficiente para:
>
> - Operações de leitura predominantes
> - Ambientes com memória limitada
> - Sistemas que requerem snapshots frequentes
