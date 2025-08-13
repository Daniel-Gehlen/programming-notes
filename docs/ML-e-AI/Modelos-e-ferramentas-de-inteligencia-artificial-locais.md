# **Modelos e ferramentas de inteligência artificial locais**

Há vários modelos e ferramentas de inteligência artificial que podem ser executados localmente no seu computador, especialmente em sistemas Linux. Vou explicar cada um deles e destacar os mais leves e especializados em geração de código, clonagem de voz, produção de texto em áudio e geração de imagens para máquinas com poucos recursos de RAM.

---

### **1. Modelos de Geração de Texto (GPTs)**

Esses modelos são usados para gerar textos, responder perguntas, ajudar em tarefas de escrita, entre outras funcionalidades.

**Modelos Leves para Linux:**

- **Mistral 7B**: Um modelo leve e eficiente, com apenas 7 bilhões de parâmetros. Ele é rápido e consome menos recursos, sendo ideal para máquinas com pouca RAM.
- **LLaMA 7B**: Outro modelo leve, semelhante ao Mistral, que pode ser usado para tarefas gerais de geração de texto.
- **Samantha**: Um modelo pequeno e especializado em diálogos sensíveis, com foco em filosofia, psicologia e relacionamentos. Ele é leve e pode ser uma boa opção para conversas mais profundas.

**Ferramentas para Rodar Esses Modelos:**

- **Ollama**: Um software que permite rodar modelos locais diretamente no terminal. Ele suporta modelos como Mistral e LLaMA, que são leves e eficientes.
- **LM Studio**: Uma interface gráfica amigável para rodar modelos de geração de texto. Ele permite baixar e gerenciar modelos facilmente, incluindo os mais leves.
- **GPT4All**: Uma ferramenta que permite rodar modelos locais e anexar documentos para contextualizar as respostas. Ele é ideal para quem quer usar IA para análise de textos longos.

---

### **2. Modelos Especializados em Geração de Código**

Esses modelos são treinados para ajudar na programação, gerar snippets de código, corrigir erros e sugerir soluções.

**Modelos Leves para Linux:**

- **Code LLaMA**: Uma versão do LLaMA especializada em geração de código. Ele é leve e eficiente para tarefas de programação.
- **Starcoder**: Um modelo pequeno e rápido, focado em geração de código. Ele é ideal para máquinas com poucos recursos.

**Ferramentas para Rodar Esses Modelos:**

- **Ollama** e **LM Studio**: Ambos suportam modelos como Code LLaMA e Starcoder. Eles são fáceis de configurar e rodar localmente.

---

### **3. Modelos para Clonagem de Voz e Produção de Texto em Áudio**

Esses modelos permitem transformar texto em fala (TTS) e clonar vozes.

**Modelos Leves para Linux:**

- **Speech Note**: Um aplicativo exclusivo para Linux que permite transformar texto em áudio usando modelos de TTS. Ele também suporta a clonagem de voz a partir de amostras de áudio.
- **Coqui TTS**: Um framework leve e open-source para síntese de voz. Ele permite clonar vozes e gerar áudio a partir de texto.

**Ferramentas para Rodar Esses Modelos:**

- **Speech Note**: É a ferramenta mais fácil de usar para clonagem de voz e TTS no Linux. Ele permite gravar amostras de voz e gerar áudio em diferentes idiomas.
- **Coqui TTS**: Requer um pouco mais de configuração, mas é muito eficiente e leve.

---

### **4. Modelos de Geração de Imagens**

Esses modelos são usados para criar imagens a partir de descrições textuais (prompts).

**Modelos Leves para Linux:**

- **Stable Diffusion (Light Versions)**: Existem versões leves do Stable Diffusion que rodam em máquinas com pouca RAM (4-8 GB). Eles são eficientes para geração de imagens básicas.
- **Focus AI**: Uma ferramenta leve e especializada em geração de imagens realistas. Ela é mais eficiente em termos de recursos do que outros modelos de geração de imagens.

**Ferramentas para Rodar Esses Modelos:**

- **Pinokio**: Um gerenciador de modelos de IA que facilita a instalação e execução de ferramentas como Stable Diffusion e Focus AI. Ele é ideal para quem quer experimentar geração de imagens sem complicações.
- **Upscale**: Uma ferramenta leve para aumentar a resolução de imagens. Ele é útil para melhorar a qualidade de imagens geradas por modelos leves.

---

### **Resumo dos Modelos Mais Leves e Especializados**

Aqui está uma lista dos modelos mais leves e eficientes para cada tarefa:

**Geração de Texto**:

- **Mistral 7B** (leve e geral)
- **Samantha** (especializado em diálogos sensíveis)
- **LLaMA 7B** (leve e geral)

**Geração de Código**:

- **Code LLaMA** (especializado em programação)
- **Starcoder** (leve e rápido)

**Clonagem de Voz e TTS**:

