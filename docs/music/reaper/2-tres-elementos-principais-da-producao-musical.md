## Três elementos principais da produção musical

1. **DAW (Digital Audio Workstation)** – O "cérebro" da produção, software onde todas as ações são comandadas. Exemplo utilizado no percurso: **Reaper**.

2. **Interface de áudio** – Equipamento intermediário que conecta o computador aos microfones e instrumentos.

3. **Computador** – O hardware que armazena os arquivos e roda o software.

---

## Sobre o software Reaper

- **Gratuito para avaliação** – Ao abrir pela primeira vez, aparece uma mensagem informando 60 dias de teste. Essa mensagem permanece eternamente até a compra da licença.
- **Licença** – Não é obrigatória para usar o software. Pode ser comprada quando o usuário quiser, sem impacto nas funcionalidades.
- **Versão em português** – Disponível, com comandos principais traduzidos.
- **Compatibilidade** – O funcionamento básico muda pouco entre versões. O percurso foi estruturado com a versão original (sem customizações) para garantir compatibilidade.
- **Leveza** – O Reaper é um programa leve, fácil de instalar e roda bem em computadores simples.

---

## Tela principal do Reaper – elementos visíveis

- **Área das tracks (faixas)** – Onde são adicionadas as faixas para gravação de cada elemento musical.
- **Painel de controle da mixagem**
- **Menus superiores** – Diversas funções acessadas por aqui.
- **Barra de atalhos** – Botões para funções mais utilizadas.
- **Transporte** – Botões para play, gravar, parar, além de ajustes de andamento (BPM) e tom.
- **Opção de tela** – É possível redimensionar ou personalizar a interface conforme preferência.

---

## Interface de áudio

- **Função** – Faz a conexão entre o Reaper e o computador, permitindo gravar e reproduzir áudio.
- **Exemplo utilizado no percurso** – Behringer U-Phoria UM2 (pequena, simples, funcional para qualidade comercial).
- **Não é obrigatória para iniciar** – É possível começar sem interface, usando apenas a placa de som onboard do computador.

---

## Configuração sem interface de áudio (placa onboard)

- Utiliza um driver gratuito chamado **ASIO4ALL**.
- Disponível na etapa de instalação do percurso. Leve e fácil de instalar.
- Após instalar, o ASIO4ALL tem um painel de controle para ajustes, mas geralmente fica pronto para uso.
- A configuração mostrada no percurso serve tanto para interface de áudio quanto para placa onboard.

---

### **passo a passo completo** para configurar o áudio no Reaper, seja com uma **interface de áudio dedicada** ou com o **ASIO4ALL** (para quem usa a placa de som do computador). Os nomes dos menus e botões estão mantidos conforme aparecem no software.

---

## Passo 1: Acessar as Preferências de Áudio

No Reaper, existem duas formas de abrir a janela de configuração:

| Método                | Como fazer                             |
| --------------------- | -------------------------------------- |
| **Atalho do teclado** | Pressione `Ctrl + P` (no Windows)      |
| **Menu superior**     | Clique em `Options` > `Preferences...` |

---

## Passo 2: Navegar até a seção de dispositivo de áudio

No lado esquerdo da janela `Preferences`, localize e clique na seta ao lado de `Audio` para expandir as opções. Em seguida, clique em `Device` .

O caminho completo é:

```
Preferences → Audio → Device
```

---

## Passo 3: Configurar o sistema de áudio

No lado direito da janela, você verá os seguintes campos. Configure-os conforme seu equipamento:

### Campo 1: `Audio system`

- Clique no menu suspenso
- Selecione a opção **`ASIO`**

> Por que ASIO? O driver ASIO (Audio Stream Input/Output) reduz a latência (atraso) entre o que você toca e o que o computador reproduz, essencial para gravação em tempo real .

### Campo 2: `ASIO Driver`

- Clique no menu suspenso abaixo de `Audio system`
- Escolha uma das opções abaixo, conforme seu equipamento:

| Se você tem...                                 | Selecione...                                                                                               |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Interface de áudio dedicada**                | O nome da sua interface (ex: `Focusrite USB ASIO`, `Behringer USB ASIO`, `Neumann MT 48 USB Audio Device`) |
| **Placa de som do computador (sem interface)** | `ASIO4ALL v2`                                                                                              |

