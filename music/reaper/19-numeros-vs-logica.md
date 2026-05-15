## Filosofia: números vs. lógica

| Abordagem                 | Descrição                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Referências numéricas** | O percurso oferece valores concretos (ex: -10 dB para picos de gravação, -18 dB RMS para voz) como **receita inicial**   |
| **Lógica por trás**       | O mais importante é entender **o raciocínio**, não decorar os números. Use os números como guia, não como regra absoluta |

> ⚠️ Não fique "desesperado" ou preso aos números. Eles servem para você ter um ponto de partida seguro.

---

## Relembrando: nível de pico na gravação

| Situação                     | Valor recomendado        | Por quê                                                                                   |
| ---------------------------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| Picos da execução (gravação) | **-10 dB** (pico máximo) | Dá margem de segurança (headroom) para variações imprevistas para cima, evitando clipagem |

---

## Método prático para levantar os volumes (passo a passo)

### 1. Zerar todos os faders

- Comece com **todos os volumes no 0** (unity gain) ou mute todas as tracks.
- Isso permite construir o equilíbrio do zero, entendendo a contribuição de cada elemento.

### 2. Voz (elemento prioritário) – alvo: **-18 dB RMS**

- Ajuste o fader da voz até que o **volume médio (RMS)** da parte mais intensa da música fique em torno de **-18 dB**.
- Use o medidor da master track com **Display RMS** ativado.
- A voz será a referência mais alta da mixagem.

### 3. Bumbo (kick) – alvo: próximo da voz, mas um pouco abaixo

- Após ajustar a voz, tire o solo e comece a subir o **bumbo**.
- O bumbo geralmente fica **pouco abaixo da voz** (ex: -20 dB a -22 dB RMS).
- O bumbo e a voz criam os primeiros pontos de referência rítmica e melódica.

### 4. Baixo – método do VU Meter (relação bumbo/baixo)

#### O que é um VU Meter (medidor de volume médio lento)

- Mede **volume médio** (RMS) de forma mais lenta, ignorando picos rápidos.
- É como um "medidor de percepção" – mostra o quanto o som está sustentado.
- No Reaper, você pode usar plugins de VU meter gratuitos (ex: **Sleepy-Time DSP VUMeter**, **TBProAudio VUMeter**, ou o próprio medidor do Reaper configurado para RMS lento).

#### Macete da relação bumbo + baixo

1. Coloque um **VU meter na master** (ou no bumbo + baixo em solo).
2. Ajuste o volume do **bumbo** até que o VU meter bata em um certo patamar (ex: -7 dB VU no pico).
3. Agora **adicione o baixo** e suba o fader do baixo até que o VU meter **aumente de 3 a 4 dB** em relação ao valor que estava só com o bumbo.
4. Esse aumento de 3-4 dB indica uma **relação equilibrada** entre bumbo e baixo – o baixo não está nem sumido, nem dominando.

> **Objetivo:** Bumbo e baixo se complementam, sem um abafar o outro. O baixo deve "dar corpo" ao bumbo, não competir.

### 5. Demais peças da bateria (caixa, hi-hat, tons, pratos)

- Suba cada peça até que seu volume percebido seja **coerente com o gênero musical**.
- Referência aproximada: cada peça pode ficar entre **-22 dB e -28 dB RMS**, dependendo da importância.
- **Pratos**: geralmente mais baixos (ex: -30 dB RMS), pois o ouvido é sensível a agudos.
- **Tons (toms)**: podem ter **pan (posicionamento estéreo)** para simular a bateria real – ex: tom 1 (40% L), tom 2 (centro), tom 3 (40% R).

### 6. Bases (guitarras, teclados, violões)

- **Lógica:** devem ficar **abaixo da voz** – a voz é o elemento solista.
- **Nenhuma base deve ter o mesmo volume da voz** – sempre um pouco mais baixa.
- O ponto ideal é subjetivo e depende da música, mas uma referência: bases entre **-24 dB e -30 dB RMS**.
- **Abertura estéreo (pan):** use o esquema LCR (Left, Center, Right) – posições extremas (100% L, 100% R) ou centro. Isso cria clareza e separação.

### 7. Ornamentos (solos, arranjos secundários)

- Quando um solo entra, ele se torna **elemento prioritário momentâneo**.
- Suba o solo até um nível **próximo ao da voz** (ex: -20 dB a -18 dB RMS) no trecho em que ele está ativo.
- Após o solo, ele pode voltar a ficar mais baixo ou ser cortado.

### 8. Verificação final: soma total na master

- Após todos ajustados, observe a **master** na parte mais intensa da música.
- **RMS (volume médio) alvo:** entre **-18 dB e -16 dB**.
- **Pico (Peak) alvo:** maioria dos picos entre **-6 dB e -3 dB** (picos isolados podem chegar a -1 dB, mas com moderação).

---

## Ferramenta adicional: o VU Meter analógico (plugin)

### Para que serve

- Mede o **volume médio** (lento), similar aos medidores de consoles analógicos.
- A **zona ideal** para o volume médio da música (parte mais intensa) é **entre 0 VU e +3 VU** (com o calibração de -18 dBFS = 0 VU).

### Interpretação do VU Meter na prática

