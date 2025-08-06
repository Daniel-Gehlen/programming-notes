# Passagem de parâmetros para funções

Em C, a passagem de parâmetros para funções pode ser feita de duas maneiras principais: passagem por valor e passagem por referência. Vamos explorar ambos os conceitos com exemplos de código.

## Passagem por Valor

Na passagem por valor, uma cópia do valor do argumento é passada para a função. Modificações feitas ao parâmetro dentro da função não afetam o argumento original.

### Exemplo

```c
#include <stdio.h>

// Função que demonstra a passagem por valor
void incrementByValue(int num) {
    num = num + 1;
    printf("Dentro da função incrementByValue: %d\n", num);
}

int main() {
    int a = 5;
    printf("Antes de chamar incrementByValue: %d\n", a);
    incrementByValue(a);
    printf("Depois de chamar incrementByValue: %d\n", a);
    return 0;
}
```

**Saída:**

```
Antes de chamar incrementByValue: 5
Dentro da função incrementByValue: 6
Depois de chamar incrementByValue: 5
```

Neste exemplo, a função `incrementByValue` recebe uma cópia do valor de `a`. Modificar `num` dentro da função não afeta o valor original de `a`.

---

## Passagem por Referência

Na passagem por referência, um ponteiro para o argumento é passado para a função. Isso permite que a função modifique diretamente o valor original.

### Exemplo

```c
#include <stdio.h>

// Função que demonstra a passagem por referência
void incrementByReference(int *num) {
    *num = *num + 1;
    printf("Dentro da função incrementByReference: %d\n", *num);
}

int main() {
    int a = 5;
    printf("Antes de chamar incrementByReference: %d\n", a);
    incrementByReference(&a);
    printf("Depois de chamar incrementByReference: %d\n", a);
    return 0;
}
```

**Saída:**

```
Antes de chamar incrementByReference: 5
Dentro da função incrementByReference: 6
Depois de chamar incrementByReference: 6
```

Neste exemplo, a função `incrementByReference` recebe um ponteiro para `a`. Usando o operador de desreferência `*`, a função pode modificar diretamente o valor de `a`.

---

## Resumo dos Conceitos

### Passagem por Valor:

- Uma cópia do valor do argumento é passada para a função.
- Modificações no parâmetro dentro da função não afetam o argumento original.
- Usado quando as modificações no parâmetro não precisam refletir no argumento original.

### Passagem por Referência:

- Um ponteiro para o argumento é passado para a função.
- Modificações no parâmetro dentro da função afetam diretamente o argumento original.
- Usado quando as modificações no parâmetro precisam refletir no argumento original ou quando é necessário manipular grandes estruturas de dados eficientemente.

---

## Exemplos Adicionais

### Passagem por Valor com Estruturas

```c
#include <stdio.h>

typedef struct {
    int x;
    int y;
} Point;

void movePointByValue(Point p) {
    p.x += 10;
    p.y += 10;
    printf("Dentro da função movePointByValue: (%d, %d)\n", p.x, p.y);
}

int main() {
    Point pt = {1, 2};
    printf("Antes de chamar movePointByValue: (%d, %d)\n", pt.x, pt.y);
    movePointByValue(pt);
    printf("Depois de chamar movePointByValue: (%d, %d)\n", pt.x, pt.y);
    return 0;
}
```

### Passagem por Referência com Estruturas

```c
#include <stdio.h>

typedef struct {
    int x;
    int y;
} Point;

void movePointByReference(Point *p) {
    p->x += 10;
    p->y += 10;
    printf("Dentro da função movePointByReference: (%d, %d)\n", p->x, p->y);
}

int main() {
    Point pt = {1, 2};
    printf("Antes de chamar movePointByReference: (%d, %d)\n", pt.x, pt.y);
    movePointByReference(&pt);
    printf("Depois de chamar movePointByReference: (%d, %d)\n", pt.x, pt.y);
    return 0;
}
```

Esses exemplos mostram como a passagem por valor e por referência pode ser usada para manipular dados em funções, tanto para tipos primitivos quanto para estruturas.

