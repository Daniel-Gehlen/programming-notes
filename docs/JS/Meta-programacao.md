# 12. META-PROGRAMAÇÃO

## Reflect API

### API de Reflexão em JavaScript
```javascript
// Reflect é um objeto global que fornece métodos para operações de reflexão
// Similar a alguns métodos do Object, mas com melhor consistência

// 1. Reflect.apply() - Chamar função com array de argumentos
function soma(a, b) {
    return a + b;
}

console.log(Reflect.apply(soma, null, [10, 20])); // 30
console.log(Reflect.apply(Math.max, null, [1, 2, 3, 4, 5])); // 5

// Com contexto (this)
const obj = {
    valor: 100,
    getValorComBonus(bonus) {
        return this.valor + bonus;
    }
};

console.log(Reflect.apply(obj.getValorComBonus, obj, [50])); // 150

// 2. Reflect.construct() - Criar instância com construtor
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = Reflect.construct(Pessoa, ['João', 30]);
console.log(pessoa1); // Pessoa { nome: 'João', idade: 30 }

// Com new.target personalizado
function Criador(tipo) {
    if (new.target === Criador) {
        return Reflect.construct(tipo, arguments);
    }
    return new tipo(...arguments);
}

// 3. Reflect.defineProperty() - Definir propriedade
const objeto = {};
Reflect.defineProperty(objeto, 'propriedade', {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(objeto.propriedade); // 42

// Retorna boolean indicando sucesso
const sucesso = Reflect.defineProperty(objeto, 'readonly', {
    value: 100,
    writable: false
});
console.log(sucesso); // true

// 4. Reflect.deleteProperty() - Deletar propriedade
const obj2 = { a: 1, b: 2, c: 3 };
console.log(Reflect.deleteProperty(obj2, 'b')); // true
console.log(obj2); // { a: 1, c: 3 }

// Propriedade não configurável
Object.defineProperty(obj2, 'c', { configurable: false });
console.log(Reflect.deleteProperty(obj2, 'c')); // false
console.log(obj2.c); // 3 (ainda existe)

// 5. Reflect.get() - Obter valor de propriedade
const obj3 = { x: 10, y: 20 };
console.log(Reflect.get(obj3, 'x')); // 10

// Com getter
const objComGetter = {
    _valor: 100,
    get valor() {
        return this._valor * 2;
    }
};
console.log(Reflect.get(objComGetter, 'valor')); // 200

// Com receiver (alterando o 'this')
const receiver = { _valor: 50 };
console.log(Reflect.get(objComGetter, 'valor', receiver)); // 100

// 6. Reflect.getOwnPropertyDescriptor() - Obter descriptor
const obj4 = {};
Object.defineProperty(obj4, 'secreto', {
    value: 'hidden',
    enumerable: false
});

const descriptor = Reflect.getOwnPropertyDescriptor(obj4, 'secreto');
console.log(descriptor); // { value: 'hidden', writable: false, enumerable: false, configurable: false }

// 7. Reflect.getPrototypeOf() - Obter protótipo
const arr = [1, 2, 3];
console.log(Reflect.getPrototypeOf(arr) === Array.prototype); // true

// 8. Reflect.has() - Verificar se propriedade existe
const obj5 = { a: 1, b: 2 };
console.log(Reflect.has(obj5, 'a')); // true
console.log(Reflect.has(obj5, 'toString')); // true (herdada)

// 9. Reflect.isExtensible() - Verificar se é extensível
const obj6 = { x: 1 };
console.log(Reflect.isExtensible(obj6)); // true
Object.preventExtensions(obj6);
console.log(Reflect.isExtensible(obj6)); // false

// 10. Reflect.ownKeys() - Obter todas as chaves próprias
const obj7 = {
    [Symbol('id')]: 123,
    nome: 'Teste',
    idade: 30
};

Object.defineProperty(obj7, 'oculto', {
    value: 'secret',
    enumerable: false
});

console.log(Reflect.ownKeys(obj7)); // ['nome', 'idade', 'oculto', Symbol(id)]

// 11. Reflect.preventExtensions() - Prevenir extensões
const obj8 = { a: 1, b: 2 };
console.log(Reflect.preventExtensions(obj8)); // true
obj8.c = 3; // Não funciona em modo estrito, ignora em modo normal
console.log(obj8.c); // undefined

// 12. Reflect.set() - Definir valor de propriedade
const obj9 = { contador: 0 };
Reflect.set(obj9, 'contador', 10);
console.log(obj9.contador); // 10

// Com setter
const objComSetter = {
    _valor: 0,
    set valor(novoValor) {
        this._valor = novoValor * 2;
    },
    get valor() {
        return this._valor;
    }
};

Reflect.set(objComSetter, 'valor', 50);
console.log(objComSetter.valor); // 100

// 13. Reflect.setPrototypeOf() - Alterar protótipo
const obj10 = { x: 1 };
const novoProto = { y: 2, z: 3 };
console.log(Reflect.setPrototypeOf(obj10, novoProto)); // true
console.log(obj10.y); // 2 (herdado)

// Classe utilitária para operações de reflexão
class ReflectUtils {
    // Clonar objeto incluindo propriedades não enumeráveis e símbolos
    static deepClone(obj, visited = new WeakMap()) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        if (visited.has(obj)) {
            return visited.get(obj);
        }

        if (obj instanceof Date) {
            return new Date(obj.getTime());
        }

        if (obj instanceof RegExp) {
            return new RegExp(obj);
        }

        if (obj instanceof Array) {
            const clone = [];
            visited.set(obj, clone);
            Reflect.ownKeys(obj).forEach(key => {
                clone[key] = this.deepClone(obj[key], visited);
            });
            return clone;
        }

        if (obj instanceof Object) {
            const clone = Object.create(Reflect.getPrototypeOf(obj));
            visited.set(obj, clone);

            Reflect.ownKeys(obj).forEach(key => {
                const descriptor = Reflect.getOwnPropertyDescriptor(obj, key);
                if (descriptor) {
                    Reflect.defineProperty(clone, key, {
                        ...descriptor,
                        value: this.deepClone(descriptor.value, visited)
                    });
                }
            });

            return clone;
        }

        return obj;
    }

    // Mesclar objetos preservando descriptors
    static mergeWithDescriptors(target, ...sources) {
        sources.forEach(source => {
            if (source) {
                Reflect.ownKeys(source).forEach(key => {
                    const descriptor = Reflect.getOwnPropertyDescriptor(source, key);
                    if (descriptor) {
                        Reflect.defineProperty(target, key, descriptor);
                    }
                });
            }
        });
        return target;
    }

    // Observar mudanças em propriedades
    static observe(obj, callback) {
        return new Proxy(obj, {
            set(target, prop, value, receiver) {
                const oldValue = Reflect.get(target, prop, receiver);
                const result = Reflect.set(target, prop, value, receiver);
                if (result && oldValue !== value) {
                    callback(prop, oldValue, value);
                }
                return result;
            },

            deleteProperty(target, prop) {
                const oldValue = Reflect.get(target, prop);
                const result = Reflect.deleteProperty(target, prop);
                if (result) {
                    callback(prop, oldValue, undefined);
                }
                return result;
            }
        });
    }

    // Criar objeto imutável de forma recursiva
    static deepFreeze(obj) {
        if (obj && typeof obj === 'object') {
            Object.freeze(obj);
            Reflect.ownKeys(obj).forEach(key => {
                const value = obj[key];
                if (value && typeof value === 'object') {
                    this.deepFreeze(value);
                }
            });
        }
        return obj;
    }

    // Validar estrutura de objeto
    static validateStructure(obj, schema) {
        return Reflect.ownKeys(schema).every(key => {
            const expectedType = schema[key];
            const actualValue = Reflect.get(obj, key);
            const actualType = typeof actualValue;

            if (expectedType === 'any') return true;
            if (expectedType === 'array') return Array.isArray(actualValue);
            if (expectedType === 'null') return actualValue === null;
            if (expectedType === 'undefined') return actualValue === undefined;

            return actualType === expectedType;
        });
    }

    // Obter caminho de propriedade aninhada
    static getByPath(obj, path, defaultValue = undefined) {
        const keys = path.split('.');
        let current = obj;

        for (const key of keys) {
            if (current === null || current === undefined) {
                return defaultValue;
            }
            current = Reflect.get(current, key);
        }

        return current === undefined ? defaultValue : current;
    }

    // Definir valor por caminho aninhado
    static setByPath(obj, path, value) {
        const keys = path.split('.');
        let current = obj;

        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!Reflect.has(current, key) ||
                Reflect.get(current, key) === null ||
                Reflect.get(current, key) === undefined) {
                Reflect.set(current, key, {});
            }
            current = Reflect.get(current, key);
        }

        const lastKey = keys[keys.length - 1];
        return Reflect.set(current, lastKey, value);
    }

    // Decorator usando Reflect
    static decorate(target, decorators) {
        return new Proxy(target, {
            get(obj, prop) {
                if (Reflect.has(decorators, prop)) {
                    return decorators[prop];
                }
                return Reflect.get(obj, prop);
            },

            set(obj, prop, value) {
                if (Reflect.has(decorators, prop)) {
                    console.warn(`Propriedade ${String(prop)} é decorada e não pode ser modificada`);
                    return false;
                }
                return Reflect.set(obj, prop, value);
            }
        });
    }
}

// Exemplos de uso
const objetoComplexo = {
    nome: 'Teste',
    [Symbol('id')]: 123,
    dados: {
        interno: {
            valor: 42
        }
    },
    metodo() {
        return this.nome;
    }
};

Object.defineProperty(objetoComplexo, 'oculto', {
    value: 'segredo',
    enumerable: false
});

// Clone profundo
const clone = ReflectUtils.deepClone(objetoComplexo);
console.log(clone);
console.log(clone.dados.interno.valor); // 42

// Observar mudanças
const observado = ReflectUtils.observe(clone, (prop, oldVal, newVal) => {
    console.log(`Propriedade ${String(prop)} mudou:`, oldVal, '→', newVal);
});

observado.nome = 'Novo Nome'; // Loga a mudança

// Validar estrutura
const schema = {
    nome: 'string',
    idade: 'number',
    endereco: 'object',
    tags: 'array'
};

const dadosValidos = {
    nome: 'João',
    idade: 30,
    endereco: { cidade: 'SP' },
    tags: ['a', 'b']
};

console.log(ReflectUtils.validateStructure(dadosValidos, schema)); // true

// Sistema de eventos usando Reflect
class EventEmitter {
    constructor() {
        this._events = new Map();
        this._maxListeners = 10;
    }

    on(event, listener) {
        if (!this._events.has(event)) {
            this._events.set(event, []);
        }

        const listeners = this._events.get(event);
        if (listeners.length >= this._maxListeners) {
            console.warn(`Máximo de ${this._maxListeners} listeners para evento "${event}"`);
        }

        listeners.push(listener);
        return this;
    }

    once(event, listener) {
        const onceWrapper = (...args) => {
            this.off(event, onceWrapper);
            Reflect.apply(listener, this, args);
        };
        onceWrapper.listener = listener;
        return this.on(event, onceWrapper);
    }

    off(event, listener) {
        if (!this._events.has(event)) return this;

        const listeners = this._events.get(event);
        const index = listeners.findIndex(l => l === listener || l.listener === listener);

        if (index !== -1) {
            listeners.splice(index, 1);
        }

        if (listeners.length === 0) {
            this._events.delete(event);
        }

        return this;
    }

    emit(event, ...args) {
        if (!this._events.has(event)) return false;

        const listeners = this._events.get(event).slice();
        listeners.forEach(listener => {
            try {
                Reflect.apply(listener, this, args);
            } catch (error) {
                console.error(`Erro no listener do evento "${event}":`, error);
            }
        });

        return true;
    }

    listeners(event) {
        return this._events.has(event) ? [...this._events.get(event)] : [];
    }

    removeAllListeners(event) {
        if (event) {
            this._events.delete(event);
        } else {
            this._events.clear();
        }
        return this;
    }

    setMaxListeners(n) {
        this._maxListeners = n;
        return this;
    }
}

// Exemplo de uso do EventEmitter
const emitter = new EventEmitter();

emitter.on('dados', (dados) => {
    console.log('Dados recebidos:', dados);
});

emitter.once('login', (usuario) => {
    console.log('Primeiro login:', usuario);
});

emitter.emit('dados', { id: 1, nome: 'Teste' });
emitter.emit('login', 'joao@email.com');
emitter.emit('login', 'maria@email.com'); // Não é chamado (once)

// Sistema de validação baseado em Reflect
class Validator {
    constructor() {
        this.rules = new Map();
        this.customValidators = new Map();
    }

    addRule(property, rule) {
        if (!this.rules.has(property)) {
            this.rules.set(property, []);
        }
        this.rules.get(property).push(rule);
        return this;
    }

    registerValidator(name, validator) {
        this.customValidators.set(name, validator);
        return this;
    }

    validate(obj) {
        const errors = [];
        const warnings = [];

        for (const [property, rules] of this.rules) {
            const value = Reflect.get(obj, property);

            for (const rule of rules) {
                const result = this.applyRule(rule, value, property, obj);

                if (result === false) {
                    errors.push({
                        property,
                        value,
                        rule: rule.type || 'unknown',
                        message: rule.message || `Validação falhou para ${property}`
                    });
                } else if (typeof result === 'string') {
                    warnings.push({
                        property,
                        value,
                        warning: result
                    });
                }
            }
        }

        return {
            isValid: errors.length === 0,
            errors,
            warnings,
            timestamp: new Date().toISOString()
        };
    }

    applyRule(rule, value, property, context) {
        if (typeof rule === 'function') {
            return rule(value, property, context);
        }

        if (typeof rule === 'object') {
            switch (rule.type) {
                case 'required':
                    return value !== undefined && value !== null && value !== '';

                case 'type':
                    if (rule.expected === 'array') {
                        return Array.isArray(value);
                    }
                    if (rule.expected === 'null') {
                        return value === null;
                    }
                    return typeof value === rule.expected;

                case 'pattern':
                    return new RegExp(rule.pattern).test(String(value));

                case 'range':
                    const num = Number(value);
                    return !isNaN(num) &&
                           (rule.min === undefined || num >= rule.min) &&
                           (rule.max === undefined || num <= rule.max);

                case 'length':
                    const length = value ? String(value).length : 0;
                    return (rule.min === undefined || length >= rule.min) &&
                           (rule.max === undefined || length <= rule.max);

                case 'enum':
                    return rule.values.includes(value);

                case 'custom':
                    if (this.customValidators.has(rule.name)) {
                        return this.customValidators.get(rule.name)(value, property, context);
                    }
                    return false;

                default:
                    return false;
            }
        }

        return false;
    }

    // Factory methods para regras comuns
    static required(message = 'Campo obrigatório') {
        return { type: 'required', message };
    }

    static type(expected, message = `Tipo deve ser ${expected}`) {
        return { type: 'type', expected, message };
    }

    static pattern(regex, message = 'Formato inválido') {
        return { type: 'pattern', pattern: regex, message };
    }

    static range(min, max, message = `Valor deve estar entre ${min} e ${max}`) {
        return { type: 'range', min, max, message };
    }

    static length(min, max, message = `Comprimento deve estar entre ${min} e ${max}`) {
        return { type: 'length', min, max, message };
    }

    static enum(values, message = `Valor deve ser um de: ${values.join(', ')}`) {
        return { type: 'enum', values, message };
    }

    static custom(name, message = 'Validação customizada falhou') {
        return { type: 'custom', name, message };
    }
}

// Exemplo de uso do Validator
const validator = new Validator();

// Registrar validador customizado
validator.registerValidator('cpf', (value) => {
    // Validação simplificada de CPF
    if (!value) return false;
    const cpf = value.replace(/\D/g, '');
    return cpf.length === 11 && !/^(\d)\1+$/.test(cpf);
});

// Adicionar regras
validator
    .addRule('nome', Validator.required())
    .addRule('nome', Validator.length(3, 50, 'Nome deve ter entre 3 e 50 caracteres'))
    .addRule('email', Validator.required())
    .addRule('email', Validator.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email inválido'))
    .addRule('idade', Validator.range(18, 120, 'Idade deve ser entre 18 e 120'))
    .addRule('cpf', Validator.custom('cpf', 'CPF inválido'))
    .addRule('status', Validator.enum(['ativo', 'inativo', 'pendente']));

const usuario = {
    nome: 'Jo',
    email: 'email-invalido',
    idade: 16,
    cpf: '111.111.111-11',
    status: 'desconhecido'
};

const resultado = validator.validate(usuario);
console.log('Resultado da validação:', resultado);

// Sistema de DI (Injeção de Dependência) usando Reflect
class ContainerDI {
    constructor() {
        this.registrations = new Map();
        this.instances = new Map();
        this.resolving = new Set();
    }

    register(name, factory, options = {}) {
        this.registrations.set(name, {
            factory,
            singleton: options.singleton || false,
            dependencies: options.dependencies || []
        });
        return this;
    }

    registerClass(name, Class, options = {}) {
        return this.register(name, () => {
            const dependencies = this.resolveDependencies(Class, options.dependencies);
            return Reflect.construct(Class, dependencies);
        }, options);
    }

    registerValue(name, value) {
        this.instances.set(name, value);
        return this;
    }

    resolve(name) {
        if (this.instances.has(name)) {
            return this.instances.get(name);
        }

        if (!this.registrations.has(name)) {
            throw new Error(`Serviço não registrado: ${name}`);
        }

        if (this.resolving.has(name)) {
            throw new Error(`Dependência circular detectada: ${name}`);
        }

        this.resolving.add(name);

        try {
            const registration = this.registrations.get(name);
            const instance = registration.factory();

            if (registration.singleton) {
                this.instances.set(name, instance);
            }

            return instance;
        } finally {
            this.resolving.delete(name);
        }
    }

    resolveDependencies(Class, explicitDeps = []) {
        const dependencies = explicitDeps.length > 0
            ? explicitDeps
            : this.extractDependencies(Class);

        return dependencies.map(dep => this.resolve(dep));
    }

    extractDependencies(Class) {
        const fnStr = Class.toString();
        const match = fnStr.match(/constructor\s*\(([^)]*)\)/);

        if (!match) return [];

        return match[1]
            .split(',')
            .map(param => param.trim())
            .filter(param => param.length > 0)
            .map(param => param.split('=')[0].trim());
    }

    inject(Class, dependencies = []) {
        const deps = dependencies.length > 0
            ? dependencies
            : this.extractDependencies(Class);

        const resolvedDeps = deps.map(dep => this.resolve(dep));
        return Reflect.construct(Class, resolvedDeps);
    }

    has(name) {
        return this.registrations.has(name) || this.instances.has(name);
    }

    clear() {
        this.registrations.clear();
        this.instances.clear();
        this.resolving.clear();
        return this;
    }
}

// Exemplo de uso do ContainerDI
const container = new ContainerDI();

// Serviços
class DatabaseService {
    constructor() {
        this.connected = false;
    }

    connect() {
        this.connected = true;
        console.log('Database conectado');
    }

    query(sql) {
        return `Resultado: ${sql}`;
    }
}

class UserService {
    constructor(database) {
        this.database = database;
    }

    getUsers() {
        return this.database.query('SELECT * FROM users');
    }
}

class AuthService {
    constructor(database, userService) {
        this.database = database;
        this.userService = userService;
    }

    login(email, password) {
        console.log('Login com:', email);
        return { token: 'jwt-token' };
    }
}

// Registrar serviços
container
    .registerClass('database', DatabaseService, { singleton: true })
    .registerClass('userService', UserService, {
        dependencies: ['database']
    })
    .registerClass('authService', AuthService, {
        dependencies: ['database', 'userService']
    });

// Resolver e usar
const authService = container.resolve('authService');
authService.database.connect();
console.log(authService.login('teste@email.com', '123'));

// Injeção direta
const userService = container.inject(UserService);
console.log(userService.getUsers());
```

