## Fechamento da subfase de processamento

Após equalização e compressão básica, a música já soa **muito melhor** do que no estado cru. No entanto, podem surgir situações específicas que demandam processamento adicional.

> **Foco principal:** **EQ e compressor resolvem 90% das demandas da mixagem**. Os processadores a seguir são complementares para situações pontuais.

---

## Processador 1: De-esser

### Problema que resolve

- Sibilância excessiva na voz: sons de **"S", "CH", "SH", "Z"** que ficam muito destacados, agressivos ou "assobiados".

### Como funciona

- É um **compressor** que atua **apenas em uma faixa de frequência específica** (geralmente entre 4 kHz e 10 kHz, onde a sibilância ocorre).
- Quando detecta excesso de energia nessa região, ele reduz o volume **apenas ali**, sem afetar o restante da voz.

### Uso prático

- Aplicado na **track de voz** (principal ou backing vocals).
- Ajusta-se a **frequência alvo** (ex: 6 kHz) e o **threshold** (quanto de sibilância precisa para atuar).
- O resultado é uma voz **menos "aguda" ou "assedada"**, sem perder a clareza.

---

## Processador 2: Saturação / Distorção suave

### Problema que resolve (no exemplo do percurso)

- Após a compressão da caixa (snare), o pico de volume pode continuar **muito alto**, mesmo com a dinâmica controlada.
- A caixa soa "estourada" ou ocupa espaço de headroom em excesso.

### Como funciona a saturação

- A saturação (também chamada de **distorção suave** ou **soft clipping**) **deforma a onda** do áudio, "cortando" (arredondando) os picos mais altos.
- Isso reduz o **pico (peak)** do sinal sem reduzir drasticamente o volume percebido.
- Além do controle de picos, a saturação adiciona **harmônicos** (conteúdo de frequência novo), o que pode **engrossar** o som e dar mais **presença**.

### Aplicação prática (no exemplo da caixa)

| Antes da saturação                                    | Depois da saturação                                          |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| Pico da caixa batendo em -4,7 dB (muito alto)         | Pico reduzido para um nível mais seguro (ex: -6 dB ou -8 dB) |
| Timbre da caixa pode soar "frio" ou "plástico"        | Timbre com mais **corpo**, mais **pegada**, mais "presente"  |
| Risco de distorção na master se o pico for muito alto | Headroom recuperado para outros elementos                    |

### Como ajustar a saturação

1. Insira um plugin de saturação (ex: **soft clipper**, **tape saturation**, **tube warmth**) na track da caixa (ou elemento desejado).
2. Ajuste o **drive** ou **input** para obter o nível de saturação desejado (leve a moderado).
3. Observe o **medidor de pico** – os picos devem diminuir.
4. Ajuste o **output** ou **makeup gain** para compensar eventuais perdas de volume percebido.

### Vantagem final

- A caixa (ou outro elemento) pode ser **levantada em volume** na mixagem sem causar picos excessivos.
- O resultado é um elemento mais presente, mais encorpado e com headroom controlado.

---

## Processador 3: Compressor multibanda

### O que é

- Um compressor que divide o espectro de frequências em **faixas (bandas)** – geralmente 3 ou 4 (ex: graves, médio-graves, médios, agudos).
- Cada banda tem seus **próprios parâmetros de compressão** (threshold, ratio, attack, release).
- É como ter **vários compressores** atuando em paralelo, cada um em uma região de frequência.

### Para que serve

| Situação                                                           | Solução com multibanda                                                                |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Voz com sibilância (agudos) mas grave estável                      | Comprimir apenas a banda dos agudos (4k-10k) onde está o S                            |
| Baixo com notas saltando em graves, mas médios consistentes        | Comprimir apenas os graves (50-120 Hz)                                                |
| Mixagem geral com excesso de médio-graves (lama) em certos trechos | Comprimir especificamente a banda de 200-500 Hz apenas quando ela ultrapassa o limite |

### Relação com outros processadores

- O **de-esser** é, na prática, um **compressor multibanda simplificado** com apenas duas bandas (tudo x agudos da sibilância).
- O multibanda é mais versátil, mas também mais complexo.

> O multibanda é uma ferramenta mais avançada, que foge do escopo básico do percurso, mas vale a pena conhecer.

---

## Processador 4: Processamento estéreo (largura estéreo)

### Problema que resolve

- Alguns elementos (especialmente pads, sintetizadores, guitarras dobradas, backing vocals) podem soar muito **centralizados** ou **estreitos**, sem espacialidade.

### Como funciona

- Plugins de processamento estéreo permitem **aumentar a largura** da imagem estéreo, afastando os canais L e R.
- Isso cria uma sensação de **maior espaço** e **profundidade**.

### Parâmetros comuns

| Parâmetro                | O que faz                                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Width (largura)**      | Controla o quanto os canais L e R estão "separados". 0% = mono (centralizado), 100% = estéreo original, acima de 100% = estéreo expandido |
| **Stereoize / Mid-Side** | Processa separadamente o centro (Mid) dos lados (Side), permitindo aumentar o Side sem afetar o centro                                    |

### Aplicação prática (no exemplo do percurso)

- Aplicou-se um processamento estéreo em alguns elementos (ex: teclados, backing vocals) para **dar mais amplitude**.
- Ajustes feitos: aumentar a **largura estéreo** e reduzir a **agressividade** da imagem (evitar que fique artificial).

### Cuidado

- Excesso de largura estéreo pode causar **problemas de fase** (o som pode desaparecer em mono, como em celulares e caixas bluetooth).
- Sempre verifique como a música soa em **mono** após aplicar processamento estéreo.

---

## Resumo dos processadores complementares

| Processador                     | Problema que resolve                                      | Aplicação típica                                    | Complexidade  |
| ------------------------------- | --------------------------------------------------------- | --------------------------------------------------- | ------------- |
| **De-esser**                    | Sibilância excessiva (S, CH, SH)                          | Voz                                                 | Baixa         |
| **Saturação / Distorção suave** | Picos muito altos, timbre "frio" ou "plástico"            | Caixa, bumbo, baixo, mixagem geral                  | Baixa a média |
| **Compressor multibanda**       | Problemas de dinâmica em faixas específicas de frequência | Voz (sibilância), baixo (notas saltando), master    | Alta          |
| **Processamento estéreo**       | Imagem estéreo estreita, falta de espacialidade           | Pads, sintetizadores, backing vocals, mixagem geral | Média         |

---

## Resultado final após processamentos adicionais

Após aplicar de-esser (se necessário) e saturação na caixa, observe:

| Indicador                   | Valor                                            | Observação                                     |
| --------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| Pico máximo da caixa        | Reduzido (ex: de -4,7 dB para nível mais seguro) | Graças à saturação que cortou os picos         |
| Timbre da caixa             | Mais "pegada", mais presente                     | A saturação adicionou harmônicos e corpo       |
| Volume percebido da caixa   | Pode ser aumentado sem estourar picos            | Agora cabe melhor na mixagem                   |
| Parâmetro de volume interno | Dentro do estabelecido (gain staging)            | A música continua dentro da margem de headroom |

---

## Nota

> "Equalização e compressão resolvem 90% das demandas da mixagem. Com essas duas ferramentas bem dominadas, você já consegue um resultado comercial de boa qualidade. Os outros processadores – de-esser, saturação, multibanda, estéreo – são para situações pontuais, quando algo específico ainda está te incomodando após o processamento básico."
