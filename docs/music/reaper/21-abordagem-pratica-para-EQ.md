## Abordagem prática para EQ

No percurso aplicou-se **manipulações padrão** em cada elemento da música, baseadas em receitas que funcionam na grande maioria das produções. Estas não são regras absolutas, mas **pontos de partida seguros** que raramente causam prejuízo e quase sempre trazem benefícios.

### Ajuste de ganho após equalização

- Após aplicar qualquer EQ, é comum que o **volume percebido** do elemento mude.
- Ajuste o **fader da track** para compensar e manter o plano de volume original (gain staging)

### Método de comparação A/B

Para perceber a diferença que o EQ faz:

1. Escute **10 a 15 segundos** com o EQ ligado.
2. Escute **10 a 15 segundos** com o EQ desligado (bypass).
3. Repita algumas vezes.
4. O cérebro se adapta e a diferença fica mais clara.

---

## Equalização padrão por elemento

### 1. Voz (elemento prioritário)

| Ação                           | Frequência                           | Tipo                         | Objetivo                                                                 |
| ------------------------------ | ------------------------------------ | ---------------------------- | ------------------------------------------------------------------------ |
| Cortar excesso de grave        | **Abaixo de 80-100 Hz**              | High Pass Filter (Low Cut)   | Eliminar ruído de microfone, piso, e "lama" que não contribui para a voz |
| Redução leve em médio-graves   | **250 Hz - 500 Hz** (ex: 300-400 Hz) | Bell (corte suave de 2-4 dB) | Reduzir "enlameamento" (muddy), deixar a voz mais "magra" e limpa        |
| Aumento de presença (opcional) | **2 kHz - 5 kHz** (ex: 3-4 kHz)      | Bell (aumento de 2-4 dB)     | Dar destaque, clareza e "corte" para a voz se sobressair                 |

**Lógica:** Voz muito encorpada (médio-graves excessivos) briga com outros elementos e soa "embolada". O foco é clareza e presença, não peso extremo.

---

### 2. Bumbo (kick)

| Ação                            | Frequência             | Tipo                     | Objetivo                                                                   |
| ------------------------------- | ---------------------- | ------------------------ | -------------------------------------------------------------------------- |
| Cortar sub-graves extremos      | **Abaixo de 30-40 Hz** | High Pass Filter         | Eliminar frequências que só consomem headroom sem contribuição audível     |
| Aumentar o "peso" (fundamental) | **60 Hz - 80 Hz**      | Bell (aumento de 3-6 dB) | Dar o impacto grave, o "soco" do bumbo                                     |
| Redução de médio-graves         | **200 Hz - 400 Hz**    | Bell (corte de 2-4 dB)   | Tirar "lama" e evitar conflito com baixo e guitarra                        |
| Aumento de ataque (presença)    | **2 kHz - 4 kHz**      | Bell (aumento de 2-5 dB) | Dar o "clique" ou "estalo" da baqueta, ajudando o bumbo a cortar a mixagem |

**Observação:** Quanto menor (mais grave) o instrumento, **mais alta** será a frequência fundamental? Não. OUm "macete": para encontrar a fundamental do bumbo (o grave principal), você pode varrer com um aumento estreito (Q alto) até encontrar o ponto onde o som fica mais "gordo". Essa frequência geralmente está entre **50 Hz e 90 Hz**.

---

### 3. Caixa (snare)

| Ação                                   | Frequência              | Tipo                          | Objetivo                                           |
| -------------------------------------- | ----------------------- | ----------------------------- | -------------------------------------------------- |
| Cortar graves excessivos               | **Abaixo de 80-100 Hz** | High Pass Filter              | Eliminar ronco da caixa e ressonâncias indesejadas |
| Aumento do corpo                       | **120 Hz - 200 Hz**     | Bell (aumento de 2-4 dB)      | Dar peso e "estampido"                             |
| Redução de ressonância (se necessário) | **250 Hz - 400 Hz**     | Bell (corte estreito, 3-6 dB) | Eliminar "lata" ou ressonância metálica            |
| Aumento do ataque                      | **2 kHz - 5 kHz**       | Bell (aumento de 3-6 dB)      | Dar o "estalo" da baqueta, clareza                 |

