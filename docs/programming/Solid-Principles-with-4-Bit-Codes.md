# Princípios SOLID com Códigos de 4 Bits

## 1. Princípio da Responsabilidade Única (SRP)

**Definição**:
Uma classe deve ter apenas **um motivo para mudar** (uma única responsabilidade).

**Exemplo Prático**:

```python
class ManipuladorBits:
    def __init__(self, codigo: int):
        self.codigo = codigo  # 4 bits (0-15)

    def inverter_bits(self) -> int:
        """Inverte todos os bits (NOT lógico)"""
        return ~self.codigo & 0b1111

    def para_string(self) -> str:
        """Converte para string binária (4 bits)"""
        return format(self.codigo, '04b')
```

**Diagrama**:

```
+---------------------+
|   ManipuladorBits   |
+---------------------+
| - codigo: int       |
+---------------------+
| + inverter_bits()   |
| + para_string()     |
+---------------------+
```

**Benefício**:

- Fácil manutenção
- Baixo acoplamento

---

## 2. Princípio Aberto/Fechado (OCP)

**Definição**:
Entidades devem estar **abertas para extensão**, mas **fechadas para modificação**.

**Exemplo**:

```python
class ManipuladorBitsAvancado(ManipuladorBits):
    def deslocar_esquerda(self) -> int:
        """Desloca bits para esquerda (<<)"""
        return (self.codigo << 1) & 0b1111

    def deslocar_direita(self) -> int:
        """Desloca bits para direita (>>)"""
        return self.codigo >> 1
```

**Diagrama**:

```
+---------------------+       +---------------------------+
|   ManipuladorBits   |       | ManipuladorBitsAvancado   |
+---------------------+       +---------------------------+
| - codigo: int       |------>| - codigo: int             |
+---------------------+       +---------------------------+
| + inverter_bits()   |       | + inverter_bits()         |
| + para_string()     |       | + para_string()           |
+---------------------+       | + deslocar_esquerda()     |
                              | + deslocar_direita()      |
                              +---------------------------+
```

**Cenário**:
Adicionamos novos comportamentos **sem alterar** a classe original.

---

## 3. Princípio da Substituição de Liskov (LSP)

**Definição**:
Subclasses devem ser **substituíveis** por suas classes base.

**Teste**:

```python
def processar_bits(manipulador: ManipuladorBits) -> int:
    return manipulador.inverter_bits()

# Funciona com ambas as classes
print(processar_bits(ManipuladorBits(0b1010)))        # 0b0101
print(processar_bits(ManipuladorBitsAvancado(0b1010))) # 0b0101
```

**Regra**:
Se funciona com a classe base, **deve funcionar** com a subclasse.

---

## 4. Princípio da Segregação de Interfaces (ISP)

**Definição**:
Clientes não devem depender de interfaces que **não usam**.

**Implementação**:

```python
from abc import ABC, abstractmethod

class Inversor(ABC):
    @abstractmethod
    def inverter_bits(self) -> int:
        pass

class Conversor(ABC):
    @abstractmethod
    def para_string(self) -> str:
        pass

class MeuManipulador(Inversor, Conversor):
    # Implementação concreta
    def inverter_bits(self) -> int:
        return ~self.codigo & 0b1111

    def para_string(self) -> str:
        return format(self.codigo, '04b')
```

**Diagrama**:

```
+-------------+       +-------------+
|  Inversor   |       | Conversor   |
+-------------+       +-------------+
| + inverter()|       | + para_str()|
+-----+-------+       +-----+-------+
      ^                     ^
      |                     |
      +----------+----------+
                 |
        +-------------------+
        |   MeuManipulador   |
        +-------------------+
        | + inverter()       |
        | + para_str()       |
        +-------------------+
```

**Vantagem**:
Evita interfaces **"inchadas"**.

---

## 5. Princípio da Inversão de Dependência (DIP)

**Definição**:
Dependa de **abstrações**, não de implementações concretas.

**Implementação**:

```python
class InversorBits:
    def inverter(self, codigo: int) -> int:
        return ~codigo & 0b1111

class Manipulador:
    def __init__(self, inversor: InversorBits, codigo: int):
        self.inversor = inversor
        self.codigo = codigo

    def inverter(self) -> int:
        return self.inversor.inverter(self.codigo)
```

**Diagrama**:

```
+----------------+       +-----------------+
|  InversorBits  |<------|   Manipulador   |
+----------------+       +-----------------+
| + inverter()   |       | - inversor      |
+----------------+       | - codigo        |
                         +-----------------+
                         | + inverter()    |
                         +-----------------+
```

**Benefício**:

- Fácil substituição de implementações
- Testabilidade melhorada

---

## Resumo SOLID com 4 Bits

| Princípio                | Sigla | Conceito-Chave         | Exemplo 4 Bits                       |
| ------------------------ | ----- | ---------------------- | ------------------------------------ |
| Responsabilidade Única   | SRP   | Uma classe, uma função | `ManipuladorBits` só opera bits      |
| Aberto/Fechado           | OCP   | Estenda sem modificar  | Herança em `ManipuladorBitsAvancado` |
| Liskov                   | LSP   | Substituição segura    | Subclasse mantém comportamento       |
| Segregação de Interfaces | ISP   | Interfaces mínimas     | `Inversor` e `Conversor` separados   |
| Inversão de Dependência  | DIP   | Dependa de abstrações  | Injeção de `InversorBits`            |

**Aplicação Prática**:

1. Comece com SRP para classes coesas
2. Use OCP para adicionar features
3. Verifique LSP ao herdar
4. Aplique ISP para interfaces limpas
5. Implemente DIP para baixo acoplamento

_"SOLID não é meta, é base: código que evolui sem traumas."_
