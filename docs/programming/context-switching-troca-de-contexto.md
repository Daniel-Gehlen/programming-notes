# Context Switching (Troca de Contexto)

## Conceito Fundamental

A troca de contexto é o mecanismo pelo qual um sistema operacional alterna a execução entre diferentes processos/threads, permitindo o compartilhamento eficiente da CPU.

## Como Funciona

1. **Interrupção do Processo Atual**

   - Por timeout do scheduler
   - Por chamada de sistema
   - Por interrupção de hardware

2. **Salvamento do Estado**

   - Registradores da CPU
   - Contador de programa
   - Ponteiro de pilha
   - Informações de memória
     → Armazenado no **PCB** (Process Control Block)

3. **Seleção do Novo Processo**

   - Baseado no algoritmo de escalonamento
   - Prioridade, tempo restante, etc.

4. **Restauração do Estado**

   - Carrega contexto do novo processo
   - Registradores, memória, estado

5. **Retomada da Execução**
   - Processo continua de onde parou

## Impactos no Desempenho

| Fator                   | Impacto                               |
| ----------------------- | ------------------------------------- |
| **Frequência**          | Troca excessiva reduz throughput      |
| **Tamanho do Contexto** | Mais registradores = maior overhead   |
| **Cache Miss**          | Invalidação da cache aumenta latência |

## Otimizações Comuns

- **Threads leves**: Menos contexto para salvar
- **SMP (Symmetric Multiprocessing)**: Escalonamento por núcleo
- **Algoritmos inteligentes**: Evitar trocas desnecessárias

```c
// Exemplo simplificado de troca de contexto em x86
struct context {
    uint64_t rbx, rsp, rbp, r12, r13, r14, r15, rip;
};

void switch_context(struct context *old, struct context *new) {
    asm volatile(
        "movq %%rbx, 0(%0)\n\t"
        "movq %%rsp, 8(%0)\n\t"
        // ... salva registradores
        "movq 0(%1), %%rbx\n\t"
        "movq 8(%1), %%rsp\n\t"
        // ... restaura registradores
        : : "r"(old), "r"(new) : "memory"
    );
}
```

**Estatísticas Importantes:**

- Tempo médio de troca: 1-100μs (depende da arquitetura)
- Overhead típico: 1-5% do tempo total da CPU
