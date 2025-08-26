# DTO (Data Transfer Object)

Em programação, **DTO (Data Transfer Object)** é um padrão de design usado para transferir dados entre diferentes partes de um sistema, como entre camadas de uma aplicação ou entre serviços.

### **Características do DTO:**

1. **Objeto simples** que carrega apenas dados, sem lógica de negócio.
2. **Usado para transferência**, não para representar entidades de negócio (como modelos de banco de dados).
3. **Pode ser diferente da estrutura interna** da aplicação (ex.: juntar campos de várias tabelas em um único DTO).

### **Exemplo de Uso:**

Suponha que você tenha um sistema com um **User** no banco de dados, mas só queira enviar alguns campos para o front-end:

#### **Entidade (Model) no Back-end:**

```java
public class User {
    private Long id;
    private String name;
    private String email;
    private String password; // Não deve ser enviado ao front-end!
    // Getters e Setters...
}
```

#### **DTO para Transferência (sem a senha):**

```java
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    // Getters e Setters...
}
```

#### **Conversão (exemplo em Java com Spring):**

```java
public UserDTO convertToDTO(User user) {
    UserDTO dto = new UserDTO();
    dto.setId(user.getId());
    dto.setName(user.getName());
    dto.setEmail(user.getEmail());
    return dto;
}
```

### **Vantagens do DTO:**

✅ **Segurança:** Evita expor dados sensíveis (como senhas).
✅ **Controle:** Permite selecionar apenas os dados necessários.
✅ **Desacoplamento:** Ajusta a estrutura dos dados sem modificar o modelo interno.
✅ **Performance:** Reduz a quantidade de dados trafegados (útil em APIs).

### **Quando Usar?**

- Em APIs REST para enviar/resgatar dados.
- Na comunicação entre microsserviços.
- Para evitar expor a estrutura interna do banco de dados.

### **Frameworks que Ajudam:**

- **Java:** MapStruct, ModelMapper.
- **C#:** AutoMapper.
- **JavaScript/TypeScript:** Classes simples ou bibliotecas como `class-transformer`.

Resumindo: **DTO é uma "cápsula" de dados otimizada para transferência**, garantindo eficiência e segurança. 🚀
