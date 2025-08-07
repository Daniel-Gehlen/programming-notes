# Backends Suportados Gratuitamente

**Com GitHub e Vercel, você pode utilizar diferentes tipos de backends gratuitos, dependendo das suas necessidades e do suporte oferecido por cada plataforma.**

---

## Opções de Backends Gratuitos

### 1. GitHub Pages

- **Tipo de Backend**: Somente estático (HTML, CSS, JavaScript puro).
- **Exemplos de Uso**:
  - Sites informativos.
  - Blogs estáticos (usando Jekyll, Hugo, ou outro gerador estático).
  - Consumo de APIs públicas com JavaScript no cliente.
- **Limitações**:
  - Não suporta backend dinâmico, como Node.js ou Python.
  - Pode ser complementado com serviços externos (ver seção "Complementos").

---

### 2. Vercel

- **Tipo de Backend**: Suporte a funções serverless (dinâmico) e APIs simples.
- **Tecnologias Suportadas**:
  - **Serverless Functions**:
    - Escreva APIs ou lógica backend usando Node.js, Python, Go, ou Ruby.
    - Crie arquivos na pasta `/api` do projeto.
    - Exemplos:
      - `api/hello.js` (Node.js).
      - `api/data.py` (Python).
  - **Edge Middleware**:
    - Manipule requisições antes de entregá-las.
    - Ideal para autenticação, redirecionamentos dinâmicos, etc.
- **Limitações**:
  - Tempo de execução das funções serverless é limitado a **10 segundos** no plano gratuito.
  - Uso excessivo pode ser restrito (limites de requests mensais).

---

### 3. Complementos Gratuitos para Dinamismo

**Ambas as plataformas podem ser combinadas com serviços externos gratuitos para expandir a funcionalidade:**

#### APIs Externas

- Use APIs públicas para fornecer dados dinâmicos.
- Exemplo: Clima, mapas, notícias, etc.

#### Banco de Dados Gratuito

- **Firebase Realtime Database** ou **Firestore**:
  - Banco de dados NoSQL gratuito com cota limitada.
- **Supabase**:
  - Banco de dados PostgreSQL com suporte a autenticação.
- **PlanetScale**:
  - MySQL escalável com um plano gratuito generoso.

#### Serviços de Backend Gratuitos

- **Heroku (Plano Free)**:
  - Hospeda backends em Node.js, Python, Ruby, etc.
  - Limitação: 550–1.000 dyno horas por mês.
- **Render (Plano Free)**:
  - Backend dinâmico com suporte para múltiplas linguagens.
  - Limitação: Pode "dormir" após inatividade.

#### Outros Complementos

- **Cloudflare Workers (Plano Free)**:
  - Execute código na borda com baixo tempo de resposta.
- **AWS Free Tier (Lambda)**:
  - Serverless functions gratuitas com limitações.

---

## Quando Escolher Cada Um?

| Plataforma      | Quando Usar?                                                                     |
| --------------- | -------------------------------------------------------------------------------- |
| GitHub Pages    | Projetos simples, sites estáticos ou consumo direto de APIs públicas.            |
| Vercel          | Projetos com lógica serverless ou que exigem integração com frameworks modernos. |
| Heroku/Render   | Backend completo (Node.js, Python, etc.) com serviços persistentes simples.      |
| Serviços Extras | Banco de dados, autenticação ou APIs públicas específicas para dinamismo.        |
