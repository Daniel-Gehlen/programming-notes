## Reta final da fase de gravação

Já foram vistos os três modos principais de gravação:

1. **Gravação em linha** (instrumentos reais: contrabaixo, guitarra)
2. **Gravação MIDI / instrumentos virtuais** (bateria, teclados)
3. **Gravação com microfone** (voz, violão)

Neste ponto, o projeto tem o **esqueleto da música** estruturado: ritmo (bateria), harmonia (baixo, guitarras) e melodia (voz).

---

## Organização do projeto – uso de pastas (folders) no Reaper

### Por que organizar?

- Projetos com muitas tracks ficam bagunçados.
- Pastas ajudam a agrupar instrumentos relacionados (ex: todas as guitarras em uma pasta).

### Como criar uma pasta no Reaper

| Passo | Procedimento                                                                                          |
| ----- | ----------------------------------------------------------------------------------------------------- |
| 1     | Selecione as tracks que deseja agrupar (clique na primeira, segure `Shift`, clique na última)         |
| 2     | Arraste as tracks selecionadas **sobre** a track que será a pasta principal                           |
| 3     | Quando a track de destino ficar com uma **barra azul**, solte o mouse                                 |
| 4     | A track principal se torna uma **pasta (folder)** e as outras ficam recuadas (indentadas) dentro dela |

### Efeito visual

- A track-pasta tem um ícone de **pasta** (ou fica com uma barra azul).
- As tracks filhas aparecem com **recuo** à direita.
- O áudio das tracks filhas é roteado automaticamente para a track-pasta.

### Organização feita no projeto para o percurso

| Pasta     | Tracks contidas                                 |
| --------- | ----------------------------------------------- |
| Bateria   | Track de bateria virtual                        |
| Baixo     | Track do contrabaixo                            |
| Guitarras | Guitarra base L, guitarra base R, guitarra solo |
| Vozes     | Voz principal (e possíveis backing vocals)      |
| Violões   | Violão L, violão R                              |

### Tracks desativadas (backup)

- Tracks que não serão usadas daqui para frente podem ser **colocadas em uma pasta de backup**.
- Exemplo: gravações feitas com outro microfone (ex: HG) que não serão utilizadas no projeto final.

---

## Automação (envelopes) – introdução

### O que é automação?

- Controlar parâmetros que **mudam automaticamente ao longo da música**.
- Exemplos: volume subindo gradualmente, pan (posição estéreo) oscilando, efeitos ligando/desligando.

### Parâmetros que podem ser automatizados

| Parâmetro                    | Efeito                                               |
| ---------------------------- | ---------------------------------------------------- |
| Volume                       | Criar fades, crescendos, decrescendos                |
| Pan (posicionamento estéreo) | Fazer o som "passear" entre esquerda e direita       |
| Parâmetros de plugins        | Velocidade de oscilação, intensidade de efeito, etc. |

### Exemplo: automação de pan

1. Clique no botão `Envelopes` (ou `Trim` na track)
2. Marque a opção `Pan` para ativar o envelope
3. Uma linha horizontal aparece no item da track
4. Clique na linha para criar **pontos (pontos de automação)**
5. Arraste os pontos para cima/baixo – isso controla o pan (ex: -100% = esquerda, +100% = direita)
6. O movimento entre os pontos cria uma **variação suave ou abrupta** conforme a distância entre eles

### Parâmetros adicionais de automação (exemplo em um plugin)

| Controle                   | O que faz                         |
| -------------------------- | --------------------------------- |
| Taxa de oscilação (Rate)   | Velocidade com que o efeito varia |
| Intensidade (Depth)        | Força da variação                 |
| Rotação (Phase / Rotation) | Move o sinal no campo estéreo     |

> **Uso comum:** renovar a atenção do ouvinte, criando movimento e variação na música.

---

## Encerramento da fase de gravação

### O que foi alcançado

- Material **gravado e travado** (definido)
- Timbres **bons** (dentro do possível com os equipamentos usados)
- Execuções **aceitáveis** (algumas melhores que outras)

### O que vem a seguir – fase de edição

| Fase             | O que será feito                                                                 |
| ---------------- | -------------------------------------------------------------------------------- |
| **Edição**       | Corrigir pequenos deslizes, ajustar tempo, limpar ruídos, afinar (se necessário) |
| **Mixagem**      | Tratar a matéria-prima, equilibrar volumes, adicionar efeitos                    |
| **Masterização** | Finalizar o áudio para padrão comercial                                          |

> "Tudo isso vai virar matéria-prima para a gente tratar, mixar e depois finalizar o áudio."

---

## Resumo visual

### Criar pasta (folder)

```
Selecionar tracks (Shift + clicar) → Arrastar sobre a track-pasta → Barra azul → Soltar
```

### Ativar envelope de pan

```
Botão Envelopes/Trim na track → Marcar "Pan" → Linha aparece no item → Clicar para criar pontos → Arrastar pontos
```

### Estrutura final do projeto organizado

```
Projeto
├── Bateria (pasta)
│   └── Bateria virtual
├── Baixo (pasta)
│   └── Contrabaixo
├── Guitarras (pasta)
│   ├── Guitarra base L
│   ├── Guitarra base R
│   └── Guitarra solo
├── Vozes (pasta)
│   └── Voz principal
├── Violões (pasta)
│   ├── Violão L
│   └── Violão R
└── Backup (pasta - tracks desativadas)
    └── (tracks não utilizadas)
```

---

## Próximo passo

A fase de gravação está encerrada. O percurso seguirá para a **fase de edição**, onde os pequenos defeitos serão corrigidos antes da mixagem e masterização.
