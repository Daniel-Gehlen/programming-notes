# 3. OBJETOS E OOP

## Criação de Objetos

### Object Literal (Objeto Literal)

```javascript
// Sintaxe básica
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
};

// Propriedades com nomes especiais
const objeto = {
  "nome-completo": "Maria Silva", // string como chave
  123: "valor numérico", // número como chave
  "": "string vazia", // string vazia como chave
  [Symbol("id")]: "symbol como chave", // computed property
};

// Métodos em objetos literais
const calculadora = {
  valor: 0,

  somar: function (x) {
    this.valor += x;
    return this;
  },

  subtrair(x) {
    // shorthand method (ES6)
    this.valor -= x;
    return this;
  },

  get total() {
    // getter
    return this.valor;
  },

  set total(novoValor) {
    // setter
    if (novoValor >= 0) {
      this.valor = novoValor;
    }
  },
};

// Computed property names (ES6)
const prefixo = "user_";
const id = 123;

const usuario = {
  [prefixo + id]: "João Silva", // user_123: "João Silva"
  [`${prefixo}${id}_name`]: "João", // user_123_name: "João"
};

// Object literal enhancement
const nome = "Maria";
const idade = 25;

const pessoa2 = {
  nome, // equivalente a nome: nome
  idade, // equivalente a idade: idade
  saudar() {
    // equivalente a saudar: function() {...}
    return `Olá, ${this.nome}`;
  },
};
```

### Construtor new Object()

```javascript
// Criando objetos com construtor Object
const obj1 = new Object();
const obj2 = new Object({ nome: "João" });

// Equivalente ao literal
const literal = {};
const construtor = new Object(); // mesmo que {}

// Passando valores para o construtor
const pessoa = new Object({
  nome: "Maria",
  idade: 30,
  saudar: function () {
    return `Olá, ${this.nome}`;
  },
});

// Object.create() - cria com protótipo específico
const proto = { x: 10, y: 20 };
const obj3 = Object.create(proto);
obj3.z = 30;

console.log(obj3.x); // 10 (do protótipo)
console.log(obj3.z); // 30 (própria propriedade)

// Object.create() com propriedades descritoras
const obj4 = Object.create(null, {
  nome: {
    value: "João",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  idade: {
    value: 30,
    writable: false, // readonly
  },
});
```

### Factory Functions

```javascript
// Funções fábrica - retornam novos objetos
function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    saudar() {
      return `Olá, eu sou ${this.nome}`;
    },
    envelhecer() {
      this.idade++;
      return this.idade;
    },
  };
}

const pessoa1 = criarPessoa("João", 25);
const pessoa2 = criarPessoa("Maria", 30);

// Factory com métodos privados (closure)
function criarContador() {
  let contador = 0; // privado

  return {
    incrementar() {
      contador++;
      return contador;
    },
    decrementar() {
      contador--;
      return contador;
    },
    get valor() {
      return contador;
    },
  };
}

// Factory com herança
function criarFuncionario(nome, salario) {
  const pessoa = criarPessoa(nome);

  return {
    ...pessoa,
    salario,
    aumentarSalario(percentual) {
      this.salario *= 1 + percentual / 100;
      return this.salario;
    },
  };
}
```

### Constructor Functions

```javascript
// Funções construtoras (começam com letra maiúscula)
function Pessoa(nome, idade) {
  // Propriedades da instância
  this.nome = nome;
  this.idade = idade;

  // Método da instância (criado para cada objeto)
  this.saudar = function () {
    return `Olá, eu sou ${this.nome}`;
  };
}

// Criando instâncias com 'new'
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

// O que 'new' faz:
// 1. Cria um novo objeto vazio {}
// 2. Define prototype do objeto para Pessoa.prototype
// 3. Executa a função com 'this' apontando para o novo objeto
// 4. Retorna o novo objeto (a menos que a função retorne outro objeto)

// Simulando o operador 'new'
function novo(constructor, ...args) {
  // 1. Cria novo objeto
  const obj = {};

  // 2. Define prototype
  Object.setPrototypeOf(obj, constructor.prototype);

  // 3. Executa constructor com this
  const resultado = constructor.apply(obj, args);

  // 4. Retorna objeto (ou resultado se for objeto)
  return resultado instanceof Object ? resultado : obj;
}

// Testando nossa implementação
const pessoa3 = novo(Pessoa, "Pedro", 35);
```

## Prototypes e Prototype Chain

### Prototype Basics

