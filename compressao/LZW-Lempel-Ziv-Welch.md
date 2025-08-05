# Algoritmo LZW (Lempel-Ziv-Welch)

---

## Visão Geral

O **LZW** é um algoritmo de compressão **sem perdas** que cria um **dicionário dinâmico** de padrões repetidos nos dados. Amplamente usado em:

- Formatos: **GIF**, **TIFF**
- Ferramentas Unix: `compress`

---

## Funcionamento

### 1. **Codificação (Compressão)**

- **Inicialização**:
  - Dicionário começa com todos os caracteres ASCII (0-255).
- **Processamento**:
  - Percorre os dados, identificando sequências repetidas.
  - Novos padrões são adicionados ao dicionário com um **código único**.
  - Sequências conhecidas são substituídas por seus códigos.

### 2. **Decodificação (Descompressão)**

- Reconstrói o dicionário dinamicamente a partir dos códigos.
- Traduz cada código de volta para a sequência original.

---

## Implementação em Python

### Compressão

```python
def lzw_compress(data):
    dictionary = {chr(i): i for i in range(256)}  # ASCII inicial
    current_code = 256
    result = []
    w = ""

    for char in data:
        wc = w + char
        if wc in dictionary:
            w = wc
        else:
            result.append(dictionary[w])
            dictionary[wc] = current_code
            current_code += 1
            w = char

    if w:
        result.append(dictionary[w])
    return result
```

### Descompressão

```python
def lzw_decompress(compressed_data):
    dictionary = {i: chr(i) for i in range(256)}
    current_code = 256
    result = []
    w = chr(compressed_data.pop(0))
    result.append(w)

    for k in compressed_data:
        if k in dictionary:
            entry = dictionary[k]
        elif k == current_code:
            entry = w + w[0]
        else:
            raise ValueError("Erro na descompressão")

        result.append(entry)
        dictionary[current_code] = w + entry[0]
        current_code += 1
        w = entry

    return ''.join(result)
```

**Exemplo de Uso**:

```python
original_data = "TOBEORNOTTOBEORTOBEORNOT"
compressed = lzw_compress(original_data)
decompressed = lzw_decompress(compressed.copy())
print(f"Original: {original_data}\nComprimido: {compressed}\nDescomprimido: {decompressed}")
```

---

## Vantagens e Desvantagens

| **Vantagens**                                                                   | **Desvantagens**                                               |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ✅ Alta compressão para dados repetitivos (texto, imagens com cores uniformes). | ❌ Ineficiente para dados aleatórios ou já compactados.        |
| ✅ Sem perdas e dicionário adaptativo.                                          | ❌ Gerenciamento de memória complexo para dicionários grandes. |
| ✅ Rápida descompressão.                                                        | ❌ Patentes históricas (hoje expiradas).                       |

---

## Aplicações Práticas

1. **Imagens GIF**:
   - Compressão eficiente para áreas de cor sólida.
2. **Arquivos TIFF**:
   - Suporte a compressão sem perdas para imagens de alta qualidade.
3. **Unix `compress`**:
   - Antigo padrão para compactação de arquivos.

---

## Otimizações Comuns

- **Limite de Tamanho do Dicionário**:
  - Reinicialização do dicionário quando atinge um tamanho máximo (ex.: 4096 entradas).
- **Codificação de Bits Variáveis**:
  - Uso de 12 bits para códigos (suporta até 4096 entradas).

---

## Comparação com Outros Algoritmos

| **Critério**    | **LZW**                      | **DEFLATE (ZIP)**     |
| --------------- | ---------------------------- | --------------------- |
| **Tipo**        | Dicionário dinâmico          | LZ77 + Huffman        |
| **Melhor para** | Texto, imagens com repetição | Dados genéricos, HTTP |
| **Patente**     | Expirada                     | Livre                 |

---

## Conclusão

O LZW é **ideal** para:

- Compressão de **texto** e **imagens com padrões repetitivos**.
- Formatos como **GIF** e **TIFF**.

_Para dados genéricos, prefira DEFLATE (ZIP), mas o LZW continua relevante em nichos específicos._
