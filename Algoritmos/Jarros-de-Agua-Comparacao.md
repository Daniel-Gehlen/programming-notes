# Comparação de Jarros de Água: Análise de Algoritmos

## 1. Algoritmo Determinístico (Ótimo)

### Descrição

```python
def algoritmo_deterministico(jarros_vermelhos, jarros_azuis):
    # Passo 1: Ordenação O(n log n)
    jarros_vermelhos.sort()  # Ordem crescente
    jarros_azuis.sort(reverse=True)  # Ordem decrescente

    pares = []
    # Passo 2: Comparação O(n)
    for v, a in zip(jarros_vermelhos, jarros_azuis):
        if v == a:
            pares.append((v, a))
    return pares
```

**Complexidade**:

- Ordenação: 2 × O(n log n)
- Comparação: O(n)
- **Total**: O(n log n)

## 2. Prova do Limite Inferior Ω(n log n)

### Árvore de Decisão

- Número de permutações possíveis: n! (para jarros vermelhos) × n! (para jarros azuis)
- Folhas na árvore: ≥ n!²
- Altura mínima: log(n!²) ≈ 2n log n → **Ω(n log n)**

## 3. Algoritmo Randomizado (Las Vegas)

### Implementação

```java
import java.util.*;

public class JarroComparator {
    static class Jarro {
        int volume;
        Jarro(int v) { this.volume = v; }
    }

    public static void main(String[] args) {
        List<Jarro> vermelhos = gerarJarros(100);
        List<Jarro> azuis = gerarJarros(100);

        List<String> pares = new ArrayList<>();
        Random rand = new Random();

        // Algoritmo randomizado
        while (!vermelhos.isEmpty() && !azuis.isEmpty()) {
            int idxV = rand.nextInt(vermelhos.size());
            int idxA = rand.nextInt(azuis.size());

            if (vermelhos.get(idxV).volume == azuis.get(idxA).volume) {
                pares.add("V:" + vermelhos.remove(idxV).volume + " = A:" + azuis.remove(idxA).volume);
            }
        }
        pares.forEach(System.out::println);
    }

    static List<Jarro> gerarJarros(int n) {
        List<Jarro> jarros = new ArrayList<>();
        Random rand = new Random();
        for (int i = 0; i < n; i++) {
            jarros.add(new Jarro(rand.nextInt(100)));
        }
        return jarros;
    }
}
```

**Complexidade Esperada**:

- Melhor caso: O(n) (seleções aleatórias perfeitas)
- Pior caso: O(n²) (má sorte nas seleções)
- **Média**: O(n log n)

## 4. Aplicação Prática: Lista de Compras

### Pseudocódigo Adaptado

1. Gerar lista de produtos com preços
2. **Enquanto** houver itens não pareados:
   - Selecionar aleatoriamente produto A
   - Selecionar aleatoriamente produto B
   - **Se** preço(A) == preço(B):
     - Formar par
     - Remover ambos da lista

## Comparação de Abordagens

| Método         | Complexidade | Vantagens                  | Desvantagens            |
| -------------- | ------------ | -------------------------- | ----------------------- |
| Determinístico | O(n log n)   | Ótimo garantido            | Requer ordenação prévia |
| Randomizado    | O(n²) [pior] | Simplicidade implementação | Pode ser ineficiente    |

## Conclusão

Para problemas de pareamento com **n elementos**, o algoritmo determinístico é ideal quando a ordenação é viável, enquanto a versão randomizada oferece uma alternativa mais simples para conjuntos pequenos ou quando a aleatoriedade é aceitável.
