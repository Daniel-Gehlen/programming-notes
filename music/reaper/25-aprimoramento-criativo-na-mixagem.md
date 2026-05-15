## Última subfase da mixagem

Após equalização (ajuste de frequências) e compressão (ajuste de dinâmica), a próxima etapa é o **aprimoramento criativo**: adicionar efeitos e automações para melhorar a **experiência auditiva** de quem vai ouvir a música.

---

## Efeitos (definição no percurso)

| Tipo de processamento        | O que faz                                                         | Exemplos                               |
| ---------------------------- | ----------------------------------------------------------------- | -------------------------------------- |
| **EQ e Compressor**          | Alteram timbre e dinâmica (transientes, frequências)              | Equalizador, compressor                |
| **Efeitos (neste contexto)** | Somam características aos timbres, sem alterar a estrutura básica | Reverb, delay, chorus, flanger, phaser |

Os efeitos podem ser usados tanto com **proposta estética** (criativa) quanto com **proposta técnica** (resolver problemas, como dar naturalidade a uma gravação seca).

---

## Configuração: efeitos em paralelo (usando tracks auxiliares)

### O que é um track auxiliar (send/return)

- É uma **track especial** que recebe o sinal de outras tracks (via send) e aplica um efeito **em paralelo**.
- O **sinal original** permanece inalterado na track de origem.
- O **sinal afetado** (com efeito) sai da track auxiliar e é misturado ao original.

### Vantagem do uso paralelo

- Você controla separadamente: volume do som seco (original) + volume do som molhado (com efeito).
- Permite usar efeitos de forma **mais limpa e controlada**.

### Como configurar no Reaper (passo básico)

| Passo | Procedimento                                                                                                                                                                                                                        |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Crie uma **nova track** – esta será sua track auxiliar de efeito                                                                                                                                                                    |
| 2     | Nomeie-a (ex: "Reverb Vocal", "Delay Guitarra")                                                                                                                                                                                     |
| 3     | Insira o plugin de efeito (ex: ReaVerbate, Readelay) nesta track auxiliar                                                                                                                                                           |
| 4     | Na track de origem (ex: voz), clique no botão `Routing` (ou `I/O`)                                                                                                                                                                  |
| 5     | Adicione um **send** para a track auxiliar                                                                                                                                                                                          |
| 6     | Ajuste o **nível do send** (quanto do sinal vai para o efeito)                                                                                                                                                                      |
| 7     | Na track auxiliar, o fader controla o **volume do efeito** na mixagem                                                                                                                                                               |
| 8     | Importante: desative o **Master Send** da track auxiliar se ela estiver enviando o sinal seco de volta (geralmente o auxiliar envia apenas o efeito, não o som original) – ou mantenha o efeito 100% molhado (wet) dentro do plugin |

> ⚠️ O sinal original (dry) nunca deve ser reproduzido pela track auxiliar – apenas o sinal afetado (wet).

---

## Categoria 1: Efeitos de ambiência – Reverb (reverberação)

### O que é reverberação

- Fenômeno natural de **reflexões do som** no ambiente.
- Quando uma fonte sonora se propaga, o som reflete em paredes, teto, chão, móveis.
- Essas reflexões são muito próximas umas das outras (milissegundos), e o ouvido humano **não as distingue separadamente** – elas se fundem em uma cauda que chamamos de **reverberação** (reverb).

### Para que usar reverb na mixagem

| Uso          | Objetivo                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------ |
| **Técnico**  | Trazer naturalidade a gravações muito secas (ex: voz gravada em ambiente tratado, sem reflexões) |
| **Estético** | Simular ambientes: sala pequena, igreja (catedral), palco, estúdio, câmara, etc.                 |
| **Criativo** | Criar profundidade, distância, espaço imaginativo                                                |

### Parâmetros principais de um reverb (ex: ReaVerbate)

| Parâmetro                  | O que faz                                                        | Efeito auditivo                                                                      |
| -------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Decay / Tamanho (Size)** | Define a **duração da cauda** do reverb                          | Decay curto (0.5-1.5s): ambiente pequeno. Decay longo (2-4s+): sala grande, catedral |
| **Pre-delay**              | Pequeno atraso (em ms) entre o som original e o início do reverb | Separa o som seco do efeito, mantendo clareza das sílabas/notas                      |
| **Damping** (Filtro)       | Controla quanto dos agudos se perdem ao longo do reverb          | Damping alto: reverb escuro, abafado. Damping baixo: reverb brilhante                |
| **Width (Largura)**        | Largura estéreo do reverb                                        | 0% = mono, 100% = estéreo máximo                                                     |
| **Wet / Dry**              | Proporção entre sinal afetado (wet) e original (dry)             | Em tracks auxiliares, geralmente usa-se 100% wet (só o efeito)                       |

### Recomendação prática

- Para dar **naturalidade** a uma voz ou instrumento: decay médio (1-2s), pre-delay curto (10-30ms), damping médio.
- Para efeitos **criativos** (ex: balada com muito espaço): decay longo (2-4s+), pre-delay mais longo (50-100ms).

---

## Categoria 2: Efeitos de tempo – Delay (eco)

### O que é delay

- Simula **reflexões mais distantes** da fonte original, que o ouvido consegue perceber **separadamente** (ecos).
- Característico de ambientes muito grandes (canions, montanhas) ou efeitos criativos (ex: guitarra com delay rítmico).

### Parâmetros principais de um delay (ex: Readelay)

