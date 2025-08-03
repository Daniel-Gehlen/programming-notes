# Heapsort para Gerenciamento Diário

## Implementação de Heap para Gestão de Tarefas

### Classe Principal: Gerenciador de Tarefas com Heap
```java
import java.util.PriorityQueue;

class Tarefa implements Comparable<Tarefa> {
    String descricao;
    int prioridade;  // Quanto maior, mais urgente/importante

    public Tarefa(String descricao, int prioridade) {
        this.descricao = descricao;
        this.prioridade = prioridade;
    }

    @Override
    public int compareTo(Tarefa outra) {
        return outra.prioridade - this.prioridade;  // Ordem decrescente
    }

    @Override
    public String toString() {
        return descricao + " (Prioridade: " + prioridade + ")";
    }
}

public class GerenciadorHeapTarefas {
    private PriorityQueue<Tarefa> heapTarefas;

    public GerenciadorHeapTarefas() {
        heapTarefas = new PriorityQueue<>();
    }

    // Operações Básicas
    public void adicionarTarefa(String descricao, int prioridade) {
        heapTarefas.add(new Tarefa(descricao, prioridade));
    }

    public Tarefa proximaTarefa() {
        return heapTarefas.peek();
    }

    public Tarefa concluirTarefa() {
        return heapTarefas.poll();
    }

    public void atualizarPrioridade(String descricao, int novaPrioridade) {
        // Remove e readiciona para atualizar a posição no heap
        heapTarefas.removeIf(t -> t.descricao.equals(descricao));
        heapTarefas.add(new Tarefa(descricao, novaPrioridade));
    }

    // Visualização
    public void imprimirTarefas() {
        System.out.println("\n--- TAREFAS PENDENTES ---");
        heapTarefas.forEach(System.out::println);
    }

    public static void main(String[] args) {
        GerenciadorHeapTarefas gerenciador = new GerenciadorHeapTarefas();

        // Exemplo de uso
        gerenciador.adicionarTarefa("Revisar relatório final", 5);
        gerenciador.adicionarTarefa("Responder e-mails urgentes", 4);
        gerenciador.adicionarTarefa("Preparar apresentação", 3);

        System.out.println("Próxima tarefa: " + gerenciador.proximaTarefa());

        Tarefa concluida = gerenciador.concluirTarefa();
        System.out.println("Tarefa concluída: " + concluida);

        gerenciador.atualizarPrioridade("Preparar apresentação", 6);
        gerenciador.imprimirTarefas();
    }
}
```

### Propriedades do Heap Explicadas

#### 1. Altura do Heap
```java
public static int calcularAlturaHeap(int n) {
    return (int) Math.ceil(Math.log(n + 1) / Math.log(2)) - 1;
}
```
- **Fórmula**: ⌈log₂(n+1)⌉ - 1
- **Exemplo**: Heap com 10 elementos → altura = 3

#### 2. Localização de Folhas
```java
public static void identificarFolhas(int[] heap) {
    int n = heap.length;
    System.out.println("Folhas (índices " + (n/2) + " a " + (n-1) + "):");
    for (int i = n/2; i < n; i++) {
        System.out.println("Índice " + i + ": " + heap[i]);
    }
}
```

### Algoritmos Fundamentais

#### MAX-HEAPIFY (Versão Iterativa)
```java
public static void maxHeapify(int[] arr, int i, int heapSize) {
    while (true) {
        int esq = 2*i + 1;
        int dir = 2*i + 2;
        int maior = i;

        if (esq < heapSize && arr[esq] > arr[maior]) maior = esq;
        if (dir < heapSize && arr[dir] > arr[maior]) maior = dir;

        if (maior != i) {
            int temp = arr[i];
            arr[i] = arr[maior];
            arr[maior] = temp;
            i = maior;
        } else {
            break;
        }
    }
}
```

#### BUILD-MIN-HEAP
```java
public static void buildMinHeap(int[] arr) {
    for (int i = arr.length/2 - 1; i >= 0; i--) {
        minHeapify(arr, i, arr.length);
    }
}

private static void minHeapify(int[] arr, int i, int heapSize) {
    int esq = 2*i + 1;
    int dir = 2*i + 2;
    int menor = i;

    if (esq < heapSize && arr[esq] < arr[menor]) menor = esq;
    if (dir < heapSize && arr[dir] < arr[menor]) menor = dir;

    if (menor != i) {
        int temp = arr[i];
        arr[i] = arr[menor];
        arr[menor] = temp;
        minHeapify(arr, menor, heapSize);
    }
}
```

### Caso Prático: Fluxo de Trabalho Diário
1. **Inicialização**: Heap vazio
2. **Inserção**:
   - "Reunião com cliente (P5)" → Adiciona ao heap
   - "Debug código (P3)" → Adiciona ao heap
3. **Consulta**: Próxima tarefa = Raiz do heap
4. **Conclusão**: Remove raiz e reorganiza heap
5. **Atualização**: Altera prioridade de "Debug código" para P6

### Complexidade Computacional
| Operação        | Complexidade |
|-----------------|--------------|
| Inserção        | O(log n)     |
| Remoção         | O(log n)     |
| Consulta raiz   | O(1)         |
| BUILD-HEAP      | O(n)         |
| Heapify         | O(log n)     |
