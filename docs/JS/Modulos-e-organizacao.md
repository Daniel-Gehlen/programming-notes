# 10. MÓDULOS E ORGANIZAÇÃO

## ES6 Modules (import/export)

### Módulos ES6 Modernos

```javascript
// módulo.js - Exportação padrão (uma por módulo)
const valorPadrao = "Valor padrão";
export default valorPadrao;

// Também pode exportar diretamente
export default function minhaFuncao() {
    return "Hello World";
}

// módulo.js - Exportação nomeada (múltiplas por módulo)
export const PI = 3.14159;
export const GRAVIDADE = 9.8;

export function calcularArea(raio) {
    return PI * raio * raio;
}

export class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// Exportação agregada
const valor1 = "valor1";
const valor2 = "valor2";
export { valor1, valor2 };

// Exportação com renomeação
export { valor1 as v1, valor2 as v2 };

// Exportação de valor padrão e nomeados juntos
const valorPadrao = "default";
export { valorPadrao as default, valor1, valor2 };

// main.js - Importação
// Importação padrão
import meuPadrao from './modulo.js';

// Importação nomeada
import { PI, calcularArea } from './modulo.js';

// Importação com renomeação
import { PI as piValue, calcularArea as area } from './modulo.js';

// Importação de tudo como objeto
import * as modulo from './modulo.js';
console.log(modulo.PI);
console.log(modulo.calcularArea(10));

// Importação mista
import padrao, { PI, calcularArea } from './modulo.js';

// Importação apenas para efeitos colaterais
import './inicializacao.js';

// Importação re-exportação
export { PI, calcularArea } from './modulo.js';
export { default } from './modulo.js';

// Re-exportação com renomeação
export { PI as PiValue, calcularArea as calcArea } from './modulo.js';

// Re-exportação agregada
export * from './modulo.js'; // Não exporta default
export * as modulo from './modulo.js'; // ES2020
```

### Sistema de Módulos Avançado

