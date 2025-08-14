# Decompondo a Orientação a Objetos (OO) em níveis

Vamos decompor a **Orientação a Objetos (OO)** em níveis, partindo dos conceitos de alto nível até chegar ao nível mais baixo da programação, onde os fundamentos da OO são implementados. Cada nível será explicado de forma objetiva:

---

## 1. Nível de Alto Nível: Conceitos Fundamentais da OO

- **Abstração**: Representação simplificada de entidades do mundo real.
- **Encapsulamento**: Ocultação de detalhes internos e exposição de interfaces.
- **Herança**: Reutilização de código através de hierarquias.
- **Polimorfismo**: Capacidade de um objeto se comportar de múltiplas formas.

---

## 2. Nível Intermediário: Estruturas de Dados e Classes

- **Classes**: Modelos que definem atributos (dados) e métodos (comportamentos).
- **Objetos**: Instâncias de classes, com estado (valores dos atributos) e comportamento (métodos).
- **Atributos**: Variáveis que armazenam o estado de um objeto.
- **Métodos**: Funções que definem o comportamento de um objeto.

---

## 3. Nível de Implementação: Linguagem de Programação

- **Sintaxe de Classes**: Como classes são definidas na linguagem (ex: `class` em Java, Python, etc.).
- **Instanciação**: Criação de objetos a partir de classes (ex: `new Objeto()`).
- **Métodos Construtores**: Inicialização de objetos (ex: `__init__` em Python, `constructor` em JavaScript).
- **Acesso a Membros**: Como atributos e métodos são acessados (ex: `objeto.atributo`, `objeto.metodo()`).

---

## 4. Nível de Baixo Nível: Representação em Memória

- **Alocação de Memória**: Como objetos são armazenados na memória (heap).
- **Referências**: Ponteiros que apontam para a localização do objeto na memória.
- **Tabela de Métodos**: Estrutura que mapeia métodos para suas implementações (usada em polimorfismo).

---

## 5. Nível Mais Baixo: Programação Estruturada e Funções

- **Funções**: Blocos de código que implementam comportamentos (métodos são funções associadas a objetos).
- **Estruturas de Dados**: Representação de atributos como variáveis e tipos primitivos (ex: `int`, `float`, `char`).
- **Controle de Fluxo**: Condicionais (`if`, `else`) e loops (`for`, `while`) usados para implementar lógica.

---

## 6. Nível de Hardware: Instruções de Máquina

- **Instruções de CPU**: Operações básicas como movimentação de dados (`MOV`), operações aritméticas (`ADD`, `SUB`), e chamadas de função (`CALL`).
- **Registradores**: Armazenamento temporário de dados durante a execução.
- **Pilha de Execução**: Gerenciamento de chamadas de funções e escopos.

---

## Resumo da Decomposição:

1. **Conceitos de OO**: Abstração, Encapsulamento, Herança, Polimorfismo.
2. **Estruturas de Classes e Objetos**: Atributos, Métodos, Instanciação.
3. **Sintaxe da Linguagem**: Definição de classes, construtores, acesso a membros.
4. **Memória e Referências**: Alocação, tabela de métodos, ponteiros.
5. **Programação Estruturada**: Funções, estruturas de dados, controle de fluxo.
6. **Instruções de Máquina**: Operações de CPU, registradores, pilha de execução.

Essa decomposição mostra como a Orientação a Objetos é construída sobre fundamentos de programação estruturada e, finalmente, sobre operações de hardware.

_por Daniel Gehlen_

---

## Exemplos em Java para cada um dos 6 tópicos

### 1. Conceitos de OO

**Exemplo**: Abstração, Encapsulamento, Herança e Polimorfismo.

