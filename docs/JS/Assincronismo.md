# 7. ASSINCRONISMO

## Callbacks

### Fundamentos de Callbacks

```javascript
// Callback: função passada como argumento para outra função
// Para ser executada em algum momento no futuro

// Exemplo básico de callback
function saudacao(nome, callback) {
  console.log(`Olá, ${nome}!`);
  callback(); // Executa a função callback
}

function despedida() {
  console.log("Até logo!");
}

saudacao("João", despedida);
// Saída: "Olá, João!" seguido de "Até logo!"

// Callback anônima
saudacao("Maria", function () {
  console.log("Foi um prazer!");
});

// Callback com parâmetros
function processarDados(dados, callback) {
  console.log("Processando dados...");
  const resultado = dados.toUpperCase();
  callback(resultado); // Passa resultado para callback
}

processarDados("texto", function (resultado) {
  console.log("Resultado:", resultado);
});

// Callback com múltiplos parâmetros
function calcular(a, b, operacao, callback) {
  const resultado = operacao(a, b);
  callback(a, b, resultado);
}

calcular(
  5,
  3,
  function (x, y) {
    return x + y;
  },
  function (a, b, resultado) {
    console.log(`${a} + ${b} = ${resultado}`);
  }
);

// Callbacks em métodos de array
const numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function (numero, indice) {
  console.log(`Índice ${indice}: ${numero}`);
});

// map
const dobrados = numeros.map(function (numero) {
  return numero * 2;
});

// filter
const pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

// reduce
const soma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
```

### Callbacks Assíncronas

```javascript
// Callbacks para operações assíncronas

// setTimeout - executa callback após delay
console.log("Início");

setTimeout(function () {
  console.log("Executado após 1 segundo");
}, 1000);

console.log("Fim");
// Saída: "Início", "Fim", "Executado após 1 segundo"

// setInterval - executa callback repetidamente
let contador = 0;
const intervalo = setInterval(function () {
  contador++;
  console.log(`Contador: ${contador}`);

  if (contador === 5) {
    clearInterval(intervalo); // Para o intervalo
    console.log("Intervalo parado");
  }
}, 500);

// Event listeners (callbacks assíncronas)
const botao = document.querySelector("button");
botao.addEventListener("click", function (event) {
  console.log("Botão clicado!", event);
});

// Callbacks para leitura de arquivos (Node.js)
// fs.readFile('arquivo.txt', 'utf8', function(erro, dados) {
//     if (erro) {
//         console.error('Erro ao ler arquivo:', erro);
//         return;
//     }
//     console.log('Conteúdo:', dados);
// });

// Simulação de API com callback
function buscarUsuario(id, callback) {
  console.log(`Buscando usuário ${id}...`);

  // Simulando operação assíncrona
  setTimeout(function () {
    const usuario = {
      id: id,
      nome: "João Silva",
      email: "joao@exemplo.com",
    };
    callback(null, usuario); // Primeiro parâmetro é erro (null se sucesso)
  }, 1000);
}

// Uso
buscarUsuario(1, function (erro, usuario) {
  if (erro) {
    console.error("Erro:", erro);
    return;
  }
  console.log("Usuário encontrado:", usuario);
});

// Padrão error-first callback (Node.js style)
function operacaoAssincrona(callback) {
  setTimeout(function () {
    const sucesso = Math.random() > 0.5;

    if (sucesso) {
      callback(null, "Operação bem-sucedida");
    } else {
      callback(new Error("Algo deu errado"), null);
    }
  }, 1000);
}

operacaoAssincrona(function (erro, resultado) {
  if (erro) {
    console.error("Erro:", erro.message);
    return;
  }
  console.log("Resultado:", resultado);
});
```

### Callback Hell e Soluções

```javascript
// Callback Hell (Pyramid of Doom)
// Múltiplas operações assíncronas aninhadas

function buscarDadosUsuario(id, callback) {
  setTimeout(function () {
    console.log("1. Buscando dados do usuário...");
    const usuario = { id: id, nome: "João" };
    callback(null, usuario);
  }, 1000);
}

function buscarPostsUsuario(usuario, callback) {
  setTimeout(function () {
    console.log("2. Buscando posts do usuário...");
    const posts = ["Post 1", "Post 2", "Post 3"];
    callback(null, { usuario, posts });
  }, 1000);
}

function buscarComentariosPosts(dados, callback) {
  setTimeout(function () {
    console.log("3. Buscando comentários...");
    const comentarios = ["Comentário 1", "Comentário 2"];
    callback(null, { ...dados, comentarios });
  }, 1000);
}

// CALLBACK HELL - difícil de ler e manter
buscarDadosUsuario(1, function (erro1, usuario) {
  if (erro1) {
    console.error(erro1);
    return;
  }

  buscarPostsUsuario(usuario, function (erro2, dadosComPosts) {
    if (erro2) {
      console.error(erro2);
      return;
    }

    buscarComentariosPosts(dadosComPosts, function (erro3, dadosCompletos) {
      if (erro3) {
        console.error(erro3);
        return;
      }

      console.log("Dados completos:", dadosCompletos);
      // Mais operações aninhadas aqui...
    });
  });
});

// SOLUÇÕES para Callback Hell

// 1. Funções nomeadas (separar callbacks)
function handleUsuario(erro, usuario) {
  if (erro) {
    console.error(erro);
    return;
  }
  buscarPostsUsuario(usuario, handlePosts);
}

function handlePosts(erro, dadosComPosts) {
  if (erro) {
    console.error(erro);
    return;
  }
  buscarComentariosPosts(dadosComPosts, handleComentarios);
}

function handleComentarios(erro, dadosCompletos) {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log("Dados completos (separado):", dadosCompletos);
}

buscarDadosUsuario(1, handleUsuario);

// 2. Biblioteca async.js (Node.js)
// npm install async
/*
const async = require('async');

async.waterfall([
    function(callback) {
        buscarDadosUsuario(1, callback);
    },
    function(usuario, callback) {
        buscarPostsUsuario(usuario, callback);
    },
    function(dadosComPosts, callback) {
        buscarComentariosPosts(dadosComPosts, callback);
    }
], function(erro, resultado) {
    if (erro) {
        console.error(erro);
        return;
    }
    console.log('Resultado com async.js:', resultado);
});
*/

// 3. Promises (solução moderna)
// Ver seção de Promises

// 4. Async/Await (solução mais moderna)
// Ver seção de Async/Await

// Exemplo prático: Processamento sequencial
function etapa1(callback) {
  setTimeout(() => {
    console.log("Etapa 1 completa");
    callback(null, "resultado1");
  }, 1000);
}

function etapa2(dado, callback) {
  setTimeout(() => {
    console.log("Etapa 2 completa com:", dado);
    callback(null, "resultado2");
  }, 1000);
}

function etapa3(dado, callback) {
  setTimeout(() => {
    console.log("Etapa 3 completa com:", dado);
    callback(null, "resultado3");
  }, 1000);
}

// Encadeamento controlado
etapa1(function (erro, resultado1) {
  if (erro) return console.error(erro);

  etapa2(resultado1, function (erro, resultado2) {
    if (erro) return console.error(erro);

    etapa3(resultado2, function (erro, resultado3) {
      if (erro) return console.error(erro);
      console.log("Processamento completo:", resultado3);
    });
  });
});

// Middleware pattern (como no Express.js)
function createMiddlewarePipeline(middlewares) {
  return function (input, finalCallback) {
    let index = 0;

    function next(erro, resultado) {
      if (erro) return finalCallback(erro);

      const middleware = middlewares[index++];
      if (!middleware) return finalCallback(null, resultado);

      try {
        middleware(resultado, next);
      } catch (err) {
        finalCallback(err);
      }
    }

    next(null, input);
  };
}

// Uso do middleware pipeline
const pipeline = createMiddlewarePipeline([etapa1, etapa2, etapa3]);

pipeline("dados iniciais", function (erro, resultado) {
  if (erro) {
    console.error("Erro no pipeline:", erro);
    return;
  }
  console.log("Pipeline completo:", resultado);
});
```

### Padrões Avançados com Callbacks

```javascript
// Throttle e Debounce com callbacks
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const callback = args.pop(); // Último argumento é o callback
    const context = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      func.apply(context, [...args, callback]);
    }, delay);
  };
}

function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    const callback = args.pop();
    const context = this;

    if (!inThrottle) {
      func.apply(context, [...args, callback]);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    } else {
      callback(new Error("Throttled - aguarde antes de tentar novamente"));
    }
  };
}

// Uso
const buscaDebounced = debounce(function (termo, callback) {
  console.log(`Buscando: ${termo}`);
  // Simular busca
  setTimeout(() => {
    callback(null, [`Resultado para ${termo}`]);
  }, 500);
}, 300);

// Chamadas rápidas (só a última executa)
buscaDebounced("a", (erro, r) => console.log(r));
buscaDebounced("ab", (erro, r) => console.log(r));
buscaDebounced("abc", (erro, r) => console.log(r)); // Só esta executa

// Retry pattern com callback
function retryOperation(operation, maxRetries, delay, callback) {
  let retries = 0;

  function attempt() {
    operation(function (erro, resultado) {
      if (erro) {
        retries++;
        console.log(`Tentativa ${retries} falhou: ${erro.message}`);

        if (retries < maxRetries) {
          setTimeout(attempt, delay);
        } else {
          callback(new Error(`Falhou após ${maxRetries} tentativas`));
        }
      } else {
        callback(null, resultado);
      }
    });
  }

  attempt();
}

// Uso
retryOperation(
  function (callback) {
    const sucesso = Math.random() > 0.7; // 30% chance de sucesso
    setTimeout(() => {
      if (sucesso) {
        callback(null, "Operação bem-sucedida");
      } else {
        callback(new Error("Falha temporária"));
      }
    }, 500);
  },
  3,
  1000,
  function (erro, resultado) {
    if (erro) {
      console.error("Falha final:", erro.message);
    } else {
      console.log("Sucesso:", resultado);
    }
  }
);

// Timeout pattern para callbacks
function withTimeout(operation, timeout, callback) {
  let terminou = false;

  const timeoutId = setTimeout(function () {
    if (!terminou) {
      terminou = true;
      callback(new Error("Timeout excedido"));
    }
  }, timeout);

  operation(function (erro, resultado) {
    if (!terminou) {
      terminou = true;
      clearTimeout(timeoutId);
      callback(erro, resultado);
    }
  });
}

// Uso
withTimeout(
  function (callback) {
    // Operação que pode demorar
    setTimeout(() => {
      callback(null, "Operação completa");
    }, 2000);
  },
  1000,
  function (erro, resultado) {
    if (erro) {
      console.error("Erro:", erro.message); // Timeout excedido
    } else {
      console.log("Resultado:", resultado);
    }
  }
);

// Parallel execution com callbacks
function parallel(tasks, callback) {
  let resultados = [];
  let erros = [];
  let completas = 0;
  const total = tasks.length;

  if (total === 0) {
    return callback(null, []);
  }

  tasks.forEach(function (task, index) {
    task(function (erro, resultado) {
      if (erro) {
        erros[index] = erro;
      } else {
        resultados[index] = resultado;
      }

      completas++;

      if (completas === total) {
        if (erros.length > 0) {
          callback(erros, resultados);
        } else {
          callback(null, resultados);
        }
      }
    });
  });
}

// Uso
parallel(
  [
    function (cb) {
      setTimeout(() => cb(null, "Tarefa 1"), 1000);
    },
    function (cb) {
      setTimeout(() => cb(null, "Tarefa 2"), 500);
    },
    function (cb) {
      setTimeout(() => cb(null, "Tarefa 3"), 800);
    },
  ],
  function (erros, resultados) {
    if (erros && erros.some((e) => e)) {
      console.error("Algumas tarefas falharam:", erros);
    }
    console.log("Resultados:", resultados);
  }
);

// Memoization com callback
function memoizeAsync(func) {
  const cache = new Map();

  return function (...args) {
    const callback = args.pop();
    const chave = JSON.stringify(args);

    if (cache.has(chave)) {
      console.log("Retornando do cache:", chave);
      // Executar callback no próximo tick para consistência
      process.nextTick(() => callback(null, cache.get(chave)));
      return;
    }

    func(...args, function (erro, resultado) {
      if (!erro) {
        cache.set(chave, resultado);
      }
      callback(erro, resultado);
    });
  };
}

// Uso
const buscaUsuarioMemoizada = memoizeAsync(function (id, callback) {
  console.log(`Buscando usuário ${id}...`);
  setTimeout(() => {
    callback(null, { id, nome: `Usuário ${id}` });
  }, 1000);
});

// Primeira vez busca
buscaUsuarioMemoizada(1, (erro, usuario) => console.log("1:", usuario));
// Segunda vez usa cache
setTimeout(() => {
  buscaUsuarioMemoizada(1, (erro, usuario) =>
    console.log("2 (cache):", usuario)
  );
}, 1500);
```

