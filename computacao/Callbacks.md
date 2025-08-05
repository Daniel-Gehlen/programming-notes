# 🔄 **Callbacks e Funções de Alta Ordem**

## 📌 **Conceitos Fundamentais**

| Conceito                 | Definição                                                                | Característica Principal                               |
| ------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| **Callback**             | Função passada como argumento para ser executada após um evento/condição | Assincronia/Controle de fluxo                          |
| **Função de Alta Ordem** | Função que recebe ou retorna outras funções                              | Tratamento de funções como cidadãos de primeira classe |

---

## 🛠️ **Implementação em Linguagens**

### 🌐 **JavaScript (Callbacks Assíncronos)**

```javascript
// Função que recebe callback
function fetchData(url, callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Exemplo" };
    callback(data);
  }, 1000);
}

// Uso
fetchData("/api/data", (response) => {
  console.log("Dados recebidos:", response);
});
```

### 🐍 **Python (Funções de Alta Ordem)**

```python
def apply_operation(x, y, operation):
    return operation(x, y)

def power(a, b):
    return a ** b

result = apply_operation(2, 3, power)  # 8
```

### 🦀 **Rust (Closures como Callbacks)**

```rust
fn process<F: Fn(i32)>(value: i32, callback: F) {
    callback(value * 2);
}

fn main() {
    process(5, |result| println!("Resultado: {}", result));  // Resultado: 10
}
```

---

## 💡 **Vantagens**

| Benefício          | Exemplo de Aplicação                     |
| ------------------ | ---------------------------------------- |
| **Flexibilidade**  | Injeção de comportamentos personalizados |
| **Desacoplamento** | Separação entre lógica e implementação   |
| **Reutilização**   | Mesma função com diferentes callbacks    |
| **Assincronia**    | Tratamento de operações I/O              |

---

## 🏗️ **Padrões Comuns**

### 1. **Map com Callback**

```javascript
const numbers = [1, 2, 3];
const squared = numbers.map((x) => x * x); // [1, 4, 9]
```

### 2. **Error-First Callbacks (Node.js)**

```javascript
fs.readFile("arquivo.txt", (err, data) => {
  if (err) return console.error("Erro:", err);
  console.log("Conteúdo:", data);
});
```

### 3. **Middleware Pattern (Express.js)**

```javascript
app.use((req, res, next) => {
  console.log("Middleware executado");
  next(); // Callback para continuar o fluxo
});
```

---

## ⚠️ **Desafios e Soluções**

| Problema                 | Solução                             |
| ------------------------ | ----------------------------------- |
| **Callback Hell**        | Promises/async-await                |
| **Tipagem Frágil**       | Generics (TypeScript/Rust)          |
| **Vazamento de Memória** | Remover listeners quando não usados |

---

## 🔄 **Evolução para Promises/Async-Await**

```javascript
// Callback tradicional
function oldApi(callback) {
  /* ... */
}

// Versão com Promise
function modernApi() {
  return new Promise((resolve) => {
    oldApi(resolve);
  });
}

// Uso com async/await
async function main() {
  const result = await modernApi();
  console.log(result);
}
```

---

## 🎯 **Casos de Uso Reais**

1. **Event Listeners** (GUI/Browsers)

   ```javascript
   button.addEventListener("click", () => {
     console.log("Botão clicado!");
   });
   ```

2. **Processamento de Dados**

   ```python
   sorted(data, key=lambda x: x["value"])
   ```

3. **Injeção de Dependências**
   ```java
   public interface PaymentCallback {
       void onComplete(boolean success);
   }
   ```

---

## 📊 **Comparação entre Paradigmas**

| Critério         | Callbacks        | Promises            | Async/Await |
| ---------------- | ---------------- | ------------------- | ----------- |
| **Legibilidade** | Baixa (Pyramid)  | Média               | Alta        |
| **Aninhamento**  | Problema comum   | Encadeamento        | Linear      |
| **Suporte**      | Todas linguagens | Linguagens modernas | ES2017+     |

---

> **Dica:** Em TypeScript, use tipos genéricos para callbacks com segurança:
> `type Callback<T> = (result: T) => void;` 🚀
