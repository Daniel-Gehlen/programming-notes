# 6. EVENTOS

## Tipos de Eventos

### Eventos de Mouse

```javascript
// Eventos básicos de mouse
const elemento = document.querySelector(".meu-elemento");

// click - clique simples
elemento.addEventListener("click", (event) => {
  console.log("Elemento clicado");
  console.log("Coordenadas:", event.clientX, event.clientY);
});

// dblclick - duplo clique
elemento.addEventListener("dblclick", (event) => {
  console.log("Duplo clique detectado");
});

// mousedown - botão pressionado
elemento.addEventListener("mousedown", (event) => {
  console.log("Botão pressionado:", event.button);
  // 0: botão esquerdo
  // 1: botão do meio
  // 2: botão direito
});

// mouseup - botão liberado
elemento.addEventListener("mouseup", (event) => {
  console.log("Botão liberado");
});

// contextmenu - clique direito
elemento.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // Previne menu de contexto padrão
  console.log("Menu de contexto (clique direito)");
  // Mostrar menu customizado
});

// mouseover - mouse entra no elemento (bubbles)
elemento.addEventListener("mouseover", (event) => {
  console.log("Mouse entrou no elemento");
  elemento.style.backgroundColor = "yellow";
});

// mouseout - mouse sai do elemento (bubbles)
elemento.addEventListener("mouseout", (event) => {
  console.log("Mouse saiu do elemento");
  elemento.style.backgroundColor = "";
});

// mouseenter - mouse entra no elemento (não bubbles)
elemento.addEventListener("mouseenter", (event) => {
  console.log("Mouse enter (não bubbling)");
});

// mouseleave - mouse sai do elemento (não bubbles)
elemento.addEventListener("mouseleave", (event) => {
  console.log("Mouse leave (não bubbling)");
});

// mousemove - mouse se move sobre o elemento
elemento.addEventListener("mousemove", (event) => {
  console.log(`Mouse em: ${event.clientX}, ${event.clientY}`);

  // Seguir mouse (exemplo)
  // elemento.style.left = event.clientX + 'px';
  // elemento.style.top = event.clientY + 'px';
});

// wheel - roda do mouse
elemento.addEventListener("wheel", (event) => {
  console.log("Roda do mouse:", event.deltaY);
  // deltaY positivo: rolar para baixo
  // deltaY negativo: rolar para cima
  event.preventDefault(); // Previne scroll padrão se necessário
});

// Diferença entre mouseover/mouseout vs mouseenter/mouseleave:
const container = document.querySelector(".container");
const filho = container.querySelector(".filho");

container.addEventListener("mouseover", () => {
  console.log("mouseover no container");
});

container.addEventListener("mouseenter", () => {
  console.log("mouseenter no container");
});

// Ao mover do container para o filho:
// mouseover: dispara novamente (bubbling do filho)
// mouseenter: não dispara (entrou no container uma vez)
```

### Eventos de Teclado

```javascript
// Eventos de teclado
const input = document.querySelector('input[type="text"]');

// keydown - tecla pressionada
input.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada:", event.key);
  console.log("Código:", event.code);
  console.log("Ctrl:", event.ctrlKey);
  console.log("Shift:", event.shiftKey);
  console.log("Alt:", event.altKey);

  // Atalhos de teclado
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); // Previne salvar página
    console.log("Ctrl+S pressionado - salvar conteúdo");
  }

  // Navegação com setas
  if (event.key === "ArrowUp") {
    console.log("Seta para cima");
  }
});

// keyup - tecla liberada
input.addEventListener("keyup", (event) => {
  console.log("Tecla liberada:", event.key);

  // Validação em tempo real
  if (event.target.value.length < 3) {
    console.log("Texto muito curto");
  }
});

// keypress - tecla de caractere pressionada (deprecated)
input.addEventListener("keypress", (event) => {
  console.log("Keypress (deprecated):", event.key);
});

// Teclas especiais
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Escape":
      console.log("Esc pressionado");
      break;
    case "Enter":
      console.log("Enter pressionado");
      break;
    case "Tab":
      console.log("Tab pressionado");
      // event.preventDefault(); // Cuidado: remove navegação por tab
      break;
    case "Backspace":
      console.log("Backspace pressionado");
      break;
    case "Delete":
      console.log("Delete pressionado");
      break;
    case "Home":
      console.log("Home pressionado");
      break;
    case "End":
      console.log("End pressionado");
      break;
    case "PageUp":
      console.log("PageUp pressionado");
      break;
    case "PageDown":
      console.log("PageDown pressionado");
      break;
    case "F1":
      event.preventDefault(); // Previne help do navegador
      console.log("F1 pressionado");
      break;
  }

  // Combinação de teclas
  if (event.ctrlKey && event.shiftKey && event.key === "P") {
    event.preventDefault();
    console.log("Ctrl+Shift+P - abrir painel");
  }
});

// beforeinput - antes da mudança no input
input.addEventListener("beforeinput", (event) => {
  console.log("Antes do input:", event.data);

  // Validar entrada antes de inserir
  if (event.data && !/^[a-zA-Z]$/.test(event.data)) {
    event.preventDefault(); // Bloqueia caracteres não-alfabéticos
  }
});

// Eventos globais de teclado
document.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada em qualquer lugar:", event.key);
});

// Desabilitar atalhos específicos
document.addEventListener("keydown", (event) => {
  // Desabilitar F12 (DevTools)
  if (event.key === "F12") {
    event.preventDefault();
    console.log("DevTools desabilitado");
  }

  // Desabilitar Ctrl+U (view source)
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
    console.log("View source desabilitado");
  }
});
```

### Eventos de Formulário

```javascript
const formulario = document.querySelector("form");
const input = formulario.querySelector('input[type="text"]');
const textarea = formulario.querySelector("textarea");
const select = formulario.querySelector("select");
const checkbox = formulario.querySelector('input[type="checkbox"]');

// submit - envio do formulário
formulario.addEventListener("submit", (event) => {
  console.log("Formulário sendo enviado");

  // Validação antes do envio
  if (!validarFormulario()) {
    event.preventDefault(); // Impede envio
    console.log("Formulário inválido");
  }

  // Processar dados antes do envio
  const formData = new FormData(formulario);
  console.log("Dados do formulário:", Object.fromEntries(formData));
});

// reset - reset do formulário
formulario.addEventListener("reset", (event) => {
  console.log("Formulário resetado");
  // Confirmar antes de resetar
  if (!confirm("Tem certeza que deseja limpar o formulário?")) {
    event.preventDefault();
  }
});

// input - qualquer mudança no valor
input.addEventListener("input", (event) => {
  console.log("Valor mudou:", event.target.value);

  // Validação em tempo real
  const valor = event.target.value;
  if (valor.length < 3) {
    mostrarErro("Mínimo 3 caracteres");
  } else {
    limparErro();
  }
});

// change - valor mudou e elemento perdeu foco
input.addEventListener("change", (event) => {
  console.log("Valor final:", event.target.value);
  // Útil para validação final
});

// focus - elemento recebe foco
input.addEventListener("focus", (event) => {
  console.log("Input recebeu foco");
  event.target.style.borderColor = "blue";
  event.target.select(); // Seleciona todo texto
});

// blur - elemento perde foco
input.addEventListener("blur", (event) => {
  console.log("Input perdeu foco");
  event.target.style.borderColor = "";

  // Validação quando sai do campo
  if (!event.target.value) {
    mostrarErro("Campo obrigatório");
  }
});

// Eventos específicos de checkbox/radio
checkbox.addEventListener("change", (event) => {
  console.log("Checkbox:", event.target.checked ? "marcado" : "desmarcado");
});

// Eventos específicos de select
select.addEventListener("change", (event) => {
  console.log("Select selecionado:", event.target.value);
});

select.addEventListener("focus", (event) => {
  console.log("Select recebeu foco");
});

select.addEventListener("blur", (event) => {
  console.log("Select perdeu foco");
});

// invalid - quando validação falha
input.addEventListener("invalid", (event) => {
  console.log("Validação falhou");
  event.preventDefault(); // Previne mensagem padrão
  mostrarErroPersonalizado("Campo inválido");
});

// Validação customizada
function validarFormulario() {
  let valido = true;

  // Validar cada campo
  const campos = formulario.querySelectorAll("[required]");
  campos.forEach((campo) => {
    if (!campo.value.trim()) {
      valido = false;
      campo.style.borderColor = "red";
    }
  });

  return valido;
}

function mostrarErro(mensagem) {
  // Implementar exibição de erro
  console.error("Erro:", mensagem);
}

function limparErro() {
  // Implementar limpeza de erro
}
```

### Eventos de Janela e Documento

```javascript
// Eventos de janela (window)
window.addEventListener("load", (event) => {
  console.log("Página totalmente carregada");
  console.log("Imagens e recursos carregados");

  // Inicializar componentes após carregamento completo
  inicializarApp();
});

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM carregado (sem esperar recursos)");
  console.log("Pode manipular DOM agora");

  // Inicializar mais rápido (não espera imagens)
  inicializarComponentes();
});

window.addEventListener("beforeunload", (event) => {
  console.log("Página está sendo descarregada");

  // Confirmar antes de sair
  if (dadosNaoSalvos) {
    event.preventDefault();
    event.returnValue = ""; // Mensagem personalizada
    return "Tem certeza que deseja sair? Dados não salvos serão perdidos.";
  }
});

window.addEventListener("unload", (event) => {
  console.log("Página descarregada");
  // Útil para limpeza, mas operações síncronas apenas
  localStorage.setItem("ultima-visita", new Date().toISOString());
});

window.addEventListener("resize", (event) => {
  console.log("Janela redimensionada");
  console.log(`Nova largura: ${window.innerWidth}`);
  console.log(`Nova altura: ${window.innerHeight}`);

  // Responsividade
  if (window.innerWidth < 768) {
    ativarModoMobile();
  } else {
    desativarModoMobile();
  }
});

window.addEventListener("scroll", (event) => {
  console.log("Rolando página");
  console.log(`Scroll Y: ${window.scrollY}`);

  // Lazy loading
  const elementos = document.querySelectorAll(".lazy");
  elementos.forEach((elemento) => {
    if (elementoVisivel(elemento)) {
      carregarElemento(elemento);
    }
  });

  // Scroll infinito
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    carregarMaisConteudo();
  }
});

window.addEventListener("hashchange", (event) => {
  console.log("Hash da URL mudou");
  console.log(`Novo hash: ${window.location.hash}`);

  // Navegação por hash (SPA simples)
  const pagina = window.location.hash.substring(1);
  carregarPagina(pagina);
});

window.addEventListener("popstate", (event) => {
  console.log("Navegação no histórico");
  console.log("State:", event.state);

  // Manipular navegação SPA
  if (event.state) {
    restaurarEstado(event.state);
  }
});

// Eventos de visibilidade da página
document.addEventListener("visibilitychange", (event) => {
  console.log("Visibilidade mudou:", document.visibilityState);

  if (document.visibilityState === "hidden") {
    console.log("Página está oculta");
    // Pausar vídeo, animações, etc.
    video.pause();
  } else if (document.visibilityState === "visible") {
    console.log("Página está visível");
    // Retomar conteúdo
    if (!video.paused) {
      video.play();
    }
  }
});

// Eventos de impressão
window.addEventListener("beforeprint", (event) => {
  console.log("Antes de imprimir");
  // Esconder elementos não relevantes para impressão
  document.querySelector(".sidebar").style.display = "none";
});

window.addEventListener("afterprint", (event) => {
  console.log("Depois de imprimir");
  // Restaurar elementos
  document.querySelector(".sidebar").style.display = "";
});

// Eventos de foco da janela
window.addEventListener("focus", (event) => {
  console.log("Janela recebeu foco");
  // Retomar atualizações em tempo real
});

window.addEventListener("blur", (event) => {
  console.log("Janela perdeu foco");
  // Pausar atualizações para economizar recursos
});
```

### Eventos de Mídia e Animação

```javascript
// Eventos para elementos de vídeo/áudio
const video = document.querySelector("video");
const audio = document.querySelector("audio");

// Eventos de mídia
video.addEventListener("loadstart", () => {
  console.log("Começou a carregar mídia");
});

video.addEventListener("loadeddata", () => {
  console.log("Primeiro quadro carregado");
});

video.addEventListener("loadedmetadata", () => {
  console.log("Metadados carregados");
  console.log(`Duração: ${video.duration} segundos`);
});

video.addEventListener("canplay", () => {
  console.log("Pode começar a reproduzir");
});

video.addEventListener("canplaythrough", () => {
  console.log("Pode reproduzir até o fim sem buffer");
});

video.addEventListener("play", () => {
  console.log("Reprodução iniciada");
});

video.addEventListener("playing", () => {
  console.log("Reproduzindo (após pausa/buffer)");
});

video.addEventListener("pause", () => {
  console.log("Reprodução pausada");
});

video.addEventListener("ended", () => {
  console.log("Reprodução terminada");
  // Reproduzir próximo vídeo
});

video.addEventListener("seeking", () => {
  console.log("Buscando posição");
});

video.addEventListener("seeked", () => {
  console.log("Busca concluída");
});

video.addEventListener("waiting", () => {
  console.log("Esperando por dados (buffering)");
});

video.addEventListener("timeupdate", () => {
  console.log("Tempo atualizado:", video.currentTime);
  // Atualizar barra de progresso
  const progresso = (video.currentTime / video.duration) * 100;
  document.querySelector(".progress-bar").style.width = `${progresso}%`;
});

video.addEventListener("volumechange", () => {
  console.log("Volume alterado:", video.volume);
});

video.addEventListener("ratechange", () => {
  console.log("Velocidade alterada:", video.playbackRate);
});

video.addEventListener("error", (event) => {
  console.error("Erro na mídia:", video.error);
});

// Eventos de animação CSS
const elementoAnimado = document.querySelector(".animado");

elementoAnimado.addEventListener("animationstart", (event) => {
  console.log("Animação iniciada:", event.animationName);
});

elementoAnimado.addEventListener("animationend", (event) => {
  console.log("Animação terminada:", event.animationName);
  // Remover classe após animação
  elementoAnimado.classList.remove("animar");
});

elementoAnimado.addEventListener("animationiteration", (event) => {
  console.log("Iteração da animação:", event.iterationCount);
  // Contador de iterações
});

elementoAnimado.addEventListener("animationcancel", (event) => {
  console.log("Animação cancelada");
});

// Eventos de transição CSS
const elementoTransicao = document.querySelector(".transicao");

elementoTransicao.addEventListener("transitionstart", (event) => {
  console.log("Transição iniciada");
});

elementoTransicao.addEventListener("transitionend", (event) => {
  console.log("Transição terminada:", event.propertyName);
  // Ações após transição
  if (event.propertyName === "opacity") {
    console.log("Fade completo");
  }
});

elementoTransicao.addEventListener("transitionrun", (event) => {
  console.log("Transição rodando");
});

elementoTransicao.addEventListener("transitioncancel", (event) => {
  console.log("Transição cancelada");
});

// Controle de animações
function iniciarAnimacao() {
  elementoAnimado.classList.add("animar");
  elementoAnimado.style.animationPlayState = "running";
}

function pausarAnimacao() {
  elementoAnimado.style.animationPlayState = "paused";
}

function cancelarAnimacao() {
  elementoAnimado.style.animation = "none";
}

// Detectando suporte
const suportaAnimacoes = "onanimationend" in document.createElement("div");
const suportaTransicoes = "ontransitionend" in document.createElement("div");

console.log("Suporte a animações:", suportaAnimacoes);
console.log("Suporte a transições:", suportaTransicoes);
```

