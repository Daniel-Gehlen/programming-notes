# 9. MANIPULAÇÃO DE DADOS

## JSON (parse, stringify)

### Fundamentos do JSON

```javascript
// JSON (JavaScript Object Notation) - Formato de intercâmbio de dados

// Stringify - Converter objeto para string JSON
const usuario = {
  nome: "João Silva",
  idade: 30,
  email: "joao@email.com",
  ativo: true,
  telefones: ["11999999999", "1122222222"],
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
  },
  dataCadastro: new Date(),
  funcao: undefined, // Será omitido
  simbolo: Symbol("id"), // Será omitido
};

// Conversão básica
const jsonString = JSON.stringify(usuario);
console.log(jsonString);
// {"nome":"João Silva","idade":30,"email":"joao@email.com","ativo":true,"telefones":["11999999999","1122222222"],"endereco":{"rua":"Rua das Flores","numero":123,"cidade":"São Paulo"},"dataCadastro":"2024-01-15T10:30:00.000Z"}

// Com espaçamento (pretty print)
const jsonFormatado = JSON.stringify(usuario, null, 2);
console.log(jsonFormatado);

// Com replacer (filtrar propriedades)
const jsonFiltrado = JSON.stringify(usuario, ["nome", "idade", "email"], 2);
console.log(jsonFiltrado);
// {"nome":"João Silva","idade":30,"email":"joao@email.com"}

// Replacer como função
const jsonCustomizado = JSON.stringify(
  usuario,
  (chave, valor) => {
    if (typeof valor === "string") {
      return valor.toUpperCase();
    }
    if (typeof valor === "number") {
      return valor * 2;
    }
    return valor;
  },
  2
);
console.log(jsonCustomizado);

// Parse - Converter string JSON para objeto
const jsonUsuario = '{"nome":"Maria","idade":25}';
const objetoUsuario = JSON.parse(jsonUsuario);
console.log(objetoUsuario.nome); // "Maria"

// Com reviver (transformar durante parse)
const jsonComData = '{"nome":"Carlos","nascimento":"1990-05-15T10:30:00.000Z"}';
const usuarioComData = JSON.parse(jsonComData, (chave, valor) => {
  if (chave === "nascimento") {
    return new Date(valor);
  }
  return valor;
});
console.log(usuarioComData.nascimento.getFullYear()); // 1990

// Tratamento de erros
try {
  const jsonInvalido = '{"nome": "Teste", idade: 30}'; // Falta aspas em idade
  const objeto = JSON.parse(jsonInvalido);
} catch (error) {
  console.error("Erro ao parsear JSON:", error.message);
}

// Classe utilitária para JSON
class JSONUtils {
  static stringifySafe(obj, replacer = null, space = 2) {
    try {
      return JSON.stringify(obj, replacer, space);
    } catch (error) {
      console.error("Erro ao stringify:", error);
      return null;
    }
  }

  static parseSafe(jsonString, reviver = null) {
    try {
      return JSON.parse(jsonString, reviver);
    } catch (error) {
      console.error("Erro ao parsear JSON:", error);
      return null;
    }
  }

  static clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static merge(target, ...sources) {
    const result = JSON.parse(JSON.stringify(target));

    sources.forEach((source) => {
      const sourceCopy = JSON.parse(JSON.stringify(source));
      Object.assign(result, sourceCopy);
    });

    return result;
  }

  static isJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  }

  static prettify(jsonString) {
    try {
      const obj = JSON.parse(jsonString);
      return JSON.stringify(obj, null, 2);
    } catch {
      return jsonString;
    }
  }

  static minify(jsonString) {
    try {
      const obj = JSON.parse(jsonString);
      return JSON.stringify(obj);
    } catch {
      return jsonString;
    }
  }

  static diff(obj1, obj2) {
    const diffs = [];
    const allKeys = new Set([
      ...Object.keys(obj1 || {}),
      ...Object.keys(obj2 || {}),
    ]);

    allKeys.forEach((key) => {
      const val1 = obj1?.[key];
      const val2 = obj2?.[key];

      if (JSON.stringify(val1) !== JSON.stringify(val2)) {
        diffs.push({
          key,
          oldValue: val1,
          newValue: val2,
        });
      }
    });

    return diffs;
  }
}

// Exemplos de uso
const obj1 = { nome: "João", idade: 30 };
const obj2 = { nome: "João", idade: 31, cidade: "SP" };

console.log(JSONUtils.clone(obj1));
console.log(JSONUtils.merge(obj1, obj2));
console.log(JSONUtils.diff(obj1, obj2));
console.log(JSONUtils.isJSON('{"teste": true}'));

// Serialização de objetos complexos
class SerializadorJSON {
  constructor() {
    this.tiposCustomizados = new Map();
    this.registrarTiposPadrao();
  }

  registrarTiposPadrao() {
    // Registrar Date
    this.registrarTipo(
      Date,
      (date) => date.toISOString(),
      (str) => new Date(str)
    );

    // Registrar Map
    this.registrarTipo(
      Map,
      (map) => Array.from(map.entries()),
      (arr) => new Map(arr)
    );

    // Registrar Set
    this.registrarTipo(
      Set,
      (set) => Array.from(set),
      (arr) => new Set(arr)
    );

    // Registrar RegExp
    this.registrarTipo(
      RegExp,
      (regex) => regex.toString(),
      (str) => {
        const match = str.match(/^\/(.*)\/([gimsuy]*)$/);
        return match ? new RegExp(match[1], match[2]) : new RegExp(str);
      }
    );
  }

  registrarTipo(tipo, serializar, desserializar) {
    this.tiposCustomizados.set(tipo, { serializar, desserializar });
  }

  stringify(obj) {
    const customReplacer = (key, value) => {
      if (value === undefined) {
        return "__undefined__";
      }

      if (value === null) {
        return null;
      }

      // Verificar tipos customizados
      for (const [tipo, handlers] of this.tiposCustomizados) {
        if (value instanceof tipo) {
          return {
            __type__: tipo.name,
            __value__: handlers.serializar(value),
          };
        }
      }

      return value;
    };

    return JSON.stringify(obj, customReplacer, 2);
  }

  parse(jsonString) {
    const customReviver = (key, value) => {
      if (value === "__undefined__") {
        return undefined;
      }

      if (value && value.__type__ && value.__value__) {
        for (const [tipo, handlers] of this.tiposCustomizados) {
          if (tipo.name === value.__type__) {
            return handlers.desserializar(value.__value__);
          }
        }
      }

      return value;
    };

    return JSON.parse(jsonString, customReviver);
  }
}

// Exemplo de uso do serializador
const serializador = new SerializadorJSON();

const dadosComplexos = {
  nome: "Teste",
  data: new Date(),
  regex: /teste/gi,
  conjunto: new Set([1, 2, 3]),
  mapa: new Map([
    ["a", 1],
    ["b", 2],
  ]),
  indefinido: undefined,
};

const serializado = serializador.stringify(dadosComplexos);
console.log(serializado);

const desserializado = serializador.parse(serializado);
console.log(desserializado.data instanceof Date); // true
console.log(desserializado.regex instanceof RegExp); // true
```

## Date Object e manipulação

### Trabalhando com datas