```javascript
// Cada função tem uma propriedade prototype
function Pessoa(nome) {
  this.nome = nome;
}

// Adicionando métodos ao prototype
Pessoa.prototype.saudar = function () {
  return `Olá, eu sou ${this.nome}`;
};

Pessoa.prototype.envelhecer = function () {
  this.idade = (this.idade || 0) + 1;
  return this.idade;
};

// Instâncias compartilham o mesmo prototype
const pessoa1 = new Pessoa("João");
const pessoa2 = new Pessoa("Maria");

console.log(pessoa1.saudar === pessoa2.saudar); // true (mesma função)

// A cadeia de protótipos (prototype chain)
console.log(pessoa1.__proto__ === Pessoa.prototype); // true
console.log(Pessoa.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

// Verificando relações
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Object); // true
console.log(Pessoa.prototype.isPrototypeOf(pessoa1)); // true
```

### Acessando e Modificando Prototypes

```javascript
// __proto__ (não padrão, mas amplamente suportado)
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

// Métodos padrão para manipular prototype
const pai = { x: 10 };
const filho = { y: 20 };

// Object.setPrototypeOf() - define prototype
Object.setPrototypeOf(filho, pai);

console.log(filho.x); // 10 (herdado)
console.log(filho.y); // 20 (próprio)

// Object.getPrototypeOf() - obtém prototype
console.log(Object.getPrototypeOf(filho) === pai); // true

// Object.create() - cria com prototype específico
const novoObj = Object.create(pai, {
  z: {
    value: 30,
    enumerable: true,
  },
});

// Verificando propriedades próprias vs herdadas
console.log(filho.hasOwnProperty("x")); // false
console.log(filho.hasOwnProperty("y")); // true

// Iterando sobre propriedades
for (let key in filho) {
  console.log(key); // y, x (próprias e herdadas)
}

// Apenas propriedades próprias
console.log(Object.keys(filho)); // ['y']
console.log(Object.getOwnPropertyNames(filho)); // ['y']
```

### Prototype Chain em Ação

```javascript
// Exemplo completo de cadeia de protótipos
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.respirar = function () {
  return `${this.nome} está respirando`;
};

function Mamifero(nome, temPelos) {
  Animal.call(this, nome);
  this.temPelos = temPelos;
}

// Herdando prototype
Mamifero.prototype = Object.create(Animal.prototype);
Mamifero.prototype.constructor = Mamifero;

Mamifero.prototype.amamentar = function () {
  return `${this.nome} está amamentando`;
};

function Cachorro(nome, raca) {
  Mamifero.call(this, nome, true);
  this.raca = raca;
}

Cachorro.prototype = Object.create(Mamifero.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function () {
  return `${this.nome} está latindo`;
};

// Testando a cadeia
const rex = new Cachorro("Rex", "Labrador");

console.log(rex.latir()); // próprio método
console.log(rex.amamentar()); // do Mamifero
console.log(rex.respirar()); // do Animal
console.log(rex.toString()); // do Object

// Verificando a cadeia
console.log(rex instanceof Cachorro); // true
console.log(rex instanceof Mamifero); // true
console.log(rex instanceof Animal); // true
console.log(rex instanceof Object); // true
```

### Shadowing e Property Resolution

```javascript
// Shadowing (sombreamento) de propriedades
function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.nome = "Prototype Name";

const pessoa = new Pessoa("João");

console.log(pessoa.nome); // "João" (shadowing do prototype)

// Acessando propriedade do prototype mesmo com shadowing
console.log(pessoa.__proto__.nome); // "Prototype Name"
console.log(Object.getPrototypeOf(pessoa).nome); // "Prototype Name"

// Deleção de propriedades
delete pessoa.nome;
console.log(pessoa.nome); // "Prototype Name" (agora do prototype)

// Método que verifica toda a cadeia
function getProperty(obj, prop) {
  while (obj !== null) {
    if (obj.hasOwnProperty(prop)) {
      return obj[prop];
    }
    obj = Object.getPrototypeOf(obj);
  }
  return undefined;
}

// Propriedades não enumeráveis do prototype
console.log(Object.getOwnPropertyNames(Object.prototype));
// ['constructor', 'toString', 'valueOf', ...]
```

## Classes (ES6+)

### Class Declaration

```javascript
// Sintaxe básica de classe
class Pessoa {
  // Constructor
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.criadoEm = new Date();
  }

  // Métodos de instância
  saudar() {
    return `Olá, eu sou ${this.nome}`;
  }

  envelhecer() {
    this.idade++;
    return this.idade;
  }

  // Getter
  get nomeCompleto() {
    return this.nome.toUpperCase();
  }

  // Setter
  set nomeCompleto(novoNome) {
    if (novoNome.length < 3) {
      throw new Error("Nome muito curto");
    }
    this.nome = novoNome;
  }

  // Método estático
  static compararIdade(p1, p2) {
    return p1.idade - p2.idade;
  }
}

// Uso da classe
const pessoa1 = new Pessoa("João", 25);
console.log(pessoa1.saudar()); // "Olá, eu sou João"
console.log(pessoa1.nomeCompleto); // "JOÃO"

pessoa1.nomeCompleto = "Maria";
console.log(pessoa1.nome); // "Maria"

// Método estático
const pessoa2 = new Pessoa("Pedro", 30);
console.log(Pessoa.compararIdade(pessoa1, pessoa2)); // -5
```

