# Teorema Mestre: Análise de Complexidade de Algoritmos

## Fundamentos do Teorema Mestre

O Teorema Mestre fornece uma solução genérica para relações de recorrência da forma:

```
T(n) = a·T(n/b) + f(n)
```

Onde:
- `a ≥ 1`: número de subproblemas
- `b > 1`: fator de redução do problema
- `f(n)`: custo para dividir e combinar

## Casos do Teorema Mestre

### Caso 1: Dominância do Custo das Folhas
**Condição**: f(n) = O(n<sup>log<sub>b</sub>a - ε</sup>) para ε > 0
**Solução**: T(n) = Θ(n<sup>log<sub>b</sub>a</sup>)

### Caso 2: Custo Balanceado
**Condição**: f(n) = Θ(n<sup>log<sub>b</sub>a</sup>)
**Solução**: T(n) = Θ(n<sup>log<sub>b</sub>a</sup> · log n)

### Caso 3: Dominância do Custo da Divisão/Combinação
**Condição**: f(n) = Ω(n<sup>log<sub>b</sub>a + ε</sup>) e af(n/b) ≤ cf(n) para c < 1
**Solução**: T(n) = Θ(f(n))

## Exemplos de Aplicação

1. **Merge Sort**:
   ```
   T(n) = 2T(n/2) + Θ(n)
   a=2, b=2 → n<sup>log<sub>2</sub>2</sup> = n
   Caso 2: T(n) = Θ(n log n)
   ```

2. **Busca Binária**:
   ```
   T(n) = T(n/2) + Θ(1)
   a=1, b=2 → n<sup>log<sub>2</sub>1</sup> = 1
   Caso 2: T(n) = Θ(log n)
   ```

3. **Multiplicação de Matrizes (Strassen)**:
   ```
   T(n) = 7T(n/2) + Θ(n²)
   a=7, b=2 → n<sup>log<sub>2</sub>7</sup> ≈ n<sup>2.81</sup>
   Caso 1: T(n) = Θ(n<sup>log<sub>2</sub>7</sup>)
   ```

## Implementação em Java (Exemplo Simplificado)

```java
public class TeoremaMestre {

    // Exemplo: Algoritmo com recorrência T(n) = 2T(n/2) + n
    static void algoritmoRecursivo(int[] arr, int start, int end) {
        if (start < end) {
            int mid = (start + end) / 2;

            // Divisão em subproblemas (2 chamadas recursivas)
            algoritmoRecursivo(arr, start, mid);
            algoritmoRecursivo(arr, mid + 1, end);

            // Combinação (custo linear)
            combinar(arr, start, mid, end);
        }
    }

    static void combinar(int[] arr, int start, int mid, int end) {
        // Implementação da combinação (ex.: merge do Merge Sort)
        // Custo: Θ(n)
    }

    public static void main(String[] args) {
        int[] dados = new int[100];
        algoritmoRecursivo(dados, 0, dados.length - 1);
    }
}
```

## Aplicação Prática: Organização de Eventos

**Problema**: Planejamento de uma festa com três tarefas:
1. Preparar convites: `T(n) = 5n`
2. Compras: `T(n) = 10n`
3. Organizar atividades: `T(n) = 15n`

**Análise**:
- Todas as tarefas têm complexidade linear (Θ(n))
- Usando paralelismo (3 "subproblemas"):
  ```
  T(n) = 3T(n/3) + Θ(n)
  a=3, b=3 → n<sup>log<sub>3</sub>3</sup> = n
  Caso 2: T(n) = Θ(n log n)
  ```

## Limitações do Teorema Mestre
- Não aplicável quando:
  - `a` não é constante
  - `f(n)` não é polinomial
  - A condição de regularidade (Caso 3) não é satisfeita
- Alternativas: Método da árvore de recursão ou substituição

## Tabela Resumo

| Caso | Condição | Complexidade | Exemplo |
|------|----------|--------------|---------|
| 1 | f(n) ≪ n<sup>log<sub>b</sub>a</sup> | Θ(n<sup>log<sub>b</sub>a</sup>) | Multiplicação de Matrizes |
| 2 | f(n) ≈ n<sup>log<sub>b</sub>a</sup> | Θ(n<sup>log<sub>b</sub>a</sup> log n) | Merge Sort |
| 3 | f(n) ≫ n<sup>log<sub>b</sub>a</sup> | Θ(f(n)) | Quick Sort (pior caso) |
