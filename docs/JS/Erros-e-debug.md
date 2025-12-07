# 11. ERROS E DEBUGGING

## Tipos de Erros (SyntaxError, TypeError, etc.)

### Erros Comuns em JavaScript
```javascript
// 1. SyntaxError - Erro de sintaxe
// ❌ Código inválido
// console.log("Olá mundo" // Falta parêntese de fechamento
// if (true { // Falta parêntese
// let 123variavel = "teste"; // Nome de variável inválido

// 2. TypeError - Tipo incorreto
const numero = 10;
// numero(); // TypeError: numero is not a function

const obj = null;
// console.log(obj.propriedade); // TypeError: Cannot read properties of null

const str = "hello";
// str.push("world"); // TypeError: str.push is not a function

// 3. ReferenceError - Referência não definida
// console.log(variavelNaoDefinida); // ReferenceError
// function naoDefinida(); // ReferenceError

// 4. RangeError - Valor fora do intervalo
// const arr = new Array(-1); // RangeError: Invalid array length
// const num = 123.456.toFixed(-1); // RangeError

// 5. URIError - URI mal formada
// decodeURIComponent('%'); // URIError: URI malformed
// encodeURI('\uD800'); // URIError

// 6. EvalError - Erro no eval() (raro hoje em dia)
// try {
//     throw new EvalError("Erro no eval");
// } catch (e) {
//     console.log(e instanceof EvalError); // true
// }

// 7. AggregateError - Múltiplos erros (ES2021)
// const promise1 = Promise.reject(new Error("Erro 1"));
// const promise2 = Promise.reject(new Error("Erro 2"));
// Promise.all([promise1, promise2]).catch(e => {
//     console.log(e instanceof AggregateError); // true
// });

// 8. Custom Errors - Erros personalizados
class MeuErro extends Error {
    constructor(mensagem, codigo) {
        super(mensagem);
        this.name = "MeuErro";
        this.codigo = codigo;
        this.data = new Date();
    }
}

// 9. InternalError - Erro interno do JavaScript (não padrão, mas existe em alguns navegadores)
// function recursaoInfinita() {
//     recursaoInfinita();
// }
// recursaoInfinita(); // InternalError: too much recursion

// Classe para analisar erros
class ErrorAnalyzer {
    static getErrorType(error) {
        if (error instanceof SyntaxError) return "SyntaxError";
        if (error instanceof TypeError) return "TypeError";
        if (error instanceof ReferenceError) return "ReferenceError";
        if (error instanceof RangeError) return "RangeError";
        if (error instanceof URIError) return "URIError";
        if (error instanceof EvalError) return "EvalError";
        if (error instanceof AggregateError) return "AggregateError";
        if (error.name === "MeuErro") return "MeuErro";
        return "UnknownError";
    }

    static getErrorInfo(error) {
        return {
            name: error.name,
            message: error.message,
            type: this.getErrorType(error),
            stack: error.stack,
            fileName: error.fileName || null,
            lineNumber: error.lineNumber || null,
            columnNumber: error.columnNumber || null
        };
    }

    static isFatal(error) {
        const fatalErrors = ["SyntaxError", "ReferenceError"];
        return fatalErrors.includes(error.name);
    }

    static suggestFix(error) {
        const suggestions = {
            TypeError: "Verifique o tipo da variável e se a propriedade/método existe",
            ReferenceError: "Verifique se a variável/função foi declarada e está no escopo correto",
            RangeError: "Verifique se o valor está dentro dos limites permitidos",
            SyntaxError: "Verifique a sintaxe do código, especialmente parênteses, chaves e colchetes"
        };

        return suggestions[error.name] || "Consulte a documentação para mais informações";
    }
}

// Exemplo de uso
try {
    throw new TypeError("Valor não é uma função");
} catch (error) {
    console.log(ErrorAnalyzer.getErrorInfo(error));
    console.log("Sugestão:", ErrorAnalyzer.suggestFix(error));
}

// Sistema de categorização de erros
class ErrorCategorizer {
    constructor() {
        this.categories = {
            syntax: {
                errors: ["SyntaxError"],
                description: "Erros na estrutura do código",
                severity: "high"
            },
            type: {
                errors: ["TypeError"],
                description: "Uso incorreto de tipos",
                severity: "medium"
            },
            reference: {
                errors: ["ReferenceError"],
                description: "Referência a variáveis/funções não definidas",
                severity: "high"
            },
            range: {
                errors: ["RangeError"],
                description: "Valores fora do intervalo permitido",
                severity: "medium"
            },
            network: {
                errors: ["NetworkError", "TimeoutError"],
                description: "Erros de rede",
                severity: "medium"
            },
            validation: {
                errors: ["ValidationError", "FormatError"],
                description: "Erros de validação de dados",
                severity: "low"
            },
            business: {
                errors: ["BusinessError", "PermissionError"],
                description: "Erros de regra de negócio",
                severity: "medium"
            }
        };
    }

    categorize(error) {
        for (const [category, data] of Object.entries(this.categories)) {
            if (data.errors.includes(error.name)) {
                return {
                    category,
                    ...data,
                    error: ErrorAnalyzer.getErrorInfo(error)
                };
            }
        }

        return {
            category: "unknown",
            description: "Erro desconhecido",
            severity: "medium",
            error: ErrorAnalyzer.getErrorInfo(error)
        };
    }

    getCategoryStats(errors) {
        const stats = {};
        let total = 0;

        errors.forEach(error => {
            const category = this.categorize(error).category;
            stats[category] = (stats[category] || 0) + 1;
            total++;
        });

        // Calcular percentuais
        Object.keys(stats).forEach(category => {
            stats[category] = {
                count: stats[category],
                percentage: ((stats[category] / total) * 100).toFixed(2) + "%"
            };
        });

        return {
            stats,
            total,
            timestamp: new Date().toISOString()
        };
    }
}

// Erros personalizados para diferentes cenários
class ValidationError extends Error {
    constructor(mensagem, campo, valor) {
        super(mensagem);
        this.name = "ValidationError";
        this.campo = campo;
        this.valor = valor;
        this.timestamp = new Date();
    }
}

class NetworkError extends Error {
    constructor(mensagem, url, status) {
        super(mensagem);
        this.name = "NetworkError";
        this.url = url;
        this.status = status || 0;
        this.timestamp = new Date();
    }
}

class TimeoutError extends Error {
    constructor(mensagem, operacao, tempoLimite) {
        super(mensagem);
        this.name = "TimeoutError";
        this.operacao = operacao;
        this.tempoLimite = tempoLimite;
        this.timestamp = new Date();
    }
}

class BusinessError extends Error {
    constructor(mensagem, codigo, dados) {
        super(mensagem);
        this.name = "BusinessError";
        this.codigo = codigo;
        this.dados = dados;
        this.timestamp = new Date();
    }
}

class PermissionError extends Error {
    constructor(mensagem, recurso, acao) {
        super(mensagem);
        this.name = "PermissionError";
        this.recurso = recurso;
        this.acao = acao;
        this.timestamp = new Date();
    }
}

class DatabaseError extends Error {
    constructor(mensagem, query, params) {
        super(mensagem);
        this.name = "DatabaseError";
        this.query = query;
        this.params = params;
        this.timestamp = new Date();
    }
}

// Factory para criação de erros
class ErrorFactory {
    static createValidationError(campo, valor, regra) {
        const mensagens = {
            required: `O campo ${campo} é obrigatório`,
            email: `O campo ${campo} deve ser um email válido`,
            minLength: `O campo ${campo} deve ter no mínimo ${valor} caracteres`,
            maxLength: `O campo ${campo} deve ter no máximo ${valor} caracteres`,
            pattern: `O campo ${campo} não corresponde ao padrão esperado`
        };

        return new ValidationError(
            mensagens[regra] || `Erro de validação no campo ${campo}`,
            campo,
            valor
        );
    }

    static createNetworkError(url, status, mensagem) {
        const mensagensStatus = {
            400: "Requisição inválida",
            401: "Não autorizado",
            403: "Proibido",
            404: "Não encontrado",
            500: "Erro interno do servidor",
            503: "Serviço indisponível"
        };

        return new NetworkError(
            mensagem || mensagensStatus[status] || "Erro de rede",
            url,
            status
        );
    }

    static createBusinessError(codigo, dados = {}) {
        const mensagens = {
            "INSUFFICIENT_FUNDS": "Saldo insuficiente",
            "PRODUCT_OUT_OF_STOCK": "Produto fora de estoque",
            "USER_BLOCKED": "Usuário bloqueado",
            "INVALID_OPERATION": "Operação inválida"
        };

        return new BusinessError(
            mensagens[codigo] || "Erro de negócio",
            codigo,
            dados
        );
    }
}

// Exemplos de uso
const validacaoErro = ErrorFactory.createValidationError("email", "teste", "email");
console.log(validacaoErro);

const networkErro = ErrorFactory.createNetworkError("https://api.exemplo.com", 404);
console.log(networkErro);

const businessErro = ErrorFactory.createBusinessError("INSUFFICIENT_FUNDS", { saldo: 100, necessario: 200 });
console.log(businessErro);
```

## try/catch/finally

### Tratamento de Erros
```javascript
// Estrutura básica try-catch
try {
    // Código que pode lançar erro
    const resultado = operacaoRiscosa();
    console.log("Sucesso:", resultado);
} catch (error) {
    // Tratamento do erro
    console.error("Erro capturado:", error.message);
    console.error("Stack trace:", error.stack);
}

// try-catch-finally
function processarArquivo(caminho) {
    let arquivo = null;

    try {
        console.log("Abrindo arquivo...");
        arquivo = abrirArquivo(caminho); // Pode lançar erro
        const conteudo = lerArquivo(arquivo); // Pode lançar erro
        console.log("Conteúdo:", conteudo);
        return conteudo;
    } catch (error) {
        console.error("Erro ao processar arquivo:", error.message);
        // Podemos relançar o erro ou tratar
        throw new Error(`Falha no processamento: ${error.message}`);
    } finally {
        // SEMPRE executado, com ou sem erro
        console.log("Limpando recursos...");
        if (arquivo) {
            fecharArquivo(arquivo);
        }
    }
}

// try-catch aninhados
function processamentoComplexo() {
    try {
        // Processamento nível 1
        try {
            // Processamento nível 2
            const dados = obterDados();
            return transformarDados(dados);
        } catch (innerError) {
            console.error("Erro no processamento interno:", innerError.message);
            // Podemos tratar ou relançar
            throw new Error("Falha na transformação de dados");
        }
    } catch (outerError) {
        console.error("Erro no processamento principal:", outerError.message);
        return null;
    }
}

// Sistema de tratamento de erros avançado
class ErrorHandler {
    constructor() {
        this.handlers = new Map();
        this.fallbackHandler = this.defaultHandler.bind(this);
        this.config = {
            logErrors: true,
            showUserFriendlyMessages: true,
            autoReport: false
        };
    }

    registerHandler(errorType, handler) {
        this.handlers.set(errorType, handler);
    }

    unregisterHandler(errorType) {
        this.handlers.delete(errorType);
    }

    setFallbackHandler(handler) {
        this.fallbackHandler = handler;
    }

    async handle(error, context = {}) {
        // Log do erro se configurado
        if (this.config.logErrors) {
            this.logError(error, context);
        }

        // Encontrar handler específico para este tipo de erro
        const handler = this.handlers.get(error.name) || this.fallbackHandler;

        try {
            // Executar handler
            await handler(error, context);

            // Reportar erro se configurado
            if (this.config.autoReport) {
                await this.reportError(error, context);
            }
        } catch (handlerError) {
            console.error("Erro no handler de erros:", handlerError);
            // Fallback para handler padrão
            await this.fallbackHandler(error, context);
        }
    }

    logError(error, context) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            },
            context: {
                url: window.location.href,
                userAgent: navigator.userAgent,
                ...context
            }
        };

        console.error("🚨 ERRO:", logEntry);

        // Também logar no console do desenvolvedor
        console.groupCollapsed(`Erro: ${error.name}`);
        console.error("Mensagem:", error.message);
        console.error("Stack:", error.stack);
        console.log("Contexto:", context);
        console.groupEnd();
    }

    async reportError(error, context) {
        // Em produção, enviaria para um serviço como Sentry, LogRocket, etc.
        console.log("📤 Reportando erro para serviço externo...");

        // Simulação de envio
        try {
            const response = await fetch("/api/error-report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    error: {
                        name: error.name,
                        message: error.message,
                        stack: error.stack
                    },
                    context,
                    timestamp: new Date().toISOString()
                })
            });

            if (!response.ok) {
                console.error("Falha ao reportar erro:", response.status);
            }
        } catch (reportError) {
            console.error("Erro ao tentar reportar erro:", reportError);
        }
    }

    defaultHandler(error, context) {
        // Handler padrão - mostra mensagem amigável ao usuário
        const mensagensAmigaveis = {
            NetworkError: "Problema de conexão. Verifique sua internet.",
            ValidationError: "Dados inválidos. Verifique as informações.",
            TypeError: "Ocorreu um erro interno. Recarregue a página.",
            SyntaxError: "Erro no código. Contate o suporte.",
            BusinessError: "Não foi possível completar a operação."
        };

        const mensagem = this.config.showUserFriendlyMessages
            ? mensagensAmigaveis[error.name] || "Ocorreu um erro inesperado."
            : error.message;

        // Mostrar notificação para o usuário
        this.showUserNotification(mensagem, error.name);

        // Retornar resultado padronizado
        return {
            success: false,
            error: {
                type: error.name,
                message: mensagem,
                originalMessage: error.message,
                timestamp: new Date().toISOString()
            }
        };
    }

    showUserNotification(mensagem, tipo) {
        // Implementar notificação na UI
        const notification = document.createElement("div");
        notification.className = `error-notification error-${tipo.toLowerCase()}`;
        notification.innerHTML = `
            <div class="error-icon">⚠️</div>
            <div class="error-message">${mensagem}</div>
            <button class="error-close">&times;</button>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #f5c6cb;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10000;
            max-width: 400px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        `;

        document.body.appendChild(notification);

        // Auto-remover após 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);

        // Botão de fechar
        notification.querySelector(".error-close").addEventListener("click", () => {
            notification.remove();
        });
    }

    // Método utilitário para wrap de funções
    wrapAsyncFunction(asyncFn) {
        return async (...args) => {
            try {
                return await asyncFn(...args);
            } catch (error) {
                await this.handle(error, {
                    function: asyncFn.name || "anonymous",
                    args: args
                });
                throw error; // Relançar após tratamento
            }
        };
    }

    wrapSyncFunction(syncFn) {
        return (...args) => {
            try {
                return syncFn(...args);
            } catch (error) {
                this.handle(error, {
                    function: syncFn.name || "anonymous",
                    args: args
                });
                throw error;
            }
        };
    }
}

// Exemplo de uso do ErrorHandler
const errorHandler = new ErrorHandler();

// Registrar handlers específicos
errorHandler.registerHandler("NetworkError", async (error, context) => {
    console.log("Tratando NetworkError...");

    // Tentar reconexão
    if (context.retryCount < 3) {
        console.log(`Tentando reconectar (${context.retryCount + 1}/3)...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        throw error; // Relançar para tentar novamente
    }

    // Mostrar mensagem final
    errorHandler.showUserNotification(
        "Não foi possível conectar ao servidor. Tente novamente mais tarde.",
        "NetworkError"
    );
});

