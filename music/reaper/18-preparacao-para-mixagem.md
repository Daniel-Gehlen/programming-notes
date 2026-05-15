## Etapa final da preparação para mixagem

Antes de iniciar os processamentos (EQ, compressão, efeitos), é necessário estabelecer o **plano de volume inicial** (gain staging) de cada track. Isso garante margem de segurança, fluxo de sinal saudável e evita distorções na master.

---

## Customizações opcionais no Reaper

| Ajuste                                   | O que foz                                                   | Como fazer (se desejar)                                                               |
| ---------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Tamanho da área de nome                  | Alterado para automático                                    | `Options` > `Preferences` > `Appearance` > `Track Control Panels`                     |
| Largura da barra de volume (volume size) | Ajusta para 90                                              | Mesmo caminho acima                                                                   |
| Visibilidade de botões no TCP            | Desmarca a maioria, manteve apenas `Record Arm` e mais dois | Botão direito no TCP > `Show/hide track controls`                                     |
| Scroll do mouse                          | Muda de zoom horizontal para **rolagem vertical** da tela   | `Actions` > `Show action list` > busque por "vertical scroll" > atribua ao mousewheel |

> ⚠️ A customização do mouse é opcional e pessoal. O padrão do Reaper já é funcional.

---

## Conceitos fundamentais de volume

### Teto (0 dBFS)

- No sistema digital, **0 dB é o limite máximo**. Ultrapassar causa distorção (clipping).
- Deve-se deixar uma **margem de segurança** (headroom) abaixo de 0 dB.

### Dois tipos de medição de volume

| Tipo                   | Mede                                                | Unidade                    | Ferramenta                                                    | Uso                                   |
| ---------------------- | --------------------------------------------------- | -------------------------- | ------------------------------------------------------------- | ------------------------------------- |
| **Pico (Peak)**        | Os picos mais rápidos e altos do sinal              | dBFS (decibels full scale) | Peak meter (padrão do Reaper)                                 | Evitar clipping, proteger conversores |
| **Médio (RMS / LUFS)** | Volume percebido (média do sinal ao longo do tempo) | dB RMS ou LUFS             | Medidor como `YouLean Loudness Meter` ou `TBProAudio dpMeter` | Estabelecer volume alvo para mixagem  |

> **Analogia:** Pico é a "crista da onda". Médio é o "volume que você realmente ouve".

### Unidade de referência para volume médio: **-18 dB RMS (ou LUFS)**

- É o **ponto de referência (Unity Gain)** em muitos sistemas digitais e simulações de equipamento analógico.
- Por que -18? Porque esse valor representa **0 VU** (unidade de volume) em medidores analógicos – zona onde o equipamento opera de forma mais linear e com menos distorção.
- Trabalhar com média em torno de -18 dB RMS permite:
  - Margem para picos (que podem chegar a -6 dB ou -3 dB sem estourar).
  - Fluxo de sinal saudável dentro de plugins (especialmente simulações analógicas).
  - Headroom para processamentos (EQ, compressão) sem distorcer.

---

## Relação entre pico e média para uma mixagem equilibrada

| Parâmetro                        | Valor de referência       | Observação                                |
| -------------------------------- | ------------------------- | ----------------------------------------- |
| **Volume médio alvo (RMS/LUFS)** | Entre **-18 dB e -16 dB** | Medido na parte mais intensa da música    |
| **Pico máximo (Peak)**           | Entre **-6 dB e -3 dB**   | Pode variar conforme a dinâmica da música |
| **Headroom até 0 dB**            | 3 a 6 dB                  | Espaço para masterização                  |

### Regra prática

> "Se o seu patamar alvo (média) é -18 dB, você nunca deve ter um elemento individual batendo próximo de -18 dB. Cada elemento tem que estar consideravelmente abaixo para que a soma total atinja -18 dB."

---

## Método prático para levantar o plano de volume inicial (gain staging)

### Ferramenta principal: **Master Track Meter** (medidor da track master)

### Como exibir o medidor na tela principal

1. `View` > `Master Track` (se não estiver visível)
2. Ou use o comando `Ctrl + Alt + M` para mostrar/esconder
3. Para exibir o medidor também na **janela de mixer**: clique no botão de opções da master track

### Como medir pico e média (RMS) no Reaper

- No medidor da master track, clique com o botão direito.
- Marque a opção **`Display RMS`** (mostrar RMS).
- Ajuste a janela de integração (ex: 300 ms ou 600 ms) para RMS.

### Passo a passo para ajustar os volumes

