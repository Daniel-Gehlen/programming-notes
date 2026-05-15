## Terceira categoria de edição

Após corrigir **tempo** e **afinação**, a última etapa da edição é a **limpeza**: eliminar sons indesejáveis que poluem a música.

---

## O que são "impurezas" no áudio?

| Tipo                              | Exemplos                                                                    |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Vazamentos**                    | Som do fone vazando para o microfone, base que "vaza" na gravação do violão |
| **Ruídos de fundo**               | Chiado, ruído elétrico, interferência de rede, vento                        |
| **Artefatos de gravação**         | Respirações muito altas, estalos, clicks                                    |
| **Sons de consoantes exageradas** | Sibilância (SS, CH, SH) na voz                                              |

> **Princípio fundamental:** O ideal é **evitar o ruído na fonte** (planejamento e boa captação) em vez de tentar corrigir depois. Correção pós-gravação sempre tem um "custo" em qualidade.

---

## Abordagem 1: Limpeza manual (cortes e automação de volume)

### Para ruídos pontuais e isolados

- **Identifique** o trecho com ruído (ex: intervalo entre frases, respiração indesejada).
- **Dê zoom** na forma de onda para visualizar bem o transiente.
- **Corte** com `S` (Split) e **delete** o trecho.
- Ou use **automação de volume interna ao item** para reduzir o volume apenas naquela região.

### Como criar automação de volume dentro de um item (sem usar envelope de track)

1. Selecione o item de áudio.
2. No menu superior: `Item` > `Take` > `Take volume envelope`.
3. Uma linha horizontal azul aparece sobre o item.
4. Clique na linha para criar **pontos** e arraste para baixo (reduzir volume) ou para cima (aumentar).
5. Isso permite abaixar o volume de um ruído específico sem afetar o restante do item.

---

## Abordagem 2: Gate (porta de ruído) – automação por nível

### O que é um Gate

- Um plugin que **abre** (deixa passar o som) quando o sinal está acima de um certo nível (threshold) e **fecha** (silencia) quando o sinal está abaixo desse nível.
- É como um "portão automático": só abre se o som for forte o suficiente.

### Onde usar o gate

- Tracks com **muitos intervalos silenciosos** entre as notas/frases.
- Exemplos: gravação de voz com pausas longas, bateria com pratos que ressoam demais, baixo com ruído de mãos.

### Plugin nativo no Reaper: **ReaGate**

- Como acessar: clique em `FX` na track → adicione `ReaGate` (Cockos).

---

## Parâmetros essenciais do ReaGate

| Parâmetro              | O que faz                                                                                                    | Recomendação para voz                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Threshold (limiar)** | Nível (em dB) a partir do qual o gate começa a abrir. Só o que estiver **acima** desse nível passa.          | Ajuste o mais **baixo possível** para não picotar finais de frases suaves    |
| **Attack**             | Tempo que o gate leva para **abrir completamente** após o sinal ultrapassar o threshold.                     | **Rápido** (1-5 ms) – senão o início da palavra pode ser cortado             |
| **Hold**               | Tempo que o gate **permanece aberto** após o sinal cair abaixo do threshold, antes de começar a fechar.      | 50-100 ms (depende da duração das pausas)                                    |
| **Release**            | Tempo que o gate leva para **fechar completamente** após o sinal cair abaixo do threshold e o hold terminar. | **Mais lento** (100-400 ms) para evitar fechamento brusco que soa artificial |

### Visualização no ReaGate

- Há um **medidor de nível** (barrinha vertical).
- A **linha branca/amarela** mostra o threshold.
- O **track de entrada** mostra o sinal que está chegando.

### Como ajustar o gate corretamente (passo a passo)

