# Árvore de Recursão & Método

Para determinar um limite superior assintótico para a recorrência `T(n) = 3T(n/2) + n` usando uma árvore de recursão e o método de substituição:

## Passo-a-Passo:

1. **Construa a árvore de recursão**

   - Raiz: `T(n)`
   - Cada nó tem 3 filhos: `T(n/2)`
   - Adicione `+n` em cada nível

2. **Calcule os custos por nível**

   - Nível 0: `n`
   - Nível 1: `3*(n/2)`
   - Nível 2: `9*(n/4)`
   - Padrão: `3^i * n/(2^i)` no nível `i`

3. **Soma total** (para `h = log₂n` níveis):
   ```
   T(n) = Σ[3^i * n/(2^i)] (de i=0 até h)
         = n * Σ[(3/2)^i]
         = O(n^(log₂3)) ≈ O(n^1.585)
   ```

## Árvore de Recursão

```
        T(n)
       / | \
 T(n/2) T(n/2) T(n/2)
 / | \  / | \  / | \
... ... ... (até T(1))
```

---

# Resolução de Outras Recorrências

## 1. `T(n) = T(n/3) + T(2n/3) + cn`

**Árvore**:

```
        T(n)
       /    \
   T(n/3)  T(2n/3)
   /   \    /    \
T(n/9) T(2n/9) T(2n/9) T(4n/9)
```

**Solução**: `O(n log n)` (pior caso quando o desbalanceamento é máximo)

## 2. `T(n) = 4T(n/2) + cn`

**Árvore**:

```
        T(n)
     / / | \ \
 T(n/2)... (4 filhos)
 / | \ \
... (4 filhos por nível)
```

**Solução**: `O(n^2)` (série geométrica dominada pelo último nível)

## 3. `T(n) = T(n-a) + T(a) + cn`

**Árvore**:

```
        T(n)
       /    \
 T(n-a)    T(a)
 /   \     / \
T(n-2a) T(a) ...
```

**Solução**: `O(2^(n/a))` (crescimento exponencial controlado por `a`)

## 4. `T(n) = T(αn) + T((1-α)n) + cn`

**Caso balanceado** (`α=1/2`): `O(n log n)`
**Caso geral**: `O(n log n)` se α é constante

```

```
