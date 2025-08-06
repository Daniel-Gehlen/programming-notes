### **Half Adder (Meio Somador)**

#### **1. Definição e Propósito**

Um half adder, ou meio somador, é um circuito lógico básico usado em eletrônica digital para somar dois bits de entrada. Ele produz a soma desses dois bits e o bit de transporte (ou carry), que é usado para representar a transferência de um bit para a próxima posição mais significativa em uma operação de soma binária.

#### **2. Funcionamento**

Um half adder tem duas entradas, **A** e **B**, representando os bits que desejamos somar, e produz duas saídas:

- **Soma (S):** Resultado da operação XOR (ou exclusivo) entre A e B.
- **Carry (Cout):** Resultado da operação AND (E) entre A e B.

#### **1. Diagrama do Circuito**

```
          _______
A ------>|       |
         |  XOR  |-----> S (Soma)
B ------>|_______|

          _______
A ------>|       |
         |  AND  |-----> Cout (Carry)
B ------>|_______|
```

#### **2. Definição e Propósito**

Circuito lógico básico para somar dois bits binários (A e B), produzindo:

- **S (Soma):** Resultado direto (XOR)
- **Cout (Carry):** "Vai-um" (AND)

#### **3. Tabela Verdade Detalhada**

| A   | B   |     | S   | Cout |
| --- | --- | --- | --- | ---- |
| 0   | 0   |     | 0   | 0    |
| 0   | 1   |     | 1   | 0    |
| 1   | 0   |     | 1   | 0    |
| 1   | 1   |     | 0   | 1    |

#### **4. Implementação em Python**

```python
def half_adder(A, B):
    S = A ^ B  # Porta XOR
    Cout = A & B  # Porta AND
    return S, Cout
```

---

### **Full Adder (Somador Completo)**

#### **1. Definição e Diferença**

Um full adder, ou somador completo, é um circuito lógico mais complexo que pode somar três bits de entrada: dois bits de dados (**A** e **B**) e um carry de entrada (**Cin**) vindo de somas anteriores.

#### **2. Funcionamento**

- **Soma (S):** Calculada usando uma operação XOR entre A, B e Cin.
  - `S = A XOR B XOR Cin`
- **Carry (Cout):** Calculado usando uma combinação de portas AND e OR.
  - `Cout = (A AND B) OR (B AND Cin) OR (A AND Cin)`

#### **1. Diagrama do Circuito**

```
          _______          _______
A ------>|       |        |       |
         |  XOR  |------->|  XOR  |-----> S
B ------>|_______|        |_______|
                     |
          _______     |     _______
Cin----->|       |    |    |       |
         |  XOR  |----     |  AND  |----\
A ------>|_______|         |_______|     \
                                           ) OR ----> Cout
          _______          _______       /
B ------>|       |        |       |     /
         |  AND  |------->|  AND  |----/
Cin----->|_______|        |_______|
```

#### **3. Tabela Verdade Completa**

| A   | B   | Cin |     | S   | Cout |
| --- | --- | --- | --- | --- | ---- |
| 0   | 0   | 0   |     | 0   | 0    |
| 0   | 0   | 1   |     | 1   | 0    |
| 0   | 1   | 0   |     | 1   | 0    |
| 0   | 1   | 1   |     | 0   | 1    |
| 1   | 0   | 0   |     | 1   | 0    |
| 1   | 0   | 1   |     | 0   | 1    |
| 1   | 1   | 0   |     | 0   | 1    |
| 1   | 1   | 1   |     | 1   | 1    |

#### **4. Implementação em Python**

```python
def full_adder(A, B, Cin):
    S = A ^ B ^ Cin
    Cout = (A & B) | (B & Cin) | (A & Cin)
    return S, Cout
```

---

### **Comparação Técnica**

| **Componente** | **Portas Lógicas** | **Entradas** | **Saídas** |
| -------------- | ------------------ | ------------ | ---------- |
| **Half Adder** | 1 XOR, 1 AND       | A, B         | S, Cout    |
| **Full Adder** | 2 XOR, 3 AND, 1 OR | A, B, Cin    | S, Cout    |

---

### **Aplicações Práticas**

#### **1. Half Adder**

- **Contadores Binários:**

```
Bit 0: [Half Adder]---> S0
                      Cout---\
Bit 1: [Half Adder]-----> S1 |
           ^_______________/
```

#### **2. Full Adder**

- **Somador de 4 bits:**

```
Bit 0: [Half Adder]--S0--> Saída
                    Cout---\
Bit 1: [Full Adder]--S1--> Saída
                    Cout---\
... (repetir para Bits 2 e 3)
```

---

### **Exemplo Integrado em Python**

```python
# Somador de 2 bits usando ambos circuitos
def two_bit_adder(A1, A0, B1, B0):
    S0, C0 = half_adder(A0, B0)  # Bit menos significativo
    S1, C1 = full_adder(A1, B1, C0)  # Bit mais significativo
    return (C1, S1, S0)  # Resultado: C1 S1 S0

# Teste: 10 (2) + 11 (3) = 101 (5)
print(two_bit_adder(1, 0, 1, 1))  # Saída: (1, 0, 1)
```

---

### **Diagramas de Portas Lógicas em ASCII**

#### **Half Adder Detalhado**

```
  A ----\
         ) XOR --- S
  B ----/

  A ----\
         ) AND --- Cout
  B ----/
```

#### **Full Adder Detalhado**

```
  A ----\
         ) XOR --\
  B ----/        ) XOR --- S
  Cin -----------/

  A ----\
         ) AND --\
  B ----/        \
  B ----\         ) OR --- Cout
         ) AND --/        /
  Cin ----/              /
  A ----\               /
         ) AND --------/
  Cin ----/
```

---

**Nota Final:**
Os diagramas ASCII representam simplificações. O arquivo original contém representações gráficas profissionais das portas lógicas e fluxos de sinal, incluindo:

- Símbolos padrão de portas XOR/AND/OR
- Setas indicando direção do fluxo de dados
- Anotações de tempos de propagação em implementações físicas
