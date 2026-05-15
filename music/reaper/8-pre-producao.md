## Resumo do projeto já configurado (pré-produção)

| Item                  | Configuração realizada                                                   |
| --------------------- | ------------------------------------------------------------------------ |
| Interface de áudio    | Canais disponíveis selecionados                                          |
| Teclado controlador   | Configurado (ou teclado virtual como alternativa)                        |
| Resolução de gravação | 24 bits / 44,1 kHz                                                       |
| Andamento (BPM)       | Definido conforme a música                                               |
| Compasso              | Definido (ex: 4/4)                                                       |
| Organização           | Projeto salvo com as duas caixas marcadas (pasta e arquivos organizados) |

---

## Importar arquivo de áudio para o projeto

### Como fazer

- Arraste o arquivo de áudio (ex: .wav, .mp3) diretamente para a área das tracks no Reaper.
- Ou use `Insert` > `Media file...`

### Para que serve

- Criar um **guia (referência)** para tocar por cima.
- No início da produção, não se preocupe com a qualidade do áudio importado – é apenas uma referência temporária.

> Dica: Se você tiver a **voz na sua própria guia** em vez de uma base pronta, é ainda melhor, pois a voz é o elemento principal.

---

## Ajuste de volume das tracks – Escala em dB

### Conceito importante

- No sistema digital, o **0 dB é o teto máximo** (não pode ultrapassar para evitar distorção).
- Os volumes são trabalhados em **escala negativa**: quanto mais baixo o volume, mais negativo é o número.

### Exemplos práticos

| Valor em dB | Significado             |
| ----------- | ----------------------- |
| 0 dB        | Máximo permitido (teto) |
| -3 dB       | Alto, mas com margem    |
| -6 dB       | Médio                   |
| -10 dB      | Mais baixo              |
| -inf        | Silêncio                |

> Quanto mais próximo de zero, mais alto e **menos negativo** é o número.

### Como ajustar o volume no Reaper

- Use o **fader da track** (controle deslizante vertical).
- Para dar margem de segurança, recomenda-se baixar o volume inicial para cerca de **-10 dB**.

### Monitoramento de nível

- O medidor (peak meter) da track mostra o **pico mais alto do sinal**.
- Exemplo: se uma batida bate em -9,6 dB, significa que o volume está seguro, abaixo de 0 dB.

### Compensação de volume após reduzir ganho

- Se você reduziu o volume da track, o nível geral diminuiu.
- Para voltar a ouvir no nível adequado, aumente o **volume do seu monitor (caixa ou fone)** ou o **master fader** – não mexa no fader da track depois que já está ajustado.

---

## Quantização (ajuste automático do tempo)

### O que faz

- Pega as notas que você tocou e **joga para a linha de grade mais próxima**, corrigindo pequenos erros de timing.

### Como aplicar no Reaper

1. Selecione o item MIDI gravado.
2. Pressione `Q` no teclado (atalho padrão para quantizar).
3. Ou vá em `Edit` > `Quantize...`

### Se a quantização não funcionar bem

- **Desative o Snap** (ícone de imã na barra de ferramentas) para mover notas manualmente.
- Ajuste cada nota com o mouse.
- Depois de corrigir manualmente, aplique a quantização novamente se necessário.

### Importante

- A quantização funciona bem se a **tocada foi razoável** (próxima do tempo certo).
- Se foi muito fora do ritmo, é melhor gravar novamente ou ajustar manualmente.

---

## Criação de arranjo de bateria para quem não tem habilidade

### Opção 1: Usar grupos e levadas prontas (grooves)

- O software de bateria virtual (ex: EZDrummer, MT Power DrumKit, SSD5.5) vem com **bibliotecas de levadas prontas**.
- Como fazer:
  1. Abra o plugin de bateria.
  2. Navegue pelos grooves/levadas por categoria (rock, pop, funk, etc.).
  3. Clique para escutar.
  4. Arraste o groove escolhido para uma track MIDI no Reaper.

### Opção 2: Manipular a levada pronta

- Depois de importar um groove, você pode:
  - Mover notas de lugar.
  - Mudar a intensidade (velocidade) das notas.
  - Adicionar ou remover notas.
  - Ajustar o **fim (limite) dos itens** para encaixar um no outro.

### Vantagem dos grooves prontos

- Você tem um **ponto de partida** que já soa mais ou menos correto.
- Muito mais fácil do que programar tudo do zero sem intimidade com o instrumento.

---

## Dica: Trabalhar com múltiplos instrumentos virtuais

### Problema comum

- O teclado controlador toca **todos os instrumentos virtuais ao mesmo tempo**.

### Solução: Ativar "Auto-arm" (Armar automaticamente)

- No Reaper, clique em `Options` > `New recording that arms track` (ou similar).
- Ou ative a opção **"Auto-arm"** no contexto da track:
  - Clique com o botão direito no botão `Record Arm` da track.
  - Selecione `Auto-arm when track selected`.

### Como funciona

- Quando você **seleciona uma track** (clicar nela), ela automaticamente fica armada para tocar.
- Ao selecionar outra track, a primeira desarma.
- Assim, o teclado controla **apenas a track selecionada** no momento.

---

## Resumo visual dos ajustes comuns

| Ação                   | Como fazer no Reaper                                         |
| ---------------------- | ------------------------------------------------------------ |
| Importar áudio         | Arrastar arquivo para a área de tracks                       |
| Ajustar volume track   | Fader vertical da track (valor negativo, ex: -10 dB)         |
| Ver nível de pico      | Medidor na track (número mais alto atingido)                 |
| Quantizar MIDI         | Selecionar item → tecla `Q`                                  |
| Desativar Snap         | Ícone de imã na barra de ferramentas                         |
| Arrastar groove pronto | Do plugin de bateria para a track MIDI                       |
| Auto-arm               | Botão direito no Record Arm → `Auto-arm when track selected` |

---

## Situação atual do projeto do percurso

O percurso agora avança para a **gravação dos elementos definitivos** da música, utilizando todas as configurações já estabelecidas.
