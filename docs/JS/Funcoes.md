# 2. FUNÇÕES

## Declarações de Funções

### Function Declaration (Declaração de Função)

```javascript
// Sintaxe básica
function nomeDaFuncao(parametro1, parametro2) {
  // corpo da função
  return resultado;
}

// Exemplo
function somar(a, b) {
  return a + b;
}

// Características:
// 1. São hoisted (podem ser chamadas antes da declaração)
console.log(somar(2, 3)); // 5 (funciona mesmo declarada depois)

// 2. Podem ser nomeadas recursivamente
function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1); // chama a si mesma pelo nome
}

// 3. Podem ser propriedades de objetos
const calculadora = {
  somar: function somar(a, b) {
    return a + b;
  },
};

// 4. Têm um objeto arguments (exceto arrow functions)
function listaArgumentos() {
  console.log(arguments); // objeto array-like
  console.log(arguments[0]); // primeiro argumento
  console.log(arguments.length); // quantidade de argumentos
}
```

### Function Expression (Expressão de Função)

```javascript
// Sintaxe básica
const nomeDaFuncao = function (parametro1, parametro2) {
  return parametro1 + parametro2;
};

// Exemplo
const multiplicar = function (a, b) {
  return a * b;
};

// Function expression nomeada
const dividir = function divisao(a, b) {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
};

// Características:
// 1. NÃO são hoisted como declarations
// console.log(multiplicar(2, 3)); // Error se chamada antes da declaração

// 2. Útil para callbacks
[1, 2, 3].map(function (item) {
  return item * 2;
});

// 3. Pode ser imediatamente invocada (IIFE)
(function () {
  console.log("IIFE executada!");
})();

// 4. Pode ser passada como argumento
function executarOperacao(operacao, a, b) {
  return operacao(a, b);
}

executarOperacao(
  function (x, y) {
    return x * y;
  },
  5,
  3
);
```

### Arrow Functions

```javascript
// Sintaxe básica
const nomeDaFuncao = (parametros) => {
  // corpo da função
  return resultado;
};

// Exemplos com diferentes números de parâmetros
const saudacao = () => "Olá, mundo!";
const quadrado = (x) => x * x;
const soma = (a, b) => a + b;

// Retorno implícito (sem chaves)
const duplicar = (numero) => numero * 2;
const criarPessoa = (nome, idade) => ({ nome, idade });

// Corpo com múltiplas expressões (precisa de chaves)
const processar = (valor) => {
  const resultado = valor * 2;
  console.log(resultado);
  return resultado;
};

// Características especiais:
// 1. NÃO têm seu próprio 'this' (herdam do escopo pai)
const relogio = {
  hora: 12,
  mostrarHoraTradicional: function () {
    console.log(this.hora); // 12
  },
  mostrarHoraArrow: () => {
    console.log(this.hora); // undefined (this do escopo global)
  },
};

// 2. NÃO têm objeto 'arguments'
const semArguments = () => {
  // console.log(arguments); // ReferenceError
};

// 3. NÃO podem ser usadas como construtores
// const Pessoa = (nome) => { this.nome = nome; };
// new Pessoa("João"); // TypeError

// 4. NÃO têm propriedade 'prototype'
// console.log(soma.prototype); // undefined

// 5. Não podem ser nomeadas (são sempre anônimas)
const fatorial = (n) => {
  if (n <= 1) return 1;
  return n * fatorial(n - 1); // ainda pode ser recursiva
};
```

### Métodos de Objeto (Shorthand)

```javascript
// ES5 - forma tradicional
const objetoES5 = {
  nome: "Exemplo",
  metodo: function () {
    return this.nome;
  },
};

// ES6+ - shorthand method
const objetoES6 = {
  nome: "Exemplo",
  metodo() {
    return this.nome;
  },
};

// Getters e Setters
const pessoa = {
  _idade: 0,

  get idade() {
    console.log("Getter chamado");
    return this._idade;
  },

  set idade(valor) {
    if (valor >= 0) {
      console.log("Setter chamado");
      this._idade = valor;
    }
  },
};

pessoa.idade = 25; // Setter chamado
console.log(pessoa.idade); // Getter chamado, 25

// Métodos computados (computed property names)
const metodoNome = "calcular";
const calculadora = {
  [metodoNome](a, b) {
    return a + b;
  },
};
```

### Constructor Functions

