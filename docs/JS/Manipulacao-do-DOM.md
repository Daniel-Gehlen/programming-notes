# 5. MANIPULAÇÃO DO DOM

## Seleção de Elementos

### Métodos Tradicionais

```javascript
// getElementById - seleciona por ID
const elemento = document.getElementById("meuId");
console.log(elemento);

// getElementsByClassName - coleção HTML por classe
const elementos = document.getElementsByClassName("minhaClasse");
console.log(elementos); // HTMLCollection
console.log(elementos[0]); // Primeiro elemento

// getElementsByTagName - coleção HTML por tag
const divs = document.getElementsByTagName("div");
console.log(divs); // HTMLCollection
console.log(divs.length);

// getElementsByName - coleção por atributo name
const inputs = document.getElementsByName("usuario");
console.log(inputs); // NodeList

// Características das coleções HTML:
// 1. Live collections (atualizam automaticamente)
// 2. Não têm métodos de array (map, filter, forEach)
// 3. Podem ser convertidas para array com Array.from()
```

### Métodos Modernos (querySelector)

```javascript
// querySelector - primeiro elemento que corresponde ao seletor
const primeiroParagrafo = document.querySelector("p");
const elementoPorId = document.querySelector("#meuId");
const elementoPorClasse = document.querySelector(".minhaClasse");
const elementoComplexo = document.querySelector("div.container > p.destaque");

// querySelectorAll - todos elementos que correspondem
const todosParagrafos = document.querySelectorAll("p");
const todosPorClasse = document.querySelectorAll(".minhaClasse");

// Características do NodeList retornado por querySelectorAll:
// 1. NodeList estático (não atualiza automaticamente)
// 2. Possui forEach (em navegadores modernos)
// 3. Pode ser iterado com for...of

// Diferenças importantes:
const liveCollection = document.getElementsByClassName("item");
const staticList = document.querySelectorAll(".item");

// Adicionar novo elemento
const novoElemento = document.createElement("div");
novoElemento.className = "item";
document.body.appendChild(novoElemento);

console.log(liveCollection.length); // Atualizado automaticamente
console.log(staticList.length); // Não atualiza

// Seleção hierárquica
const container = document.querySelector(".container");
const filhosDoContainer = container.querySelectorAll("p"); // Busca apenas dentro do container

// Seletores CSS avançados
const primeiroFilho = document.querySelector(":first-child");
const ultimoFilho = document.querySelector(":last-child");
const elementosPares = document.querySelectorAll(":nth-child(even)");
const elementosImpares = document.querySelectorAll(":nth-child(odd)");
const elementosVazios = document.querySelectorAll(":empty");
const elementosVisiveis = document.querySelectorAll(":not([hidden])");
const inputsDesabilitados = document.querySelectorAll("input:disabled");
const linksNaoVisitados = document.querySelectorAll("a:not(:visited)");
const elementosComAtributo = document.querySelectorAll("[data-custom]");
const elementosComValorExato = document.querySelectorAll('[data-value="123"]');
```

### Seleção em Forms

```javascript
// Seleção específica para formulários
const formulario = document.forms["meuFormulario"];
const formularioPorIndice = document.forms[0];

// Acessar elementos do formulário
const inputNome = formulario.elements["nome"];
const inputEmail = formulario.elements["email"];

// querySelector em formulários
const inputSenha = formulario.querySelector('input[type="password"]');
const todosInputs = formulario.querySelectorAll("input, select, textarea");

// Seleção por tipo
const todosCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const todosRadios = document.querySelectorAll('input[type="radio"]');
const todosSelects = document.querySelectorAll("select");
const todosTextareas = document.querySelectorAll("textarea");

// Seleção de opções em select
const select = document.querySelector("select");
const opcoesSelecionadas = select.selectedOptions;
const primeiraOpcao = select.options[0];
```

### Traversal e Navegação

```javascript
// Navegação a partir de elemento selecionado
const elemento = document.querySelector(".meu-elemento");

// Navegação para cima
const pai = elemento.parentNode;
const paiElemento = elemento.parentElement;

// Navegação para baixo
const filhos = elemento.childNodes; // NodeList (inclui text nodes)
const filhosElementos = elemento.children; // HTMLCollection (apenas elementos)
const primeiroFilho = elemento.firstChild;
const ultimoFilho = elemento.lastChild;
const primeiroElementoFilho = elemento.firstElementChild;
const ultimoElementoFilho = elemento.lastElementChild;

// Navegação lateral
const irmaoAnterior = elemento.previousSibling;
const irmaoPosterior = elemento.nextSibling;
const elementoIrmaoAnterior = elemento.previousElementSibling;
const elementoIrmaoPosterior = elemento.nextElementSibling;

// Métodos de busca relativa
const descendente = elemento.querySelector(".descendente");
const todosDescendentes = elemento.querySelectorAll("*");

// closest - primeiro ancestral que corresponde ao seletor
const container = elemento.closest(".container");
const li = elemento.closest("li");
const tabela = elemento.closest("table");

// matches - verifica se elemento corresponde ao seletor
const eParagrafo = elemento.matches("p");
const temClasse = elemento.matches(".destaque");
const eInputTexto = elemento.matches('input[type="text"]');
```

### Seleção de Elementos Especiais

```javascript
// Seleção do documento
const html = document.documentElement;
const head = document.head;
const body = document.body;
const title = document.title;

// Seleção de elementos especiais
const links = document.links; // HTMLCollection de todos <a> e <area>
const imagens = document.images; // HTMLCollection de todos <img>
const forms = document.forms; // HTMLCollection de todos <form>
const scripts = document.scripts; // HTMLCollection de todos <script>

// Seleção em iframes
const iframe = document.querySelector("iframe");
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
const elementoNoIframe = iframeDoc.querySelector(".elemento");

// Seleção em shadow DOM
const elementoComShadow = document.querySelector(".elemento-com-shadow");
const shadowRoot = elementoComShadow.shadowRoot;
const elementoNoShadow = shadowRoot.querySelector(".elemento-shadow");

// Seleção por XPath (menos comum)
const resultado = document.evaluate(
  '//div[@class="container"]//p',
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);

for (let i = 0; i < result.snapshotLength; i++) {
  console.log(result.snapshotItem(i));
}

// Seleção por coleção HTMLAllCollection (legado)
const tudo = document.all; // HTMLAllCollection de todos elementos
console.log(tudo.length);
```

## Manipulação de Conteúdo

