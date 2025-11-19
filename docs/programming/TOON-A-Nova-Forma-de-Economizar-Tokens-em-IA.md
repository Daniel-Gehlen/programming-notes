# TOON: A Nova Forma de Economizar Tokens em IA

## O Que é TOON?

**TOON** significa **Token Oriented Object Notation** (Notação de Objeto Orientada a Token). É um formato de dados criado especificamente para **economizar tokens** ao trabalhar com modelos de linguagem (LLMs), reduzindo custos e melhorando a eficiência.

## Por Que TOON Surgiu?

Assim como JSON substituiu XML por ser menos verboso, TOON surge para resolver um problema atual: **cada token em IA custa dinheiro**. Quando você usa ChatGPT, Gemini ou outros modelos, você paga por tokens - tanto na entrada quanto na saída.

## Comparação Prática: TOON vs JSON

Vejamos a diferença na prática:

**JSON tradicional:**

```json
{
  "channel": {
    "user": "codigofontetv",
    "subscribers": 128000,
    "total_views": 8450000,
    "videos": 287,
    "hosts": ["Gabriel", "Vanessa"]
  }
}
```

**TOON equivalente:**

```
channel
 user: codigofontetv
 subscribers: 128000
 total_views: 8450000
 videos: 287
 hosts: ["Gabriel", "Vanessa"]
```

**Resultado:**

- JSON: 69 tokens
- TOON: 50 tokens
- **Economia: 27.5%**

## Como Funciona a Sintaxe do TOON?

### 1. Estrutura Básica

```
nome: Maria Santos
idade: 28
ativo: false
```

### 2. Hierarquia (usando espaços)

```
cliente
 nome: Carlos
 email: carlos@empresa.com
 endereco
  rua: Av. Principal
  numero: 123
  cidade: São Paulo
```

### 3. Arrays (Listas)

**Arrays simples:**

```
valores: [6]
 10,25,37,42,58,64
```

**Arrays de objetos:**

```
pedidos: [3]
 codigo,produto,quantidade,valor
 "P001","Teclado",5,299.90
 "P002","Monitor",2,899.00
 "P003","Webcam",8,159.99
```

**Arrays complexos:**

```
departamentos: [2]
 -
  id: 101
  nome: Vendas
  funcionarios: 15
 -
  id: 102
  nome: TI
  funcionarios: 8
```

## Quando Usar TOON?

### ✅ Use TOON quando:

- **Economia de tokens** é prioritária
- Trabalha com **arrays uniformes** de dados
- Os dados serão usados em **prompts para LLMs**
- Precisa de **legibilidade humana**

### ❌ Evite TOM quando:

- Dados são **muito complexos/aninhados**
- Já tem **pipelines com JSON** funcionando
- Dados são **puramente tabulares** (CSV é melhor)
- **Latência** é crítica

## Ferramentas e Suporte

TOON já tem suporte em várias linguagens:

- TypeScript
- Java
- PHP
- Go
- Python (em desenvolvimento)
- C# (em desenvolvimento)
- Rust (em desenvolvimento)

## Alternativas: TL (Token Optimizer Notation Language)

Existe também o **TL**, que promete ser ainda mais econômico, mas o TOON é atualmente o mais popular.

## Conclusão

**TOON não veio para substituir JSON**, mas para ser uma **alternativa inteligente** quando economia de tokens é importante. Assim como escolhemos entre JSON, XML ou YAML dependendo do contexto, agora temos mais uma opção na nossa caixa de ferramentas.

---
