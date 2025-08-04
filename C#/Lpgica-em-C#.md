# Lógica em C#

## Conceitos Fundamentais

### 1. Lógica Proposicional

```csharp
// Operadores básicos
bool and = true && false;    // AND lógico → false
bool or = true || false;     // OR lógico → true
bool not = !true;            // NOT lógico → false

// Implicação (se-então)
bool a = true, b = false;
bool implication = !a || b;  // !true || false → false
```

### 2. Cálculo de Predicados

```csharp
// Predicado para números pares
bool IsEven(int num) => num % 2 == 0;

// Quantificadores (LINQ)
List<int> numbers = new() { 2, 4, 6 };
bool allEven = numbers.All(IsEven);  // true
bool anyOdd = numbers.Any(n => !IsEven(n));  // false
```

### 3. Lógica Binária

```csharp
// Operações bit-a-bit
byte x = 0b_1100;  // 12 em decimal
byte y = 0b_1010;   // 10 em decimal
byte andBits = (byte)(x & y);  // 0b_1000 (8)
```

## Aplicações Práticas

### Circuitos Digitais

```csharp
// Simulação de porta NAND
bool NAND(bool a, bool b) => !(a && b);
bool output = NAND(true, true);  // false
```

### Sistemas Especialistas (IA)

```csharp
var rules = new Dictionary<string, Func<bool>>
{
    ["Regra1"] = () => temperature > 38,
    ["Regra2"] = () => cough == true
};

bool diagnoseFever = rules["Regra1"]() && rules["Regra2"]();
```

## Exercícios de Lógica

### 1. Validação de Senha

```csharp
bool ValidatePassword(string pwd) =>
    pwd.Length >= 8 &&
    pwd.Any(char.IsUpper) &&
    pwd.Any(char.IsDigit);
```

### 2. Quebra-Cabeça Lógico

```csharp
// Problema dos mentirosos
bool joaoFalaVerdade = false;
bool pedroFalaVerdade = !joaoFalaVerdade;

string resposta = (joaoFalaVerdade == pedroFalaVerdade)
    ? "Contradição"
    : "Solução consistente";
```

## Tabelas Verdade

| A     | B     | A ∧ B | A ∨ B | A → B |
| ----- | ----- | ----- | ----- | ----- |
| true  | true  | true  | true  | true  |
| true  | false | false | true  | false |
| false | true  | false | true  | true  |
| false | false | false | false | true  |

## Referências Históricas

- **Álgebra Booleana** (George Boole, 1847)
- **Circuitos Lógicos** (Claude Shannon, 1937)
- **Lógica Fuzzy** (Lotfi Zadeh, 1965)

> _"A lógica é a anatomia do pensamento."_ > **— John Locke**

---

**Padrões de Projeto com Lógica**

```csharp
// Chain of Responsibility
public interface IHandler
{
    IHandler SetNext(IHandler handler);
    object Handle(object request);
}

// Uso:
var validator = new LengthValidator()
    .SetNext(new UppercaseValidator())
    .SetNext(new DigitValidator());
```