### textContent vs innerText

```javascript
// textContent - obtém ou define TODO o conteúdo textual
const elemento = document.querySelector(".meu-elemento");

// Obter texto
const texto = elemento.textContent;
console.log(texto); // Inclui texto de elementos ocultos

// Definir texto
elemento.textContent = "Novo texto";

// Características do textContent:
// 1. Retorna TODO texto, incluindo de elementos ocultos (display: none)
// 2. Remove todas tags HTML (seguro contra XSS)
// 3. Preserva espaços em branco e quebras de linha
// 4. Mais rápido que innerText

// innerText - considera estilização
const outroTexto = elemento.innerText;
console.log(outroTexto); // Apenas texto visível

// Diferenças práticas:
const div = document.createElement("div");
div.innerHTML = `
    <style>
        .oculto { display: none; }
    </style>
    Texto visível
    <span class="oculto">Texto oculto</span>
    <div>Outro texto</div>
`;

console.log(div.textContent);
// "Texto visível Texto oculto Outro texto"

console.log(div.innerText);
// "Texto visível Outro texto" (ignora o oculto)

// innerText considera:
// 1. Visibilidade (display, visibility)
// 2. Estilo de texto (text-transform, etc.)
// 3. Layout da página
// 4. Quebras de linha conforme aparecem no navegador

// Performance
const startText = performance.now();
for (let i = 0; i < 1000; i++) {
  elemento.textContent = "texto";
}
console.log(`textContent: ${performance.now() - startText}ms`);

const startInner = performance.now();
for (let i = 0; i < 1000; i++) {
  elemento.innerText = "texto";
}
console.log(`innerText: ${performance.now() - startInner}ms`);
```

### innerHTML vs outerHTML

```javascript
// innerHTML - obtém ou define HTML interno
const container = document.querySelector(".container");

// Obter HTML interno
const htmlInterno = container.innerHTML;
console.log(htmlInterno); // String com HTML

// Definir HTML interno
container.innerHTML = "<p>Novo parágrafo</p>";

// Adicionar ao existente
container.innerHTML += "<span>Mais conteúdo</span>";

// CUIDADO: innerHTML reconstrói elementos
// Isso remove event listeners e estados
container.innerHTML += "<button>Clique</button>";
// O botão anterior perde event listeners

// outerHTML - obtém ou substitui TODO o elemento
const elemento = document.querySelector(".meu-elemento");

// Obter HTML completo
const htmlCompleto = elemento.outerHTML;
console.log(htmlCompleto); // Inclui a própria tag

// Substituir elemento
elemento.outerHTML = '<div class="novo">Novo conteúdo</div>';
// O elemento original é removido do DOM

// Diferenças práticas:
const div = document.createElement("div");
div.className = "exemplo";
div.innerHTML = "<span>Conteúdo</span>";

console.log(div.innerHTML); // "<span>Conteúdo</span>"
console.log(div.outerHTML); // "<div class="exemplo"><span>Conteúdo</span></div>"

// Segurança com innerHTML
const userInput =
  '<script>alert("XSS")</script><img src=x onerror=alert("XSS")>';
const div2 = document.createElement("div");

// PERIGOSO:
div2.innerHTML = userInput; // Executa scripts!

// Métodos mais seguros:
div2.textContent = userInput; // Exibe como texto
// Ou use DOMPurify ou sanitize antes

// insertAdjacentHTML - inserção controlada
elemento.insertAdjacentHTML("beforebegin", "<p>Antes</p>"); // Antes do elemento
elemento.insertAdjacentHTML("afterbegin", "<p>Dentro, no início</p>"); // Primeiro filho
elemento.insertAdjacentHTML("beforeend", "<p>Dentro, no final</p>"); // Último filho
elemento.insertAdjacentHTML("afterend", "<p>Depois</p>"); // Após o elemento

// Vantagens do insertAdjacentHTML:
// 1. Não reconstrói todo conteúdo como innerHTML
// 2. Mantém event listeners existentes
// 3. Posicionamento preciso
```

### Manipulação de Texto Avançada

```javascript
// insertAdjacentText - inserir texto
const elemento = document.querySelector(".meu-elemento");
elemento.insertAdjacentText("beforeend", " texto adicional");

// insertAdjacentElement - inserir elemento existente
const novoElemento = document.createElement("span");
novoElemento.textContent = "Novo";
elemento.insertAdjacentElement("beforeend", novoElemento);

// replaceChildren - substituir todos filhos
const container = document.querySelector(".container");
const novosFilhos = [
  document.createElement("p"),
  document.createElement("span"),
  document.createTextNode("Texto"),
];

container.replaceChildren(...novosFilhos);
// Equivalente a: container.innerHTML = '' e depois append

// normalize - normalizar nós de texto
const div = document.createElement("div");
div.appendChild(document.createTextNode("Primeira "));
div.appendChild(document.createTextNode("parte"));
div.appendChild(document.createTextNode(" segunda "));
div.appendChild(document.createTextNode("parte"));

console.log(div.childNodes.length); // 4 nós de texto
div.normalize();
console.log(div.childNodes.length); // 2 nós de texto (unidos)

// wholeText - texto completo de text nodes
const textNode1 = document.createTextNode("Hello ");
const textNode2 = document.createTextNode("World");
div.appendChild(textNode1);
div.appendChild(textNode2);

console.log(textNode1.wholeText); // "Hello World"
console.log(textNode2.wholeText); // "Hello World"

// splitText - dividir text node
const textoLongo = document.createTextNode("Texto muito longo para dividir");
div.appendChild(textoLongo);
const parte = textoLongo.splitText(5); // Divide após 5 caracteres
console.log(textoLongo.textContent); // "Texto"
console.log(parte.textContent); // " muito longo para dividir"

// cloneNode - clonar elementos
const original = document.querySelector(".original");
const cloneRaso = original.cloneNode(false); // Apenas o elemento
const cloneProfundo = original.cloneNode(true); // Elemento e todos descendentes

// cloneNode preserva:
// - Atributos
// - Event listeners? (depende da configuração)
// - IDs? (cuidado: IDs duplicados)
```

### Manipulação de Forms

