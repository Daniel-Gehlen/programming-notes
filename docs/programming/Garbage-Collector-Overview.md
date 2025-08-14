# Garbage Collector Overview

O garbage collector (GC) é um componente essencial na gestão de memória em linguagens de programação modernas, como Java, C#, Python e muitas outras. Sua função principal é automatizar o processo de gerenciamento da memória alocada dinamicamente, liberando o programador da necessidade de liberar manualmente a memória não mais utilizada.

## O que é o Garbage Collector?

O garbage collector é um sistema que monitora a alocação e desalocação de memória em um programa. Quando objetos ou dados não são mais necessários, o GC recupera essa memória, evitando vazamentos de memória e melhorando a eficiência do uso da memória.

## Como Funciona o Garbage Collector?

1. **Alocação de Memória**: Quando um objeto é criado, o sistema aloca um bloco de memória para ele.
2. **Identificação de Objetos Inúteis**: O GC identifica quais objetos não são mais acessíveis ou referenciados pelo programa, tornando-os "lixo" (garbage).
3. **Recuperação de Memória**: O GC recupera a memória ocupada por esses objetos não referenciados para que possa ser reutilizada pelo programa.

## Métodos de Coleta de Lixo

### Contagem de Referências

- **Descrição**: Cada objeto mantém uma contagem de quantas referências apontam para ele. Quando a contagem chega a zero, o objeto pode ser coletado.
- **Limitação**: Não lida bem com ciclos de referência.

### Mark-and-Sweep

- **Descrição**: O GC pausa a execução do programa e marca todos os objetos que são alcançáveis a partir das raízes do programa. Em seguida, varre (libera) os objetos não marcados.
- **Vantagem**: Simples e eficaz.
- **Desvantagem**: Pode causar pausas na execução do programa (stop-the-world).

### Geracional

- **Descrição**: Objetos são divididos em gerações (jovem, madura, velha) com base na idade. Objetos jovens são coletados com mais frequência.
- **Vantagem**: Mais eficiente, reduzindo pausas longas.

### Copying

- **Descrição**: A memória é dividida em duas regiões. Objetos vivos são copiados de uma região para outra, compactando a memória.
- **Vantagem**: Compactação da memória.
- **Desvantagem**: Requer espaço adicional.

## Vantagens do Garbage Collector

- **Automatização**: Reduz a carga cognitiva do programador.
- **Segurança**: Previne vazamentos de memória e erros de ponteiro.
- **Eficiência**: Algoritmos modernos minimizam sobrecarga e pausas.

## Desvantagens do Garbage Collector

- **Pausas**: Algumas técnicas podem causar pausas na execução.
- **Overhead**: Introduz sobrecarga adicional no desempenho.

## Exemplos de Garbage Collectors

- **Java**: JVM usa GC como G1, Parallel GC e ZGC.
- **Python**: CPython usa contagem de referências e coleta cíclica.
- **C#**: .NET Framework usa GC geracional.

---

# Linguagens que usam ponteiros e referências

As linguagens de programação podem ser categorizadas em duas abordagens de gerenciamento de memória: ponteiros e referências.

### Linguagens que Utilizam Ponteiros

- **Exemplo em C**:

  ```c
  #include <stdio.h>
  #include <stdlib.h>

  void manipulate(int *ptr) {
      *ptr = 20;
  }

  int main() {
      int *p = (int *)malloc(sizeof(int));
      *p = 10;
      printf("Antes: %d\n", *p);
      manipulate(p);
      printf("Depois: %d\n", *p);
      free(p);
      return 0;
  }
  ```

### Linguagens que Utilizam Referências

- **Exemplo em Java**:

  ```java
  class Example {
      int value;
      Example(int value) { this.value = value; }
  }

  public class Main {
      public static void manipulate(Example obj) {
          obj.value = 20;
      }
      public static void main(String[] args) {
          Example example = new Example(10);
          System.out.println("Antes: " + example.value);
          manipulate(example);
          System.out.println("Depois: " + example.value);
      }
  }
  ```

### Diferenças Chave

- **Acesso à Memória**: Ponteiros permitem acesso direto; referências são gerenciadas pela linguagem.
- **Segurança**: Referências são mais seguras.
- **Sintaxe**: Ponteiros são mais complexos.

---

# Função `free`

A função `free` é usada em C/C++ para liberar memória alocada dinamicamente.

### Sintaxe

```c
void free(void *ptr);
```

