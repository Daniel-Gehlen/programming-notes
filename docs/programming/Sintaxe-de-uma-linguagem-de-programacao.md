# Sintaxe de uma linguagem de programação

## Níveis de Análise

1. **Léxico (Análise Lexical)**

   - Identifica e categoriza tokens básicos (palavras-chave, identificadores, operadores).
   - Exemplo (Python): `x = 42` → Tokens: `x`, `=`, `42`.

2. **Sintaxe (Análise Sintática)**

   - Organiza tokens em estruturas hierárquicas (gramática).
   - Exemplo: `x = 42` → Declaração de atribuição.

3. **Semântica**

   - Verifica significado e validade das estruturas.
   - Exemplo: Valida se `x` existe e se `42` é um valor válido.

4. **Geração de Código Intermediário**

   - Traduz para representação intermediária.
   - Exemplo: `x = 42` → `LOAD_CONST 42`, `STORE_NAME x`.

5. **Otimização de Código**

   - Melhora eficiência sem alterar funcionalidade.

6. **Geração de Código Final**

   - Converte para código de máquina/bytecode.

7. **Linkagem**
   - Combina módulos em um executável.

---

## Exemplo em Python

**Código:**

```python
x = 42
print(x)
```

**Fluxo:**

1. **Lexical**: Tokens: `x`, `=`, `42`, `print`, `(`, `x`, `)`.
2. **Sintática**: Árvore: `(Atribuição x 42)`, `(Chamada print x)`.
3. **Semântica**: Verifica tipos e declarações.
4. **Código Intermediário**:
   ```
   LOAD_CONST 42
   STORE_NAME x
   LOAD_NAME x
   CALL_FUNCTION print
   ```
5. **Execução**: Bytecode Python.

---

## Componentes de uma Linguagem

1. **Alfabeto**: Caracteres válidos (letras, dígitos, símbolos).
2. **Tokens**:
   - Palavras-chave (`if`, `while`).
   - Identificadores (`my_var`).
   - Operadores (`+`, `-`).
   - Literais (`42`, `"hello"`).
3. **Gramática (EBNF)**:
   ```
   <program> ::= { <statement> }
   <statement> ::= <assignment> | <if_statement> | ...
   ```
4. **Semântica**:
   - Estática (tipagem em tempo de compilação).
   - Dinâmica (erros em tempo de execução).
5. **Bibliotecas**: Funções pré-definidas (`math.sqrt`).
6. **Ambiente de Execução**:
   - Gerenciamento de memória.
   - Máquina virtual (ex: CPython).
7. **Ferramentas**: Compiladores, IDEs (PyCharm).

---

## Exemplo em C

**Componentes:**

1. **Caracteres**: `A-Z`, `0-9`, `+`, `-`, `{}`, etc.
2. **Tokens**:
   - Keywords: `int`, `return`.
   - Identificadores: `main`, `x`.
   - Operadores: `+`, `==`.
3. **Estruturas**:
   - Controle: `if`, `for`.
   - Funções: `int add(int a, int b) { ... }`.
4. **Preprocessador**: `#include`, `#define`.

**Código:**

```c
#include <stdio.h>
#define PI 3.14

int add(int a, int b) { return a + b; }

int main() {
    int x = 10;
    printf("Result: %d\n", add(x, 20));
    return 0;
}
```

**Interação com Memória:**

- **Stack**: Variáveis locais.
- **Heap**: Alocação dinâmica (`malloc`).
- **Data Segment**: Variáveis globais.

---

## Processo de Compilação

1. **Análise Léxica**: Gera tokens.
2. **Análise Sintática**: Constrói árvore sintática.
3. **Análise Semântica**: Verifica regras.
4. **Otimização**: Melhora código intermediário.
5. **Geração de Código**: Código de máquina.
6. **Linkagem**: Combina módulos.

**Fluxo:**
`Código-fonte → Tokens → Árvore Sintática → AST → Código Intermediário → Assembly → Executável`
