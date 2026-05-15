## Objetivos do processamento na mixagem

| Objetivo                             | Descrição                                                                |
| ------------------------------------ | ------------------------------------------------------------------------ |
| **Melhorar o timbre individual**     | Ajustar a qualidade sonora de cada elemento separadamente                |
| **Melhorar a harmonia e o convívio** | Reduzir conflitos de frequência entre elementos                          |
| **Dar clareza**                      | Cada elemento fica mais audível e definido                               |
| **Otimizar a "cola" (coesão)**       | Fazer com que os elementos se acoplem bem, soando como um conjunto coeso |
| **Equilíbrio tonal**                 | Distribuição adequada de graves, médios e agudos                         |
| **Equilíbrio dinâmico**              | Controle das variações de intensidade (volume)                           |

---

## Duas ferramentas prioritárias de processamento

| Ferramenta           | Função principal                                         |
| -------------------- | -------------------------------------------------------- |
| **Equalizador (EQ)** | Ajusta a intensidade de frequências específicas (timbre) |
| **Compressor**       | Controla a dinâmica (variações de volume)                |

> O percurso foca primeiro no **equalizador**, considerando-o a ferramenta mais impactante para clareza e convívio entre elementos.

---

## Conceito fundamental: Espectro de frequências

- O ouvido humano percebe frequências aproximadamente de **20 Hz a 20.000 Hz (20 kHz)** .
- Cada elemento musical ocupa uma **região específica** desse espectro.
- O trabalho do EQ é equilibrar essas regiões para que os elementos **não briguem entre si** por espaço sonoro.

---

## Estrutura de um equalizador (usando o ReaEQ como exemplo)

### Parâmetros principais de cada banda

| Parâmetro              | O que faz                                                                           | Unidade                     |
| ---------------------- | ----------------------------------------------------------------------------------- | --------------------------- |
| **Frequency (Freq)**   | Seleciona a frequência central que será afetada                                     | Hertz (Hz) ou kHz           |
| **Gain**               | Aumenta (ganho positivo) ou reduz (ganho negativo) a intensidade daquela frequência | decibéis (dB)               |
| **Bandwidth (BW) / Q** | Largura da banda afetada. Q alto = banda estreita; Q baixo = banda larga            | adimensional (Q) ou oitavas |

### Tipos de banda no equalizador

| Tipo                                 | Símbolo / nome | Função                                                                            |
| ------------------------------------ | -------------- | --------------------------------------------------------------------------------- |
| **Band Pass (Bell / Sino)**          | Forma de sino  | Afeta uma região em torno da frequência central. É o tipo mais comum              |
| **Low Shelf (Prateleira grave)**     | Shelving       | Aumenta ou reduz **todas** as frequências abaixo de um ponto de corte             |
| **High Shelf (Prateleira aguda)**    | Shelving       | Aumenta ou reduz **todas** as frequências acima de um ponto de corte              |
| **Low Cut (High Pass Filter – HPF)** | Corta graves   | Elimina tudo **abaixo** da frequência de corte. Passa apenas as frequências altas |
| **High Cut (Low Pass Filter – LPF)** | Corta agudos   | Elimina tudo **acima** da frequência de corte. Passa apenas as frequências baixas |

---

## Macete visual para memorizar os filtros

| Nome do filtro          | O que faz com o gráfico                                                  |
| ----------------------- | ------------------------------------------------------------------------ |
| **Low Cut (High Pass)** | Corta a parte **baixa** (esquerda) do gráfico. Deixa passar as **altas** |
| **High Cut (Low Pass)** | Corta a parte **alta** (direita) do gráfico. Deixa passar as **baixas**  |

> ⚠️ Atenção: "Low Cut" corta graves. "High Pass" passa agudos. São o mesmo filtro com nomes diferentes.

---

## Faixas de frequência e suas características perceptivas

### Sub-graves (20 Hz – 60 Hz)

| Faixa         | Sensação                        | Presente em                             |
| ------------- | ------------------------------- | --------------------------------------- |
| 20 Hz – 40 Hz | Vibração, pressão, "solo treme" | Bumbo, sub-baixo, sintetizadores graves |
| 40 Hz – 60 Hz | Peso extremo, profundidade      | Bumbo, contrabaixo                      |