```javascript
// Manipulação de inputs
const input = document.querySelector('input[type="text"]');

// Valor atual
console.log(input.value);
input.value = "Novo valor";

// Placeholder
input.placeholder = "Digite algo...";

// Propriedades de formulários
const formulario = document.querySelector("form");
const inputTexto = formulario.querySelector('input[type="text"]');
const checkbox = formulario.querySelector('input[type="checkbox"]');
const radio = formulario.querySelector('input[type="radio"]');
const select = formulario.querySelector("select");
const textarea = formulario.querySelector("textarea");

// Valores
console.log(inputTexto.value);
console.log(checkbox.checked);
console.log(radio.checked);
console.log(select.value);
console.log(textarea.value);

// Opções de select
select.options[0].selected = true; // Selecionar primeira opção
select.selectedIndex = 2; // Selecionar por índice
select.value = "valor3"; // Selecionar por value

// Adicionar opção
const novaOpcao = new Option("Nova opção", "novo");
select.add(novaOpcao);

// Remover opção
select.remove(0); // Remove primeira opção

// Manipulação de textarea
textarea.value = "Conteúdo inicial";
textarea.rows = 5;
textarea.cols = 40;

// Manipulação de múltiplos selects
const multiSelect = document.querySelector("select[multiple]");
Array.from(multiSelect.selectedOptions).forEach((opcao) => {
  console.log(opcao.value);
});

// FormData para manipulação complexa
const formData = new FormData(formulario);
console.log(formData.get("nome"));
console.log(formData.getAll("checkbox")); // Para múltiplos valores

// Reset e submit
formulario.reset(); // Volta aos valores padrão
// formulario.submit(); // Envia formulário

// Validação
inputTexto.required = true;
inputTexto.pattern = "[A-Za-z]{3,}";
inputTexto.minLength = 3;
inputTexto.maxLength = 20;

// Eventos de validação
inputTexto.addEventListener("invalid", (e) => {
  e.preventDefault();
  console.log("Campo inválido");
});

// Custom validation
inputTexto.addEventListener("input", (e) => {
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Campo inválido");
  } else {
    e.target.setCustomValidity("");
  }
});
```

## Manipulação de Atributos e Classes

### Atributos Básicos

```javascript
// getAttribute - obter valor de atributo
const elemento = document.querySelector("img");
const src = elemento.getAttribute("src");
const alt = elemento.getAttribute("alt");
const id = elemento.getAttribute("id");

// setAttribute - definir atributo
elemento.setAttribute("src", "nova-imagem.jpg");
elemento.setAttribute("alt", "Descrição da imagem");
elemento.setAttribute("data-custom", "valor-custom");

// removeAttribute - remover atributo
elemento.removeAttribute("alt");
elemento.removeAttribute("data-custom");

// hasAttribute - verificar existência
const temId = elemento.hasAttribute("id");
const temClasse = elemento.hasAttribute("class");

// Atributos booleanos
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.setAttribute("checked", ""); // Adiciona atributo
checkbox.removeAttribute("checked"); // Remove atributo

// Atributos via propriedades (mais comum)
console.log(elemento.id); // propriedade
console.log(elemento.className); // propriedade
console.log(elemento.src); // propriedade (URL absoluta)
console.log(elemento.getAttribute("src")); // atributo (URL relativa)

// Diferença entre propriedade e atributo:
const link = document.querySelector("a");
link.setAttribute("href", "/pagina"); // Atributo
console.log(link.href); // "http://site.com/pagina" (propriedade absoluta)
console.log(link.getAttribute("href")); // "/pagina" (atributo relativo)

// dataset - atributos data-*
elemento.dataset.userId = "123";
elemento.dataset.userRole = "admin";
elemento.dataset.configValue = "true";

console.log(elemento.dataset.userId); // '123'
console.log(elemento.dataset.userRole); // 'admin'

// Converter para camelCase
elemento.dataset.configValue = "novo"; // data-config-value
```

### Manipulação de Classes

```javascript
// className - string com todas classes
const elemento = document.querySelector(".meu-elemento");
console.log(elemento.className); // "minha-classe outra-classe"

// Definir classes (substitui todas)
elemento.className = "nova-classe";

// Adicionar mantendo existentes
elemento.className += " classe-adicional";

// classList - API moderna para classes
const classList = elemento.classList;

// Adicionar classe
classList.add("nova-classe");
classList.add("classe1", "classe2", "classe3"); // Múltiplas

// Remover classe
classList.remove("classe-antiga");
classList.remove("classe1", "classe2"); // Múltiplas

// Alternar classe
classList.toggle("ativo"); // Adiciona se não tem, remove se tem
classList.toggle("ativo", true); // Força adicionar
classList.toggle("ativo", false); // Força remover

// Verificar se tem classe
const temAtivo = classList.contains("ativo");

// Substituir classe
classList.replace("antiga", "nova");

// Iterar sobre classes
for (const className of classList) {
  console.log(className);
}

// Converter para array
const classesArray = Array.from(classList);

// classList vs className performance
const startClassList = performance.now();
for (let i = 0; i < 1000; i++) {
  elemento.classList.add("classe" + i);
}
console.log(`classList: ${performance.now() - startClassList}ms`);

const startClassName = performance.now();
for (let i = 0; i < 1000; i++) {
  elemento.className += " classe" + i;
}
console.log(`className: ${performance.now() - startClassName}ms`);
```

### Atributos Personalizados e ARIA

```javascript
// Atributos ARIA (Accessible Rich Internet Applications)
const elemento = document.querySelector("[role]");

// Definir atributos ARIA
elemento.setAttribute("role", "button");
elemento.setAttribute("aria-label", "Botão de ação");
elemento.setAttribute("aria-expanded", "false");
elemento.setAttribute("aria-hidden", "true");
elemento.setAttribute("aria-describedby", "descricao-id");

// Atributos booleanos ARIA
elemento.setAttribute("aria-disabled", "true");
elemento.setAttribute("aria-required", "false");
elemento.setAttribute("aria-selected", "true");

// Atributos relacionais ARIA
elemento.setAttribute("aria-labelledby", "titulo-id");
elemento.setAttribute("aria-controls", "conteudo-id");
elemento.setAttribute("aria-owns", "elemento-filho-id");

// Manipulação via propriedades (quando disponível)
elemento.role = "button";
elemento.ariaLabel = "Novo label";
elemento.ariaExpanded = false;

// Atributos custom não-data
elemento.setAttribute("custom-attr", "valor");
elemento.setAttribute("x-data", "{ aberto: false }");

// getAttributeNames - todos nomes de atributos
const atributos = elemento.getAttributeNames();
console.log(atributos); // ['id', 'class', 'data-value', ...]

// attributes - coleção de todos atributos
for (const attr of elemento.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}

// Verificação de atributos especiais
const temAria = Array.from(elemento.attributes).some((attr) =>
  attr.name.startsWith("aria-")
);

const temData = Array.from(elemento.attributes).some((attr) =>
  attr.name.startsWith("data-")
);
```

