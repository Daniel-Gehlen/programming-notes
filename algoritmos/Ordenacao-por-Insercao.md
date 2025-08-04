# Ordenação por Inserção

## Receita de Ordenação por Inserção

**Ingredientes:**
Uma lista de itens desordenados (A)

**Instruções:**

**Preparação:**
1. Pegue a lista de itens desordenados (A).

**Ordenação:**
2. Para cada elemento na lista, começando pelo segundo elemento até o último:
   **Seleção do Elemento:**
   i. Pegue o elemento atual e o marque como a "chave".
   **Inserção na Sequência Ordenada:**
   ii. Insira a chave na sequência ordenada dos elementos anteriores.
   - Comece comparando a chave com os elementos anteriores na sequência ordenada (da direita para a esquerda).
   - Encontre a posição correta para a chave na sequência ordenada.
   **Atualização da Sequência Ordenada:**
   iii. Movimente os elementos maiores do que a chave uma posição para a direita para abrir espaço para a inserção da chave.
   - Insira a chave na posição correta na sequência ordenada.
   - Continue este processo até que todos os elementos tenham sido inseridos na sequência ordenada.

**Resultado:**
1. Ao final do processo, a lista estará completamente ordenada.

**Observações:**
- Certifique-se de entender e seguir cuidadosamente cada etapa do processo.
- A chave é comparada com os elementos anteriores na sequência ordenada para encontrar a posição correta de inserção.
- Este método é eficaz para ordenar pequenas listas ou para listas quase ordenadas.

## Algoritmo de ordenação por inserção traduzido para Java:

```java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int j = 1; j < n; j++) {
            int key = arr[j];
            int i = j - 1;
            while (i >= 0 && arr[i] > key) {
                arr[i + 1] = arr[i];
                i--;
            }
            arr[i + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        System.out.println("Array antes da ordenação:");
        printArray(arr);
        insertionSort(arr);
        System.out.println("\nArray após a ordenação:");
        printArray(arr);
    }

    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}
```

**Neste código:**
- `insertionSort` é o método que implementa o algoritmo de ordenação por inserção.
- No método `main`, é criado um array de inteiros desordenados, chama-se o método `insertionSort` para ordená-lo e imprime-se o array antes e depois da ordenação.
- O método `printArray` é usado para imprimir os elementos do array.

## Ordenação por inserção em Java explicado passo a passo em linguagem de palavras:

1. **Definição do Método de Ordenação por Inserção:**
   Começamos definindo um método chamado `insertionSort` que aceita um array de inteiros como entrada.

2. **Iteração sobre os Elementos do Array:**
   Inicializamos uma variável `n` com o comprimento do array. Em seguida, iniciamos um loop `for` que percorre os elementos do array, exceto o primeiro.

3. **Seleção do Elemento Atual e Marcação como "Chave":**
   Para cada iteração do loop, selecionamos o elemento atual como a "chave" (`key`). Inicializamos uma variável `i` que aponta para o elemento anterior ao elemento atual.

4. **Inserção na Sequência Ordenada:**
   Dentro de um loop `while`, comparamos a chave com os elementos anteriores na sequência ordenada. Enquanto `i` for maior ou igual a zero e o elemento na posição `i` for maior que a chave, movemos o elemento para a direita. Ao final deste loop, encontramos a posição correta para a inserção da chave na sequência ordenada.

5. **Atualização da Sequência Ordenada:**
   Após sair do loop `while`, colocamos a chave na posição correta na sequência ordenada. Incrementamos `i` e inserimos a chave na posição `i + 1`.

6. **Repetição do Processo:**
   Repetimos esse processo para todos os elementos do array, garantindo que cada elemento seja inserido na posição correta na sequência ordenada até que todos os elementos estejam ordenados.

7. **Chamada do Método de Ordenação e Impressão do Resultado:**
   No método `main`, criamos um array de inteiros desordenados. Imprimimos o array antes da ordenação. Chamamos o método `insertionSort` para ordenar o array. Imprimimos o array após a ordenação.

8. **Impressão do Array:**
   Finalmente, temos um método auxiliar chamado `printArray` para imprimir os elementos do array.

Este algoritmo de ordenação por inserção ordena os elementos do array movendo elementos maiores para a direita até encontrar a posição correta para inserir o elemento atual, garantindo que a sequência à esquerda esteja sempre ordenada.

## Exemplo

Vamos imaginar que estamos organizando uma lista de compras de supermercado e queremos ordenar essa lista em ordem alfabética para facilitar a nossa busca pelos itens. Aqui está um exemplo tipicamente real:

**Lista de Compras Desorganizada:**
1. Maçãs
2. Leite
3. Queijo
4. Ovos
5. Pão
6. Tomates
7. Cenouras

**Passo a Passo para Organizar a Lista de Compras (Ordenação por Inserção):**
1. Selecionar o Primeiro Item: Começamos com o segundo item da lista, "Leite", e o consideramos como nossa "chave".
2. Comparar com o Item Anterior: Verificamos se "Leite" vem antes ou depois de "Maçãs". Como "Leite" vem depois de "Maçãs", não precisamos fazer nada.
3. Avançar para o Próximo Item: Agora, avançamos para o terceiro item da lista, "Queijo", e o consideramos como nossa nova "chave".
4. Comparar com os Itens Anteriores: Comparamos "Queijo" com "Leite". Como "Leite" vem antes de "Queijo", não precisamos fazer nada. E então, comparamos "Queijo" com "Maçãs". Como "Maçãs" vem antes de "Queijo", movemos "Queijo" para a posição após "Maçãs".
5. Atualizar a Lista: Agora, nossa lista está como segue:
   - Maçãs
   - Leite
   - Queijo
   - Ovos
   - Pão
   - Tomates
   - Cenouras
6. Repetir o Processo: Continuamos esse processo para cada item restante da lista, movendo cada novo item para sua posição correta na parte já ordenada da lista.
7. Lista de Compras Ordenada:
   - Cenouras
   - Leite
   - Maçãs
   - Ovos
   - Pão
   - Queijo
   - Tomates

Ao final do processo, a lista está ordenada em ordem alfabética, o que facilita a busca pelos itens durante as compras no supermercado.
