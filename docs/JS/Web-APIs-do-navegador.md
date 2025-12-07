# 8. WEB APIs DO NAVEGADOR

## LocalStorage/SessionStorage

### Fundamentos do Web Storage

```javascript
// localStorage - armazenamento persistente
// sessionStorage - armazenamento por sessão (fecha ao fechar aba/navegador)

// Verificar suporte
if (typeof Storage !== "undefined") {
  console.log("Web Storage suportado");
} else {
  console.log("Web Storage NÃO suportado");
}

// Métodos básicos
localStorage.setItem("nome", "João");
const nome = localStorage.getItem("nome"); // "João"
localStorage.removeItem("nome");
// localStorage.clear(); // Limpa tudo
```

## History API

### Navegação programática

```javascript
// Navegar para nova URL
history.pushState({ page: 1 }, "Título 1", "/pagina1");
history.pushState({ page: 2 }, "Título 2", "/pagina2");

// Substituir estado atual
history.replaceState({ page: 3 }, "Título 3", "/pagina3");

// Voltar/avançar
history.back(); // Volta para /pagina1
history.forward(); // Avança para /pagina2
history.go(-2); // Volta 2 páginas
history.go(1); // Avança 1 página

// Evento popstate (voltar/avançar)
window.addEventListener("popstate", (event) => {
  console.log("Navegação:", event.state);
  if (event.state) {
    carregarPagina(event.state.page);
  }
});

// SPA Router com History API
class SPARouter {
  constructor() {
    this.routes = {};
    this.currentPath = window.location.pathname;
    this.init();
  }

  init() {
    // Capturar todos os links da aplicação
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a[data-spa]");
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute("href"));
      }
    });

    // Lidar com navegação do browser
    window.addEventListener("popstate", () => {
      this.handleRoute(window.location.pathname);
    });

    // Rota inicial
    this.handleRoute(this.currentPath);
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    history.pushState({}, "", path);
    this.handleRoute(path);
  }

  handleRoute(path) {
    const handler = this.routes[path] || this.routes["404"];
    if (handler) {
      handler();
    }
  }
}
```

## Geolocation API

### Obter localização do usuário

```javascript
// Verificar suporte
if ("geolocation" in navigator) {
  console.log("Geolocation suportado");
} else {
  console.log("Geolocation NÃO suportado");
}

// Obter posição atual
function obterLocalizacao() {
  const options = {
    enableHighAccuracy: true, // Maior precisão
    timeout: 5000, // Tempo máximo de espera
    maximumAge: 0, // Não usar cache
  };

  navigator.geolocation.getCurrentPosition(
    // Sucesso
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      console.log(`Latitude: ${latitude}`);
      console.log(`Longitude: ${longitude}`);
      console.log(`Precisão: ${accuracy} metros`);

      // Mostrar no mapa
      mostrarNoMapa(latitude, longitude);
    },
    // Erro
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("Usuário negou permissão");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Localização indisponível");
          break;
        case error.TIMEOUT:
          console.log("Tempo esgotado");
          break;
        case error.UNKNOWN_ERROR:
          console.log("Erro desconhecido");
          break;
      }
    },
    options
  );
}

// Monitorar mudanças de posição
function monitorarLocalizacao() {
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      atualizarPosicao(position.coords);
    },
    (error) => {
      console.error("Erro ao monitorar:", error);
    },
    {
      enableHighAccuracy: false,
      maximumAge: 30000, // Cache de 30 segundos
      timeout: 10000,
    }
  );

  // Parar monitoramento
  // navigator.geolocation.clearWatch(watchId);
}

// Classe wrapper para Geolocation
class LocationTracker {
  constructor() {
    this.watchId = null;
    this.positions = [];
    this.maxHistory = 50;
  }

  async getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation não suportado"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.positions.unshift(position);
          if (this.positions.length > this.maxHistory) {
            this.positions.pop();
          }
          resolve(position);
        },
        reject,
        {
          enableHighAccuracy: true,
          timeout: 10000,
        }
      );
    });
  }

  startTracking(options = {}) {
    const defaultOptions = {
      enableHighAccuracy: false,
      maximumAge: 30000,
      timeout: 15000,
    };

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.positions.unshift(position);
        if (this.positions.length > this.maxHistory) {
          this.positions.pop();
        }

        // Disparar evento
        this.onPositionUpdate?.(position);
      },
      (error) => {
        console.error("Erro no tracking:", error);
        this.onError?.(error);
      },
      { ...defaultOptions, ...options }
    );
  }

  stopTracking() {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  getDistance(lat1, lon1, lat2, lon2) {
    // Fórmula de Haversine
    const R = 6371; // Raio da Terra em km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  toRad(degrees) {
    return (degrees * Math.PI) / 180;
  }

  // Callbacks
  onPositionUpdate = null;
  onError = null;
}

// Exemplo de uso
const tracker = new LocationTracker();

// Obter localização única
tracker
  .getCurrentLocation()
  .then((position) => {
    console.log("Localização:", position.coords);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

// Começar tracking
tracker.onPositionUpdate = (position) => {
  console.log("Nova posição:", position.coords);
};

tracker.startTracking();
```

