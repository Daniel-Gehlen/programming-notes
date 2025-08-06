# Como organizar código em C#

## Introdução

Um panorama sobre como organizar código em C# visando reutilização, agilidade e produtividade, pilares essenciais no desenvolvimento de software.

---

## Camadas do Projeto

### Domínio (Domain)

- Contém **modelos e entidades** que representam a estrutura do negócio.
- Não inclui regras de negócio, apenas a modelagem pura (ex.: classes de entidades, objetos de valor).

### Negócio (Business)

- Local onde as **regras de negócio** residem.
- Referencia a camada de domínio para aplicar lógica específica.
- Pode ser separada em bibliotecas ou módulos específicos para **serviços comuns** (ex.: login, criptografia).

### Aplicação (Application)

- Responsável por **expor** as funcionalidades e **consumir os serviços** da camada de negócio.
- Não deve conter regras de negócio.
- É a interface principal do sistema, conectando negócios a consumidores (ex.: API Controllers).

---

## Dicas Importantes

### Reutilização e Refatoração

- Identifique e extraia lógica repetitiva para **bibliotecas de serviços reutilizáveis**.
- Busque refatorar para melhorar a organização após o código estar funcional.

### Separação por Contexto

- Divida negócios comuns ou genéricos (ex.: autenticação, APIs externas) em bibliotecas apartadas para manter modularidade e desacoplamento.

### Camada de Infraestrutura

- Modelo dinâmico baseado no **Entity Framework**, com **repositórios genéricos**, eliminando a necessidade de uma camada dedicada para dados.

---

## Vantagens da Abordagem

### Modularidade

- Facilita a manutenção e expansão do projeto.
- Promove a reutilização de componentes em múltiplos projetos.

### Foco no Negócio

- Menos tempo gasto em detalhes técnicos periféricos e mais tempo dedicado à **regra de negócio**.

### Testabilidade

- Camadas bem separadas permitem **testes unitários** mais focados e rápidos, especialmente na camada de negócio.

---

## Exemplo de Aplicação

### Domínio Real

- Capacidade de **sobrecarregar** classes (ex.: criar tabelas específicas para necessidades específicas).
- Aproveitar a flexibilidade do repositório genérico para focar na lógica de domínio.

### Modelar e Consumir APIs utilizando C#

1. **Seleção e Análise da API**:

   - Exemplo: **Open Banking Brasil** (documentação detalhada e bem organizada).
   - Estrutura e campos das APIs já definidos simplificam a modelagem no código.

2. **Organização de Projetos**:

   - Separação lógica de modelos em namespaces e pastas (ex.: pasta para **Enums**).
   - Uso de **public enum** para definir constantes ou categorias (ex.: tipos de telefone).

3. **Criação de Classes e Propriedades**:

   - Ferramentas como **Json2CSharp** convertem objetos JSON em classes C# com propriedades em PascalCase.
   - Adição de atributos como `[Display(Name = "Nome do Campo")]` e `[MaxLength(2)]` para validação e documentação.