```javascript
// Função construtora tradicional
function Pessoa(nome, idade) {
  // Propriedades da instância
  this.nome = nome;
  this.idade = idade;

  // Método da instância (criado para cada objeto)
  this.apresentar = function () {
    return `Olá, meu nome é ${this.nome}`;
  };
}

// Método do protótipo (compartilhado entre todas instâncias)
Pessoa.prototype.envelhecer = function () {
  this.idade++;
  return this.idade;
};

// Criando instâncias
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

// Verificando instância
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1.constructor === Pessoa); // true

// O que 'new' faz:
// 1. Cria um novo objeto vazio
// 2. Define o prototype do objeto para Person.prototype
// 3. Executa a função com 'this' apontando para o novo objeto
// 4. Retorna o novo objeto (a não ser que a função retorne outro objeto)
```

## Parâmetros

### Parâmetros Default (Valores Padrão)

```javascript
// ES5 - forma antiga
function saudacaoES5(nome) {
  nome = nome || "Visitante";
  return "Olá, " + nome;
}

// ES6+ - forma moderna
function saudacao(nome = "Visitante", saudacao = "Olá") {
  return `${saudacao}, ${nome}!`;
}

// Parâmetros padrão podem ser:
// 1. Valores primitivos
function multiplicar(a, b = 2) {
  return a * b;
}

// 2. Expressões
function criarId(prefixo = "id", sequencia = Date.now()) {
  return `${prefixo}_${sequencia}`;
}

// 3. Funções
function chamarAPI(url, callback = () => {}) {
  // implementação
  callback();
}

// 4. Outros parâmetros
function configurar(opcoes = {}, parametros = opcoes.parametros || []) {
  // opcoes é avaliado primeiro, então pode ser usado em parametros
}

// Parâmetros padrão são avaliados no momento da chamada
let contador = 0;
function incrementar(valor = ++contador) {
  return valor;
}

incrementar(); // 1 (contador incrementado)
incrementar(); // 2 (contador incrementado novamente)
incrementar(10); // 10 (valor explícito, contador não incrementado)

// Parâmetros padrão criam seu próprio escopo
let x = 1;
function teste(a = x, b = a) {
  // a e b são 1 (do x externo)
}
```

### Rest Parameters (Parâmetros Rest)

```javascript
// Sintaxe: ...nomeDoParametro
function somarTodos(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

// Características:
// 1. Coleta todos argumentos restantes em um array
function listar(primeiro, segundo, ...resto) {
  console.log(primeiro); // 1
  console.log(segundo); // 2
  console.log(resto); // [3, 4, 5]
}

listar(1, 2, 3, 4, 5);

// 2. Substitui o uso de 'arguments'
function antigaForma() {
  // arguments é array-like, não array
  const argsArray = Array.from(arguments);
  return argsArray.reduce((acc, val) => acc + val, 0);
}

function novaForma(...args) {
  // args já é um array
  return args.reduce((acc, val) => acc + val, 0);
}

// 3. Deve ser o último parâmetro
// function erro(a, ...rest, b) {} // SyntaxError

// 4. Pode ser desestruturado
function processarPessoas(...pessoas) {
  pessoas.forEach(({ nome, idade }) => {
    console.log(`${nome} tem ${idade} anos`);
  });
}

// 5. Útil para funções que aceitam número variável de argumentos
function criarElemento(tag, ...classes) {
  const elemento = document.createElement(tag);
  classes.forEach((classe) => elemento.classList.add(classe));
  return elemento;
}
```

### Spread Operator (Operador Spread)

```javascript
// Sintaxe: ...expressao
// Usado para expandir elementos iteráveis

// 1. Em chamadas de função (spread arguments)
const numeros = [1, 2, 3, 4, 5];
console.log(Math.max(...numeros)); // 5

function somarTres(a, b, c) {
  return a + b + c;
}
somarTres(...[1, 2, 3]); // 6

// 2. Em arrays
const parte1 = [1, 2, 3];
const parte2 = [4, 5, 6];
const completo = [...parte1, ...parte2]; // [1, 2, 3, 4, 5, 6]

// Clonar array
const original = [1, 2, 3];
const copia = [...original];

// Adicionar elementos
const comInicio = [0, ...original]; // [0, 1, 2, 3]
const comFim = [...original, 4]; // [1, 2, 3, 4]

// 3. Em objetos (ES2018+)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinado = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Clonar objeto (cópia superficial)
const pessoa = { nome: "João", idade: 30 };
const copiaPessoa = { ...pessoa };

// Sobrescrever propriedades
const atualizado = { ...pessoa, idade: 31 }; // { nome: "João", idade: 31 }

// Combinar com novas propriedades
const comEmail = { ...pessoa, email: "joao@exemplo.com" };

// 4. Com strings
const chars = [..."Olá"]; // ['O', 'l', 'á']

// 5. Com Sets e Maps
const set = new Set([1, 2, 3]);
const arrayDoSet = [...set]; // [1, 2, 3]

// 6. Diferença entre rest e spread
function exemplo(...rest) {
  // rest: junta em array
  console.log(rest);
}

const arr = [1, 2, 3];
exemplo(...arr); // spread: expande array
```