### Class Expression

```javascript
// Class expression (anônima)
const Pessoa = class {
  constructor(nome) {
    this.nome = nome;
  }

  saudar() {
    return `Olá, ${this.nome}`;
  }
};

// Class expression nomeada
const Animal = class Mamifero {
  constructor(nome) {
    this.nome = nome;
  }

  get especie() {
    return "Mamífero";
  }
};

// Classes como first-class citizens
function criarClasse(baseClass) {
  return class extends baseClass {
    novoMetodo() {
      return "Novo método";
    }
  };
}

// Classe retornada por função
function fabricaDeClasses() {
  return class {
    constructor(valor) {
      this.valor = valor;
    }
  };
}

const MinhaClasse = fabricaDeClasses();
const instancia = new MinhaClasse(42);
```

### Fields (Campos de Classe - ES2022)

```javascript
class Pessoa {
  // Campos públicos (ES2022)
  nome = "Anônimo"; // inicialização padrão
  idade; // sem inicialização

  // Campo privado (ES2022)
  #senha;

  // Campo estático público
  static especie = "Humano";

  // Campo estático privado
  static #contador = 0;

  constructor(nome, idade, senha) {
    this.nome = nome;
    this.idade = idade;
    this.#senha = senha;
    Pessoa.#contador++;
  }

  // Método que acessa campo privado
  verificarSenha(tentativa) {
    return this.#senha === tentativa;
  }

  // Método estático que acessa campo estático privado
  static get totalInstancias() {
    return this.#contador;
  }

  // Método privado (ES2022)
  #validarNome() {
    return this.nome.length >= 2;
  }
}

const pessoa = new Pessoa("João", 30, "123456");
console.log(pessoa.nome); // "João"
// console.log(pessoa.#senha); // SyntaxError
console.log(pessoa.verificarSenha("123456")); // true
console.log(Pessoa.especie); // "Humano"
console.log(Pessoa.totalInstancias); // 1
```

### Under the Hood - Classes são Syntactic Sugar

```javascript
// O que classes fazem por baixo dos panos:

// ES6 Class
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  saudar() {
    return `Olá, ${this.nome}`;
  }
}

// Equivalente ES5
function PessoaES5(nome) {
  this.nome = nome;
}

PessoaES5.prototype.saudar = function () {
  return `Olá, ${this.nome}`;
};

// Verificando
const es6 = new Pessoa("João");
const es5 = new PessoaES5("Maria");

console.log(es6.__proto__.hasOwnProperty("saudar")); // true
console.log(es5.__proto__.hasOwnProperty("saudar")); // true

// Mas há diferenças importantes:
// 1. Classes não são hoisted como function declarations
// 2. Classes têm métodos não enumeráveis
// 3. Classes só podem ser chamadas com new
// 4. Classes têm constructor obrigatório
```

## Herança

### Herança Prototypal (ES5)

```javascript
// Herança usando prototypes (ES5)

// Construtor pai
function Animal(nome) {
  this.nome = nome;
  this.vivo = true;
}

// Métodos do pai
Animal.prototype.respirar = function () {
  return `${this.nome} está respirando`;
};

Animal.prototype.morrer = function () {
  this.vivo = false;
  return `${this.nome} morreu`;
};

// Construtor filho
function Mamifero(nome, temPelos) {
  // Chamar construtor pai
  Animal.call(this, nome);
  this.temPelos = temPelos;
}

// Herdar prototype do pai
Mamifero.prototype = Object.create(Animal.prototype);

// Corrigir constructor
Mamifero.prototype.constructor = Mamifero;

// Adicionar métodos do filho
Mamifero.prototype.amamentar = function () {
  if (!this.vivo) return `${this.nome} não pode amamentar (está morto)`;
  return `${this.nome} está amamentando`;
};

// Herança em múltiplos níveis
function Cachorro(nome, raca) {
  Mamifero.call(this, nome, true);
  this.raca = raca;
}

Cachorro.prototype = Object.create(Mamifero.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function () {
  return `${this.nome} está latindo: Au au!`;
};

// Testando
const rex = new Cachorro("Rex", "Labrador");
console.log(rex.respirar()); // do Animal
console.log(rex.amamentar()); // do Mamifero
console.log(rex.latir()); // do Cachorro
```

### Herança com Classes (ES6+)

