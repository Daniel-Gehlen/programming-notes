# Último item comprado

## Pseudo algoritmo para encontrar o último item comprado em uma lista de compras:

1. **Inicialização:**
   - Receba uma lista de compras como entrada.

2. **Verificação de lista vazia:**
   - Se a lista estiver vazia, retorne "A lista de compras está vazia".

3. **Percorrer a lista:**
   - Percorra a lista de compras do último item para o primeiro.

4. **Critério de identificação:**
   - Para cada item, verifique se atende ao critério de "último item comprado".

5. **Retorno do resultado:**
   - Ao encontrar o primeiro item que satisfaz o critério, retorne-o como último item comprado.
   - Se nenhum item atender ao critério, retorne mensagem indicando isso.

## Implementação em Java:

```java
import java.util.ArrayList;

public class LastItemBoughtFinder {
    public static String findLastItem(ArrayList<String> shoppingList) {
        // Verificar se a lista está vazia
        if (shoppingList.isEmpty()) {
            return "A lista de compras está vazia.";
        }

        // Percorrer a lista de compras do último ao primeiro item
        for (int i = shoppingList.size() - 1; i >= 0; i--) {
            String currentItem = shoppingList.get(i);
            // Critério para identificar o último item comprado
            if (/* Condição para último item comprado */ true) { // Substitua pela condição real
                return "O último item comprado foi: " + currentItem;
            }
        }

        return "Nenhum item correspondente ao critério foi encontrado.";
    }

    public static void main(String[] args) {
        ArrayList<String> shoppingList = new ArrayList<>();
        shoppingList.add("Pão");
        shoppingList.add("Leite");
        shoppingList.add("Ovos");
        shoppingList.add("Carne");
        shoppingList.add("Arroz");

        String lastItem = findLastItem(shoppingList);
        System.out.println(lastItem);
    }
}
```

**Observação:**
Substitua o comentário `/* Condição para último item comprado */` pela lógica específica para identificar o último item comprado conforme sua necessidade.

---

# RANDOMIZED-SELECT (Pior Caso)

## Análise do pior caso:
- O pior caso ocorre quando a partição sempre seleciona o maior elemento restante como pivô.
- Para o arranjo `(3, 2, 9, 0, 7, 5, 4, 8, 6, 1)`, isso resultaria em partições ineficientes.
- Complexidade: O(n²) no pior caso.

## Implementação em Java:

```java
import java.util.Random;

public class RandomizedSelectWorstCase {
    public static int randomizedSelect(int[] arr, int p, int r, int i) {
        if (p == r) return arr[p];

        int q = randomizedPartition(arr, p, r);
        int k = q - p + 1;

        if (i == k) return arr[q];
        else if (i < k) return randomizedSelect(arr, p, q-1, i);
        else return randomizedSelect(arr, q+1, r, i-k);
    }

    public static int randomizedPartition(int[] arr, int p, int r) {
        Random rand = new Random();
        int randomIndex = rand.nextInt(r-p+1) + p;
        swap(arr, randomIndex, r);

        int pivot = arr[r];
        int i = p-1;

        for (int j = p; j < r; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i+1, r);
        return i+1;
    }

    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {
        int[] arr = {3, 2, 9, 0, 7, 5, 4, 8, 6, 1};
        int min = randomizedSelect(arr, 0, arr.length-1, 1);
        System.out.println("O mínimo é: " + min);
    }
}
```

---

# Algoritmo SELECT

## Descrição:
- Seleciona o i-ésimo menor elemento com tempo O(n) no pior caso.
- Utiliza a "mediana das medianas" para garantir boas partições.

## Implementação em Java:

```java
import java.util.Arrays;

public class SelectAlgorithm {
    public static int select(int[] arr, int i) {
        return selectRecursive(arr, 0, arr.length-1, i);
    }

    private static int selectRecursive(int[] arr, int p, int r, int i) {
        if (p == r) return arr[p];

        // Dividir em grupos de 5 e encontrar medianas
        int numGroups = (int) Math.ceil((r-p+1)/5.0);
        int[] medians = new int[numGroups];

        for (int j = 0; j < numGroups; j++) {
            int start = p + j*5;
            int end = Math.min(start+5, r+1);
            int[] group = Arrays.copyOfRange(arr, start, end);
            Arrays.sort(group);
            medians[j] = group[group.length/2];
        }

        // Encontrar mediana das medianas
        int x = selectRecursive(medians, 0, medians.length-1, medians.length/2);

        // Particionar
        int q = partition(arr, p, r, x);
        int k = q - p + 1;

        if (i == k) return arr[q];
        else if (i < k) return selectRecursive(arr, p, q-1, i);
        else return selectRecursive(arr, q+1, r, i-k);
    }

    private static int partition(int[] arr, int p, int r, int x) {
        // Implementação de partição similar ao randomizedPartition
        // ...
    }
}
```

---

# Posição Ótima de Oleoduto

## Método:
1. Calcular média das coordenadas x dos poços
2. Calcular média das coordenadas y dos poços
3. A posição ótima é (média_x, média_y)

## Implementação em Java:

```java
public class OptimalPipelineLocation {
    static class Point {
        double x, y;
        Point(double x, double y) { this.x = x; this.y = y; }
    }

    public static Point findOptimalLocation(Point[] wells) {
        double sumX = 0, sumY = 0;
        for (Point well : wells) {
            sumX += well.x;
            sumY += well.y;
        }
        return new Point(sumX/wells.length, sumY/wells.length);
    }

    public static void main(String[] args) {
        Point[] wells = { new Point(1,3), new Point(2,5),
                         new Point(3,4), new Point(4,6) };
        Point optimal = findOptimalLocation(wells);
        System.out.printf("Posição ótima: (%.2f, %.2f)", optimal.x, optimal.y);
    }
}