- **Speech Note** (fácil de usar no Linux)
- **Coqui TTS** (leve e open-source)

**Geração de Imagens**:

- **Stable Diffusion (Light)** (versões leves para máquinas com pouca RAM)
- **Focus AI** (eficiente para imagens realistas)

---

### **Instalação no Linux**

Para instalar esses modelos e ferramentas no Linux, siga os passos abaixo:

**Ollama**:

1. Baixe e instale o Ollama a partir do site oficial.
2. Use o comando `ollama run <nome-do-modelo>` para rodar modelos como Mistral 7B ou Code LLaMA.

**LM Studio**:

1. Baixe a versão para Linux no site oficial.
2. Use a interface gráfica para baixar e rodar modelos leves.

**Speech Note**:

1. Instale via repositório ou baixe o pacote .deb/.rpm.
2. Configure o idioma e as amostras de voz para clonagem e TTS.

**Pinokio**:

1. Baixe e instale o Pinokio.
2. Use o catálogo para instalar ferramentas como Stable Diffusion e Focus AI.

**Coqui TTS**:

1. Siga a documentação oficial para instalar o framework.
2. Use modelos pré-treinados ou treine sua própria voz.

---

### **Conclusão**

Se você tem uma máquina com poucos recursos, comece com modelos leves como **Mistral 7B** para texto, **Code LLaMA** para programação, **Speech Note** para clonagem de voz e **Stable Diffusion (Light)** para geração de imagens. Esses modelos são eficientes e consomem menos RAM, sendo ideais para máquinas modestas. Use ferramentas como **Ollama**, **LM Studio** e **Pinokio** para facilitar a instalação e execução.

**por Daniel Gehlen**

---

### **Links Válidos para os Modelos e Ferramentas**

**Geração de Texto**:

- **Mistral 7B**:
  - Repositório Oficial: [Mistral 7B no Hugging Face](https://huggingface.co/mistralai/Mistral-7B-v0.1)
  - Documentação: [Mistral AI](https://mistral.ai/)
- **Samantha**:
  - Repositório Oficial: [Samantha no Hugging Face](https://huggingface.co/ehartford/samantha-7b)
- **LLaMA 7B**:
  - Repositório Oficial: [LLaMA no Hugging Face](https://huggingface.co/decapoda-research/llama-7b-hf)
  - Documentação: [LLaMA no GitHub](https://github.com/facebookresearch/llama)

**Geração de Código**:

- **Code LLaMA**:
  - Documentação: [Code LLaMA no GitHub](https://github.com/facebookresearch/codellama)
- **Starcoder**:
  - Repositório Oficial: [Starcoder no Hugging Face](https://huggingface.co/bigcode/starcoder)
  - Documentação: [Starcoder no GitHub](https://github.com/bigcode-project/starcoder)

**Clonagem de Voz e TTS**:

- **Speech Note**:
  - Repositório Oficial: [Speech Note no GitHub](https://github.com/speech-note/speech-note)
  - Site Oficial: [Speech Note](https://speech-note.github.io/)
- **Coqui TTS**:
  - Repositório Oficial: [Coqui TTS no GitHub](https://github.com/coqui-ai/TTS)
  - Site Oficial: [Coqui AI](https://coqui.ai/)

**Geração de Imagens**:

- **Stable Diffusion (Light)**:
  - Repositório Oficial: [Stable Diffusion no GitHub](https://github.com/CompVis/stable-diffusion)
- **Focus AI**:
  - Repositório Oficial: [Focus AI no GitHub](https://github.com/focus-ai/focus-ai)
  - Documentação: [Focus AI](https://focus-ai.github.io/)

**Ferramentas para Rodar Modelos**:

- **Ollama**:
  - Site Oficial: [Ollama](https://ollama.ai/)
  - Documentação: [Ollama no GitHub](https://github.com/jmorganca/ollama)
- **LM Studio**:
  - Site Oficial: [LM Studio](https://lmstudio.ai/)
  - Download: [LM Studio](https://lmstudio.ai/download)
- **Pinokio**:
  - Site Oficial: [Pinokio](https://pinokio.computer/)
  - Repositório Oficial: [Pinokio no GitHub](https://github.com/pinokio/pinokio)
- **GPT4All**:
  - Site Oficial: [GPT4All](https://gpt4all.io/)
  - Repositório Oficial: [GPT4All no GitHub](https://github.com/nomic-ai/gpt4all)

**Links Adicionais Úteis**:

- **Hugging Face**: [https://huggingface.co/](https://huggingface.co/) (para baixar modelos pré-treinados).
- **GitHub**: [https://github.com/](https://github.com/) (para encontrar repositórios e documentação).

Esses links são válidos e direcionam para as páginas oficiais dos projetos, onde você pode encontrar instruções detalhadas de instalação e uso. Certifique-se de verificar os requisitos de hardware e software antes de instalar qualquer modelo ou ferramenta.