### Parâmetros Nomeados (Pattern usando objetos)

```javascript
// Em vez de muitos parâmetros posicionais
function configurarAntigo(width, height, color, border, margin) {
  // difícil de lembrar ordem
}

// Usar objeto com destructuring
function configurarNovo({
  width,
  height,
  color = "black",
  border = false,
  margin = 10,
}) {
  console.log(`Largura: ${width}, Altura: ${height}`);
}

// Chamada mais legível
configurarNovo({
  width: 100,
  height: 200,
  color: "blue",
});

// Com valores padrão para o objeto completo
function criarUsuario(dados = {}) {
  const { nome = "Anônimo", idade = 0, email } = dados;
  return { nome, idade, email };
}

// Parâmetros obrigatórios
function requerParametro({ nome, idade }) {
  if (!nome || !idade) {
    throw new Error("Nome e idade são obrigatórios");
  }
  return { nome, idade };
}
```

## Closures e Lexical Scoping

### Lexical Scoping (Escopo Léxico)

```javascript
// JavaScript usa escopo léxico (estático)
let global = "global";

function externa() {
  let externaVar = "externa";

  function interna() {
    let internaVar = "interna";
    console.log(global); // "global" - do escopo global
    console.log(externaVar); // "externa" - do escopo pai
    console.log(internaVar); // "interna" - do próprio escopo
  }

  interna();
  // console.log(internaVar); // Error - não acessível
}

externa();

// Escopo é determinado pela posição no código, não pela chamada
let variavel = "global";

function mostrar() {
  console.log(variavel);
}

function teste() {
  let variavel = "local";
  mostrar(); // "global" (não "local") - escopo léxico
}

teste();
```

### Closures (Fechamentos)

```javascript
// Closure: função + referências ao escopo léxico onde foi criada

// Exemplo básico
function criarContador() {
  let contagem = 0; // variável privada

  // A função interna "lembra" do escopo onde foi criada
  return function () {
    contagem++;
    return contagem;
  };
}

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
// contagem não é acessível diretamente

// Múltiplas closures
function criarGerenciador() {
  let dados = {};

  return {
    set: function (chave, valor) {
      dados[chave] = valor;
    },
    get: function (chave) {
      return dados[chave];
    },
    getAll: function () {
      return { ...dados };
    },
  };
}

const gerenciador = criarGerenciador();
gerenciador.set("nome", "João");
console.log(gerenciador.get("nome")); // "João"

// Loop comum com closure (problema clássico)
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // 4, 4, 4 (não 1, 2, 3)
  }, 100);
}

// Soluções:
// 1. Usar let (escopo de bloco)
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // 1, 2, 3
  }, 100);
}

// 2. IIFE (Immediately Invoked Function Expression)
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // 1, 2, 3
    }, 100);
  })(i);
}

// 3. Bind
for (var i = 1; i <= 3; i++) {
  setTimeout(
    function (j) {
      console.log(j); // 1, 2, 3
    }.bind(null, i),
    100
  );
}
```

### Use Cases de Closures

```javascript
// 1. Dados privados (Module Pattern)
const ContadorModule = (function () {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log(contador);
  }

  function getContador() {
    return contador;
  }

  return {
    incrementar,
    getContador,
  };
})();

// 2. Memoização (cache)
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache[chave]) {
      console.log("Retornando do cache");
      return cache[chave];
    }

    console.log("Calculando...");
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

const fatorialMemo = memoize(function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
});

// 3. Currying e aplicação parcial
function criarMultiplicador(multiplicador) {
  return function (numero) {
    return numero * multiplicador;
  };
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5)); // 10
console.log(triplicar(5)); // 15

// 4. Gerenciamento de estado
function criarEstado(estadoInicial) {
  let estado = estadoInicial;

  return {
    get: () => estado,
    set: (novoEstado) => {
      const estadoAntigo = estado;
      estado = novoEstado;
      console.log(`Estado mudou de ${estadoAntigo} para ${estado}`);
    },
    atualizar: (fn) => {
      estado = fn(estado);
    },
  };
}
```

