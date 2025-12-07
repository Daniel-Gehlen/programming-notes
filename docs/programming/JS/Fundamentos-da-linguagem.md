# 1. FUNDAMENTOS DA LINGUAGEM

## Tipos de Dados Primitivos

### Number

```javascript
// Declaração de números
let inteiro = 42;
let decimal = 3.14;
let negativo = -10;
let notacaoCientifica = 2.5e6; // 2.5 × 10^6 = 2500000

// Valores especiais
let infinitoPositivo = Infinity;
let infinitoNegativo = -Infinity;
let naoNumero = NaN; // Not a Number

// Métodos úteis
let numero = 123.456;
numero.toFixed(2); // "123.46" - formata com 2 casas decimais
numero.toPrecision(4); // "123.5"  - formata com 4 dígitos significativos
numero.toString(); // "123.456" - converte para string

// Funções globais
parseInt("42px"); // 42 - converte string para inteiro
parseFloat("3.14abc"); // 3.14 - converte string para decimal
Number("123"); // 123 - converte para número
isNaN(NaN); // true - verifica se é NaN
isFinite(42); // true - verifica se é número finito
Math.abs(-10); // 10 - valor absoluto
Math.round(3.7); // 4 - arredonda
Math.floor(3.7); // 3 - arredonda para baixo
Math.ceil(3.2); // 4 - arredonda para cima
Math.random(); // número aleatório entre 0 e 1
Math.max(1, 5, 3); // 5 - maior valor
Math.min(1, 5, 3); // 1 - menor valor
```

### String

```javascript
// Declaração de strings
let aspasSimples = "Texto com aspas simples";
let aspasDuplas = "Texto com aspas duplas";
let templateLiteral = `Texto com template literal`;
let crase = `Posso usar ${variavel} aqui`; // interpolação

// Propriedades e métodos básicos
let texto = "JavaScript";
texto.length; // 10 - tamanho da string
texto[0]; // "J" - acesso por índice
texto.charAt(0); // "J" - caractere na posição
texto.charCodeAt(0); // 74 - código Unicode

// Métodos de transformação
texto.toUpperCase(); // "JAVASCRIPT"
texto.toLowerCase(); // "javascript"
texto.trim(); // remove espaços no início e fim
texto.trimStart(); // remove espaços no início
texto.trimEnd(); // remove espaços no fim

// Métodos de busca
texto.indexOf("Script"); // 4 - posição da substring
texto.lastIndexOf("a"); // 3 - última ocorrência
texto.includes("Java"); // true - contém substring
texto.startsWith("Java"); // true - começa com
texto.endsWith("Script"); // true - termina com

// Métodos de extração
texto.slice(0, 4); // "Java" - extrai parte da string
texto.substring(0, 4); // "Java" - similar ao slice
texto.substr(0, 4); // "Java" - (depreciado)

// Métodos de divisão e junção
"a,b,c".split(","); // ["a", "b", "c"] - divide em array
["a", "b", "c"].join("-"); // "a-b-c" - junta array em string

// Métodos de substituição
texto.replace("Java", "Type"); // "TypeScript"
texto.replaceAll("a", "A"); // "JAvAScript" - substitui todas ocorrências

// Template literals avançados
let nome = "Maria";
let idade = 25;
let frase = `Olá, ${nome}. Você tem ${idade} anos.`;
let calculo = `O dobro de 5 é ${5 * 2}`;
let multilinha = `
  Esta é uma
  string com
  múltiplas linhas
`;
```

### Boolean

```javascript
// Valores booleanos
let verdadeiro = true;
let falso = false;

// Valores que convertem para false (falsy)
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(0n); // false (BigInt zero)
Boolean(""); // false (string vazia)
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

// Valores que convertem para true (truthy)
Boolean(true); // true
Boolean(1); // true
Boolean(-1); // true
Boolean("0"); // true (string não vazia)
Boolean("false"); // true (string não vazia)
Boolean([]); // true (array vazio)
Boolean({}); // true (objeto vazio)
Boolean(function () {}); // true (função)

// Operador de negação
!true; // false
!false; // true
!!"texto"; // true (dupla negação para converter para boolean)

// Comparações que retornam boolean
5 > 3; // true
5 === 5; // true
5 !== 4; // true
```

### Null

