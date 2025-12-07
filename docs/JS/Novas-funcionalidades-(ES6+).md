# 13. NOVAS FUNCIONALIDADES (ES6+)

## Template Literals

### Strings com superpoderes

```javascript
// 1. Template literals básicos
const nome = "João";
const idade = 30;

// Antes (ES5)
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");

// Agora (ES6+)
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// 2. Expressões dentro de templates
const a = 5;
const b = 10;

console.log(`A soma de ${a} + ${b} é ${a + b}`);
console.log(`O dobro de ${a} é ${a * 2}`);

// 3. Chamadas de função dentro de templates
function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

const preco = 99.99;
console.log(`Preço: ${formatarMoeda(preco)}`);

// 4. Templates multi-linha
// Antes (ES5)
const textoAntigo = "Linha 1\n" + "Linha 2\n" + "Linha 3";

// Agora (ES6+)
const textoNovo = `Linha 1
Linha 2
Linha 3`;

console.log(textoNovo);

// 5. Templates com HTML
const usuario = {
  nome: "Maria",
  avatar: "avatar.jpg",
  bio: "Desenvolvedora web",
};

const html = `
    <div class="card">
        <img src="${usuario.avatar}" alt="${usuario.nome}">
        <h2>${usuario.nome}</h2>
        <p>${usuario.bio}</p>
    </div>
`;

console.log(html);

// 6. Tagged templates
function tag(strings, ...values) {
  console.log("Strings:", strings); // Array das partes literais
  console.log("Values:", values); // Array das expressões

  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined ? values[i] : "";
    return result + str + value;
  }, "");
}

const resultado = tag`Olá ${nome}, você tem ${idade} anos!`;

// 7. Exemplos úteis de tagged templates

// a) Sanitização de HTML
function sanitize(strings, ...values) {
  return strings.reduce((result, str, i) => {
    let value = values[i] || "";

    // Remover tags HTML perigosas
    if (typeof value === "string") {
      value = value
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    }

    return result + str + value;
  }, "");
}

const userInput = '<script>alert("hack")</script>';
const safeHTML = sanitize`<div>${userInput}</div>`;
console.log(safeHTML); // <div>&lt;script&gt;alert(&quot;hack&quot;)&lt;/script&gt;</div>

// b) Internacionalização (i18n)
const traducoes = {
  en: {
    greeting: "Hello, {name}! You have {count} messages.",
    time: "It's {time} o'clock",
  },
  pt: {
    greeting: "Olá, {name}! Você tem {count} mensagens.",
    time: "São {time} horas",
  },
};

function i18n(strings, ...values) {
  const idioma = navigator.language.split("-")[0] || "en";
  const chave = strings.join("{placeholder}");
  const traducao = traducoes[idioma]?.[chave] || strings.join("");

  return traducao.replace(/{(\w+)}/g, (match, p1) => {
    const index = strings.findIndex((str) => str.includes(`{${p1}}`));
    return values[index] || match;
  });
}

console.log(i18n`greeting`("João", 5)); // Depende do idioma do navegador

// c) Estilização no console
function consoleStyle(strings, ...values) {
  const style =
    "background: linear-gradient(90deg, #ff5e62, #ff9966); color: white; padding: 5px 10px; border-radius: 3px;";

  const mensagem = strings.reduce((result, str, i) => {
    return result + str + (values[i] || "");
  }, "");

  return `%c${mensagem}`;
}

console.log(
  consoleStyle`⚠️ Importante: ${"Alerta de segurança"}`,
  "font-weight: bold; color: #856404;"
);

// d) Query SQL segura
function sql(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i];

    if (value === undefined) {
      return result + str;
    }

    // Escapar valores para SQL (simplificado)
    const escaped =
      typeof value === "string" ? `'${value.replace(/'/g, "''")}'` : value;

    return result + str + escaped;
  }, "");
}

const userId = 123;
const userName = "João'; DROP TABLE users; --";
const query = sql`SELECT * FROM users WHERE id = ${userId} AND name = ${userName}`;
console.log(query);

// 8. Templates aninhados
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
];

const listaHTML = `
    <ul>
        ${produtos
          .map(
            (produto) => `
            <li>
                ${produto.nome} - ${formatarMoeda(produto.preco)}
            </li>
        `
          )
          .join("")}
    </ul>
`;

console.log(listaHTML);

// 9. Templates para formatação
function formatarData(data, ...formatos) {
  const formatosDisponiveis = {
    data: `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${data.getFullYear()}`,
    hora: `${data.getHours().toString().padStart(2, "0")}:${data
      .getMinutes()
      .toString()
      .padStart(2, "0")}`,
    completo: `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`,
  };

  return formatos.map((f) => formatosDisponiveis[f] || f).join(" - ");
}

const agora = new Date();
console.log(formatarData`${agora} data hora`);
console.log(formatarData`${agora} completo`);

// 10. Template literals com raw strings
function raw(strings, ...values) {
  console.log("Raw strings:", strings.raw);
  console.log("Strings normais:", strings);

  return String.raw(strings, ...values);
}

const caminho = raw`C:\Users\João\Documentos\novo.txt`;
console.log(caminho); // C:\Users\João\Documentos\novo.txt

// String.raw para regex
const regex = String.raw`\d+\.\d+`;
console.log(regex); // \d+\.\d+

// 11. Sistema de templates avançado
class TemplateEngine {
  constructor() {
    this.templates = new Map();
    this.helpers = new Map();
    this.partials = new Map();

    this.registerDefaultHelpers();
  }

  registerDefaultHelpers() {
    this.registerHelper("if", function (condicao, options) {
      return condicao ? options.fn(this) : options.inverse(this);
    });

    this.registerHelper("each", function (array, options) {
      if (!Array.isArray(array)) return "";

      return array
        .map((item, index) => {
          const data = {
            ...this,
            "@index": index,
            "@first": index === 0,
            "@last": index === array.length - 1,
            "@key": index,
            this: item,
          };
          return options.fn(item, { data });
        })
        .join("");
    });

    this.registerHelper("formatCurrency", function (value) {
      return `R$ ${parseFloat(value).toFixed(2).replace(".", ",")}`;
    });

    this.registerHelper("uppercase", function (value) {
      return String(value).toUpperCase();
    });

    this.registerHelper("lowercase", function (value) {
      return String(value).toLowerCase();
    });
  }

  registerHelper(name, fn) {
    this.helpers.set(name, fn);
  }

  registerPartial(name, template) {
    this.partials.set(name, template);
  }

  compile(templateString) {
    // Substituir helpers e expressões
    let compiled = templateString
      .replace(/\{\{([^}]+)\}\}/g, (match, expression) => {
        return `\${this.evaluate("${expression.trim()}")}`;
      })
      .replace(
        /\{\{#(\w+)\s+([^}]+)\}\}([\s\S]*?)\{\{\/\1\}\}/g,
        (match, helper, args, content) => {
          return `\${this.helper("${helper}", "${args}", \`${content}\`)}`;
        }
      );

    // Substituir partials
    compiled = compiled.replace(/\{\{> (\w+)\}\}/g, (match, partialName) => {
      const partial = this.partials.get(partialName);
      return partial ? `\${this.partial("${partialName}")}` : "";
    });

    return new Function(
      "data",
      `
            with(this.helpers) {
                with(data) {
                    return \`${compiled}\`;
                }
            }
        `
    );
  }

  evaluate(expression) {
    try {
      // Usar Function para evitar eval
      return new Function("data", `with(data) { return ${expression} }`)(this);
    } catch {
      return "";
    }
  }

  helper(name, args, content) {
    const helperFn = this.helpers.get(name);
    if (!helperFn) return "";

    // Parse arguments
    const parsedArgs = args.split(" ").map((arg) => {
      arg = arg.trim();
      if (arg.startsWith('"') && arg.endsWith('"')) {
        return arg.slice(1, -1);
      }
      return this.evaluate(arg);
    });

    // Execute helper
    return helperFn.call(this, ...parsedArgs, {
      fn: (context) => {
        const oldContext = Object.assign({}, this);
        Object.assign(this, context);
        const result = content;
        Object.assign(this, oldContext);
        return result;
      },
      inverse: () => "",
    });
  }

  partial(name) {
    const partialTemplate = this.partials.get(name);
    if (!partialTemplate) return "";

    return this.compile(partialTemplate).call(this, this);
  }

  render(templateName, data) {
    const template = this.templates.get(templateName);
    if (!template) throw new Error(`Template "${templateName}" não encontrado`);

    // Mesclar helpers no contexto
    const context = Object.create(data);
    Object.assign(context, { helpers: Object.fromEntries(this.helpers) });

    return this.compile(template).call(context, context);
  }
}

// Exemplo de uso
const engine = new TemplateEngine();

// Registrar templates
engine.templates.set(
  "usuario",
  `
    <div class="usuario">
        <h2>{{nome}}</h2>
        <p>Email: {{email}}</p>
        <p>Idade: {{idade}}</p>

        {{#if admin}}
            <span class="badge admin">Administrador</span>
        {{/if}}

        <h3>Produtos:</h3>
        <ul>
            {{#each produtos}}
                <li>
                    {{this.nome}} - {{formatCurrency this.preco}}
                </li>
            {{/each}}
        </ul>
    </div>
`
);

engine.registerPartial(
  "cabecalho",
  `
    <header>
        <h1>{{uppercase titulo}}</h1>
        <p>{{descricao}}</p>
    </header>
`
);

const data = {
  nome: "João Silva",
  email: "joao@exemplo.com",
  idade: 30,
  admin: true,
  produtos: [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 50 },
  ],
  titulo: "Meu Perfil",
  descricao: "Bem-vindo ao meu perfil",
};

