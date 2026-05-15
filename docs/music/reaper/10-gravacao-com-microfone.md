## Gravação com microfone – visão geral

O processo é **praticamente o mesmo** da gravação por sinal de linha (contrabaixo, guitarra). A diferença está no tipo de sinal captado e no ajuste de ganho.

---

## Passo a passo da gravação com microfone no Reaper

| Etapa                   | Procedimento                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------- |
| 1. Conectar o microfone | Plugue o microfone na interface de áudio usando cabo XLR                           |
| 2. Criar uma track      | `Track` > `Insert New Track` (ou `Ctrl + T`)                                       |
| 3. Armar a track        | Clique no botão `Record Arm` (vermelho)                                            |
| 4. Selecionar a entrada | Escolha o canal da interface onde o microfone está conectado (ex: `Input 1`)       |
| 5. Ajustar o ganho      | Toque/fale e gire o knob de ganho na interface até os picos atingirem nível seguro |
| 6. Gravar               | Clique em `Record` na barra de transporte                                          |

---

## Ajuste de ganho para microfone – níveis recomendados

| Tipo de fonte sonora   | Nível de pico recomendado | Observação                              |
| ---------------------- | ------------------------- | --------------------------------------- |
| Voz (canto)            | Entre **-10 dB e -6 dB**  | Deixar margem para picos mais fortes    |
| Violão                 | Entre **-12 dB e -8 dB**  | Instrumento acústico tem dinâmica ampla |
| Fontes muito sensíveis | Mais baixo (ex: -18 dB)   | Caso haja risco de clipagem             |

> **Margem de segurança:** sempre deixar espaço até 0 dB (teto) para evitar distorção.

---

## Microfones dinâmicos vs. condensadores

| Característica                              | Dinâmico                       | Condensador               |
| ------------------------------------------- | ------------------------------ | ------------------------- |
| Sensibilidade                               | Menor                          | Maior                     |
| Capta reflexões do ambiente                 | Menos                          | Mais                      |
| Resistência (físico)                        | Mais robusto                   | Mais frágil               |
| Preço                                       | Mais barato                    | Mais caro                 |
| Uso em home studio (ambientes não tratados) | Vantagem (pega menos reflexão) | Pode pegar muito ambiente |

> **Não existe "melhor" ou "pior"** – são ferramentas diferentes para situações diferentes.

---

## Microfones USB – vale a pena?

| Aspecto                      | Explicação                                                                                   |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| O que é                      | Microfone com cápsula + pré-amplificador + conversor A/D + interface USB embutidos           |
| Proposta                     | Uso simplificado, não necessariamente produção musical profissional                          |
| Como usar no Reaper          | Selecionar o microfone USB como dispositivo de entrada no `Audio > Device`                   |
| Recomendação para o percurso | Se você já tem, use. Se for investir, prefira um microfone XLR padrão com interface separada |

---

## Posicionamento do microfone – técnicas básicas

### Distância da fonte

| Fonte  | Distância recomendada | Efeito                                                                  |
| ------ | --------------------- | ----------------------------------------------------------------------- |
| Voz    | 10 a 20 cm            | Capta corpo e presença, sem excesso de proximidade (efeito proximidade) |
| Violão | 10 a 20 cm            | Equilíbrio entre corpo e ataque                                         |

### Efeito de eixo (off-axis)

- Quando o microfone é **deslocado do eixo** (não apontado diretamente para a fonte), há uma **mudança nas frequências captadas**.
- Aplicação prática: se a voz ou violão estiverem **estridentes (agudos excessivos)**, desloque levemente o microfone para fora do eixo para suavizar.

### Posição para violão (no percurso)

- Posicione microfones para captar violão em **L (esquerda) e R (direita)** – técnica de gravação estéreo.

---

## Exemplo prático do percurso

| Instrumento   | Método de gravação                                    |
| ------------- | ----------------------------------------------------- |
| Bateria       | Virtual (MIDI)                                        |
| Contrabaixo   | Sinal de linha (real)                                 |
| Guitarra base | Real, com simulador de amplificador (L e R – dobrada) |
| Guitarra solo | Real                                                  |
| Voz principal | Microfone condensador                                 |
| Violão        | Microfone condensador (captado em estéreo – L e R)    |

---

## Dica de edição – múltiplos takes

No Reaper, você pode gravar várias versões (takes) de um mesmo trecho:

- Grave uma passagem.
- Grave novamente sobre o mesmo trecho – o Reaper empilha como takes diferentes.
- Para escolher o melhor take:
  1. Selecione o item com múltiplos takes.
  2. Use `T` e `Shift + T` para navegar entre os takes.
  3. Ou clique com o botão direito no item > `Take` > escolha o take desejado.

---

## Seleção de múltiplos itens no Reaper

- Clique com o botão direito e **arraste** para criar uma seleção retangular.
- Ou segure `Ctrl` (Windows) / `Cmd` (Mac) e clique em itens individuais.
- Após selecionar, você pode aplicar ações a todos os itens selecionados.

---

## Avaliação sobre os microfones para serem usados no percurso

| Microfone                         | Tipo        | Avaliação                                                                                             |
| --------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| Microfone dinâmico G3S (voz)      | Dinâmico    | Muito útil, barato, bom para home studio                                                              |
| Microfone condensador HG (violão) | Condensador | Não é ideal para violão, mas possível de usar. Som um pouco "numeral" (agudo demais) nos médios-altos |
| Microfone condensador MXL         | Condensador | Som mais encorpado, médios mais agradáveis                                                            |

> Conclusão: mesmo com um microfone não ideal para violão, é possível obter um resultado **honesto e utilizável**, especialmente para iniciantes.

---

## Resumo visual

### Fluxo da gravação com microfone

```
Microfone (XLR) → Interface (pré + conversor) → USB → Computador → Reaper (track armada, input correto, ganho ajustado)
```

### Ajustes essenciais

| Parâmetro     | Valor recomendado                           |
| ------------- | ------------------------------------------- |
| Ganho (picos) | Entre -12 dB e -6 dB                        |
| Distância     | 10 a 20 cm                                  |
| Eixo          | Direto ou levemente deslocado se estridente |

---

## Nota

> "Se você já tem um microfone USB, use. Se for investir, prefira um microfone padrão com interface separada. Não é o microfone caro que faz o resultado – é a técnica e o conhecimento."
