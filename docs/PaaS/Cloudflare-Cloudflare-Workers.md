# Cloudflare: Cloudflare Workers

---

## Serviços Principais da Cloudflare

A Cloudflare oferece vários serviços úteis para hospedar backends, executar funções serverless e trabalhar com TypeScript, muitos deles com planos gratuitos ou limitados gratuitamente. Abaixo estão os principais serviços:

---

### 1. Cloudflare Workers

**O que é?**
O Cloudflare Workers é uma plataforma de computação serverless que permite executar código JavaScript/TypeScript diretamente na borda da rede da Cloudflare. É semelhante ao AWS Lambda, mas com foco em baixa latência e execução próxima ao usuário final.

**Funcionalidades:**

- Executa funções serverless.
- Suporta TypeScript nativamente.
- Ideal para backends leves, APIs e lógica de borda.

**Plano gratuito:**

- 100.000 requisições por dia.
- 10 ms de tempo de execução CPU por requisição.

**Links:**

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Documentação do Workers](https://developers.cloudflare.com/workers/)

---

### 2. Cloudflare Pages

**O que é?**
O Cloudflare Pages é uma plataforma de hospedagem para sites estáticos e aplicações JAMstack. Ele também suporta funções serverless (Cloudflare Workers) para adicionar lógica de backend.

**Funcionalidades:**

- Hospedagem gratuita para sites estáticos.
- Integração com repositórios Git (GitHub, GitLab, etc.).
- Suporte a funções serverless para backend.

**Plano gratuito:**

- 500 builds por mês.
- 1 site personalizado por projeto.

**Links:**

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Documentação do Pages](https://developers.cloudflare.com/pages/)

---

### 3. Cloudflare Workers KV

**O que é?**
O Workers KV é um banco de dados chave-valor distribuído globalmente, que pode ser usado em conjunto com o Cloudflare Workers para armazenar dados persistentes.

**Funcionalidades:**

- Armazenamento de dados simples e rápido.
- Ideal para cache, configurações ou dados de sessão.

**Plano gratuito:**

- 1 GB de armazenamento.
- 100.000 operações de leitura por dia.

**Links:**

- [Workers KV](https://developers.cloudflare.com/workers/runtime-apis/kv/)
- [Documentação do KV](https://developers.cloudflare.com/workers/learning/how-kv-works/)

---

### 4. Cloudflare D1

**O que é?**
O D1 é um banco de dados SQL serverless da Cloudflare, que pode ser usado em conjunto com o Workers para armazenar dados estruturados.

**Funcionalidades:**

- Banco de dados SQL leve e serverless.
- Integração com Workers.

**Plano gratuito:**

- Ainda em beta, mas com opções gratuitas limitadas.

**Links:**

- [Cloudflare D1](https://developers.cloudflare.com/d1/)

---

### 5. Cloudflare R2

**O que é?**
O R2 é um serviço de armazenamento de objetos (similar ao AWS S3) sem custos de egresso (saída de dados).

**Funcionalidades:**

- Armazenamento de arquivos estáticos, como imagens, vídeos, etc.
- Integração com Workers.

**Plano gratuito:**

- 10 GB de armazenamento por mês.

**Links:**

- [Cloudflare R2](https://developers.cloudflare.com/r2/)

---

## Como usar TypeScript com Cloudflare Workers

O Cloudflare Workers suporta TypeScript nativamente. Você pode escrever suas funções em TypeScript e o Workers compila o código automaticamente.

**Exemplo de uso:**

```typescript
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  return new Response("Hello, world!", { status: 200 });
}
```

---

## Resumo

- **Backend:** Use o **Cloudflare Workers** para funções serverless e APIs.
- **Hospedagem:** Use o **Cloudflare Pages** para hospedar sites estáticos e adicionar funções serverless.
- **Banco de dados:** Use o **Workers KV** ou **D1** para armazenar dados.
- **Armazenamento de arquivos:** Use o **R2** para armazenamento de objetos.
- **TypeScript:** Suportado nativamente no Workers.

Todos esses serviços têm planos gratuitos com limites generosos, ideais para projetos pequenos ou testes.

**Para começar**, acesse o [site da Cloudflare](https://www.cloudflare.com/) e crie uma conta gratuita.
