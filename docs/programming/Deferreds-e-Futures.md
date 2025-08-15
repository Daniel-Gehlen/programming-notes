# Deferreds e Futures

## Conceito Fundamental

Abstrações para programação assíncrona que representam resultados futuros, permitindo execução não-bloqueante enquanto aguardam operações concluírem.

## Deferreds

**Framework principal**: Twisted (Python)
**Características**:

- Baseado em callbacks
- Três estados possíveis:
  - ✅ Pendente
  - ✅ Concluído com sucesso
  - ❌ Concluído com erro

**Fluxo típico**:

```python
deferred = fazer_requisicao_assincrona()
deferred.addCallback(tratar_sucesso)
deferred.addErrback(tratar_erro)
```

## Futures

**Framework principal**: asyncio (Python 3+)
**Características**:

- Suporta `await` (além de callbacks)
- Mesmos três estados que Deferreds
- Integrado com corrotinas

**Fluxo típico**:

```python
future = asyncio.create_task(operacao_assincrona())
resultado = await future
```

## Comparação

| Característica | Deferreds                     | Futures                        |
| -------------- | ----------------------------- | ------------------------------ |
| Paradigma      | Callback-based                | Awaitable                      |
| Framework      | Twisted                       | asyncio                        |
| Sintaxe        | `.addCallback()`              | `await`                        |
| Complexidade   | Pirâmide de callbacks         | Código linear com await        |
| Casos de Uso   | Operações de I/O tradicionais | Programação assíncrona moderna |

## Quando Usar

- **Deferreds**: Sistemas legados, projetos usando Twisted
- **Futures**: Novos projetos Python 3+, especialmente com asyncio

> **Dica**: Futures representam a evolução moderna do padrão, com melhor legibilidade através do `await`.
