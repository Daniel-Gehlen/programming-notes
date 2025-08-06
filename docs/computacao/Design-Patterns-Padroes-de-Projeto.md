### **Design Patterns (Padrões de Projeto)**

**Definição:**
Padrões de Projeto são soluções reutilizáveis para problemas comuns no desenvolvimento de software, promovendo código flexível, escalável e de fácil manutenção.

---

### **1. Padrões Criacionais**

Lidam com a criação de objetos, reduzindo acoplamento e aumentando flexibilidade.

#### **Singleton**

- **Objetivo:** Garantir que uma classe tenha apenas **uma instância** global.
- **Uso:** Configurações de sistema, conexões de banco de dados.

#### **Factory Method**

- **Objetivo:** Delegar a criação de objetos para **subclasses**.
- **Uso:** Quando a classe exata do objeto não é conhecida antecipadamente.

#### **Abstract Factory**

- **Objetivo:** Criar **famílias de objetos relacionados** sem especificar classes concretas.
- **Uso:** Interfaces gráficas multiplataforma.

#### **Builder**

- **Objetivo:** Construir objetos **complexos passo a passo**.
- **Uso:** Criação de queries SQL, objetos com muitos parâmetros.

#### **Prototype**

- **Objetivo:** Clonar objetos **evitando recriação custosa**.
- **Uso:** Cópia de objetos com estados iniciais complexos.

---

### **2. Padrões Estruturais**

Organizam classes e objetos para formar estruturas maiores.

#### **Adapter**

- **Objetivo:** Converter interfaces **incompatíveis** em compatíveis.
- **Uso:** Integração de bibliotecas externas.

#### **Decorator**

- **Objetivo:** Adicionar **funcionalidades dinâmicas** a objetos.
- **Uso:** Streams de dados, adição de comportamentos em runtime.

#### **Facade**

- **Objetivo:** Fornecer uma **interface simplificada** para subsistemas complexos.
- **Uso:** APIs que abstraem bibliotecas complexas.

#### **Proxy**

- **Objetivo:** Controlar acesso a objetos (**cache, lazy loading**).
- **Uso:** Acesso a recursos remotos, controle de permissões.

#### **Composite**

- **Objetivo:** Tratar objetos **individuais e compostos** uniformemente.
- **Uso:** Estruturas de diretórios, interfaces gráficas.

---

### **3. Padrões Comportamentais**

Gerenciam comunicação e responsabilidades entre objetos.

#### **Observer**

- **Objetivo:** Notificar **múltiplos objetos** sobre mudanças de estado.
- **Uso:** Sistemas de eventos, atualizações em tempo real.

#### **Strategy**

- **Objetivo:** Encapsular **algoritmos intercambiáveis**.
- **Uso:** Ordenação (bubble sort vs. quick sort).

#### **Command**

- **Objetivo:** Transformar solicitações em **objetos independentes**.
- **Uso:** Filas de tarefas, operações desfazer/refazer.

#### **Iterator**

- **Objetivo:** Acessar elementos de coleções **sem expor estrutura interna**.
- **Uso:** Percorrer listas, árvores, grafos.

#### **State**

- **Objetivo:** Alterar comportamento com base no **estado interno**.
- **Uso:** Máquinas de estado (ex.: semáforo).

#### **Chain of Responsibility**

- **Objetivo:** Passar solicitações por uma **cadeia de manipuladores**.
- **Uso:** Middlewares em frameworks web.

---

### **Conclusão**

- **Benefícios:** Reuso de soluções testadas, código mais legível e manutenível.
- **Aplicação:** Escolha o padrão conforme a natureza do problema (criação, estrutura ou comportamento).

**Exemplo Prático (Singleton em Python):**

```python
class Database:
    _instance = None

    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = Database()
        return cls._instance

db1 = Database.get_instance()
db2 = Database.get_instance()
print(db1 is db2)  # True (mesma instância)
```

---

**Nota:** Cada padrão resolve um problema específico, e sua escolha depende do contexto do projeto.