## Promises (then, catch, finally)

### Fundamentos de Promises

```javascript
// Promise: objeto que representa a eventual conclusão ou falha de uma operação assíncrona
// Estados: pending, fulfilled, rejected

// Criando uma Promise
const minhaPromise = new Promise(function (resolve, reject) {
  // Código assíncrono aqui

  const sucesso = true; // Simulação

  setTimeout(function () {
    if (sucesso) {
      resolve("Operação bem-sucedida!"); // Promise é resolvida
    } else {
      reject(new Error("Algo deu errado")); // Promise é rejeitada
    }
  }, 1000);
});

// Consumindo uma Promise
minhaPromise
  .then(function (resultado) {
    console.log("Sucesso:", resultado);
  })
  .catch(function (erro) {
    console.error("Erro:", erro.message);
  })
  .finally(function () {
    console.log("Executado sempre (sucesso ou erro)");
  });

// Promise estática (já resolvida)
const promiseResolvida = Promise.resolve("Valor imediato");
promiseResolvida.then((valor) => console.log(valor)); // "Valor imediato"

// Promise estática (já rejeitada)
const promiseRejeitada = Promise.reject(new Error("Erro imediato"));
promiseRejeitada.catch((erro) => console.error(erro.message)); // "Erro imediato"

// Encadeamento de Promises
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Buscando usuário ${id}...`);
      resolve({ id: id, nome: `Usuário ${id}` });
    }, 1000);
  });
}

