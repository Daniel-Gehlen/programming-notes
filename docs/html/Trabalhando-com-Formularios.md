# 📝 Trabalhando com Formulários HTML

## 🎯 Objetivo Geral

- Dominar a estrutura básica de formulários HTML
- Compreender o fluxo cliente-servidor
- Aprender a usar todos os elementos de formulário

---

## 🏗️ Estrutura Básica

### Tag `<form>` - Contêiner Principal

```html
<form action="/processar-dados" method="POST">
  <!-- Elementos do formulário aqui -->
</form>
```

| Atributo       | Descrição                | Valores Comuns            |
| -------------- | ------------------------ | ------------------------- |
| `action`       | URL de processamento     | Caminho absoluto/relativo |
| `method`       | Método HTTP              | `GET` (padrão) ou `POST`  |
| `autocomplete` | Preenchimento automático | `on` ou `off`             |

---

## 🔠 Elementos de Entrada

### Tag `<input>` - Versátil e Poderosa

```html
<input type="text" id="nome" name="nome_usuario" required />
```

#### Tipos Principais:

| Tipo       | Uso             | Exemplo           |
| ---------- | --------------- | ----------------- |
| `text`     | Texto simples   | `type="text"`     |
| `password` | Senhas          | `type="password"` |
| `email`    | Valida e-mail   | `type="email"`    |
| `number`   | Apenas números  | `type="number"`   |
| `date`     | Selecionar data | `type="date"`     |
| `file`     | Upload arquivos | `type="file"`     |

---

## ☑️ Elementos de Seleção

### Checkbox (Múltipla Seleção)

```html
<input type="checkbox" id="termos" name="aceito_termos" checked />
<label for="termos">Aceito os termos</label>
```

### Radio (Seleção Única)

```html
<input type="radio" id="masculino" name="genero" value="M" />
<label for="masculino">Masculino</label>
```

### Dropdown (`<select>`)

```html
<select id="estado" name="estado_usuario">
  <option value="SP">São Paulo</option>
  <option value="RJ" selected>Rio de Janeiro</option>
</select>
```

---

## 📝 Área de Texto

### Tag `<textarea>`

```html
<textarea id="mensagem" name="msg_usuario" rows="4" cols="50">
Digite sua mensagem aqui...
</textarea>
```

| Atributo    | Função                    |
| ----------- | ------------------------- |
| `rows`      | Número de linhas visíveis |
| `cols`      | Largura em caracteres     |
| `maxlength` | Limite de caracteres      |

---

## 🛑 Validação Básica

### Atributos Nativos

```html
<input type="email" required minlength="5" maxlength="50" pattern=".+@.+\..+" />
```

| Atributo    | Finalidade        |
| ----------- | ----------------- |
| `required`  | Campo obrigatório |
| `minlength` | Tamanho mínimo    |
| `pattern`   | Expressão regular |

---

## 🎨 Estilização com CSS

### Exemplo Básico

```css
input[type="text"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 8px 0;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  border: none;
  cursor: pointer;
}
```

---

## 🌟 Formulário Completo

```html
<form action="/cadastro" method="POST">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required />

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required />

  <label for="senha">Senha:</label>
  <input type="password" id="senha" name="senha" minlength="6" required />

  <label for="mensagem">Mensagem:</label>
  <textarea id="mensagem" name="mensagem" rows="4"></textarea>

  <button type="submit">Enviar</button>
</form>
```

---

## 📚 Recursos Adicionais

- [MDN Web Docs - Formulários](https://developer.mozilla.org/pt-BR/docs/Learn/Forms)
- [HTML5 Form Validation](https://www.html5rocks.com/en/tutorials/forms/constraintvalidation/)
- [CSS-Tricks Form Styling](https://css-tricks.com/tips-for-web-forms/)
