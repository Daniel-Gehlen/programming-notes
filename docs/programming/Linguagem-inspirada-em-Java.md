# Linguagem Inspirada em Java com Sintaxe Simplificada

## 🆕 Principais Alterações na Sintaxe

| Elemento Java Original | Nova Sintaxe        | Exemplo             |
| ---------------------- | ------------------- | ------------------- |
| `class`                | Nome direto         | `Node T`            |
| `public/private`       | Removidos           | `data: T`           |
| Parênteses `()`        | Lista de parâmetros | `addAt index, data` |
| Chaves `{}`            | Indentação (Python) | `if isEmpty: ...`   |
| Chamadas de método     | Estilo natural      | `list addFirst 10`  |

---

## 📝 Exemplo: Lista Encadeada Simplificada

### Definição do Nó

```python
Node T
    data: T
    next: Node T

    Node data:
        this data = data
        this next = null
```

### Operações Básicas da Lista

```python
LinkedList T
    head: Node T
    size: int

    addFirst data:
        newNode = Node data
        newNode next = head
        head = newNode
        size++

    printList:
        current = head
        while current != null:
            print current data + " -> "
            current = current next
        print "null"
```

---

## 🛒 Versão Contextualizada (Carrinho de Compras)

### Estrutura do Item

```python
ShoppingCartItem
    product: Object
    next: ShoppingCartItem

    ShoppingCartItem product:
        this product = product
        this next = null
```

### Gerenciamento do Carrinho

```python
ShoppingCart
    head: ShoppingCartItem

    isEmpty:
        return head == null

    addProduct product:
        newItem = ShoppingCartItem product
        if isEmpty:
            head = newItem
        else:
            current = head
            while current next != null:
                current = current next
            current next = newItem
```

---

## 🔄 Comparação Java vs Nova Sintaxe

**Java Tradicional**:

```java
public class Node<T> {
    private T data;
    private Node<T> next;

    public Node(T data) {
        this.data = data;
        this.next = null;
    }
}
```

**Nova Linguagem**:

```python
Node T
    data: T
    next: Node T

    Node data:
        this data = data
        this next = null
```

---

## 💡 Benefícios da Nova Abordagem

- ✅ **Mais concisa**: Redução de ~40% em caracteres
- 🐍 **Familiar para devs Python**: Uso de indentação
- 🧠 **Legibilidade**: Sintaxe mais natural (ex: `list addFirst 10`)

---

## ⚠️ Limitações

- 🔍 **Menos explícita**: Falta de modificadores de acesso
- 🔄 **Compatibilidade**: Requer novo compilador/interpretador
- 🏗️ **Estruturação**: Pode ser desafiadora para projetos grandes

---

## 🚀 Exemplo Completo de Uso

```python
main:
    cart = ShoppingCart
    cart addProduct "Livro"
    cart addProduct "Caneta"

    if not cart isEmpty:
        print "Itens no carrinho:"
        current = cart head
        while current != null:
            print current product
            current = current next
```

> **Dica**: Essa sintaxe é ideal para prototipagem rápida ou DSLs (Domain-Specific Languages)!