---

## Passo 4: Configurar entradas e saídas (para ASIO4ALL ou interface)

Após selecionar o driver, localize as seguintes opções:

- **`Enable inputs`** – Deixe **marcado (✓)**
- **`First`** (primeira entrada) – Selecione o canal de entrada inicial (ex: `Input 1`)
- **`Last`** (última entrada) – Selecione o último canal disponível (ex: `Input 2`, `Input 8`, etc.)
- **`Output range`** (faixa de saída) – Selecione o primeiro e último canal de saída (ex: `Output 1` e `Output 2`)

> ⚠️ Se os canais de entrada/saída não aparecerem no menu, isso será resolvido no **Passo 5** (configuração interna do ASIO4ALL).

---

## Passo 5: Configuração interna do ASIO4ALL (se aplicável)

**Esta etapa é obrigatória apenas para quem selecionou `ASIO4ALL v2` no Passo 3.**

1. Dentro da mesma janela `Preferences > Audio > Device`, clique no botão **`ASIO Configuration`** .
   - Este botão fica logo abaixo do menu `ASIO Driver`.

2. O **painel de controle do ASIO4ALL** será aberto. Ele lista todos os dispositivos de áudio do seu computador .

3. **Ative sua placa de som ou interface:**
   - Localize o dispositivo que você quer usar para gravar e ouvir (ex: `Realtek HD Audio`, `USB Audio CODEC`, ou o nome da sua interface).
   - Clique no ícone de **"power" (liga/desliga)** ao lado do dispositivo – ele deve ficar **aceso (ícone azul ou branco)** .
   - Se houver mais de um dispositivo ativo, **desative os que não serão usados** clicando novamente no ícone de power para evitar conflitos .

4. **Ajuste o buffer size (tamanho do buffer):**
   - Na parte inferior do painel do ASIO4ALL, há um controle deslizante ou seletor para `ASIO Buffer Size` .
   - Valores recomendados:
     - **128 samples** – Menor latência, bom para gravação (pode causar estalos se o PC não for potente).
     - **256 samples** – Equilíbrio entre latência e estabilidade.
     - **512 samples ou mais** – Maior latência, recomendado apenas para mixagem.

5. Feche o painel do ASIO4ALL (clique no `X` no canto superior direito).

---

## Passo 6: Salvar as configurações

Após concluir os passos acima, dentro da janela `Preferences`:

1. Clique no botão **`Apply`** (Aplicar) .
2. Clique em **`OK`** para fechar a janela.

---

## Passo 7: Verificar se o áudio está funcionando

1. No Reaper, vá ao menu `Track` > `Insert New Track` para criar uma nova faixa de áudio .

2. Clique no botão **`Record Arm`** (ícone de círculo vermelho) na faixa criada.

3. Clique na área onde está escrito `Input 1` (ou similar) e selecione o canal correto de entrada correspondente ao microfone ou instrumento conectado .

4. Fale ou toque no microfone. O medidor de nível da faixa deve se mover.

5. Pressione o botão **`Record`** (círculo vermelho na barra de transporte) para gravar e depois **`Stop`** (quadrado) para parar.

---

## Resumo visual do caminho no Reaper

```
Options → Preferences → Audio → Device
├── Audio system: ASIO (Windows) ou Core Audio (Mac)
├── ASIO Driver: Nome da interface ou ASIO4ALL v2
├── Enable inputs: ✓
├── First: Input 1
├── Last: Input 2 (ou último canal disponível)
├── Output range first: Output 1
├── Output range last: Output 2
└── [ASIO Configuration] → ativar dispositivos + ajustar buffer (para ASIO4ALL)
```

Com esses passos, o áudio estará configurado e pronto para gravação.

---

## Nota

- Seguir as configurações exatamente como descrita.
- O objetivo do percurso é aprender a **lógica do processo de produção musical**, não apenas clicar nos mesmos botões.
- Qualquer dúvida deve ser levada à comunidade (Facebook ou Telegram), descrita de forma específica.