## Higher-Order Functions

### Funções que Recebem Funções como Argumento

```javascript
// Array methods são higher-order functions
const numeros = [1, 2, 3, 4, 5];

// 1. forEach - executa função para cada elemento
numeros.forEach(function (numero, indice, array) {
  console.log(`Índice ${indice}: ${numero}`);
});

// 2. map - transforma cada elemento
const dobrados = numeros.map((numero) => numero * 2);

// 3. filter - filtra elementos
const pares = numeros.filter((numero) => numero % 2 === 0);

// 4. reduce - reduz a um valor
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// 5. find - encontra primeiro que satisfaz condição
const primeiroMaiorQue3 = numeros.find((numero) => numero > 3);

// 6. some - verifica se algum satisfaz
const temPar = numeros.some((numero) => numero % 2 === 0);

// 7. every - verifica se todos satisfazem
const todosPositivos = numeros.every((numero) => numero > 0);

// 8. sort - ordena com função de comparação
const desordenados = [3, 1, 4, 2];
desordenados.sort((a, b) => a - b); // crescente
desordenados.sort((a, b) => b - a); // decrescente
```

### Funções que Retornam Funções

```javascript
// Factory functions
function criarComparador(propriedade, ordem = "asc") {
  return function (a, b) {
    const valorA = a[propriedade];
    const valorB = b[propriedade];

    if (valorA < valorB) {
      return ordem === "asc" ? -1 : 1;
    }
    if (valorA > valorB) {
      return ordem === "asc" ? 1 : -1;
    }
    return 0;
  };
}

const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 20 },
];

pessoas.sort(criarComparador("idade"));
pessoas.sort(criarComparador("nome", "desc"));

// Function decorators
function withLogging(fn) {
  return function (...args) {
    console.log(`Chamando ${fn.name} com argumentos:`, args);
    const resultado = fn(...args);
    console.log(`${fn.name} retornou:`, resultado);
    return resultado;
  };
}

function somar(a, b) {
  return a + b;
}

const somarComLog = withLogging(somar);
somarComLog(2, 3);

// Conditional execution
function criarExecutadorCondicional(condicao, fnVerdadeiro, fnFalso) {
  return function (...args) {
    if (condicao(...args)) {
      return fnVerdadeiro(...args);
    } else {
      return fnFalso(...args);
    }
  };
}
```

### Composição de Funções

```javascript
// Composição manual
function compor(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function dobrar(x) {
  return x * 2;
}
function incrementar(x) {
  return x + 1;
}

const incrementarEDobrar = compor(dobrar, incrementar);
console.log(incrementarEDobrar(5)); // (5 + 1) * 2 = 12

// Composição com múltiplas funções
function comporMultiplo(...fns) {
  return function (valorInicial) {
    return fns.reduceRight((acc, fn) => fn(acc), valorInicial);
  };
}

function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2)}`;
}

const pipeline = comporMultiplo(formatarMoeda, dobrar, incrementar);

console.log(pipeline(5)); // R$ 12.00

// Pipe (esquerda para direita)
function pipe(...fns) {
  return function (valorInicial) {
    return fns.reduce((acc, fn) => fn(acc), valorInicial);
  };
}

const pipeLine = pipe(incrementar, dobrar, formatarMoeda);

console.log(pipeLine(5)); // R$ 12.00
```

## Métodos de Função (call, apply, bind)

### Método call()

```javascript
// call() - chama função com 'this' específico e argumentos individuais
function saudacao(mensagem, ponto) {
  return `${mensagem}, ${this.nome}${ponto}`;
}

const pessoa = { nome: "João" };

// Chamando com call
console.log(saudacao.call(pessoa, "Olá", "!")); // "Olá, João!"

// Uso comum: emprestar métodos
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

// Array.prototype.push.call permite usar push em array-like objects
Array.prototype.push.call(lista1, ...lista2);
console.log(lista1); // [1, 2, 3, 4, 5, 6]

