# 4. ARRAYS E ITERAÇÃO

## Métodos de Transformação

### map()

```javascript
// map() - cria novo array com resultados da função aplicada a cada elemento
const numeros = [1, 2, 3, 4, 5];

// Dobrar cada número
const dobrados = numeros.map((num) => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// Converter para string
const strings = numeros.map((num) => `Número: ${num}`);
console.log(strings); // ['Número: 1', 'Número: 2', ...]

// Com índice
const comIndice = numeros.map((num, index) => `${index}: ${num}`);
console.log(comIndice); // ['0: 1', '1: 2', '2: 3', ...]

// Transformar objetos
const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log(nomes); // ['João', 'Maria', 'Pedro']

const idadesDobradas = pessoas.map((pessoa) => ({
  ...pessoa,
  idade: pessoa.idade * 2,
}));
console.log(idadesDobradas);
// [{ nome: 'João', idade: 60 }, { nome: 'Maria', idade: 50 }, ...]

// map() com thisArg
const multiplicador = {
  fator: 10,
  multiplicar(num) {
    return num * this.fator;
  },
};

const multiplicados = [1, 2, 3].map(function (num) {
  return this.multiplicar(num);
}, multiplicador);
console.log(multiplicados); // [10, 20, 30]

// Implementação do map()
Array.prototype.meuMap = function (callback, thisArg) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback.call(thisArg, this[i], i, this));
  }
  return resultado;
};
```

### filter()

```javascript
// filter() - cria novo array com elementos que passam no teste
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Números pares
const pares = numeros.filter((num) => num % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// Números maiores que 5
const maioresQue5 = numeros.filter((num) => num > 5);
console.log(maioresQue5); // [6, 7, 8, 9, 10]

// Filtrar objetos
const pessoas = [
  { nome: "João", idade: 30, cidade: "SP" },
  { nome: "Maria", idade: 25, cidade: "RJ" },
  { nome: "Pedro", idade: 35, cidade: "SP" },
  { nome: "Ana", idade: 28, cidade: "MG" },
];

// Maiores de 30 anos
const adultos = pessoas.filter((pessoa) => pessoa.idade >= 30);
console.log(adultos); // João e Pedro

// De São Paulo
const deSP = pessoas.filter((pessoa) => pessoa.cidade === "SP");
console.log(deSP); // João e Pedro

// Combinação de condições
const adultosSP = pessoas.filter(
  (pessoa) => pessoa.idade >= 30 && pessoa.cidade === "SP"
);
console.log(adultosSP); // Apenas Pedro

// Remover valores falsy
const mistura = [0, 1, false, 2, "", 3, null, undefined, 4];
const verdades = mistura.filter(Boolean);
console.log(verdades); // [1, 2, 3, 4]

// Filtrar elementos únicos
const duplicados = [1, 2, 2, 3, 4, 4, 5];
const unicos = duplicados.filter(
  (valor, indice, array) => array.indexOf(valor) === indice
);
console.log(unicos); // [1, 2, 3, 4, 5]

// Com thisArg
const faixaEtaria = {
  min: 25,
  max: 35,
  estaNaFaixa(idade) {
    return idade >= this.min && idade <= this.max;
  },
};

const naFaixa = pessoas.filter(function (pessoa) {
  return this.estaNaFaixa(pessoa.idade);
}, faixaEtaria);
```

### reduce()

```javascript
// reduce() - reduz array a um único valor
const numeros = [1, 2, 3, 4, 5];

// Soma
const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);
console.log(soma); // 15

// Produto
const produto = numeros.reduce((acc, val) => acc * val, 1);
console.log(produto); // 120

// Maior valor
const maior = numeros.reduce((acc, val) => Math.max(acc, val), -Infinity);
console.log(maior); // 5

// Concatenar strings
const palavras = ["Hello", " ", "World", "!"];
const frase = palavras.reduce((acc, palavra) => acc + palavra, "");
console.log(frase); // 'Hello World!'

// Agrupar por propriedade
const pessoas = [
  { nome: "João", idade: 30, cidade: "SP" },
  { nome: "Maria", idade: 25, cidade: "RJ" },
  { nome: "Pedro", idade: 35, cidade: "SP" },
  { nome: "Ana", idade: 28, cidade: "RJ" },
];

// Agrupar por cidade
const porCidade = pessoas.reduce((acc, pessoa) => {
  if (!acc[pessoa.cidade]) {
    acc[pessoa.cidade] = [];
  }
  acc[pessoa.cidade].push(pessoa);
  return acc;
}, {});
console.log(porCidade);
// { SP: [{...}, {...}], RJ: [{...}, {...}] }

// Contar ocorrências
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log(contagem); // { maçã: 3, banana: 2, laranja: 1 }

// Achatar array de arrays
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const achatado = arrays.reduce((acc, array) => acc.concat(array), []);
console.log(achatado); // [1, 2, 3, 4, 5, 6]

// reduceRight() - da direita para esquerda
const numeros2 = [1, 2, 3, 4];
const resultado = numeros2.reduceRight((acc, val) => acc - val);
console.log(resultado); // (1 - (2 - (3 - 4))) = -2

// Implementação do reduce()
Array.prototype.meuReduce = function (callback, valorInicial) {
  let acumulador = valorInicial;
  let indiceInicial = 0;

  if (arguments.length < 2) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acumulador = this[0];
    indiceInicial = 1;
  }

  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }

  return acumulador;
};
```

### Combinando Métodos de Transformação