function buscarPosts(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Buscando posts de ${usuario.nome}...`);
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  });
}

// Encadeamento com then
buscarUsuario(1)
  .then((usuario) => {
    console.log("Usuário encontrado:", usuario);
    return buscarPosts(usuario); // Retorna nova Promise
  })
  .then((posts) => {
    console.log("Posts encontrados:", posts);
    return posts.length; // Valor síncrono também funciona
  })
  .then((numeroPosts) => {
    console.log(`Total de posts: ${numeroPosts}`);
  })
  .catch((erro) => {
    console.error("Erro no fluxo:", erro);
  });

// Promises vs Callbacks
function comCallback(id, callback) {
  setTimeout(() => {
    if (id > 0) {
      callback(null, { id, nome: "João" });
    } else {
      callback(new Error("ID inválido"));
    }
  }, 1000);
}

function comPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: "João" });
      } else {
        reject(new Error("ID inválido"));
      }
    }, 1000);
  });
}

// Comparação
comCallback(1, (erro, usuario) => {
  if (erro) console.error(erro);
  else console.log("Callback:", usuario);
});

comPromise(1)
  .then((usuario) => console.log("Promise:", usuario))
  .catch((erro) => console.error(erro));
```

### Métodos Then, Catch, Finally

```javascript
// .then() - lida com sucesso
const promise = Promise.resolve("valor inicial");

promise
  .then(function (valor) {
    console.log("Primeiro then:", valor);
    return valor.toUpperCase(); // Retorna valor transformado
  })
  .then(function (valor) {
    console.log("Segundo then:", valor);
    return valor.length; // Retorna novo valor
  })
  .then(function (valor) {
    console.log("Terceiro then:", valor);
    throw new Error("Erro intencional"); // Lança erro
  })
  .then(function (valor) {
    console.log("Este then NÃO executa (por causa do erro)");
  });

// .catch() - lida com erros
promise
  .then(() => {
    throw new Error("Erro no then");
  })
  .catch(function (erro) {
    console.error("Erro capturado:", erro.message);
    return "valor recuperado"; // Pode retornar valor para continuar
  })
  .then(function (valor) {
    console.log("Continua após catch:", valor);
  });

// Múltiplos catchs
promise
  .then(() => {
    throw new Error("Erro 1");
  })
  .catch((erro) => {
    console.error("Catch 1:", erro.message);
    throw new Error("Erro 2"); // Lança novo erro
  })
  .catch((erro) => {
    console.error("Catch 2:", erro.message);
    return "recuperado"; // Recupera
  })
  .then((valor) => console.log("Final:", valor));

// .finally() - executa sempre
const loading = true;

Promise.resolve("dados")
  .then((valor) => {
    console.log("Processando:", valor);
    return valor;
  })
  .catch((erro) => {
    console.error("Erro:", erro);
    throw erro;
  })
  .finally(() => {
    loading = false;
    console.log("Finalizado (sucesso ou erro)");
  });

// Exemplo prático com fetch
function buscarDadosAPI() {
  return new Promise((resolve, reject) => {
    // Simulando API
    setTimeout(() => {
      const sucesso = Math.random() > 0.3;
      if (sucesso) {
        resolve({ dados: "Conteúdo da API" });
      } else {
        reject(new Error("Falha na API"));
      }
    }, 1000);
  });
}

buscarDadosAPI()
  .then((resposta) => {
    console.log("Dados recebidos:", resposta);
    return processarDados(resposta);
  })
  .then((dadosProcessados) => {
    console.log("Dados processados:", dadosProcessados);
    return salvarDados(dadosProcessados);
  })
  .then(() => {
    console.log("Dados salvos com sucesso");
  })
  .catch((erro) => {
    console.error("Falha no fluxo:", erro.message);
    mostrarErroParaUsuario(erro);
  })
  .finally(() => {
    esconderLoading();
    console.log("Operação finalizada");
  });

function processarDados(dados) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dados.dados.toUpperCase()), 500);
  });
}

function salvarDados(dados) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
}

// Tratamento de erros específicos
class ErroAPI extends Error {
  constructor(mensagem, codigo) {
    super(mensagem);
    this.codigo = codigo;
    this.name = "ErroAPI";
  }
}

function fazerRequisicao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const aleatorio = Math.random();
      if (aleatorio > 0.7) {
        resolve({ status: 200, dados: "Sucesso" });
      } else if (aleatorio > 0.4) {
        reject(new ErroAPI("Não autorizado", 401));
      } else if (aleatorio > 0.2) {
        reject(new ErroAPI("Servidor indisponível", 503));
      } else {
        reject(new Error("Erro desconhecido"));
      }
    }, 1000);
  });
}

fazerRequisicao()
  .then((resposta) => {
    console.log("Sucesso:", resposta);
  })
  .catch((erro) => {
    if (erro instanceof ErroAPI) {
      switch (erro.codigo) {
        case 401:
          console.error("Erro de autenticação:", erro.message);
          redirecionarParaLogin();
          break;
        case 503:
          console.error("Servidor indisponível:", erro.message);
          mostrarMensagemManutencao();
          break;
        default:
          console.error("Erro da API:", erro.message);
      }
    } else {
      console.error("Erro desconhecido:", erro);
    }
  });

// Promise retornando outra Promise
function operacaoComplexa() {
  return Promise.resolve("início")
    .then((valor) => {
      console.log("Passo 1:", valor);
      return new Promise((resolve) => {
        setTimeout(() => resolve(valor + " -> passo 2"), 500);
      });
    })
    .then((valor) => {
      console.log("Passo 2:", valor);
      return Promise.resolve(valor + " -> passo 3");
    })
    .then((valor) => {
      console.log("Passo 3:", valor);
      return valor + " -> fim";
    });
}

operacaoComplexa().then((resultado) => {
  console.log("Resultado final:", resultado);
});
```

### Métodos Estáticos de Promise

```javascript
// Promise.all() - executa múltiplas promises em paralelo
const promise1 = Promise.resolve(3);
const promise2 = 42; // Valores não-promise são convertidos
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((valores) => {
    console.log("Promise.all - todos resolvidos:", valores);
    // valores = [3, 42, 'foo']
  })
  .catch((erro) => {
    console.error("Promise.all - um falhou:", erro);
  });

// Exemplo prático
function buscarUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ id, nome: `Usuário ${id}` }),
      Math.random() * 1000
    );
  });
}

function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ id, nome: `Produto ${id}` }),
      Math.random() * 1000
    );
  });
}

function buscarPedido(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, total: id * 100 }), Math.random() * 1000);
  });
}

Promise.all([buscarUsuario(1), buscarProduto(5), buscarPedido(3)])
  .then((resultados) => {
    const [usuario, produto, pedido] = resultados;
    console.log("Todos dados carregados:", { usuario, produto, pedido });
  })
  .catch((erro) => {
    console.error("Falha ao carregar dados:", erro);
  });

// Promise.allSettled() - espera todas, independente de sucesso/falha
const promises = [
  Promise.resolve("sucesso 1"),
  Promise.reject(new Error("falha 1")),
  Promise.resolve("sucesso 2"),
  Promise.reject(new Error("falha 2")),
];

Promise.allSettled(promises).then((resultados) => {
  console.log("Promise.allSettled:");
  resultados.forEach((resultado, index) => {
    if (resultado.status === "fulfilled") {
      console.log(`  ${index}: Sucesso - ${resultado.value}`);
    } else {
      console.log(`  ${index}: Falha - ${resultado.reason.message}`);
    }
  });
});

// Promise.race() - primeira promise que resolver ou rejeitar
const timeoutPromise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Timeout")), 2000);
});

const dataPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Dados recebidos"), Math.random() * 3000);
});

Promise.race([dataPromise, timeoutPromise])
  .then((dados) => {
    console.log("Dados recebidos antes do timeout:", dados);
  })
  .catch((erro) => {
    console.error("Timeout ou erro:", erro.message);
  });

// Promise.any() - primeira promise que resolver com sucesso (ES2021)
const promises2 = [
  Promise.reject(new Error("Erro 1")),
  new Promise((resolve) => setTimeout(resolve, 100, "Rápido")),
  new Promise((resolve) => setTimeout(resolve, 200, "Devagar")),
];

Promise.any(promises2)
  .then((primeiroSucesso) => {
    console.log("Primeiro sucesso:", primeiroSucesso); // "Rápido"
  })
  .catch((erro) => {
    console.error("Todos falharam:", erro);
  });

// Promise.resolve() - cria promise já resolvida
Promise.resolve("valor imediato").then((valor) =>
  console.log("Resolvido:", valor)
);

// Promise.reject() - cria promise já rejeitada
Promise.reject(new Error("erro imediato")).catch((erro) =>
  console.error("Rejeitado:", erro.message)
);

// Exemplos combinados
class API {
  static buscarVariosRecursos(ids) {
    const promises = ids.map((id) => this.buscarRecurso(id));
    return Promise.all(promises);
  }

  static buscarRecursoComTimeout(id, timeout = 5000) {
    const recursoPromise = this.buscarRecurso(id);
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error(`Timeout ao buscar recurso ${id}`)),
        timeout
      );
    });

    return Promise.race([recursoPromise, timeoutPromise]);
  }

  static buscarPrimeiroRecursoDisponivel(ids) {
    const promises = ids.map((id) => this.buscarRecurso(id).catch(() => null));
    return Promise.any(promises.filter((p) => p !== null));
  }

  static buscarRecurso(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          resolve({ id, dados: `Recurso ${id}` });
        } else {
          reject(new Error(`Falha ao buscar recurso ${id}`));
        }
      }, Math.random() * 2000);
    });
  }
}

// Testando
console.log("\n=== Promise.all ===");
API.buscarVariosRecursos([1, 2, 3])
  .then((recursos) => console.log("Recursos:", recursos))
  .catch((erro) => console.error("Erro:", erro.message));

console.log("\n=== Promise.race (com timeout) ===");
API.buscarRecursoComTimeout(4, 1000)
  .then((recurso) => console.log("Recurso com timeout:", recurso))
  .catch((erro) => console.error("Erro:", erro.message));

console.log("\n=== Promise.any ===");
API.buscarPrimeiroRecursoDisponivel([5, 6, 7])
  .then((recurso) => console.log("Primeiro recurso disponível:", recurso))
  .catch((erro) => console.error("Erro:", erro.message));

// Implementando polyfill para Promise.allSettled (se não suportado)
if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return Promise.all(
      promises.map((p) =>
        Promise.resolve(p).then(
          (value) => ({
            status: "fulfilled",
            value,
          }),
          (reason) => ({
            status: "rejected",
            reason,
          })
        )
      )
    );
  };
}
```

### Padrões e Técnicas Avançadas com Promises

```javascript
// Retry pattern com Promise
function retryWithPromise(fn, maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function attempt() {
      fn()
        .then(resolve)
        .catch((error) => {
          attempts++;
          console.log(`Tentativa ${attempts} falhou: ${error.message}`);

          if (attempts >= maxRetries) {
            reject(
              new Error(
                `Falhou após ${maxRetries} tentativas: ${error.message}`
              )
            );
          } else {
            setTimeout(attempt, delay * attempts); // Backoff exponencial
          }
        });
    }

    attempt();
  });
}

// Uso
retryWithPromise(
  () => {
    return new Promise((resolve, reject) => {
      const sucesso = Math.random() > 0.7;
      setTimeout(() => {
        if (sucesso) {
          resolve("Operação bem-sucedida");
        } else {
          reject(new Error("Falha aleatória"));
        }
      }, 500);
    });
  },
  3,
  1000
).then(
  (resultado) => console.log("Sucesso final:", resultado),
  (erro) => console.error("Falha final:", erro.message)
);

// Timeout pattern com Promise
function withTimeout(promise, timeoutMs, timeoutMessage = "Timeout excedido") {
  let timeoutId;

  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
  });

  return Promise.race([
    promise.finally(() => clearTimeout(timeoutId)),
    timeoutPromise,
  ]);
}

// Uso
const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Dados lentos"), 2000)
);

withTimeout(slowPromise, 1000, "Operação muito lenta")
  .then((dados) => console.log("Recebido:", dados))
  .catch((erro) => console.error("Erro:", erro.message));

// Debounce e Throttle com Promise
function debouncePromise(fn, delay) {
  let timeoutId;
  let pendingPromise = null;

  return function (...args) {
    // Cancelar timeout anterior
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Se já tem uma promise pendente, retorna ela
    if (pendingPromise) {
      return pendingPromise;
    }

    // Criar nova promise
    pendingPromise = new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => {
        fn(...args)
          .then(resolve)
          .catch(reject)
          .finally(() => {
            pendingPromise = null;
          });
      }, delay);
    });

    return pendingPromise;
  };
}

// Uso
const busca = debouncePromise((termo) => {
  return new Promise((resolve) => {
    console.log(`Buscando: ${termo}`);
    setTimeout(() => resolve([`Resultado para ${termo}`]), 500);
  });
}, 300);

// Chamadas rápidas
busca("a").then((r) => console.log("Resultado 1:", r));
busca("ab").then((r) => console.log("Resultado 2:", r));
busca("abc").then((r) => console.log("Resultado 3:", r)); // Só esta executa

// Pool de Promises (limitar concorrência)
class PromisePool {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.run();
    });
  }

  run() {
    while (this.running < this.concurrency && this.queue.length) {
      const { task, resolve, reject } = this.queue.shift();
      this.running++;

      Promise.resolve(task())
        .then(resolve, reject)
        .finally(() => {
          this.running--;
          this.run();
        });
    }
  }
}

// Uso
const pool = new PromisePool(3); // Máximo 3 promises simultâneas

for (let i = 1; i <= 10; i++) {
  pool
    .add(
      () =>
        new Promise((resolve) => {
          console.log(`Iniciando tarefa ${i}`);
          setTimeout(() => {
            console.log(`Completando tarefa ${i}`);
            resolve(`Resultado ${i}`);
          }, Math.random() * 2000);
        })
    )
    .then((resultado) => console.log(resultado));
}

// Memoization com Promise
function memoizePromise(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Retornando do cache:", key);
      return cache.get(key);
    }

    const promise = fn(...args)
      .then((result) => {
        // Cache apenas resultados bem-sucedidos
        cache.set(key, Promise.resolve(result));
        return result;
      })
      .catch((error) => {
        // Não cachear erros
        cache.delete(key);
        throw error;
      });

    cache.set(key, promise);
    return promise;
  };
}

// Uso
const buscaUsuarioMemo = memoizePromise((id) => {
  console.log(`Buscando usuário ${id}...`);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, nome: `Usuário ${id}` }), 1000);
  });
});

buscaUsuarioMemo(1).then((u) => console.log("1:", u));
buscaUsuarioMemo(1).then((u) => console.log("1 (cache):", u)); // Cache

// Cancelable Promise
function createCancelablePromise(executor) {
  let cancel = null;
  const promise = new Promise((resolve, reject) => {
    cancel = (reason = "Cancelado") => {
      reject(new Error(reason));
    };

    executor(resolve, reject, () => cancel);
  });

  promise.cancel = cancel;
  return promise;
}

// Uso
const cancelable = createCancelablePromise((resolve, reject, getCancel) => {
  const timeoutId = setTimeout(() => resolve("Completo"), 3000);

  // Limpar timeout se cancelado
  getCancel().then(() => clearTimeout(timeoutId));
});

cancelable
  .then((result) => console.log("Sucesso:", result))
  .catch((error) => console.error("Erro:", error.message));

// Cancelar após 1 segundo
setTimeout(() => {
  cancelable.cancel("Usuário cancelou");
}, 1000);

// Sequential vs Parallel execution
function tarefa(nome, tempo) {
  return new Promise((resolve) => {
    console.log(`Iniciando ${nome}`);
    setTimeout(() => {
      console.log(`Completando ${nome}`);
      resolve(`${nome} completo`);
    }, tempo);
  });
}

// Sequencial
async function sequencial() {
  console.log("\n=== Execução Sequencial ===");
  const resultado1 = await tarefa("Tarefa 1", 1000);
  const resultado2 = await tarefa("Tarefa 2", 500);
  const resultado3 = await tarefa("Tarefa 3", 800);
  return [resultado1, resultado2, resultado3];
}

// Paralelo
async function paralelo() {
  console.log("\n=== Execução Paralela ===");
  const [resultado1, resultado2, resultado3] = await Promise.all([
    tarefa("Tarefa 1", 1000),
    tarefa("Tarefa 2", 500),
    tarefa("Tarefa 3", 800),
  ]);
  return [resultado1, resultado2, resultado3];
}

// Pipeline com Promises
function createPipeline(...middlewares) {
  return function (input) {
    return middlewares.reduce((promise, middleware) => {
      return promise.then((result) => middleware(result));
    }, Promise.resolve(input));
  };
}

// Uso
const pipeline = createPipeline(
  (dados) => {
    console.log("Middleware 1:", dados);
    return dados.toUpperCase();
  },
  (dados) => {
    console.log("Middleware 2:", dados);
    return dados.split("").reverse().join("");
  },
  (dados) => {
    console.log("Middleware 3:", dados);
    return dados.length;
  }
);

pipeline("teste").then((resultado) => {
  console.log("Resultado do pipeline:", resultado);
});

// Promise-based event emitter
class PromiseEventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(listener);
  }

  emit(event, data) {
    if (!this.events.has(event)) {
      return Promise.resolve([]);
    }

    const listeners = this.events.get(event);
    const promises = listeners.map((listener) =>
      Promise.resolve(listener(data))
    );

    return Promise.all(promises);
  }

  once(event, listener) {
    const wrapper = (data) => {
      this.off(event, wrapper);
      return listener(data);
    };
    this.on(event, wrapper);
  }

  off(event, listener) {
    if (this.events.has(event)) {
      const listeners = this.events.get(event);
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }
}

// Uso
const emitter = new PromiseEventEmitter();

emitter.on("data", (data) => {
  console.log("Listener 1:", data);
  return "processado 1";
});

emitter.on("data", (data) => {
  console.log("Listener 2:", data);
  return "processado 2";
});

emitter.emit("data", { valor: 42 }).then((resultados) => {
  console.log("Todos listeners completos:", resultados);
});
```

## Async/Await

### Fundamentos do Async/Await

```javascript
// async function - sempre retorna uma Promise
async function saudacao() {
  return "Olá, mundo!";
  // Equivalente a: return Promise.resolve('Olá, mundo!');
}

saudacao().then((mensagem) => console.log(mensagem));

// await - pausa execução até Promise resolver
async function exemploAwait() {
  console.log("Início");

  // Espera 1 segundo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Após 1 segundo");

  const resultado = await Promise.resolve("valor resolvido");
  console.log("Resultado:", resultado);

  return "Finalizado";
}

exemploAwait().then((resultado) => console.log(resultado));

// Tratamento de erros com try/catch
async function exemploComErro() {
  try {
    const resultado = await Promise.reject(new Error("Algo deu errado!"));
    console.log("Isto não executa");
  } catch (erro) {
    console.error("Erro capturado:", erro.message);
    return "valor de fallback";
  }
}

exemploComErro().then((valor) => console.log("Resultado:", valor));

// Async/await vs Promises
function comPromise() {
  return buscarUsuario(1)
    .then((usuario) => buscarPosts(usuario.id))
    .then((posts) => processarPosts(posts))
    .catch((erro) => {
      console.error("Erro:", erro);
      return [];
    });
}

async function comAsyncAwait() {
  try {
    const usuario = await buscarUsuario(1);
    const posts = await buscarPosts(usuario.id);
    const processados = await processarPosts(posts);
    return processados;
  } catch (erro) {
    console.error("Erro:", erro);
    return [];
  }
}

// Funções auxiliares
function buscarUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, nome: "João" }), 500);
  });
}

function buscarPosts(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 500);
  });
}

function processarPosts(posts) {
  return Promise.resolve(posts.map((p) => p.toUpperCase()));
}

// Async IIFE (Immediately Invoked Function Expression)
(async function () {
  console.log("IIFE async iniciada");
  const resultado = await Promise.resolve("valor");
  console.log("Resultado:", resultado);
})();

// Async arrow functions
const buscarDados = async () => {
  const resposta = await fetch("/api/dados");
  const dados = await resposta.json();
  return dados;
};

// Métodos async em classes
class API {
  constructor() {
    this.baseURL = "https://api.exemplo.com";
  }

  async get(endpoint) {
    const resposta = await fetch(`${this.baseURL}${endpoint}`);
    if (!resposta.ok) {
      throw new Error(`HTTP ${resposta.status}`);
    }
    return resposta.json();
  }

  async post(endpoint, dados) {
    const resposta = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    return resposta.json();
  }
}

// Uso
const api = new API();
api
  .get("/usuarios/1")
  .then((usuario) => console.log(usuario))
  .catch((erro) => console.error(erro));
```

### Padrões com Async/Await

```javascript
// Processamento sequencial
async function processarSequencial() {
  console.time("sequencial");

  const resultado1 = await tarefa("Tarefa 1", 1000);
  const resultado2 = await tarefa("Tarefa 2", 500);
  const resultado3 = await tarefa("Tarefa 3", 800);

  console.timeEnd("sequencial");
  return [resultado1, resultado2, resultado3];
}

// Processamento paralelo
async function processarParalelo() {
  console.time("paralelo");

  const [resultado1, resultado2, resultado3] = await Promise.all([
    tarefa("Tarefa 1", 1000),
    tarefa("Tarefa 2", 500),
    tarefa("Tarefa 3", 800),
  ]);

  console.timeEnd("paralelo");
  return [resultado1, resultado2, resultado3];
}

function tarefa(nome, tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${nome} completada em ${tempo}ms`);
      resolve(`${nome} - ${tempo}ms`);
    }, tempo);
  });
}

