# Teoria Formal de Algoritmos

## Contribuições Fundamentais

### Alonzo Church (1903-1995)

- **Cálculo Lambda** (1936)
  - Formalização matemática de funções computáveis
  - Base para linguagens funcionais (Lisp, Haskell)
  - Tese de Church: "Computável = Expressável em λ-cálculo"

```python
# Exemplo em cálculo lambda (função identidade)
λx.x
```

### Stephen Kleene (1909-1994)

- **Funções Recursivas** (1936)
  - Hierarquia de funções computáveis:
    1. Recursivas primitivas
    2. Recursivas parciais
    3. Recursivas totais
  - Teorema da Forma Normal: Toda função computável pode ser expressa na forma normal

### Emil Post (1897-1954)

- **Máquinas de Post** (1936)
  - Modelo baseado em regras de reescrita
  - Equivalente às Máquinas de Turing
  - Pioneiro em problemas de decisão

## Tese de Church-Turing (1936)

**Conjectura Fundamental**:

> "Todo algoritmo efetivamente calculável pode ser computado por uma Máquina de Turing"

### Equivalências Comprovadas:

1. Cálculo Lambda (Church)
2. Máquinas de Turing
3. Funções Recursivas (Kleene)
4. Sistemas de Post

## Plankalkül (Konrad Zuse, 1943-1945)

### Primeira Linguagem de Alto Nível

```plaintext
P1 max2 (V0.1, V0.2) max R0
   V0.1 > V0.2 -> R0 = V0.1
   V0.1 ≤ V0.2 -> R0 = V0.2
```

### Inovações Pioneiras:

| Característica      | Descrição               | Impacto Moderno        |
| ------------------- | ----------------------- | ---------------------- |
| Estruturas de dados | Arrays e registros      | Tipos compostos        |
| Controle de fluxo   | If-else e loops         | Estruturas de controle |
| Subprogramas        | Funções e procedimentos | Modularização          |
| Notação matemática  | Expressões formais      | Linguagens científicas |

## Linha do Tempo Histórica

```
timeline
    title Evolução dos Fundamentos Algorítmicos
    1936 : Cálculo Lambda (Church)
    1936 : Máquinas de Turing
    1936 : Funções Recursivas (Kleene)
    1936 : Sistemas de Post
    1945 : Plankalkül (Zuse)
```

**Legado**:

- Base teórica para:
  - Ciência da Computação
  - Complexidade Computacional
  - Linguagens de Programação
  - Verificação Formal de Programas
