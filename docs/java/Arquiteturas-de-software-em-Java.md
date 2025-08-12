# Arquiteturas de Software em Java

## 1. Arquitetura Monolítica
### Descrição
Aplicação onde todos os componentes estão agrupados em um único projeto.

### Exemplo Java
- Spring Boot
- Jakarta EE

### Características
✅ Fácil desenvolvimento inicial
✅ Único artefato (.jar/.war)
❌ Difícil escalabilidade horizontal
❌ Manutenção complexa em grandes projetos

```java
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAllUsers();
    }
}
```

### Fluxo
```
[UI] → [Controller] → [Service] → [Repository] → [Database]
```

---

## 2. Arquitetura de Microserviços
### Descrição
Sistema dividido em serviços independentes.

### Exemplo Java
- Spring Boot/Micronaut/Quarkus
- Comunicação via REST/gRPC/Kafka

### Características
✅ Escalabilidade independente
✅ Poliglotismo (várias linguagens)
❌ Complexidade operacional
❌ Overhead de comunicação

```java
@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.getProductById(id);
    }
}
```

### Fluxo
```
[Client] → [API Gateway] → [Service A] ↔ [Service B]
                   ↑
           [Service Discovery]
```

---

## 3. Arquitetura em Camadas
### Descrição
Separação clara em camadas funcionais.

### Exemplo Java
- Spring (MVC)
- Hibernate/JPA

### Características
✅ Organização clara
✅ Facilita testes unitários
❌ Risco de acoplamento entre camadas

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {}

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public List<User> getAllUsers() {
        return repository.findAll();
    }
}
```

### Fluxo
```
[UI] → [Application] → [Business] → [Persistence] → [DB]
```

---

## 4. Arquitetura Orientada a Serviços (SOA)
### Descrição
Serviços reutilizáveis para múltiplas aplicações.

### Exemplo Java
- Apache CXF
- Spring WS

### Características
✅ Reutilização de serviços
❌ Overhead de protocolos como SOAP

```java
@WebService
public class CustomerService {
    @WebMethod
    public Customer getCustomerById(int id) {
        return new Customer(id, "John Doe");
    }
}
```

---

## 5. Arquitetura Orientada a Eventos
### Descrição
Sistema baseado em produção/consumo de eventos.

### Exemplo Java
- Apache Kafka
- Project Reactor

### Características
✅ Alta escalabilidade
✅ Desacoplamento
❌ Complexidade de debug

```java
@Component
public class EventConsumer {
    @KafkaListener(topics = "orders", groupId = "group_id")
    public void consume(String message) {
        System.out.println("Received: " + message);
    }
}
```

### Fluxo
```
[Producer] → [Broker] → [Consumer]
```

---

## 6. Arquitetura Hexagonal
### Descrição
Núcleo isolado com adaptadores para I/O.

### Exemplo Java
- Spring DI
- Interfaces/Ports

### Características
✅ Alta testabilidade
✅ Flexibilidade tecnológica
❌ Curva de aprendizado

```java
public interface OrderService {
    void processOrder(Order order);
}

public class OrderServiceImpl implements OrderService {
    @Override
    public void processOrder(Order order) {
        // Domain logic
    }
}
```

### Fluxo
```
[REST] → [Core] ← [DB]
```

---

## 7. Arquitetura Serverless
### Descrição
Funções executadas sob demanda.

### Exemplo Java
- AWS Lambda
- Google Cloud Functions

### Características
✅ Sem gerenciamento de infra
✅ Escala automática
❌ Cold starts

```java
public class Handler implements RequestHandler<Map<String, String>, String> {
    @Override
    public String handleRequest(Map<String, String> input, Context context) {
        return "Hello, " + input.get("name");
    }
}
```

### Fluxo
```
[Trigger] → [Function] → [Response]
```

---

## 8. Arquitetura CQRS
### Descrição
Separação entre comandos (escrita) e consultas (leitura).

### Exemplo Java
- Spring Data
- Axon Framework

### Características
✅ Otimização de leituras
❌ Sincronização complexa

```java
public class CreateOrderCommand {
    private String orderId;
    private String productId;
}
```

### Fluxo
```
[Command] → [Write Model] → [Event Store]
[Query] → [Read Model] ← [Read DB]
```

---

## Comparativo Rápido
| Arquitetura       | Melhor Para          | Complexidade | Escalabilidade |
|-------------------|----------------------|--------------|----------------|
| Monolítica        | Projetos pequenos    | Baixa        | Limitada       |
| Microserviços     | Sistemas grandes     | Alta         | Excelente      |
| Camadas           | Aplicações tradicionais | Média     | Moderada       |
| Event-Driven      | Sistemas em tempo real | Alta      | Excelente      |
| Serverless        | Funções esporádicas  | Variável     | Automática     |