| Passo | Procedimento                                                                                                                          |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Dê **play** na parte mais intensa da música (ex: refrão)                                                                              |
| 2     | Observe o medidor da master track (pico e RMS)                                                                                        |
| 3     | **Zere** os valores de pico e RMS clicando sobre os números no medidor (para medir apenas o trecho desejado)                          |
| 4     | **Ajuste o fader da voz** até que: RMS fique em torno de **-18 dB** e pico máximo fique por volta de **-6 dB** (nunca acima de -3 dB) |
| 5     | **Ajuste o baixo** – deve ficar **um pouco abaixo da voz** (ex: voz em -18 dB RMS, baixo em -21 dB RMS)                               |
| 6     | **Ajuste a bateria** – bumbo e caixa geralmente um pouco abaixo do baixo (ex: -24 dB RMS)                                             |
| 7     | **Ajuste os demais elementos** (guitarras, teclados, violões) – devem ficar **abaixo da bateria** (ex: -27 dB RMS ou menos)           |
| 8     | Após todos ajustados, verifique novamente a **soma na master** – pico e RMS devem estar dentro da faixa alvo                          |

### Exemplo prático de valores (parte intensa da música)

| Elemento                   | RMS (volume médio) | Peak (pico aproximado) |
| -------------------------- | ------------------ | ---------------------- |
| Voz (elemento prioritário) | **-18 dB**         | -6 dB a -3 dB          |
| Baixo                      | -21 dB a -20 dB    | -9 dB a -7 dB          |
| Bumbo + caixa              | -24 dB a -22 dB    | -12 dB a -8 dB         |
| Guitarras / violões        | -27 dB a -24 dB    | -15 dB a -10 dB        |
| Pranchos / efeitos         | -30 dB ou menos    | -18 dB ou menos        |

> ⚠️ Esses são **valores de partida**. Durante a mixagem, você vai alterar volumes conforme o contexto musical.

---

## Por que começar com a voz como referência

- A voz (melodia) é geralmente o **elemento prioritário** na maioria dos gêneros musicais.
- Ela deve ter a maior presença em termos de volume.
- Todos os outros elementos são ajustados **em relação à voz**.

> Dica: "Você sobe a voz até um pouco abaixo do seu volume alvo (ex: -18 dB RMS). Os demais elementos ficam um pouco abaixo da voz."

---

## Medindo elementos individuais

Para medir o RMS de uma track isolada:

| Método                       | Como fazer                                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Solo na track**            | Clique no botão `Solo` (S) da track – o medidor da master mostrará apenas aquela track               |
| **Medidor na própria track** | O medidor da track também pode ser configurado para mostrar RMS (clique direito no medidor da track) |

---

## O que fazer se o pico estiver muito alto (acima de -3 dB)

| Causa possível                                                     | Solução                                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Elemento muito alto no fader                                       | Reduza o fader                                                           |
| Pico transitório (ex: um bumbo muito forte em uma nota específica) | Use um **compressor** ou **clipper** nessa track (será visto na mixagem) |
| Vários elementos acumulando pico na master                         | Reduza os faders de todos proporcionalmente                              |

---

## Resumo visual do fluxo de gain staging

```
1. Identifique a parte mais intensa da música (refrão)
       ↓
2. Dê play e observe master (pico + RMS)
       ↓
3. Ajuste a voz: RMS ≈ -18 dB | Peak ≤ -6 dB
       ↓
4. Ajuste baixo: 3 a 6 dB abaixo da voz
       ↓
5. Ajuste bateria: mais abaixo que o baixo
       ↓
6. Ajuste demais instrumentos (guitarras, teclados, violões) abaixo da bateria
       ↓
7. Verifique soma na master: RMS entre -18 e -16 dB | Peak entre -6 e -3 dB
```

---

## Dica extra: use medidores especializados (opcional)

| Plugin gratuito            | Para que serve                                                                      |
| -------------------------- | ----------------------------------------------------------------------------------- |
| **YouLean Loudness Meter** | Mede LUFS (padrão atual para loudness) – mais preciso que RMS para volume percebido |
| **TBProAudio dpMeter**     | Mede RMS, LUFS, pico verdadeiro (true peak)                                         |

Esses plugins podem ser inseridos na **master** para medição mais detalhada.

---

## Nota

> "A combinação de volume médio (RMS/LUFS) em torno de -18 dB com picos entre -6 e -3 dB é o ponto de partida ideal para começar uma mixagem. Isso dá headroom, evita distorção e cria um fluxo de sinal saudável para os plugins que virão a seguir."
