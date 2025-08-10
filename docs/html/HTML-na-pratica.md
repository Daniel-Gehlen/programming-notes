# 🚀 HTML na Prática: Guia Completo para Iniciantes

## 🛠️ Ferramentas Essenciais

### Editores de Código Recomendados

| Ferramenta   | Destaque                | Download                                                |
| ------------ | ----------------------- | ------------------------------------------------------- |
| VS Code      | IntelliSense, extensões | [code.visualstudio.com](https://code.visualstudio.com/) |
| Sublime Text | Leve e rápido           | [sublimetext.com](https://www.sublimetext.com/)         |
| Atom         | Open-source             | [atom.io](https://atom.io/)                             |

### Navegadores para Teste

- Google Chrome (+ DevTools)
- Firefox (+ Firefox Developer Edition)
- Edge

---

## 🔍 Inspetor de Elementos (Chrome DevTools)

### Atalhos Importantes

- `F12` ou `Ctrl+Shift+I`: Abrir DevTools
- `Ctrl+Shift+C`: Modo inspeção
- `Esc`: Mostrar/ocultar console

### Funções Principais:

```html
<!-- Exemplo de modificação em tempo real -->
<div class="original">Texto original</div>
```

1. Localize o elemento
2. Clique com botão direito → "Editar como HTML"
3. Modifique e veja as alterações instantâneas

---

## 📐 Estrutura Básica HTML

### Template Inicial

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minha Primeira Página</title>
  </head>
  <body>
    <!-- Conteúdo visível aqui -->
  </body>
</html>
```

### Elementos Fundamentais:

- `<!DOCTYPE html>`: Declaração do tipo de documento
- `<html>`: Elemento raiz
- `<head>`: Metadados e links
- `<body>`: Conteúdo visível

---

## ✏️ Trabalhando com Texto

### Tags de Formatação

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Parágrafo normal com <strong>destaque</strong> e <em>ênfase</em>.</p>
<blockquote>Citação importante</blockquote>
<code>console.log("Hello World");</code>
```

### Hierarquia de Cabeçalhos:

```
h1 (Principal)
  → h2 (Seção)
    → h3 (Subseção)
      → h4 (Tópico)
```

---

## 📋 Listas e Links

### Listas Ordenadas e Não Ordenadas

```html
<!-- Lista não ordenada -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Lista ordenada -->
<ol type="A">
  <li>Primeiro</li>
  <li>Segundo</li>
</ol>
```

### Links e Âncoras

```html
<a href="https://exemplo.com" target="_blank">Abrir em nova aba</a>
<a href="#secao2">Ir para Seção 2</a>
<a href="mailto:contato@exemplo.com">Enviar email</a>
```

---

## 🏁 Primeira Página Completa

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Portfólio</title>
  </head>
  <body>
    <header>
      <h1>Bem-vindo ao Meu Site</h1>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>Texto descritivo...</p>
      </section>
    </main>

    <footer>
      <p>© 2023 Meu Site</p>
    </footer>
  </body>
</html>
```

### Como Visualizar:

1. Salve como `index.html`
2. Abra no navegador (duplo clique)
3. Ou use extensão "Live Server" no VS Code

---

## 📚 Recursos para Aprender Mais

- [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Dog](https://htmldog.com/guides/html/beginner/)

**Dica Profissional:** Sempre valide seu HTML no [W3C Validator](https://validator.w3.org/) antes de publicar!