### Eventos de Drag and Drop

```javascript
// Elemento que pode ser arrastado
const elementoArrastavel = document.querySelector(".arrastavel");

// Zona de soltura
const zonaSoltura = document.querySelector(".zona-soltura");

// Eventos do elemento que é arrastado
elementoArrastavel.setAttribute("draggable", "true");

// dragstart - começa a arrastar
elementoArrastavel.addEventListener("dragstart", (event) => {
  console.log("Começou a arrastar");

  // Definir dados que serão transferidos
  event.dataTransfer.setData("text/plain", elementoArrastavel.id);
  event.dataTransfer.setData("text/html", elementoArrastavel.innerHTML);

  // Definir efeito (copy, move, link)
  event.dataTransfer.effectAllowed = "move";

  // Feedback visual
  event.target.style.opacity = "0.5";

  // Imagem de arrasto personalizada
  const dragImage = document.createElement("div");
  dragImage.textContent = "Arrastando...";
  dragImage.style.background = "white";
  dragImage.style.padding = "10px";
  event.dataTransfer.setDragImage(dragImage, 0, 0);
});

// drag - durante o arrasto
elementoArrastavel.addEventListener("drag", (event) => {
  console.log("Arrastando...");
  console.log("Posição:", event.clientX, event.clientY);
});

// dragend - termina o arrasto
elementoArrastavel.addEventListener("dragend", (event) => {
  console.log("Arrasto terminado");

  // Restaurar aparência
  event.target.style.opacity = "";

  // Verificar se foi solto em zona válida
  if (event.dataTransfer.dropEffect === "none") {
    console.log("Arrasto cancelado ou solto em zona inválida");
  }
});

// Eventos da zona de soltura
// dragover - arrastando sobre a zona
zonaSoltura.addEventListener("dragover", (event) => {
  console.log("Arrastando sobre a zona");

  // Prevenir comportamento padrão (necessário para drop)
  event.preventDefault();

  // Definir efeito de soltura
  event.dataTransfer.dropEffect = "move";

  // Feedback visual
  zonaSoltura.style.backgroundColor = "#e0e0e0";
});

// dragenter - entra na zona
zonaSoltura.addEventListener("dragenter", (event) => {
  console.log("Entrou na zona de soltura");
  zonaSoltura.style.border = "2px dashed #007bff";
});

// dragleave - sai da zona
zonaSoltura.addEventListener("dragleave", (event) => {
  console.log("Saiu da zona de soltura");
  zonaSoltura.style.border = "";
  zonaSoltura.style.backgroundColor = "";
});

// drop - soltou na zona
zonaSoltura.addEventListener("drop", (event) => {
  console.log("Soltou na zona");

  // Prevenir comportamento padrão (abrir como link)
  event.preventDefault();

  // Obter dados transferidos
  const id = event.dataTransfer.getData("text/plain");
  const elemento = document.getElementById(id);

  if (elemento) {
    // Mover elemento para zona de soltura
    zonaSoltura.appendChild(elemento);

    // Feedback
    console.log("Elemento movido com sucesso");
    zonaSoltura.style.backgroundColor = "#d4edda";
  }

  // Limpar estilos
  zonaSoltura.style.border = "";
  setTimeout(() => {
    zonaSoltura.style.backgroundColor = "";
  }, 1000);

  // Limpar dados de transferência
  event.dataTransfer.clearData();
});

// Sistema completo de drag and drop
class DragDropSystem {
  constructor() {
    this.dragSrcEl = null;
    this.init();
  }

  init() {
    const itens = document.querySelectorAll(".item-arrastavel");

    itens.forEach((item) => {
      item.setAttribute("draggable", true);

      item.addEventListener("dragstart", this.handleDragStart.bind(this));
      item.addEventListener("dragover", this.handleDragOver.bind(this));
      item.addEventListener("drop", this.handleDrop.bind(this));
      item.addEventListener("dragenter", this.handleDragEnter.bind(this));
      item.addEventListener("dragleave", this.handleDragLeave.bind(this));
    });
  }

  handleDragStart(event) {
    this.dragSrcEl = event.target;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target.innerHTML);

    event.target.classList.add("arrastando");
  }

  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    return false;
  }

  handleDrop(event) {
    event.preventDefault();

    if (this.dragSrcEl !== event.target) {
      // Trocar conteúdo
      this.dragSrcEl.innerHTML = event.target.innerHTML;
      event.target.innerHTML = event.dataTransfer.getData("text/html");
    }

    event.target.classList.remove("sobre");
    return false;
  }

  handleDragEnter(event) {
    event.target.classList.add("sobre");
  }

  handleDragLeave(event) {
    event.target.classList.remove("sobre");
  }
}

// Exemplo de lista ordenável
const listaOrdenavel = document.querySelector(".lista-ordenavel");

Array.from(listaOrdenavel.children).forEach((item) => {
  item.setAttribute("draggable", true);

  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", item.id);
    setTimeout(() => item.classList.add("esconder"), 0);
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("esconder");
  });
});

listaOrdenavel.addEventListener("dragover", (e) => {
  e.preventDefault();
  const depois = getDragAfterElement(listaOrdenavel, e.clientY);
  const itemArrastado = document.querySelector(".esconder");

  if (depois) {
    listaOrdenavel.insertBefore(itemArrastado, depois);
  } else {
    listaOrdenavel.appendChild(itemArrastado);
  }
});

function getDragAfterElement(container, y) {
  const elementos = [...container.querySelectorAll(".item:not(.esconder)")];

  return elementos.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
```

### Eventos de Toque (Touch)

```javascript
// Eventos de toque para dispositivos móveis
const elementoToque = document.querySelector(".elemento-toque");

// touchstart - dedo toca na tela
elementoToque.addEventListener("touchstart", (event) => {
  console.log("Toque iniciado");

  // Prevenir scroll padrão se necessário
  event.preventDefault();

  // Obter informações do toque
  const toque = event.touches[0];
  console.log("Posição:", toque.clientX, toque.clientY);
  console.log("Identificador:", toque.identifier);

  // Iniciar interação
  elementoToque.style.backgroundColor = "blue";

  // Toque múltiplo
  if (event.touches.length > 1) {
    console.log("Toque múltiplo detectado:", event.touches.length);
  }
});

// touchmove - dedo se move na tela
elementoToque.addEventListener("touchmove", (event) => {
  console.log("Dedo se movendo");

  // Rastrear movimento
  const toque = event.touches[0];
  console.log("Nova posição:", toque.clientX, toque.clientY);

  // Mover elemento com dedo
  elementoToque.style.left = toque.clientX + "px";
  elementoToque.style.top = toque.clientY + "px";

  // Velocidade do movimento (para swipe)
  const velocidadeX = toque.clientX - this.ultimaPosicaoX;
  this.ultimaPosicaoX = toque.clientX;

  if (Math.abs(velocidadeX) > 10) {
    console.log("Movimento rápido detectado");
  }
});

// touchend - dedo sai da tela
elementoToque.addEventListener("touchend", (event) => {
  console.log("Toque terminado");

  // Restaurar aparência
  elementoToque.style.backgroundColor = "";

  // Diferenciar toque simples de clique longo
  const tempoToque = Date.now() - this.tempoInicio;

  if (tempoToque < 500) {
    console.log("Toque rápido (equivalente a click)");
    // Disparar evento click simulado
    elementoToque.click();
  } else {
    console.log("Toque longo");
    mostrarMenuContexto();
  }

  // Verificar se foi um swipe
  if (this.distanciaSwipe > 50) {
    console.log("Swipe detectado");
    if (this.direcaoSwipe === "direita") {
      avancarSlide();
    } else if (this.direcaoSwipe === "esquerda") {
      voltarSlide();
    }
  }
});

// touchcancel - toque interrompido (ex: chamada recebida)
elementoToque.addEventListener("touchcancel", (event) => {
  console.log("Toque cancelado");
  // Limpar estado
});

// Sistema de gestos completo
class TouchGestureHandler {
  constructor(element) {
    this.element = element;
    this.startX = 0;
    this.startY = 0;
    this.startTime = 0;

    this.init();
  }

  init() {
    this.element.addEventListener(
      "touchstart",
      this.handleTouchStart.bind(this)
    );
    this.element.addEventListener("touchmove", this.handleTouchMove.bind(this));
    this.element.addEventListener("touchend", this.handleTouchEnd.bind(this));
  }

  handleTouchStart(event) {
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
    this.startTime = Date.now();

    this.element.classList.add("ativo");
  }

  handleTouchMove(event) {
    event.preventDefault();

    const touch = event.touches[0];
    const deltaX = touch.clientX - this.startX;
    const deltaY = touch.clientY - this.startY;

    // Detectar direção
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal
      this.element.style.transform = `translateX(${deltaX}px)`;
    } else {
      // Vertical
      this.element.style.transform = `translateY(${deltaY}px)`;
    }
  }

  handleTouchEnd(event) {
    const endTime = Date.now();
    const duration = endTime - this.startTime;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - this.startX;
    const deltaY = touch.clientY - this.startY;

    // Determinar tipo de gesto
    if (duration < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
      this.onTap();
    } else if (duration > 500) {
      this.onLongPress();
    } else if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.onSwipeRight();
      } else {
        this.onSwipeLeft();
      }
    } else if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        this.onSwipeDown();
      } else {
        this.onSwipeUp();
      }
    }

    // Resetar transformação
    this.element.style.transform = "";
    this.element.classList.remove("ativo");
  }

  onTap() {
    console.log("Tap detectado");
    this.element.dispatchEvent(new CustomEvent("gesture-tap"));
  }

  onLongPress() {
    console.log("Long press detectado");
    this.element.dispatchEvent(new CustomEvent("gesture-longpress"));
  }

  onSwipeRight() {
    console.log("Swipe right detectado");
    this.element.dispatchEvent(new CustomEvent("gesture-swiperight"));
  }

  onSwipeLeft() {
    console.log("Swipe left detectado");
    this.element.dispatchEvent(new CustomEvent("gesture-swipeleft"));
  }

  onSwipeUp() {
    console.log("Swipe up detectado");
    this.element.dispatchEvent(new CustomEvent("gesture-swipeup"));
  }

  onSwipeDown() {
    console.log("Swipe down detectado");
    this.element.dispatchEvent(new CustomEvent("gesture-swipedown"));
  }
}

// Detectar suporte a touch
const suportaTouch =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

console.log("Suporte a touch:", suportaTouch);

// Eventos de pointer (unifica mouse e touch)
elementoToque.addEventListener("pointerdown", (event) => {
  console.log("Pointer down:", event.pointerType);
  // pointerType: mouse, pen, touch
});

elementoToque.addEventListener("pointermove", (event) => {
  console.log("Pointer move");
});

elementoToque.addEventListener("pointerup", (event) => {
  console.log("Pointer up");
});
```

### Eventos de Rede e Recursos