```javascript
// Herança com extends e super

class Animal {
  constructor(nome) {
    this.nome = nome;
    this.vivo = true;
  }

  respirar() {
    return `${this.nome} está respirando`;
  }

  morrer() {
    this.vivo = false;
    return `${this.nome} morreu`;
  }
}

class Mamifero extends Animal {
  constructor(nome, temPelos) {
    super(nome); // chama constructor pai
    this.temPelos = temPelos;
  }

  amamentar() {
    if (!this.vivo) {
      return `${this.nome} não pode amamentar (está morto)`;
    }
    return `${this.nome} está amamentando`;
  }
}

class Cachorro extends Mamifero {
  constructor(nome, raca) {
    super(nome, true);
    this.raca = raca;
  }

  latir() {
    return `${this.nome} está latindo: Au au!`;
  }

  // Sobrescrevendo método do pai
  respirar() {
    return `${super.respirar()} (como um cachorro)`;
  }
}

// Testando
const rex = new Cachorro("Rex", "Labrador");
console.log(rex.respirar()); // "Rex está respirando (como um cachorro)"
console.log(rex.amamentar()); // "Rex está amamentando"
console.log(rex.latir()); // "Rex está latindo: Au au!"

// Verificando relações
console.log(rex instanceof Cachorro); // true
console.log(rex instanceof Mamifero); // true
console.log(rex instanceof Animal); // true
console.log(rex instanceof Object); // true
```

### Mixins e Composição

```javascript
// Mixins como alternativa à herança

// Mixins básicos
const Nadador = {
  nadar() {
    return `${this.nome} está nadando`;
  },
};

const Voador = {
  voar() {
    return `${this.nome} está voando`;
  },
};

const Andador = {
  andar() {
    return `${this.nome} está andando`;
  },
};

// Função para aplicar mixins
function aplicarMixins(classeAlvo, ...mixins) {
  mixins.forEach((mixin) => {
    Object.getOwnPropertyNames(mixin).forEach((nome) => {
      classeAlvo.prototype[nome] = mixin[nome];
    });
  });
}

// Classe base
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
}

// Aplicando mixins
class Pato extends Animal {}
aplicarMixins(Pato, Nadador, Voador, Andador);

const pato = new Pato("Donald");
console.log(pato.nadar()); // "Donald está nadando"
console.log(pato.voar()); // "Donald está voando"
console.log(pato.andar()); // "Donald está andando"

// Mixins com funções
const Loggable = (superclass) =>
  class extends superclass {
    log(mensagem) {
      console.log(`[${this.constructor.name}] ${mensagem}`);
    }
  };

const Timestamped = (superclass) =>
  class extends superclass {
    constructor(...args) {
      super(...args);
      this.criadoEm = new Date();
    }
  };

// Composição com classes
class Produto extends Timestamped(Loggable(Object)) {
  constructor(nome, preco) {
    super();
    this.nome = nome;
    this.preco = preco;
    this.log(`Produto ${nome} criado`);
  }
}

const produto = new Produto("Livro", 50);
console.log(produto.criadoEm); // Data atual
```

### Sobrescrita e Chamada de Métodos Pais

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  mover() {
    return `${this.nome} está se movendo`;
  }

  comer() {
    return `${this.nome} está comendo`;
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome);
    this.raca = raca;
  }

  // Sobrescrevendo totalmente
  mover() {
    return `${this.nome} está correndo`;
  }

  // Estendendo método pai
  comer() {
    const comerPai = super.comer();
    return `${comerPai} ração para cachorro`;
  }

  // Novo método
  latir() {
    return `${this.nome} está latindo`;
  }
}

const rex = new Cachorro("Rex", "Labrador");
console.log(rex.mover()); // "Rex está correndo" (sobrescrito)
console.log(rex.comer()); // "Rex está comendo ração para cachorro" (estendido)

// Acessando métodos do pai explicitamente
class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }

  mover(distancia = "devagar") {
    return `${super.mover()} ${distancia}`;
  }
}

const felix = new Gato("Felix");
console.log(felix.mover("silenciosamente")); // "Felix está se movendo silenciosamente"
```

## Métodos Estáticos

### Definição e Uso

```javascript
class Matematica {
  // Método estático
  static somar(a, b) {
    return a + b;
  }

  static subtrair(a, b) {
    return a - b;
  }

  // Propriedade estática
  static PI = 3.14159;

  // Getter estático
  static get versao() {
    return "1.0.0";
  }

  // Método estático privado (ES2022)
  static #calcularRaiz(x) {
    return Math.sqrt(x);
  }

  static raizQuadrada(x) {
    return this.#calcularRaiz(x);
  }
}

// Uso de métodos estáticos
console.log(Matematica.somar(5, 3)); // 8
console.log(Matematica.subtrair(5, 3)); // 2
console.log(Matematica.PI); // 3.14159
console.log(Matematica.versao); // "1.0.0"
console.log(Matematica.raizQuadrada(9)); // 3

// Não pode ser chamado em instâncias
const math = new Matematica();
// console.log(math.somar(2, 3)); // TypeError
```

### Métodos Estáticos em Herança

```javascript
class Animal {
  static criar(nome) {
    return new Animal(nome);
  }