// Executar ambos
(async () => {
  console.log("=== Sequencial ===");
  await processarSequencial();

  console.log("\n=== Paralelo ===");
  await processarParalelo();
})();

// Loop com async/await
async function processarArray(array) {
  const resultados = [];

  for (const item of array) {
    // Processamento sequencial
    const resultado = await processarItem(item);
    resultados.push(resultado);
  }

  return resultados;
}

async function processarArrayParalelo(array) {
  // Processamento paralelo
  const promises = array.map((item) => processarItem(item));
  return Promise.all(promises);
}

async function processarItem(item) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return `Processado: ${item}`;
}

// Uso
processarArray([1, 2, 3, 4, 5]).then((r) => console.log("Sequencial:", r));
processarArrayParalelo([1, 2, 3, 4, 5]).then((r) =>
  console.log("Paralelo:", r)
);

// Retry pattern com async/await
async function retryAsync(fn, maxAttempts = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`Tentativa ${attempt} falhou: ${error.message}`);

      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delay * attempt));
      }
    }
  }

  throw new Error(
    `Falhou após ${maxAttempts} tentativas. Último erro: ${lastError.message}`
  );
}

// Uso
retryAsync(
  async () => {
    const sucesso = Math.random() > 0.7;
    if (!sucesso) {
      throw new Error("Falha aleatória");
    }
    return "Sucesso!";
  },
  3,
  1000
).then(
  (resultado) => console.log("Resultado:", resultado),
  (erro) => console.error("Erro final:", erro.message)
);

// Timeout pattern com async/await
async function withTimeoutAsync(
  promise,
  timeoutMs,
  timeoutMessage = "Timeout"
) {
  let timeoutId;

  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
  });

  try {
    const resultado = await Promise.race([promise, timeoutPromise]);
    clearTimeout(timeoutId);
    return resultado;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Uso
withTimeoutAsync(
  new Promise((resolve) => setTimeout(() => resolve("Dados"), 2000)),
  1000,
  "Muito lento"
).then(
  (dados) => console.log("Recebido:", dados),
  (erro) => console.error("Erro:", erro.message)
);

// Circuit breaker pattern
class CircuitBreaker {
  constructor(fn, options = {}) {
    this.fn = fn;
    this.failureThreshold = options.failureThreshold || 3;
    this.resetTimeout = options.resetTimeout || 10000;
    this.state = "CLOSED";
    this.failureCount = 0;
    this.nextAttempt = 0;
  }

  async call(...args) {
    if (this.state === "OPEN") {
      if (Date.now() < this.nextAttempt) {
        throw new Error("Circuit breaker is OPEN");
      }
      this.state = "HALF_OPEN";
    }

    try {
      const resultado = await this.fn(...args);
      this.onSuccess();
      return resultado;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    this.state = "CLOSED";
  }

  onFailure() {
    this.failureCount++;

    if (this.failureCount >= this.failureThreshold) {
      this.state = "OPEN";
      this.nextAttempt = Date.now() + this.resetTimeout;
      console.log(
        `Circuit breaker OPEN até ${new Date(
          this.nextAttempt
        ).toLocaleTimeString()}`
      );
    }
  }
}

// Uso
const breaker = new CircuitBreaker(
  async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  },
  { failureThreshold: 2, resetTimeout: 5000 }
);

(async () => {
  for (let i = 0; i < 5; i++) {
    try {
      const dados = await breaker.call("https://api.exemplo.com/dados");
      console.log("Sucesso:", dados);
    } catch (erro) {
      console.error("Falha:", erro.message);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();

// Cache com async/await
function createAsyncCache() {
  const cache = new Map();

  return async function (key, fn) {
    if (cache.has(key)) {
      console.log("Cache hit:", key);
      return cache.get(key);
    }

    console.log("Cache miss:", key);
    const valor = await fn();
    cache.set(key, valor);
    return valor;
  };
}

// Uso
const cached = createAsyncCache();

async function buscarDadosPesados(id) {
  console.log(`Buscando dados ${id}...`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return `Dados ${id}`;
}

(async () => {
  const dados1 = await cached("usuario-1", () => buscarDadosPesados(1));
  console.log("Primeira vez:", dados1);

  const dados1Cache = await cached("usuario-1", () => buscarDadosPesados(1));
  console.log("Segunda vez (cache):", dados1Cache);
})();

// Async generator (for await...of)
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

(async () => {
  for await (const valor of asyncGenerator()) {
    console.log("Async generator:", valor);
  }
})();

// Gerador de números com delay
async function* contadorAsync(limite, delay = 1000) {
  for (let i = 1; i <= limite; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    yield i;
  }
}

(async () => {
  console.log("Contador assíncrono:");
  for await (const numero of contadorAsync(5, 500)) {
    console.log(numero);
  }
})();
```

### Técnicas Avançadas de Async/Await

```javascript
// Cancelamento com AbortController
async function fetchWithCancel(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

// Uso
const controller = new AbortController();
const signal = controller.signal;

// Cancelar após 1 segundo
setTimeout(() => {
  console.log("Cancelando requisição...");
  controller.abort();
}, 1000);

try {
  const dados = await fetchWithCancel("https://api.exemplo.com/dados", signal);
  console.log("Dados:", dados);
} catch (erro) {
  if (erro.name === "AbortError") {
    console.error("Requisição cancelada");
  } else {
    console.error("Erro:", erro.message);
  }
}

// Async semáforo (limitar concorrência)
class AsyncSemaphore {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.counter = 0;
    this.queue = [];
  }

  async acquire() {
    if (this.counter < this.concurrency) {
      this.counter++;
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      this.queue.push(resolve);
    });
  }

  release() {
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      next();
    } else {
      this.counter--;
    }
  }

  async run(fn) {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }
}

// Uso
const semaphore = new AsyncSemaphore(3);

async function tarefaConcorrente(id) {
  await semaphore.run(async () => {
    console.log(`Tarefa ${id} iniciada`);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));
    console.log(`Tarefa ${id} completada`);
    return `Resultado ${id}`;
  });
}

// Executar 10 tarefas com no máximo 3 simultâneas
Promise.all(
  Array.from({ length: 10 }, (_, i) => tarefaConcorrente(i + 1))
).then(() => console.log("Todas tarefas completas"));

// Async mutex (exclusão mútua)
class AsyncMutex {
  constructor() {
    this.locked = false;
    this.queue = [];
  }

  async acquire() {
    if (!this.locked) {
      this.locked = true;
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      this.queue.push(resolve);
    });
  }

  release() {
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      next();
    } else {
      this.locked = false;
    }
  }

  async execute(fn) {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }
}

// Uso para recursos compartilhados
const mutex = new AsyncMutex();
let recursoCompartilhado = 0;

async function acessarRecurso(id) {
  return mutex.execute(async () => {
    console.log(`Processo ${id} acessando recurso`);
    const valorAtual = recursoCompartilhado;
    await new Promise((resolve) => setTimeout(resolve, 100));
    recursoCompartilhado = valorAtual + 1;
    console.log(
      `Processo ${id} atualizou recurso para ${recursoCompartilhado}`
    );
    return recursoCompartilhado;
  });
}

// Testar condição de corrida
Promise.all([acessarRecurso(1), acessarRecurso(2), acessarRecurso(3)]).then(
  () => {
    console.log("Valor final:", recursoCompartilhado);
  }
);

// Async barreira
class AsyncBarrier {
  constructor(count) {
    this.count = count;
    this.waiting = [];
    this.current = 0;
  }

  async wait() {
    this.current++;

    if (this.current < this.count) {
      return new Promise((resolve) => {
        this.waiting.push(resolve);
      });
    } else {
      // Último a chegar, libera todos
      this.waiting.forEach((resolve) => resolve());
      this.waiting = [];
      this.current = 0;
    }
  }
}

// Uso
const barrier = new AsyncBarrier(3);

async function processo(id) {
  console.log(`Processo ${id} chegou na barreira`);
  await barrier.wait();
  console.log(`Processo ${id} passou da barreira`);
}

// 3 processos sincronizados
processo(1);
processo(2);
processo(3);

// Async pipeline
function createAsyncPipeline(...stages) {
  return async function (input) {
    let resultado = input;

    for (const stage of stages) {
      resultado = await stage(resultado);
    }

    return resultado;
  };
}

// Uso
const pipeline = createAsyncPipeline(
  async (dados) => {
    console.log("Estágio 1:", dados);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return dados.toUpperCase();
  },
  async (dados) => {
    console.log("Estágio 2:", dados);
    await new Promise((resolve) => setTimeout(resolve, 300));
    return dados.split("").reverse().join("");
  },
  async (dados) => {
    console.log("Estágio 3:", dados);
    await new Promise((resolve) => setTimeout(resolve, 200));
    return dados.length;
  }
);

pipeline("javascript").then((resultado) => {
  console.log("Resultado do pipeline:", resultado);
});

// Async rate limiter
class RateLimiter {
  constructor(requestsPerSecond) {
    this.requestsPerSecond = requestsPerSecond;
    this.queue = [];
    this.processing = false;
  }

  async execute(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject });

      if (!this.processing) {
        this.processQueue();
      }
    });
  }

  async processQueue() {
    if (this.queue.length === 0) {
      this.processing = false;
      return;
    }

    this.processing = true;
    const { fn, resolve, reject } = this.queue.shift();

    try {
      const resultado = await fn();
      resolve(resultado);
    } catch (error) {
      reject(error);
    }

    // Aguardar intervalo antes do próximo
    setTimeout(() => this.processQueue(), 1000 / this.requestsPerSecond);
  }
}

// Uso
const limiter = new RateLimiter(2); // 2 requisições por segundo

async function fazerRequisicao(id) {
  console.log(`Requisicao ${id} iniciada`);
  await new Promise((resolve) => setTimeout(resolve, 100));
  return `Resposta ${id}`;
}

// Fazer 6 requisições com rate limiting
Promise.all(
  Array.from({ length: 6 }, (_, i) =>
    limiter.execute(() => fazerRequisicao(i + 1))
  )
).then((resultados) => {
  console.log("Todas requisições completas:", resultados);
});

// Async event emitter com await
class AwaitableEventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(listener);
  }

  async emit(event, data) {
    if (!this.events.has(event)) {
      return;
    }

    const listeners = this.events.get(event);
    for (const listener of listeners) {
      await listener(data);
    }
  }

  async waitFor(event, timeout = 0) {
    return new Promise((resolve, reject) => {
      const listener = (data) => {
        this.off(event, listener);
        resolve(data);
      };

      this.on(event, listener);

      if (timeout > 0) {
        setTimeout(() => {
          this.off(event, listener);
          reject(new Error(`Timeout waiting for ${event}`));
        }, timeout);
      }
    });
  }

  off(event, listener) {
    if (this.events.has(event)) {
      const listeners = this.events.get(event);
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }
}