```javascript
// Pipeline de transformações
const produtos = [
  { nome: "Notebook", preco: 3000, categoria: "eletrônicos", estoque: 10 },
  { nome: "Celular", preco: 1500, categoria: "eletrônicos", estoque: 5 },
  { nome: "Camiseta", preco: 50, categoria: "vestuário", estoque: 20 },
  { nome: "Livro", preco: 30, categoria: "livros", estoque: 15 },
  { nome: "Fone", preco: 200, categoria: "eletrônicos", estoque: 8 },
];

// Produtos eletrônicos com mais de 5 em estoque e preço acima de 1000
const resultado = produtos
  .filter((produto) => produto.categoria === "eletrônicos")
  .filter((produto) => produto.estoque > 5)
  .filter((produto) => produto.preco > 1000)
  .map((produto) => ({
    ...produto,
    precoComDesconto: produto.preco * 0.9,
  }))
  .reduce((total, produto) => total + produto.precoComDesconto, 0);

console.log(resultado);

// Processamento de dados
const vendas = [
  { produto: "A", quantidade: 10, valor: 100 },
  { produto: "B", quantidade: 5, valor: 200 },
  { produto: "A", quantidade: 3, valor: 100 },
  { produto: "C", quantidade: 8, valor: 150 },
];

// Total por produto
const totalPorProduto = vendas.reduce((acc, venda) => {
  if (!acc[venda.produto]) {
    acc[venda.produto] = { totalQuantidade: 0, totalValor: 0 };
  }
  acc[venda.produto].totalQuantidade += venda.quantidade;
  acc[venda.produto].totalValor += venda.quantidade * venda.valor;
  return acc;
}, {});

console.log(totalPorProduto);

// Transformar para array ordenada
const arrayOrdenada = Object.entries(totalPorProduto)
  .map(([produto, dados]) => ({
    produto,
    ...dados,
  }))
  .sort((a, b) => b.totalValor - a.totalValor);

console.log(arrayOrdenada);
```

## Métodos de Busca

### find()

```javascript
// find() - retorna primeiro elemento que satisfaz a condição
const numeros = [5, 12, 8, 130, 44];

// Primeiro número maior que 10
const encontrado = numeros.find((num) => num > 10);
console.log(encontrado); // 12

// Primeiro número par
const primeiroPar = numeros.find((num) => num % 2 === 0);
console.log(primeiroPar); // 12

// Com objetos
const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

// Encontrar pessoa com nome 'Maria'
const maria = pessoas.find((pessoa) => pessoa.nome === "Maria");
console.log(maria); // { nome: 'Maria', idade: 25 }

// Encontrar pessoa com idade > 30
const maisVelho = pessoas.find((pessoa) => pessoa.idade > 30);
console.log(maisVelho); // { nome: 'Pedro', idade: 35 }

// find() retorna undefined se não encontrar
const naoExiste = pessoas.find((pessoa) => pessoa.idade > 40);
console.log(naoExiste); // undefined

// Com índice
const comIndice = numeros.find((num, index) => {
  console.log(`Testando índice ${index}: ${num}`);
  return num > 100;
});
console.log(comIndice); // 130

// find() vs filter()
const todosMaioresQue10 = numeros.filter((num) => num > 10);
console.log(todosMaioresQue10); // [12, 130, 44] - array

const primeiroMaiorQue10 = numeros.find((num) => num > 10);
console.log(primeiroMaiorQue10); // 12 - elemento
```

### findIndex()

```javascript
// findIndex() - retorna índice do primeiro elemento que satisfaz condição
const numeros = [5, 12, 8, 130, 44];

// Índice do primeiro número maior que 10
const indice = numeros.findIndex((num) => num > 10);
console.log(indice); // 1

// Índice do primeiro número par
const indicePar = numeros.findIndex((num) => num % 2 === 0);
console.log(indicePar); // 1

// Com objetos
const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

// Índice da pessoa com nome 'Maria'
const indiceMaria = pessoas.findIndex((pessoa) => pessoa.nome === "Maria");
console.log(indiceMaria); // 1

// findIndex() retorna -1 se não encontrar
const naoExiste = pessoas.findIndex((pessoa) => pessoa.idade > 40);
console.log(naoExiste); // -1

// Usando findIndex() para remover elemento
function removerPessoaPorNome(nome) {
  const indice = pessoas.findIndex((pessoa) => pessoa.nome === nome);
  if (indice !== -1) {
    return pessoas.splice(indice, 1)[0];
  }
  return null;
}

const removido = removerPessoaPorNome("Maria");
console.log(removido); // { nome: 'Maria', idade: 25 }
console.log(pessoas); // Restante do array

// findIndex() vs indexOf()
const frutas = ["maçã", "banana", "laranja"];

// indexOf() busca valor exato
console.log(frutas.indexOf("banana")); // 1

// findIndex() permite busca complexa
console.log(frutas.findIndex((fruta) => fruta.startsWith("l"))); // 2
```

### findLast() e findLastIndex() (ES2023)

```javascript
// findLast() - retorna último elemento que satisfaz condição
const numeros = [5, 12, 8, 130, 44, 12];

// Último número maior que 10
const ultimo = numeros.findLast((num) => num > 10);
console.log(ultimo); // 12 (último 12)

// Último número par
const ultimoPar = numeros.findLast((num) => num % 2 === 0);
console.log(ultimoPar); // 12

// findLastIndex() - retorna índice do último elemento que satisfaz
const ultimoIndice = numeros.findLastIndex((num) => num > 10);
console.log(ultimoIndice); // 5 (último 12)

// Exemplo prático
const transacoes = [
  { id: 1, tipo: "debito", valor: 100 },
  { id: 2, tipo: "credito", valor: 200 },
  { id: 3, tipo: "debito", valor: 50 },
  { id: 4, tipo: "credito", valor: 300 },
];

// Última transação de débito
const ultimoDebito = transacoes.findLast((t) => t.tipo === "debito");
console.log(ultimoDebito); // { id: 3, tipo: 'debito', valor: 50 }

// Índice da última transação de crédito acima de 250
const ultimoCreditoAlto = transacoes.findLastIndex(
  (t) => t.tipo === "credito" && t.valor > 250
);
console.log(ultimoCreditoAlto); // 3
```

### includes()