```javascript
// utils/math.js - Módulo de matemática
export function soma(a, b) {
  return a + b;
}

export function subtracao(a, b) {
  return a - b;
}

export function multiplicacao(a, b) {
  return a * b;
}

export function divisao(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}

export function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

export function raizQuadrada(numero) {
  return Math.sqrt(numero);
}

export const PI = Math.PI;
export const E = Math.E;

// utils/string.js - Módulo de strings
export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export function inverter(texto) {
  return texto.split("").reverse().join("");
}

export function contarPalavras(texto) {
  return texto.trim().split(/\s+/).length;
}

export function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function slugify(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

// utils/date.js - Módulo de datas
export function formatarData(data, formato = "dd/mm/yyyy") {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const hora = String(data.getHours()).padStart(2, "0");
  const minuto = String(data.getMinutes()).padStart(2, "0");
  const segundo = String(data.getSeconds()).padStart(2, "0");

  switch (formato) {
    case "dd/mm/yyyy":
      return `${dia}/${mes}/${ano}`;
    case "yyyy-mm-dd":
      return `${ano}-${mes}-${dia}`;
    case "dd/mm/yyyy hh:mm:ss":
      return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    default:
      return data.toISOString();
  }
}

export function diferencaEmDias(data1, data2) {
  const diff = Math.abs(data1 - data2);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function adicionarDias(data, dias) {
  const novaData = new Date(data);
  novaData.setDate(novaData.getDate() + dias);
  return novaData;
}

export function ehFimDeSemana(data) {
  const dia = data.getDay();
  return dia === 0 || dia === 6;
}

// utils/validation.js - Módulo de validação
export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpf.charAt(10));
}

export function validarTelefone(telefone) {
  const regex = /^(\+55)?\s?(\(?\d{2}\)?)?\s?\d{4,5}[-.\s]?\d{4}$/;
  return regex.test(telefone);
}

export function validarURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function validarSenha(senha) {
  const criterios = {
    minLength: senha.length >= 8,
    hasUpperCase: /[A-Z]/.test(senha),
    hasLowerCase: /[a-z]/.test(senha),
    hasNumbers: /\d/.test(senha),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
  };

  return {
    valida: Object.values(criterios).every(Boolean),
    criterios,
  };
}

// utils/storage.js - Módulo de armazenamento
export class StorageManager {
  constructor(storage = localStorage, prefix = "app_") {
    this.storage = storage;
    this.prefix = prefix;
  }

  set(chave, valor, ttl = null) {
    const item = {
      valor,
      timestamp: Date.now(),
      ttl,
    };

    try {
      this.storage.setItem(this.prefix + chave, JSON.stringify(item));
      return true;
    } catch (error) {
      console.error("Erro ao salvar:", error);
      return false;
    }
  }

  get(chave, valorPadrao = null) {
    const itemStr = this.storage.getItem(this.prefix + chave);

    if (!itemStr) return valorPadrao;

    try {
      const item = JSON.parse(itemStr);

      if (item.ttl && Date.now() - item.timestamp > item.ttl) {
        this.remove(chave);
        return valorPadrao;
      }

      return item.valor;
    } catch {
      return valorPadrao;
    }
  }

  remove(chave) {
    this.storage.removeItem(this.prefix + chave);
  }

  clear() {
    const chaves = [];

    for (let i = 0; i < this.storage.length; i++) {
      const chave = this.storage.key(i);
      if (chave.startsWith(this.prefix)) {
        chaves.push(chave);
      }
    }

    chaves.forEach((chave) => this.storage.removeItem(chave));
  }
}

// utils/api.js - Módulo de API
export class APIClient {
  constructor(baseURL, config = {}) {
    this.baseURL = baseURL;
    this.config = {
      headers: {
        "Content-Type": "application/json",
        ...config.headers,
      },
      timeout: config.timeout || 10000,
      ...config,
    };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...this.config,
      ...options,
      headers: {
        ...this.config.headers,
        ...options.headers,
      },
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout);

    try {
      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      }

      return await response.text();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  get(endpoint, params = {}, options = {}) {
    const urlParams = new URLSearchParams(params);
    const query = urlParams.toString();
    const url = query ? `${endpoint}?${query}` : endpoint;

    return this.request(url, { ...options, method: "GET" });
  }

  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  }
}

// utils/logger.js - Módulo de logging
export class Logger {
  constructor(nome, nivel = "info") {
    this.nome = nome;
    this.nivel = nivel;
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
    };
  }

  log(nivel, mensagem, ...args) {
    if (this.levels[nivel] <= this.levels[this.nivel]) {
      const timestamp = new Date().toISOString();
      const prefix = `[${timestamp}] [${this.nome}] [${nivel.toUpperCase()}]`;

      switch (nivel) {
        case "error":
          console.error(prefix, mensagem, ...args);
          break;
        case "warn":
          console.warn(prefix, mensagem, ...args);
          break;
        case "info":
          console.info(prefix, mensagem, ...args);
          break;
        case "debug":
          console.debug(prefix, mensagem, ...args);
          break;
        default:
          console.log(prefix, mensagem, ...args);
      }
    }
  }

  error(mensagem, ...args) {
    this.log("error", mensagem, ...args);
  }

  warn(mensagem, ...args) {
    this.log("warn", mensagem, ...args);
  }

  info(mensagem, ...args) {
    this.log("info", mensagem, ...args);
  }

  debug(mensagem, ...args) {
    this.log("debug", mensagem, ...args);
  }

  setNivel(nivel) {
    if (this.levels[nivel] !== undefined) {
      this.nivel = nivel;
    }
  }
}

// utils/index.js - Barrel export (ponto de entrada)
export * from "./math.js";
export * from "./string.js";
export * from "./date.js";
export * from "./validation.js";
export { StorageManager } from "./storage.js";
export { APIClient } from "./api.js";
export { Logger } from "./logger.js";

// services/userService.js - Serviço de usuários
import { APIClient } from "../utils/api.js";
import { Logger } from "../utils/logger.js";

export class UserService {
  constructor() {
    this.api = new APIClient("https://api.exemplo.com");
    this.logger = new Logger("UserService");
    this.cache = new Map();
  }

  async getUsers(filtros = {}) {
    const cacheKey = `users_${JSON.stringify(filtros)}`;

    if (this.cache.has(cacheKey)) {
      this.logger.debug("Cache hit for users");
      return this.cache.get(cacheKey);
    }

    try {
      this.logger.info("Fetching users", filtros);
      const users = await this.api.get("/users", filtros);
      this.cache.set(cacheKey, users);
      return users;
    } catch (error) {
      this.logger.error("Error fetching users", error);
      throw error;
    }
  }

  async getUser(id) {
    const cacheKey = `user_${id}`;

    if (this.cache.has(cacheKey)) {
      this.logger.debug("Cache hit for user", id);
      return this.cache.get(cacheKey);
    }

    try {
      this.logger.info("Fetching user", id);
      const user = await this.api.get(`/users/${id}`);
      this.cache.set(cacheKey, user);
      return user;
    } catch (error) {
      this.logger.error("Error fetching user", id, error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      this.logger.info("Creating user", userData);
      const newUser = await this.api.post("/users", userData);
      this.clearCache();
      return newUser;
    } catch (error) {
      this.logger.error("Error creating user", error);
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      this.logger.info("Updating user", id, userData);
      const updatedUser = await this.api.put(`/users/${id}`, userData);
      this.cache.delete(`user_${id}`);
      return updatedUser;
    } catch (error) {
      this.logger.error("Error updating user", error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      this.logger.info("Deleting user", id);
      await this.api.delete(`/users/${id}`);
      this.cache.delete(`user_${id}`);
    } catch (error) {
      this.logger.error("Error deleting user", error);
      throw error;
    }
  }

  clearCache() {
    this.logger.debug("Clearing cache");
    this.cache.clear();
  }
}

// services/productService.js - Serviço de produtos
import { APIClient } from "../utils/api.js";
import { Logger } from "../utils/logger.js";

export class ProductService {
  constructor() {
    this.api = new APIClient("https://api.exemplo.com");
    this.logger = new Logger("ProductService");
  }

  async getProducts(categoria = null, pagina = 1, limite = 20) {
    const params = { pagina, limite };
    if (categoria) params.categoria = categoria;

    try {
      this.logger.info("Fetching products", params);
      return await this.api.get("/products", params);
    } catch (error) {
      this.logger.error("Error fetching products", error);
      throw error;
    }
  }

  async searchProducts(query, filtros = {}) {
    try {
      this.logger.info("Searching products", { query, filtros });
      return await this.api.get("/products/search", { q: query, ...filtros });
    } catch (error) {
      this.logger.error("Error searching products", error);
      throw error;
    }
  }
}

// services/authService.js - Serviço de autenticação
import { APIClient } from "../utils/api.js";
import { StorageManager } from "../utils/storage.js";
import { Logger } from "../utils/logger.js";

export class AuthService {
  constructor() {
    this.api = new APIClient("https://api.exemplo.com");
    this.storage = new StorageManager(localStorage, "auth_");
    this.logger = new Logger("AuthService");
    this.token = this.getToken();
  }

  async login(credenciais) {
    try {
      this.logger.info("Attempting login");
      const response = await this.api.post("/auth/login", credenciais);

      if (response.token) {
        this.setToken(response.token);
        this.logger.info("Login successful");
        return response;
      }

      throw new Error("No token received");
    } catch (error) {
      this.logger.error("Login failed", error);
      throw error;
    }
  }

  async register(dados) {
    try {
      this.logger.info("Attempting registration");
      return await this.api.post("/auth/register", dados);
    } catch (error) {
      this.logger.error("Registration failed", error);
      throw error;
    }
  }

  async logout() {
    try {
      this.logger.info("Logging out");
      await this.api.post("/auth/logout");
    } finally {
      this.clearToken();
      this.logger.info("Logged out");
    }
  }

  async refreshToken() {
    try {
      this.logger.info("Refreshing token");
      const response = await this.api.post("/auth/refresh");

      if (response.token) {
        this.setToken(response.token);
        return response.token;
      }

      throw new Error("No token received");
    } catch (error) {
      this.logger.error("Token refresh failed", error);
      this.clearToken();
      throw error;
    }
  }

  setToken(token) {
    this.token = token;
    this.storage.set("token", token, 24 * 60 * 60 * 1000); // 24 horas
    this.api.config.headers["Authorization"] = `Bearer ${token}`;
  }

  getToken() {
    return this.storage.get("token");
  }

  clearToken() {
    this.token = null;
    this.storage.remove("token");
    delete this.api.config.headers["Authorization"];
  }

  isAuthenticated() {
    return !!this.token;
  }

  getUserInfo() {
    if (!this.token) return null;

    try {
      const payload = JSON.parse(atob(this.token.split(".")[1]));
      return payload;
    } catch {
      return null;
    }
  }
}

// services/index.js - Barrel export para serviços
export { UserService } from "./userService.js";
export { ProductService } from "./productService.js";
export { AuthService } from "./authService.js";

// components/Button.js - Componente de botão
export class Button {
  constructor(texto, onClick, options = {}) {
    this.texto = texto;
    this.onClick = onClick;
    this.options = {
      tipo: "button",
      estilo: "primary",
      tamanho: "medium",
      desabilitado: false,
      ...options,
    };

    this.element = this.criarElemento();
  }

  criarElemento() {
    const button = document.createElement("button");

    button.type = this.options.tipo;
    button.textContent = this.texto;
    button.disabled = this.options.desabilitado;

    // Adicionar classes CSS
    button.classList.add(
      "btn",
      `btn-${this.options.estilo}`,
      `btn-${this.options.tamanho}`
    );

    // Adicionar evento
    button.addEventListener("click", (e) => {
      if (!this.options.desabilitado) {
        this.onClick(e);
      }
    });

    // Adicionar atributos personalizados
    if (this.options.id) button.id = this.options.id;
    if (this.options.titulo) button.title = this.options.titulo;

    return button;
  }

  render(container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }

    if (container) {
      container.appendChild(this.element);
    }

    return this.element;
  }

  habilitar() {
    this.options.desabilitado = false;
    this.element.disabled = false;
    this.element.classList.remove("disabled");
  }

  desabilitar() {
    this.options.desabilitado = true;
    this.element.disabled = true;
    this.element.classList.add("disabled");
  }

  atualizarTexto(novoTexto) {
    this.texto = novoTexto;
    this.element.textContent = novoTexto;
  }

  destruir() {
    this.element.remove();
  }
}

// components/Modal.js - Componente de modal
export class Modal {
  constructor(options = {}) {
    this.options = {
      titulo: "Modal",
      conteudo: "",
      tamanho: "medium",
      fecharAoClicarFora: true,
      mostrarBotaoFechar: true,
      ...options,
    };

    this.element = null;
    this.isOpen = false;
    this.onCreate = options.onCreate;
    this.onClose = options.onClose;

    this.inicializar();
  }

  inicializar() {
    this.criarElemento();
    this.configurarEventos();
  }

  criarElemento() {
    // Overlay
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    // Modal
    const modal = document.createElement("div");
    modal.className = `modal modal-${this.options.tamanho}`;

    // Cabeçalho
    const cabecalho = document.createElement("div");
    cabecalho.className = "modal-header";

    const titulo = document.createElement("h3");
    titulo.className = "modal-title";
    titulo.textContent = this.options.titulo;

    cabecalho.appendChild(titulo);

    if (this.options.mostrarBotaoFechar) {
      const botaoFechar = document.createElement("button");
      botaoFechar.className = "modal-close";
      botaoFechar.innerHTML = "&times;";
      botaoFechar.addEventListener("click", () => this.fechar());

      cabecalho.appendChild(botaoFechar);
    }

    // Corpo
    const corpo = document.createElement("div");
    corpo.className = "modal-body";

    if (typeof this.options.conteudo === "string") {
      corpo.innerHTML = this.options.conteudo;
    } else if (this.options.conteudo instanceof HTMLElement) {
      corpo.appendChild(this.options.conteudo);
    }

    // Rodapé
    const rodape = document.createElement("div");
    rodape.className = "modal-footer";

    // Botões customizados
    if (this.options.botoes) {
      this.options.botoes.forEach((botaoConfig) => {
        const botao = document.createElement("button");
        botao.textContent = botaoConfig.texto;
        botao.className = `btn btn-${botaoConfig.estilo || "secondary"}`;
        botao.addEventListener("click", () => {
          botaoConfig.onClick?.();
          if (botaoConfig.fecharAoClicar !== false) {
            this.fechar();
          }
        });

        rodape.appendChild(botao);
      });
    }

    // Montar modal
    modal.appendChild(cabecalho);
    modal.appendChild(corpo);

    if (rodape.children.length > 0) {
      modal.appendChild(rodape);
    }

    overlay.appendChild(modal);

    this.element = overlay;
    this.modalElement = modal;
  }

  configurarEventos() {
    // Fechar ao clicar no overlay
    if (this.options.fecharAoClicarFora) {
      this.element.addEventListener("click", (e) => {
        if (e.target === this.element) {
          this.fechar();
        }
      });
    }

    // Fechar com ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.fechar();
      }
    });
  }

  abrir() {
    if (!this.isOpen) {
      document.body.appendChild(this.element);
      document.body.classList.add("modal-open");
      this.isOpen = true;

      // Trigger onCreate callback
      this.onCreate?.();

      // Animar entrada
      setTimeout(() => {
        this.element.classList.add("show");
        this.modalElement.classList.add("show");
      }, 10);
    }
  }

  fechar() {
    if (this.isOpen) {
      // Animar saída
      this.element.classList.remove("show");
      this.modalElement.classList.remove("show");

      setTimeout(() => {
        if (this.element.parentNode) {
          this.element.remove();
        }
        document.body.classList.remove("modal-open");
        this.isOpen = false;

        // Trigger onClose callback
        this.onClose?.();
      }, 300);
    }
  }

  atualizarConteudo(novoConteudo) {
    const corpo = this.modalElement.querySelector(".modal-body");

    if (corpo) {
      corpo.innerHTML = "";

      if (typeof novoConteudo === "string") {
        corpo.innerHTML = novoConteudo;
      } else if (novoConteudo instanceof HTMLElement) {
        corpo.appendChild(novoConteudo);
      }
    }
  }

  atualizarTitulo(novoTitulo) {
    const titulo = this.modalElement.querySelector(".modal-title");

    if (titulo) {
      titulo.textContent = novoTitulo;
    }
  }

  destruir() {
    this.fechar();
    this.element = null;
    this.modalElement = null;
  }
}

// components/Notification.js - Componente de notificação
export class Notification {
  constructor(mensagem, options = {}) {
    this.mensagem = mensagem;
    this.options = {
      tipo: "info",
      duracao: 5000,
      fecharAutomaticamente: true,
      posicao: "top-right",
      ...options,
    };

    this.element = null;
    this.timer = null;
    this.criarElemento();
  }

  criarElemento() {
    const notification = document.createElement("div");
    notification.className = `notification notification-${this.options.tipo} notification-${this.options.posicao}`;

    const conteudo = document.createElement("div");
    conteudo.className = "notification-content";
    conteudo.textContent = this.mensagem;

    notification.appendChild(conteudo);

    const botaoFechar = document.createElement("button");
    botaoFechar.className = "notification-close";
    botaoFechar.innerHTML = "&times;";
    botaoFechar.addEventListener("click", () => this.fechar());

    notification.appendChild(botaoFechar);

    this.element = notification;
  }

  mostrar() {
    // Encontrar container de notificações
    let container = document.querySelector(".notifications-container");

    if (!container) {
      container = document.createElement("div");
      container.className = "notifications-container";
      document.body.appendChild(container);
    }

    // Adicionar ao container na posição correta
    if (this.options.posicao.includes("bottom")) {
      container.appendChild(this.element);
    } else {
      container.insertBefore(this.element, container.firstChild);
    }

    // Animar entrada
    setTimeout(() => {
      this.element.classList.add("show");
    }, 10);

    // Fechar automaticamente
    if (this.options.fecharAutomaticamente) {
      this.timer = setTimeout(() => {
        this.fechar();
      }, this.options.duracao);
    }
  }

  fechar() {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.element.classList.remove("show");

    setTimeout(() => {
      if (this.element.parentNode) {
        this.element.remove();
      }
    }, 300);
  }
}

// components/index.js - Barrel export para componentes
export { Button } from "./Button.js";
export { Modal } from "./Modal.js";
export { Notification } from "./Notification.js";

// main.js - Arquivo principal da aplicação
import {
  soma,
  subtracao,
  capitalizar,
  formatarData,
  validarEmail,
  StorageManager,
  APIClient,
  Logger,
} from "./utils/index.js";

import { UserService, ProductService, AuthService } from "./services/index.js";

import { Button, Modal, Notification } from "./components/index.js";

class Aplicacao {
  constructor() {
    this.logger = new Logger("Aplicacao");
    this.auth = new AuthService();
    this.userService = new UserService();
    this.productService = new ProductService();
    this.storage = new StorageManager();

    this.inicializar();
  }

  async inicializar() {
    try {
      this.logger.info("Inicializando aplicação");

      // Carregar configurações
      await this.carregarConfiguracoes();

      // Configurar interface
      this.configurarInterface();

      // Verificar autenticação
      if (this.auth.isAuthenticated()) {
        await this.carregarDadosUsuario();
      }

      this.logger.info("Aplicação inicializada com sucesso");
    } catch (error) {
      this.logger.error("Erro ao inicializar aplicação", error);
      this.mostrarErro("Falha ao inicializar a aplicação");
    }
  }

  async carregarConfiguracoes() {
    const config = this.storage.get("config") || {
      tema: "claro",
      idioma: "pt-BR",
      notificacoes: true,
    };

    this.config = config;

    // Aplicar configurações
    this.aplicarTema(config.tema);
    this.aplicarIdioma(config.idioma);
  }

  aplicarTema(tema) {
    document.documentElement.setAttribute("data-tema", tema);
  }

  aplicarIdioma(idioma) {
    document.documentElement.lang = idioma;
  }

  configurarInterface() {
    // Criar elementos da interface
    this.criarCabecalho();
    this.criarConteudoPrincipal();
    this.criarRodape();

    // Configurar eventos
    this.configurarEventos();
  }

  criarCabecalho() {
    const cabecalho = document.createElement("header");
    cabecalho.className = "app-header";

    const logo = document.createElement("div");
    logo.className = "logo";
    logo.textContent = "Minha App";

    const navegacao = document.createElement("nav");
    navegacao.className = "main-nav";

    // Menu de navegação
    const menuItens = [
      { texto: "Início", href: "#home" },
      { texto: "Produtos", href: "#produtos" },
      { texto: "Sobre", href: "#sobre" },
      { texto: "Contato", href: "#contato" },
    ];

    menuItens.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.texto;
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.navegarPara(item.href.slice(1));
      });

      navegacao.appendChild(link);
    });

    // Botão de login/logout
    this.botaoAuth = new Button(
      this.auth.isAuthenticated() ? "Sair" : "Entrar",
      () => this.tratarAutenticacao()
    );

    cabecalho.appendChild(logo);
    cabecalho.appendChild(navegacao);
    cabecalho.appendChild(this.botaoAuth.render());

    document.body.appendChild(cabecalho);
  }

  criarConteudoPrincipal() {
    const conteudo = document.createElement("main");
    conteudo.className = "app-content";
    conteudo.id = "app-content";

    document.body.appendChild(conteudo);
  }

  criarRodape() {
    const rodape = document.createElement("footer");
    rodape.className = "app-footer";
    rodape.innerHTML = `
            <p>&copy; ${new Date().getFullYear()} Minha App. Todos os direitos reservados.</p>
            <p>Versão 1.0.0</p>
        `;

    document.body.appendChild(rodape);
  }

  configurarEventos() {
    // Eventos globais
    window.addEventListener("online", () => {
      new Notification("Conexão restaurada", { tipo: "success" }).mostrar();
    });

    window.addEventListener("offline", () => {
      new Notification("Sem conexão com a internet", {
        tipo: "error",
      }).mostrar();
    });
  }

  async tratarAutenticacao() {
    if (this.auth.isAuthenticated()) {
      await this.auth.logout();
      this.botaoAuth.atualizarTexto("Entrar");
      this.mostrarPagina("home");
    } else {
      this.mostrarModalLogin();
    }
  }

  mostrarModalLogin() {
    const modal = new Modal({
      titulo: "Login",
      conteudo: this.criarFormularioLogin(),
      botoes: [
        {
          texto: "Entrar",
          estilo: "primary",
          onClick: () => this.realizarLogin(modal),
        },
        {
          texto: "Cancelar",
          estilo: "secondary",
          onClick: () => modal.fechar(),
        },
      ],
    });

    modal.abrir();
  }

  criarFormularioLogin() {
    const form = document.createElement("form");
    form.className = "login-form";
    form.innerHTML = `
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" id="senha" name="senha" required>
            </div>
        `;

    return form;
  }

  async realizarLogin(modal) {
    const form = modal.modalElement.querySelector(".login-form");
    const email = form.querySelector("#email").value;
    const senha = form.querySelector("#senha").value;

    if (!validarEmail(email)) {
      new Notification("Email inválido", { tipo: "error" }).mostrar();
      return;
    }

    try {
      await this.auth.login({ email, senha });
      modal.fechar();
      this.botaoAuth.atualizarTexto("Sair");
      await this.carregarDadosUsuario();
      new Notification("Login realizado com sucesso", {
        tipo: "success",
      }).mostrar();
    } catch (error) {
      new Notification("Falha no login", { tipo: "error" }).mostrar();
    }
  }

  async carregarDadosUsuario() {
    try {
      const userInfo = this.auth.getUserInfo();

      if (userInfo) {
        const usuario = await this.userService.getUser(userInfo.userId);
        this.atualizarInterfaceUsuario(usuario);
      }
    } catch (error) {
      this.logger.error("Erro ao carregar dados do usuário", error);
    }
  }

  atualizarInterfaceUsuario(usuario) {
    // Atualizar interface com informações do usuário
    const cabecalho = document.querySelector(".app-header");

    // Adicionar avatar do usuário
    const avatar = document.createElement("div");
    avatar.className = "user-avatar";
    avatar.textContent = usuario.nome.charAt(0).toUpperCase();
    avatar.title = usuario.nome;

    cabecalho.insertBefore(avatar, this.botaoAuth.element.parentNode);
  }

  navegarPara(pagina) {
    this.mostrarPagina(pagina);
    window.history.pushState({ pagina }, "", `#${pagina}`);
  }

  async mostrarPagina(pagina) {
    const conteudo = document.getElementById("app-content");

    switch (pagina) {
      case "home":
        conteudo.innerHTML = this.criarPaginaHome();
        break;

      case "produtos":
        conteudo.innerHTML =
          '<div class="loading">Carregando produtos...</div>';
        await this.carregarProdutos();
        break;

      case "sobre":
        conteudo.innerHTML = this.criarPaginaSobre();
        break;

      case "contato":
        conteudo.innerHTML = this.criarPaginaContato();
        break;

      default:
        conteudo.innerHTML = this.criarPagina404();
    }
  }

  criarPaginaHome() {
    return `
            <section class="hero">
                <h1>Bem-vindo à Minha App</h1>
                <p>Uma aplicação moderna construída com JavaScript modular.</p>
                <button class="btn btn-primary" id="cta-button">Começar Agora</button>
            </section>

            <section class="features">
                <div class="feature">
                    <h3>Modular</h3>
                    <p>Código organizado em módulos reutilizáveis.</p>
                </div>
                <div class="feature">
                    <h3>Moderno</h3>
                    <p>Utiliza as mais recentes APIs do JavaScript.</p>
                </div>
                <div class="feature">
                    <h3>Escalável</h3>
                    <p>Arquitetura preparada para crescimento.</p>
                </div>
            </section>
        `;
  }

  async carregarProdutos() {
    try {
      const produtos = await this.productService.getProducts();
      const conteudo = document.getElementById("app-content");

      let html = '<section class="products">';
      html += "<h2>Produtos</h2>";
      html += '<div class="product-grid">';

      produtos.forEach((produto) => {
        html += `
                    <div class="product-card">
                        <h3>${produto.nome}</h3>
                        <p>${produto.descricao}</p>
                        <span class="price">R$ ${produto.preco.toFixed(
                          2
                        )}</span>
                    </div>
                `;
      });

      html += "</div></section>";
      conteudo.innerHTML = html;
    } catch (error) {
      document.getElementById("app-content").innerHTML = `
                <div class="error">
                    <h2>Erro ao carregar produtos</h2>
                    <p>${error.message}</p>
                </div>
            `;
    }
  }

  criarPaginaSobre() {
    return `
            <section class="about">
                <h2>Sobre Nós</h2>
                <p>Esta é uma aplicação de demonstração construída com JavaScript modular.</p>
                <p>O objetivo é mostrar como organizar código em módulos reutilizáveis.</p>

                <h3>Recursos</h3>
                <ul>
                    <li>Módulos ES6</li>
                    <li>Classes JavaScript</li>
                    <li>APIs modernas do navegador</li>
                    <li>Arquitetura limpa e organizada</li>
                </ul>
            </section>
        `;
  }

  criarPaginaContato() {
    return `
            <section class="contact">
                <h2>Contato</h2>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </section>
        `;
  }

  criarPagina404() {
    return `
            <section class="not-found">
                <h2>404 - Página não encontrada</h2>
                <p>A página que você está procurando não existe.</p>
                <button class="btn btn-primary" onclick="app.navegarPara('home')">
                    Voltar para a página inicial
                </button>
            </section>
        `;
  }

  mostrarErro(mensagem) {
    new Notification(mensagem, {
      tipo: "error",
      duracao: 10000,
    }).mostrar();
  }
}