> ⚠️ Muita energia nessa região pode sobrecarregar o sistema e consumir headroom sem necessidade.

### Graves (60 Hz – 250 Hz)

| Faixa           | Sensação              | Presente em                                |
| --------------- | --------------------- | ------------------------------------------ |
| 60 Hz – 120 Hz  | Peso, corpo grave     | Bumbo, baixo, órgão grave                  |
| 120 Hz – 250 Hz | Encorpamento, "calor" | Baixo, violão, guitarra, voz (parte grave) |

### Médio-graves (250 Hz – 500 Hz)

| Faixa           | Sensação                                                  | Presente em                     |
| --------------- | --------------------------------------------------------- | ------------------------------- |
| 250 Hz – 500 Hz | Corpo, mas também **"enlameamento"** (muddy) se excessivo | Voz, violão, guitarra, teclados |

> Esta é a região mais comum de **acúmulo de frequências** e conflito entre elementos.

### Médios (500 Hz – 2 kHz)

| Faixa          | Sensação                                            | Presente em                             |
| -------------- | --------------------------------------------------- | --------------------------------------- |
| 500 Hz – 1 kHz | Presença, definição, "cacunda" (nasal se excessivo) | Voz, guitarras, violão, sintetizadores  |
| 1 kHz – 2 kHz  | Ataque, agressividade, "corte"                      | Bumbo (ataque), caixa, voz (consoantes) |

### Médio-agudos (2 kHz – 5 kHz)

| Faixa         | Sensação                                 | Presente em                             |
| ------------- | ---------------------------------------- | --------------------------------------- |
| 2 kHz – 4 kHz | Presença, clareza, "dureza" se excessivo | Voz (presença), guitarra, violão, caixa |
| 4 kHz – 5 kHz | Brilho inicial, ataque de pratos         | Pratos, hi-hat, vocal (sibilância)      |

### Agudos (5 kHz – 20 kHz)

| Faixa           | Sensação                    | Presente em                                              |
| --------------- | --------------------------- | -------------------------------------------------------- |
| 5 kHz – 8 kHz   | Brilho, arejamento, "ar"    | Pratos, voz (ar), violão (brilho)                        |
| 8 kHz – 12 kHz  | Clareza extrema, "frescura" | Pratos, overdubs de guitarra, sintetizadores             |
| Acima de 12 kHz | "Ar", sensação de espaço    | Pode ser cortado sem grande prejuízo em muitos elementos |

> Sugere-se que **acima de 12 kHz a 14 kHz** geralmente não é essencial para a maioria dos instrumentos (exceto pratos e certos sintetizadores).

---

## Referência para intensidade de intervenção no EQ

| Ganho aplicado    | Tipo de intervenção                   |
| ----------------- | ------------------------------------- |
| **Até 3 dB**      | Intervenção leve, sutil               |
| **3 dB a 6 dB**   | Intervenção moderada (mais comum)     |
| **6 dB a 9 dB**   | Intervenção intensa                   |
| **Acima de 9 dB** | Intervenção extrema – use com cautela |

> ⚠️ Esses valores servem tanto para **aumento** quanto para **redução** (ganho negativo).

---

## Duas formas de operar um equalizador

| Forma                         | Como fazer                                                                                                                                                                                             | Uso                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| **Por seleção de frequência** | Digitar ou girar o knob de frequência até encontrar o ponto desejado                                                                                                                                   | Quando você já sabe qual frequência quer mexer                 |
| **Por varredura (sweep)**     | Aumentar o ganho (+9 dB ou mais), Q alto (estreito), e girar a frequência até encontrar o ponto que soa "ruim" ou "interessante". Depois, reduzir o ganho para o valor desejado (positivo ou negativo) | Encontrar frequências problemáticas (ex: ressonâncias, "lama") |

> O método de varredura é muito útil para iniciantes identificarem onde estão os problemas.

---

## Regras de ouro do uso do EQ na mixagem

### Regra 1: Evite mexer no elemento isolado (solo)