```javascript
// Null representa ausência intencional de valor
let variavelNula = null;

// Características
typeof null; // "object" (peculiaridade histórica do JavaScript)
null === null; // true
null == undefined; // true (apenas com ==, não com ===)

// Uso comum
let configuracao = null; // valor intencionalmente vazio
configuracao = { tema: "escuro" }; // posteriormente atribuído

// Verificação
let valor = null;
valor === null; // true - verificação direta
valor == null; // true - verifica null OU undefined
```

### Undefined

```javascript
// Undefined representa variável não inicializada
let variavelIndefinida;
console.log(variavelIndefinida); // undefined

// Valores undefined
let obj = {};
obj.propriedadeInexistente; // undefined

let arr = [1, 2];
arr[5]; // undefined (índice não existente)

function semRetorno() {}
let resultado = semRetorno(); // undefined

// Diferença entre null e undefined
let a; // undefined (nunca foi atribuído)
let b = null; // null (atribuído intencionalmente)

// Verificações
typeof variavelIndefinida === "undefined"; // true
variavelIndefinida === undefined; // true
variavelIndefinida == undefined; // true

// Operador void sempre retorna undefined
void 0; // undefined
void (1 + 1); // undefined
```

### Symbol

```javascript
// Criação de symbols
let simbolo1 = Symbol();
let simbolo2 = Symbol("descricao"); // com descrição opcional

// Symbols são únicos
Symbol() === Symbol(); // false
Symbol("id") === Symbol("id"); // false

// Symbols como propriedades de objetos
let id = Symbol("id");
let usuario = {
  nome: "João",
  [id]: 123, // usando symbol como chave
};

// Acesso a propriedades com symbol
usuario[id]; // 123
usuario["id"]; // undefined (string é diferente)

// Symbols não são enumeráveis em loops
for (let chave in usuario) {
  console.log(chave); // apenas "nome"
}

// Obter symbols de um objeto
Object.getOwnPropertySymbols(usuario); // [Symbol(id)]

// Symbols globais do registro
let simboloGlobal = Symbol.for("chave"); // cria ou recupera symbol global
Symbol.keyFor(simboloGlobal); // "chave" - obtém a chave

// Symbols bem conhecidos
Symbol.iterator; // usado para iteradores
Symbol.asyncIterator; // usado para iteradores assíncronos
Symbol.toStringTag; // personalização do Object.prototype.toString()
```

### BigInt

```javascript
// Criação de BigInt
let bigIntNumero = 123456789012345678901234567890n; // sufixo 'n'
let bigIntConstrutor = BigInt("12345678901234567890");
let bigIntDeNumero = BigInt(9007199254740991); // maior número seguro

// Operações aritméticas
let a = 10n;
let b = 20n;

a + b; // 30n
a - b; // -10n
a * b; // 200n
b / a; // 2n (divisão de BigInt trunca para inteiro)
a % 3n; // 1n

// Comparações
10n === 10; // false (tipos diferentes)
10n == 10; // true (valores iguais)
10n < 15; // true (comparação funciona entre tipos)

// Métodos
BigInt.asIntN(64, 12345678901234567890n); // limita a 64 bits com sinal
BigInt.asUintN(64, 12345678901234567890n); // limita a 64 bits sem sinal

// Limitações
// Não pode misturar BigInt com Number diretamente
// 10n + 5; // TypeError
10n + BigInt(5); // Correto

// Não pode usar Math com BigInt
// Math.sqrt(16n); // TypeError

// Conversão
Number(10n); // 10 - pode perder precisão para números muito grandes
String(10n); // "10"
```

## Tipos de Dados Estruturados

### Object

```javascript
// Criação de objetos
let objetoLiteral = {
  chave: "valor",
  numero: 42,
  booleano: true,
  funcao: function () {
    return "Olá";
  },
  metodoResumido() {
    return "Método curto";
  },
  ["chave" + "Dinamica"]: "valor dinâmico",
};

// Acesso a propriedades
objetoLiteral.chave; // "valor" - notação de ponto
objetoLiteral["chave"]; // "valor" - notação de colchetes

// Adição e modificação
objetoLiteral.novaChave = "novo valor";
objetoLiteral["outraChave"] = 123;

// Deleção
delete objetoLiteral.chave;

// Verificação
"chave" in objetoLiteral; // false (foi deletada)
objetoLiteral.hasOwnProperty("numero"); // true

// Métodos de Object
Object.keys(objetoLiteral); // ["numero", "booleano", ...] - chaves
Object.values(objetoLiteral); // [42, true, ...] - valores
Object.entries(objetoLiteral); // [["numero", 42], ...] - pares chave-valor

Object.assign({}, objetoLiteral); // cópia superficial
Object.freeze(objetoLiteral); // previne modificações
Object.seal(objetoLiteral); // previne adição/remoção, permite modificação
```

