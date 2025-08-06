# Limite Inferior para Intercalação de Listas Ordenadas

## Análise Teórica

### Parte a: Número de Divisões Possíveis
Para dividir uma lista ordenada de `2n` números em duas sublistas ordenadas de tamanho `n` cada:

- **Número de divisões únicas**: `C(2n, n) = (2n)!/(n! × n!)`
- **Exemplo com n=2**:
  ```math
  C(4, 2) = 6 \text{ divisões possíveis}
  ```
  Lista original: [a ≤ b ≤ c ≤ d]
  Sublistas possíveis:
  - [a,b] e [c,d]
  - [a,c] e [b,d]
  - [a,d] e [b,c]
  - (e permutações simétricas)

### Parte b: Árvore de Decisão
Qualquer algoritmo de intercalação deve realizar:

- **Limite inferior de comparações**:
  ```math
  \Omega(2n - 1) \text{ no pior caso}
  ```
- **Justificativa**:
  - Árvore de decisão com `(2n)!/(n! × n!)` folhas
  - Altura mínima: `⌈log₂(C(2n, n))⌉ ≈ 2n - o(n)`

### Parte c: Elementos Consecutivos
Quando elementos consecutivos vêm de listas diferentes:
- **Comparação obrigatória**: Não é possível determinar sua ordem relativa sem comparação explícita.
- **Exemplo**:
  Lista A: [a]
  Lista B: [b]
  Necessário comparar `a` e `b` mesmo se `a ≤ c ≤ b` para algum `c` não presente.

### Parte d: Limite Inferior Rigoroso
Para intercalar duas listas de tamanho `n`:
- **Mínimo de comparações**:
  ```math
  2n - 1 \text{ (caso ótimo)}
  ```
- **Cenário crítico**:
  Intercalar [a₁ < a₂ < ... < aₙ] e [b₁ < b₂ < ... < bₙ] onde `aᵢ ≈ bᵢ`.

---

## Algoritmo Prático: Merge Sort Adaptado

### Implementação em Java (Corrigida)
```java
import java.util.*;

public class MergeLists {

    public static <T extends Comparable<T>> List<T> merge(List<T> left, List<T> right) {
        List<T> merged = new ArrayList<>();
        int i = 0, j = 0;

        while (i < left.size() && j < right.size()) {
            if (left.get(i).compareTo(right.get(j)) <= 0) {
                merged.add(left.get(i++));
            } else {
                merged.add(right.get(j++));
            }
        }
        merged.addAll(left.subList(i, left.size()));
        merged.addAll(right.subList(j, right.size()));
        return merged;
    }

    public static <T extends Comparable<T>> List<T> mergeSort(List<T> list) {
        if (list.size() <= 1) return list;

        int mid = list.size() / 2;
        List<T> left = mergeSort(list.subList(0, mid));
        List<T> right = mergeSort(list.subList(mid, list.size()));
        return merge(left, right);
    }

    public static void main(String[] args) {
        List<String> groceries = Arrays.asList("Apple", "Banana", "Egg", "Dairy", "Bread");
        List<String> sorted = mergeSort(groceries);
        System.out.println("Lista ordenada: " + sorted);
    }
}
```

### Complexidade
- **Intercalação (merge)**: `O(n)` comparações por nível
- **Total do Merge Sort**: `O(n log n)` operações
- **Limite inferior atingido**: O merge sort é assintoticamente ótimo para comparações.

---

## Aplicação: Organização de Listas de Compras

### Fluxo do Algoritmo
1. **Entrada**: Lista desordenada (ex.: ["Ovos", "Leite", "Maçãs"])
2. **Divisão**:
   - Divide recursivamente até sublistas unitárias
3. **Intercalação**:
   - Combina sublistas ordenando por comparação direta
4. **Saída**: Lista ordenada (ex.: ["Leite", "Maçãs", "Ovos"])

### Exemplo Visual
```
Lista original: [4, 2, 5, 1]
Divisão:        [4, 2]  [5, 1]
Divisão:       [4] [2]  [5] [1]
Intercalação:   [2,4]    [1,5]
Intercalação final: [1, 2, 4, 5]
```

---

## Conclusão
- **Teórico**: O limite inferior `Ω(2n - 1)` comparações para intercalação é rigoroso e alcançável.
- **Prático**: Algoritmos como Merge Sort implementam a intercalação de forma otimizada, com complexidade `Θ(n log n)` no pior caso.
- **Aplicação**: Estruturas de dados ordenadas (ex.: bancos de dados) utilizam esses princípios para operações eficientes de junção.
