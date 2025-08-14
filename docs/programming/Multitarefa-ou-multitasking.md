# Multitarefa (Multitasking)

## Visão Geral

Capacidade de um sistema operacional executar múltiplos processos/threads simultaneamente, essencial para eficiência em sistemas modernos.

---

## Tipos de Multitarefa

### Cooperativa

- **Funcionamento**: Processos cedem voluntariamente o controle
- **Limitação**: Um processo mal-comportado pode travar todo o sistema
- **Exemplo**: Windows 3.x, Mac OS até versão 9

### Preemptiva (Padrão atual)

- **Funcionamento**: SO força alternância entre processos usando interrupções de timer
- **Vantagem**: Prevenção de monopolização da CPU
- **Exemplo**: Windows NT+, Linux, macOS

---

## Mecanismos Chave

### Troca de Contexto

```plaintext
1. Salva estado atual (registradores, PC, stack pointer)
2. Carrega estado do próximo processo
3. Overhead: ~1-100μs por troca
```

### Escalonamento de Processos

| Política         | Vantagens                   | Desvantagens           |
| ---------------- | --------------------------- | ---------------------- |
| Round-Robin      | Simples e justo             | Ignora prioridades     |
| Prioridades      | Atende processos críticos   | Pode causar starvation |
| Multilevel Queue | Balanceia diferentes cargas | Complexidade aumentada |
| Feedback         | Adapta-se ao comportamento  | Dificuldade de ajuste  |

---

## Vantagens

✅ **Utilização da CPU**: Preenche tempos ociosos (ex: durante I/O)
✅ **Responsividade**: Permite sistemas interativos fluidos
✅ **Modularidade**: Isola componentes em processos distintos

---

## Desafios

⚠️ **Concorrência**: Race conditions, deadlocks (requer semáforos/mutexes)
⚠️ **Overhead**: Troca de contexto consome recursos
⚠️ **Complexidade**: Balancear prioridades e recursos

---

## Aplicações Práticas

- **SOs modernos**: Windows, Linux gerenciam centenas de processos concorrentes
- **Servidores web**: Nginx, Apache atendem múltiplos clientes simultaneamente
- **IDEs**: Compilação em background enquanto desenvolvedor edita código

---

## Exemplo Técnico (Linux)

```bash
# Visualizar processos em execução
top - 15:30:45 up 2 days,  3:21,  2 users
Tasks: 215 total,  3 running, 212 sleeping
%Cpu(s): 12.3 us,  4.5 sy   # User vs System CPU time
```

---

## Conclusão

A multitarefa revolucionou a computação permitindo:

- Melhor aproveitamento de hardware
- Sistemas mais responsivos
- Execução concorrente segura de aplicações
