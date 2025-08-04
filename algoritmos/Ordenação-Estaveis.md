# Algoritmos de Ordenação Estáveis

## Algoritmos Estáveis vs Não-Estáveis

- **Estáveis**:

  - Ordenação por Inserção (Insertion Sort)
  - Ordenação por Intercalação (Merge Sort)

- **Não-Estáveis** (por padrão):
  - Heapsort
  - Quicksort

## Como Tornar Qualquer Algoritmo Estável

### Esquema de Indexação

1. **Atribuição de Índices**:

   - Atribua um índice único para cada elemento antes da ordenação
   - O índice representa a posição original na lista não-ordenada

2. **Comparação Estável**:
   - Ao comparar elementos iguais:
     ```python
     if elemento1 == elemento2:
         return índice1 < índice2
     ```

### Exemplo Prático

**Lista original com índices**:

```
[(5, 0), (2, 1), (5, 2), (3, 3), (1, 4)]
```

**Lista ordenada (por elemento, mantendo ordem original de iguais)**:

```
[(1, 4), (2, 1), (3, 3), (5, 0), (5, 2)]
```

### Custo Computacional

- **Tempo**: O(n) para atribuição inicial de índices
- **Espaço**: O(n) (armazenamento adicional de um inteiro por elemento)