## Proxy Objects

### Objetos Proxy em JavaScript
```javascript
// Proxy permite interceptar operações em objetos

// 1. Proxy básico
const alvo = { mensagem: "Olá, mundo!" };
const manipulador = {
    get(alvo, propriedade) {
        console.log(`Lendo propriedade: ${propriedade}`);
        return alvo[propriedade];
    },

    set(alvo, propriedade, valor) {
        console.log(`Escrevendo propriedade: ${propriedade} = ${valor}`);
        alvo[propriedade] = valor;
        return true; // Indica sucesso
    }
};

const proxy = new Proxy(alvo, manipulador);

console.log(proxy.mensagem); // Loga e retorna "Olá, mundo!"
proxy.mensagem = "Olá, Proxy!"; // Loga a mudança

// 2. Armadilhas disponíveis (traps)
const manipuladorCompleto = {
    // Intercepta: propriedade in proxy
    has(alvo, propriedade) {
        console.log(`Verificando se ${propriedade} existe`);
        return Reflect.has(alvo, propriedade);
    },

    // Intercepta: delete proxy[propriedade]
    deleteProperty(alvo, propriedade) {
        console.log(`Deletando ${propriedade}`);
        return Reflect.deleteProperty(alvo, propriedade);
    },

    // Intercepta: Object.keys(proxy), for...in
    ownKeys(alvo) {
        console.log('Obtendo chaves próprias');
        return Reflect.ownKeys(alvo);
    },

    // Intercepta: Object.getOwnPropertyDescriptor(proxy, propriedade)
    getOwnPropertyDescriptor(alvo, propriedade) {
        console.log(`Obtendo descriptor de ${propriedade}`);
        return Reflect.getOwnPropertyDescriptor(alvo, propriedade);
    },

    // Intercepta: Object.defineProperty(proxy, propriedade, descriptor)
    defineProperty(alvo, propriedade, descriptor) {
        console.log(`Definindo propriedade ${propriedade}`);
        return Reflect.defineProperty(alvo, propriedade, descriptor);
    },

    // Intercepta: Object.preventExtensions(proxy)
    preventExtensions(alvo) {
        console.log('Prevenindo extensões');
        return Reflect.preventExtensions(alvo);
    },

    // Intercepta: Object.getPrototypeOf(proxy)
    getPrototypeOf(alvo) {
        console.log('Obtendo protótipo');
        return Reflect.getPrototypeOf(alvo);
    },

    // Intercepta: Object.setPrototypeOf(proxy, prototipo)
    setPrototypeOf(alvo, prototipo) {
        console.log('Definindo protótipo');
        return Reflect.setPrototypeOf(alvo, prototipo);
    },

    // Intercepta: proxy(...args)
    apply(alvo, thisArg, argumentos) {
        console.log('Chamando função:', argumentos);
        return Reflect.apply(alvo, thisArg, argumentos);
    },

    // Intercepta: new proxy(...args)
    construct(alvo, argumentos, novoAlvo) {
        console.log('Criando instância com:', argumentos);
        return Reflect.construct(alvo, argumentos, novoAlvo);
    }
};

// 3. Proxy para validação
const validadorProxy = new Proxy({}, {
    set(alvo, propriedade, valor) {
        if (propriedade === 'idade') {
            if (typeof valor !== 'number' || valor < 0 || valor > 150) {
                throw new Error('Idade inválida');
            }
        }

        if (propriedade === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                throw new Error('Email inválido');
            }
        }

        alvo[propriedade] = valor;
        return true;
    }
});

try {
    validadorProxy.idade = 25; // OK
    validadorProxy.email = 'teste@exemplo.com'; // OK
    validadorProxy.idade = 200; // Erro!
} catch (error) {
    console.error(error.message);
}

// 4. Proxy para propriedades computadas
const computadoProxy = new Proxy({}, {
    get(alvo, propriedade) {
        if (propriedade === 'dobro') {
            return alvo.valor ? alvo.valor * 2 : undefined;
        }

        if (propriedade === 'quadrado') {
            return alvo.valor ? alvo.valor ** 2 : undefined;
        }

        if (propriedade === 'raiz') {
            return alvo.valor ? Math.sqrt(alvo.valor) : undefined;
        }

        return alvo[propriedade];
    },

    set(alvo, propriedade, valor) {
        if (propriedade === 'valor') {
            if (typeof valor !== 'number') {
                throw new Error('Valor deve ser número');
            }
            alvo.valor = valor;
            return true;
        }

        alvo[propriedade] = valor;
        return true;
    }
});

computadoProxy.valor = 10;
console.log(computadoProxy.dobro); // 20
console.log(computadoProxy.quadrado); // 100
console.log(computadoProxy.raiz); // 3.162...

// 5. Proxy para array observável
function criarArrayObservavel(onChange) {
    return new Proxy([], {
        get(alvo, propriedade, receiver) {
            const valor = Reflect.get(alvo, propriedade, receiver);

            if (typeof valor === 'function') {
                return function(...args) {
                    const resultado = Reflect.apply(valor, alvo, args);

                    if (['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].includes(propriedade)) {
                        onChange(propriedade, args, alvo);
                    }

                    return resultado;
                };
            }

            return valor;
        },

        set(alvo, propriedade, valor, receiver) {
            const oldValue = alvo[propriedade];
            const resultado = Reflect.set(alvo, propriedade, valor, receiver);

            if (propriedade !== 'length' && oldValue !== valor) {
                onChange('set', { propriedade, oldValue, valor }, alvo);
            }

            return resultado;
        }
    });
}

const arrayObs = criarArrayObservavel((acao, detalhes, array) => {
    console.log(`Array alterado: ${acao}`, detalhes, array);
});

arrayObs.push(1, 2, 3);
arrayObs[0] = 10;
arrayObs.splice(1, 1);

// 6. Proxy para caching/memoization
function memoize(fn) {
    const cache = new Map();

    return new Proxy(fn, {
        apply(alvo, thisArg, argumentos) {
            const chave = JSON.stringify(argumentos);

            if (cache.has(chave)) {
                console.log('Retornando do cache:', chave);
                return cache.get(chave);
            }

            console.log('Calculando...');
            const resultado = Reflect.apply(alvo, thisArg, argumentos);
            cache.set(chave, resultado);

            return resultado;
        }
    });
}

const fibonacci = memoize(function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // Calcula tudo
console.log(fibonacci(10)); // Retorna do cache

// 7. Proxy para propriedades privadas
function criarObjetoComPrivados() {
    const privado = new WeakMap();

    return new Proxy({}, {
        get(alvo, propriedade) {
            if (propriedade.startsWith('_')) {
                const dados = privado.get(alvo) || {};
                return dados[propriedade];
            }
            return alvo[propriedade];
        },

        set(alvo, propriedade, valor) {
            if (propriedade.startsWith('_')) {
                let dados = privado.get(alvo);
                if (!dados) {
                    dados = {};
                    privado.set(alvo, dados);
                }
                dados[propriedade] = valor;
                return true;
            }
            alvo[propriedade] = valor;
            return true;
        },

        has(alvo, propriedade) {
            if (propriedade.startsWith('_')) {
                const dados = privado.get(alvo) || {};
                return propriedade in dados;
            }
            return propriedade in alvo;
        },

        ownKeys(alvo) {
            const chavesPublicas = Reflect.ownKeys(alvo);
            return chavesPublicas.filter(chave => !chave.startsWith('_'));
        },

        getOwnPropertyDescriptor(alvo, propriedade) {
            if (propriedade.startsWith('_')) {
                return undefined;
            }
            return Reflect.getOwnPropertyDescriptor(alvo, propriedade);
        }
    });
}

const objPrivado = criarObjetoComPrivados();
objPrivado.nome = 'Público';
objPrivado._segredo = 'Privado';

console.log(objPrivado.nome); // 'Público'
console.log(objPrivado._segredo); // 'Privado'
console.log(Object.keys(objPrivado)); // ['nome'] apenas
console.log('_segredo' in objPrivado); // true

// 8. Proxy revogável
const { proxy: proxyRevogavel, revoke } = Proxy.revocable({ valor: 42 }, {
    get(alvo, propriedade) {
        console.log(`Acessando ${propriedade}`);
        return alvo[propriedade];
    }
});

console.log(proxyRevogavel.valor); // Loga e retorna 42
revoke(); // Revoga o proxy
// console.log(proxyRevogavel.valor); // TypeError: Cannot perform 'get' on a proxy that has been revoked

// 9. Sistema de permissões com Proxy
class SistemaPermissoes {
    constructor(usuario) {
        this.usuario = usuario;
        this.recursos = new Map();
        this.proxies = new WeakMap();
    }

    adicionarRecurso(recurso, permissoes) {
        this.recursos.set(recurso, permissoes);

        const proxy = this.criarProxy(recurso);
        this.proxies.set(recurso, proxy);

        return proxy;
    }

    criarProxy(recurso) {
        const permissoes = this.recursos.get(recurso);

        return new Proxy(recurso, {
            get(alvo, propriedade, receiver) {
                if (propriedade === 'then' && alvo.then) {
                    // Para promises
                    return alvo.then.bind(alvo);
                }

                const valor = Reflect.get(alvo, propriedade, receiver);

                if (typeof valor === 'function') {
                    return (...args) => {
                        if (!permissoes.executar) {
                            throw new Error('Sem permissão para executar');
                        }
                        return Reflect.apply(valor, alvo, args);
                    };
                }

                return valor;
            },

            set(alvo, propriedade, valor) {
                if (!permissoes.escrever) {
                    throw new Error('Sem permissão para escrever');
                }
                return Reflect.set(alvo, propriedade, valor);
            },

            deleteProperty(alvo, propriedade) {
                if (!permissoes.deletar) {
                    throw new Error('Sem permissão para deletar');
                }
                return Reflect.deleteProperty(alvo, propriedade);
            },

            has(alvo, propriedade) {
                if (!permissoes.ler) {
                    return false; // Esconde propriedade
                }
                return Reflect.has(alvo, propriedade);
            },

            ownKeys(alvo) {
                if (!permissoes.ler) {
                    return [];
                }
                return Reflect.ownKeys(alvo);
            }
        });
    }

    obterProxy(recurso) {
        return this.proxies.get(recurso) || recurso;
    }
}

// Exemplo de uso
const sistema = new SistemaPermissoes({ nome: 'Admin' });

const bancoDados = {
    dados: [],
    adicionar(item) {
        this.dados.push(item);
        return this.dados.length;
    },
    listar() {
        return [...this.dados];
    },
    limpar() {
        this.dados = [];
    }
};

// Usuário comum pode apenas ler
const bancoParaUsuario = sistema.adicionarRecurso(bancoDados, {
    ler: true,
    escrever: false,
    executar: false,
    deletar: false
});

console.log(bancoParaUsuario.dados); // []
// bancoParaUsuario.adicionar('teste'); // Erro: Sem permissão para executar

// Admin tem todas permissões
sistema.usuario = { nome: 'Admin' };
const bancoParaAdmin = sistema.adicionarRecurso(bancoDados, {
    ler: true,
    escrever: true,
    executar: true,
    deletar: true
});

bancoParaAdmin.adicionar('teste');
console.log(bancoParaAdmin.listar()); // ['teste']

// 10. Sistema de logs com Proxy
class LoggerProxy {
    static criarProxyComLogs(alvo, nome = 'Objeto') {
        return new Proxy(alvo, {
            get(alvo, propriedade, receiver) {
                const valor = Reflect.get(alvo, propriedade, receiver);

                if (typeof valor === 'function') {
                    return function(...args) {
                        console.log(`[${nome}] ${propriedade}(${args.map(a =>
                            typeof a === 'object' ? JSON.stringify(a) : String(a)
                        ).join(', ')})`);

                        try {
                            const resultado = Reflect.apply(valor, alvo, args);

                            if (resultado && typeof resultado.then === 'function') {
                                return resultado.then(res => {
                                    console.log(`[${nome}] ${propriedade} →`, res);
                                    return res;
                                }).catch(err => {
                                    console.error(`[${nome}] ${propriedade} erro:`, err);
                                    throw err;
                                });
                            }

                            console.log(`[${nome}] ${propriedade} →`, resultado);
                            return resultado;
                        } catch (error) {
                            console.error(`[${nome}] ${propriedade} erro:`, error);
                            throw error;
                        }
                    };
                }

                console.log(`[${nome}] GET ${propriedade} =`, valor);
                return valor;
            },

            set(alvo, propriedade, valor, receiver) {
                console.log(`[${nome}] SET ${propriedade} =`, valor);
                return Reflect.set(alvo, propriedade, valor, receiver);
            },

            deleteProperty(alvo, propriedade) {
                console.log(`[${nome}] DELETE ${propriedade}`);
                return Reflect.deleteProperty(alvo, propriedade);
            }
        });
    }
}

// Exemplo de uso
const apiService = {
    async buscarUsuarios() {
        // Simulação de API
        return new Promise(resolve => {
            setTimeout(() => resolve([{ id: 1, nome: 'João' }]), 100);
        });
    },

    salvarUsuario(usuario) {
        console.log('Salvando...', usuario);
        return { sucesso: true, id: Date.now() };
    }
};

const apiComLogs = LoggerProxy.criarProxyComLogs(apiService, 'API');
apiComLogs.buscarUsuarios().then(console.log);
apiComLogs.salvarUsuario({ nome: 'Maria', idade: 25 });

// 11. Proxy para validação de schema
class SchemaValidator {
    constructor(schema) {
        this.schema = schema;
    }

    criarProxy(alvo) {
        return new Proxy(alvo, {
            set(alvo, propriedade, valor) {
                if (!this.schema[propriedade]) {
                    throw new Error(`Propriedade não definida no schema: ${propriedade}`);
                }

                const regra = this.schema[propriedade];

                // Validar tipo
                if (regra.tipo && typeof valor !== regra.tipo) {
                    throw new Error(`Tipo inválido para ${propriedade}. Esperado: ${regra.tipo}, Recebido: ${typeof valor}`);
                }

                // Validar se é obrigatório
                if (regra.required && (valor === undefined || valor === null || valor === '')) {
                    throw new Error(`Propriedade obrigatória: ${propriedade}`);
                }

                // Validar padrão (regex)
                if (regra.pattern && !new RegExp(regra.pattern).test(String(valor))) {
                    throw new Error(`Formato inválido para ${propriedade}`);
                }

                // Validar enum
                if (regra.enum && !regra.enum.includes(valor)) {
                    throw new Error(`Valor inválido para ${propriedade}. Valores permitidos: ${regra.enum.join(', ')}`);
                }

                // Validar mínimo/máximo
                if (regra.min !== undefined && valor < regra.min) {
                    throw new Error(`Valor muito baixo para ${propriedade}. Mínimo: ${regra.min}`);
                }

                if (regra.max !== undefined && valor > regra.max) {
                    throw new Error(`Valor muito alto para ${propriedade}. Máximo: ${regra.max}`);
                }

                // Validar comprimento
                if (regra.minLength !== undefined && String(valor).length < regra.minLength) {
                    throw new Error(`Comprimento muito curto para ${propriedade}. Mínimo: ${regra.minLength} caracteres`);
                }

                if (regra.maxLength !== undefined && String(valor).length > regra.maxLength) {
                    throw new Error(`Comprimento muito longo para ${propriedade}. Máximo: ${regra.maxLength} caracteres`);
                }

                // Validar customizado
                if (regra.validar && !regra.validar(valor)) {
                    throw new Error(`Validação customizada falhou para ${propriedade}`);
                }

                return Reflect.set(alvo, propriedade, valor);
            }.bind(this),

            get(alvo, propriedade) {
                // Permitir acesso a propriedades do schema
                if (propriedade === '$schema') {
                    return this.schema;
                }

                return Reflect.get(alvo, propriedade);
            }.bind(this)
        });
    }
}

// Exemplo de uso
const schemaUsuario = {
    nome: {
        tipo: 'string',
        required: true,
        minLength: 3,
        maxLength: 50
    },
    email: {
        tipo: 'string',
        required: true,
        pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
    },
    idade: {
        tipo: 'number',
        min: 18,
        max: 120
    },
    status: {
        tipo: 'string',
        enum: ['ativo', 'inativo', 'pendente']
    }
};

const validador = new SchemaValidator(schemaUsuario);
const usuarioValidado = validador.criarProxy({});

try {
    usuarioValidado.nome = 'João Silva';
    usuarioValidado.email = 'joao@exemplo.com';
    usuarioValidado.idade = 30;
    usuarioValidado.status = 'ativo';

    console.log('Usuário válido:', usuarioValidado);
} catch (error) {
    console.error('Erro de validação:', error.message);
}

// 12. Proxy para lazy loading
function criarLazyProxy(factory, cache = new WeakMap()) {
    return new Proxy({}, {
        get(alvo, propriedade, receiver) {
            let instancia = cache.get(alvo);

            if (!instancia) {
                instancia = factory();
                cache.set(alvo, instancia);
            }

            const valor = Reflect.get(instancia, propriedade, receiver);

            if (typeof valor === 'function') {
                return function(...args) {
                    return Reflect.apply(valor, instancia, args);
                };
            }

            return valor;
        },

        set(alvo, propriedade, valor) {
            let instancia = cache.get(alvo);

            if (!instancia) {
                instancia = factory();
                cache.set(alvo, instancia);
            }

            return Reflect.set(instancia, propriedade, valor);
        },

        has(alvo, propriedade) {
            let instancia = cache.get(alvo);

            if (!instancia) {
                instancia = factory();
                cache.set(alvo, instancia);
            }

            return Reflect.has(instancia, propriedade);
        },

        ownKeys(alvo) {
            let instancia = cache.get(alvo);

            if (!instancia) {
                instancia = factory();
                cache.set(alvo, instancia);
            }

            return Reflect.ownKeys(instancia);
        },

        getOwnPropertyDescriptor(alvo, propriedade) {
            let instancia = cache.get(alvo);

            if (!instancia) {
                instancia = factory();
                cache.set(alvo, instancia);
            }

            return Reflect.getOwnPropertyDescriptor(instancia, propriedade);
        }
    });
}

// Exemplo de uso
const servicoPesado = criarLazyProxy(() => {
    console.log('🔄 Criando serviço pesado...');

    // Simulação de inicialização custosa
    const dados = [];
    for (let i = 0; i < 1000000; i++) {
        dados.push(i);
    }

    return {
        dados,
        processar() {
            console.log('Processando', this.dados.length, 'itens');
            return this.dados.length;
        },
        buscar(indice) {
            return this.dados[indice] || null;
        }
    };
});

console.log('Proxy criado (serviço ainda não inicializado)');
console.log(servicoPesado.processar()); // Inicializa e processa
console.log(servicoPesado.buscar(42)); // Usa instância já criada

// 13. Sistema de reatividade com Proxy
class SistemaReativo {
    constructor(estadoInicial = {}) {
        this.estado = estadoInicial;
        this.efeitos = new Map();
        this.dependencias = new WeakMap();
        this.efeitoAtual = null;

        this.proxy = this.criarProxy(this.estado);
    }

    criarProxy(alvo, caminho = '') {
        const self = this;

        return new Proxy(alvo, {
            get(alvo, propriedade, receiver) {
                const valor = Reflect.get(alvo, propriedade, receiver);

                // Registrar dependência se houver efeito ativo
                if (self.efeitoAtual) {
                    const chave = caminho ? `${caminho}.${String(propriedade)}` : String(propriedade);

                    if (!self.dependencias.has(self.efeitoAtual)) {
                        self.dependencias.set(self.efeitoAtual, new Set());
                    }

                    self.dependencias.get(self.efeitoAtual).add(chave);
                }

                // Se for objeto, criar proxy recursivamente
                if (valor && typeof valor === 'object' && !Array.isArray(valor)) {
                    const novoCaminho = caminho ? `${caminho}.${String(propriedade)}` : String(propriedade);
                    return self.criarProxy(valor, novoCaminho);
                }

                return valor;
            },

            set(alvo, propriedade, valor, receiver) {
                const antigoValor = alvo[propriedade];
                const resultado = Reflect.set(alvo, propriedade, valor, receiver);

                if (resultado && antigoValor !== valor) {
                    const chave = caminho ? `${caminho}.${String(propriedade)}` : String(propriedade);
                    self.dispararEfeitos(chave);
                }

                return resultado;
            }
        });
    }

    efeito(callback) {
        const id = Symbol('efeito');

        const executar = () => {
            // Limpar dependências anteriores
            this.dependencias.delete(id);

            // Executar com rastreamento de dependências
            this.efeitoAtual = id;
            try {
                callback(this.proxy);
            } finally {
                this.efeitoAtual = null;
            }
        };

        this.efeitos.set(id, executar);
        executar();

        return () => {
            this.efeitos.delete(id);
            this.dependencias.delete(id);
        };
    }

    dispararEfeitos(chaveAlterada) {
        for (const [id, efeito] of this.efeitos) {
            const dependencias = this.dependencias.get(id);

            if (dependencias && dependencias.has(chaveAlterada)) {
                efeito();
            }
        }
    }

    computado(getter) {
        let cache;
        let sujo = true;
        let dependencias = new Set();

        const id = Symbol('computado');

        const atualizar = () => {
            // Limpar dependências anteriores
            this.dependencias.delete(id);

            // Recalcular com rastreamento
            this.efeitoAtual = id;
            try {
                cache = getter(this.proxy);
                sujo = false;
            } finally {
                this.efeitoAtual = null;
            }
        };

        this.efeitos.set(id, atualizar);

        return {
            get valor() {
                if (sujo) {
                    atualizar();
                }

                // Registrar dependência se houver efeito ativo
                if (this.efeitoAtual && this.efeitoAtual !== id) {
                    if (!this.dependencias.has(this.efeitoAtual)) {
                        this.dependencias.set(this.efeitoAtual, new Set());
                    }

                    // Todas as dependências do computado se tornam dependências do efeito
                    const computadoDeps = this.dependencias.get(id);
                    if (computadoDeps) {
                        computadoDeps.forEach(dep => {
                            this.dependencias.get(this.efeitoAtual).add(dep);
                        });
                    }
                }

                return cache;
            }
        };
    }
}

// Exemplo de uso do sistema reativo
const sistema = new SistemaReativo({
    usuario: {
        nome: 'João',
        idade: 30
    },
    produtos: [
        { nome: 'Produto A', preco: 100 },
        { nome: 'Produto B', preco: 200 }
    ]
});

// Efeito reativo
const limparEfeito = sistema.efeito(() => {
    const { usuario, produtos } = sistema.proxy;
    console.log(`👤 ${usuario.nome} (${usuario.idade} anos)`);
    console.log(`🛒 ${produtos.length} produtos`);
});

// Computado
const total = sistema.computado(() => {
    const { produtos } = sistema.proxy;
    return produtos.reduce((soma, p) => soma + p.preco, 0);
});

sistema.efeito(() => {
    console.log(`💰 Total: R$ ${total.valor}`);
});

// Modificações disparam efeitos
sistema.proxy.usuario.idade = 31;
sistema.proxy.produtos.push({ nome: 'Produto C', preco: 150 });

// Limpar efeito
setTimeout(() => {
    limparEfeito();
    sistema.proxy.usuario.nome = 'Maria'; // Não dispara mais o primeiro efeito
}, 1000);
```

