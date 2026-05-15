## Ajustes finais da masterização

Após o processamento de EQ e compressor na master (subfase 1), a música está pronta para o **último passo**: levar o volume (loudness) a um **padrão comercial** e exportar o arquivo final.

---

## Limitador (Limiter) – a ferramenta central

### O que é um limitador

- É um tipo especial de **compressor com ratio muito alto** (geralmente 10:1 ou mais, infinito:1 em alguns casos).
- Sua função é **estabelecer um teto máximo** (ceiling) que o áudio não pode ultrapassar.
- Normalmente, o teto é configurado em **-0,1 dB ou -0,3 dB** (para evitar distorção intersample).
- Ao aumentar o **ganho de entrada (input gain)** , o limitador "empurra" o áudio contra esse teto, **aumentando o volume percebido** (loudness) sem causar clipagem digital.

### Lógica do limitador (analogia)

| Conceito                              | Explicação                                                                                                                                      |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Teto (ceiling)**                    | É o "teto" do sistema digital. Nada pode ultrapassar 0 dB. O limitador coloca um bloqueio logo abaixo disso (ex: -0,3 dB)                       |
| **Ganho de entrada (input gain)**     | Você "empurra" o som para cima. Quando os picos encostam no teto, o limitador os achata (comprime) para que não ultrapassem                     |
| **Redução de ganho (gain reduction)** | Quantos dB estão sendo "cortados" dos picos. Quanto mais você empurra o volume, maior a redução. Isso causa **perda de dinâmica** (achatamento) |

### Parâmetros básicos de um limitador

| Parâmetro                  | O que faz                                               | Valor típico                                                      |
| -------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| **Ceiling (Teto)**         | Nível máximo que o áudio pode atingir                   | **-0,3 dB** ou **-0,1 dB** (para evitar distorção em conversores) |
| **Input Gain / Threshold** | Quanto você está "empurrando" o volume para cima        | Ajustar até obter gain reduction desejada                         |
| **Release**                | Tempo que o limitador leva para "soltar" após o pico    | Automático ou médio (50-200 ms)                                   |
| **Lookahead**              | Pequeno atraso (ms) para o limitador "antecipar" o pico | Automático ou 1-5 ms                                              |

---

## Qual o volume final (loudness) ideal?

### Resposta (prática, não teórica)

| Valor recomendado                                   | Observação                                                                           |
| --------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **-9 dB RMS / -10 dB RMS** (ou equivalente em LUFS) | Volume **suficiente para ser considerado comercial**, sem exageros                   |
| **Faixa segura**                                    | Entre **-12 dB e -9 dB** (ou -12 LUFS a -9 LUFS integrado) é um bom ponto de partida |

### Por que não usar valores extremos?

| Situação                                | Problema                                                                                                                                                  |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume muito alto** (ex: -5 dB RMS)   | Perda severa de dinâmica, música "esmagada", fadiga auditiva. Plataformas de streaming vão **normalizar para baixo** (reduzir volume), anulando o esforço |
| **Volume muito baixo** (ex: -20 dB RMS) | A música soará **fraca** em comparação com outras referências comerciais. Plataformas vão normalizar para cima (aumentar), mas isso pode realçar ruídos   |

> **Estratégia do percurso:** Ajustar para **-9 dB / -10 dB** é um bom equilíbrio: soa comercial, mas preserva dinâmica suficiente e não é excessivamente agressivo.

---

## Como ajustar o limitador (passo a passo prático)

### Preparação

1. Insira um **limitador** (ex: ReaLimit, LoudMax, ou limitador do seu plugin de master) na **cadeia de master**, após o EQ e compressor.
2. Configure o **ceiling** (teto) para **-0,3 dB** ou **-0,1 dB**.

### Ajuste do volume (input gain)

