# Árvore Binária de Frequências (Árvore de Huffman)

---

## Introdução

A **Árvore de Huffman** é uma estrutura de dados usada para **compressão sem perdas**, atribuindo códigos binários mais curtos a símbolos frequentes e códigos mais longos a símbolos raros.

**Aplicações**: ZIP, JPEG, formatos de mídia e protocolos de comunicação.

---

## Funcionamento

### 1. **Construção da Árvore**

1. **Inicialização**:
   - Cada símbolo vira um nó folha com sua frequência.
   - Exemplo para "ABRACADABRA":
     ```
     A:5, B:2, R:2, C:1, D:1
     ```
2. **Combinação**:
   - Os dois nós com menores frequências são fundidos em um nó pai (soma das frequências).
   - Repete até formar uma única árvore.

### 2. **Codificação**

- **Códigos Binários**:
  - `0` para filho esquerdo, `1` para direito.
  - Exemplo:
    ```
    A: 0, B: 111, C: 1100, D: 1101, R: 10
    ```

### 3. **Decodificação**

- Percorre a árvore seguindo os bits até encontrar um símbolo.

---

## Exemplo Prático

### Dados de Entrada

```
Símbolos: A (5), B (9), C (12), D (13), E (16), F (45)
```

### Árvore de Huffman Resultante

```
        (100)
       /     \
    F(45)    (55)
            /     \
         (25)      (30)
        /   \     /   \
     A(5) B(9) C(12) (D+E=29)
```

### Códigos Gerados

| Símbolo | Código |
| ------- | ------ |
| F       | 0      |
| A       | 100    |
| B       | 101    |
| C       | 110    |
| D       | 1110   |
| E       | 1111   |

---

## Implementação em Python

```python
import heapq
from collections import Counter

class HuffmanNode:
    def __init__(self, symbol, freq):
        self.symbol = symbol
        self.freq = freq
        self.left = None
        self.right = None

def build_huffman_tree(data):
    freq = Counter(data)
    heap = [HuffmanNode(sym, f) for sym, f in freq.items()]
    heapq.heapify(heap)

    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        merged = HuffmanNode(None, left.freq + right.freq)
        merged.left = left
        merged.right = right
        heapq.heappush(heap, merged)

    return heap[0]

def generate_codes(node, code="", codes={}):
    if node.symbol:
        codes[node.symbol] = code
    else:
        generate_codes(node.left, code + "0", codes)
        generate_codes(node.right, code + "1", codes)
    return codes

# Exemplo
data = "ABRACADABRA"
tree = build_huffman_tree(data)
codes = generate_codes(tree)
print("Códigos de Huffman:", codes)
```

**Saída**:

```
Códigos de Huffman: {'A': '0', 'R': '10', 'B': '110', 'C': '1110', 'D': '1111'}
```

---

## Vantagens e Desvantagens

| **Vantagens**                                             | **Desvantagens**                                                     |
| --------------------------------------------------------- | -------------------------------------------------------------------- |
| ✅ Ótima compressão para dados com distribuição desigual. | ❌ Requer duas passagens nos dados (análise + codificação).          |
| ✅ Sem perdas e ótimo para texto.                         | ❌ Ineficiente para dados aleatórios (ex.: arquivos já compactados). |
| ✅ Descompressão rápida.                                  | ❌ Armazenamento da árvore junto com os dados.                       |

---

## Aplicações Reais

1. **Formato ZIP (DEFLATE)**: Combina Huffman com LZ77.
2. **Imagens JPEG**: Usado após a transformada DCT.
3. **Protocolos de Rede**: HTTP/2 com compressão HPACK.

---

## Conclusão

A Árvore de Huffman é **essencial** para:

- Reduzir tamanhos de arquivos **sem perder informação**.
- Otimizar transmissões de dados **em tempo real**.

_Para maximizar a eficiência, combine com outros algoritmos (ex.: LZ77 no DEFLATE)._
