# Hierarquia de Classes em Java

## Visão Geral

- Toda classe em Java herda direta ou indiretamente de `Object`
- Suporta herança simples (uma classe por vez)
- Permite implementação múltipla de interfaces

## Hierarquia Básica

```
Object
  |
  ├── String
  ├── Integer
  └── MinhaClasse
        |
        └── MinhaSubClasse
```

## Métodos Fundamentais de Object

| Método       | Descrição                      | Exemplo de Uso             |
| ------------ | ------------------------------ | -------------------------- |
| `toString()` | Representação string do objeto | `System.out.println(obj)`  |
| `equals()`   | Comparação de igualdade        | `if(obj1.equals(obj2))`    |
| `hashCode()` | Código hash para coleções      | `map.put(obj, value)`      |
| `getClass()` | Retorna a classe do objeto     | `obj.getClass().getName()` |

## Exemplo Prático

```java
class Animal {
    void emitirSom() {
        System.out.println("Som genérico");
    }
}

class Cachorro extends Animal {
    @Override
    void emitirSom() {
        System.out.println("Au au!");
    }
}

class Bulldog extends Cachorro {
    @Override
    void emitirSom() {
        System.out.println("Rosnado de bulldog");
    }
}
```

## Interfaces em Java

### Características

- Define contratos (métodos abstratos)
- Permite herança múltipla
- Pode ter métodos default (Java 8+)
- Não faz parte da hierarquia de classes

### Exemplo com Interfaces

```java
interface Veiculo {
    void ligar();
    void desligar();
}

interface Eletrico {
    void carregar();
}

class CarroEletrico implements Veiculo, Eletrico {
    public void ligar() { /* implementação */ }
    public void desligar() { /* implementação */ }
    public void carregar() { /* implementação */ }
}
```

## Diagrama de Hierarquia Completa

```
Object
  |
  ├── String
  ├── Integer
  ├── MinhaClasse
  |     └── MinhaSubClasse
  |
  └── Animal (interface)
        ├── Cachorro
        |     └── Bulldog
        └── Gato
```

## Boas Práticas

✔ Preferir composição sobre herança
✔ Usar `@Override` para métodos sobrescritos
✔ Interfaces para definir comportamentos
✔ Classes abstratas para compartilhar código

## Polimorfismo

```java
Animal animal = new Bulldog();
animal.emitirSom(); // "Rosnado de bulldog" - despacho dinâmico
```

## Conclusão

- Hierarquia de classes é fundamental em Java
- `Object` é a raiz de todas as classes
- Interfaces complementam a herança
- Polimorfismo permite código flexível
