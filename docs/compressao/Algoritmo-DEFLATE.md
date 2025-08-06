# Algoritmo DEFLATE: Compressão sem Perdas

---

## Visão Geral

O **DEFLATE** é um algoritmo de compressão sem perdas que combina:

- **LZ77** (compressão por dicionário)
- **Codificação de Huffman** (compressão estatística)

**Aplicações**: Formatos ZIP, PNG, HTTP/gzip.

---

## Funcionamento em 2 Etapas

### 1. **Compressão LZ77**

- **Janela Deslizante**:
  - Analisa os dados em busca de **padrões repetidos** (ex.: strings idênticas).
  - Tamanho típico da janela: **32KB**.
- **Substituição por Referência**:
  - Sequências repetidas são substituídas por **ponteiros** (distância, comprimento) para a ocorrência anterior.
  - Exemplo:
    - Dados originais: `"ABCEABD"` → `"ABCE"(5,3)"D"` (referência a "AB" 5 bytes atrás, 3 caracteres).

### 2. **Codificação de Huffman**

- **Dicionário Dinâmico**:
  - Símbolos frequentes recebem **códigos binários curtos**.
  - Símbolos raros recebem códigos mais longos.
- **Exemplo**:
  - Dados: `"TOBEORNOTTOBEORTOBEORNOT"`
  - Huffman atribui: `"T"=0`, `"O"=10`, `"B"=110`, etc.

---

## Características Principais

### Eficiência

- **Taxas de compressão**: 2:1 a 5:1 (dependendo da redundância dos dados).
- **Blocos Independentes**: Dados são divididos em blocos para compressão/descompressão incremental.

### Implementação

- **Bibliotecas**: zlib (C), `java.util.zip` (Java), `gzip` (Linux).
- **Otimizado para**: Texto, logs, dados estruturados (ex.: JSON/XML).

---

## Exemplo Simplificado em Python

```python
import heapq
from collections import Counter

def huffman_encoding(data):
    freq = Counter(data)
    heap = [[freq[char], [char, ""]] for char in freq]
    heapq.heapify(heap)

    while len(heap) > 1:
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])

    return heap[0][1:]

data = "TOBEORNOTTOBEORTOBEORNOT"
encoded = huffman_encoding(data)
print(f"Original: {data}\nCodificado: {encoded}")
```

**Saída**:

```
Original: TOBEORNOTTOBEORTOBEORNOT
Codificado: [['T', '0'], ['O', '10'], ['B', '110'], ['E', '1110'], ['R', '11110'], ['N', '11111']]
```

---

## Vantagens e Limitações

| **Vantagens**                                      | **Limitações**                                                       |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| ✅ Alta taxa de compressão para dados redundantes. | ❌ Ineficiente para dados aleatórios (ex.: arquivos já compactados). |
| ✅ Suporte universal (ZIP, PNG, HTTP).             | ❌ Overhead de processamento (CPU para compressão).                  |
| ✅ Descompressão rápida.                           | ❌ Dicionário limitado pela janela LZ77 (32KB).                      |

---

## Casos de Uso Práticos

1. **Compactação de Arquivos**:
   - ZIP: Combina DEFLATE com estrutura de diretórios.
2. **Imagens PNG**:
   - Compressão sem perdas de pixels.
3. **HTTP/gzip**:
   - Reduz tamanho de respostas web (HTML, CSS, JS).

---

## Conclusão

O DEFLATE é o **padrão-ouro** para compressão sem perdas devido à:

- **Combinação inteligente** de LZ77 e Huffman.
- **Balanço ideal** entre taxa de compressão e velocidade.
- **Adoção massiva** em formatos e protocolos.

_Para dados não redundantes, considere algoritmos especializados (ex.: LZMA para maior compressão)._