### Style Attribute

```javascript
// style - manipulação inline de estilos
const elemento = document.querySelector(".meu-elemento");

// Definir estilos
elemento.style.color = "red";
elemento.style.backgroundColor = "#f0f0f0";
elemento.style.fontSize = "16px";
elemento.style.margin = "10px 20px";

// Estilos com hífen em camelCase
elemento.style.fontFamily = "Arial, sans-serif";
elemento.style.zIndex = "100";
elemento.style.borderRadius = "5px";

// Obter estilos
const cor = elemento.style.color;
const tamanhoFonte = elemento.style.fontSize;

// Limitação: style só retorna estilos inline
// Para estilos computados, usar getComputedStyle

// getComputedStyle - estilos computados
const estilosComputados = getComputedStyle(elemento);
console.log(estilosComputados.color);
console.log(estilosComputados.fontSize);
console.log(estilosComputados.margin);

// Remover estilo inline
elemento.style.color = ""; // Remove propriedade
elemento.style.removeProperty("color"); // Alternativa

// Definir múltiplos estilos
elemento.style.cssText = "color: red; font-size: 16px; margin: 10px;";

// Preservar estilos existentes
elemento.style.cssText += "; padding: 20px;";

// Limpar todos estilos inline
elemento.style.cssText = "";

// setProperty - com especificadores
elemento.style.setProperty("color", "blue", "important");
elemento.style.setProperty("--custom-var", "red"); // CSS Custom Properties

// getPropertyValue
const valorCor = elemento.style.getPropertyValue("color");
const valorPriority = elemento.style.getPropertyPriority("color"); // "important" ou ""

// removeProperty
elemento.style.removeProperty("color");

// Manipulação de CSS Custom Properties
const root = document.documentElement;

// Definir no :root
root.style.setProperty("--primary-color", "#007bff");
root.style.setProperty("--spacing-unit", "8px");

// Usar no elemento
elemento.style.setProperty("background-color", "var(--primary-color)");
elemento.style.setProperty("padding", "calc(var(--spacing-unit) * 2)");

// Obter valor
const primaryColor = getComputedStyle(root).getPropertyValue("--primary-color");
```

## Criação e Remoção de Elementos

### createElement e createTextNode

```javascript
// createElement - criar elemento HTML
const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
const img = document.createElement("img");
const a = document.createElement("a");

// Configurar elementos
div.id = "meuDiv";
div.className = "container";
div.setAttribute("data-custom", "valor");

p.textContent = "Texto do parágrafo";
span.innerHTML = "Texto com <strong>negrito</strong>";

img.src = "imagem.jpg";
img.alt = "Descrição";

a.href = "https://exemplo.com";
a.textContent = "Link";
a.target = "_blank";

// createTextNode - criar nó de texto
const texto = document.createTextNode("Texto simples");
const outroTexto = document.createTextNode(" Mais texto");

// createDocumentFragment - fragmento de documento
const fragment = document.createDocumentFragment();

// Adicionar múltiplos elementos ao fragmento
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i + 1}`;
  fragment.appendChild(li);
}

// Fragmentos são úteis para performance:
// 1. Adições/remoções no fragmento não causam reflow
// 2. Apenas um reflow quando fragmento é adicionado ao DOM
// 3. Fragmento não é um nó real no DOM

// createComment - criar comentário
const comentario = document.createComment(" Comentário HTML ");
```

### appendChild e insertBefore

```javascript
// appendChild - adicionar como último filho
const container = document.querySelector(".container");
const novoElemento = document.createElement("div");

container.appendChild(novoElemento);

// Adicionar texto
const textNode = document.createTextNode("Texto");
container.appendChild(textNode);

// Adicionar elemento existente (move, não copia)
const outroContainer = document.querySelector(".outro");
outroContainer.appendChild(novoElemento); // Move de container para outroContainer

// insertBefore - inserir antes de elemento específico
const referencia = document.querySelector(".referencia");
const elementoNovo = document.createElement("div");

container.insertBefore(elementoNovo, referencia);
// Se referencia for null, funciona como appendChild

// Inserir no início
const primeiroFilho = container.firstChild;
container.insertBefore(elementoNovo, primeiroFilho);

// Inserir em posição específica
const filhos = container.children;
if (filhos.length >= 3) {
  container.insertBefore(elementoNovo, filhos[2]); // Antes do terceiro filho
}

// Helper function para insertAfter
function insertAfter(novoNode, referenciaNode) {
  referenciaNode.parentNode.insertBefore(novoNode, referenciaNode.nextSibling);
}

const referencia2 = document.querySelector(".referencia2");
insertAfter(elementoNovo, referencia2);
```

### Métodos Modernos de Inserção

```javascript
// append - adicionar múltiplos nós (ES2015)
const container = document.querySelector(".container");

// Adicionar múltiplos elementos
container.append(
  document.createElement("p"),
  document.createTextNode("Texto"),
  "String direta", // Cria text node automaticamente
  document.createElement("br")
);

// prepend - adicionar no início (ES2017)
container.prepend(document.createElement("h1"), "Título inicial");

// before - inserir antes do elemento (ES2017)
const elemento = document.querySelector(".meu-elemento");
elemento.before(document.createElement("div"), "Texto antes");

// after - inserir após o elemento (ES2017)
elemento.after(document.createElement("div"), "Texto depois");

// replaceWith - substituir elemento (ES2017)
const velhoElemento = document.querySelector(".antigo");
velhoElemento.replaceWith(
  document.createElement("div"),
  document.createTextNode("Substituído")
);

// Comparação com métodos antigos:
// Novo (ES2017):              // Antigo:
// element.append(...)         // element.appendChild(node)
// element.prepend(...)        // element.insertBefore(node, element.firstChild)
// element.before(...)         // element.parentNode.insertBefore(node, element)
// element.after(...)          // insertAfter helper function
// element.replaceWith(...)    // element.parentNode.replaceChild(new, old)

// Vantagens dos métodos novos:
// 1. Aceitam múltiplos argumentos
// 2. Aceitam strings (criam text nodes automaticamente)
// 3. Mais intuitivos
// 4. Chainable

// Exemplo completo
const div = document.createElement("div");
div.id = "novo";

