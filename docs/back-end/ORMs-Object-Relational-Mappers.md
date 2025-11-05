# ORMs (Object-Relational Mappers)

## O que são ORMs?

ORMs são ferramentas que mapeiam objetos de programação orientada a objetos para tabelas de bancos de dados relacionais, criando uma "ponte" entre esses dois mundos.

**Analogia**: Imagine que você tem objetos em Python/Java/C# (como `Usuario`, `Produto`) e precisa armazená-los em um banco SQL. O ORM traduz automaticamente esses objetos em operações SQL.

## Como funcionam?

### Mapeamento Básico

```python
# Exemplo com SQLAlchemy (Python)
class Usuario(Base):
    __tablename__ = 'usuarios'

    id = Column(Integer, primary_key=True)
    nome = Column(String(50))
    email = Column(String(100))
    data_criacao = Column(DateTime)

# O ORM cria automaticamente esta tabela:
# CREATE TABLE usuarios (
#     id INTEGER PRIMARY KEY,
#     nome VARCHAR(50),
#     email VARCHAR(100),
#     data_criacao DATETIME
# );
```

### Operações Básicas

```python
# CREATE
novo_usuario = Usuario(nome="João", email="joao@email.com")
session.add(novo_usuario)
session.commit()

# READ
usuario = session.query(Usuario).filter_by(nome="João").first()

# UPDATE
usuario.email = "novo_email@email.com"
session.commit()

# DELETE
session.delete(usuario)
session.commit()
```

## Vantagens (PROS)

### 1. **Produtividade**

- Código mais limpo e expressivo
- Menos código boilerplate
- Desenvolvimento mais rápido

### 2. **Abstração do Banco**

- Trocar de banco (MySQL → PostgreSQL) com mudanças mínimas
- Não precisa aprender SQL avançado para operações comuns

### 3. **Segurança**

- Prevenção contra SQL Injection
- Validações automáticas

### 4. **Manutenibilidade**

- Código mais organizado
- Migrações de schema facilitadas

## Desvantagens (CONTRAS)

### 1. **Performance**

- Consultas complexas podem ser menos eficientes
- Overhead adicional
- "N+1 queries problem"

### 2. **Curva de Aprendizado**

- Conceitos complexos (sessions, lazy loading, etc.)
- Debug mais difícil

### 3. **Abstração Vazada**

- Às vezes você precisa entender SQL para otimizar
- Pode gerar consultas SQL ineficientes

### 4. **Flexibilidade Limitada**

- Operações muito complexas podem ser difíceis de expressar
- Stored procedures e funções específicas do banco

## ORMs Populares

### Python - SQLAlchemy

```python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)

# Uso
engine = create_engine('sqlite:///database.db')
Session = sessionmaker(bind=engine)
session = Session()
```

### JavaScript/TypeScript - TypeORM

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

### Java - Hibernate

```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;
}
```

### C# - Entity Framework

```csharp
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
}
```

## Padrões Comuns

### 1. **Active Record**

- O objeto sabe salvar/se carregar
- Ex: Ruby on Rails, Laravel Eloquent

```php
// Laravel Eloquent
$user = new User();
$user->name = "John";
$user->email = "john@example.com";
$user->save();
```

### 2. **Data Mapper**

- Separado do objeto de domínio
- Ex: SQLAlchemy, Hibernate

```python
# SQLAlchemy (Data Mapper)
user = User(name="John")
session.add(user)  # Objeto separado gerencia a persistência
session.commit()
```

## Melhores Práticas

### 1. **Lazy vs Eager Loading**

```python
# RUIM: N+1 queries
for user in session.query(User):
    for post in user.posts:  # Query adicional para cada usuário
        print(post.title)

# BOM: Eager loading
users = session.query(User).options(joinedload(User.posts)).all()
```

### 2. **Transações**

```python
try:
    session.begin()
    # operações...
    session.commit()
except:
    session.rollback()
    raise
```

### 3. **Índices e Otimizações**

```python
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    email = Column(String(100), index=True)  # Índice para busca
```

## Quando usar ORMs?

### Use ORM quando:

- Aplicações CRUD simples/médias
- Equipe menos experiente em SQL
- Prototipação rápida
- Projetos com modelos de dados não extremamente complexos

### Evite ORM quando:

- Aplicações com consultas muito complexas
- Performance crítica
- Uso intensivo de stored procedures
- Modelos de dados muito complexos

## Recursos para Aprender Mais

### Documentações Oficiais:

- [SQLAlchemy (Python)](https://www.sqlalchemy.org/)
- [TypeORM (TypeScript)](https://typeorm.io/)
- [Hibernate (Java)](https://hibernate.org/)
- [Entity Framework (C#)](https://docs.microsoft.com/en-us/ef/)
- [Django ORM (Python)](https://docs.djangoproject.com/en/stable/topics/db/)

### Tutoriais:

- [SQLAlchemy Tutorial](https://docs.sqlalchemy.org/en/14/orm/tutorial.html)
- [TypeORM Getting Started](https://typeorm.io/#/)
- [Hibernate Tutorial](https://hibernate.org/orm/documentation/5.4/)

### Ferramentas Relacionadas:

- **Migrações**: Alembic (Python), Flyway (Java)
- **Ferramentas de Query**: SQLAlchemy Core, JOOQ
- **Monitoramento**: Logging de queries, ferramentas de profiling

## Conclusão

ORMs são ferramentas poderosas que podem acelerar muito o desenvolvimento, mas exigem entendimento tanto do ORM quanto do SQL subjacente para uso eficiente. A chave é saber quando usar o ORM e quando recorrer a SQL nativo para casos específicos.

Comece com operações básicas, entenda como o ORM gera SQL, e gradualmente avance para recursos mais complexos sempre monitorando a performance das consultas geradas.