## Property Descriptors

### Descritores de Propriedade
```javascript
// Descritores de propriedade definem como uma propriedade se comporta

// 1. Obtendo descritores
const obj = {
    nome: 'João',
    idade: 30
};

const descriptorNome = Object.getOwnPropertyDescriptor(obj, 'nome');
console.log(descriptorNome);
// {
//   value: 'João',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Obter todos os descriptors
const allDescriptors = Object.getOwnPropertyDescriptors(obj);
console.log(allDescriptors);

// 2. Definindo propriedades com descriptors
const objetoVazio = {};

// Propriedade com valor
Object.defineProperty(objetoVazio, 'propriedade1', {
    value: 42,
    writable: true,        // pode ser alterada
    enumerable: true,      // aparece em for...in, Object.keys()
    configurable: true     // pode ser deletada ou redefinida
});

// Propriedade somente leitura
Object.defineProperty(objetoVazio, 'constante', {
    value: 'NÃO ALTERE',
    writable: false,
    enumerable: true,
    configurable: false
});

// Propriedade não enumerável
Object.defineProperty(objetoVazio, 'segredo', {
    value: 'hidden',
    enumerable: false,
    configurable: true
});

console.log(Object.keys(objetoVazio)); // ['propriedade1', 'constante']
console.log(objetoVazio.segredo); // 'hidden'
objetoVazio.constante = 'tentativa'; // Ignorada em modo não estrito
console.log(objetoVazio.constante); // 'NÃO ALTERE'

// 3. Getters e Setters
const objComAcesso = {
    _valor: 0,

    get valor() {
        console.log('Getter chamado');
        return this._valor;
    },

    set valor(novoValor) {
        console.log('Setter chamado');
        if (novoValor < 0) {
            throw new Error('Valor não pode ser negativo');
        }
        this._valor = novoValor;
    }
};

objComAcesso.valor = 10; // Loga 'Setter chamado'
console.log(objComAcesso.valor); // Loga 'Getter chamado', retorna 10

// Definindo getter/setter com defineProperty
const obj2 = {
    _contador: 0
};

Object.defineProperty(obj2, 'contador', {
    get() {
        return this._contador;
    },
    set(valor) {
        if (valor >= 0) {
            this._contador = valor;
        }
    },
    enumerable: true,
    configurable: true
});

// 4. defineProperties - Múltiplas propriedades de uma vez
const obj3 = {};

Object.defineProperties(obj3, {
    prop1: {
        value: 'valor1',
        writable: true
    },
    prop2: {
        get() {
            return this._prop2 || 'padrão';
        },
        set(valor) {
            this._prop2 = valor.toUpperCase();
        },
        enumerable: true
    },
    prop3: {
        value: 42,
        writable: false,
        enumerable: false
    }
});

// 5. Verificando flags de propriedade
const descritor = Object.getOwnPropertyDescriptor(obj3, 'prop3');
console.log('É writable?', descritor.writable); // false
console.log('É enumerable?', descritor.enumerable); // false
console.log('É configurable?', descritor.configurable); // false

// 6. Configurabilidade
const obj4 = { x: 1 };

// Tornar não configurável
Object.defineProperty(obj4, 'x', {
    configurable: false
});

// Agora não pode ser deletada
// delete obj4.x; // TypeError em modo estrito

// Também não pode ser redefinida
// Object.defineProperty(obj4, 'x', { writable: false }); // TypeError

// Mas ainda pode ser alterada se writable for true
obj4.x = 2; // Funciona

// 7. Propriedades herdadas
function Pessoa(nome) {
    this.nome = nome;
}

Pessoa.prototype.dizerOla = function() {
    return `Olá, ${this.nome}!`;
};

const joao = new Pessoa('João');

// Propriedade própria vs herdada
console.log(Object.getOwnPropertyDescriptor(joao, 'nome')); // Existe
console.log(Object.getOwnPropertyDescriptor(joao, 'dizerOla')); // undefined (herdada)

// 8. Classes ES6 e descriptors
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    get precoComImposto() {
        return this.preco * 1.2;
    }

    set precoComImposto(valor) {
        this.preco = valor / 1.2;
    }

    static criar(nome, preco) {
        return new Produto(nome, preco);
    }
}

const produto = new Produto('Notebook', 1000);

const descritorGetter = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(produto),
    'precoComImposto'
);
console.log(descritorGetter); // Tem get e set

// 9. Object.preventExtensions, seal, freeze
const obj5 = {
    a: 1,
    b: 2,
    c: 3
};

// preventExtensions - não permite novas propriedades
Object.preventExtensions(obj5);
obj5.d = 4; // Ignorado
console.log(obj5.d); // undefined

// seal - preventExtensions + não configurável
const obj6 = { x: 1, y: 2 };
Object.seal(obj6);
delete obj6.x; // Não funciona
obj6.x = 10; // Funciona (ainda writable)
obj6.z = 3; // Não funciona

// freeze - seal + não writable
const obj7 = { p: 1, q: 2 };
Object.freeze(obj7);
obj7.p = 10; // Não funciona
delete obj7.q; // Não funciona
obj7.r = 3; // Não funciona

// Verificações
console.log('É extensível?', Object.isExtensible(obj5)); // false
console.log('É selado?', Object.isSealed(obj6)); // true
console.log('É congelado?', Object.isFrozen(obj7)); // true

// 10. Sistema avançado de descriptors
class PropertyManager {
    constructor(obj) {
        this.obj = obj;
        this.backup = new Map();
        this.locks = new Set();
    }

    // Fazer backup de todos os descriptors
    backupAll() {
        const descriptors = Object.getOwnPropertyDescriptors(this.obj);
        this.backup.set(Date.now(), {
            descriptors,
            timestamp: new Date().toISOString()
        });
        return this;
    }

    // Restaurar de backup
    restore(timestamp) {
        const backup = this.backup.get(timestamp);
        if (backup) {
            Object.defineProperties(this.obj, backup.descriptors);
        }
        return this;
    }

    // Bloquear propriedade (não configurável, não writable)
    lock(property) {
        const descriptor = Object.getOwnPropertyDescriptor(this.obj, property);

        if (descriptor) {
            Object.defineProperty(this.obj, property, {
                ...descriptor,
                writable: false,
                configurable: false
            });
            this.locks.add(property);
        }

        return this;
    }

    // Desbloquear propriedade
    unlock(property) {
        if (this.locks.has(property)) {
            const descriptor = Object.getOwnPropertyDescriptor(this.obj, property);

            if (descriptor) {
                Object.defineProperty(this.obj, property, {
                    ...descriptor,
                    writable: true,
                    configurable: true
                });
                this.locks.delete(property);
            }
        }

        return this;
    }

    // Transformar propriedade em observável
    observe(property, callback) {
        const descriptor = Object.getOwnPropertyDescriptor(this.obj, property);

        if (!descriptor) {
            throw new Error(`Propriedade ${property} não existe`);
        }

        let value = this.obj[property];
        const getter = () => value;
        const setter = (newValue) => {
            const oldValue = value;
            value = newValue;
            callback(property, oldValue, newValue);
        };

        Object.defineProperty(this.obj, property, {
            get: getter,
            set: setter,
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable
        });

        return this;
    }

    // Adicionar validação a propriedade
    validate(property, validator) {
        const descriptor = Object.getOwnPropertyDescriptor(this.obj, property);

        if (!descriptor) {
            throw new Error(`Propriedade ${property} não existe`);
        }

        let value = this.obj[property];
        const getter = () => value;
        const setter = (newValue) => {
            if (!validator(newValue)) {
                throw new Error(`Validação falhou para ${property}: ${newValue}`);
            }
            value = newValue;
        };

        Object.defineProperty(this.obj, property, {
            get: getter,
            set: setter,
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable
        });

        return this;
    }

    // Criar propriedade computada
    computed(property, dependencies, computeFn) {
        dependencies.forEach(dep => {
            if (!(dep in this.obj)) {
                throw new Error(`Dependência ${dep} não existe`);
            }
        });

        const descriptor = {
            get() {
                return computeFn.call(this);
            },
            enumerable: true,
            configurable: true
        };

        Object.defineProperty(this.obj, property, descriptor);

        return this;
    }

    // Listar propriedades por tipo
    listProperties(filter = 'all') {
        const properties = Object.getOwnPropertyNames(this.obj);
        const symbols = Object.getOwnPropertySymbols(this.obj);
        const allProps = [...properties, ...symbols];

        return allProps.filter(prop => {
            const descriptor = Object.getOwnPropertyDescriptor(this.obj, prop);

            switch (filter) {
                case 'writable':
                    return descriptor.writable === true;
                case 'readonly':
                    return descriptor.writable === false;
                case 'enumerable':
                    return descriptor.enumerable === true;
                case 'non-enumerable':
                    return descriptor.enumerable === false;
                case 'configurable':
                    return descriptor.configurable === true;
                case 'non-configurable':
                    return descriptor.configurable === false;
                case 'accessor':
                    return descriptor.get || descriptor.set;
                case 'data':
                    return !descriptor.get && !descriptor.set;
                default:
                    return true;
            }
        });
    }

    // Exportar schema do objeto
    exportSchema() {
        const schema = {};
        const properties = Object.getOwnPropertyNames(this.obj);
        const symbols = Object.getOwnPropertySymbols(this.obj);
        const allProps = [...properties, ...symbols];

        allProps.forEach(prop => {
            const descriptor = Object.getOwnPropertyDescriptor(this.obj, prop);
            schema[prop] = {
                type: descriptor.get ? 'accessor' : 'data',
                writable: descriptor.writable,
                enumerable: descriptor.enumerable,
                configurable: descriptor.configurable,
                value: descriptor.value
            };
        });

        return schema;
    }
}

// Exemplo de uso do PropertyManager
const usuario = {
    nome: 'João',
    idade: 30,
    email: 'joao@exemplo.com'
};

const manager = new PropertyManager(usuario);

// Fazer backup
manager.backupAll();

// Observar mudanças
manager.observe('idade', (prop, oldVal, newVal) => {
    console.log(`Idade mudou de ${oldVal} para ${newVal}`);
});

usuario.idade = 31; // Loga a mudança

// Adicionar validação
manager.validate('email', (valor) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
});

try {
    usuario.email = 'email-invalido'; // Erro!
} catch (error) {
    console.error(error.message);
}

// Criar propriedade computada
manager.computed('nomeCompleto', ['nome'], function() {
    return `${this.nome} Silva`;
});

console.log(usuario.nomeCompleto); // 'João Silva'

// Listar propriedades
console.log('Propriedades enumeráveis:', manager.listProperties('enumerable'));
console.log('Schema:', manager.exportSchema());

// 11. Sistema de permissões com descriptors
class SecurityManager {
    constructor(obj, userRole) {
        this.obj = obj;
        this.userRole = userRole;
        this.roles = {
            admin: { read: true, write: true, delete: true },
            editor: { read: true, write: true, delete: false },
            viewer: { read: true, write: false, delete: false },
            guest: { read: false, write: false, delete: false }
        };

        this.applySecurity();
    }

    applySecurity() {
        const role = this.roles[this.userRole] || this.roles.guest;
        const properties = Object.getOwnPropertyNames(this.obj);

        properties.forEach(prop => {
            const descriptor = Object.getOwnPropertyDescriptor(this.obj, prop);

            if (!role.read) {
                // Tornar não enumerável e não acessível
                Object.defineProperty(this.obj, prop, {
                    ...descriptor,
                    enumerable: false,
                    configurable: false
                });
            }

            if (!role.write && descriptor.writable) {
                Object.defineProperty(this.obj, prop, {
                    ...descriptor,
                    writable: false
                });
            }
        });

        // Prevenir extensões se não pode escrever
        if (!role.write) {
            Object.preventExtensions(this.obj);
        }

        // Seal se não pode deletar
        if (!role.delete) {
            Object.seal(this.obj);
        }
    }

    changeRole(newRole) {
        this.userRole = newRole;

        // Restaurar descriptors originais
        const properties = Object.getOwnPropertyNames(this.obj);
        properties.forEach(prop => {
            const originalDescriptor = Object.getOwnPropertyDescriptor(
                Object.getPrototypeOf(this.obj),
                prop
            ) || { value: this.obj[prop], writable: true, enumerable: true, configurable: true };

            Object.defineProperty(this.obj, prop, originalDescriptor);
        });

        // Reaplicar segurança
        this.applySecurity();
    }
}

// Exemplo de uso
const dadosSensiveis = {
    nome: 'João Silva',
    cpf: '123.456.789-00',
    salario: 5000,
    endereco: 'Rua das Flores, 123'
};

// Usuário viewer só pode ler
const segViewer = new SecurityManager(dadosSensiveis, 'viewer');
console.log(Object.keys(dadosSensiveis)); // [] - propriedades não enumeráveis
// dadosSensiveis.nome = 'Maria'; // Não funciona (não writable)

// Mudar para editor
segViewer.changeRole('editor');
console.log(Object.keys(dadosSensiveis)); // Todas propriedades
dadosSensiveis.nome = 'Maria Silva'; // Funciona
// delete dadosSensiveis.cpf; // Não funciona (sealed)

// 12. Sistema de versionamento com descriptors
class VersionedObject {
    constructor(initialState = {}) {
        this.current = initialState;
        this.history = [];
        this.version = 0;

        this.createProxy();
        this.recordVersion('initial');
    }

    createProxy() {
        this.proxy = new Proxy(this.current, {
            set: (target, property, value) => {
                const oldValue = target[property];
                target[property] = value;

                if (oldValue !== value) {
                    this.recordChange(property, oldValue, value);
                }

                return true;
            },

            deleteProperty: (target, property) => {
                const oldValue = target[property];
                delete target[property];

                this.recordChange(property, oldValue, undefined);

                return true;
            },

            defineProperty: (target, property, descriptor) => {
                const oldDescriptor = Object.getOwnPropertyDescriptor(target, property);
                const result = Object.defineProperty(target, property, descriptor);

                this.recordDescriptorChange(property, oldDescriptor, descriptor);

                return result;
            }
        });
    }

    recordChange(property, oldValue, newValue) {
        this.history.push({
            version: ++this.version,
            timestamp: new Date().toISOString(),
            type: 'change',
            property,
            oldValue,
            newValue,
            descriptors: Object.getOwnPropertyDescriptors(this.current)
        });
    }

    recordDescriptorChange(property, oldDescriptor, newDescriptor) {
        this.history.push({
            version: ++this.version,
            timestamp: new Date().toISOString(),
            type: 'descriptor',
            property,
            oldDescriptor,
            newDescriptor
        });
    }

    recordVersion(label) {
        this.history.push({
            version: ++this.version,
            timestamp: new Date().toISOString(),
            type: 'version',
            label,
            snapshot: JSON.parse(JSON.stringify(this.current)),
            descriptors: Object.getOwnPropertyDescriptors(this.current)
        });
    }

    getVersion(version) {
        return this.history.find(entry => entry.version === version);
    }

    revertToVersion(version) {
        const targetVersion = this.getVersion(version);

        if (!targetVersion) {
            throw new Error(`Versão ${version} não encontrada`);
        }

        if (targetVersion.type === 'version') {
            // Restaurar snapshot
            Object.keys(this.current).forEach(key => delete this.current[key]);
            Object.assign(this.current, targetVersion.snapshot);

            // Restaurar descriptors
            Object.defineProperties(this.current, targetVersion.descriptors);
        } else {
            // Reverter mudanças individuais até a versão
            const changesToRevert = this.history
                .filter(entry => entry.version > version && entry.type === 'change')
                .reverse();

            changesToRevert.forEach(change => {
                if (change.newValue === undefined) {
                    // Propriedade foi deletada, restaurar
                    this.current[change.property] = change.oldValue;
                } else {
                    // Reverter para valor antigo
                    this.current[change.property] = change.oldValue;
                }
            });
        }

        this.recordVersion(`reverted to ${version}`);

        return this;
    }

    getHistory() {
        return [...this.history];
    }

    clearHistory() {
        this.history = this.history.filter(entry => entry.type === 'version');
        return this;
    }

    createCheckpoint(label) {
        this.recordVersion(label || `checkpoint ${Date.now()}`);
        return this.version;
    }

    diff(version1, version2) {
        const v1 = this.getVersion(version1);
        const v2 = this.getVersion(version2);

        if (!v1 || !v2) {
            throw new Error('Versões não encontradas');
        }

        const diff = {};
        const allKeys = new Set([
            ...Object.keys(v1.snapshot || {}),
            ...Object.keys(v2.snapshot || {})
        ]);

        allKeys.forEach(key => {
            const val1 = v1.snapshot?.[key];
            const val2 = v2.snapshot?.[key];

            if (val1 !== val2) {
                diff[key] = {
                    from: val1,
                    to: val2
                };
            }
        });

        return diff;
    }
}

// Exemplo de uso
const versioned = new VersionedObject({
    nome: 'João',
    idade: 30
});

versioned.proxy.nome = 'Maria';
versioned.proxy.idade = 31;
versioned.proxy.email = 'maria@exemplo.com';

const checkpoint = versioned.createCheckpoint('antes de deletar');

delete versioned.proxy.idade;

console.log('Histórico:', versioned.getHistory());
console.log('Diff:', versioned.diff(checkpoint - 1, versioned.version));

// Reverter para checkpoint
versioned.revertToVersion(checkpoint);
console.log('Após reverter:', versioned.current);

// 13. Sistema de tipos com runtime type checking
class TypeSystem {
    constructor() {
        this.types = new Map();
        this.registerBuiltInTypes();
    }

    registerBuiltInTypes() {
        this.types.set('string', {
            validate: (value) => typeof value === 'string',
            coerce: (value) => String(value)
        });

        this.types.set('number', {
            validate: (value) => typeof value === 'number' && !isNaN(value),
            coerce: (value) => Number(value)
        });

        this.types.set('boolean', {
            validate: (value) => typeof value === 'boolean',
            coerce: (value) => Boolean(value)
        });

        this.types.set('array', {
            validate: (value) => Array.isArray(value),
            coerce: (value) => Array.isArray(value) ? value : [value]
        });

        this.types.set('object', {
            validate: (value) => value && typeof value === 'object' && !Array.isArray(value),
            coerce: (value) => value && typeof value === 'object' ? value : {}
        });

        this.types.set('date', {
            validate: (value) => value instanceof Date,
            coerce: (value) => new Date(value)
        });
    }

    registerType(name, validator, coercer = null) {
        this.types.set(name, {
            validate: validator,
            coerce: coercer || (value => value)
        });
        return this;
    }

    createTypedObject(schema, initialData = {}) {
        const obj = {};
        const typeInfo = new Map();

        // Definir propriedades com validação de tipo
        Object.keys(schema).forEach(key => {
            const typeDef = schema[key];
            const typeName = typeof typeDef === 'string' ? typeDef : typeDef.type;
            const isRequired = typeof typeDef === 'object' ? typeDef.required !== false : true;
            const defaultValue = typeof typeDef === 'object' ? typeDef.default : undefined;

            if (!this.types.has(typeName)) {
                throw new Error(`Tipo não registrado: ${typeName}`);
            }

            const type = this.types.get(typeName);
            typeInfo.set(key, { typeName, type, isRequired, defaultValue });

            let value = initialData[key] !== undefined ? initialData[key] : defaultValue;

            // Coercion se necessário
            if (value !== undefined && !type.validate(value) && type.coerce) {
                value = type.coerce(value);
            }

            // Validação
            if (value !== undefined && !type.validate(value)) {
                throw new Error(`Valor inválido para ${key}. Esperado: ${typeName}`);
            }

            if (isRequired && value === undefined) {
                throw new Error(`Propriedade obrigatória: ${key}`);
            }

            Object.defineProperty(obj, key, {
                value,
                writable: true,
                enumerable: true,
                configurable: false
            });
        });

        // Criar proxy para validação em tempo de execução
        return new Proxy(obj, {
            set(target, property, value) {
                if (!typeInfo.has(property)) {
                    throw new Error(`Propriedade não definida no schema: ${property}`);
                }

                const { type, isRequired } = typeInfo.get(property);

                // Coercion
                let finalValue = value;
                if (!type.validate(value) && type.coerce) {
                    finalValue = type.coerce(value);
                }

                // Validação
                if (finalValue === undefined && isRequired) {
                    throw new Error(`Propriedade obrigatória: ${property}`);
                }

                if (finalValue !== undefined && !type.validate(finalValue)) {
                    throw new Error(`Tipo inválido para ${property}`);
                }

                target[property] = finalValue;
                return true;
            },

            deleteProperty(target, property) {
                const { isRequired } = typeInfo.get(property);

                if (isRequired) {
                    throw new Error(`Não é possível deletar propriedade obrigatória: ${property}`);
                }

                delete target[property];
                return true;
            },

            defineProperty(target, property, descriptor) {
                throw new Error('Não é possível redefinir propriedades em objetos tipados');
            },

            get(target, property) {
                if (property === '$schema') {
                    return schema;
                }

                if (property === '$typeInfo') {
                    return Object.fromEntries(typeInfo);
                }

                return target[property];
            }
        });
    }

    // Decorator para classes
    typedClass(schema) {
        return function(Class) {
            return class TypedClass extends Class {
                constructor(...args) {
                    super(...args);

                    const instance = this;
                    const typeInfo = new Map();

                    Object.keys(schema).forEach(key => {
                        const typeDef = schema[key];
                        const typeName = typeof typeDef === 'string' ? typeDef : typeDef.type;

                        if (!this.types.has(typeName)) {
                            throw new Error(`Tipo não registrado: ${typeName}`);
                        }

                        const type = this.types.get(typeName);
                        typeInfo.set(key, { typeName, type });

                        let value = instance[key];

                        Object.defineProperty(instance, key, {
                            get() {
                                return this[`_${key}`];
                            },
                            set(newValue) {
                                if (!type.validate(newValue)) {
                                    throw new Error(`Tipo inválido para ${key}`);
                                }
                                this[`_${key}`] = newValue;
                            },
                            enumerable: true,
                            configurable: false
                        });

                        if (value !== undefined) {
                            instance[key] = value;
                        }
                    });

                    // Armazenar typeInfo na instância
                    instance.$typeInfo = typeInfo;
                }
            };
        }.bind(this);
    }
}

// Exemplo de uso do TypeSystem
const typeSystem = new TypeSystem();

// Registrar tipo customizado
typeSystem.registerType('email', (value) => {
    return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
});

typeSystem.registerType('cpf', (value) => {
    if (typeof value !== 'string') return false;
    const cpf = value.replace(/\D/g, '');
    return cpf.length === 11 && !/^(\d)\1+$/.test(cpf);
});

// Criar objeto tipado
const userSchema = {
    nome: { type: 'string', required: true },
    email: { type: 'email', required: true },
    idade: { type: 'number', required: false, default: 18 },
    cpf: 'cpf',
    tags: { type: 'array', default: [] },
    metadata: { type: 'object', default: {} }
};

const typedUser = typeSystem.createTypedObject(userSchema, {
    nome: 'João Silva',
    email: 'joao@exemplo.com'
});

console.log(typedUser);
console.log(typedUser.$schema);

// Validação em tempo de execução
try {
    typedUser.email = 'email-invalido';
} catch (error) {
    console.error('Erro:', error.message);
}

typedUser.idade = 30; // OK
typedUser.tags.push('admin'); // OK

// 14. Sistema de herança com mixins usando descriptors
class MixinSystem {
    static applyMixins(target, ...mixins) {
        mixins.forEach(mixin => {
            if (typeof mixin === 'function') {
                // É uma classe ou função construtora
                const instance = new mixin();
                Object.getOwnPropertyNames(instance).forEach(prop => {
                    if (prop !== 'constructor') {
                        const descriptor = Object.getOwnPropertyDescriptor(instance, prop);
                        if (descriptor) {
                            Object.defineProperty(target.prototype, prop, descriptor);
                        }
                    }
                });
            } else if (typeof mixin === 'object') {
                // É um objeto literal
                Object.getOwnPropertyNames(mixin).forEach(prop => {
                    const descriptor = Object.getOwnPropertyDescriptor(mixin, prop);
                    if (descriptor) {
                        Object.defineProperty(target.prototype, prop, descriptor);
                    }
                });
            }
        });

        return target;
    }

    static createMixin(...behaviors) {
        return class Mixin {
            constructor() {
                behaviors.forEach(behavior => {
                    if (typeof behavior === 'function') {
                        behavior.call(this);
                    } else if (typeof behavior === 'object') {
                        Object.assign(this, behavior);
                    }
                });
            }
        };
    }

    static withDescriptors(...descriptors) {
        return function(target) {
            descriptors.forEach(({ property, descriptor }) => {
                Object.defineProperty(target.prototype, property, descriptor);
            });
            return target;
        };
    }
}

// Exemplo de mixins
const Loggable = {
    log(message) {
        console.log(`[${this.constructor.name}] ${message}`);
    },

    error(message) {
        console.error(`[${this.constructor.name}] ERROR: ${message}`);
    }
};

const Serializable = {
    toJSON() {
        const obj = {};
        Object.getOwnPropertyNames(this).forEach(prop => {
            if (prop !== 'toJSON' && prop !== 'fromJSON') {
                obj[prop] = this[prop];
            }
        });
        return JSON.stringify(obj);
    },

    fromJSON(json) {
        const data = JSON.parse(json);
        Object.assign(this, data);
        return this;
    }
};

const Validatable = {
    validate() {
        const errors = [];
        Object.getOwnPropertyNames(this).forEach(prop => {
            if (this[prop] === undefined || this[prop] === null) {
                errors.push(`Campo ${prop} é obrigatório`);
            }
        });
        return errors;
    }
};

// Classe base
class BaseEntity {
    constructor(id) {
        this.id = id;
    }
}

// Aplicar mixins
const User = MixinSystem.applyMixins(
    class User extends BaseEntity {
        constructor(id, nome, email) {
            super(id);
            this.nome = nome;
            this.email = email;
        }
    },
    Loggable,
    Serializable,
    Validatable
);

// Usar classe com mixins
const user = new User(1, 'João', 'joao@exemplo.com');
user.log('Usuário criado');
console.log(user.toJSON());
console.log(user.validate());

// Criar mixin dinâmico
const Timestampable = MixinSystem.createMixin(
    {
        createdAt: new Date(),
        updatedAt: new Date()
    },
    function updateTimestamp() {
        this.updatedAt = new Date();
    }
);

const Product = MixinSystem.applyMixins(
    class Product {
        constructor(nome, preco) {
            this.nome = nome;
            this.preco = preco;
        }
    },
    Timestampable,
    Loggable
);

const produto = new Product('Notebook', 1000);
console.log(produto.createdAt);
produto.log('Produto criado');

// 15. Sistema de metadata com Reflect.defineMetadata (simulado)
class MetadataSystem {
    constructor() {
        this.metadata = new WeakMap();
    }

    defineMetadata(key, value, target, property = null) {
        let targetMetadata = this.metadata.get(target);

        if (!targetMetadata) {
            targetMetadata = new Map();
            this.metadata.set(target, targetMetadata);
        }

        const metadataKey = property ? `${property}:${key}` : key;
        targetMetadata.set(metadataKey, value);

        return this;
    }

    getMetadata(key, target, property = null) {
        const targetMetadata = this.metadata.get(target);

        if (!targetMetadata) {
            return undefined;
        }

        const metadataKey = property ? `${property}:${key}` : key;
        return targetMetadata.get(metadataKey);
    }

    hasMetadata(key, target, property = null) {
        const targetMetadata = this.metadata.get(target);

        if (!targetMetadata) {
            return false;
        }

        const metadataKey = property ? `${property}:${key}` : key;
        return targetMetadata.has(metadataKey);
    }

    getOwnMetadataKeys(target, property = null) {
        const targetMetadata = this.metadata.get(target);

        if (!targetMetadata) {
            return [];
        }

        const prefix = property ? `${property}:` : '';
        return Array.from(targetMetadata.keys())
            .filter(key => key.startsWith(prefix))
            .map(key => property ? key.slice(prefix.length) : key);
    }

    getMetadataKeys(target, property = null) {
        const keys = new Set();
        let current = target;

        while (current) {
            const ownKeys = this.getOwnMetadataKeys(current, property);
            ownKeys.forEach(key => keys.add(key));

            const proto = Object.getPrototypeOf(current);
            if (proto === null || proto === Object.prototype) {
                break;
            }
            current = proto;
        }

        return Array.from(keys);
    }

    deleteMetadata(key, target, property = null) {
        const targetMetadata = this.metadata.get(target);

        if (!targetMetadata) {
            return false;
        }

        const metadataKey = property ? `${property}:${key}` : key;
        return targetMetadata.delete(metadataKey);
    }

    // Decorators usando metadata
    decorator(key, value) {
        return function(target, property, descriptor) {
            const metadataSystem = new MetadataSystem();
            metadataSystem.defineMetadata(key, value, target, property);

            if (descriptor) {
                return descriptor;
            }
        };
    }
}

// Exemplo de uso do MetadataSystem
const metadata = new MetadataSystem();

class ExampleClass {
    constructor() {
        this.value = 0;
    }

    method() {
        return this.value;
    }
}

// Definir metadata
metadata.defineMetadata('version', '1.0.0', ExampleClass);
metadata.defineMetadata('author', 'João Silva', ExampleClass);
metadata.defineMetadata('type', 'number', ExampleClass.prototype, 'value');
metadata.defineMetadata('log', true, ExampleClass.prototype, 'method');

// Obter metadata
console.log('Versão:', metadata.getMetadata('version', ExampleClass));
console.log('Tipo de value:', metadata.getMetadata('type', ExampleClass.prototype, 'value'));
console.log('Chaves de metadata:', metadata.getMetadataKeys(ExampleClass.prototype, 'method'));

// Decorator com metadata
const deprecated = metadata.decorator('deprecated', true);
const loggable = metadata.decorator('loggable', true);

class Service {
    @deprecated
    oldMethod() {
        console.log('Método antigo');
    }

    @loggable
    newMethod() {
        console.log('Método novo');
    }
}

console.log('Deprecated?', metadata.getMetadata('deprecated', Service.prototype, 'oldMethod'));
console.log('Loggable?', metadata.getMetadata('loggable', Service.prototype, 'newMethod'));
```

