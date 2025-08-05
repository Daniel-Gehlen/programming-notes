# 🗺️ **Hash Maps: Estrutura de Dados Chave-Valor**

## 📌 **O que é um Hash Map?**

Estrutura de dados que mapeia **chaves únicas** para valores correspondentes. Conhecido também como:

- Dicionário (Python)
- Tabela Hash
- HashMap (Java/Rust)
- Objeto (JavaScript)

---

## ⚙️ **Operações Principais**

| Operação     | Complexidade\* | Descrição                                                           |
| ------------ | -------------- | ------------------------------------------------------------------- |
| **Inserção** | O(1)           | Adiciona par chave-valor usando função hash para determinar posição |
| **Busca**    | O(1)           | Encontra valor associado a uma chave                                |
| **Remoção**  | O(1)           | Remove par chave-valor                                              |

_\*Casos médios, assumindo boa função hash_

---

## 🛠️ **Mecanismo Interno**

### 🔄 **Processo de Inserção**

1. Chave passa por **função hash** → gera índice
2. Se posição estiver vazia → armazena valor
3. Se houver **colisão**:
   - **Encadeamento**: Armazena lista encadeada na posição
   - **Sondagem Linear**: Busca próxima posição vazia

### 🔍 **Tratamento de Colisões**

| Método           | Vantagem              | Desvantagem               |
| ---------------- | --------------------- | ------------------------- |
| **Encadeamento** | Simples implementação | Overhead de memória       |
| **Sondagem**     | Cache-friendly        | Clusterização de colisões |

---

## 🚀 **Exemplos Práticos em Rust**

### 📊 **Contagem de Palavras**

```rust
use std::collections::HashMap;

fn count_words(text: &str) -> HashMap<String, usize> {
    let mut word_count = HashMap::new();
    for word in text.split_whitespace() {
        *word_count.entry(word.to_string()).or_insert(0) += 1;
    }
    word_count
}
```

**Uso:**

```rust
let text = "rust rust python java";
let counts = count_words(text);
println!("{:?}", counts); // {"rust": 2, "python": 1, "java": 1}
```

### ⚙️ **Armazenamento de Configurações**

```rust
struct AppConfig {
    settings: HashMap<String, String>,
}

impl AppConfig {
    fn set(&mut self, key: &str, value: &str) {
        self.settings.insert(key.to_string(), value.to_string());
    }

    fn get(&self, key: &str) -> Option<&String> {
        self.settings.get(key)
    }
}
```

### 🧠 **Cache de Resultados (Memoização)**

```rust
struct Memoizer {
    cache: HashMap<u64, u64>,
}

impl Memoizer {
    fn calculate(&mut self, n: u64) -> u64 {
        *self.cache.entry(n).or_insert_with(|| n * n)
    }
}
```

---

## ⚠️ **Considerações Importantes**

### 🔑 **Escolha de Chaves**

- Devem implementar `Eq` + `Hash` (Rust)
- Tipos imutáveis são ideais (evitar mutação durante uso como chave)

### 📏 **Redimensionamento (Resize)**

- Ocorre automaticamente quando carga fator > limite (ex: 75%)
- Envolve recálculo de hashes e realocação

### 🏎️ **Otimizações**

- **Capacidade inicial**: Evite redimensionamentos frequentes
- **Função hash**: Distribuição uniforme é crucial para performance

---

## 🌐 **Comparativo entre Linguagens**

| Linguagem  | Implementação               | Notas                          |
| ---------- | --------------------------- | ------------------------------ |
| **Rust**   | `std::collections::HashMap` | Padrão usando SipHash          |
| **Python** | `dict`                      | Otimizado para cenários comuns |
| **Java**   | `HashMap<K,V>`              | Permite `null` como chave      |
| **C++**    | `std::unordered_map`        | Similar à implementação Rust   |

---

## 🎯 **Quando Usar?**

✔ Associações chave-valor dinâmicas
✔ Buscas rápidas por identificadores
✔ Caches e memoização
✔ Agregações de dados (contagens, índices)

> **Dica:** Em Rust, use `.entry()` API para operações complexas de inserção/atualização! 🦀