```javascript
// Criando datas
const agora = new Date();
console.log("Data atual:", agora);

// Data específica
const data1 = new Date("2024-12-25");
const data2 = new Date(2024, 11, 25); // Mês é 0-indexed (11 = Dezembro)
const data3 = new Date(2024, 11, 25, 14, 30, 0); // 25/12/2024 14:30:00

// Timestamp
const timestamp = Date.now(); // Milissegundos desde 1/1/1970
const dataDoTimestamp = new Date(timestamp);

// Métodos getters
const data = new Date();
console.log("Ano:", data.getFullYear());
console.log("Mês:", data.getMonth()); // 0-11
console.log("Dia do mês:", data.getDate());
console.log("Dia da semana:", data.getDay()); // 0-6 (0 = Domingo)
console.log("Hora:", data.getHours());
console.log("Minutos:", data.getMinutes());
console.log("Segundos:", data.getSeconds());
console.log("Milissegundos:", data.getMilliseconds());
console.log("Timestamp:", data.getTime());

// Métodos setters
data.setFullYear(2025);
data.setMonth(5); // Junho (0-indexed)
data.setDate(15);
data.setHours(14);
data.setMinutes(30);
data.setSeconds(0);

// Formatação
console.log("ISO:", data.toISOString());
console.log("Local:", data.toLocaleString());
console.log("Data local:", data.toLocaleDateString());
console.log("Hora local:", data.toLocaleTimeString());
console.log("UTC:", data.toUTCString());

// Classe utilitária para datas
class DateUtils {
  static formatar(data, formato = "DD/MM/YYYY HH:mm:ss") {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");
    const segundo = String(data.getSeconds()).padStart(2, "0");

    return formato
      .replace("DD", dia)
      .replace("MM", mes)
      .replace("YYYY", ano)
      .replace("YY", String(ano).slice(-2))
      .replace("HH", hora)
      .replace("hh", String(hora % 12 || 12))
      .replace("mm", minuto)
      .replace("ss", segundo)
      .replace("A", data.getHours() >= 12 ? "PM" : "AM");
  }

  static adicionarDias(data, dias) {
    const novaData = new Date(data);
    novaData.setDate(novaData.getDate() + dias);
    return novaData;
  }

  static adicionarMeses(data, meses) {
    const novaData = new Date(data);
    novaData.setMonth(novaData.getMonth() + meses);
    return novaData;
  }

  static adicionarAnos(data, anos) {
    const novaData = new Date(data);
    novaData.setFullYear(novaData.getFullYear() + anos);
    return novaData;
  }

  static diferencaEmDias(data1, data2) {
    const diff = Math.abs(data1 - data2);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  static ehFimDeSemana(data) {
    const dia = data.getDay();
    return dia === 0 || dia === 6; // 0 = Domingo, 6 = Sábado
  }

  static ehHoje(data) {
    const hoje = new Date();
    return (
      data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    );
  }

  static primeiroDiaDoMes(data) {
    return new Date(data.getFullYear(), data.getMonth(), 1);
  }

  static ultimoDiaDoMes(data) {
    return new Date(data.getFullYear(), data.getMonth() + 1, 0);
  }

  static idade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  static tempoRestante(dataFutura) {
    const agora = new Date();
    const diff = dataFutura - agora;

    if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
  }

  static validar(dataString) {
    const data = new Date(dataString);
    return !isNaN(data.getTime());
  }

  static obterDiaDaSemana(data, formato = "long") {
    const dias = {
      long: [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
      ],
      short: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    };

    return dias[formato][data.getDay()];
  }

  static obterNomeMes(data, formato = "long") {
    const meses = {
      long: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      short: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    };

    return meses[formato][data.getMonth()];
  }
}

// Exemplos de uso
const hoje = new Date();
console.log(DateUtils.formatar(hoje, "DD/MM/YYYY"));
console.log(DateUtils.formatar(hoje, "YYYY-MM-DD HH:mm:ss"));
console.log("Idade:", DateUtils.idade(new Date("1990-05-15")));
console.log("Fim de semana?", DateUtils.ehFimDeSemana(hoje));

// Calendário
class Calendario {
  constructor(ano, mes) {
    this.data = new Date(ano, mes - 1, 1);
    this.calendario = this.gerarCalendario();
  }

  gerarCalendario() {
    const primeiroDia = new Date(
      this.data.getFullYear(),
      this.data.getMonth(),
      1
    );
    const ultimoDia = new Date(
      this.data.getFullYear(),
      this.data.getMonth() + 1,
      0
    );
    const diasNoMes = ultimoDia.getDate();
    const diaInicial = primeiroDia.getDay(); // 0 = Domingo

    const semanas = [];
    let semana = [];

    // Dias vazios no início
    for (let i = 0; i < diaInicial; i++) {
      semana.push(null);
    }

    // Dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
      semana.push(new Date(this.data.getFullYear(), this.data.getMonth(), dia));

      if (semana.length === 7) {
        semanas.push([...semana]);
        semana = [];
      }
    }

    // Dias vazios no final
    if (semana.length > 0) {
      while (semana.length < 7) {
        semana.push(null);
      }
      semanas.push(semana);
    }

    return semanas;
  }

  renderizar() {
    const cabecalho = `
            <div class="calendario-cabecalho">
                ${DateUtils.obterNomeMes(this.data)} ${this.data.getFullYear()}
            </div>
            <div class="calendario-dias-semana">
                <div>Dom</div><div>Seg</div><div>Ter</div><div>Qua</div><div>Qui</div><div>Sex</div><div>Sáb</div>
            </div>
        `;

    let corpo = '<div class="calendario-semanas">';

    this.calendario.forEach((semana) => {
      corpo += '<div class="calendario-semana">';

      semana.forEach((dia) => {
        const classe = dia
          ? `calendario-dia ${DateUtils.ehHoje(dia) ? "hoje" : ""}`
          : "calendario-dia vazio";
        const conteudo = dia ? dia.getDate() : "";
        corpo += `<div class="${classe}">${conteudo}</div>`;
      });

      corpo += "</div>";
    });

    corpo += "</div>";

    return cabecalho + corpo;
  }

  proximoMes() {
    this.data.setMonth(this.data.getMonth() + 1);
    this.calendario = this.gerarCalendario();
    return this;
  }

  mesAnterior() {
    this.data.setMonth(this.data.getMonth() - 1);
    this.calendario = this.gerarCalendario();
    return this;
  }
}

// Cronômetro/Contador
class Cronometro {
  constructor() {
    this.inicio = null;
    this.pausadoEm = null;
    this.tempoAcumulado = 0;
    this.intervalId = null;
    this.callbacks = new Map();
  }

  iniciar() {
    if (!this.inicio) {
      this.inicio = Date.now();
    } else if (this.pausadoEn) {
      this.tempoAcumulado += Date.now() - this.pausadoEn;
      this.pausadoEm = null;
    }

    this.intervalId = setInterval(() => {
      this.atualizar();
    }, 100);
  }

  pausar() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.pausadoEm = Date.now();
    }
  }

  parar() {
    this.pausar();
    const tempoTotal = this.getTempoTotal();
    this.resetar();
    return tempoTotal;
  }

  resetar() {
    this.pausar();
    this.inicio = null;
    this.pausadoEm = null;
    this.tempoAcumulado = 0;
    this.notificar("reset");
  }

  getTempoTotal() {
    if (!this.inicio) return this.tempoAcumulado;

    const agora = this.pausadoEm || Date.now();
    return this.tempoAcumulado + (agora - this.inicio);
  }

  getTempoFormatado() {
    const totalMs = this.getTempoTotal();
    const horas = Math.floor(totalMs / 3600000);
    const minutos = Math.floor((totalMs % 3600000) / 60000);
    const segundos = Math.floor((totalMs % 60000) / 1000);
    const milissegundos = Math.floor(totalMs % 1000);

    return {
      horas: String(horas).padStart(2, "0"),
      minutos: String(minutos).padStart(2, "0"),
      segundos: String(segundos).padStart(2, "0"),
      milissegundos: String(milissegundos).padStart(3, "0"),
    };
  }

  atualizar() {
    const tempo = this.getTempoFormatado();
    this.notificar("update", tempo);
  }

  on(evento, callback) {
    if (!this.callbacks.has(evento)) {
      this.callbacks.set(evento, []);
    }
    this.callbacks.get(evento).push(callback);
  }

  notificar(evento, dados) {
    if (this.callbacks.has(evento)) {
      this.callbacks.get(evento).forEach((callback) => callback(dados));
    }
  }
}

// Agendador de tarefas
class Agendador {
  constructor() {
    this.tarefas = new Map();
    this.timers = new Map();
  }

  agendar(id, tempo, callback, repetir = false) {
    // tempo pode ser: Date, número de ms, ou string como "2h", "30m", "10s"
    const ms = this.parseTempo(tempo);
    const agora = Date.now();

    if (ms <= 0) {
      callback();
      return;
    }

    const timer = setTimeout(() => {
      callback();

      if (repetir) {
        this.agendar(id, ms, callback, true);
      } else {
        this.tarefas.delete(id);
        this.timers.delete(id);
      }
    }, ms);

    this.tarefas.set(id, {
      id,
      tempo,
      callback,
      executarEm: agora + ms,
      repetir,
    });

    this.timers.set(id, timer);

    return id;
  }

  agendarData(id, data, callback) {
    const agora = new Date();
    const ms = data.getTime() - agora.getTime();

    if (ms <= 0) {
      callback();
      return;
    }

    return this.agendar(id, ms, callback);
  }

  cancelar(id) {
    if (this.timers.has(id)) {
      clearTimeout(this.timers.get(id));
      this.timers.delete(id);
    }

    if (this.tarefas.has(id)) {
      this.tarefas.delete(id);
    }

    return true;
  }

  parseTempo(tempo) {
    if (typeof tempo === "number") return tempo;
    if (tempo instanceof Date) return tempo.getTime() - Date.now();

    const regex = /^(\d+)([smhd])$/;
    const match = tempo.match(regex);

    if (match) {
      const valor = parseInt(match[1]);
      const unidade = match[2];

      switch (unidade) {
        case "s":
          return valor * 1000;
        case "m":
          return valor * 60000;
        case "h":
          return valor * 3600000;
        case "d":
          return valor * 86400000;
        default:
          return valor;
      }
    }

    return parseInt(tempo) || 0;
  }

  listarTarefas() {
    return Array.from(this.tarefas.values());
  }

  limpar() {
    this.timers.forEach((timer) => clearTimeout(timer));
    this.tarefas.clear();
    this.timers.clear();
  }
}
```

