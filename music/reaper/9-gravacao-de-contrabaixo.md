## Importância do contrabaixo no arranjo

- Liga a **seção de ritmo** (bateria) com a **seção de harmonia**.
- Dá **balanço** e **groove** à música.

---

## Gravação de contrabaixo real – sinal de linha

### O que é sinal de linha (line signal)

- É o sinal elétrico que sai diretamente do contrabaixo (sem microfone).
- Pode ser ligado diretamente na interface de áudio.
- É uma forma **simples, funcional e muito utilizada até por profissionais**.

### Vantagens

- Não exige instrumentos caros para obter um bom timbre.
- Dica de instrumento real: um contrabaixo da marca **SX** (modelo Precision), considerado básico mas com bom resultado.

### Caminho do sinal

```
Contrabaixo → Cabo P10 (instrumento) → Interface de áudio (entrada de instrumento) → Conversor A/D → Computador → Reaper
```

### Pré-amplificador (préamp) e ajuste de ganho

- A interface de áudio possui um **pré-amplificador** para aumentar a intensidade do sinal.
- O controle desse pré é chamado de **ganho (gain)** ou **trim**.
- Objetivo: obter uma boa **relação sinal-ruído** (sinal limpo, sem ruído de fundo).

### Como ajustar o ganho corretamente

| Procedimento                      | Detalhe                                                    |
| --------------------------------- | ---------------------------------------------------------- |
| Toque a nota mais forte da música | Observe o medidor de pico na track do Reaper               |
| Ajuste o ganho na interface       | Gire o knob de ganho até o sinal atingir um nível seguro   |
| Nível alvo recomendado            | Picos entre **-10 dB e -8 dB**                             |
| Margem de segurança               | Deixe espaço até **0 dB** para evitar distorção (clipagem) |

> ⚠️ Não deixe o sinal bater no vermelho (acima de 0 dB) – isso causa distorção indesejada.

---

## Passo a passo da gravação do contrabaixo no Reaper

### 1. Conectar o instrumento

- Plugue o cabo do contrabaixo na entrada de **instrumento** da interface de áudio (geralmente identificada como "Inst" ou com ícone de guitarra).

### 2. Criar e configurar a track

- `Track` > `Insert New Track` (ou `Ctrl + T`)
- Ativar `Record Arm` (botão vermelho)
- Selecionar a entrada correta: clique no seletor de entrada e escolha o canal onde o baixo está conectado (ex: `Input 2`)

### 3. Ajustar o ganho

- Toque a parte mais forte da música.
- Gire o knob de ganho na interface até os picos ficarem entre **-10 dB e -8 dB** no medidor do Reaper.

### 4. Gravar

- Posicione o cursor no ponto desejado.
- Clique no botão `Record` na barra de transporte.
- Toque a linha de baixo.
- Clique em `Stop` ao finalizar.

---

## Edição simples da gravação – cortes e ajustes

### Ferramentas úteis

| Ação                        | Como fazer no Reaper                           |
| --------------------------- | ---------------------------------------------- |
| Zoom horizontal             | Rolagem do mouse ou `+` / `-` no teclado       |
| Desativar Snap              | Clique no ícone de imã na barra de ferramentas |
| Cortar item                 | Posicione o cursor e pressione `S` (Split)     |
| Remover parte cortada       | Selecione o item e pressione `Delete`          |
| Gravar a partir de um ponto | Posicione o cursor, ative Record Arm e grave   |

### Crossfade automático

- Quando você corta e une dois itens, o Reaper cria automaticamente um **crossfade**.
- O que é: o final do primeiro item vai baixando o volume enquanto o início do segundo vai subindo.
- Isso evita **clicks ou estalos** na transição.
- Você pode ajustar o crossfade arrastando a região de transição com o mouse.

---

## Alternativa: Contrabaixo virtual (para quem não tem o instrumento)

### Quando usar

- Você não tem um contrabaixo.
- Você não sabe tocar contrabaixo.
- Não tem como gravar o instrumento real.

### Como funciona

- Usa um **instrumento virtual (plugin)** de baixo.
- Você toca as notas em um **teclado controlador** ou no **teclado virtual** do Reaper.

### Exemplo de notas para linha de baixo simples

- Use a **tônica** (primeira nota do acorde) na região grave.
- Exemplo: no acorde de Dó maior (C), toque a nota **C** (Dó) na oitava grave.
- Variação: quinta do acorde (ex: G no acorde de C).

### Dica prática para iniciantes

- Se você tem algumas notas gravadas no teclado, pode **duplicar** a região da tônica para preencher.
- O teclado virtual do Reaper (View > Virtual MIDI Keyboard) permite clicar nas notas com o mouse.

> Para quem não tem teclado, a alternativa mais comum é realmente usar um dispositivo controlador ou o teclado do computador.

---

## Nota

- Use **instrumentos de custo baixo** – eles podem entregar resultado bom com um bom planejamento.
- **Não deixe a gravação para a última hora** – isso prejudica a qualidade.
- Faça o "dever de casa" (estudar a música, ensaiar) antes de gravar.
- Na hora da gravação, foque **totalmente na execução e no timbre**.

---

## Resumo visual do fluxo

### Baixo real

```
Conectar baixo à interface → Criar track → Arm Record → Selecionar entrada → Ajustar ganho (-10 dB a -8 dB) → Gravar → Cortar e editar se necessário
```

### Baixo virtual (alternativa)

```
Criar track → Inserir plugin de baixo virtual (FX) → Teclado controlador ou teclado virtual → Tocar tônica e quinta → Quantizar se necessário
```
