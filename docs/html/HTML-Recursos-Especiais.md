# 📚 HTML: Recursos Especiais (HTML5)

## 🎯 Objetivo Geral

- Dominar tags avançadas do HTML5
- Criar componentes interativos sem JavaScript
- Aprimorar a experiência do usuário com elementos nativos

---

## 🔍 Elementos Interativos

### `<details>` + `<summary>` (Acordeão Nativo)

```html
<details>
  <summary>Mostrar mais informações</summary>
  <p>Conteúdo detalhado que aparece ao clicar...</p>
</details>
```

**Vantagens**:
✔ Sem JavaScript necessário
✔ Acessível por padrão
✔ Estilizável com CSS

---

## 🔤 Elementos para Código

### Sintaxe Correta para Exibir Código

```html
<pre><code class="language-javascript">
  function hello() {
    console.log("Olá, mundo!");
  }
</code></pre>

<p>Pressione <kbd>Ctrl</kbd> + <kbd>S</kbd> para salvar</p>
```

| Tag      | Uso                         | Exemplo           |
| -------- | --------------------------- | ----------------- |
| `<code>` | Trechos de código inline    | `console.log()`   |
| `<pre>`  | Blocos de código formatados | Mantém indentação |
| `<kbd>`  | Teclas/combinações          | **Ctrl+C**        |

---

## 🎨 Elementos Gráficos

### `<canvas>` (Desenho Dinâmico)

```html
<canvas id="meuCanvas" width="200" height="100"></canvas>

<script>
  const ctx = document.getElementById("meuCanvas").getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(10, 10, 150, 80);
</script>
```

**Aplicações**:

- Gráficos dinâmicos
- Animações
- Jogos simples

---

## 📊 Elementos de Medição

### `<progress>` vs `<meter>`

```html
<progress value="70" max="100"></progress>
<!-- Barra de progresso -->

<meter min="0" max="100" low="30" high="75" optimum="80" value="65"></meter>
```

| Elemento   | Uso                  | Atributos Chave       |
| ---------- | -------------------- | --------------------- |
| `progress` | Tarefas em andamento | `value`, `max`        |
| `meter`    | Medições estáticas   | `min`, `max`, `value` |

---

## 🔠 `<datalist>` (Auto-complete)

```html
<label for="browser">Navegador:</label>
<input list="browsers" id="browser" name="browser" />

<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Edge"></option>
</datalist>
```

**Benefícios**:
✅ Experiência do usuário melhorada
✅ Fácil implementação
✅ Compatível com mobile

---

## ✨ `<mark>` (Destaque Dinâmico)

```html
<p>Pesquise por <mark>termo importante</mark> no texto</p>

<script>
  // Destaque dinâmico com JS
  document.querySelector("mark").style.backgroundColor = "#ffeb3b";
</script>
```

**Casos de Uso**:

- Resultados de busca
- Ênfase contextual
- Anotações interativas

---

## 🛠 Novos Atributos HTML5

### Melhorias para Formulários

```html
<input type="text" placeholder="Digite aqui" autofocus required />
<input type="email" pattern=".+@.+\..+" />
<input type="number" min="1" max="10" />
```

**Atributos Úteis**:

- `contenteditable`: Edição direta no elemento
- `draggable`: Habilita arrastar/soltar
- `hidden`: Oculta elementos

---

## 📚 Recursos Adicionais

- [MDN HTML5 Reference](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
- [HTML5 Doctor](http://html5doctor.com/)
- [Can I Use](https://caniuse.com/) (Verificar compatibilidade)