## Regular Expressions (RegExp)

### Expressões Regulares

```javascript
// Criação de regex
const regex1 = /padrao/;
const regex2 = new RegExp("padrao");
const regex3 = /padrao/gi; // flags: g (global), i (case-insensitive)

// Flags:
// g - global (encontra todas as ocorrências)
// i - case-insensitive
// m - multiline
// s - dotall (ponto corresponde a quebras de linha)
// u - unicode
// y - sticky

// Métodos de string com regex
const texto = "JavaScript é incrível! JavaScript é poderoso.";

// test - verifica se há correspondência
console.log(/javascript/i.test(texto)); // true

// exec - executa busca
const resultado = /javascript/gi.exec(texto);
console.log(resultado);

// match - retorna correspondências
console.log(texto.match(/javascript/gi)); // ["JavaScript", "JavaScript"]

// matchAll - retorna todas correspondências com grupos
for (const match of texto.matchAll(/javascript/gi)) {
  console.log(match);
}

// search - retorna índice da primeira correspondência
console.log(texto.search(/javascript/i)); // 0

// replace - substitui correspondências
console.log(texto.replace(/javascript/gi, "JS")); // "JS é incrível! JS é poderoso."

// split - divide string por regex
console.log("a,b,c".split(/,/)); // ["a", "b", "c"]

// Classes de caracteres
const regexClasses = {
  digitos: /\d/, // qualquer dígito (0-9)
  naoDigitos: /\D/, // não dígito
  palavra: /\w/, // caractere de palavra (a-z, A-Z, 0-9, _)
  naoPalavra: /\W/, // não caractere de palavra
  espaco: /\s/, // espaço em branco
  naoEspaco: /\S/, // não espaço em branco
  ponto: /./, // qualquer caractere exceto nova linha
};

// Quantificadores
const regexQuant = {
  zeroOuMais: /a*/, // zero ou mais 'a'
  umOuMais: /a+/, // um ou mais 'a'
  zeroOuUm: /a?/, // zero ou um 'a'
  exatamenteN: /a{3}/, // exatamente 3 'a'
  entreN_M: /a{2,4}/, // entre 2 e 4 'a'
  peloMenosN: /a{2,}/, // pelo menos 2 'a'
};

// Âncoras e limites
const regexAncora = {
  inicio: /^inicio/, // início da string
  fim: /fim$/, // fim da string
  bordaPalavra: /\bword\b/, // borda de palavra
  naoBorda: /\Bword\B/, // não borda de palavra
};

// Grupos e captura
const textoComGrupo = "Data: 2024-12-15";
const regexData = /(\d{4})-(\d{2})-(\d{2})/;
const matchData = textoComGrupo.match(regexData);
console.log(matchData[0]); // "2024-12-15"
console.log(matchData[1]); // "2024"
console.log(matchData[2]); // "12"
console.log(matchData[3]); // "15"

// Grupos nomeados
const regexNomeado = /(?<ano>\d{4})-(?<mes>\d{2})-(?<dia>\d{2})/;
const grupos = textoComGrupo.match(regexNomeado).groups;
console.log(grupos.ano); // "2024"
console.log(grupos.mes); // "12"

// Lookahead e lookbehind
const regexLook = {
  positiveLookahead: /a(?=b)/, // 'a' seguido de 'b'
  negativeLookahead: /a(?!b)/, // 'a' não seguido de 'b'
  positiveLookbehind: /(?<=a)b/, // 'b' precedido de 'a'
  negativeLookbehind: /(?<!a)b/, // 'b' não precedido de 'a'
};

// Classe utilitária para regex
class RegexUtils {
  static validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static validarCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regex.test(cpf)) return false;

    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, "");

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Validar dígitos verificadores
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

  static validarURL(url) {
    const regex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return regex.test(url);
  }

  static validarTelefone(telefone) {
    const regex = /^(\+55)?\s?(\(?\d{2}\)?)?\s?\d{4,5}[-.\s]?\d{4}$/;
    return regex.test(telefone);
  }

  static extrairNumeros(texto) {
    return texto.match(/\d+/g) || [];
  }

  static extrairEmails(texto) {
    return texto.match(/[^\s@]+@[^\s@]+\.[^\s@]+/g) || [];
  }

  static extrairURLs(texto) {
    return texto.match(/https?:\/\/[^\s]+/g) || [];
  }

  static extrairHashtags(texto) {
    return texto.match(/#[\w\u00C0-\u024F\u1E00-\u1EFF]+/g) || [];
  }

  static extrairMencionadas(texto) {
    return texto.match(/@[\w\u00C0-\u024F\u1E00-\u1EFF]+/g) || [];
  }

  static sanitizarHTML(html) {
    return html.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    );
  }

  static camelCaseParaSnakeCase(texto) {
    return texto.replace(/[A-Z]/g, (letra) => `_${letra.toLowerCase()}`);
  }

  static snakeCaseParaCamelCase(texto) {
    return texto.replace(/_([a-z])/g, (_, letra) => letra.toUpperCase());
  }

  static capitalizarPalavras(texto) {
    return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
  }

  static removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  static validarSenhaForte(senha) {
    // Mínimo 8 caracteres, pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
  }

  static mascaraDocumento(documento, tipo = "cpf") {
    const numeros = documento.replace(/\D/g, "");

    if (tipo === "cpf") {
      return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (tipo === "cnpj") {
      return numeros.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    }

    return documento;
  }
}

// Exemplos de uso
console.log(RegexUtils.validarEmail("teste@exemplo.com")); // true
console.log(RegexUtils.validarCPF("123.456.789-09")); // false (CPF inválido)
console.log(
  RegexUtils.extrairEmails("Contato: email@teste.com, outro@exemplo.org")
);
console.log(RegexUtils.mascaraDocumento("12345678909", "cpf"));

// Construtor de regex dinâmico
class RegexBuilder {
  constructor() {
    this.patterns = [];
    this.flags = "";
  }

  exatamente(texto) {
    this.patterns.push(texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return this;
  }

  qualquerCaractere() {
    this.patterns.push(".");
    return this;
  }

  digito() {
    this.patterns.push("\\d");
    return this;
  }

  naoDigito() {
    this.patterns.push("\\D");
    return this;
  }

  palavra() {
    this.patterns.push("\\w");
    return this;
  }

  naoPalavra() {
    this.patterns.push("\\W");
    return this;
  }

  espaco() {
    this.patterns.push("\\s");
    return this;
  }

  naoEspaco() {
    this.patterns.push("\\S");
    return this;
  }

  umDentre(chars) {
    this.patterns.push(`[${chars}]`);
    return this;
  }

  naoUmDentre(chars) {
    this.patterns.push(`[^${chars}]`);
    return this;
  }

  entre(min, max) {
    this.patterns.push(`{${min},${max}}`);
    return this;
  }

  zeroOuMais() {
    this.patterns.push("*");
    return this;
  }

  umOuMais() {
    this.patterns.push("+");
    return this;
  }

  zeroOuUm() {
    this.patterns.push("?");
    return this;
  }

  inicioLinha() {
    this.patterns.push("^");
    return this;
  }

  fimLinha() {
    this.patterns.push("$");
    return this;
  }

  bordaPalavra() {
    this.patterns.push("\\b");
    return this;
  }

  grupo(callback) {
    const builder = new RegexBuilder();
    callback(builder);
    this.patterns.push(`(${builder.buildPattern()})`);
    return this;
  }

  grupoNomeado(nome, callback) {
    const builder = new RegexBuilder();
    callback(builder);
    this.patterns.push(`(?<${nome}>${builder.buildPattern()})`);
    return this;
  }

  ou() {
    this.patterns.push("|");
    return this;
  }

  flag(f) {
    if (!this.flags.includes(f)) {
      this.flags += f;
    }
    return this;
  }

  buildPattern() {
    return this.patterns.join("");
  }

  construir() {
    return new RegExp(this.buildPattern(), this.flags);
  }
}

// Exemplo de uso do builder
const regexEmail = new RegexBuilder()
  .inicioLinha()
  .grupo((b) => b.umOuMais().naoUmDentre("@\\s"))
  .exatamente("@")
  .grupo((b) => b.umOuMais().naoUmDentre("@\\s"))
  .exatamente(".")
  .grupo((b) => b.umOuMais().naoUmDentre("@\\s"))
  .fimLinha()
  .flag("i")
  .construir();

console.log(regexEmail.test("teste@exemplo.com")); // true
```