  static especie = "Animal";

  static descrever() {
    return `Sou a classe ${this.name}, espécie: ${this.especie}`;
  }

  constructor(nome) {
    this.nome = nome;
  }
}

class Cachorro extends Animal {
  static especie = "Canis lupus";

  static criar(nome, raca) {
    const animal = super.criar(nome);
    return new Cachorro(nome, raca);
  }

  constructor(nome, raca) {
    super(nome);
    this.raca = raca;
  }
}

// Métodos estáticos são herdados
console.log(Cachorro.criar("Rex", "Labrador")); // Instância de Cachorro
console.log(Cachorro.descrever()); // "Sou a classe Cachorro, espécie: Canis lupus"
console.log(Animal.descrever()); // "Sou a classe Animal, espécie: Animal"

// Acessando métodos estáticos do pai
class Gato extends Animal {
  static especie = "Felis catus";

  static info() {
    return `${super.descrever()} (subclasse de Gato)`;
  }
}

console.log(Gato.info()); // "Sou a classe Gato, espécie: Felis catus (subclasse de Gato)"
```

### Use Cases para Métodos Estáticos

```javascript
// 1. Métodos utilitários/fábrica
class DataUtil {
  static formatarData(data, formato = "dd/mm/yyyy") {
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();

    switch (formato) {
      case "dd/mm/yyyy":
        return `${dia}/${mes}/${ano}`;
      case "mm/dd/yyyy":
        return `${mes}/${dia}/${ano}`;
      case "yyyy-mm-dd":
        return `${ano}-${mes}-${dia}`;
      default:
        throw new Error("Formato inválido");
    }
  }

  static diferencaDias(data1, data2) {
    const diff = Math.abs(data1 - data2);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}

// 2. Singleton pattern
class Configuracao {
  static #instancia;

  static get instancia() {
    if (!this.#instancia) {
      this.#instancia = new Configuracao();
    }
    return this.#instancia;
  }

  constructor() {
    if (Configuracao.#instancia) {
      throw new Error("Use Configuracao.instancia");
    }
    this.apiUrl = "https://api.exemplo.com";
    this.timeout = 5000;
  }
}

const config = Configuracao.instancia;

// 3. Validação/verificação
class Validacao {
  static isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static isCPF(cpf) {
    // Lógica de validação de CPF
    return cpf.length === 11;
  }

  static isMaiorDeIdade(dataNascimento) {
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    return idade >= 18;
  }
}

// 4. Contadores/registros
class ContadorInstancias {
  static #contador = 0;
  static #instancias = new Set();

  constructor() {
    ContadorInstancias.#contador++;
    ContadorInstancias.#instancias.add(this);
  }

  static get total() {
    return this.#contador;
  }

  static listarInstancias() {
    return Array.from(this.#instancias);
  }

  destruir() {
    ContadorInstancias.#instancias.delete(this);
  }
}
```

## Getters/Setters

### Getters Básicos

```javascript
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Getter
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  // Getter com lógica
  get iniciais() {
    return `${this.nome[0]}${this.sobrenome[0]}`.toUpperCase();
  }

  // Getter que calcula valor
  get idadeEmDias() {
    // Supondo que temos dataNascimento
    if (!this.dataNascimento) return 0;
    const hoje = new Date();
    const diff = hoje - this.dataNascimento;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}

const pessoa = new Pessoa("João", "Silva");
console.log(pessoa.nomeCompleto); // "João Silva"
console.log(pessoa.iniciais); // "JS"

// Getter em objetos literais
const retangulo = {
  largura: 10,
  altura: 5,

  get area() {
    return this.largura * this.altura;
  },

  get perimetro() {
    return 2 * (this.largura + this.altura);
  },
};

console.log(retangulo.area); // 50
console.log(retangulo.perimetro); // 30
```

### Setters Básicos

```javascript
class Pessoa {
  constructor(nome, idade) {
    this._nome = nome; // Convenção para propriedade "privada"
    this._idade = idade;
  }

  // Setter com validação
  set nome(novoNome) {
    if (typeof novoNome !== "string" || novoNome.trim() === "") {
      throw new Error("Nome deve ser uma string não vazia");
    }
    this._nome = novoNome.trim();
  }

  // Getter correspondente
  get nome() {
    return this._nome;
  }

  // Setter para idade
  set idade(novaIdade) {
    if (novaIdade < 0 || novaIdade > 150) {
      throw new Error("Idade deve estar entre 0 e 150");
    }
    if (!Number.isInteger(novaIdade)) {
      throw new Error("Idade deve ser um número inteiro");
    }
    this._idade = novaIdade;
  }