| Passo | Procedimento                                                                                           |
| ----- | ------------------------------------------------------------------------------------------------------ |
| 1     | Coloque a música para tocar na **parte mais intensa** (refrão, parte forte)                            |
| 2     | Aumente gradualmente o **input gain** (ou baixe o threshold) do limitador                              |
| 3     | Observe o **medidor de gain reduction** (redução de ganho) – geralmente aparece no próprio plugin      |
| 4     | Ajuste até obter **entre 3 dB e 6 dB de gain reduction nos picos** (valor de referência)               |
| 5     | Acompanhe o **medidor de saída (output)** – o pico máximo deve ficar no teto configurado (ex: -0,3 dB) |
| 6     | **Ouça** – a música deve soar mais alta, mas sem distorção audível nem perda excessiva de dinâmica     |

### Ajuste fino com referência (recomendado)

| Método                             | Como fazer                                                                                                                                                                                                                                      |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Referência comercial**           | Antes de masterizar, ouça algumas músicas profissionais (mesmo gênero) no seu sistema. Ajuste o **volume do seu monitor/fone** para que essas referências soem num nível confortável (alto, mas sem cansar). **Não mexa mais nesse volume**     |
| **A/B com referência**             | Toque sua música masterizada no mesmo sistema, no mesmo volume de monitor. Compare: sua música está **visivelmente mais baixa**? Se sim, aumente o input gain do limitador até que o **volume percebido** se aproxime das referências           |
| **Medidor de loudness (opcional)** | Use um plugin de medidor de LUFS (ex: YouLean Loudness Meter) na master após o limitador. Valores de referência: **-14 LUFS integrado** (Spotify) até **-9 LUFS** (CD / rádio comercial). Para iniciantes, mirar em **-12 a -10 LUFS** é seguro |

> ⚠️ **Cuidado com a fadiga:** Ao aumentar o volume no limitador, o som pode ficar cansativo. Faça pausas e ouça em volumes baixos também.

---

## Ajuste do volume da interface de áudio (macete)

### Problema comum

- Ao aumentar o input gain do limitador, o volume na sua caixa de som/fone **aumenta drasticamente**.
- Isso pode enganar sua percepção (mais alto soa "melhor", mesmo que a qualidade tenha piorado).

### Solução (macete)

| Passo | Procedimento                                                                                                                            |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Antes de masterizar, toque **músicas profissionais** (referências) no seu sistema                                                       |
| 2     | Ajuste o **volume da interface/caixa/fone** até que essas referências soem num nível **confortável** (nem baixo demais, nem estourando) |
| 3     | **Fixar (anotar)** essa posição do knob de volume                                                                                       |
| 4     | Ao masterizar sua música, mantenha o **volume da interface exatamente nessa posição**                                                   |
| 5     | Aumente o input gain do limitador até que **sua música soe com volume percebido semelhante às referências**                             |

Dessa forma, você não é enganado pelo volume mais alto – você compara **no mesmo nível de reprodução**.

---

## Exportação (renderização) do arquivo final

### Acessando a janela de renderização

- `File` > `Render...` (ou `Ctrl + Alt + R`)

### Configurações principais (passo a passo)

| Campo             | Configuração                                                                   | Explicação                                                                        |
| ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| **Source**        | `Master mix`                                                                   | Exportar o que está saindo da track master (com todos os plugins de masterização) |
| **Bounds**        | `Entire project` ou `Time selection`                                           | Selecione o trecho desejado (geralmente o projeto inteiro)                        |
| **Directory**     | Escolha a pasta onde salvar o arquivo                                          | Organize seus projetos                                                            |
| **File name**     | Nome do arquivo (ex: "Minha_Música_Master_Final")                              | Use nomes claros                                                                  |
| **Format**        | `WAV` (para arquivo mestre, sem perda) ou `MP3` (para distribuição, com perda) | **Para master final: use WAV 24 bits** (ou 16 bits)                               |
| **Sample rate**   | `44100 Hz` ou `48000 Hz` (igual ao projeto)                                    | Mantenha a mesma taxa do projeto                                                  |
| **Channels**      | `Stereo` (2 canais)                                                            | Música é estéreo                                                                  |
| **Resample mode** | `Better` (ou o melhor disponível)                                              | Qualidade na conversão, se necessário                                             |

### Formatos de arquivo

