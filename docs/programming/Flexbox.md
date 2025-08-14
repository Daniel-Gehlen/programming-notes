# Flexbox

## Objetivo Geral

Ensinar os principais conceitos, aplicações e propriedades do Flexbox.

---

## Pré-Requisitos

É importante ter:

- Base em HTML
- Conhecimento do Módulo 1 de CSS
- Curso de Posicionamentos e Displays com CSS

---

## Ferramentas Utilizadas

- **Editor de Código:** VSCode
- **Plugins para VSCode:** Live Server e Emmet
- **Navegador:** Google Chrome

---

## Etapas do Curso

### Etapa 1: Conceitos do Flexbox

O Flexbox (Flexible Box Module) oferece uma maneira eficiente de:

- Organizar
- Alinhar
- Distribuir espaço entre itens
  Mesmo com tamanhos dinâmicos

---

### Etapa 2: Eixos do Flexbox

- **Eixo Principal (Main Axis):** Direção do container (horizontal/vertical)
- **Eixo Transversal (Cross Axis):** Perpendicular ao eixo principal

---

### Etapa 3: flex-direction

Define a direção dos itens:

```css
flex-direction: row           /* Padrão - horizontal */
flex-direction: row-reverse   /* Horizontal invertido */
flex-direction: column       /* Vertical */
flex-direction: column-reverse /* Vertical invertido */
```

---

### Etapa 4: flex-wrap

Permite quebrar itens em várias linhas:

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

---

### Etapa 5: flex-flow (Shorthand)

Combina `flex-direction` e `flex-wrap`:

```css
flex-flow: row wrap;
```

---

### Etapa 6: justify-content

Alinha itens no eixo principal:

```css
justify-content: flex-start    /* Padrão */
justify-content: flex-end
justify-content: center
justify-content: space-between
justify-content: space-around
justify-content: space-evenly
```

---

### Etapa 7: align-items

Alinha itens no eixo transversal:

```css
align-items: flex-start
align-items: flex-end
align-items: center
align-items: baseline
align-items: stretch          /* Padrão */
```

---

### Etapa 8: align-content

Alinha linhas no container:

```css
align-content: flex-start
align-content: flex-end
align-content: center
align-content: space-between
align-content: space-around
align-content: stretch        /* Padrão */
```

---

### Etapa 9: gap

Controla espaçamento entre itens:

```css
gap: 10px           /* Todos os lados */
gap: 10px 30px      /* Linha coluna */
```

---

### Etapa 10: order

Ordena itens individualmente:

```css
order: 1; /* Número inteiro */
```

---

### Etapa 11-14: Propriedades Flex

- **flex-grow:** Crescimento (não aceita negativos)
- **flex-shrink:** Redução
- **flex-basis:** Tamanho inicial (sobrescreve width/height)
- **flex (Shorthand):** `flex: grow shrink basis`

---

### Etapa 15: align-self

Alinha item individualmente:

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

---

## Materiais de Apoio

- [Flexbox Froggy](https://flexboxfroggy.com/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox - Guia Completo (Origamid)](https://origamid.com/projetos/flexbox-guia-completo/)
- [Learn CSS - Flexbox](https://web.dev/learn/css/flexbox/)