## Canvas API

### Desenho básico em canvas

```javascript
// Configuração inicial
const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

// Retângulos
ctx.fillStyle = "#FF0000"; // Cor de preenchimento
ctx.fillRect(10, 10, 100, 50); // x, y, largura, altura

ctx.strokeStyle = "#0000FF"; // Cor da borda
ctx.lineWidth = 3; // Espessura da linha
ctx.strokeRect(50, 30, 80, 60);

// Limpar área
ctx.clearRect(20, 20, 30, 30);

// Caminhos (paths)
ctx.beginPath();
ctx.moveTo(100, 100); // Mover para posição inicial
ctx.lineTo(200, 100); // Linha para
ctx.lineTo(150, 50); // Linha para
ctx.closePath(); // Voltar ao início
ctx.fillStyle = "#00FF00";
ctx.fill(); // Preencher
ctx.stroke(); // Contorno

// Círculos/arcos
ctx.beginPath();
ctx.arc(300, 200, 50, 0, Math.PI * 2); // x, y, raio, ângulo início, ângulo fim
ctx.fillStyle = "#FF9900";
ctx.fill();

// Texto
ctx.font = "30px Arial";
ctx.fillStyle = "#333";
ctx.fillText("Hello Canvas", 10, 250);

ctx.strokeStyle = "#000";
ctx.lineWidth = 1;
ctx.strokeText("Texto com borda", 10, 300);

// Imagens
const img = new Image();
img.onload = function () {
  // Desenhar imagem completa
  ctx.drawImage(img, 350, 10);

  // Desenhar parte da imagem
  // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(img, 10, 10, 100, 100, 400, 150, 80, 80);
};
img.src = "imagem.jpg";

// Gradientes
// Linear gradient
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(1, "green");

ctx.fillStyle = gradient;
ctx.fillRect(10, 350, 200, 50);

// Radial gradient
const radialGradient = ctx.createRadialGradient(400, 400, 10, 400, 400, 50);
radialGradient.addColorStop(0, "white");
radialGradient.addColorStop(1, "blue");

ctx.fillStyle = radialGradient;
ctx.beginPath();
ctx.arc(400, 400, 50, 0, Math.PI * 2);
ctx.fill();

// Transformações
ctx.save(); // Salvar estado atual

// Translação
ctx.translate(100, 100);
ctx.fillRect(0, 0, 50, 50);

// Rotação
ctx.rotate(Math.PI / 4); // 45 graus
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillRect(0, 0, 50, 50);

ctx.restore(); // Restaurar estado

// Animação básica
class AnimacaoCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.animacaoId = null;
    this.frameCount = 0;
    this.objects = [];
    this.init();
  }

  init() {
    // Configurar canvas responsivo
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());

    // Criar objetos
    this.createObjects();

    // Iniciar animação
    this.start();
  }

  resizeCanvas() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  createObjects() {
    // Criar alguns círculos animados
    for (let i = 0; i < 50; i++) {
      this.objects.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 10 + 5,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }
  }

  start() {
    const animate = () => {
      this.clear();
      this.update();
      this.draw();
      this.frameCount++;
      this.animacaoId = requestAnimationFrame(animate);
    };
    animate();
  }

  stop() {
    if (this.animacaoId) {
      cancelAnimationFrame(this.animacaoId);
    }
  }

  clear() {
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.objects.forEach((obj) => {
      // Mover objeto
      obj.x += obj.speedX;
      obj.y += obj.speedY;

      // Colisão com bordas
      if (obj.x < obj.radius || obj.x > this.canvas.width - obj.radius) {
        obj.speedX *= -1;
      }
      if (obj.y < obj.radius || obj.y > this.canvas.height - obj.radius) {
        obj.speedY *= -1;
      }

      // Interação entre objetos
      this.objects.forEach((other) => {
        if (obj !== other) {
          const dx = obj.x - other.x;
          const dy = obj.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < obj.radius + other.radius) {
            // Colisão simples
            obj.speedX *= -0.99;
            obj.speedY *= -0.99;
            other.speedX *= -0.99;
            other.speedY *= -0.99;
          }
        }
      });
    });
  }

  draw() {
    this.objects.forEach((obj) => {
      // Desenhar círculo
      this.ctx.beginPath();
      this.ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = obj.color;
      this.ctx.fill();
      this.ctx.strokeStyle = "#333";
      this.ctx.stroke();

      // Linhas entre objetos próximos
      this.objects.forEach((other) => {
        if (obj !== other) {
          const dx = obj.x - other.x;
          const dy = obj.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            this.ctx.beginPath();
            this.ctx.moveTo(obj.x, obj.y);
            this.ctx.lineTo(other.x, other.y);
            this.ctx.strokeStyle = `rgba(100, 100, 100, ${
              0.2 - distance / 500
            })`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
        }
      });
    });

    // Informações
    this.ctx.fillStyle = "#000";
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Frames: ${this.frameCount}`, 10, 20);
    this.ctx.fillText(`Objetos: ${this.objects.length}`, 10, 40);
  }

  addObject(x, y) {
    this.objects.push({
      x,
      y,
      radius: Math.random() * 10 + 5,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }

  clearObjects() {
    this.objects = [];
  }
}

// Exemplo de gráficos
class GraficoCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.dados = [];
    this.config = {
      padding: 40,
      corLinha: "#4A90E2",
      corPonto: "#FF6B6B",
      corGrade: "#E0E0E0",
      corTexto: "#666",
    };
  }

  setDados(dados) {
    this.dados = dados;
    this.render();
  }

  render() {
    this.clear();
    this.drawGrade();
    this.drawEixos();
    this.drawLinha();
    this.drawPontos();
    this.drawLegendas();
  }

  clear() {
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawGrade() {
    const { padding } = this.config;
    const width = this.canvas.width - padding * 2;
    const height = this.canvas.height - padding * 2;

    this.ctx.strokeStyle = this.config.corGrade;
    this.ctx.lineWidth = 0.5;

    // Linhas verticais
    for (let i = 0; i <= 10; i++) {
      const x = padding + (width / 10) * i;
      this.ctx.beginPath();
      this.ctx.moveTo(x, padding);
      this.ctx.lineTo(x, this.canvas.height - padding);
      this.ctx.stroke();
    }

    // Linhas horizontais
    for (let i = 0; i <= 10; i++) {
      const y = padding + (height / 10) * i;
      this.ctx.beginPath();
      this.ctx.moveTo(padding, y);
      this.ctx.lineTo(this.canvas.width - padding, y);
      this.ctx.stroke();
    }
  }

  drawEixos() {
    const { padding } = this.config;

    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 2;

    // Eixo X
    this.ctx.beginPath();
    this.ctx.moveTo(padding, this.canvas.height - padding);
    this.ctx.lineTo(this.canvas.width - padding, this.canvas.height - padding);
    this.ctx.stroke();

    // Eixo Y
    this.ctx.beginPath();
    this.ctx.moveTo(padding, padding);
    this.ctx.lineTo(padding, this.canvas.height - padding);
    this.ctx.stroke();
  }

  drawLinha() {
    if (this.dados.length < 2) return;

    const { padding } = this.config;
    const width = this.canvas.width - padding * 2;
    const height = this.canvas.height - padding * 2;

    // Encontrar valores máximo e mínimo
    const valores = this.dados.map((d) => d.valor);
    const maxValor = Math.max(...valores);
    const minValor = Math.min(...valores);
    const range = maxValor - minValor || 1;

    this.ctx.strokeStyle = this.config.corLinha;
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();

    this.dados.forEach((ponto, i) => {
      const x = padding + (width / (this.dados.length - 1)) * i;
      const y =
        this.canvas.height -
        padding -
        ((ponto.valor - minValor) / range) * height;

      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    });

    this.ctx.stroke();
  }

  drawPontos() {
    const { padding } = this.config;
    const width = this.canvas.width - padding * 2;
    const height = this.canvas.height - padding * 2;

    // Encontrar valores máximo e mínimo
    const valores = this.dados.map((d) => d.valor);
    const maxValor = Math.max(...valores);
    const minValor = Math.min(...valores);
    const range = maxValor - minValor || 1;

    this.dados.forEach((ponto, i) => {
      const x = padding + (width / (this.dados.length - 1)) * i;
      const y =
        this.canvas.height -
        padding -
        ((ponto.valor - minValor) / range) * height;

      this.ctx.beginPath();
      this.ctx.arc(x, y, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = this.config.corPonto;
      this.ctx.fill();
      this.ctx.strokeStyle = "#FFF";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    });
  }

  drawLegendas() {
    const { padding } = this.config;

    this.ctx.fillStyle = this.config.corTexto;
    this.ctx.font = "14px Arial";

    // Título dos eixos
    this.ctx.fillText("Valor", 10, padding / 2);
    this.ctx.save();
    this.ctx.translate(padding / 2, this.canvas.height / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText("Tempo", 0, 0);
    this.ctx.restore();
  }
}
```

## Web Workers

### Processamento em background

```javascript
// main.js - Arquivo principal
// Criar worker
const worker = new Worker("worker.js");

// Enviar mensagem para worker
worker.postMessage({
  tipo: "calculo",
  dados: [1, 2, 3, 4, 5],
});

// Receber mensagem do worker
worker.onmessage = (event) => {
  console.log("Resultado do worker:", event.data);
};

// Tratar erros
worker.onerror = (error) => {
  console.error("Erro no worker:", error);
};

// Encerrar worker
// worker.terminate();

// Worker inline (sem arquivo separado)
const blob = new Blob([
  `self.onmessage = function(e) {
        const result = e.data * 2;
        self.postMessage(result);
    }`,
]);

const inlineWorker = new Worker(URL.createObjectURL(blob));

// worker.js - Arquivo do worker
self.onmessage = function (event) {
  const { tipo, dados } = event.data;

  switch (tipo) {
    case "calculo":
      // Cálculos pesados
      const resultado = dados.reduce((acc, val) => acc + val, 0);
      self.postMessage({ resultado });
      break;

    case "processamento":
      // Processar dados
      const processados = dados.map((item) => item * 2);
      self.postMessage({ processados });
      break;
  }
};

// Exemplo: Worker para processamento de imagem
class ImageProcessor {
  constructor() {
    this.worker = new Worker(
      URL.createObjectURL(
        new Blob([
          `
            self.onmessage = function(e) {
                const { imageData, operation } = e.data;
                const data = imageData.data;

                switch(operation) {
                    case 'grayscale':
                        for (let i = 0; i < data.length; i += 4) {
                            const avg = (data[i] + data[i+1] + data[i+2]) / 3;
                            data[i] = avg;     // R
                            data[i+1] = avg;   // G
                            data[i+2] = avg;   // B
                        }
                        break;

                    case 'invert':
                        for (let i = 0; i < data.length; i += 4) {
                            data[i] = 255 - data[i];     // R
                            data[i+1] = 255 - data[i+1]; // G
                            data[i+2] = 255 - data[i+2]; // B
                        }
                        break;

                    case 'brightness':
                        const amount = e.data.amount || 0;
                        for (let i = 0; i < data.length; i += 4) {
                            data[i] = Math.min(255, data[i] + amount);
                            data[i+1] = Math.min(255, data[i+1] + amount);
                            data[i+2] = Math.min(255, data[i+2] + amount);
                        }
                        break;
                }

                self.postMessage(imageData);
            };
        `,
        ])
      )
    );

    this.pendingOperations = new Map();
    this.operationId = 0;
  }

  process(imageData, operation, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.operationId;

      this.worker.onmessage = (e) => {
        resolve(e.data);
      };

      this.worker.onerror = reject;

      this.worker.postMessage({
        ...params,
        imageData,
        operation,
      });
    });
  }

  destroy() {
    this.worker.terminate();
  }
}
```

## Service Workers

### Aplicações offline e cache

```javascript
// sw.js - Service Worker
const CACHE_NAME = "meu-app-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/imagens/icon.png",
];