## FormData

### Trabalhando com formulários

```javascript
// FormData API - Para envio de formulários via AJAX

// Criar FormData a partir de formulário HTML
const formulario = document.getElementById("meuFormulario");
const formData = new FormData(formulario);

// Criar FormData vazio e adicionar campos
const dados = new FormData();
dados.append("nome", "João");
dados.append("idade", "30");
dados.append("arquivo", inputFile.files[0]);

// Métodos disponíveis
dados.append("campo", "valor"); // Adiciona novo valor
dados.set("campo", "novoValor"); // Substitui valor existente
dados.get("campo"); // Retorna primeiro valor
dados.getAll("campo"); // Retorna todos os valores (para campos múltiplos)
dados.has("campo"); // Verifica se campo existe
dados.delete("campo"); // Remove campo
dados.entries(); // Retorna iterator de pares [chave, valor]
dados.keys(); // Retorna iterator de chaves
dados.values(); // Retorna iterator de valores

// Iterar sobre FormData
for (const [chave, valor] of dados.entries()) {
  console.log(`${chave}: ${valor}`);
}

// Converter para objeto
const objeto = Object.fromEntries(dados);
console.log(objeto);

// Converter para JSON
const json = JSON.stringify(Object.fromEntries(dados));
console.log(json);

// Classe wrapper para FormData
class FormularioAvancado {
  constructor(formElement) {
    this.form = formElement;
    this.formData = new FormData(formElement);
    this.validators = new Map();
    this.configurarValidacoes();
  }

  configurarValidacoes() {
    // Configurar validações padrão
    this.form.querySelectorAll("[required]").forEach((campo) => {
      this.validators.set(campo.name, this.validarRequerido);
    });

    this.form.querySelectorAll("[type='email']").forEach((campo) => {
      this.validators.set(campo.name, this.validarEmail);
    });

    this.form.querySelectorAll("[type='number']").forEach((campo) => {
      const min = campo.getAttribute("min");
      const max = campo.getAttribute("max");
      this.validators.set(campo.name, (valor) =>
        this.validarNumero(valor, min, max)
      );
    });
  }

  validarRequerido(valor) {
    return valor && valor.toString().trim() !== "";
  }

  validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  validarNumero(valor, min, max) {
    const num = Number(valor);
    if (isNaN(num)) return false;
    if (min !== null && num < Number(min)) return false;
    if (max !== null && num > Number(max)) return false;
    return true;
  }

  validar() {
    const erros = {};

    for (const [chave, valor] of this.formData.entries()) {
      const validator = this.validators.get(chave);

      if (validator && !validator(valor)) {
        if (!erros[chave]) erros[chave] = [];
        erros[chave].push(`Validação falhou para ${chave}`);
      }
    }

    return {
      valido: Object.keys(erros).length === 0,
      erros,
    };
  }

  getDados() {
    return Object.fromEntries(this.formData);
  }

  getDadosFormatados() {
    const dados = {};

    for (const [chave, valor] of this.formData.entries()) {
      if (valor instanceof File) {
        dados[chave] = {
          nome: valor.name,
          tipo: valor.type,
          tamanho: valor.size,
          ultimaModificacao: valor.lastModified,
        };
      } else {
        dados[chave] = valor;
      }
    }

    return dados;
  }

  adicionarArquivo(chave, arquivo) {
    this.formData.append(chave, arquivo);
  }

  removerCampo(chave) {
    this.formData.delete(chave);
  }

  limpar() {
    const novoFormData = new FormData();
    this.formData = novoFormData;
    this.form.reset();
  }

  async enviar(url, options = {}) {
    const validacao = this.validar();

    if (!validacao.valido) {
      throw new Error(
        "Formulário inválido: " + JSON.stringify(validacao.erros)
      );
    }

    const config = {
      method: "POST",
      body: this.formData,
      ...options,
    };

    try {
      const resposta = await fetch(url, config);

      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }

      return await resposta.json();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      throw error;
    }
  }

  // Upload de arquivos com progresso
  async enviarComProgresso(url, onProgress) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percentual = (event.loaded / event.total) * 100;
          onProgress?.(percentual, event);
        }
      });

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const resposta = JSON.parse(xhr.responseText);
            resolve(resposta);
          } catch {
            resolve(xhr.responseText);
          }
        } else {
          reject(new Error(`Erro HTTP: ${xhr.status}`));
        }
      });

      xhr.addEventListener("error", () => {
        reject(new Error("Erro de rede"));
      });

      xhr.open("POST", url);
      xhr.send(this.formData);
    });
  }
}

// Exemplo de uso
const formAvancado = new FormularioAvancado(formulario);

// Validar
const validacao = formAvancado.validar();
if (validacao.valido) {
  // Enviar
  formAvancado
    .enviar("/api/submit", {
      headers: {
        "X-CSRF-Token": "token-here",
      },
    })
    .then((resposta) => {
      console.log("Sucesso:", resposta);
    })
    .catch((erro) => {
      console.error("Erro:", erro);
    });
}

// Upload com progresso
formAvancado.enviarComProgresso("/api/upload", (percentual) => {
  console.log(`Progresso: ${percentual.toFixed(2)}%`);
});

// Serializador de formulário para diferentes formatos
class FormSerializer {
  constructor(formElement) {
    this.form = formElement;
    this.elements = Array.from(formElement.elements);
  }

  toJSON() {
    const dados = {};

    this.elements.forEach((element) => {
      if (this.deveIncluirElemento(element)) {
        const nome = element.name;
        const valor = this.obterValor(element);

        if (nome) {
          if (dados[nome] !== undefined) {
            // Campo com múltiplos valores
            if (!Array.isArray(dados[nome])) {
              dados[nome] = [dados[nome]];
            }
            dados[nome].push(valor);
          } else {
            dados[nome] = valor;
          }
        }
      }
    });

    return dados;
  }

  toFormData() {
    const formData = new FormData();

    this.elements.forEach((element) => {
      if (this.deveIncluirElemento(element)) {
        const nome = element.name;
        const valor = this.obterValor(element);

        if (nome && valor !== null) {
          if (element.type === "file") {
            // Adicionar todos os arquivos
            Array.from(element.files).forEach((arquivo) => {
              formData.append(nome, arquivo);
            });
          } else if (Array.isArray(valor)) {
            // Adicionar cada valor do array
            valor.forEach((v) => formData.append(nome, v));
          } else {
            formData.append(nome, valor);
          }
        }
      }
    });

    return formData;
  }

  toURLSearchParams() {
    const params = new URLSearchParams();

    this.elements.forEach((element) => {
      if (this.deveIncluirElemento(element)) {
        const nome = element.name;
        const valor = this.obterValor(element);

        if (nome && valor !== null) {
          if (Array.isArray(valor)) {
            valor.forEach((v) => params.append(nome, v));
          } else {
            params.append(nome, valor);
          }
        }
      }
    });

    return params;
  }

  obterValor(element) {
    switch (element.type) {
      case "checkbox":
        return element.checked ? element.value : null;
      case "radio":
        return element.checked ? element.value : null;
      case "file":
        return element.files;
      case "select-multiple":
        return Array.from(element.selectedOptions).map((opt) => opt.value);
      default:
        return element.value;
    }
  }

  deveIncluirElemento(element) {
    // Excluir botões, campos desabilitados, etc.
    return (
      element.name &&
      !element.disabled &&
      element.type !== "button" &&
      element.type !== "submit" &&
      element.type !== "reset" &&
      !element.hasAttribute("data-exclude")
    );
  }

  // Preencher formulário a partir de dados
  fromJSON(dados) {
    Object.entries(dados).forEach(([nome, valor]) => {
      const elementos = this.form.querySelectorAll(`[name="${nome}"]`);

      if (elementos.length === 0) return;

      elementos.forEach((element) => {
        switch (element.type) {
          case "checkbox":
            if (Array.isArray(valor)) {
              element.checked = valor.includes(element.value);
            } else {
              element.checked = valor === element.value;
            }
            break;

          case "radio":
            element.checked = element.value === valor;
            break;

          case "select-multiple":
            if (Array.isArray(valor)) {
              Array.from(element.options).forEach((option) => {
                option.selected = valor.includes(option.value);
              });
            }
            break;

          default:
            element.value = valor || "";
            break;
        }
      });
    });
  }
}

// Exemplo de uso
const serializer = new FormSerializer(formulario);
const json = serializer.toJSON();
const formData = serializer.toFormData();
const params = serializer.toURLSearchParams();

// Preencher formulário
serializer.fromJSON({
  nome: "João",
  email: "joao@exemplo.com",
  interesses: ["tecnologia", "esportes"],
});
```