div.append(
  document.createElement("h1"),
  "Título",
  document.createElement("p"),
  "Parágrafo com ",
  document.createElement("strong"),
  "negrito"
);

document.body.append(div);
```

### Remoção de Elementos

```javascript
// removeChild - remover filho específico
const container = document.querySelector(".container");
const filhoParaRemover = document.querySelector(".filho");

// Método tradicional
container.removeChild(filhoParaRemover);

// Verificar se existe antes de remover
if (filhoParaRemover && filhoParaRemover.parentNode === container) {
  container.removeChild(filhoParaRemover);
}

// remove - método moderno (ES2015)
const elemento = document.querySelector(".para-remover");
elemento.remove(); // Remove a si mesmo

// remove() pode ser chamado mesmo se elemento não está no DOM
const elementoOrfa = document.createElement("div");
elementoOrfa.remove(); // Não faz nada (já não está no DOM)

// remove() retorna undefined (não chainable)

// Limpar todos filhos
function limparContainer(container) {
  // Opção 1: while loop (rápido)
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Opção 2: innerHTML (mais lento, reconstrói)
  // container.innerHTML = '';

  // Opção 3: textContent (para apenas texto)
  // container.textContent = '';

  // Opção 4: replaceChildren (ES2020, mais rápido)
  // container.replaceChildren();
}

// replaceChild - substituir filho
const novoElemento = document.createElement("div");
const elementoAntigo = document.querySelector(".antigo");

// container.replaceChild(novo, antigo)
if (elementoAntigo.parentNode) {
  elementoAntigo.parentNode.replaceChild(novoElemento, elementoAntigo);
}

// Helper para remover todos elementos por seletor
function removerTodos(seletor) {
  document.querySelectorAll(seletor).forEach((elemento) => {
    elemento.remove();
  });
}

// Preservar referências ao remover
const elementoRemovido = document.querySelector(".elemento");
const pai = elementoRemovido.parentNode;

// Salvar referência antes de remover
const filhosAntes = Array.from(pai.children);

elementoRemovido.remove();

// Elemento ainda existe na memória
console.log(elementoRemovido); // Ainda acessível
console.log(elementoRemovido.parentNode); // null
```

### Clonagem e Importação

```javascript
// cloneNode - clonar elementos
const original = document.querySelector(".original");

// Clone raso (apenas o elemento, sem filhos)
const cloneRaso = original.cloneNode(false);
cloneRaso.id = "clone-raso";

// Clone profundo (elemento e todos descendentes)
const cloneProfundo = original.cloneNode(true);
cloneProfundo.id = "clone-profundo";

// Cuidados com cloneNode:
// 1. IDs duplicados (violam especificação HTML)
// 2. Event listeners podem não ser copiados (depende da configuração)
// 3. Dados e estados não são copiados

// Solução para IDs duplicados
function cloneSemIdsDuplicados(elemento) {
  const clone = elemento.cloneNode(true);

  // Remover IDs de todos descendentes
  clone.querySelectorAll("[id]").forEach((el) => {
    el.removeAttribute("id");
  });

  // Remover ID do próprio elemento
  clone.removeAttribute("id");

  return clone;
}

// importNode - importar de outro documento
const iframe = document.querySelector("iframe");
const iframeDoc = iframe.contentDocument;
const elementoNoIframe = iframeDoc.querySelector(".elemento");

// Importar para documento principal
const importado = document.importNode(elementoNoIframe, true); // deep clone
document.body.appendChild(importado);

// adoptNode - mover entre documentos
const adotado = document.adoptNode(elementoNoIframe);
// elementoNoIframe é removido do iframe e movido para documento principal

// cloneNode vs importNode vs adoptNode
// cloneNode: copia dentro do mesmo documento
// importNode: copia entre documentos
// adoptNode: move entre documentos

// Template elements
const template = document.createElement("template");
template.innerHTML = `
    <div class="card">
        <h2 class="title"></h2>
        <p class="content"></p>
    </div>
`;

// Clonar conteúdo do template
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "Título";
clone.querySelector(".content").textContent = "Conteúdo";

document.body.appendChild(clone);

// Vantagens de templates:
// 1. HTML não é renderizado até ser clonado
// 2. Pode ser reutilizado múltiplas vezes
// 3. Performance melhor que innerHTML repetido
```

## Eventos e Event Listeners

### addEventListener Básico

```javascript
// addEventListener - adicionar listener de evento
const botao = document.querySelector("button");

// Sintaxe básica
botao.addEventListener("click", function (event) {
  console.log("Botão clicado!");
  console.log("Evento:", event);
  console.log("Target:", event.target);
  console.log("Current Target:", event.currentTarget);
});

// Arrow function
botao.addEventListener("click", (event) => {
  console.log("Arrow function");
});

// Função nomeada (melhor para remoção)
function handleClick(event) {
  console.log("Função nomeada");
}
botao.addEventListener("click", handleClick);

// Múltiplos listeners para mesmo evento
botao.addEventListener("click", () => console.log("Listener 1"));
botao.addEventListener("click", () => console.log("Listener 2"));
// Ambos executam na ordem de adição

// Opções do addEventListener
botao.addEventListener("click", handleClick, {
  capture: false, // Fase de captura? (default: false = bubbling)
  once: true, // Executa apenas uma vez
  passive: true, // Não chama preventDefault() (performance)
  signal: AbortSignal, // Para remover automaticamente
});

// once: true exemplo
botao.addEventListener(
  "click",
  () => {
    console.log("Executa apenas uma vez");
  },
  { once: true }
);

// passive: true para scroll/touch (performance)
window.addEventListener(
  "scroll",
  () => {
    console.log("Scrolling...");
  },
  { passive: true }
);

// Opções antigas (não recomendado)
botao.addEventListener("click", handleClick, false); // bubbling
botao.addEventListener("click", handleClick, true); // capture
```

### Tipos de Eventos Comuns

```javascript
// Eventos de mouse
elemento.addEventListener("click", handleEvent);
elemento.addEventListener("dblclick", handleEvent); // duplo clique
elemento.addEventListener("mousedown", handleEvent); // botão pressionado
elemento.addEventListener("mouseup", handleEvent); // botão liberado
elemento.addEventListener("mousemove", handleEvent); // movimento
elemento.addEventListener("mouseover", handleEvent); // entra no elemento
elemento.addEventListener("mouseout", handleEvent); // sai do elemento
elemento.addEventListener("mouseenter", handleEvent); // entra (não bubbling)
elemento.addEventListener("mouseleave", handleEvent); // sai (não bubbling)