// Verificar tipo
function verificarTipo() {
  console.log(this instanceof Array ? "É array" : "Não é array");
}

verificarTipo.call([]); // "É array"
verificarTipo.call({}); // "Não é array"

// Herança de construtores
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

function Alimento(nome, preco, validade) {
  Produto.call(this, nome, preco); // chama construtor pai
  this.validade = validade;
}
```

### Método apply()

```javascript
// apply() - similar ao call, mas aceita argumentos como array
function somar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];

// Com call (argumentos individuais)
console.log(somar.call(null, 1, 2, 3)); // 6

// Com apply (array de argumentos)
console.log(somar.apply(null, numeros)); // 6

// Diferença prática: apply é útil quando não sabemos quantos argumentos
function encontrarMaior() {
  // arguments é array-like
  return Math.max.apply(null, arguments);
}

console.log(encontrarMaior(1, 5, 3, 9, 2)); // 9

// Ou com arrays
const valores = [10, 20, 30];
console.log(Math.max.apply(null, valores)); // 30

// ES6+ com spread operator torna apply menos necessário
console.log(Math.max(...valores)); // 30

// Ainda útil para encadear construtores
function SuperClasse(nome) {
  this.nome = nome;
}

function SubClasse(nome, extra) {
  SuperClasse.apply(this, [nome]); // passa array
  this.extra = extra;
}
```

### Método bind()

```javascript
// bind() - cria nova função com 'this' fixo e argumentos pré-definidos
const pessoa = {
  nome: "Maria",
  saudar: function (saudacao) {
    return `${saudacao}, eu sou ${this.nome}`;
  },
};

// Criando função com 'this' fixo
const saudarMaria = pessoa.saudar.bind(pessoa);
console.log(saudarMaria("Olá")); // "Olá, eu sou Maria"

// Com argumentos pré-definidos (partial application)
function multiplicar(a, b) {
  return a * b;
}

const dobrar = multiplicar.bind(null, 2);
console.log(dobrar(5)); // 10 (2 * 5)

const triplicar = multiplicar.bind(null, 3);
console.log(triplicar(5)); // 15 (3 * 5)

// Currying com bind
function soma(a, b, c) {
  return a + b + c;
}

const somaParcial = soma.bind(null, 1, 2);
console.log(somaParcial(3)); // 6 (1 + 2 + 3)

// Uso em event handlers
const botao = {
  contador: 0,
  incrementar: function () {
    this.contador++;
    console.log(this.contador);
  },
};

// Sem bind - this seria o botão HTML
// document.querySelector('button').addEventListener('click', botao.incrementar); // Erro

// Com bind - this é o objeto botao
// document.querySelector('button').addEventListener('click', botao.incrementar.bind(botao));

// Bind não pode ser substituído por arrow function quando precisamos de partial application
const somaArrow = (a, b, c) => a + b + c;
// Não há bind em arrow functions, mas podemos usar wrapper
const somaParcialArrow = (c) => somaArrow(1, 2, c);

// Bind cria nova função, não executa imediatamente
function original() {
  return this.valor;
}
const bound = original.bind({ valor: 42 });
console.log(bound()); // 42

// Bind múltiplas vezes
const obj1 = { x: 1 };
const obj2 = { x: 2 };

function getX() {
  return this.x;
}

const bound1 = getX.bind(obj1);
const bound2 = bound1.bind(obj2); // bind subsequente NÃO sobrescreve

console.log(bound1()); // 1
console.log(bound2()); // 1 (ainda ligada a obj1)
```

### Comparação dos Três Métodos

```javascript
function apresentar(sobrenome, profissao) {
  return `${this.nome} ${sobrenome} é ${profissao}`;
}

const pessoa = { nome: "Carlos" };

// call - executa imediatamente, argumentos separados
console.log(apresentar.call(pessoa, "Silva", "engenheiro"));

// apply - executa imediatamente, argumentos em array
console.log(apresentar.apply(pessoa, ["Silva", "engenheiro"]));

// bind - retorna nova função, não executa imediatamente
const apresentarCarlos = apresentar.bind(pessoa, "Silva");
console.log(apresentarCarlos("engenheiro"));
console.log(apresentarCarlos("médico")); // pode reusar