// Instalação
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto");
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativação
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Removendo cache antigo:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - retornar do cache
      if (response) {
        return response;
      }

      // Clonar a requisição
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Verificar se é uma resposta válida
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clonar a resposta
        const responseToCache = response.clone();

        // Adicionar ao cache
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// main.js - Registrar Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker registrado:", registration);
      })
      .catch((error) => {
        console.log("Falha no registro:", error);
      });
  });
}

// Notificações push
self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "/imagens/icon.png",
    badge: "/imagens/badge.png",
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Ver mais",
        icon: "/imagens/checkmark.png",
      },
      {
        action: "close",
        title: "Fechar",
        icon: "/imagens/xmark.png",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("Notificação!", options));
});

// Clique em notificação
self.addEventListener("notificationclick", (event) => {
  console.log("Notificação clicada:", event.notification);
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === "/" && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    })
  );
});
```

## WebSockets

### Comunicação em tempo real

```javascript
// Cliente WebSocket
class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
    this.listeners = new Map();
    this.init();
  }

  init() {
    this.connect();
  }

  connect() {
    try {
      this.socket = new WebSocket(this.url);

      this.socket.onopen = () => {
        console.log("WebSocket conectado");
        this.reconnectAttempts = 0;
        this.emit("connect");
      };

      this.socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.emit("message", data);

          // Emitir evento específico se existir tipo
          if (data.type) {
            this.emit(data.type, data);
          }
        } catch (error) {
          console.error("Erro ao parsear mensagem:", error);
          this.emit("raw", event.data);
        }
      };

      this.socket.onclose = (event) => {
        console.log(`WebSocket desconectado: ${event.code} ${event.reason}`);
        this.emit("disconnect", { code: event.code, reason: event.reason });

        // Tentar reconectar
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
          setTimeout(() => {
            this.reconnectAttempts++;
            console.log(`Tentativa de reconexão ${this.reconnectAttempts}`);
            this.connect();
          }, this.reconnectDelay * this.reconnectAttempts);
        }
      };

      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        this.emit("error", error);
      };
    } catch (error) {
      console.error("Erro ao conectar WebSocket:", error);
    }
  }

  send(data) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      if (typeof data === "object") {
        this.socket.send(JSON.stringify(data));
      } else {
        this.socket.send(data);
      }
      return true;
    } else {
      console.warn("WebSocket não está conectado");
      return false;
    }
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  off(event, callback) {
    if (this.listeners.has(event)) {
      const callbacks = this.listeners.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach((callback) => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Erro no listener do evento ${event}:`, error);
        }
      });
    }
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }

  getState() {
    return this.socket ? this.socket.readyState : WebSocket.CLOSED;
  }
}

// Exemplo de uso
const ws = new WebSocketClient("wss://server.com/socket");

// Escutar eventos
ws.on("connect", () => {
  console.log("Conectado ao servidor");

  // Autenticar
  ws.send({
    type: "auth",
    token: "meu-token",
  });
});

ws.on("message", (data) => {
  console.log("Mensagem recebida:", data);
});

ws.on("chat_message", (data) => {
  console.log("Nova mensagem de chat:", data.message);
});

ws.on("disconnect", (data) => {
  console.log("Desconectado:", data.reason);
});

// Enviar mensagem
ws.send({
  type: "chat_message",
  message: "Olá, mundo!",
  user: "João",
});

// Chat em tempo real
class ChatApp {
  constructor() {
    this.ws = null;
    this.messages = [];
    this.users = new Set();
    this.init();
  }

  init() {
    this.ws = new WebSocketClient("wss://chat.server.com");

    this.ws.on("connect", this.onConnect.bind(this));
    this.ws.on("user_joined", this.onUserJoined.bind(this));
    this.ws.on("user_left", this.onUserLeft.bind(this));
    this.ws.on("chat_message", this.onChatMessage.bind(this));
    this.ws.on("typing", this.onTyping.bind(this));

    this.setupUI();
  }

  onConnect() {
    // Entrar na sala
    this.ws.send({
      type: "join",
      room: "geral",
      username: this.getUsername(),
    });

    this.updateStatus("Conectado");
  }

  onUserJoined(data) {
    this.users.add(data.username);
    this.addMessage({
      type: "system",
      content: `${data.username} entrou na sala`,
    });
    this.updateUserList();
  }

  onUserLeft(data) {
    this.users.delete(data.username);
    this.addMessage({
      type: "system",
      content: `${data.username} saiu da sala`,
    });
    this.updateUserList();
  }

  onChatMessage(data) {
    this.addMessage({
      type: "user",
      username: data.username,
      content: data.message,
      timestamp: data.timestamp,
    });
  }

  onTyping(data) {
    this.showTypingIndicator(data.username);
  }

  setupUI() {
    this.messageInput = document.getElementById("messageInput");
    this.sendButton = document.getElementById("sendButton");
    this.messagesContainer = document.getElementById("messages");
    this.usersContainer = document.getElementById("users");
    this.statusIndicator = document.getElementById("status");

    this.messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      } else {
        // Indicar que está digitando
        this.ws.send({ type: "typing" });
      }
    });

    this.sendButton.addEventListener("click", () => {
      this.sendMessage();
    });
  }

  sendMessage() {
    const content = this.messageInput.value.trim();
    if (content && this.ws.getState() === WebSocket.OPEN) {
      this.ws.send({
        type: "chat_message",
        message: content,
      });

      // Adicionar mensagem localmente
      this.addMessage({
        type: "self",
        content: content,
        timestamp: new Date().toISOString(),
      });

      this.messageInput.value = "";
    }
  }

  addMessage(message) {
    this.messages.push(message);
    this.renderMessage(message);

    // Limitar histórico
    if (this.messages.length > 100) {
      this.messages.shift();
      this.messagesContainer.removeChild(this.messagesContainer.firstChild);
    }

    // Scroll para baixo
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  renderMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${message.type}`;

    if (message.type === "user" || message.type === "self") {
      messageElement.innerHTML = `
                <div class="message-header">
                    <span class="username">${message.username || "Você"}</span>
                    <span class="timestamp">${this.formatTime(
                      message.timestamp
                    )}</span>
                </div>
                <div class="message-content">${this.escapeHtml(
                  message.content
                )}</div>
            `;
    } else {
      messageElement.innerHTML = `
                <div class="system-message">${message.content}</div>
            `;
    }

    this.messagesContainer.appendChild(messageElement);
  }

  updateUserList() {
    this.usersContainer.innerHTML = "";
    this.users.forEach((user) => {
      const userElement = document.createElement("div");
      userElement.className = "user";
      userElement.textContent = user;
      this.usersContainer.appendChild(userElement);
    });
  }

  updateStatus(status) {
    this.statusIndicator.textContent = status;
    this.statusIndicator.className = `status ${status.toLowerCase()}`;
  }

  showTypingIndicator(username) {
    // Implementar indicador de digitação
  }

  getUsername() {
    return (
      localStorage.getItem("chat_username") ||
      "Usuário" + Math.floor(Math.random() * 1000)
    );
  }

  formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}
```

## Intersection Observer

### Detectar visibilidade de elementos

```javascript
// Observador básico
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Elemento visível:", entry.target);
        entry.target.classList.add("visible");

        // Carregar lazy image
        if (entry.target.dataset.src) {
          entry.target.src = entry.target.dataset.src;
          entry.target.removeAttribute("data-src");
        }
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    // Opções
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% visível
  }
);