| Posição da agulha                     | Significado                                                                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Abaixo de -20 VU                      | Som muito baixo, quase inaudível                                                                                       |
| Entre -10 VU e 0 VU                   | Volume médio normal                                                                                                    |
| **0 VU a +3 VU (zona vermelha leve)** | **Ideal para a parte mais forte da música** – a agulha "dança" nessa região, sem ficar colada no vermelho o tempo todo |
| +3 VU ou mais (vermelho intenso)      | Sinal muito alto – pode distorcer se mantido constantemente                                                            |

### Como usar o VU meter para verificar seu gain staging

1. Insira um plugin de VU meter na **master**.
2. Dê play na parte mais intensa da música.
3. Observe a agulha: ela deve **oscilar** na região entre **0 VU e +3 VU** nos picos, mas **não ficar colada no vermelho** o tempo todo.
4. Se estiver muito abaixo (ex: -10 VU), sua mixagem está com volume médio baixo demais.
5. Se estiver constantemente no vermelho (+4 VU ou mais), seus volumes individuais estão muito altos – reduza tudo proporcionalmente.

> **Ajuste fino:** Se a agulha do VU meter bater em 0 VU na maioria dos picos, com raras incursões a +2 ou +3 VU, seu balanceamento de volumes está excelente.

---

## Dica avançada: exporte uma prévia da mixagem crua

### O que fazer

- Antes de começar a adicionar **qualquer processamento** (EQ, compressão, efeitos), **exporte (renderize)** sua música no estado atual:
  - `File` > `Render...`
  - Escolha formato WAV (16 ou 24 bits), taxa de amostragem igual ao projeto.
  - Marque `Render master mix` (mixagem completa).

### Por que fazer isso

- Você terá um **retrato fiel** do seu material bruto, sem processamento.
- Ouvindo em diferentes sistemas (fone, caixa de som, carro, celular), você identifica:
  - O que está faltando (ex: graves, presença vocal).
  - O que está sobrando (ex: médios agressivos, pratos estridentes).
  - Problemas de equilíbrio que você não percebeu no Reaper.
- Isso orienta suas decisões de **processamento** (EQ, compressão, etc.) com **propósito**, não no escuro.

> **Analogia:** "É como salgar a comida antes de provar. Você não vai começar a processar (adicionar sal, pimenta) sem saber qual é o sabor original do seu prato. Exportar a prévia é 'provar a comida' antes de temperar."

---

## Erro comum a evitar

| Erro                                                                                                     | Consequência                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Começar a mixagem aplicando EQ, compressão e efeitos **antes de estabelecer um plano de volume inicial** | Você processa sem saber o que realmente precisa ser corrigido. O resultado é uma mixagem sem propósito, com excesso de plugins desnecessários |

> **Nota:** "Muitos profissionais de longa data ainda cometem o erro de começar a mixagem já aplicando processamento sem ter noção do que precisa ser feito. É por isso que essa etapa de provar a comida antes de salgar é tão importante."

---

## Resumo dos valores de referência (para parte intensa da música)

| Elemento                        | RMS (volume médio)  | Peak (pico aproximado) | Observação                                                         |
| ------------------------------- | ------------------- | ---------------------- | ------------------------------------------------------------------ |
| **Voz**                         | **-18 dB**          | -6 dB a -3 dB          | Referência principal                                               |
| **Bumbo**                       | -20 dB a -22 dB     | -12 dB a -8 dB         | Ponto de partida para relação bumbo/baixo                          |
| **Baixo**                       | -20 dB a -22 dB     | -12 dB a -8 dB         | Ajustado para dar 3-4 dB a mais no VU meter quando somado ao bumbo |
| **Caixa**                       | -22 dB a -25 dB     | -12 dB a -9 dB         | Depende do gênero                                                  |
| **Hi-hat / pratos**             | -28 dB a -32 dB     | -18 dB a -14 dB        | Pode variar conforme a música                                      |
| **Guitarras / violões (bases)** | -24 dB a -30 dB     | -15 dB a -10 dB        | Abaixo da voz                                                      |
| **Teclados (bases)**            | -24 dB a -30 dB     | -15 dB a -10 dB        | Abaixo da voz                                                      |
| **Solo (quando ativo)**         | -20 dB a -18 dB     | -6 dB a -3 dB          | Mesmo nível da voz                                                 |
| **Soma total (master)**         | **-18 dB a -16 dB** | **-6 dB a -3 dB**      | Picos isolados podem chegar a -1 dB                                |

---

## Fluxo resumido da prática de gain staging

```
1. Zerar faders (ou começar do zero)
2. Ajustar voz para -18 dB RMS
3. Ajustar bumbo (pouco abaixo da voz)
4. Ajustar baixo: +3 a 4 dB no VU meter em relação ao bumbo solo
5. Ajustar demais peças da bateria (coerência com gênero)
6. Ajustar bases (sempre abaixo da voz)
7. Ajustar solos (nível próximo ao da voz no trecho)
8. Verificar master: RMS entre -18 e -16 dB | Pico entre -6 e -3 dB
9. Verificar VU meter: agulha oscilando entre 0 VU e +3 VU na parte forte
10. Exportar prévia (sem processamento) e ouvir em outros sistemas
11. Só então começar a adicionar EQ, compressão e efeitos
```

---

## Nota

> "Com esses passos, você tem um ponto de partida sólido, profissional e com propósito. Agora você sabe exatamente o que precisa ser processado – porque você provou a comida antes de salgar. A partir daqui, entramos na fase de processamento da mixagem: equalização, compressão e efeitos."