---

## Como os endereços na memória são manipulados

Vamos detalhar como os endereços na memória são manipulados em cada caso, tanto na passagem por valor quanto na passagem por referência, com exemplos de código. Vamos adicionar alguns `printf` para mostrar os endereços na memória.

### Passagem por Valor

Na passagem por valor, uma cópia do valor do argumento é passada para a função. Assim, o endereço do parâmetro na função é diferente do endereço do argumento original.

#### Exemplo com Endereços

```c
#include <stdio.h>

// Função que demonstra a passagem por valor
void incrementByValue(int num) {
    printf("Endereço de num em incrementByValue: %p\n", (void*)&num);
    num = num + 1;
    printf("Dentro da função incrementByValue: %d\n", num);
}

int main() {
    int a = 5;
    printf("Endereço de a em main: %p\n", (void*)&a);
    printf("Antes de chamar incrementByValue: %d\n", a);
    incrementByValue(a);
    printf("Depois de chamar incrementByValue: %d\n", a);
    return 0;
}
```

**Saída esperada (endereços fictícios para fins de ilustração):**

```
Endereço de a em main: 0x7ffed5c2b894
Antes de chamar incrementByValue: 5
Endereço de num em incrementByValue: 0x7ffed5c2b874
Dentro da função incrementByValue: 6
Depois de chamar incrementByValue: 5
```

### Passagem por Referência

Na passagem por referência, um ponteiro para o argumento é passado para a função. Assim, o endereço do ponteiro na função é o mesmo do argumento original.

#### Exemplo com Endereços

```c
#include <stdio.h>

// Função que demonstra a passagem por referência
void incrementByReference(int *num) {
    printf("Endereço de num em incrementByReference: %p\n", (void*)&num);
    printf("Valor do ponteiro num (endereço de a): %p\n", (void*)num);
    *num = *num + 1;
    printf("Dentro da função incrementByReference: %d\n", *num);
}

int main() {
    int a = 5;
    printf("Endereço de a em main: %p\n", (void*)&a);
    printf("Antes de chamar incrementByReference: %d\n", a);
    incrementByReference(&a);
    printf("Depois de chamar incrementByReference: %d\n", a);
    return 0;
}
```

**Saída esperada (endereços fictícios para fins de ilustração):**

```
Endereço de a em main: 0x7ffed5c2b894
Antes de chamar incrementByReference: 5
Endereço de num em incrementByReference: 0x7ffed5c2b874
Valor do ponteiro num (endereço de a): 0x7ffed5c2b894
Dentro da função incrementByReference: 6
Depois de chamar incrementByReference: 6
```

### Explicação dos Endereços

#### Passagem por Valor:

- O valor do argumento `a` é copiado para o parâmetro `num` na função `incrementByValue`.
- O endereço de `a` em `main` é diferente do endereço de `num` em `incrementByValue`, pois `num` é uma cópia localizada em uma área de memória diferente.

#### Passagem por Referência:

- O endereço do argumento `a` é passado para o parâmetro `num` na função `incrementByReference`.
- O endereço do ponteiro `num` em `incrementByReference` é diferente do endereço de `a` em `main`, mas o valor de `num` (que é o endereço de `a`) é o mesmo.
- Usando o ponteiro `num`, a função `incrementByReference` pode modificar diretamente o valor de `a`.

### Visualização na Memória

Para ajudar a visualizar, considere a seguinte representação simplificada da memória:

#### Passagem por Valor

```
main:                    incrementByValue:
[a: 5]       ------>     [num: 5]
0x7ffed5c2b894           0x7ffed5c2b874
```

#### Passagem por Referência

```
main:                    incrementByReference:
[a: 5]       ------>     [*num: 5 (points to 0x7ffed5c2b894)]
0x7ffed5c2b894           0x7ffed5c2b874 (num itself has a different address)
```

Esses exemplos mostram como os endereços na memória são gerenciados e como a passagem por valor e por referência diferem na forma como os dados são acessados e modificados.
