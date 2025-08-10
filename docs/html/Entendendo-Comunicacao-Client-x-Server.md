# Entendendo Comunicação Client x Server

## Primeiros Passos com HTML

---

### **Objetivo Geral**

✔ Compreender a história do computador e da internet
✔ Entender a comunicação entre Client e Server no acesso a páginas web ou apps

---

## **Etapa 01 - História da Web**

### **Evolução dos Computadores**

| Geração | Período   | Marco Tecnológico        |
| ------- | --------- | ------------------------ |
| 1ª      | 1944-1956 | Harvard Mark I, ENIAC    |
| 2ª      | 1959-1965 | Transistores             |
| 3ª      | 1965-1970 | Circuitos integrados     |
| 4ª      | 1971+     | Microprocessadores       |
| 5ª      | Atual     | IA e computação avançada |

### **Surgimento da Internet**

- **1958**: Telégrafo (Guerra Fria) → DARPA
- **1969**: 1ª conexão (UCLA ↔ SRI)
- **1989**: Tim Berners-Lee cria a **WWW** (WorldWideWeb)

### **Grandes Nomes**

- **Grace Hopper**: Flow-Matic (base do COBOL)
- **Tim Berners-Lee**: Inventor do WWW
- **Marc Andreessen**: Netscape Navigator

---

## **Etapa 02 - O que são Clients?**

### **Conceito**

Dispositivo/software que **solicita dados** a um servidor (ex: navegadores, apps).

### **Navegadores**

- **História**: MOSAIC → Netscape → Chrome/Firefox
- **Padrões**: W3C (com variações de interpretação)

### **Aplicações Web vs. Nativas**

| Tipo           | Instalação | Acesso        | Exemplo   |
| -------------- | ---------- | ------------- | --------- |
| **Web App**    | Não        | Via navegador | Gmail     |
| **App Nativo** | Sim        | Dispositivo   | Instagram |

### **Dispositivos Móveis**

📱 **Fato**: >50% do tráfego web vem de celulares.

---

## **Etapa 03 - O que são Servers?**

### **Conceito**

Sistema que **fornece recursos** (dados, serviços) para clients.

### **Funções Principais**

- Hospedagem de sites
- Armazenamento de arquivos
- Segurança (firewalls, SSL)

### **Tipos de Servidores**

| Tipo                | Função                   | Exemplo       |
| ------------------- | ------------------------ | ------------- |
| **Web Server**      | Hospeda sites            | Apache, Nginx |
| **E-mail Server**   | Gerencia e-mails         | Postfix       |
| **Database Server** | Armazena bancos de dados | MySQL         |

### **DNS (Domain Name Service)**

🔗 Traduz **nomes de domínio** (ex: `google.com`) → **IP** (ex: `142.250.218.14`).

---

## **Etapa 04 - Linguagens de Programação Web**

### **Linguagens Server-Side**

- **Função**: Processamento no servidor (ex: autenticação de usuários).
- **Exemplos**: PHP, Python (Django), Java.

### **Linguagens Client-Side**

- **Função**: Executadas no navegador (ex: animações).
- **Exemplo**: JavaScript.

### **HTML (Linguagem de Marcação)**

- **Não é programação!** Define estrutura de páginas web:
  ```html
  <h1>Título</h1>
  <p>Parágrafo</p>
  ```

---

## **Fluxo Cliente-Servidor**

1. **Cliente** solicita uma página (ex: `www.exemplo.com`).
2. **DNS** converte o domínio em IP.
3. **Servidor** processa a requisição (PHP/Python) e envia HTML/CSS/JS.
4. **Navegador** renderiza a página.

---