// Eventos de teclado
elemento.addEventListener("keydown", (e) => {
  console.log("Tecla pressionada:", e.key, e.code);
});
elemento.addEventListener("keyup", handleEvent);
elemento.addEventListener("keypress", handleEvent); // deprecated

// Eventos de formulário
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita envio padrão
  console.log("Formulário enviado");
});

input.addEventListener("focus", handleEvent);
input.addEventListener("blur", handleEvent);
input.addEventListener("input", handleEvent); // Qualquer mudança
input.addEventListener("change", handleEvent); // Perde foco com mudança

// Eventos de janela
window.addEventListener("load", () => {
  console.log("Página totalmente carregada");
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado (sem imagens)");
});

window.addEventListener("resize", () => {
  console.log("Janela redimensionada");
});

window.addEventListener("scroll", handleEvent);

// Eventos de mídia
video.addEventListener("play", handleEvent);
video.addEventListener("pause", handleEvent);
video.addEventListener("ended", handleEvent);

// Eventos de arrastar (drag and drop)
elemento.addEventListener("dragstart", handleEvent);
elemento.addEventListener("drag", handleEvent);
elemento.addEventListener("dragend", handleEvent);
elemento.addEventListener("dragover", (e) => {
  e.preventDefault(); // Necessário para drop
});
elemento.addEventListener("drop", handleEvent);

// Eventos de toque (touch)
elemento.addEventListener("touchstart", handleEvent);
elemento.addEventListener("touchmove", handleEvent);
elemento.addEventListener("touchend", handleEvent);

// Eventos de transição/animação
elemento.addEventListener("transitionend", handleEvent);
elemento.addEventListener("animationstart", handleEvent);
elemento.addEventListener("animationend", handleEvent);
```

### Objeto Event e suas Propriedades

```javascript
function handleEvent(event) {
  // Propriedades comuns
  console.log("Event type:", event.type);
  console.log("Target:", event.target); // Elemento que disparou
  console.log("Current target:", event.currentTarget); // Elemento com listener
  console.log("Event phase:", event.eventPhase); // 1=captura, 2=target, 3=bubbling

  // Métodos de controle
  event.preventDefault(); // Previne comportamento padrão
  event.stopPropagation(); // Para propagação
  event.stopImmediatePropagation(); // Para propagação e outros listeners

  // Mouse events
  if (event instanceof MouseEvent) {
    console.log("Client X/Y:", event.clientX, event.clientY); // Relativo à janela
    console.log("Page X/Y:", event.pageX, event.pageY); // Relativo ao documento
    console.log("Screen X/Y:", event.screenX, event.screenY); // Relativo à tela
    console.log("Button:", event.button); // 0=esquerdo, 1=meio, 2=direito
    console.log("Buttons:", event.buttons); // Botões pressionados
    console.log("Ctrl key:", event.ctrlKey);
    console.log("Shift key:", event.shiftKey);
    console.log("Alt key:", event.altKey);
    console.log("Meta key:", event.metaKey); // Command/Win
  }

  // Keyboard events
  if (event instanceof KeyboardEvent) {
    console.log("Key:", event.key); // Caractere (ex: 'a', 'Enter')
    console.log("Code:", event.code); // Código físico (ex: 'KeyA', 'Enter')
    console.log("Key code:", event.keyCode); // Deprecated
    console.log("Repeat:", event.repeat);
    console.log("Ctrl key:", event.ctrlKey);
    console.log("Alt key:", event.altKey);
    console.log("Shift key:", event.shiftKey);
    console.log("Meta key:", event.metaKey);
  }

  // Form events
  if (event.type === "input" || event.type === "change") {
    console.log("Value:", event.target.value);
  }

  // Focus events
  if (event.type === "focus" || event.type === "blur") {
    console.log("Related target:", event.relatedTarget);
  }
}
```

### removeEventListener e Event Delegation

```javascript
// removeEventListener - remover listener
const botao = document.querySelector("button");

function handleClick() {
  console.log("Clicado");
}

// Adicionar
botao.addEventListener("click", handleClick);

// Remover (deve ser mesma função)
botao.removeEventListener("click", handleClick);

// IMPORTANTE: função deve ser a mesma referência
// Isso NÃO funciona:
botao.addEventListener("click", () => console.log("anonima"));
botao.removeEventListener("click", () => console.log("anonima")); // Não remove

// Isso funciona:
const funcao = () => console.log("nomeada");
botao.addEventListener("click", funcao);
botao.removeEventListener("click", funcao); // Remove

// Event Delegation - delegação de eventos
const lista = document.querySelector(".lista");

// Em vez de adicionar a cada item, adiciona ao pai
lista.addEventListener("click", (event) => {
  // Verificar se clique foi em um item da lista
  if (event.target.matches("li.item")) {
    console.log("Item clicado:", event.target.textContent);
  }

  // Ou usando closest
  const item = event.target.closest("li.item");
  if (item) {
    console.log("Item encontrado via closest:", item.textContent);
  }
});

// Vantagens da delegação:
// 1. Menos listeners (melhor performance)
// 2. Funciona com elementos dinâmicos
// 3. Menos consumo de memória

// Exemplo completo com delegação
document.addEventListener("click", (event) => {
  // Botões com data-action
  const button = event.target.closest("[data-action]");
  if (button) {
    const action = button.dataset.action;
    console.log("Ação:", action);

    switch (action) {
      case "delete":
        button.closest(".item").remove();
        break;
      case "edit":
        // Lógica de edição
        break;
      case "save":
        // Lógica de salvamento
        break;
    }
  }

  // Links externos
  const link = event.target.closest('a[target="_blank"]');
  if (link) {
    event.preventDefault();
    console.log("Abrindo link externo:", link.href);
    window.open(link.href, "_blank");
  }
});
```

### Custom Events e Event Bubbling

```javascript
// Custom events - eventos personalizados
const elemento = document.querySelector(".meu-elemento");

// Criar evento customizado
const eventoSimples = new Event("meuEvento");
const eventoComDados = new CustomEvent("meuEventoComDados", {
  detail: {
    mensagem: "Olá mundo",
    numero: 42,
  },
  bubbles: true, // Propaga como eventos normais
  cancelable: true, // Pode ser cancelado com preventDefault()
});

// Adicionar listener
elemento.addEventListener("meuEventoComDados", (event) => {
  console.log("Evento customizado recebido:", event.detail);
});