  get idade() {
    return this._idade;
  }
}

const pessoa = new Pessoa("João", 25);
console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 25

pessoa.nome = "Maria";
pessoa.idade = 30;

console.log(pessoa.nome); // "Maria"
console.log(pessoa.idade); // 30

// pessoa.idade = -5; // Error: Idade deve estar entre 0 e 150

// Setter em objetos literais
const temperatura = {
  _celsius: 0,

  get celsius() {
    return this._celsius;
  },

  set celsius(valor) {
    if (valor < -273.15) {
      throw new Error("Temperatura abaixo do zero absoluto");
    }
    this._celsius = valor;
  },

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  },

  set fahrenheit(valor) {
    this._celsius = ((valor - 32) * 5) / 9;
  },
};

temperatura.celsius = 25;
console.log(temperatura.fahrenheit); // 77

temperatura.fahrenheit = 32;
console.log(temperatura.celsius); // 0
```

### Getters/Setters Avançados

```javascript
// Getters/Setters computados
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  // Getter computado
  get valorTotal() {
    return this.preco * this.quantidade;
  }

  // Setter que atualiza múltiplas propriedades
  set desconto(percentual) {
    if (percentual < 0 || percentual > 100) {
      throw new Error("Desconto deve estar entre 0 e 100%");
    }
    this.preco = this.preco * (1 - percentual / 100);
  }

  // Getter que depende de estado externo
  get emEstoque() {
    return this.quantidade > 0;
  }

  // Setter com efeitos colaterais
  set quantidade(novaQuantidade) {
    const antigaQuantidade = this._quantidade || 0;
    this._quantidade = novaQuantidade;

    // Efeito colateral: log de mudança
    if (novaQuantidade > antigaQuantidade) {
      console.log(`Estoque de ${this.nome} aumentou para ${novaQuantidade}`);
    } else if (novaQuantidade < antigaQuantidade) {
      console.log(`Estoque de ${this.nome} diminuiu para ${novaQuantidade}`);
    }
  }

  get quantidade() {
    return this._quantidade || 0;
  }
}

// Getters/Setters em herança
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  get descricao() {
    return `Animal chamado ${this.nome}`;
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome);
    this.raca = raca;
  }

  // Sobrescrevendo getter
  get descricao() {
    return `${super.descricao}, da raça ${this.raca}`;
  }

  // Novo getter
  get ehDeRaca() {
    return this.raca && this.raca !== "vira-lata";
  }
}

const rex = new Cachorro("Rex", "Labrador");
console.log(rex.descricao); // "Animal chamado Rex, da raça Labrador"
console.log(rex.ehDeRaca); // true
```

### Object.defineProperty()

```javascript
// Definindo getters/setters dinamicamente
const pessoa = {};