// Inicializar a aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  window.app = new Aplicacao();
});

// Exportar a aplicação para uso em outros módulos
export default Aplicacao;
```

## CommonJS (require/module.exports)

### Sistema de Módulos CommonJS (Node.js)

```javascript
// módulo.js - Exportação CommonJS
const valor = "Hello World";

// Exportação padrão
module.exports = valor;

// Exportação múltipla
module.exports = {
  valor1: "valor1",
  valor2: "valor2",
  funcao: function () {
    return "função";
  },
};

// Exportação usando exports
exports.valor1 = "valor1";
exports.valor2 = "valor2";
exports.funcao = function () {
  return "função";
};

// main.js - Importação CommonJS
const modulo = require("./modulo.js");

// Importação de valor padrão
const valor = require("./modulo.js");

// Importação com desestruturação
const { valor1, valor2 } = require("./modulo.js");

// Importação de módulo nativo
const fs = require("fs");
const path = require("path");
const http = require("http");

// Importação de módulo de terceiros
const express = require("express");
const axios = require("axios");
const lodash = require("lodash");

// Classe utilitária para carregamento dinâmico
class ModuleLoader {
  constructor() {
    this.cache = new Map();
    this.loading = new Map();
  }

  async require(modulePath) {
    // Verificar cache
    if (this.cache.has(modulePath)) {
      return this.cache.get(modulePath);
    }

    // Evitar carregamento duplicado
    if (this.loading.has(modulePath)) {
      return await this.loading.get(modulePath);
    }

    // Carregar módulo
    const loadPromise = this.loadModule(modulePath);
    this.loading.set(modulePath, loadPromise);

    try {
      const module = await loadPromise;
      this.cache.set(modulePath, module);
      return module;
    } finally {
      this.loading.delete(modulePath);
    }
  }