errorHandler.registerHandler("ValidationError", (error, context) => {
    console.log("Tratando ValidationError...");

    // Destacar campo inválido na UI
    if (error.campo) {
        const campo = document.querySelector(`[name="${error.campo}"]`);
        if (campo) {
            campo.style.borderColor = "red";
            campo.focus();

            // Tooltip de erro
            const tooltip = document.createElement("div");
            tooltip.className = "validation-tooltip";
            tooltip.textContent = error.message;
            tooltip.style.cssText = `
                position: absolute;
                background: #dc3545;
                color: white;
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 12px;
                z-index: 1000;
            `;

            campo.parentNode.appendChild(tooltip);

            // Remover após 3 segundos
            setTimeout(() => tooltip.remove(), 3000);
        }
    }
});

// Usar wrap em funções
const buscarDadosSeguro = errorHandler.wrapAsyncFunction(async function buscarDados(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new NetworkError(`HTTP ${response.status}`, url, response.status);
    }
    return response.json();
});

const validarFormularioSeguro = errorHandler.wrapSyncFunction(function validarFormulario(dados) {
    if (!dados.email) {
        throw ErrorFactory.createValidationError("email", "", "required");
    }
    if (!dados.email.includes("@")) {
        throw ErrorFactory.createValidationError("email", dados.email, "email");
    }
    return true;
});

// Testando
async function testarErrorHandler() {
    try {
        // Isso será tratado pelo NetworkError handler
        await buscarDadosSeguro("https://api.invalida.com/data", { retryCount: 0 });
    } catch (error) {
        // Já foi tratado pelo ErrorHandler
        console.log("Erro tratado:", error.message);
    }

    try {
        // Isso será tratado pelo ValidationError handler
        validarFormularioSeguro({ email: "" });
    } catch (error) {
        console.log("Erro de validação tratado:", error.message);
    }
}

// Sistema de retry automático
class RetryManager {
    constructor(config = {}) {
        this.config = {
            maxRetries: 3,
            initialDelay: 1000,
            maxDelay: 10000,
            backoffFactor: 2,
            retryableErrors: ["NetworkError", "TimeoutError"],
            ...config
        };
    }

    async executeWithRetry(operation, context = {}) {
        let lastError;

        for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
            try {
                if (attempt > 0) {
                    console.log(`Tentativa ${attempt + 1}/${this.config.maxRetries + 1}`);

                    // Calcular delay com backoff exponencial
                    const delay = Math.min(
                        this.config.initialDelay * Math.pow(this.config.backoffFactor, attempt - 1),
                        this.config.maxDelay
                    );

                    console.log(`Aguardando ${delay}ms antes da próxima tentativa...`);
                    await this.delay(delay);
                }

                return await operation();
            } catch (error) {
                lastError = error;

                // Verificar se o erro é retryable
                if (!this.shouldRetry(error)) {
                    console.log("Erro não é retryable, abortando...");
                    break;
                }

                console.log(`Tentativa ${attempt + 1} falhou:`, error.message);

                // Última tentativa?
                if (attempt === this.config.maxRetries) {
                    console.log("Número máximo de tentativas atingido");
                    break;
                }
            }
        }

        throw lastError;
    }

    shouldRetry(error) {
        return this.config.retryableErrors.includes(error.name);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Método para wrap de funções com retry
    wrapWithRetry(asyncFn) {
        return async (...args) => {
            return await this.executeWithRetry(
                () => asyncFn(...args),
                { function: asyncFn.name, args }
            );
        };
    }
}

// Exemplo de uso do RetryManager
const retryManager = new RetryManager({
    maxRetries: 3,
    initialDelay: 1000,
    retryableErrors: ["NetworkError", "TimeoutError"]
});

const buscarDadosComRetry = retryManager.wrapWithRetry(async function buscarDados(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new NetworkError(`HTTP ${response.status}`, url, response.status);
    }
    return response.json();
});

// Testar
async function testarRetry() {
    try {
        const dados = await buscarDadosComRetry("https://api.exemplo.com/data");
        console.log("Dados obtidos:", dados);
    } catch (error) {
        console.error("Falha após todas as tentativas:", error.message);
    }
}

// Sistema de circuit breaker
class CircuitBreaker {
    constructor(config = {}) {
        this.config = {
            failureThreshold: 5,
            resetTimeout: 30000,
            halfOpenMaxAttempts: 3,
            ...config
        };

        this.state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN
        this.failureCount = 0;
        this.lastFailureTime = null;
        this.halfOpenAttempts = 0;
        this.stats = {
            totalRequests: 0,
            successfulRequests: 0,
            failedRequests: 0,
            circuitOpened: 0
        };
    }

    async execute(operation) {
        this.stats.totalRequests++;

        // Verificar estado do circuito
        if (this.state === "OPEN") {
            const now = Date.now();
            const timeSinceFailure = now - this.lastFailureTime;

            if (timeSinceFailure >= this.config.resetTimeout) {
                console.log("Circuit breaker: Tentando estado HALF_OPEN");
                this.state = "HALF_OPEN";
                this.halfOpenAttempts = 0;
            } else {
                console.log("Circuit breaker: Circuito ABERTO, requisição rejeitada");
                throw new Error("CircuitBreakerOpen: Serviço temporariamente indisponível");
            }
        }

        try {
            const result = await operation();

            // Sucesso - resetar contadores
            this.onSuccess();
            this.stats.successfulRequests++;

            return result;
        } catch (error) {
            // Falha - atualizar contadores
            this.onFailure();
            this.stats.failedRequests++;

            throw error;
        }
    }

    onSuccess() {
        if (this.state === "HALF_OPEN") {
            this.halfOpenAttempts++;

            if (this.halfOpenAttempts >= this.config.halfOpenMaxAttempts) {
                console.log("Circuit breaker: Voltando para estado CLOSED");
                this.state = "CLOSED";
                this.failureCount = 0;
                this.halfOpenAttempts = 0;
            }
        } else {
            // Em estado CLOSED, resetar contador de falhas após sucesso
            this.failureCount = 0;
        }
    }

    onFailure() {
        this.failureCount++;
        this.lastFailureTime = Date.now();

        if (this.state === "HALF_OPEN") {
            console.log("Circuit breaker: Falha em HALF_OPEN, voltando para OPEN");
            this.state = "OPEN";
            this.halfOpenAttempts = 0;
            this.stats.circuitOpened++;
        } else if (this.state === "CLOSED" && this.failureCount >= this.config.failureThreshold) {
            console.log("Circuit breaker: Limite de falhas atingido, abrindo circuito");
            this.state = "OPEN";
            this.stats.circuitOpened++;
        }
    }

    getState() {
        return {
            state: this.state,
            failureCount: this.failureCount,
            lastFailureTime: this.lastFailureTime,
            halfOpenAttempts: this.halfOpenAttempts,
            stats: { ...this.stats }
        };
    }

    reset() {
        this.state = "CLOSED";
        this.failureCount = 0;
        this.lastFailureTime = null;
        this.halfOpenAttempts = 0;
        console.log("Circuit breaker: Resetado");
    }

    // Método para wrap de funções com circuit breaker
    wrap(operation) {
        return async (...args) => {
            return await this.execute(() => operation(...args));
        };
    }
}

// Exemplo de uso do CircuitBreaker
const circuitBreaker = new CircuitBreaker({
    failureThreshold: 3,
    resetTimeout: 10000,
    halfOpenMaxAttempts: 2
});

const buscarDadosComCircuitBreaker = circuitBreaker.wrap(async function buscarDados(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new NetworkError(`HTTP ${response.status}`, url, response.status);
    }
    return response.json();
});

// Testar circuit breaker
async function testarCircuitBreaker() {
    // Simular falhas
    for (let i = 0; i < 5; i++) {
        try {
            await buscarDadosComCircuitBreaker("https://api.invalida.com/data");
        } catch (error) {
            console.log(`Tentativa ${i + 1}:`, error.message);
            console.log("Estado:", circuitBreaker.getState());
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    // Após 10 segundos, o circuito deve tentar entrar em HALF_OPEN
    setTimeout(() => {
        console.log("Após 10s, estado:", circuitBreaker.getState());
    }, 10000);
}
```

## throw

### Lançamento de Erros
```javascript
// Lançamento básico
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não permitida");
    }
    return a / b;
}

// Lançamento com erros personalizados
function processarUsuario(usuario) {
    if (!usuario) {
        throw new ValidationError("Usuário não fornecido", "usuario", usuario);
    }

    if (!usuario.email) {
        throw new ValidationError("Email é obrigatório", "email", usuario.email);
    }

    if (!usuario.email.includes("@")) {
        throw new ValidationError("Email inválido", "email", usuario.email);
    }

    // Processamento...
    return { success: true, usuario };
}

// Lançamento condicional
function acessarRecurso(recurso, usuario) {
    const permissoes = {
        admin: ["ler", "escrever", "excluir"],
        usuario: ["ler"],
        convidado: []
    };

    if (!usuario) {
        throw new PermissionError("Usuário não autenticado", recurso, "acessar");
    }

    if (!permissoes[usuario.permissao]?.includes("ler")) {
        throw new PermissionError(
            "Permissão insuficiente",
            recurso,
            "ler"
        );
    }

    console.log(`Acesso concedido ao recurso: ${recurso}`);
    return { acesso: true };
}

// Lançamento em cadeias de promessas
async function fluxoCompleto() {
    try {
        const dados = await buscarDados();
        const processado = await processarDados(dados);
        const resultado = await salvarDados(processado);
        return resultado;
    } catch (error) {
        // Adicionar contexto e relançar
        error.fluxo = "fluxoCompleto";
        error.timestamp = new Date();
        throw error;
    }
}

// Sistema de validação com throw
class Validator {
    constructor() {
        this.rules = new Map();
    }

    addRule(campo, regra, mensagem, validateFn) {
        if (!this.rules.has(campo)) {
            this.rules.set(campo, []);
        }

        this.rules.get(campo).push({
            regra,
            mensagem,
            validate: validateFn
        });

        return this;
    }

    validate(dados) {
        const erros = [];

        for (const [campo, regras] of this.rules) {
            const valor = dados[campo];

            for (const regra of regras) {
                try {
                    if (!regra.validate(valor, dados)) {
                        throw new ValidationError(
                            regra.mensagem,
                            campo,
                            valor
                        );
                    }
                } catch (error) {
                    erros.push(error);
                }
            }
        }

        if (erros.length > 0) {
            // Lançar AggregateError se houver múltiplos erros
            if (erros.length === 1) {
                throw erros[0];
            } else {
                throw new AggregateError(
                    erros,
                    "Múltiplos erros de validação"
                );
            }
        }

        return true;
    }

    // Métodos utilitários para regras comuns
    static required() {
        return (valor) => {
            return valor !== undefined && valor !== null && valor !== "";
        };
    }

    static email() {
        return (valor) => {
            if (!valor) return true; // Se for opcional
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(valor);
        };
    }

    static minLength(min) {
        return (valor) => {
            if (!valor) return true; // Se for opcional
            return String(valor).length >= min;
        };
    }