// Observar elementos
const elementos = document.querySelectorAll(".observavel");
elementos.forEach((el) => observer.observe(el));

// Parar de observar
// observer.unobserve(elemento);

// Lazy loading de imagens
class LazyLoader {
  constructor(options = {}) {
    this.options = {
      root: null,
      rootMargin: "50px 0px",
      threshold: 0.01,
      ...options,
    };

    this.observer = null;
    this.elements = new Map();
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.options
    );

    // Encontrar elementos lazy
    this.findElements();

    // Observar novos elementos dinamicamente
    this.observeDynamicContent();
  }

  findElements() {
    const lazyElements = document.querySelectorAll(
      "[data-src], [data-srcset], [data-background]"
    );

    lazyElements.forEach((element) => {
      this.addElement(element);
    });
  }

  addElement(element) {
    if (!this.elements.has(element)) {
      this.elements.set(element, {
        loaded: false,
        type: this.getElementType(element),
      });
      this.observer.observe(element);
    }
  }

  getElementType(element) {
    if (element.tagName === "IMG") {
      return element.hasAttribute("data-srcset") ? "srcset" : "src";
    } else if (element.hasAttribute("data-background")) {
      return "background";
    }
    return "src";
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.loadElement(entry.target);
      }
    });
  }

  loadElement(element) {
    const elementData = this.elements.get(element);

    if (!elementData || elementData.loaded) return;

    switch (elementData.type) {
      case "src":
        const src = element.getAttribute("data-src");
        if (src) {
          element.src = src;
          element.removeAttribute("data-src");
        }
        break;

      case "srcset":
        const srcset = element.getAttribute("data-srcset");
        if (srcset) {
          element.srcset = srcset;
          element.removeAttribute("data-srcset");
        }
        break;

      case "background":
        const background = element.getAttribute("data-background");
        if (background) {
          element.style.backgroundImage = `url(${background})`;
          element.removeAttribute("data-background");
        }
        break;
    }

    elementData.loaded = true;
    element.classList.add("lazy-loaded");

    // Parar de observar
    this.observer.unobserve(element);

    // Disparar evento
    element.dispatchEvent(
      new CustomEvent("lazyloaded", {
        detail: { element },
      })
    );
  }

  observeDynamicContent() {
    // Observar mudanças no DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const lazyElements = node.querySelectorAll(
              "[data-src], [data-srcset], [data-background]"
            );
            lazyElements.forEach((element) => {
              this.addElement(element);
            });

            // Verificar se o próprio nó é lazy
            if (
              node.hasAttribute("data-src") ||
              node.hasAttribute("data-srcset") ||
              node.hasAttribute("data-background")
            ) {
              this.addElement(node);
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  loadAll() {
    this.elements.forEach((data, element) => {
      if (!data.loaded) {
        this.loadElement(element);
      }
    });
  }

  destroy() {
    this.observer.disconnect();
    this.elements.clear();
  }
}

