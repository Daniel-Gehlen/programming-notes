# Algoritmos Dividir-Conquistar-Combinar

## Princípios Fundamentais

Os algoritmos de dividir e conquistar seguem três etapas principais:

1. Dividir o problema em subproblemas menores
2. Conquistar cada subproblema recursivamente
3. Combinar as soluções dos subproblemas

## Análise de Complexidade

### Equação de Recorrência Básica

A complexidade é determinada pela relação:

```
T(n) = a * T(n/b) + f(n)
```

Onde:

- a = número de subproblemas
- n/b = tamanho de cada subproblema
- f(n) = custo para dividir e combinar

### Exemplo: Merge Sort

Para o Merge Sort, temos:

```
T(n) = 2T(n/2) + n
```

Solução: O(n log n)

## Métodos de Resolução

### 1. Método da Árvore de Recursão

```
Nível 0: n operações
Nível 1: 2 * (n/2) = n operações
Nível 2: 4 * (n/4) = n operações
...
Total: n * altura = n * log n
```

### 2. Teorema Mestre

Cobre casos onde:

```
T(n) = aT(n/b) + f(n)
```

Com três casos principais baseados na comparação entre f(n) e n^(log_b a)

## Aplicação Prática

### Versão Híbrida Merge Sort + Insertion Sort

1. Dividir a lista em n/k sublistas de tamanho k
2. Ordenar cada sublista com Insertion Sort: O(k²) por sublista
3. Combinar com Merge Sort: O(n log(n/k))

Cálculo de complexidade:

```
Total = (n/k)*k² + n log(n/k)
      = nk + n log(n/k)
```

Para equivaler ao Merge Sort puro (O(n log n)):

```
nk + n log(n/k) ≤ c*n log n
```

Solução ótima quando k = log n

## Implementação em Código

```python
def hybrid_sort(arr, k):
    # Caso base
    if len(arr) <= k:
        return insertion_sort(arr)

    # Dividir
    mid = len(arr) // 2
    left = hybrid_sort(arr[:mid], k)
    right = hybrid_sort(arr[mid:], k)

    # Combinar
    return merge(left, right)
```

## Caso de Uso: Organização de Biblioteca

1. **Divisão**:

   - Separar livros em √n prateleiras com √n livros cada

2. **Ordenação local**:

   - Ordenar cada prateleira: O((√n)²) = O(n)

3. **Intercalação**:
   - Combinar prateleiras ordenadas: O(n log n)

**Complexidade total**: O(n log n)