    static maxLength(max) {
        return (valor) => {
            if (!valor) return true;
            return String(valor).length <= max;
        };
    }

    static pattern(regex) {
        return (valor) => {
            if (!valor) return true;
            return regex.test(valor);
        };
    }

    static min(min) {
        return (valor) => {
            if (valor === undefined || valor === null) return true;
            return Number(valor) >= min;
        };
    }

    static max(max) {
        return (valor) => {
            if (valor === undefined || valor === null) return true;
            return Number(valor) <= max;
        };
    }
}

// Exemplo de uso do Validator
const validator = new Validator();

validator
    .addRule("nome", "required", "Nome é obrigatório", Validator.required())
    .addRule("email", "required", "Email é obrigatório", Validator.required())
    .addRule("email", "email", "Email inválido", Validator.email())
    .addRule("senha", "required", "Senha é obrigatória", Validator.required())
    .addRule("senha", "minLength", "Senha deve ter no mínimo 8 caracteres",
        Validator.minLength(8))
    .addRule("idade", "min", "Idade mínima é 18 anos", Validator.min(18))
    .addRule("idade", "max", "Idade máxima é 120 anos", Validator.max(120));

function registrarUsuario(dados) {
    try {
        // Validar dados
        validator.validate(dados);

        // Se passar na validação, processar
        console.log("Usuário válido, registrando...");
        return { success: true, dados };
    } catch (error) {
        if (error instanceof AggregateError) {
            console.error("Múltiplos erros de validação:");
            error.errors.forEach((err, i) => {
                console.error(`${i + 1}. ${err.message} (campo: ${err.campo})`);
            });
        } else {
            console.error("Erro de validação:", error.message);
        }
        throw error;
    }
}

// Testando
try {
    registrarUsuario({
        nome: "João",
        email: "email-invalido",
        senha: "123",
        idade: 15
    });
} catch (error) {
    console.log("Usuário não registrado devido a erros");
}

// Sistema de assertions
class Assert {
    static notNull(valor, mensagem = "Valor não pode ser nulo") {
        if (valor === null || valor === undefined) {
            throw new TypeError(mensagem);
        }
        return valor;
    }

    static notEmpty(valor, mensagem = "Valor não pode ser vazio") {
        this.notNull(valor, mensagem);

        if (typeof valor === "string" && valor.trim() === "") {
            throw new Error(mensagem);
        }

        if (Array.isArray(valor) && valor.length === 0) {
            throw new Error(mensagem);
        }

        if (typeof valor === "object" && Object.keys(valor).length === 0) {
            throw new Error(mensagem);
        }

        return valor;
    }

    static isString(valor, mensagem = "Valor deve ser uma string") {
        if (typeof valor !== "string") {
            throw new TypeError(mensagem);
        }
        return valor;
    }

    static isNumber(valor, mensagem = "Valor deve ser um número") {
        if (typeof valor !== "number" || isNaN(valor)) {
            throw new TypeError(mensagem);
        }
        return valor;
    }

    static isArray(valor, mensagem = "Valor deve ser um array") {
        if (!Array.isArray(valor)) {
            throw new TypeError(mensagem);
        }
        return valor;
    }

    static isObject(valor, mensagem = "Valor deve ser um objeto") {
        if (typeof valor !== "object" || valor === null || Array.isArray(valor)) {
            throw new TypeError(mensagem);
        }
        return valor;
    }

    static isBoolean(valor, mensagem = "Valor deve ser um booleano") {
        if (typeof valor !== "boolean") {
            throw new TypeError(mensagem);
        }
        return valor;
    }

    static matches(valor, regex, mensagem = "Valor não corresponde ao padrão") {
        this.isString(valor);

        if (!regex.test(valor)) {
            throw new Error(mensagem);
        }
        return valor;
    }

    static inRange(valor, min, max, mensagem = `Valor deve estar entre ${min} e ${max}`) {
        this.isNumber(valor);

        if (valor < min || valor > max) {
            throw new RangeError(mensagem);
        }
        return valor;
    }

    static length(valor, length, mensagem = `Valor deve ter exatamente ${length} caracteres`) {
        this.isString(valor);

        if (valor.length !== length) {
            throw new Error(mensagem);
        }
        return valor;
    }

    static minLength(valor, min, mensagem = `Valor deve ter no mínimo ${min} caracteres`) {
        this.isString(valor);

        if (valor.length < min) {
            throw new Error(mensagem);
        }
        return valor;
    }

    static maxLength(valor, max, mensagem = `Valor deve ter no máximo ${max} caracteres`) {
        this.isString(valor);

        if (valor.length > max) {
            throw new Error(mensagem);
        }
        return valor;
    }

    static email(valor, mensagem = "Email inválido") {
        return this.matches(valor, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, mensagem);
    }

    static url(valor, mensagem = "URL inválida") {
        try {
            new URL(valor);
            return valor;
        } catch {
            throw new Error(mensagem);
        }
    }

    static custom(valor, validateFn, mensagem = "Validação customizada falhou") {
        if (!validateFn(valor)) {
            throw new Error(mensagem);
        }
        return valor;
    }
}

// Exemplo de uso do Assert
function criarUsuario(dados) {
    try {
        const usuario = {
            nome: Assert.notEmpty(dados.nome, "Nome é obrigatório"),
            email: Assert.email(dados.email, "Email inválido"),
            idade: Assert.inRange(dados.idade, 18, 120, "Idade deve ser entre 18 e 120"),
            senha: Assert.minLength(dados.senha, 8, "Senha deve ter no mínimo 8 caracteres"),
            telefone: Assert.matches(
                dados.telefone,
                /^\(\d{2}\) \d{4,5}-\d{4}$/,
                "Telefone inválido. Use (99) 99999-9999"
            )
        };

        console.log("Usuário válido:", usuario);
        return usuario;
    } catch (error) {
        console.error("Erro na criação do usuário:", error.message);
        throw error;
    }
}

// Testando
try {
    criarUsuario({
        nome: "Maria",
        email: "maria@exemplo.com",
        idade: 25,
        senha: "senhasegura123",
        telefone: "(11) 99999-9999"
    });
} catch (error) {
    console.log("Falha na criação do usuário");
}

// Sistema de contrato por design (Design by Contract)
class Contract {
    static requires(condition, message = "Pré-condição não satisfeita") {
        if (!condition) {
            throw new Error(`Pré-condição: ${message}`);
        }
    }

    static ensures(condition, message = "Pós-condição não satisfeita") {
        if (!condition) {
            throw new Error(`Pós-condição: ${message}`);
        }
    }

    static invariant(condition, message = "Invariante violado") {
        if (!condition) {
            throw new Error(`Invariante: ${message}`);
        }
    }

    // Decorator para pré/pós condições
    static method(preCondition, postCondition) {
        return function(target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;

            descriptor.value = function(...args) {
                // Verificar pré-condição
                if (preCondition) {
                    Contract.requires(
                        preCondition.apply(this, args),
                        `Pré-condição falhou para ${propertyKey}`
                    );
                }

                // Executar método original
                const result = originalMethod.apply(this, args);

                // Verificar pós-condição
                if (postCondition) {
                    Contract.ensures(
                        postCondition.call(this, result, ...args),
                        `Pós-condição falhou para ${propertyKey}`
                    );
                }

                return result;
            };

            return descriptor;
        };
    }

    // Decorator para invariantes de classe
    static invariant(checkInvariant) {
        return function(constructor) {
            const methods = Object.getOwnPropertyNames(constructor.prototype);

            methods.forEach(methodName => {
                if (methodName !== 'constructor') {
                    const originalMethod = constructor.prototype[methodName];

                    constructor.prototype[methodName] = function(...args) {
                        // Verificar invariante antes
                        Contract.invariant(
                            checkInvariant.call(this),
                            `Invariante violado antes de ${methodName}`
                        );

                        const result = originalMethod.apply(this, args);

                        // Verificar invariante depois
                        Contract.invariant(
                            checkInvariant.call(this),
                            `Invariante violado depois de ${methodName}`
                        );

                        return result;
                    };
                }
            });

            return constructor;
        };
    }
}

// Exemplo de uso do Contract
class ContaBancaria {
    constructor(saldoInicial) {
        Contract.requires(saldoInicial >= 0, "Saldo inicial não pode ser negativo");
        this.saldo = saldoInicial;
    }

    @Contract.method(
        // Pré-condição: valor deve ser positivo
        (valor) => valor > 0,
        // Pós-condição: saldo deve aumentar exatamente pelo valor
        (result, valor) => result.saldo === this.saldo + valor
    )
    depositar(valor) {
        this.saldo += valor;
        return this;
    }

    @Contract.method(
        // Pré-condição: valor deve ser positivo e menor ou igual ao saldo
        (valor) => valor > 0 && valor <= this.saldo,
        // Pós-condição: saldo deve diminuir exatamente pelo valor
        (result, valor) => result.saldo === this.saldo - valor
    )
    sacar(valor) {
        this.saldo -= valor;
        return this;
    }

    getSaldo() {
        return this.saldo;
    }
}

// Testando
try {
    const conta = new ContaBancaria(100);
    console.log("Saldo inicial:", conta.getSaldo());

    conta.depositar(50);
    console.log("Após depósito:", conta.getSaldo());

    conta.sacar(30);
    console.log("Após saque:", conta.getSaldo());

    // Isso deve falhar na pré-condição
    conta.sacar(200);
} catch (error) {
    console.error("Erro no contrato:", error.message);
}

// Sistema de error boundaries para React-like components
class ErrorBoundary {
    constructor(component, fallbackUI = null) {
        this.component = component;
        this.fallbackUI = fallbackUI;
        this.hasError = false;
        this.error = null;
        this.errorInfo = null;
    }

    render(props) {
        if (this.hasError && this.fallbackUI) {
            return this.fallbackUI(this.error, this.errorInfo);
        }

        try {
            return this.component(props);
        } catch (error) {
            this.hasError = true;
            this.error = error;
            this.errorInfo = {
                timestamp: new Date(),
                props: props
            };

            // Log do erro
            console.error("ErrorBoundary capturou erro:", error);

            if (this.fallbackUI) {
                return this.fallbackUI(error, this.errorInfo);
            }

            // Fallback padrão
            return this.defaultFallback();
        }
    }

    defaultFallback() {
        return `
            <div class="error-boundary">
                <h3>Algo deu errado</h3>
                <p>${this.error?.message || "Erro desconhecido"}</p>
                <button onclick="location.reload()">Recarregar página</button>
            </div>
        `;
    }

    reset() {
        this.hasError = false;
        this.error = null;
        this.errorInfo = null;
    }

    // Método estático para wrap de componentes
    static wrap(component, fallbackUI = null) {
        const boundary = new ErrorBoundary(component, fallbackUI);
        return (props) => boundary.render(props);
    }
}

// Exemplo de uso do ErrorBoundary
const ComponenteRisco = (dados) => {
    if (!dados || !dados.usuario) {
        throw new Error("Dados do usuário são necessários");
    }

    return `
        <div class="user-profile">
            <h2>${dados.usuario.nome}</h2>
            <p>Email: ${dados.usuario.email}</p>
        </div>
    `;
};

const FallbackUI = (error, info) => {
    return `
        <div class="error-fallback">
            <h3>😕 Oops! Algo deu errado</h3>
            <p><strong>Erro:</strong> ${error.message}</p>
            <p><strong>Quando:</strong> ${info.timestamp.toLocaleString()}</p>
            <button onclick="this.parentElement.querySelector('.retry-button').click()">
                Tentar novamente
            </button>
            <button class="retry-button" onclick="this.dispatchEvent(new CustomEvent('retry'))"
                    style="display: none">
                Retry
            </button>
        </div>
    `;
};

const ComponenteProtegido = ErrorBoundary.wrap(ComponenteRisco, FallbackUI);

// Testando
function renderizarComponente() {
    const container = document.getElementById("app");

    // Teste 1: Com dados válidos
    container.innerHTML = ComponenteProtegido({
        usuario: {
            nome: "João Silva",
            email: "joao@exemplo.com"
        }
    });

    // Teste 2: Sem dados (deve mostrar fallback)
    setTimeout(() => {
        container.innerHTML = ComponenteProtegido(null);
    }, 2000);

    // Teste 3: Adicionar listener para retry
    container.addEventListener("retry", () => {
        console.log("Tentando novamente...");
        renderizarComponente();
    });
}
```

## Console Methods (log, warn, error, table, time)

### Métodos Avançados do Console
```javascript
// 1. console.log - Log básico
console.log("Mensagem simples"); // Mensagem simples
console.log("Valor:", 42, "Array:", [1, 2, 3], "Objeto:", { a: 1 }); // Múltiplos valores
console.log(`Template string com ${"variável"}`); // Template strings

// Formatação com CSS
console.log("%cEstilo personalizado!",
    "color: white; background: linear-gradient(90deg, #ff5e62, #ff9966); padding: 5px 10px; border-radius: 3px;");

// 2. console.info - Informação
console.info("Informação:", "Processo iniciado com sucesso");
console.info("%cℹ️ Informação importante", "color: #17a2b8; font-weight: bold;");

// 3. console.warn - Aviso
console.warn("Atenção:", "Esta funcionalidade está obsoleta");
console.warn("%c⚠️ Alerta de segurança",
    "color: #856404; background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 10px;");

