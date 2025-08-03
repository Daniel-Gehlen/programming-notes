# Seleção de estatística de ordem

## Pseudo algoritmo sobre um problema do dia a dia:

**Problema:** Encontrar o menor e o maior valor em uma lista de números.

1. **Inicialização:**
   - Declare duas variáveis, `min` e `max`.
   - Atribua a `min` o valor `Integer.MAX_VALUE` (infinito positivo).
   - Atribua a `max` o valor `Integer.MIN_VALUE` (infinito negativo).

2. **Percorra a lista de números:**
   - Para cada número na lista, faça:

3. **Comparação e atualização:**
   - Se o número for menor que `min`, atualize `min` com o valor do número.
   - Se o número for maior que `max`, atualize `max` com o valor do número.

4. **Resultado:**
   - Ao final do loop, `min` conterá o menor valor e `max` conterá o maior valor.

## Implementação em Java:

```java
public class MinMaxFinder {
    public static void main(String[] args) {
        int[] numbers = {10, 5, 7, 3, 15, 20, 1};
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int num : numbers) {
            if (num < min) {
                min = num;
            }
            if (num > max) {
                max = num;
            }
        }

        System.out.println("Menor valor: " + min);
        System.out.println("Maior valor: " + max);
    }
}
```

**Explicação do algoritmo:**
- O algoritmo percorre a lista de números apenas uma vez, comparando cada elemento com os valores atuais de `min` e `max`.
- Se um número for menor que `min`, `min` é atualizado.
- Se um número for maior que `max`, `max` é atualizado.
- Ao final, o menor e o maior valor da lista são impressos.

**Complexidade:**
- **Tempo:** O(n), onde `n` é o número de elementos na lista, pois cada elemento é visitado uma única vez.
- **Espaço:** O(1), pois utiliza apenas duas variáveis adicionais (`min` e `max`), independentemente do tamanho da lista.