// Disparar evento
elemento.dispatchEvent(eventoComDados);

// Event bubbling e capturing
const avo = document.querySelector(".avo");
const pai = document.querySelector(".pai");
const filho = document.querySelector(".filho");

// Fases do evento:
// 1. Capturing (descendo) - avo -> pai -> filho
// 2. Target - no elemento alvo
// 3. Bubbling (subindo) - filho -> pai -> avo

avo.addEventListener("click", () => console.log("Avô (bubbling)"), false);
pai.addEventListener("click", () => console.log("Pai (bubbling)"), false);
filho.addEventListener("click", () => console.log("Filho (bubbling)"), false);

// Com capturing (terceiro argumento true)
avo.addEventListener("click", () => console.log("Avô (capturing)"), true);
pai.addEventListener("click", () => console.log("Pai (capturing)"), true);

// stopPropagation
filho.addEventListener("click", (event) => {
  console.log("Filho com stopPropagation");
  event.stopPropagation(); // Para propagação
});

// stopImmediatePropagation
filho.addEventListener("click", (event) => {
  console.log("Listener 1 do filho");
  event.stopImmediatePropagation(); // Para outros listeners do mesmo elemento
});

filho.addEventListener("click", () => {
  console.log("Listener 2 do filho - não executa");
});

// preventDefault vs stopPropagation
link.addEventListener("click", (event) => {
  event.preventDefault(); // Previne navegação
  event.stopPropagation(); // Previne bubbling
  console.log("Link clicado, mas não navega");
});
```

## Navegação na Árvore DOM

### Navegação Hierárquica

```javascript
// parentNode - nó pai
const elemento = document.querySelector(".meu-elemento");
const pai = elemento.parentNode;
const avo = pai.parentNode;

// parentElement - elemento pai (ignora outros nós)
const paiElemento = elemento.parentElement;

// Diferença parentNode vs parentElement:
const textNode = document.createTextNode("texto");
div.appendChild(textNode);
console.log(textNode.parentNode); // div
console.log(textNode.parentElement); // div (text nodes não são elements)

// document.parentNode e document.parentElement
console.log(document.parentNode); // null
console.log(document.parentElement); // null

// childNodes - todos nós filhos (inclui text nodes, comentários)
const filhos = elemento.childNodes;
for (const node of filhos) {
  console.log(node.nodeType); // 1=Element, 3=Text, 8=Comment
  console.log(node.nodeName);
}

// children - apenas elementos filhos
const elementosFilhos = elemento.children;
for (const child of elementosFilhos) {
  console.log(child.tagName);
}

// firstChild e lastChild
const primeiroFilho = elemento.firstChild; // Pode ser text node
const ultimoFilho = elemento.lastChild;

// firstElementChild e lastElementChild
const primeiroElementoFilho = elemento.firstElementChild;
const ultimoElementoFilho = elemento.lastElementChild;

// nextSibling e previousSibling
const irmaoSeguinte = elemento.nextSibling;
const irmaoAnterior = elemento.previousSibling;

// nextElementSibling e previousElementSibling
const elementoIrmaoSeguinte = elemento.nextElementSibling;
const elementoIrmaoAnterior = elemento.previousElementSibling;

// Navegação em text nodes
const div = document.createElement("div");
div.innerHTML = "Texto <span>Elemento</span> Outro texto";

console.log(div.firstChild.nodeType); // 3 (Text node)
console.log(div.firstChild.nextSibling.nodeType); // 1 (Element)
console.log(div.firstChild.nextSibling.nextSibling.nodeType); // 3 (Text node)
```

### Métodos de Navegação Avançada

```javascript
// closest - primeiro ancestral que corresponde ao seletor
const elemento = document.querySelector(".meu-elemento");

const li = elemento.closest("li"); // Primeiro li ancestral
const container = elemento.closest(".container"); // Primeiro .container ancestral
const table = elemento.closest("table"); // null se não encontrar

// matches - verifica se elemento corresponde ao seletor
const eParagrafo = elemento.matches("p");
const temClasse = elemento.matches(".destaque");
const eInput = elemento.matches('input[type="text"]');

// contains - verifica se elemento contém outro
const container = document.querySelector(".container");
const elementoInterno = document.querySelector(".interno");

const contem = container.contains(elementoInterno); // true
const contemSiMesmo = container.contains(container); // true
const contemBody = container.contains(document.body); // false

// compareDocumentPosition - posição relativa
const elemento1 = document.querySelector("#elem1");
const elemento2 = document.querySelector("#elem2");

const posicao = elemento1.compareDocumentPosition(elemento2);
// Retorna bitmask:
// 1: Desconectados
// 2: Precede
// 4: Segue
// 8: Contém
// 16: Contido por
// 32: Implementação específica

if (posicao & Node.DOCUMENT_POSITION_CONTAINS) {
  console.log("elemento1 contém elemento2");
}

// isEqualNode - nós são iguais (mesma estrutura)
const div1 = document.createElement("div");
div1.className = "container";
div1.textContent = "Texto";

const div2 = document.createElement("div");
div2.className = "container";
div2.textContent = "Texto";

console.log(div1.isEqualNode(div2)); // true
console.log(div1 === div2); // false (diferentes referências)

// isSameNode - mesma referência (===)
console.log(div1.isSameNode(div1)); // true
console.log(div1.isSameNode(div2)); // false
```

### TreeWalker e NodeIterator

```javascript
// TreeWalker - navegação avançada na árvore
const container = document.querySelector(".container");

// Criar TreeWalker
const walker = document.createTreeWalker(
  container, // Nó raiz
  NodeFilter.SHOW_ELEMENT, // Que tipos de nós mostrar
  {
    // Filtro personalizado
    acceptNode: function (node) {
      // Mostrar apenas elementos com classe 'item'
      if (node.classList && node.classList.contains("item")) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    },
  },
  false // Entity Reference Expansion (legacy)
);

// Navegar
const primeiro = walker.firstChild();
const proximo = walker.nextNode();
const anterior = walker.previousNode();
const pai = walker.parentNode();

// Iterar todos nós
const nodes = [];
let node = walker.firstChild();
while (node) {
  nodes.push(node);
  node = walker.nextNode();
}

// NodeIterator - mais simples que TreeWalker
const iterator = document.createNodeIterator(
  container,
  NodeFilter.SHOW_TEXT, // Apenas text nodes
  null, // Sem filtro
  false
);

