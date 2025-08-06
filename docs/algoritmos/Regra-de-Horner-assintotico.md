# Regra de Horner assintótico

## Questão a:
Para analisar o tempo de execução assintótico do fragmento de código que implementa a regra de Horner, observamos que o loop `while` das linhas 3 a 5 executa `n` iterações, onde `n` é o número de coeficientes do polinômio. Assim, o tempo de execução é **O(n)**, onde `n` é o número de coeficientes do polinômio.

## Questão b:
O algoritmo ingênuo de avaliação polinomial calcula cada termo do polinômio desde o início. Se tivermos um polinômio de grau `m`, o tempo de execução desse algoritmo será **O(m·n)**, onde `n` é o número de coeficientes do polinômio e `m` é o grau do polinômio.

**Pseudocódigo do algoritmo ingênuo:**
```
Função avaliar_polinomio(coeficientes[], x):
    resultado = 0
    para cada coeficiente em coeficientes:
        resultado = resultado * x + coeficiente
    retornar resultado
```
Comparado à regra de Horner, o algoritmo ingênuo tem um desempenho inferior em termos de tempo de execução.

## Questão c:
Para provar que a expressão é um loop invariante, seguimos a estrutura padrão de prova de loop invariante:

1. **Inicialização:** No início, o valor de `y` é zero e `i` é o grau do polinômio, portanto, a expressão é verdadeira.
2. **Manutenção:** Suponha que a expressão seja verdadeira na iteração atual. Na próxima iteração, o valor de `y` será atualizado para `y * x + a[i]`, onde `a[i]` é o próximo coeficiente do polinômio. Portanto, a expressão ainda será válida após a próxima iteração.
3. **Terminação:** O loop termina quando `i` alcança -1, ou seja, quando todos os coeficientes do polinômio foram processados. Nesse ponto, a expressão é `y = a[0]*x^0`, que é igual ao valor do polinômio avaliado em `x`.

## Questão d:
O fragmento de código dado avalia corretamente um polinômio porque segue a regra de Horner, que é uma maneira eficiente de avaliar polinômios.

## Questão Inversões:

**a.** As cinco inversões do arranjo `(2, 3, 8, 6, 1)` são:
- (2,1)
- (3,1)
- (8,6)
- (8,1)
- (6,1)

**b.** O arranjo com elementos do conjunto `{1, 2, ..., n}` que tem o número máximo de inversões é aquele em que os elementos estão em ordem decrescente. Por exemplo, se `n = 5`, o arranjo seria `(5, 4, 3, 2, 1)`. O número máximo de inversões em um arranjo de tamanho `n` é `n*(n-1)/2`.

**c.** O tempo de execução da ordenação por inserção está diretamente relacionado ao número de inversões no arranjo de entrada. Quanto mais inversões houver, mais movimentos de elementos serão necessários para colocar o arranjo em ordem, aumentando assim o tempo de execução da ordenação por inserção.

**d.** Um algoritmo eficiente para determinar o número de inversões em uma permutação de `n` elementos no tempo do pior caso de **O(n log n)** é modificar o algoritmo de ordenação por intercalação. Durante a etapa de intercalação, podemos contar o número de inversões. Quando um elemento de uma metade é escolhido antes de todos os elementos da outra metade, contamos o número de elementos restantes na metade esquerda como inversões.

---

### Aplicação Prática: Planejamento Financeiro Pessoal

Suponha que uma pessoa esteja planejando suas finanças para o próximo ano e decida modelar suas despesas mensais como um polinômio. Os coeficientes representam as despesas mensais de janeiro a dezembro:
`{1000, 1200, 1100, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100}`

**Cálculo para julho (mês 7) usando a regra de Horner:**
```
y = a[11] × 7 + a[10]
y = 2100 × 7 + 2000
y = 14700 + 2000
y = 16700
```
Portanto, o valor das despesas em julho seria **$16.700**.

**Implementação em Java:**
```java
public class HornerRule {
    public static double evaluatePolynomial(double[] coefficients, double x) {
        double y = coefficients[coefficients.length - 1]; // Inicializa com o último coeficiente
        int i = coefficients.length - 2; // Começa pelo penúltimo coeficiente
        while (i >= 0) {
            y = y * x + coefficients[i];
            i--;
        }
        return y;
    }

    public static void main(String[] args) {
        double[] coefficients = {1000, 1200, 1100, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100};
        double x = 7; // Mês de julho
        double expensesInJuly = evaluatePolynomial(coefficients, x);
        System.out.println("Despesas em julho: $" + expensesInJuly);
    }
}
```
Este código calcula eficientemente as despesas em um mês específico usando a regra de Horner.

**Relação com Inversões:**
No contexto financeiro, o número de inversões pode indicar a frequência de ajustes necessários no orçamento. Um alto número de inversões sugere que as despesas estão em uma ordem que requer muitas mudanças, sinalizando a necessidade de reavaliar prioridades.
