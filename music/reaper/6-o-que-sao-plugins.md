## O que são plugins

- São **programas paralelos** que abrem dentro do Reaper.
- Servem para **expandir as funcionalidades** do software: adicionar efeitos, simular instrumentos, processar áudio, etc.

---

## Dois tipos principais de plugins

| Tipo                               | Descrição                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------ |
| **Plugins nativos**                | Já vêm dentro do Reaper. Não precisam ser instalados.                                |
| **Plugins não nativos (externos)** | Precisam ser instalados no computador. É necessário dizer ao Reaper onde eles estão. |

---

## Como instalar e configurar plugins externos no Reaper

### Passo 1: Instalar o plugin no computador

- Durante a instalação, o plugin será colocado em alguma pasta do seu computador.
- O Reaper já reconhece **pastas padrão** comuns do sistema (ex: `C:\Program Files\VSTPlugins`).

> Recomendação para o percurso: **use as pastas padrão** para evitar dor de cabeça. O Reaper escaneia essas pastas automaticamente.

### Passo 2: Indicar as pastas de plugins ao Reaper (se necessário)

1. Acesse `Options` > `Preferences` (ou `Ctrl + P`)
2. No lado esquerdo, clique em `Plug-ins` > `VST`
3. Na seção `VST plug-in paths`, estão listadas as pastas que o Reaper escaneia
4. Para adicionar uma pasta personalizada, clique em `Add` e selecione o diretório desejado
5. Clique em `Apply` e depois `OK`

> Se você usar as pastas padrão, **nenhuma configuração adicional é necessária** – o Reaper já vai reconhecer os plugins automaticamente.

### Passo 3: O Reaper escaneia as pastas

- Ao abrir o Reaper, ele escaneia as pastas indicadas.
- Os plugins encontrados ficam disponíveis dentro do programa.

---

## Onde encontrar os plugins dentro do Reaper

### Acesso principal: botão `FX` na track

| Seção                               | Conteúdo                                             |
| ----------------------------------- | ---------------------------------------------------- |
| `VST` / `VST3` / `VSTi`             | Todos os plugins externos instalados                 |
| `Instruments`                       | Instrumentos virtuais (geram som via MIDI)           |
| `Cockos` (ou nome do desenvolvedor) | Plugins nativos do Reaper                            |
| `Recent`                            | Últimos plugins usados                               |
| Busca (campo de filtro)             | Digite o nome do plugin para encontrá-lo rapidamente |

---

## Janela do plugin (FX Chain)

- Ao clicar em `FX`, uma janela se abre.
- Os plugins aparecem em **cadeia (chain)** – um após o outro.
- O sinal passa pelo primeiro plugin, depois pelo segundo, e assim por diante.
- Isso permite combinações de efeitos (ex.: equalizador + compressor + reverb).

---

## Recomendação para iniciantes

- Use **exatamente os mesmos plugins** mostrados no percurso.
- Assim, você consegue reproduzir o resultado final e aprender o processo.
- Depois de ganhar confiança, você pode migrar para ferramentas mais avançadas, se necessário.
- Os plugins escolhidos no percurso são:
  - Gratuitos ou acessíveis
  - De qualidade aceitável para resultado comercial
  - Simples de usar para quem está começando

---

## Configuração final para tocar instrumento virtual com teclado

### Fluxo completo

1. Teclado controlador conectado via USB e habilitado em `Preferences` > `MIDI Devices`
2. Track criada e armada para gravação (`Record Arm`)
3. Na track, clique em `FX` e adicione um **instrumento virtual** (ex: bateria virtual, piano virtual, etc.)
4. Certifique-se de que a track está **selecionada** (última coisa clicada)
5. Toque no teclado – o som deve ser gerado

### Dica importante

Se algumas teclas não produzirem som, pode ser um **desalinhamento de mapa MIDI**. O ajuste pode ser feito dentro do próprio instrumento virtual (ex: mudar a nota base ou range de teclas).

---

## Resumo visual do fluxo

```
Instalar plugin (pastas padrão) → Reaper escaneia automaticamente
         ↓
Track → FX → Adicionar instrumento virtual (ex: VSTi)
         ↓
Track armada (Record Arm) + Track selecionada
         ↓
Tocar teclado → MIDI entra → Plugin gera som
```

---

## Plugins nativos vs. não nativos – diferença prática

| Característica | Nativos                 | Não nativos (externos)                                       |
| -------------- | ----------------------- | ------------------------------------------------------------ |
| Instalação     | Já vem no Reaper        | Baixar e instalar separadamente                              |
| Configuração   | Nenhuma                 | Indicar pasta (se não for padrão)                            |
| Exemplos       | ReaComp, ReaEQ, ReaVerb | Bateria virtual, sintetizadores, simuladores de amplificador |
