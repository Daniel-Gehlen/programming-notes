# Ordenação k-ordenada: Teoria e Implementação

## Definição e Propriedades Fundamentais

### a. Conceito de k-ordenamento
Um arranjo é **k-ordenado** quando cada elemento é maior ou igual à média de seus `k` vizinhos imediatos. Formalmente:
```
∀i, A[i] ≥ (A[i-1] + A[i-2] + ... + A[i-k]) / k
```

### b. Exemplo de Permutação 2-ordenada
Para n=10:
```
1, 3, 2, 5, 4, 7, 6, 9, 8, 10
```
- Cada elemento é ≥ que seus 2 antecessores imediatos
- Não está totalmente ordenado (2 > 3 é falso)

## Teorema de Caracterização

### c. Prova da Condição Necessária e Suficiente
Um arranjo de tamanho `n` é k-ordenado **se e somente se**:
```
A[i] ≤ A[i+k] para todo i ∈ [1, n-k]
```

**Prova em Duas Partes**:
1. **Necessidade**: Se k-ordenado ⇒ A[i] ≤ A[i+k]
   - Por contradição: se A[i] > A[i+k], viola a definição para posição i+k

2. **Suficiência**: Se A[i] ≤ A[i+k] ∀i ⇒ k-ordenado
   - Indução sobre o tamanho da janela k

## Algoritmo Ótimo para k-ordenamento

### d. Algoritmo com Árvore Balanceada (O(n log k))
```java
import java.util.TreeSet;

public class KOrderSorter {
    public static void kOrder(int[] arr, int k) {
        TreeSet<Integer> window = new TreeSet<>();

        // Fase de inicialização
        for (int i = 0; i < Math.min(k, arr.length); i++) {
            window.add(arr[i]);
        }

        // Processamento deslizante
        for (int i = k; i < arr.length; i++) {
            System.out.print(window.pollFirst() + " ");
            window.add(arr[i]);
        }

        // Esvaziar a janela restante
        while (!window.isEmpty()) {
            System.out.print(window.pollFirst() + " ");
        }
    }

    public static void main(String[] args) {
        int[] data = {3, 1, 4, 2, 7, 6, 5};
        kOrder(data, 2);
        // Saída: 1 2 3 4 5 6 7
    }
}
```

**Complexidade**:
- Inserção/remoção no TreeSet: O(log k)
- n operações ⇒ O(n log k)

## Algoritmo Linear para k Constante

### e. Versão com Counting Sort (O(n) quando k=O(1))
```java
public static void linearKOrder(int[] arr, int k) {
    int[] buffer = new int[k];
    System.arraycopy(arr, 0, buffer, 0, k);
    Arrays.sort(buffer);

    for (int i = k; i < arr.length; i++) {
        System.out.print(buffer[0] + " ");
        // Remove o mais antigo e insere o novo
        int oldest = arr[i-k];
        int pos = Arrays.binarySearch(buffer, oldest);
        System.arraycopy(buffer, pos+1, buffer, pos, buffer.length-pos-1);
        int insertPos = Arrays.binarySearch(buffer, 0, k-1, arr[i]);
        insertPos = insertPos < 0 ? -insertPos-1 : insertPos;
        System.arraycopy(buffer, insertPos, buffer, insertPos+1, k-insertPos-1);
        buffer[insertPos] = arr[i];
    }
    // Imprimir buffer restante
    Arrays.stream(buffer).forEach(n -> System.out.print(n + " "));
}
```

## Limites Inferiores e Superiores

### f. Análise Assintótica
| Cenário               | Complexidade | Justificativa                      |
|-----------------------|--------------|------------------------------------|
| k variável            | Ω(n log k)   | Redução para ordenação convencional|
| k constante           | O(n)         | Algoritmos especializados          |
| k = Θ(n)             | Θ(n log n)   | Caso geral de ordenação            |

## Aplicação Prática: Streaming de Dados

**Caso de Uso**: Processamento contínuo de dados em janela deslizante:
```java
class DataStreamProcessor {
    private final TreeSet<Double> window;
    private final int windowSize;

    public DataStreamProcessor(int k) {
        this.window = new TreeSet<>();
        this.windowSize = k;
    }

    public void addData(double value) {
        if (window.size() >= windowSize) {
            window.pollFirst();
        }
        window.add(value);
    }

    public double getKOrderedValue() {
        return window.first();
    }
}
```

## Tabela Comparativa de Algoritmos

| Algoritmo          | Melhor Caso | Pior Caso | Espaço  | Ideal para          |
|--------------------|------------|----------|--------|--------------------|
| Árvore Balanceada  | O(n log k) | O(n log k) | O(k)   | k médio/grande      |
| Counting Sort      | O(n)       | O(n+k)    | O(k)   | k pequeno/constante|
| Merge Sort Adaptado| O(n log n) | O(n log n) | O(n)   | k próximo de n      |