| Formato                      | Uso                                                                                                                 | Observação                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **WAV (16 bits ou 24 bits)** | Arquivo mestre sem perda de qualidade. Para arquivamento, prensagem de CD, envio para plataformas de alta resolução | Recomendado para master final                 |
| **MP3 (320 kbps)**           | Para distribuição em plataformas que aceitam MP3, ou envio rápido                                                   | Perda de qualidade, mas amplamente compatível |
| **FLAC**                     | Compactação sem perda – bom para distribuição em alta qualidade                                                     | Opcional                                      |

### Renderização de versão de avaliação vs. final

| Tipo                            | Quando usar                                                                 | Configuração                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Versão de avaliação (draft)** | Para ouvir em diferentes sistemas (carro, fone, caixa) antes da finalização | Pode ser MP3 de qualidade média (192-320 kbps) ou WAV. Use para testes                         |
| **Versão final**                | Após todos os ajustes, quando você está satisfeito                          | **WAV 24 bits**, mesma taxa do projeto, sem dither (ou com dither se for reduzir para 16 bits) |

> Recomenda-se que, antes da finalização, você **exporte uma versão de avaliação** e ouça em vários lugares: fone, caixa de som, carro, celular. Compare com referências. Faça pequenos ajustes se necessário. Depois, exporte a **versão final**.

---

## Pós-exportação – validação e ajustes finos

### O que fazer após exportar a versão de avaliação

| Ação                                                       | Objetivo                                                                                  |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Ouvir em **fones de ouvido**                               | Detalhamento                                                                              |
| Ouvir em **caixas de som** (monitores, home theater, etc.) | Sensação de espaço, graves                                                                |
| Ouvir no **carro**                                         | Teste realista (ambiente comum de audição)                                                |
| Ouvir no **celular**                                       | Teste de compatibilidade (mono, baixa qualidade)                                          |
| Comparar com **músicas profissionais** (mesmo volume)      | Verificar se o volume/loudness está adequado                                              |
| Anotar **pequenos ajustes**                                | Ex: "caixa está brilhante demais", "voz sumiu um pouco no refrão", "grave está exagerado" |

### Como fazer ajustes finos

- Volte ao projeto **de mixagem** (não na master já renderizada).
- Faça os pequenos ajustes (ex: reduzir 1 dB de uma frequência na caixa, ou ajustar volume da voz em 0,5 dB).
- Reexporte a **versão de avaliação** novamente.
- Repita até ficar satisfeito.
- Quando estiver pronto, exporte a **versão final** (WAV 24 bits).

> No projeto final do percurso, fez-se pequenos ajustes após ouvir a versão de avaliação – coisas como ajustar um brilho excessivo de caixa, pequenas correções de volume de voz, etc. Isso é **normal e esperado**.

---

## Resumo visual da subfase 2 (finalização)

```
AJUSTE DE VOLUME (LIMITADOR)
├── Ceiling (teto): -0,3 dB
├── Input gain: aumentar até gain reduction de 3-6 dB nos picos
├── Volume alvo: -10 dB RMS / -9 dB RMS (ou -10 a -12 LUFS)
└── Compare com referências (mesmo volume de monitor)

EXPORTAÇÃO (RENDERIZAÇÃO)
├── Source: Master mix
├── Bounds: Entire project (ou time selection)
├── Formato final: WAV 24 bits, 44100 ou 48000 Hz
├── Formato de avaliação: MP3 320 kbps (opcional)
└── Nome claro (ex: "Musica_Nome_Master_Final.wav")

VALIDAÇÃO
├── Ouça em diferentes sistemas (fone, caixa, carro, celular)
├── Compare com referências
├── Faça pequenos ajustes na mixagem, se necessário
├── Reexporte versão de avaliação
└── Quando satisfeito, exporte versão final
```

---

## Nota

> "Com o limitador bem ajustado (gain reduction moderado, teto em -0,3 dB, volume alvo em torno de -9/-10 dB RMS) e a exportação correta, você entrega sua música dentro do padrão comercial. O mais importante é validar ouvindo em vários sistemas e comparando com referências. A masterização não é um bicho de sete cabeças – siga esses passos e você vai ter um resultado profissional."