### Sistema Completo de Meta-Programação
```javascript
// Sistema integrado de meta-programação
class MetaProgrammingSystem {
    constructor() {
        this.types = new TypeSystem();
        this.metadata = new MetadataSystem();
        this.validators = new Map();
        this.transformers = new Map();
        this.interceptors = new Map();
        this.init();
    }

    init() {
        this.registerBuiltInTransformers();
        this.registerBuiltInValidators();
        this.registerBuiltInInterceptors();
    }

    registerBuiltInTransformers() {
        this.transformers.set('uppercase', (value) =>
            typeof value === 'string' ? value.toUpperCase() : value
        );

        this.transformers.set('lowercase', (value) =>
            typeof value === 'string' ? value.toLowerCase() : value
        );

        this.transformers.set('trim', (value) =>
            typeof value === 'string' ? value.trim() : value
        );

        this.transformers.set('parseInt', (value) =>
            parseInt(value, 10)
        );

        this.transformers.set('parseFloat', (value) =>
            parseFloat(value)
        );

        this.transformers.set('toDate', (value) =>
            new Date(value)
        );

        this.transformers.set('toJSON', (value) =>
            JSON.stringify(value)
        );
    }

    registerBuiltInValidators() {
        this.validators.set('required', (value) =>
            value !== undefined && value !== null && value !== ''
        );

        this.validators.set('email', (value) =>
            typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        );

        this.validators.set('url', (value) => {
            if (typeof value !== 'string') return false;
            try {
                new URL(value);
                return true;
            } catch {
                return false;
            }
        });

        this.validators.set('min', (min) => (value) =>
            typeof value === 'number' && value >= min
        );

        this.validators.set('max', (max) => (value) =>
            typeof value === 'number' && value <= max
        );

        this.validators.set('minLength', (min) => (value) =>
            typeof value === 'string' && value.length >= min
        );

        this.validators.set('maxLength', (max) => (value) =>
            typeof value === 'string' && value.length <= max
        );

        this.validators.set('pattern', (regex) => (value) =>
            typeof value === 'string' && new RegExp(regex).test(value)
        );
    }

    registerBuiltInInterceptors() {
        this.interceptors.set('log', {
            before: (target, property, args) => {
                console.log(`[BEFORE] ${target.constructor.name}.${property}`, args);
            },
            after: (target, property, args, result) => {
                console.log(`[AFTER] ${target.constructor.name}.${property} →`, result);
            },
            error: (target, property, args, error) => {
                console.error(`[ERROR] ${target.constructor.name}.${property}:`, error);
            }
        });

        this.interceptors.set('measure', {
            before: (target, property, args) => {
                const key = `${target.constructor.name}.${property}`;
                performance.mark(`${key}-start`);
            },
            after: (target, property, args, result) => {
                const key = `${target.constructor.name}.${property}`;
                performance.mark(`${key}-end`);
                performance.measure(key, `${key}-start`, `${key}-end`);
                const duration = performance.getEntriesByName(key)[0].duration;
                console.log(`⏱️ ${key}: ${duration.toFixed(2)}ms`);
            }
        });

        this.interceptors.set('cache', {
            cache: new Map(),
            before: function(target, property, args) {
                const key = `${property}:${JSON.stringify(args)}`;
                if (this.cache.has(key)) {
                    console.log(`[CACHE HIT] ${property}`);
                    return { cached: true, value: this.cache.get(key) };
                }
                return { cached: false };
            },
            after: function(target, property, args, result) {
                const key = `${property}:${JSON.stringify(args)}`;
                this.cache.set(key, result);
                console.log(`[CACHE SET] ${property}`);
            }
        });
    }

    // Criar objeto com metaprogramação avançada
    createObject(schema, options = {}) {
        const {
            interceptors = [],
            validators = {},
            transformers = {},
            metadata = {}
        } = options;

        const obj = {};
        const internal = new WeakMap();

        // Aplicar metadata
        Object.entries(metadata).forEach(([key, value]) => {
            this.metadata.defineMetadata(key, value, obj);
        });

        // Definir propriedades
        Object.entries(schema).forEach(([property, config]) => {
            const {
                type = 'any',
                required = false,
                default: defaultValue,
                validate = [],
                transform = [],
                get,
                set,
                ...otherConfig
            } = typeof config === 'object' ? config : { type: config };

            let value = defaultValue;
            let validatorsList = Array.isArray(validate) ? validate : [validate];
            let transformersList = Array.isArray(transform) ? transform : [transform];

            // Adicionar validações do schema
            if (type !== 'any') {
                validatorsList.unshift((val) => {
                    if (val === undefined || val === null) return !required;
                    return this.types.types.has(type)
                        ? this.types.types.get(type).validate(val)
                        : true;
                });
            }

            if (required) {
                validatorsList.unshift(this.validators.get('required'));
            }

            // Criar getter e setter
            const descriptor = {
                enumerable: true,
                configurable: false,
                ...otherConfig
            };

            if (get || set) {
                descriptor.get = get;
                descriptor.set = set;
            } else {
                descriptor.get = function() {
                    return value;
                };

                descriptor.set = function(newValue) {
                    // Aplicar transformações
                    let transformedValue = newValue;

                    transformersList.forEach(transformer => {
                        if (typeof transformer === 'string' && this.transformers.has(transformer)) {
                            transformedValue = this.transformers.get(transformer)(transformedValue);
                        } else if (typeof transformer === 'function') {
                            transformedValue = transformer(transformedValue);
                        }
                    });

                    // Validar
                    for (const validator of validatorsList) {
                        let validatorFn;

                        if (typeof validator === 'string' && this.validators.has(validator)) {
                            validatorFn = this.validators.get(validator);
                        } else if (typeof validator === 'function') {
                            validatorFn = validator;
                        } else if (Array.isArray(validator)) {
                            const [name, ...args] = validator;
                            if (this.validators.has(name)) {
                                validatorFn = this.validators.get(name)(...args);
                            }
                        }

                        if (validatorFn && !validatorFn(transformedValue)) {
                            throw new Error(`Validação falhou para ${property}: ${transformedValue}`);
                        }
                    }

                    value = transformedValue;
                    return true;
                }.bind(this);
            }

            Object.defineProperty(obj, property, descriptor);
        });

        // Aplicar interceptors
        if (interceptors.length > 0) {
            return this.intercept(obj, interceptors);
        }

        return obj;
    }

    // Interceptar métodos
    intercept(target, interceptorNames) {
        const interceptors = interceptorNames.map(name => {
            if (typeof name === 'string' && this.interceptors.has(name)) {
                return this.interceptors.get(name);
            } else if (typeof name === 'object') {
                return name;
            }
            return null;
        }).filter(Boolean);

        return new Proxy(target, {
            get(obj, property, receiver) {
                const value = Reflect.get(obj, property, receiver);

                if (typeof value === 'function') {
                    return function(...args) {
                        // Executar interceptors before
                        let cachedResult;
                        interceptors.forEach(interceptor => {
                            if (interceptor.before) {
                                const result = interceptor.before(obj, property, args);
                                if (result && result.cached) {
                                    cachedResult = result.value;
                                }
                            }
                        });

                        // Retornar do cache se disponível
                        if (cachedResult !== undefined) {
                            return cachedResult;
                        }

                        try {
                            // Executar método original
                            const result = Reflect.apply(value, obj, args);

                            // Executar interceptors after
                            interceptors.forEach(interceptor => {
                                if (interceptor.after) {
                                    interceptor.after(obj, property, args, result);
                                }
                            });

                            return result;
                        } catch (error) {
                            // Executar interceptors error
                            interceptors.forEach(interceptor => {
                                if (interceptor.error) {
                                    interceptor.error(obj, property, args, error);
                                }
                            });
                            throw error;
                        }
                    };
                }

                return value;
            }
        });
    }

    // Criar classe com metaprogramação
    createClass(className, config) {
        const {
            extends: parentClass = Object,
            properties = {},
            methods = {},
            static: staticMembers = {},
            interceptors = [],
            metadata = {}
        } = config;

        const Class = class extends parentClass {
            constructor(...args) {
                super(...args);

                // Inicializar propriedades
                Object.entries(properties).forEach(([property, propConfig]) => {
                    const { default: defaultValue, ...rest } = propConfig;

                    if (defaultValue !== undefined) {
                        this[property] = defaultValue;
                    }

                    // Aplicar descriptors
                    Object.defineProperty(this, property, {
                        writable: true,
                        enumerable: true,
                        configurable: false,
                        ...rest
                    });
                });
            }
        };

        // Adicionar métodos
        Object.entries(methods).forEach(([methodName, method]) => {
            Object.defineProperty(Class.prototype, methodName, {
                value: method,
                writable: false,
                enumerable: false,
                configurable: false
            });
        });

        // Adicionar membros estáticos
        Object.entries(staticMembers).forEach(([name, value]) => {
            Object.defineProperty(Class, name, {
                value,
                writable: false,
                enumerable: false,
                configurable: false
            });
        });

        // Aplicar metadata
        Object.entries(metadata).forEach(([key, value]) => {
            this.metadata.defineMetadata(key, value, Class);
        });

        // Aplicar interceptors
        if (interceptors.length > 0) {
            const interceptedProto = this.intercept(Class.prototype, interceptors);
            Object.setPrototypeOf(Class.prototype, interceptedProto);
        }

        // Definir nome da classe
        Object.defineProperty(Class, 'name', { value: className });

        return Class;
    }

    // Decorator factory
    decorator(type, ...args) {
        switch (type) {
            case 'validate':
                return (target, property, descriptor) => {
                    const validator = this.validators.get(args[0]);
                    if (validator) {
                        const originalSetter = descriptor.set;
                        descriptor.set = function(value) {
                            const validatorFn = args.length > 1 ? validator(...args.slice(1)) : validator;
                            if (!validatorFn(value)) {
                                throw new Error(`Validação falhou para ${property}: ${value}`);
                            }
                            if (originalSetter) {
                                originalSetter.call(this, value);
                            } else {
                                this[`_${property}`] = value;
                            }
                        };
                    }
                    return descriptor;
                };

            case 'transform':
                return (target, property, descriptor) => {
                    const transformer = this.transformers.get(args[0]);
                    if (transformer) {
                        const originalSetter = descriptor.set;
                        descriptor.set = function(value) {
                            const transformed = transformer(value);
                            if (originalSetter) {
                                originalSetter.call(this, transformed);
                            } else {
                                this[`_${property}`] = transformed;
                            }
                        };
                    }
                    return descriptor;
                };

            case 'intercept':
                return (target, property, descriptor) => {
                    const interceptor = this.interceptors.get(args[0]);
                    if (interceptor && descriptor.value) {
                        const originalMethod = descriptor.value;
                        descriptor.value = function(...methodArgs) {
                            if (interceptor.before) {
                                interceptor.before(this, property, methodArgs);
                            }

                            try {
                                const result = originalMethod.apply(this, methodArgs);

                                if (interceptor.after) {
                                    interceptor.after(this, property, methodArgs, result);
                                }

                                return result;
                            } catch (error) {
                                if (interceptor.error) {
                                    interceptor.error(this, property, methodArgs, error);
                                }
                                throw error;
                            }
                        };
                    }
                    return descriptor;
                };

            case 'metadata':
                return (target, property, descriptor) => {
                    const [key, value] = args;
                    this.metadata.defineMetadata(key, value, target, property);
                    return descriptor;
                };

            default:
                return (target, property, descriptor) => descriptor;
        }
    }
}

// Exemplo de uso do sistema completo
const metaSystem = new MetaProgrammingSystem();

// Criar objeto com metaprogramação
const userSchema = {
    nome: {
        type: 'string',
        required: true,
        validate: ['minLength', 3],
        transform: ['trim']
    },
    email: {
        type: 'string',
        required: true,
        validate: ['email']
    },
    idade: {
        type: 'number',
        validate: [['min', 18], ['max', 120]],
        default: 18
    },
    senha: {
        type: 'string',
        validate: ['minLength', 8],
        set(valor) {
            // Hash simulado
            this._senha = btoa(valor);
        },
        get() {
            return this._senha;
        }
    }
};

const advancedUser = metaSystem.createObject(userSchema, {
    interceptors: ['log', 'measure'],
    metadata: {
        version: '1.0.0',
        createdAt: new Date().toISOString()
    }
});

// Usar o objeto
advancedUser.nome = '  João Silva  ';
advancedUser.email = 'joao@exemplo.com';
advancedUser.idade = 25;
advancedUser.senha = 'senhaSegura123';

console.log('Usuário criado:', advancedUser);
console.log('Metadata:', metaSystem.metadata.getMetadataKeys(advancedUser));

// Criar classe com metaprogramação
const ProductClass = metaSystem.createClass('Product', {
    properties: {
        nome: { type: 'string', required: true },
        preco: { type: 'number', required: true, default: 0 },
        estoque: { type: 'number', default: 0 }
    },
    methods: {
        vender(quantidade) {
            if (quantidade > this.estoque) {
                throw new Error('Estoque insuficiente');
            }
            this.estoque -= quantidade;
            return this.preco * quantidade;
        },
        repor(quantidade) {
            this.estoque += quantidade;
            return this.estoque;
        }
    },
    static: {
        criar(nome, preco) {
            return new ProductClass(nome, preco);
        }
    },
    interceptors: ['log'],
    metadata: {
        category: 'entity',
        version: '1.0.0'
    }
});

const produto = new ProductClass('Notebook', 1000);
produto.repor(10);
console.log('Venda:', produto.vender(2));
console.log('Estoque:', produto.estoque);

// Usar decorators
class ServiceWithDecorators {
    @metaSystem.decorator('validate', 'email')
    set email(valor) {
        this._email = valor;
    }

    get email() {
        return this._email;
    }

    @metaSystem.decorator('transform', 'uppercase')
    set nome(valor) {
        this._nome = valor;
    }

    get nome() {
        return this._nome;
    }

    @metaSystem.decorator('intercept', 'cache')
    @metaSystem.decorator('intercept', 'measure')
    calcularComplexo(valor) {
        // Cálculo pesado
        let resultado = 0;
        for (let i = 0; i < valor; i++) {
            resultado += Math.sqrt(i);
        }
        return resultado;
    }

    @metaSystem.decorator('metadata', 'version', '2.0.0')
    metodoComMetadata() {
        return 'método com metadata';
    }
}

const service = new ServiceWithDecorators();
service.email = 'teste@exemplo.com';
service.nome = 'joão';

console.log('Email:', service.email);
console.log('Nome:', service.nome);

// Primeira chamada calcula
console.log('Resultado 1:', service.calcularComplexo(10000));
// Segunda chamada usa cache
console.log('Resultado 2:', service.calcularComplexo(10000));

console.log('Metadata do método:',
    metaSystem.metadata.getMetadata('version', ServiceWithDecorators.prototype, 'metodoComMetadata')
);
```

Este material completo cobre todas as técnicas de meta-programação em JavaScript, incluindo a Reflect API, Proxy Objects, e Property Descriptors, com exemplos práticos e sistemas avançados para uso em projetos reais.
