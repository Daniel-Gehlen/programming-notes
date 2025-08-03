# Algoritmos de Ordenação Especializados: Counting, Radix e Bucket Sort

## 1. Counting Sort (Ordenação por Contagem)

### Conceito
- **Não comparativo**: Ordena elementos contando ocorrências de chaves únicas
- **Ideal para**: Dados com faixa limitada de valores (ex: 0-100)

### Implementação Java
```java
public static int[] countingSort(int[] arr, int maxVal) {
    int[] count = new int[maxVal + 1];
    int[] output = new int[arr.length];

    // Contagem de ocorrências
    for (int num : arr) {
        count[num]++;
    }

    // Acumular contagem
    for (int i = 1; i <= maxVal; i++) {
        count[i] += count[i-1];
    }

    // Construir array ordenado
    for (int i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}
```

**Complexidade**: O(n + k) onde k é o range dos valores

## 2. Radix Sort

### Conceito
- **Ordenação por dígitos**: Processa dígitos menos significativos para os mais significativos
- **Usa counting sort** como sub-rotina para cada dígito

### Implementação Java
```java
public static void radixSort(int[] arr) {
    int max = Arrays.stream(arr).max().getAsInt();

    for (int exp = 1; max/exp > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}

private static void countingSortByDigit(int[] arr, int exp) {
    int[] output = new int[arr.length];
    int[] count = new int[10];

    for (int num : arr) {
        count[(num/exp) % 10]++;
    }

    for (int i = 1; i < 10; i++) {
        count[i] += count[i-1];
    }

    for (int i = arr.length - 1; i >= 0; i--) {
        output[count[(arr[i]/exp) % 10] - 1] = arr[i];
        count[(arr[i]/exp) % 10]--;
    }

    System.arraycopy(output, 0, arr, 0, arr.length);
}
```

**Complexidade**: O(d·(n + b)) onde d é número de dígitos e b é a base (10)

## 3. Bucket Sort

### Conceito
- **Distribui elementos** em baldes (buckets) e ordena individualmente
- **Ideal para**: Dados uniformemente distribuídos

### Implementação Java
```java
public static void bucketSort(float[] arr) {
    ArrayList<Float>[] buckets = new ArrayList[10];

    for (int i = 0; i < buckets.length; i++) {
        buckets[i] = new ArrayList<>();
    }

    // Distribuir elementos nos baldes
    for (float num : arr) {
        int index = (int) (num * buckets.length);
        buckets[index].add(num);
    }

    // Ordenar cada balde
    for (ArrayList<Float> bucket : buckets) {
        Collections.sort(bucket);
    }

    // Concatenar baldes
    int index = 0;
    for (ArrayList<Float> bucket : buckets) {
        for (float num : bucket) {
            arr[index++] = num;
        }
    }
}
```

**Complexidade**:
- Melhor caso: O(n + k)
- Pior caso: O(n²) se todos elementos caírem no mesmo balde

## Aplicação Prática: Organização de Tarefas

```java
class Tarefa {
    String nome;
    int prioridade;
    LocalDate prazo;

    // Implementação de Bucket Sort por prioridade
    public static List<Tarefa> ordenarPorPrioridade(List<Tarefa> tarefas) {
        List<Tarefa>[] baldes = new List[5]; // Prioridades 1-5

        for (int i = 0; i < baldes.length; i++) {
            baldes[i] = new ArrayList<>();
        }

        for (Tarefa t : tarefas) {
            baldes[t.prioridade - 1].add(t);
        }

        List<Tarefa> resultado = new ArrayList<>();
        for (List<Tarefa> balde : baldes) {
            resultado.addAll(balde);
        }

        return resultado;
    }
}
```

## Estatística de Ordem (QuickSelect)

```java
public static int quickSelect(int[] arr, int k) {
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

private static int quickSelect(int[] arr, int left, int right, int k) {
    if (left == right) return arr[left];

    int pivotIndex = partition(arr, left, right);

    if (k == pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

// Complexidade média: O(n)
```

## Tabela Comparativa

| Algoritmo       | Melhor Caso | Pior Caso | Estável | Espaço Auxiliar |
|----------------|------------|----------|--------|----------------|
| Counting Sort  | O(n + k)   | O(n + k) | Sim    | O(n + k)       |
| Radix Sort     | O(dn)      | O(dn)    | Sim    | O(n + b)       |
| Bucket Sort    | O(n + k)   | O(n²)    | Sim    | O(n + k)       |
| QuickSelect    | O(n)       | O(n²)    | Não    | O(1)           |