```javascript
// includes() - verifica se array contém elemento
const numeros = [1, 2, 3, 4, 5];

// Verificar existência
console.log(numeros.includes(3)); // true
console.log(numeros.includes(6)); // false

// Com índice de início
console.log(numeros.includes(3, 3)); // false (busca a partir do índice 3)
console.log(numeros.includes(3, 2)); // true (busca a partir do índice 2)

// Strings
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva")); // false

// Case sensitive
console.log(frutas.includes("Maçã")); // false
console.log(frutas.includes("maçã")); // true

// includes() vs indexOf()
const array = [1, 2, NaN, 4];

console.log(array.includes(NaN)); // true
console.log(array.indexOf(NaN)); // -1 (indexOf não encontra NaN)

console.log(array.includes(undefined)); // false
console.log(array.indexOf(undefined)); // -1

// includes() em objetos (busca referência, não conteúdo)
const objetos = [{ x: 1 }, { x: 2 }];
console.log(objetos.includes({ x: 1 })); // false (objetos diferentes)

const obj = { x: 1 };
const objetos2 = [obj, { x: 2 }];
console.log(objetos2.includes(obj)); // true (mesma referência)

// Verificar se todos elementos de um array estão em outro
function contemTodos(arr1, arr2) {
  return arr2.every((elemento) => arr1.includes(elemento));
}

const A = [1, 2, 3, 4, 5];
const B = [2, 3, 4];
console.log(contemTodos(A, B)); // true

// Verificar se algum elemento está no array
function contemAlgum(arr1, arr2) {
  return arr2.some((elemento) => arr1.includes(elemento));
}

const C = [10, 20, 30];
const D = [20, 40, 60];
console.log(contemAlgum(C, D)); // true (tem o 20)
```

### some() e every()

```javascript
// some() - verifica se pelo menos um elemento satisfaz condição
const numeros = [1, 2, 3, 4, 5];

// Algum número é par?
console.log(numeros.some((num) => num % 2 === 0)); // true

// Algum número é maior que 10?
console.log(numeros.some((num) => num > 10)); // false

// Verificar se existe produto em estoque
const produtos = [
  { nome: "A", estoque: 0 },
  { nome: "B", estoque: 5 },
  { nome: "C", estoque: 0 },
];

const temEstoque = produtos.some((produto) => produto.estoque > 0);
console.log(temEstoque); // true

// every() - verifica se todos elementos satisfazem condição
// Todos números são positivos?
console.log(numeros.every((num) => num > 0)); // true

// Todos números são pares?
console.log(numeros.every((num) => num % 2 === 0)); // false

// Todos produtos têm estoque?
const todosComEstoque = produtos.every((produto) => produto.estoque > 0);
console.log(todosComEstoque); // false

// Validar formulário
const campos = [
  { nome: "email", valor: "usuario@exemplo.com", valido: true },
  { nome: "senha", valor: "123456", valido: true },
  { nome: "idade", valor: "25", valido: true },
];

const formValido = campos.every((campo) => campo.valido);
console.log(formValido); // true

// some() e every() em arrays vazios
const vazio = [];
console.log(vazio.some(() => true)); // false
console.log(vazio.every(() => true)); // true (vacuamente verdadeiro)

// Comparação prática
const idades = [18, 22, 25, 30];

// Verificar se todos são maiores de idade
const todosMaiores = idades.every((idade) => idade >= 18);
console.log(todosMaiores); // true

// Verificar se alguém tem mais de 30 anos
const alguemAcima30 = idades.some((idade) => idade > 30);
console.log(alguemAcima30); // false
```

## Métodos de Ordenação

### sort()

```javascript
// sort() - ordena elementos do array (IN PLACE)
const frutas = ["banana", "maçã", "laranja", "abacaxi"];
frutas.sort();
console.log(frutas); // ['abacaxi', 'banana', 'laranja', 'maçã']

// Ordem numérica padrão (problema!)
const numeros = [10, 5, 40, 25, 100];
numeros.sort();
console.log(numeros); // [10, 100, 25, 40, 5] (ordem lexicográfica)

// Ordem numérica correta
numeros.sort((a, b) => a - b);
console.log(numeros); // [5, 10, 25, 40, 100] (crescente)

numeros.sort((a, b) => b - a);
console.log(numeros); // [100, 40, 25, 10, 5] (decrescente)

// Função de comparação:
// retorna < 0: a vem antes de b
// retorna > 0: b vem antes de a
// retorna 0: mantém ordem

// Ordenar objetos
const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

// Por idade (crescente)
pessoas.sort((a, b) => a.idade - b.idade);
console.log(pessoas);
// [{ nome: 'Maria', idade: 25 }, { nome: 'João', idade: 30 }, ...]

// Por nome (alfabético)
pessoas.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(pessoas);
// [{ nome: 'João', ... }, { nome: 'Maria', ... }, { nome: 'Pedro', ... }]

// Ordenação estável (ES2019+)
// Mantém ordem relativa de elementos com mesma chave
const estudantes = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 8 },
  { nome: "Beatriz", nota: 9 },
];

estudantes.sort((a, b) => a.nota - b.nota);
// Ordem de 'Ana' e 'Carlos' (ambos nota 8) é mantida

// Ordenação complexa (múltiplos critérios)
const produtos = [
  { nome: "Notebook", categoria: "eletrônicos", preco: 3000 },
  { nome: "Camiseta", categoria: "vestuário", preco: 50 },
  { nome: "Celular", categoria: "eletrônicos", preco: 1500 },
  { nome: "Calça", categoria: "vestuário", preco: 100 },
];

// Ordenar por categoria, depois por preço decrescente
produtos.sort((a, b) => {
  // Primeiro critério: categoria
  const cmpCategoria = a.categoria.localeCompare(b.categoria);
  if (cmpCategoria !== 0) return cmpCategoria;

  // Segundo critério: preço (decrescente)
  return b.preco - a.preco;
});

console.log(produtos);
```

### reverse()