### Array

```javascript
// Criação de arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(5); // array com 5 elementos vazios
let array3 = Array.of(1, 2, 3); // cria array dos argumentos

// Acesso e modificação
array1[0]; // 1
array1[0] = 10; // modifica elemento
array1.length; // 5

// Métodos de adição/remoção
array1.push(6); // adiciona ao final -> [10,2,3,4,5,6]
array1.pop(); // remove do final -> [10,2,3,4,5]
array1.unshift(0); // adiciona no início -> [0,10,2,3,4,5]
array1.shift(); // remove do início -> [10,2,3,4,5]

// Métodos de transformação
array1.map((x) => x * 2); // [20,4,6,8,10] - transforma cada elemento
array1.filter((x) => x > 3); // [10,4,5] - filtra elementos
array1.reduce((acc, val) => acc + val, 0); // 30 - reduz a um valor

// Métodos de busca
array1.find((x) => x > 3); // 10 - primeiro elemento que satisfaz
array1.findIndex((x) => x > 3); // 0 - índice do primeiro que satisfaz
array1.includes(10); // true
array1.indexOf(10); // 0

// Ordenação e reversão
[3, 1, 4, 2].sort(); // [1, 2, 3, 4]
[1, 2, 3].reverse(); // [3, 2, 1]

// Métodos utilitários
array1.slice(1, 3); // [2, 3] - extrai parte
array1.splice(1, 2, 20, 30); // remove 2 elementos a partir do índice 1 e adiciona 20,30
[1, 2].concat([3, 4]); // [1, 2, 3, 4] - concatena
array1.every((x) => x > 0); // true - todos satisfazem?
array1.some((x) => x > 10); // false - algum satisfaz?
```

### Map

```javascript
// Criação de Map
let mapa = new Map();

// Métodos básicos
mapa.set("chave", "valor");
mapa.set(123, "número");
mapa.set({}, "objeto");

mapa.get("chave"); // "valor"
mapa.has("chave"); // true
mapa.delete("chave"); // true (removeu)
mapa.size; // 2 - número de entradas
mapa.clear(); // remove todas entradas

// Iteração
mapa.forEach((valor, chave) => {
  console.log(chave, valor);
});

for (let [chave, valor] of mapa) {
  console.log(chave, valor);
}

// Conversões
Array.from(mapa.keys()); // array de chaves
Array.from(mapa.values()); // array de valores
Array.from(mapa.entries()); // array de pares [chave, valor]

// Map vs Object
// Map: chaves podem ser qualquer tipo, mantém ordem de inserção
// Object: chaves são strings ou symbols, ordem não garantida
```

### Set

```javascript
// Criação de Set
let conjunto = new Set();

// Métodos básicos
conjunto.add(1);
conjunto.add(2);
conjunto.add(1); // duplicado ignorado

conjunto.has(1); // true
conjunto.size; // 2
conjunto.delete(1); // true
conjunto.clear();

// Iteração
conjunto.forEach((valor) => {
  console.log(valor);
});

for (let valor of conjunto) {
  console.log(valor);
}

// Operações de conjunto
let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);

// União
new Set([...setA, ...setB]); // Set {1, 2, 3, 4}

// Interseção
new Set([...setA].filter((x) => setB.has(x))); // Set {2, 3}

// Diferença
new Set([...setA].filter((x) => !setB.has(x))); // Set {1}

// Conversão
Array.from(conjunto); // array a partir do set
```

### WeakMap

```javascript
// Criação de WeakMap
let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {};

weakMap.set(obj1, "valor1");
weakMap.set(obj2, "valor2");

weakMap.get(obj1); // "valor1"
weakMap.has(obj1); // true
weakMap.delete(obj1); // true

// Características especiais
// 1. Chaves devem ser objetos (não primitivos)
// 2. Não é iterável
// 3. Não tem propriedade .size
// 4. Referências fracas: se o objeto-chave não tiver outras referências,
//    pode ser coletado pelo garbage collector

// Use case: armazenar dados privados
let dadosPrivados = new WeakMap();

class MinhaClasse {
  constructor() {
    dadosPrivados.set(this, { privado: "dados" });
  }

  getPrivado() {
    return dadosPrivados.get(this);
  }
}
```

### WeakSet

