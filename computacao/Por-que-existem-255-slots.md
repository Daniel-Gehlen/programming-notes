# 📁 Por que existem 255 slots?

## 🐍 **Slots em Python**

**Definição:**
Os "slots" referem-se ao espaço de armazenamento reservado dentro de uma classe para **atributos de dados**. Eles são usados para armazenar os **atributos de instância** de um objeto.

🔢 **Por que 255?**
O número padrão de slots é **255** devido a uma **otimização de memória**:

- Internamente, os slots são armazenados em uma **matriz (vetor)** dentro da classe.
- Limitar a **255 slots** permite usar uma **representação em bytes** em vez de uma matriz de referências de objeto.
  ✅ **Vantagens:**
- **Economia de memória**
- **Maior eficiência**

✍️ **Autor:** Daniel Gehlen

---

## 💻 **Exemplo de Aplicação**

Considere uma classe simples em Python para representar um **ponto no plano cartesiano**:

```python
class Point:
    __slots__ = ['x', 'y']  # Define os atributos permitidos

    def __init__(self, x, y):
        self.x = x
        self.y = y
```

### 📌 **Como funciona?**

- `__slots__` restringe a classe `Point` a ter **apenas** os atributos `x` e `y`.
- Qualquer tentativa de criar outro atributo **gerará um erro**.

### 🚀 **Exemplo de uso:**

```python
p1 = Point(1, 2)
p2 = Point(3, 4)

print(p1.x, p1.y)  # Saída: 1 2
print(p2.x, p2.y)  # Saída: 3 4
```

---

## ✅ **Vantagens de Usar Slots**

| 🔹 **Vantagem**            | 📝 **Descrição**                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| **💾 Economia de Memória** | Reduz o consumo de memória, pois evita a criação de um dicionário dinâmico de atributos. |
| **⚡ Melhor Desempenho**   | Acesso mais rápido aos atributos, sem necessidade de buscar em um dicionário.            |
| **🔒 Mais Segurança**      | Impede a criação acidental de novos atributos não previstos na classe.                   |

---

## 🚀 **Quando Usar Slots?**

✔ **Muitas instâncias da mesma classe** → Redução significativa de memória.
✔ **Evitar atributos dinâmicos** → Garantir que apenas os atributos definidos sejam usados.
✔ **Otimização de desempenho** → Acesso mais rápido a atributos em cenários críticos.

---

## 🎯 **Conclusão**

Os **slots** são uma ferramenta poderosa para:

- **Otimizar memória** em classes com muitas instâncias.
- **Melhorar desempenho** em acesso a atributos.
- **Aumentar segurança** ao restringir atributos dinâmicos.

🔹 **Use slots quando:**

- Precisar de **alta eficiência** em memória e velocidade.
- Quiser **controle rígido** sobre os atributos de uma classe.

📌 **Lembre-se:** Slots são ótimos para otimização, mas não são necessários em todos os casos!