```javascript
// reverse() - inverte ordem dos elementos (IN PLACE)
const numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]

// Com strings
const frutas = ["maçã", "banana", "laranja"];
frutas.reverse();
console.log(frutas); // ['laranja', 'banana', 'maçã']

// reverse() não ordena, apenas inverte
const desordenados = [3, 1, 4, 2];
desordenados.reverse();
console.log(desordenados); // [2, 4, 1, 3] (não ordenado)

// Criar cópia invertida (sem modificar original)
const original = [1, 2, 3];
const invertido = [...original].reverse();
console.log(original); // [1, 2, 3]
console.log(invertido); // [3, 2, 1]

// Inverter string usando reverse()
const texto = "JavaScript";
const textoInvertido = [...texto].reverse().join("");
console.log(textoInvertido); // 'tpircSavaJ'

// reverse() em objetos
const objetos = [{ x: 1 }, { x: 2 }, { x: 3 }];
objetos.reverse();
console.log(objetos); // [{ x: 3 }, { x: 2 }, { x: 1 }]

// Combinando sort() e reverse()
const numeros2 = [5, 2, 8, 1, 9];

// Ordenar crescente e inverter = ordenar decrescente
const decrescente = [...numeros2].sort((a, b) => a - b).reverse();
console.log(decrescente); // [9, 8, 5, 2, 1]

// Equivalente a:
const decrescente2 = [...numeros2].sort((a, b) => b - a);
console.log(decrescente2); // [9, 8, 5, 2, 1]

// Implementação do reverse()
Array.prototype.meuReverse = function () {
  const copia = [...this];
  for (let i = 0; i < this.length; i++) {
    this[i] = copia[this.length - 1 - i];
  }
  return this;
};
```

### toSorted(), toReversed(), toSpliced() (ES2023)

```javascript
// Métodos não destrutivos (ES2023)

// toSorted() - retorna novo array ordenado (não modifica original)
const numeros = [3, 1, 4, 2];
const ordenados = numeros.toSorted((a, b) => a - b);
console.log(numeros); // [3, 1, 4, 2] (original inalterado)
console.log(ordenados); // [1, 2, 3, 4] (novo array)

// toReversed() - retorna novo array invertido
const invertido = numeros.toReversed();
console.log(numeros); // [3, 1, 4, 2]
console.log(invertido); // [2, 4, 1, 3]

// toSpliced() - retorna novo array com elementos removidos/adicionados
const original = [1, 2, 3, 4, 5];

// Remover 2 elementos a partir do índice 1
const removido = original.toSpliced(1, 2);
console.log(original); // [1, 2, 3, 4, 5]
console.log(removido); // [1, 4, 5]

// Remover e adicionar
const modificado = original.toSpliced(1, 2, 6, 7);
console.log(original); // [1, 2, 3, 4, 5]
console.log(modificado); // [1, 6, 7, 4, 5]

// Comparação com métodos destrutivos
const arr = [3, 1, 2];

// Destrutivo (modifica original)
const sortedDestructivo = arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3] (modificado!)

// Não destrutivo
const arr2 = [3, 1, 2];
const sortedNaoDestructivo = arr2.toSorted((a, b) => a - b);
console.log(arr2); // [3, 1, 2] (inalterado)
```

### Ordenação Avançada

```javascript
// Ordenação personalizada com localeCompare()
const palavras = ["casa", "café", "cão", "cedo"];
palavras.sort((a, b) => a.localeCompare(b, "pt-BR"));
console.log(palavras); // ['café', 'cão', 'casa', 'cedo']

// Opções de localeCompare
const palavras2 = ["apple", "Ångström", "zebra", "äpple"];
palavras2.sort((a, b) =>
  a.localeCompare(b, "en", {
    sensitivity: "base", // Ignora case e acentos
    numeric: true, // Reconhece números
    caseFirst: "upper", // Maiúsculas primeiro
  })
);
console.log(palavras2);

// Ordenação por data
const eventos = [
  { nome: "Evento A", data: new Date("2024-03-15") },
  { nome: "Evento B", data: new Date("2024-01-10") },
  { nome: "Evento C", data: new Date("2024-02-20") },
];

eventos.sort((a, b) => a.data - b.data);
console.log(eventos.map((e) => e.nome)); // ['Evento B', 'Evento C', 'Evento A']

// Ordenação natural (human)
function ordenacaoNatural(arr, chave) {
  const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });

  return arr.sort((a, b) => {
    const valA = chave ? a[chave] : a;
    const valB = chave ? b[chave] : b;
    return collator.compare(valA, valB);
  });
}

const arquivos = ["arquivo10.txt", "arquivo2.txt", "arquivo1.txt"];
console.log(arquivos.sort()); // ['arquivo1.txt', 'arquivo10.txt', 'arquivo2.txt']
console.log(ordenacaoNatural(arquivos)); // ['arquivo1.txt', 'arquivo2.txt', 'arquivo10.txt']

// Shuffle (embaralhar array)
function shuffle(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

const cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(cartas));
```

## Métodos de Modificação

### push() e pop()

```javascript
// push() - adiciona elementos ao final do array
const numeros = [1, 2, 3];

// Adicionar um elemento
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]

// Adicionar múltiplos elementos
numeros.push(5, 6, 7);
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]

// push() retorna novo comprimento
const comprimento = numeros.push(8);
console.log(comprimento); // 8
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8]

// Adicionar array (como elemento único)
const outros = [9, 10];
numeros.push(outros);
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]

// Para adicionar elementos do array, usar spread operator
numeros.pop(); // remove o array
numeros.push(...outros);
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// pop() - remove e retorna último elemento
const ultimo = numeros.pop();
console.log(ultimo); // 10
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// pop() em array vazio
const vazio = [];
const resultado = vazio.pop();
console.log(resultado); // undefined
console.log(vazio); // []

// Implementação de pilha (stack)
class Pilha {
  constructor() {
    this.items = [];
  }

  push(elemento) {
    this.items.push(elemento);
  }

  pop() {
    if (this.estaVazia()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  estaVazia() {
    return this.items.length === 0;
  }

  tamanho() {
    return this.items.length;
  }
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
console.log(pilha.pop()); // 3
console.log(pilha.peek()); // 2
```