// 4. console.error - Erro
console.error("Erro crítico:", new Error("Algo deu errado"));
console.error("%c❌ ERRO FATAL",
    "color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 10px; font-size: 16px;");

// 5. console.debug - Debug
console.debug("Debug info:", { timestamp: Date.now(), user: "admin" });
// Só aparece quando console.debug está ativado nas DevTools

// 6. console.table - Tabela
const usuarios = [
    { id: 1, nome: "João", idade: 30, cidade: "São Paulo" },
    { id: 2, nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { id: 3, nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
];

console.table(usuarios); // Tabela completa
console.table(usuarios, ["nome", "cidade"]); // Colunas específicas

// Arrays
console.table(["Maçã", "Banana", "Laranja"]);

// Objetos aninhados
const dadosComplexos = {
    usuario1: { nome: "João", detalhes: { idade: 30, ativo: true } },
    usuario2: { nome: "Maria", detalhes: { idade: 25, ativo: false } }
};
console.table(dadosComplexos);

// 7. console.time / console.timeEnd - Medição de tempo
console.time("Processamento pesado");
// Código a ser medido
for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
}
console.timeEnd("Processamento pesado");

// Múltiplos timers
console.time("Timer 1");
console.time("Timer 2");

setTimeout(() => {
    console.timeEnd("Timer 1");
}, 1000);

setTimeout(() => {
    console.timeEnd("Timer 2");
}, 2000);

// 8. console.timeLog - Log intermediário do timer
console.time("Processo longo");
setTimeout(() => {
    console.timeLog("Processo longo", "Primeira etapa completa");

    setTimeout(() => {
        console.timeLog("Processo longo", "Segunda etapa completa");

        setTimeout(() => {
            console.timeEnd("Processo longo");
        }, 1000);
    }, 1500);
}, 1000);

// 9. console.group / console.groupEnd - Agrupamento
console.group("Processo de Usuário");
console.log("1. Validando dados...");
console.log("2. Criando usuário...");
console.group("Envio de email");
console.log("2.1. Preparando template...");
console.log("2.2. Enviando email...");
console.groupEnd(); // Fecha grupo de email
console.log("3. Usuário criado com sucesso!");
console.groupEnd(); // Fecha grupo principal

// 10. console.groupCollapsed - Grupo recolhido inicialmente
console.groupCollapsed("Detalhes de performance");
console.log("Memória usada:", performance.memory?.usedJSHeapSize || "N/A");
console.log("Tempo de execução:", performance.now());
console.groupEnd();

// 11. console.count - Contador
function processarItem(item) {
    console.count(`processarItem ${item.tipo}`);
    // Processamento...
}

processarItem({ tipo: "A" }); // processarItem A: 1
processarItem({ tipo: "B" }); // processarItem B: 1
processarItem({ tipo: "A" }); // processarItem A: 2

console.countReset("processarItem A"); // Reseta contador para "A"
processarItem({ tipo: "A" }); // processarItem A: 1

// 12. console.assert - Asserção
const valor = 10;
console.assert(valor > 20, "Valor deve ser maior que 20, mas é", valor);

const usuario = { nome: "João" };
console.assert(usuario.idade, "Usuário deve ter idade definida", usuario);

// 13. console.trace - Stack trace
function funcaoA() {
    funcaoB();
}

function funcaoB() {
    funcaoC();
}

function funcaoC() {
    console.trace("Rastreamento da chamada");
}

funcaoA();

// 14. console.dir - Exibição detalhada de objetos
const elemento = document.createElement("div");
elemento.className = "teste";
elemento.innerHTML = "<span>Conteúdo</span>";

console.dir(elemento); // Mostra propriedades DOM
console.dirxml(elemento); // Mostra como XML/HTML

// 15. console.clear - Limpar console
// console.clear(); // Comente para não limpar durante a execução

// Sistema avançado de logging
class AdvancedLogger {
    constructor(config = {}) {
        this.config = {
            logLevel: "info", // debug, info, warn, error, silent
            showTimestamps: true,
            showLevel: true,
            colors: true,
            persist: false,
            maxEntries: 1000,
            ...config
        };

        this.levels = {
            debug: 0,
            info: 1,
            warn: 2,
            error: 3,
            silent: 4
        };

        this.history = [];
        this.styles = {
            debug: "color: #6c757d;",
            info: "color: #17a2b8;",
            warn: "color: #ffc107;",
            error: "color: #dc3545; font-weight: bold;"
        };

        this.init();
    }

    init() {
        // Interceptar console original
        this.originalConsole = {
            log: console.log,
            info: console.info,
            warn: console.warn,
            error: console.error,
            debug: console.debug
        };

        // Sobrescrever console
        if (this.config.interceptConsole) {
            console.log = (...args) => this.log("info", args);
            console.info = (...args) => this.log("info", args);
            console.warn = (...args) => this.log("warn", args);
            console.error = (...args) => this.log("error", args);
            console.debug = (...args) => this.log("debug", args);
        }
    }

    log(level, ...args) {
        const levelValue = this.levels[level];
        const configLevelValue = this.levels[this.config.logLevel];

        if (levelValue < configLevelValue) {
            return; // Nível muito baixo, não logar
        }

        // Preparar mensagem
        const timestamp = this.config.showTimestamps
            ? `[${new Date().toISOString()}] `
            : "";

        const levelPrefix = this.config.showLevel
            ? `[${level.toUpperCase()}] `
            : "";

        const prefix = timestamp + levelPrefix;

        // Adicionar ao histórico
        if (this.config.persist) {
            this.addToHistory(level, prefix, args);
        }

        // Aplicar estilo se cores estiverem habilitadas
        if (this.config.colors && this.styles[level]) {
            const style = this.styles[level];
            this.originalConsole[level]("%c" + prefix, style, ...args);
        } else {
            this.originalConsole[level](prefix, ...args);
        }

        // Log em grupos se habilitado
        if (this.config.groupByLevel && level === "error") {
            console.groupCollapsed(`Erros (${this.history.filter(h => h.level === "error").length})`);
            this.history.filter(h => h.level === "error").forEach(entry => {
                console[entry.level](entry.timestamp, ...entry.args);
            });
            console.groupEnd();
        }
    }

    addToHistory(level, prefix, args) {
        const entry = {
            level,
            timestamp: new Date().toISOString(),
            prefix,
            args: [...args]
        };

        this.history.push(entry);

        // Manter apenas maxEntries
        if (this.history.length > this.config.maxEntries) {
            this.history = this.history.slice(-this.config.maxEntries);
        }
    }

    debug(...args) {
        this.log("debug", ...args);
    }

    info(...args) {
        this.log("info", ...args);
    }

    warn(...args) {
        this.log("warn", ...args);
    }

    error(...args) {
        this.log("error", ...args);
    }

    table(data, columns) {
        if (columns) {
            console.table(data, columns);
        } else {
            console.table(data);
        }
    }

    time(label) {
        console.time(label);
    }

    timeEnd(label) {
        console.timeEnd(label);
    }

    timeLog(label, ...data) {
        console.timeLog(label, ...data);
    }

    group(label, collapsed = false) {
        if (collapsed) {
            console.groupCollapsed(label);
        } else {
            console.group(label);
        }
    }

    groupEnd() {
        console.groupEnd();
    }

    assert(condition, ...args) {
        console.assert(condition, ...args);
    }

    trace(...args) {
        console.trace(...args);
    }

    dir(obj, options) {
        console.dir(obj, options);
    }

    clear() {
        console.clear();
        this.history = [];
    }

    getHistory(filterLevel = null) {
        if (filterLevel) {
            return this.history.filter(entry => entry.level === filterLevel);
        }
        return [...this.history];
    }

    getStats() {
        const stats = {};
        this.history.forEach(entry => {
            stats[entry.level] = (stats[entry.level] || 0) + 1;
        });

        return {
            total: this.history.length,
            byLevel: stats,
            firstEntry: this.history[0]?.timestamp,
            lastEntry: this.history[this.history.length - 1]?.timestamp
        };
    }

    exportHistory(format = "json") {
        switch (format) {
            case "json":
                return JSON.stringify(this.history, null, 2);
            case "csv":
                return this.convertToCSV();
            case "text":
                return this.convertToText();
            default:
                return this.history;
        }
    }

    convertToCSV() {
        if (this.history.length === 0) return "";

        const headers = ["Timestamp", "Level", "Message"];
        const rows = this.history.map(entry => [
            entry.timestamp,
            entry.level,
            entry.args.map(arg =>
                typeof arg === "object" ? JSON.stringify(arg) : String(arg)
            ).join(" ")
        ]);

        return [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(","))
            .join("\n");
    }

    convertToText() {
        return this.history.map(entry =>
            `[${entry.timestamp}] [${entry.level.toUpperCase()}] ${entry.args.join(" ")}`
        ).join("\n");
    }

    restoreConsole() {
        // Restaurar console original
        console.log = this.originalConsole.log;
        console.info = this.originalConsole.info;
        console.warn = this.originalConsole.warn;
        console.error = this.originalConsole.error;
        console.debug = this.originalConsole.debug;
    }
}

// Exemplo de uso do AdvancedLogger
const logger = new AdvancedLogger({
    logLevel: "debug",
    showTimestamps: true,
    showLevel: true,
    colors: true,
    persist: true,
    maxEntries: 100,
    interceptConsole: false // Manter console original
});

logger.debug("Mensagem de debug");
logger.info("Informação do sistema");
logger.warn("Aviso importante");
logger.error("Erro crítico", new Error("Teste de erro"));

// Logar tabela
logger.table([
    { id: 1, status: "ativo" },
    { id: 2, status: "inativo" }
]);

// Medir tempo
logger.time("teste");
setTimeout(() => {
    logger.timeEnd("teste");
}, 100);

// Grupo de logs
logger.group("Processamento", true);
logger.info("Passo 1");
logger.info("Passo 2");
logger.groupEnd();

// Estatísticas
console.log("Estatísticas:", logger.getStats());

// Exportar histórico
console.log("Histórico CSV:", logger.exportHistory("csv"));

// Sistema de logging para produção
class ProductionLogger {
    constructor() {
        this.endpoints = {
            log: "/api/logs",
            error: "/api/errors",
            performance: "/api/performance"
        };

        this.queue = [];
        this.sending = false;
        this.batchSize = 10;
        this.flushInterval = 5000; // 5 segundos
        this.init();
    }

    init() {
        // Capturar erros globais
        window.addEventListener("error", (event) => {
            this.captureError(event.error, {
                type: "unhandled",
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno
            });
        });

        // Capturar rejeições de promises não tratadas
        window.addEventListener("unhandledrejection", (event) => {
            this.captureError(event.reason, {
                type: "unhandledRejection",
                promise: event.promise
            });
        });

        // Flush automático
        setInterval(() => this.flush(), this.flushInterval);

        // Flush antes da página fechar
        window.addEventListener("beforeunload", () => {
            this.flushSync();
        });
    }

    log(level, message, data = {}, tags = {}) {
        const entry = {
            level,
            message,
            data,
            tags,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            sessionId: this.getSessionId()
        };

        this.queue.push(entry);

        // Se a fila estiver muito grande, enviar imediatamente
        if (this.queue.length >= this.batchSize * 2) {
            this.flush();
        }

        // Também logar no console em desenvolvimento
        if (process.env.NODE_ENV === "development") {
            const consoleMethod = console[level] || console.log;
            consoleMethod(`[${level.toUpperCase()}]`, message, data);
        }
    }

    captureError(error, context = {}) {
        const errorInfo = {
            name: error.name,
            message: error.message,
            stack: error.stack,
            ...context
        };

        this.log("error", error.message, errorInfo, {
            type: "error",
            errorName: error.name
        });
    }

    capturePerformance(metricName, value, metadata = {}) {
        this.log("info", `Performance: ${metricName}`, {
            metric: metricName,
            value,
            ...metadata
        }, {
            type: "performance"
        });
    }

    captureEvent(eventName, data = {}) {
        this.log("info", `Event: ${eventName}`, data, {
            type: "event",
            eventName
        });
    }

    async flush() {
        if (this.sending || this.queue.length === 0) {
            return;
        }

        this.sending = true;

        try {
            const batch = this.queue.splice(0, this.batchSize);

            await fetch(this.endpoints.log, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    logs: batch,
                    timestamp: new Date().toISOString()
                })
            });

            console.log(`Enviados ${batch.length} logs para o servidor`);
        } catch (error) {
            console.error("Erro ao enviar logs:", error);
            // Recolocar logs na fila
            this.queue.unshift(...batch);
        } finally {
            this.sending = false;
        }
    }

    flushSync() {
        // Tentativa síncrona usando sendBeacon
        if (this.queue.length > 0 && navigator.sendBeacon) {
            const data = JSON.stringify({
                logs: this.queue,
                timestamp: new Date().toISOString()
            });

            if (navigator.sendBeacon(this.endpoints.log, data)) {
                console.log(`Enviados ${this.queue.length} logs via sendBeacon`);
                this.queue = [];
                return true;
            }
        }

        return false;
    }

    getSessionId() {
        let sessionId = sessionStorage.getItem("logger_session_id");

        if (!sessionId) {
            sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            sessionStorage.setItem("logger_session_id", sessionId);
        }

        return sessionId;
    }

    // Métodos de conveniência
    debug(message, data = {}, tags = {}) {
        this.log("debug", message, data, tags);
    }

    info(message, data = {}, tags = {}) {
        this.log("info", message, data, tags);
    }

    warn(message, data = {}, tags = {}) {
        this.log("warn", message, data, tags);
    }

    error(message, data = {}, tags = {}) {
        this.log("error", message, data, tags);
    }
}