---

### 4. Hi-hat e pratos

| Ação                                | Frequência                    | Tipo                           | Objetivo                                            |
| ----------------------------------- | ----------------------------- | ------------------------------ | --------------------------------------------------- |
| Cortar médio-graves e graves        | **Abaixo de 500 Hz - 800 Hz** | High Pass Filter               | Eliminar corpo desnecessário (pratos não têm grave) |
| Aumento de brilho                   | **7 kHz - 12 kHz**            | High Shelf (aumento de 2-4 dB) | Dar o "ar" e a textura dos pratos                   |
| Redução de aspereza (se necessário) | **3 kHz - 5 kHz**             | Bell (corte de 2-4 dB)         | Suavizar se estiverem muito agressivos              |

**Lógica:** Pratos são agudos por natureza. O filtro passa-alta (high pass) pode ser bem agressivo (ex: 600 Hz ou até 800 Hz) sem prejuízo.

---

### 5. Contrabaixo (baixo)

| Ação                            | Frequência                          | Tipo                     | Objetivo                                                                            |
| ------------------------------- | ----------------------------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| Cortar sub-graves extremos      | **Abaixo de 40 Hz**                 | High Pass Filter         | Eliminar "sujeira" que não contribui e rouba headroom                               |
| Aumentar o peso (fundamental)   | **80 Hz - 100 Hz**                  | Bell (aumento de 2-5 dB) | Dar o corpo grave do baixo                                                          |
| Redução de médio-graves         | **200 Hz - 400 Hz**                 | Bell (corte de 2-4 dB)   | Limpar "lama", separar do bumbo                                                     |
| Aumento de definição (presença) | **700 Hz - 1 kHz** (ex: 800-900 Hz) | Bell (aumento de 2-4 dB) | Dar a corda, o ataque, a definição para o baixo aparecer mesmo em sistemas pequenos |

**Observação:** O baixo se beneficia de um leve aumento na região de **800 Hz a 900 Hz** – isso traz a "cordalidade" (o som da corda sendo tocada), que ajuda a definir a nota, especialmente em fones ou caixas pequenas que não reproduzem bem os graves profundos.

---

### 6. Guitarra base (e violão base)

| Ação                     | Frequência              | Tipo                                | Objetivo                                          |
| ------------------------ | ----------------------- | ----------------------------------- | ------------------------------------------------- |
| Cortar graves excessivos | **Abaixo de 80-120 Hz** | High Pass Filter                    | Eliminar ronco e deixar espaço para baixo e bumbo |
| Redução de médio-graves  | **200 Hz - 400 Hz**     | Bell (corte de 2-4 dB)              | Limpar "lama" e evitar conflito com voz e baixo   |
| Aumento de presença      | **2 kHz - 4 kHz**       | Bell (aumento de 2-5 dB)            | Dar o "corte" da guitarra, definição              |
| Brilho (opcional)        | **5 kHz - 8 kHz**       | High Shelf (aumento leve de 1-3 dB) | Dar arejamento, especialmente para violão         |

**Lógica para violão especificamente:** A mesma abordagem do filtro passa-alta (cortar graves) se aplica. O brilho ajuda o violão a não ficar "abafado" no meio da mixagem.

---

### 7. Teclados / Pads / Instrumentos de base harmônica

| Ação                           | Frequência               | Tipo                                       | Objetivo                                                      |
| ------------------------------ | ------------------------ | ------------------------------------------ | ------------------------------------------------------------- |
| Cortar graves                  | **Abaixo de 100-150 Hz** | High Pass Filter (pode ser mais agressivo) | Teclados de base geralmente não precisam de sub-graves        |
| Cortar médio-graves            | **250 Hz - 500 Hz**      | Bell (corte de 3-6 dB)                     | Evitar que o pad embole a região da voz                       |
| Aumento de presença (opcional) | **2 kHz - 4 kHz**        | Bell (aumento leve de 1-3 dB)              | Se o pad precisar de definição                                |
| Brilho (opcional)              | **Acima de 8 kHz**       | High Shelf (aumento leve)                  | Para pads com textura de agudos (ex: sintetizadores com "ar") |