let textNode;
const textos = [];
while ((textNode = iterator.nextNode())) {
  textos.push(textNode.textContent);
}

// NodeFilter constantes:
// NodeFilter.SHOW_ALL (0xFFFFFFFF)
// NodeFilter.SHOW_ELEMENT (1)
// NodeFilter.SHOW_TEXT (4)
// NodeFilter.SHOW_COMMENT (128)
// NodeFilter.SHOW_DOCUMENT (256)
// NodeFilter.SHOW_DOCUMENT_TYPE (512)

// Filtros predefinidos:
const apenasParagrafos = {
  acceptNode: function (node) {
    return node.nodeName === "P"
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_SKIP;
  },
};

// Exemplo prático: coletar todos textos
function coletarTextos(elemento) {
  const textos = [];
  const walker = document.createTreeWalker(
    elemento,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    const texto = node.textContent.trim();
    if (texto) {
      textos.push(texto);
    }
  }

  return textos;
}
```

### Range API (Seleção de Conteúdo)

```javascript
// Range - representação de intervalo no DOM
const range = document.createRange();

// Selecionar conteúdo
const inicio = document.querySelector("#inicio");
const fim = document.querySelector("#fim");

// Definir range entre dois elementos
range.setStartBefore(inicio);
range.setEndAfter(fim);

// Ou por posições específicas
range.setStart(inicio.firstChild, 3); // Após 3 caracteres
range.setEnd(fim.firstChild, 5); // Após 5 caracteres

// Métodos para definir range
range.selectNode(elemento); // Seleciona nó inteiro
range.selectNodeContents(elemento); // Seleciona conteúdo do nó
range.setStart(elemento, 0); // offset em childNodes
range.setEnd(elemento, elemento.childNodes.length);

// Propriedades do range
console.log("Start container:", range.startContainer);
console.log("Start offset:", range.startOffset);
console.log("End container:", range.endContainer);
console.log("End offset:", range.endOffset);
console.log("Collapsed:", range.collapsed); // Start == End
console.log("Common ancestor:", range.commonAncestorContainer);

// Manipulação de conteúdo
const conteudo = range.extractContents(); // Remove e retorna conteúdo
range.deleteContents(); // Remove conteúdo
range.insertNode(novoElemento); // Insere nó no início

// Clone range
const rangeClone = range.cloneRange();

// Comparação
const range2 = document.createRange();
const comparacao = range.compareBoundaryPoints(Range.START_TO_START, range2);
// -1: range antes de range2
// 0: mesma posição
// 1: range depois de range2

// Selection API (seleção do usuário)
const selecao = window.getSelection();

// Obter range da seleção
if (selecao.rangeCount > 0) {
  const rangeSelecionado = selecao.getRangeAt(0);

  // Modificar seleção
  selecao.removeAllRanges();
  selecao.addRange(range); // Selecionar nosso range

  // Ou
  selecao.setBaseAndExtent(
    elementoInicio,
    offsetInicio,
    elementoFim,
    offsetFim
  );
}

// Operações com range
const fragment = range.cloneContents(); // Clona conteúdo como DocumentFragment
range.surroundContents(elemento); // Envolve conteúdo com elemento
range.collapse(toStart); // true = para início, false = para fim

// Exemplo prático: destacar texto
function destacarTexto(elemento, textoParaDestacar) {
  const texto = elemento.textContent;
  const indice = texto.indexOf(textoParaDestacar);

  if (indice !== -1) {
    const range = document.createRange();
    const textNode = elemento.firstChild;

    range.setStart(textNode, indice);
    range.setEnd(textNode, indice + textoParaDestacar.length);

    const span = document.createElement("span");
    span.className = "destaque";
    span.style.backgroundColor = "yellow";

    range.surroundContents(span);
  }
}
```

### Manipulação de DocumentFragment

```javascript
// DocumentFragment - fragmento de documento leve
const fragment = document.createDocumentFragment();

// Adicionar elementos ao fragmento
for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i + 1}`;
  fragment.appendChild(li);
}

// Adicionar fragmento ao DOM (apenas um reflow)
document.querySelector("ul").appendChild(fragment);

// Características do DocumentFragment:
// 1. Não é parte do DOM principal
// 2. Adições/remoções não causam reflow
// 3. Quando adicionado ao DOM, seus filhos são movidos
// 4. O próprio fragmento nunca é renderizado

// cloneNode com fragment
const template = document.querySelector("template");
const fragmentClone = template.content.cloneNode(true);

// Fragment vs criar elementos diretamente
function adicionarElementosDiretamente(quantidade) {
  const start = performance.now();
  const ul = document.querySelector("ul");

  for (let i = 0; i < quantidade; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i + 1}`;
    ul.appendChild(li); // Causa reflow a cada iteração
  }

  return performance.now() - start;
}

function adicionarComFragment(quantidade) {
  const start = performance.now();
  const ul = document.querySelector("ul");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < quantidade; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i + 1}`;
    fragment.appendChild(li); // Sem reflow
  }

  ul.appendChild(fragment); // Apenas um reflow
  return performance.now() - start;
}

// Query em fragment
const fragment2 = document.createDocumentFragment();
const div = document.createElement("div");
div.innerHTML = "<p>Parágrafo 1</p><p>Parágrafo 2</p>";
fragment2.appendChild(div);

// querySelector funciona em fragment
const primeiroP = fragment2.querySelector("p");
console.log(primeiroP.textContent); // "Parágrafo 1"

// Converter HTML para fragment
function htmlParaFragment(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = htmlString;
  return template.content;
}

const meuFragment = htmlParaFragment("<div><p>Conteúdo</p></div>");

// Fragment para string
function fragmentParaString(fragment) {
  const div = document.createElement("div");
  div.appendChild(fragment.cloneNode(true));
  return div.innerHTML;
}

// Uso com template literals
function criarFragment(strings, ...values) {
  const html = strings.reduce(
    (result, str, i) => result + str + (values[i] || ""),
    ""
  );

  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content;
}

const dados = { nome: "João", idade: 30 };
const fragmentComDados = criarFragment`
    <div class="usuario">
        <h2>${dados.nome}</h2>
        <p>Idade: ${dados.idade}</p>
    </div>
`;
```

Este guia completo cobre todos os aspectos de manipulação do DOM em JavaScript, desde seleção básica até técnicas avançadas de navegação e manipulação. Cada seção inclui exemplos práticos e detalhes importantes para uso eficiente da API DOM.
