## Edição após a gravação

O material já foi gravado (áudio e MIDI). Agora a fase é **edição**: corrigir, ajustar e melhorar as performances antes da mixagem.

---

## Organização da edição por tipo de material

| Tipo de material                         | Abordagem de edição                                                     |
| ---------------------------------------- | ----------------------------------------------------------------------- |
| **Áudio** (voz, violão, baixo, guitarra) | Correção de tempo, limpeza, cortes, crossfades                          |
| **MIDI** (bateria virtual, teclados)     | Ajuste de posição das notas (timing), duração, intensidade (velocidade) |

O foco deste conteúdo é a **edição MIDI**, especificamente da bateria virtual.

---

## Editor MIDI no Reaper – visão geral

### Como abrir o editor MIDI

- Dê **duplo clique** em um item MIDI (bloco na track)
- Ou selecione o item e pressione `Ctrl + Alt + E` (Windows)

### Componentes principais do editor MIDI

| Elemento                                  | Função                                                                                                          |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Teclado vertical (piano roll)**         | Mostra as notas organizadas por altura (grave no fundo, agudo no topo)                                          |
| **Grade (grid)**                          | Linhas verticais que representam a divisão rítmica do tempo                                                     |
| **Barras de notas**                       | Cada barra representa uma nota tocada. Posição horizontal = momento, altura = nota/pitch, comprimento = duração |
| **Painel inferior (velocidade/dinâmica)** | Barras verticais que representam a intensidade de cada nota (velocidade)                                        |

---

## Visualização – modos de exibição das notas

| Modo                        | Descrição                                                          | Melhor para                                         |
| --------------------------- | ------------------------------------------------------------------ | --------------------------------------------------- |
| **Retângulos (rectangles)** | Mostra a duração exata da nota (quanto tempo a tecla foi segurada) | Instrumentos como piano, teclado (duração importa)  |
| **Triângulos/diamantes**    | Mostra apenas o início da nota                                     | Bateria (duração não importa, o som toca até o fim) |

No percurso, para **bateria**, use o modo que não mostra duração (ex: triângulos).

---

## Grid (grade rítmica) – configuração e entendimento

### Como acessar o grid

- Botão **Grid** no editor MIDI ou na barra de ferramentas principal
- Atalho: `Alt + G` (liga/desliga) e `Ctrl + Shift + G` (ajusta resolução)

### Resolução do grid – o que significa?

| Subdivisão | Significado                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| 1/4        | Semínimas (4 por compasso em 4/4)                                           |
| 1/8        | Colcheias (8 por compasso)                                                  |
| 1/16       | Semicolcheias (16 por compasso) – **padrão para maioria da música popular** |
| 1/16T      | Semicolcheias tercinadas (6 notas por tempo) – usado em ternários/swing     |

### Como ler a grade no Reaper

- Os **números maiores** (1, 2, 3, 4...) marcam a **cabeça do compasso**
- Em 4/4, cada compasso tem 4 tempos. Os números intermediários (ex: 1.2, 1.3, 1.4) marcam as **subdivisões dentro de cada tempo**

> Regra prática: para 90% do que você vai editar, use **grid 1/16**.

### Exceção – quando mudar o grid

- Se você gravou uma **tercina** (ex: 3 notas no lugar de 2) ou **virada rápida** de bateria
- Mude temporariamente o grid para **1/16T** (tercinas) ou **1/32** (notas mais rápidas)
- No exemplo do percurso, pode ser preciso mudar de "Straight" (reto) para **ternário** porque a célula rítmica, talvez, não bata com o grid 1/16

---

## Edição de posição das notas (timing)

### Método principal – Quantização

| Método                            | Como fazer                                                                  |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Quantização rápida**            | Selecione as notas → pressione `Q`                                          |
| **Quantização com configurações** | Selecione as notas → `Edit` > `Quantize...` → ajuste resolução, swing, etc. |

### O que a quantização faz

- Move cada nota para a **linha de grid mais próxima**, corrigindo erros de tempo.

### Quando NÃO usar quantização 100%

- Bateria muito "humanizada" (que precisa de pequenas variações)
- Música com swing natural
- Nesses casos, use quantização com **força parcial** (ex: 50% a 80%) – as notas são puxadas em direção ao grid, mas mantêm parte da variação original.

### Ajuste manual fino