```javascript
// Criação de WeakSet
let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

weakSet.has(obj1); // true
weakSet.delete(obj1); // true

// Características
// 1. Apenas objetos podem ser adicionados
// 2. Não é iterável
// 3. Não tem propriedade .size
// 4. Referências fracas

// Use case: marcação de objetos
let objetosProcessados = new WeakSet();

function processar(objeto) {
  if (objetosProcessados.has(objeto)) {
    return; // já processado
  }

  // processamento...
  objetosProcessados.add(objeto);
}
```

## Operadores

### Operadores Aritméticos

```javascript
// Operadores básicos
let a = 10,
  b = 3;

a + b; // 13 - adição
a - b; // 7 - subtração
a * b; // 30 - multiplicação
a / b; // 3.333... - divisão
a % b; // 1 - resto da divisão
a ** b; // 1000 - exponenciação (ES2016+)

// Incremento e decremento
let x = 5;
x++; // incremento pós-fixo: retorna 5, depois x = 6
++x; // incremento pré-fixo: x = 7, retorna 7
x--; // decremento pós-fixo
--x; // decremento pré-fixo

// Operador unário de negação
-(-10); // 10
+"5"; // 5 - converte para número
```

### Operadores de Comparação

```javascript
// Igualdade estrita (tipo e valor)
5 === 5; // true
5 === "5"; // false

// Igualdade solta (conversão de tipo)
5 == 5; // true
5 == "5"; // true

// Desigualdade
5 !== "5"; // true
5 != "5"; // false

// Maior/menor
5 > 3; // true
5 >= 5; // true
3 < 5; // true
3 <= 3; // true

// Comparações especiais
NaN === NaN; // false (use isNaN())
0 === -0; // true
```

### Operadores Lógicos

```javascript
// AND (&&) - retorna primeiro valor falsy ou último truthy
true && false; // false
"a" && "b"; // "b"
0 && "texto"; // 0

// OR (||) - retorna primeiro valor truthy ou último falsy
true || false; // true
null || "texto"; // "texto"
0 || false; // false

// NOT (!) - inverte boolean
!true; // false
!!"texto"; // true

// Operadores lógicos com valores não-boolean
// Eles retornam valores originais, não apenas true/false

// Operador AND lógico de atribuição (&&=) - ES2021
let valor = 5;
valor &&= 10; // valor = 10 (porque 5 é truthy)
valor = 0;
valor &&= 10; // valor = 0 (porque 0 é falsy)

// Operador OR lógico de atribuição (||=) - ES2021
let config = null;
config ||= {}; // config = {} (porque null é falsy)

// Operador de coalescência nula de atribuição (??=) - ES2021
let opcao;
opcao ??= "padrao"; // opcao = "padrao" (porque undefined)
opcao = false;
opcao ??= "padrao"; // opcao = false (porque false não é null/undefined)
```

### Operadores de Atribuição

```javascript
let x = 10;

x += 5; // x = 15 (x = x + 5)
x -= 3; // x = 12 (x = x - 3)
x *= 2; // x = 24 (x = x * 2)
x /= 4; // x = 6  (x = x / 4)
x %= 4; // x = 2  (x = x % 4)
x **= 3; // x = 8  (x = x ** 3)

// Desestruturação (destructuring)
let [a, b] = [1, 2]; // a=1, b=2
let { nome, idade } = { nome: "João", idade: 30 };

// Troca de valores usando desestruturação
[a, b] = [b, a]; // a=2, b=1

// Parâmetro rest
let [primeiro, ...resto] = [1, 2, 3, 4]; // resto = [2, 3, 4]
```

### Operadores Bitwise

```javascript
let a = 5; // 0101 em binário
let b = 3; // 0011 em binário

a & b; // 0001 = 1 (AND bit a bit)
a | b; // 0111 = 7 (OR bit a bit)
a ^ b; // 0110 = 6 (XOR bit a bit)
~a; // 1010 = -6 (NOT bit a bit - complemento de dois)
a << 1; // 1010 = 10 (shift left)
a >> 1; // 0010 = 2 (shift right com sinal)
a >>> 1; // 0010 = 2 (shift right sem sinal)

// Use cases comuns
// Verificar se bit está setado
let flags = 5; // 0101
let MASK = 1; // 0001
let temBit = (flags & MASK) !== 0; // true

// Setar bit
flags |= MASK; // flags = 5 (já estava setado)

// Limpar bit
flags &= ~MASK; // flags = 4 (0100)

// Alternar bit (toggle)
flags ^= MASK; // alterna o bit
```

