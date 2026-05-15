## Edição de áudio vs. edição MIDI

| Tipo                | Foco principal                                          | Ferramentas/abordagem                                               |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------- |
| **Edição MIDI**     | Tempo (posição), dinâmica (velocity), duração           | Quantização, ajuste manual de notas                                 |
| **Edição de áudio** | Tempo (transientes), limpeza (ruídos, cortes), afinação | Cortes (splits), deslocamento de itens, crossfades, ajuste de pitch |

A abordagem no áudio é **diferente**: não há um botão de "quantização automática" que funcione de forma confiável. O trabalho é mais manual e criterioso.

---

## Edição de tempo em áudio – conceitos fundamentais

### Transiente

- É o **pico inicial de um som**, onde ocorre o ataque (ex.: a pancada da bateria, o início de uma nota de violão).
- Na forma de onda, o transiente aparece como um **pico visível**.
- A edição de tempo no áudio consiste em alinhar esses **transientes** à grade rítmica.

### Visualização da forma de onda no Reaper

| Ação                               | Como fazer                        |
| ---------------------------------- | --------------------------------- |
| Aumentar zoom horizontal           | `+` (mais) ou rolagem do mouse    |
| Diminuir zoom horizontal           | `-` (menos)                       |
| Aumentar zoom vertical (amplitude) | Segurar `Shift` + seta para cima  |
| Diminuir zoom vertical             | Segurar `Shift` + seta para baixo |

> **Importante:** O zoom vertical **não altera o volume** – é apenas uma ampliação visual para enxergar melhor os transientes.

### Exemplo visual

- Formas de onda com **picos bem definidos** (ex.: bateria, baixo com ataque) são fáceis de editar.
- Formas de onda **borradas** ou sem picos claros (ex.: guitarra distorcida com muito sustain) são mais difíceis.

---

## Ferramentas e métodos para edição de tempo no áudio

### Método 1 – Cortar e deslocar itens (recomendado)

Este é o método **mais simples e eficaz**.

| Passo | Procedimento                                                                                  |
| ----- | --------------------------------------------------------------------------------------------- |
| 1     | Identifique um trecho que está fora do tempo                                                  |
| 2     | Posicione o cursor no ponto de corte (antes do transiente)                                    |
| 3     | Pressione `S` (Split) para cortar o item                                                      |
| 4     | Corte também **depois** do trecho que será movido                                             |
| 5     | Clique no item cortado e arraste-o para a esquerda ou direita, alinhando o transiente à grade |
| 6     | Ajuste o item vizinho (arraste também se necessário)                                          |

### Método 2 – Alongamento/compressão de tempo (uso limitado)

- O Reaper permite **esticar ou comprimir** um item de áudio sem cortar.
- Como fazer: segure `Alt` (Windows) / `Option` (Mac) + arraste a borda do item.
- **Quando usar:** situações em que as notas estão muito coladas (ex.: vozes, violão) e o corte é difícil ou gera artefatos.
- **Desvantagem:** pode causar **artefatos** (distorções, alteração de timbre) e deve ser usado com moderação.

### Método 3 – Automação de tempo (não recomendado para iniciantes)

**Não recomenda-se** o uso de quantização automática de áudio (ex.: "audio quantize" ou "warp") para iniciantes. A abordagem manual é mais confiável.

---

## Crossfade – suavizando transições entre itens cortados

### O que é crossfade

- Quando você une dois itens de áudio após um corte e deslocamento, o Reaper pode criar um **fade cruzado**.
- O volume do primeiro item **decai** enquanto o volume do segundo item **sobe** suavemente.

### Como criar um crossfade manual

1. Após cortar e deslocar os itens, posicione um ao lado do outro (podem se sobrepor levemente).
2. Selecione os dois itens.
3. Pressione `X` (atalho padrão para crossfade).
4. Ajuste a duração do crossfade arrastando a região de transição.

### Verificação de qualidade da emenda

- Ouça atentamente o ponto de emenda.
- Verifique se não há **clicks, estalos ou mudanças bruscas de volume/fase**.
- Para instrumentos percussivos (bateria), a emenda precisa ser **muito precisa** – o transiente deve estar alinhado exatamente à grade.

---

## Limpeza de áudio

### O que é "limpeza"

- Remover ruídos indesejados: respirações, ruídos de dedo no violão, chiados, etc.
- Remover trechos que não deveriam estar ali (ex.: silêncio longo entre frases).

### Como fazer

1. Identifique o trecho indesejado na forma de onda.
2. Posicione o cursor no início e no fim do trecho.
3. Pressione `S` (Split) para isolar o trecho.
4. Selecione o trecho isolado e pressione `Delete`.

### Importante

- A limpeza deve servir para **apenas melhorar** uma performance já boa, não para "salvar" uma gravação ruim.
- Se a gravação foi mal executada, a edição **não vai consertar** – é melhor regravar.

---

## Afinação de áudio (pitch correction)

### Importância

- Principalmente para **voz** (e também para violão, baixo, etc. se houver problemas).
- Uma voz desafinada compromete toda a música.

### Como acessar o ajuste de pitch no Reaper

1. Selecione o item de áudio.
2. Pressione `F2` para abrir **Item Properties** (Propriedades do Item).
3. Ajuste o parâmetro **`Pitch adjust (semitones)`** – arraste para cima/baixo para alterar o tom.
4. Para ajuste mais fino (centavos), use **`Pitch adjust (cents)`** (100 cents = 1 semitom).

### Método mais avançado: ReaTune (plugin nativo)

1. Selecione a track de voz.
2. Clique no botão `FX` e adicione `ReaTune`.
3. Ative a opção **`Automatic pitch correction`**.
4. Defina a **escala/tom** da música (ex.: Dó maior, Lá menor).
5. Ajuste a **velocidade de correção** (Attack): valores mais lentos soam mais naturais.
6. Visualize a afinação no **gráfico** (linha vermelha = pitch original, linha corrigida em azul).

> **Dica:** Use correção automática com moderação. Correção muito forte soa robótica (efeito "T-Pain").

---

## Nota

### Planejamento é fundamental

- A edição **não salva** uma gravação ruim.
- O ideal é chegar para gravar com a música **praticada** e **compatível com seu nível técnico**.
- Invista tempo no "dever de casa" antes de apertar o Record.

### Use os olhos e os ouvidos juntos

- Com experiência, você consegue **identificar transientes fora do tempo apenas olhando** a forma de onda.
- Iniciantes devem confiar **mais no ouvido** do que no visual.
- Sempre ouça depois de cada ajuste para verificar o resultado.

### Casamento normal da gravação

- Antes de editar, ouça a gravação inteira e identifique **apenas os trechos que realmente precisam de ajuste**.
- Não edite por editar – isso pode criar mais problemas do que soluções.

---

## Resumo visual dos atalhos para edição de áudio

| Ação                         | Atalho (Windows)               |
| ---------------------------- | ------------------------------ |
| Zoom horizontal              | `+` / `-` ou rolagem do mouse  |
| Zoom vertical (amplitude)    | `Shift` + seta para cima/baixo |
| Split (cortar)               | `S`                            |
| Crossfade entre itens        | Selecionar itens → `X`         |
| Propriedades do item (pitch) | `F2`                           |
| Alongar/esticar item         | `Alt` + arrastar borda         |
| Desfazer última ação         | `Ctrl + Z`                     |

---

## Nota

> "A grande lição da edição de áudio é a importância de fazer uma boa relação entre tempo e execução. O ideal é que a edição sirva apenas para melhorar um pequeno detalhe, e não para salvar uma gravação que foi mal feita."
