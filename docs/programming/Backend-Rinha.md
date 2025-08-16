# Backend Rinha

O evento Backend Rinha foi um concurso online onde desenvolvedores competiram para criar a API mais rápida, com restrições específicas de infraestrutura.

---

## Pontos Chave

### Vencedor e Implementação

- **Vencedor**: Vinicius Fonseca.
- **Tecnologias**: Rust + framework Actix com Tokio.

### Critérios de Classificação

- Baseado no número de inserções no banco de dados durante um teste de carga.

### Polêmica

- Falta de transparência nos critérios de julgamento.
- Presença de bugs em algumas inscrições.

### Experiência de Aprendizado

- Destaque para a importância da otimização de desempenho e testes completos.

---

## Participação do Autor

### Tecnologias Utilizadas

- **Linguagem**: Crystal.
- **Framework**: Lucky.

### Análise de Técnicas de Desempenho

- Inserções em massa no banco de dados.
- Criação de índices especiais para pesquisas.

### Críticas Construtivas

- Falta de testes automatizados.
- Ausência de divulgação antecipada dos critérios de julgamento.

### Conclusão do Autor

- Experiência positiva e educativa, com foco em otimização de desempenho.

---

## Recriando o Desafio Backend Rinha

### Tecnologia Recomendada

- **Linguagem**: Rust (performance próxima ao C/C++ com segurança de memória).
- **Frameworks**: Actix e Tokio.

### Passos para Configurar o Projeto

1. **Instalar Rust**:

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Criar um Novo Projeto**:

   ```bash
   cargo new backend_rinha --bin
   cd backend_rinha
   ```

3. **Adicionar Dependências** (`Cargo.toml`):

   ```toml
   [dependencies]
   actix-web = "4.0"
   tokio = { version = "1", features = ["full"] }
   sqlx = { version = "0.6", features = ["postgres", "runtime-tokio-rustls"] }
   serde = { version = "1.0", features = ["derive"] }
   serde_json = "1.0"
   ```

4. **Implementar o Servidor** (`src/main.rs`):

   ```rust
   use actix_web::{web, App, HttpServer, Responder, HttpResponse};
   use sqlx::PgPool;
   use serde::Deserialize;
   use std::env;

   #[derive(Deserialize)]
   struct InsertData {
       value: String,
   }

   async fn insert_data(pool: web::Data<PgPool>, item: web::Json<InsertData>) -> impl Responder {
       let result = sqlx::query!(
           "INSERT INTO test_table (value) VALUES ($1)",
           item.value
       )
       .execute(pool.get_ref())
       .await;

       match result {
           Ok(_) => HttpResponse::Ok().body("Inserted"),
           Err(e) => HttpResponse::InternalServerError().body(format!("Error: {:?}", e)),
       }
   }

   #[actix_web::main]
   async fn main() -> std::io::Result<()> {
       let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
       let pool = PgPool::connect(&database_url).await.expect("Failed to create pool");

       HttpServer::new(move || {
           App::new()
               .app_data(web::Data::new(pool.clone()))
               .route("/insert", web::post().to(insert_data))
       })
       .bind("0.0.0.0:8080")?
       .run()
       .await
   }
   ```

5. **Configurar o Banco de Dados PostgreSQL**:

   ```sql
   CREATE TABLE test_table (
       id SERIAL PRIMARY KEY,
       value TEXT NOT NULL
   );
   ```

6. **Executar o Servidor**:

   ```bash
   DATABASE_URL=postgres://username:password@localhost/database_name cargo run
   ```

7. **Testar o Servidor** (usando `wrk`):
   ```bash
   wrk -t12 -c400 -d30s -s post.lua http://127.0.0.1:8080/insert
   ```
   - **Script `post.lua`**:
     ```lua
     wrk.method = "POST"
     wrk.body = '{"value":"test"}'
     wrk.headers["Content-Type"] = "application/json"
     ```

---

## Explicação do Código

### Dependências

- **`actix-web`**: Framework web para Rust.
- **`tokio`**: Runtime assíncrona.
- **`sqlx`**: Acesso ao banco de dados PostgreSQL.
- **`serde` e `serde_json`**: Manipulação de JSON.

### Funcionamento do Servidor

- **Rota `/insert`**: Recebe requisições POST e insere dados no banco.
- **Função `insert_data`**: Processa os dados e os insere na tabela `test_table`.

---

## Conclusão

Este exemplo demonstra como criar uma API eficiente em Rust, adequada para competições de desempenho como o Backend Rinha, com foco em otimização e escalabilidade.
