# Linguagem de Programação Zig

## Destaques em 2024

💰 **Salário Recorde**

- Média anual: **$130,000** (maior que Rust/Go)
- Apenas **0.83%** dos devs são proficientes

📈 **Demanda do Mercado**

- Escassez de profissionais impulsiona salários
- Situação similar a Cobol/Fortran (alta demanda, poucos especialistas)

---

## Primeiros Passos

### Instalação

```bash
# Linux/macOS
brew install zig

# Windows
choco install zig
```

### "Hello World" com Desafios

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("Hello, World!\n", .{});
    // Erro comum: esquecer a vírgula após .{}
}
```

⚠️ **Problemas Comuns**

- Sintaxe diferente (ex: `!void` para error handling)
- Mensagens de erro pouco intuitivas

---

## Características Técnicas

### Gerenciamento de Memória

✅ **Compile-time Memory Tracking**
✅ **Allocators explícitos** (mais controle que Rust)
✅ **Sem GC** (como C, mas mais seguro)

### Comparativo com Outras Linguagens

| Feature     | Zig     | C       | Rust     |
| ----------- | ------- | ------- | -------- |
| Segurança   | ⚡      | ❌      | ✅       |
| Performance | ⚡⚡⚡  | ⚡⚡⚡  | ⚡⚡     |
| Sintaxe     | Difícil | Simples | Complexa |

---

## Casos de Uso Ideais

🛠 **Sistemas Embarcados**
🖥 **Kernels/Drivers**
🔧 **Substituição Progressiva de C**

---

## Desafios

📉 **Curva de Aprendizado Íngreme**

- Exemplo: Gerenciamento manual de allocators
- Erros de compilação difíceis de debugar

🛠 **Ecossistema Imaturo**

- Poucas bibliotecas estáveis
- Documentação limitada

---

## Conclusão

Zig é uma aposta promissora para:

- Devs que trabalham com **C/C++** mas querem mais segurança
- Projetos onde **performance extrema** é crítica
- Quem está disposto a enfrentar uma **linguagem em evolução**

_"Zig não é fácil, mas recompensa os persistentes"_

-