### Outros Operadores

```javascript
// Operador ternário
let idade = 18;
let status = idade >= 18 ? "adulto" : "menor";

// Operador de coalescência nula (??) - ES2020
let valor = null ?? "padrão"; // "padrão"
valor = 0 ?? "padrão"; // 0 (diferente do ||)

// Encadeamento opcional (?.) - ES2020
let usuario = {
  perfil: {
    nome: "João",
  },
};
let nome = usuario?.perfil?.nome; // "João"
let cidade = usuario?.endereco?.cidade; // undefined (sem erro)

// Operador typeof
typeof 42; // "number"
typeof "texto"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (peculiaridade)
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function"

// Operador instanceof
[] instanceof Array; // true
[] instanceof Object; // true
new Date() instanceof Date; // true

// Operador in
"length" in []; // true
"nome" in { nome: "João" }; // true

// Operador delete
let obj = { a: 1, b: 2 };
delete obj.a; // true
obj.a; // undefined

// Operador void
void 0; // undefined
void (1 + 1); // undefined
// Útil para links que não devem navegar: <a href="javascript:void(0)">

// Operador vírgula
let x = (1, 2, 3); // x = 3 (retorna o último valor)
for (let i = 0, j = 10; i < j; i++, j--) {
  // múltiplas expressões
}
```

## Variáveis e Escopo

### Declaração de Variáveis

```javascript
// var (escopo de função, hoisting)
function exemploVar() {
  console.log(x); // undefined (hoisting)
  var x = 5;
  if (true) {
    var x = 10; // mesma variável
  }
  console.log(x); // 10
}

// let (escopo de bloco, hoisting temporal)
function exemploLet() {
  // console.log(y); // ReferenceError (temporal dead zone)
  let y = 5;
  if (true) {
    let y = 10; // variável diferente
    console.log(y); // 10
  }
  console.log(y); // 5
}

// const (escopo de bloco, valor constante)
const PI = 3.14159;
// PI = 3; // TypeError

// const com objetos
const pessoa = { nome: "João" };
pessoa.nome = "Maria"; // permitido
// pessoa = {}; // TypeError (reatribuição não permitida)
```

### Tipos de Escopo

```javascript
// Escopo Global
var globalVar = "estou no escopo global";
let globalLet = "também global, mas não no objeto window";

// Escopo de Função
function escopoFuncao() {
  var funcaoVar = "visível apenas na função";
  let funcaoLet = "também apenas na função";

  function interna() {
    console.log(funcaoVar); // acessível (closure)
  }
}

// Escopo de Bloco
if (true) {
  var blocoVar = "var é visível fora do bloco";
  let blocoLet = "let NÃO é visível fora do bloco";
  const blocoConst = "const também NÃO é visível fora";
}
console.log(blocoVar); // "var é visível fora do bloco"
// console.log(blocoLet); // ReferenceError

// Escopo de Módulo (com modules)
// Em arquivos com import/export, variáveis são escopo do módulo
```

### Hoisting

```javascript
// Com var
console.log(a); // undefined (hoisted)
var a = 10;

// Equivalente a:
var a;
console.log(a);
a = 10;

// Com let/const
// console.log(b); // ReferenceError (temporal dead zone)
let b = 20;

// Funções
console.log(minhaFuncao()); // "Olá" (função é hoisted)

function minhaFuncao() {
  return "Olá";
}

// Expressão de função não é hoisted da mesma forma
// console.log(funcaoExpr()); // TypeError
var funcaoExpr = function () {
  return "expressão";
};
```

### Closure

```javascript
function criarContador() {
  let contador = 0; // variável privada

  return function () {
    contador++;
    return contador;
  };
}

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
// contador não é acessível diretamente
```

### Pattern de Módulo

```javascript
const MeuModulo = (function () {
  // Variáveis privadas
  let contador = 0;

  // Métodos privados
  function metodoPrivado() {
    return "privado";
  }

  // Retorna interface pública
  return {
    incrementar: function () {
      contador++;
      return contador;
    },
    getContador: function () {
      return contador;
    },
  };
})();
```

## Controle de Fluxo

### if/else