### unshift() e shift()

```javascript
// unshift() - adiciona elementos ao início do array
const numeros = [4, 5, 6];

// Adicionar um elemento
numeros.unshift(3);
console.log(numeros); // [3, 4, 5, 6]

// Adicionar múltiplos elementos
numeros.unshift(1, 2);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// unshift() retorna novo comprimento
const comprimento = numeros.unshift(0);
console.log(comprimento); // 7
console.log(numeros); // [0, 1, 2, 3, 4, 5, 6]

// shift() - remove e retorna primeiro elemento
const primeiro = numeros.shift();
console.log(primeiro); // 0
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// shift() em array vazio
const vazio = [];
const resultado = vazio.shift();
console.log(resultado); // undefined
console.log(vazio); // []

// Implementação de fila (queue)
class Fila {
  constructor() {
    this.items = [];
  }

  enqueue(elemento) {
    this.items.push(elemento); // entra no final
  }

  dequeue() {
    if (this.estaVazia()) {
      return null;
    }
    return this.items.shift(); // sai do início
  }

  frente() {
    return this.items[0];
  }

  estaVazia() {
    return this.items.length === 0;
  }

  tamanho() {
    return this.items.length;
  }
}

const fila = new Fila();
fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");
console.log(fila.dequeue()); // 'A'
console.log(fila.frente()); // 'B'
```

### splice()

```javascript
// splice() - adiciona/remove elementos em qualquer posição
// array.splice(inicio, quantidadeRemover, ...elementosParaAdicionar)

const numeros = [1, 2, 3, 4, 5];

// Remover elementos
const removidos = numeros.splice(1, 2); // remove 2 elementos a partir do índice 1
console.log(removidos); // [2, 3]
console.log(numeros); // [1, 4, 5]

// Adicionar elementos
numeros.splice(1, 0, 2, 3); // adiciona 2,3 no índice 1 (remove 0 elementos)
console.log(numeros); // [1, 2, 3, 4, 5]

// Substituir elementos
const substituidos = numeros.splice(2, 2, 99, 100); // remove 2, adiciona 99,100
console.log(substituidos); // [3, 4] (elementos removidos)
console.log(numeros); // [1, 2, 99, 100, 5]

// Índice negativo (conta do final)
numeros.splice(-1, 1, 6); // remove último, adiciona 6
console.log(numeros); // [1, 2, 99, 100, 6]

// Remover tudo a partir de um índice
numeros.splice(2); // remove tudo a partir do índice 2
console.log(numeros); // [1, 2]

// Exemplos práticos
const tarefas = ["estudar", "trabalhar", "exercitar", "dormir"];

// Adicionar tarefa no meio
tarefas.splice(2, 0, "almoçar");
console.log(tarefas); // ['estudar', 'trabalhar', 'almoçar', 'exercitar', 'dormir']

// Remover tarefa concluída
const concluida = tarefas.splice(1, 1)[0];
console.log(`Tarefa concluída: ${concluida}`); // 'trabalhar'
console.log(tarefas); // ['estudar', 'almoçar', 'exercitar', 'dormir']

// Substituir tarefa
tarefas.splice(2, 1, "correr");
console.log(tarefas); // ['estudar', 'almoçar', 'correr', 'dormir']

// Implementação do splice()
Array.prototype.meuSplice = function (inicio, deleteCount, ...items) {
  const removidos = [];
  const arr = this;

  // Ajustar início negativo
  inicio =
    inicio < 0
      ? Math.max(arr.length + inicio, 0)
      : Math.min(inicio, arr.length);

  // Ajustar deleteCount
  deleteCount = Math.min(
    deleteCount ?? arr.length - inicio,
    arr.length - inicio
  );

  // Remover elementos
  for (let i = 0; i < deleteCount; i++) {
    removidos.push(arr[inicio + i]);
  }

  // Deslocar elementos
  const elementosParaMover = arr.length - inicio - deleteCount;

  if (items.length < deleteCount) {
    // Mover para frente
    for (let i = 0; i < elementosParaMover; i++) {
      arr[inicio + items.length + i] = arr[inicio + deleteCount + i];
    }
    arr.length = arr.length - deleteCount + items.length;
  } else {
    // Mover para trás
    arr.length += items.length - deleteCount;
    for (let i = elementosParaMover - 1; i >= 0; i--) {
      arr[inicio + items.length + i] = arr[inicio + deleteCount + i];
    }
  }

  // Inserir novos elementos
  for (let i = 0; i < items.length; i++) {
    arr[inicio + i] = items[i];
  }

  return removidos;
};
```

### slice()

```javascript
// slice() - retorna cópia superficial de parte do array
// array.slice(inicio, fim) - fim não incluído

const numeros = [1, 2, 3, 4, 5];

// Copiar parte do array
const parte = numeros.slice(1, 4); // índices 1, 2, 3
console.log(parte); // [2, 3, 4]
console.log(numeros); // [1, 2, 3, 4, 5] (original inalterado)

// Apenas início
const doIndice2 = numeros.slice(2); // a partir do índice 2
console.log(doIndice2); // [3, 4, 5]

// Índices negativos (conta do final)
const ultimos2 = numeros.slice(-2); // últimos 2 elementos
console.log(ultimos2); // [4, 5]

const doMeio = numeros.slice(1, -1); // exclui primeiro e último
console.log(doMeio); // [2, 3, 4]

// Clonar array inteiro
const clone = numeros.slice();
console.log(clone); // [1, 2, 3, 4, 5]
console.log(clone === numeros); // false (nova referência)

// Cópia superficial (shallow)
const objetos = [{ x: 1 }, { x: 2 }, { x: 3 }];
const copia = objetos.slice();
copia[0].x = 99;
console.log(objetos[0].x); // 99 (modificado!)

// Converter array-like para array
function exemplo() {
  const argsArray = Array.prototype.slice.call(arguments);
  console.log(argsArray);
}
exemplo(1, 2, 3); // [1, 2, 3]

// Com NodeList
const divs = document.querySelectorAll("div");
const divsArray = Array.prototype.slice.call(divs);

// slice() com strings
const texto = "JavaScript";
const parteTexto = texto.slice(0, 4); // 'Java'
console.log(parteTexto);

// Paginação com slice()
function paginar(array, pagina, itensPorPagina) {
  const inicio = (pagina - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  return array.slice(inicio, fim);
}

const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(paginar(dados, 2, 3)); // [4, 5, 6]
```