## URL API

### Manipulação de URLs

```javascript
// URL API moderna

// Criar objeto URL
const url = new URL("https://www.exemplo.com:8080/path?query=value#fragment");

// Propriedades do URL
console.log("href:", url.href); // URL completa
console.log("protocol:", url.protocol); // https:
console.log("hostname:", url.hostname); // www.exemplo.com
console.log("port:", url.port); // 8080
console.log("host:", url.host); // www.exemplo.com:8080
console.log("origin:", url.origin); // https://www.exemplo.com:8080
console.log("pathname:", url.pathname); // /path
console.log("search:", url.search); // ?query=value
console.log("searchParams:", url.searchParams); // objeto URLSearchParams
console.log("hash:", url.hash); // #fragment

// Manipular URL
url.protocol = "http:";
url.hostname = "novo.exemplo.com";
url.pathname = "/novo/path";
url.hash = "#novo-fragment";

// URLSearchParams - Gerenciar query string
const params = new URLSearchParams("?nome=João&idade=30&interesse=tecnologia");

// Métodos
params.append("cidade", "São Paulo"); // Adicionar
params.set("idade", "31"); // Substituir
params.delete("interesse"); // Remover
params.has("nome"); // true
params.get("nome"); // "João"
params.getAll("interesse"); // []
params.toString(); // "nome=João&idade=31&cidade=São Paulo"

// Iterar
for (const [chave, valor] of params) {
  console.log(`${chave}: ${valor}`);
}

// Converter para objeto
const objetoParams = Object.fromEntries(params);
console.log(objetoParams);

// Classe utilitária para URLs
class URLUtils {
  static parse(urlString) {
    try {
      return new URL(urlString);
    } catch (error) {
      console.error("URL inválida:", error);
      return null;
    }
  }

  static validar(urlString) {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  }

  static normalizar(urlString, base = window.location.href) {
    try {
      return new URL(urlString, base).href;
    } catch {
      return urlString;
    }
  }

  static obterParametros(urlString) {
    const url = this.parse(urlString);
    return url ? Object.fromEntries(url.searchParams) : {};
  }

  static adicionarParametros(urlString, parametros) {
    const url = this.parse(urlString);
    if (!url) return urlString;

    Object.entries(parametros).forEach(([chave, valor]) => {
      url.searchParams.set(chave, valor);
    });

    return url.href;
  }

  static removerParametros(urlString, ...chaves) {
    const url = this.parse(urlString);
    if (!url) return urlString;

    chaves.forEach((chave) => {
      url.searchParams.delete(chave);
    });

    return url.href;
  }

  static atualizarParametro(urlString, chave, valor) {
    const url = this.parse(urlString);
    if (!url) return urlString;

    url.searchParams.set(chave, valor);
    return url.href;
  }

  static obterDominio(urlString) {
    const url = this.parse(urlString);
    return url ? url.hostname : null;
  }

  static obterCaminho(urlString) {
    const url = this.parse(urlString);
    return url ? url.pathname : null;
  }

  static obterHash(urlString) {
    const url = this.parse(urlString);
    return url ? url.hash.slice(1) : null;
  }

  static criarURL(base, caminho, parametros = {}) {
    try {
      const url = new URL(caminho, base);
      Object.entries(parametros).forEach(([chave, valor]) => {
        url.searchParams.set(chave, valor);
      });
      return url.href;
    } catch {
      return null;
    }
  }

  static isURLRelativa(urlString) {
    return !/^https?:\/\//i.test(urlString);
  }

  static isMesmoDominio(url1, url2) {
    const dominio1 = this.obterDominio(url1);
    const dominio2 = this.obterDominio(url2);
    return dominio1 === dominio2;
  }

  static extrairLinks(texto) {
    const regex = /https?:\/\/[^\s]+/g;
    return texto.match(regex) || [];
  }

  static encurtarParametros(urlString, comprimentoMaximo = 2000) {
    if (urlString.length <= comprimentoMaximo) return urlString;

    const url = this.parse(urlString);
    if (!url) return urlString;

    // Manter apenas parâmetros essenciais
    const parametrosImportantes = ["id", "token", "code", "state"];
    const novoParams = new URLSearchParams();

    for (const [chave, valor] of url.searchParams) {
      if (parametrosImportantes.includes(chave)) {
        novoParams.set(chave, valor);
      }
    }

    url.search = novoParams.toString();
    return url.href;
  }
}

// Exemplos de uso
console.log(URLUtils.validar("https://exemplo.com"));
console.log(
  URLUtils.obterParametros("https://exemplo.com?page=1&search=teste")
);
console.log(
  URLUtils.adicionarParametros("https://exemplo.com", { novo: "param" })
);

// Router baseado em URL
class URLRouter {
  constructor() {
    this.routes = new Map();
    this.params = {};
    this.init();
  }

  init() {
    // Configurar rota inicial
    this.atualizar();

    // Ouvir mudanças de hash
    window.addEventListener("hashchange", () => this.atualizar());

    // Ouvir popstate (para history API)
    window.addEventListener("popstate", () => this.atualizar());
  }

  adicionarRota(padrao, handler) {
    this.routes.set(padrao, handler);
  }

  atualizar() {
    const hash = window.location.hash.slice(1) || "/";
    this.navegarPara(hash);
  }

  navegarPara(rota) {
    // Encontrar rota correspondente
    for (const [padrao, handler] of this.routes) {
      const resultado = this.combinarRota(padrao, rota);

      if (resultado.combinou) {
        this.params = resultado.params;
        handler(this.params);
        return;
      }
    }

    // Rota não encontrada
    const notFoundHandler = this.routes.get("404");
    if (notFoundHandler) {
      notFoundHandler({ rota });
    }
  }

  combinarRota(padrao, rota) {
    const padraoPartes = padrao.split("/");
    const rotaPartes = rota.split("/");

    if (padraoPartes.length !== rotaPartes.length) {
      return { combinou: false, params: {} };
    }

    const params = {};

    for (let i = 0; i < padraoPartes.length; i++) {
      const padraoParte = padraoPartes[i];
      const rotaParte = rotaPartes[i];

      if (padraoParte.startsWith(":")) {
        // É um parâmetro
        const paramNome = padraoParte.slice(1);
        params[paramNome] = rotaParte;
      } else if (padraoParte !== rotaParte) {
        return { combinou: false, params: {} };
      }
    }

    return { combinou: true, params };
  }

  construirURL(rota, params = {}) {
    let url = rota;

    Object.entries(params).forEach(([chave, valor]) => {
      url = url.replace(`:${chave}`, encodeURIComponent(valor));
    });

    return `#${url}`;
  }

  irPara(rota, params = {}) {
    const url = this.construirURL(rota, params);
    window.location.hash = url;
  }

  push(rota, params = {}) {
    const url = this.construirURL(rota, params);
    history.pushState({}, "", url);
    this.navegarPara(rota);
  }

  replace(rota, params = {}) {
    const url = this.construirURL(rota, params);
    history.replaceState({}, "", url);
    this.navegarPara(rota);
  }
}

