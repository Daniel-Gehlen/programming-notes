# Criação de classes e objetos em JavaScript

---

## 1. Fundamentos Teóricos (OOP)

Antes de mergulhar no código, entenda os **4 pilares da OOP**:

- **Encapsulamento**: Agrupar dados e comportamentos em uma classe (ex: `class Carro { ... }`).
- **Abstração**: Esconder complexidade expondo apenas interfaces simples (ex: métodos públicos).
- **Herança**: Reutilizar código através de hierarquias (ex: `class Cachorro extends Animal`).
- **Polimorfismo**: Um mesmo método se comportar de formas diferentes em classes diferentes.

📌 **Leitura Recomendada**:

- MDN: Classes em JavaScript
- Livro: "You Don't Know JS" (Kyle Simpson)

---

## 2. Prática com Exemplos Didáticos

Comece com exemplos simples e evolua gradualmente:

### Exemplo 1: Classe Básica

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  fazerSom() {
    console.log(`${this.nome} faz algum som.`);
  }
}
const cachorro = new Animal("Rex");
cachorro.fazerSom(); // "Rex faz algum som."
```

### Exemplo 2: Herança

```javascript
class Cachorro extends Animal {
  fazerSom() {
    console.log(`${this.nome} late: Au Au!`);
  }
}
const rex = new Cachorro("Rex");
rex.fazerSom(); // "Rex late: Au Au!"
```

### Exemplo 3: Encapsulamento (usando `#` para campos privados)

```javascript
class ContaBancaria {
  #saldo = 0; // Campo privado
  depositar(valor) {
    this.#saldo += valor;
  }
  get saldo() {
    return this.#saldo;
  }
}
const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.saldo); // 100
// console.log(conta.#saldo); // Erro! Propriedade privada.
```

### Exemplo 4: Composição (alternativa à herança)

```javascript
class Motor {
  ligar() {
    console.log("Motor ligado!");
  }
}
class Carro {
  constructor() {
    this.motor = new Motor();
  }
  ligar() {
    this.motor.ligar();
  }
}
const carro = new Carro();
carro.ligar(); // "Motor ligado!"
```

---

## 3. Projetos Intermediários

Aplique OOP em pequenos projetos:

### Sistema de Biblioteca

- **Classes**: `Livro`, `Usuario`, `Emprestimo`.
- **Métodos**: `emprestar()`, `devolver()`.

### E-commerce Simples

- **Classes**: `Produto`, `Carrinho`, `Pedido`.
- Use herança para tipos de produtos (ex: `Livro extends Produto`).

### Jogo Simples (ex: RPG)

- **Classes**: `Personagem`, `Inimigo`, `Arma`.
- Polimorfismo para habilidades especiais.

---

## 4. Projetos Reais (Próximo Nível)

Integre OOP em aplicações mais complexas:

### Frontend (React/Vue)

- Componentes podem ser classes (ex: `class UserForm extends React.Component`).

### Backend (Node.js)

- Estruturar serviços como classes (ex: `class UserService { criarUsuario() { ... } }`).

### Bibliotecas/Pacotes

- Crie sua própria lib de utilidades (ex: `class Validator`).

#### Exemplo: API com Classes (Node.js)

```javascript
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  async get(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    return response.json();
  }
}
// Uso:
const jsonPlaceholder = new ApiClient("https://jsonplaceholder.typicode.com");
jsonPlaceholder.get("/todos/1").then((data) => console.log(data));
```

---

## 5. Tópicos Avançados

- **Padrões de Projeto (Design Patterns)**: Factory, Singleton, Observer (ex: `class EventEmitter`).
- **SOLID**: Princípios para OOP escalável.
- **Typescript**: Adicione tipagem estática para melhorar a segurança.

---

## 6. Ferramentas e Dicas

- **Exercícios**: Exercism (JavaScript Track), Codewars (OOP Challenges).
- **Debugging**: Use `console.log()` ou ferramentas como Chrome DevTools para inspecionar objetos.
- **Boas Práticas**:
  - Prefira **composição** sobre herança.
  - Use métodos estáticos para utilitários (`static criar(...) { ... }`).

---

## 7. Projeto Final (Desafio)

Crie um **sistema de tarefas (TODO)** com:

- **Classes**: `Tarefa`, `ListaDeTarefas`, `Usuario`.
- **Funcionalidades**:
  - Adicionar/remover tarefas.
  - Marcar como concluída.
  - Filtrar por prioridade.

**Dica**: Armazene os dados em localStorage ou em uma API fake (ex: `JSON Server`).

---

### Resumo do Caminho

1. Aprenda a teoria básica de OOP.
2. Pratique com exemplos pequenos (animais, contas bancárias).
3. Evolua para projetos temáticos (biblioteca, e-commerce).
4. Integre OOP em aplicações reais (frontend/backend).
5. Explore tópicos avançados (padrões de projeto, SOLID).

Quanto mais você **refatorar** código (ex: transformar funções soltas em classes), mais natural OOP ficará! 🚀

**por Daniel Gehlen**

---

## Fluxo lógico e didático

### Fluxo Lógico para Criar Classes e Objetos (Do Básico ao Avançado)

1. **Identifique o Problema ou Domínio**
   Antes de criar classes, entenda **o que você está modelando**. Exemplo:
   - Se for um **sistema de biblioteca**, pense em entidades como `Livro`, `Usuário`, `Empréstimo`.
   - Se for um **jogo**, pense em `Personagem`, `Inimigo`, `Item`.

   **Perguntas-chave**:
   - Quais são os **objetos** principais?
   - Quais **propriedades** (atributos) e **ações** (métodos) eles têm?

