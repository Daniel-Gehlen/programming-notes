# Algoritmo de Huffman

## Visão Geral

Método de compressão sem perdas criado por David Huffman (1952) que atribui códigos binários de tamanho variável baseado na frequência dos caracteres.

---

## Funcionamento Passo a Passo

### 1. Análise de Frequência

Conta ocorrências de cada caractere:

```
"ABRACADABRA" → A:5, B:2, R:2, C:1, D:1
```

### 2. Construção da Árvore

**Processo iterativo**:

1. Cria nós folha para cada caractere
2. Combina 2 nós de menor frequência
3. Repete até formar a raiz

**Exemplo Visual**:

```
       (21)
      /    \
   (9)      A(5)
  /   \
B(2)  (7)
     /   \
   R(2)  (3)
         /   \
       C(1) D(1)
```

### 3. Atribuição de Códigos

| Caractere | Código Huffman |
| --------- | -------------- |
| A         | 0              |
| B         | 100            |
| R         | 101            |
| C         | 1100           |
| D         | 1101           |

---

## Características Chave

✅ **Eficiência Ótima**

- Garante o menor número médio de bits por símbolo

✅ **Prefix-Free Property**

- Nenhum código é prefixo de outro (evita ambiguidade)

✅ **Aplicações**

- Formatos: ZIP, JPEG, MP3
- Protocolos: HTTP/2 (HPACK)

---

## Exemplo Prático

**Texto Original**: "ABRACADABRA" (11 bytes)
**Comprimido**:

```
A B  R A C A D A B  R  A
0 100 101 0 1100 0 1101 0 100 101 0
```

**Total**: 25 bits (3.125 bytes) vs 11 bytes originais
**Economia**: ~72%

---

## Implementação Básica (Pseudocódigo)

```python
# 1. Calcular frequências
freq = {'A':5, 'B':2, 'R':2, 'C':1, 'D':1}

# 2. Construir árvore
heap = [(f, char) for char, f in freq.items()]
heapq.heapify(heap)
while len(heap) > 1:
    lo = heapq.heappop(heap)
    hi = heapq.heappop(heap)
    heapq.heappush(heap, (lo[0]+hi[0], (lo, hi)))

# 3. Gerar códigos
def assign_code(node, code='', codes={}):
    if isinstance(node[1], str):
        codes[node[1]] = code
    else:
        assign_code(node[1][0], code+'0', codes)
        assign_code(node[1][1], code+'1', codes)
```

---

## Limitações

⚠️ **Overhead**: Precisa armazenar a tabela de códigos
⚠️ **Estático**: Requer análise prévia dos dados
⚠️ **Não adaptativo**: Ineficiente para streams dinâmicos

---

## Conclusão

O algoritmo de Huffman revolucionou a compressão de dados com:

- Simplicidade elegante
- Eficiência comprovada
- Aplicações ubíquas

_Dica para Devs_: Use `zlib.compress` em Python para implementação prática.
