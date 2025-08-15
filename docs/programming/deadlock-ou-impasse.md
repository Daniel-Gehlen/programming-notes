# Deadlock (Impasse)

## Definição

Situação em que múltiplos processos/threads ficam bloqueados indefinidamente, cada um esperando por recursos mantidos por outros.

## Condições de Coffman (todas necessárias)

1. **Exclusão Mútua**: Recurso não compartilhável
2. **Hold and Wait**: Processo segura recurso enquanto espera outro
3. **No Preemption**: Recursos não podem ser forçadamente liberados
4. **Circular Wait**: Ciclo de dependências entre processos

## Exemplo Clássico

```mermaid
graph LR
    P1-->|Espera R2|P2
    P2-->|Espera R1|P1
```

## Estratégias de Tratamento

### Prevenção

| Técnica                 | Implementação                        | Limitação                     |
| ----------------------- | ------------------------------------ | ----------------------------- |
| Ordem Total de Recursos | Sempre adquirir locks na mesma ordem | Difícil em sistemas complexos |
| Alocação Atômica        | Adquirir todos recursos de uma vez   | Pode causar starvation        |

### Detecção & Recuperação

- **Algoritmo do Bancoqueiro**: Verifica estados seguros
- **Graph Cycles**: Detecta ciclos em grafos de alocação
- **Recuperação**:
  - Kill processos (menor custo primeiro)
  - Rollback para checkpoint

## Boas Práticas em C++

```cpp
// EVITANDO deadlock com std::lock (all-or-nothing)
std::mutex m1, m2;

void safe_operation() {
    std::lock(m1, m2); // Bloqueia ambos atomicamente
    std::lock_guard<std::mutex> lk1(m1, std::adopt_lock);
    std::lock_guard<std::mutex> lk2(m2, std::adopt_lock);
    // Operação segura
}
```

## Casos Reais

- Bancos de dados (transações concorrentes)
- Sistemas operacionais (alocação de dispositivos)
- Microserviços (dependências circulares)

> **Dica**: Em sistemas distribuídos, use timeouts em locks:
>
> ```cpp
> if(mutex.try_lock_for(std::chrono::milliseconds(100))) {
>   // operação
> } else {
>   // fallback
> }
> ```