```javascript
// Eventos de carregamento de recursos
const imagem = document.querySelector("img");
const script = document.querySelector("script");
const link = document.querySelector('link[rel="stylesheet"]');

// Eventos de imagem
imagem.addEventListener("load", (event) => {
  console.log("Imagem carregada com sucesso");
  console.log("Dimensões:", imagem.naturalWidth, "x", imagem.naturalHeight);

  // Agora pode usar a imagem
  document.querySelector(".placeholder").style.display = "none";
  imagem.style.opacity = 1;
});

imagem.addEventListener("error", (event) => {
  console.error("Erro ao carregar imagem");

  // Carregar imagem alternativa
  imagem.src = "imagem-alternativa.jpg";

  // Ou mostrar placeholder
  imagem.style.display = "none";
  document.querySelector(".placeholder").textContent = "Imagem não disponível";
});

imagem.addEventListener("abort", (event) => {
  console.log("Carregamento da imagem abortado");
});

// Eventos de script
script.addEventListener("load", (event) => {
  console.log("Script carregado");
  // Inicializar funcionalidades do script
});

script.addEventListener("error", (event) => {
  console.error("Erro ao carregar script");
  // Carregar fallback
  const fallback = document.createElement("script");
  fallback.src = "script-fallback.js";
  document.head.appendChild(fallback);
});

// Eventos de CSS
link.addEventListener("load", (event) => {
  console.log("CSS carregado");
  // Agora pode manipular estilos
  document.body.classList.add("css-carregado");
});

link.addEventListener("error", (event) => {
  console.error("Erro ao carregar CSS");
  // Aplicar estilos alternativos
  document.body.classList.add("css-fallback");
});

// Eventos de iframe
const iframe = document.querySelector("iframe");

iframe.addEventListener("load", (event) => {
  console.log("Iframe carregado");

  // Acessar conteúdo do iframe
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  console.log("Título do iframe:", iframeDoc.title);

  // Comunicar com iframe
  iframe.contentWindow.postMessage({ tipo: "ready" }, "*");
});

iframe.addEventListener("error", (event) => {
  console.error("Erro ao carregar iframe");
});

// Eventos de fonte
document.fonts.ready.then(() => {
  console.log("Fontes carregadas");
  document.body.classList.add("fontes-prontas");

  // Medir texto com fonte correta
  const largura = document.querySelector(".texto-medido").offsetWidth;
  console.log("Largura do texto com fonte:", largura);
});

// Eventos de recurso geral
window.addEventListener("load", () => {
  // Todos recursos carregados
  const recursos = performance.getEntriesByType("resource");

  recursos.forEach((recurso) => {
    console.log(`${recurso.name}: ${recurso.duration.toFixed(2)}ms`);

    if (recurso.duration > 1000) {
      console.warn(`Recurso lento: ${recurso.name}`);
    }
  });
});

// Monitorar carregamento de recursos dinâmicos
function carregarRecursoDinamico(url, tipo) {
  return new Promise((resolve, reject) => {
    let elemento;

    switch (tipo) {
      case "script":
        elemento = document.createElement("script");
        elemento.src = url;
        break;
      case "css":
        elemento = document.createElement("link");
        elemento.rel = "stylesheet";
        elemento.href = url;
        break;
      case "img":
        elemento = new Image();
        elemento.src = url;
        break;
    }

    elemento.addEventListener("load", () => resolve(elemento));
    elemento.addEventListener("error", () =>
      reject(new Error(`Falha ao carregar ${url}`))
    );

    if (tipo === "css") {
      document.head.appendChild(elemento);
    } else if (tipo === "script") {
      document.body.appendChild(elemento);
    }
    // Imagens começam a carregar quando src é definido
  });
}

// Lazy loading de imagens
const imagensLazy = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      observer.unobserve(img);

      img.addEventListener("load", () => {
        img.classList.add("carregada");
      });
    }
  });
});

imagensLazy.forEach((img) => observer.observe(img));

// Pré-carregamento de recursos
const preload = document.createElement("link");
preload.rel = "preload";
preload.href = "recurso-importante.js";
preload.as = "script";
document.head.appendChild(preload);

// Verificar quando pré-carregamento termina
preload.addEventListener("load", () => {
  console.log("Recurso pré-carregado pronto");
});
```

## Event Bubbling e Capturing

### Teoria e Conceitos

```javascript
// Event Bubbling e Capturing são fases da propagação de eventos

// Exemplo de estrutura HTML:
// <div class="avo">
//   <div class="pai">
//     <div class="filho">Clique-me</div>
//   </div>
// </div>

const avo = document.querySelector(".avo");
const pai = document.querySelector(".pai");
const filho = document.querySelector(".filho");

// As 3 fases do fluxo de eventos:
// 1. Capturing Phase (descendo do window até o target)
// 2. Target Phase (no elemento target)
// 3. Bubbling Phase (subindo do target até o window)

// Por padrão, addEventListener usa bubbling phase (capture: false)

// Exemplo completo:
filho.addEventListener("click", (event) => {
  console.log("Filho - target phase");
  console.log("target:", event.target); // sempre o filho
  console.log("currentTarget:", event.currentTarget); // filho
  console.log("eventPhase:", event.eventPhase); // 2 (AT_TARGET)
});

pai.addEventListener(
  "click",
  (event) => {
    console.log("Pai - bubbling phase");
    console.log("target:", event.target); // filho (quem originou)
    console.log("currentTarget:", event.currentTarget); // pai
    console.log("eventPhase:", event.eventPhase); // 3 (BUBBLING_PHASE)
  },
  false
); // false = bubbling (padrão)

avo.addEventListener(
  "click",
  (event) => {
    console.log("Avô - bubbling phase");
    console.log("target:", event.target); // filho
    console.log("currentTarget:", event.currentTarget); // avo
    console.log("eventPhase:", event.eventPhase); // 3
  },
  false
);

// Com capturing (true):
pai.addEventListener(
  "click",
  (event) => {
    console.log("Pai - capturing phase");
    console.log("eventPhase:", event.eventPhase); // 1 (CAPTURING_PHASE)
  },
  true
); // true = capturing

avo.addEventListener(
  "click",
  (event) => {
    console.log("Avô - capturing phase");
    console.log("eventPhase:", event.eventPhase); // 1
  },
  true
);

// Ordem de execução ao clicar no filho:
// 1. Avô - capturing phase (porque tem capture: true)
// 2. Pai - capturing phase (porque tem capture: true)
// 3. Filho - target phase (sempre executa)
// 4. Pai - bubbling phase (porque tem capture: false)
// 5. Avô - bubbling phase (porque tem capture: false)

// Diagrama visual do fluxo:
// WINDOW (capturing)      ↑ (bubbling) WINDOW
// ↓                           ↗
// DOCUMENT (capturing)    ↑ (bubbling) DOCUMENT
// ↓                           ↗
// HTML (capturing)        ↑ (bubbling) HTML
// ↓                           ↗
// BODY (capturing)        ↑ (bubbling) BODY
// ↓                           ↗
// AVÔ (capturing)         ↑ (bubbling) AVÔ
// ↓                           ↗
// PAI (capturing)         ↑ (bubbling) PAI
// ↓                           ↗
// FILHO (target phase)    FILHO
```

### Controlando a Propagação

```javascript
// stopPropagation() - para propagação em uma fase
filho.addEventListener("click", (event) => {
  console.log("Filho - stopPropagation");
  event.stopPropagation(); // Para propagação aqui

  // Resultado:
  // - Eventos na mesma fase ainda executam
  // - Eventos em outras fases NÃO executam
});

// stopImmediatePropagation() - para tudo
filho.addEventListener("click", (event) => {
  console.log("Filho - listener 1");
  event.stopImmediatePropagation(); // Para tudo
});

filho.addEventListener("click", (event) => {
  console.log("Filho - listener 2"); // NÃO executa
});

// preventDefault() vs stopPropagation()
link.addEventListener("click", (event) => {
  event.preventDefault(); // Previne navegação
  event.stopPropagation(); // Previne bubbling
  console.log("Link clicado, mas não navega nem propaga");
});

// Exemplo prático: modal
document.querySelector(".modal-overlay").addEventListener("click", (event) => {
  // Fechar modal ao clicar no overlay
  event.stopPropagation(); // Impede que clique chegue ao modal
  fecharModal();
});

document.querySelector(".modal-content").addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que clique no conteúdo feche modal
  // Apenas processa clique no conteúdo
});

// Cancelando eventos em capturing phase
document.addEventListener(
  "click",
  (event) => {
    if (event.target.matches(".nao-clicavel")) {
      event.stopPropagation(); // Não funciona em capturing
      event.preventDefault(); // Não funciona para todos eventos
      console.log("Elemento não clicável");
    }
  },
  true
); // Capturing phase

// Melhor abordagem:
document.addEventListener(
  "click",
  (event) => {
    if (event.target.matches(".nao-clicavel")) {
      event.stopImmediatePropagation();
      console.log("Elemento bloqueado");
    }
  },
  true
);

// Eventos que não bubble
filho.addEventListener("mouseenter", (event) => {
  console.log("mouseenter - não bubble");
  // Este evento não dispara nos pais
});

filho.addEventListener("mouseover", (event) => {
  console.log("mouseover - bubble");
  // Este evento dispara nos pais
});

// Verificando fase atual
elemento.addEventListener("click", (event) => {
  switch (event.eventPhase) {
    case Event.CAPTURING_PHASE: // 1
      console.log("Capturing phase");
      break;
    case Event.AT_TARGET: // 2
      console.log("Target phase");
      break;
    case Event.BUBBLING_PHASE: // 3
      console.log("Bubbling phase");
      break;
  }
});

// Cancelando bubbling condicionalmente
document.querySelector(".menu").addEventListener("click", (event) => {
  // Se clique foi em item do menu, processa
  if (event.target.matches(".menu-item")) {
    processarItemMenu(event.target);
  } else {
    // Se clique foi em outra parte do menu, para bubbling
    event.stopPropagation();
  }
});
```

### Exemplos Práticos

```javascript
// Exemplo 1: Menu dropdown
class DropdownMenu {
  constructor(selector) {
    this.menu = document.querySelector(selector);
    this.toggle = this.menu.querySelector(".dropdown-toggle");
    this.content = this.menu.querySelector(".dropdown-content");
    this.init();
  }

  init() {
    // Toggle do menu
    this.toggle.addEventListener("click", (event) => {
      event.stopPropagation(); // Impede que clique chegue ao document
      this.toggleMenu();
    });

    // Fechar ao clicar fora
    document.addEventListener("click", () => {
      this.closeMenu();
    });

    // Impedir que clique no conteúdo feche menu
    this.content.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  toggleMenu() {
    this.content.classList.toggle("show");
  }

  closeMenu() {
    this.content.classList.remove("show");
  }
}

// Exemplo 2: Sistema de abas (tabs)
class TabSystem {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tabs = this.container.querySelectorAll(".tab");
    this.panels = this.container.querySelectorAll(".tab-panel");
    this.init();
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        this.activateTab(tab);
      });
    });

    // Ativar primeira aba por padrão
    if (this.tabs.length > 0) {
      this.activateTab(this.tabs[0]);
    }
  }

  activateTab(selectedTab) {
    // Remover classe ativa de todas abas
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    this.panels.forEach((panel) => panel.classList.remove("active"));

    // Adicionar classe ativa à aba selecionada
    selectedTab.classList.add("active");

    // Mostrar painel correspondente
    const panelId =
      selectedTab.getAttribute("href") || selectedTab.dataset.target;
    const panel = document.querySelector(panelId);

    if (panel) {
      panel.classList.add("active");
    }
  }
}

// Exemplo 3: Accordion
class Accordion {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.items = this.container.querySelectorAll(".accordion-item");
    this.init();
  }

  init() {
    this.items.forEach((item) => {
      const header = item.querySelector(".accordion-header");

      header.addEventListener("click", () => {
        this.toggleItem(item);
      });

      // Impedir que clique no conteúdo feche
      const content = item.querySelector(".accordion-content");
      content.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  }

  toggleItem(item) {
    const isActive = item.classList.contains("active");

    // Fechar todos os itens
    this.items.forEach((i) => i.classList.remove("active"));

    // Se não estava ativo, abrir
    if (!isActive) {
      item.classList.add("active");
    }
  }
}

// Exemplo 4: Tooltip com bubbling controlado
class Tooltip {
  constructor() {
    this.tooltip = null;
    this.init();
  }

  init() {
    // Delegar eventos para elementos com data-tooltip
    document.addEventListener("mouseover", (event) => {
      const target = event.target.closest("[data-tooltip]");
      if (target) {
        this.showTooltip(target, target.dataset.tooltip);
      }
    });

    document.addEventListener("mouseout", (event) => {
      const target = event.target.closest("[data-tooltip]");
      if (target && !event.relatedTarget?.closest(".tooltip")) {
        this.hideTooltip();
      }
    });

    // Impedir que mouseover no tooltip o esconda
    document.addEventListener("mouseover", (event) => {
      if (event.target.closest(".tooltip")) {
        event.stopPropagation();
      }
    });
  }

  showTooltip(element, text) {
    this.hideTooltip();

    this.tooltip = document.createElement("div");
    this.tooltip.className = "tooltip";
    this.tooltip.textContent = text;

    const rect = element.getBoundingClientRect();
    this.tooltip.style.position = "fixed";
    this.tooltip.style.top = `${rect.top - 30}px`;
    this.tooltip.style.left = `${rect.left + rect.width / 2}px`;

    document.body.appendChild(this.tooltip);
  }

  hideTooltip() {
    if (this.tooltip) {
      this.tooltip.remove();
      this.tooltip = null;
    }
  }
}

// Exemplo 5: Preview de imagem com overlay
class ImagePreview {
  constructor() {
    this.preview = null;
    this.init();
  }

  init() {
    // Delegar clique em miniaturas
    document.addEventListener("click", (event) => {
      const img = event.target.closest(".thumbnail");
      if (img) {
        event.preventDefault();
        event.stopPropagation(); // Impede outros handlers
        this.showPreview(img.src, img.alt);
      }
    });

    // Fechar preview ao clicar fora
    document.addEventListener("click", (event) => {
      if (this.preview && !event.target.closest(".preview-container")) {
        this.hidePreview();
      }
    });

    // Fechar com ESC
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.preview) {
        this.hidePreview();
      }
    });
  }

  showPreview(src, alt) {
    this.hidePreview();

    this.preview = document.createElement("div");
    this.preview.className = "preview-overlay";
    this.preview.innerHTML = `
            <div class="preview-container" onclick="event.stopPropagation()">
                <img src="${src}" alt="${alt}">
                <button class="close-preview">&times;</button>
            </div>
        `;

    this.preview
      .querySelector(".close-preview")
      .addEventListener("click", () => {
        this.hidePreview();
      });

    document.body.appendChild(this.preview);
  }

  hidePreview() {
    if (this.preview) {
      this.preview.remove();
      this.preview = null;
    }
  }
}
```

## Event Delegation

### Fundamentos da Delegação

