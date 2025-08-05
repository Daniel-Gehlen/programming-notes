# 📚 **Sub-rotinas em Programação: Exemplos Práticos**

## 📌 **O que são Sub-rotinas?**

Blocos de código reutilizáveis que executam tarefas específicas. Conhecidas como:

- Funções (Python, JavaScript)
- Métodos (Java)
- Procedimentos (Pascal)
- Funções SQL (Banco de Dados)

---

## 🎯 **Benefícios**

- ♻️ **Reutilização de código**
- 🧩 **Modularidade**
- 🔧 **Facilidade de manutenção**
- 📊 **Organização lógica**

---

## 🌐 **Exemplos Multilinguagem**

### 🐍 **Python**

```python
def calcular_soma(a, b):
    return a + b

resultado = calcular_soma(5, 3)
print(resultado)  # Saída: 8
```

### ☕ **Java**

```java
public class Main {
    public static void main(String[] args) {
        int resultado = calcularSoma(5, 3);
        System.out.println(resultado);  // Saída: 8
    }

    public static int calcularSoma(int a, int b) {
        return a + b;
    }
}
```

### 🌐 **JavaScript**

```javascript
function calcularSoma(a, b) {
  return a + b;
}

let resultado = calcularSoma(5, 3);
console.log(resultado); // Saída: 8
```

### 🔵 **C**

```c
#include <stdio.h>

int calcularSoma(int a, int b) {
    return a + b;
}

int main() {
    int resultado = calcularSoma(5, 3);
    printf("%d\n", resultado);  // Saída: 8
    return 0;
}
```

### 🗃️ **SQL**

```sql
CREATE FUNCTION calcular_soma(a INT, b INT)
RETURNS INT
BEGIN
    RETURN a + b;
END;

SELECT calcular_soma(5, 3);  -- Saída: 8
```

---

## 🛠️ **Aplicações Comuns**

1. **Cálculos matemáticos**
2. **Validação de dados**
3. **Operações de E/S**
4. **Manipulação de strings**
5. **Consultas complexas em bancos de dados**

---

## 🔍 **Comparativo entre Linguagens**

| Linguagem  | Sintaxe de Declaração      | Chamada            |
| ---------- | -------------------------- | ------------------ |
| Python     | `def nome_função():`       | `nome_função()`    |
| Java       | `tipo nomeMétodo() {}`     | `nomeMétodo()`     |
| JavaScript | `function nomeFunção() {}` | `nomeFunção()`     |
| C          | `tipo nome_função() {}`    | `nome_função()`    |
| SQL        | `CREATE FUNCTION...`       | `SELECT função();` |

---

## 💡 **Boas Práticas**

1. **Nomes descritivos** (`calcularMedia()` vs `func1()`)
2. **Princípio da responsabilidade única**
3. **Documentação com docstrings/comentários**
4. **Controle de escopo de variáveis**
5. **Tratamento de erros**

---

## 🚀 **Exemplo Avançado (Python)**

```python
def calcular_imc(peso, altura):
    """
    Calcula o Índice de Massa Corporal (IMC)
    Args:
        peso: float - peso em kg
        altura: float - altura em metros
    Returns:
        float - valor do IMC
    """
    if altura <= 0:
        raise ValueError("Altura deve ser positiva")
    return peso / (altura ** 2)

try:
    imc = calcular_imc(70, 1.75)
    print(f"Seu IMC é: {imc:.2f}")
except ValueError as e:
    print(f"Erro: {e}")
```

---

## 📊 **Quando Usar Sub-rotinas?**

✔ Código repetitivo
✔ Tarefas complexas
✔ Operações frequentes
✔ Isolamento de responsabilidades

---

## 🎯 **Conclusão**

Sub-rotinas são pilares fundamentais da programação que:

- Promovem **código limpo** e **organizado**
- Facilitam **testes unitários**
- Permitem **abstração** de problemas complexos
- São **universais** em todas as linguagens modernas

> **Dica:** Comece identificando trechos repetidos no seu código para transformá-los em sub-rotinas! 🔄
