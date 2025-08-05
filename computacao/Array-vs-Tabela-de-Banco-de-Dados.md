# Array vs Tabela de Banco de Dados

## Diferenças Fundamentais

### Estrutura de Dados
**Array de Objetos**:
- Coleção sequencial de objetos em memória
- Acesso via índices numéricos
- Exemplo em JavaScript:
```javascript
let produtos = [
    {id: 1, nome: "Teclado", preco: 150},
    {id: 2, nome: "Mouse", preco: 80}
];
```

**Tabela de Banco de Dados**:
- Estrutura organizada em linhas (registros) e colunas (campos)
- Exemplo em SQL:
```sql
CREATE TABLE produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(10,2)
);
```

### Armazenamento
| Característica | Array | Tabela DB |
|---------------|-------|----------|
| Localização | Memória RAM | Disco (SGBD) |
| Persistência | Volátil | Persistente |
| Capacidade | Limitada pela RAM | Escalável |

### Operações
**Arrays**:
- Busca manual (iteração)
- Ordenação programática
- Exemplo:
```javascript
// Busca em array
let caro = produtos.find(p => p.preco > 100);
```

**Tabelas**:
- Consultas SQL complexas
- Indexação para performance
- Exemplo:
```sql
-- Consulta SQL
SELECT * FROM produtos WHERE preco > 100;
```

## Comparação Visual

### Array de Objetos
```javascript
[
    {id: 1, nome: "Teclado", preco: 150},
    {id: 2, nome: "Mouse", preco: 80}
]
```

### Tabela Relacional
| id | nome    | preco |
|----|---------|-------|
| 1  | Teclado | 150.00|
| 2  | Mouse   | 80.00 |

## Casos de Uso

**Arrays são ideais para**:
- Dados temporários
- Processamento em memória
- Estruturas de dados programáticas

**Tabelas são ideais para**:
- Armazenamento persistente
- Consultas complexas
- Multiplos acessos concorrentes