```javascript
// Event Delegation: usar um único listener no pai para múltiplos filhos
// Útil para elementos dinâmicos ou grandes listas

// Exemplo SEM delegação (problema):
const lista = document.querySelector(".lista");
const itens = lista.querySelectorAll(".item");

// Adicionar listener a cada item
itens.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Item clicado:", item.textContent);
  });
});

// Problemas:
// 1. Performance: muitos listeners
// 2. Elementos novos não têm listeners
// 3. Mais consumo de memória

// Exemplo COM delegação (solução):
lista.addEventListener("click", (event) => {
  // Verificar se o clique foi em um item
  if (event.target.classList.contains("item")) {
    console.log("Item clicado:", event.target.textContent);
  }
});

// Melhor ainda: usar closest para elementos aninhados
lista.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (item) {
    console.log("Item encontrado via closest:", item.textContent);
  }
});

// Vantagens da delegação:
// 1. Um único listener (melhor performance)
// 2. Funciona com elementos adicionados dinamicamente
// 3. Menos consumo de memória
// 4. Código mais limpo e manutenível

// Padrão básico de delegação:
parent.addEventListener("event", (event) => {
  if (event.target.matches(selector)) {
    // Código para o elemento alvo
  }
});

// Ou com closest:
parent.addEventListener("event", (event) => {
  const target = event.target.closest(selector);
  if (target) {
    // Código para o elemento encontrado
  }
});
```

### Implementações Práticas

```javascript
// Exemplo 1: Lista de tarefas dinâmica
class TodoList {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.init();
  }

  init() {
    // Delegar todos eventos da lista
    this.container.addEventListener("click", this.handleClick.bind(this));
    this.container.addEventListener("change", this.handleChange.bind(this));
    this.container.addEventListener(
      "dblclick",
      this.handleDoubleClick.bind(this)
    );
  }

  handleClick(event) {
    // Botão de deletar
    const deleteBtn = event.target.closest(".delete-btn");
    if (deleteBtn) {
      event.stopPropagation();
      this.deleteItem(deleteBtn.closest(".todo-item"));
      return;
    }

    // Botão de editar
    const editBtn = event.target.closest(".edit-btn");
    if (editBtn) {
      event.stopPropagation();
      this.editItem(editBtn.closest(".todo-item"));
      return;
    }

    // Toggle de completado
    const todoItem = event.target.closest(".todo-item");
    if (todoItem && !event.target.matches("button, input")) {
      this.toggleComplete(todoItem);
    }
  }

  handleChange(event) {
    // Checkbox de tarefa
    if (event.target.matches(".todo-checkbox")) {
      const todoItem = event.target.closest(".todo-item");
      this.updateCompletion(todoItem, event.target.checked);
    }
  }

  handleDoubleClick(event) {
    // Editar texto ao dar duplo clique
    const todoText = event.target.closest(".todo-text");
    if (todoText) {
      this.enableEditing(todoText);
    }
  }

  deleteItem(item) {
    item.remove();
  }

  editItem(item) {
    // Lógica de edição
    console.log("Editando:", item);
  }

  toggleComplete(item) {
    item.classList.toggle("completed");
  }

  updateCompletion(item, completed) {
    item.classList.toggle("completed", completed);
  }

  enableEditing(element) {
    // Converter para input de edição
    const input = document.createElement("input");
    input.type = "text";
    input.value = element.textContent;
    input.className = "todo-edit";

    element.replaceWith(input);
    input.focus();

    // Salvar ao perder foco
    input.addEventListener("blur", () => {
      this.saveEdit(input);
    });

    // Salvar com Enter
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.saveEdit(input);
      }
    });
  }

  saveEdit(input) {
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = input.value;
    input.replaceWith(span);
  }

  addItem(text) {
    const item = document.createElement("div");
    item.className = "todo-item";
    item.innerHTML = `
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">${text}</span>
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">X</button>
        `;
    this.container.appendChild(item);
    // Não precisa adicionar listeners - já estão delegados
  }
}

// Exemplo 2: Sistema de avaliação com estrelas
class StarRating {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.init();
  }

  init() {
    // Delegar eventos de hover e clique
    this.container.addEventListener("mouseover", this.handleHover.bind(this));
    this.container.addEventListener("mouseleave", this.handleLeave.bind(this));
    this.container.addEventListener("click", this.handleClick.bind(this));
  }

  handleHover(event) {
    const star = event.target.closest(".star");
    if (star) {
      const rating = parseInt(star.dataset.rating);
      this.highlightStars(rating);
    }
  }

  handleLeave() {
    const currentRating = this.container.dataset.currentRating || 0;
    this.highlightStars(currentRating);
  }

  handleClick(event) {
    const star = event.target.closest(".star");
    if (star) {
      const rating = parseInt(star.dataset.rating);
      this.setRating(rating);
    }
  }

  highlightStars(rating) {
    const stars = this.container.querySelectorAll(".star");
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }

  setRating(rating) {
    this.container.dataset.currentRating = rating;
    this.highlightStars(rating);

    // Disparar evento customizado
    this.container.dispatchEvent(
      new CustomEvent("rating-change", {
        detail: { rating },
      })
    );
  }
}

// Exemplo 3: Data tables com ações
class DataTable {
  constructor(tableSelector) {
    this.table = document.querySelector(tableSelector);
    this.init();
  }

  init() {
    // Delegar eventos da tabela
    this.table.addEventListener("click", this.handleClick.bind(this));
    this.table.addEventListener("dblclick", this.handleDoubleClick.bind(this));
    this.table.addEventListener("change", this.handleChange.bind(this));
  }

  handleClick(event) {
    // Ordenação ao clicar no cabeçalho
    const header = event.target.closest("th[data-sort]");
    if (header) {
      this.sortTable(header);
      return;
    }

    // Botões de ação na linha
    const actionBtn = event.target.closest(".action-btn");
    if (actionBtn) {
      const row = actionBtn.closest("tr");
      const action = actionBtn.dataset.action;
      this.handleRowAction(row, action);
      return;
    }

    // Seleção de linha
    const row = event.target.closest("tbody tr");
    if (row && event.target.matches("td")) {
      this.toggleRowSelection(row);
    }
  }

  handleDoubleClick(event) {
    // Edição ao dar duplo clique na célula
    const cell = event.target.closest("td[data-editable]");
    if (cell) {
      this.enableCellEditing(cell);
    }
  }

  handleChange(event) {
    // Checkbox de seleção
    if (event.target.matches('input[type="checkbox"]')) {
      const row = event.target.closest("tr");
      this.updateRowSelection(row, event.target.checked);
    }
  }

  sortTable(header) {
    const column = header.dataset.sort;
    const direction = header.dataset.sortDirection === "asc" ? "desc" : "asc";

    // Ordenar dados
    const rows = Array.from(this.table.querySelectorAll("tbody tr"));
    rows.sort((a, b) => {
      const aValue = a.querySelector(`td[data-column="${column}"]`).textContent;
      const bValue = b.querySelector(`td[data-column="${column}"]`).textContent;

      if (direction === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    // Reordenar DOM
    const tbody = this.table.querySelector("tbody");
    rows.forEach((row) => tbody.appendChild(row));

    // Atualizar indicador de ordenação
    this.table.querySelectorAll("th").forEach((th) => {
      delete th.dataset.sortDirection;
    });
    header.dataset.sortDirection = direction;
  }

  handleRowAction(row, action) {
    switch (action) {
      case "edit":
        this.editRow(row);
        break;
      case "delete":
        this.deleteRow(row);
        break;
      case "view":
        this.viewRow(row);
        break;
    }
  }

  toggleRowSelection(row) {
    row.classList.toggle("selected");
  }

  updateRowSelection(row, selected) {
    row.classList.toggle("selected", selected);
  }

  enableCellEditing(cell) {
    const currentValue = cell.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentValue;
    input.className = "cell-edit";

    cell.textContent = "";
    cell.appendChild(input);
    input.focus();

    input.addEventListener("blur", () => {
      this.saveCellEdit(cell, input);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.saveCellEdit(cell, input);
      }
    });
  }

  saveCellEdit(cell, input) {
    cell.textContent = input.value;

    // Disparar evento de atualização
    const row = cell.closest("tr");
    const column = cell.dataset.column;
    this.table.dispatchEvent(
      new CustomEvent("cell-update", {
        detail: {
          row: row.dataset.id,
          column: column,
          value: input.value,
        },
      })
    );
  }
}

// Exemplo 4: Upload de arquivos com preview
class FileUpload {
  constructor(dropZoneSelector) {
    this.dropZone = document.querySelector(dropZoneSelector);
    this.files = [];
    this.init();
  }

  init() {
    // Delegar eventos da zona de upload
    this.dropZone.addEventListener("click", this.handleClick.bind(this));
    this.dropZone.addEventListener("dragover", this.handleDragOver.bind(this));
    this.dropZone.addEventListener("drop", this.handleDrop.bind(this));
    this.dropZone.addEventListener("change", this.handleChange.bind(this));

    // Delegar eventos dos previews (elementos dinâmicos)
    this.dropZone.addEventListener("click", this.handlePreviewClick.bind(this));
  }

  handleClick(event) {
    // Clicar na zona abre o seletor de arquivos
    if (event.target === this.dropZone) {
      this.triggerFileInput();
    }
  }

  handleDragOver(event) {
    event.preventDefault();
    this.dropZone.classList.add("dragover");
  }

  handleDrop(event) {
    event.preventDefault();
    this.dropZone.classList.remove("dragover");

    const files = Array.from(event.dataTransfer.files);
    this.processFiles(files);
  }

  handleChange(event) {
    if (event.target.matches('input[type="file"]')) {
      const files = Array.from(event.target.files);
      this.processFiles(files);
      event.target.value = ""; // Resetar input
    }
  }

  handlePreviewClick(event) {
    // Botão de remover arquivo
    const removeBtn = event.target.closest(".remove-file");
    if (removeBtn) {
      const fileItem = removeBtn.closest(".file-item");
      this.removeFile(fileItem.dataset.fileId);
      return;
    }

    // Preview de imagem (expandir)
    const imgPreview = event.target.closest(".img-preview");
    if (imgPreview) {
      this.expandImage(imgPreview.src);
    }
  }

  triggerFileInput() {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = "image/*,.pdf,.doc,.docx";
    input.style.display = "none";

    input.addEventListener("change", (e) => {
      this.handleChange(e);
      input.remove();
    });

    document.body.appendChild(input);
    input.click();
  }

  processFiles(files) {
    files.forEach((file) => {
      if (this.validateFile(file)) {
        this.addFile(file);
      }
    });
  }

  validateFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
    ];

    if (file.size > maxSize) {
      alert(`Arquivo muito grande: ${file.name}`);
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      alert(`Tipo de arquivo não permitido: ${file.name}`);
      return false;
    }

    return true;
  }

  addFile(file) {
    const fileId = Date.now();
    this.files.push({ id: fileId, file });

    const fileItem = document.createElement("div");
    fileItem.className = "file-item";
    fileItem.dataset.fileId = fileId;

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        fileItem.innerHTML = `
                    <div class="file-preview">
                        <img src="${e.target.result}" class="img-preview">
                        <span class="file-name">${file.name}</span>
                        <button class="remove-file">×</button>
                    </div>
                `;
      };
      reader.readAsDataURL(file);
    } else {
      fileItem.innerHTML = `
                <div class="file-preview">
                    <div class="file-icon">📄</div>
                    <span class="file-name">${file.name}</span>
                    <button class="remove-file">×</button>
                </div>
            `;
    }

    this.dropZone.appendChild(fileItem);
  }

  removeFile(fileId) {
    this.files = this.files.filter((f) => f.id !== parseInt(fileId));
    const fileItem = this.dropZone.querySelector(`[data-file-id="${fileId}"]`);
    if (fileItem) {
      fileItem.remove();
    }
  }

  expandImage(src) {
    const overlay = document.createElement("div");
    overlay.className = "image-overlay";
    overlay.innerHTML = `
            <div class="image-modal">
                <img src="${src}" alt="Preview">
                <button class="close-modal">&times;</button>
            </div>
        `;

    overlay.querySelector(".close-modal").addEventListener("click", () => {
      overlay.remove();
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    document.body.appendChild(overlay);
  }
}
```

### Otimização com Event Delegation

