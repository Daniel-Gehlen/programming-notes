## Início da masterização

| Subfase                         | O que faz                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **1. Processamento na master**  | Ajustes finos de EQ e compressão **no áudio completo (mixagem final)** , tratando a música como um único elemento |
| **2. Finalização e exportação** | Aumento de volume (limitador) e exportação no formato correto                                                     |

---

## Por que processar novamente na master, se a mixagem já foi processada?

### Analogia

- A mixagem inteira (música completa) agora se torna um **único elemento** – a "track master".
- Esse novo elemento pode ter pequenos desequilíbrios de **frequência** (EQ) e **dinâmica** (compressão) que surgiram da **soma** de todos os elementos processados individualmente.
- A masterização aplica **correções sutis** nesse elemento único, além de possíveis **ajustes estéticos** (ex: dar mais brilho, mais peso, mais "cola").

### Diferença entre processamento na mixagem e na masterização

| Aspecto         | Mixagem (processamento individual)                                                     | Masterização (processamento no todo)                                           |
| --------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Objetivo**    | Ajustar timbre e dinâmica de cada elemento para que convivam bem                       | Ajustar o **todo** para que soe coeso, balanceado e dentro do padrão comercial |
| **Intensidade** | Pode ser moderada a intensa (ex: cortes de 6 dB, compressão de 6 dB de gain reduction) | **Sutil** (intervenções de 1 a 3 dB, gain reduction de 1-2 dB)                 |
| **Foco**        | Resolver conflitos entre elementos                                                     | Lapidar, dar "brilho", "peso" e "cola" finais                                  |

> ⚠️ Se você precisa de uma intervenção **acima de 3 dB** na master (ex: aumentar 4 dB de graves), o problema provavelmente está na **mixagem**. Volte e corrija lá.

---

## Processador 1: Equalizador (EQ) na master

### Abordagem – "EQ coringa" para master

- Em vez de fazer cortes cirúrgicos (específicos), recomenda-se o uso de **filtros shelving (prateleira)** ou **filtros passa-altas/baixas com corte suave**.
- Objetivo: **valorizar o espectro** como um todo – dar mais peso (graves), mais brilho (agudos), ou limpar excessos.

### Tipos de ajuste comuns na master

| Tipo de filtro                          | Frequência típica | Efeito                                                   |
| --------------------------------------- | ----------------- | -------------------------------------------------------- |
| **Low Shelf (aumento de graves)**       | 30 Hz – 60 Hz     | Adiciona peso, profundidade, "gordura"                   |
| **High Shelf (aumento de agudos)**      | 6 kHz – 12 kHz    | Adiciona brilho, "ar", clareza                           |
| **Low Cut (corte de sub-graves)**       | 20 Hz – 30 Hz     | Remove frequências muito baixas que só consomem headroom |
| **High Cut (corte de agudos extremos)** | 18 kHz – 20 kHz   | Remove ultrassons desnecessários (opcional)              |

### Como fazer

| Passo | Procedimento                                                                             |
| ----- | ---------------------------------------------------------------------------------------- |
| 1     | Inseriu-se um **EQ com shelving** na master (ex: ReaEQ ou plugin específico para master) |
| 2     | Selecionou-se uma **banda high shelf** em torno de **6 kHz a 8 kHz**                     |
| 3     | Aplicou-se um **ganho suave** (ex: +1 dB a +2 dB) para dar brilho geral                  |
| 4     | Selecionou-se uma **banda low shelf** em torno de **30 Hz a 60 Hz**                      |
| 5     | Aplicou-se um **ganho suave** (ex: +1 dB) para dar peso, se necessário                   |
| 6     | Em alguns casos, aplicou-se um **low cut em 20-30 Hz** para limpar sub-graves excessivos |

### Intensidade das intervenções na master

| Ganho aplicado    | Interpretação                                                                 |
| ----------------- | ----------------------------------------------------------------------------- |
| **Até 1 dB**      | Muito sutil – quase imperceptível                                             |
| **1 dB a 2 dB**   | Leve – comum e seguro                                                         |
| **2 dB a 3 dB**   | Moderado – ainda aceitável, mas começa a ser perceptível                      |
| **Acima de 3 dB** | **Sinal de alerta** – o problema provavelmente está na mixagem, não na master |

> Neste projeto, precisou-se aplicar **3 dB de corte** (ganho negativo) em uma frequência específica – o que indica que talvez a mixagem pudesse ser ajustada. Mas, para fins didáticos, resolveu-se na master mesmo assim.

---

## Processador 2: Compressor na master

### Por que comprimir na master?

- A mixagem como um todo pode ter **variações de dinâmica** (ex: refrão mais alto que a intro, ou picos isolados).
- Um compressor suave na master **"aperta" levemente** esses elementos, fazendo com que eles fiquem **mais colados (cola)**.
- Isso reduz a **faixa dinâmica** (diferença entre o mais baixo e o mais alto), tornando a música mais **coesa** e com volume percebido mais constante.

