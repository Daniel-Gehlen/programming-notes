### **Duff's Device**

**Definição:**
Técnica de otimização em C que combina `switch` e `do-while` para implementar _loop unrolling_, reduzindo a sobrecarga de loops com muitas iterações.

---

### **1. Como Funciona**

- **Loop Unrolling:** Reduz instruções de controle (incremento/condição) executando múltiplas operações por iteração.
- **Uso Peculiar do `switch`:** Permite que o fluxo "caia" (`fall-through`) entre os `case`s, continuando a execução sem `break`.

---

### **2. Exemplo Prático**

#### **Código Sem Duff's Device**

```c
void normal_loop(const short *from, short *to, int count) {
    for (int i = 0; i < count; i++) {
        *to++ = *from++;  // 1 cópia por iteração
    }
}
```

**Problema:** Alto custo por iteração (checagem de condição e incremento).

#### **Código Com Duff's Device**

```c
void duff_device(const short *from, short *to, int count) {
    int n = (count + 7) / 8;  // Agrupa em blocos de 8
    switch (count % 8) {       // Trata iterações residuais
        case 0: do { *to++ = *from++;
        case 7:      *to++ = *from++;
        case 6:      *to++ = *from++;
        case 5:      *to++ = *from++;
        case 4:      *to++ = *from++;
        case 3:      *to++ = *from++;
        case 2:      *to++ = *from++;
        case 1:      *to++ = *from++;
                } while (--n > 0);
    }
}
```

**Vantagens:**

- 8 cópias por iteração do `do-while` (menos overhead).
- `switch` trata iterações residuais (ex.: se `count = 10`, executa 2 cópias no `switch` + 1 bloco de 8).

---

### **3. Explicação Detalhada**

1. **Cálculo de Blocos:**

   - `n = (count + 7) / 8`: Número de blocos completos de 8 iterações.
   - `count % 8`: Itens restantes para cópia inicial (0 a 7).

2. **Fluxo de Execução:**
   - O `switch` inicia no `case` correspondente ao resto (`count % 8`).
   - O `do-while` executa os blocos de 8 cópias sequenciais (sem voltar ao `switch`).

---

### **4. Template Genérico**

```c
void duff_device_template(const TYPE *from, TYPE *to, int count) {
    int n = (count + UNROLL_FACTOR - 1) / UNROLL_FACTOR;
    switch (count % UNROLL_FACTOR) {
        case 0: do { *to++ = *from++;
        case UNROLL_FACTOR-1: *to++ = *from++;
        // ... outros cases ...
        case 1: *to++ = *from++;
                } while (--n > 0);
    }
}
```

**Personalização:**

- `TYPE`: Tipo de dados (ex.: `int`, `char`).
- `UNROLL_FACTOR`: Número de desdobramentos (típico: 4, 8, 16).

---

### **5. Considerações**

- **Uso Moderno:** Menos relevante devido a otimizações automáticas de compiladores.
- **Legibilidade vs. Performance:** Pode comprometer a clareza do código.
- **Aplicações:** Originalmente para cópia de buffers em sistemas embarcados.

---

**Exemplo de Saída:**
Para `count = 10`:

1. `switch` inicia no `case 2` (10 % 8 = 2), copia 2 elementos.
2. `do-while` executa 1 bloco de 8 cópias (total: 10 itens).

**Nota:** Criado por Tom Duff na Lucasfilm (1983).
