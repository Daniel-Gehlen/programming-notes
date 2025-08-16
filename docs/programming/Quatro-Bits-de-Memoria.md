# Quatro Bits de Memória

## Desenhando 4 bits de memória

Vamos representar graficamente 4 bits de memória. Cada bit pode ser 0 ou 1:

```
Bit 0: | 0 |
Bit 1: | 1 |
Bit 2: | 0 |
Bit 3: | 1 |
```

Essa representação é de uma memória com 4 bits, onde cada bit é um "slot" que pode armazenar um valor binário (0 ou 1). No exemplo acima, os bits são: `0101`.

---

### Explicação

Memória de 4 bits pode armazenar 16 valores diferentes (2^4 = 16), que vão de `0000` a `1111` em binário, ou `0` a `15` em decimal.

---

## Exemplos Reais com Código

Aqui estão alguns exemplos de como programar e utilizar 4 bits de memória em diferentes linguagens de programação.

### Exemplo 1: Representação de Números Inteiros em C

Em C, podemos usar um `unsigned char` (que tem 8 bits) e operar apenas nos 4 bits menos significativos.

```c
#include <stdio.h>

int main() {
    unsigned char memory = 0x0F; // 00001111 em binário
    // Trabalhando apenas com os 4 bits menos significativos
    unsigned char mask = 0x0F; // 00001111 em binário
    // Definindo os primeiros 4 bits
    memory = (memory & mask) | 0x05; // 00000101 em binário
    printf("Valor armazenado nos 4 bits: %d\n", memory & mask);
    return 0;
}
```

### Exemplo 2: Operações com Bits em Python

Podemos usar operações bit a bit em Python para manipular diretamente 4 bits de dados.

```python
# Valor inicial em 4 bits
memory = 0b1010  # 10 em decimal

# Máscara para garantir que apenas 4 bits são considerados
mask = 0b1111  # 15 em decimal

# Função para definir um valor nos 4 bits
def set_bits(value):
    global memory
    memory = (memory & mask) | (value & mask)

# Definindo o valor 0101 nos 4 bits
set_bits(0b0101)

# Obtendo o valor armazenado
print(f"Valor armazenado nos 4 bits: {memory & mask:04b}")
```

### Exemplo 3: Controle de LEDs com Arduino

Usando uma placa Arduino, podemos controlar até 4 LEDs com 4 bits de memória.

```cpp
int leds[4] = {2, 3, 4, 5}; // Pinos digitais no Arduino

void setup() {
    for (int i = 0; i < 4; i++) {
        pinMode(leds[i], OUTPUT);
    }
}

void loop() {
    int value = 0b1010; // Valor em 4 bits
    for (int i = 0; i < 4; i++) {
        digitalWrite(leds[i], (value >> i) & 0x01);
    }
    delay(1000); // Espera 1 segundo
}
```

---

## O que é possível programar e gravar em 4 bits

- **Números Inteiros Pequenos**: Podemos armazenar números inteiros de 0 a 15.
- **Estado de Dispositivos**: Controlar até 4 dispositivos binários (ex: LEDs, relés).
- **Flags ou Sinais de Controle**: Armazenar estados de 4 sinalizadores (flags).
- **Pequenas Sequências de Dados**: Codificar pequenos conjuntos de dados, como resposta de múltipla escolha (A, B, C, D).

Em resumo, 4 bits de memória permitem armazenar e manipular pequenas quantidades de informações, adequadas para aplicações simples e dispositivos com requisitos mínimos de armazenamento.

_por Daniel Gehlen_

---

## Prefixos `0x` e `0b`

- `0x`: Esse prefixo indica que o número é representado em **hexadecimal** (base 16). Cada dígito hexadecimal pode representar valores de 0 a 15 (0 a F). Por exemplo, `0x0F` é 15 em decimal e `0b1111` em binário.
- `0b`: Esse prefixo indica que o número é representado em **binário** (base 2). Cada dígito binário pode ser 0 ou 1. Por exemplo, `0b1010` é 10 em decimal e `A` em hexadecimal.

