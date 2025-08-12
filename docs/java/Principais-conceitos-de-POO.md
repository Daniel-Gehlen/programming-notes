# Principais Conceitos de POO em Java

## 🎯 1. Abstração

**Definição:** Modelar apenas características essenciais, escondendo detalhes complexos.

```java
abstract class Animal {
    protected String nome;
    protected int idade;

    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public abstract void fazerSom(); // Método abstrato

    public void dormir() {
        System.out.println(nome + " está dormindo.");
    }
}
```

## 🔒 2. Encapsulamento

**Definição:** Proteger dados internos expondo apenas o necessário.

```java
class ContaBancaria {
    private double saldo; // Privado para proteção

    public void depositar(double valor) {
        if(valor > 0) {
            saldo += valor; // Controle interno
        }
    }

    public double getSaldo() {
        return saldo; // Acesso controlado
    }
}
```

## 🧬 3. Herança

**Definição:** Reutilizar código através de hierarquia de classes.

```java
class Cachorro extends Animal {
    public Cachorro(String nome, int idade) {
        super(nome, idade); // Chama construtor pai
    }

    @Override
    public void fazerSom() {
        System.out.println(nome + " faz: Au Au!");
    }
}
```

## 🎭 4. Polimorfismo

**Definição:** Um mesmo método pode ter comportamentos diferentes.

```java
Animal meuPet = new Cachorro("Rex", 3);
meuPet.fazerSom(); // Chama implementação de Cachorro

meuPet = new Gato("Mia", 2);
meuPet.fazerSom(); // Chama implementação de Gato
```

## 📜 5. Interfaces

**Definição:** Contrato que define comportamentos obrigatórios.

```java
interface AnimalDomesticado {
    void alimentar();
    void passear();
}

class Cachorro extends Animal implements AnimalDomesticado {
    @Override
    public void alimentar() {
        System.out.println("Alimentando com ração");
    }
}
```

## 🏗️ Exemplo Completo

```java
public class Main {
    public static void main(String[] args) {
        Animal[] pets = {
            new Cachorro("Rex", 5),
            new Gato("Mia", 3)
        };

        for(Animal pet : pets) {
            pet.fazerSom(); // Polimorfismo em ação
            pet.dormir();

            if(pet instanceof AnimalDomesticado) {
                ((AnimalDomesticado)pet).alimentar();
            }
        }
    }
}
```

## 📊 Saída Esperada

```
Rex faz: Au Au!
Rex está dormindo.
Alimentando com ração
Mia faz: Miau!
Mia está dormindo.
Alimentando com peixe
```

## 🔍 Comparativo POO

| Conceito       | Objetivo Principal       | Exemplo Java        |
| -------------- | ------------------------ | ------------------- |
| Abstração      | Simplificar complexidade | `abstract class`    |
| Encapsulamento | Proteger dados           | `private`/`getters` |
| Herança        | Reutilizar código        | `extends`           |
| Polimorfismo   | Múltiplos comportamentos | `@Override`         |
| Interfaces     | Definir contratos        | `interface`         |

📌 _"POO transforma problemas complexos em objetos do mundo real que interagem entre si."_