// Animação ao scroll
class ScrollAnimator {
  constructor(options = {}) {
    this.options = {
      threshold: 0.2,
      rootMargin: "0px",
      once: true,
      animateClass: "animate",
      ...options,
    };

    this.observer = null;
    this.animatedElements = new Set();
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: this.options.threshold,
        rootMargin: this.options.rootMargin,
      }
    );

    this.findElements();
    this.observeDynamicContent();
  }

  findElements() {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((element) => {
      this.addElement(element);
    });
  }

  addElement(element) {
    if (!this.animatedElements.has(element)) {
      this.animatedElements.add(element);
      this.observer.observe(element);
    }
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animateElement(entry.target);

        if (this.options.once) {
          this.observer.unobserve(entry.target);
        }
      } else if (!this.options.once) {
        this.resetElement(entry.target);
      }
    });
  }

  animateElement(element) {
    const animationType = element.getAttribute("data-animate") || "fadeIn";
    const delay = element.getAttribute("data-delay") || 0;

    element.style.animationDelay = `${delay}ms`;
    element.classList.add(this.options.animateClass, animationType);

    // Disparar evento
    element.dispatchEvent(
      new CustomEvent("animated", {
        detail: { element, animationType },
      })
    );

    // Remover classes após animação
    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove(animationType);
      },
      { once: true }
    );
  }

  resetElement(element) {
    element.classList.remove(this.options.animateClass);

    // Remover todas as classes de animação
    const classes = Array.from(element.classList);
    classes.forEach((className) => {
      if (className.startsWith("animate-")) {
        element.classList.remove(className);
      }
    });
  }

  observeDynamicContent() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const elements = node.querySelectorAll("[data-animate]");
            elements.forEach((element) => {
              this.addElement(element);
            });

            if (node.hasAttribute("data-animate")) {
              this.addElement(node);
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  animateAll() {
    this.animatedElements.forEach((element) => {
      this.animateElement(element);
    });
  }

  destroy() {
    this.observer.disconnect();
    this.animatedElements.clear();
  }
}