  async loadModule(modulePath) {
    // Verificar se é um módulo nativo
    if (this.isNativeModule(modulePath)) {
      return require(modulePath);
    }

    // Carregar módulo de arquivo
    const absolutePath = this.resolvePath(modulePath);

    if (this.isESModule(absolutePath)) {
      return await this.loadESModule(absolutePath);
    } else {
      return require(absolutePath);
    }
  }

  isNativeModule(moduleName) {
    try {
      require.resolve(moduleName);
      return true;
    } catch {
      return false;
    }
  }

  resolvePath(modulePath) {
    // Resolver caminho do módulo
    const extensions = [".js", ".json", ".node"];

    for (const ext of extensions) {
      const fullPath = modulePath + ext;
      if (fs.existsSync(fullPath)) {
        return fullPath;
      }
    }

    // Tentar como diretório com index.js
    const indexPaths = extensions.map((ext) =>
      path.join(modulePath, "index" + ext)
    );

    for (const indexPath of indexPaths) {
      if (fs.existsSync(indexPath)) {
        return indexPath;
      }
    }

    throw new Error(`Cannot find module '${modulePath}'`);
  }

  isESModule(filePath) {
    // Verificar se é módulo ES pelo conteúdo
    const content = fs.readFileSync(filePath, "utf8");
    return content.includes("export") || content.includes("import");
  }

  async loadESModule(filePath) {
    // Usar import() dinâmico para ES modules
    const module = await import(filePath);
    return module.default || module;
  }

  clearCache() {
    this.cache.clear();
    this.loading.clear();
  }

  invalidate(modulePath) {
    this.cache.delete(modulePath);
  }
}

// Sistema de plugins com CommonJS
class PluginSystem {
  constructor() {
    this.plugins = new Map();
    this.hooks = new Map();
  }

  registerPlugin(nome, plugin) {
    this.plugins.set(nome, plugin);

    // Registrar hooks do plugin
    if (plugin.hooks) {
      Object.entries(plugin.hooks).forEach(([hook, callback]) => {
        this.registerHook(hook, callback);
      });
    }

    // Inicializar plugin
    if (typeof plugin.init === "function") {
      plugin.init();
    }

    console.log(`Plugin "${nome}" registrado`);
  }

  loadPlugin(pluginPath) {
    try {
      const plugin = require(pluginPath);
      const nome = plugin.name || path.basename(pluginPath, ".js");
      this.registerPlugin(nome, plugin);
      return plugin;
    } catch (error) {
      console.error(`Erro ao carregar plugin ${pluginPath}:`, error);
      throw error;
    }
  }

  loadPluginsFromDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
      return [];
    }

    const files = fs.readdirSync(dirPath);
    const plugins = [];

    files.forEach((file) => {
      if (file.endsWith(".js")) {
        const pluginPath = path.join(dirPath, file);
        try {
          const plugin = this.loadPlugin(pluginPath);
          plugins.push(plugin);
        } catch (error) {
          console.error(`Erro ao carregar plugin ${file}:`, error);
        }
      }
    });

    return plugins;
  }

  registerHook(hook, callback) {
    if (!this.hooks.has(hook)) {
      this.hooks.set(hook, []);
    }

    this.hooks.get(hook).push(callback);
  }

  triggerHook(hook, ...args) {
    if (!this.hooks.has(hook)) {
      return Promise.resolve();
    }

    const callbacks = this.hooks.get(hook);
    const results = [];

    callbacks.forEach((callback) => {
      try {
        const result = callback(...args);
        results.push(result);
      } catch (error) {
        console.error(`Erro no hook "${hook}":`, error);
      }
    });

    return Promise.all(results);
  }

  getPlugin(nome) {
    return this.plugins.get(nome);
  }

  getPlugins() {
    return Array.from(this.plugins.values());
  }

  removePlugin(nome) {
    const plugin = this.plugins.get(nome);

    if (plugin && typeof plugin.destroy === "function") {
      plugin.destroy();
    }

    this.plugins.delete(nome);
    console.log(`Plugin "${nome}" removido`);
  }
}

// Exemplo de plugin
const meuPlugin = {
  name: "meu-plugin",

  init() {
    console.log("Plugin inicializado");
  },

  hooks: {
    "app:start": () => {
      console.log("App está iniciando...");
    },

    "app:ready": () => {
      console.log("App está pronto!");
    },
  },

  fazerAlgo() {
    console.log("Fazendo algo...");
  },

  destroy() {
    console.log("Plugin destruído");
  },
};

// Exemplo de uso
const pluginSystem = new PluginSystem();
pluginSystem.registerPlugin("meu-plugin", meuPlugin);

// Carregar plugins de um diretório
// pluginSystem.loadPluginsFromDirectory('./plugins');

// Disparar hooks
// pluginSystem.triggerHook('app:start');
```

## Dynamic Imports

### Importação Dinâmica (ES2020+)

```javascript
// Importação dinâmica básica
const modulePath = "./meuModulo.js";

import(modulePath)
  .then((module) => {
    console.log("Módulo carregado:", module);
    // Usar o módulo
    module.funcao();
  })
  .catch((error) => {
    console.error("Erro ao carregar módulo:", error);
  });

// Com async/await
async function carregarModulo() {
  try {
    const module = await import("./meuModulo.js");
    // Usar o módulo
    return module;
  } catch (error) {
    console.error("Falha ao carregar módulo:", error);
  }
}

// Importação condicional
async function carregarModuloCondicional(condicao) {
  if (condicao) {
    const modulo = await import("./moduloA.js");
    return modulo;
  } else {
    const modulo = await import("./moduloB.js");
    return modulo;
  }
}

// Importação baseada em dados do usuário
async function carregarIdioma(codigoIdioma) {
  try {
    const moduloIdioma = await import(`./locales/${codigoIdioma}.js`);
    return moduloIdioma.default;
  } catch (error) {
    // Fallback para inglês
    const moduloPadrao = await import("./locales/en.js");
    return moduloPadrao.default;
  }
}

// Sistema de carregamento de módulos lazy
class LazyModuleLoader {
  constructor() {
    this.modules = new Map();
    this.loadingPromises = new Map();
    this.loadedModules = new Set();
  }

  async load(moduleName, modulePath) {
    // Se já está carregando, retornar a promise existente
    if (this.loadingPromises.has(moduleName)) {
      return this.loadingPromises.get(moduleName);
    }

    // Se já carregou, retornar imediatamente
    if (this.loadedModules.has(moduleName)) {
      return this.modules.get(moduleName);
    }

    // Iniciar carregamento
    const loadPromise = this.loadModule(modulePath);
    this.loadingPromises.set(moduleName, loadPromise);

    try {
      const module = await loadPromise;

      // Armazenar módulo carregado
      this.modules.set(moduleName, module);
      this.loadedModules.add(moduleName);

      return module;
    } finally {
      this.loadingPromises.delete(moduleName);
    }
  }

  async loadModule(modulePath) {
    // Adicionar timestamp para evitar cache do navegador
    const cacheBuster = `?t=${Date.now()}`;
    const fullPath = modulePath + cacheBuster;

    return import(fullPath);
  }

  preload(moduleName, modulePath) {
    // Pré-carregar módulo em background
    if (
      !this.loadedModules.has(moduleName) &&
      !this.loadingPromises.has(moduleName)
    ) {
      this.load(moduleName, modulePath).catch(() => {
        // Ignorar erros em pré-carregamento
      });
    }
  }

  isLoaded(moduleName) {
    return this.loadedModules.has(moduleName);
  }

  unload(moduleName) {
    if (this.modules.has(moduleName)) {
      this.modules.delete(moduleName);
      this.loadedModules.delete(moduleName);

      // Notificar para coleta de lixo
      if (typeof module.cleanup === "function") {
        module.cleanup();
      }
    }
  }

  clear() {
    // Limpar todos os módulos
    this.modules.forEach((module, name) => {
      this.unload(name);
    });

    this.modules.clear();
    this.loadingPromises.clear();
    this.loadedModules.clear();
  }
}

// Sistema de code splitting dinâmico
class CodeSplitter {
  constructor() {
    this.chunks = new Map();
    this.chunkCallbacks = new Map();
  }

  defineChunk(chunkName, importFn) {
    this.chunks.set(chunkName, importFn);
  }

  async loadChunk(chunkName) {
    if (!this.chunks.has(chunkName)) {
      throw new Error(`Chunk "${chunkName}" não definido`);
    }

    // Se já está carregando, retornar promise existente
    if (this.chunkCallbacks.has(chunkName)) {
      return new Promise((resolve, reject) => {
        this.chunkCallbacks.get(chunkName).push({ resolve, reject });
      });
    }

    // Criar array de callbacks para este chunk
    this.chunkCallbacks.set(chunkName, []);

    try {
      // Carregar o chunk
      const importFn = this.chunks.get(chunkName);
      const module = await importFn();

      // Resolver todas as promises pendentes
      const callbacks = this.chunkCallbacks.get(chunkName);
      callbacks.forEach((callback) => callback.resolve(module));

      return module;
    } catch (error) {
      // Rejeitar todas as promises pendentes
      const callbacks = this.chunkCallbacks.get(chunkName);
      callbacks.forEach((callback) => callback.reject(error));

      throw error;
    } finally {
      this.chunkCallbacks.delete(chunkName);
    }
  }

  preloadChunk(chunkName) {
    // Pré-carregar chunk em background
    if (this.chunks.has(chunkName) && !this.chunkCallbacks.has(chunkName)) {
      this.loadChunk(chunkName).catch(() => {
        // Ignorar erros em pré-carregamento
      });
    }
  }

  // Factory method para criar chunks
  static createChunkFactory(chunkMap) {
    const splitter = new CodeSplitter();

    Object.entries(chunkMap).forEach(([chunkName, importFn]) => {
      splitter.defineChunk(chunkName, importFn);
    });

    return splitter;
  }
}

// Exemplo de uso do code splitter
const chunkMap = {
  editor: () => import("./chunks/editor.js"),
  chart: () => import("./chunks/chart.js"),
  map: () => import("./chunks/map.js"),
  "pdf-viewer": () => import("./chunks/pdf-viewer.js"),
};

const splitter = CodeSplitter.createChunkFactory(chunkMap);

// Carregar chunk quando necessário
document.getElementById("editor-btn").addEventListener("click", async () => {
  const editorModule = await splitter.loadChunk("editor");
  editorModule.init();
});

// Pré-carregar chunks prováveis
splitter.preloadChunk("chart");
splitter.preloadChunk("map");

// Sistema de carregamento de componentes React/Vue/Angular dinâmico
class DynamicComponentLoader {
  constructor() {
    this.components = new Map();
    this.componentCache = new Map();
  }