2. **Crie Classes com Propriedades Básicas (Encapsulamento)**
   Comece com os atributos essenciais usando `constructor`.

   **Exemplo: Sistema de Biblioteca**

   ```javascript
   class Livro {
     constructor(titulo, autor, anoPublicacao) {
       this.titulo = titulo;
       this.autor = autor;
       this.anoPublicacao = anoPublicacao;
       this.disponivel = true; // Propriedade com valor padrão
     }
   }
   ```

3. **Adicione Métodos Simples (Comportamento)**
   Defina ações que os objetos podem realizar.

   ```javascript
   class Livro {
     // ... (constructor anterior)
     emprestar() {
       if (this.disponivel) {
         this.disponivel = false;
         console.log(`${this.titulo} foi emprestado.`);
       } else {
         console.log("Livro indisponível!");
       }
     }
     devolver() {
       this.disponivel = true;
       console.log(`${this.titulo} foi devolvido.`);
     }
   }
   ```

   **Uso**:

   ```javascript
   const livro1 = new Livro("1984", "George Orwell", 1949);
   livro1.emprestar(); // "1984 foi emprestado."
   livro1.devolver(); // "1984 foi devolvido."
   ```

4. **Estabeleça Relacionamentos entre Classes (Associação)**
   Conecte classes para representar interações do mundo real.

   **Exemplo: Classe `Usuario` e `Emprestimo`**

   ```javascript
   class Usuario {
     constructor(nome) {
       this.nome = nome;
       this.emprestimos = []; // Lista de empréstimos
     }
     pegarEmprestado(livro) {
       if (livro.disponivel) {
         const emprestimo = new Emprestimo(this, livro);
         this.emprestimos.push(emprestimo);
         livro.emprestar();
       }
     }
   }

   class Emprestimo {
     constructor(usuario, livro) {
       this.usuario = usuario;
       this.livro = livro;
       this.data = new Date();
     }
   }
   ```

   **Uso**:

   ```javascript
   const usuario = new Usuario("João");
   const livro = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
   usuario.pegarEmprestado(livro); // João empresta o livro
   ```

5. **Aplique Herança (Se Fizer Sentido)**
   Use herança **apenas** quando houver uma relação "é um" (ex: `Cachorro` é um `Animal`).

   **Exemplo**:

   ```javascript
   class ItemBiblioteca {
     constructor(titulo, autor) {
       this.titulo = titulo;
       this.autor = autor;
     }
   }

   // Livro É UM ItemBiblioteca (herança válida)
   class Livro extends ItemBiblioteca {
     constructor(titulo, autor, anoPublicacao) {
       super(titulo, autor); // Chama o constructor da classe pai
       this.anoPublicacao = anoPublicacao;
     }
   }

   // Revista TAMBÉM É UM ItemBiblioteca
   class Revista extends ItemBiblioteca {
     constructor(titulo, autor, edicao) {
       super(titulo, autor);
       this.edicao = edicao;
     }
   }
   ```

6. **Refatore para Usar Composição (Se Herança For Complexa)**
   Prefira **composição** ("tem um") em vez de herança quando a relação não for clara.

   **Exemplo: Sistema de Jogo (Sem Herança)**

   ```javascript
   class Habilidade {
     constructor(nome, dano) {
       this.nome = nome;
       this.dano = dano;
     }
   }

   class Personagem {
     constructor(nome) {
       this.nome = nome;
       this.habilidades = []; // Composição: Personagem TEM Habilidades
     }
     aprenderHabilidade(habilidade) {
       this.habilidades.push(habilidade);
     }
   }

   const guerreiro = new Personagem("Aragorn");
   const espada = new Habilidade("Golpe de Espada", 10);
   guerreiro.aprenderHabilidade(espada);
   ```

7. **Valide com Princípios SOLID (Avançado)**
   Garanta que seu código siga boas práticas:
   - **Single Responsibility**: Cada classe deve ter uma única responsabilidade.
     Ex: `Livro` gerencia estado do livro, `Emprestimo` gerencia empréstimos.
   - **Open/Closed**: Classes devem ser **abertas para extensão**, mas **fechadas para modificação**.
     Ex: Adicione novos tipos de `ItemBiblioteca` sem alterar a classe base.

---

### Ordem Resumida para Criar Classes

1. Defina as entidades principais (ex: `Livro`, `Usuario`).
2. Adicione atributos no `constructor`.
3. Implemente métodos básicos (ex: `emprestar()`, `devolver()`).
4. Conecte classes via associação (ex: `Usuario` tem `Emprestimo`).
5. Use herança apenas se for natural (ex: `Livro extends ItemBiblioteca`).
6. Prefira composição para evitar hierarquias complexas.

---

### Exemplo Completo: Fluxo de Biblioteca

```javascript
// 1. Classe Base
class ItemBiblioteca {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
  }
}

// 2. Subclasse (herança)
class Livro extends ItemBiblioteca {
  constructor(titulo, autor, ano) {
    super(titulo, autor);
    this.ano = ano;
  }
}

// 3. Classe com Composição
class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.emprestimos = [];
  }
  pegarEmprestado(item) {
    if (item.disponivel) {
      item.disponivel = false;
      this.emprestimos.push(item);
    }
  }
}

// Uso
const livro = new Livro("1984", "George Orwell", 1949);
const usuario = new Usuario("Maria");
usuario.pegarEmprestado(livro);
console.log(usuario.emprestimos); // [Livro {...}]
```

---

### Dica Final

- **Comece simples** e incremente gradualmente.
- Pense em "quem é responsável por quê" (ex: `Livro` não deve gerenciar empréstimos, só seu estado).
- Evite herança profunda (mais de 2 níveis geralmente é ruim).

Com esse fluxo, você construirá sistemas OOP claros e sustentáveis! 🚀