| Passo | Procedimento                                                                                                               |
| ----- | -------------------------------------------------------------------------------------------------------------------------- |
| 1     | Coloque o cursor em uma região de **ruído** (onde não há canto/toque). Observe o nível do ruído no medidor.                |
| 2     | Ajuste o **threshold** logo **acima** do nível do ruído, mas **abaixo** do nível do canto/toque mais baixo da performance. |
| 3     | Reduza o **attack** (ex: 2 ms) para que o gate abra rápido no início da palavra.                                           |
| 4     | Aumente o **release** (ex: 200 ms) para que o gate feche suavemente, sem cortar finais de notas sustentadas.               |
| 5     | Teste ouvindo. Se o gate estiver "picotando" finais de palavras, aumente o release ou reduza o threshold.                  |

### Problema comum: respirações indesejadas

- Se você **quiser matar as respirações** (silenciar completamente os intervalos), suba o threshold até que elas fiquem abaixo do limiar.
- Se você **quiser manter as respirações** mas matar apenas ruídos mais baixos, deixe o threshold **pouco acima** do ruído de fundo, mas abaixo da respiração.

> **Dica:** "Manter as respirações na voz – elas são parte da performance. Mas cada um tem sua preferência."

---

## Dica extra: identificação de sibilância (SS, CH, SH)

### Como identificar no gráfico

- Os **SS** geralmente aparecem na forma de onda como **manchas mais escuras ou áreas com muitos picos pequenos e rápidos**.
- Eles também podem ser identificados visualmente por um **borrão** mais denso no espectrograma (se ativado).

### Como reduzir sibilância (de forma simples)

| Método                           | Como fazer                                                                                                                                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Manual (automação de volume)** | Localize o S no gráfico, crie pontos de envelope de volume e reduza o volume apenas naquele instante.                                                                                          |
| **DeEsser (plugin)**             | Adicione um plugin de DeEsser (ex: `ReaComp` com filtro passa-alta, ou um DeEsser dedicado gratuito). O percurso não detalha DeEsser aqui, mas há mais recursos no universo de limpeza de som. |

---

## Planejamento: a melhor "limpeza" é evitar o ruído na fonte

### Para ruídos elétricos / interferências

1. Teste componentes um por um (fonte, cabo, interface, computador).
2. Teste em outra tomada ou outro computador.
3. Verifique rede elétrica, aterramento, fontes de interferência (celular, roteador, lâmpada fluorescente).

### Para vazamento de som (fone para microfone)

- Use fones **fechados** (isolamento).
- Ajuste o volume do fone o mais baixo possível enquanto ainda ouve bem.
- Posicione o microfone de forma a **rejeitar** a direção do vazamento (padrão cardioide).

### Para gravações "limpas"

> "O ideal para você é que você tente fazer uma gravação 100% (já limpa). Identificar o ruído e eliminar o ruído na captação é muito melhor do que gravar e tentar corrigir depois."

---

## O que NÃO fazer

- **Não confie que o gate vai resolver tudo** – ele só funciona para ruídos de nível constante e mais baixo que o sinal útil.
- **Não use gate agressivo em voz** – isso corta finais naturais e introduz artefatos.
- **Não ignore ruídos na captação** achando que "depois a gente resolve" – a remoção pós-gravação sempre degrada o áudio de alguma forma.

---

## Resumo visual da limpeza

| Tipo de sujeira                                | Método recomendado                                                                |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| Ruído pontual (ex: estalo, respiração isolada) | Corte manual (`S` + Delete) ou envelope de volume                                 |
| Ruído de fundo constante (ex: chiado, vento)   | Plugins de redução de ruído (não abordado em detalhe no percurso, mas mencionado) |
| Ruído entre frases (intervalos)                | Gate (ReaGate) com threshold baixo                                                |
| Sibilância exagerada (SS)                      | DeEsser ou automação manual de volume                                             |
| Vazamento de fone                              | **Prevenir na gravação** – não corrigir depois                                    |

---

## Nota

> "Fase de preparação da matéria-prima concluida. Agora sim pode ir para as fases em que a mágica realmente acontece: mixagem e masterização. O mais importante continua sendo: boa gravação, bom timbre, bom planejamento – para garantir que nada disso foi necessário em excesso."
