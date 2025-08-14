# Pesquisa sobre Princípios SOLID e Organização de Classes na Programação

## Objetivos da Pesquisa

1. **Compreensão dos princípios SOLID**

   - Investigar cada princípio (SRP, OCP, LSP, ISP, DIP) em profundidade.
   - Analisar como eles melhoram a manutenibilidade e escalabilidade do código.

2. **Evolução histórica**

   - Traçar o desenvolvimento da organização de classes desde o paradigma procedural até a POO moderna.
   - Examinar como os princípios SOLID emergiram como resposta a problemas comuns.

3. **Impacto na qualidade do software**

   - Avaliar como a aplicação dos princípios afeta métricas de qualidade (acoplamento, coesão, complexidade).
   - Comparar sistemas que seguem vs. não seguem esses princípios.

4. **Padrões de projeto relacionados**

   - Explorar como padrões como Factory, Strategy e Observer implementam os princípios SOLID.

5. **Casos práticos**
   - Analisar refatorações de código antes/depois da aplicação dos princípios.
   - Estudar exemplos de frameworks populares que adotam esses conceitos.

---

## Metodologia Sugerida

- **Revisão bibliográfica** dos conceitos fundamentais.
- **Análise comparativa** de projetos de software.
- **Desenvolvimento de exemplos controlados** (aplicando/não aplicando os princípios).
- **Entrevistas ou surveys** com desenvolvedores experientes.
- **Medição de métricas de qualidade** em diferentes implementações.

---

## Princípios SOLID Explicados

### 1. SRP - Princípio da Responsabilidade Única

**Definição**:
"Uma classe deve ter apenas um motivo para mudar."

**Exemplo**:
❌ **Violação**:

```
[Classe Pedido]
├── CalculaTotal()
├── SalvaNoBanco()
└── EnviaEmail()
```

✅ **Aplicado**:

```
[Classe Pedido] → [Classe PedidoRepository] → [Classe EmailService]
└── CalculaTotal()    └── SalvaNoBanco()         └── EnviaEmail()
```

---

### 2. OCP - Princípio Aberto/Fechado

**Definição**:
"Classes devem ser **abertas para extensão**, mas **fechadas para modificação**."

**Exemplo**:
❌ **Violação**:

```
[Classe Relatorio]
├── GerarPDF()
└── GerarHTML()
```

✅ **Aplicado**:

```
          [Interface IFormatoRelatorio]
                     ↑
         ____________|____________
        |            |           |
[PDFGenerator] [HTMLGenerator] [JSONGenerator]
```

---

### 3. LSP - Princípio da Substituição de Liskov

**Definição**:
"Classes derivadas devem ser substituíveis por suas classes base **sem quebrar** o comportamento esperado."

**Exemplo**:
❌ **Violação**:

```
[Classe Pássaro] → [Classe Pinguim]
└── Voar()          └── Voar() { *lança erro* }
```

✅ **Aplicado**:

```
          [Classe Pássaro]
             └── Mover()
                    ↑
         ___________|___________
        |                      |
[PássaroVoador]         [PássaroNadador]
└── Voar()              └── Nadar()
```

---

### 4. ISP - Princípio da Segregação de Interfaces

**Definição**:
"Clientes não devem ser forçados a depender de interfaces que não usam."

**Exemplo**:
❌ **Violação**:

```
[Interface IMáquina]
├── Imprimir()
├── Digitalizar()
└── Faxar()
```

✅ **Aplicado**:

```
[Interface IImpressora]   [Interface IScanner]   [Interface IFax]
└── Imprimir()            └── Digitalizar()      └── Faxar()
```

---

### 5. DIP - Princípio da Inversão de Dependência

**Definição**:
"Dependa de **abstrações**, não de implementações concretas."

**Exemplo**:
❌ **Violação**:

```
[Classe PedidoService] → [Classe MySQLDatabase]
```

✅ **Aplicado**:

```
[Classe PedidoService] → [Interface IDatabase] ← [MySQLDatabase] [MongoDB]
```

---

## Resumo Visual dos Princípios SOLID

```
SRP: [1 Classe] = [1 Responsabilidade]
OCP: Estende sem modificar (→ Herança/Interfaces)
LSP: Subclasses não quebram o contrato
ISP: Interfaces pequenas e específicas
DIP: Dependa de ↑abstrações↓, não ↓implementações↑
```
