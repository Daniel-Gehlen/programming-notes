# Coroutine: rotina cooperativa ou corotina

Uma coroutine (rotina cooperativa ou corotina) é uma função que pode ser suspensa e retomada, permitindo execução não linear e cooperativa entre múltiplas rotinas no mesmo processo.

## Características Principais

### Execução Cooperativa

- Controle explicitamente transferido entre corotinas usando `yield`, `await` ou mecanismos similares
- Não há preempção - cada corotina deve voluntariamente liberar o controle

### Estado Mantido

- Preserva estado local entre suspensões (variáveis locais, ponto de execução)
- Mais leve que threads - compartilham espaço de memória

### Implementação no Nível da Linguagem

- Gerenciadas pelo runtime da linguagem, não pelo SO
- Sem custo de troca de contexto do sistema operacional

### Sintaxe Especializada

- Palavras-chave específicas por linguagem:
  - Python: `async`/`await`, `yield`
  - JavaScript: `async`/`await`
  - C++: `co_await`

## Exemplo em Python (async/await)

```python
import asyncio

async def exemplo_corotina():
    print("Corotina iniciada")
    await asyncio.sleep(1)  # Ponto de suspensão
    print("Corotina retomada")

async def main():
    print("Chamando corotina")
    await exemplo_corotina()
    print("Corotina finalizada")

asyncio.run(main())  # Saída:
# Chamando corotina
# Corotina iniciada
# (1 segundo depois)
# Corotina retomada
# Corotina finalizada
```

## Vantagens

| Benefício         | Descrição                                                               |
| ----------------- | ----------------------------------------------------------------------- |
| **Eficiência**    | Menor overhead que threads (sem troca de contexto do SO)                |
| **Simplicidade**  | Programação concorrente sem complexidade de sincronização entre threads |
| **Flexibilidade** | Controle granular sobre execução assíncrona                             |

## Limitações

| Desafio                     | Impacto                                              |
| --------------------------- | ---------------------------------------------------- |
| **Cooperação obrigatória**  | Corotina mal comportada pode bloquear todo o sistema |
| **Dependência linguística** | Implementação e sintaxe variam entre linguagens      |

## Casos de Uso Comuns

- Servidores web assíncronos
- Processamento de streams de dados
- Interfaces gráficas responsivas
- Operações de I/O concorrentes