```java
// Abstração: Classe que representa um "Animal"
abstract class Animal {
    // Encapsulamento: Atributo privado
    private String nome;

    // Construtor
    public Animal(String nome) {
        this.nome = nome;
    }

    // Método abstrato (comportamento que deve ser implementado)
    public abstract void fazerSom();

    // Getter (expõe o atributo de forma controlada)
    public String getNome() {
        return nome;
    }
}

// Herança: Classe "Cachorro" herda de "Animal"
class Cachorro extends Animal {
    public Cachorro(String nome) {
        super(nome);
    }

    // Polimorfismo: Implementação do método abstrato
    @Override
    public void fazerSom() {
        System.out.println(getNome() + " diz: Au Au!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal meuCachorro = new Cachorro("Rex");
        meuCachorro.fazerSom(); // Saída: Rex diz: Au Au!
    }
}
```

### 2. Estruturas de Classes e Objetos

**Exemplo**: Atributos, Métodos e Instanciação.

```java
class Carro {
    // Atributos
    private String marca;
    private int ano;

    // Construtor
    public Carro(String marca, int ano) {
        this.marca = marca;
        this.ano = ano;
    }

    // Método
    public void exibirDetalhes() {
        System.out.println("Carro: " + marca + ", Ano: " + ano);
    }
}

public class Main {
    public static void main(String[] args) {
        // Instanciação de um objeto
        Carro meuCarro = new Carro("Ford", 2020);
        meuCarro.exibirDetalhes(); // Saída: Carro: Ford, Ano: 2020
    }
}
```

### 3. Sintaxe da Linguagem

**Exemplo**: Definição de classes, construtores e acesso a membros.

```java
class Pessoa {
    // Atributos
    private String nome;
    private int idade;

    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método público para acessar atributo privado
    public String getNome() {
        return nome;
    }

    // Método público para modificar atributo privado
    public void setIdade(int idade) {
        this.idade = idade;
    }
}

public class Main {
    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("João", 25);
        System.out.println("Nome: " + pessoa.getNome()); // Saída: Nome: João
        pessoa.setIdade(30); // Modificando a idade
    }
}
```

### 4. Memória e Referências

**Exemplo**: Alocação de objetos e referências.

```java
public class Main {
    public static void main(String[] args) {
        // Objeto é alocado na memória heap
        String texto1 = new String("Olá");
        String texto2 = texto1; // texto2 referencia o mesmo objeto que texto1

        System.out.println(texto1); // Saída: Olá
        System.out.println(texto2); // Saída: Olá

        texto1 = new String("Mundo"); // texto1 agora referencia um novo objeto

        System.out.println(texto1); // Saída: Mundo
        System.out.println(texto2); // Saída: Olá (texto2 ainda referencia o objeto antigo)
    }
}
```

### 5. Programação Estruturada

**Exemplo**: Funções, estruturas de dados e controle de fluxo.

```java
public class Main {
    // Função que calcula o fatorial de um número
    public static int fatorial(int n) {
        if (n <= 1) {
            return 1; // Caso base
        } else {
            return n * fatorial(n - 1); // Recursão
        }
    }

    public static void main(String[] args) {
        int numero = 5;
        int resultado = fatorial(numero); // Chamada de função
        System.out.println("Fatorial de " + numero + " é " + resultado); // Saída: Fatorial de 5 é 120
    }
}
```

### 6. Instruções de Máquina

**Exemplo**: Operações básicas (simulação em Java).

```java
public class Main {
    public static void main(String[] args) {
        int a = 10; // MOV a, 10 (atribuição)
        int b = 20; // MOV b, 20 (atribuição)
        int c = a + b; // ADD c, a, b (operação aritmética)

        System.out.println("Resultado: " + c); // Saída: Resultado: 30

        if (c > 15) { // Comparação (CMP c, 15)
            System.out.println("C é maior que 15"); // Saída: C é maior que 15
        }
    }
}
```

---

## Resumo:

Cada exemplo ilustra um nível da decomposição da Orientação a Objetos, desde conceitos de alto nível até operações de baixo nível. Isso mostra como a OO é construída sobre fundamentos de programação estruturada e, finalmente, sobre operações de hardware.
