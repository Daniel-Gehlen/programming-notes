## CSegundo processador prioritário

Após o equalizador (EQ), o **compressor** é a segunda ferramenta mais importante na mixagem.

| Característica      | Descrição                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------- |
| **O que processa**  | Dinâmica (variações de volume/intensidade ao longo do tempo)                                  |
| **Por que é usado** | Corrigir variações indesejadas ou moldar o timbre de forma criativa                           |
| **Reputação**       | "Queridinho dos produtores" (muitas possibilidades) e "terror dos iniciantes" (não intuitivo) |

---

## Por que o compressor é difícil para iniciantes

- Diferente do EQ (que é mais visual e intuitivo), o compressor exige **entender a relação entre vários parâmetros**.
- Cada combinação de parâmetros produz um **comportamento diferente**.
- Não é possível aprender apenas "girando botões aleatoriamente" – é necessário **raciocinar** o uso da ferramenta.

---

## Duas categorias de uso do compressor

| Tipo de uso                 | Objetivo                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| **Uso técnico / corretivo** | Prevenir problemas técnicos, controlar picos excessivos, padronizar volume                |
| **Uso estético / criativo** | Mudar o timbre, adicionar "pressão", "corpo", "sustância", ou características específicas |

---

## Funcionamento básico do compressor

### Analogia: "portão que achata os picos"

- O compressor tem um **limiar (threshold)**.
- Quando o sinal de áudio **ultrapassa** esse limiar, o compressor "aperta" (reduz) o volume do excesso.
- O sinal abaixo do limiar permanece inalterado.

### O que acontece na prática

1. O detector do compressor mede o nível de entrada.
2. Se ultrapassar o threshold, o compressor é acionado.
3. O excesso de volume é **comprimido** (reduzido) conforme a **proporção (ratio)** definida.
4. Há uma **perda de ganho** (gain reduction) – o volume geral do elemento diminui.
5. Para compensar, usa-se o **makeup gain** (ganho de saída) para trazer o volume de volta ao nível desejado.

---

## Parâmetros principais do compressor (e como ajustá-los)

### Sequência prática de ajuste (diferente da ordem teórica)

| Ordem  | Parâmetro       | O que faz                                                                                                        | Ação prática                                                                                |
| ------ | --------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **1º** | **Attack**      | Tempo que o compressor leva para **começar a atuar** após o sinal ultrapassar o threshold                        | Ajuste o comportamento de **entrada** (quão rápido o compressor "pega" o transiente)        |
| **2º** | **Release**     | Tempo que o compressor leva para **parar de atuar** após o sinal cair abaixo do threshold                        | Ajuste o comportamento de **saída** (quão rápido o compressor "solta" o som)                |
| **3º** | **Ratio**       | Proporção de compressão. Ex: ratio 4:1 significa que para cada 4 dB de excesso, apenas 1 dB sai (75% de redução) | Defina a **intensidade** da compressão                                                      |
| **4º** | **Threshold**   | Nível (em dB) a partir do qual o compressor começa a atuar                                                       | Ajuste **por último** – ele é o "sensor" que decide quando a compressão ocorre              |
| **5º** | **Makeup Gain** | Ganho de saída para compensar a perda de volume causada pela compressão                                          | Ajuste para que o volume percebido fique **semelhante** ao original (para comparação justa) |

> ⚠️ **Importante:** Na prática, primeiro se ajusta **attack e release** (comportamento), depois **ratio e threshold** (quanto e quando comprimir), e por fim **makeup gain** (compensação de volume).

---

## Ataque (Attack) – efeito prático

| Ataque                           | O que acontece                                                          | Resultado sonoro                                                                                          |
| -------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Muito rápido** (ex: < 1 ms)    | O compressor atua **imediatamente** no transiente (pico inicial)        | O som perde o "estalo" ou "batida" inicial. Fica mais **controlado**, mas pode perder a **agressividade** |
| **Médio / lento** (ex: 10-30 ms) | O compressor "deixa passar" o início do transiente e só comprime depois | O transiente **passa intacto**, dando a sensação de **ataque preservado**, mais "pressão" e impacto       |

> Exemplo: com ataque rápido, a caixa soa mais "controlada". Com ataque mais lento, a caixa soa com mais "pressão", como se você estivesse batendo com mais força.

---