1. Desative o **Snap** (ícone de imã) para mover notas livremente
2. Clique e arraste a nota horizontalmente para a posição desejada
3. Reative o Snap depois para voltar ao grid

---

## Edição de duração das notas

- Para bateria, a duração **não importa** (o som toca completo independentemente de quanto tempo a nota aparece)
- Para outros instrumentos (piano, cordas, sintetizadores), a duração afeta o som
- Como ajustar:
  - Selecione a nota (clique na barra)
  - Arraste a **borda direita** da barra para esquerda/direita

---

## Edição de intensidade (dinâmica) – Velocidade (Velocity)

### O que é Velocity

- Parâmetro que representa a **força/intensidade** com que a nota foi tocada.
- Varia de **0 a 127**.
- Quanto maior o número, mais "forte" o som (mais intensidade, mais brilho, etc., dependendo do instrumento virtual).

### Visualização da Velocity no Reaper

| Formato de exibição | Como aparece                                                    |
| ------------------- | --------------------------------------------------------------- |
| Retângulos          | Barras verticais abaixo da grade. Altura da barra = intensidade |
| Linhas              | Linhas verticais na parte inferior (altura = intensidade)       |

### Como ajustar a Velocity

#### Método 1 – Arrastar barras

- No painel inferior, clique e **arraste para cima/baixo** a barra de cada nota

#### Método 2 – Desenhar curva

1. Selecione a ferramenta de desenho (ou segure `Ctrl` + arraste o mouse)
2. Desenhe uma curva sobre as barras – o Reaper ajusta todas as notas daquela região
3. Isso cria **variações orgânicas** de intensidade

#### Método 3 – Escalar (ajustar proporcionalmente)

- Selecione várias notas
- Segure `Shift` + arraste uma das barras – todas as selecionadas são ajustadas proporcionalmente

### Recomendações práticas para bateria

- Notas mais fortes (ex: caixa no backbeat, bumbo no tempo forte) → velocidade alta (100-127)
- Notas mais fracas (ex: chimbal em semicolcheias, viradas) → velocidade média (60-90)
- **Evite** velocidade máxima (127) em todas as notas – isso soa robótico
- O próprio Reaper, quando você desenha notas com o mouse, escreve tudo a 127 por padrão – **ajuste manualmente depois**

---

## Filtro de eventos – trabalhar com subconjuntos de notas

### O que faz

- Mostra **apenas** as notas que atendem a um critério (ex: velocidade acima de 100, notas abaixo de C3, etc.)
- As notas filtradas **não são apagadas** – apenas escondidas temporariamente.

### Como usar

1. No editor MIDI, clique no botão **`Filter Events`** (ícone de funil)
2. Defina os critérios (ex: `Velocity` > `100`)
3. Apenas as notas com velocidade acima de 100 ficam visíveis
4. Você pode editar, deletar ou modificar **apenas essas notas**
5. Para voltar a ver todas, desative o filtro

### Para que serve

- Manipular partes específicas do arranjo sem afetar outras.
- Exemplo: selecionar todas as notas muito fracas (velocity baixa) e aumentá-las.

---

## Resumo dos principais atalhos e funções para edição MIDI

| Ação                       | Como fazer                              |
| -------------------------- | --------------------------------------- |
| Abrir editor MIDI          | Duplo clique no item MIDI               |
| Ligar/desligar Snap (grid) | `Alt + S` ou ícone de imã               |
| Mudar resolução do grid    | Botão Grid na barra                     |
| Quantizar                  | Selecionar notas → `Q`                  |
| Selecionar todas as notas  | `Ctrl + A` no editor MIDI               |
| Deletar nota               | Selecionar → `Delete`                   |
| Ajustar velocity           | Arrastar barra vertical para cima/baixo |
| Desenhar curva de velocity | `Ctrl` + arrastar sobre as barras       |
| Filtrar eventos            | Botão `Filter Events` (funil)           |

---

## Nota

> "Edição de tempo e edição de dinâmica são as duas grandes áreas da edição MIDI. Limpeza e imaginação são abordagens diferentes para cada situação."

| Tipo de edição                    | Objetivo                                                            |
| --------------------------------- | ------------------------------------------------------------------- |
| **Edição de tempo (timing)**      | Corrigir erros de posicionamento das notas (antes/depois do grid)   |
| **Edição de dinâmica (velocity)** | Ajustar intensidade, tornar a performance mais natural e expressiva |
