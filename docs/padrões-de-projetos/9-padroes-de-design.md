# 9 Padrões de Design

---

## 🔷 Padrões Criacionais (Creational Patterns)

### 1. Factory Pattern

```
Client   |   vFactory   |   vShape Interface   |----> Circle   |----> Square   |----> Triangle
```

- **Descrição**: Cria objetos sem especificar a classe concreta.
- **Uso**: Quando a lógica de criação é complexa ou precisa ser abstraída.

---

### 2. Singleton Pattern

```
Client Class A ----|Client Class B ----|--> Singleton Class --> Instance (única)Client Class C ----|
```

- **Descrição**: Garante que uma classe tenha apenas uma instância.
- **Uso**: Para recursos compartilhados como configurações globais ou conexões de banco de dados.

---

### 3. Builder Pattern

```
Main   |   vBuilder Interface   |   vCar Builder   |   vCar Class
```

- **Descrição**: Separa a construção de um objeto complexo de sua representação.
- **Uso**: Quando um objeto precisa de muitos parâmetros opcionais ou configurações.

---

## 🟧 Padrões Estruturais (Structural Patterns)

### 4. Adapter Pattern

```
Client   |   vTarget   |   vAdapter   |   vAdaptee
```

- **Descrição**: Permite que interfaces incompatíveis trabalhem juntas.
- **Uso**: Para integrar sistemas legados ou bibliotecas externas.

---

### 5. Composite Pattern

```
Client   |   vComponent   |----> Leaf   |----> Composite                 |                 v           Children (Component)
```

- **Descrição**: Trata objetos individuais e composições de objetos uniformemente.
- **Uso**: Para estruturas hierárquicas como menus ou sistemas de arquivos.

---

### 6. Decorator Pattern

```
Interface   |   vConcrete Component ----> Decorator                              |                              v          ------------------------------          |                            |Concrete Decorator 1      Concrete Decorator 2
```

- **Descrição**: Adiciona responsabilidades a objetos dinamicamente.
- **Uso**: Para estender funcionalidades sem alterar código existente.

---

### 7. Proxy Pattern

```
Client   |   vImage Interface   |----> Real Image (carrega sob demanda)   |----> Proxy Image ----> Demo Class (solicita Real Image)
```

- **Descrição**: Controla o acesso a um objeto, adicionando uma camada intermediária.
- **Uso**: Para lazy loading, controle de acesso ou logging.

---

## 🟩 Padrões Comportamentais (Behavioral Patterns)

### 8. Strategy Pattern

```
Shopping Cart Context Class   |   vPayment Strategy Interface   |----> Credit Card Payment   |----> Paypal Payment
```

- **Descrição**: Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis.
- **Uso**: Quando múltiplas variações de um comportamento são necessárias.

---

### 9. Observer Pattern

```
Subject   |   |--- subjectChanged() ---> Notifica Observers   |   vObserver A <--- update()Observer B <--- update()Observer C <--- update()
```

- **Descrição**: Define uma dependência um-para-muitos entre objetos.
- **Uso**: Para implementar sistemas de eventos ou notificações.

---

### 10. Command Pattern

```
Remote Control   |   vCommand Interface   |----> Command 1   |----> Command 2   |----> Command 3   |----> Command 4                      |                      v              Concrete Commands ----> Device
```

- **Descrição**: Encapsula uma solicitação como um objeto.
- **Uso**: Para implementar sistemas de filas de comandos ou operações desfazer/refazer.

---

**por Daniel Gehlen**
_Estes blocos representam visualmente como os objetos se relacionam em cada padrão._