// Exemplo de uso do ProductionLogger
const prodLogger = new ProductionLogger();

// Logar eventos
prodLogger.info("Aplicação iniciada", { version: "1.0.0" });
prodLogger.captureEvent("user_login", { userId: 123, method: "email" });

// Capturar performance
prodLogger.capturePerformance("page_load", performance.now(), {
    resources: performance.getEntriesByType("resource").length
});

// Capturar erro
try {
    throw new Error("Erro de teste");
} catch (error) {
    prodLogger.captureError(error, { context: "teste" });
}

// Sistema de console interativo
class InteractiveConsole {
    constructor() {
        this.commands = new Map();
        this.history = [];
        this.init();
    }

    init() {
        this.registerDefaultCommands();

        // Criar interface do console interativo
        this.createUI();

        // Escutar atalho de teclado (Ctrl+Shift+I)
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === "I") {
                e.preventDefault();
                this.toggle();
            }
        });
    }

    createUI() {
        this.container = document.createElement("div");
        this.container.className = "interactive-console";
        this.container.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 300px;
            background: #1e1e1e;
            color: #d4d4d4;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 14px;
            border-top: 1px solid #333;
            display: none;
            flex-direction: column;
            z-index: 9999;
        `;

        // Header
        const header = document.createElement("div");
        header.style.cssText = `
            padding: 8px 12px;
            background: #252526;
            border-bottom: 1px solid #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        const title = document.createElement("div");
        title.textContent = "Console Interativo";
        title.style.fontWeight = "bold";

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "×";
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: #d4d4d4;
            font-size: 20px;
            cursor: pointer;
            padding: 0 8px;
        `;
        closeBtn.onclick = () => this.hide();

        header.appendChild(title);
        header.appendChild(closeBtn);

        // Output
        this.output = document.createElement("div");
        this.output.style.cssText = `
            flex: 1;
            overflow-y: auto;
            padding: 8px 12px;
            white-space: pre-wrap;
            font-family: 'Consolas', 'Monaco', monospace;
        `;

        // Input
        const inputContainer = document.createElement("div");
        inputContainer.style.cssText = `
            padding: 8px 12px;
            border-top: 1px solid #333;
            display: flex;
            gap: 8px;
        `;

        const prompt = document.createElement("span");
        prompt.textContent = "> ";
        prompt.style.color = "#569cd6";

        this.input = document.createElement("input");
        this.input.type = "text";
        this.input.style.cssText = `
            flex: 1;
            background: transparent;
            border: none;
            color: #d4d4d4;
            font-family: inherit;
            font-size: inherit;
            outline: none;
        `;

        this.input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                this.executeCommand(this.input.value);
                this.input.value = "";
            } else if (e.key === "ArrowUp") {
                // Navegar no histórico
                if (this.historyIndex === undefined) {
                    this.historyIndex = this.history.length;
                }

                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.input.value = this.history[this.historyIndex];
                }

                e.preventDefault();
            } else if (e.key === "ArrowDown") {
                if (this.historyIndex !== undefined && this.historyIndex < this.history.length - 1) {
                    this.historyIndex++;
                    this.input.value = this.history[this.historyIndex];
                } else {
                    this.historyIndex = undefined;
                    this.input.value = "";
                }

                e.preventDefault();
            }
        });

        inputContainer.appendChild(prompt);
        inputContainer.appendChild(this.input);

        // Montar container
        this.container.appendChild(header);
        this.container.appendChild(this.output);
        this.container.appendChild(inputContainer);

        document.body.appendChild(this.container);
    }

    registerDefaultCommands() {
        this.registerCommand("help", "Mostra esta ajuda", () => {
            this.log("Comandos disponíveis:");
            this.log("===================");

            for (const [cmd, { description }] of this.commands) {
                this.log(`  ${cmd} - ${description}`);
            }
        });

        this.registerCommand("clear", "Limpa o console", () => {
            this.output.innerHTML = "";
        });

        this.registerCommand("log", "Exibe uma mensagem no console", (args) => {
            console.log(...args);
        });

        this.registerCommand("eval", "Executa código JavaScript", (code) => {
            try {
                const result = eval(code.join(" "));
                this.log("Resultado:", result);
            } catch (error) {
                this.log("Erro:", error.message);
            }
        });

        this.registerCommand("ls", "Lista variáveis globais", () => {
            const globalVars = Object.keys(window).filter(key =>
                !key.startsWith("_") &&
                typeof window[key] !== "function"
            );

            this.log("Variáveis globais:");
            this.log(globalVars.join(", "));
        });

        this.registerCommand("performance", "Mostra métricas de performance", () => {
            const metrics = {
                "Memory used": performance.memory?.usedJSHeapSize || "N/A",
                "Memory total": performance.memory?.totalJSHeapSize || "N/A",
                "Memory limit": performance.memory?.jsHeapSizeLimit || "N/A",
                "Navigation timing": performance.timing ? {
                    "DNS": performance.timing.domainLookupEnd - performance.timing.domainLookupStart,
                    "TCP": performance.timing.connectEnd - performance.timing.connectStart,
                    "Request": performance.timing.responseStart - performance.timing.requestStart,
                    "Response": performance.timing.responseEnd - performance.timing.responseStart,
                    "DOM Loaded": performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
                    "Page Load": performance.timing.loadEventEnd - performance.timing.navigationStart
                } : "N/A"
            };

            this.log("Métricas de performance:");
            console.table(metrics);
        });

        this.registerCommand("localStorage", "Gerencia localStorage", (args) => {
            if (args[0] === "clear") {
                localStorage.clear();
                this.log("localStorage limpo");
            } else if (args[0] === "list") {
                const items = {};
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    items[key] = localStorage.getItem(key);
                }
                console.table(items);
            } else if (args[0] === "get" && args[1]) {
                this.log(localStorage.getItem(args[1]));
            } else if (args[0] === "set" && args[1] && args[2]) {
                localStorage.setItem(args[1], args[2]);
                this.log("Item salvo");
            } else if (args[0] === "remove" && args[1]) {
                localStorage.removeItem(args[1]);
                this.log("Item removido");
            } else {
                this.log("Uso: localStorage [clear|list|get <key>|set <key> <value>|remove <key>]");
            }
        });
    }

    registerCommand(name, description, handler) {
        this.commands.set(name, { description, handler });
    }

    executeCommand(input) {
        if (!input.trim()) return;

        // Adicionar ao histórico
        this.history.push(input);
        this.historyIndex = undefined;

        // Mostrar comando no output
        this.log(`> ${input}`);

        // Parse do comando
        const parts = input.trim().split(/\s+/);
        const commandName = parts[0].toLowerCase();
        const args = parts.slice(1);

        const command = this.commands.get(commandName);

        if (command) {
            try {
                command.handler(args);
            } catch (error) {
                this.log(`Erro ao executar comando '${commandName}':`, error.message);
            }
        } else {
            this.log(`Comando não encontrado: '${commandName}'. Digite 'help' para ajuda.`);
        }
    }

    log(...args) {
        const line = document.createElement("div");
        line.textContent = args.map(arg =>
            typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(" ");

        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    toggle() {
        if (this.container.style.display === "flex") {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.container.style.display = "flex";
        this.input.focus();
    }

    hide() {
        this.container.style.display = "none";
    }

    // Método estático para acesso rápido
    static create() {
        if (!window.__interactiveConsole) {
            window.__interactiveConsole = new InteractiveConsole();
        }
        return window.__interactiveConsole;
    }
}

// Inicializar console interativo
// const interactiveConsole = InteractiveConsole.create();

// Para abrir o console interativo, use Ctrl+Shift+I
```

## Debugger Statement

### Depuração Avançada
```javascript
// 1. debugger statement básico
function funcaoParaDepurar() {
    const x = 10;
    const y = 20;

    debugger; // Pausa a execução aqui se as DevTools estiverem abertas

    const resultado = x + y;
    return resultado;
}

// 2. Debugger condicional
function processarDados(dados) {
    if (dados && dados.length > 1000) {
        // Só pausa se houver muitos dados
        debugger;
    }

    // Processamento...
}

// 3. Sistema de breakpoints programáticos
class DebuggerManager {
    constructor() {
        this.breakpoints = new Map();
        this.watchpoints = new Map();
        this.logpoints = new Map();
        this.enabled = true;
        this.init();
    }

    init() {
        // Interceptar console.debug para logpoints
        const originalDebug = console.debug;
        console.debug = (...args) => {
            if (this.enabled) {
                originalDebug.apply(console, args);
            }
        };
    }

    addBreakpoint(id, condition = null, callback = null) {
        this.breakpoints.set(id, { condition, callback });
    }

    addWatchpoint(id, expression, callback) {
        this.watchpoints.set(id, { expression, callback, lastValue: undefined });
    }

    addLogpoint(id, message, data = {}) {
        this.logpoints.set(id, { message, data });
    }

    checkBreakpoint(id, context = {}) {
        if (!this.enabled || !this.breakpoints.has(id)) {
            return false;
        }

        const breakpoint = this.breakpoints.get(id);

        // Verificar condição
        if (breakpoint.condition && !breakpoint.condition(context)) {
            return false;
        }

        // Executar callback se existir
        if (breakpoint.callback) {
            breakpoint.callback(context);
        }

        // Pausar execução
        debugger;

        return true;
    }

    checkWatchpoints(context = {}) {
        if (!this.enabled) return;

        for (const [id, watchpoint] of this.watchpoints) {
            try {
                const newValue = this.evaluateExpression(watchpoint.expression, context);

                if (watchpoint.lastValue !== undefined && newValue !== watchpoint.lastValue) {
                    console.log(`Watchpoint '${id}' mudou:`, {
                        de: watchpoint.lastValue,
                        para: newValue,
                        contexto: context
                    });

                    if (watchpoint.callback) {
                        watchpoint.callback(newValue, watchpoint.lastValue, context);
                    }
                }

                watchpoint.lastValue = newValue;
            } catch (error) {
                console.warn(`Erro ao avaliar watchpoint '${id}':`, error);
            }
        }
    }

    evaluateExpression(expression, context) {
        // Cria uma função segura para avaliar a expressão
        const evalFunc = new Function(
            ...Object.keys(context),
            `return ${expression}`
        );

        return evalFunc(...Object.values(context));
    }

    log(id, ...args) {
        if (this.enabled && this.logpoints.has(id)) {
            const logpoint = this.logpoints.get(id);
            console.debug(`[${id}] ${logpoint.message}`, ...args, logpoint.data);
        }
    }

    enable() {
        this.enabled = true;
        console.log("Debugger habilitado");
    }

    disable() {
        this.enabled = false;
        console.log("Debugger desabilitado");
    }

    clearBreakpoints() {
        this.breakpoints.clear();
    }

    clearWatchpoints() {
        this.watchpoints.clear();
    }

    clearLogpoints() {
        this.logpoints.clear();
    }

    getStatus() {
        return {
            enabled: this.enabled,
            breakpoints: this.breakpoints.size,
            watchpoints: this.watchpoints.size,
            logpoints: this.logpoints.size
        };
    }
}

// Exemplo de uso do DebuggerManager
const debuggerManager = new DebuggerManager();

// Adicionar breakpoint
debuggerManager.addBreakpoint("processamento-inicio", null, (context) => {
    console.log("Breakpoint atingido no início do processamento");
    console.log("Contexto:", context);
});

// Adicionar breakpoint condicional
debuggerManager.addBreakpoint(
    "dados-grandes",
    (context) => context.dados && context.dados.length > 1000,
    (context) => {
        console.warn("Processando muitos dados:", context.dados.length);
    }
);

// Adicionar watchpoint
debuggerManager.addWatchpoint(
    "contador-mudou",
    "contador",
    (novoValor, valorAnterior, context) => {
        console.log(`Contador mudou de ${valorAnterior} para ${novoValor}`);
    }
);

// Adicionar logpoint
debuggerManager.addLogpoint(
    "iteracao-processamento",
    "Processando item",
    { timestamp: true }
);

function processarLista(dados) {
    // Verificar breakpoint no início
    debuggerManager.checkBreakpoint("processamento-inicio", { dados });

    let contador = 0;

    for (const item of dados) {
        // Logpoint para cada iteração
        debuggerManager.log("iteracao-processamento", item);

        contador++;

        // Watchpoint para monitorar contador
        debuggerManager.checkWatchpoints({ contador, item });

        // Breakpoint condicional para dados grandes
        debuggerManager.checkBreakpoint("dados-grandes", { dados, item, contador });

        // Processar item...
        processarItem(item);
    }

    return contador;
}

// 4. Sistema de tracing
class ExecutionTracer {
    constructor() {
        this.traces = new Map();
        this.enabled = false;
        this.maxDepth = 10;
        this.currentDepth = 0;
    }

    trace(operation, ...args) {
        if (!this.enabled || this.currentDepth >= this.maxDepth) {
            return operation(...args);
        }

        const traceId = `${operation.name || "anonymous"}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        this.currentDepth++;

        try {
            const startTime = performance.now();
            const startMemory = performance.memory?.usedJSHeapSize || 0;

            console.groupCollapsed(`▶ ${operation.name || 'anonymous'}()`);
            console.log("Arguments:", args);

            const result = operation(...args);

            const endTime = performance.now();
            const endMemory = performance.memory?.usedJSHeapSize || 0;

            const trace = {
                id: traceId,
                operation: operation.name || "anonymous",
                args,
                result,
                duration: endTime - startTime,
                memoryDelta: endMemory - startMemory,
                timestamp: new Date().toISOString(),
                depth: this.currentDepth
            };

            this.traces.set(traceId, trace);

            console.log("Result:", result);
            console.log(`Duration: ${trace.duration.toFixed(2)}ms`);
            console.log(`Memory delta: ${trace.memoryDelta} bytes`);
            console.groupEnd();

            return result;
        } catch (error) {
            console.error(`Error in ${operation.name || 'anonymous'}:`, error);
            throw error;
        } finally {
            this.currentDepth--;
        }
    }

    traceAsync(operation, ...args) {
        if (!this.enabled || this.currentDepth >= this.maxDepth) {
            return operation(...args);
        }

        const traceId = `${operation.name || "anonymous"}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        this.currentDepth++;

        console.groupCollapsed(`⏳ ${operation.name || 'anonymous'}()`);
        console.log("Arguments:", args);

        const startTime = performance.now();
        const startMemory = performance.memory?.usedJSHeapSize || 0;

        return operation(...args)
            .then(result => {
                const endTime = performance.now();
                const endMemory = performance.memory?.usedJSHeapSize || 0;

                const trace = {
                    id: traceId,
                    operation: operation.name || "anonymous",
                    args,
                    result,
                    duration: endTime - startTime,
                    memoryDelta: endMemory - startMemory,
                    timestamp: new Date().toISOString(),
                    depth: this.currentDepth
                };

                this.traces.set(traceId, trace);

                console.log("Result:", result);
                console.log(`Duration: ${trace.duration.toFixed(2)}ms`);
                console.log(`Memory delta: ${trace.memoryDelta} bytes`);
                console.groupEnd();

                return result;
            })
            .catch(error => {
                console.error(`Error in ${operation.name || 'anonymous'}:`, error);
                console.groupEnd();
                throw error;
            })
            .finally(() => {
                this.currentDepth--;
            });
    }

    enable() {
        this.enabled = true;
        console.log("Execution tracer habilitado");
    }

    disable() {
        this.enabled = false;
        console.log("Execution tracer desabilitado");
    }

    getTraces(filter = null) {
        const traces = Array.from(this.traces.values());

        if (filter) {
            return traces.filter(filter);
        }

        return traces;
    }

    getStats() {
        const traces = this.getTraces();

        if (traces.length === 0) {
            return { total: 0 };
        }

        const durations = traces.map(t => t.duration);
        const memoryDeltas = traces.map(t => t.memoryDelta);

        return {
            total: traces.length,
            avgDuration: durations.reduce((a, b) => a + b, 0) / durations.length,
            maxDuration: Math.max(...durations),
            minDuration: Math.min(...durations),
            avgMemoryDelta: memoryDeltas.reduce((a, b) => a + b, 0) / memoryDeltas.length,
            operations: [...new Set(traces.map(t => t.operation))]
        };
    }

    clear() {
        this.traces.clear();
        this.currentDepth = 0;
        console.log("Traces limpos");
    }
}

// Exemplo de uso do ExecutionTracer
const tracer = new ExecutionTracer();
tracer.enable();

// Função para rastrear
function calcularComplexo(a, b) {
    return tracer.trace(function calcularComplexo(a, b) {
        const soma = a + b;
        const produto = a * b;
        return { soma, produto };
    }, a, b);
}

async function buscarDadosComTracing(url) {
    return await tracer.traceAsync(async function buscarDados(url) {
        const response = await fetch(url);
        return response.json();
    }, url);
}

// Testar
calcularComplexo(5, 10);
// buscarDadosComTracing("https://api.exemplo.com/data");

// Ver estatísticas
console.log("Estatísticas do tracer:", tracer.getStats());

// 5. Sistema de profiling
class PerformanceProfiler {
    constructor() {
        this.profiles = new Map();
        this.activeProfile = null;
    }

    startProfile(name, metadata = {}) {
        if (this.profiles.has(name)) {
            console.warn(`Profile '${name}' já existe, sobrescrevendo...`);
        }

        const profile = {
            name,
            metadata,
            startTime: performance.now(),
            startMemory: performance.memory?.usedJSHeapSize || 0,
            marks: [],
            measures: [],
            customMetrics: {}
        };

        this.profiles.set(name, profile);
        this.activeProfile = profile;

        console.log(`📊 Profile '${name}' iniciado`);
        return profile;
    }

    mark(label) {
        if (!this.activeProfile) {
            console.warn("Nenhum profile ativo. Use startProfile() primeiro.");
            return;
        }

        const mark = {
            label,
            timestamp: performance.now(),
            memory: performance.memory?.usedJSHeapSize || 0
        };

        this.activeProfile.marks.push(mark);
        console.log(`📌 Mark '${label}' em ${mark.timestamp.toFixed(2)}ms`);
    }

    measure(label, startMark, endMark) {
        if (!this.activeProfile) return;

        const start = this.findMark(startMark)?.timestamp;
        const end = this.findMark(endMark)?.timestamp;

        if (!start || !end) {
            console.warn(`Marks '${startMark}' ou '${endMark}' não encontrados`);
            return;
        }

        const measure = {
            label,
            startMark,
            endMark,
            duration: end - start,
            startTime: start,
            endTime: end
        };

        this.activeProfile.measures.push(measure);
        console.log(`📐 Measure '${label}': ${measure.duration.toFixed(2)}ms`);
    }

    addMetric(name, value, unit = "") {
        if (!this.activeProfile) return;

        this.activeProfile.customMetrics[name] = {
            value,
            unit,
            timestamp: performance.now()
        };
    }

    endProfile(name = null) {
        const profile = name ? this.profiles.get(name) : this.activeProfile;

        if (!profile) {
            console.warn(`Profile '${name}' não encontrado`);
            return null;
        }

        profile.endTime = performance.now();
        profile.endMemory = performance.memory?.usedJSHeapSize || 0;

        profile.duration = profile.endTime - profile.startTime;
        profile.memoryDelta = profile.endMemory - profile.startMemory;

        console.log(`📊 Profile '${profile.name}' finalizado:`);
        console.log(`   Duração: ${profile.duration.toFixed(2)}ms`);
        console.log(`   Delta memória: ${profile.memoryDelta} bytes`);

        if (profile === this.activeProfile) {
            this.activeProfile = null;
        }

        return profile;
    }

    findMark(label) {
        if (!this.activeProfile) return null;

        return this.activeProfile.marks.find(mark => mark.label === label);
    }

    getProfile(name) {
        return this.profiles.get(name);
    }

    getAllProfiles() {
        return Array.from(this.profiles.values());
    }

    generateReport(profileName) {
        const profile = this.getProfile(profileName);

        if (!profile) {
            return { error: `Profile '${profileName}' não encontrado` };
        }

        const report = {
          name: profile.name,
          duration: profile.duration,
          memoryDelta: profile.memoryDelta,
          marks: profile.marks.map(mark => ({
            label: mark.label,
            time: mark.timestamp - profile.startTime,
            memory: mark.memory
          })),
          measures: profile.measures,
          customMetrics: profile.customMetrics,
          metadata: profile.metadata,
          summary: this.generateSummary(profile)
        };

        return report;
    }

    generateSummary(profile) {
        const measures = profile.measures;

        if (measures.length === 0) {
            return { totalDuration: profile.duration };
        }

        const durations = measures.map(m => m.duration);

        return {
            totalDuration: profile.duration,
            measureCount: measures.length,
            avgMeasureDuration: durations.reduce((a, b) => a + b, 0) / durations.length,
            slowestMeasure: measures.reduce((a, b) => a.duration > b.duration ? a : b),
            fastestMeasure: measures.reduce((a, b) => a.duration < b.duration ? a : b)
        };
    }

    exportReport(profileName, format = "json") {
        const report = this.generateReport(profileName);

        switch (format) {
            case "json":
                return JSON.stringify(report, null, 2);
            case "csv":
                return this.convertToCSV(report);
            case "html":
                return this.convertToHTML(report);
            default:
                return report;
        }
    }

    convertToCSV(report) {
        const headers = ["Type", "Label", "Time (ms)", "Memory", "Duration (ms)"];
        const rows = [];

        // Marks
        report.marks.forEach(mark => {
            rows.push(["Mark", mark.label, mark.time, mark.memory, ""]);
        });

        // Measures
        report.measures.forEach(measure => {
            rows.push(["Measure", measure.label, "", "", measure.duration]);
        });

        // Summary
        rows.push(["Summary", "Total Duration", "", "", report.duration]);

        return [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(","))
            .join("\n");
    }

    convertToHTML(report) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Performance Report - ${report.name}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    table { border-collapse: collapse; width: 100%; margin: 20px 0; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                    .summary { background-color: #e8f4f8; padding: 15px; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h1>Performance Report: ${report.name}</h1>

                <div class="summary">
                    <h2>Resumo</h2>
                    <p><strong>Duração total:</strong> ${report.duration.toFixed(2)}ms</p>
                    <p><strong>Delta de memória:</strong> ${report.memoryDelta} bytes</p>
                </div>

                <h2>Marks</h2>
                <table>
                    <tr>
                        <th>Label</th>
                        <th>Tempo (ms)</th>
                        <th>Memória (bytes)</th>
                    </tr>
                    ${report.marks.map(mark => `
                        <tr>
                            <td>${mark.label}</td>
                            <td>${mark.time.toFixed(2)}</td>
                            <td>${mark.memory}</td>
                        </tr>
                    `).join("")}
                </table>

                <h2>Measures</h2>
                <table>
                    <tr>
                        <th>Label</th>
                        <th>Duração (ms)</th>
                        <th>Start Mark</th>
                        <th>End Mark</th>
                    </tr>
                    ${report.measures.map(measure => `
                        <tr>
                            <td>${measure.label}</td>
                            <td>${measure.duration.toFixed(2)}</td>
                            <td>${measure.startMark}</td>
                            <td>${measure.endMark}</td>
                        </tr>
                    `).join("")}
                </table>

                <h2>Métricas Customizadas</h2>
                <pre>${JSON.stringify(report.customMetrics, null, 2)}</pre>

                <p><em>Relatório gerado em ${new Date().toLocaleString()}</em></p>
            </body>
            </html>
        `;
    }

    clear() {
        this.profiles.clear();
        this.activeProfile = null;
        console.log("Todos os profiles foram limpos");
    }
}

