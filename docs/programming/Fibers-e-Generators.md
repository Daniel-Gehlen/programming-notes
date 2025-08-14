# Fibers e Generators

Fibers e Generators são conceitos relacionados à programação que compartilham semelhanças com corrotinas, mas possuem características distintas. Vamos explorar cada um:

## Fiber (Fibra)

### Definição:
Uma Fiber é uma construção que permite a execução cooperativa de código em um programa, com controle manual sobre suspensão e retomada.

### Características:
- **Estado Independente**: Pode ser retomada múltiplas vezes sem reiniciar
- **Controle Manual**: Suspensão/retomada explícita pelo programador
- **Implementação**: Normalmente como construção de biblioteca (não como primitiva de linguagem)

### Exemplo em Ruby:
```ruby
fiber = Fiber.new do
  puts "Execução inicial"
  Fiber.yield
  puts "Execução retomada"
end

puts "Iniciando Fiber"
fiber.resume
puts "Fiber pausada"
fiber.resume
puts "Fim"
```

*Funcionamento:*
1. `Fiber.new` cria a fiber
2. `resume` inicia/retoma execução
3. `Fiber.yield` pausa a execução

## Generator (Gerador)

### Definição:
Função que produz sequência de valores sob demanda, podendo ser pausada durante execução.

### Características:
- **Produção Preguiçosa**: Gera valores apenas quando solicitados
- **Iteração Controlada**: Cliente controla quando solicitar próximo valor
- **Suporte Nativo**: Primitiva de linguagem em Python, JavaScript etc.

### Exemplo em Python:
```python
def generator_example():
    yield "Primeiro valor"
    yield "Segundo valor"
    yield "Terceiro valor"

gen = generator_example()
print(next(gen))  # "Primeiro valor"
print(next(gen))  # "Segundo valor"
print(next(gen))  # "Terceiro valor"
```

*Funcionamento:*
- `yield` pausa a função e retorna valor
- `next()` retoma execução até próximo `yield`

## Comparação

| Característica       | Fiber                      | Generator                 |
|----------------------|----------------------------|---------------------------|
| **Propósito**        | Controle de fluxo          | Produção de valores       |
| **Controle**         | Explícito (programador)    | Implícito (iteração)      |
| **Estado**           | Mantido entre execuções    | Mantido entre valores     |
| **Implementação**    | Biblioteca                 | Primitiva de linguagem   |

**Aplicações Comuns:**
- Fibers: Programação assíncrona, pipelines de processamento
- Generators: Iteração eficiente, streams de dados, sequências infinitas
