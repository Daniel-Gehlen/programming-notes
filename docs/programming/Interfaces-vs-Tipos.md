# Interfaces vs Tipos no TypeScript

## 1. Interfaces

### Características Principais

- **Contratos para Classes**: Definem estruturas que classes devem implementar
- **Herança Múltipla**: Uma classe pode implementar várias interfaces
- **Declaration Merging**: Permite mesclar declarações com o mesmo nome

### Exemplo Prático

```typescript
interface Animal {
  nome: string;
  fazerSom(): void;
}

class Cachorro implements Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  fazerSom() {
    console.log("Au Au!");
  }
}
```

**Diagrama**:

```
+-------------+       +----------------+
|   Animal    |       |   Cachorro     |
|-------------|       |----------------|
| nome: string|<------| nome: string   |
| fazerSom()  |       | fazerSom()     |
+-------------+       +----------------+
```

### Herança Múltipla

```typescript
interface Voar {
  voar(): void;
}

interface Nadar {
  nadar(): void;
}

class Pato implements Voar, Nadar {
  voar() {
    console.log("Voando!");
  }
  nadar() {
    console.log("Nadando!");
  }
}
```

## 2. Tipos (Type Aliases)

### Características Principais

- **Definição de Estruturas**: Modelam formatos de dados
- **Operadores de Composição**: Permitem união (`|`) e intersecção (`&`)
- **Flexibilidade**: Podem representar primitivos, uniões, tuplas

### Exemplo Básico

```typescript
type Carro = {
  marca: string;
  ano: number;
};

const meuCarro: Carro = {
  marca: "Toyota",
  ano: 2020,
};
```

### Composição de Tipos

```typescript
type Caneta = { escrever(): void };
type Lapis = { desenhar(): void };

type CanetaLapis = Caneta & Lapis;

const meuItem: CanetaLapis = {
  escrever() {
    console.log("Escrevendo...");
  },
  desenhar() {
    console.log("Desenhando...");
  },
};
```

## 3. Comparação Direta

| Característica                   | Interface | Tipo   |
| -------------------------------- | --------- | ------ |
| Pode ser implementada por classe | ✅ Sim    | ❌ Não |
| Permite herança múltipla         | ✅ Sim    | ❌ Não |
| Suporta declaration merging      | ✅ Sim    | ❌ Não |
| Pode usar union/intersection     | ❌ Não    | ✅ Sim |
| Pode definir tipos primitivos    | ❌ Não    | ✅ Sim |
| Pode usar mapeamento condicional | ❌ Não    | ✅ Sim |

## 4. Quando Usar Cada Um

### Use Interfaces quando:

- Definir contratos para classes
- Precisar de herança múltipla
- Quiser mesclar declarações
- Trabalhar com bibliotecas/extensões

### Use Tipos quando:

- Criar uniões ou intersecções
- Definir tipos complexos ou utilitários
- Trabalhar com tipos condicionais
- Modelar tuplas ou tipos literais

## 5. Exemplo Avançado

```typescript
// Com tipos
type Status = "ativo" | "inativo" | "pendente";

// Com interface
interface UsuarioBase {
  id: string;
}

interface Admin extends UsuarioBase {
  nivel: number;
  aprovarUsuario(id: string): boolean;
}

// Tipo utilitário
type PartialUsuario = Partial<UsuarioBase> & { status?: Status };
```

## Conclusão

**Interfaces** são ideais para:

- Definição de formas de objetos
- Contratos de classes
- Cenários de extensibilidade

**Tipos** são melhores para:

- Composição complexa
- Tipos utilitários
- Situações que requerem operadores de tipo

_"Escolha entre interface e tipo baseado nas necessidades do seu domínio, não apenas em preferências pessoais."_
