# Introduction to Haskell

Haskell é uma linguagem de programação funcional que se destaca por sua forte tipagem estática, ênfase em funções puras e uso extensivo de avaliação preguiçosa (lazy evaluation). Criada nos anos 1990, ela se tornou uma linguagem popular tanto para pesquisa acadêmica quanto para desenvolvimento prático de software.

---

## Características Principais de Haskell

### Programação Funcional

Haskell segue o paradigma funcional, onde as funções são tratadas como cidadãs de primeira classe. Isso significa que as funções podem ser:

- Passadas como argumentos para outras funções.
- Retornadas como resultados de funções.
- Armazenadas em estruturas de dados.

### Tipagem Estática Forte

Haskell possui um sistema de tipos forte e estático, o que significa que todos os tipos de dados são verificados em tempo de compilação. Isso ajuda a prevenir muitos erros comuns de programação, garantindo maior robustez e segurança.

### Avaliação Preguiçosa (Lazy Evaluation)

Em Haskell, a avaliação de expressões é feita apenas quando o valor é realmente necessário. Isso permite:

- Lidar com estruturas de dados potencialmente infinitas.
- Melhorar a eficiência em certos casos, evitando cálculos desnecessários.

### Imutabilidade

Os dados em Haskell são imutáveis por padrão, o que significa que, uma vez que um valor é definido, ele não pode ser alterado. Isso promove uma programação mais segura, evitando efeitos colaterais indesejados.

### Recursão e Listas

- A recursão é amplamente utilizada em Haskell, muitas vezes em vez de loops imperativos.
- Listas são estruturas de dados fundamentais, e Haskell fornece muitas funções de alto nível para manipulá-las.

### Funções de Ordem Superior

Haskell suporta funções de ordem superior, o que significa que você pode:

- Passar funções como argumentos para outras funções.
- Retornar funções como resultados.
  Isso facilita a composição de funções complexas e promove o reuso de código.

### Sistema de Módulos

Haskell possui um sistema de módulos robusto que permite organizar e reutilizar código de maneira eficiente, facilitando a criação de programas modulares e extensíveis.

---

## Aplicações de Haskell

### Aplicações Acadêmicas

Haskell é muito popular em ambientes acadêmicos devido à sua elegância matemática e à ênfase em funções puras, que facilitam a prova formal de propriedades de programas.

### Desenvolvimento de Software

Embora não seja tão difundida quanto linguagens como Python ou Java, Haskell é usada em projetos de software onde a segurança e a concorrência são críticas, como em:

- Sistemas financeiros.
- Compiladores.
- Aplicações científicas.

---

## Exemplos de Código em Haskell

### Função para Calcular Fatorial

```haskell
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)
```

### Manipulação de Listas

```haskell
-- Duplica cada elemento de uma lista
duplicate :: [a] -> [a]
duplicate [] = []
duplicate (x:xs) = x : x : duplicate xs

-- Filtra números pares de uma lista
filterEven :: [Int] -> [Int]
filterEven = filter even
```

### Função de Ordem Superior

```haskell
-- Aplica uma função a cada elemento de uma lista
applyToAll :: (a -> b) -> [a] -> [b]
applyToAll _ [] = []
applyToAll f (x:xs) = f x : applyToAll f xs
```

---

## Resumo

Haskell é uma linguagem funcional com uma rica teoria matemática por trás de sua concepção, favorecendo a expressividade e a segurança do código através de suas características únicas como:

- Tipagem forte.
- Avaliação preguiçosa.
- Imutabilidade.
