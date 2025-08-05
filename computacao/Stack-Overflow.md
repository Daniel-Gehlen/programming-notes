# 🚨 **Stack Overflow**

## 📌 **O que é um Stack Overflow?**

Ocorre quando a **pilha de execução** cresce além do limite definido pela linguagem ou ambiente.
🔹 **Causas comuns:**

- Funções recursivas **sem condição de parada**.
- Chamadas recursivas **excessivas**.

---

## 🏗️ **Pilha de Execução (Call Stack)**

✔ **Armazena:**

- Chamadas de funções ativas.
- Parâmetros, variáveis locais e pontos de retorno.
  ✔ **Cada nova chamada** empilha um novo _stack frame_.
  ✔ Se a pilha **ultrapassar o limite** → **Stack Overflow!**

---

## 💥 **Exemplo de Stack Overflow**

```python
def infinite_recursion():
    return infinite_recursion()  # 🔄 Loop infinito!
```

**Resultado:**
❌ `RecursionError: maximum recursion depth exceeded`

---

## 🛡️ **Como Evitar Stack Overflow?**

### 1️⃣ **Condição de Parada**

✅ Garanta que toda recursão tenha um **caso base**.

```python
def factorial(n):
    if n == 0:  # ⚠️ Condição de parada
        return 1
    else:
        return n * factorial(n - 1)
```

### 2️⃣ **Recursão de Cauda (Tail Recursion)**

✅ A chamada recursiva é a **última operação** (otimizada em algumas linguagens).

```python
def tail_recursive_factorial(n, accumulator=1):
    if n == 0:
        return accumulator
    else:
        return tail_recursive_factorial(n - 1, n * accumulator)  # ↪️ Última ação
```

### 3️⃣ **Conversão para Iteração**

✅ Substitua recursão por **loops** (evita pilha crescer).

```python
def iterative_factorial(n):
    result = 1
    while n > 0:  # 🔄 Loop iterativo
        result *= n
        n -= 1
    return result
```

---

## 📊 **Comparação de Métodos**

| Método                | Vantagem                           | Desvantagem                           |
| --------------------- | ---------------------------------- | ------------------------------------- |
| **Recursão Clássica** | Código intuitivo                   | Risco de Stack Overflow               |
| **Recursão de Cauda** | Otimizável (em algumas linguagens) | Não suportada por todas as linguagens |
| **Iteração**          | Sem risco de Stack Overflow        | Pode ser menos elegante               |

---

## 🎯 **Conclusão**

✔ **Recursão é poderosa**, mas requer cuidado com limites da pilha.
✔ **Prefira iteração** em casos de recursão muito profunda.
✔ **Use recursão de cauda** se a linguagem suportar otimização.

> **Dica:** Sempre teste recursões com entradas grandes para evitar surpresas! 🚀
