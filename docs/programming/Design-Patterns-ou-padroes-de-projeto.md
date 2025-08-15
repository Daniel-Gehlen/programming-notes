# Design Patterns (Padrões de Projeto)

Design Patterns são soluções testadas e comprovadas para problemas recorrentes no desenvolvimento de software, promovendo código reutilizável, flexível e de fácil manutenção.

## Categorias Principais

### 1. Padrões de Criação

**Finalidade:** Abstrair o processo de criação de objetos

- **Singleton**
  Garante uma única instância de classe
  `Uso: Loggers, Conexões DB`

- **Factory Method**
  Delega criação para subclasses
  `Uso: Criadores de UI`

- **Abstract Factory**
  Cria famílias de objetos relacionados
  `Uso: Kits de componentes GUI`

- **Builder**
  Constrói objetos complexos passo-a-passo
  `Uso: Consultas SQL, Objetos com muitos parâmetros`

- **Prototype**
  Clona objetos existentes
  `Uso: Sistemas com custo alto de criação`

### 2. Padrões Estruturais

**Finalidade:** Composição de classes e objetos

- **Adapter**
  Adapta interfaces incompatíveis
  `Uso: Integração com APIs legadas`

- **Composite**
  Trata objetos individuais e compostos uniformemente
  `Uso: Sistemas de arquivos, GUIs`

- **Decorator**
  Adiciona responsabilidades dinamicamente
  `Uso: Streams de I/O`

- **Facade**
  Simplifica interfaces complexas
  `Uso: APIs para subsistemas complexos`

- **Proxy**
  Controla acesso a objetos
  `Uso: Lazy loading, Acesso remoto`

### 3. Padrões Comportamentais

**Finalidade:** Comunicação entre objetos

- **Strategy**
  Encapsula algoritmos intercambiáveis
  `Uso: Sistemas de pagamento`

- **Observer**
  Notifica mudanças de estado
  `Uso: Event handlers`

- **Command**
  Encapsula solicitações como objetos
  `Uso: Sistemas de undo/redo`

- **State**
  Altera comportamento com mudança de estado
  `Uso: Máquinas de estado`

- **Iterator**
  Acessa elementos sequencialmente
  `Uso: Coleções de dados`

## Padrões Arquiteturais

- **MVC**
  Separa lógica (Model), interface (View) e controle (Controller)
  `Uso: Aplicações web`

- **MVVM**
  Especialização do MVC para UIs modernas
  `Uso: Apps com data-binding`

## Padrões para Microservices

- **Service Registry**
  Registro dinâmico de serviços
  `Uso: Descoberta de serviços`

- **Circuit Breaker**
  Previne cascata de falhas
  `Uso: Sistemas distribuídos`

## Benefícios

✅ **Reutilização** - Soluções comprovadas
✅ **Manutenção** - Código organizado
✅ **Comunicação** - Linguagem comum
✅ **Flexibilidade** - Fácil adaptação

## Quando Aplicar

✔ Problemas conhecidos com soluções estabelecidas
✔ Necessidade de código flexível e extensível
✔ Projetos complexos que exigem organização

## Quando Evitar

❌ Problemas simples com soluções diretas
❌ Quando aumenta complexidade sem benefícios
❌ Sem compreensão clara do padrão
