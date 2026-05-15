## Início da terceira fase – Mixagem

As quatro fases da produção musical:

1. Gravação
2. Edição
3. **Mixagem** (transformar gravações caseiras em resultado comercial)
4. Masterização

---

## Etapas da mixagem (visão geral)

| Etapa                       | O que faz                                               |
| --------------------------- | ------------------------------------------------------- |
| 1. Preparação               | Ajustar ganhos, organizar o projeto, otimizar o sistema |
| 2. Processamento individual | Equalização, compressão, etc. em cada track             |
| 3. Coesão e harmonia        | Fazer os elementos conversarem entre si                 |
| 4. Experiência criativa     | Efeitos (reverb, delay), automações, ambiência          |
| 5. Finalização              | Encaminhar para a masterização                          |

---

## Preparação do sistema para mixagem – ajuste de buffer

### Por que aumentar o buffer na mixagem?

- Na gravação, precisa de **buffer baixo** (ex: 128 ou 256 samples) para baixa latência (ouvir em tempo real).
- Na mixagem, **não há necessidade de baixa latência** – você só está reproduzindo, não gravando.
- Aumentar o buffer **alivia o processamento do computador**, permitindo rodar mais plugins sem estalos ou travamentos.

### Como aumentar o buffer no Reaper

| Passo | Procedimento                                                              |
| ----- | ------------------------------------------------------------------------- |
| 1     | `Options` > `Preferences` (ou `Ctrl + P`)                                 |
| 2     | `Audio` > `Device`                                                        |
| 3     | Clique em **`ASIO Configuration`** (botão)                                |
| 4     | Aumente o **`Buffer Size`** (ex: de 256 para **512** ou **1024** samples) |
| 5     | Clique em OK e feche as janelas                                           |

### Valores de referência

| Situação                                 | Buffer recomendado   |
| ---------------------------------------- | -------------------- |
| Gravação (baixa latência)                | 128 ou 256 samples   |
| Mixagem (projeto leve)                   | 512 samples          |
| Mixagem (projeto pesado, muitos plugins) | 1024 samples ou mais |

---

## Renderização de instrumentos virtuais (alívio de processamento)

### O que é renderizar um instrumento virtual

- Transformar o **MIDI + plugin** em um **arquivo de áudio** (WAV).
- Depois de renderizado, você pode **desligar o plugin** e remover a track MIDI, liberando processamento.
- O som continua o mesmo – você apenas "imprimiu" o áudio.

### Quando renderizar

- Quando o projeto está **pesado** (muitos plugins, muitas tracks MIDI).
- Especialmente útil para **baterias virtuais** (consumem muito processamento).

### Como renderizar um instrumento virtual no Reaper

| Passo | Procedimento                                                                                   |
| ----- | ---------------------------------------------------------------------------------------------- |
| 1     | Selecione a track MIDI do instrumento virtual                                                  |
| 2     | Clique com o botão direito no item MIDI                                                        |
| 3     | Selecione `Apply track/take FX to items as new take` (ou `Render items as new take`)           |
| 4     | O Reaper cria um **novo take** (versão) com o áudio renderizado                                |
| 5     | Você pode então **desligar o plugin** (botão FX na track) ou desabilitar a track MIDI original |

### Cuidado ao renderizar

- A renderização mantém a **originalidade do som** – é exatamente o que você ouvia saindo do plugin.
- Não há perda de qualidade se você mantiver a taxa de amostragem e profundidade de bits do projeto.

---

## Conceito: Mono vs. Stereo

### O que é Mono

- **Um único sinal** de áudio.
- Na interface gráfica do Reaper, aparece como **uma única barra** (ou duas barras idênticas).
- Exemplos: microfone único, baixo gravado em linha, guitarra com um microfone.

### O que é Stereo

- **Dois sinais**: Left (L) e Right (R).
- Na interface gráfica, aparecem como **duas barras separadas** (uma para cada lado).
- Exemplos: violão gravado com dois microfones (L e R), sintetizadores estéreo, dobras de guitarra (gravação dupla).

### Exemplo para o percurso: violão em stereo

- Dois takes/violões: um **pan 100% L** (esquerda), outro **pan 100% R** (direita).
- Cada track individual mostra uma barra (cada violão é mono, mas posicionado separadamente).
- A **pasta (folder)** que contém os dois violões mostra **duas barras** – pois está recebendo os dois sinais (L e R).

### Renderização de material stereo

- Se você renderizar a **pasta** dos violões, gera um **arquivo stereo** (L + R no mesmo arquivo).
- Isso **não** alivia processamento (apenas consome mais espaço em disco e substitui duas tracks mono por uma stereo).
- Para **alívio de processamento**, renderize as tracks individuais **separadamente**.

---

## Organização do projeto antes da mixagem

### Estrutura de pastas (folders) recomendada

| Pasta     | Tracks dentro                                   |
| --------- | ----------------------------------------------- |
| Bateria   | Bumbo, caixa, hi-hat, tons, pratos (separados)  |
| Baixo     | Contrabaixo (linha)                             |
| Guitarras | Guitarra base L, guitarra base R, guitarra solo |
| Violões   | Violão L, violão R                              |
| Vozes     | Voz principal (e backing vocals, se houver)     |