```javascript
// Exemplo 5: Sistema de notificações
class NotificationSystem {
  constructor() {
    this.notifications = [];
    this.init();
  }

  init() {
    // Um único listener para todo documento
    document.addEventListener("click", this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(event) {
    // Fechar notificação ao clicar no botão X
    const closeBtn = event.target.closest(".notification-close");
    if (closeBtn) {
      const notification = closeBtn.closest(".notification");
      this.removeNotification(notification.dataset.id);
      return;
    }

    // Fechar todas notificações
    const closeAllBtn = event.target.closest(".close-all-notifications");
    if (closeAllBtn) {
      this.removeAllNotifications();
      return;
    }

    // Clique na notificação (exceto nos botões)
    const notification = event.target.closest(".notification");
    if (notification && !event.target.matches("button")) {
      this.handleNotificationClick(notification.dataset.id);
    }
  }

  showNotification(message, type = "info", options = {}) {
    const id = Date.now();
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.dataset.id = id;
    notification.innerHTML = `
            <div class="notification-content">
                ${message}
            </div>
            <button class="notification-close">&times;</button>
        `;

    document.body.appendChild(notification);

    this.notifications.push({ id, element: notification });

    // Auto-remover após timeout
    if (options.autoClose !== false) {
      const timeout = options.timeout || 5000;
      setTimeout(() => {
        this.removeNotification(id);
      }, timeout);
    }

    return id;
  }

  removeNotification(id) {
    const index = this.notifications.findIndex((n) => n.id === id);
    if (index !== -1) {
      this.notifications[index].element.remove();
      this.notifications.splice(index, 1);
    }
  }

  removeAllNotifications() {
    this.notifications.forEach((notification) => {
      notification.element.remove();
    });
    this.notifications = [];
  }

  handleNotificationClick(id) {
    const notification = this.notifications.find((n) => n.id === id);
    if (notification) {
      // Disparar evento customizado
      notification.element.dispatchEvent(
        new CustomEvent("notification-click", {
          detail: { id },
        })
      );
    }
  }
}

// Exemplo 6: Gerenciador de modais
class ModalManager {
  constructor() {
    this.modals = [];
    this.init();
  }

  init() {
    // Delegar eventos para todo documento
    document.addEventListener("click", this.handleDocumentClick.bind(this));
    document.addEventListener("keydown", this.handleDocumentKeydown.bind(this));
  }

  handleDocumentClick(event) {
    // Botão para abrir modal
    const openBtn = event.target.closest("[data-modal-open]");
    if (openBtn) {
      const modalId = openBtn.dataset.modalOpen;
      this.openModal(modalId);
      return;
    }

    // Botão para fechar modal
    const closeBtn = event.target.closest("[data-modal-close]");
    if (closeBtn) {
      const modal = closeBtn.closest(".modal");
      this.closeModal(modal.id);
      return;
    }

    // Fechar modal ao clicar no overlay
    const modalOverlay = event.target.closest(".modal-overlay");
    if (modalOverlay && event.target === modalOverlay) {
      const modal = modalOverlay.querySelector(".modal");
      this.closeModal(modal.id);
    }
  }

  handleDocumentKeydown(event) {
    // Fechar modal com ESC
    if (event.key === "Escape") {
      const openModal = this.modals.find(
        (modal) => modal.element.style.display === "block"
      );
      if (openModal) {
        this.closeModal(openModal.id);
      }
    }
  }

  openModal(id) {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      modalElement.style.display = "block";
      document.body.style.overflow = "hidden"; // Previne scroll

      // Focar no primeiro elemento interativo
      const focusable = modalElement.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) {
        focusable.focus();
      }

      this.modals.push({
        id,
        element: modalElement,
      });
    }
  }

  closeModal(id) {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      modalElement.style.display = "none";
      document.body.style.overflow = "";

      const index = this.modals.findIndex((modal) => modal.id === id);
      if (index !== -1) {
        this.modals.splice(index, 1);
      }
    }
  }
}

// Exemplo 7: Formulário dinâmico com validação
class DynamicForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.init();
  }

  init() {
    // Delegar todos eventos do formulário
    this.form.addEventListener("input", this.handleInput.bind(this));
    this.form.addEventListener("change", this.handleChange.bind(this));
    this.form.addEventListener("focus", this.handleFocus.bind(this), true); // Capturing
    this.form.addEventListener("blur", this.handleBlur.bind(this), true); // Capturing
    this.form.addEventListener("click", this.handleClick.bind(this));
  }

  handleInput(event) {
    const input = event.target;

    // Validação em tempo real
    if (input.dataset.validate) {
      this.validateField(input);
    }

    // Atualizar contador de caracteres
    if (input.dataset.maxlength) {
      this.updateCharCounter(input);
    }

    // Auto-expandir textarea
    if (input.tagName === "TEXTAREA") {
      this.autoExpandTextarea(input);
    }
  }

  handleChange(event) {
    const input = event.target;

    // Validação ao mudar (para selects, radios, checkboxes)
    if (input.dataset.validate) {
      this.validateField(input);
    }

    // Mostrar/ocultar campos dependentes
    if (input.dataset.toggle) {
      this.toggleDependentFields(input);
    }
  }

  handleFocus(event) {
    const input = event.target;
    input.classList.add("focused");

    // Mostrar dica de ajuda
    if (input.dataset.help) {
      this.showHelp(input);
    }
  }

  handleBlur(event) {
    const input = event.target;
    input.classList.remove("focused");

    // Validação final ao sair do campo
    if (input.dataset.validate) {
      this.validateField(input, true);
    }

    // Esconder dica de ajuda
    if (input.dataset.help) {
      this.hideHelp(input);
    }
  }

  handleClick(event) {
    // Botão de mostrar/esconder senha
    const toggleBtn = event.target.closest(".toggle-password");
    if (toggleBtn) {
      const input = toggleBtn.previousElementSibling;
      this.togglePasswordVisibility(input, toggleBtn);
      return;
    }

    // Botão de limpar campo
    const clearBtn = event.target.closest(".clear-field");
    if (clearBtn) {
      const input = clearBtn.previousElementSibling;
      this.clearField(input);
      return;
    }

    // Botão de adicionar campo dinâmico
    const addBtn = event.target.closest(".add-field");
    if (addBtn) {
      this.addDynamicField(addBtn);
      return;
    }

    // Botão de remover campo dinâmico
    const removeBtn = event.target.closest(".remove-field");
    if (removeBtn) {
      this.removeDynamicField(removeBtn);
      return;
    }
  }

  validateField(input, isFinal = false) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = "";

    // Validação required
    if (input.required && !value) {
      isValid = false;
      errorMessage = "Este campo é obrigatório";
    }

    // Validação por pattern
    if (isValid && input.pattern) {
      const regex = new RegExp(input.pattern);
      if (!regex.test(value)) {
        isValid = false;
        errorMessage = input.dataset.error || "Formato inválido";
      }
    }

    // Validação customizada
    if (isValid && input.dataset.validate) {
      const validationResult = this.customValidation(input, value);
      if (!validationResult.valid) {
        isValid = false;
        errorMessage = validationResult.message;
      }
    }

    // Aplicar estado
    this.setFieldState(input, isValid, errorMessage, isFinal);
  }

  setFieldState(input, isValid, errorMessage, showError) {
    const errorElement = input.nextElementSibling?.matches(".error-message")
      ? input.nextElementSibling
      : null;

    if (isValid) {
      input.classList.remove("invalid");
      input.classList.add("valid");
      if (errorElement) {
        errorElement.remove();
      }
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");

      if (showError && errorMessage) {
        if (!errorElement) {
          const errorDiv = document.createElement("div");
          errorDiv.className = "error-message";
          errorDiv.textContent = errorMessage;
          input.parentNode.insertBefore(errorDiv, input.nextSibling);
        } else {
          errorElement.textContent = errorMessage;
        }
      }
    }
  }

  customValidation(input, value) {
    const validator = input.dataset.validate;

    switch (validator) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return {
          valid: emailRegex.test(value),
          message: "Email inválido",
        };

      case "phone":
        const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        return {
          valid: phoneRegex.test(value),
          message: "Telefone inválido (use: (99) 99999-9999)",
        };

      case "cpf":
        return {
          valid: this.validarCPF(value),
          message: "CPF inválido",
        };

      default:
        return { valid: true, message: "" };
    }
  }

  validarCPF(cpf) {
    // Implementação simplificada de validação de CPF
    cpf = cpf.replace(/[^\d]/g, "");
    if (cpf.length !== 11) return false;

    // Verificar dígitos repetidos
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Algoritmo de validação de CPF
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  }

  updateCharCounter(input) {
    const maxLength = parseInt(input.dataset.maxlength);
    const currentLength = input.value.length;

    let counter = input.nextElementSibling?.matches(".char-counter")
      ? input.nextElementSibling
      : null;

    if (!counter) {
      counter = document.createElement("div");
      counter.className = "char-counter";
      input.parentNode.insertBefore(counter, input.nextSibling);
    }

    counter.textContent = `${currentLength}/${maxLength}`;

    if (currentLength > maxLength) {
      counter.classList.add("exceeded");
    } else {
      counter.classList.remove("exceeded");
    }
  }

  autoExpandTextarea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  toggleDependentFields(input) {
    const targetSelector = input.dataset.toggle;
    const targets = document.querySelectorAll(targetSelector);
    const show = input.checked || input.value !== "";

    targets.forEach((target) => {
      target.style.display = show ? "block" : "none";
      if (show) {
        target.querySelector("input, select, textarea")?.focus();
      }
    });
  }

  showHelp(input) {
    let helpElement = input.nextElementSibling?.matches(".help-text")
      ? input.nextElementSibling
      : null;

    if (!helpElement) {
      helpElement = document.createElement("div");
      helpElement.className = "help-text";
      helpElement.textContent = input.dataset.help;
      input.parentNode.insertBefore(helpElement, input.nextSibling);
    }

    helpElement.style.display = "block";
  }

  hideHelp(input) {
    const helpElement = input.nextElementSibling?.matches(".help-text")
      ? input.nextElementSibling
      : null;

    if (helpElement) {
      helpElement.style.display = "none";
    }
  }

  togglePasswordVisibility(input, button) {
    if (input.type === "password") {
      input.type = "text";
      button.textContent = "👁️";
    } else {
      input.type = "password";
      button.textContent = "👁️‍🗨️";
    }
  }

  clearField(input) {
    input.value = "";
    input.focus();
    this.validateField(input);
  }

  addDynamicField(button) {
    const template = document.querySelector(button.dataset.template);
    if (template) {
      const clone = template.content.cloneNode(true);
      button.parentNode.insertBefore(clone, button);
    }
  }

  removeDynamicField(button) {
    const fieldGroup = button.closest(".field-group");
    if (fieldGroup) {
      fieldGroup.remove();
    }
  }
}
```

## Event Object e suas Propriedades

### Propriedades Básicas do Event Object

```javascript
// Todas propriedades e métodos comuns do objeto Event
function handleEvent(event) {
  // PROPRIEDADES BÁSICAS
  console.log("=== PROPRIEDADES BÁSICAS ===");

  // Informações do evento
  console.log("event.type:", event.type); // Tipo do evento: 'click', 'keydown', etc.
  console.log("event.eventPhase:", event.eventPhase); // Fase: 1=capturing, 2=target, 3=bubbling
  console.log("event.isTrusted:", event.isTrusted); // true se gerado pelo usuário, false se por script

  // Timestamps
  console.log("event.timeStamp:", event.timeStamp); // Tempo desde carregamento da página (ms)
  console.log("event.timestamp:", event.timestamp); // Mesmo que timeStamp

  // Elementos relacionados
  console.log("event.target:", event.target); // Elemento que disparou o evento (não muda)
  console.log("event.currentTarget:", event.currentTarget); // Elemento com o listener (pode mudar durante bubbling)
  console.log("event.srcElement:", event.srcElement); // Legacy, igual a target
  console.log("event.originalTarget:", event.originalTarget); // Firefox: elemento original

  // Navegação
  console.log("event.bubbles:", event.bubbles); // true se evento bubble
  console.log("event.cancelable:", event.cancelable); // true se pode ser cancelado com preventDefault()
  console.log("event.composed:", event.composed); // true se atravessa shadow DOM

  // Estado do evento
  console.log("event.defaultPrevented:", event.defaultPrevented); // true se preventDefault() foi chamado
  console.log("event.returnValue:", event.returnValue); // Legacy, valor de retorno
  console.log("event.cancelBubble:", event.cancelBubble); // Legacy, para stopPropagation()

  // MÉTODOS DE CONTROLE
  console.log("=== MÉTODOS DE CONTROLE ===");

  // Controle de propagação
  event.stopPropagation(); // Para propagação (bubbling/capturing)
  event.stopImmediatePropagation(); // Para propagação e outros listeners no mesmo elemento

  // Controle de comportamento padrão
  event.preventDefault(); // Previne comportamento padrão do navegador
  event.composedPath(); // Retorna array com caminho do evento

  // COMPOSEDPATH
  console.log("=== COMPOSED PATH ===");
  const path = event.composedPath();
  console.log("Caminho do evento:", path);
  // [target, ..., window] - elementos por onde o evento passou/passará

  // COMPARAÇÃO TARGET vs CURRENTTARGET
  console.log("=== TARGET vs CURRENTTARGET ===");

  // Exemplo prático:
  document
    .querySelector(".container")
    .addEventListener("click", function (event) {
      console.log("currentTarget:", this); // .container (sempre)
      console.log("target:", event.target); // Elemento real que foi clicado
    });

  // Se .container tem um botão dentro:
  // Clicar no botão: target = button, currentTarget = .container
  // Clicar no .container: target = .container, currentTarget = .container
}

// Exemplo de uso em diferentes eventos
document.addEventListener("click", handleEvent);
document.addEventListener("keydown", handleEvent);
document.addEventListener("submit", handleEvent);
```

### Propriedades Específicas por Tipo de Evento