### Exemplo

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *p = (int *)malloc(sizeof(int));
    if (p == NULL) {
        fprintf(stderr, "Falha na alocação\n");
        return 1;
    }
    *p = 10;
    printf("Valor: %d\n", *p);
    free(p);
    return 0;
}
```

### Detalhes Importantes

- **Ponteiros Dinâmicos**: Passe apenas ponteiros alocados dinamicamente.
- **Dupla Liberação**: Evite liberar a mesma memória duas vezes.
- **Ponteiro Inválido**: Não use um ponteiro após liberá-lo.

---

# Contagem de Referências

Técnica para gerenciar memória automaticamente.

### Implementação em C

```c
typedef struct {
    int value;
    int ref_count;
} RefCountedInt;

RefCountedInt* create_ref_counted_int(int value) {
    RefCountedInt* new_int = (RefCountedInt*)malloc(sizeof(RefCountedInt));
    new_int->value = value;
    new_int->ref_count = 1;
    return new_int;
}

void increment_ref_count(RefCountedInt* ref_counted_int) {
    ref_counted_int->ref_count++;
}

void decrement_ref_count(RefCountedInt* ref_counted_int) {
    ref_counted_int->ref_count--;
    if (ref_counted_int->ref_count == 0) {
        free(ref_counted_int);
    }
}
```

### Benefícios e Limitações

- **Simplicidade**: Fácil de implementar.
- **Ciclos de Referência**: Não lida bem com ciclos.

---

# ARC (Automatic Reference Counting)

Técnica de gerenciamento de memória usada em Swift e Objective-C.

### Exemplo em Swift

```swift
class Person {
    var name: String
    init(name: String) { self.name = name }
    deinit { print("\(name) desalocado") }
}

var person1: Person? = Person(name: "Alice")
var person2 = person1
person1 = nil
person2 = nil
```

### Vantagens

- **Simplicidade**: Elimina gerenciamento manual.
- **Determinismo**: Memória liberada imediatamente.

### Limitações

- **Ciclos de Referência**: Requer tratamento adicional.

---

# Referências: strong, weak e unowned

### Strong References

- Mantêm o objeto vivo.

```swift
class Person { var name: String }
var person: Person? = Person(name: "Alice")
```

### Weak References

- Não mantêm o objeto vivo.

```swift
weak var weakPerson: Person? = person
```

### Unowned References

- Assumem que o objeto sempre existirá.

```swift
unowned let unownedPerson: Person = person!
```

---

# "mark and sweep" (marcar e varrer)

Algoritmo clássico de GC.

### Funcionamento

1. **Marcação**: Identifica objetos alcançáveis.
2. **Varredura**: Libera objetos não marcados.

### Características

- **Fragmentação**: Pode levar a memória fragmentada.
- **Pause Time**: Interrompe a execução do programa.

---

# Garbage Collection Generacional

Divide a memória em gerações para otimizar a coleta.

### Gerações

- **Jovem**: Objetos novos.
- **Velha**: Objetos persistentes.

### Vantagens

- **Eficiência**: Coleta frequente na geração jovem.
- **Menor Pausa**: Reduz tempo de interrupção.

---

# "weak generational hypothesis"

Hipótese que afirma que a maioria dos objetos tem vida curta.

### Princípios

- Objetos temporários são comuns.
- Otimizações focam na geração jovem.

---

# "compact copying collector"

Algoritmo que copia e compacta objetos vivos.

### Funcionamento

1. **Cópia**: Objetos vivos são copiados para nova região.
2. **Compactação**: Elimina fragmentação.

### Vantagens

- **Redução de Fragmentação**: Memória mais organizada.

---

# Parallel Garbage Collector

Usa múltiplas threads para coletar lixo.

### Benefícios

- **Performance**: Melhora em sistemas multicore.
- **Eficiência**: Distribui trabalho entre threads.

---

# "tricolor marking"

Técnica de marcação com três cores (branco, cinza, preto).

### Fases

1. **Marcação**: Identifica objetos vivos.
2. **Varredura**: Libera objetos não marcados.

### Vantagens

- **Eficiência**: Rápida identificação de lixo.

---

# Configuração `MALLOC_ARENA_MAX`

Controla o número de arenas de memória em `glibc`.

### Impacto de `MALLOC_ARENA_MAX=2`

- **Redução de Fragmentação**: Menos arenas, menos fragmentação.
- **Contenção**: Pode aumentar contenção em sistemas concorrentes.

### Como Definir

```bash
export MALLOC_ARENA_MAX=2
```

### Quando Usar

- **Baixa Concorrência**: Aplicações com poucas threads.
- **Memória Limitada**: Sistemas com recursos restritos.

---
