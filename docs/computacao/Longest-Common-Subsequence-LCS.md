# Longest Common Subsequence (LCS) / Subsequência Comum Mais Longa

O Longest Common Subsequence (LCS), em português Subsequência Comum Mais Longa, é um conceito importante na área de algoritmos e teoria da computação, especialmente utilizado em problemas de comparação de strings e análise de similaridade entre sequências de dados.

## Definição

### Definição Formal:

Dadas duas sequências X e Y, um LCS é uma subsequência que aparece em ambas as sequências na mesma ordem relativa, mas não necessariamente de forma contígua.

### Características:

- **Comprimento**: O comprimento do LCS é o número máximo de caracteres que podem ser correspondidos em ambas as sequências
- **Exemplo**: Para X = "ABCBDAB" e Y = "BDCABA", uma subsequência comum mais longa é "BCBA" com comprimento 4

## Aplicações

1. **Edição de Texto**: Determinar diferenças entre versões de texto
2. **Bioinformática**: Comparar sequências genéticas
3. **Mineração de Dados**: Encontrar padrões em conjuntos de dados

## Algoritmos

### Algoritmo de Programação Dinâmica:

Método mais eficiente para encontrar o LCS, utilizando uma tabela para armazenar subproblemas.

### Complexidade:

O(mn), onde m e n são os comprimentos das sequências

### Implementação em Python:

```python
def longest_common_subsequence(X, Y):
    m = len(X)
    n = len(Y)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i - 1] == Y[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[m][n]
```
