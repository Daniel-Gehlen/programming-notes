# QuickSort para Organização Doméstica em Java

## Implementação do Algoritmo com Analogia de Limpeza

```java
import java.util.Arrays;

public class OrganizadorDomestico {

    // Método principal que inicia a "limpeza" (ordenação)
    public static void organizarComodos(int[] comodos, int inicio, int fim) {
        if (inicio < fim) {
            // 1. Escolhe um "ponto focal" (pivô) e separa os cômodos
            int indicePivo = separarComodos(comodos, inicio, fim);

            // 2. Limpa a área à esquerda do pivô
            organizarComodos(comodos, inicio, indicePivo - 1);

            // 3. Limpa a área à direita do pivô
            organizarComodos(comodos, indicePivo + 1, fim);
        }
    }

    // Método de partição (separação dos cômodos)
    private static int separarComodos(int[] comodos, int inicio, int fim) {
        int pivo = comodos[fim];  // O pivô é o último cômodo
        int i = inicio - 1;       // Índice para cômodos menores

        // Processo de "limpeza seletiva":
        for (int j = inicio; j < fim; j++) {
            if (comodos[j] <= pivo) {
                i++;
                trocarItens(comodos, i, j);  // Organiza os itens menores
            }
        }

        // Posiciona o pivô no lugar correto
        trocarItens(comodos, i + 1, fim);
        return i + 1;
    }

    // Método auxiliar para troca de posições
    private static void trocarItens(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {
        // Áreas da casa a serem organizadas (representadas por números)
        int[] areas = {5, 3, 8, 4, 2, 7, 1};  // Ex.: 1=cozinha, 2=sala, etc.

        System.out.println("Antes da organização: " + Arrays.toString(areas));

        // Inicia o processo de organização
        organizarComodos(areas, 0, areas.length - 1);

        System.out.println("Após organização: " + Arrays.toString(areas));
    }
}
```

## Analogia Passo a Passo

1. **Escolha do Ponto Focal**:
   - Assim como você escolhe uma mesa de centro para começar a limpeza, o algoritmo seleciona um pivô (último elemento).

2. **Separação de Itens**:
   ```java
   if (comodos[j] <= pivo) { ... }
   ```
   - Equivalente a separar objetos menores (à esquerda) e maiores (à direita) em relação ao ponto focal.

3. **Organização Recursiva**:
   ```java
   organizarComodos(comodos, inicio, indicePivo - 1);
   organizarComodos(comodos, indicePivo + 1, fim);
   ```
   - Como limpar quadrantes da sala um de cada vez, repetindo o processo nas subáreas.

4. **Resultado Final**:
   - Todos os "cômodos" (elementos) estão ordenados, assim como uma casa completamente organizada.

## Complexidade e Desempenho

| Cenário       | Complexidade | Analogia Doméstica                     |
|---------------|--------------|----------------------------------------|
| Melhor Caso   | O(n log n)   | Pivô divide áreas igualmente           |
| Pior Caso     | O(n²)        | Pivô sempre seleciona área maior/menor |
| Espaço        | O(log n)     | Pilha de tarefas pendentes             |

## Exemplo de Saída

```
Antes da organização: [5, 3, 8, 4, 2, 7, 1]
Após organização: [1, 2, 3, 4, 5, 7, 8]
```

## Dicas para Melhorar a Implementação

1. **Escolha Inteligente de Pivô**:
   ```java
   // Melhoria: pivô mediano de três
   int meio = inicio + (fim - inicio)/2;
   if (comodos[meio] < comodos[inicio]) trocarItens(comodos, inicio, meio);
   if (comodos[fim] < comodos[inicio]) trocarItens(comodos, inicio, fim);
   if (comodos[fim] < comodos[meio]) trocarItens(comodos, meio, fim);
   ```

2. **Otimização para Pequenos Conjuntos**:
   ```java
   if (fim - inicio < 10) {
       insertionSort(comodos, inicio, fim);
       return;
   }
   ```
