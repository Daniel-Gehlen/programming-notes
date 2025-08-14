# Erlang

## Visão Geral

Linguagem funcional criada pela Ericsson nos anos 80 para sistemas de telecomunicações, destacando-se por:

- Concorrência leve (modelo de atores)
- Tolerância a falhas nativa
- Hot code swapping (atualizações sem downtime)
- Execução na máquina virtual BEAM

---

## Principais Características

**Modelo de Ator**
✔ Processos leves isolados (~1KB cada)
✔ Comunicação via troca de mensagens assíncronas

**Tolerância a Falhas**
✔ Hierarquia de supervisores
✔ Reinicialização automática de processos

**Hot Code Swapping**
✔ Atualizações em produção sem parar o sistema

**Funcional**
✔ Imutabilidade de dados
✔ Pattern matching avançado

---

## Componentes Chave

### Supervisores

Monitoram e reiniciam processos filhos conforme estratégias definidas:

```erlang
{restart_strategy, one_for_one}  % Reinicia apenas o processo falho
```

### GenServers

Servidores genéricos com callbacks padrão:

```erlang
-module(my_server).
-behaviour(gen_server).

% Callbacks obrigatórios
init(Args) -> {ok, InitialState}.
handle_call(Request, _From, State) -> {reply, Response, NewState}.
handle_cast(Msg, State) -> {noreply, State}.
```

---

## Exemplo Prático

**Arquitetura com Supervisor e GenServers**

```
+---------------+
|  Supervisor   |
+---------------+
       |
       |---> [GenServer1]
       |---> [GenServer2]
```

**Código de Supervisor**:

```erlang
child_specs = [
    #{id => my_server, start => {my_server, start_link, []}}
],
{ok, _} = supervisor:start_link(child_specs, #{strategy => one_for_one}).
```

**Fatorial Recursivo**:

```erlang
fatorial(0) -> 1;
fatorial(N) when N > 0 -> N * fatorial(N-1).
```

---

## Casos de Uso

- Sistemas de telecomunicações (ex: switches 5G)
- Plataformas de mensageria (WhatsApp usa Erlang)
- Bancos de dados distribuídos (Riak, CouchDB)
- Sistemas financeiros em tempo real

---

## Conclusão

Erlang oferece um ecossistema único para sistemas distribuídos e tolerantes a falhas, combinando:
✅ Concorrência massiva
✅ Autorrecuperação
✅ Manutenção contínua
