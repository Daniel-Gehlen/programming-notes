# 🎨 HTML + Formatações: Guia Completo

## 📝 Formatando Textos

### Tags Básicas de Formatação

```html
<p>
  <strong>Texto importante</strong>, <em>ênfase</em>, <b>negrito visual</b>,
  <u>sublinhado</u>
</p>
```

| Tag        | Uso Recomendado      | Semântica |
| ---------- | -------------------- | --------- |
| `<strong>` | Conteúdo importante  | Sim       |
| `<em>`     | Ênfase verbal        | Sim       |
| `<b>`      | Destaque visual      | Não       |
| `<u>`      | Nomes próprios/erros | Não       |

### Containers Genéricos

```html
<div>Bloco estrutural</div>
<span>Elemento inline</span>
```

---

## 🏗️ Estruturando Páginas

### Tags de Agrupamento

```html
<fieldset>
  <legend>Informações Pessoais</legend>
  <!-- Campos do formulário -->
</fieldset>
```

### Incorporando Conteúdo

```html
<iframe src="https://exemplo.com" width="800" height="600"></iframe>
<embed src="documento.pdf" type="application/pdf" />
```

---

## 🎨 Trabalhando com Cores

### Sistemas de Cores

| Método    | Exemplo                    | Uso                       |
| --------- | -------------------------- | ------------------------- |
| **Nomes** | `red`                      | Rápido para cores básicas |
| **HEX**   | `#FF5733`                  | Web design padrão         |
| **RGB**   | `rgb(255, 87, 51)`         | Cores absolutas           |
| **RGBA**  | `rgba(255, 87, 51, 0.7)`   | Com transparência         |
| **HSL**   | `hsl(12, 100%, 60%)`       | Mais intuitivo            |
| **HSLA**  | `hsla(12, 100%, 60%, 0.7)` | HSL + transparência       |

### Exemplo Prático

```html
<div style="color: #FF5733; background-color: hsla(240, 100%, 50%, 0.1)">
  Texto laranja com fundo azul claro
</div>
```

---

## 📚 Exemplo Completo

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Página de Exemplo</title>
    <style>
      .destaque {
        color: hsl(120, 100%, 25%); /* Verde escuro */
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <fieldset>
      <legend>Formulário de Contato</legend>
      <div>
        <p><span class="destaque">Nome:</span> <u>João Silva</u></p>
        <p><em>Preencha todos os campos</em></p>
      </div>
    </fieldset>

    <iframe src="https://maps.example.com" width="100%" height="300"></iframe>
  </body>
</html>
```

---

## ⚠️ Tecnologias Obsoletas

- **Flash Player**: Substituído por HTML5
- **Java Applets**: Não suportado em navegadores modernos
- **Tags `<font>`**: Use CSS (`style` ou arquivos externos)

---

## 🔍 Referências Úteis

- [Cores HTML no W3Schools](https://www.w3schools.com/colors/)
- [Guia de Acessibilidade de Cores](https://webaim.org/resources/contrastchecker/)
- [MDN - Formatação HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#text_content)

**por Daniel Gehlen**
_Designer e Desenvolvedor Front-end_

> **Dica Profissional**: Use ferramentas como [Coolors](https://coolors.co/) para criar paletas de cores harmoniosas!