const htmlRenderizado = engine.render("usuario", data);
console.log(htmlRenderizado);
```

## Destructuring

### Desestruturação em JavaScript

```javascript
// 1. Desestruturação de arrays
const numeros = [1, 2, 3, 4, 5];

// Básico
const [primeiro, segundo] = numeros;
console.log(primeiro, segundo); // 1 2

// Ignorar elementos
const [um, , tres] = numeros;
console.log(um, tres); // 1 3

// Valor padrão
const [a, b, c, d, e, f = 6] = numeros;
console.log(f); // 6

// Rest operator
const [x, y, ...resto] = numeros;
console.log(x, y, resto); // 1 2 [3, 4, 5]

// Troca de valores
let p = 1;
let q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1

// 2. Desestruturação de objetos
const usuario = {
  nome: "Maria",
  idade: 25,
  email: "maria@exemplo.com",
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
  },
};

// Básico
const { nome, idade } = usuario;
console.log(nome, idade); // "Maria" 25

// Com alias
const { nome: nomeUsuario, idade: idadeUsuario } = usuario;
console.log(nomeUsuario, idadeUsuario); // "Maria" 25

// Valor padrão
const { nome: n, telefone = "Não informado" } = usuario;
console.log(telefone); // "Não informado"

// Desestruturação aninhada
const {
  endereco: { rua, cidade },
} = usuario;
console.log(rua, cidade); // "Rua das Flores" "São Paulo"

// Rest operator em objetos
const { nome: nomeCompleto, ...outrosDados } = usuario;
console.log(outrosDados); // { idade: 25, email: "maria@exemplo.com", endereco: {...} }

// 3. Desestruturação em parâmetros de função
// Antes
function mostrarUsuarioAntigo(user) {
  console.log(user.nome, user.idade, user.email);
}

// Agora
function mostrarUsuario({ nome, idade, email }) {
  console.log(nome, idade, email);
}

mostrarUsuario(usuario);

// Com valores padrão
function criarUsuario({
  nome = "Anônimo",
  idade = 0,
  email = "sem-email",
} = {}) {
  return { nome, idade, email };
}

console.log(criarUsuario()); // { nome: "Anônimo", idade: 0, email: "sem-email" }
console.log(criarUsuario({ nome: "João" })); // { nome: "João", idade: 0, email: "sem-email" }

// 4. Desestruturação em loops
const usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 35 },
  { nome: "Beatriz", idade: 28 },
];

for (const { nome, idade } of usuarios) {
  console.log(`${nome} tem ${idade} anos`);
}

// 5. Desestruturação complexa
const dados = {
  usuario: {
    info: {
      pessoal: {
        nome: "João",
        contato: {
          email: "joao@exemplo.com",
          telefones: ["11999999999", "1122222222"],
        },
      },
    },
  },
  config: {
    tema: "escuro",
    notificacoes: true,
  },
};

// Acesso profundo com desestruturação
const {
  usuario: {
    info: {
      pessoal: {
        nome,
        contato: {
          email,
          telefones: [principal, secundario],
        },
      },
    },
  },
  config: { tema, notificacoes },
} = dados;

console.log(nome, email, principal, tema);

// 6. Desestruturação com computed properties
const chave = "nome";
const { [chave]: valor } = usuario;
console.log(valor); // "Maria"

// 7. Sistema avançado de desestruturação
class DestructuringSystem {
  // Extrair múltiplos níveis de um objeto
  static extract(obj, paths) {
    const result = {};

    paths.forEach((path) => {
      const keys = path.split(".");
      let current = obj;

      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          current = undefined;
          break;
        }
      }

      result[keys[keys.length - 1]] = current;
    });

    return result;
  }

  // Desestruturação com validação
  static safeDestructure(obj, schema) {
    const result = {};
    const missing = [];

    Object.entries(schema).forEach(([key, config]) => {
      const { path, required = false, defaultValue, transform } = config;

      // Obter valor
      let value = path.split(".").reduce((current, pathKey) => {
        return current && current[pathKey];
      }, obj);

      // Verificar se é obrigatório
      if (required && value === undefined) {
        missing.push(path);
      }

      // Aplicar valor padrão
      if (value === undefined && defaultValue !== undefined) {
        value =
          typeof defaultValue === "function" ? defaultValue() : defaultValue;
      }

      // Aplicar transformação
      if (transform && value !== undefined) {
        value = transform(value);
      }

      result[key] = value;
    });

    if (missing.length > 0) {
      console.warn(`Campos obrigatórios ausentes: ${missing.join(", ")}`);
    }

    return result;
  }

  // Merge de objetos com desestruturação
  static mergeWithDestructure(...objects) {
    return objects.reduce((result, obj) => {
      if (!obj) return result;

      // Desestruturar arrays no objeto
      if (Array.isArray(obj)) {
        const [first, ...rest] = obj;
        return this.mergeWithDestructure(result, first, ...rest);
      }

      // Mesclar propriedades
      Object.keys(obj).forEach((key) => {
        const value = obj[key];

        if (Array.isArray(value) && Array.isArray(result[key])) {
          // Concatenar arrays
          result[key] = [...result[key], ...value];
        } else if (
          typeof value === "object" &&
          value &&
          typeof result[key] === "object" &&
          result[key]
        ) {
          // Merge recursivo de objetos
          result[key] = this.mergeWithDestructure(result[key], value);
        } else {
          // Sobrescrever
          result[key] = value;
        }
      });

      return result;
    }, {});
  }

  // Pattern matching simplificado
  static match(value, patterns) {
    for (const [pattern, handler] of patterns) {
      if (typeof pattern === "function") {
        if (pattern(value)) return handler(value);
      } else if (pattern === value) {
        return handler(value);
      } else if (Array.isArray(pattern) && Array.isArray(value)) {
        if (
          pattern.length === value.length &&
          pattern.every((p, i) => p === value[i] || p === "_")
        ) {
          return handler(value);
        }
      } else if (
        typeof pattern === "object" &&
        pattern &&
        typeof value === "object" &&
        value
      ) {
        const match = Object.keys(pattern).every((key) => {
          const patternValue = pattern[key];
          const actualValue = value[key];

          if (patternValue === "_") return true;
          if (typeof patternValue === "function") {
            return patternValue(actualValue);
          }
          return patternValue === actualValue;
        });

        if (match) return handler(value);
      }
    }

    return patterns.find(([pattern]) => pattern === "default")?.[1]?.(value);
  }
}

// Exemplos de uso
const config = {
  database: {
    host: "localhost",
    port: 5432,
    credentials: {
      username: "admin",
      password: "secret",
    },
  },
  server: {
    port: 3000,
    cors: {
      origin: ["http://localhost:3000"],
    },
  },
};

// Extrair caminhos específicos
const extraido = DestructuringSystem.extract(config, [
  "database.host",
  "database.credentials.username",
  "server.port",
]);

console.log(extraido);

// Desestruturação segura com schema
const schema = {
  dbHost: {
    path: "database.host",
    required: true,
  },
  dbUser: {
    path: "database.credentials.username",
    required: true,
    transform: (val) => val.toUpperCase(),
  },
  serverPort: {
    path: "server.port",
    defaultValue: 8080,
  },
  cacheEnabled: {
    path: "cache.enabled",
    defaultValue: false,
  },
};

const seguro = DestructuringSystem.safeDestructure(config, schema);
console.log(seguro);

// Pattern matching
const resultadoMatch = DestructuringSystem.match(usuarios[0], [
  [{ nome: "Ana", idade: 22 }, (user) => `Encontrou Ana: ${user.nome}`],
  [
    { idade: (age) => age > 30 },
    (user) => `Usuário com mais de 30: ${user.nome}`,
  ],
  ["default", () => "Nenhum padrão correspondente"],
]);

console.log(resultadoMatch);

// 8. Desestruturação com Proxy para observação
function createObservableDestructure(obj, onChange) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      if (typeof value === "object" && value !== null) {
        return createObservableDestructure(value, (path, oldVal, newVal) => {
          onChange(`${prop}.${path}`, oldVal, newVal);
        });
      }

      return value;
    },

    set(target, prop, value, receiver) {
      const oldValue = target[prop];
      const result = Reflect.set(target, prop, value, receiver);

      if (result && oldValue !== value) {
        onChange(prop, oldValue, value);
      }

      return result;
    },
  });
}

const observable = createObservableDestructure(
  { user: { name: "João" } },
  (path, oldVal, newVal) => {
    console.log(`🔍 ${path} mudou:`, oldVal, "→", newVal);
  }
);

// Desestruturação que observa mudanças
const { user } = observable;
const { name } = user;

user.name = "Maria"; // Loga a mudança
observable.user = { name: "Carlos" }; // Loga a mudança

// 9. Sistema de validação com desestruturação
class ValidatorWithDestructuring {
  constructor(rules) {
    this.rules = rules;
  }