// Tabela comparativa:
// Método  | Executa? | Argumentos        | Retorna
// call    | Sim      | Individuais       | Resultado da função
// apply   | Sim      | Array             | Resultado da função
// bind    | Não      | Individuais (parcial) | Nova função
```

### Uso Avançado e Patterns

```javascript
// Soft binding (polyfill para Function.prototype.softBind)
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    const fn = this;
    const curried = [].slice.call(arguments, 1);
    const bound = function () {
      return fn.apply(
        !this || this === (window || global) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}

// Debouncing com bind
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Throttling com bind
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Mixins com apply
const mixin = {
  dizerNome() {
    console.log(this.nome);
  },
  dizerIdade() {
    console.log(this.idade);
  },
};

function aplicarMixins(classeAlvo, ...mixins) {
  mixins.forEach((mixin) => {
    Object.getOwnPropertyNames(mixin).forEach((nome) => {
      if (nome !== "constructor") {
        classeAlvo.prototype[nome] = mixin[nome];
      }
    });
  });
}
```

## Generator Functions

### Sintaxe Básica

```javascript
// Declaração com function*
function* geradorSimples() {
  yield 1;
  yield 2;
  yield 3;
}

// Uso
const gen = geradorSimples();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generator function expression
const geradorExpr = function* () {
  yield "a";
  yield "b";
};

// Método generator em objeto
const objetoComGerador = {
  *gerador() {
    yield 1;
    yield 2;
  },
};

// Classe com método generator
class ClasseComGerador {
  *gerador() {
    yield "valor";
  }
}
```

### Controle de Fluxo com yield

```javascript
// yield pausa a execução
function* contadorInfinito() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const contador = contadorInfinito();
console.log(contador.next().value); // 0
console.log(contador.next().value); // 1
// Continua infinitamente...

// yield com valor de retorno
function* geradorComRetorno() {
  yield 1;
  yield 2;
  return "fim";
}

const g = geradorComRetorno();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: "fim", done: true }

// yield* para delegar para outro generator
function* gerador1() {
  yield "a";
  yield "b";
}

function* gerador2() {
  yield "x";
  yield* gerador1(); // delega para gerador1
  yield "y";
}

const delegado = gerador2();
console.log([...delegado]); // ['x', 'a', 'b', 'y']

// yield* também funciona com iteráveis
function* iterarArray() {
  yield* [1, 2, 3];
  yield* "abc";
}
```

### Passando Valores para next()

```javascript
// next() pode receber valor que se torna o resultado do yield
function* geradorComEntrada() {
  const nome = yield "Qual seu nome?";
  const idade = yield `Olá ${nome}, qual sua idade?`;
  yield `${nome} tem ${idade} anos`;
}

const gen = geradorComEntrada();

console.log(gen.next().value); // "Qual seu nome?"
console.log(gen.next("João").value); // "Olá João, qual sua idade?"
console.log(gen.next(30).value); // "João tem 30 anos"

// throw() para lançar erro no generator
function* geradorComErro() {
  try {
    yield 1;
    yield 2;
  } catch (e) {
    console.log("Erro capturado:", e);
    yield 3;
  }
}

const g = geradorComErro();
console.log(g.next()); // { value: 1, done: false }
console.log(g.throw("Oops")); // Erro capturado: Oops, { value: 3, done: false }

// return() para finalizar prematuramente
function* geradorParaReturn() {
  yield 1;
  yield 2;
  yield 3;
}

const gr = geradorParaReturn();
console.log(gr.next()); // { value: 1, done: false }
console.log(gr.return("fim")); // { value: "fim", done: true }
console.log(gr.next()); // { value: undefined, done: true }
```

### Use Cases de Generators

```javascript
// 1. Iteradores personalizados
function* range(inicio, fim, passo = 1) {
  for (let i = inicio; i <= fim; i += passo) {
    yield i;
  }
}

console.log([...range(1, 5)]); // [1, 2, 3, 4, 5]

// 2. Sequências infinitas
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3

// 3. Estado interno
function* criadorDeIds() {
  let id = 1;
  while (true) {
    const incremento = yield id;
    if (incremento != null) {
      id += incremento;
    } else {
      id++;
    }
  }
}

const ids = criadorDeIds();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next(10).value); // 12 (pulou 10)
console.log(ids.next().value); // 13

// 4. Corrotinas e async-like
function* tarefas() {
  const resultado1 = yield fazerAlgo();
  const resultado2 = yield fazerOutraCoisa(resultado1);
  return resultado2;
}