---

## Máscara (`mask`)

Uma máscara é usada em operações bit a bit para selecionar, limpar ou alterar bits específicos em um valor binário. É um valor binário que, através de operações como AND (`&`), OR (`|`) e XOR (`^`), permite manipular bits individuais em um número.

Por exemplo, se `mask = 0x0F` (`00001111` em binário):

- **AND (`&`)**: Usando uma máscara com AND, podemos "limpar" (zerar) bits indesejados. Exemplo: `value & mask` mantém os 4 bits menos significativos e zera os outros.
- **OR (`|`)**: Usando uma máscara com OR, podemos "definir" bits específicos. Exemplo: `value | mask` define os 4 bits menos significativos para 1.

---

## `i` em laços (loops)

Nos exemplos de código, `i` é uma variável usada como índice em loops. Ela serve para iterar sobre uma sequência de valores. Por exemplo, no código do Arduino:

```cpp
for (int i = 0; i < 4; i++) {
    pinMode(leds[i], OUTPUT);
}
```

Aqui, `i` vai de 0 a 3, e `leds[i]` acessa os elementos da array `leds`.

---

## `F` em hexadecimal

Em hexadecimal, `F` representa o valor decimal 15. Hexadecimal usa 16 dígitos (0-9 e A-F), onde:

- `A` = 10
- `B` = 11
- `C` = 12
- `D` = 13
- `E` = 14
- `F` = 15

Por exemplo, `0xF` é 15 em decimal e `1111` em binário.

---

## Aplicações nos Exemplos

### Exemplo 1: Representação de Números Inteiros em C

```c
#include <stdio.h>

int main() {
    unsigned char memory = 0x0F; // 00001111 em binário (15 em decimal)
    // Trabalhando apenas com os 4 bits menos significativos
    unsigned char mask = 0x0F; // 00001111 em binário
    // Definindo os primeiros 4 bits
    memory = (memory & mask) | 0x05; // 00000101 em binário (5 em decimal)
    printf("Valor armazenado nos 4 bits: %d\n", memory & mask);
    return 0;
}
```

Neste código:

- `0x0F` é 15 em decimal, ou `00001111` em binário.
- `mask = 0x0F` permite isolar os 4 bits menos significativos.
- `(memory & mask)` mantém os 4 bits menos significativos de `memory`.
- `| 0x05` define os 4 bits menos significativos como `0101`.

### Exemplo 2: Operações com Bits em Python

```python
# Valor inicial em 4 bits
memory = 0b1010  # 10 em decimal

# Máscara para garantir que apenas 4 bits são considerados
mask = 0b1111  # 15 em decimal

# Função para definir um valor nos 4 bits
def set_bits(value):
    global memory
    memory = (memory & mask) | (value & mask)

# Definindo o valor 0101 nos 4 bits
set_bits(0b0101)

# Obtendo o valor armazenado
print(f"Valor armazenado nos 4 bits: {memory & mask:04b}")
```

Neste código:

- `0b1010` é 10 em decimal.
- `mask = 0b1111` garante que operamos apenas nos 4 bits menos significativos.
- `set_bits(0b0101)` define os 4 bits como `0101`.

### Exemplo 3: Controle de LEDs com Arduino

```cpp
int leds[4] = {2, 3, 4, 5}; // Pinos digitais no Arduino

void setup() {
    for (int i = 0; i < 4; i++) {
        pinMode(leds[i], OUTPUT);
    }
}

void loop() {
    int value = 0b1010; // Valor em 4 bits (10 em decimal)
    for (int i = 0; i < 4; i++) {
        digitalWrite(leds[i], (value >> i) & 0x01);
    }
    delay(1000); // Espera 1 segundo
}
```

Neste código:

- `0b1010` é 10 em decimal.
- `for (int i = 0; i < 4; i++)` itera sobre os 4 pinos dos LEDs.
- `(value >> i) & 0x01` isola o i-ésimo bit de `value`.

