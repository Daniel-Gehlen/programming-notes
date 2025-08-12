# Introdução Prática à Linguagem de Programação Kotlin

## Objetivo Geral

Dominar a sintaxe do Kotlin através de exemplos práticos. Embora a leitura da documentação oficial seja útil, aprender na prática torna o processo mais envolvente e eficaz. Exploraremos exemplos e exercícios oficiais para solidificar seu conhecimento em Kotlin.

---

## Percurso

### 1. Olá Mundo!

**Descrição:**
O primeiro passo para começar com Kotlin é criar o clássico programa "Olá Mundo!". Este exercício ajudará a entender a configuração básica e a estrutura de um programa Kotlin.

**Exemplo:**

```kotlin
fun main() {
    println("Olá Mundo!")
}
```

---

### 2. O Básico Sobre Funções

**Descrição:**
Aprenda a definir e utilizar funções em Kotlin. Vamos explorar como criar funções simples e como elas facilitam a modularização do código.

**Exemplo:**

```kotlin
fun saudacao(nome: String): String {
    return "Olá, $nome!"
}

fun main() {
    println(saudacao("João"))
}
```

---

### 3. Variáveis

**Descrição:**
Entenda como declarar e utilizar variáveis em Kotlin. Veremos a diferença entre variáveis imutáveis (`val`) e mutáveis (`var`), e como escolher a mais adequada para cada situação.

**Exemplo:**

```kotlin
val nome: String = "Ana"   // Variável imutável
var idade: Int = 25        // Variável mutável

fun main() {
    println("Nome: $nome, Idade: $idade")
    idade = 26
    println("Idade atualizada: $idade")
}
```

---

### 4. Null Safety

**Descrição:**
Explore o conceito de segurança contra nulos (_null safety_) em Kotlin. Vamos aprender a evitar erros comuns relacionados a valores nulos e como lidar com eles de maneira segura.

**Exemplo:**

```kotlin
fun main() {
    val nome: String? = null
    println(nome?.length ?: "Nome não fornecido")
}
```

---

### 5. Classes

**Descrição:**
Conheça a definição e o uso de classes em Kotlin. Vamos criar classes básicas, explorar construtores e entender como trabalhar com propriedades e métodos.

**Exemplo:**

```kotlin
class Pessoa(val nome: String, var idade: Int) {
    fun aniversario() {
        idade++
    }
}

fun main() {
    val pessoa = Pessoa("Carlos", 30)
    pessoa.aniversario()
    println("${pessoa.nome} tem ${pessoa.idade} anos")
}
```

---

### 6. Generics

**Descrição:**
Aprenda a usar _generics_ para criar classes e funções que podem operar com diferentes tipos de dados. Isso permite maior flexibilidade e reusabilidade do código.

**Exemplo:**

```kotlin
class Caixa<T>(var item: T) {
    fun mostrarItem() {
        println("Item: $item")
    }
}

fun main() {
    val caixaDeLivros = Caixa("Livro de Kotlin")
    caixaDeLivros.mostrarItem()

    val caixaDeNumero = Caixa(42)
    caixaDeNumero.mostrarItem()
}
```

---

## Recursos Adicionais

- [Documentação Oficial do Kotlin](https://kotlinlang.org/docs/home.html)
- [Learn Kotlin by Example](https://play.kotlinlang.org/byExample/overview)