```javascript
// if básico
if (condicao) {
  // executa se condicao for truthy
}

// if-else
if (idade >= 18) {
  console.log("Adulto");
} else {
  console.log("Menor");
}

// if-else if-else
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// if ternário
let mensagem = idade >= 18 ? "Adulto" : "Menor";

// if encadeado
if (usuario) {
  if (usuario.logado) {
    if (usuario.admin) {
      // código
    }
  }
}

// if com operador AND
usuario && usuario.logado && console.log("Usuário logado");

// Early return pattern
function processarDados(dados) {
  if (!dados) return null;
  if (!dados.valido) return null;

  // processamento principal
  return dados.processado;
}
```

### switch

```javascript
// switch básico
let dia = 3;
let nomeDia;

switch (dia) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda";
    break;
  case 3:
    nomeDia = "Terça";
    break;
  default:
    nomeDia = "Dia inválido";
}

// switch com múltiplos casos
let mes = 2;
let dias;

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30;
    break;
  case 2:
    dias = 28; // simplificado
    break;
  default:
    dias = 0;
}

// switch com expressões
let idade = 25;

switch (true) {
  case idade < 13:
    console.log("Criança");
    break;
  case idade < 20:
    console.log("Adolescente");
    break;
  case idade < 65:
    console.log("Adulto");
    break;
  default:
    console.log("Idoso");
}
```

### Loops - for

```javascript
// for tradicional
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// for com múltiplas variáveis
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}

// for sem corpo
let soma = 0;
for (let i = 1; i <= 100; soma += i++);

// for com break
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// for com continue
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9
}

// for...of (arrays, strings, iteráveis)
let array = [1, 2, 3];
for (let valor of array) {
  console.log(valor); // 1, 2, 3
}

// for...in (objetos)
let objeto = { a: 1, b: 2, c: 3 };
for (let chave in objeto) {
  console.log(chave, objeto[chave]); // a 1, b 2, c 3
}

// for await...of (iteráveis assíncronos)
async function processarAsync() {
  for await (let dado of fonteAsync()) {
    console.log(dado);
  }
}
```

### Loops - while

```javascript
// while básico
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

// while com condição complexa
while (usuario && usuario.logado && !usuario.bloqueado) {
  // processar
}

// while infinito (com break)
while (true) {
  let entrada = prompt("Digite algo:");
  if (entrada === "sair") break;
  console.log(entrada);
}

// while para processar até condição
let tentativas = 0;
while (!operacaoBemSucedida && tentativas < 3) {
  tentativas++;
  // tentar operação
}
```

### Loops - do...while

```javascript
// do...while (executa pelo menos uma vez)
let j = 0;
do {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
} while (j < 5);

// Útil para validação de entrada
let numero;
do {
  numero = prompt("Digite um número entre 1 e 10:");
} while (numero < 1 || numero > 10);

// Diferente do while
let x = 10;
while (x < 5) {
  // nunca executa
}

do {
  console.log(x); // executa uma vez (10)
} while (x < 5);
```

### Controle de Loop (break, continue, label)

```javascript
// break - sai do loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - pula para próxima iteração
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9
}

// label - para loops aninhados
exterior: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break exterior;
    console.log(i, j);
  }
}
// Saída: 0 0, 0 1, 0 2, 1 0

// return - sai da função
function buscar(array, valor) {
  for (let item of array) {
    if (item === valor) return item;
  }
  return null;
}
```

### Iteradores Personalizados

```javascript
// Criando um iterável personalizado
let meuIteravel = {
  [Symbol.iterator]: function () {
    let passo = 0;
    return {
      next: function () {
        passo++;
        if (passo <= 5) {
          return { value: passo, done: false };
        }
        return { done: true };
      },
    };
  },
};

// Usando com for...of
for (let valor of meuIteravel) {
  console.log(valor); // 1, 2, 3, 4, 5
}

// Generator functions (ES6+)
function* geradorNumeros() {
  yield 1;
  yield 2;
  yield 3;
}

for (let numero of geradorNumeros()) {
  console.log(numero); // 1, 2, 3
}
```

### Controle de Fluxo com Promises

```javascript
// Async/await com loops
async function processarLista(lista) {
  for (let item of lista) {
    await processarItem(item);
  }
}

// Promise.all para processamento paralelo
async function processarParalelo(lista) {
  const promises = lista.map((item) => processarItem(item));
  const resultados = await Promise.all(promises);
  return resultados;
}

// Promise.race para timeout
async function comTimeout(promise, timeout) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]);
}
```

Este é um conjunto abrangente dos fundamentos do JavaScript. Cada seção inclui exemplos práticos de código que demonstram o uso correto dos conceitos.