### Backup do projeto original

- Antes de começar a mixagem, **salve uma cópia de segurança** do projeto com todas as gravações e edições.
- Na versão de mixagem, você pode **apagar tracks desnecessárias** (takes ruins, gravações de backup) para organizar.
- Mantenha o projeto original separado caso precise resgatar algo.

### Dica: Templates

- Após organizar a bateria (peças separadas, roteamento configurado), você pode **salvar como template**.
- Como fazer: selecione a pasta da bateria → `File` > `Project Templates` > `Save project as template`.
- Na próxima produção, você carrega o template e já tem a bateria configurada.

---

## Bateria virtual – separação das peças por canais

### Por que separar as peças da bateria?

- Na mixagem, cada peça da bateria precisa de um **tratamento individual**:
  - Bumbo: mais grave, compressão forte.
  - Caixa: médios e ataque.
  - Pratos: agudos, menos compressão.
  - Tons: médios-graves, com pan distribuído.
- Se você tiver **um único arquivo de áudio com a bateria inteira** (mixagem interna do plugin), você perde o poder de tratamento individual.

### Como configurar a saída do plugin de bateria

- A maioria dos plugins de bateria (ex: MT Power DrumKit, SSD5, EZDrummer) permite **rotear cada peça para um canal de saída diferente** dentro do Reaper.
- No plugin, vá nas configurações de **output / multi-channel** e ative saídas separadas para:
  - Kick (bumbo)
  - Snare (caixa)
  - Hi-hat
  - Toms (cada tom ou todos em um canal)
  - Cymbals / Overheads (pratos)

### Distribuição de canais (exemplo para o percurso)

| Peça             | Canal de saída | Tipo de sinal                           |
| ---------------- | -------------- | --------------------------------------- |
| Kick (bumbo)     | Canal 1        | Mono                                    |
| Snare (caixa)    | Canal 2        | Mono                                    |
| Hi-hat           | Canal 3        | Mono                                    |
| Toms             | Canais 4, 5, 6 | Mono (cada tom separado)                |
| Cymbals / pratos | Canal 7        | Estéreo (ou mono, dependendo do plugin) |

> **Nota:** Pratos geralmente têm posicionamento estéreo (passeiam entre L e R). Se você renderizar pratos em mono, **perde essa informação**. Se possível, mantenha pratos em stereo ou faça o pan manualmente depois.

### Após configurar as saídas

- No Reaper, você verá **múltiplas tracks** saindo do plugin de bateria.
- Cada track recebe um sinal mono (ou stereo) separado.
- Você pode então **renderizar cada track individualmente** para aliviar o processamento.

---

## Procedimento prático para renderizar e organizar

### Sequência sugerida

| Passo | O que fazer                                                                              |
| ----- | ---------------------------------------------------------------------------------------- |
| 1     | Configure o plugin de bateria para saídas multi-canal                                    |
| 2     | No Reaper, crie tracks de áudio para cada peça (ou use as tracks já criadas pelo plugin) |
| 3     | Renderize cada track MIDI em áudio (`Apply track/take FX to items as new take`)          |
| 4     | Desligue o plugin de bateria original (botão FX na track) ou mute/delete a track MIDI    |
| 5     | Organize as tracks de áudio em uma pasta (folder) chamada "Bateria"                      |
| 6     | Repita o processo para outros instrumentos virtuais (se houver)                          |
| 7     | Aumente o buffer para 512 ou 1024 (mixagem)                                              |
| 8     | Salve o projeto mixável em um novo arquivo (ex: "Projeto_MIXAGEM.RPP")                   |

---

## Dica: arquivos grandes e desempenho do computador

### Configuração mínima recomendada para o projeto do percurso

| Componente          | Especificação                                |
| ------------------- | -------------------------------------------- |
| Processador         | Intel Core i3 ou i5 (gerações mais recentes) |
| RAM                 | 4 a 8 GB                                     |
| Sistema operacional | Windows, Linux ou Mac                        |

> **Até computadores modestos devem rodar o projeto deste percurso** sem grandes problemas, pois os plugins foram escolhidos por serem acessíveis financeiramente e **leves em termos de processamento**.

### Se o computador ainda estiver travando

- Renderize **tudo** que for possível (bateria, teclados, etc.)
- Aumente o buffer para o máximo suportado (ex: 2048 samples)
- Feche outros programas abertos (navegador, etc.)

---

## Resumo final da preparação para mixagem

| Ação                             | Objetivo                             |
| -------------------------------- | ------------------------------------ |
| Aumentar buffer (512-1024)       | Aliviar processamento para mixagem   |
| Renderizar instrumentos virtuais | Converter MIDI em áudio, liberar CPU |
| Separar peças da bateria         | Tratamento individual de cada peça   |
| Organizar em pastas (folders)    | Facilitar navegação e roteamento     |
| Salvar template de bateria       | Reutilizar em projetos futuros       |
| Fazer backup do projeto original | Preservar gravações e edições brutas |
