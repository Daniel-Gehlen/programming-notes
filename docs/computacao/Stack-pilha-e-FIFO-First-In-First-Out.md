# 📚 **Stack (Pilha) e FIFO (Filas) em Programação**

## 📌 **Conceitos Fundamentais**

| Estrutura | Princípio                | Operações Chave       | Analogia do Mundo Real |
| --------- | ------------------------ | --------------------- | ---------------------- |
| **Stack** | LIFO (Last-In-First-Out) | `push`, `pop`, `peek` | Pilha de pratos        |
| **FIFO**  | First-In-First-Out       | `enqueue`, `dequeue`  | Fila de banco          |

---

## 🏗️ **Implementação Básica em Rust**

### 🥞 **Stack (Pilha)**

```rust
struct Stack<T> {
    items: Vec<T>,
}

impl<T> Stack<T> {
    fn new() -> Self {
        Stack { items: Vec::new() }
    }

    fn push(&mut self, item: T) {
        self.items.push(item);
    }

    fn pop(&mut self) -> Option<T> {
        self.items.pop()
    }

    fn peek(&self) -> Option<&T> {
        self.items.last()
    }
}
```

### 🚶 **FIFO (Fila)**

```rust
use std::collections::VecDeque;

struct Queue<T> {
    items: VecDeque<T>,
}

impl<T> Queue<T> {
    fn new() -> Self {
        Queue { items: VecDeque::new() }
    }

    fn enqueue(&mut self, item: T) {
        self.items.push_back(item);
    }

    fn dequeue(&mut self) -> Option<T> {
        self.items.pop_front()
    }

    fn front(&self) -> Option<&T> {
        self.items.front()
    }
}
```

---

## 🌐 **Aplicações no Desenvolvimento Web**

### 🥞 **Stack (Pilha)**

1. **Histórico de Navegação**

   ```javascript
   // Exemplo em JavaScript
   const historyStack = [];
   historyStack.push("homepage");
   historyStack.push("products");
   const lastPage = historyStack.pop(); // Volta para 'homepage'
   ```

2. **Gestão de Sessões**
   ```python
   # Exemplo em Python
   session_stack = []
   session_stack.append({'user': 'Alice', 'time': '10:00'})
   session_stack.append({'user': 'Bob', 'time': '10:05'})
   expired_session = session_stack.pop()
   ```

### 🚶 **FIFO (Filas)**

1. **Gerenciamento de Requisições**

   ```go
   // Exemplo em Go
   type Request struct {
       ID string
       Method string
   }

   var requestQueue = make(chan Request, 100)

   // Adiciona requisição
   requestQueue <- Request{ID: "req1", Method: "GET"}

   // Processa requisição
   req := <-requestQueue
   ```

2. **Tarefas em Background**

   ```python
   # Exemplo com Celery (Python)
   @app.task
   def process_image(image_path):
       # Processamento demorado
       pass

   # Enfileira tarefa
   process_image.delay('uploads/image.jpg')
   ```

---

## ⚖️ **Comparação Detalhada**

| Critério           | Stack                      | FIFO Queue                   |
| ------------------ | -------------------------- | ---------------------------- |
| **Ordem**          | Último a entrar é primeiro | Primeiro a entrar é primeiro |
| **Complexidade**   | O(1) para push/pop         | O(1) para enqueue/dequeue    |
| **Uso de Memória** | Mais eficiente             | Requer mais controle         |
| **Cenários**       | Undo/Redo, Call Stack      | Task queues, Buffering       |

---

## 🚀 **Exemplos Avançados**

### 🔄 **Stack para Avaliação de Expressões**

```rust
fn evaluate_expression(expr: &str) -> i32 {
    let mut stack = Vec::new();
    for token in expr.split_whitespace() {
        if let Ok(num) = token.parse::<i32>() {
            stack.push(num);
        } else {
            let b = stack.pop().unwrap();
            let a = stack.pop().unwrap();
            stack.push(match token {
                "+" => a + b,
                "-" => a - b,
                "*" => a * b,
                "/" => a / b,
                _ => panic!("Operador inválido"),
            });
        }
    }
    stack.pop().unwrap()
}
```

### 🌐 **Fila de Mensagens com Redis**

```rust
use redis::Commands;

fn process_queue() -> redis::RedisResult<()> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;

    loop {
        let msg: String = con.brpop("message_queue", 0)?;
        println!("Processando: {}", msg);
    }
}
```

---

## 🎯 **Quando Usar Cada Estrutura?**

### 🥞 **Stack é Ideal Para:**

✔ Operações de undo/redo
✔ Rastreamento de escopos (call stack)
✔ Algoritmos de backtracking

### 🚶 **FIFO é Ideal Para:**

✔ Sistemas de mensageria
✔ Buffering de dados
✔ Escalonamento de tarefas

> **Dica:** Em Rust, prefira `Vec` para stacks e `VecDeque` para filas por eficiência! 🦀