| Parâmetro              | O que faz                                                | Efeito auditivo                                                                                              |
| ---------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Delay Time (Tempo)** | Espaçamento entre as repetições (ecos)                   | Pode ser ajustado em ms (ex: 500 ms = 0,5s entre ecos) ou em figuras rítmicas (colcheia, semicolcheia, etc.) |
| **Feedback**           | Quantidade de repetições (quantas vezes o eco se repete) | Feedback baixo (10-20%): 1-2 ecos apenas. Feedback alto (50-80%): muitos ecos, efeito mais pronunciado       |
| **Filter (Filtro)**    | Cor do delay – geralmente corta agudos a cada repetição  | Delay escurecendo aos poucos soa mais natural                                                                |
| **Wet / Dry**          | Proporção entre sinal afetado e original                 | Em auxiliar, geralmente 100% wet                                                                             |

### Configuração prática – sincronizando delay com o andamento (BPM) da música

| Método                       | Como fazer                                                                                                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Automático (recomendado)** | No plugin de delay, ative a opção `Host BPM` ou `Sync`. O delay calculará automaticamente os tempos em figuras rítmicas (ex: 1/4, 1/8, 1/8T, 1/16) com base no BPM do projeto |
| **Manual**                   | Calcule o tempo em ms: `60.000 / BPM` para uma semínima (1/4). Ex: BPM 120 → 60.000/120 = 500 ms para uma semínima. Subdivisões (ex: 1/8 = 250 ms, 1/16 = 125 ms)             |

### Uso comum

- Delay rítmico em vocais (ex: em palavras específicas para criar efeito de "repetição").
- Delay em guitarra solo para criar profundidade.
- Delay em backing vocals para espalhamento.

---

## Categoria 3: Efeitos de modulação

| Efeito      | O que faz                                                            | Exemplo de uso                             |
| ----------- | -------------------------------------------------------------------- | ------------------------------------------ |
| **Chorus**  | Duplica o sinal, desafina levemente e atrasa, misturando ao original | Engrossar voz, guitarra, teclado           |
| **Flanger** | Atraso variável com feedback, criando efeito de "jato"               | Efeitos psicodélicos, transições           |
| **Phaser**  | Filtros em movimento (notch filters) criando efeito de "varredura"   | Guitarra, teclado, voz (efeito "espacial") |

> O percurso não detalha esses efeitos profundamente, mas os menciona como possibilidades para aprimoramento criativo.

---

## Automação (envelopes)

### O que é automação

- Programar a **mudança automática de um parâmetro** ao longo do tempo.
- Exemplo: aumentar o volume da guitarra solo em um trecho, diminuir o reverb no refrão, mudar o pan de um elemento durante a música.

### Como criar automação no Reaper

| Método                                  | Procedimento                                                                                                                                                                                              |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Envelope na track**                   | Clique no botão `Envelopes` (ou `Trim`) na track → marque o parâmetro desejado (ex: Volume, Pan, Mute) → uma linha aparece no item → clique para criar pontos (nodes) → arraste os pontos para cima/baixo |
| **Automação de parâmetros de plugin**   | No plugin, mova o controle desejado → clique em `Param` (no topo do plugin) → `Show track envelope` → escolha o parâmetro → envelope criado na track                                                      |
| **Automação rápida (modo write/touch)** | Ative o modo `Write` ou `Touch` no transporte → dê play → mova os controles em tempo real → o Reaper registra os movimentos como automação                                                                |

### Liga/desliga automação

- Botão **`Env`** (envelope) na track: mostra/oculta as linhas de envelope.
- Botão de **modo de automação** no transporte: `Trim/Read` (só lê, não escreve), `Write` (escreve novos movimentos), `Touch` (escreve enquanto mexe, volta a ler após soltar), `Latch` (similar ao Touch, mas mantém o último valor).

### Assistente de automação (LFO)

- O Reaper possui um **assistente de automação** que permite criar curvas de formas de onda (seno, triângulo, quadrado, etc.) com velocidade e intensidade ajustáveis – útil para criar efeitos de modulação automáticos (ex: pan oscilando).

---

## Exemplo prático no percurso (resumo)

Aplicou-se na música:

- **Reverb** (reverberação) em elementos selecionados (voz, caixa, backing vocals) para dar **naturalidade e profundidade**.
- **Delay** (eco) em trechos específicos (ex: uma palavra da voz, ou na guitarra solo) para efeito criativo.
- **Automações** de volume e pan em alguns trechos para destacar elementos ou criar movimento.

---

## Resumo visual dos efeitos e automações

```
EFEITOS EM PARALELO (TRACK AUXILIAR)
     ↓
Origem (Track) → Send → Track Auxiliar (plugin 100% wet) → Mistura (original + efeito)

PRINCIPAIS TIPOS DE EFEITO
├── Reverb (ambiência, naturalidade, espaço)
│   └── Parâmetros: Decay, Pre-delay, Damping, Width
├── Delay (eco, repetições rítmicas)
│   └── Parâmetros: Time (ms ou sync com BPM), Feedback, Filter
└── Modulação (Chorus, Flanger, Phaser) – para efeitos criativos

AUTOMAÇÃO
├── Criar envelope de parâmetro (Volume, Pan, parâmetros de plugin)
├── Modos: Trim/Read (leitura), Write/Touch/Latch (escrita)
└── LFO assistente: cria curvas automáticas (seno, triângulo, etc.)
```

---

## Nota

> "Com reverbs e delays bem ajustados (usando tracks auxiliares), e com automações para criar movimento, você leva sua mixagem de 'técnica' para 'arte'. A música ganha profundidade, espaço e emoção. É a cereja do bolo da mixagem."