```javascript
// MouseEvent - para eventos de mouse
function handleMouseEvent(event) {
  console.log("=== MOUSE EVENT PROPERTIES ===");

  // Coordenadas
  console.log("event.clientX:", event.clientX); // X relativo à viewport
  console.log("event.clientY:", event.clientY); // Y relativo à viewport
  console.log("event.pageX:", event.pageX); // X relativo ao documento inteiro
  console.log("event.pageY:", event.pageY); // Y relativo ao documento inteiro
  console.log("event.screenX:", event.screenX); // X relativo à tela
  console.log("event.screenY:", event.screenY); // Y relativo à tela

  // Botões do mouse
  console.log("event.button:", event.button); // Botão pressionado: 0=esquerdo, 1=meio, 2=direito
  console.log("event.buttons:", event.buttons); // Botões atualmente pressionados (bitmask)
  // 1: botão esquerdo
  // 2: botão direito
  // 4: botão do meio
  // 8: botão 4 (back)
  // 16: botão 5 (forward)

  // Teclas modificadoras
  console.log("event.ctrlKey:", event.ctrlKey);
  console.log("event.shiftKey:", event.shiftKey);
  console.log("event.altKey:", event.altKey);
  console.log("event.metaKey:", event.metaKey); // Command no Mac, Windows no Windows

  // Elementos relacionados
  console.log("event.relatedTarget:", event.relatedTarget); // Para mouseover/mouseout
  console.log("event.fromElement:", event.fromElement); // Legacy: elemento de onde veio
  console.log("event.toElement:", event.toElement); // Legacy: elemento para onde vai

  // Outras propriedades
  console.log("event.movementX:", event.movementX); // Delta X desde último mousemove
  console.log("event.movementY:", event.movementY); // Delta Y desde último mousemove
  console.log("event.offsetX:", event.offsetX); // X relativo ao elemento alvo
  console.log("event.offsetY:", event.offsetY); // Y relativo ao elemento alvo
  console.log("event.x:", event.x); // Alias para clientX
  console.log("event.y:", event.y); // Alias para clientY

  // WheelEvent (herda de MouseEvent)
  if (event instanceof WheelEvent) {
    console.log("=== WHEEL EVENT PROPERTIES ===");
    console.log("event.deltaX:", event.deltaX); // Scroll horizontal
    console.log("event.deltaY:", event.deltaY); // Scroll vertical
    console.log("event.deltaZ:", event.deltaZ); // Scroll Z (geralmente 0)
    console.log("event.deltaMode:", event.deltaMode); // Unidade: 0=pixels, 1=lines, 2=pages
  }
}

// KeyboardEvent - para eventos de teclado
function handleKeyboardEvent(event) {
  console.log("=== KEYBOARD EVENT PROPERTIES ===");

  // Informações da tecla
  console.log("event.key:", event.key); // Valor da tecla: 'a', 'Enter', 'ArrowUp'
  console.log("event.code:", event.code); // Código físico: 'KeyA', 'Enter', 'ArrowUp'
  console.log("event.keyCode:", event.keyCode); // DEPRECATED - código numérico
  console.log("event.charCode:", event.charCode); // DEPRECATED - código do caractere
  console.log("event.which:", event.which); // DEPRECATED - igual a keyCode

  // Localização da tecla
  console.log("event.location:", event.location); // 0=padrão, 1=esquerda, 2=direita, 3=numpad
  console.log("event.repeat:", event.repeat); // true se tecla está sendo segurada

  // Teclas modificadoras
  console.log("event.ctrlKey:", event.ctrlKey);
  console.log("event.shiftKey:", event.shiftKey);
  console.log("event.altKey:", event.altKey);
  console.log("event.metaKey:", event.metaKey);

  // Para eventos de input
  console.log("event.data:", event.data); // Para input events: valor inserido
  console.log("event.inputType:", event.inputType); // Tipo de input: 'insertText', 'deleteContentBackward'

  // MÉTODOS ESPECÍFICOS
  console.log("=== KEYBOARD METHODS ===");

  // getModifierState - verifica teclas modificadoras específicas
  console.log("CapsLock:", event.getModifierState("CapsLock"));
  console.log("NumLock:", event.getModifierState("NumLock"));
  console.log("ScrollLock:", event.getModifierState("ScrollLock"));
  console.log("AltGraph:", event.getModifierState("AltGraph"));
}

// UIEvent - eventos de interface (herda de Event)
function handleUIEvent(event) {
  console.log("=== UI EVENT PROPERTIES ===");

  console.log("event.view:", event.view); // Window object
  console.log("event.detail:", event.detail); // Informações adicionais
  // Para click: número de cliques (1, 2, 3...)
  // Para load: 0
  // Para unload: 0

  // FocusEvent (herda de UIEvent)
  if (event instanceof FocusEvent) {
    console.log("=== FOCUS EVENT PROPERTIES ===");
    console.log("event.relatedTarget:", event.relatedTarget); // Elemento ganhando/perdendo foco
  }
}

// InputEvent - para eventos de input
function handleInputEvent(event) {
  console.log("=== INPUT EVENT PROPERTIES ===");

  console.log("event.data:", event.data); // Valor inserido/removido
  console.log("event.dataTransfer:", event.dataTransfer); // Para drag and drop
  console.log("event.inputType:", event.inputType); // Tipo de operação:
  // 'insertText', 'insertLineBreak', 'insertParagraph'
  // 'deleteContentBackward', 'deleteContentForward'
  // 'deleteByCut', 'deleteByDrag'
  // 'historyUndo', 'historyRedo'
  // 'formatBold', 'formatItalic', etc.

  console.log("event.isComposing:", event.isComposing); // true durante composition (IME)
}

// DragEvent - para drag and drop
function handleDragEvent(event) {
  console.log("=== DRAG EVENT PROPERTIES ===");

  console.log("event.dataTransfer:", event.dataTransfer); // DataTransfer object

  if (event.dataTransfer) {
    console.log("=== DATATRANSFER PROPERTIES ===");
    console.log("types:", event.dataTransfer.types); // Tipos de dados disponíveis
    console.log("files:", event.dataTransfer.files); // Arquivos sendo arrastados
    console.log("items:", event.dataTransfer.items); // DataTransferItemList
    console.log("effectAllowed:", event.dataTransfer.effectAllowed); // Efeito permitido
    console.log("dropEffect:", event.dataTransfer.dropEffect); // Efeito atual

    // Métodos do DataTransfer
    console.log('getData("text"):', event.dataTransfer.getData("text"));
    console.log(
      'getData("text/html"):',
      event.dataTransfer.getData("text/html")
    );

    // Listar todos tipos disponíveis
    for (const type of event.dataTransfer.types) {
      console.log(`Tipo "${type}":`, event.dataTransfer.getData(type));
    }
  }
}

// Eventos de formulário
function handleFormEvent(event) {
  console.log("=== FORM EVENT PROPERTIES ===");

  // SubmitEvent
  if (event instanceof SubmitEvent) {
    console.log("event.submitter:", event.submitter); // Botão que submeteu o formulário
  }
}

// Eventos de progresso (ajax, file upload)
function handleProgressEvent(event) {
  console.log("=== PROGRESS EVENT PROPERTIES ===");

  console.log("event.lengthComputable:", event.lengthComputable); // true se tamanho total conhecido
  console.log("event.loaded:", event.loaded); // Bytes já carregados
  console.log("event.total:", event.total); // Bytes totais (se lengthComputable)

  // Calcular porcentagem
  if (event.lengthComputable && event.total > 0) {
    const percent = (event.loaded / event.total) * 100;
    console.log(`Progresso: ${percent.toFixed(2)}%`);
  }
}

// Eventos de animação/transição
function handleAnimationEvent(event) {
  console.log("=== ANIMATION EVENT PROPERTIES ===");

  console.log("event.animationName:", event.animationName); // Nome da animação
  console.log("event.elapsedTime:", event.elapsedTime); // Tempo desde início (segundos)
  console.log("event.pseudoElement:", event.pseudoElement); // Pseudo-elemento (::before, ::after)
}

function handleTransitionEvent(event) {
  console.log("=== TRANSITION EVENT PROPERTIES ===");

  console.log("event.propertyName:", event.propertyName); // Propriedade da transição
  console.log("event.elapsedTime:", event.elapsedTime); // Tempo desde início (segundos)
  console.log("event.pseudoElement:", event.pseudoElement); // Pseudo-elemento
}

// TouchEvent - para dispositivos touch
function handleTouchEvent(event) {
  console.log("=== TOUCH EVENT PROPERTIES ===");

  console.log("event.touches:", event.touches); // TouchList de todos toques na tela
  console.log("event.targetTouches:", event.targetTouches); // TouchList de toques no elemento alvo
  console.log("event.changedTouches:", event.changedTouches); // TouchList de toques que mudaram

  // Informações de cada toque
  for (let i = 0; i < event.touches.length; i++) {
    const touch = event.touches[i];
    console.log(`Toque ${i}:`, {
      identifier: touch.identifier, // ID único do toque
      clientX: touch.clientX,
      clientY: touch.clientY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      screenX: touch.screenX,
      screenY: touch.screenY,
      radiusX: touch.radiusX, // Raio horizontal do toque
      radiusY: touch.radiusY, // Raio vertical do toque
      rotationAngle: touch.rotationAngle, // Ângulo de rotação
      force: touch.force, // Pressão (0-1)
    });
  }
}

// PointerEvent - unifica mouse, touch, pen
function handlePointerEvent(event) {
  console.log("=== POINTER EVENT PROPERTIES ===");

  console.log("event.pointerId:", event.pointerId); // ID único do ponteiro
  console.log("event.pointerType:", event.pointerType); // 'mouse', 'pen', 'touch'
  console.log("event.width:", event.width); // Largura do contato
  console.log("event.height:", event.height); // Altura do contato
  console.log("event.pressure:", event.pressure); // Pressão (0-1)
  console.log("event.tiltX:", event.tiltX); // Inclinação X (-90 a 90)
  console.log("event.tiltY:", event.tiltY); // Inclinação Y (-90 a 90)
  console.log("event.twist:", event.twist); // Torção (0-359)
  console.log("event.tangentialPressure:", event.tangentialPressure); // Pressão tangencial
  console.log("event.isPrimary:", event.isPrimary); // true se é o ponteiro primário

  // Todas propriedades de MouseEvent também disponíveis
  console.log("event.clientX:", event.clientX);
  console.log("event.clientY:", event.clientY);
  console.log("event.button:", event.button);
}
```

### Métodos e Técnicas Avançadas

```javascript
// ComposedPath - caminho completo do evento
document.addEventListener("click", (event) => {
  const path = event.composedPath();
  console.log("Caminho do evento (composedPath):", path);

  // Útil para:
  // 1. Verificar se evento passou por elemento específico
  const passouPorModal = path.some((el) => el.classList?.contains("modal"));

  // 2. Encontrar elemento específico no caminho
  const primeiroBotao = path.find((el) => el.tagName === "BUTTON");

  // 3. Debug de propagação de eventos
  console.log(
    "Elementos no caminho:",
    path.map(
      (el) =>
        el.tagName +
        (el.id ? `#${el.id}` : "") +
        (el.className ? `.${el.className}` : "")
    )
  );
});

// Prevenção condicional de comportamento padrão
document.addEventListener("contextmenu", (event) => {
  // Permitir menu de contexto apenas em áreas específicas
  if (!event.target.closest(".allow-context-menu")) {
    event.preventDefault();
  }
});

document.addEventListener("keydown", (event) => {
  // Permitir Ctrl+S apenas em editores
  if (event.ctrlKey && event.key === "s") {
    if (!event.target.closest(".editor")) {
      event.preventDefault();
      alert("Use Ctrl+S apenas dentro do editor");
    }
  }
});

// Stop propagation seletivo
document.querySelector(".modal").addEventListener("click", (event) => {
  // Fechar modal apenas se clique foi no overlay, não no conteúdo
  if (event.target === event.currentTarget) {
    fecharModal();
  } else {
    event.stopPropagation(); // Impede que clique chegue ao document
  }
});

// Event delegation com composedPath
document.addEventListener("click", (event) => {
  const path = event.composedPath();

  // Encontrar o primeiro elemento com data-action no caminho
  const actionElement = path.find((el) => el.dataset?.action);

  if (actionElement) {
    const action = actionElement.dataset.action;
    console.log(`Ação delegada: ${action}`, actionElement);

    // Executar ação baseada no data-action
    switch (action) {
      case "delete":
        actionElement.closest(".item")?.remove();
        break;
      case "edit":
        iniciarEdicao(actionElement.closest(".item"));
        break;
    }
  }
});

// Detecção de clique fora do elemento
function setupClickOutside(element, callback) {
  document.addEventListener("click", (event) => {
    const path = event.composedPath();

    // Verificar se clique foi fora do elemento
    if (!path.includes(element)) {
      callback(event);
    }
  });
}

// Uso:
const meuElemento = document.querySelector(".meu-elemento");
setupClickOutside(meuElemento, () => {
  console.log("Clicou fora do elemento");
  meuElemento.style.display = "none";
});

// Interceptação de eventos em capturing phase
document.addEventListener(
  "click",
  (event) => {
    // Capturar todos cliques antes de chegarem aos elementos
    console.log("Capturing: clique interceptado", event.target);

    // Registrar cliques para analytics
    if (!event.defaultPrevented) {
      registrarClique(event.target, {
        x: event.clientX,
        y: event.clientY,
        timestamp: event.timeStamp,
      });
    }
  },
  true
); // true = capturing phase

// Verificação de isTrusted
document.addEventListener("click", (event) => {
  // Verificar se evento foi gerado pelo usuário
  if (!event.isTrusted) {
    console.warn("Evento gerado programaticamente");
    // Não processar eventos falsos
    return;
  }

  // Processar apenas eventos reais do usuário
  processarCliqueReal(event);
});

// Detecção de tipo de entrada (mouse vs touch)
let ultimoTipoEntrada = "unknown";

document.addEventListener("mousedown", () => {
  ultimoTipoEntrada = "mouse";
});

document.addEventListener("touchstart", () => {
  ultimoTipoEntrada = "touch";
});

document.addEventListener("click", (event) => {
  console.log("Último tipo de entrada:", ultimoTipoEntrada);

  // Adaptar interface baseada no tipo de entrada
  if (ultimoTipoEntrada === "touch") {
    // Aumentar alvos de toque
    event.target.style.padding = "10px";
  }
});

// Cálculo de posição relativa
document.addEventListener("click", (event) => {
  // Posição relativa ao elemento alvo
  const rect = event.target.getBoundingClientRect();
  const relX = event.clientX - rect.left;
  const relY = event.clientY - rect.top;

  console.log(`Posição relativa: ${relX}, ${relY}`);
  console.log(
    `Dentro do elemento: ${
      relX >= 0 && relX <= rect.width && relY >= 0 && relY <= rect.height
    }`
  );
});

// Debouncing com eventos
function createDebouncedHandler(delay) {
  let timeout;

  return function (event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // Código a executar após delay
      console.log("Evento processado:", event.type, event.target);
    }, delay);
  };
}

