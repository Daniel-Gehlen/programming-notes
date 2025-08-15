# Closures e Lambdas em Ruby

Em Ruby, closures e lambdas são conceitos fundamentais para manipulação de funções e comportamentos em tempo de execução.

## Closures em Ruby

Uma closure é um bloco de código que:

- Pode ser associado a um ambiente léxico específico
- Mantém acesso a variáveis locais do contexto onde foi definida
- Continua acessível mesmo após o contexto original ter sido concluído

### Exemplo de Closure com Bloco:

```ruby
def contador
  start = 1
  lambda { start += 1 }
end

c = contador
puts c.call  # Output: 2
puts c.call  # Output: 3
puts c.call  # Output: 4
```

**Funcionamento:**

1. O método `contador` define uma variável local `start`
2. Retorna uma lambda que incrementa `start`
3. A lambda mantém acesso a `start` mesmo após `contador` ter terminado

## Lambdas em Ruby

Uma lambda é uma função anônima que:

- Pode ser tratada como objeto
- Verifica estritamente o número de argumentos
- Possui comportamento de retorno controlado

### Sintaxe:

```ruby
# Forma tradicional
l = lambda { |x, y| x + y }

# Forma simplificada (sintaxe stabby)
l = ->(x, y) { x + y }
```

### Exemplo Prático:

```ruby
sum = ->(x, y) { x + y }
puts sum.call(3, 4)  # Output: 7

# sum.call(3) # ArgumentError (número incorreto de argumentos)
```

### Características Chave:

1. **Verificação de Argumentos**

   - Lambdas exigem o número exato de argumentos
   - Procs são mais flexíveis (aceitam argumentos faltantes ou extras)

2. **Comportamento de Retorno**
   - `return` em lambda: retorna apenas da própria lambda
   - `return` em proc: retorna do método que a contém

## Comparação entre Closures e Lambdas

| Característica            | Closures (Procs)    | Lambdas                  |
| ------------------------- | ------------------- | ------------------------ |
| Acesso a variáveis        | Sim                 | Sim                      |
| Verificação de argumentos | Flexível            | Estrita                  |
| Comportamento de return   | Retorna do contexto | Retorna apenas da lambda |

## Conclusão

- **Closures** são poderosas para capturar e manter estado entre chamadas
- **Lambdas** oferecem maior rigor na chamada de funções
- Ambas são essenciais para programação funcional em Ruby
- A escolha depende da necessidade de flexibilidade vs. rigor na implementação
