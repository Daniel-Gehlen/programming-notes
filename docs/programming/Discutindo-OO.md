# Evolução da Programação Orientada a Objetos (OO)

## Raízes Históricas (Anos 60-70)

### Linguagens Pioneiras

- **Assembly/Fortran/COBOL**: Dominavam a programação científica e comercial
- **Algol**: Base para linguagens estruturadas futuras
- **Simula (1967)**: Primeira linguagem com conceitos OO
  ```simula
  CLASS Queue;
  BEGIN
    PROCEDURE ADD; ITEMS := ITEMS + 1;
    PROCEDURE REMOVE; ITEMS := ITEMS - 1;
  END;
  ```

### Hardware e Métodos

- **Mainframes/Minicomputadores**: PDP-11 como referência
- **Cartões Perfurados**: Fluxo lento de desenvolvimento
  ```
  [Código] → [Cartões] → [Computador] → [Correções]
  ```

## Revolução OO (Anos 70-80)

### Smalltalk (Xerox PARC)

- Primeira linguagem totalmente OO
- Influenciou interfaces gráficas modernas
  ```smalltalk
  Object subclass: #Dog [
    makeSound ^'Woof!'
  ]
  myDog := Dog new. myDog makeSound
  ```

### Popularização

- **Pascal → C++**: Evolução para OO
- **Objective-C**: Ponte para NeXTSTEP/macOS
  ```objc
  @interface Dog : NSObject
  - (void)makeSound; // Woof!
  @end
  ```

## Consolidação (Anos 90)

### Java e WORA

- "Write Once, Run Anywhere"
- Ideal para web emergente
  ```java
  ServerSocket server = new ServerSocket(8080);
  Socket client = server.accept();
  ```

### Padronização

- **UML**: Booch/Jacobson/Rumbaugh
- **Princípio de Liskov**: Fundamentos teóricos

## Paradigmas de Desenvolvimento

### Waterfall vs Ágil

```
[Análise] → [Design] → [Implementação] → [Testes]
```

vs

```
[Iterações] ↔ [Feedback] ↔ [Adaptação]
```

### Clean Code

- Legibilidade acima de tudo
  ```java
  public int add(int a, int b) {
    return a + b; // Clareza intencional
  }
  ```

## Reflexões Contemporâneas

### Estado Atual

- Maturidade das linguagens OO
- Raras inovações paradigmáticas

### Desafios

- Programação por obrigação vs paixão
- Evolução pós-Ágil

> "OO mudou como pensamos software, mas boas práticas transcendem paradigmas"