  registerComponent(componentName, loader) {
    this.components.set(componentName, loader);
  }

  async loadComponent(componentName, props = {}) {
    // Verificar cache
    if (this.componentCache.has(componentName)) {
      return this.componentCache.get(componentName);
    }

    if (!this.components.has(componentName)) {
      throw new Error(`Componente "${componentName}" não registrado`);
    }

    const loader = this.components.get(componentName);

    try {
      const component = await loader();
      this.componentCache.set(componentName, component);
      return component;
    } catch (error) {
      console.error(`Erro ao carregar componente "${componentName}":`, error);
      throw error;
    }
  }

  async renderComponent(componentName, container, props = {}) {
    try {
      const componentModule = await this.loadComponent(componentName);
      const component = componentModule.default || componentModule;

      // Renderizar componente baseado no tipo
      if (typeof component === "function") {
        // Componente React/Preact
        if (React && ReactDOM) {
          ReactDOM.render(React.createElement(component, props), container);
        }
        // Componente de função vanilla
        else {
          const element = component(props);
          if (element instanceof HTMLElement) {
            container.appendChild(element);
          } else if (typeof element === "string") {
            container.innerHTML = element;
          }
        }
      } else if (component instanceof HTMLElement) {
        // Componente já é elemento DOM
        container.appendChild(component);
      } else if (typeof component === "string") {
        // Componente é string HTML
        container.innerHTML = component;
      }

      return component;
    } catch (error) {
      console.error(`Erro ao renderizar componente "${componentName}":`, error);
      container.innerHTML = `
                <div class="component-error">
                    <h3>Erro ao carregar componente</h3>
                    <p>${error.message}</p>
                </div>
            `;
    }
  }

  preloadComponent(componentName) {
    if (
      this.components.has(componentName) &&
      !this.componentCache.has(componentName)
    ) {
      this.loadComponent(componentName).catch(() => {
        // Ignorar erros em pré-carregamento
      });
    }
  }

  clearCache() {
    this.componentCache.clear();
  }
}

// Exemplo de registro de componentes
const componentLoader = new DynamicComponentLoader();

// Registrar componentes com carregamento dinâmico
componentLoader.registerComponent("UserProfile", () =>
  import("./components/UserProfile.js")
);
componentLoader.registerComponent("ProductList", () =>
  import("./components/ProductList.js")
);
componentLoader.registerComponent("ShoppingCart", () =>
  import("./components/ShoppingCart.js")
);

// Carregar e renderizar componente
document
  .getElementById("profile-section")
  .addEventListener("click", async () => {
    await componentLoader.renderComponent(
      "UserProfile",
      document.getElementById("content"),
      {
        userId: 123,
      }
    );
  });

// Sistema de carregamento de rotas lazy para SPA
class LazyRouteLoader {
  constructor(routes) {
    this.routes = routes;
    this.loadedRoutes = new Map();
  }

  async loadRoute(routeName) {
    if (this.loadedRoutes.has(routeName)) {
      return this.loadedRoutes.get(routeName);
    }

    const route = this.routes[routeName];

    if (!route) {
      throw new Error(`Rota "${routeName}" não encontrada`);
    }

    try {
      // Carregar componente da rota
      const component = await route.loader();

      // Executar pré-carregamento de dados se existir
      if (route.preload) {
        await route.preload();
      }

      // Armazenar rota carregada
      this.loadedRoutes.set(routeName, {
        component: component.default || component,
        metadata: route.metadata || {},
      });

      return this.loadedRoutes.get(routeName);
    } catch (error) {
      console.error(`Erro ao carregar rota "${routeName}":`, error);

      // Fallback para página de erro
      if (route.fallback) {
        return {
          component: route.fallback,
          metadata: { isFallback: true },
        };
      }

      throw error;
    }
  }

  async navigateTo(routeName, params = {}) {
    try {
      const route = await this.loadRoute(routeName);

      // Executar middleware se existir
      if (this.routes[routeName].middleware) {
        const middlewareResult = await this.routes[routeName].middleware(
          params
        );
        if (middlewareResult === false) {
          return; // Middleware bloqueou navegação
        }
      }

      // Renderizar componente
      await this.renderRoute(route.component, params);

      // Atualizar histórico
      window.history.pushState(
        { route: routeName, params },
        "",
        `#${routeName}`
      );

      // Disparar evento
      window.dispatchEvent(
        new CustomEvent("routechange", {
          detail: { route: routeName, params },
        })
      );
    } catch (error) {
      console.error(`Erro na navegação para "${routeName}":`, error);

      // Navegar para página de erro
      if (this.routes["error"]) {
        await this.navigateTo("error", { error });
      }
    }
  }

  async renderRoute(component, params) {
    const container = document.getElementById("app");

    if (!container) {
      throw new Error("Container da aplicação não encontrado");
    }

    // Limpar container
    container.innerHTML = "";

    // Renderizar componente
    if (typeof component === "function") {
      // Componente de função
      const element = component(params);

      if (element instanceof HTMLElement) {
        container.appendChild(element);
      } else if (typeof element === "string") {
        container.innerHTML = element;
      } else if (element && element.then) {
        // Componente assíncrono
        const asyncElement = await element;
        container.appendChild(asyncElement);
      }
    } else if (component instanceof HTMLElement) {
      // Componente já é elemento
      container.appendChild(component);
    } else if (typeof component === "string") {
      // Componente é template
      container.innerHTML = component;
    }
  }

  preloadRoute(routeName) {
    if (this.routes[routeName] && !this.loadedRoutes.has(routeName)) {
      this.loadRoute(routeName).catch(() => {
        // Ignorar erros em pré-carregamento
      });
    }
  }
}

// Exemplo de configuração de rotas lazy
const routes = {
  home: {
    loader: () => import("./routes/Home.js"),
    metadata: { title: "Página Inicial" },
  },
  products: {
    loader: () => import("./routes/Products.js"),
    preload: async () => {
      // Pré-carregar dados
      await fetch("/api/products");
    },
    metadata: { title: "Produtos" },
  },
  "product-detail": {
    loader: () => import("./routes/ProductDetail.js"),
    middleware: async (params) => {
      // Verificar se usuário tem permissão
      if (!params.id) {
        return false;
      }
      return true;
    },
    metadata: { title: "Detalhe do Produto" },
  },
  about: {
    loader: () => import("./routes/About.js"),
    metadata: { title: "Sobre" },
  },
  error: {
    loader: () => import("./routes/Error.js"),
    metadata: { title: "Erro" },
  },
};

// Inicializar loader de rotas
const routeLoader = new LazyRouteLoader(routes);

// Pré-carregar rotas prováveis
routeLoader.preloadRoute("home");
routeLoader.preloadRoute("products");

// Navegar para rota
document.addEventListener("DOMContentLoaded", () => {
  // Navegação inicial baseada no hash
  const initialRoute = window.location.hash.slice(1) || "home";
  routeLoader.navigateTo(initialRoute);

  // Ouvir mudanças de hash
  window.addEventListener("hashchange", () => {
    const route = window.location.hash.slice(1) || "home";
    routeLoader.navigateTo(route);
  });
});
```

## Module Patterns

### Padrões de Módulos em JavaScript

```javascript
// 1. Module Pattern (Clássico) - IIFE
const meuModulo = (function () {
  // Variáveis privadas
  let contador = 0;
  const chaveSecreta = "12345";

  // Métodos privados
  function metodoPrivado() {
    console.log("Método privado");
  }

  // Retornar objeto público
  return {
    // Métodos públicos
    incrementar: function () {
      contador++;
      metodoPrivado();
      return contador;
    },

    resetar: function () {
      contador = 0;
    },

    getContador: function () {
      return contador;
    },

    // Propriedade pública
    nome: "Meu Módulo",
  };
})();

// Uso
console.log(meuModulo.incrementar()); // 1
console.log(meuModulo.getContador()); // 1
// console.log(meuModulo.contador); // undefined (privado)
// meuModulo.metodoPrivado(); // Error (privado)

// 2. Revealing Module Pattern
const moduloRevelador = (function () {
  let estadoPrivado = "secreto";

  function funcaoPrivada() {
    console.log("Função privada");
  }

  function funcaoPublica() {
    funcaoPrivada();
    return estadoPrivado;
  }

  function outraFuncaoPublica() {
    console.log("Outra função pública");
  }

  // Revelar apenas o necessário
  return {
    revelar: funcaoPublica,
    acao: outraFuncaoPublica,
  };
})();

// 3. Singleton Pattern
const Singleton = (function () {
  let instancia;

  function criarInstancia() {
    const objeto = {
      nome: "Singleton",
      data: new Date(),

      log: function (mensagem) {
        console.log(`[${this.data.toISOString()}] ${mensagem}`);
      },
    };

    return objeto;
  }

  return {
    getInstancia: function () {
      if (!instancia) {
        instancia = criarInstancia();
      }
      return instancia;
    },
  };
})();

// Uso
const s1 = Singleton.getInstancia();
const s2 = Singleton.getInstancia();
console.log(s1 === s2); // true (mesma instância)

// 4. Factory Pattern
const FabricaUsuario = (function () {
  const tipos = {
    ADMIN: "admin",
    USUARIO: "usuario",
    CONVIDADO: "convidado",
  };

  function criarUsuario(nome, tipo) {
    const usuario = {
      nome,
      tipo,
      dataCriacao: new Date(),
    };

    // Adicionar métodos baseados no tipo
    switch (tipo) {
      case tipos.ADMIN:
        usuario.podeGerenciar = true;
        usuario.podeExcluir = true;
        usuario.podeCriar = true;
        break;

      case tipos.USUARIO:
        usuario.podeGerenciar = false;
        usuario.podeExcluir = false;
        usuario.podeCriar = true;
        break;

      case tipos.CONVIDADO:
        usuario.podeGerenciar = false;
        usuario.podeExcluir = false;
        usuario.podeCriar = false;
        break;
    }

    usuario.getInfo = function () {
      return `${this.nome} (${this.tipo})`;
    };

    return usuario;
  }

  return {
    tipos,
    criarUsuario,
  };
})();

// Uso
const admin = FabricaUsuario.criarUsuario("João", FabricaUsuario.tipos.ADMIN);
const usuario = FabricaUsuario.criarUsuario(
  "Maria",
  FabricaUsuario.tipos.USUARIO
);

console.log(admin.getInfo()); // João (admin)
console.log(admin.podeGerenciar); // true