// Exemplo de uso do router
const router = new URLRouter();

router.adicionarRota("/", (params) => {
  console.log("Página inicial");
});

router.adicionarRota("/usuarios/:id", (params) => {
  console.log(`Usuário ID: ${params.id}`);
});

router.adicionarRota("/produtos/:categoria/:id?", (params) => {
  console.log(
    `Categoria: ${params.categoria}, Produto: ${params.id || "todos"}`
  );
});

router.adicionarRota("404", (params) => {
  console.log(`Página não encontrada: ${params.rota}`);
});

// Navegação
router.irPara("/usuarios/123");
router.push("/produtos/eletronicos/456");

// Analisador de URL avançado
class URLAnalyzer {
  constructor(urlString) {
    this.url = URLUtils.parse(urlString);
    this.analise = this.analisar();
  }

  analisar() {
    if (!this.url) return null;

    return {
      protocolo: this.analisarProtocolo(),
      dominio: this.analisarDominio(),
      caminho: this.analisarCaminho(),
      parametros: this.analisarParametros(),
      fragmento: this.analisarFragmento(),
      metadados: this.analisarMetadados(),
    };
  }

  analisarProtocolo() {
    const protocol = this.url.protocol.replace(":", "");

    return {
      valor: protocol,
      seguro: protocol === "https",
      comum: ["http", "https", "ftp", "ws", "wss"].includes(protocol),
    };
  }

  analisarDominio() {
    const hostname = this.url.hostname;
    const partes = hostname.split(".");

    return {
      completo: hostname,
      subdominio: partes.length > 2 ? partes.slice(0, -2).join(".") : null,
      dominio: partes.length >= 2 ? partes.slice(-2).join(".") : hostname,
      tld: partes.length >= 2 ? partes[partes.length - 1] : null,
      partes: partes,
    };
  }

  analisarCaminho() {
    const pathname = this.url.pathname;
    const partes = pathname.split("/").filter((p) => p);

    return {
      completo: pathname,
      partes: partes,
      extensao: this.obterExtensao(pathname),
      profundidade: partes.length,
    };
  }

  analisarParametros() {
    const params = {};
    const searchParams = this.url.searchParams;

    for (const [chave, valor] of searchParams) {
      params[chave] = {
        valor: valor,
        pareceId: /^\d+$/.test(valor),
        pareceEmail: /@/.test(valor),
        pareceURL: /^https?:\/\//.test(valor),
        comprimento: valor.length,
      };
    }

    return {
      quantidade: searchParams.size,
      parametros: params,
      string: this.url.search,
    };
  }

  analisarFragmento() {
    const fragment = this.url.hash.slice(1);

    return {
      presente: fragment !== "",
      valor: fragment || null,
      pareceId: /^[a-zA-Z0-9_-]+$/.test(fragment),
      pareceRota: fragment.startsWith("/"),
    };
  }

  analisarMetadados() {
    return {
      completa: this.url.href,
      origem: this.url.origin,
      porta: this.url.port || (this.url.protocol === "https:" ? "443" : "80"),
      autenticacao: this.url.username || this.url.password ? true : false,
      comprimentoTotal: this.url.href.length,
    };
  }

  obterExtensao(caminho) {
    const partes = caminho.split(".");
    if (partes.length > 1) {
      const ext = partes[partes.length - 1].toLowerCase();
      const extensoesComuns = [
        "html",
        "htm",
        "php",
        "asp",
        "jsp",
        "js",
        "css",
        "json",
        "xml",
      ];

      return {
        valor: ext,
        comum: extensoesComuns.includes(ext),
        pareceArquivo: /^[a-z0-9]{1,5}$/.test(ext),
      };
    }
    return null;
  }

  gerarRelatorio() {
    return {
      url: this.url.href,
      analise: this.analise,
      resumo: this.gerarResumo(),
      sugestoes: this.gerarSugestoes(),
    };
  }

  gerarResumo() {
    const a = this.analise;

    return {
      segura: a.protocolo.seguro,
      dominioValido: a.dominio.partes.length >= 2,
      possuiParametros: a.parametros.quantidade > 0,
      possuiFragmento: a.fragmento.presente,
      nivelSeguranca: a.protocolo.seguro ? "alta" : "baixa",
    };
  }

  gerarSugestoes() {
    const sugestoes = [];

    if (!this.analise.protocolo.seguro) {
      sugestoes.push("Considere usar HTTPS para maior segurança");
    }

    if (this.analise.parametros.quantidade > 5) {
      sugestoes.push(
        "Muitos parâmetros na query string, considere simplificar"
      );
    }

    if (this.analise.caminho.completo.length > 100) {
      sugestoes.push("Caminho muito longo, considere encurtar");
    }

    return sugestoes;
  }
}

// Exemplo de uso
const analyzer = new URLAnalyzer(
  "https://www.exemplo.com/path/to/page?param1=value1&id=123#section"
);
console.log(analyzer.gerarRelatorio());

// Gerador de URLs para API
class APIBuilder {
  constructor(baseURL) {
    this.baseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
    this.segmentos = [];
    this.params = new URLSearchParams();
    this.headers = {};
  }

  segmento(segmento) {
    this.segmentos.push(segmento);
    return this;
  }

  parametro(chave, valor) {
    if (valor !== undefined && valor !== null) {
      this.params.set(chave, valor);
    }
    return this;
  }

  parametros(parametros) {
    Object.entries(parametros).forEach(([chave, valor]) => {
      this.parametro(chave, valor);
    });
    return this;
  }

  cabecalho(chave, valor) {
    this.headers[chave] = valor;
    return this;
  }

  construir() {
    const caminho = this.segmentos.join("/");
    const url = new URL(caminho ? `${this.baseURL}/${caminho}` : this.baseURL);

    // Adicionar parâmetros
    this.params.forEach((valor, chave) => {
      url.searchParams.append(chave, valor);
    });

    return {
      url: url.href,
      headers: this.headers,
      config: {
        method: "GET",
        headers: this.headers,
      },
    };
  }

