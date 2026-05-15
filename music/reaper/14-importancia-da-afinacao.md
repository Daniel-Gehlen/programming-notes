## A importância da afinação na produção musical

- A afinação é uma **preocupação global e constante** em toda a produção.
- Ela começa **antes da gravação**: instrumentos devem ser regulados com antecedência.
- Recursos de correção pós-gravação ainda são **imperfeitos** – a tecnologia não resolve 100%.
- **Planejamento é fundamental**: quanto menos correção você precisar fazer, melhor o resultado final.
- Para instrumentos de corda: ajuste o tom para o cantor e garanta que tudo esteja afinado antes de gravar.

> ⚠️ **Importante:** A edição de afinação serve para **melhorar uma performance já boa**, não para "salvar" uma gravação ruim.

---

## Afinação de voz – o dilema

| Aspecto              | Explicação                                                                                          |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| Complexidade         | É uma atividade que ultrapassa o nível "básico" – exige atenção e prática                           |
| Interface            | As informações gráficas costumam ser **confusas** e pouco amigáveis                                 |
| Softwares gratuitos  | Não existe no mercado uma opção gratuita que entregue a mesma qualidade dos softwares profissionais |
| Solução profissional | O software mais utilizado e recomendado é o **Melodyne** (da Celemony)                              |

---

## Os dois caminhos para afinação de voz no percurso

| Caminho                       | Ferramenta                        | Público-alvo                                 | Onde encontrar                |
| ----------------------------- | --------------------------------- | -------------------------------------------- | ----------------------------- |
| **Caminho básico (gratuito)** | ReaTune (plugin nativo do Reaper) | Iniciantes, sem investimento                 | Exemplo principal do percurso |
| **Caminho profissional**      | Melodyne                          | Quem busca resultado comercial de alto nível | Módulo de exemplos extras     |

---

## Método 1: ReaTune (nativo, gratuito)

### O que é o ReaTune

- Plugin de correção de pitch que já vem **nativamente** no Reaper .
- Funciona tanto em **modo automático** quanto em **modo manual**.
- O algoritmo é considerado **natural** e com poucos artefatos .

### Como acessar o ReaTune

1. Selecione a track de voz.
2. Clique no botão `FX`.
3. Na lista de plugins, procure e adicione **`ReaTune`** (da categoria Cockos).

### As três abas do ReaTune

| Aba                   | Função                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------- |
| **Tuner**             | Afinador – mostra a nota atual. Útil para afinar instrumentos antes de gravar                |
| **Correction**        | Configurações de **correção automática**: escala, tom, velocidade de ataque (attack time)    |
| **Manual Correction** | Correção **manual** – você desenha linhas azuis sobre o gráfico para definir a nota desejada |

### Modo Automático (Correction tab)

| Passo | Procedimento                                                                                  |
| ----- | --------------------------------------------------------------------------------------------- |
| 1     | Vá para a aba **`Correction`**                                                                |
| 2     | Marque a opção **`Automatic pitch correction`**                                               |
| 3     | Selecione a **escala/tom** da música (ex: C (Dó maior), A (Lá menor), etc.)                   |
| 4     | Ajuste o **`Attack time (ms)`** – valores mais altos soam mais naturais (ex: 50-100 ms)       |
| 5     | Algoritmo de correção: pode ser alterado (ex: `élastique 2.1 pro`) para diferentes resultados |

> **Como funciona:** O ReaTune "puxa" as notas cantadas para as notas mais próximas da escala selecionada. Se você cantou razoavelmente bem (na nota correta ou muito perto), a correção já faz uma boa diferença .

### Modo Manual (Manual Correction tab)

| Passo | Procedimento                                                                                                               |
| ----- | -------------------------------------------------------------------------------------------------------------------------- |
| 1     | Vá para a aba **`Manual Correction`**                                                                                      |
| 2     | Marque **`Manual pitch correction`** (habilita a correção manual)                                                          |
| 3     | Marque **`Track/update pitch graph`** – o ReaTune desenha uma **linha vermelha** representando o pitch real que ele "ouve" |
| 4     | Toque a música – o gráfico vai se preenchendo com a linha vermelha                                                         |
| 5     | Com o mouse, **desenhe linhas azuis** sobre a linha vermelha – essas linhas representam a correção desejada                |
| 6     | Opções adicionais: `Prevent octave shifts` (evita que o plugin interprete a nota na oitava errada)                         |

### Interpretação do gráfico do ReaTune

