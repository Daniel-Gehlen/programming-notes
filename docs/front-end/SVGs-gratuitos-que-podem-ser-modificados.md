# 🎨 SVG Gratuitos e Editáveis: Fontes e Tutoriais

## 🌟 Melhores Fontes de SVG Customizáveis

| Site            | Licença                 | Destaque                              | Link                                        |
| --------------- | ----------------------- | ------------------------------------- | ------------------------------------------- |
| **OpenClipart** | Domínio Público         | +150 mil ilustrações                  | [openclipart.org](https://openclipart.org/) |
| **Flaticon**    | CC (com atribuição)     | +5 milhões de ícones                  | [flaticon.com](https://www.flaticon.com/)   |
| **SVGRepo**     | Livre para uso          | Coleção organizada por categorias     | [svgrepo.com](https://www.svgrepo.com/)     |
| **unDraw**      | MIT License             | Ilustrações modernas editáveis online | [undraw.co](https://undraw.co/)             |
| **Freepik**     | Gratuito com atribuição | Vetores profissionais                 | [freepik.com](https://www.freepik.com/)     |

## 🛠️ Como Editar Cores em SVGs

### 1. **Editores Gráficos**

- **Inkscape** (Grátis):
  ```bash
  sudo apt-get install inkscape  # Linux
  brew install inkscape        # Mac
  ```
- **Figma** (Online):
  - Importe SVG > Selecione camadas > Altere preenchimento

### 2. **Edição Manual via Código**

```xml
<!-- Exemplo antes -->
<path fill="#4285F4" d="M..."/>

<!-- Exemplo depois -->
<path fill="#FF0000" d="M..."/>
```

### 3. **Programaticamente (JavaScript)**

```javascript
// Alterar todas as cores vermelhas
document.querySelectorAll('path[fill="#FF0000"]').forEach((el) => {
  el.setAttribute("fill", "#00FF00");
});
```

## 🎨 Ferramentas Recomendadas

1. **Colorização Online**:
   - [unDraw Color Tool](https://undraw.co/illustrations) - Altere cores antes de baixar
   - [SVG Color Changer](https://svgcolor.changer.io/) - Ferramenta web simples

2. **Conversores**:
   ```bash
   # Converter PNG para SVG (via Inkscape CLI)
   inkscape input.png --export-plain-svg --export-filename=output.svg
   ```

## 💡 Dicas Profissionais

1. **Otimização**:
   - Use [SVGO](https://github.com/svg/svgo) para reduzir tamanho:

   ```bash
   npx svgo input.svg --output output.svg
   ```

2. **Acessibilidade**:
   - Sempre adicione:

   ```xml
   <title>Descrição da imagem</title>
   <desc>Texto detalhado para leitores de tela</desc>
   ```

3. **Animações CSS**:
   ```css
   svg path {
     transition: fill 0.3s ease;
   }
   svg:hover path {
     fill: var(--cor-destaque);
   }
   ```

## 📚 Tutoriais Recomendados

1. [Criando SVGs do Zero no Inkscape](https://inkscape.org/learn/)
2. [SVG Animation Guide](https://css-tricks.com/guide-svg-animations-smil/)
3. [SVG vs Icon Fonts](https://www.sitepoint.com/icons-svg-vs-fonts/)

> "SVGs são como LEGO digital - infinitamente customizáveis e perfeitos para designs responsivos" - Sarah Drasner

**Próximos Passos:**

1. [ ] Baixar assets do unDraw para seu projeto
2. [ ] Customizar cores no Figma/Inkscape
3. [ ] Otimizar arquivos com SVGO
4. [ ] Implementar com animações CSS

![Exemplo SVG Editável](https://example.com/svg-editing-demo.gif)