// Uso
const emitter = new AwaitableEventEmitter();

emitter.on("data", async (dados) => {
  console.log("Processando dados:", dados);
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log("Dados processados");
});

(async () => {
  // Disparar evento e aguardar processamento
  await emitter.emit("data", { valor: 42 });
  console.log("Todos listeners processados");

  // Aguardar próximo evento
  setTimeout(() => emitter.emit("data", { valor: 100 }), 500);
  const dados = await emitter.waitFor("data", 1000);
  console.log("Recebido:", dados);
})();
```

## setTimeout/setInterval

### setTimeout

```javascript
// setTimeout - executa função após delay
console.log('Início');

setTimeout(function() {
    console.log('Executado após 1 segundo');
}, 1000);

console.log('Fim');
// Saída: Início, Fim, Executado após 1 segundo

// Sintaxe básica
const timeoutId = setTimeout(callback, delay, param1, param2, ...);

// Exemplos
setTimeout(() => {
    console.log('Função arrow');
}, 500);

setTimeout(function(mensagem) {
    console.log(mensagem);
}, 750, 'Com parâmetros');

// Cancelar timeout
const meuTimeout = setTimeout(() => {
    console.log('Isto não será executado');
}, 2000);

clearTimeout(meuTimeout);
console.log('Timeout cancelado');

// setTimeout com 0 delay (next tick)
console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

console.log('C');
// Saída: A, C, B (mesmo com delay 0)

// Uso prático: debounce
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Uso
const buscaInput = document.querySelector('input');
const buscaDebounced = debounce((termo) => {
    console.log('Buscando:', termo);
}, 300);

buscaInput.addEventListener('input', (e) => {
    buscaDebounced(e.target.value);
});

// Uso prático: delay em animações
function animarElemento(elemento) {
    elemento.style.opacity = 0;
    elemento.style.transform = 'translateY(20px)';

    setTimeout(() => {
        elemento.style.transition = 'all 0.5s ease';
        elemento.style.opacity = 1;
        elemento.style.transform = 'translateY(0)';
    }, 100);
}

// Uso prático: timeouts consecutivos
function animacaoSequencial() {
    const elementos = document.querySelectorAll('.item');

    elementos.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.classList.add('visivel');
        }, index * 200); // Stagger effect
    });
}

// setTimeout com Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exemploDelay() {
    console.log('Iniciando...');
    await delay(1000);
    console.log('Após 1 segundo');
    await delay(500);
    console.log('Após mais 0.5 segundos');
}

// Uso em loops assíncronos
async function processarComDelay(array) {
    for (const item of array) {
        await delay(100);
        console.log('Processando:', item);
    }
}

// setTimeout para operações pesadas (não bloquear UI)
function processamentoPesado() {
    const dados = Array.from({ length: 10000 }, (_, i) => i);

    function processarLote(inicio, tamanhoLote) {
        const fim = Math.min(inicio + tamanhoLote, dados.length);

        for (let i = inicio; i < fim; i++) {
            // Processamento pesado
            dados[i] = dados[i] * 2;
        }

        if (fim < dados.length) {
            // Agendar próximo lote para não bloquear UI
            setTimeout(() => processarLote(fim, tamanhoLote), 0);
        } else {
            console.log('Processamento completo');
        }
    }

    processarLote(0, 100);
}

// Recursive setTimeout (mais preciso que setInterval)
function timerRecursivo(contador = 0) {
    console.log(`Tick ${contador}`);

    setTimeout(() => {
        timerRecursivo(contador + 1);
    }, 1000);
}

// timerRecursivo(); // Iniciar timer

// Verificação de performance
function medirTimeout() {
    const inicio = performance.now();

    setTimeout(() => {
        const fim = performance.now();
        console.log(`Tempo real: ${(fim - inicio).toFixed(2)}ms`);
    }, 1000);
}

// Timeout mínimo (4ms em navegadores modernos)
let contador = 0;
function testarTimeoutMinimo() {
    const inicio = Date.now();

    setTimeout(function() {
        const fim = Date.now();
        console.log(`Timeout ${++contador}: ${fim - inicio}ms`);

        if (contador < 10) {
            testarTimeoutMinimo();
        }
    }, 0);
}

// testarTimeoutMinimo();
```

### setInterval

```javascript
// setInterval - executa função repetidamente em intervalos
console.log('Iniciando intervalo...');

let contador = 0;
const intervaloId = setInterval(function() {
    contador++;
    console.log(`Tick ${contador}`);

    if (contador === 5) {
        clearInterval(intervaloId);
        console.log('Intervalo parado');
    }
}, 1000);

// Sintaxe básica
const intervalId = setInterval(callback, delay, param1, param2, ...);

// Exemplos
setInterval(() => {
    const agora = new Date();
    console.log(agora.toLocaleTimeString());
}, 1000);

// Com parâmetros
function logComPrefixo(mensagem, prefixo) {
    console.log(`[${prefixo}] ${mensagem}`);
}

setInterval(logComPrefixo, 1500, 'Mensagem periódica', 'INFO');

// Clear interval
const meuIntervalo = setInterval(() => {
    console.log('Executando...');
}, 500);

// Parar após 3 segundos
setTimeout(() => {
    clearInterval(meuIntervalo);
    console.log('Intervalo limpo');
}, 3000);

// Uso prático: slideshow
class Slideshow {
    constructor(container, imagens, intervalo = 3000) {
        this.container = container;
        this.imagens = imagens;
        this.intervalo = intervalo;
        this.index = 0;
        this.intervalId = null;

        this.iniciar();
    }

    iniciar() {
        this.mostrarImagem();
        this.intervalId = setInterval(() => {
            this.proximaImagem();
        }, this.intervalo);
    }

    mostrarImagem() {
        this.container.style.backgroundImage = `url(${this.imagens[this.index]})`;
        this.container.textContent = `Imagem ${this.index + 1}/${this.imagens.length}`;
    }

    proximaImagem() {
        this.index = (this.index + 1) % this.imagens.length;
        this.mostrarImagem();
    }

    parar() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    continuar() {
        if (!this.intervalId) {
            this.iniciar();
        }
    }
}

// Uso prático: contador regressivo
class ContadorRegressivo {
    constructor(duracao, elemento) {
        this.duracao = duracao; // em segundos
        this.elemento = elemento;
        this.tempoRestante = duracao;
        this.intervalId = null;
    }

    iniciar() {
        this.atualizarDisplay();
        this.intervalId = setInterval(() => {
            this.tempoRestante--;
            this.atualizarDisplay();

            if (this.tempoRestante <= 0) {
                this.parar();
                this.elemento.dispatchEvent(new Event('tempoEsgotado'));
            }
        }, 1000);
    }

    atualizarDisplay() {
        const minutos = Math.floor(this.tempoRestante / 60);
        const segundos = this.tempoRestante % 60;
        this.elemento.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    parar() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset() {
        this.parar();
        this.tempoRestante = this.duracao;
        this.atualizarDisplay();
    }
}

// Uso prático: polling de API
class APIPoller {
    constructor(url, intervalo = 5000) {
        this.url = url;
        this.intervalo = intervalo;
        this.intervalId = null;
        this.ultimosDados = null;
    }

    iniciar() {
        this.buscarDados(); // Buscar imediatamente
        this.intervalId = setInterval(() => {
            this.buscarDados();
        }, this.intervalo);
    }

    async buscarDados() {
        try {
            const resposta = await fetch(this.url);
            const dados = await resposta.json();

            if (JSON.stringify(dados) !== JSON.stringify(this.ultimosDados)) {
                this.ultimosDados = dados;
                this.onNovosDados(dados);
            }
        } catch (erro) {
            this.onErro(erro);
        }
    }

    onNovosDados(dados) {
        console.log('Novos dados recebidos:', dados);
        // Disparar evento customizado
        document.dispatchEvent(new CustomEvent('dadosAtualizados', { detail: dados }));
    }

    onErro(erro) {
        console.error('Erro no poller:', erro);
    }

    parar() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    definirIntervalo(novoIntervalo) {
        this.intervalo = novoIntervalo;
        if (this.intervalId) {
            this.parar();
            this.iniciar();
        }
    }
}

// Uso prático: animação frame por frame
class Animator {
    constructor() {
        this.animations = new Map();
        this.intervalId = null;
        this.frameRate = 60; // FPS
    }

    iniciar() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.animar();
            }, 1000 / this.frameRate);
        }
    }

    animar() {
        this.animations.forEach((animation, id) => {
            const { element, propriedade, inicio, fim, duracao, inicioTempo } = animation;
            const tempoDecorrido = Date.now() - inicioTempo;
            const progresso = Math.min(tempoDecorrido / duracao, 1);

            // Interpolação linear
            const valor = inicio + (fim - inicio) * progresso;
            element.style[propriedade] = `${valor}px`;

            if (progresso >= 1) {
                this.animations.delete(id);
            }
        });

        if (this.animations.size === 0) {
            this.parar();
        }
    }

    adicionarAnimacao(elemento, propriedade, inicio, fim, duracao) {
        const id = Date.now();
        this.animations.set(id, {
            element: elemento,
            propriedade,
            inicio,
            fim,
            duracao,
            inicioTempo: Date.now()
        });

        this.iniciar();
        return id;
    }

    removerAnimacao(id) {
        this.animations.delete(id);
    }

    parar() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

// Comparação: setInterval vs setTimeout recursivo
function comSetInterval() {
    let contador = 0;
    const inicio = Date.now();

    const intervalo = setInterval(() => {
        contador++;
        const agora = Date.now();
        console.log(`setInterval ${contador}: ${agora - inicio}ms`);

        if (contador === 5) {
            clearInterval(intervalo);
        }
    }, 1000);
}

function comSetTimeoutRecursivo() {
    let contador = 0;
    const inicio = Date.now();

    function executar() {
        contador++;
        const agora = Date.now();
        console.log(`setTimeout ${contador}: ${agora - inicio}ms`);

        if (contador < 5) {
            setTimeout(executar, 1000);
        }
    }

    setTimeout(executar, 1000);
}

// setTimeout recursivo é mais preciso pois ajusta atrasos
function timerPreciso(callback, intervalo) {
    let esperado = Date.now() + intervalo;

    function timeout() {
        const desvio = Date.now() - esperado;
        callback(desvio);

        esperado += intervalo;
        setTimeout(timeout, Math.max(0, intervalo - desvio));
    }

    setTimeout(timeout, intervalo);
}

// Uso
timerPreciso((desvio) => {
    console.log(`Tick - Desvio: ${desvio}ms`);
}, 1000);

// Uso com Promise
function intervalPromise(callback, intervalo, condicaoParada) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            const deveContinuar = callback();

            if (condicaoParada && !deveContinuar) {
                clearInterval(intervalId);
                resolve();
            }
        }, intervalo);
    });
}

// Uso
let tentativas = 0;
intervalPromise(() => {
    tentativas++;
    console.log(`Tentativa ${tentativas}`);
    return tentativas < 5; // Continua até 5 tentativas
}, 1000, true).then(() => {
    console.log('Intervalo finalizado');
});
```

### Técnicas Avançadas com Timers

```javascript
// Scheduler com timers
class TaskScheduler {
  constructor() {
    this.tasks = new Map();
    this.nextTaskId = 1;
  }

  // Agendar tarefa única
  schedule(task, delay, ...args) {
    const taskId = this.nextTaskId++;

    const timeoutId = setTimeout(() => {
      task(...args);
      this.tasks.delete(taskId);
    }, delay);

    this.tasks.set(taskId, {
      type: "timeout",
      id: timeoutId,
      scheduledFor: Date.now() + delay,
    });

    return taskId;
  }

