# Livro "Introduction to Algorithms" (3ª Edição)

## **Parte I: Fundamentos**
### 1. Introdução
- **Definição**: Algoritmos como sequências de passos para resolver problemas.
- **Exemplo**: Busca linear em uma lista.
  ```python
  def busca_linear(lista, item):
      for i in range(len(lista)):
          if lista[i] == item:
              return i
      return -1
  ```

### 2. Análise de Algoritmos
- **Notações**:
  - **O-notation** (limite superior)
  - **Ω-notation** (limite inferior)
  - **Θ-notation** (limite exato)
- **Exemplo**: Busca binária vs. busca linear.
  ```python
  def busca_binaria(lista, item):
      inicio, fim = 0, len(lista) - 1
      while inicio <= fim:
          meio = (inicio + fim) // 2
          if lista[meio] == item:
              return meio
          elif lista[meio] < item:
              inicio = meio + 1
          else:
              fim = meio - 1
      return -1
  ```

### 3. Recorrências
- **Métodos**:
  - Substituição
  - Árvore de recorrência
  - Teorema Mestre
- **Exemplo**: Merge Sort (T(n) = 2T(n/2) + O(n)).

---

## **Parte II: Algoritmos de Ordenação**
### 1. Insertion Sort
- **Ideia**: Inserir elementos na posição correta em uma sublista ordenada.
- **Complexidade**: O(n²) no pior caso.
- **Fluxograma**:
  ```mermaid
  graph TD
    A[Início] --> B[Elemento a inserir]
    B --> C{Comparar com anterior}
    C -->|Menor| D[Deslocar elementos]
    C -->|Maior| E[Inserir]
  ```

### 2. Merge Sort
- **Ideia**: Dividir e conquistar.
- **Código**:
  ```python
  def merge_sort(arr):
      if len(arr) > 1:
          meio = len(arr) // 2
          L, R = arr[:meio], arr[meio:]
          merge_sort(L)
          merge_sort(R)
          # Mesclar L e R
  ```

---

## **Parte III: Estruturas de Dados**
### 1. Pilhas e Filas
- **Pilha (LIFO)**:
  ```python
  class Pilha:
      def __init__(self):
          self.items = []
      def empilhar(self, item):
          self.items.append(item)
  ```
- **Fila (FIFO)**:
  ```python
  class Fila:
      def __init__(self):
          self.items = []
      def enfileirar(self, item):
          self.items.insert(0, item)
  ```

### 2. Árvores Binárias
- **Exemplo**: Árvore de decisão.
  ```python
  class Node:
      def __init__(self, valor):
          self.valor = valor
          self.esquerda = None
          self.direita = None
  ```

---

## **Parte IV: Técnicas Avançadas**
### 1. Programação Dinâmica
- **Problema da Mochila**:
  ```python
  def knapsack(peso_max, pesos, valores, n):
      K = [[0 for _ in range(peso_max + 1)] for _ in range(n + 1)]
      # Preencher tabela K
  ```

### 2. Algoritmos em Grafos
- **BFS/DFS**:
  ```python
  from collections import deque
  def bfs(grafo, inicio):
      fila = deque([inicio])
      visitados = set()
  ```

---

## **Parte V: Tópicos Especiais**
### 1. Criptografia
- **Exemplo**: Cifra de Fernet.
  ```python
  from cryptography.fernet import Fernet
  chave = Fernet.generate_key()
  cifra = Fernet(chave)
  ```

### 2. Geometria Computacional
- **Detecção de Colisão**:
  ```python
  def colisao(rect1, rect2):
      return (rect1.x < rect2.x + rect2.largura and ...)
  ```

---

## **Conclusão**
O livro cobre desde fundamentos até tópicos avançados, com exemplos práticos e análises de complexidade. Os fluxogramas e implementações em Python ajudam na compreensão dos conceitos.

**por Daniel Gehlen**

---

### Observações:
- Os fluxogramas foram simplificados para texto (veja os originais no PDF para versões gráficas).
- Códigos estão em Python para facilitar a leitura, mas o livro usa pseudocódigo.
- Para detalhes matemáticos (como o Teorema Mestre), consulte o livro original.