// 5. Traversal de árvores
function* traverseTree(node) {
  yield node.value;
  if (node.left) yield* traverseTree(node.left);
  if (node.right) yield* traverseTree(node.right);
}
```

## Async Functions

### Sintaxe Básica

```javascript
// Declaração async function
async function buscarDados() {
  return "dados";
}

// Async function expression
const buscar = async function () {
  return "resultado";
};

// Async arrow function
const processar = async () => {
  return "processado";
};

// Async method
const api = {
  async get() {
    return { data: "dados" };
  },
};

// Async sempre retorna Promise
async function exemplo() {
  return 42;
}

exemplo().then((resultado) => {
  console.log(resultado); // 42
});
```

### await Keyword

```javascript
// await pausa execução até Promise resolver
async function exemploAwait() {
  console.log("Início");

  // Simulando operação assíncrona
  const resultado = await new Promise((resolve) => {
    setTimeout(() => resolve("dados obtidos"), 1000);
  });

  console.log(resultado); // "dados obtidos" (após 1 segundo)
  console.log("Fim");

  return resultado;
}

// await só funciona dentro de async functions
async function multiplosAwaits() {
  const usuario = await buscarUsuario();
  const posts = await buscarPosts(usuario.id);
  const comentarios = await buscarComentarios(posts[0].id);

  return { usuario, posts, comentarios };
}

// Tratamento de erros com try/catch
async function comTratamentoErro() {
  try {
    const dados = await buscarDados();
    return dados;
  } catch (erro) {
    console.error("Erro:", erro);
    return null;
  }
}

// await com then/catch alternativo
async function semTryCatch() {
  const dados = await buscarDados().catch((erro) => {
    console.error("Falha:", erro);
    return null;
  });

  if (dados) {
    // processar dados
  }
}
```

### Execução Paralela

```javascript
// Execução sequencial (lenta)
async function sequencial() {
  const a = await tarefaA(); // espera
  const b = await tarefaB(); // espera
  return a + b;
}

// Execução paralela (rápida)
async function paralelo() {
  const [a, b] = await Promise.all([tarefaA(), tarefaB()]);
  return a + b;
}

// Promise.all - falha rápido se alguma falhar
async function comPromiseAll() {
  try {
    const resultados = await Promise.all([
      fetch("/api/1"),
      fetch("/api/2"),
      fetch("/api/3"),
    ]);
    return resultados;
  } catch (erro) {
    // Se qualquer fetch falhar, cai aqui
    console.error("Uma das requisições falhou:", erro);
  }
}

// Promise.allSettled - espera todas, mesmo com falhas
async function comAllSettled() {
  const resultados = await Promise.allSettled([
    Promise.resolve("sucesso"),
    Promise.reject("falha"),
    Promise.resolve("outro sucesso"),
  ]);

  const sucessos = resultados
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  const falhas = resultados
    .filter((r) => r.status === "rejected")
    .map((r) => r.reason);
}

// Promise.race - primeiro que resolver (ou rejeitar)
async function comRace() {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), 5000)
  );

  const dados = await Promise.race([fetch("/api/dados"), timeout]);

  return dados;
}

// Promise.any - primeiro que resolver com sucesso
async function comAny() {
  const primeiroSucesso = await Promise.any([
    fetch("/servidor1"),
    fetch("/servidor2"),
    fetch("/servidor3"),
  ]);

  return primeiroSucesso;
}
```

### Async Iteration

```javascript
// for await...of para iterar sobre async iterables
async function processarStream() {
  const asyncIterable = {
    [Symbol.asyncIterator]: function () {
      let i = 0;
      return {
        next: () => {
          if (i < 3) {
            return Promise.resolve({ value: i++, done: false });
          }
          return Promise.resolve({ done: true });
        },
      };
    },
  };

  for await (let valor of asyncIterable) {
    console.log(valor); // 0, 1, 2
  }
}

// Async generators
async function* gerarDadosAsync() {
  let i = 0;
  while (i < 3) {
    // Simula operação async
    await new Promise((resolve) => setTimeout(resolve, 100));
    yield i++;
  }
}

async function consumirAsyncGenerator() {
  for await (let dado of gerarDadosAsync()) {
    console.log(dado); // 0, 1, 2 (com pausa de 100ms entre)
  }
}