  validate(data) {
    const errors = [];
    const validData = {};

    Object.entries(this.rules).forEach(([field, rule]) => {
      const { required = false, type, pattern, min, max, custom } = rule;
      let value = data[field];

      // Verificar obrigatoriedade
      if (required && (value === undefined || value === null || value === "")) {
        errors.push({ field, error: "Campo obrigatório" });
        return;
      }

      // Se não é obrigatório e está vazio, pular validação
      if (
        !required &&
        (value === undefined || value === null || value === "")
      ) {
        validData[field] = value;
        return;
      }

      // Validar tipo
      if (type) {
        if (type === "array" && !Array.isArray(value)) {
          errors.push({ field, error: "Deve ser um array" });
          return;
        }

        if (type === "date" && !(value instanceof Date)) {
          try {
            value = new Date(value);
            if (isNaN(value.getTime())) {
              errors.push({ field, error: "Data inválida" });
              return;
            }
          } catch {
            errors.push({ field, error: "Data inválida" });
            return;
          }
        }

        if (typeof type === "string" && type !== "array" && type !== "date") {
          if (typeof value !== type) {
            errors.push({ field, error: `Tipo deve ser ${type}` });
            return;
          }
        }
      }

      // Validar padrão (regex)
      if (pattern && !new RegExp(pattern).test(String(value))) {
        errors.push({ field, error: "Formato inválido" });
        return;
      }

      // Validar mínimo/máximo para números
      if (typeof value === "number") {
        if (min !== undefined && value < min) {
          errors.push({ field, error: `Valor mínimo: ${min}` });
          return;
        }

        if (max !== undefined && value > max) {
          errors.push({ field, error: `Valor máximo: ${max}` });
          return;
        }
      }

      // Validar comprimento para strings
      if (typeof value === "string") {
        if (min !== undefined && value.length < min) {
          errors.push({ field, error: `Mínimo ${min} caracteres` });
          return;
        }

        if (max !== undefined && value.length > max) {
          errors.push({ field, error: `Máximo ${max} caracteres` });
          return;
        }
      }

      // Validar array length
      if (Array.isArray(value)) {
        if (min !== undefined && value.length < min) {
          errors.push({ field, error: `Mínimo ${min} itens` });
          return;
        }

        if (max !== undefined && value.length > max) {
          errors.push({ field, error: `Máximo ${max} itens` });
          return;
        }
      }

      // Validação customizada
      if (custom && !custom(value, data)) {
        errors.push({ field, error: "Validação customizada falhou" });
        return;
      }

      validData[field] = value;
    });

    return {
      isValid: errors.length === 0,
      errors,
      data: validData,
    };
  }

  // Factory method para regras comuns
  static createRule(options = {}) {
    return options;
  }
}

// Exemplo de uso
const validator = new ValidatorWithDestructuring({
  nome: {
    required: true,
    type: "string",
    min: 3,
    max: 50,
  },
  email: {
    required: true,
    type: "string",
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
  },
  idade: {
    required: false,
    type: "number",
    min: 18,
    max: 120,
  },
  tags: {
    required: false,
    type: "array",
    max: 10,
  },
});

const dadosValidacao = {
  nome: "Jo",
  email: "email-invalido",
  idade: 16,
  tags: Array(15).fill("tag"),
};

const resultadoValidacao = validator.validate(dadosValidacao);
console.log("Validação:", resultadoValidacao);
```

## Optional Chaining (?.)

### Encadeamento opcional

```javascript
// 1. Básico do Optional Chaining
const usuario = {
    nome: "João",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo"
    }
};

// Antes (ES5)
const cidadeAntiga = usuario && usuario.endereco && usuario.endereco.cidade;

// Agora (ES2020)
const cidadeNova = usuario?.endereco?.cidade;
console.log(cidadeNova); // "São Paulo"

// 2. Encadeamento opcional com propriedades não existentes
const empresa = {
    nome: "Tech Corp"
};

console.log(empresa?.endereco?.cidade); // undefined (não dá erro)

// 3. Optional Chaining com funções
const calculadora = {
    soma: (a, b) => a + b
};

console.log(calculadora?.soma?.(5, 3)); // 8
console.log(calculadora?.multiplica?.(5, 3)); // undefined

// 4. Optional Chaining com arrays
const dados = {
    usuarios: [
        { nome: "Ana", idade: 25 },
        { nome: "Carlos", idade: 30 }
    ]
};

console.log(dados?.usuarios?.[0]?.nome); // "Ana"
console.log(dados?.usuarios?.[10]?.nome); // undefined

// 5. Combinando com Nullish Coalescing
const config = {
    tema: null,
    idioma: "pt-BR"
};

const tema = config?.tema ?? "claro";
const idioma = config?.idioma ?? "pt-BR";
console.log(tema, idioma); // "claro" "pt-BR"

// 6. Optional Chaining em expressões mais complexas
function obterPropriedade(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

const objetoComplexo = {
    nivel1: {
        nivel2: {
            nivel3: {
                valor: "encontrado"
            }
        }
    }
};

console.log(obterPropriedade(objetoComplexo, 'nivel1.nivel2.nivel3.valor')); // "encontrado"
console.log(obterPropriedade(objetoComplexo, 'nivel1.nivel2.nivel4.valor')); // undefined

// 7. Sistema avançado de Optional Chaining
class OptionalChainingSystem {
    // Safe getter com fallback
    static get(obj, path, defaultValue = undefined) {
        if (!obj || typeof obj !== 'object') {
            return defaultValue;
        }

        const keys = Array.isArray(path) ? path : path.split('.');
        let current = obj;

        for (const key of keys) {
            if (current === null || current === undefined) {
                return defaultValue;
            }

            current = current[key];
        }

        return current === undefined ? defaultValue : current;
    }

    // Safe setter
    static set(obj, path, value) {
        if (!obj || typeof obj !== 'object') {
            return false;
        }

        const keys = Array.isArray(path) ? path : path.split('.');
        let current = obj;

        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];

            if (current[key] === undefined || current[key] === null) {
                current[key] = {};
            }

            current = current[key];

            if (typeof current !== 'object' || current === null) {
                return false;
            }
        }

        const lastKey = keys[keys.length - 1];
        current[lastKey] = value;
        return true;
    }

    // Safe delete
    static delete(obj, path) {
        if (!obj || typeof obj !== 'object') {
            return false;
        }

        const keys = Array.isArray(path) ? path : path.split('.');
        let current = obj;

        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];

            if (!(key in current)) {
                return false;
            }

            current = current[key];

            if (typeof current !== 'object' || current === null) {
                return false;
            }
        }

        const lastKey = keys[keys.length - 1];
        return delete current[lastKey];
    }

    // Safe call
    static call(obj, path, ...args) {
        const func = this.get(obj, path);

        if (typeof func === 'function') {
            return func(...args);
        }

        return undefined;
    }

    // Deep merge com optional chaining
    static deepMerge(target, source, options = {}) {
        const { overwriteArrays = false } = options;

        if (!target || typeof target !== 'object') {
            return source;
        }

        if (!source || typeof source !== 'object') {
            return target;
        }

        const result = { ...target };

        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const sourceValue = source[key];
                const targetValue = target[key];

                if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
                    if (overwriteArrays) {
                        result[key] = sourceValue;
                    } else {
                        result[key] = [...targetValue, ...sourceValue];
                    }
                } else if (typeof sourceValue === 'object' && sourceValue !== null &&
                          typeof targetValue === 'object' && targetValue !== null) {
                    result[key] = this.deepMerge(targetValue, sourceValue, options);
                } else {
                    result[key] = sourceValue;
                }
            }
        }

        return result;
    }

    // Create optional chain proxy
    static createOptionalProxy(obj) {
        return new Proxy(obj, {
            get(target, prop, receiver) {
                if (prop === 'optional') {
                    return new Proxy({}, {
                        get(_, nestedProp) {
                            const value = target[nestedProp];

                            if (value === null || value === undefined) {
                                return this;
                            }

                            if (typeof value === 'object') {
                                return OptionalChainingSystem.createOptionalProxy(value);
                            }

                            return value;
                        }
                    });
                }

                const value = Reflect.get(target, prop, receiver);

                if (value === null || value === undefined) {
                    return undefined;
                }

                if (typeof value === 'object') {
                    return OptionalChainingSystem.createOptionalProxy(value);
                }

                return value;
            }
        });
    }
}

// Exemplos de uso
const sistema = OptionalChainingSystem;

const empresaComplexa = {
    nome: "Tech Corp",
    departamentos: {
        ti: {
            funcionarios: [
                { nome: "Ana", cargo: "Desenvolvedora" },
                { nome: "Carlos", cargo: "Gerente" }
            ],
            orcamento: 100000
        },
        rh: {
            funcionarios: [
                { nome: "Beatriz", cargo: "Recrutadora" }
            ]
        }
    },
    getTotalFuncionarios() {
        let total = 0;
        for (const dept in this.departamentos) {
            total += this.departamentos[dept].funcionarios?.length || 0;
        }
        return total;
    }
};

// Safe get
# NOVAS FUNCIONALIDADES (ES6+) - Continuação

## Optional Chaining (?.) - Continuação


// Safe get com valor padrão
console.log(sistema.get(empresaComplexa, 'departamentos.financeiro.funcionarios', [])); // []
console.log(sistema.get(empresaComplexa, 'departamentos.ti.gerente.nome', 'Não definido')); // "Não definido"

// Safe set
sistema.set(empresaComplexa, 'departamentos.marketing.diretor.nome', 'João');
console.log(empresaComplexa.departamentos.marketing?.diretor?.nome); // "João"

// Safe call
console.log(sistema.call(empresaComplexa, 'getTotalFuncionarios')); // 3

// Deep merge
const novaEmpresa = sistema.deepMerge(empresaComplexa, {
    departamentos: {
        marketing: {
            funcionarios: [{ nome: "Daniela", cargo: "Analista" }]
        },
        ti: {
            orcamento: 150000,
            projetos: ["Sistema ERP", "App Mobile"]
        }
    }
}, { overwriteArrays: false });