| Elemento visual                           | Significado                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------------ |
| **Linhas verticais**                      | Variações rápidas de pitch (ex: vibrato, transições entre notas)               |
| **Linhas horizontais (trechos estáveis)** | Notas sustentadas – são as mais fáceis de corrigir                             |
| **Linha vermelha**                        | Pitch real que o plugin detectou no áudio                                      |
| **Linha azul**                            | Correção desenhada pelo usuário – o plugin tenta levar o pitch para essa linha |

### Dicas práticas para usar ReaTune

- **Marque todas as quatro opções** na aba Manual Correction para melhor funcionamento .
- Se a correção não estiver rápida o suficiente, reduza o `Attack time` na aba Correction (ex: 30 ms) .
- Ative a opção **`Preserve formants`** para manter o caráter natural da voz (evita o efeito "Mickey Mouse") .
- **Cuidado com consoantes** (S, F, CH) – a correção de pitch pode criar um **"buzzing" (zumbido)** indesejado. Uma técnica avançada é usar envelopes de pitch para desligar a correção durante as consoantes .

### Limitações do ReaTune (em comparação com Melodyne)

| Aspecto                     | ReaTune                                   | Melodyne                                               |
| --------------------------- | ----------------------------------------- | ------------------------------------------------------ |
| Visualização                | Linha contínua (gráfico)                  | Blobs (bolhas) – cada sílaba/nota é um objeto separado |
| Correção de pitch drift     | Limitada                                  | Sim (correção da deriva dentro da nota)                |
| Controle de vibrato         | Não                                       | Sim                                                    |
| Formant shift               | Não (apenas via algoritmo de preservação) | Sim                                                    |
| Edição polifônica (acordes) | Não                                       | Sim (nas versões Editor e Studio)                      |

---

## Método 2: Melodyne (profissional)

### O que é o Melodyne

- Software de manipulação de pitch, timing e formante, desenvolvido pela Celemony .
- Considerado o **padrão da indústria** para correção de afinação.
- Permite edição **nota por nota** (cada sílaba/vocal vira um "blob" independente) .

### Versões do Melodyne

| Versão        | Preço (aproximado) | Funcionalidades principais                                                   |
| ------------- | ------------------ | ---------------------------------------------------------------------------- |
| **Essential** | $99                | Correção de pitch e timing em uma track. Correção automática para uma escala |
| **Assistant** | $249               | Pitch drift, formante, vibrato, amplitude, conversão áudio → MIDI            |
| **Editor**    | $499               | DNA (Direct Note Access) – edita notas individuais dentro de acordes         |
| **Studio**    | $849               | Múltiplas tracks simultâneas, upgrades vitalícios gratuitos                  |

### Por que usar o Melodyne

- É o software utilizado profissionalmente em estúdios ao redor do mundo.
- A versão **Essential** já é suficiente para a maioria das produções de voz (correção nota por nota).
- A interface de "blobs" é mais intuitiva do que a linha contínua do ReaTune.
- Oferece **controle de formante**, que preserva o caráter natural da voz mesmo após mudanças grandes de pitch .

> **Atenção:** Melodyne não é gratuito. O percurso oferece um **exemplo extra** demonstrando seu uso, mas o caminho principal utiliza ReaTune para não exigir seu investimento.

---

## Nota

### Sobre o planejamento (mais importante que a correção)

> "A afinação começa antes da gravação. Regule os instrumentos, pratique a música, treine a voz. Chegue no estúdio com tudo pronto. Quanto menos edição de afinação você precisar fazer, melhor."

### Sobre os resultados

- Com ReaTune (modo automático): se você cantou **razoavelmente bem** (próximo da nota certa), a correção já resolve e melhora bastante o resultado final.
- Com Melodyne: você consegue um resultado **mais refinado e profissional**, com controle sobre cada detalhe da performance.
- Nenhum dos dois resolve uma gravação muito desafinada – o ideal é **regravar**.

### Resumo visual das opções

| Situação                                               | Recomendação                                     |
| ------------------------------------------------------ | ------------------------------------------------ |
| Iniciante, sem investimento, voz razoavelmente afinada | **ReaTune automático** + ajustes manuais simples |
| Quer controle mais fino, sem investir                  | **ReaTune manual** (desenhar linhas azuis)       |
| Busca resultado profissional, pode investir            | **Melodyne Essential** (ou versão superior)      |
| Gravação muito desafinada                              | **Não confie na correção – regrave**             |