## Release (Desligamento) – efeito prático

| Release                    | O que acontece                                  | Resultado sonoro                                                               |
| -------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| **Rápido** (ex: 50-100 ms) | O compressor solta rápido após o sinal cair     | Pode causar **bombeamento** (pumping) – o volume sobe e desce de forma audível |
| **Lento** (ex: 300-500 ms) | O compressor mantém a compressão por mais tempo | Soa mais **natural**, mas pode achatar demais a dinâmica se for muito longo    |

---

## Ratio (Proporção) – valores de referência

| Ratio                    | Tipo de compressão | Uso típico                                                       |
| ------------------------ | ------------------ | ---------------------------------------------------------------- |
| 1.5:1 a 2:1              | Leve               | Voz, baixo, mixagem suave ("toque" de compressão)                |
| 3:1 a 4:1                | Moderada           | Bateria, guitarra, controle geral de dinâmica                    |
| 6:1 a 10:1               | Forte              | Controle de picos excessivos (quase um limitador)                |
| Acima de 10:1 (ex: 20:1) | Limitador          | Evita que o sinal ultrapasse o threshold – usado como "proteção" |

---

## Threshold (Limiar) – como ajustar

- Quanto **mais baixo** (mais negativo) o threshold, **mais** o sinal ultrapassa e **mais compressão** ocorre.
- Quanto **mais alto** (próximo de 0 dB) o threshold, **menos** compressão.

### Método prático para ajustar

1. Comece com o threshold no valor mais alto (ex: 0 dB) – nenhuma compressão.
2. Reduza o threshold lentamente até ver no **medidor de gain reduction** (redução de ganho) que o compressor está atuando.
3. Ajuste entre **2 dB e 6 dB de gain reduction** como ponto de partida (valores maiores para efeitos mais agressivos).

---

## Makeup Gain (Ganho de saída)

- **Compensa** a perda de volume causada pela compressão.
- O objetivo é que o volume percebido do elemento comprimido seja **igual** ao volume original (sem compressão), para você julgar apenas a **mudança de dinâmica/timbre**, não a diferença de volume.

### Como ajustar

1. Ative e desative o compressor (bypass).
2. Ajuste o makeup gain até que os volumes (com e sem compressão) soem **iguais** em termos de nível percebido.
3. Só então compare a **qualidade** do som (pressão, corpo, ataque, etc.).

---

## Tipos de compressores (visão geral)

| Tipo                                   | Características                            | Uso típico                                                    |
| -------------------------------------- | ------------------------------------------ | ------------------------------------------------------------- |
| **VCA** (Voltage Controlled Amplifier) | Preciso, versátil, resposta rápida         | Bateria, percussão, mixagem geral (ex: SSL, API 2500)         |
| **FET** (Field Effect Transistor)      | Agressivo, colorido, resposta muito rápida | Voz, guitarra, bateria – para adicionar "presença" (ex: 1176) |
| **Óptico** (Opto)                      | Suave, natural, resposta mais lenta        | Voz, baixo, mixagem suave (ex: LA-2A, LA-3A)                  |
| **Tube** (Válvula)                     | Colorido, "quente", saturação agradável    | Master, mixagem final, elementos que precisam de "calor"      |
| **Digital (nativo)**                   | Transparente, limpo, sem coloração         | Correção cirúrgica, controle de picos (ex: ReaComp)           |

> O Reaper tem seu compressor nativo: **ReaComp** (digital, transparente). Para iniciantes, é mais que suficiente.

---

## Configurações padrão para iniciantes (receita para 90% das situações)

Essa forma pode ser considerada uma **receita simples** que funciona na maioria dos casos, exigindo pouca experiência auditiva:

| Parâmetro       | Valor sugerido (ponto de partida)                             |
| --------------- | ------------------------------------------------------------- |
| **Attack**      | 10 ms a 30 ms (médio) – preserva o transiente                 |
| **Release**     | 100 ms a 300 ms (médio) – evita bombeamento                   |
| **Ratio**       | 3:1 ou 4:1 (moderado)                                         |
| **Threshold**   | Ajuste para obter **2 dB a 6 dB de gain reduction** nos picos |
| **Makeup Gain** | Ajuste para volume percebido igual ao original                |

> Esta configuração é um **ponto de partida seguro** que raramente causa prejuízo e traz benefícios de controle e "cola" entre os elementos.