console.log(novaEmpresa.departamentos.ti.funcionarios.length); // 2 (não sobrescreveu)
console.log(novaEmpresa.departamentos.ti.orcamento); // 150000

// Optional proxy
const proxyEmpresa = sistema.createOptionalProxy(empresaComplexa);
console.log(proxyEmpresa.departamentos?.ti?.funcionarios?.[0]?.nome); // "Ana"
console.log(proxyEmpresa.departamentos?.financeiro?.gerente?.nome); // undefined (sem erro)

// 8. Optional Chaining para validação de dados
const validarDados = (dados) => {
    const erros = [];

    // Verificar se o usuário tem permissão para acessar o recurso
    if (!dados?.usuario?.permissoes?.includes?.('admin')) {
        erros.push('Permissão de administrador necessária');
    }

    // Verificar se os dados obrigatórios existem
    if (!dados?.produto?.id || !dados?.produto?.nome) {
        erros.push('Produto inválido');
    }

    // Verificar estoque
    const estoque = dados?.produto?.estoque ?? 0;
    const quantidade = dados?.quantidade ?? 1;

    if (estoque < quantidade) {
        erros.push('Estoque insuficiente');
    }

    // Verificar preço
    const preco = dados?.produto?.preco;
    if (preco === undefined || preco === null || preco <= 0) {
        erros.push('Preço inválido');
    }

    return {
        valido: erros.length === 0,
        erros
    };
};

const pedido = {
    usuario: {
        id: 1,
        permissoes: ['user'] // Não tem 'admin'
    },
    produto: {
        id: 123,
        nome: "Notebook",
        estoque: 5,
        preco: 2500
    },
    quantidade: 2
};

console.log(validarDados(pedido));