### concat()

```javascript
// concat() - concatena arrays (não modifica originais)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Concatenar arrays
const concatenado = array1.concat(array2, array3);
console.log(concatenado); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array1); // [1, 2, 3] (inalterado)

// Concatenar com valores
const comValores = array1.concat(4, 5, [6, 7]);
console.log(comValores); // [1, 2, 3, 4, 5, 6, 7]

// concat() vs spread operator
const spread = [...array1, ...array2, ...array3];
console.log(spread); // mesmo resultado

// Diferença: concat() aceita valores não-array
const resultado = array1.concat(4, [5, 6]);
console.log(resultado); // [1, 2, 3, 4, 5, 6]

const spread2 = [...array1, 4, ...[5, 6]];
console.log(spread2); // mesmo resultado

// concat() com objetos
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const arrayComObjetos = [obj1].concat(obj2);
console.log(arrayComObjetos); // [{ a: 1 }, { b: 2 }]

// Achatamento (shallow)
const arrays = [
  [1, 2],
  [3, 4],
];
const achatado = [].concat(...arrays);
console.log(achatado); // [1, 2, 3, 4]

// Implementação do concat()
Array.prototype.meuConcat = function (...args) {
  const novoArray = [...this];

  for (const arg of args) {
    if (Array.isArray(arg)) {
      novoArray.push(...arg);
    } else {
      novoArray.push(arg);
    }
  }

  return novoArray;
};
```

### fill()

```javascript
// fill() - preenche elementos do array com valor estático
// array.fill(valor, inicio, fim)

// Preencher todo array
const numeros = new Array(5).fill(0);
console.log(numeros); // [0, 0, 0, 0, 0]

// Preencher parte do array
const array = [1, 2, 3, 4, 5];
array.fill(9, 1, 4); // preenche índices 1, 2, 3 com 9
console.log(array); // [1, 9, 9, 9, 5]

// Com índice negativo
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, -3); // preenche últimos 3 elementos
console.log(arr2); // [1, 2, 0, 0, 0]

// Criar matriz
function criarMatriz(linhas, colunas, valor) {
  return Array(linhas)
    .fill()
    .map(() => Array(colunas).fill(value));
}

const matriz = criarMatriz(3, 3, 0);
console.log(matriz);
// [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

// Inicializar objetos (cuidado: mesma referência!)
const objetos = new Array(3).fill({ valor: 0 });
objetos[0].valor = 1;
console.log(objetos); // Todos objetos têm valor: 1 (mesma referência)

// Solução: usar map()
const objetos2 = new Array(3).fill().map(() => ({ valor: 0 }));
objetos2[0].valor = 1;
console.log(objetos2); // Apenas o primeiro tem valor: 1
```

## Iteração

### forEach()

```javascript
// forEach() - executa função para cada elemento
const numeros = [1, 2, 3, 4, 5];

// Iteração simples
numeros.forEach((num) => {
  console.log(num * 2);
});
// 2, 4, 6, 8, 10

// Com índice
numeros.forEach((num, index) => {
  console.log(`Índice ${index}: ${num}`);
});

// Com array completo
numeros.forEach((num, index, array) => {
  console.log(`${num} é o elemento ${index + 1} de ${array.length}`);
});

// forEach() não retorna valor
const resultado = numeros.forEach((num) => num * 2);
console.log(resultado); // undefined

// Modificar array original
const dobrados = [];
numeros.forEach((num) => {
  dobrados.push(num * 2);
});
console.log(dobrados); // [2, 4, 6, 8, 10]

// forEach() em objetos
const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
];

pessoas.forEach((pessoa) => {
  console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);
});

// forEach() vs for loop
// Equivalente a:
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// forEach() não pode ser interrompido (break/continue não funcionam)
// Para interromper, use for loop ou some()/every()

// forEach() com thisArg
const multiplicador = {
  fator: 2,
  multiplicar(num) {
    console.log(num * this.fator);
  },
};

numeros.forEach(function (num) {
  this.multiplicar(num);
}, multiplicador);

// forEach() em array-like objects
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

Array.prototype.forEach.call(arrayLike, (item, index) => {
  console.log(`${index}: ${item}`);
});

// Implementação do forEach()
Array.prototype.meuForEach = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};
```

### for...of