  // Agendar tarefa periódica
  schedulePeriodic(task, interval, ...args) {
    const taskId = this.nextTaskId++;

    const intervalId = setInterval(() => {
      task(...args);
    }, interval);

    this.tasks.set(taskId, {
      type: "interval",
      id: intervalId,
      interval: interval,
      nextExecution: Date.now() + interval,
    });

    return taskId;
  }

  // Cancelar tarefa
  cancel(taskId) {
    if (this.tasks.has(taskId)) {
      const task = this.tasks.get(taskId);

      if (task.type === "timeout") {
        clearTimeout(task.id);
      } else if (task.type === "interval") {
        clearInterval(task.id);
      }

      this.tasks.delete(taskId);
      return true;
    }
    return false;
  }

  // Cancelar todas tarefas
  cancelAll() {
    this.tasks.forEach((task) => {
      if (task.type === "timeout") {
        clearTimeout(task.id);
      } else if (task.type === "interval") {
        clearInterval(task.id);
      }
    });

    this.tasks.clear();
  }

  // Listar tarefas agendadas
  listTasks() {
    return Array.from(this.tasks.entries()).map(([id, task]) => ({
      id,
      type: task.type,
      nextExecution: task.nextExecution
        ? new Date(task.nextExecution).toLocaleTimeString()
        : "N/A",
      timeRemaining: task.nextExecution
        ? Math.max(0, task.nextExecution - Date.now())
        : "N/A",
    }));
  }
}

// Uso
const scheduler = new TaskScheduler();

// Agendar tarefas
const tarefa1 = scheduler.schedule(
  (mensagem) => console.log(`Tarefa única: ${mensagem}`),
  2000,
  "Olá do futuro!"
);

const tarefa2 = scheduler.schedulePeriodic(
  () => console.log("Tarefa periódica executada"),
  1000
);

console.log("Tarefas agendadas:", scheduler.listTasks());

// Cancelar após 5 segundos
setTimeout(() => {
  scheduler.cancel(tarefa2);
  console.log("Tarefa periódica cancelada");
  console.log("Tarefas restantes:", scheduler.listTasks());
}, 5000);

// Cancelar todas após 7 segundos
setTimeout(() => {
  scheduler.cancelAll();
  console.log("Todas tarefas canceladas");
}, 7000);

// Throttle com timers
function throttle(func, limit) {
  let inThrottle;
  let lastFunc;
  let lastRan;

  return function (...args) {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Uso
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll event (throttled)");
  }, 1000)
);

// Request Animation Frame com fallback para setInterval
class SmoothAnimator {
  constructor() {
    this.animations = new Map();
    this.isAnimating = false;
    this.lastTime = 0;
  }

  animate(callback) {
    const id = Date.now();

    this.animations.set(id, {
      callback,
      startTime: Date.now(),
    });

    if (!this.isAnimating) {
      this.isAnimating = true;
      this.animateFrame();
    }

    return id;
  }

  animateFrame() {
    const now = Date.now();
    const delta = now - this.lastTime;

    this.animations.forEach((animation, id) => {
      const progress = now - animation.startTime;
      const shouldContinue = animation.callback(progress, delta);

      if (!shouldContinue) {
        this.animations.delete(id);
      }
    });

    if (this.animations.size > 0) {
      this.lastTime = now;

      // Usar requestAnimationFrame se disponível, senão setTimeout
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this.animateFrame());
      } else {
        setTimeout(() => this.animateFrame(), 16); // ~60fps
      }
    } else {
      this.isAnimating = false;
    }
  }

  stop(id) {
    this.animations.delete(id);
  }
}

// Uso
const animator = new SmoothAnimator();

const animId = animator.animate((progress, delta) => {
  const elemento = document.querySelector(".animado");
  const x = Math.sin(progress / 1000) * 100;
  elemento.style.transform = `translateX(${x}px)`;

  return progress < 5000; // Animar por 5 segundos
});

// Parar após 3 segundos
setTimeout(() => {
  animator.stop(animId);
}, 3000);

// Batch processing com timers
class BatchProcessor {
  constructor(batchSize = 100, delay = 0) {
    this.batchSize = batchSize;
    this.delay = delay;
    this.queue = [];
    this.isProcessing = false;
  }

  add(item) {
    this.queue.push(item);

    if (!this.isProcessing) {
      this.process();
    }
  }

  addMany(items) {
    this.queue.push(...items);

    if (!this.isProcessing) {
      this.process();
    }
  }

  async process() {
    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }

    this.isProcessing = true;

    // Processar lote
    const batch = this.queue.splice(0, this.batchSize);
    await this.processBatch(batch);

    // Agendar próximo lote
    if (this.queue.length > 0) {
      setTimeout(() => this.process(), this.delay);
    } else {
      this.isProcessing = false;
    }
  }

  async processBatch(batch) {
    console.log(`Processando lote de ${batch.length} itens`);
    // Processamento real aqui
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Simular processamento
    batch.forEach((item) => {
      console.log("Processado:", item);
    });
  }
}

// Uso
const processor = new BatchProcessor(5, 500);

// Adicionar 20 itens
for (let i = 1; i <= 20; i++) {
  processor.add(`Item ${i}`);
}

// Timer chain (execução sequencial com delays)
function createTimerChain() {
  const chain = [];
  let isRunning = false;

  function add(delay, task) {
    chain.push({ delay, task });

    if (!isRunning) {
      run();
    }

    return {
      then: (nextDelay, nextTask) => {
        return add(nextDelay, nextTask);
      },
    };
  }

  async function run() {
    if (chain.length === 0) {
      isRunning = false;
      return;
    }

    isRunning = true;
    const { delay, task } = chain.shift();

    await new Promise((resolve) => setTimeout(resolve, delay));

    try {
      await task();
    } catch (error) {
      console.error("Erro na tarefa:", error);
    }

    run();
  }

  return { add };
}

// Uso
const timerChain = createTimerChain();

timerChain
  .add(1000, () => console.log("Após 1 segundo"))
  .then(500, () => console.log("Após 0.5 segundos"))
  .then(2000, () => console.log("Após 2 segundos"));

// Countdown com pausa/resume
class PausableCountdown {
  constructor(duration, onTick, onComplete) {
    this.duration = duration;
    this.onTick = onTick;
    this.onComplete = onComplete;
    this.remaining = duration;
    this.timerId = null;
    this.startTime = null;
    this.pausedAt = null;
  }

  start() {
    if (this.timerId) return;

    this.startTime = Date.now();
    this.run();
  }

  run() {
    this.timerId = setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      this.remaining = Math.max(0, this.duration - elapsed);

      this.onTick(this.remaining);

      if (this.remaining <= 0) {
        this.stop();
        this.onComplete();
      }
    }, 100);
  }

  pause() {
    if (!this.timerId) return;

    clearInterval(this.timerId);
    this.timerId = null;
    this.pausedAt = Date.now();
  }

  resume() {
    if (this.timerId || this.remaining <= 0) return;

    // Ajustar startTime para considerar o tempo pausado
    const pausedDuration = Date.now() - this.pausedAt;
    this.startTime += pausedDuration;

    this.run();
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset() {
    this.stop();
    this.remaining = this.duration;
    this.onTick(this.remaining);
  }
}

// Uso
const countdown = new PausableCountdown(
  10000, // 10 segundos
  (remaining) => {
    console.log(`Tempo restante: ${(remaining / 1000).toFixed(1)}s`);
  },
  () => {
    console.log("Contagem regressiva completa!");
  }
);

countdown.start();

// Pausar após 3 segundos
setTimeout(() => {
  console.log("Pausando...");
  countdown.pause();

  // Retomar após 2 segundos
  setTimeout(() => {
    console.log("Retomando...");
    countdown.resume();
  }, 2000);
}, 3000);
```

## Event Loop e Concurrency Model

### Fundamentos do Event Loop

```javascript
// JavaScript tem um modelo de concorrência baseado em event loop
// Single-threaded, non-blocking, asynchronous

// Pilha de execução (Call Stack)
function primeiro() {
  console.log("Primeiro");
  segundo();
  console.log("Primeiro - fim");
}

function segundo() {
  console.log("Segundo");
  terceiro();
  console.log("Segundo - fim");
}

function terceiro() {
  console.log("Terceiro");
}

primeiro();
// Saída: Primeiro, Segundo, Terceiro, Segundo - fim, Primeiro - fim

// Pilha + event loop + callback queue
console.log("1 - Início");

setTimeout(function timeout1() {
  console.log("2 - Timeout 1");
}, 0);

setTimeout(function timeout2() {
  console.log("3 - Timeout 2");
}, 0);

Promise.resolve().then(function promise1() {
  console.log("4 - Promise 1");
});

Promise.resolve().then(function promise2() {
  console.log("5 - Promise 2");
});

console.log("6 - Fim");

// Ordem de execução:
// 1 - Início
// 6 - Fim
// 4 - Promise 1
// 5 - Promise 2
// 2 - Timeout 1
// 3 - Timeout 2

// Microtasks vs Macrotasks
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");

// Ordem:
// script start
// script end
// promise1
// promise2
// setTimeout

// Explicação:
// 1. Call stack executa código síncrono
// 2. Microtasks (Promises) são executadas após cada macrotask
// 3. Macrotasks (setTimeout, setInterval, I/O) vão para a fila

// Demonstração visual do event loop
function demoEventLoop() {
  console.log("=== DEMO EVENT LOOP ===");

  console.log("1. Código síncrono - início");

  // Macrotask
  setTimeout(() => {
    console.log("7. Macrotask - setTimeout");

    // Microtask dentro de macrotask
    Promise.resolve().then(() => {
      console.log("8. Microtask dentro de macrotask");
    });
  }, 0);

  // Microtask 1
  Promise.resolve().then(() => {
    console.log("4. Microtask 1");

    // Microtask dentro de microtask
    Promise.resolve().then(() => {
      console.log("5. Microtask dentro de microtask");
    });
  });

  // Microtask 2
  Promise.resolve().then(() => {
    console.log("6. Microtask 2");
  });

  console.log("2. Código síncrono - meio");

  // Outro macrotask
  setTimeout(() => {
    console.log("9. Macrotask - outro setTimeout");
  }, 0);

  console.log("3. Código síncrono - fim");
}

demoEventLoop();

