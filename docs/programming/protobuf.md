# Protocol Buffers (protobuf)

## Visão Geral

Protocol Buffers (protobuf) é um sistema de serialização de dados binário desenvolvido pelo Google, projetado para ser:

- **Eficiente** (tamanho compacto)
- **Rápido** (processamento otimizado)
- **Multiplataforma** (suporte a 10+ linguagens)
- **Extensível** (evolução de esquema)

## Componentes Principais

### 1. Arquivo .proto

Define a estrutura dos dados (esquema)

```protobuf
syntax = "proto3";

message User {
  int64 id = 1;
  string username = 2;
  string email = 3;
  repeated string roles = 4;  // Campo repetido (array)
  map<string, string> metadata = 5;  // Mapa chave-valor
}
```

### 2. Compilador protoc

Gera classes em linguagens alvo:

```bash
protoc --java_out=. user.proto  # Gera classes Java
protoc --python_out=. user.proto  # Gera classes Python
```

### 3. Runtime

Bibliotecas para serialização/desserialização

## Vantagens

| Benefício             | Detalhe                                           |
| --------------------- | ------------------------------------------------- |
| **Eficiência**        | Tamanho 3-10x menor que JSON/XML                  |
| **Velocidade**        | Serialização 20-100x mais rápida que JSON         |
| **Esquema Forte**     | Validação durante compilação                      |
| **Evolução**          | Adicione novos campos sem quebrar compatibilidade |
| **Geração de Código** | Classes type-safe em múltiplas linguagens         |

## Comparação com Alternativas

| Feature      | Protobuf    | JSON     | XML      |
| ------------ | ----------- | -------- | -------- |
| Formato      | Binário     | Texto    | Texto    |
| Tamanho      | +++         | +        | -        |
| Velocidade   | +++         | +        | -        |
| Legibilidade | -           | +++      | ++       |
| Esquema      | Obrigatório | Opcional | Opcional |

## Casos de Uso Ideais

1. **Comunicação entre microsserviços**
2. **Armazenamento eficiente de dados**
3. **APIs de alto desempenho**
4. **Sistemas distribuídos**

## Exemplo de Uso em Python

```python
import user_pb2

# Criar mensagem
user = user_pb2.User()
user.id = 123
user.username = "john_doe"
user.email = "john@example.com"
user.roles.extend(["admin", "user"])

# Serializar
binary_data = user.SerializeToString()

# Desserializar
new_user = user_pb2.User()
new_user.ParseFromString(binary_data)
```