  async get() {
    const { url, config } = this.construir();
    const response = await fetch(url, config);
    return response.json();
  }

  async post(dados) {
    const { url, headers } = this.construir();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(dados),
    });
    return response.json();
  }

  async put(dados) {
    const { url, headers } = this.construir();
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(dados),
    });
    return response.json();
  }

  async delete() {
    const { url, config } = this.construir();
    const response = await fetch(url, {
      ...config,
      method: "DELETE",
    });
    return response.json();
  }

  reset() {
    this.segmentos = [];
    this.params = new URLSearchParams();
    this.headers = {};
    return this;
  }
}

// Exemplo de uso
const api = new APIBuilder("https://api.exemplo.com");

// Construir URL
const url = api
  .segmento("usuarios")
  .segmento("123")
  .parametro("campos", "nome,email")
  .parametro("ativo", true)
  .construir();

console.log(url.url); // https://api.exemplo.com/usuarios/123?campos=nome,email&ativo=true

// Fazer requisição
api
  .reset()
  .segmento("produtos")
  .parametro("categoria", "eletronicos")
  .cabecalho("Authorization", "Bearer token123")
  .get()
  .then((dados) => console.log(dados));
```

## Uso Integrado

```javascript
// Sistema completo de manipulação de dados
class SistemaDados {
  constructor() {
    this.jsonUtils = new JSONUtils();
    this.dateUtils = new DateUtils();
    this.regexUtils = new RegexUtils();
    this.urlUtils = new URLUtils();
    this.cache = new Map();
  }

  // Processamento de formulário completo
  async processarFormulario(formElement, endpoint) {
    // 1. Serializar formulário
    const serializer = new FormSerializer(formElement);
    const dados = serializer.toJSON();

    // 2. Validar dados
    const validacao = this.validarDadosFormulario(dados);
    if (!validacao.valido) {
      throw new Error(`Validação falhou: ${JSON.stringify(validacao.erros)}`);
    }

    // 3. Preparar dados para envio
    const dadosProcessados = this.processarDadosEnvio(dados);

    // 4. Construir URL com timestamp para cache busting
    const url = this.urlUtils.adicionarParametros(endpoint, {
      _t: Date.now(),
    });

    // 5. Enviar dados
    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(dadosProcessados),
    });

    // 6. Processar resposta
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const respostaDados = await resposta.json();

    // 7. Cache de resposta se for GET
    if (respostaDados.cacheable) {
      this.cache.set(endpoint, {
        dados: respostaDados,
        timestamp: Date.now(),
      });
    }

    return respostaDados;
  }

  validarDadosFormulario(dados) {
    const erros = {};

    Object.entries(dados).forEach(([campo, valor]) => {
      const validadores = this.obterValidadoresCampo(campo);

      validadores.forEach((validator) => {
        if (!validator.fn(valor)) {
          if (!erros[campo]) erros[campo] = [];
          erros[campo].push(validator.mensagem);
        }
      });
    });

    return {
      valido: Object.keys(erros).length === 0,
      erros,
    };
  }

  obterValidadoresCampo(campo) {
    const validadores = {
      email: [
        {
          fn: (valor) => this.regexUtils.validarEmail(valor),
          mensagem: "Email inválido",
        },
      ],
      senha: [
        {
          fn: (valor) => valor.length >= 8,
          mensagem: "Senha deve ter pelo menos 8 caracteres",
        },
        {
          fn: (valor) => this.regexUtils.validarSenhaForte(valor),
          mensagem: "Senha fraca",
        },
      ],
      data_nascimento: [
        {
          fn: (valor) => this.dateUtils.validar(valor),
          mensagem: "Data inválida",
        },
        {
          fn: (valor) => {
            const data = new Date(valor);
            const idade = this.dateUtils.idade(data);
            return idade >= 18;
          },
          mensagem: "Deve ser maior de 18 anos",
        },
      ],
      telefone: [
        {
          fn: (valor) => this.regexUtils.validarTelefone(valor),
          mensagem: "Telefone inválido",
        },
      ],
      url: [
        {
          fn: (valor) => this.regexUtils.validarURL(valor),
          mensagem: "URL inválida",
        },
      ],
    };

    return validadores[campo] || [];
  }

  processarDadosEnvio(dados) {
    const processados = { ...dados };

    // Converter datas para ISO string
    Object.keys(processados).forEach((chave) => {
      if (chave.includes("data") || chave.includes("date")) {
        try {
          const data = new Date(processados[chave]);
          if (!isNaN(data.getTime())) {
            processados[chave] = data.toISOString();
          }
        } catch {
          // Manter valor original se não for data
        }
      }

      // Remover espaços extras
      if (typeof processados[chave] === "string") {
        processados[chave] = processados[chave].trim();
      }
    });

    return processados;
  }

  // Análise e transformação de dados
  analisarDadosCSV(csvString) {
    const linhas = csvString.split("\n");
    const cabecalhos = linhas[0].split(",").map((h) => h.trim());

    const dados = linhas.slice(1).map((linha) => {
      const valores = linha.split(",").map((v) => v.trim());
      const objeto = {};

      cabecalhos.forEach((cabecalho, index) => {
        let valor = valores[index];

        // Tentar converter para número
        if (!isNaN(valor) && valor !== "") {
          valor = Number(valor);
        }
        // Tentar converter para data
        else if (this.dateUtils.validar(valor)) {
          valor = new Date(valor);
        }
        // Tentar converter para booleano
        else if (
          valor.toLowerCase() === "true" ||
          valor.toLowerCase() === "false"
        ) {
          valor = valor.toLowerCase() === "true";
        }

        objeto[cabecalho] = valor;
      });

      return objeto;
    });

    return {
      cabecalhos,
      dados,
      total: dados.length,
      tipos: this.analisarTiposDados(dados),
    };
  }

  analisarTiposDados(dados) {
    if (dados.length === 0) return {};

    const primeiro = dados[0];
    const tipos = {};

    Object.keys(primeiro).forEach((chave) => {
      const valores = dados.map((item) => item[chave]);

      // Determinar tipo predominante
      const tipoContagem = {
        string: 0,
        number: 0,
        boolean: 0,
        object: 0,
        date: 0,
      };

      valores.forEach((valor) => {
        if (valor instanceof Date) tipoContagem.date++;
        else if (typeof valor === "string") tipoContagem.string++;
        else if (typeof valor === "number") tipoContagem.number++;
        else if (typeof valor === "boolean") tipoContagem.boolean++;
        else if (typeof valor === "object") tipoContagem.object++;
      });

      const tipoPredominante = Object.entries(tipoContagem).sort(
        (a, b) => b[1] - a[1]
      )[0][0];

      tipos[chave] = {
        tipo: tipoPredominante,
        unico: new Set(valores).size,
        nulos: valores.filter((v) => v == null).length,
        exemplo: valores[0],
      };
    });

    return tipos;
  }

  // Geração de relatórios
  gerarRelatorio(dados, config) {
    const relatorio = {
      metadata: {
        geradoEm: new Date().toISOString(),
        totalRegistros: dados.length,
        filtros: config.filtros || {},
      },
      resumo: {},
      detalhes: [],
      estatisticas: this.calcularEstatisticas(dados, config.campos),
    };

    // Agrupar dados se configurado
    if (config.agruparPor) {
      relatorio.agrupamentos = this.agruparDados(dados, config.agruparPor);
    }

    // Filtrar dados se configurado
    if (config.filtrar) {
      relatorio.dadosFiltrados = dados.filter(config.filtrar);
    }

    // Ordenar dados se configurado
    if (config.ordenarPor) {
      relatorio.dadosOrdenados = [...dados].sort((a, b) => {
        return a[config.ordenarPor] > b[config.ordenarPor] ? 1 : -1;
      });
    }

    return relatorio;
  }

  calcularEstatisticas(dados, campos) {
    const estatisticas = {};

    campos.forEach((campo) => {
      const valores = dados.map((item) => item[campo]).filter((v) => v != null);

      if (valores.length === 0) return;

      if (typeof valores[0] === "number") {
        estatisticas[campo] = {
          media: valores.reduce((a, b) => a + b, 0) / valores.length,
          mediana: this.calcularMediana(valores),
          moda: this.calcularModa(valores),
          min: Math.min(...valores),
          max: Math.max(...valores),
          soma: valores.reduce((a, b) => a + b, 0),
          desvioPadrao: this.calcularDesvioPadrao(valores),
        };
      } else if (valores[0] instanceof Date) {
        const timestamps = valores.map((d) => d.getTime());
        estatisticas[campo] = {
          maisAntigo: new Date(Math.min(...timestamps)),
          maisRecente: new Date(Math.max(...timestamps)),
          periodo: this.dateUtils.diferencaEmDias(
            new Date(Math.min(...timestamps)),
            new Date(Math.max(...timestamps))
          ),
        };
      } else {
        estatisticas[campo] = {
          totalUnico: new Set(valores).size,
          valoresMaisComuns: this.obterValoresMaisComuns(valores, 5),
        };
      }
    });

    return estatisticas;
  }

  calcularMediana(valores) {
    const sorted = [...valores].sort((a, b) => a - b);
    const meio = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[meio - 1] + sorted[meio]) / 2;
    } else {
      return sorted[meio];
    }
  }

  calcularModa(valores) {
    const frequencia = {};
    let maxFreq = 0;
    let moda = [];

    valores.forEach((valor) => {
      frequencia[valor] = (frequencia[valor] || 0) + 1;
      if (frequencia[valor] > maxFreq) {
        maxFreq = frequencia[valor];
        moda = [valor];
      } else if (frequencia[valor] === maxFreq) {
        moda.push(valor);
      }
    });

    return moda.length === 1 ? moda[0] : moda;
  }

  calcularDesvioPadrao(valores) {
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    const variancia =
      valores.reduce((a, b) => a + Math.pow(b - media, 2), 0) / valores.length;
    return Math.sqrt(variancia);
  }

  obterValoresMaisComuns(valores, limite) {
    const frequencia = {};

    valores.forEach((valor) => {
      frequencia[valor] = (frequencia[valor] || 0) + 1;
    });

    return Object.entries(frequencia)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limite)
      .map(([valor, freq]) => ({ valor, frequencia: freq }));
  }

  agruparDados(dados, campo) {
    const grupos = {};

    dados.forEach((item) => {
      const valor = item[campo];
      if (!grupos[valor]) {
        grupos[valor] = [];
      }
      grupos[valor].push(item);
    });

    return Object.entries(grupos).map(([valor, items]) => ({
      grupo: valor,
      total: items.length,
      itens: items,
    }));
  }
}

