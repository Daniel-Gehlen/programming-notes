# 📚 **Listas Ligadas e Nós em Rust**

## 📌 **Conceitos Fundamentais**

Uma **lista ligada** é uma estrutura de dados onde cada elemento (nó) contém:

- Um **valor** de dado
- Uma **referência** (ponteiro) para o próximo nó

---

## 🧱 **Estrutura Básica em Rust**

### 🏗️ **Definição do Nó**

```rust
struct Node<T> {
    value: T,                  // Dado armazenado
    next: Option<Box<Node<T>>>, // Próximo nó (empacotado em Box)
}
```

### 🏗️ **Definição da Lista**

```rust
struct LinkedList<T> {
    head: Option<Box<Node<T>>>, // Ponteiro para o primeiro nó
}
```

---

## 🛠️ **Operações Principais**

### ➕ **Inserção no Início**

```rust
fn insert(&mut self, value: T) {
    let mut new_node = Box::new(Node::new(value));
    new_node.next = self.head.take(); // Take "rouba" o valor atual
    self.head = Some(new_node);
}
```

### ➖ **Remoção do Início**

```rust
fn remove(&mut self) -> Option<T> {
    self.head.take().map(|node| {
        self.head = node.next;
        node.value
    })
}
```

### 🔄 **Conversão para Vetor**

```rust
fn to_vec(&self) -> Vec<T>
where
    T: Clone,
{
    let mut result = Vec::new();
    let mut current = &self.head;

    while let Some(node) = current {
        result.push(node.value.clone());
        current = &node.next;
    }

    result
}
```

---

## 🖥️ **Exemplo Completo**

```rust
fn main() {
    let mut list = LinkedList::new();

    // Inserção
    list.insert(1);
    list.insert(2);
    list.insert(3);

    // Conversão para vetor
    println!("Lista como vetor: {:?}", list.to_vec()); // [3, 2, 1]

    // Remoção
    let removed = list.remove();
    println!("Removido: {:?}", removed); // Some(3)
    println("Lista após remoção: {:?}", list.to_vec()); // [2, 1]
}
```

---

## ⚖️ **Vantagens e Desvantagens**

| ✅ Vantagens                      | ❌ Desvantagens                   |
| --------------------------------- | --------------------------------- |
| Inserções/remoções O(1) no início | Acesso aleatório lento O(n)       |
| Tamanho dinâmico                  | Overhead de memória por ponteiros |
| Fácil reorganização               | Não cache-friendly                |

---

## 🔍 **Detalhes de Implementação**

### 🧠 **Por que `Option<Box<Node<T>>>`?**

- `Option`: Permite representar nós nulos (fim da lista)
- `Box`: Aloca nós no heap com tamanho conhecido em tempo de compilação

### 🛡️ **Segurança de Memória**

- Rust garante em tempo de compilação:
  - Sem referências inválidas
  - Sem vazamentos de memória
  - Sem acesso simultâneo inseguro

---

## 🏗️ **Extensões Possíveis**

1. **Lista duplamente ligada** (adicionar `prev` aos nós)
2. **Iteradores** (implementar `Iterator` trait)
3. **Lista circular** (último nó aponta para o primeiro)

---

## 🎯 **Quando Usar?**

✔ Inserções/remoções frequentes no início
✔ Tamanho desconhecido antecipadamente
✔ Implementação de pilhas (LIFO)

> **Dica:** Em Rust, considere `Vec` para maioria dos casos - mais eficiente na prática! 🦀