Object.defineProperty(pessoa, "nome", {
  get: function () {
    return this._nome || "Anônimo";
  },
  set: function (valor) {
    if (typeof valor === "string" && valor.length > 0) {
      this._nome = valor;
    } else {
      throw new Error("Nome inválido");
    }
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(pessoa, "idade", {
  get: function () {
    return this._idade;
  },
  set: function (valor) {
    if (valor >= 0 && valor <= 150) {
      this._idade = valor;
    }
  },
  enumerable: true,
});

pessoa.nome = "João";
pessoa.idade = 25;

console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 25

// Definindo múltiplas propriedades
const carro = {};

Object.defineProperties(carro, {
  marca: {
    value: "Toyota",
    writable: false, // readonly
    enumerable: true,
  },
  modelo: {
    value: "Corolla",
    writable: true,
    enumerable: true,
  },
  ano: {
    get() {
      return this._ano;
    },
    set(valor) {
      const anoAtual = new Date().getFullYear();
      if (valor >= 1886 && valor <= anoAtual) {
        this._ano = valor;
      }
    },
    enumerable: true,
  },
  // Propriedade calculada
  idade: {
    get() {
      if (!this._ano) return null;
      return new Date().getFullYear() - this._ano;
    },
    enumerable: true,
  },
});

carro.ano = 2015;
console.log(carro.idade); // Idade do carro em anos
```

## Object Methods

### Object.keys(), Object.values(), Object.entries()

```javascript
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  [Symbol("id")]: 123, // símbolos não são enumeráveis por padrão
};

// Object.keys() - array de chaves enumeráveis próprias
console.log(Object.keys(pessoa));
// ['nome', 'idade', 'profissao']

// Object.values() - array de valores enumeráveis próprios
console.log(Object.values(pessoa));
// ['João', 30, 'Desenvolvedor']

// Object.entries() - array de pares [chave, valor]
console.log(Object.entries(pessoa));
// [['nome', 'João'], ['idade', 30], ['profissao', 'Desenvolvedor']]

// Iterando sobre entries
for (const [chave, valor] of Object.entries(pessoa)) {
  console.log(`${chave}: ${valor}`);
}

// Convertendo objeto para Map
const mapa = new Map(Object.entries(pessoa));

// Reconstruindo objeto
const novoObjeto = Object.fromEntries([
  ["nome", "Maria"],
  ["idade", 25],
]);

// Com propriedades não enumeráveis
const obj = Object.create(null, {
  x: { value: 1, enumerable: false },
  y: { value: 2, enumerable: true },
});

console.log(Object.keys(obj)); // ['y'] apenas
console.log(Object.getOwnPropertyNames(obj)); // ['x', 'y'] todas
```

### Object.assign()

```javascript
// Object.assign() - copia propriedades enumeráveis de origem para destino
const destino = { a: 1, b: 2 };
const origem1 = { b: 3, c: 4 };
const origem2 = { c: 5, d: 6 };

// Copia origem1 e origem2 para destino
const resultado = Object.assign(destino, origem1, origem2);

console.log(destino); // { a: 1, b: 3, c: 5, d: 6 }
console.log(resultado); // { a: 1, b: 3, c: 5, d: 6 }
console.log(destino === resultado); // true (mesmo objeto)

// Cópia superficial (shallow copy)
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copia = Object.assign({}, obj);
copia.b.c = 3;

console.log(obj.b.c); // 3 (modificou o original também!)

// Clonagem de objetos
function cloneSimples(objeto) {
  return Object.assign({}, objeto);
}

function cloneProfundo(objeto) {
  return JSON.parse(JSON.stringify(objeto)); // Não copia funções ou undefined
}

// Merge de múltiplos objetos
const padroes = { cor: "preto", tamanho: "M" };
const usuario = { cor: "azul" };
const pedido = { quantidade: 2 };

const config = Object.assign({}, padroes, usuario, pedido);
console.log(config); // { cor: 'azul', tamanho: 'M', quantidade: 2 }

// Com símbolos
const sym = Symbol("id");
const objComSymbol = { [sym]: 123, x: 1 };
const copiaComSymbol = Object.assign({}, objComSymbol);

console.log(copiaComSymbol[sym]); // 123 (símbolos também são copiados)
```

### Object.freeze(), Object.seal(), Object.preventExtensions()

```javascript
// Object.preventExtensions() - previne adição de novas propriedades
const obj1 = { prop: 42 };
Object.preventExtensions(obj1);

obj1.novaProp = 123; // Silenciosamente falha ou TypeError em strict mode
console.log(obj1.novaProp); // undefined

// Ainda pode modificar ou deletar propriedades existentes
obj1.prop = 100;
delete obj1.prop;

console.log(Object.isExtensible(obj1)); // false

// Object.seal() - previne adição/remoção, permite modificação
const obj2 = { prop: 42 };
Object.seal(obj2);

obj2.novaProp = 123; // Ignorado
delete obj2.prop; // Ignorado
obj2.prop = 100; // Funciona

console.log(Object.isSealed(obj2)); // true
console.log(Object.isExtensible(obj2)); // false (sealed implica not extensible)

// Object.freeze() - previne qualquer modificação
const obj3 = {
  prop: 42,
  objetoInterno: { x: 1 },
};
Object.freeze(obj3);

obj3.prop = 100; // Ignorado
obj3.novaProp = 123; // Ignorado
delete obj3.prop; // Ignorado

// Modificação profunda ainda funciona (freeze é shallow)
obj3.objetoInterno.x = 2; // Funciona!

console.log(Object.isFrozen(obj3)); // true
console.log(Object.isSealed(obj3)); // true (frozen implica sealed)

// Freeze profundo
function freezeProfundo(objeto) {
  Object.freeze(objeto);

  Object.getOwnPropertyNames(objeto).forEach((prop) => {
    if (
      objeto[prop] !== null &&
      typeof objeto[prop] === "object" &&
      !Object.isFrozen(objeto[prop])
    ) {
      freezeProfundo(objeto[prop]);
    }
  });

  return objeto;
}

// Exemplo prático: constantes
const CONSTANTES = Object.freeze({
  PI: 3.14159,
  GRAVIDADE: 9.81,
  CONFIG: Object.freeze({
    // freeze aninhado
    timeout: 5000,
    retries: 3,
  }),
});
```

### Object.create() e Object.getPrototypeOf()

```javascript
// Object.create() - cria objeto com prototype específico
const animal = {
  respirar() {
    return "Estou respirando";
  },
};

const cachorro = Object.create(animal, {
  nome: {
    value: "Rex",
    writable: true,
    enumerable: true,
  },
  latir: {
    value: function () {
      return `${this.nome} está latindo!`;
    },
    writable: true,
    enumerable: true,
  },
});

console.log(cachorro.respirar()); // "Estou respirando" (herdado)
console.log(cachorro.latir()); // "Rex está latindo!" (próprio)
console.log(Object.getPrototypeOf(cachorro) === animal); // true

// Criando objeto sem prototype (null prototype)
const objSemProto = Object.create(null);
objSemProto.x = 1;

console.log(objSemProto.toString); // undefined
console.log("x" in objSemProto); // true
// console.log(objSemProto.hasOwnProperty('x')); // TypeError

// Herança com Object.create()
function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.saudar = function () {
  return `Olá, ${this.nome}`;
};

function Funcionario(nome, cargo) {
  Pessoa.call(this, nome);
  this.cargo = cargo;
}

// Herdando prototype
Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.trabalhar = function () {
  return `${this.nome} está trabalhando como ${this.cargo}`;
};

// Object.getPrototypeOf() - obtém prototype
const func = new Funcionario("João", "Dev");
console.log(Object.getPrototypeOf(func) === Funcionario.prototype); // true
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(func)) === Pessoa.prototype
); // true
```

### Object.hasOwn(), Object.getOwnPropertyDescriptor()

```javascript
// Object.hasOwn() - verifica se propriedade é própria (ES2022)
const obj = { x: 1 };