// Exemplo de uso do PerformanceProfiler
const profiler = new PerformanceProfiler();

function exemploPerfilComplexo() {
    // Iniciar profile
    profiler.startProfile("exemplo-complexo", {
        descricao: "Exemplo de profiling de função complexa",
        usuario: "teste"
    });

    // Marcar início de seções
    profiler.mark("inicio-processamento");

    // Simular processamento
    let soma = 0;
    for (let i = 0; i < 1000000; i++) {
        soma += Math.sqrt(i);
    }

    profiler.mark("fim-processamento");
    profiler.measure("processamento-numerico", "inicio-processamento", "fim-processamento");

    // Adicionar métrica customizada
    profiler.addMetric("soma_total", soma, "unidades");
    profiler.addMetric("iteracoes", 1000000, "vezes");

    // Simular operação assíncrona
    profiler.mark("inicio-assincrono");

    return new Promise(resolve => {
        setTimeout(() => {
            profiler.mark("fim-assincrono");
            profiler.measure("operacao-assincrona", "inicio-assincrono", "fim-assincrono");

            // Finalizar profile
            const profile = profiler.endProfile();

            // Gerar relatório
            const report = profiler.generateReport("exemplo-complexo");
            console.log("Relatório completo:", report);

            resolve(profile);
        }, 1000);
    });
}

// Executar exemplo
// exemploPerfilComplexo().then(profile => {
//     console.log("Profile completado:", profile.name);
// });

// 6. Ferramenta de debug visual
class VisualDebugger {
    constructor() {
        this.overlays = new Map();
        this.highlights = new Map();
        this.markers = new Map();
        this.init();
    }

