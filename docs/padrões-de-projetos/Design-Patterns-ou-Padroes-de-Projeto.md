# Design Patterns, ou Padrões de Projeto

## Introdução

Os **Design Patterns** (Padrões de Projeto) são soluções típicas para problemas comuns de design de software. Eles são categorizados em três grupos principais:

- **Criacionais**
- **Estruturais**
- **Comportamentais**

---

## 1. Padrões Criacionais

Lidam com a criação de objetos de maneira controlada.

### Singleton

**Descrição**: Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.
**Exemplo**: Uma classe de configuração acessada globalmente em um aplicativo.

### Factory Method

**Descrição**: Define uma interface para criar um objeto, permitindo que subclasses alterem o tipo de objeto criado.
**Exemplo**: Fábrica de veículos que cria carros ou motos, dependendo da subclasse.

### Abstract Factory

**Descrição**: Fornece uma interface para criar famílias de objetos relacionados sem especificar classes concretas.
**Exemplo**: Fábrica de interfaces de usuário para diferentes sistemas operacionais (Windows, macOS).

### Builder

**Descrição**: Separa a construção de um objeto complexo de sua representação.
**Exemplo**: Construção de um objeto `Carro` com diferentes configurações (motor, cor, acessórios).

### Prototype

**Descrição**: Cria novos objetos copiando um protótipo existente.
**Exemplo**: Clonar um objeto `Documento` para criar versões modificadas.

---

## 2. Padrões Estruturais

Lidam com a composição de classes ou objetos em estruturas maiores.

### Adapter

**Descrição**: Permite que interfaces incompatíveis trabalhem juntas.
**Exemplo**: Conectar um sistema de pagamento antigo a um novo e-commerce.

### Bridge

**Descrição**: Separa abstração da implementação, permitindo variações independentes.
**Exemplo**: Sistema de desenho funcional em múltiplas plataformas (Windows, macOS).

### Composite

**Descrição**: Permite composição de objetos em estruturas de árvore.
**Exemplo**: Sistema de arquivos com pastas e arquivos aninhados.

### Decorator

**Descrição**: Adiciona responsabilidades a objetos dinamicamente.
**Exemplo**: Adicionar leite ou açúcar a um objeto `Café`.

### Facade

**Descrição**: Fornece uma interface simplificada para um subsistema complexo.
**Exemplo**: Classe que simplifica o acesso a um sistema de biblioteca.

### Flyweight

**Descrição**: Compartilha dados entre objetos similares para economizar memória.
**Exemplo**: Caracteres em um editor de texto compartilhando fonte e estilo.

### Proxy

**Descrição**: Controla o acesso a um objeto através de um substituto.
**Exemplo**: Proxy de imagem que carrega a imagem real sob demanda.

---

## 3. Padrões Comportamentais

Lidam com algoritmos e atribuição de responsabilidades entre objetos.

### Chain of Responsibility

**Descrição**: Passa solicitações por uma cadeia de manipuladores.
**Exemplo**: Sistema de aprovação de despesas com diferentes níveis de gerentes.

### Command

**Descrição**: Transforma solicitações em objetos independentes.
**Exemplo**: Comandos de desfazer/refazer em um editor de texto.

### Interpreter

**Descrição**: Define uma gramática para interpretar sentenças.
**Exemplo**: Interpretador de expressões matemáticas em uma calculadora.

### Iterator

**Descrição**: Permite acesso sequencial a elementos de uma coleção.
**Exemplo**: Iteração sobre uma lista de objetos.

### Mediator

**Descrição**: Gerencia interações entre objetos.
**Exemplo**: Sistema de chat onde um mediador coordena a comunicação.

### Memento

**Descrição**: Captura e restaura o estado interno de um objeto.
**Exemplo**: Salvamento de estado em um jogo.

### Observer

**Descrição**: Notifica dependentes sobre mudanças de estado.
**Exemplo**: Sistema de notificação de eventos.

### State

**Descrição**: Altera comportamento com base no estado interno.
**Exemplo**: Semáforo que muda entre verde, amarelo e vermelho.

### Strategy

**Descrição**: Encapsula algoritmos intercambiáveis.
**Exemplo**: Algoritmos de ordenação trocáveis dinamicamente.

### Template Method

**Descrição**: Define um esqueleto de algoritmo, delegando passos às subclasses.
**Exemplo**: Algoritmo de preparação de bebidas com etapas personalizáveis.

### Visitor

**Descrição**: Executa operações em elementos de uma estrutura.
**Exemplo**: Renderização de gráficos com visitantes para diferentes formas.

---

## Conclusão

Os padrões de projeto fornecem **soluções comprovadas** para problemas comuns, promovendo:

- **Reutilização de código**
- **Manutenibilidade**
- **Flexibilidade**

A escolha do padrão adequado depende do **contexto específico** do problema.