---

## Aplicações comuns do compressor por elemento

| Elemento                | Objetivo                                   | Attack           | Release    | Ratio     | Gain reduction alvo |
| ----------------------- | ------------------------------------------ | ---------------- | ---------- | --------- | ------------------- |
| **Voz**                 | Suavizar variações, dar presença           | 5-10 ms (rápido) | 50-100 ms  | 2:1 a 4:1 | 3-6 dB              |
| **Bumbo**               | Controlar picos, dar sustância             | 1-5 ms (rápido)  | 50-100 ms  | 4:1 a 8:1 | 4-8 dB              |
| **Caixa**               | Controlar ressonância, dar corpo           | 5-15 ms          | 100-200 ms | 3:1 a 5:1 | 3-6 dB              |
| **Baixo**               | Aplainar dinâmica, manter volume constante | 10-30 ms         | 100-300 ms | 3:1 a 6:1 | 4-8 dB              |
| **Guitarra base**       | Controlar variações de palhetada           | 10-20 ms         | 100-200 ms | 2:1 a 4:1 | 2-5 dB              |
| **Mixagem geral (bus)** | "Colar" os elementos                       | 10-30 ms         | 200-400 ms | 2:1 a 3:1 | 1-3 dB              |

---

## Compressão paralela (Parallel Compression) – introdução

### O que é

- Você mantém o **sinal original** intacto (seco).
- Cria uma **cópia** (via roteamento ou send) e aplica compressão **agressiva** nessa cópia.
- Mistura o sinal comprimido (paralelo) com o sinal original.

### Para que serve

- Adiciona **corpo**, **sustância** e **"cola"** sem perder os **transientes naturais** do original.
- É como ter o melhor dos dois mundos: o ataque e a clareza do original + a "pressão" da compressão.

### Como fazer no Reaper (visão geral)

1. Crie uma **track auxiliar** (return track).
2. Mande o sinal da track original para a auxiliar (send).
3. Na track auxiliar, insira um compressor com configurações **agressivas** (ratio alto, threshold baixo, attack rápido, release médio).
4. Misture o fader da track auxiliar (comprimida) com o fader da original.

---

## Efeito audível da compressão (o que você deve perceber)

| Sem compressão                    | Com compressão bem ajustada                 |
| --------------------------------- | ------------------------------------------- |
| Variações de volume muito grandes | Volume mais consistente, controlado         |
| Picos muito destacados            | Picos aparados, suavizados                  |
| Som "solto", menos presença       | Som mais "colado", com mais "pressão"       |
| Transientes muito abruptos        | Transientes controlados, mas ainda naturais |

> **Resultado ideal:** O som fica mais "profissional" sem soar esmagado ou artificial.

---

## Erros comuns ao usar compressor

| Erro                                    | Consequência                                                                 |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| Threshold muito baixo (comprime demais) | Som "esmagado", sem vida, perda de dinâmica                                  |
| Attack muito rápido                     | Perde o impacto inicial (transiente) – som "sem batida"                      |
| Release muito rápido                    | Bombeamento (pumping) audível – volume sobe e desce de forma não natural     |
| Release muito lento                     | Compressão se arrasta por tempo demais, achata a dinâmica                    |
| Ratio muito alto                        | Som "aperta" demais, perde naturalidade                                      |
| Esquecer o makeup gain                  | Volume fica mais baixo, você compara errado e acha que a compressão "piorou" |

---

## Fluxo resumido de ajuste do compressor

```
1. Ajuste attack e release (comportamento)
       ↓
2. Ajuste ratio (intensidade)
       ↓
3. Ajuste threshold (quando começa a comprimir) – observe gain reduction (2-6 dB)
       ↓
4. Ajuste makeup gain para volume similar ao original
       ↓
5. Compare com bypass: o som comprimido deve soar mais controlado e/ou com mais "pressão"
```

---

## Nota

> "A compressão é uma ferramenta poderosa, mas exige estudo. Para quem está começando, siga as receitas de ataque médio (10-30 ms), release médio (100-300 ms) e ratio 3:1 ou 4:1. Isso vai funcionar para a maioria dos elementos na maioria das músicas. Com o tempo, você vai desenvolver o ouvido para ajustes mais finos e específicos."
