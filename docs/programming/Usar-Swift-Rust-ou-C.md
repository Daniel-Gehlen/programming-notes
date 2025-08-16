# Escolha entre Swift, Rust e C

## Comparativo de Linguagens

| Característica               | Swift            | Rust                   | C                    |
| ---------------------------- | ---------------- | ---------------------- | -------------------- |
| **Gerenciamento de Memória** | ARC (Automático) | Ownership (Compilador) | Manual (malloc/free) |
| **Performance**              | Alta             | Muito Alta             | Máxima               |
| **Segurança**                | Alta             | Muito Alta             | Baixa                |
| **Uso Principal**            | iOS/macOS apps   | Sistemas/Segurança     | Sistemas/Embarcados  |
| **Curva de Aprendizado**     | Moderada         | Íngreme                | Média                |

## Swift

### Pontos Fortes

- Desenvolvimento nativo Apple
- Sintaxe moderna e expressiva
- Interoperabilidade com Objective-C
- Gerenciamento automático de memória (ARC)

### Melhor Para

- Aplicativos iOS/macOS/watchOS
- Prototipagem rápida
- Projetos com foco em produtividade

```swift
// Exemplo Swift com ARC
class MyClass {
    deinit { print("Memória liberada") }
}
var obj: MyClass? = MyClass()
obj = nil // Dispara o deinit
```

## Rust

### Pontos Fortes

- Segurança de memória sem GC
- Concorrência segura
- Zero-cost abstractions
- Ecossistema moderno (Cargo)

### Melhor Para

- Sistemas operacionais
- Componentes críticos de segurança
- High-performance computing

```rust
// Exemplo Rust com ownership
fn main() {
    let s = String::from("hello");  // s é dono da String
    takes_ownership(s);             // s move para a função
    // println!("{}", s);           // Erro! s não é mais válido
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
} // some_string é liberada aqui
```

## C

### Pontos Fortes

- Controle total do hardware
- Performance máxima
- Portabilidade extrema
- Base de código existente

### Melhor Para

- Sistemas embarcados
- Kernels e drivers
- Software de tempo real

```c
// Exemplo C com gerenciamento manual
#include <stdlib.h>
int main() {
    int *arr = malloc(10 * sizeof(int));  // Alocação
    if(arr == NULL) return 1;
    free(arr);  // Liberação explícita
    return 0;
}
```

## Critérios de Escolha

### Escolha Swift quando:

- Desenvolvendo para ecossistema Apple
- Priorizando produtividade do desenvolvedor
- Necessário balancear performance e segurança

### Escolha Rust quando:

- Construindo sistemas críticos
- Necessária segurança sem overhead
- Projetos que valorizam manutenibilidade a longo prazo

### Escolha C quando:

- Trabalhando com hardware diretamente
- Otimização extrema é requerida
- Legado ou requisitos específicos de plataforma

## Tendências Modernas

- **Rust**: Crescente adoção em projetos de infraestrutura (Linux kernel, WebAssembly)
- **Swift**: Expansão para server-side development
- **C**: Continua essencial em sistemas de baixo nível
