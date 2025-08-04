# APIs bastante comuns no frontend

## 1. Notification API
A **Notification API** permite que os sites enviem notificações ao usuário, mesmo quando o site não está em foco. Isso é útil para aplicações que precisam alertar o usuário sobre novas mensagens, atualizações ou eventos importantes.

### Funcionamento:
1. Solicitar permissão ao usuário.
2. Criar e exibir notificações após a permissão ser concedida.

### Exemplo Prático:
```javascript
// Solicitar permissão
Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
        // Criar uma notificação
        new Notification("Título da Notificação", {
            body: "Este é o corpo da notificação.",
            icon: "icone.png"
        });
    }
});
```

**Documentação:** [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification)

---

## 2. Geolocation API
A **Geolocation API** permite obter a localização geográfica do usuário, útil para aplicativos baseados em localização.

### Funcionamento:
- Usa GPS, Wi-Fi ou rede celular para determinar a localização.
- Pode obter a localização atual ou monitorar mudanças.

### Exemplo Prático:
```javascript
navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
});
```

**Documentação:** [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

---

## 3. Clipboard API
A **Clipboard API** permite interagir com a área de transferência do sistema para copiar e colar dados.

### Funcionamento:
- Escrever texto na área de transferência.
- Ler texto da área de transferência.

### Exemplo Prático:
```javascript
// Copiar texto
navigator.clipboard.writeText("Texto para copiar").then(function() {
    console.log("Texto copiado com sucesso!");
});

// Ler texto
navigator.clipboard.readText().then(function(text) {
    console.log("Texto colado: " + text);
});
```

**Documentação:** [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

---

## 4. Device Orientation API
A **Device Orientation API** fornece dados sobre a orientação do dispositivo, ideal para jogos e realidade aumentada.

### Funcionamento:
- Fornece eventos quando o dispositivo é movido ou girado.

### Exemplo Prático:
```javascript
window.addEventListener("deviceorientation", function(event) {
    console.log("Alpha: " + event.alpha); // Rotação eixo Z
    console.log("Beta: " + event.beta);   // Rotação eixo X
    console.log("Gamma: " + event.gamma); // Rotação eixo Y
});
```

**Documentação:** [Device Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events)

---

## 5. Speech Recognition API
A **Speech Recognition API** converte fala em texto, útil para comandos de voz e transcrições.

### Funcionamento:
- Configuração de idioma e parâmetros.
- Conversão de fala em texto.

### Exemplo Prático:
```javascript
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "pt-BR";
recognition.onresult = function(event) {
    console.log("Texto reconhecido: " + event.results[0][0].transcript);
};
recognition.start();
```

**Documentação:** [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

---

## 6. WebRTC API
A **WebRTC API** permite comunicação em tempo real entre navegadores, como chamadas de vídeo.

### Funcionamento:
- Captura de mídia (vídeo/áudio).
- Conexão direta entre navegadores.

### Exemplo Prático:
```javascript
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function(stream) {
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.play();
    });
```

**Documentação:** [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)

---

## 7. Page Visibility API
A **Page Visibility API** detecta quando uma página está visível ou oculta, útil para otimizações.

### Funcionamento:
- Evento acionado quando a visibilidade muda.

### Exemplo Prático:
```javascript
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        console.log("A página está oculta");
    } else {
        console.log("A página está visível");
    }
});
```

**Documentação:** [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)

---

## 8. Ambient Light Sensor API
A **Ambient Light Sensor API** acessa dados do sensor de luz ambiente para ajustes de tela.

### Funcionamento:
- Fornece leituras da intensidade da luz.

### Exemplo Prático:
```javascript
const sensor = new AmbientLightSensor();
sensor.onreading = function() {
    console.log("Nível de luz: " + sensor.illuminance + " lux");
};
sensor.start();
```

**Documentação:** [Ambient Light Sensor API](https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor)

---

Essas APIs oferecem funcionalidades poderosas para melhorar a experiência do usuário. **Verifique sempre a compatibilidade com navegadores** antes de implementar em produção.