// Fetch paginado com async generator
async function* fetchPaginated(url) {
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();

    yield data.items;

    hasMore = data.hasMore;
    page++;
  }
}
```

### Patterns e Best Practices

```javascript
// 1. Async IIFE
(async function () {
  const dados = await buscarDados();
  console.log(dados);
})();

// 2. Top-level await (ES2022+ em módulos)
// Em módulos ES6:
// const dados = await fetch('/api');
// console.log(dados);

// 3. Composição de async functions
async function pipelineAsync(...asyncFns) {
  let resultado;
  for (const fn of asyncFns) {
    resultado = await fn(resultado);
  }
  return resultado;
}

// 4. Retry pattern
async function comRetry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (erro) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return comRetry(fn, retries - 1, delay * 2);
    }
    throw erro;
  }
}

// 5. Timeout pattern
async function comTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`Timeout após ${ms}ms`)), ms)
  );

  return Promise.race([promise, timeout]);
}

// 6. Batch processing
async function processarEmLotes(itens, processarItem, tamanhoLote = 10) {
  const resultados = [];

  for (let i = 0; i < itens.length; i += tamanhoLote) {
    const lote = itens.slice(i, i + tamanhoLote);
    const promessas = lote.map((item) => processarItem(item));
    const resultadosLote = await Promise.all(promessas);
    resultados.push(...resultadosLote);
  }

  return resultados;
}

// 7. Circuit breaker pattern
function criarCircuitBreaker(fn, failureThreshold = 3, resetTimeout = 10000) {
  let failures = 0;
  let lastFailureTime = 0;
  let state = "CLOSED";

  return async function (...args) {
    if (state === "OPEN") {
      if (Date.now() - lastFailureTime > resetTimeout) {
        state = "HALF_OPEN";
      } else {
        throw new Error("Circuit breaker está OPEN");
      }
    }

    try {
      const resultado = await fn(...args);
      if (state === "HALF_OPEN") {
        failures = 0;
        state = "CLOSED";
      }
      return resultado;
    } catch (erro) {
      failures++;
      lastFailureTime = Date.now();

      if (failures >= failureThreshold) {
        state = "OPEN";
      }

      throw erro;
    }
  };
}
```

### Error Handling Patterns

```javascript
// 1. Wrapper com error handling
function asyncHandler(fn) {
  return function (...args) {
    return fn(...args).catch(args[args.length - 1]);
  };
}

// Uso com Express.js
app.get(
  "/rota",
  asyncHandler(async (req, res, next) => {
    const dados = await buscarDados();
    res.json(dados);
  })
);

// 2. Result pattern (como em Rust/Swift)
async function resultWrapper(fn) {
  try {
    return { success: true, data: await fn() };
  } catch (error) {
    return { success: false, error };
  }
}

// 3. Global error handler
async function comErrorHandler(promise, errorHandler) {
  try {
    return await promise;
  } catch (error) {
    return errorHandler(error);
  }
}

// 4. Tap para side effects
async function tap(promise, fn) {
  const result = await promise;
  await fn(result);
  return result;
}

// Exemplo de uso:
const dados = await tap(buscarDados(), (dados) =>
  console.log("Dados obtidos:", dados)
);
```

### Performance Considerations

```javascript
// 1. Evitar await desnecessário
async function exemploLento() {
  const a = await tarefaA(); // espera
  const b = await tarefaB(); // espera
  const c = await tarefaC(); // espera
  return a + b + c;
}

async function exemploRapido() {
  const [a, b, c] = await Promise.all([tarefaA(), tarefaB(), tarefaC()]);
  return a + b + c;
}

// 2. Lazy evaluation
function criarLazyAsync(fn) {
  let promise;
  return function () {
    if (!promise) {
      promise = fn();
    }
    return promise;
  };
}

// 3. Cache de promises
const cache = new Map();

async function buscarComCache(chave) {
  if (cache.has(chave)) {
    return cache.get(chave);
  }

  const promise = fetch(`/api/${chave}`);
  cache.set(chave, promise);

  try {
    const resultado = await promise;
    return resultado;
  } catch (erro) {
    cache.delete(chave);
    throw erro;
  }
}
```

Este guia abrangente cobre todos os aspectos das funções em JavaScript, desde conceitos fundamentais até padrões avançados de uso. Cada seção inclui exemplos práticos que demonstram o uso correto dos diferentes tipos de funções e suas características.