    init() {
        // Criar container principal
        this.container = document.createElement("div");
        this.container.id = "visual-debugger";
        this.container.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
            font-size: 12px;
            z-index: 10000;
            max-width: 300px;
            max-height: 400px;
            overflow-y: auto;
        `;

        // Botões de controle
        const controls = document.createElement("div");
        controls.style.cssText = `
            display: flex;
            gap: 5px;
            margin-bottom: 10px;
            flex-wrap: wrap;
        `;

        const buttons = [
            { text: "🗑️ Clear", action: () => this.clear() },
            { text: "🔍 Inspect", action: () => this.startInspectMode() },
            { text: "📊 Metrics", action: () => this.showMetrics() },
            { text: "🎯 Grid", action: () => this.toggleGrid() },
            { text: "📐 Ruler", action: () => this.toggleRuler() }
        ];

        buttons.forEach(btn => {
            const button = document.createElement("button");
            button.textContent = btn.text;
            button.style.cssText = `
                background: #444;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 11px;
            `;
            button.onclick = btn.action;
            controls.appendChild(button);
        });

        // Área de logs
        this.logArea = document.createElement("div");
        this.logArea.style.cssText = `
            font-size: 11px;
            line-height: 1.4;
        `;

        // Montar container
        this.container.appendChild(controls);
        this.container.appendChild(this.logArea);

        document.body.appendChild(this.container);

        // Esconder inicialmente
        this.hide();
    }

    log(message, type = "info") {
        const colors = {
            info: "#4fc3f7",
            warn: "#ffb74d",
            error: "#e57373",
            success: "#81c784"
        };

        const entry = document.createElement("div");
        entry.style.cssText = `
            margin: 2px 0;
            padding: 2px 5px;
            border-left: 3px solid ${colors[type] || colors.info};
            word-break: break-word;
        `;

        const timestamp = new Date().toLocaleTimeString();
        entry.textContent = `[${timestamp}] ${message}`;

        this.logArea.appendChild(entry);
        this.logArea.scrollTop = this.logArea.scrollHeight;

        // Manter apenas últimos 50 logs
        const entries = this.logArea.children;
        if (entries.length > 50) {
            this.logArea.removeChild(entries[0]);
        }
    }

    highlightElement(selector, color = "#ffeb3b", duration = 3000) {
        const element = document.querySelector(selector);

        if (!element) {
            this.log(`Elemento não encontrado: ${selector}`, "warn");
            return;
        }

        const originalOutline = element.style.outline;
        const originalZIndex = element.style.zIndex;

        element.style.outline = `2px solid ${color}`;
        element.style.zIndex = "9999";

        this.highlights.set(selector, {
            element,
            originalOutline,
            originalZIndex,
            timeout: setTimeout(() => {
                this.removeHighlight(selector);
            }, duration)
        });

        this.log(`Elemento destacado: ${selector}`, "success");

        // Scroll para elemento
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    removeHighlight(selector) {
        const highlight = this.highlights.get(selector);

        if (highlight) {
            highlight.element.style.outline = highlight.originalOutline;
            highlight.element.style.zIndex = highlight.originalZIndex;

            if (highlight.timeout) {
                clearTimeout(highlight.timeout);
            }

            this.highlights.delete(selector);
            this.log(`Destaque removido: ${selector}`);
        }
    }

    addOverlay(id, content, position = { x: 0, y: 0 }) {
        const overlay = document.createElement("div");
        overlay.id = `debug-overlay-${id}`;
        overlay.style.cssText = `
            position: absolute;
            top: ${position.y}px;
            left: ${position.x}px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            font-family: monospace;
            font-size: 12px;
            z-index: 9998;
            pointer-events: none;
        `;

        overlay.textContent = content;

        document.body.appendChild(overlay);
        this.overlays.set(id, overlay);

        this.log(`Overlay adicionado: ${id}`);
    }

    removeOverlay(id) {
        const overlay = this.overlays.get(id);

        if (overlay) {
            overlay.remove();
            this.overlays.delete(id);
            this.log(`Overlay removido: ${id}`);
        }
    }

    addMarker(position, label = "", color = "#ff0000") {
        const markerId = `marker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        const marker = document.createElement("div");
        marker.id = markerId;
        marker.style.cssText = `
            position: absolute;
            top: ${position.y}px;
            left: ${position.x}px;
            width: 10px;
            height: 10px;
            background: ${color};
            border-radius: 50%;
            border: 2px solid white;
            z-index: 9997;
            pointer-events: none;
            transform: translate(-50%, -50%);
        `;

        if (label) {
            const labelElement = document.createElement("div");
            labelElement.textContent = label;
            labelElement.style.cssText = `
                position: absolute;
                top: 15px;
                left: 0;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 2px 5px;
                border-radius: 3px;
                font-size: 10px;
                white-space: nowrap;
            `;
            marker.appendChild(labelElement);
        }

        document.body.appendChild(marker);
        this.markers.set(markerId, marker);

        this.log(`Marcador adicionado em (${position.x}, ${position.y})`);

        return markerId;
    }

    removeMarker(markerId) {
        const marker = this.markers.get(markerId);

        if (marker) {
            marker.remove();
            this.markers.delete(markerId);
            this.log(`Marcador removido: ${markerId}`);
        }
    }

    startInspectMode() {
        this.log("Modo inspeção ativado. Clique em qualquer elemento para inspecionar.", "info");

        const originalCursor = document.body.style.cursor;
        document.body.style.cursor = "crosshair";

        const clickHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();

            const element = e.target;
            this.inspectElement(element);

            // Remover handler após um clique
            document.removeEventListener("click", clickHandler, true);
            document.body.style.cursor = originalCursor;
        };

        document.addEventListener("click", clickHandler, true);