**Lógica:** Instrumentos de base (pads, teclados de apoio) devem preencher sem roubar a cena. O filtro passa-alta pode ser mais agressivo (ex: cortar abaixo de 200 Hz) sem problemas.

---

### 8. Guitarra solo (elemento prioritário momentâneo)

| Ação                        | Frequência          | Tipo                              | Objetivo                                           |
| --------------------------- | ------------------- | --------------------------------- | -------------------------------------------------- |
| Cortar graves extremos      | Abaixo de 80-100 Hz | High Pass Filter                  | Limpeza básica                                     |
| Aumento de corpo (opcional) | 200 Hz - 300 Hz     | Bell (aumento de 2-4 dB)          | Se o solo precisa de mais "corpo" para se destacar |
| Aumento de presença         | **2 kHz - 4 kHz**   | Bell (aumento de 3-6 dB)          | Dar o "grito" e destaque do solo                   |
| Brilho                      | 5 kHz - 8 kHz       | Bell ou Shelf (aumento de 2-4 dB) | Arejamento, para o solo soar mais "vivo"           |

**Lógica:** O solo segue a mesma lógica da voz – é o elemento prioritário no seu trecho. Se precisar de mais destaque, as regiões de médio-agudo (2-4 kHz) e brilho são as principais aliadas.

---

## Resumo visual por elemento

| Elemento                  | Corte grave (HPF)                | Realce de peso       | Corte de médio-graves | Realce de presença  | Brilho                |
| ------------------------- | -------------------------------- | -------------------- | --------------------- | ------------------- | --------------------- |
| **Voz**                   | abaixo de 80-100 Hz              | –                    | 250-500 Hz (-2 a -4)  | 2-5 kHz (+2 a +4)   | opcional              |
| **Bumbo**                 | abaixo de 30-40 Hz               | 60-80 Hz (+3 a +6)   | 200-400 Hz (-2 a -4)  | 2-4 kHz (+2 a +5)   | –                     |
| **Caixa**                 | abaixo de 80-100 Hz              | 120-200 Hz (+2 a +4) | 250-400 Hz (-3 a -6)  | 2-5 kHz (+3 a +6)   | –                     |
| **Hi-hat / Pratos**       | abaixo de 500-800 Hz             | –                    | –                     | –                   | 7-12 kHz (+2 a +4)    |
| **Baixo**                 | abaixo de 40 Hz                  | 80-100 Hz (+2 a +5)  | 200-400 Hz (-2 a -4)  | 700-1 kHz (+2 a +4) | –                     |
| **Guitarra base**         | abaixo de 80-120 Hz              | –                    | 200-400 Hz (-2 a -4)  | 2-4 kHz (+2 a +5)   | 5-8 kHz (+1 a +3)     |
| **Violão**                | abaixo de 80-120 Hz              | –                    | 200-400 Hz (-2 a -4)  | 2-4 kHz (+2 a +4)   | 5-8 kHz (+2 a +4)     |
| **Teclado (pad)**         | abaixo de 100-150 Hz (agressivo) | –                    | 250-500 Hz (-3 a -6)  | 2-4 kHz (+1 a +3)   | acima de 8 kHz (leve) |
| **Solo (guitarra/outro)** | abaixo de 80-100 Hz              | 200-300 Hz (+2 a +4) | –                     | 2-4 kHz (+3 a +6)   | 5-8 kHz (+2 a +4)     |

---

## Nota

> "Geralmente, você vai fazendo tudo junto, com o tempo. No início, se você quiser praticar dessa forma linear (primeiro EQ de todos, depois compressão de todos) é válido para estudo e aprendizado."

---

## Próximo passo

Após a equalização de todos os elementos, a próxima etapa do processamento será a **compressão** (controle de dinâmica).