```javascript
// for...of - itera sobre valores de objetos iteráveis
const numeros = [1, 2, 3, 4, 5];

// Iteração simples
for (const numero of numeros) {
  console.log(numero);
}

// Com break e continue
for (const numero of numeros) {
  if (numero === 3) break;
  console.log(numero); // 1, 2
}

for (const numero of numeros) {
  if (numero === 3) continue;
  console.log(numero); // 1, 2, 4, 5
}

// Com índices usando entries()
for (const [indice, valor] of numeros.entries()) {
  console.log(`Índice ${indice}: ${valor}`);
}

// Com strings
const texto = "JavaScript";
for (const char of texto) {
  console.log(char); // J, a, v, a, S, c, r, i, p, t
}

// Com NodeList
const divs = document.querySelectorAll("div");
for (const div of divs) {
  console.log(div.textContent);
}

// Com Map
const mapa = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const [chave, valor] of mapa) {
  console.log(`${chave}: ${valor}`);
}

// Com Set
const conjunto = new Set([1, 2, 3, 3, 4]);
for (const valor of conjunto) {
  console.log(valor); // 1, 2, 3, 4 (sem duplicados)
}

// Iteráveis personalizados
const meuIteravel = {
  [Symbol.iterator]: function () {
    let passo = 0;
    return {
      next: function () {
        passo++;
        if (passo <= 3) {
          return { value: passo, done: false };
        }
        return { done: true };
      },
    };
  },
};

for (const valor of meuIteravel) {
  console.log(valor); // 1, 2, 3
}

// for...of vs for...in
const objeto = { a: 1, b: 2, c: 3 };

// for...in itera sobre chaves (incluindo herdadas)
for (const chave in objeto) {
  console.log(chave); // a, b, c
}

// for...of não funciona com objetos não-iteráveis
// for (const valor of objeto) {} // TypeError

// Com generator functions
function* geradorNumeros() {
  yield 1;
  yield 2;
  yield 3;
}

for (const numero of geradorNumeros()) {
  console.log(numero); // 1, 2, 3
}
```

### for...in (para arrays)

```javascript
// for...in - itera sobre propriedades enumeráveis
// CUIDADO: não é recomendado para arrays!

const array = ["a", "b", "c"];

// Funciona, mas não é ideal
for (const indice in array) {
  console.log(indice, array[indice]); // 0 a, 1 b, 2 c
}

// Problema 1: itera sobre propriedades herdadas
Array.prototype.novoMetodo = function () {};
for (const indice in array) {
  console.log(indice); // 0, 1, 2, 'novoMetodo' (não queremos isso!)
}

// Problema 2: ordem não garantida para propriedades não-inteiras
const array2 = [];
array2[2] = "c";
array2[1] = "b";
array2[0] = "a";

for (const indice in array2) {
  console.log(indice); // 0, 1, 2 (ok, mas não confie)
}

// Problema 3: ignora elementos vazios (sparse arrays)
const sparse = [];
sparse[0] = "a";
sparse[2] = "c";
sparse[10] = "k";

for (const indice in sparse) {
  console.log(indice); // 0, 2, 10 (ignora índices vazios)
}

// Quando usar for...in?
const objeto = {
  nome: "João",
  idade: 30,
  cidade: "SP",
};

// Para objetos, sim!
for (const chave in objeto) {
  if (objeto.hasOwnProperty(chave)) {
    console.log(`${chave}: ${objeto[chave]}`);
  }
}

// Melhor para arrays: for, for...of, forEach()
```

### Iteradores Personalizados

```javascript
// Criando objetos iteráveis
const meuIteravel = {
  valores: [10, 20, 30],

  // Método Symbol.iterator
  [Symbol.iterator]: function () {
    let indice = 0;
    const valores = this.valores;

    return {
      // Método next() requerido
      next: function () {
        if (indice < valores.length) {
          return {
            value: valores[indice++],
            done: false,
          };
        }
        return { done: true };
      },

      // Método opcional return() para limpeza
      return: function () {
        console.log("Iteração interrompida");
        return { done: true };
      },

      // Método opcional throw() para erros
      throw: function (error) {
        console.log("Erro na iteração:", error);
        return { done: true };
      },
    };
  },
};

// Usando com for...of
for (const valor of meuIteravel) {
  console.log(valor); // 10, 20, 30
}

// Usando manualmente
const iterador = meuIteravel[Symbol.iterator]();
console.log(iterador.next()); // { value: 10, done: false }
console.log(iterador.next()); // { value: 20, done: false }
console.log(iterador.next()); // { value: 30, done: false }
console.log(iterador.next()); // { done: true }

// Iterador infinito
const contadorInfinito = {
  [Symbol.iterator]: function () {
    let num = 0;
    return {
      next: function () {
        return { value: num++, done: false };
      },
    };
  },
};

// Cuidado: loop infinito!
// for (const n of contadorInfinito) {
//     if (n > 5) break;
//     console.log(n);
// }

// Iterador para faixa de números
function range(inicio, fim, passo = 1) {
  return {
    [Symbol.iterator]: function () {
      let atual = inicio;
      return {
        next: function () {
          if ((passo > 0 && atual <= fim) || (passo < 0 && atual >= fim)) {
            const valor = atual;
            atual += passo;
            return { value: valor, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}

for (const num of range(1, 5)) {
  console.log(num); // 1, 2, 3, 4, 5
}

for (const num of range(5, 1, -1)) {
  console.log(num); // 5, 4, 3, 2, 1
}
```

## Array.from() e Array.isArray()

### Array.from()