        // Timeout automático
        setTimeout(() => {
            document.removeEventListener("click", clickHandler, true);
            document.body.style.cursor = originalCursor;
            this.log("Modo inspeção desativado (timeout)", "warn");
        }, 10000);
    }

    inspectElement(element) {
        const rect = element.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(element);

        const info = {
            tag: element.tagName.toLowerCase(),
            id: element.id,
            classes: element.className,
            dimensions: {
                width: rect.width,
                height: rect.height,
                top: rect.top,
                left: rect.left
            },
            styles: {
                display: computedStyle.display,
                position: computedStyle.position,
                visibility: computedStyle.visibility,
                opacity: computedStyle.opacity
            },
            content: element.textContent?.substring(0, 100) + (element.textContent?.length > 100 ? "..." : "")
        };

        // Destacar elemento
        this.highlightElement(`#${element.id}`, "#4fc3f7", 5000);

        // Mostrar informações
        console.group("🔍 Elemento Inspecionado");
        console.log("Element:", element);
        console.log("Informações:", info);
        console.groupEnd();

        this.log(`Elemento inspecionado: ${info.tag}${info.id ? "#" + info.id : ""}`, "success");

        // Adicionar overlay com informações
        this.addOverlay(
            "element-info",
            `${info.tag}${info.id ? "#" + info.id : ""}\n${rect.width.toFixed(0)}×${rect.height.toFixed(0)}`,
            { x: rect.left + rect.width / 2, y: rect.top - 30 }
        );

        // Remover overlay após 3 segundos
        setTimeout(() => this.removeOverlay("element-info"), 3000);
    }

    showMetrics() {
        const metrics = {
            "Window Size": `${window.innerWidth} × ${window.innerHeight}`,
            "Device Pixel Ratio": window.devicePixelRatio,
            "Memory Used": performance.memory ? `${Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)}MB` : "N/A",
            "Memory Total": performance.memory ? `${Math.round(performance.memory.totalJSHeapSize / 1024 / 1024)}MB` : "N/A",
            "DOM Elements": document.getElementsByTagName("*").length,
            "Performance Now": `${performance.now().toFixed(2)}ms`,
            "Navigation Timing": performance.timing ? {
                "Page Load": `${performance.timing.loadEventEnd - performance.timing.navigationStart}ms`,
                "DOM Ready": `${performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart}ms`
            } : "N/A"
        };

        console.table(metrics);
        this.log("Métricas exibidas no console", "info");
    }

    toggleGrid() {
        if (this.gridOverlay) {
            this.gridOverlay.remove();
            this.gridOverlay = null;
            this.log("Grid removido", "info");
        } else {
            this.gridOverlay = document.createElement("div");
            this.gridOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image:
                    linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
                background-size: 20px 20px;
                pointer-events: none;
                z-index: 9996;
            `;

            document.body.appendChild(this.gridOverlay);
            this.log("Grid ativado (20px)", "success");
        }
    }

    toggleRuler() {
        if (this.rulerActive) {
            document.removeEventListener("mousemove", this.rulerHandler);
            if (this.rulerOverlay) {
                this.rulerOverlay.remove();
                this.rulerOverlay = null;
            }
            this.rulerActive = false;
            this.log("Ruler desativado", "info");
        } else {
            this.rulerOverlay = document.createElement("div");
            this.rulerOverlay.style.cssText = `
                position: fixed;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 3px;
                font-family: monospace;
                font-size: 12px;
                z-index: 9997;
                pointer-events: none;
            `;

            document.body.appendChild(this.rulerOverlay);

            this.rulerHandler = (e) => {
                this.rulerOverlay.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
                this.rulerOverlay.style.top = `${e.clientY + 10}px`;
                this.rulerOverlay.style.left = `${e.clientX + 10}px`;
            };

            document.addEventListener("mousemove", this.rulerHandler);
            this.rulerActive = true;
            this.log("Ruler ativado. Mova o mouse para ver coordenadas.", "success");
        }
    }

    clear() {
        // Remover todos os highlights
        for (const [selector] of this.highlights) {
            this.removeHighlight(selector);
        }

        // Remover todos os overlays
        for (const [id] of this.overlays) {
            this.removeOverlay(id);
        }

        // Remover todos os markers
        for (const [markerId] of this.markers) {
            this.removeMarker(markerId);
        }

        // Remover grid
        if (this.gridOverlay) {
            this.gridOverlay.remove();
            this.gridOverlay = null;
        }

        // Remover ruler
        if (this.rulerActive) {
            document.removeEventListener("mousemove", this.rulerHandler);
            this.rulerActive = false;
            if (this.rulerOverlay) {
                this.rulerOverlay.remove();
                this.rulerOverlay = null;
            }
        }

        // Limpar logs
        this.logArea.innerHTML = "";

        this.log("Todos os elementos de debug foram limpos", "success");
    }

    show() {
        this.container.style.display = "block";
    }

    hide() {
        this.container.style.display = "none";
    }

    toggle() {
        if (this.container.style.display === "block") {
            this.hide();
        } else {
            this.show();
        }
    }
}

// Inicializar visual debugger
const visualDebugger = new VisualDebugger();

// Exemplo de uso
// visualDebugger.show();
// visualDebugger.log("Debugger visual iniciado", "success");
// visualDebugger.highlightElement("body", "#ffeb3b", 5000);
// visualDebugger.addMarker({ x: 100, y: 100 }, "Ponto importante", "#4fc3f7");

// Atalho de teclado para mostrar/esconder
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "D") {
        e.preventDefault();
        visualDebugger.toggle();
    }
});

// 7. Sistema de debug para APIs
class APIDebugger {
    constructor() {
        this.requests = new Map();
        this.intercepted = false;
        this.config = {
            logRequests: true,
            logResponses: true,
            logErrors: true,
            mockResponses: false,
            delay: 0,
            failRate: 0
        };
    }

    intercept() {
        if (this.intercepted) return;

        const originalFetch = window.fetch;

        window.fetch = async (...args) => {
            const [input, init = {}] = args;
            const url = typeof input === 'string' ? input : input.url;
            const method = init.method || 'GET';
            const requestId = this.generateRequestId();

            // Criar objeto de request
            const request = {
                id: requestId,
                url,
                method,
                headers: init.headers || {},
                body: init.body,
                timestamp: new Date(),
                status: 'pending'
            };

            this.requests.set(requestId, request);

            // Log da requisição
            if (this.config.logRequests) {
                console.groupCollapsed(`🌐 ${method} ${url}`);
                console.log("Request ID:", requestId);
                console.log("Headers:", request.headers);
                console.log("Body:", request.body);
                console.groupEnd();
            }

            // Mock response se configurado
            if (this.config.mockResponses) {
                const mockResponse = this.getMockResponse(url, method);
                if (mockResponse) {
                    await this.delay(this.config.delay);

                    if (Math.random() * 100 < this.config.failRate) {
                        throw new Error(`Mocked failure for ${url}`);
                    }

                    request.status = 'completed';
                    request.response = mockResponse;
                    request.duration = 0;

                    if (this.config.logResponses) {
                        console.log(`✅ ${method} ${url} (MOCKED)`);
                        console.log("Response:", mockResponse);
                    }

                    return this.createResponse(mockResponse);
                }
            }

            // Delay simulado
            if (this.config.delay > 0) {
                await this.delay(this.config.delay);
            }

            // Falha simulada
            if (Math.random() * 100 < this.config.failRate) {
                request.status = 'failed';
                request.error = new Error(`Simulated failure for ${url}`);

                if (this.config.logErrors) {
                    console.error(`❌ ${method} ${url} (SIMULATED FAILURE)`);
                }

                throw request.error;
            }

            // Fazer a requisição real
            const startTime = performance.now();

            try {
                const response = await originalFetch.apply(window, args);
                const endTime = performance.now();

                request.status = 'completed';
                request.response = response;
                request.duration = endTime - startTime;
                request.statusCode = response.status;

                // Clone a response para podermos ler o body e ainda retornar uma response válida
                const clonedResponse = response.clone();

                // Log da resposta
                if (this.config.logResponses) {
                    console.groupCollapsed(`✅ ${method} ${url} (${response.status})`);
                    console.log("Duration:", request.duration.toFixed(2), "ms");
                    console.log("Headers:", Object.fromEntries(response.headers.entries()));

                    // Tentar ler o body como JSON
                    try {
                        const data = await clonedResponse.json();
                        console.log("Data:", data);
                        request.data = data;
                    } catch {
                        // Se não for JSON, tentar como texto
                        const text = await clonedResponse.text();
                        console.log("Text:", text.substring(0, 200) + (text.length > 200 ? "..." : ""));
                        request.data = text;
                    }

                    console.groupEnd();
                }

                return response;
            } catch (error) {
                request.status = 'failed';
                request.error = error;
                request.duration = performance.now() - startTime;

                if (this.config.logErrors) {
                    console.error(`❌ ${method} ${url}`);
                    console.error("Error:", error);
                }

                throw error;
            }
        };

        this.intercepted = true;
        console.log("🌐 Fetch API interceptada");
    }

    generateRequestId() {
        return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getMockResponse(url, method) {
        // Mapeamento de URLs para respostas mockadas
        const mockMap = {
            '/api/users': {
                GET: {
                    status: 200,
                    data: [
                        { id: 1, name: "João" },
                        { id: 2, name: "Maria" }
                    ]
                },
                POST: {
                    status: 201,
                    data: { id: 3, name: "Novo Usuário" }
                }
            },
            '/api/products': {
                GET: {
                    status: 200,
                    data: [
                        { id: 1, name: "Produto A", price: 99.99 },
                        { id: 2, name: "Produto B", price: 149.99 }
                    ]
                }
            }
        };

        // Encontrar padrão correspondente
        for (const [pattern, methods] of Object.entries(mockMap)) {
            if (url.includes(pattern) && methods[method]) {
                return methods[method];
            }
        }

        return null;
    }

    createResponse(mock) {
        return new Response(JSON.stringify(mock.data), {
            status: mock.status,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    getRequests(filter = null) {
        const requests = Array.from(this.requests.values());

        if (filter) {
            return requests.filter(filter);
        }

        return requests;
    }

    getStats() {
        const requests = this.getRequests();
        const completed = requests.filter(r => r.status === 'completed');
        const failed = requests.filter(r => r.status === 'failed');
        const pending = requests.filter(r => r.status === 'pending');

        const durations = completed.map(r => r.duration);

        return {
            total: requests.length,
            completed: completed.length,
            failed: failed.length,
            pending: pending.length,
            successRate: completed.length / requests.length * 100,
            avgDuration: durations.length > 0 ?
                durations.reduce((a, b) => a + b, 0) / durations.length : 0,
            endpoints: [...new Set(requests.map(r => r.url))]
        };
    }

    clear() {
        this.requests.clear();
        console.log("Histórico de requests limpo");
    }

    restore() {
        // Restaurar fetch original seria mais complexo
        // Em um cenário real, armazenaríamos a referência original
        console.warn("Restauração do fetch não implementada nesta versão");
    }
}

// Exemplo de uso do APIDebugger
const apiDebugger = new APIDebugger();
apiDebugger.intercept();

// Configurar
apiDebugger.config = {
    logRequests: true,
    logResponses: true,
    logErrors: true,
    mockResponses: false,
    delay: 100,
    failRate: 10 // 10% de chance de falha
};

// Testar
async function testAPIDebugger() {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        console.log("Dados recebidos:", data);
    } catch (error) {
        console.error("Erro na requisição:", error);
    }

    // Ver estatísticas
    console.log("Estatísticas:", apiDebugger.getStats());
}

// Executar teste (comente se não quiser fazer requisições reais)
// testAPIDebugger();
```

### Conclusão e Melhores Práticas
```javascript
// Sistema integrado de debugging e tratamento de erros
class IntegratedDebugSystem {
    constructor(config = {}) {
        this.config = {
            environment: process.env.NODE_ENV || 'development',
            enableConsole: true,
            enableErrorTracking: true,
            enablePerformanceMonitoring: true,
            enableVisualDebugger: false,
            enableAPIDebugger: false,
            logLevel: 'debug',
            ...config
        };

        // Inicializar componentes
        this.components = {
            logger: null,
            errorHandler: null,
            profiler: null,
            visualDebugger: null,
            apiDebugger: null,
            tracer: null
        };

        this.init();
    }

    init() {
        console.log(`🚀 Sistema de Debug inicializado (${this.config.environment})`);

        // Logger
        if (this.config.enableConsole) {
            this.components.logger = new AdvancedLogger({
                logLevel: this.config.logLevel,
                interceptConsole: true
            });
        }

        // Error Handler
        if (this.config.enableErrorTracking) {
            this.components.errorHandler = new ErrorHandler();
        }

        // Performance Profiler
        if (this.config.enablePerformanceMonitoring) {
            this.components.profiler = new PerformanceProfiler();
            this.components.tracer = new ExecutionTracer();
        }

        // Visual Debugger
        if (this.config.enableVisualDebugger && this.config.environment === 'development') {
            this.components.visualDebugger = new VisualDebugger();
        }

        // API Debugger
        if (this.config.enableAPIDebugger && this.config.environment === 'development') {
            this.components.apiDebugger = new APIDebugger();
            this.components.apiDebugger.intercept();
        }

        // Configurar error tracking global
        if (this.components.errorHandler) {
            this.setupGlobalErrorHandling();
        }

        // Configurar atalhos de teclado
        this.setupKeyboardShortcuts();
    }

    setupGlobalErrorHandling() {
        // Erros não tratados
        window.addEventListener('error', (event) => {
            this.components.errorHandler.handle(event.error, {
                type: 'unhandled',
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno
            });
        });

        // Promises não tratadas
        window.addEventListener('unhandledrejection', (event) => {
            this.components.errorHandler.handle(event.reason, {
                type: 'unhandledRejection',
                promise: event.promise
            });
        });

        // Log de todos os erros
        const originalConsoleError = console.error;
        console.error = (...args) => {
            originalConsoleError.apply(console, args);

            // Extrair erro dos argumentos
            const error = args.find(arg => arg instanceof Error) || new Error(args.join(' '));

            this.components.errorHandler.handle(error, {
                type: 'console.error',
                args: args
            });
        };
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+Shift+L - Mostrar/ocultar logs
            if (e.ctrlKey && e.shiftKey && e.key === 'L') {
                e.preventDefault();
                this.toggleLogPanel();
            }

            // Ctrl+Shift+P - Iniciar/parar profiling
            if (e.ctrlKey && e.shiftKey && e.key === 'P') {
                e.preventDefault();
                this.toggleProfiling();
            }

            // Ctrl+Shift+D - Mostrar/ocultar debugger visual
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                e.preventDefault();
                this.toggleVisualDebugger();
            }

            // Ctrl+Shift+E - Exportar dados de debug
            if (e.ctrlKey && e.shiftKey && e.key === 'E') {
                e.preventDefault();
                this.exportDebugData();
            }
        });
    }

    toggleLogPanel() {
        if (this.logPanel) {
            this.logPanel.remove();
            this.logPanel = null;
        } else {
            this.createLogPanel();
        }
    }

    createLogPanel() {
        this.logPanel = document.createElement('div');
        this.logPanel.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 300px;
            background: #1e1e1e;
            color: #d4d4d4;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 12px;
            border-top: 1px solid #333;
            display: flex;
            flex-direction: column;
            z-index: 9998;
        `;

        const header = document.createElement('div');
        header.style.cssText = `
            padding: 8px 12px;
            background: #252526;
            border-bottom: 1px solid #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        header.innerHTML = `
            <span style="font-weight: bold;">Debug Logs</span>
            <div>
                <button id="clear-logs" style="margin-right: 10px;">Clear</button>
                <button id="export-logs">Export</button>
            </div>
        `;

        const content = document.createElement('div');
        content.style.cssText = `
            flex: 1;
            overflow-y: auto;
            padding: 8px 12px;
            white-space: pre-wrap;
        `;

        // Preencher com logs existentes
        if (this.components.logger) {
            const logs = this.components.logger.getHistory();
            logs.forEach(log => {
                const entry = document.createElement('div');
                entry.style.cssText = `
                    margin: 2px 0;
                    padding: 2px 5px;
                    border-left: 3px solid ${this.components.logger.styles[log.level]?.split(':')[1]?.split(';')[0] || '#d4d4d4'};
                    word-break: break-word;
                `;
                entry.textContent = `[${log.timestamp}] ${log.args.join(' ')}`;
                content.appendChild(entry);
            });
        }

        this.logPanel.appendChild(header);
        this.logPanel.appendChild(content);
        document.body.appendChild(this.logPanel);

        // Event listeners
        header.querySelector('#clear-logs').addEventListener('click', () => {
            content.innerHTML = '';
        });

        header.querySelector('#export-logs').addEventListener('click', () => {
            this.exportLogs();
        });
    }

    toggleProfiling() {
        if (this.components.tracer) {
            if (this.components.tracer.enabled) {
                this.components.tracer.disable();
                this.components.profiler.endProfile('session');
                console.log('Profiling desativado');
            } else {
                this.components.tracer.enable();
                this.components.profiler.startProfile('session', {
                    startTime: new Date().toISOString()
                });
                console.log('Profiling ativado');
            }
        }
    }

    toggleVisualDebugger() {
        if (this.components.visualDebugger) {
            this.components.visualDebugger.toggle();
        }
    }

    exportLogs() {
        if (this.components.logger) {
            const csv = this.components.logger.exportHistory('csv');
            this.downloadFile('debug-logs.csv', csv);
        }
    }

    exportDebugData() {
        const data = {
            timestamp: new Date().toISOString(),
            environment: this.config.environment,
            url: window.location.href,
            userAgent: navigator.userAgent,
            logs: this.components.logger?.getHistory() || [],
            errors: this.components.errorHandler?.getStats() || {},
            performance: this.components.profiler?.getAllProfiles() || [],
            apiRequests: this.components.apiDebugger?.getRequests() || [],
            traces: this.components.tracer?.getTraces() || []
        };

        const json = JSON.stringify(data, null, 2);
        this.downloadFile('debug-data.json', json);

        console.log('📁 Dados de debug exportados');
    }

    downloadFile(filename, content) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    wrapFunction(fn, options = {}) {
        return (...args) => {
            const context = {
                functionName: fn.name || 'anonymous',
                args,
                timestamp: new Date().toISOString(),
                ...options.context
            };

            // Iniciar trace
            if (this.components.tracer) {
                return this.components.tracer.trace(() => fn(...args), context);
            }

            return fn(...args);
        };
    }

    wrapAsyncFunction(fn, options = {}) {
        return async (...args) => {
            const context = {
                functionName: fn.name || 'anonymous',
                args,
                timestamp: new Date().toISOString(),
                ...options.context
            };

            // Iniciar trace
            if (this.components.tracer) {
                return await this.components.tracer.traceAsync(() => fn(...args), context);
            }

            return await fn(...args);
        };
    }

    getStatus() {
        return {
            logger: this.components.logger ? '✅' : '❌',
            errorHandler: this.components.errorHandler ? '✅' : '❌',
            profiler: this.components.profiler ? '✅' : '❌',
            visualDebugger: this.components.visualDebugger ? '✅' : '❌',
            apiDebugger: this.components.apiDebugger ? '✅' : '❌',
            tracer: this.components.tracer ?
                (this.components.tracer.enabled ? '🟢' : '🔴') : '❌'
        };
    }

    showStatus() {
        const status = this.getStatus();
        console.group('🔧 Status do Sistema de Debug');
        Object.entries(status).forEach(([component, statusIcon]) => {
            console.log(`${statusIcon} ${component}`);
        });
        console.groupEnd();
    }
}

// Exemplo de uso do sistema integrado
const debugSystem = new IntegratedDebugSystem({
    environment: 'development',
    enableConsole: true,
    enableErrorTracking: true,
    enablePerformanceMonitoring: true,
    enableVisualDebugger: true,
    enableAPIDebugger: true,
    logLevel: 'debug'
});

// Mostrar status
debugSystem.showStatus();

// Exemplo de função wrapped
const buscarDadosOtimizado = debugSystem.wrapAsyncFunction(async function buscarDados(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
});

// Testar
async function exemploCompleto() {
    try {
        // Iniciar profiling
        debugSystem.components.profiler?.startProfile('exemplo-completo');

        // Executar função wrapped
        const dados = await buscarDadosOtimizado('https://jsonplaceholder.typicode.com/posts/1', {
            context: { test: true }
        });

        console.log('Dados recebidos:', dados);

        // Finalizar profiling
        debugSystem.components.profiler?.endProfile('exemplo-completo');

        // Exportar relatório
        const report = debugSystem.components.profiler?.generateReport('exemplo-completo');
        console.log('Relatório de performance:', report);

    } catch (error) {
        // O erro será automaticamente tratado pelo errorHandler
        console.error('Falha no exemplo:', error);
    }
}

// Executar exemplo (comente se não quiser fazer requisições reais)
// exemploCompleto();

// Para produção, configurar com menos recursos
const productionDebugSystem = new IntegratedDebugSystem({
    environment: 'production',
    enableConsole: false,
    enableErrorTracking: true,
    enablePerformanceMonitoring: false,
    enableVisualDebugger: false,
    enableAPIDebugger: false,
    logLevel: 'error'
});
```

Este material completo cobre todos os aspectos de erros e debugging em JavaScript, desde o tratamento básico de erros até sistemas avançados de profiling, logging e ferramentas de debug visual.
