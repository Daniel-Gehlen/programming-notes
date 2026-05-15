## Três aspectos principais da configuração do projeto

1. **Qualidade da gravação** (resolução de áudio digital)
2. **Parâmetros musicais** (andamento, tom)
3. **Organização dos arquivos** (pasta do projeto)

---

## 1. Qualidade da gravação – Resolução de áudio digital

Quando um sinal analógico (microfone, instrumento) entra na interface de áudio, ele é convertido em dados digitais. Essa conversão é feita por meio de **amostras** (pedacinhos do sinal original). Quanto mais amostras e quanto maior o tamanho delas, maior a qualidade e maior o tamanho do arquivo.

### Configurações recomendadas no Reaper

Acesse: `File` > `Project Settings` (ou atalho `Alt + Enter`)

| Parâmetro            | Nome no Reaper                                                       | Valor recomendado                                                                 |
| -------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Taxa de amostragem   | `Project sample rate`                                                | **44.100 Hz** ou **48.000 Hz** (48 kHz é o padrão atual para gravação)            |
| Profundidade de bits | `Format` (ao salvar/exportar) ou definido pela interface na gravação | **24 bits** (ideal) ou **16 bits** (mínimo aceitável para qualidade profissional) |

> **Observação importante:** Se a interface de áudio só gravar a 16 bits, não é necessariamente um problema. 16 bits já é suficiente para uma gravação considerada profissional. Porém, se possível, usar 24 bits é melhor.

> Não é necessário ir além de 48 kHz / 24 bits.

---

## 2. Parâmetros musicais do projeto

Ainda dentro de `Project Settings`, é possível definir:

| Parâmetro | Nome no Reaper                                              | O que faz                                   |
| --------- | ----------------------------------------------------------- | ------------------------------------------- |
| Andamento | `Tempo` (ou BPM – beats per minute)                         | Define a velocidade da música (ex: 120 BPM) |
| Tom       | `Time signature` (ex: 4/4) ou `Project key` (se disponível) | Define a métrica e tonalidade musical       |

Esses parâmetros ajudam na organização da grade de edição e no uso de metrônomo.

---

## 3. Organização dos arquivos do projeto

Para que todos os arquivos de um projeto (áudios gravados, edições, etc.) fiquem armazenados no mesmo local:

### Passo a passo:

1. No menu superior, clique em `File` > `Save Project As...`

2. Escolha o local desejado no seu computador (ex: HD, pasta específica).

3. **Crie uma nova pasta** com o nome do seu projeto (ex: "Minha Música").

4. Dentro dessa pasta, dê um nome para o arquivo do projeto (ex: "Minha Música.RPP").

5. **Importante:** Marque a opção **`Create subdirectory for project`** (Criar subdiretório para o projeto) – se disponível. Caso contrário, certifique-se de já estar dentro da pasta criada.

6. Clique em **`Save`**.

### O que o Reaper faz automaticamente:

- Cria um arquivo `.RPP` (projeto do Reaper).
- Registra que **todos os arquivos gerados** (gravações, takes, etc.) devem ser salvos dentro dessa mesma pasta.
- Quando você gravar, os arquivos de áudio (`.wav`) vão para essa pasta automaticamente.

> Isso evita arquivos perdidos ou projetos desorganizados.

---

## Resumo visual do caminho

```
File → Project Settings (Alt + Enter)
├── Project sample rate: 44100 ou 48000 Hz
├── (Bit depth definido pela interface ou na exportação)
└── Tempo / BPM: definir conforme a música

File → Save Project As...
├── Navegar até o local desejado
├── Criar nova pasta com o nome do projeto
├── Nomear o arquivo .RPP
└── Salvar
```

---

## Ponto importante

> "Não se preocupe em querer ter entendimento muito aprofundado disso. São coisas simples e que viram coisas automáticas."

Após configurar o projeto uma vez, o Reaper lembra as configurações para aquele projeto específico.