console.log(Object.hasOwn(obj, "x")); // true
console.log(Object.hasOwn(obj, "toString")); // false (herdado)

// Alternativa antiga: hasOwnProperty
console.log(obj.hasOwnProperty("x")); // true

// Object.getOwnPropertyDescriptor() - obtém descritor da propriedade
const obj2 = {};

Object.defineProperty(obj2, "propriedade", {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false,
});

const descritor = Object.getOwnPropertyDescriptor(obj2, "propriedade");
console.log(descritor);
// {
//   value: 42,
//   writable: false,
//   enumerable: true,
//   configurable: false
// }

// Object.getOwnPropertyDescriptors() - todos descritores
const obj3 = {
  nome: "João",
  idade: 30,
};

const descritores = Object.getOwnPropertyDescriptors(obj3);
console.log(descritores);

// Clonagem exata com descritores
const cloneExato = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(obj3)
);

// Com símbolos
const sym = Symbol("id");
const objComSymbol = {
  [sym]: 123,
  x: 1,
};

console.log(Object.getOwnPropertyDescriptors(objComSymbol));
// Inclui descritor para o símbolo também
```

### Outros Métodos Úteis de Object

```javascript
// Object.is() - comparação estrita (similar a ===, mas trata NaN e ±0)
console.log(Object.is(25, 25)); // true
console.log(Object.is("foo", "foo")); // true
console.log(Object.is(window, window)); // true
console.log(Object.is([], [])); // false
console.log(Object.is(null, null)); // true
console.log(Object.is(undefined, undefined)); // true

// Diferenças do ===
console.log(Object.is(NaN, NaN)); // true (diferente do ===)
console.log(Object.is(0, -0)); // false (diferente do ===)
console.log(Object.is(+0, -0)); // false

// Object.fromEntries() - converte pares [chave, valor] para objeto (ES2019)
const entries = [
  ["nome", "João"],
  ["idade", 30],
  ["profissao", "Dev"],
];

const pessoa = Object.fromEntries(entries);
console.log(pessoa); // { nome: 'João', idade: 30, profissao: 'Dev' }

// Útil para converter Map para Object
const mapa = new Map([
  ["nome", "Maria"],
  ["idade", 25],
]);

const objDoMapa = Object.fromEntries(mapa);
console.log(objDoMapa); // { nome: 'Maria', idade: 25 }

// Object.groupBy() - agrupa por propriedade (ES2023)
const inventario = [
  { nome: "maçã", tipo: "fruta", quantidade: 10 },
  { nome: "banana", tipo: "fruta", quantidade: 5 },
  { nome: "cenoura", tipo: "vegetal", quantidade: 8 },
  { nome: "batata", tipo: "vegetal", quantidade: 15 },
];

const agrupado = Object.groupBy(inventario, ({ tipo }) => tipo);
console.log(agrupado);
// {
//   fruta: [
//     { nome: 'maçã', tipo: 'fruta', quantidade: 10 },
//     { nome: 'banana', tipo: 'fruta', quantidade: 5 }
//   ],
//   vegetal: [
//     { nome: 'cenoura', tipo: 'vegetal', quantidade: 8 },
//     { nome: 'batata', tipo: 'vegetal', quantidade: 15 }
//   ]
// }

// Object.hasOwn() vs in operator
const obj = { x: 1 };
const proto = { y: 2 };
Object.setPrototypeOf(obj, proto);

console.log("x" in obj); // true (própria)
console.log("y" in obj); // true (herdada)
console.log(Object.hasOwn(obj, "x")); // true
console.log(Object.hasOwn(obj, "y")); // false
```

Este guia abrangente cobre todos os aspectos de objetos e programação orientada a objetos em JavaScript, desde os conceitos fundamentais até técnicas avançadas. Cada seção inclui exemplos práticos que demonstram o uso correto dos diferentes padrões e APIs de objetos.