// Exemplo de uso completo
const sistema = new SistemaDados();

// Processar CSV
const csv = `nome,idade,email,data_cadastro
João,30,joao@exemplo.com,2024-01-15
Maria,25,maria@exemplo.com,2024-01-16
Carlos,35,carlos@exemplo.com,2024-01-17`;

const dadosCSV = sistema.analisarDadosCSV(csv);
console.log(dadosCSV);

// Gerar relatório
const relatorio = sistema.gerarRelatorio(dadosCSV.dados, {
  campos: ["idade"],
  agruparPor: "nome",
  ordenarPor: "idade",
});

console.log(relatorio);

// Exportar dados em diferentes formatos
class ExportadorDados {
  constructor(dados) {
    this.dados = dados;
  }

  toJSON(opcoes = {}) {
    return JSON.stringify(this.dados, null, opcoes.espacamento || 2);
  }

  toCSV(opcoes = {}) {
    if (!Array.isArray(this.dados) || this.dados.length === 0) {
      return "";
    }

    const separador = opcoes.separador || ",";
    const cabecalhos = opcoes.cabecalhos || Object.keys(this.dados[0]);

    let csv = cabecalhos.join(separador) + "\n";

    this.dados.forEach((item) => {
      const linha = cabecalhos.map((cabecalho) => {
        let valor = item[cabecalho];

        if (valor instanceof Date) {
          valor = valor.toISOString();
        } else if (typeof valor === "object") {
          valor = JSON.stringify(valor);
        } else if (typeof valor === "string" && valor.includes(separador)) {
          valor = `"${valor}"`;
        }

        return valor || "";
      });

      csv += linha.join(separador) + "\n";
    });

    return csv;
  }

  toHTML(opcoes = {}) {
    if (!Array.isArray(this.dados) || this.dados.length === 0) {
      return "<p>Sem dados</p>";
    }

    const cabecalhos = opcoes.cabecalhos || Object.keys(this.dados[0]);
    const titulo = opcoes.titulo || "Relatório";

    let html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${titulo}</title>
                <style>
                    table { border-collapse: collapse; width: 100%; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                    tr:nth-child(even) { background-color: #f9f9f9; }
                </style>
            </head>
            <body>
                <h1>${titulo}</h1>
                <table>
                    <thead>
                        <tr>
                            ${cabecalhos.map((h) => `<th>${h}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
        `;

    this.dados.forEach((item) => {
      html += "<tr>";

      cabecalhos.forEach((cabecalho) => {
        let valor = item[cabecalho];

        if (valor instanceof Date) {
          valor = valor.toLocaleDateString();
        } else if (typeof valor === "object") {
          valor = JSON.stringify(valor);
        }

        html += `<td>${valor || ""}</td>`;
      });

      html += "</tr>";
    });

    html += `
                    </tbody>
                </table>
                <p>Total de registros: ${this.dados.length}</p>
                <p>Gerado em: ${new Date().toLocaleString()}</p>
            </body>
            </html>
        `;

    return html;
  }

  toXML(opcoes = {}) {
    const raiz = opcoes.raiz || "dados";
    const itemNome = opcoes.itemNome || "item";

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<${raiz}>\n`;

    this.dados.forEach((item) => {
      xml += `  <${itemNome}>\n`;

      Object.entries(item).forEach(([chave, valor]) => {
        if (valor instanceof Date) {
          valor = valor.toISOString();
        }

        xml += `    <${chave}>${this.escapeXML(String(valor))}</${chave}>\n`;
      });

      xml += `  </${itemNome}>\n`;
    });

    xml += `</${raiz}>`;

    return xml;
  }

  escapeXML(texto) {
    return texto.replace(/[<>&'"]/g, (char) => {
      switch (char) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
        default:
          return char;
      }
    });
  }

  download(nomeArquivo, formato = "json") {
    let conteudo, tipoMIME, extensao;

    switch (formato.toLowerCase()) {
      case "json":
        conteudo = this.toJSON();
        tipoMIME = "application/json";
        extensao = "json";
        break;
      case "csv":
        conteudo = this.toCSV();
        tipoMIME = "text/csv";
        extensao = "csv";
        break;
      case "html":
        conteudo = this.toHTML();
        tipoMIME = "text/html";
        extensao = "html";
        break;
      case "xml":
        conteudo = this.toXML();
        tipoMIME = "application/xml";
        extensao = "xml";
        break;
      default:
        throw new Error(`Formato não suportado: ${formato}`);
    }

    const blob = new Blob([conteudo], { type: tipoMIME });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `${nomeArquivo}.${extensao}`;
    a.click();

    URL.revokeObjectURL(url);
  }
}

// Exemplo de uso do exportador
const dados = [
  { nome: "João", idade: 30, email: "joao@exemplo.com" },
  { nome: "Maria", idade: 25, email: "maria@exemplo.com" },
];

const exportador = new ExportadorDados(dados);
console.log(exportador.toJSON());
console.log(exportador.toCSV());
console.log(exportador.toHTML({ titulo: "Relatório de Usuários" }));

// Para download
// exportador.download("usuarios", "csv");
```

Este material cobre todas as APIs de manipulação de dados do JavaScript moderno com exemplos práticos e implementações robustas para uso em projetos reais.