// Throttling com eventos
function createThrottledHandler(limit) {
  let inThrottle;

  return function (event) {
    if (!inThrottle) {
      // Executar imediatamente
      console.log("Evento processado:", event.type);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Uso:
window.addEventListener("scroll", createDebouncedHandler(100));
window.addEventListener("resize", createThrottledHandler(200));

// Encadeamento de eventos com promises
function waitForEvent(element, eventType) {
  return new Promise((resolve) => {
    const handler = (event) => {
      element.removeEventListener(eventType, handler);
      resolve(event);
    };
    element.addEventListener(eventType, handler);
  });
}

// Uso assíncrono:
async function handleFormSubmission() {
  const form = document.querySelector("form");

  // Esperar submit
  const submitEvent = await waitForEvent(form, "submit");
  submitEvent.preventDefault();

  // Processar dados
  const formData = new FormData(form);

  // Esperar resposta
  const response = await fetch("/api/submit", {
    method: "POST",
    body: formData,
  });

  return response.json();
}

// Disparo programático de eventos com todas propriedades
function simulateClick(element, options = {}) {
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
    detail: 1,
    screenX: options.screenX || 0,
    screenY: options.screenY || 0,
    clientX: options.clientX || 0,
    clientY: options.clientY || 0,
    ctrlKey: options.ctrlKey || false,
    altKey: options.altKey || false,
    shiftKey: options.shiftKey || false,
    metaKey: options.metaKey || false,
    button: options.button || 0,
    relatedTarget: options.relatedTarget || null,
  });

  // Adicionar propriedades personalizadas
  if (options.customProperties) {
    Object.assign(event, options.customProperties);
  }

  element.dispatchEvent(event);
}

// Verificar se evento pode ser cancelado
document.addEventListener("beforeunload", (event) => {
  console.log("Cancelable?", event.cancelable); // true
  if (dadosNaoSalvos) {
    event.preventDefault();
  }
});

document.addEventListener("load", (event) => {
  console.log("Cancelable?", event.cancelable); // false - não pode prevenir carregamento
});
```

## Eventos Customizados

### Criando e Disparando Eventos Customizados

```javascript
// Criando eventos customizados básicos
const elemento = document.querySelector(".meu-elemento");

// Método 1: Event constructor (simples)
const eventoSimples = new Event("meuEvento");

// Adicionar listener
elemento.addEventListener("meuEvento", () => {
  console.log("Evento customizado disparado!");
});

// Disparar evento
elemento.dispatchEvent(eventoSimples);

// Método 2: CustomEvent constructor (com dados)
const eventoComDados = new CustomEvent("meuEventoComDados", {
  detail: {
    mensagem: "Olá mundo",
    numero: 42,
    data: new Date(),
  },
  bubbles: true, // Propaga como eventos normais
  cancelable: true, // Pode ser cancelado com preventDefault()
  composed: true, // Atravessa shadow DOM
});

// Adicionar listener para evento com dados
elemento.addEventListener("meuEventoComDados", (event) => {
  console.log("Dados do evento:", event.detail);
  console.log("Mensagem:", event.detail.mensagem);
  console.log("Número:", event.detail.numero);
});

// Disparar evento com dados
elemento.dispatchEvent(eventoComDados);

// Método 3: createEvent (legado, mas suportado)
const eventoTradicional = document.createEvent("Event");
eventoTradicional.initEvent("meuEventoTradicional", true, true); // type, bubbles, cancelable
elemento.dispatchEvent(eventoTradicional);

// Eventos customizados em elementos específicos
class ComponentePersonalizado extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <button>Clique-me</button>
        `;

    this.init();
  }

  init() {
    const button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", () => {
      // Disparar evento customizado
      this.dispatchEvent(
        new CustomEvent("botao-clicado", {
          detail: { timestamp: Date.now() },
          bubbles: true,
          composed: true, // Importante para atravessar shadow DOM
        })
      );
    });
  }
}

customElements.define("meu-componente", ComponentePersonalizado);

// Uso:
document
  .querySelector("meu-componente")
  .addEventListener("botao-clicado", (event) => {
    console.log("Botão do componente clicado:", event.detail);
  });
```

### Sistemas de Eventos Customizados

```javascript
// Sistema de EventBus (padrão pub/sub)
class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  // Registrar listener
  on(eventName, callback, options = {}) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, new Set());
    }

    const listenerSet = this.listeners.get(eventName);
    const listener = { callback, options };
    listenerSet.add(listener);

    // Retornar função para remover
    return () => this.off(eventName, callback);
  }

  // Remover listener
  off(eventName, callback) {
    if (this.listeners.has(eventName)) {
      const listenerSet = this.listeners.get(eventName);
      for (const listener of listenerSet) {
        if (listener.callback === callback) {
          listenerSet.delete(listener);
          break;
        }
      }
    }
  }

  // Disparar evento
  emit(eventName, data = {}) {
    if (this.listeners.has(eventName)) {
      const listeners = Array.from(this.listeners.get(eventName));

      // Ordenar por prioridade
      listeners.sort(
        (a, b) => (b.options.priority || 0) - (a.options.priority || 0)
      );

      for (const { callback, options } of listeners) {
        try {
          const result = callback(data);

          // Se retornar false e não for once, parar propagação
          if (result === false && !options.once) {
            break;
          }
        } catch (error) {
          console.error(`Erro no listener de ${eventName}:`, error);
        }

        // Remover se for once
        if (options.once) {
          this.off(eventName, callback);
        }
      }
    }
  }

  // Disparar uma vez
  once(eventName, callback) {
    return this.on(eventName, callback, { once: true });
  }

  // Limpar todos listeners
  clear(eventName = null) {
    if (eventName) {
      this.listeners.delete(eventName);
    } else {
      this.listeners.clear();
    }
  }

  // Verificar se tem listeners
  hasListeners(eventName) {
    return (
      this.listeners.has(eventName) && this.listeners.get(eventName).size > 0
    );
  }

  // Contar listeners
  listenerCount(eventName) {
    return this.listeners.has(eventName)
      ? this.listeners.get(eventName).size
      : 0;
  }
}

// Uso do EventBus
const bus = new EventBus();

// Registrar listeners
const removeLoginListener = bus.on("user:login", (data) => {
  console.log("Usuário logado:", data.username);
  atualizarInterfaceUsuario(data);
});

bus.on(
  "user:logout",
  (data) => {
    console.log("Usuário deslogado");
    limparInterfaceUsuario();
  },
  { priority: 10 }
); // Alta prioridade

bus.once("app:initialized", () => {
  console.log("App inicializado (executa apenas uma vez)");
});

// Disparar eventos
bus.emit("user:login", { username: "joao", role: "admin" });
bus.emit("app:initialized");
bus.emit("app:initialized"); // Não executa novamente (once)

// Remover listener específico
removeLoginListener();

// Sistema de eventos com namespaces
class NamespacedEventSystem {
  constructor() {
    this.events = new Map();
  }

  // Adicionar listener com namespace
  on(eventString, callback) {
    const [eventName, namespace] = this.parseEventString(eventString);
    const key = namespace || "default";

    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Map());
    }

    const namespaceMap = this.events.get(eventName);
    if (!namespaceMap.has(key)) {
      namespaceMap.set(key, new Set());
    }

    namespaceMap.get(key).add(callback);

    return () => this.off(eventString, callback);
  }

  // Remover listener
  off(eventString, callback) {
    const [eventName, namespace] = this.parseEventString(eventString);

    if (this.events.has(eventName)) {
      const namespaceMap = this.events.get(eventName);

      if (namespace) {
        // Remover apenas do namespace específico
        if (namespaceMap.has(namespace)) {
          namespaceMap.get(namespace).delete(callback);
        }
      } else {
        // Remover de todos namespaces
        for (const callbacks of namespaceMap.values()) {
          callbacks.delete(callback);
        }
      }
    }
  }

  // Disparar evento
  emit(eventString, data = {}) {
    const [eventName, namespace] = this.parseEventString(eventString);

    if (this.events.has(eventName)) {
      const namespaceMap = this.events.get(eventName);

      if (namespace) {
        // Disparar apenas no namespace específico
        if (namespaceMap.has(namespace)) {
          this.executeCallbacks(namespaceMap.get(namespace), data);
        }
      } else {
        // Disparar em todos namespaces
        for (const callbacks of namespaceMap.values()) {
          this.executeCallbacks(callbacks, data);
        }
      }
    }
  }

  // Executar callbacks
  executeCallbacks(callbacks, data) {
    for (const callback of callbacks) {
      try {
        callback(data);
      } catch (error) {
        console.error("Erro no callback:", error);
      }
    }
  }

  // Parse event string (ex: "click.namespace")
  parseEventString(eventString) {
    const parts = eventString.split(".");
    return parts.length === 2 ? parts : [parts[0], null];
  }
}

// Uso com namespaces
const nsEvents = new NamespacedEventSystem();

nsEvents.on("click.modal", () => console.log("Click no modal"));
nsEvents.on("click.sidebar", () => console.log("Click na sidebar"));
nsEvents.on("click", () => console.log("Click geral"));

nsEvents.emit("click.modal"); // Só executa modal
nsEvents.emit("click"); // Executa todos

// Sistema de eventos assíncronos
class AsyncEventSystem {
  constructor() {
    this.listeners = new Map();
  }

  // Registrar listener assíncrono
  on(eventName, callback) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName).push(callback);
  }

  // Disparar evento assíncrono
  async emit(eventName, data = {}) {
    if (this.listeners.has(eventName)) {
      const listeners = this.listeners.get(eventName);
      const results = [];

      for (const callback of listeners) {
        try {
          const result = await callback(data);
          results.push({ success: true, result });
        } catch (error) {
          results.push({ success: false, error });
        }
      }

      return results;
    }
    return [];
  }

  // Disparar em paralelo
  async emitParallel(eventName, data = {}) {
    if (this.listeners.has(eventName)) {
      const listeners = this.listeners.get(eventName);
      const promises = listeners.map((callback) =>
        callback(data).then(
          (result) => ({ success: true, result }),
          (error) => ({ success: false, error })
        )
      );

      return Promise.all(promises);
    }
    return [];
  }
}

// Uso assíncrono
const asyncEvents = new AsyncEventSystem();

asyncEvents.on("data:fetched", async (data) => {
  await processarDados(data);
  return "Processado com sucesso";
});

asyncEvents.on("data:fetched", async (data) => {
  await salvarNoBanco(data);
  return "Salvo no banco";
});

// Disparar sequencial
asyncEvents.emit("data:fetched", { id: 1, value: "teste" }).then((results) => {
  console.log("Resultados:", results);
});

// Disparar paralelo
asyncEvents
  .emitParallel("data:fetched", { id: 2, value: "teste2" })
  .then((results) => {
    console.log("Resultados paralelos:", results);
  });

// Sistema de eventos com middlewares
class MiddlewareEventSystem {
  constructor() {
    this.middlewares = [];
    this.listeners = new Map();
  }

  // Adicionar middleware
  use(middleware) {
    this.middlewares.push(middleware);
    return this;
  }

  // Registrar listener
  on(eventName, callback) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName).push(callback);
  }

  // Disparar evento com middlewares
  async emit(eventName, data = {}) {
    let currentData = { ...data };
    let index = 0;

    // Executar middlewares
    const next = async () => {
      if (index < this.middlewares.length) {
        const middleware = this.middlewares[index++];
        await middleware(currentData, next);
      }
    };

    await next();

    // Executar listeners
    if (this.listeners.has(eventName)) {
      for (const callback of this.listeners.get(eventName)) {
        await callback(currentData);
      }
    }

    return currentData;
  }
}

// Uso com middlewares
const middlewareEvents = new MiddlewareEventSystem();

// Adicionar middlewares
middlewareEvents
  .use(async (data, next) => {
    console.log("Middleware 1 - antes:", data);
    data.processed = true;
    await next();
    console.log("Middleware 1 - depois:", data);
  })
  .use(async (data, next) => {
    console.log("Middleware 2 - antes:", data);
    data.timestamp = Date.now();
    await next();
    console.log("Middleware 2 - depois:", data);
  });

// Adicionar listener
middlewareEvents.on("user:update", (data) => {
  console.log("Listener executado:", data);
});

// Disparar evento
middlewareEvents.emit("user:update", { id: 1, name: "João" });

// Sistema de eventos com histórico
class EventHistorySystem {
  constructor(maxHistory = 100) {
    this.listeners = new Map();
    this.history = [];
    this.maxHistory = maxHistory;
  }

  on(eventName, callback) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, new Set());
    }
    this.listeners.get(eventName).add(callback);
  }

  emit(eventName, data = {}) {
    // Registrar no histórico
    const eventRecord = {
      name: eventName,
      data,
      timestamp: Date.now(),
      id: this.history.length + 1,
    };

    this.history.push(eventRecord);

    // Manter tamanho máximo
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }

    // Executar listeners
    if (this.listeners.has(eventName)) {
      for (const callback of this.listeners.get(eventName)) {
        callback(data, eventRecord);
      }
    }
  }

  getHistory(filter = {}) {
    let filtered = [...this.history];

    if (filter.eventName) {
      filtered = filtered.filter((record) => record.name === filter.eventName);
    }

    if (filter.since) {
      filtered = filtered.filter((record) => record.timestamp >= filter.since);
    }

    if (filter.until) {
      filtered = filtered.filter((record) => record.timestamp <= filter.until);
    }

    return filtered;
  }

  replay(eventName, since = 0) {
    const events = this.getHistory({ eventName, since });
    events.forEach((event) => {
      this.emit(event.name, event.data);
    });
    return events.length;
  }

  clearHistory() {
    this.history = [];
  }
}

// Uso com histórico
const historyEvents = new EventHistorySystem();

historyEvents.on("user:action", (data, record) => {
  console.log(`Ação ${record.id}:`, data.action);
});

historyEvents.emit("user:action", { action: "login", user: "joao" });
historyEvents.emit("user:action", { action: "logout", user: "joao" });
historyEvents.emit("user:action", { action: "login", user: "maria" });

console.log("Histórico completo:", historyEvents.getHistory());
console.log(
  "Histórico de login:",
  historyEvents.getHistory({ eventName: "user:action" })
);

// Replay eventos desde timestamp específico
const replayCount = historyEvents.replay("user:action", Date.now() - 10000);
console.log(`Replayed ${replayCount} events`);
```

### Eventos Customizados no DOM

```javascript
// Exemplo 1: Sistema de notificações com eventos
class NotificationSystemWithEvents {
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "notification-container";
    document.body.appendChild(this.container);

    // Eventos customizados
    this.events = {
      SHOW: "notification:show",
      HIDE: "notification:hide",
      CLICK: "notification:click",
    };
  }

  show(message, type = "info", options = {}) {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <div class="notification-content">${message}</div>
            <button class="notification-close">&times;</button>
        `;

    this.container.appendChild(notification);

    // Adicionar listeners
    notification
      .querySelector(".notification-close")
      .addEventListener("click", () => {
        this.hide(notification);
      });

    notification.addEventListener("click", (event) => {
      if (!event.target.matches(".notification-close")) {
        // Disparar evento de clique
        notification.dispatchEvent(
          new CustomEvent(this.events.CLICK, {
            detail: { message, type, notification },
          })
        );
      }
    });

    // Disparar evento de show
    notification.dispatchEvent(
      new CustomEvent(this.events.SHOW, {
        detail: { message, type, notification },
      })
    );

    // Auto-hide
    if (options.autoHide !== false) {
      setTimeout(() => {
        this.hide(notification);
      }, options.timeout || 5000);
    }

    return notification;
  }

  hide(notification) {
    // Disparar evento antes de remover
    notification.dispatchEvent(
      new CustomEvent(this.events.HIDE, {
        detail: { notification },
      })
    );

    notification.remove();
  }
}

