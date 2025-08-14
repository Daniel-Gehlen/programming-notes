# Responsividade

## Objetivo Geral

Mostrar os conceitos de responsividade e ensinar as técnicas para criar sites responsivos.

---

## Pré-Requisitos

É importante ter uma base em HTML e ter assistido aos módulos de:

- Posicionamentos e Displays com CSS
- Flexbox
- Grid Layout

---

## Ferramentas Utilizadas

- **Editor de Código:** VSCode
- **Plugins para VSCode:** Live Server e Emmet
- **Navegador:** Google Chrome

---

## Etapas do Curso

### Etapa 1: Introdução ao Design Responsivo

**Técnicas para Responsividade (Ethan Marcotte):**

- Grids fluídos
- Imagens fluídas
- Media Queries

---

### Etapa 2: Layouts Flexíveis - Multicolunas

- Usa o Grid Layout, Flexbox e Múltiplas Colunas
- Combina com unidades de medidas relativas para criar layouts flexíveis

**Exemplo de Multicolunas:**
Especifica quantas colunas o conteúdo será dividido, com ajuste automático do tamanho conforme a tela.

---

### Etapa 3: Layouts Flexíveis - Flexbox

- Permite que os elementos da página encolham ou cresçam
- Distribui o espaço conforme o tamanho do container

---

### Etapa 4: Layouts Flexíveis - Grid

- Eficaz para criar layouts responsivos
- Atribui o espaço disponível entre colunas e linhas do grid com a unidade `fr`

---

### Etapa 5: Meta Tag Viewport

Informa aos navegadores para usar a largura da janela do dispositivo para exibir a página web.

**Propriedades:**

- `width=device-width`: Define a largura da janela
- `initial-scale`: Define o zoom inicial da página
- `height`: Define altura específica para a viewport
- Evitar usar: `minimum-scale`, `maximum-scale`, `user-scalable`

---

### Etapa 6: O que são Media Queries?

Recurso que aplica propriedades CSS somente para tipos de mídia específicos.

---

### Etapa 7: Estrutura das Media Queries

**Exemplo:**

```css
@media screen and (min-width: 320px) and (max-width: 768px) {
  /* Estilos CSS */
}
```

**Componentes:**

- `@media (At-Rule)`: Identifica o tipo de mídia
- `Media Type`: Define o tipo (ex: `screen`, `print`)
- `Media Features`: Configura recursos (ex: `width`, `orientation`)

---

### Etapa 8: Media Types (Tipos de Mídia)

**Tipos Comuns:**

- `all`: Todos os dispositivos
- `screen`: Dispositivos com telas
- `print`: Documentos para impressão
- `speech`: Dispositivos de leitura audível

---

### Etapa 9: Media Features (Recursos de Mídia)

**Exemplos:**

- `min-width`, `max-width`: Detecta largura da viewport
- `orientation`: Detecta modo retrato/paisagem
- `hover`, `pointer`: Detecta tipo de dispositivo de entrada

---

### Etapa 10: Operadores Lógicos

**Operadores:**

- `AND`: Todas as condições devem ser atendidas
- `NOT`: Nega as condições
- `OR`: Pelo menos uma condição deve ser atendida

---

### Etapa 11: Maneiras de usar Media Queries

Podem ser usadas em:

- CSS
- HTML
- JavaScript

Para carregar estilos diferentes ou aplicar estilos diretamente.