// requestAnimationFrame - executa antes da próxima repaint
function demoRAF() {
  let frameCount = 0;

  function animate() {
    frameCount++;
    console.log(`Frame ${frameCount}`);

    if (frameCount < 5) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// demoRAF();

// Comparação de diferentes tipos de tasks
function compareTaskTypes() {
  console.log("Início da comparação");

  // Macrotasks
  setTimeout(() => console.log("Macrotask: setTimeout"), 0);
  setImmediate(() => console.log("Macrotask: setImmediate (Node.js)"));

  // Microtasks
  Promise.resolve().then(() => console.log("Microtask: Promise"));
  queueMicrotask(() => console.log("Microtask: queueMicrotask"));

  // requestAnimationFrame (entre micro e macrotasks)
  requestAnimationFrame(() => console.log("rAF"));

  // I/O callbacks (Node.js)
  // process.nextTick(() => console.log('nextTick (Node.js)'));

  console.log("Fim da comparação");
}

// compareTaskTypes();

// Bloqueando o event loop
function bloquearEventLoop() {
  console.log("Iniciando bloqueio...");

  const inicio = Date.now();

  // Código síncrono pesado
  while (Date.now() - inicio < 5000) {
    // Loop vazio por 5 segundos
  }

  console.log("Bloqueio terminado");

  // Esta promise só executa após o bloqueio
  Promise.resolve().then(() => {
    console.log("Promise após bloqueio");
  });

  // Este timeout também é atrasado
  setTimeout(() => {
    console.log("Timeout após bloqueio");
  }, 0);
}

// Cuidado: descomentar só para teste
// bloquearEventLoop();

// Evitando bloquear o event loop
function naoBloquearEventLoop() {
  console.log("Processamento não-bloqueante");

  const dados = Array.from({ length: 1000000 }, (_, i) => i);

  function processarLote(inicio, tamanhoLote) {
    const fim = Math.min(inicio + tamanhoLote, dados.length);

    for (let i = inicio; i < fim; i++) {
      dados[i] = dados[i] * 2;
    }

    if (fim < dados.length) {
      // Usar setTimeout para liberar o event loop
      setTimeout(() => processarLote(fim, tamanhoLote), 0);
    } else {
      console.log("Processamento completo");
    }
  }

  processarLote(0, 1000);
}

// naoBloquearEventLoop();

// Starvation de microtasks
function microtaskStarvation() {
  console.log("Início starvation test");

  function criarMicrotask() {
    Promise.resolve().then(() => {
      console.log("Microtask executada");
      criarMicrotask(); // Cria nova microtask recursivamente
    });
  }

  // Iniciar cadeia infinita de microtasks
  criarMicrotask();

  // Este timeout nunca executa (starvation)
  setTimeout(() => {
    console.log("Timeout - nunca executa devido à starvation");
  }, 0);
}

// Cuidado: descomentar só para teste (pode travar)
// microtaskStarvation();

// Medindo performance do event loop
class EventLoopMonitor {
  constructor() {
    this.lastTime = Date.now();
    this.samples = [];
    this.maxSamples = 60;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      const now = Date.now();
      const delta = now - this.lastTime;
      this.lastTime = now;

      this.samples.push(delta);

      if (this.samples.length > this.maxSamples) {
        this.samples.shift();
      }

      const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
      const max = Math.max(...this.samples);
      const min = Math.min(...this.samples);

      console.log(
        `Event Loop: Avg=${avg.toFixed(2)}ms, Min=${min}ms, Max=${max}ms`
      );

      if (max > 100) {
        console.warn("Event loop lento detectado!");
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Uso
const monitor = new EventLoopMonitor();
// monitor.start();

// Parar após 10 segundos
setTimeout(() => monitor.stop(), 10000);
```

### Técnicas de Otimização

```javascript
// Web Workers para processamento pesado
// worker.js
/*
self.onmessage = function(e) {
    const dados = e.data;
    const resultado = processarPesadamente(dados);
    self.postMessage(resultado);
};

function processarPesadamente(dados) {
    // Processamento pesado aqui
    return dados.map(x => x * 2);
}
*/

// main.js
function usarWebWorker() {
  if (typeof Worker !== "undefined") {
    const worker = new Worker("worker.js");

    worker.onmessage = function (e) {
      console.log("Resultado do worker:", e.data);
    };

    worker.onerror = function (e) {
      console.error("Erro no worker:", e.message);
    };

    // Enviar dados para processamento
    const dadosPesados = Array.from({ length: 1000000 }, (_, i) => i);
    worker.postMessage(dadosPesados);

    return worker;
  } else {
    console.log("Web Workers não suportados");
    return null;
  }
}

// Chunking para processamento em lotes
function processarComChunking(dados, processarItem, tamanhoChunk = 1000) {
  let index = 0;
  const resultados = [];

  function processarChunk() {
    const inicio = index;
    const fim = Math.min(index + tamanhoChunk, dados.length);

    for (let i = inicio; i < fim; i++) {
      resultados.push(processarItem(dados[i]));
    }

    index = fim;

    if (index < dados.length) {
      // Liberar event loop entre chunks
      setTimeout(processarChunk, 0);
    } else {
      console.log("Processamento completo");
      return resultados;
    }
  }

  return processarChunk();
}

// Uso
const muitosDados = Array.from({ length: 10000 }, (_, i) => i);
processarComChunking(muitosDados, (x) => x * 2, 100);

// requestIdleCallback para tarefas de baixa prioridade
function usarRequestIdleCallback() {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(function (deadline) {
      console.log("Tempo restante:", deadline.timeRemaining());

      while (deadline.timeRemaining() > 0) {
        // Executar tarefas enquanto há tempo
        realizarTarefaDeBaixaPrioridade();
      }

      // Se ainda há trabalho, agendar novamente
      if (trabalhoRestante()) {
        requestIdleCallback(arguments.callee);
      }
    });
  } else {
    // Fallback para setTimeout
    setTimeout(realizarTarefaDeBaixaPrioridade, 0);
  }
}

function realizarTarefaDeBaixaPrioridade() {
  // Tarefa não crítica
}

function trabalhoRestante() {
  return false;
}

// Priority queue para tasks
class TaskSchedulerWithPriority {
  constructor() {
    this.highPriorityQueue = [];
    this.normalPriorityQueue = [];
    this.lowPriorityQueue = [];
    this.isProcessing = false;
  }

  add(task, priority = "normal") {
    const taskWithId = {
      id: Date.now() + Math.random(),
      task,
      priority,
    };

    switch (priority) {
      case "high":
        this.highPriorityQueue.push(taskWithId);
        break;
      case "low":
        this.lowPriorityQueue.push(taskWithId);
        break;
      default:
        this.normalPriorityQueue.push(taskWithId);
    }

    if (!this.isProcessing) {
      this.process();
    }

    return taskWithId.id;
  }

  async process() {
    this.isProcessing = true;

    while (this.hasTasks()) {
      // Processar alta prioridade primeiro
      if (this.highPriorityQueue.length > 0) {
        await this.executeTask(this.highPriorityQueue.shift());
      }
      // Depois prioridade normal
      else if (this.normalPriorityQueue.length > 0) {
        await this.executeTask(this.normalPriorityQueue.shift());
      }
      // Finalmente baixa prioridade
      else if (this.lowPriorityQueue.length > 0) {
        // Liberar event loop entre tarefas de baixa prioridade
        await new Promise((resolve) => setTimeout(resolve, 0));
        await this.executeTask(this.lowPriorityQueue.shift());
      }
    }

    this.isProcessing = false;
  }

  async executeTask(taskItem) {
    try {
      await taskItem.task();
    } catch (error) {
      console.error("Erro na tarefa:", error);
    }
  }

  hasTasks() {
    return (
      this.highPriorityQueue.length > 0 ||
      this.normalPriorityQueue.length > 0 ||
      this.lowPriorityQueue.length > 0
    );
  }

  remove(taskId) {
    const queues = [
      this.highPriorityQueue,
      this.normalPriorityQueue,
      this.lowPriorityQueue,
    ];

    for (const queue of queues) {
      const index = queue.findIndex((t) => t.id === taskId);
      if (index !== -1) {
        queue.splice(index, 1);
        return true;
      }
    }

    return false;
  }
}

// Uso
const scheduler = new TaskSchedulerWithPriority();

// Adicionar tarefas com diferentes prioridades
scheduler.add(() => console.log("Tarefa de alta prioridade"), "high");
scheduler.add(() => console.log("Tarefa normal 1"), "normal");
scheduler.add(() => console.log("Tarefa de baixa prioridade"), "low");
scheduler.add(() => console.log("Tarefa normal 2"), "normal");

// Debounce com requestAnimationFrame
function debounceRAF(func) {
  let rafId = null;

  return function (...args) {
    const context = this;

    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      func.apply(context, args);
    });
  };
}

// Uso para eventos de redimensionamento
window.addEventListener(
  "resize",
  debounceRAF(() => {
    console.log("Resize - otimizado com rAF");
  })
);

// Throttle com requestAnimationFrame
function throttleRAF(func) {
  let rafId = null;
  let lastArgs = null;

  return function (...args) {
    lastArgs = args;

    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func.apply(this, lastArgs);
        rafId = null;
        lastArgs = null;
      });
    }
  };
}

// Uso para eventos de scroll
window.addEventListener(
  "scroll",
  throttleRAF(() => {
    console.log("Scroll - otimizado com rAF");
  })
);

// Memoization pesada com liberação do event loop
function memoizeHeavy(fn) {
  const cache = new Map();
  const queue = [];
  let isProcessing = false;

  async function processQueue() {
    if (isProcessing || queue.length === 0) return;

    isProcessing = true;

    while (queue.length > 0) {
      const { key, args, resolve, reject } = queue.shift();

      if (cache.has(key)) {
        resolve(cache.get(key));
        continue;
      }

      try {
        const result = await fn(...args);
        cache.set(key, result);
        resolve(result);
      } catch (error) {
        reject(error);
      }

      // Liberar event loop entre processamentos
      if (queue.length > 0) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }

    isProcessing = false;
  }

  return function (...args) {
    const key = JSON.stringify(args);

    return new Promise((resolve, reject) => {
      queue.push({ key, args, resolve, reject });
      processQueue();
    });
  };
}

// Uso
const calculoPesadoMemo = memoizeHeavy(async (n) => {
  console.log(`Calculando fatorial de ${n}...`);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
});

// Múltiplas chamadas simultâneas
Promise.all([
  calculoPesadoMemo(10),
  calculoPesadoMemo(10), // Cache
  calculoPesadoMemo(5),
  calculoPesadoMemo(5), // Cache
]).then((resultados) => {
  console.log("Resultados:", resultados);
});

// Batch processing com microtasks
class MicrotaskBatcher {
  constructor() {
    this.batch = [];
    this.isScheduled = false;
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.batch.push({ task, resolve, reject });

      if (!this.isScheduled) {
        this.isScheduled = true;
        queueMicrotask(() => this.process());
      }
    });
  }

  process() {
    const currentBatch = this.batch;
    this.batch = [];
    this.isScheduled = false;

    currentBatch.forEach(({ task, resolve, reject }) => {
      try {
        const result = task();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

// Uso
const batcher = new MicrotaskBatcher();

// Adicionar várias tarefas
for (let i = 0; i < 5; i++) {
  batcher
    .add(() => {
      console.log(`Tarefa ${i} executada`);
      return i * 2;
    })
    .then((result) => {
      console.log(`Resultado ${i}:`, result);
    });
}
```

## Fetch API

### Fundamentos do Fetch API

```javascript
// Fetch API - interface moderna para requisições HTTP

// GET request básico
fetch("https://api.exemplo.com/dados")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON
  })
  .then((data) => {
    console.log("Dados recebidos:", data);
  })
  .catch((error) => {
    console.error("Erro na requisição:", error);
  });

// Métodos HTTP
// GET
fetch("https://api.exemplo.com/usuarios/1")
  .then((response) => response.json())
  .then((data) => console.log("Usuário:", data));

// POST
fetch("https://api.exemplo.com/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nome: "João",
    email: "joao@exemplo.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Usuário criado:", data));

// PUT
fetch("https://api.exemplo.com/usuarios/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nome: "João Atualizado",
    email: "joao.novo@exemplo.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Usuário atualizado:", data));

// DELETE
fetch("https://api.exemplo.com/usuarios/1", {
  method: "DELETE",
}).then((response) => {
  if (response.ok) {
    console.log("Usuário deletado com sucesso");
  }
});

