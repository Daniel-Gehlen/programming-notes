# CRUD: CRIANDO UM AGREGADOR DE NOTÍCIAS COM O AERIA

## Explicação e Estrutura do Projeto de Aplicação com Upvote e Downvote

---

### 1. Visão Geral do Projeto

O objetivo do projeto é criar uma aplicação simples que permite aos usuários realizar ações de **upvote** e **downvote** em posts, simulando interações comuns em plataformas como fóruns e redes sociais. O código utiliza tecnologias de frontend e backend para manipular dados e enviar atualizações ao servidor.

---

### 2. Funcionalidades Implementadas

#### 2.1. Criação de Ícones para Upvote e Downvote

- Dois ícones foram criados, representando as funcionalidades de **upvote** e **downvote**.
- Cada ícone está vinculado a um evento `@click`, que chama as respectivas funções `upvt` ou `Downvolt`.

**Exemplo de Código**:

```html
<template>
  <div>
    <!-- Ícones de upvote e downvote -->
    <button @click="upvt(post.id)">Upvote</button>
    <button @click="Downvolt(post.id)">Downvote</button>
  </div>
</template>
```

#### 2.2. Funções para Manipulação Local

- Duas funções foram criadas no frontend para realizar alterações instantâneas nos valores de votos no navegador, sem comunicação com o servidor.

**Exemplo de Código**:

```javascript
<script>
export default {
  methods: {
    upvt(id) {
      console.log(`Upvote no post com ID: ${id}`);
      // Lógica local para incrementar o voto
    },
    Downvolt(id) {
      console.log(`Downvote no post com ID: ${id}`);
      // Lógica local para decrementar o voto
    }
  }
};
</script>
```

#### 2.3. Melhorias Sugeridas

Embora as funções `upvt` e `Downvolt` sejam funcionais, o ideal é que as atualizações sejam enviadas ao servidor para persistência de dados e validação. Isso inclui:

- **Autenticação do Usuário**: Garantir que o usuário está autenticado.
- **Validação de Votos**: Verificar se o usuário já realizou um **upvote** ou **downvote** no post.
- **Comunicação com a API**: Realizar chamadas à API para salvar as alterações.

**Exemplo de Chamada para API**:

```javascript
methods: {
  async upvt(id) {
    try {
      const response = await axios.post(`/api/posts/${id}/upvote`);
      console.log('Upvote realizado com sucesso', response.data);
    } catch (error) {
      console.error('Erro ao realizar upvote', error);
    }
  },
  async Downvolt(id) {
    try {
      const response = await axios.post(`/api/posts/${id}/downvote`);
      console.log('Downvote realizado com sucesso', response.data);
    } catch (error) {
      console.error('Erro ao realizar downvote', error);
    }
  }
}
```

---

### 3. Sugestões de Melhorias para o Projeto

#### 3.1. Implementação de API no Backend

Criar endpoints para lidar com as ações de **upvote** e **downvote**, garantindo a persistência no banco de dados.

**Exemplo de Endpoint Backend**:

```javascript
// Rotas para Upvote e Downvote
app.post("/api/posts/:id/upvote", (req, res) => {
  const { id } = req.params;
  // Lógica para registrar o upvote no banco de dados
  res.status(200).json({ message: `Upvote registrado para o post ${id}` });
});

app.post("/api/posts/:id/downvote", (req, res) => {
  const { id } = req.params;
  // Lógica para registrar o downvote no banco de dados
  res.status(200).json({ message: `Downvote registrado para o post ${id}` });
});
```

#### 3.2. Restrições Baseadas em Permissões

- Apenas o **dono** de uma postagem deve poder editar ou excluir o post.
- Administradores podem ter permissões especiais para gerenciar posts.

**Exemplo de Middleware para Permissões**:

```javascript
function checkOwnerOrAdmin(req, res, next) {
  const user = req.user; // Objeto do usuário autenticado
  const post = getPostById(req.params.id); // Simulação de busca no banco de dados
  if (user.id === post.ownerId || user.role === "admin") {
    return next();
  } else {
    return res.status(403).json({ message: "Acesso negado" });
  }
}
```

#### 3.3. Criação de Páginas Adicionais

- Página de **respostas** para cada post.
- Visualização de um **dashboard** para administradores, permitindo edição e moderação de posts.

---

### 4. Estudo de Contratos de API

Um contrato de API define os tipos de dados que podem ser enviados e recebidos, além de determinar quem pode acessá-los.

**Exemplo de Definição de Contrato usando JSON**:

```json
{
  "endpoint": "/api/posts/:id/upvote",
  "method": "POST",
  "request": {
    "headers": {
      "Authorization": "Bearer <token>"
    },
    "body": {}
  },
  "response": {
    "200": {
      "message": "Upvote registrado"
    },
    "403": {
      "error": "Acesso negado"
    }
  }
}
```

---

### 5. Conclusão

O projeto é uma base sólida para construção de aplicações interativas, com possibilidade de expansão em diversos aspectos:

- **Comunicação com API** para maior robustez e segurança.
- **Autenticação e controle de permissões** para proteger as funcionalidades.
- **Criação de novas páginas** para uma experiência de usuário mais rica.

Os próximos passos incluem explorar as funcionalidades avançadas sugeridas e implementar as melhorias para tornar o projeto mais completo e funcional.