// Carregamento infinito
class InfiniteScroll {
  constructor(container, loader, options = {}) {
    this.container = container;
    this.loader = loader;
    this.options = {
      threshold: 0.1,
      rootMargin: "100px",
      loadingClass: "loading",
      ...options,
    };

    this.observer = null;
    this.loading = false;
    this.page = 1;
    this.hasMore = true;
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: this.options.threshold,
        rootMargin: this.options.rootMargin,
      }
    );

    this.observer.observe(this.loader);

    // Carregar primeira página
    this.loadNextPage();
  }

  async handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.loading && this.hasMore) {
        this.loadNextPage();
      }
    });
  }

  async loadNextPage() {
    if (this.loading || !this.hasMore) return;

    this.loading = true;
    this.loader.classList.add(this.options.loadingClass);

    try {
      const items = await this.fetchPage(this.page);

      if (items.length === 0) {
        this.hasMore = false;
        this.loader.style.display = "none";
      } else {
        this.appendItems(items);
        this.page++;
      }
    } catch (error) {
      console.error("Erro ao carregar página:", error);
      this.loader.textContent = "Erro ao carregar";
    } finally {
      this.loading = false;
      this.loader.classList.remove(this.options.loadingClass);
    }
  }

  async fetchPage(page) {
    // Implementar fetch de dados
    const response = await fetch(`/api/items?page=${page}`);
    return response.json();
  }

  appendItems(items) {
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const element = this.createItemElement(item);
      fragment.appendChild(element);
    });

    this.container.appendChild(fragment);
  }

  createItemElement(item) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
    return div;
  }

  reset() {
    this.page = 1;
    this.hasMore = true;
    this.loading = false;
    this.container.innerHTML = "";
    this.loader.style.display = "block";
    this.loader.textContent = "Carregando...";
    this.observer.observe(this.loader);
  }

  destroy() {
    this.observer.disconnect();
  }
}

