# Os Três Problemas que Mais Aparecem em Entrevistas

## 1. Maior Sequência Consecutiva no Array

### Descrição

Encontrar o comprimento da maior sequência de números consecutivos em um array não ordenado.

**Exemplo**:
`Input: [100, 4, 200, 1, 3, 2]` → `Output: 4` (Sequência: 1, 2, 3, 4)

### Soluções

| Abordagem           | Complexidade | Eficiência |
| ------------------- | ------------ | ---------- |
| Força Bruta         | O(n²)        | ❌         |
| Ordenação           | O(n log n)   | ⚠️         |
| **Set (Otimizada)** | **O(n)**     | ✅         |

### Implementação Otimizada

```python
def longest_consecutive(nums):
    num_set = set(nums)
    longest_streak = 0

    for num in num_set:
        if num - 1 not in num_set:  # Verifica início de sequência
            current_num = num
            current_streak = 1

            while current_num + 1 in num_set:  # Percorre sequência
                current_num += 1
                current_streak += 1

            longest_streak = max(longest_streak, current_streak)

    return longest_streak
```

---

## 2. Elementos Mais Frequentes no Array

### Descrição

Retornar os `k` elementos mais frequentes de um array.

**Exemplo**:
`Input: nums = [1,1,1,2,2,3], k = 2` → `Output: [1, 2]`

### Soluções

| Abordagem   | Complexidade | Eficiência |
| ----------- | ------------ | ---------- |
| Ordenação   | O(n log n)   | ⚠️         |
| **Buckets** | **O(n)**     | ✅         |

### Implementação com Buckets

```python
def top_k_frequent(nums, k):
    frequency_map = {}
    for num in nums:
        frequency_map[num] = frequency_map.get(num, 0) + 1

    buckets = [[] for _ in range(len(nums) + 1)]
    for num, freq in frequency_map.items():
        buckets[freq].append(num)

    result = []
    for freq in range(len(buckets) - 1, 0, -1):  # Percorre do maior para o menor
        for num in buckets[freq]:
            result.append(num)
            if len(result) == k:
                return result
```

---

## 3. Inverter Apenas Letras de uma String

### Descrição

Inverter as letras de uma string mantendo outros caracteres (como hífens) nas posições originais.

**Exemplo**:
`Input: "a-bC-dEf-ghIj"` → `Output: "j-Ih-gfE-dCba"`

### Solução: Dois Ponteiros

```python
def reverse_only_letters(s):
    s_list = list(s)
    left, right = 0, len(s_list) - 1

    while left < right:
        if not s_list[left].isalpha():
            left += 1
        elif not s_list[right].isalpha():
            right -= 1
        else:
            s_list[left], s_list[right] = s_list[right], s_list[left]  # Troca letras
            left += 1
            right -= 1

    return ''.join(s_list)
```

---

## Resumo dos Algoritmos

| Problema                    | Melhor Abordagem | Complexidade |
| --------------------------- | ---------------- | ------------ |
| Maior Sequência Consecutiva | Set              | O(n)         |
| Elementos Mais Frequentes   | Buckets          | O(n)         |
| Inverter Letras             | Dois Ponteiros   | O(n)         |

> **Dica**: Pratique essas soluções para entrevistas técnicas! 🚀
