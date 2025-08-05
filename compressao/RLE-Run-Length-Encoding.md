# RLE (Run-Length Encoding)

---

## Introdução

O **RLE** é um método de compressão **simples e rápido** que substitui sequências repetidas de dados por um par **(contagem, valor)**. Ideal para:

- **Imagens** (BMP, TIFF) com áreas de cor sólida.
- **Dados binários** com padrões repetitivos.

---

## Funcionamento

### 1. **Codificação**

- **Entrada**: `AAAABBBCCCCDDDD`
- **Processo**:
  - Identifica sequências contíguas: `AAAA`, `BBB`, `CCCC`, `DDDD`.
  - Substitui por: `4A3B4C4D`.

### 2. **Decodificação**

- **Entrada**: `4A3B4C4D`
- **Saída**: `AAAABBBCCCCDDDD` (expande cada par).

---

## Implementação em Python

### Codificação

```python
def encode_rle(data):
    encoded = []
    count = 1
    for i in range(1, len(data)):
        if data[i] == data[i-1]:
            count += 1
        else:
            encoded.append(f"{count}{data[i-1]}")
            count = 1
    encoded.append(f"{count}{data[-1]}")  # Última sequência
    return "".join(encoded)
```

### Decodificação

```python
def decode_rle(encoded_data):
    decoded = []
    i = 0
    while i < len(encoded_data):
        count = int(encoded_data[i])
        char = encoded_data[i+1]
        decoded.append(char * count)
        i += 2
    return "".join(decoded)
```

**Exemplo**:

```python
original = "AAAABBBCCCCDDDD"
encoded = encode_rle(original)  # "4A3B4C4D"
decoded = decode_rle(encoded)   # "AAAABBBCCCCDDDD"
```

---

## Vantagens e Limitações

| **Vantagens**                                             | **Limitações**                                                                  |
| --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ✅ **Simplicidade**: Fácil implementação.                 | ❌ **Ineficiente** para dados sem repetições (ex.: texto aleatório).            |
| ✅ **Rápido**: Processamento em tempo linear.             | ❌ **Pior caso**: Dados não repetitivos dobram de tamanho (`A B C` → `1A1B1C`). |
| ✅ **Sem perdas**: Recuperação exata dos dados originais. | ❌ **Limitado**: Não combina com outros algoritmos (ex.: Huffman).              |

---

## Aplicações Práticas

### 1. **Imagens BMP**

- Compressão de áreas monocromáticas (ex.: logotipos, desenhos).

### 2. **Vídeo e Áudio**

- Quadros consecutivos idênticos (ex.: animações simples).

### 3. **Sensores e IoT**

- Transmissão eficiente de leituras repetidas (ex.: temperatura constante).

---

## Otimizações

### 1. **Compactação de Bits**

- Usar **bytes** para contagens >9 (ex.: `15A` → `0x0FA` em hexadecimal).

### 2. **Variante para Dados Binários**

- Codificar sequências de `0`s ou `1`s (ex.: `00001111` → `4 0s, 4 1s`).

---

## Exemplo Avançado (Imagem BMP)

**Dados de Pixel**:

```
[255, 255, 255, 255, 0, 0, 0, 128, 128]
```

**RLE**:

```
4 255 3 0 2 128
```

**Economia**: 9 bytes → 6 bytes (33% menor).

---

## Conclusão

O RLE é **ideal** para:

- Compressão **rápida e sem perdas** de dados repetitivos.
- Cenários com **recursos limitados** (embarcados, IoT).

_Para dados complexos, combine com outros métodos (ex.: DEFLATE)._
