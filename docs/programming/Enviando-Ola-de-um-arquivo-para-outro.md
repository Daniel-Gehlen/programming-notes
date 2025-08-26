# Enviando "Olá" de um arquivo para outro

"Olá" entre arquivos em pastas diferentes usando JavaScript. Foco em operações básicas de leitura/escrita e comunicação entre arquivos.

---

### **1. Enviando "Olá" de um arquivo para outro (Node.js)**
#### Estrutura de pastas:
```
projeto/
│
├── pasta1/
│   └── enviar.js
│
└── pasta2/
    └── receber.js
```

#### **pasta1/enviar.js**
*(Envia a string "Olá" para um arquivo em outra pasta)*
```javascript
const fs = require('fs');
const path = require('path');

// Define o conteúdo e o caminho de destino
const conteudo = "Olá";
const caminhoDestino = path.join(__dirname, '../pasta2/receber.js');

// Escreve no arquivo de destino
fs.writeFileSync(caminhoDestino, `const mensagem = "${conteudo}";`);

console.log("Mensagem enviada para pasta2/receber.js!");
```

#### **pasta2/receber.js**
*(Recebe o "Olá" e exibe)*
```javascript
console.log(mensagem); // "Olá" (vindo do enviar.js)
```

#### Como executar:
```bash
node pasta1/enviar.js  # Isso atualiza o arquivo receber.js
node pasta2/receber.js # Agora mostra "Olá"
```

---

### **2. Comunicação via HTTP (Browser/Node)**
#### **Arquivo 1: servidor.js** *(Node.js)*
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Olá");
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
```

#### **Arquivo 2: cliente.html** *(Browser)*
```html
<!DOCTYPE html>
<html>
<body>
    <script>
        fetch('http://localhost:3000')
            .then(res => res.text())
            .then(texto => {
                document.body.innerHTML = texto; // Mostra "Olá"
            });
    </script>
</body>
</html>
```

#### Como executar:
1. Rode `node servidor.js` no terminal.
2. Abra `cliente.html` no navegador.

---

### **3. Usando `localStorage` (Browser)**
#### **Arquivo 1: enviar.html**
```html
<script>
    localStorage.setItem('mensagem', 'Olá');
    window.location.href = 'receber.html'; // Redireciona
</script>
```

#### **Arquivo 2: receber.html**
```html
<script>
    alert(localStorage.getItem('mensagem')); // Mostra "Olá"
</script>
```

---

### **4. Export/Import entre arquivos (ES Modules)**
#### **pasta1/enviar.js**
```javascript
export const mensagem = "Olá";
```

#### **pasta2/receber.js**
```javascript
import { mensagem } from '../pasta1/enviar.js';
console.log(mensagem); // "Olá"
```

#### Como executar:
- Adicione `type="module"` no HTML ou use `.mjs` como extensão.

---

### **5. Usando `require` (CommonJS)**
#### **pasta1/enviar.js**
```javascript
module.exports = "Olá";
```

#### **pasta2/receber.js**
```javascript
const mensagem = require('../pasta1/enviar.js');
console.log(mensagem); // "Olá"
```

---

### Resumo das técnicas:
| Técnica               | Ambiente      | Uso                           |
|-----------------------|--------------|-------------------------------|
| Leitura/Escrita (FS)  | Node.js      | Manipular arquivos físicos.   |
| HTTP                  | Node/Browser | Comunicação entre processos.  |
| `localStorage`        | Browser      | Dados persistidos no navegador. |
| ES Modules           | Browser/Node | Modularização moderna.        |
| CommonJS (`require`) | Node.js      | Modularização tradicional.    |

Escolha a que melhor se adapta ao seu projeto! Para operações **entre pastas**, a solução com `fs` (Node.js) ou módulos é a mais direta.

---

# O que é o `fs` em Node.js?

O `fs` (File System) é um **módulo nativo do Node.js** que permite interagir com o sistema de arquivos do computador. Ele fornece métodos para:

## Principais funcionalidades:
1. **Ler arquivos** (`readFile`, `readFileSync`)
2. **Escrever arquivos** (`writeFile`, `writeFileSync`)
3. **Manipular pastas** (`mkdir`, `readdir`)
4. **Monitorar alterações** (`watch`)
5. **Gerenciar permissões** (`chmod`, `chown`)

## Exemplo Básico:
```javascript
const fs = require('fs');

// Lendo um arquivo
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Escrevendo em um arquivo
fs.writeFile('novo.txt', 'Olá mundo!', (err) => {
    if (err) throw err;
    console.log('Arquivo salvo!');
});
```

## Versões Síncronas vs Assíncronas:
| Método Assíncrono (recomendado) | Método Síncrono (bloqueante) |
|-------------------------------|----------------------------|
| `fs.readFile()`               | `fs.readFileSync()`        |
| `fs.writeFile()`              | `fs.writeFileSync()`       |
| Usa callbacks/Promises        | Bloqueia a thread          |

## Quando usar?
- **CRUD** de arquivos
- Criar **logs** do sistema
- Processar **arquivos de configuração**
- Manipular **uploads** em servidores

O `fs` é essencial para qualquer aplicação Node.js que precise armazenar ou ler dados persistentes no sistema de arquivos.

---

# **"Olá"** para o seu e-mail usando JavaScript

Para enviar o texto **"Olá"** para o seu e-mail usando JavaScript, você precisará de um **servidor Node.js** com um pacote como **Nodemailer**, que permite o envio de e-mails.

---

## 📨 **Enviando "Olá" para seu e-mail com Node.js**

### **1. Instale o Node.js**
Se ainda não tiver, baixe e instale:
🔗 [https://nodejs.org/](https://nodejs.org/)

### **2. Crie um projeto Node.js**
Abra o terminal e execute:
```bash
mkdir enviar-email && cd enviar-email
npm init -y
npm install nodemailer
```

### **3. Crie um arquivo `enviar-email.js`**
```javascript
const nodemailer = require('nodemailer');