// Uso com eventos
const notifSystem = new NotificationSystemWithEvents();

const notification = notifSystem.show("Mensagem importante", "success");

// Escutar eventos da notificação
notification.addEventListener("notification:click", (event) => {
  console.log("Notificação clicada:", event.detail);
});

notification.addEventListener("notification:hide", (event) => {
  console.log("Notificação escondida:", event.detail);
});

// Exemplo 2: Player de vídeo com eventos customizados
class VideoPlayerWithEvents extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                .video-container {
                    position: relative;
                }
                video {
                    width: 100%;
                }
                .controls {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    background: rgba(0,0,0,0.5);
                    padding: 10px;
                    display: flex;
                    gap: 10px;
                }
                button {
                    background: white;
                    border: none;
                    padding: 5px 10px;
                    cursor: pointer;
                }
            </style>
            <div class="video-container">
                <video></video>
                <div class="controls">
                    <button class="play-pause">▶️</button>
                    <input type="range" class="volume" min="0" max="1" step="0.1" value="1">
                    <span class="time">0:00 / 0:00</span>
                </div>
            </div>
        `;

    this.video = this.shadowRoot.querySelector("video");
    this.init();
  }

  init() {
    // Configurar eventos nativos do vídeo
    this.video.addEventListener("play", () => this.onPlay());
    this.video.addEventListener("pause", () => this.onPause());
    this.video.addEventListener("timeupdate", () => this.onTimeUpdate());
    this.video.addEventListener("volumechange", () => this.onVolumeChange());
    this.video.addEventListener("ended", () => this.onEnded());

    // Configurar controles
    this.shadowRoot
      .querySelector(".play-pause")
      .addEventListener("click", () => {
        this.togglePlay();
      });

    this.shadowRoot
      .querySelector(".volume")
      .addEventListener("input", (event) => {
        this.video.volume = event.target.value;
      });
  }

  // Eventos customizados
  onPlay() {
    this.dispatchEvent(
      new CustomEvent("videoplay", {
        detail: { currentTime: this.video.currentTime },
      })
    );
    this.shadowRoot.querySelector(".play-pause").textContent = "⏸️";
  }

  onPause() {
    this.dispatchEvent(
      new CustomEvent("videopause", {
        detail: { currentTime: this.video.currentTime },
      })
    );
    this.shadowRoot.querySelector(".play-pause").textContent = "▶️";
  }

  onTimeUpdate() {
    const current = this.formatTime(this.video.currentTime);
    const duration = this.formatTime(this.video.duration);

    this.shadowRoot.querySelector(
      ".time"
    ).textContent = `${current} / ${duration}`;

    // Evento de progresso
    if (this.video.duration) {
      const percent = (this.video.currentTime / this.video.duration) * 100;
      this.dispatchEvent(
        new CustomEvent("videoprogress", {
          detail: {
            percent,
            currentTime: this.video.currentTime,
            duration: this.video.duration,
          },
        })
      );
    }
  }

  onVolumeChange() {
    this.dispatchEvent(
      new CustomEvent("volumechange", {
        detail: { volume: this.video.volume, muted: this.video.muted },
      })
    );
  }

  onEnded() {
    this.dispatchEvent(
      new CustomEvent("videoend", {
        detail: { duration: this.video.duration },
      })
    );
  }

  togglePlay() {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  // API pública
  load(src) {
    this.video.src = src;
    this.dispatchEvent(new CustomEvent("videoload", { detail: { src } }));
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  setVolume(volume) {
    this.video.volume = volume;
  }
}

customElements.define("video-player", VideoPlayerWithEvents);

// Uso:
const player = document.querySelector("video-player");
player.load("video.mp4");

player.addEventListener("videoplay", (event) => {
  console.log("Vídeo começou a tocar:", event.detail);
});

player.addEventListener("videoprogress", (event) => {
  console.log("Progresso:", event.detail.percent.toFixed(1) + "%");
});

player.addEventListener("videoend", () => {
  console.log("Vídeo terminou");
});

// Exemplo 3: Formulário com validação e eventos customizados
class ValidatedForm extends HTMLFormElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.addEventListener("submit", this.handleSubmit.bind(this));
    this.addEventListener("input", this.handleInput.bind(this));
    this.addEventListener("change", this.handleChange.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      // Disparar evento de validação bem-sucedida
      const submitEvent = new CustomEvent("form:valid", {
        detail: { formData: new FormData(this) },
        bubbles: true,
        cancelable: true,
      });

      const canSubmit = this.dispatchEvent(submitEvent);

      if (canSubmit && !submitEvent.defaultPrevented) {
        this.submitForm();
      }
    } else {
      // Disparar evento de validação falhou
      this.dispatchEvent(
        new CustomEvent("form:invalid", {
          detail: { errors: this.getErrors() },
          bubbles: true,
        })
      );
    }
  }

  handleInput(event) {
    const input = event.target;
    if (input.hasAttribute("data-validate")) {
      const isValid = this.validateField(input);

      // Disparar evento de validação de campo
      input.dispatchEvent(
        new CustomEvent("field:validate", {
          detail: { valid: isValid, value: input.value },
          bubbles: true,
        })
      );
    }
  }

  handleChange(event) {
    const input = event.target;
    if (input.hasAttribute("data-dependent")) {
      // Disparar evento para campos dependentes
      this.dispatchEvent(
        new CustomEvent("form:change", {
          detail: { field: input.name, value: input.value },
          bubbles: true,
        })
      );
    }
  }

  validate() {
    let isValid = true;
    const inputs = this.querySelectorAll("[data-validate]");

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(input) {
    const value = input.value.trim();
    const validator = input.dataset.validate;
    let isValid = true;

    // Validações básicas
    if (input.required && !value) {
      isValid = false;
    }

    if (isValid && input.pattern) {
      const regex = new RegExp(input.pattern);
      if (!regex.test(value)) {
        isValid = false;
      }
    }

    // Validação customizada
    if (isValid && validator) {
      isValid = this.customValidation(input, value, validator);
    }

    // Aplicar estado visual
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);

    return isValid;
  }

  customValidation(input, value, validator) {
    switch (validator) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "password":
        return value.length >= 8;
      case "match":
        const otherInput = this.querySelector(
          `[name="${input.dataset.match}"]`
        );
        return otherInput && value === otherInput.value;
      default:
        return true;
    }
  }

  getErrors() {
    const errors = [];
    const inputs = this.querySelectorAll("[data-validate].invalid");

    inputs.forEach((input) => {
      errors.push({
        field: input.name,
        message: input.dataset.error || "Campo inválido",
        value: input.value,
      });
    });

    return errors;
  }

  submitForm() {
    // Enviar formulário normalmente
    this.submit();
  }
}

customElements.define("validated-form", ValidatedForm, { extends: "form" });

// Uso:
const form = document.querySelector("validated-form");

form.addEventListener("form:valid", (event) => {
  console.log("Formulário válido:", event.detail.formData);
  // Pode fazer processamento adicional antes do envio
});

form.addEventListener("form:invalid", (event) => {
  console.log("Formulário inválido:", event.detail.errors);
  // Mostrar erros para o usuário
});

form.addEventListener("form:change", (event) => {
  console.log("Campo alterado:", event.detail);
  // Atualizar campos dependentes
});

// Exemplo 4: Sistema de carrinho de compras com eventos
class ShoppingCart extends HTMLElement {
  constructor() {
    super();
    this.items = [];
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="cart">
                <h2>Carrinho (<span class="item-count">0</span>)</h2>
                <div class="cart-items"></div>
                <div class="cart-total">
                    Total: R$ <span class="total-amount">0.00</span>
                </div>
                <button class="checkout">Finalizar Compra</button>
            </div>
        `;

    this.querySelector(".checkout").addEventListener("click", () => {
      this.checkout();
    });
  }

  addItem(product) {
    const item = {
      id: Date.now(),
      product,
      quantity: 1,
    };

    this.items.push(item);
    this.update();

    // Disparar evento de item adicionado
    this.dispatchEvent(
      new CustomEvent("cart:itemadded", {
        detail: { item, cart: this.items },
        bubbles: true,
      })
    );

    return item;
  }

  removeItem(itemId) {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const removed = this.items.splice(index, 1)[0];
      this.update();

      // Disparar evento de item removido
      this.dispatchEvent(
        new CustomEvent("cart:itemremoved", {
          detail: { item: removed, cart: this.items },
          bubbles: true,
        })
      );

      return removed;
    }
    return null;
  }

  updateQuantity(itemId, quantity) {
    const item = this.items.find((item) => item.id === itemId);
    if (item) {
      const oldQuantity = item.quantity;
      item.quantity = quantity;
      this.update();

      // Disparar evento de quantidade alterada
      this.dispatchEvent(
        new CustomEvent("cart:quantitychanged", {
          detail: {
            item,
            oldQuantity,
            newQuantity: quantity,
            cart: this.items,
          },
          bubbles: true,
        })
      );

      return item;
    }
    return null;
  }

  update() {
    // Atualizar contador
    const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.querySelector(".item-count").textContent = totalItems;

    // Atualizar total
    const totalAmount = this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    this.querySelector(".total-amount").textContent = totalAmount.toFixed(2);

    // Atualizar lista
    const itemsContainer = this.querySelector(".cart-items");
    itemsContainer.innerHTML = this.items
      .map(
        (item) => `
            <div class="cart-item" data-id="${item.id}">
                <span class="item-name">${item.product.name}</span>
                <input type="number" class="item-quantity" value="${
                  item.quantity
                }" min="1">
                <span class="item-price">R$ ${(
                  item.product.price * item.quantity
                ).toFixed(2)}</span>
                <button class="remove-item">×</button>
            </div>
        `
      )
      .join("");

    // Adicionar listeners para itens dinâmicos
    itemsContainer.querySelectorAll(".item-quantity").forEach((input) => {
      input.addEventListener("change", (event) => {
        const itemId = parseInt(event.target.closest(".cart-item").dataset.id);
        const quantity = parseInt(event.target.value);
        this.updateQuantity(itemId, quantity);
      });
    });

    itemsContainer.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemId = parseInt(event.target.closest(".cart-item").dataset.id);
        this.removeItem(itemId);
      });
    });

    // Disparar evento de atualização
    this.dispatchEvent(
      new CustomEvent("cart:updated", {
        detail: { cart: this.items, totalItems, totalAmount },
        bubbles: true,
      })
    );
  }

  checkout() {
    if (this.items.length === 0) {
      alert("Carrinho vazio!");
      return;
    }

    // Disparar evento antes do checkout
    const checkoutEvent = new CustomEvent("cart:beforecheckout", {
      detail: { cart: this.items },
      bubbles: true,
      cancelable: true,
    });

    const canCheckout = this.dispatchEvent(checkoutEvent);

    if (canCheckout && !checkoutEvent.defaultPrevented) {
      // Processar checkout
      this.dispatchEvent(
        new CustomEvent("cart:checkout", {
          detail: { cart: this.items, timestamp: Date.now() },
          bubbles: true,
        })
      );

      // Limpar carrinho
      this.clear();
    }
  }

  clear() {
    this.items = [];
    this.update();

    // Disparar evento de limpeza
    this.dispatchEvent(
      new CustomEvent("cart:cleared", {
        detail: { timestamp: Date.now() },
        bubbles: true,
      })
    );
  }
}

customElements.define("shopping-cart", ShoppingCart);

// Uso:
const cart = document.querySelector("shopping-cart");

cart.addEventListener("cart:itemadded", (event) => {
  console.log("Item adicionado:", event.detail.item);
  atualizarBadgeCarrinho(event.detail.cart.length);
});

cart.addEventListener("cart:updated", (event) => {
  console.log("Carrinho atualizado:", event.detail);
  salvarNoLocalStorage("cart", event.detail.cart);
});

cart.addEventListener("cart:beforecheckout", (event) => {
  console.log("Antes do checkout:", event.detail);
  // Pode validar estoque, etc.
});

cart.addEventListener("cart:checkout", async (event) => {
  console.log("Processando checkout:", event.detail);

  // Enviar para API
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(event.detail.cart),
    });

    console.log("Checkout realizado com sucesso");
  } catch (error) {
    console.error("Erro no checkout:", error);
  }
});

// Adicionar produtos
cart.addItem({ name: "Produto 1", price: 29.9 });
cart.addItem({ name: "Produto 2", price: 49.9 });
```

Este guia completo cobre todos os aspectos de eventos em JavaScript, desde os tipos básicos até sistemas avançados de eventos customizados. Cada seção inclui exemplos práticos e detalhados para melhor compreensão e implementação.