### Configuração recomendada para iniciantes – compressor "musical" e suave

Utilizou-se um compressor com as seguintes características:

| Parâmetro         | Valor / Configuração                                                                                                            | Por quê                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Tipo / Modelo** | Compressor com modos "automático" ou "opto" (ex: ReaComp com RMS ou plugin como Kotelnikov, ou compressor "mastering" dedicado) | Mais musical, menos agressivo                                       |
| **Attack**        | **Lento** (ex: 20 ms – 50 ms)                                                                                                   | Preserva os transientes (ataque dos elementos), não esmaga a música |
| **Release**       | **Automático** ou médio/lento (ex: 100-300 ms)                                                                                  | Evita bombeamento; mantém naturalidade                              |
| **Ratio**         | **Baixo** (ex: 1.5:1 a 2:1)                                                                                                     | Compressão suave, sem achatar demais                                |
| **Threshold**     | Ajustar para obter **1 dB a 2 dB de gain reduction** (pico)                                                                     | Intervenção leve – apenas para "colar"                              |
| **Makeup Gain**   | Compensar a perda de volume (se houver)                                                                                         | Para comparação justa com bypass                                    |

### Modo "RMS" vs. "Peak" no compressor de master

- **Modo RMS** (Recomendado): O compressor responde ao **volume médio**, ignorando picos muito rápidos. Resultado mais musical e natural.
- **Modo Peak** (menos comum na master): Responde a picos instantâneos – pode ser agressivo demais.

### Como configurou-se

| Ação | Detalhe                                                                                             |
| ---- | --------------------------------------------------------------------------------------------------- |
| 1    | Inseriu-se um compressor com **modo RMS** e **attack lento** (ex: 20 ms)                            |
| 2    | Ajustou-se o **ratio em 2:1**                                                                       |
| 3    | Reduziu-se o **threshold** lentamente até ver **1-2 dB de gain reduction** nos picos da música      |
| 4    | Usou-se **release automático** ou ajustou manualmente para um valor médio                           |
| 5    | Compensou-se o volume com **makeup gain** para que o nível percebido ficasse semelhante ao original |
| 6    | Comparou-se com bypass: a música comprimida soava mais "colada", com elementos mais integrados      |

### Efeito da compressão na master (resultado esperado)

| Sem compressão na master                         | Com compressão suave na master                |
| ------------------------------------------------ | --------------------------------------------- |
| Dinâmica natural, mas pode ter variações bruscas | Dinâmica ligeiramente reduzida, mais controle |
| Elementos podem soar "soltos"                    | Elementos soam mais "colados" (coesos)        |
| Picos isolados podem se destacar demais          | Picos são aparados suavemente                 |

> A compressão na master deve ser **sutil** – 1 a 2 dB de gain reduction é suficiente. Mais que isso começa a esmagar a dinâmica.

---

## Fluxo resumido da subfase 1 da masterização

```
1. EQ na master (sutil)
   ├── High shelf (6-12 kHz): +1 a +2 dB para brilho (opcional)
   ├── Low shelf (30-60 Hz): +1 dB para peso (opcional)
   ├── Low cut (20-30 Hz): cortar sub-graves extremos (opcional)
   └── Ganho total: até 3 dB no máximo (preferencialmente 1-2 dB)

2. Compressor na master (sutil)
   ├── Attack: lento (20-50 ms)
   ├── Release: automático ou médio (100-300 ms)
   ├── Ratio: baixo (1.5:1 a 2:1)
   ├── Threshold: ajustar para 1-2 dB de gain reduction
   ├── Makeup gain: compensar volume
   └── Modo RMS (recomendado)

3. Verificação
   ├── Comparar com bypass: a música está mais colada? Mais equilibrada? Sem perder naturalidade?
   └── Se precisou de ajustes >3 dB no EQ ou >2-3 dB de gain reduction → revisar a mixagem
```

---

## Caso especial: quando o processamento na master indica problemas na mixagem

No exemplo do percurso, precisou-se aplicar **3 dB de corte** em uma frequência específica na master.

| Interpretação                                                         | Ação recomendada                                                                                                                   |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Isso pode indicar que a **mixagem** tem um excesso naquela frequência | O ideal seria voltar à mixagem e corrigir a frequência no elemento causador (ex: guitarra com muito médio, ou voz com ressonância) |
| Para fins didáticos, resolveu-se na master mesmo assim                | Mas: se você precisa de ajustes agressivos (>3 dB) na master, **considere revisar a mixagem**                                      |

> Nota: "Se você colocou +3 dB de graves na master e ainda achou pouco, o problema não é na master – é na mixagem. Volte e corrija lá."

---

## Nota

> "EQ e compressor na master são a cereja do bolo. Ajustes sutis (1-2 dB, gain reduction de 1-2 dB) são suficientes na maioria dos casos. Se você precisa de mais que isso, sua mixagem ainda não está pronta para masterizar. Com essa fórmula básica, você vai conseguir dar aquele 'tchan' final na sua música sem estragar o trabalho que você já fez."