// Configurações do e-mail (substitua com seus dados)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou outro serviço (Outlook, Yahoo, etc.)
    auth: {
        user: 'seuemail@gmail.com', // Seu e-mail
        pass: 'suasenha' // Sua senha (ou senha de app se usar 2FA)
    }
});

// Opções do e-mail
const mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'destinatario@email.com', // Pode ser o mesmo e-mail
    subject: 'Olá do JavaScript!',
    text: 'Olá! Esta mensagem foi enviada via Node.js.'
};

// Envia o e-mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erro:', error);
    } else {
        console.log('E-mail enviado:', info.response);
    }
});
```

### **4. Execute o script**
```bash
node enviar-email.js
```

---

## 🔐 **Problemas comuns e soluções**
### ⚠ **Erro de autenticação?**
Se usar **Gmail**, siga estes passos:
1. Ative **"Acesso a app menos seguro"** (não recomendado) ou
2. Crie uma **Senha de App** (recomendado):
   - Vá em [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Selecione **"Mail"** e **"Other (Custom Name)"**
   - Cole a senha gerada no lugar de `suasenha`.

### 📧 **Usando outros serviços (Outlook, Yahoo, etc.)**
Troque o `service` no `createTransport`:
```javascript
// Para Outlook (Hotmail)
service: 'outlook',

// Para Yahoo
service: 'yahoo',
```

---

## 🚀 **Alternativa mais simples (sem Node.js)**
Se não quiser usar Node.js, você pode:
1. **Usar um serviço de formulário** (Google Forms + Notificações por e-mail).
2. **Usar PHP** (se tiver um servidor web).
3. **Ferramentas como Zapier** para automatizar o envio.

---

### 📌 **Resumo**
| Método               | Dificuldade | Requisitos               |
|----------------------|------------|--------------------------|
| **Node.js + Nodemailer** | ⭐⭐ | Node.js, conta de e-mail |
| **Google Script**     | ⭐⭐⭐ | Conta Google            |
| **PHP**              | ⭐⭐⭐ | Servidor web (Apache)   |

---

# OAuth2 Simplificado para Enviar E-mails com Node.js (Nodemailer)

OAuth2 é um protocolo de autorização seguro que permite aplicações enviarem e-mails sem precisar armazenar sua senha diretamente no código. Versão simples para usar com o Nodemailer:

## Como Funciona (Fluxo Básico):

1. **Você registra sua aplicação** no serviço de e-mail (Google, Microsoft, etc.)
2. **Obtém credenciais** (Client ID e Client Secret)
3. **Gera um token de acesso** temporário
4. **Usa esse token** para enviar e-mails

## Passo a Passo para Gmail:

### 1. Criar Projeto no Google Cloud Console
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto
3. Ative a API "Gmail API"

### 2. Configurar Credenciais OAuth
1. Vá em "APIs e Serviços" > "Credenciais"
2. Clique em "Criar Credenciais" > "ID do cliente OAuth"
3. Selecione "Aplicativo de computador"
4. Anote seu **Client ID** e **Client Secret**

### 3. Instalar Dependências
```bash
npm install nodemailer googleapis
```

### 4. Código Simplificado (usando OAuth2)
```javascript
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Configurações OAuth2
const CLIENT_ID = 'seu-client-id.apps.googleusercontent.com';
const CLIENT_SECRET = 'seu-client-secret';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = 'seu-refresh-token'; // Obter no passo 5

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'seuemail@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: 'Seu Nome <seuemail@gmail.com>',
      to: 'destinatario@email.com',
      subject: 'Olá via OAuth2!',
      text: 'Esta mensagem foi enviada usando OAuth2.'
    };

    const result = await transport.sendMail(mailOptions);
    console.log('E-mail enviado:', result.messageId);
  } catch (error) {
    console.error('Erro:', error);
  }
}

sendMail();
```

### 5. Obter o Refresh Token (Primeira Vez)
1. Acesse o [OAuth Playground](https://developers.google.com/oauthplayground)
2. Selecione a API Gmail (https://mail.google.com/)
3. Clique em "Authorize APIs"
4. Após autorizar, clique em "Exchange authorization code for tokens"
5. Copie o **refresh_token** gerado

## Vantagens do OAuth2:
- ✅ Mais seguro que senhas armazenadas no código
- ✅ Tokens temporários (menos risco)
- ✅ Pode ser revogado a qualquer momento
- ✅ Funciona com autenticação em 2 fatores

## Fluxo Visual:
```
Sua Aplicação → Solicita Autorização → Serviço Google
       ↑                                      |
       |                                      ↓
       └── Recebe Token ←── Valida Credenciais
```