// 5. Observer Pattern (Pub/Sub)
const EventBus = (function () {
  const eventos = new Map();

  function subscribe(evento, callback) {
    if (!eventos.has(evento)) {
      eventos.set(evento, []);
    }

    eventos.get(evento).push(callback);

    // Retornar função para unsubscribe
    return function () {
      const callbacks = eventos.get(evento);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  function publish(evento, dados) {
    if (eventos.has(evento)) {
      eventos.get(evento).forEach((callback) => {
        try {
          callback(dados);
        } catch (error) {
          console.error(`Erro no callback do evento "${evento}":`, error);
        }
      });
    }
  }

  function unsubscribeAll(evento) {
    if (eventos.has(evento)) {
      eventos.set(evento, []);
    }
  }

  function getEventCount(evento) {
    return eventos.has(evento) ? eventos.get(evento).length : 0;
  }

  return {
    subscribe,
    publish,
    unsubscribeAll,
    getEventCount,
  };
})();

// Uso
const unsubscribe = EventBus.subscribe("user.login", function (usuario) {
  console.log("Usuário logado:", usuario.nome);
});

EventBus.publish("user.login", { nome: "João", id: 123 });

// Para de ouvir o evento
unsubscribe();

// 6. Mediator Pattern
const ChatMediator = (function () {
  const usuarios = new Map();

  function registrar(usuario) {
    usuarios.set(usuario.id, usuario);
    usuario.mediator = this;
  }

  function enviarMensagem(remetenteId, destinatarioId, mensagem) {
    const remetente = usuarios.get(remetenteId);
    const destinatario = usuarios.get(destinatarioId);

    if (!remetente || !destinatario) {
      throw new Error("Usuário não encontrado");
    }

    // Notificar destinatário
    destinatario.receberMensagem(remetente, mensagem);

    // Log da mensagem
    console.log(
      `[${new Date().toISOString()}] ${remetente.nome} -> ${
        destinatario.nome
      }: ${mensagem}`
    );
  }

  function broadcast(remetenteId, mensagem) {
    const remetente = usuarios.get(remetenteId);

    if (!remetente) {
      throw new Error("Remetente não encontrado");
    }

    usuarios.forEach((usuario, id) => {
      if (id !== remetenteId) {
        usuario.receberMensagem(remetente, mensagem);
      }
    });

    console.log(`[BROADCAST] ${remetente.nome}: ${mensagem}`);
  }

  return {
    registrar,
    enviarMensagem,
    broadcast,
    getUsuarios: () => Array.from(usuarios.values()),
  };
})();

// Classe Usuário para usar com o mediador
class UsuarioChat {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.mediator = null;
    this.historico = [];
  }

  enviarPara(destinatarioId, mensagem) {
    if (this.mediator) {
      this.mediator.enviarMensagem(this.id, destinatarioId, mensagem);
      this.historico.push({
        tipo: "enviada",
        para: destinatarioId,
        mensagem,
        data: new Date(),
      });
    }
  }

  broadcast(mensagem) {
    if (this.mediator) {
      this.mediator.broadcast(this.id, mensagem);
      this.historico.push({
        tipo: "broadcast",
        mensagem,
        data: new Date(),
      });
    }
  }

  receberMensagem(remetente, mensagem) {
    console.log(`${this.nome} recebeu de ${remetente.nome}: ${mensagem}`);
    this.historico.push({
      tipo: "recebida",
      de: remetente.id,
      mensagem,
      data: new Date(),
    });
  }
}

// 7. Strategy Pattern
const CalculadoraImposto = (function () {
  const estrategias = new Map();

  function registrarEstrategia(nome, estrategia) {
    estrategias.set(nome, estrategia);
  }

  function calcular(nomeEstrategia, valor) {
    const estrategia = estrategias.get(nomeEstrategia);

    if (!estrategia) {
      throw new Error(`Estratégia "${nomeEstrategia}" não encontrada`);
    }

    return estrategia(valor);
  }

  function listarEstrategias() {
    return Array.from(estrategias.keys());
  }

  return {
    registrarEstrategia,
    calcular,
    listarEstrategias,
  };
})();

// Registrar estratégias
CalculadoraImposto.registrarEstrategia("icms", function (valor) {
  return valor * 0.18; // 18%
});

CalculadoraImposto.registrarEstrategia("ipi", function (valor) {
  return valor * 0.1; // 10%
});

CalculadoraImposto.registrarEstrategia("pis", function (valor) {
  return valor * 0.0165; // 1.65%
});

// Uso
const valor = 1000;
const impostoICMS = CalculadoraImposto.calcular("icms", valor);
console.log(`ICMS sobre R$ ${valor}: R$ ${impostoICMS}`);

// 8. Decorator Pattern
function DecoradorBase(classe) {
  return class extends classe {
    constructor(...args) {
      super(...args);
      this.decorado = true;
      this.dataDecoracao = new Date();
    }

    log(mensagem) {
      console.log(`[${this.constructor.name}] ${mensagem}`);
    }
  };
}

function DecoradorValidacao(classe) {
  return class extends classe {
    validar() {
      // Lógica de validação
      console.log("Validando...");
      return true;
    }
  };
}

function DecoradorCache(classe) {
  return class extends classe {
    constructor(...args) {
      super(...args);
      this.cache = new Map();
    }

    getComCache(chave, fn) {
      if (this.cache.has(chave)) {
        console.log("Cache hit:", chave);
        return this.cache.get(chave);
      }

      const resultado = fn();
      this.cache.set(chave, resultado);
      console.log("Cache miss:", chave);
      return resultado;
    }

    limparCache() {
      this.cache.clear();
      console.log("Cache limpo");
    }
  };
}

// Classe base
class ServicoUsuario {
  constructor() {
    this.nome = "ServicoUsuario";
  }

  buscarUsuario(id) {
    return `Usuário ${id}`;
  }
}

// Aplicar decoradores
const ServicoUsuarioDecorado = DecoradorCache(
  DecoradorValidacao(DecoradorBase(ServicoUsuario))
);

// Uso
const servico = new ServicoUsuarioDecorado();
servico.log("Serviço iniciado");
servico.validar();
const usuario = servico.getComCache("user_123", () =>
  servico.buscarUsuario(123)
);

// 9. Composite Pattern
class ComponenteArquivo {
  constructor(nome) {
    this.nome = nome;
  }

  getTamanho() {
    throw new Error("Método getTamanho deve ser implementado");
  }

  mostrar(indentacao = "") {
    throw new Error("Método mostrar deve ser implementado");
  }
}

class Arquivo extends ComponenteArquivo {
  constructor(nome, tamanho) {
    super(nome);
    this.tamanho = tamanho;
  }

  getTamanho() {
    return this.tamanho;
  }

  mostrar(indentacao = "") {
    console.log(`${indentacao}📄 ${this.nome} (${this.tamanho} bytes)`);
  }
}

class Pasta extends ComponenteArquivo {
  constructor(nome) {
    super(nome);
    this.filhos = [];
  }

  adicionar(componente) {
    this.filhos.push(componente);
  }

  remover(componente) {
    const index = this.filhos.indexOf(componente);
    if (index > -1) {
      this.filhos.splice(index, 1);
    }
  }

  getTamanho() {
    return this.filhos.reduce((total, filho) => total + filho.getTamanho(), 0);
  }

  mostrar(indentacao = "") {
    console.log(`${indentacao}📁 ${this.nome}/ (${this.getTamanho()} bytes)`);

    this.filhos.forEach((filho) => {
      filho.mostrar(indentacao + "  ");
    });
  }
}

// Uso
const raiz = new Pasta("raiz");
const documentos = new Pasta("Documentos");
const imagens = new Pasta("Imagens");

documentos.adicionar(new Arquivo("relatorio.pdf", 1024));
documentos.adicionar(new Arquivo("contrato.docx", 2048));

imagens.adicionar(new Arquivo("foto1.jpg", 3072));
imagens.adicionar(new Arquivo("foto2.jpg", 4096));

raiz.adicionar(documentos);
raiz.adicionar(imagens);
raiz.adicionar(new Arquivo("readme.txt", 512));

raiz.mostrar();
console.log("Tamanho total:", raiz.getTamanho(), "bytes");

// 10. Module Pattern Moderno com Classes
class SistemaModular {
  constructor() {
    this.modulos = new Map();
    this.dependencias = new Map();
    this.modulosCarregados = new Set();
  }

  registrarModulo(nome, moduloFactory, dependencias = []) {
    this.modulos.set(nome, moduloFactory);
    this.dependencias.set(nome, dependencias);
  }

  async carregarModulo(nome) {
    // Se já carregou, retornar
    if (this.modulosCarregados.has(nome)) {
      return this.instancias.get(nome);
    }

    // Verificar dependências
    const deps = this.dependencias.get(nome) || [];
    const dependenciasCarregadas = [];

    for (const dep of deps) {
      const depInstancia = await this.carregarModulo(dep);
      dependenciasCarregadas.push(depInstancia);
    }

    // Carregar módulo
    const moduloFactory = this.modulos.get(nome);

    if (!moduloFactory) {
      throw new Error(`Módulo "${nome}" não registrado`);
    }

    // Criar instância
    const instancia = moduloFactory(...dependenciasCarregadas);

    // Armazenar
    if (!this.instancias) {
      this.instancias = new Map();
    }

    this.instancias.set(nome, instancia);
    this.modulosCarregados.add(nome);

    // Inicializar se existir método init
    if (typeof instancia.init === "function") {
      await instancia.init();
    }

    return instancia;
  }

  async carregarTodos() {
    const resultados = [];

    for (const [nome] of this.modulos) {
      try {
        const modulo = await this.carregarModulo(nome);
        resultados.push({ nome, modulo, sucesso: true });
      } catch (error) {
        resultados.push({ nome, error, sucesso: false });
      }
    }

    return resultados;
  }

  getModulo(nome) {
    return this.instancias?.get(nome);
  }

  getModulosCarregados() {
    return Array.from(this.modulosCarregados);
  }
}

// Exemplo de uso do sistema modular
const sistema = new SistemaModular();

// Registrar módulos
sistema.registrarModulo("logger", () => {
  return {
    log: (mensagem) => console.log(`[LOG] ${mensagem}`),
    error: (mensagem) => console.error(`[ERROR] ${mensagem}`),
  };
});

sistema.registrarModulo("storage", () => {
  return {
    get: (chave) => localStorage.getItem(chave),
    set: (chave, valor) => localStorage.setItem(chave, valor),
  };
});

sistema.registrarModulo(
  "api",
  (logger, storage) => {
    return {
      fetch: async (url) => {
        logger.log(`Fetching: ${url}`);
        const token = storage.get("token");

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.json();
      },
    };
  },
  ["logger", "storage"]
);

sistema.registrarModulo(
  "app",
  (logger, api) => {
    return {
      init: async () => {
        logger.log("App inicializando...");

        try {
          const dados = await api.fetch("/api/data");
          logger.log("Dados carregados:", dados);
        } catch (error) {
          logger.error("Erro ao carregar dados:", error);
        }
      },
    };
  },
  ["logger", "api"]
);

// Carregar todos os módulos
sistema.carregarTodos().then(() => {
  const app = sistema.getModulo("app");
  app.init();
});

// 11. Plugin Architecture Pattern
class PluginArchitecture {
  constructor() {
    this.plugins = new Map();
    this.hooks = new Map();
    this.extensions = new Map();
  }

  registerPlugin(plugin) {
    const nome = plugin.name;

    if (!nome) {
      throw new Error("Plugin deve ter um nome");
    }

    // Armazenar plugin
    this.plugins.set(nome, plugin);

    // Registrar hooks
    if (plugin.hooks) {
      Object.entries(plugin.hooks).forEach(([hook, callback]) => {
        this.registerHook(hook, callback, nome);
      });
    }

    // Registrar extensões
    if (plugin.extensions) {
      Object.entries(plugin.extensions).forEach(([extensao, func]) => {
        this.registerExtension(extensao, func, nome);
      });
    }

    // Inicializar plugin
    if (typeof plugin.init === "function") {
      plugin.init(this);
    }

    console.log(`Plugin "${nome}" registrado`);
    return this;
  }

  registerHook(hook, callback, pluginNome) {
    if (!this.hooks.has(hook)) {
      this.hooks.set(hook, []);
    }

    this.hooks.get(hook).push({
      callback,
      plugin: pluginNome,
    });

    return this;
  }

  async triggerHook(hook, ...args) {
    if (!this.hooks.has(hook)) {
      return [];
    }

    const resultados = [];
    const callbacks = this.hooks.get(hook);

    for (const { callback, plugin } of callbacks) {
      try {
        const resultado = await callback(...args);
        resultados.push({
          plugin,
          resultado,
          sucesso: true,
        });
      } catch (error) {
        console.error(`Erro no hook "${hook}" do plugin "${plugin}":`, error);
        resultados.push({
          plugin,
          error,
          sucesso: false,
        });
      }
    }

    return resultados;
  }

  registerExtension(extensao, func, pluginNome) {
    if (!this.extensions.has(extensao)) {
      this.extensions.set(extensao, []);
    }

    this.extensions.get(extensao).push({
      func,
      plugin: pluginNome,
    });

    return this;
  }

  getExtensions(extensao) {
    return this.extensions.get(extensao) || [];
  }

  async applyExtension(extensao, ...args) {
    const extensions = this.getExtensions(extensao);
    const resultados = [];

    for (const { func, plugin } of extensions) {
      try {
        const resultado = await func(...args);
        resultados.push({
          plugin,
          resultado,
          sucesso: true,
        });
      } catch (error) {
        console.error(
          `Erro na extensão "${extensao}" do plugin "${plugin}":`,
          error
        );
        resultados.push({
          plugin,
          error,
          sucesso: false,
        });
      }
    }

    return resultados;
  }

  getPlugin(nome) {
    return this.plugins.get(nome);
  }

  unregisterPlugin(nome) {
    const plugin = this.plugins.get(nome);

    if (!plugin) {
      return false;
    }

    // Executar cleanup
    if (typeof plugin.cleanup === "function") {
      plugin.cleanup();
    }

    // Remover hooks
    for (const [hook, callbacks] of this.hooks) {
      this.hooks.set(
        hook,
        callbacks.filter((cb) => cb.plugin !== nome)
      );
    }

    // Remover extensões
    for (const [extensao, funcs] of this.extensions) {
      this.extensions.set(
        extensao,
        funcs.filter((f) => f.plugin !== nome)
      );
    }

    // Remover plugin
    this.plugins.delete(nome);

    console.log(`Plugin "${nome}" removido`);
    return true;
  }
}

// Exemplo de plugin
const meuPlugin = {
  name: "meu-plugin",

  init(arquitetura) {
    console.log("Plugin inicializado");

    // Registrar mais hooks/extensões dinamicamente
    arquitetura.registerHook("app:ready", () => {
      console.log("App pronto!");
    });
  },

  hooks: {
    "app:start": async () => {
      console.log("App iniciando...");
      return { status: "ok" };
    },

    "user:login": async (usuario) => {
      console.log(`Usuário ${usuario.nome} fez login`);
    },
  },

  extensions: {
    "format:text": (texto) => {
      return texto.toUpperCase();
    },

    "validate:email": (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },

  cleanup() {
    console.log("Limpando recursos do plugin");
  },
};

// Uso
const arquitetura = new PluginArchitecture();
arquitetura.registerPlugin(meuPlugin);

// Disparar hook
arquitetura.triggerHook("app:start").then((resultados) => {
  console.log("Resultados dos hooks:", resultados);
});

// Aplicar extensão
const resultadosFormat = arquitetura.applyExtension(
  "format:text",
  "hello world"
);
resultadosFormat.then((resultados) => {
  resultados.forEach((r) => {
    if (r.sucesso) {
      console.log("Texto formatado:", r.resultado); // "HELLO WORLD"
    }
  });
});
```

### Sistema de Build e Bundling Simulado

```javascript
// sistema-bundler.js - Simulador de bundler simples
class BundlerSimulator {
  constructor() {
    this.modules = new Map();
    this.dependencias = new Map();
    this.entryPoint = null;
  }

  addModule(nome, codigo, dependencias = []) {
    this.modules.set(nome, codigo);
    this.dependencias.set(nome, dependencias);
    return this;
  }

  setEntryPoint(nome) {
    this.entryPoint = nome;
    return this;
  }

  resolveDependencies(moduleName, visited = new Set(), resolved = []) {
    if (visited.has(moduleName)) {
      throw new Error(`Dependência circular detectada: ${moduleName}`);
    }

    visited.add(moduleName);

    const deps = this.dependencias.get(moduleName) || [];

    for (const dep of deps) {
      this.resolveDependencies(dep, visited, resolved);
    }

    if (!resolved.includes(moduleName)) {
      resolved.push(moduleName);
    }

    visited.delete(moduleName);

    return resolved;
  }

  bundle() {
    if (!this.entryPoint) {
      throw new Error("Entry point não definido");
    }

    // Resolver ordem de dependências
    const ordem = this.resolveDependencies(this.entryPoint);

    // Gerar bundle
    let bundle = `// Bundle gerado em ${new Date().toISOString()}\n`;
    bundle += `// Entry point: ${this.entryPoint}\n\n`;

    // IIFE wrapper
    bundle += `(function() {\n\n`;

    // Mapa de módulos executados
    bundle += `  const modulesExecutados = new Map();\n`;
    bundle += `  const modulesCache = new Map();\n\n`;

    // Função require simulada
    bundle += `  function require(moduleName) {\n`;
    bundle += `    if (modulesCache.has(moduleName)) {\n`;
    bundle += `      return modulesCache.get(moduleName);\n`;
    bundle += `    }\n\n`;
    bundle += `    if (!modulesExecutados.has(moduleName)) {\n`;
    bundle += `      throw new Error(\`Módulo "\${moduleName}" não encontrado\`);\n`;
    bundle += `    }\n\n`;
    bundle += `    const modulo = modulesExecutados.get(moduleName);\n`;
    bundle += `    modulesCache.set(moduleName, modulo.exports);\n`;
    bundle += `    return modulo.exports;\n`;
    bundle += `  }\n\n`;

    // Definir cada módulo
    ordem.forEach((moduleName, index) => {
      const codigo = this.modules.get(moduleName);

      bundle += `  // Módulo: ${moduleName}\n`;
      bundle += `  (function() {\n`;
      bundle += `    const module = { exports: {} };\n`;
      bundle += `    const exports = module.exports;\n\n`;
      bundle += `    ${codigo}\n\n`;
      bundle += `    modulesExecutados.set('${moduleName}', module);\n`;
      bundle += `  })();\n\n`;
    });

    // Executar entry point
    bundle += `  // Executar entry point\n`;
    bundle += `  require('${this.entryPoint}');\n\n`;

    // Fechar IIFE
    bundle += `})();\n`;

    return bundle;
  }

  // Método para simular módulos ES6
  static criarModuloES6Simulado(nome, codigoExport, dependencias = []) {
    let codigo = "";

    // Import statements (convertidos para requires)
    dependencias.forEach((dep) => {
      codigo += `    const ${dep.replace(
        /[^a-zA-Z0-9_$]/g,
        "_"
      )} = require('${dep}');\n`;
    });

    codigo += "\n";

    // Corpo do módulo
    if (typeof codigoExport === "string") {
      codigo += codigoExport;
    } else if (typeof codigoExport === "object") {
      Object.entries(codigoExport).forEach(([chave, valor]) => {
        if (typeof valor === "function") {
          codigo += `    ${valor.toString()}\n`;
          codigo += `    exports.${chave} = ${valor.name || chave};\n\n`;
        } else {
          codigo += `    exports.${chave} = ${JSON.stringify(valor)};\n`;
        }
      });
    }

    return codigo;
  }
}

// Exemplo de uso do bundler
const bundler = new BundlerSimulator();

// Adicionar módulos
bundler.addModule(
  "math",
  BundlerSimulator.criarModuloES6Simulado("math", {
    PI: 3.14159,
    soma: function soma(a, b) {
      return a + b;
    },
    multiplica: function multiplica(a, b) {
      return a * b;
    },
  })
);

bundler.addModule(
  "utils",
  BundlerSimulator.criarModuloES6Simulado("utils", {
    capitalize: function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
  })
);

bundler.addModule(
  "app",
  BundlerSimulator.criarModuloES6Simulado(
    "app",
    `
    const math = require('math');
    const utils = require('utils');

    console.log('PI:', math.PI);
    console.log('Soma:', math.soma(2, 3));
    console.log('Capitalize:', utils.capitalize('hello world'));

    exports.iniciar = function() {
        console.log('App iniciado!');
    };
    `,
    ["math", "utils"]
  )
);

bundler.setEntryPoint("app");

// Gerar bundle
const bundle = bundler.bundle();
console.log(bundle);

// Para executar o bundle, você poderia usar eval (não recomendado para produção)
// ou salvar em um arquivo e executar com Node.js

// Sistema de tree shaking simulado
class TreeShaker {
  constructor(codigo) {
    this.codigo = codigo;
    this.imports = new Map();
    this.exports = new Set();
    this.usado = new Set();
  }

  analisar() {
    // Extrair imports
    const importRegex =
      /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s+from\s+)?['"]([^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(this.codigo)) !== null) {
      const importPath = match[1];
      this.imports.set(importPath, true);
    }

    // Extrair exports (simplificado)
    const exportRegex =
      /export\s+(?:const|let|var|function|class|default)\s+(\w+)/g;

    while ((match = exportRegex.exec(this.codigo)) !== null) {
      this.exports.add(match[1]);
    }

    // Marcar como usado (simulação simples)
    this.usado.add("soma"); // Exemplo: função 'soma' é usada
    this.usado.add("capitalize"); // Exemplo: função 'capitalize' é usada

    return this;
  }

  shake() {
    // Remover exports não usados (simulação)
    const codigoShaken = this.codigo;

    // Numa implementação real, você removeria o código não usado
    // Aqui é apenas uma simulação

    console.log("Imports detectados:", Array.from(this.imports.keys()));
    console.log("Exports detectados:", Array.from(this.exports));
    console.log("Exports usados:", Array.from(this.usado));

    const exportsNaoUsados = Array.from(this.exports).filter(
      (e) => !this.usado.has(e)
    );
    console.log("Exports para remover (tree shaking):", exportsNaoUsados);

    return {
      codigo: codigoShaken,
      imports: Array.from(this.imports.keys()),
      exports: Array.from(this.exports),
      usado: Array.from(this.usado),
      removidos: exportsNaoUsados,
      economiaEstimada: exportsNaoUsados.length * 100, // bytes estimados
    };
  }
}

// Exemplo de tree shaking
const codigoExemplo = `
import { soma, multiplica, PI } from './math.js';
import { capitalize } from './utils.js';

export function app() {
    console.log('Resultado:', soma(2, 3));
    console.log('Texto:', capitalize('hello'));
}

export function naoUsada() {
    // Esta função não é usada
    return multiplica(2, 3);
}

export const constanteNaoUsada = 42;
`;

const shaker = new TreeShaker(codigoExemplo);
shaker.analisar();
const resultado = shaker.shake();

console.log("\nResultado do tree shaking:", resultado);
```

### Conclusão e Melhores Práticas

```javascript
// 1. Estrutura de Projeto Recomendada
/*
projeto/
├── src/
│   ├── index.js              # Entry point
│   ├── app.js               # Aplicação principal
│   ├── utils/               # Utilitários
│   │   ├── math.js
│   │   ├── string.js
│   │   ├── date.js
│   │   ├── validation.js
│   │   └── index.js         # Barrel export
│   ├── services/            # Serviços
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── storage.js
│   │   └── index.js
│   ├── components/          # Componentes
│   │   ├── Button.js
│   │   ├── Modal.js
│   │   └── index.js
│   ├── stores/              # Gerenciamento de estado
│   │   ├── userStore.js
│   │   └── index.js
│   └── styles/              # Estilos
│       └── main.css
├── public/                  # Arquivos estáticos
├── tests/                   # Testes
├── package.json
├── webpack.config.js        # ou vite.config.js
└── README.md
*/

// 2. Boas Práticas para Módulos

// 2.1. Use imports nomeados para melhor tree shaking
// ❌ EVITE
import utils from './utils'; // Importa tudo

// ✅ PREFIRA
import { soma, multiplica } from './utils'; // Importa apenas o necessário

// 2.2. Use barrel exports para organizar
// utils/index.js
export { soma, multiplica } from './math.js';
export { capitalize, slugify } from './string.js';
export { formatarData, diferencaEmDias } from './date.js';

// 2.3. Evite efeitos colaterais em módulos
// ❌ EVITE
let contador = 0; // Estado global no módulo

// ✅ PREFIRA
export function criarContador() {
    let contador = 0;
    return {
        incrementar: () => ++contador,
        getValor: () => contador
    };
}

// 2.4. Use default exports apenas para módulos principais
// app.js - Pode ter default export
export default class App {
    // ...
}

// utils/math.js - Use named exports
export function soma(a, b) { return a + b; }
export function subtracao(a, b) { return a - b; }

// 2.5. Documente suas exports
/**
 * Calcula a soma de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Soma dos números
 */
export function soma(a, b) {
    return a + b;
}

// 2.6. Trate erros em imports dinâmicos
async function carregarModuloSeguro(moduloPath) {
    try {
        const modulo = await import(moduloPath);
        return modulo;
    } catch (error) {
        console.error(`Falha ao carregar módulo ${moduloPath}:`, error);

        // Fallback
        return {
            default: () => console.log('Módulo não disponível'),
            error: error.message
        };
    }
}

// 2.7. Use import maps para alias (quando suportado)
/*
<script type="importmap">
{
  "imports": {
    "utils": "./src/utils/index.js",
    "components": "./src/components/index.js",
    "lodash": "https://cdn.skypack.dev/lodash-es"
  }
}
</script>
*/

// 3. Padrões de Organização Avançados

// 3.1. Feature-based organization
/*
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   ├── stores/
│   │   └── index.js
│   ├── products/
│   │   ├── components/
│   │   ├── services/
│   │   ├── stores/
│   │   └── index.js
│   └── cart/
│       ├── components/
│       ├── services/
│       ├── stores/
│       └── index.js
└── shared/
    ├── components/
    ├── utils/
    └── services/
*/

// 3.2. Domain-driven organization
/*
src/
├── domains/
│   ├── user/
│   ├── product/
│   ├── order/
│   └── payment/
├── infrastructure/
│   ├── api/
│   ├── storage/
│   └── logging/
└── application/
    ├── components/
    └── pages/
*/

// 4. Ferramentas Recomendadas

// 4.1. Bundlers
// - Webpack: Mais completo, muitos plugins
// - Rollup: Focado em bibliotecas, tree shaking excelente
// - Parcel: Zero configuration
// - Vite: Desenvolvimento rápido, ES modules nativo

// 4.2. Package Managers
// - npm: Padrão do Node.js
// - yarn: Mais rápido, lock file melhor
// - pnpm: Eficiente em espaço, links hard

// 4.3. Module Types
// - ES Modules: Moderno, padrão ECMAScript
// - CommonJS: Node.js tradicional
// - UMD: Universal (browser + Node.js)
// - AMD: Async module definition (RequireJS)

// 5. Configuração de Exemplo (package.json)
const packageJsonExemplo = {
    "name": "meu-projeto",
    "version": "1.0.0",
    "type": "module", // Usar ES modules
    "main": "dist/index.js", // CommonJS
    "module": "dist/index.esm.js", // ES module
    "browser": "dist/index.umd.js", // UMD
    "exports": {
        ".": {
            "import": "./dist/index.esm.js",
            "require": "./dist/index.cjs.js",
            "default": "./dist/index.esm.js"
        },
        "./utils": {
            "import": "./dist/utils.esm.js",
            "require": "./dist/utils.cjs.js"
        }
    },
    "scripts": {
        "build": "rollup -c",
        "dev": "vite",
        "test": "jest"
    }
};

// 6. Exemplo de Configuração Rollup
const rollupConfigExemplo = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'MeuProjeto',
            sourcemap: true
        }
    ],
    plugins: [
        // resolve(), // Resolve imports
        // commonjs(), // Converte CommonJS para ES6
        // terser() // Minificação
    ],
    external: ['lodash', 'axios'] // Dependências externas
};

