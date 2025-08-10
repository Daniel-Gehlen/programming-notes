# 🏗️ HTML Semântico e Acessibilidade

## 🌐 Objetivo Geral
- Dominar elementos semânticos do HTML5
- Implementar boas práticas de acessibilidade
- Entender a relação entre semântica e SEO

---

## 🧱 HTML Semântico

### Comparação Clássica
```html
<!-- Antigo (não semântico) -->
<div class="header">...</div>
<div class="content">...</div>
<div class="footer">...</div>

<!-- Moderno (semântico) -->
<header>...</header>
<main>...</main>
<footer>...</footer>
```

### Principais Tags Semânticas
| Tag | Uso | Exemplo |
|------|------|---------|
| `<header>` | Cabeçalho da página/seção | Logotipo + navegação |
| `<nav>` | Menu de navegação | Links principais |
| `<main>` | Conteúdo principal | Artigo/blog |
| `<article>` | Conteúdo independente | Post, notícia |
| `<section>` | Agrupamento temático | Capítulos |
| `<aside>` | Conteúdo relacionado | Sidebar |
| `<figure>` + `<figcaption>` | Imagens com legenda | Gráficos explicativos |

---

## ♿ Acessibilidade Web

### Diretrizes WCAG (POUR)
- **Perceptível**: Alternativas textuais para mídia
- **Operável**: Navegação via teclado
- **Compreensível**: Linguagem clara
- **Robusto**: Compatível com tecnologias assistivas

### Técnicas Essenciais
```html
<img src="grafico.jpg" alt="Gráfico de vendas 2023: crescimento de 15%">
<button aria-label="Fechar modal">X</button>
<div role="alert">Mensagem importante!</div>
```

### WAI-ARIA
| Atributo | Função |
|----------|--------|
| `aria-label` | Rótulo para elementos sem texto |
| `aria-hidden` | Oculta elementos de leitores |
| `role` | Define função (banner, search, etc) |

---

## 🔍 SEO e Semântica

### Boas Práticas
```html
<title>Notebook Gamer Acer Nitro 5 | Kabum!</title>
<meta name="description" content="Notebook Gamer com GTX 1650 e 16GB RAM">

<!-- Dados estruturados -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Notebook Gamer Acer Nitro 5"
}
</script>
```

### Fatores Críticos
- Tags semânticas bem utilizadas
- Hierarquia de cabeçalhos (`h1`-`h6`)
- Microdados/Schema.org
- Velocidade de carregamento

---

## 🤖 Web Scraping (Ético)

### Exemplo Python
```python
import requests
from bs4 import BeautifulSoup

url = "https://exemplo.com/produtos"
response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
soup = BeautifulSoup(response.text, 'html.parser')

for produto in soup.select('.produto'):
    nome = produto.find('h2').text
    preco = produto.find(class_='preco').text
    print(f"{nome}: {preco}")
```

### Considerações Legais
✔ Verificar `robots.txt`
✔ Respeitar `User-Agent`
✔ Não sobrecarregar servidores
✔ Atribuir créditos quando necessário

---

## 📚 Recursos Adicionais
- [Guia WCAG 2.1](https://www.w3.org/Translations/WCAG21-pt-BR/)
- [Schema Markup Generator](https://technicalseo.com/tools/schema-markup-generator/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)

> **Dica Profissional**: Sempre teste sua página com [Wave Evaluation Tool](https://wave.webaim.org/) para identificar problemas de acessibilidade antes de publicar.
