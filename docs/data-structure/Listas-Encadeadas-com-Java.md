# Listas Encadeadas com Java

## 1. Introdução

**Objetivo**: Implementar e entender estruturas de dados dinâmicas em Java, com foco em listas encadeadas.

---

## 2. Conceitos Fundamentais

### Estruturas Dinâmicas vs. Estáticas

| **Característica**  | **Arrays**               | **Listas Encadeadas**                |
| ------------------- | ------------------------ | ------------------------------------ |
| Alocação de Memória | Contígua                 | Dinâmica (nós dispersos)             |
| Tamanho             | Fixo                     | Flexível                             |
| Acesso              | O(1) por índice          | O(n) - Percorrer nós sequencialmente |
| Inserção/Remoção    | Custo alto (reindexação) | O(1) no início/fim, O(n) no meio     |

### Terminologia

- **Nó/Célula**: Unidade básica (valor + referência ao próximo nó).
- **Cabeça (head)**: Primeiro nó da lista.
- **Cauda (tail)**: Último nó (opcional em implementações simples).

---

## 3. Implementação Básica

### Classe `No` (Nó)

```java
public class No<T> {
    private T valor;
    private No<T> proximo;

    public No(T valor) {
        this.valor = valor;
        this.proximo = null;
    }

    // Getters e Setters
    public T getValor() { return valor; }
    public No<T> getProximo() { return proximo; }
    public void setProximo(No<T> proximo) { this.proximo = proximo; }
}
```

### Classe `ListaEncadeada`

```java
public class ListaEncadeada<T> {
    private No<T> cabeca;
    private int tamanho;

    public ListaEncadeada() {
        this.cabeca = null;
        this.tamanho = 0;
    }

    public boolean estaVazia() {
        return cabeca == null;
    }

    public int getTamanho() {
        return tamanho;
    }
}
```

---

## 4. Operações Principais

### Inserção

#### No Início (O(1))

```java
public void inserirInicio(T valor) {
    No<T> novoNo = new No<>(valor);
    novoNo.setProximo(cabeca);
    cabeca = novoNo;
    tamanho++;
}
```

#### No Final (O(n))

```java
public void inserirFinal(T valor) {
    No<T> novoNo = new No<>(valor);
    if (estaVazia()) {
        cabeca = novoNo;
    } else {
        No<T> atual = cabeca;
        while (atual.getProximo() != null) {
            atual = atual.getProximo();
        }
        atual.setProximo(novoNo);
    }
    tamanho++;
}
```

### Remoção

#### Do Início (O(1))

```java
public T removerInicio() {
    if (estaVazia()) throw new RuntimeException("Lista vazia");
    T valor = cabeca.getValor();
    cabeca = cabeca.getProximo();
    tamanho--;
    return valor;
}
```

#### Por Valor (O(n))

```java
public boolean remover(T valor) {
    if (estaVazia()) return false;

    if (cabeca.getValor().equals(valor)) {
        cabeca = cabeca.getProximo();
        tamanho--;
        return true;
    }

    No<T> anterior = cabeca;
    No<T> atual = cabeca.getProximo();

    while (atual != null) {
        if (atual.getValor().equals(valor)) {
            anterior.setProximo(atual.getProximo());
            tamanho--;
            return true;
        }
        anterior = atual;
        atual = atual.getProximo();
    }
    return false;
}
```

---

## 5. Percorrendo a Lista

### Método `toString`

```java
@Override
public String toString() {
    StringBuilder sb = new StringBuilder("[");
    No<T> atual = cabeca;
    while (atual != null) {
        sb.append(atual.getValor());
        if (atual.getProximo() != null) sb.append(" -> ");
        atual = atual.getProximo();
    }
    sb.append("]");
    return sb.toString();
}
```

### Busca Sequencial (O(n))

```java
public boolean contem(T valor) {
    No<T> atual = cabeca;
    while (atual != null) {
        if (atual.getValor().equals(valor)) return true;
        atual = atual.getProximo();
    }
    return false;
}
```

---

## 6. Comparação com `LinkedList` do Java

| **Operação**       | **Nossa Implementação** | **Java LinkedList**       |
| ------------------ | ----------------------- | ------------------------- |
| Inserção no Início | O(1)                    | O(1)                      |
| Inserção no Fim    | O(n)                    | O(1)                      |
| Remoção por Valor  | O(n)                    | O(n)                      |
| Busca              | O(n)                    | O(n)                      |
| Implementação      | Simples                 | Otimizada (Doubly-Linked) |

**Exemplo de Uso da API Java**:

```java
LinkedList<String> listaJava = new LinkedList<>();
listaJava.addFirst("A");  // Inserção no início
listaJava.addLast("Z");   // Inserção no fim
listaJava.remove("A");    // Remoção por valor
```

---

## 7. Aplicações Práticas

- **Histórico de Navegação** (pilha usando lista encadeada)
- **Filas de Processamento** (com cauda otimizada)
- **Gerenciamento de Memória** (alocação dinâmica)

**Dica**: Para otimizar operações no fim, mantenha uma referência ao último nó (`tail`).

---

## 8. Exercícios Recomendados

1. Implemente um método `get(int indice)` que retorne o valor no índice especificado.
2. Crie uma versão _doubly-linked_ (com nós que referenciam anterior e próximo).
3. Compare o desempenho da sua lista com `ArrayList` e `LinkedList` do Java para inserções/remoções.

> "Dominar listas encadeadas é o primeiro passo para entender estruturas complexas como árvores e grafos."