// Exemplo de anúncios
class AdObserver {
  constructor() {
    this.observers = new Map();
    this.adImpressions = new Map();
    this.init();
  }

  init() {
    // Observar anúncios
    const ads = document.querySelectorAll(".advertisement");

    ads.forEach((ad, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.recordImpression(ad, index);
              this.trackViewTime(ad, index);
            } else {
              this.stopTracking(ad, index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "0px",
        }
      );

      observer.observe(ad);
      this.observers.set(index, observer);
      this.adImpressions.set(index, {
        viewStart: null,
        totalViewTime: 0,
        impressionCount: 0,
      });
    });
  }

  recordImpression(ad, index) {
    const data = this.adImpressions.get(index);

    // Contar impressão apenas se visível por pelo menos 1 segundo
    setTimeout(() => {
      if (data.viewStart) {
        data.impressionCount++;
        console.log(`Anúncio ${index} impresso: ${data.impressionCount} vezes`);

        // Disparar evento
        ad.dispatchEvent(
          new CustomEvent("adimpression", {
            detail: { ad, impressions: data.impressionCount },
          })
        );
      }
    }, 1000);
  }

  trackViewTime(ad, index) {
    const data = this.adImpressions.get(index);
    data.viewStart = Date.now();

    console.log(`Anúncio ${index} começou a ser visualizado`);
  }

  stopTracking(ad, index) {
    const data = this.adImpressions.get(index);

    if (data.viewStart) {
      const viewTime = Date.now() - data.viewStart;
      data.totalViewTime += viewTime;
      data.viewStart = null;

      console.log(`Anúncio ${index} visualizado por ${viewTime}ms`);

      // Disparar evento
      ad.dispatchEvent(
        new CustomEvent("adviewtime", {
          detail: { ad, viewTime, totalViewTime: data.totalViewTime },
        })
      );
    }
  }

  getStats() {
    const stats = {};
    this.adImpressions.forEach((data, index) => {
      stats[index] = {
        impressions: data.impressionCount,
        totalViewTime: data.totalViewTime,
      };
    });
    return stats;
  }

  destroy() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
    this.adImpressions.clear();
  }
}

// Observador para elementos sticky
class StickyObserver {
  constructor(stickyElement, options = {}) {
    this.stickyElement = stickyElement;
    this.options = {
      stickyClass: "sticky",
      unstickyClass: "unsticky",
      threshold: 0,
      ...options,
    };

    this.observer = null;
    this.isSticky = false;
    this.init();
  }