// 9. Optional Chaining em APIs e fetch
async function buscarDadosUsuario(userId) {
    try {
        const response = await fetch(`/api/usuarios/${userId}`);

        if (!response?.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response?.json?.();

        // Acessar dados com optional chaining
        const nome = data?.usuario?.informacoes?.pessoais?.nome ?? 'Usuário desconhecido';
        const email = data?.usuario?.contato?.email;
        const endereco = data?.usuario?.endereco?.principal;

        return {
            nome,
            email: email ?? 'Não informado',
            cidade: endereco?.cidade ?? 'Não informada',
            sucesso: true
        };
    } catch (error) {
        console.error('Erro:', error?.message ?? 'Erro desconhecido');
        return { sucesso: false };
    }
}

// 10. Sistema de cache com Optional Chaining
class CacheSystem {
    constructor() {
        this.cache = new Map();
        this.defaultTTL = 5 * 60 * 1000; // 5 minutos
    }

    set(chave, valor, ttl = this.defaultTTL) {
        const expiracao = Date.now() + ttl;
        this.cache.set(chave, { valor, expiracao });
    }

    get(chave) {
        const item = this.cache?.get?.(chave);

        if (!item) {
            return null;
        }

        // Verificar se expirou
        if (Date.now() > item?.expiracao) {
            this.cache?.delete?.(chave);
            return null;
        }

        return item?.valor;
    }

    // Busca encadeada com cache
    async getCascata(chave, buscarFn) {
        // Tentar do cache primeiro
        const cached = this.get(chave);
        if (cached !== null && cached !== undefined) {
            return cached;
        }

        // Se não tem no cache, buscar
        try {
            const resultado = await buscarFn?.();

            if (resultado !== undefined && resultado !== null) {
                this.set(chave, resultado);
            }

            return resultado;
        } catch (error) {
            console.error(`Erro ao buscar ${chave}:`, error?.message);
            return null;
        }
    }
}

// Exemplo de uso do cache
const cache = new CacheSystem();

// Simulação de API
async function buscarDadosDaAPI(endpoint) {
    console.log(`Buscando ${endpoint} da API...`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay

    const mockData = {
        '/usuarios/1': { nome: 'João', idade: 30 },
        '/produtos/123': { nome: 'Notebook', preco: 2500 }
    };

    return mockData[endpoint] ?? null;
}

// Uso com Optional Chaining
async function exemploCache() {
    // Primeira vez - busca da API
    const usuario1 = await cache.getCascata('/usuarios/1',
        () => buscarDadosDaAPI('/usuarios/1'));
    console.log('Usuário 1 (API):', usuario1?.nome);

    // Segunda vez - pega do cache
    const usuario2 = await cache.getCascata('/usuarios/1',
        () => buscarDadosDaAPI('/usuarios/1'));
    console.log('Usuário 2 (Cache):', usuario2?.nome);

    // Dados que não existem
    const inexistente = await cache.getCascata('/inexistente',
        () => buscarDadosDaAPI('/inexistente'));
    console.log('Inexistente:', inexistente ?? 'null');
}

exemploCache();

// 11. Optional Chaining para configurações
class ConfigManager {
    constructor(configuracoes = {}) {
        this.config = configuracoes;
        this.observers = new Map();
    }

    get(caminho, valorPadrao = undefined) {
        const partes = caminho.split('.');
        let atual = this.config;

        for (const parte of partes) {
            if (atual === null || atual === undefined) {
                return valorPadrao;
            }

            atual = atual[parte];
        }

        return atual ?? valorPadrao;
    }

    set(caminho, valor) {
        const partes = caminho.split('.');
        let atual = this.config;

        for (let i = 0; i < partes.length - 1; i++) {
            const parte = partes[i];

            if (atual[parte] === undefined || atual[parte] === null) {
                atual[parte] = {};
            }

            atual = atual[parte];

            if (typeof atual !== 'object' || atual === null) {
                throw new Error(`Caminho inválido: ${partes.slice(0, i + 1).join('.')}`);
            }
        }

        const ultimaParte = partes[partes.length - 1];
        const valorAntigo = atual[ultimaParte];
        atual[ultimaParte] = valor;

        // Notificar observadores
        this.notificarObservers(caminho, valorAntigo, valor);
    }

    observar(caminho, callback) {
        if (!this.observers.has(caminho)) {
            this.observers.set(caminho, new Set());
        }

        this.observers.get(caminho).add(callback);

        // Retornar função para remover observer
        return () => {
            this.observers.get(caminho)?.delete?.(callback);
        };
    }

    notificarObservers(caminho, valorAntigo, valorNovo) {
        const observers = this.observers.get(caminho);
        observers?.forEach?.(callback => {
            try {
                callback(valorAntigo, valorNovo, caminho);
            } catch (error) {
                console.error(`Erro no observer de ${caminho}:`, error);
            }
        });
    }

    // Carregar configurações com fallback
    carregar(configs = {}) {
        const mergeDeep = (alvo, fonte) => {
            for (const chave in fonte) {
                if (fonte.hasOwnProperty(chave)) {
                    if (typeof fonte[chave] === 'object' && fonte[chave] !== null &&
                        typeof alvo[chave] === 'object' && alvo[chave] !== null) {
                        mergeDeep(alvo[chave], fonte[chave]);
                    } else {
                        alvo[chave] = fonte[chave];
                    }
                }
            }
        };

        mergeDeep(this.config, configs);
    }
}

// Exemplo de uso
const configManager = new ConfigManager({
    app: {
        nome: "Minha App",
        versao: "1.0.0"
    },
    api: {
        url: "https://api.exemplo.com",
        timeout: 30000
    },
    recursos: {
        cache: {
            habilitado: true,
            ttl: 300000
        }
    }
});

// Acessar configurações com optional chaining
console.log(configManager.get('app.nome')); // "Minha App"
console.log(configManager.get('api.retry.attempts', 3)); // 3 (valor padrão)
console.log(configManager.get('recursos.cache.habilitado')); // true

// Observar mudanças
const removerObserver = configManager.observar('api.url', (antigo, novo) => {
    console.log(`API URL alterada: ${antigo} → ${novo}`);
});

// Alterar configuração
configManager.set('api.url', 'https://nova-api.exemplo.com');

// Carregar mais configurações
configManager.carregar({
    api: {
        chave: "abc123"
    },
    debug: {
        habilitado: true
    }
});

// 12. Optional Chaining em validação de formulários
class FormValidator {
    constructor(regras) {
        this.regras = regras;
    }

    validar(formData) {
        const erros = {};
        const dadosValidos = {};

        Object.entries(this.regras).forEach(([campo, regra]) => {
            const valor = this.obterValor(formData, campo);
            const validacao = this.validarCampo(valor, regra, formData);

            if (validacao.valido) {
                dadosValidos[campo] = valor;
            } else {
                erros[campo] = validacao.erro;
            }
        });

        return {
            valido: Object.keys(erros).length === 0,
            erros,
            dados: dadosValidos
        };
    }

    obterValor(obj, caminho) {
        return caminho.split('.').reduce((atual, parte) => {
            return atual?.[parte];
        }, obj);
    }

    validarCampo(valor, regra, contexto) {
        // Required
        if (regra.required && (valor === undefined || valor === null || valor === '')) {
            return { valido: false, erro: regra.mensagem?.required ?? 'Campo obrigatório' };
        }

        // Se não é required e está vazio, é válido
        if (!regra.required && (valor === undefined || valor === null || valor === '')) {
            return { valido: true };
        }

        // Tipo
        if (regra.tipo) {
            const tipoValido = this.validarTipo(valor, regra.tipo);
            if (!tipoValido) {
                return { valido: false, erro: regra.mensagem?.tipo ?? 'Tipo inválido' };
            }
        }

        // Pattern (regex)
        if (regra.pattern && !new RegExp(regra.pattern).test(String(valor))) {
            return { valido: false, erro: regra.mensagem?.pattern ?? 'Formato inválido' };
        }

        // Validação customizada
        if (regra.validar && !regra.validar(valor, contexto)) {
            return { valido: false, erro: regra.mensagem?.validar ?? 'Validação falhou' };
        }

        // Min/Max para números
        if (typeof valor === 'number') {
            if (regra.min !== undefined && valor < regra.min) {
                return { valido: false, erro: regra.mensagem?.min ?? `Mínimo: ${regra.min}` };
            }

            if (regra.max !== undefined && valor > regra.max) {
                return { valido: false, erro: regra.mensagem?.max ?? `Máximo: ${regra.max}` };
            }
        }

        // Length para strings
        if (typeof valor === 'string') {
            if (regra.minLength !== undefined && valor.length < regra.minLength) {
                return {
                    valido: false,
                    erro: regra.mensagem?.minLength ?? `Mínimo ${regra.minLength} caracteres`
                };
            }

            if (regra.maxLength !== undefined && valor.length > regra.maxLength) {
                return {
                    valido: false,
                    erro: regra.mensagem?.maxLength ?? `Máximo ${regra.maxLength} caracteres`
                };
            }
        }

        return { valido: true };
    }

    validarTipo(valor, tipo) {
        switch (tipo) {
            case 'string':
                return typeof valor === 'string';
            case 'number':
                return typeof valor === 'number' && !isNaN(valor);
            case 'boolean':
                return typeof valor === 'boolean';
            case 'array':
                return Array.isArray(valor);
            case 'object':
                return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
            case 'email':
                return typeof valor === 'string' &&
                       /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
            case 'url':
                try {
                    new URL(valor);
                    return true;
                } catch {
                    return false;
                }
            default:
                return true;
        }
    }
}

// Exemplo de uso
const validator = new FormValidator({
    'usuario.nome': {
        required: true,
        tipo: 'string',
        minLength: 3,
        maxLength: 50,
        mensagem: {
            required: 'Nome é obrigatório',
            minLength: 'Nome deve ter pelo menos 3 caracteres'
        }
    },
    'usuario.email': {
        required: true,
        tipo: 'email',
        mensagem: {
            required: 'Email é obrigatório',
            tipo: 'Email inválido'
        }
    },
    'usuario.idade': {
        required: false,
        tipo: 'number',
        min: 18,
        max: 120,
        mensagem: {
            min: 'Idade mínima: 18 anos'
        }
    },
    'endereco.cep': {
        required: true,
        pattern: '^\\d{5}-\\d{3}$',
        mensagem: {
            pattern: 'CEP inválido (formato: 12345-678)'
        }
    },
    'senha': {
        required: true,
        validar: (valor, contexto) => {
            const confirmacao = contexto?.confirmacaoSenha;
            return valor === confirmacao;
        },
        mensagem: {
            validar: 'Senhas não conferem'
        }
    }
});

const formulario = {
    usuario: {
        nome: 'Jo',
        email: 'email-invalido',
        idade: 16
    },
    endereco: {
        cep: '12345'
    },
    senha: '123456',
    confirmacaoSenha: '1234567'
};

const resultado = validator.validar(formulario);
console.log('Validação do formulário:', resultado);
```

## Nullish Coalescing (??)

```javascript
// 1. Básico do Nullish Coalescing
// Nullish = null ou undefined (não inclui 0, '', false)

const valorA = null;
const valorB = undefined;
const valorC = 0;
const valorD = "";
const valorE = false;

// Operador OR (||) - considera falsy values
console.log(valorA || "padrão"); // 'padrão'
console.log(valorB || "padrão"); // 'padrão'
console.log(valorC || "padrão"); // 'padrão' (problema: 0 é um valor válido!)
console.log(valorD || "padrão"); // 'padrão' (problema: '' é um valor válido!)
console.log(valorE || "padrão"); // 'padrão' (problema: false é um valor válido!)

// Nullish Coalescing (??) - considera apenas null ou undefined
console.log(valorA ?? "padrão"); // 'padrão'
console.log(valorB ?? "padrão"); // 'padrão'
console.log(valorC ?? "padrão"); // 0 (mantém o 0!)
console.log(valorD ?? "padrão"); // '' (mantém a string vazia!)
console.log(valorE ?? "padrão"); // false (mantém o false!)

// 2. Exemplos práticos
// Configurações de usuário
const configuracoesUsuario = {
  tema: null, // Usuário não escolheu tema
  notificacoes: false, // Usuário desativou notificações
  idioma: "", // Usuário não selecionou idioma
  volume: 0, // Volume no mínimo
  autoplay: undefined,
};

// Com OR (problema!)
const temaOR = configuracoesUsuario.tema || "claro"; // 'claro' (correto)
const notificacoesOR = configuracoesUsuario.notificacoes || true; // true (ERRADO! deveria ser false)
const idiomaOR = configuracoesUsuario.idioma || "pt-BR"; // 'pt-BR' (ERRADO! deveria ser '')
const volumeOR = configuracoesUsuario.volume || 50; // 50 (ERRADO! deveria ser 0)

// Com Nullish Coalescing (correto!)
const temaNC = configuracoesUsuario.tema ?? "claro"; // 'claro'
const notificacoesNC = configuracoesUsuario.notificacoes ?? true; // false (CORRETO!)
const idiomaNC = configuracoesUsuario.idioma ?? "pt-BR"; // '' (CORRETO!)
const volumeNC = configuracoesUsuario.volume ?? 50; // 0 (CORRETO!)
const autoplayNC = configuracoesUsuario.autoplay ?? false; // false

console.log({
  temaNC,
  notificacoesNC,
  idiomaNC,
  volumeNC,
  autoplayNC,
});

// 3. Combinando com Optional Chaining
const empresa = {
  nome: "Tech Corp",
  config: {
    tempoLimite: 0, // 0 é um valor intencional
    retentativas: null, // Não definido, usar padrão
    cache: undefined, // Não definido, usar padrão
  },
};

const tempoLimite = empresa?.config?.tempoLimite ?? 30000; // 0 (não usa o padrão)
const retentativas = empresa?.config?.retentativas ?? 3; // 3 (usa padrão)
const cache = empresa?.config?.cache ?? true; // true (usa padrão)
const modoDebug = empresa?.config?.modoDebug ?? false; // false (usa padrão)

console.log({ tempoLimite, retentativas, cache, modoDebug });

// 4. Em parâmetros de função
function processarPedido(pedido) {
  // Valores padrão sensíveis
  const itens = pedido?.itens ?? [];
  const quantidade = pedido?.quantidade ?? 1;
  const prioridade = pedido?.prioridade ?? "normal"; // 'baixa', 'normal', 'alta'
  const desconto = pedido?.desconto ?? 0; // 0 é um valor válido!

  console.log(`Processando ${quantidade} item(s) com prioridade ${prioridade}`);

  return {
    itens,
    quantidade,
    prioridade,
    desconto,
    total: calcularTotal(itens, quantidade, desconto),
  };
}

function calcularTotal(itens, quantidade, desconto) {
  const subtotal = itens.reduce((sum, item) => sum + (item?.preco ?? 0), 0);
  return subtotal * quantidade * (1 - desconto / 100);
}

const pedido1 = {
  itens: [{ nome: "Produto A", preco: 100 }],
  quantidade: 2,
  desconto: 10, // 10% de desconto
};

const pedido2 = {
  itens: [{ nome: "Produto B", preco: 50 }],
  quantidade: 0, // Quantidade 0 é válida para orçamento
  prioridade: "baixa",
};

const pedido3 = {}; // Pedido vazio

console.log(processarPedido(pedido1));
console.log(processarPedido(pedido2));
console.log(processarPedido(pedido3));

// 5. Nullish Coalescing em assignments
let config = {};

// Definir apenas se for null/undefined
config.tema = config.tema ?? "escuro";
config.idioma = config.idioma ?? "pt-BR";
config.notificacoes = config.notificacoes ?? true;

console.log(config);

// 6. Sistema avançado de valores padrão
class DefaultValueSystem {
  static defaults = new Map();

  // Registrar valores padrão globais
  static registerDefault(key, value, options = {}) {
    this.defaults.set(key, {
      value,
      validate: options.validate || (() => true),
      priority: options.priority || 0,
    });
  }

  // Obter valor com fallback hierárquico
  static getWithFallback(value, fallbacks = []) {
    // Se o valor não é nullish, retorna ele
    if (value !== null && value !== undefined) {
      return value;
    }

    // Tentar cada fallback na ordem
    for (const fallback of fallbacks) {
      if (fallback !== null && fallback !== undefined) {
        return fallback;
      }
    }

    return undefined;
  }

  // Sistema de configuração hierárquica
  static hierarchicalConfig(userConfig, appConfig, defaults) {
    const result = {};
    const allKeys = new Set([
      ...Object.keys(userConfig || {}),
      ...Object.keys(appConfig || {}),
      ...Object.keys(defaults || {}),
    ]);

    for (const key of allKeys) {
      const userValue = userConfig?.[key];
      const appValue = appConfig?.[key];
      const defaultValue = defaults?.[key];

      // Hierarquia: user > app > default
      result[key] = userValue ?? appValue ?? defaultValue;
    }

    return result;
  }

  // Validação com fallback
  static validateWithFallback(value, validators, fallbackValue) {
    // Se for nullish, usar fallback
    if (value === null || value === undefined) {
      return fallbackValue;
    }

    // Validar
    for (const validator of validators) {
      if (!validator(value)) {
        return fallbackValue;
      }
    }

    return value;
  }
}

// Exemplos de uso
DefaultValueSystem.registerDefault("api.timeout", 30000, {
  validate: (val) => typeof val === "number" && val > 0,
  priority: 1,
});

DefaultValueSystem.registerDefault("retry.attempts", 3, {
  validate: (val) => Number.isInteger(val) && val >= 0,
  priority: 2,
});

// Hierarchical config
const appDefaults = {
  theme: "light",
  language: "en",
  autoSave: true,
  fontSize: 14,
};

const appConfig = {
  theme: "dark",
  fontSize: 16,
  notifications: false,
};

const userConfig = {
  theme: null, // Usuário não escolheu
  fontSize: 0, // Usuário quer fonte no mínimo
  autoSave: false,
};

const finalConfig = DefaultValueSystem.hierarchicalConfig(
  userConfig,
  appConfig,
  appDefaults
);

console.log("Config final:", finalConfig);

// 7. Nullish coalescing com funções
function criarPerfil(dados) {
  // Usar funções como fallback
  const nome = dados?.nome ?? gerarNomeAnonimo();
  const email = dados?.email ?? `usuario_${Date.now()}@exemplo.com`;
  const avatar = dados?.avatar ?? obterAvatarPadrao();
  const dataCriacao = dados?.dataCriacao ?? new Date();

  // Fallback condicional
  const permissoes = dados?.permissoes ?? (dados?.admin ? ["admin"] : ["user"]);

  return {
    nome,
    email,
    avatar,
    dataCriacao,
    permissoes,
    ativo: dados?.ativo ?? true,
  };
}

function gerarNomeAnonimo() {
  return `Anônimo_${Math.floor(Math.random() * 10000)}`;
}

function obterAvatarPadrao() {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`;
}

console.log(criarPerfil({}));
console.log(criarPerfil({ nome: "João", admin: true }));

// 8. Sistema de feature flags
class FeatureFlags {
  constructor() {
    this.flags = new Map();
    this.environments = ["dev", "staging", "production"];
    this.currentEnv = "production";
  }

  // Definir flag
  setFlag(name, config) {
    this.flags.set(name, config);
  }

  // Verificar se flag está ativa
  isEnabled(flagName, userId = null) {
    const flag = this.flags.get(flagName);

    if (!flag) {
      return false;
    }

    // 1. Verificar ambiente
    const envEnabled =
      flag.environments?.[this.currentEnv] ??
      flag.default?.[this.currentEnv] ??
      false;

    if (!envEnabled) {
      return false;
    }

    // 2. Verificar porcentagem de rollout
    if (flag.rolloutPercentage !== undefined && userId) {
      const userHash = this.hashUserId(userId);
      const percentage = userHash % 100;
      if (percentage >= flag.rolloutPercentage) {
        return false;
      }
    }

    // 3. Verificar lista de usuários
    if (flag.userIds && userId && !flag.userIds.includes(userId)) {
      return false;
    }

    // 4. Verificar grupos
    if (flag.groups && userId) {
      const userGroups = this.getUserGroups(userId);
      if (!flag.groups.some((group) => userGroups.includes(group))) {
        return false;
      }
    }

    return true;
  }

  // Obter valor da flag com fallback
  getValue(flagName, defaultValue = null, userId = null) {
    if (!this.isEnabled(flagName, userId)) {
      return defaultValue;
    }

    const flag = this.flags.get(flagName);
    return flag?.value ?? defaultValue;
  }

  // Helper methods
  hashUserId(userId) {
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      hash = (hash << 5) - hash + userId.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  getUserGroups(userId) {
    // Simulação - em produção viria de um serviço
    const groups = {
      user1: ["beta", "early-access"],
      user2: ["vip"],
      admin: ["admin", "beta", "vip"],
    };
    return groups[userId] ?? [];
  }
}

// Exemplo de uso
const featureFlags = new FeatureFlags();
featureFlags.currentEnv = "production";

// Definir flags
featureFlags.setFlag("new-ui", {
  environments: {
    dev: true,
    staging: true,
    production: false,
  },
  rolloutPercentage: 50, // 50% dos usuários
  value: "v2",
});

featureFlags.setFlag("dark-mode", {
  environments: {
    dev: true,
    staging: true,
    production: true,
  },
  userIds: ["user1", "admin"], // Usuários específicos
  value: true,
});

featureFlags.setFlag("premium-features", {
  environments: {
    dev: true,
    staging: true,
    production: true,
  },
  groups: ["vip", "admin"], // Grupos específicos
  value: { maxStorage: 100, premiumSupport: true },
});

// Verificar flags
console.log("new-ui para user1:", featureFlags.isEnabled("new-ui", "user1"));
console.log(
  "dark-mode para user1:",
  featureFlags.isEnabled("dark-mode", "user1")
);
console.log(
  "premium-features para user2:",
  featureFlags.isEnabled("premium-features", "user2")
);

console.log("Valor de new-ui:", featureFlags.getValue("new-ui", "v1", "user1"));
console.log(
  "Valor de premium-features:",
  featureFlags.getValue("premium-features", {}, "admin")
);

// 9. Sistema de tradução com fallback
class I18nSystem {
  constructor(defaultLang = "pt-BR") {
    this.translations = new Map();
    this.currentLang = defaultLang;
    this.fallbackLang = "en";
  }

  addTranslations(lang, translations) {
    if (!this.translations.has(lang)) {
      this.translations.set(lang, new Map());
    }

    const langMap = this.translations.get(lang);
    Object.entries(translations).forEach(([key, value]) => {
      langMap.set(key, value);
    });
  }

  t(key, params = {}, lang = this.currentLang) {
    // Tentar idioma atual
    let translation = this.translations.get(lang)?.get(key);

    // Se não encontrou, tentar fallback
    if (translation === undefined || translation === null) {
      translation = this.translations.get(this.fallbackLang)?.get(key);
    }

    // Se ainda não encontrou, retornar a chave
    if (translation === undefined || translation === null) {
      console.warn(`Tradução não encontrada: ${key}`);
      return key;
    }

    // Substituir parâmetros
    if (typeof translation === "string") {
      return translation.replace(/\{(\w+)\}/g, (match, paramName) => {
        return params[paramName] ?? match;
      });
    }

    // Se for uma função, executar
    if (typeof translation === "function") {
      return translation(params);
    }

    return translation;
  }

  // Pluralização
  plural(count, forms, lang = this.currentLang) {
    // Regras de pluralização (simplificadas)
    const pluralRules = {
      en: (count) => (count === 1 ? 0 : 1),
      "pt-BR": (count) => (count === 1 ? 0 : 1),
      ru: (count) => {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastDigit === 1 && lastTwoDigits !== 11) return 0;
        if (
          lastDigit >= 2 &&
          lastDigit <= 4 &&
          !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
        )
          return 1;
        return 2;
      },
    };

    const rule = pluralRules[lang] || pluralRules["en"];
    const index = rule(count);

    return forms[index] ?? forms[0] ?? "";
  }
}

// Exemplo de uso
const i18n = new I18nSystem("pt-BR");

// Adicionar traduções
i18n.addTranslations("pt-BR", {
  welcome: "Bem-vindo, {name}!",
  items_count: (params) => {
    const count = params.count ?? 0;
    return i18n.plural(count, [`${count} item`, `${count} itens`]);
  },
  cart_total: "Total: R$ {total}",
  login_required: "Por favor, faça login para continuar",
});

i18n.addTranslations("en", {
  welcome: "Welcome, {name}!",
  items_count: (params) => {
    const count = params.count ?? 0;
    return i18n.plural(count, [`${count} item`, `${count} items`], "en");
  },
  cart_total: "Total: ${total}",
  login_required: "Please login to continue",
});

// Usar traduções
console.log(i18n.t("welcome", { name: "João" }));
console.log(i18n.t("items_count", { count: 1 }));
console.log(i18n.t("items_count", { count: 5 }));
console.log(i18n.t("cart_total", { total: 99.99 }));

// Mudar idioma
i18n.currentLang = "en";
console.log(i18n.t("welcome", { name: "John" }));

// 10. Sistema de cache com fallback
class ResilientCache {
  constructor(options = {}) {
    this.cache = new Map();
    this.ttl = options.ttl ?? 5 * 60 * 1000; // 5 minutos
    this.maxSize = options.maxSize ?? 100;
    this.fallbackSources = options.fallbackSources ?? [];
    this.retryAttempts = options.retryAttempts ?? 3;
    this.retryDelay = options.retryDelay ?? 1000;
  }

  async get(key, fetcher) {
    // 1. Tentar cache
    const cached = this.getFromCache(key);
    if (cached !== null) {
      return cached;
    }

    // 2. Tentar fetcher principal
    try {
      const value = await this.withRetry(() => fetcher(key));
      this.set(key, value);
      return value;
    } catch (error) {
      console.warn(`Falha ao buscar ${key}:`, error.message);
    }

    // 3. Tentar fallback sources
    for (const fallback of this.fallbackSources) {
      try {
        const value = await fallback(key);
        if (value !== null && value !== undefined) {
          this.set(key, value);
          return value;
        }
      } catch (error) {
        console.warn(`Fallback falhou para ${key}:`, error.message);
      }
    }

    // 4. Tentar cache stale (se configurado)
    const stale = this.getStale(key);
    if (stale !== null) {
      console.log(`Usando dados stale para ${key}`);
      return stale;
    }

    throw new Error(`Não foi possível obter ${key}`);
  }

  getFromCache(key) {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    // Verificar TTL
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  getStale(key) {
    const item = this.cache.get(key);
    return item?.value ?? null;
  }

  set(key, value, ttl = this.ttl) {
    // Limitar tamanho do cache
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      value,
      expiry: Date.now() + ttl,
      timestamp: Date.now(),
    });
  }

  async withRetry(fn, attempts = this.retryAttempts) {
    for (let i = 0; i < attempts; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === attempts - 1) {
          throw error;
        }

        await new Promise((resolve) =>
          setTimeout(resolve, this.retryDelay * Math.pow(2, i))
        );
      }
    }
  }

  clear() {
    this.cache.clear();
  }

  invalidate(key) {
    this.cache.delete(key);
  }

  stats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: this.hits / (this.hits + this.misses) || 0,
    };
  }
}

// Exemplo de uso
const cache = new ResilientCache({
  ttl: 60000, // 1 minuto
  maxSize: 50,
  retryAttempts: 2,
});

// Adicionar fallback
cache.fallbackSources.push(async (key) => {
  // Fallback para dados de usuário
  if (key.startsWith("user:")) {
    return {
      id: key.split(":")[1],
      name: "Usuário Fallback",
      email: "fallback@exemplo.com",
    };
  }

  // Fallback para configurações
  if (key.startsWith("config:")) {
    const defaults = {
      "config:theme": "light",
      "config:language": "pt-BR",
      "config:notifications": true,
    };
    return defaults[key] ?? null;
  }

  return null;
});

// Simular fetcher
async function fetchUserData(userId) {
  console.log(`Buscando usuário ${userId} da API...`);

  // Simular falha 50% das vezes
  if (Math.random() > 0.5) {
    throw new Error("API falhou");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: userId,
    name: `Usuário ${userId}`,
    email: `user${userId}@exemplo.com`,
    lastLogin: new Date(),
  };
}

// Testar
async function testCache() {
  try {
    // Primeira tentativa (pode falhar)
    const user1 = await cache.get("user:123", () => fetchUserData("123"));
    console.log("Usuário 1:", user1.name);

    // Segunda tentativa (usa cache se primeira foi bem sucedida)
    const user1Cached = await cache.get("user:123", () => fetchUserData("123"));
    console.log("Usuário 1 (cache):", user1Cached.name);

    // Tentativa que falha e usa fallback
    const user2 = await cache.get("user:456", () => fetchUserData("456"));
    console.log("Usuário 2:", user2.name);

    // Configuração com fallback
    const theme = await cache.get("config:theme", async () => {
      throw new Error("Config service down");
    });
    console.log("Tema:", theme);
  } catch (error) {
    console.error("Erro:", error.message);
  }
}

testCache();
```

## Optional Catch Binding

```javascript
// 1. Básico do Optional Catch Binding
// Antes do ES2019
try {
  // código que pode lançar erro
} catch (error) {
  console.error("Ocorreu um erro:", error);
  // Mas às vezes não usamos o parâmetro error
}

// Agora (ES2019+)
try {
  // código que pode lançar erro
} catch {
  // Não precisamos declarar o parâmetro se não formos usá-lo
  console.error("Ocorreu um erro");
  // Mais limpo quando não precisamos do objeto de erro
}

// 2. Quando usar
// Quando você sabe que pode ocorrer um erro, mas não precisa dos detalhes
function lerConfiguracao() {
  try {
    const config = localStorage.getItem("config");
    return JSON.parse(config) ?? {};
  } catch {
    // Não nos importamos com o erro específico
    // Apenas retornamos configuração padrão
    return {};
  }
}

// 3. Exemplos práticos
// a) Fallback para funções que podem falhar
function obterPreferenciasUsuario() {
  try {
    // Tenta obter do localStorage
    const preferencias = JSON.parse(localStorage.getItem("preferencias"));

    // Validação básica
    if (preferencias && typeof preferencias === "object") {
      return preferencias;
    }
    throw new Error("Preferências inválidas");
  } catch {
    // Retorna preferências padrão
    return {
      tema: "claro",
      idioma: "pt-BR",
      notificacoes: true,
    };
  }
}

// b) Ignorar erros em operações não críticas
async function carregarRecursosNaoCriticos() {
  const recursos = [];

  // Tenta carregar analytics
  try {
    await carregarScript("https://analytics.exemplo.com/script.js");
    recursos.push("analytics");
  } catch {
    // Não é crítico, podemos continuar
    console.log("Analytics não carregado (não crítico)");
  }

  // Tenta carregar widget
  try {
    await carregarScript("https://widget.exemplo.com/widget.js");
    recursos.push("widget");
  } catch {
    console.log("Widget não carregado (não crítico)");
  }

  return recursos;
}

async function carregarScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// c) Limpeza que deve acontecer mesmo com erro
function processarDadosComLimpeza(dados) {
  let recursosAlocados = [];

  try {
    // Alocar recursos
    const recurso1 = alocarRecurso();
    recursosAlocados.push(recurso1);

    const recurso2 = alocarRecurso();
    recursosAlocados.push(recurso2);

    // Processar (pode lançar erro)
    const resultado = processar(dados);

    return resultado;
  } catch {
    // Ainda precisamos liberar recursos
    console.log("Erro no processamento");
    return null;
  } finally {
    // Sempre liberar recursos
    recursosAlocados.forEach(liberarRecurso);
  }
}

function alocarRecurso() {
  return { id: Math.random(), tipo: "temp" };
}

function liberarRecurso(recurso) {
  console.log(`Liberando recurso ${recurso.id}`);
}

function processar(dados) {
  if (Math.random() > 0.5) {
    throw new Error("Erro aleatório no processamento");
  }
  return { sucesso: true };
}

// 4. Sistema avançado de tratamento de erros
class ErrorHandler {
  constructor(options = {}) {
    this.options = {
      logErrors: options.logErrors ?? true,
      rethrowCritical: options.rethrowCritical ?? true,
      defaultFallback: options.defaultFallback ?? null,
      errorTransform: options.errorTransform ?? ((err) => err),
    };

    this.errorTypes = new Map();
    this.registerDefaultErrorTypes();
  }

  registerDefaultErrorTypes() {
    // Erros de rede
    this.registerErrorType("NetworkError", {
      is: (err) => err.name === "TypeError" && err.message.includes("fetch"),
      fallback: () => ({ status: "offline", retry: true }),
      critical: false,
    });

    // Erros de parse JSON
    this.registerErrorType("JSONParseError", {
      is: (err) => err instanceof SyntaxError,
      fallback: () => null,
      critical: false,
    });

    // Erros de validação
    this.registerErrorType("ValidationError", {
      is: (err) => err.name === "ValidationError",
      fallback: (err) => ({ valid: false, errors: err.errors }),
      critical: false,
    });

    // Erros críticos
    this.registerErrorType("CriticalError", {
      is: (err) => err.name === "CriticalError",
      fallback: () => {
        throw err;
      }, // Re-lança
      critical: true,
    });
  }

  registerErrorType(name, handler) {
    this.errorTypes.set(name, handler);
  }

  async safeExecute(fn, context = {}) {
    try {
      return await fn();
    } catch (error) {
      const transformedError = this.options.errorTransform(error);

      // Log se configurado
      if (this.options.logErrors) {
        this.logError(transformedError, context);
      }

      // Encontrar handler para este tipo de erro
      for (const [_, handler] of this.errorTypes) {
        if (handler.is(transformedError)) {
          if (handler.critical && this.options.rethrowCritical) {
            throw transformedError;
          }
          return handler.fallback(transformedError, context);
        }
      }

      // Handler padrão
      return this.options.defaultFallback;
    }
  }

  logError(error, context) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
      context,
    };

    // Log no console
    console.error("Erro capturado:", logEntry);

    // Aqui poderia enviar para um serviço de logging
    // this.sendToLogService(logEntry);
  }

  // Métodos utilitários
  static retry(fn, maxAttempts = 3, delay = 1000) {
    return async (...args) => {
      let lastError;

      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          return await fn(...args);
        } catch (error) {
          lastError = error;

          if (attempt === maxAttempts) {
            break;
          }

          // Esperar antes de tentar novamente
          await new Promise((resolve) => setTimeout(resolve, delay * attempt));

          console.log(`Tentativa ${attempt} falhou, tentando novamente...`);
        }
      }

      throw lastError;
    };
  }

  static timeout(fn, timeoutMs, timeoutError = new Error("Timeout")) {
    return async (...args) => {
      return Promise.race([
        fn(...args),
        new Promise((_, reject) =>
          setTimeout(() => reject(timeoutError), timeoutMs)
        ),
      ]);
    };
  }

  static fallback(fn, fallbackFn) {
    return async (...args) => {
      try {
        return await fn(...args);
      } catch {
        return await fallbackFn(...args);
      }
    };
  }
}

// Exemplo de uso
const errorHandler = new ErrorHandler({
  logErrors: true,
  defaultFallback: { error: "Operação falhou" },
});

// Registrar tipo de erro customizado
errorHandler.registerErrorType("APILimitError", {
  is: (err) => err.message && err.message.includes("API limit"),
  fallback: (err) => ({
    message: "Limite de API atingido",
    retryAfter: err.retryAfter || 60,
    useCache: true,
  }),
  critical: false,
});

// Uso com safeExecute
async function buscarDadosExternos() {
  return errorHandler.safeExecute(
    async () => {
      // Simular erro aleatório
      if (Math.random() > 0.7) {
        throw new Error("API limit exceeded");
      }

      if (Math.random() > 0.9) {
        throw new SyntaxError("Invalid JSON");
      }

      // Simular sucesso
      return { dados: [1, 2, 3], status: "success" };
    },
    { operation: "buscarDadosExternos" }
  );
}

// Testar
async function testErrorHandler() {
  const resultados = [];

  for (let i = 0; i < 5; i++) {
    const resultado = await buscarDadosExternos();
    resultados.push(resultado);
  }

  console.log("Resultados:", resultados);
}

testErrorHandler();

// 5. Sistema de circuit breaker
class CircuitBreaker {
  constructor(options = {}) {
    this.state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN
    this.failureThreshold = options.failureThreshold ?? 5;
    this.resetTimeout = options.resetTimeout ?? 60000;
    this.successThreshold = options.successThreshold ?? 3;

    this.failureCount = 0;
    this.successCount = 0;
    this.nextAttempt = 0;

    this.stats = {
      calls: 0,
      failures: 0,
      successes: 0,
      rejections: 0,
    };
  }

  async execute(fn, ...args) {
    this.stats.calls++;

    // Circuito aberto - rejeitar imediatamente
    if (this.state === "OPEN") {
      if (Date.now() < this.nextAttempt) {
        this.stats.rejections++;
        throw new Error("Circuit breaker está aberto");
      }

      // Tempo para tentar novamente passou
      this.state = "HALF_OPEN";
    }

    try {
      const result = await fn(...args);

      // Sucesso
      this.onSuccess();
      this.stats.successes++;

      return result;
    } catch (error) {
      // Falha
      this.onFailure();
      this.stats.failures++;

      throw error;
    }
  }

  onSuccess() {
    if (this.state === "HALF_OPEN") {
      this.successCount++;

      if (this.successCount >= this.successThreshold) {
        this.reset();
      }
    } else {
      // Reset contador de falhas em estado CLOSED
      this.failureCount = 0;
    }
  }

  onFailure() {
    if (this.state === "HALF_OPEN") {
      // Falha em HALF_OPEN, voltar para OPEN
      this.state = "OPEN";
      this.nextAttempt = Date.now() + this.resetTimeout;
      this.successCount = 0;
      return;
    }

    this.failureCount++;

    if (this.failureCount >= this.failureThreshold) {
      this.state = "OPEN";
      this.nextAttempt = Date.now() + this.resetTimeout;
    }
  }

  reset() {
    this.state = "CLOSED";
    this.failureCount = 0;
    this.successCount = 0;
    this.nextAttempt = 0;
  }

  getStats() {
    return {
      ...this.stats,
      state: this.state,
      failureCount: this.failureCount,
      successCount: this.successCount,
    };
  }
}

// Exemplo de uso
const circuitBreaker = new CircuitBreaker({
  failureThreshold: 3,
  resetTimeout: 10000,
  successThreshold: 2,
});

// Função que simula chamada de API
async function callAPI(endpoint) {
  console.log(`Chamando ${endpoint}...`);

  // Simular falha 50% das vezes
  if (Math.random() > 0.5) {
    throw new Error(`API ${endpoint} falhou`);
  }

  await new Promise((resolve) => setTimeout(resolve, 100));
  return { data: `Resposta de ${endpoint}` };
}

// Executar com circuit breaker
async function testCircuitBreaker() {
  for (let i = 0; i < 20; i++) {
    try {
      const result = await circuitBreaker.execute(() => callAPI("/users"));
      console.log(`Tentativa ${i + 1}:`, result.data);
    } catch (error) {
      console.log(`Tentativa ${i + 1}:`, error.message);
    }

    // Esperar um pouco entre tentativas
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mostrar stats a cada 5 tentativas
    if ((i + 1) % 5 === 0) {
      console.log("Stats:", circuitBreaker.getStats());
    }
  }
}

testCircuitBreaker();

// 6. Sistema de retry com exponential backoff
class RetrySystem {
  constructor(options = {}) {
    this.maxAttempts = options.maxAttempts ?? 3;
    this.initialDelay = options.initialDelay ?? 1000;
    this.maxDelay = options.maxDelay ?? 30000;
    this.multiplier = options.multiplier ?? 2;
    this.retryableErrors = options.retryableErrors ?? [
      "NetworkError",
      "TimeoutError",
      "ECONNRESET",
      "ETIMEDOUT",
    ];

    this.jitter = options.jitter ?? 0.1; // 10% de jitter
  }

  async execute(fn, context = {}) {
    let lastError;

    for (let attempt = 1; attempt <= this.maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;

        // Verificar se é um erro retryable
        if (!this.shouldRetry(error) || attempt === this.maxAttempts) {
          throw error;
        }

        // Calcular delay com exponential backoff e jitter
        const delay = this.calculateDelay(attempt);

        console.log(
          `Tentativa ${attempt} falhou, tentando novamente em ${delay}ms...`,
          {
            error: error.message,
            context,
          }
        );

        // Aguardar
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }

  shouldRetry(error) {
    const errorStr = error.toString();
    return this.retryableErrors.some(
      (retryableError) =>
        errorStr.includes(retryableError) || error.name === retryableError
    );
  }

  calculateDelay(attempt) {
    // Exponential backoff
    let delay = this.initialDelay * Math.pow(this.multiplier, attempt - 1);

    // Limitar ao máximo
    delay = Math.min(delay, this.maxDelay);

    // Adicionar jitter
    const jitter = delay * this.jitter;
    delay += Math.random() * jitter * 2 - jitter;

    return Math.floor(delay);
  }
}

// Exemplo de uso
const retrySystem = new RetrySystem({
  maxAttempts: 4,
  initialDelay: 500,
  maxDelay: 8000,
  multiplier: 2,
  retryableErrors: ["NetworkError", "Timeout", "503"],
});

async function unreliableOperation() {
  const errors = [
    new Error("NetworkError: Connection failed"),
    new Error("Timeout after 5000ms"),
    new Error("503 Service Unavailable"),
    new Error("Critical system error"),
  ];

  const error = errors[Math.floor(Math.random() * errors.length)];

  if (Math.random() > 0.3) {
    throw error;
  }

  return { success: true, data: "Operação bem sucedida" };
}

async function testRetrySystem() {
  for (let i = 0; i < 5; i++) {
    try {
      const result = await retrySystem.execute(() => unreliableOperation(), {
        operationId: i,
      });
      console.log(`Tentativa ${i}:`, result.data);
    } catch (error) {
      console.log(
        `Tentativa ${i} falhou após todas as retentativas:`,
        error.message
      );
    }
  }
}

testRetrySystem();

// 7. Sistema de fallback hierárquico
class HierarchicalFallback {
  constructor(providers = [], options = {}) {
    this.providers = providers;
    this.options = {
      timeout: options.timeout ?? 5000,
      validate:
        options.validate ??
        ((result) => result !== null && result !== undefined),
      fallbackValue: options.fallbackValue ?? null,
    };
  }

  async get(...args) {
    const promises = this.providers.map((provider, index) =>
      this.executeProvider(provider, index, ...args)
    );

    // Esperar pelo primeiro que resolver com sucesso
    for (const promise of promises) {
      try {
        const result = await promise;
        if (this.options.validate(result)) {
          return result;
        }
      } catch (error) {
        // Continuar para o próximo provider
        console.log(`Provider falhou:`, error.message);
      }
    }

    return this.options.fallbackValue;
  }

  async executeProvider(provider, index, ...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error(`Provider ${index} timeout`));
      }, this.options.timeout);

      Promise.resolve(provider(...args))
        .then((result) => {
          clearTimeout(timeoutId);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  }
}

// Exemplo de uso
const hierarchicalFallback = new HierarchicalFallback(
  [
    // Provider 1: API principal
    async (userId) => {
      console.log("Tentando API principal...");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (Math.random() > 0.3) {
        throw new Error("API principal falhou");
      }

      return { id: userId, name: "Usuário da API", source: "primary" };
    },

    // Provider 2: Cache Redis
    async (userId) => {
      console.log("Tentando cache Redis...");
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (Math.random() > 0.5) {
        throw new Error("Cache Redis falhou");
      }

      return { id: userId, name: "Usuário do cache", source: "redis" };
    },

    // Provider 3: Banco de dados
    async (userId) => {
      console.log("Tentando banco de dados...");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return { id: userId, name: "Usuário do banco", source: "database" };
    },
  ],
  {
    timeout: 3000,
    validate: (result) => result && result.name,
    fallbackValue: {
      id: "unknown",
      name: "Usuário desconhecido",
      source: "fallback",
    },
  }
);

async function testHierarchicalFallback() {
  for (let i = 1; i <= 5; i++) {
    const result = await hierarchicalFallback.get(i);
    console.log(`Usuário ${i}:`, result);
  }
}

testHierarchicalFallback();
```

Este documento completo cobre as principais funcionalidades do ES6+ com exemplos práticos e sistemas avançados para uso em produção. Cada seção inclui:

1. **Template Literals**: Strings com superpoderes, tagged templates, sistema de templates avançado
2. **Destructuring**: Desestruturação de arrays e objetos, sistemas de validação e pattern matching
3. **Optional Chaining**: Encadeamento seguro, sistemas de cache e configuração
4. **Nullish Coalescing**: Operador ??, sistemas de feature flags e fallback
5. **Optional Catch Binding**: Tratamento de erros, circuit breakers e sistemas de retry

Todos os exemplos são práticos e prontos para uso em aplicações reais.