// PATCH
fetch("https://api.exemplo.com/usuarios/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "novo.email@exemplo.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Usuário atualizado parcialmente:", data));

// Headers personalizados
fetch("https://api.exemplo.com/dados", {
  headers: {
    Authorization: "Bearer seu-token-aqui",
    "X-API-Key": "sua-chave-api",
    Accept: "application/json",
    "Content-Type": "application/json",
    "User-Agent": "MeuApp/1.0",
  },
});

// Modos de fetch
fetch("https://api.exemplo.com/dados", {
  mode: "cors", // padrão
  // mode: 'no-cors', // requisição limitada
  // mode: 'same-origin', // apenas mesma origem
  // mode: 'navigate' // para navegação
});

// Credenciais
fetch("https://api.exemplo.com/dados", {
  credentials: "include", // incluir cookies
  // credentials: 'same-origin', // apenas mesma origem
  // credentials: 'omit' // não enviar
});

// Cache
fetch("https://api.exemplo.com/dados", {
  cache: "default", // padrão do navegador
  // cache: 'no-store', // nunca cache
  // cache: 'reload', // sempre buscar no servidor
  // cache: 'no-cache', // validar com servidor
  // cache: 'force-cache', // usar cache se disponível
  // cache: 'only-if-cached' // apenas cache
});

// Redirecionamento
fetch("https://api.exemplo.com/dados", {
  redirect: "follow", // seguir redirecionamentos (padrão)
  // redirect: 'error', // falhar em redirecionamentos
  // redirect: 'manual' // tratar manualmente
});

// Referrer
fetch("https://api.exemplo.com/dados", {
  referrer: "https://origem.com",
  // referrerPolicy: 'no-referrer',
  // referrerPolicy: 'no-referrer-when-downgrade', // padrão
  // referrerPolicy: 'origin',
  // referrerPolicy: 'strict-origin',
  // referrerPolicy: 'same-origin',
  // referrerPolicy: 'strict-origin-when-cross-origin',
  // referrerPolicy: 'unsafe-url'
});

// AbortController para cancelar requisições
const controller = new AbortController();
const signal = controller.signal;

// Cancelar após 5 segundos
setTimeout(() => controller.abort(), 5000);

fetch("https://api.exemplo.com/dados-lentos", { signal })
  .then((response) => response.json())
  .then((data) => console.log("Dados:", data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Requisição cancelada");
    } else {
      console.error("Erro:", error);
    }
  });

// Response object
fetch("https://api.exemplo.com/dados")
  .then((response) => {
    console.log("Status:", response.status);
    console.log("Status Text:", response.statusText);
    console.log("OK?", response.ok);
    console.log("Headers:", response.headers);
    console.log("Type:", response.type);
    console.log("URL:", response.url);
    console.log("Redirected:", response.redirected);

    // Métodos para ler o body
    return response.text(); // ou .json(), .blob(), .arrayBuffer(), .formData()
  })
  .then((text) => console.log("Texto:", text));

// Headers API
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer token",
});

// Adicionar headers
headers.append("X-Custom-Header", "valor");

// Verificar header
console.log("Tem Content-Type?", headers.has("Content-Type"));

// Obter header
console.log("Content-Type:", headers.get("Content-Type"));

// Deletar header
headers.delete("X-Custom-Header");

// Iterar headers
for (const [name, value] of headers) {
  console.log(`${name}: ${value}`);
}

// Request object
const request = new Request("https://api.exemplo.com/dados", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ data: "valor" }),
});

fetch(request)
  .then((response) => response.json())
  .then((data) => console.log(data));

// Clonar request
const requestClone = request.clone();

// Verificar propriedades
console.log("URL:", request.url);
console.log("Method:", request.method);
console.log("Headers:", request.headers);
console.log("Body usado?", request.bodyUsed);
```

### Técnicas Avançadas com Fetch

```javascript
// Wrapper com funcionalidades avançadas
class HTTPClient {
  constructor(baseURL, defaultOptions = {}) {
    this.baseURL = baseURL;
    this.defaultOptions = {
      headers: {
        "Content-Type": "application/json",
        ...defaultOptions.headers,
      },
      ...defaultOptions,
    };

    this.interceptors = {
      request: [],
      response: [],
    };
  }

  // Adicionar interceptors
  addRequestInterceptor(interceptor) {
    this.interceptors.request.push(interceptor);
  }

  addResponseInterceptor(interceptor) {
    this.interceptors.response.push(interceptor);
  }

  // Aplicar interceptors
  async applyRequestInterceptors(request) {
    let currentRequest = request;

    for (const interceptor of this.interceptors.request) {
      currentRequest = await interceptor(currentRequest);
    }

    return currentRequest;
  }

  async applyResponseInterceptors(response) {
    let currentResponse = response;

    for (const interceptor of this.interceptors.response) {
      currentResponse = await interceptor(currentResponse);
    }

    return currentResponse;
  }

  // Método request genérico
  async request(endpoint, options = {}) {
    const url = this.baseURL + endpoint;
    const mergedOptions = {
      ...this.defaultOptions,
      ...options,
      headers: {
        ...this.defaultOptions.headers,
        ...options.headers,
      },
    };

    let request = new Request(url, mergedOptions);

    // Aplicar request interceptors
    request = await this.applyRequestInterceptors(request);

    try {
      let response = await fetch(request);

      // Aplicar response interceptors
      response = await this.applyResponseInterceptors(response);

      if (!response.ok) {
        throw new HTTPError(
          response.status,
          response.statusText,
          await response.text()
        );
      }

      return response;
    } catch (error) {
      if (error instanceof HTTPError) {
        throw error;
      }
      throw new NetworkError(error.message);
    }
  }

  // Métodos HTTP helpers
  async get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "GET" });
  }

  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  }

  // Métodos para dados específicos
  async getJSON(endpoint, options = {}) {
    const response = await this.get(endpoint, options);
    return response.json();
  }

  async postJSON(endpoint, data, options = {}) {
    const response = await this.post(endpoint, data, options);
    return response.json();
  }
}

// Erros personalizados
class HTTPError extends Error {
  constructor(status, statusText, body) {
    super(`HTTP ${status}: ${statusText}`);
    this.name = "HTTPError";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(`Network Error: ${message}`);
    this.name = "NetworkError";
  }
}

// Uso do HTTPClient
const api = new HTTPClient("https://api.exemplo.com/v1");

// Adicionar interceptors
api.addRequestInterceptor(async (request) => {
  // Adicionar token de autenticação
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.set("Authorization", `Bearer ${token}`);
  }

  // Log da requisição
  console.log(`[Request] ${request.method} ${request.url}`);
  return request;
});

api.addResponseInterceptor(async (response) => {
  // Log da resposta
  console.log(`[Response] ${response.status} ${response.url}`);

  // Verificar token expirado
  if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return response;
});

// Usar a API
async function exemploUso() {
  try {
    // GET request
    const usuarios = await api.getJSON("/usuarios");
    console.log("Usuários:", usuarios);

    // POST request
    const novoUsuario = await api.postJSON("/usuarios", {
      nome: "João",
      email: "joao@exemplo.com",
    });
    console.log("Usuário criado:", novoUsuario);

    // PUT request
    const usuarioAtualizado = await api.putJSON("/usuarios/1", {
      nome: "João Atualizado",
    });
    console.log("Usuário atualizado:", usuarioAtualizado);
  } catch (error) {
    if (error instanceof HTTPError) {
      console.error("Erro HTTP:", error.status, error.body);
    } else if (error instanceof NetworkError) {
      console.error("Erro de rede:", error.message);
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
}

// Fetch com retry automático
async function fetchWithRetry(url, options = {}, maxRetries = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new HTTPError(response.status, response.statusText);
      }

      return response;
    } catch (error) {
      lastError = error;
      console.log(`Tentativa ${attempt} falhou: ${error.message}`);

      if (attempt < maxRetries) {
        // Backoff exponencial
        const backoffDelay = delay * Math.pow(2, attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, backoffDelay));
      }
    }
  }

  throw new Error(
    `Falhou após ${maxRetries} tentativas. Último erro: ${lastError.message}`
  );
}

// Uso
fetchWithRetry("https://api.exemplo.com/dados", {}, 3, 1000)
  .then((response) => response.json())
  .then((data) => console.log("Dados com retry:", data))
  .catch((error) => console.error("Erro final:", error.message));

// Upload de arquivos com progresso
async function uploadFile(url, file, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        onProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(`Upload failed: ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => reject(new Error("Network error"));

    xhr.open("POST", url);

    const formData = new FormData();
    formData.append("file", file);

    xhr.send(formData);
  });
}

// Upload com fetch (sem progresso nativo)
async function uploadWithFetch(url, file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`);
  }

  return response.json();
}

// Download com progresso
async function downloadWithProgress(url, onProgress) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Download failed: ${response.statusText}`);
  }

  const contentLength = response.headers.get("content-length");
  const total = parseInt(contentLength, 10);

  let loaded = 0;
  const chunks = [];
  const reader = response.body.getReader();

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    chunks.push(value);
    loaded += value.length;

    if (total) {
      const percent = (loaded / total) * 100;
      onProgress(percent);
    }
  }

  // Combinar chunks
  const blob = new Blob(chunks);
  return blob;
}

// Stream de dados
async function streamData(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    console.log("Chunk recebido:", chunk);

    // Processar chunk incrementalmente
    processChunk(chunk);
  }
}

function processChunk(chunk) {
  // Processamento incremental
}

// Cache com Service Worker
// service-worker.js
/*
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - retornar resposta do cache
                if (response) {
                    return response;
                }

                return fetch(event.request).then(response => {
                    // Verificar se é uma resposta válida
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clonar resposta
                    const responseToCache = response.clone();

                    caches.open('meu-cache')
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
    );
});
*/

// Prefetch de recursos
function prefetchResources(urls) {
  return Promise.all(
    urls.map((url) =>
      fetch(url, { priority: "low" })
        .then((response) => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error(`Failed to prefetch ${url}`);
        })
        .catch((error) => {
          console.warn(`Prefetch failed for ${url}:`, error.message);
        })
    )
  );
}

// Uso
prefetchResources([
  "/api/dados",
  "/imagens/background.jpg",
  "/estilos/extra.css",
]).then(() => {
  console.log("Recursos pré-carregados");
});

// Lazy loading de recursos
class ResourceLoader {
  constructor() {
    this.cache = new Map();
    this.loading = new Map();
    this.queue = [];
  }

  async load(url, options = {}) {
    // Se já está em cache
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    // Se já está carregando
    if (this.loading.has(url)) {
      return this.loading.get(url);
    }

    // Criar promise de carregamento
    const loadPromise = this.fetchResource(url, options);
    this.loading.set(url, loadPromise);

    try {
      const resource = await loadPromise;
      this.cache.set(url, resource);
      return resource;
    } finally {
      this.loading.delete(url);
    }
  }

  async fetchResource(url, options) {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }

    // Determinar tipo de recurso
    const contentType = response.headers.get("content-type");

    if (contentType.includes("application/json")) {
      return response.json();
    } else if (contentType.includes("text/")) {
      return response.text();
    } else if (contentType.includes("image/")) {
      return response.blob();
    }

    return response.arrayBuffer();
  }

  preload(urls) {
    urls.forEach((url) => {
      this.load(url, { priority: "low" }).catch(() => {
        // Ignorar erros de pré-carregamento
      });
    });
  }
}

// Uso
const loader = new ResourceLoader();

// Carregar quando necessário
loader.load("/api/dados").then((dados) => {
  console.log("Dados carregados:", dados);
});

// Pré-carregar recursos
loader.preload(["/api/usuarios", "/api/produtos"]);

// Batch requests
async function batchRequests(urls, batchSize = 5) {
  const results = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchPromises = batch.map((url) =>
      fetch(url)
        .then((r) => r.json())
        .catch((e) => ({ error: e.message }))
    );

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    // Pequena pausa entre batches
    if (i + batchSize < urls.length) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  return results;
}

// Uso
const urls = Array.from(
  { length: 20 },
  (_, i) => `https://api.exemplo.com/item/${i + 1}`
);
batchRequests(urls, 5).then((results) => {
  console.log("Batch results:", results);
});
```

Este guia completo cobre todos os aspectos do assincronismo em JavaScript, desde callbacks tradicionais até técnicas avançadas com a Fetch API. Cada seção inclui exemplos práticos e detalhados para melhor compreensão e implementação.