// 7. Exemplo Completo de Módulo Bem Organizado
// src/utils/validation.js

/**
 * @module validation
 * Utilitários de validação para a aplicação
 */

/**
 * Valida um email
 * @param {string} email - Email para validar
 * @returns {boolean} True se o email for válido
 */
export function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida um CPF
 * @param {string} cpf - CPF para validar
 * @returns {boolean} True se o CPF for válido
 */
export function validarCPF(cpf) {
    // Implementação do CPF...
    return true;
}

/**
 * Valida uma senha baseada em critérios
 * @param {string} senha - Senha para validar
 * @param {Object} options - Opções de validação
 * @param {number} options.minLength - Comprimento mínimo
 * @param {boolean} options.requireUppercase - Requer maiúscula
 * @param {boolean} options.requireLowercase - Requer minúscula
 * @param {boolean} options.requireNumbers - Requer números
 * @param {boolean} options.requireSpecial - Requer caracteres especiais
 * @returns {Object} Resultado da validação
 */
export function validarSenha(senha, options = {}) {
    const config = {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecial: false,
        ...options
    };

    const criterios = {
        length: senha.length >= config.minLength,
        uppercase: config.requireUppercase ? /[A-Z]/.test(senha) : true,
        lowercase: config.requireLowercase ? /[a-z]/.test(senha) : true,
        numbers: config.requireNumbers ? /\d/.test(senha) : true,
        special: config.requireSpecial ? /[!@#$%^&*(),.?":{}|<>]/.test(senha) : true
    };

    const valida = Object.values(criterios).every(Boolean);
    const pontos = Object.values(criterios).filter(Boolean).length;
    const forca = pontos / Object.keys(criterios).length;

    return {
        valida,
        criterios,
        pontos,
        forca: Math.round(forca * 100)
    };
}

/**
 * Valida um formulário completo
 * @param {Object} formData - Dados do formulário
 * @param {Object} schema - Esquema de validação
 * @returns {Object} Resultados da validação
 */
export function validarFormulario(formData, schema) {
    const erros = {};
    const valido = true;

    Object.entries(schema).forEach(([campo, validadores]) => {
        const valor = formData[campo];
        const errosCampo = [];

        validadores.forEach(validator => {
            if (!validator.fn(valor, formData)) {
                errosCampo.push(validator.mensagem);
            }
        });

        if (errosCampo.length > 0) {
            erros[campo] = errosCampo;
            valido = false;
        }
    });

    return {
        valido,
        erros,
        camposComErro: Object.keys(erros),
        totalErros: Object.values(erros).flat().length
    };
}

// Exportação padrão do módulo
export default {
    validarEmail,
    validarCPF,
    validarSenha,
    validarFormulario
};

// src/utils/index.js (Barrel export)
export { validarEmail, validarCPF, validarSenha, validarFormulario } from './validation.js';
export { soma, subtracao, multiplicacao, divisao } from './math.js';
export { formatarData, diferencaEmDias, adicionarDias } from './date.js';
export { capitalizar, slugify, removerAcentos } from './string.js';

// src/index.js (Entry point da aplicação)
import App from './app.js';
import * as utils from './utils/index.js';

// Exportar para uso externo
export { utils };
export default App;

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.inicializar();
});
```

Este material completo cobre todos os aspectos de módulos e organização em JavaScript, desde os fundamentos até padrões avançados e melhores práticas para projetos reais.