  init() {
    // Elemento sentinela antes do sticky
    const sentinel = document.createElement("div");
    sentinel.style.height = "1px";
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.left = "0";
    sentinel.style.width = "100%";

    this.stickyElement.parentNode.insertBefore(sentinel, this.stickyElement);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.makeSticky();
          } else {
            this.makeUnsticky();
          }
        });
      },
      {
        threshold: this.options.threshold,
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    this.observer.observe(sentinel);
  }

  makeSticky() {
    if (!this.isSticky) {
      this.stickyElement.classList.add(this.options.stickyClass);
      this.stickyElement.classList.remove(this.options.unstickyClass);
      this.isSticky = true;

      // Disparar evento
      this.stickyElement.dispatchEvent(new CustomEvent("stickystart"));
    }
  }

  makeUnsticky() {
    if (this.isSticky) {
      this.stickyElement.classList.remove(this.options.stickyClass);
      this.stickyElement.classList.add(this.options.unstickyClass);
      this.isSticky = false;

      // Disparar evento
      this.stickyElement.dispatchEvent(new CustomEvent("stickyend"));
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
```

## Uso Integrado das APIs

```javascript
// Aplicação completa usando múltiplas APIs
class AplicacaoCompleta {
  constructor() {
    // Inicializar todas as APIs
    this.storage = new StorageManager(localStorage);
    this.router = new SPARouter();
    this.locationTracker = new LocationTracker();
    this.lazyLoader = new LazyLoader();
    this.scrollAnimator = new ScrollAnimator();
    this.chat = new ChatApp();
    this.themeManager = new ThemeManager();
    this.userPrefs = new UserPreferences();

    this.init();
  }

  async init() {
    // Carregar preferências
    await this.carregarPreferencias();

    // Configurar tema
    this.themeManager.aplicarTema(this.userPrefs.prefs.tema);

    // Configurar Service Worker
    if ("serviceWorker" in navigator) {
      await this.registrarServiceWorker();
    }

    // Iniciar rastreamento de localização
    if (this.userPrefs.prefs.rastrearLocalizacao) {
      this.locationTracker.startTracking();
    }

    // Configurar rotas
    this.configurarRotas();

    // Configurar eventos
    this.configurarEventos();

    console.log("Aplicação inicializada");
  }

  async carregarPreferencias() {
    // Carregar do storage ou usar padrões
    const savedPrefs = this.storage.getObject("user_preferences");
    if (savedPrefs) {
      this.userPrefs.prefs = { ...this.userPrefs.prefs, ...savedPrefs };
    }
  }

  async registrarServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registrado:", registration);

      // Verificar atualizações
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            // Nova versão disponível
            this.mostrarAtualizacaoDisponivel();
          }
        });
      });
    } catch (error) {
      console.error("Falha no registro do Service Worker:", error);
    }
  }

  configurarRotas() {
    this.router.addRoute("/", () => this.carregarPaginaHome());
    this.router.addRoute("/perfil", () => this.carregarPaginaPerfil());
    this.router.addRoute("/configuracoes", () =>
      this.carregarPaginaConfiguracoes()
    );
    this.router.addRoute("/chat", () => this.carregarPaginaChat());
    this.router.addRoute("404", () => this.carregarPagina404());
  }

  configurarEventos() {
    // Sincronizar dados entre abas
    window.addEventListener("storage", (event) => {
      this.sincronizarDados(event);
    });

    // Salvar estado antes de sair
    window.addEventListener("beforeunload", () => {
      this.salvarEstado();
    });

    // Online/offline
    window.addEventListener("online", () => {
      this.mostrarStatus("online");
      this.sincronizarDadosPendentes();
    });

    window.addEventListener("offline", () => {
      this.mostrarStatus("offline");
    });

    // Geolocation updates
    this.locationTracker.onPositionUpdate = (position) => {
      this.atualizarLocalizacao(position);
    };
  }

  // Métodos da aplicação...
  carregarPaginaHome() {
    // Implementar carregamento da página home
  }

  carregarPaginaPerfil() {
    // Implementar carregamento da página de perfil
  }

  salvarEstado() {
    // Salvar estado atual no storage
    this.storage.set("app_state", {
      pagina: this.router.currentPath,
      dados: this.obterDadosAtuais(),
      timestamp: Date.now(),
    });
  }

  sincronizarDados(event) {
    // Sincronizar dados entre abas
    if (event.key === "app_state") {
      const novoEstado = JSON.parse(event.newValue);
      if (novoEstado.pagina !== this.router.currentPath) {
        // Navegar para a mesma página que outra aba
        this.router.navigate(novoEstado.pagina);
      }
    }
  }

  mostrarAtualizacaoDisponivel() {
    // Mostrar notificação de atualização
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Nova versão disponível!", {
        body: "Clique para atualizar a aplicação",
        icon: "/icon.png",
      }).onclick = () => {
        window.location.reload();
      };
    }
  }
}
```

Este material cobre as principais Web APIs do navegador com exemplos práticos e implementações robustas para uso em projetos reais.