```javascript
// Array.from() - cria array a partir de objeto array-like ou iterável

// 1. De array-like objects
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

const array = Array.from(arrayLike);
console.log(array); // ['a', 'b', 'c']

// 2. De strings
const texto = "JavaScript";
const arrayDeTexto = Array.from(texto);
console.log(arrayDeTexto); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// 3. De Sets
const set = new Set([1, 2, 3, 3, 4]);
const arrayDoSet = Array.from(set);
console.log(arrayDoSet); // [1, 2, 3, 4]

// 4. De Maps
const mapa = new Map([
  ["a", 1],
  ["b", 2],
]);
const arrayDoMapa = Array.from(mapa);
console.log(arrayDoMapa); // [['a', 1], ['b', 2]]

// 5. De NodeList
// const divs = document.querySelectorAll('div');
// const arrayDeDivs = Array.from(divs);

// 6. Com função de mapeamento (segundo argumento)
const numeros = [1, 2, 3, 4];
const dobrados = Array.from(numeros, (num) => num * 2);
console.log(dobrados); // [2, 4, 6, 8]

// 7. Criando array de tamanho fixo
const arrayDe5 = Array.from({ length: 5 });
console.log(arrayDe5); // [undefined, undefined, undefined, undefined, undefined]

const arrayDe5ComValores = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arrayDe5ComValores); // [1, 2, 3, 4, 5]

// 8. Sequências numéricas
const sequencia = Array.from({ length: 10 }, (_, i) => i * i);
console.log(sequencia); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

// 9. Remover duplicados (forma alternativa)
const duplicados = [1, 2, 2, 3, 4, 4, 5];
const unicos = Array.from(new Set(duplicados));
console.log(unicos); // [1, 2, 3, 4, 5]

// 10. Converter arguments
function converterArgs() {
  return Array.from(arguments);
}
console.log(converterArgs(1, 2, 3)); // [1, 2, 3]

// 11. Array.from() vs spread operator
const iteravel = new Set([1, 2, 3]);
const comFrom = Array.from(iteravel);
const comSpread = [...iteravel];
console.log(comFrom); // [1, 2, 3]
console.log(comSpread); // [1, 2, 3]

// Diferença: Array.from() aceita função de mapeamento
const comMap = Array.from(iteravel, (x) => x * 2);
console.log(comMap); // [2, 4, 6]
```

### Array.isArray()

```javascript
// Array.isArray() - verifica se valor é array

// Casos básicos
console.log(Array.isArray([])); // true
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray(new Array())); // true
console.log(Array.isArray(Array.prototype)); // true

// Casos que retornam false
console.log(Array.isArray({})); // false
console.log(Array.isArray(null)); // false
console.log(Array.isArray(undefined)); // false
console.log(Array.isArray(17)); // false
console.log(Array.isArray("Array")); // false
console.log(Array.isArray(true)); // false
console.log(Array.isArray(false)); // false
console.log(Array.isArray({ __proto__: Array.prototype })); // false

// Por que usar Array.isArray() em vez de instanceof?
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const iframeArray = iframe.contentWindow.Array;

const array = new iframeArray(1, 2, 3);
console.log(array instanceof Array); // false (diferente contexto)
console.log(Array.isArray(array)); // true

// Alternativas (não recomendadas)
const arr = [];

console.log(arr.constructor === Array); // true (mas pode ser sobrescrito)
console.log(arr instanceof Array); // true (problema com múltiplos frames)
console.log(Object.prototype.toString.call(arr) === "[object Array]"); // true (antiga)

// Uso em funções
function processarArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Esperado array");
  }
  return array.map((x) => x * 2);
}

console.log(processarArray([1, 2, 3])); // [2, 4, 6]
// console.log(processarArray({})); // TypeError

// Verificação segura
function toArray(valor) {
  if (Array.isArray(valor)) {
    return valor;
  } else if (valor == null) {
    return [];
  } else if (typeof valor[Symbol.iterator] === "function") {
    return Array.from(valor);
  } else {
    return [valor];
  }
}

console.log(toArray([1, 2])); // [1, 2]
console.log(toArray("abc")); // ['a', 'b', 'c']
console.log(toArray(123)); // [123]
console.log(toArray(null)); // []
```

### Métodos Úteis Combinados

```javascript
// Array.of() - cria array com os argumentos como elementos
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(undefined)); // [undefined]

// Diferença do Array() constructor
console.log(Array(3)); // [empty × 3]
console.log(Array.of(3)); // [3]

// Array() com múltiplos argumentos cria array com esses elementos
console.log(Array(1, 2, 3)); // [1, 2, 3]

// Array.at() - acessa elemento por índice (permite negativo)
const array = [1, 2, 3, 4, 5];
console.log(array.at(2)); // 3
console.log(array.at(-1)); // 5 (último elemento)
console.log(array.at(-2)); // 4 (penúltimo)
console.log(array.at(10)); // undefined

// vs colchetes
console.log(array[2]); // 3
// console.log(array[-1]); // undefined (não funciona com colchetes)

// Array.flat() - achata arrays aninhados
const aninhado = [1, [2, [3, [4]]]];
console.log(aninhado.flat()); // [1, 2, [3, [4]]]
console.log(aninhado.flat(2)); // [1, 2, 3, [4]]
console.log(aninhado.flat(Infinity)); // [1, 2, 3, 4]

// Array.flatMap() - map() seguido de flat(1)
const frases = ["Hello World", "JavaScript is cool"];
const palavras = frases.flatMap((frase) => frase.split(" "));
console.log(palavras); // ['Hello', 'World', 'JavaScript', 'is', 'cool']

// Array.with() - versão não destrutiva de modificação por índice (ES2023)
const original = [1, 2, 3, 4, 5];
const modificado = original.with(2, 99);
console.log(original); // [1, 2, 3, 4, 5]
console.log(modificado); // [1, 2, 99, 4, 5]

// Exemplo completo: processamento de dados
const dadosBrutos = [
  { id: 1, vendas: [100, 200, 150] },
  { id: 2, vendas: [300, 250] },
  { id: 3, vendas: [400, 350, 500, 450] },
];

// 1. Extrair todas vendas
const todasVendas = dadosBrutos.flatMap((item) => item.vendas);
console.log(todasVendas);

// 2. Calcular total por item
const comTotais = dadosBrutos.map((item) => ({
  ...item,
  total: item.vendas.reduce((acc, v) => acc + v, 0),
}));
console.log(comTotais);

// 3. Filtrar itens com total > 800
const filtrados = comTotais.filter((item) => item.total > 800);
console.log(filtrados);

// 4. Ordenar por total decrescente
const ordenados = [...filtrados].sort((a, b) => b.total - a.total);
console.log(ordenados);

// 5. Extrair apenas IDs
const ids = ordenados.map((item) => item.id);
console.log(ids);
```

Este guia completo cobre todos os aspectos de arrays e iteração em JavaScript, desde métodos básicos até técnicas avançadas. Cada seção inclui exemplos práticos e detalhes de implementação para melhor compreensão.
