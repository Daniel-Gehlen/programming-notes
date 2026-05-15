## Duas configurações antes de começar a gravar

1. **Buffer** – relacionado à velocidade de resposta (latência)
2. **Metrônomo** – auxílio rítmico para gravação

---

## 1. Configuração de buffer (latência)

### O que é latência?

- É o **atraso** entre a execução de uma nota (ex: tocar na guitarra) e a audição do som no fone ou caixa de som.
- Causa: o sistema processa pacotes de informação internamente antes de entregar à saída de áudio.

### Quando a latência atrapalha?

- Na **fase de gravação**: você precisa ouvir em tempo real. Atrasos atrapalham a performance.
- Na **fase de mixagem**: latências maiores são toleráveis, pois você não está gravando em tempo real.

### Onde configurar o buffer

| Método                            | Caminho                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------- |
| **Direto no painel da interface** | Painel de controle do driver da interface (ex: ASIO4ALL ou driver da sua placa) |
| **Dentro do Reaper**              | `Preferences` > `Audio` > `Device` > botão `ASIO Configuration`                 |

### Valor recomendado para gravação

- **256 samples** – suficiente para tocar sem atraso perceptível na maioria dos casos.
- Se seu computador for potente, pode usar valores menores (ex: 128) para menos latência.
- Se o computador não der conta (estalos, clicks), aumente o buffer (ex: 512).

> ⚠️ Buffer menor = menos latência, mas exige mais processamento do computador.

---

## 2. Configuração do metrônomo (click)

### Por que usar o metrônomo?

- Para manter o **tempo (andamento)** durante as gravações.
- Garante que todos os instrumentos fiquem sincronizados.

### Acesso ao metrônomo no Reaper

- Botão na barra de transporte: ícone de **metrônomo** (ou atalho `Alt + Shift + C`)

### Parâmetros configuráveis do metrônomo

| Parâmetro                          | Descrição                                               |
| ---------------------------------- | ------------------------------------------------------- |
| **Volume da batida primária**      | Volume da primeira batida do compasso (acentuada)       |
| **Volume das batidas secundárias** | Volume das demais batidas do compasso                   |
| **Padrão de acentuação**           | Possibilidade de mudar o som ou acentuação das batidas  |
| **Pré-contagem (count-in)**        | Número de compassos que tocam antes de começar a gravar |

### Como funciona a pré-contagem (count-in)

- Exemplo: configurar **2 compassos** de pré-contagem.
- Ao apertar `Record` (ou `R`), o metrônomo toca por 2 compassos.
- Só **depois** desses 2 compassos é que a gravação começa de fato.
- Isso dá tempo para o músico se preparar antes de entrar.

> Localização no Reaper: `Options` > `Metronome settings` (ou clicar com o botão direito no ícone do metrônomo)

---

## Dica

1. Criar uma track para o metrônomo separada (em vez de usar o click padrão).
2. Colocar o cursor no início do projeto.
3. Inserir um **item MIDI** com a batida do metrônomo.
4. Vantagens:
   - Ajuste fácil de volume da batida a qualquer momento.
   - Possibilidade de silenciar trechos específicos da música.
   - Controle visual da grade rítmica.

---

## Resumo visual dos caminhos

### Buffer

```
Preferences (Ctrl+P) → Audio → Device → ASIO Configuration
→ Ajustar Buffer Size (ex: 256 samples)
```

### Metrônomo

```
Barra de transporte → ícone do metrônomo (ou Alt+Shift+C)
→ Clique direito → Metronome settings
├── Volume primário / secundário
├── Count-in: 2 compassos (recomendado)
└── Ativar "Enable metronome"
```

---

## E agora?

Após essas duas configurações, o percurso avança para a **parte musical**:

- Gravação dos arranjos
- Especificidades de cada instrumento (bateria virtual, baixo, guitarra, violão, voz)