- É muito comum o iniciante **solar a track** e fazer ajustes de EQ ouvindo apenas aquele elemento.
- **Problema:** O que soa bem isolado pode **sumir ou brigar** quando tocado junto com os outros elementos.
- **Recomendação:** Faça os ajustes **com todos os elementos tocando** (contexto). Use o solo apenas para identificar problemas específicos (ex: ruído, ressonância estranha).

### Regra 2: Use o "macete do destaque temporário"

Se você tem dificuldade de perceber o que o EQ está fazendo no contexto da música:

| Passo | Procedimento                                                       |
| ----- | ------------------------------------------------------------------ |
| 1     | Aumente o **volume da track** (fader) em alguns dB para destacá-la |
| 2     | Faça a manipulação no EQ (ex: corte uma frequência, aumente outra) |
| 3     | Perceba a diferença no som                                         |
| 4     | Volte o **fader da track** para o nível original (gain staging)    |
| 5     | O som manterá a alteração do EQ, mas agora no volume correto       |

Isso facilita a percepção das mudanças sem tirar o elemento do contexto.

### Regra 3: Menos é mais

- Intervenções muito agressivas geralmente pioram o som.
- Prefira **cortar** (ganho negativo) do que **aumentar** (ganho positivo), especialmente em médios e médio-graves.
- Cortar frequências resolve conflitos; aumentar demais pode causar distorção e cansaço auditivo.

---

## Tabela de referência rápida – Frequências por grupo

| Grupo               | Faixa (Hz) | Características                                                       |
| ------------------- | ---------- | --------------------------------------------------------------------- |
| **Sub-graves**      | 20 – 60    | Vibração, pressão. Use com moderação                                  |
| **Graves**          | 60 – 250   | Peso, calor, encorpamento                                             |
| **Médio-graves**    | 250 – 500  | Corpo, mas cuidado com "enlameamento" (muddy)                         |
| **Médios**          | 500 – 2k   | Definição, presença, ataque                                           |
| **Médio-agudos**    | 2k – 5k    | Presença, clareza, dureza (se excessivo)                              |
| **Agudos (brilho)** | 5k – 8k    | Brilho, arejamento                                                    |
| **Agudos extremos** | 8k – 20k   | Ar, frescura. Acima de 12k-14k é dispensável na maioria dos elementos |

---

## Exercício proposto para desenvolver memória auditiva

1. Coloque um equalizador (ex: ReaEQ) em uma track de referência (ex: uma música que você gosta, ou o próprio projeto).
2. Use uma banda **Bell (sino)** com Q médio (ex: 1.0 a 2.0) e ganho positivo (+6 dB).
3. Varra todas as frequências de **20 Hz a 20 kHz**, lentamente.
4. Perceba como o som muda:
   - **Graves (60-250 Hz):** peso, profundidade.
   - **Médio-graves (250-500 Hz):** "enlameamento", corpo.
   - **Médios (500 Hz-2 kHz):** presença, "cacunda", definição.
   - **Médio-agudos (2-5 kHz):** clareza, dureza.
   - **Agudos (5-8 kHz):** brilho.
   - **Acima de 8 kHz:** ar, detalhe de pratos e consoantes.
5. Repita o exercício com **ganho negativo** (-6 dB) para perceber a falta dessas frequências.

> Com o tempo, você desenvolverá uma **memória auditiva** para identificar rapidamente qual região precisa ser ajustada.

---

## Próximo passo

Após esta base conceitual sobre EQ, o próximo vídeo trará **receitas práticas e padronizadas** de equalização para cada elemento (voz, baixo, bateria, guitarra, violão, teclados), com valores de frequência e ganho que funcionam em 99% das mixagens.

---

## Resumo visual

```
PROCESSAMENTO NA MIXAGEM
├── Equalizador (EQ) – timbre, convívio, clareza
│   ├── Parâmetros: Freq, Gain, Q
│   ├── Tipos: Bell, Shelf, Cut
│   ├── Faixas: Sub (20-60), Graves (60-250), M. Graves (250-500),
│   │            Médios (500-2k), M. Agudos (2k-5k), Agudos (5k-20k)
│   └── Regras: Evite solo, use destaque temporário, menos é mais
└── Compressor (próxima etapa) – dinâmica, volume consistente
```