4. **Validação e Anotações de Dados**:

   - Uso de **Data Annotations** do C# (`[Required]`, `[Phone]`, `[StringLength]`).
   - Exploração de **nullable reference types** (`string?`) para campos opcionais (C# 8.0).

5. **Documentação do Código**:

   - Uso de **XML comments** (`///`) para descrever propriedades e classes.
   - Análise de namespaces para explorar anotações e validações disponíveis no .NET.

6. **Customização para o Contexto da API**:

   - Ajustes para refletir especificidades (ex.: campos obrigatórios e tamanhos máximos).
   - Configuração de valores padrão para campos (ex.: código do país).

7. **Boas Práticas e Organização**:
   - Preferência por **PascalCase** no backend.
   - Classes bem comentadas e estruturadas para clareza na validação e consulta futura.

---

## Ferramentas e Dicas Úteis

- **Json2CSharp**: Converte JSON em classes de modelo.
- **DataAnnotations**: Biblioteca padrão do .NET para validação embutida (ex.: `[EmailAddress]`, `[Phone]`, `[CreditCard]`).
- **Nullable Reference Types**: Define explicitamente propriedades que podem ser `null` (uso de `?`).
- **Namespace Cleaning**: Limpa `usings` desnecessários para código mais limpo.

---

## Implementação do Repository Pattern usando Entity Framework

### 1. Introdução ao Repository Pattern

- A **interface** do repositório define contratos que as implementações devem seguir.
- Repositórios específicos por entidade (ex.: `CursoRepository`) ou **repositórios genéricos** (`<T>`).

### 2. Uso de Tipos Genéricos

- Repositórios genéricos permitem criar um único repositório reutilizável para diferentes entidades.
- Exemplo com `List<T>`: destaca a utilidade de genéricos para estruturas reutilizáveis.

### 3. Diferenciais da Abordagem

- **Herança Base**: Todas as entidades herdam de `BaseEntity` (propriedades comuns como `Id`).
- **DbSet Dinâmico**: Uso de `DbSet<T>` e consultas com **LINQ** (traduzidas automaticamente para SQL).

### 4. Flexibilidade e Ferramentas Complementares

- **Quando usar Repository Pattern?**
  - Excelente para operações CRUD básicas.
  - Para consultas complexas (ex.: relatórios), use abordagens específicas como SQL direto ou Dapper.
- **Integração com Dependency Injection**: Injeção de repositórios em controladores ou serviços.

### 5. Benefícios do Entity Framework

- **Automatização de Consultas**: LINQ queries convertidas para SQL.
- **Geração Automática de Scripts**: Criação de tabelas e alterações no banco sem migrations manuais.

### 6. Implementação e Demonstração

- **Data Annotations** para definir tamanhos e regras das entidades.
- Scripts SQL programáticos para criação de tabelas.

### 7. Conclusão

- **Produtividade**: Menos código repetitivo, mais reutilização.
- **Pragmatismo**: Escolhas baseadas no contexto do projeto.
- **Flexibilidade**: Alternar entre Entity Framework, consultas diretas ou Dapper.

---

## APIs Genéricas e Boas Práticas

### 1. Repositório Genérico

- **O que é**: Encapsula operações CRUD para todas as entidades.
- **Vantagens**: Reduz duplicação de código e centraliza lógica de acesso a dados.
- **Customização**: Métodos podem ser sobrescritos para casos específicos.

### 2. Controller Genérica

- **O que é**: Expõe endpoints CRUD para todas as entidades.
- **Pontos fortes**:
  - Facilita criação de APIs com pouca codificação.
  - Métodos como `GetById` e `GetAll` pré-implementados.
- **Segurança**: Filtragem dinâmica por usuário ou organização (multitenancy).

### 3. Uso do OData

- **Por que usar?** Simplifica queries complexas (filtros, ordenações, paginação via URL).
- **Vantagens**:
  - Reduz endpoints personalizados.
  - Respostas dinâmicas e otimizadas, respeitando regras de segurança.

### 4. Pipelines Automatizados

- **Prototipação rápida**: APIs CRUD geradas automaticamente para validar modelos.
- **Redução de trabalho repetitivo**: Evita escrever código redundante para cada entidade.

### 5. Bibliotecas Compartilhadas

- **Pacotes NuGet**: Centralizam lógica reutilizável.
- **Startup Configurations**: Encapsulam configurações principais (DI, middleware).

---

## Configuração de Testes no Visual Studio 2022

### 1. Criando o Projeto de Teste

- Projeto do tipo **xUnit** ou **NUnit**.
- Arquivo de teste padrão (`UnitTest1`).

### 2. Bibliotecas e Pacotes

- **Fluent Assertions**: Afirmações mais legíveis.
- **xUnit/NUnit**: Frameworks para execução de testes.
- **Injeção de Dependência**: Simplifica gerenciamento de dependências em testes.

### 3. Testes Unitários vs. Integração

- **Unitários**: Testam métodos isoladamente, rápidos e sem dependências externas.
- **Integração**: Envolvem interações complexas (banco de dados, APIs). Prefira banco real em testes para resultados fiéis.

### 4. Configuração de Middleware

- Seguir boas práticas da Microsoft (ex.: autenticação antes de mapear endpoints).
- Documentação Microsoft para resolver problemas complexos.

### 5. Ambiente de Testes

- Configurar `appsettings.json` para testes de integração.
- Variáveis de ambiente e cópia de configurações para o ambiente de testes.

### 6. Cobertura de Código

- Ferramentas analisam cobertura de testes (ex.: 17% do código coberto).
- Identifica partes da aplicação que precisam de mais atenção.

---

## DDD (Domain-Driven Design)

### Objetivos

- Foco nas necessidades do negócio, não apenas em camadas técnicas.
- Dividir problemas complexos em partes gerenciáveis (ex.: carrinho de compras, pagamento).

### Microservices e APIs

- Cada serviço (ex.: pagamento, carrinho) isolado e independente.
- Comunicação via APIs para escalabilidade e manutenção facilitada.

### Camadas de Arquitetura

1. **Infraestrutura**: Configuração e deployment.
2. **Aplicação**: Expõe serviços de negócio via APIs.
3. **Domínio**: Entidades e regras de lógica do negócio.

---

## Fluxo Front-End e Back-End

### Requisições HTTP

- **POST**: Criar registros.
- **PUT**: Atualizar registros inteiros.
- **PATCH**: Atualização parcial de campos.

### Objetos de Dados

- "Data Object" especifica campos para atualização/leitura, evitando múltiplas classes.

### Integração

- **Axios** ou similares para requisições assíncronas (uso de `async/await`).
- **Debugging**: Breakpoints e console para validar dados enviados/recebidos.

### Segurança

- Front-end não acessa banco diretamente; comunica-se via APIs.
- Validações no back-end (ex.: estado de entidades relacionadas antes de excluir/atualizar).

---

## Conclusão

A organização de código em C# deve priorizar modularidade, reutilização e clareza, alinhando-se às necessidades do negócio. Ferramentas como Entity Framework, OData e padrões como Repository Pattern aceleram o desenvolvimento, enquanto testes e DDD garantem qualidade e manutenibilidade. A separação clara entre front-end e back-end, com APIs bem definidas, assegura segurança e eficiência na comunicação.