Esses conceitos ajudam a manipular bits de maneira eficiente e são fundamentais para a programação de baixo nível e o controle de hardware.

---

## i-ésimo bit de `value` e o sinal `>>`

### i-ésimo Bit de `value`

O "i-ésimo bit" de um valor binário refere-se ao bit localizado na posição `i` do número. Em binário, os bits são indexados da direita para a esquerda, começando com 0. Por exemplo, no número binário `1010`:

- Bit 0 (menos significativo) é `0`
- Bit 1 é `1`
- Bit 2 é `0`
- Bit 3 (mais significativo) é `1`

Para acessar o "i-ésimo bit" de um número, podemos usar operadores de deslocamento e operadores bit a bit.

### Operador de Deslocamento à Direita (`>>`)

O operador de deslocamento à direita (`>>`) desloca todos os bits de um número para a direita por um número especificado de posições. Cada deslocamento à direita equivale a dividir o número por 2, descartando os bits menos significativos. Por exemplo:

- `1010 >> 1` = `0101` (10 decimal >> 1 = 5 decimal)
- `1010 >> 2` = `0010` (10 decimal >> 2 = 2 decimal)

Quando deslocamos um número `n` posições para a direita, o bit que estava na posição `i` original vai para a posição `i-n`.

### Acessando o i-ésimo Bit

Para acessar o i-ésimo bit, podemos deslocar o bit para a posição menos significativa e então usar uma máscara para isolá-lo. O processo é assim:

1. Deslocamos o número `i` posições para a direita: `value >> i`.
2. Usamos a máscara `0x01` (ou `0b0001`) para isolar o bit menos significativo.

### Exemplo

Vamos ilustrar com um exemplo concreto, usando o número `1010` (10 em decimal):

```cpp
int value = 0b1010; // 10 em decimal
int i = 2;

// Desloca value 2 bits para a direita
int shifted_value = value >> i; // 1010 >> 2 = 0010 (2 em decimal)

// Isola o bit menos significativo
int bit_i = shifted_value & 0x01; // 0010 & 0001 = 0

// bit_i agora contém o valor do bit na posição 2 de value
```

Aqui:

- `value >> i` resulta em `0010`, que é `2` em decimal.
- `shifted_value & 0x01` resulta em `0`, pois o bit menos significativo de `0010` é `0`.

### Aplicação no Controle de LEDs com Arduino

```cpp
int leds[4] = {2, 3, 4, 5}; // Pinos digitais no Arduino

void setup() {
    for (int i = 0; i < 4; i++) {
        pinMode(leds[i], OUTPUT);
    }
}

void loop() {
    int value = 0b1010; // Valor em 4 bits (10 em decimal)
    for (int i = 0; i < 4; i++) {
        // Desloca value i bits para a direita e isola o bit menos significativo
        digitalWrite(leds[i], (value >> i) & 0x01);
    }
    delay(1000); // Espera 1 segundo
}
```

Neste código:

- `value = 0b1010` (10 em decimal).
- O loop `for (int i = 0; i < 4; i++)` itera sobre os 4 bits.
- `(value >> i) & 0x01` desloca `value` para a direita `i` posições e isola o bit menos significativo.

Para cada iteração do loop:

- `i=0`: `(value >> 0) & 0x01` => `1010 & 0001` => `0`
- `i=1`: `(value >> 1) & 0x01` => `0101 & 0001` => `1`
- `i=2`: `(value >> 2) & 0x01` => `0010 & 0001` => `0`
- `i=3`: `(value >> 3) & 0x01` => `0001 & 0001` => `1`

Os bits `0`, `1`, `0`, `1` são escritos nos pinos 2, 3, 4, 5 do Arduino, controlando os LEDs correspondentes.

### Resumo

- O operador `>>` desloca bits à direita.
- O "i-ésimo bit" é acessado deslocando o número `i` posições e isolando o bit menos significativo com uma máscara `0x01`.
- Isso é útil para manipular bits individuais em várias aplicações, como controle de hardware e otimização de memória.
