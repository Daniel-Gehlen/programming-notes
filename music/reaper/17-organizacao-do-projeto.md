## Objetivo da organização do projeto

- Melhorar a **navegação** durante a mixagem.
- Aumentar a **produtividade** e o conforto visual.
- Facilitar o **fluxo de trabalho**, especialmente em projetos grandes.

---

## Três ações principais de organização

| Ação                            | Benefício                                                  |
| ------------------------------- | ---------------------------------------------------------- |
| **Nomear as tracks**            | Identificar rapidamente cada instrumento                   |
| **Agrupar em pastas (folders)** | Organizar por categorias (bateria, guitarras, vozes, etc.) |
| **Colorir os grupos**           | Identificação visual imediata por cores                    |

> É comum organizar **desde o início da produção**, não apenas na mixagem.

---

## Como colorir tracks e pastas no Reaper

### Método 1 – Usando o seletor de cores

1. Selecione a track ou pasta que deseja colorir.
2. Clique com o botão direito na track.
3. Vá em `Track color` > `Set track color`.
4. Escolha uma cor na paleta.

### Método 2 – Customizando cores (recomendado)

1. Clique com o botão direito na track.
2. `Track color` > `Set custom track color...`
3. Ajuste:
   - **Matiz (Hue)** – a cor propriamente dita (ex: vermelho, azul, verde).
   - **Saturação (Saturation)** – intensidade da cor.
   - **Luminosidade (Luminance)** – clareza/escurecimento.
4. Clique em **`Add to custom colors`** para salvar a cor na paleta personalizada.
5. Use a mesma cor para todas as tracks do mesmo grupo (ex: todas as guitarras em verde).

### Exemplo de organização por cores (sugestão)

| Grupo              | Cor sugerida |
| ------------------ | ------------ |
| Bateria            | Vermelho     |
| Baixo              | Azul escuro  |
| Guitarras          | Verde        |
| Violões            | Laranja      |
| Vozes              | Amarelo      |
| Efeitos / ambiente | Roxo         |

---

## Ocultar tracks (desligar "solo" visual)

- Botão **`TCP`** (Track Control Panel) – controla quais elementos são exibidos no painel da track.
- Você pode **ocultar (hide)** tracks que não está usando no momento para limpar a visualização.
- Como fazer: clique com botão direito no cabeçalho da track > `Hide track` (ou use o gerenciador de layout).

> Isso **não desativa o áudio** – apenas remove a track da visualização temporariamente. Útil para projetos muito longos.

---

## Janela de Navegação (Navigator)

### Como abrir

- `View` > `Navigator`

### Para que serve

- Cria uma **miniatura (thumbnail)** de todo o projeto.
- Mostra a posição atual (retângulo branco/amarelo) dentro do projeto completo.
- Permite **clicar e arrastar** para navegar rapidamente por projetos longos.

### Quando usar

- Pouco útil para projetos pequenos (poucas tracks).
- **Muito útil** para projetos com muitas tracks e longa duração (ex: músicas com mais de 5 minutos, audiolivros, podcasts longos).

---

## Medidor de CPU (Performance Meter)

### Como abrir

- `View` > `Performance Meter` (ou `Ctrl + Alt + P`)

### O que mostra

| Coluna    | O que significa                                    |
| --------- | -------------------------------------------------- |
| **CPU**   | Uso total de processamento do Reaper               |
| **RAM**   | Uso de memória                                     |
| **Track** | Lista cada track com seu consumo individual de CPU |
| **FX**    | Consumo de cada plugin em cada track               |

### Como interpretar

- Valores altos (ex: uma track consumindo 30% da CPU) indicam que aquela track **pode ser renderizada** para aliviar o processamento.
- Se o CPU total ultrapassar 80-90%, você pode começar a ouvir **estalos e interrupções**.

### Ação recomendada

- Identifique a track com maior consumo.
- Renderize o áudio (se for instrumento virtual) ou freeze a track (alt + botão direito na track > `Freeze track`).

---

## Customização do Painel de Controle da Track (TCP)

### Acessando as opções de layout

- Clique com o botão direito em **qualquer área vazia do TCP** (onde ficam os controles da track).
- Ou vá em `Options` > `Layouts` > `Track Panel`.

### Exemplos de customização

| Elemento                            | O que ajustar                                        | Sugestão                                               |
| ----------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| **Volume fader**                    | Forma de exibição (botão redondo vs. barra vertical) | **Barra vertical** (mais clara para identificar nível) |
| **Pan knob**                        | Estilo do controle de posicionamento estéreo         | Pode ser ocultado se não for usado                     |
| **Botões (Mute, Solo, Record Arm)** | Tamanho e posição                                    | Ajustar conforme necessidade                           |
| **Metadata (valores numéricos)**    | Exibir ou ocultar números de dB                      | Ocultar para simplificar a visualização                |

### Por que customizar o TCP

- Evitar **poluição visual** (ex: dois controles de volume diferentes ao mesmo tempo).
- Deixar apenas o que você **realmente usa**.
- Trabalhar de forma mais **rápida e confortável**.

> **Talvez, seja melhor não trabalhar com botão redondo de volume** porque confunde com outros elementos; utilize a **barra vertical de volume** tradicional. Veja o que é melhor para você.

---

## Resumo visual da organização

| Ferramenta        | Atalho / Caminho                               | Função                          |
| ----------------- | ---------------------------------------------- | ------------------------------- |
| Colorir track     | Botão direito > `Track color`                  | Identificação visual por grupo  |
| Customizar cor    | `Set custom track color`                       | Criar paleta pessoal            |
| Navigator         | `View` > `Navigator`                           | Navegação em projetos longos    |
| Performance Meter | `View` > `Performance Meter` (ou `Ctrl+Alt+P`) | Monitorar CPU e RAM             |
| Layout do TCP     | Botão direito no TCP > `Layout`                | Ajustar aparência dos controles |

---

## Dica extra – salve seus layouts e cores como template

- Depois de organizar cores, pastas e layout do TCP, salve o projeto como **template**:
  - `File` > `Project Templates` > `Save project as template`
- Na próxima produção, abra o template e ele já virá com todas as suas cores e organização preferidas.

---

## Nota

> "Um projeto visualmente organizado, com cores, pastas e um TCP limpo, faz com que você trabalhe com muito mais concentração, mais conforto e mais rapidez. A mixagem flui melhor quando você não precisa ficar procurando onde está cada coisa."
