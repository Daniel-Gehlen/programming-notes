# Correção e Análise do Bubblesort

Vamos corrigir o pseudo código do algoritmo Bubble Sort e depois responder às perguntas.
Aqui está o pseudocódigo corrigido:

```
BUBBLESORT(A)
1 para i de 1 até comprimento[A]
2    para j de comprimento[A] até i + 1
3        se A[j] < A[j - 1]
4            então trocar A[j] por A[j - 1]
```

Agora, vamos responder às perguntas:

### a. Correção do Algoritmo

Para provar que o algoritmo Bubble Sort é correto, precisamos demonstrar que ele termina e que, quando termina, o array está ordenado. Isso envolve demonstrar que cada iteração do loop coloca o elemento correto na posição correta.

### b. Loop Invariante (Linhas 2 a 4)

**Loop Invariante:** Antes de cada iteração do loop interno, os elementos de `A[j+1]` até `A[comprimento[A]]` são maiores ou iguais aos elementos anteriores.

**Prova:**

- **Inicialização:** Antes da primeira iteração do loop interno, `j = comprimento[A]`, então não há elementos à direita de `A[j]`. Portanto, o loop invariante é trivialmente verdadeiro.
- **Manutenção:** Suponha que o loop invariante seja verdadeiro para uma iteração específica. Durante a próxima iteração, se `A[j] < A[j-1]`, ocorre uma troca entre `A[j]` e `A[j-1]`, garantindo que o elemento `A[j]` seja menor ou igual a todos os elementos à sua direita, mantendo assim o loop invariante.
- **Término:** Quando o loop interno termina, `j = i + 1`. Portanto, os elementos de `A[i+2]` até `A[comprimento[A]]` estão ordenados, pois o loop invariante ainda é válido.

### c. Demonstração da Desigualdade (2.3)

Para demonstrar a complexidade do algoritmo Bubble Sort, formulamos um loop invariante para o loop completo (linhas 1 a 4):

**Loop Invariante:** Após cada iteração do loop externo, o maior elemento restante do array está na posição correta.

**Prova:**

- **Inicialização:** Antes da primeira iteração do loop externo, todos os elementos estão fora de ordem, portanto, o loop invariante é verdadeiro.
- **Manutenção:** Suponha que o loop invariante seja verdadeiro para uma iteração específica. Após a próxima iteração, o maior elemento do array é colocado na posição correta, mantendo assim o loop invariante.
- **Término:** Quando o loop externo termina, todos os elementos estão em suas posições corretas, pois o loop invariante ainda é válido.

### d. Tempo de Execução

O tempo de execução no pior caso do Bubble Sort é `O(n^2)`, onde `n` é o número de elementos no array. Isso ocorre quando o array está completamente desordenado. Comparado com a ordenação por inserção, o Bubble Sort geralmente é menos eficiente. No entanto, para arrays pequenos ou quase ordenados, o Bubble Sort pode ter um desempenho semelhante ou até melhor que a ordenação por inserção.

---

## Bubble Sort em um Contexto do Mundo Real

Vamos considerar um caso de uso do Bubble Sort em um contexto do mundo real, como organizar cartas de baralho em ordem crescente. Aqui está uma descrição desse caso de uso com as etapas ilustradas:

1. **Preparação:** Suponha que temos um conjunto de cartas de baralho misturadas.
2. **Iteração 1:**
   - Passo 1: Começamos com a primeira carta.
   - Passo 2: Comparamos cada carta com a carta seguinte.
   - Passo 3: Se a carta atual for maior do que a carta seguinte, trocamos suas posições.
3. **Iteração 2:**
   - Passo 1: Agora, a carta maior está na posição correta.
   - Passo 2: Repetimos o processo para o restante das cartas.
   - Passo 3: Continuamos trocando as cartas desordenadas até que a maior carta esteja na posição correta.
4. **Iteração Final:**
   - Passo 1: Repetimos esse processo para cada carta restante.
   - Passo 2: Cada iteração coloca a carta correta na posição correta.
   - Passo 3: Continuamos até que todas as cartas estejam ordenadas.
5. **Conclusão:** No final do processo, todas as cartas estão ordenadas em ordem crescente.

Esse exemplo ilustra como o Bubble Sort funciona na prática, trocando cartas de posição até que todas estejam em ordem crescente. Embora eficaz para um pequeno número de cartas, o Bubble Sort não é a escolha mais eficiente para um grande número de cartas, pois sua complexidade é quadrática.

---

### Fluxograma do Bubble Sort

```plaintext
+-----------------+
|      Início     |
+-----------------+
        |
        v
+-----------------+
|  Preparação     |
|  das cartas     |
+-----------------+
        |
        v
+-----------------+
|   Iteração 1    |
+-----------------+
        |
        v
+-----------------+
| Passo 1:        |
| Comparar        |
| cartas adjacentes|
+-----------------+
        |
        v
+-----------------+
| Passo 2:        |
| Trocar se       |
| necessário      |
+-----------------+
        |
        v
+-----------------+
|   Iteração 2    |
+-----------------+
        |
        v
+-----------------+
| Passo 1:        |
| Comparar        |
| cartas restantes|
+-----------------+
        |
        v
+-----------------+
| Passo 2:        |
| Trocar se       |
| necessário      |
+-----------------+
        |
        v
+-----------------+
| Iteração Final  |
+-----------------+
        |
        v
+-----------------+
| Passo 1:        |
| Repetir para    |
| todas as cartas |
+-----------------+
        |
        v
+-----------------+
| Passo 2:        |
| Ordenação       |
| finalizada      |
+-----------------+
        |
        v
+-----------------+
|      Fim        |
+-----------------+
```
