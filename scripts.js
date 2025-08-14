// Configuração do Marked
marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code, lang) {
    const validLang = ["javascript", "python", "bash"].includes(lang)
      ? lang
      : "plaintext";
    return `<pre><code class="language-${validLang}">${code}</code></pre>`;
  },
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const structure = {
      algoritmos: [
        "Análise-Bubble-Sort.md",
        "Arvore-Recursao-&-Metodo.md",
        "Cal-Despesas-Mensais.md",
        "Dividir-Conquistar-Combinar.md",
        "Funcao-Planejamento-Diario.md",
        "Gestao-de-Tarefas-em-Java.md",
        "Graph-Algorithms-Evolution.md",
        "Heapsort-para-Gerenciamento-Diario.md",
        "Jarros-de-Agua-Comparacao.md",
        "K-Way-External-Merge-Sort.md",
        "Limite-Inferior-Inter-Listas.md",
        "limpeza-da-casa-em-Java-QuickSort.md",
        "Lista-de-Compras-Organizada.md",
        "livro-Introduction-to-Algorithms.md",
        "Livros-Recomendados.md",
        "Metodo-Mestre-Teorema.md",
        "Ordem-Dificuldade-Logica.md",
        "Ordenacao-de-Tarefas-Diarias.md",
        "Ordenacao-e-Busca.md",
        "Ordenação-Estaveis.md",
        "Ordenacao-k-ordenada-Limites-e-algoritmos.md",
        "Ordenacao-por-contagem-radix-sort-e-bucket-sort.md",
        "Ordenacao-por-Insercao.md",
        "Ordenacao-por-Prioridade.md",
        "Organizacao-de-Tarefas-Diarias.md",
        "Organizacao-de-tarefas-domesticas.md",
        "Regra-de-Horner-assintotico.md",
        "Selecao-de-estatistica-de-ordem.md",
        "Teoria-Formal-de-Algoritmos.md",
        "Ultimo-item-comprado.md",
        "Deflate-e-LZ-compressao-de-dados.md",
        "Algoritmo-de-Huffman.md"
      ],
      "analise-de-sinais": [
        "DFT-em-bits.md",
        "DSP-Digital-Signal-Processing-Processamento-Digital-de-Sinais.md",
        "FFT-Fast-Fourier-Transform-Transformada-Rapida-de-Fourier.md",
        "quantizacao.md",
        "Transformada-Discreta-de-Fourier-DFT-Discrete-Fourier-Transform.md",
      ],
      android: [
        "Alternativas-para-simulacao-mobile-online.md",
        "Android-Studio-Linux.md",
        "Desenvolvimento-com-Limitacoes-de-RAM.md",
        "Simular-o-Frontend-com-HTMLCSS.md",
        "Xamarin.md",
      ],
      APIs: [
        "APIs-bastante-comuns-no-frontend.md",
        "MuleSoft-Anypoint-Platform.md",
      ],
      assets: ["Gerar-e-books.md", "memes-populares.md"],
      "audio-em-computacao": [
        "Convencao-de-amostragem-de-CDs.md",
        "onda-mais-pura.md",
        "Senoide-de-som.md",
        "WAV-Waveform-Audio-File-Format-e-MP3-MPEG-1-Audio-Layer-III.md",
      ],
      automacao: [
        "Blaze-da-FICO-e-DMPS-Decision-Management-Platform-Strategy-da-FICO.md",
        "Chatbot-usando-a-API-oficial-do-WhatsApp-Business.md",
        "Fluxo-de-automacao-faturamento-com-o-WhatsApp.md",
        "Make-ciclos-completos-de-automacao.md",
        "Softwares-open-source-automacao-de-tarefas-geracao-de-relatorios-analise-de-dados-e-desenvolvimento-.md",
      ],
      aws: [
        "Armazenamento-e-Banco-de-Dados-AWS.md",
        "Assuntos-Complementares-para-o-Exame-AWS-Cloud-Practitioner.md",
        "Certified-Cloud-Practitioner-CLF-C02.md",
        "Computacao-em-AWS.md",
        "Encerrar-Conta-AWS-via-CLI.md",
        "Infraestrutura-Global-AWS.md",
        "Introducao-a-Cloud.md",
        "Introducao-ao-Exame-de-Certificacao-AWS-Cloud-Practitioner.md",
        "Monitoramento-e-Analise-na-AWS.md",
        "Precos-e-Planos-de-Suporte-na-AWS.md",
        "Redes-em-AWS.md",
        "Seguranca-na-Nuvem-com-AWS.md",
      ],
      "back-end": [
        "Backends-para-hospedar.md",
        "PHP-Analise-de-Custo-Beneficio-para-Hospedagem.md",
        "PHP-e-uma-linguagem-barata-de-hospedar.md",
      ],
      "C#": [
        "Arquitetura-orientada-a-servicos-Service-Oriented-Architecture-SOA.md",
        "Classes-abstratas-e-interfaces-em-C#.md",
        "Como-organizar-codigo-em-C.md",
        "Fluxo-de-trabalho-pratico-e-a-complexidade-mental-associada.md",
        "Licenca-do-ASPNET.md",
        "Lpgica-em-C#.md",
        "Metodologia-Triade.md",
        "MudBlazor.md",
        "O-Caibalion-e-os-Principios-da-Filosofia-para-a-resolucao-de-problemas.md",
        "Passos-para-analisar-e-implementar-os-requisitos.md",
        "Pensamento-Sistemico.md",
        "Pensar-Estrategicamente.md",
        "Pensar-Logicamente.md",
        "Projetos-completos-que-utilizam-o-MudBlazor.md",
        "Teoria-dos-problemas-P-I-B-C.md",
        "Web-simples-e-lucrativa-utilizando-MudBlazor.md",
      ],
      "candidaturas-e-afins": [
        "Artigo-A-Contratacao-em-Tecnologia-Esta-Terrivel.md",
      ],
      "certificados-valorizados": ["certificados-Cisco.md"],
      compiladores: ["Bitcode.md", "bits.md"],
      compressao: [
        "Algoritmo-DEFLATE.md",
        "Arvore-Binaria-de-Frequencias-Arvore-de-Huffman.md",
        "Compressao-lossy-em-croma.md",
        "H264-tambem-conhecido-como-AVC-Advanced-Video-Coding.md",
        "H265-tambem-conhecido-como-HEVC-High-Efficiency-Video-Coding.md",
        "Keyframe-e-intraframe.md",
        "LZW-Lempel-Ziv-Welch.md",
        "RLE-Run-Length-Encoding.md",
        "Transformada-Discreta-de-Cosseno-DCT-Discrete-Cosine-Transform.md",
      ],
      computacao: [
        "Alocacao-e-desalocacao-de-memoria.md",
        "A-mae-de-todas-as-variaveis.md",
        "Arquitetura-dos-Pinos-e-Bits.md",
        "Array-vs-Tabela-de-Banco-de-Dados.md",
        "Binary-Tree-e-BST-Explained.md",
        "Borrowing-Emprestimo-Seguro-Rust.md",
        "Callbacks.md",
        "Computacao-de-Arrays-em-Bits.md",
        "Conceitos-de-self-e-this.md",
        "Concorrencia-em-paralelo-de-requisicoes.md",
        "Consistent-Hashing.md",
        "Construcao-da-estrutura-da-musica.md",
        "Conversao-de-Binario-para-Hexadecimal.md",
        "CPU-ROM-RAM-e-TRAVA.md",
        "Design-Patterns-Padroes-de-Projeto.md",
        "Duffs-Device.md",
        "Espaco-vetorial-vector-space.md",
        "gRPC-framework.md",
        "Half-adder-ou-meio-somador.md",
        "Hash-map.md",
        "imagens-em-tecnologia-da-informacao.md",
        "iptables-ou-NFTables.md",
        "Lista-ligada-e-nodes.md",
        "Longest-Common-Subsequence-LCS.md",
        "O-que-e-um-sistema.md",
        "O-que-sao-Threads.md",
        "PageRank-e-Algebra-Linear.md",
        "Passagem-de-parametros-para-funcoes.md",
        "Ponteiros-para-Structs-e-Ponteiros-para-Funcoes.md",
        "Por-que-existem-255-slots.md",
        "Principios-da-musica-em-conceitos-e-praticas-de-programacao.md",
        "Projeto-Navi-Adaptador-para-Interoperabilidade-entre-Frameworks-de-Machine-Learning.md",
        "Protocol-Buffers-protobuf.md",
        "Rainbow-tables-ataques-de-forca-bruta.md",
        "REPL-Read-Eval-Print-Loop.md",
        "RPC-Remote-Procedure-Call.md",
        "SICP-Structure-and-Interpretation-of-Computer-Programs.md",
        "Similaridade-de-Cosseno.md",
        "Similarity-clusters.md",
        "Sistemas-puramente-booleanos.md",
        "SR-Jump-Subroutine.md",
        "Stack-Overflow.md",
        "Stack-pilha-e-FIFO-First-In-First-Out.md",
        "Sub-rotinas-em-Programacao-Exemplos.md",
        "Tipos-de-Arquivos-Diferencas.md",
        "tuple-e-struct.md",
        "Universal-Turing-Machine-Basics.md",
      ],
      Contenerizacao: [
        "Plugins-WordPress-com-Docker-e-GitHub.md",
        "Traefik-reverse-proxy-que-gerencia-o-trafego-de-rede.md",
        "Docker-vs-VMs.md",
      ],
      "Cyber-Security": [
        "Ecossistemas-NET-vs-Java.md",
        "Criptografar-um-diretorio-no.Windows.md",
        "Ataques-do-Tipo-Man-in-the-Middle.md",
        "Pos-Exploracao-em-Sistemas.md",
        "Exploracao-de-Falhas-em-Sistemas.md",
        "Enumeracao-de-Portas-e-Servicos-Vulneraveis.md",
        "Varreduras-de-rede.md",
        "Engenharia-Social.md",
        "OSINT-Inteligencia-de-Fontes-Abertas.md",
        "Ciberseguranca.md",
      ],
      "Data-Base": ["SQLite-nao-requer-um-servidor.md"],
      "data-structure": ["Listas-Encadeadas-com-Java.md"],
      "e-commerce": [
        "rentabilizar-com-apenas-dominio-personalizado.md",
        "Implementar-indicadores-chave-de-desempenho-KPIs.md",
        "Landing-pages-de-alta-conversao.md",
        "Encurtador-de-URLs-com-SH-Link.md",
        "Projetos-de-software-uteis-na-vida-real-e-faceis-de-implementar.md",
        "Linguagens-de-programacao-e-areas-de-aplicacao.md",
        "Backends-Suportados-Gratuitamente.md",
        "A-arte-do-feedback.md",
        "Sistema-de-ensino-pratico-de-estruturas-de-dados.md",
        "Mudanca-de-Mentalidade.md",
        "Ideias-de-Projetos-para-desenvolvedores-backend.md",
        "Design-Thinking.md",
        "Programador-no-Japao.md",
        "BNT-Biblioteca-Nacional-de-Tese-e-ABNT.md",
        "Sistema-de-Recomendacao-Representacao-Visual.md",
        "API-do-WhatsApp-para-automatizar-atendimento-Zenvia-solucao-integrada.md",
        "Projeto-Sudo-Tony-Inteligencia-Artificial-e-TTS-Text-to-Speech.md",
        "Go-Horse-Process-GHP.md",
        "Tensoes-entre-a-area-de-TI-e-outras-areas-de-negocios-com-AI.md",
        "Uma-abordagem-mais-sustentavel-em-AI.md",
        "Contexto-e-Criticas-a-TI-Tradicional.md",
        "Filosofia-de-Design-de-Bons-Servicos.md",
        "Busca-de-Vagas-de-Desenvolvedor-Junior.md",
        "Tipos-de-Vagas-Problematicas.md",
        "Questoes-sobre-mercado-de-trabalho.md",
        "Contexto-Atual-2024-Busca-por-emprego.md",
        "Mini-E-commerce-Requisitos-Essenciais.md",
        "Computacao-Entendendo-o-Throughput.md",
        "Commerce-Headless-Overview-and-Code.md",
        "Tiers-das-Empresas-de-TI.md",
        "Perfecting-Imperfect-Software-Creators.md",
        "Manipulacao-em-Redes-Sociais.md",
      ],
      "front-end": [
        "Categoria-de-Cores.md",
        "Design-System.md",
        "A-Importancia-da-Tipografia.md",
        "8-Criterios-de-Scapin-and-Bastien.md",
        "UX-Design.md",
        "Wireframes.md",
        "Criando-Frontend-com-Imagens.md",
        "Highcharts-biblioteca-de-graficos-JS.md",
        "Color-Science-in-Computing.md",
        "Um-novo-formato-de-midia-chamado-Lava.md",
        "Detalhes-interativos-animacoes-ou-feedbacks-UIUX-mais-envolvente-e-agradavel.md",
        "SVGs-gratuitos-que-podem-ser-modificados.md",
        "FastHTML-Python-aplicativos-web.md",
      ],
      "gerenciador-de-pacotes": ["asdf-gerenciador-de-versoes-universal.md"],
      hospedagem: [
        "Hospedagem-compartilhadas-e-opcoes-semi-dedicas.md",
        "Heroku.md",
      ],
      freelancers: ["Plataformas-Freelancer-para-DEVs-em-2025.md"],
      "formatos-de-arquivos": [
        "GIF-Graphics-Interchange-Format.md",
        "PNG-Portable-Network-Graphics.md",
        "APNG-Animated-Portable-Network-Graphics.md",
        "Formato-WebP.md",
        "JPEG-Joint-Photographic-Experts-Group.md",
        "MJPEG-Motion-JPEG.md",
        "RAW.md",
        "Formato-RAR.md",
        "TAR-Tape-Archive.md",
        "GZIP.md"
      ],
      html: [
        "Entendendo-Comunicacao-Client-x-Server.md",
        "Trabalhando-com-tabelas.md",
        "Trabalhando-com-midias.md",
        "Trabalhando-com-Formularios.md",
        "HTML-Recursos-Especiais.md",
        "HTML-Semantico-e-Acessibilidade.md",
        "HTML-na-pratica.md",
        "HTML-Formatacoes.md",
      ],
      IDEs: [
        "Atalhos-essenciais-no-VS-Code.md",
        "Trae-IDE-Cursor-e-Windmill.md",
      ],
      infra: [
        "Criar-um-servidor-local-que-funcione-como-um-servidor-em-nuvem-compartilhado.md",
        "Tipo-de-Hospedagem.md",
        "Mautic-marketing-automation-open-source.md",
        "Portainer-gerenciamento-de-conteineres.md",
        "Tipo-de-Hospedagem.md",
        "Nao-precisa-de-uma-hospedagem-externa.md",
        "Configurar-um-servidor-web-como-Nginx-ou-Apache-como-proxy-reverso.md",
        "Ferramentas-Open-Source-para-Implantacao-de-Aplicacoes.md",
        "Autohospedagem-e-Alternativas-a-Nuvem.md",
        "Capistrano-deploy-de-software.md",
        "Chef-e-OpsWorks-ferramentas-populares-de-automacao-DevOps.md",
        "DSL-Domain-Specific-Language.md",
        "Puppet-automacao-de-TI.md",
        "CFEngine-3-gerenciar-e-configurar-grandes-infraestruturas.md",
        "VPS-Virtual-Private-Server.md",
        "AMDV-Advanced-Micro-Devices-Virtualization.md",
        "Virtualizacao-e-Hipervisor.md",
        "Sysadmins-administradores-de-sistemas.md",
        "cPanel-painel-de-controle-baseado-na-web.md",
        "Virtual-host-ou-host-virtual.md",
        "Data-Centers.md",
        "Ataque-DDoS-Distributed-Denial-of-Service-e-como-lidar-com-ele.md",
        "IaaS-ou-Infraestrutura-como-Servico-Infrastructure-as-a-Service.md",
        "FaaS-Function-as-a-Service-Funcao-como-Servico.md",
        "Virtualizacao-e-Hospedagem-Evolucao.md",
      ],
      IoT: [
        "Tecnicas-de-Seguranca-para-Redes-IoT.md",
        "Sistemas-Embarcados-Criticos.md",
        "Fundamentos-para-Redes-de-Classificacao.md",
        "Sensores-Sistemas-Embarcados-e-Hardware.md",
        "Seguranca-para-IoT-Principais-riscos-e-protocolos.md",
        "Seguranca-de-Redes-para-IoT.md",
        "Redes-de-Deep-Learning-para-IoT.md",
        "Protocolos-IoT-na-Camada-Fisica.md",
        "Protocolos-IoT-na-Camada-de-Transporte.md",
        "Protocolos-IoT-na-Camada-de-Aplicacao.md",
        "Protocolos-de-Comunicacao-e-Seguranca-para-IoT.md",
        "IoT-e-suas-Aplicacoes.md",
        "Interacao-Humano-Computador-IHC-e-Humano-Maquina-IHM.md",
        "Eletronica-Basica-para-Prototipacao.md",
        "Internet-das-Coisas-IoT.md",
        "Cidades-Inteligentes.md"
      ],
      java: [
        "Java-solucoes-simples-ate-sistemas-complexos.md",
        "Lista-de-excecoes-comuns-em-Java.md",
        "Vaadin-aplicacoes-web-modernas.md",
        "Apache-Spark-processamento-de-dados-em-lote-streaming.md",
        "Apache-Kafka-para-mensageria-processamento-de-streams.md",
        "Quarkus-apps-Java-rapidas-escalaveis-e-eficientes-em-nuvem-e-microsservicos.md",
        "Okta-gerenciamento-de-identidade-e-acesso-IAM.md",
        "JHipster-gerador-de-aplicacoes.md",
        "Lista-referencia-de-projetos-Java-open-source.md",
        "Setup-Java-OpenSource-Full-Cyclo.md",
        "Sistemas-bancarios-a-precisao-nos-calculos-em-Java.md",
        "Arquiteturas-de-software-em-Java.md",
        "Cursos-de-Java-mais-assistidos-no-YouTube.md",
        "Escolha-mais-estavel-segura-e-economica-para-o-Java-em-2025.md",
        "Principais-conceitos-de-POO.md",
        "Java-Basico.md",
        "Fundamentos-de-Qualidade-de-Software.md",
        "Padroes-de-Projetos-com-Java.md",
        "Persistencia-de-Dados-JPA-com-Hibernate.md",
        "Springboot.md",
        "Funcoes-em-Kotlin.md",
        "OO-e-Tipos-de-Classes-com-Kotlin.md",
        "Depurando-Apps-Android.md",
        "Controle-de-Fluxo-e-Colecoes-em-Kotlin.md",
        "Configurando-o-Android-Studio.md",
        "Programacao-Kotlin-Intro.md",
        "Visao-Geral-do-Mercado-de-Desenvolvimento-Mobile.md",
        "Conhecendo-o-Kotlin-e-Sua-Documentacao-Oficial.md",
        "Desenvolvendo-Testes-Utilizando-Mockito.md",
        "Gerenciamento-de-Dependencias-e-Build-em-Java-com-Maven.md",
        "Spring-Data-JPA.md",
        "Java-Basico.2.md",
        "Spring-Boot-3-e-Kotlin.md"
        ],
        "MEI-e-ME": [
        "Guia-Completo-para-se-Tornar-um-Freelancer-de-Sucesso.md",
        "Micro-SaaS-Software-como-Servico.md",
        "Projetos-regionais-com-complexidade-baixa-ou-moderada.md",
        "Reabrindo-o-MEI-e-o-App-de-gestao.md",
        "Gestao-financeira-e-contabil-completa.md",
        "Instalar-o-Odoo-Community.md",
        "Projetos-open-source-base-para-Guia-de-Comercios-Locais.md",
        "Comercializacao-de-produtos.md",
        "Multiplos-CNPJs-vantagens-riscos-e-alternativas.md",
        "DAS-Fixo-e-Multiplos-CNPJs.md",
        "Servicos-acessiveis-e-especializados-para-micro-e-pequenas-empresas.md",
        "Abrir-uma-Microempresa-ME-sozinho.md",
        "Software-genericos-com-demanda-de-mercado.md",
        "Reativacao-do-MEI.md",
        "Ferramentas-como-o-Odoo-vs-Contadorvantagens.md",
        "Odoo-Community-planejamento-tributario.md",
        "Gestao-contabil-especialmente-no-contexto-de-um-SAS.md",
        "Estruturar-um-negocio-freelancer-modelo-MIT.md",
        "Melhores-linguagens-de-programacao-para-trabalhar-como-freelancer.md",
        "Precificar-trabalho-como-freelancer.md",
        "Plataformas-de-trabalho-remoto.md",
        "Situacao-Fiscal-e-Regularizacao-Perante-o-Fisco.md",
        "MEI-para-atuar-como-programador-PJ.md",
        "Assinatura-digital.md",
        "Configurar-o-Google-Ads.md",
        "Formula-para-Engenharia-de-Requisitos-de-Software.md",
        "Como-Cobrar-por-Projetos-de-Automacao-Low-Code.md",
        "Tabela-de-Complexidade-e-Tempo-Gasto.md",
        "Formalizacao-da-Empresa.md",
        "Formulario-de-levantamento-de-requisitos-para-e-commerce.md",
        "Stripe-Plataforma-de-Pagamentos-Online.md",
        "Modelo-Briefing.md",
        "Fundamentos-Arquitetura-da-Informacao.md",
        "CLT-ou-PJ-MEI-ou-ME-Microempresa.md",
        "Arquitetura-Essencial-para-Pequenos-Times.md"
        ],
        "ML-e-AI": [
            "MCP-Model-Context-Protocol.md",
            "Copilot-Tuning-e-NL-Web.md",
            "Modelos-e-ferramentas-de-inteligencia-artificial-locais.md",
            "Agentes-autonomos.md",
            "Manus-AI-agente-autonomo.md",
            "DeepHermes-3.md",
            "RAG-Retrieval-Augmented-Generation-Geracao-Aumentada-por-Recuperacao.md",
            "Text-to-Speech.md",
            "Speech-to-Text.md",
            "Criar-um-projeto-de-IA-com-LM-Studio-e-Anything-LLM.md",
            "Criar-e-implantar-um-modelo-de-Transformers.md",
            "Criacao-de-agentes-utilizando-a-biblioteca-Pydantic-AI.md",
            "Metodos-de-Conversao-de-Cores.md",
            "Classificacao-de-imagens-em-nuvem-de-pontos.md",
            "MLP-na-Pratica-Deep-Learning.md",
            "Aplicacoes-de-Deep-Learning.md",
            "Metodos-de-Segmentacao.md",
            "Segmentacao-de-imagens.md",
            "Introducao-as-Redes-de-Segmentacao.md",
            "Metricas-de-Avaliacao-de-Desempenho.md",
            "Dataset-para-deteccao.md",
            "Redes-de-Deep-Learning-para-deteccao.md",
            "Introducao-para-redes-de-deteccao.md",
            "Ajustes-de-Hiperparametros.md",
            "Metodos-de-Otimizacao-de-Hiperparametros.md",
            "Otimizacao-de-Hiperparametros.md",
            "Rede-de-Classificacao-Inception-V3.md",
            "Algoritmos-de-Classificacao.md",
            "Fundamentos-para-Redes-de-Classificacao.md",
            "Algoritmos-Fuzzy.md",
            "Metodos-de-Otimizacao-em-ML.md",
            "Programando-uma-rede-de-Deep-Learning.md",
            "Matematicas-para-Algoritmos-Convolucionais.md",
            "Algoritmos-Convolucionais.md",
            "Introducao-as-Redes-de-Deep-Learning.md",
            "Cross-validation-em-ML.md",
            "Metodos-de-Validacao-em-ML.md",
            "Tipos-de-Validacao-em-ML.md",
            "Problemas-de-Validacao-em-ML.md",
            "Metodos-de-Validacao-em-ML-2.md",
            "Introducao-ao-Keras.md",
            "Frameworks-para-Machine-Learning.md",
            "Datasets.md",
            "Maquinas-de-Vetores-de-Suporte-SVM.md",
            "Algoritmos-Geneticos.md",
            "Redes-Neurais-Artificiais.md",
            "Metodos-de-Machine-Learning-Bioinspirados.md",
            "Machine-Learning-e-Inteligencia-Artificial.md",
            "Azure-IA-Generativa-e-OpenAI.md",
            "Azure-Inteligencia-de-Documentos-e-Mineracao-de-Conhecimento.md",
            "Fundamentos-de-IA-do-Microsoft-Azure-Processamento-de-Linguagem-Natural.md"
        ],
        mobile: [
            "Apps-Android-sem-usar-o-Android-Studio.md",
          ],
        multiplataforma: [
            "Apps-Android-sem-usar-o-Android-Studio.md",
          ],
        observability: [
            "Prometheus-Grafana.md",
        ],
        OOP: [
            "Criacao-de-classes-e-objetos-em-JavaScript.md",
        ],
        PaaS: [
            "Cloudflare-Cloudflare-Workers.md",
        ],
        "padrões-de-projetos": [
            "9-padroes-de-design.md",
            "Overengineering.md",
            "Design-Patterns-ou-Padroes-de-Projeto.md"
        ],
        solid: [
            "Pesquisa-sobre-Principios-SOLID.md"
        ],
        "power-bi": [
            "Storytelling-com-Power-BI.md",
            "Relatorios-com-Foco-em-Experiencia-do-Usuario.md",
            "Otimizando-modelos-com-foco-em-performance-no-Power-BI.md",
            "Modelagem-de-dados-com-Power-BI.md",
            "Limpeza-e-Transformacao-de-dados.md",
            "Introducao-a-Modelagem-Dimensional.md",
            "FS-com-DAX-e-Calculos-com-Power-BI.md",
            "Gerenciando-Workspaces-no-Power-BI-Service.md",
            "Fundamentos-de-BI-KPIs-e-Metricas-de-Negocios.md",
            "Data-Analytics-com-Power-BI.md",
            "Fundamentos-de-Analise-de-Dados-em-Power-BI.md",
            "Fundamentos-de-Processamento-de-Dados.md",
            "SQL-Analytics.md",
            "Fundamentos-de-Inteligencia-de-Dados.md",
            "Criando-dashboards-com-Power-BI.md",
            "Coleta-e-extracao-de-dados-com-Power-BI.md",
            "Guia-PEP-8-para-Programacao-em-Python.md"
        ],
        programming: [
            "XML-e-X-tensible-M-arkup-L-anguage.md",
            "Desenvolvimento-na-Plataforma-FLUIG-e-Criacao-de-Workflows-BPM.md",
            "Modal.md",
            "Lambda-Functions-Funcoes-Lambda.md",
            "MERN-Stack-Developer.md",
            "Programacao-avancada-Logica-complexa-e-Design-de-software.md",
            "Decompondo-a-Orientacao-a-Objetos-OO-em-niveis.md",
            "CRUD-CRIANDO-UM-AGREGADOR-DE-NOTICIAS-COM-O-AERIAL-REST.md",
            "Cody-CLI.md",
            "Prompts.md",
            "Metodo-eficaz-para-resolver-problemas.md",
            "n8n-no-code-e-low-code.md",
            "Pseudocodigo.md",
            "O-que-e-o-Flet.md",
            "Os-tres-problemas-que-mais-aparecem-em-entrevistas.md",
            "Ferramenta-V-para-Gerenciamento-de-Ambientes-e-Dependencias-no-Python.md",
            "Oportunidades-de-automacao-e-melhorias.md",
            "PhoneGap-e-Apache-Cordova.md",
            "Backbonejs.md",
            "Linguagem-inspirada-em-Java.md",
            "Diferencas-Entre-BDD-TDD-e-DD.md",
            "App-que-faz-o-upload-de-arquivos.md",
            "Estoria-e-feature.md",
            "Arquivo-YAML.md",
            "Cluster-Kubernetes-em-producao.md",
            "Desenvolvimento-Moderno-de-Software.md",
            "Pipeline-de-Deploy.md",
            "Introducao-ao-GitLab.md",
            "O-que-um-CICD.md",
            "Unidades-de-Medida-no-CSS.md",
            "Responsividade.md",
            "Flexbox.md",
            "API-Avengers-com-SpringBoot-Kotlin.md",
            "Sistema-para-Eleicao-Usando-Quarkus-Framework.md",
            "Introducao-a-linguagem-Solidity.md",
            "Cryptocurrencies-Bitcoin.md",
            "Blockchain-e-Smart-Contracts-Ethereum.md",
            "Desenvolvimento-de-Smart-Contracts.md",
            "Como-funciona-a-Blockchain.md",
            "Introducao-a-Blockchain.md",
            "Testes-de-API.md",
            "Escalonamento-de-Topicos-em-Alta-com-spring-e-AWS.md",
            "Introducao-ou-preludio-em-Java.md",
            "Portifolio-de-C-e-C-Basico.md",
            "Portfolio-em-em-Python.md",
            "Criar-o-projeto-em-C.md",
            "Site-white-label.md",
            "Buscar-Design-Systems-Figma.md",
            "Servicos-de-Web-Developer-Iniciante.md",
            "React-e-Django-juntos.md",
            "Bancos-de-Dados-de-Vetores.md",
            "O-uso-de-else-e-considerado-ruim.md",
            "Sintaxe-de-uma-linguagem-de-programacao.md",
            "Rust.md",
            "IOCP-IO-Completion-Ports.md",
            "Erlang.md",
            "Multitarefa-ou-multitasking.md",
            "PHP-em-2024.md",
            "Artigo-do-Google-seguranca-da-memoria.md",
            "Linguagem-de-programacao-Zig.md",
            "path.md",
            "Lossy-e-lossless.md",
            "Diff-tool-in-computing.md",
            "Entendendo-o-Commit-Git.md",
            "monorepo-monolithic-repository.md",
            "streams-e-libs-em-Ruby.md",
            "Garbage-Collector-Overview.md",
            "Concorrencia-em-Go.md",
            "Akka-para-sistemas-concorrentes.md",
            "scheduler-de-green-threads.md",
            "Green-threads-lightweight-threads.md",
            "free-thread.md",
            "background-jobs.md",
            "JMS-Java-Message-Service-e-Sidekiq.md",
            "Filas-threads-e-pools.md",
            "Connection-pools.md",
            "thread-pools.md",
            "Fibers-e-Generators.md",
            "Coroutine-rotina-cooperativa-ou-corotina.md",
            "EventMachine-biblioteca-Ruby.md",
            "GIL-Global-Interpreter-Lock.md",
            "kernel.md",
            "context-switching-troca-de-contexto.md",
            "OpenMP-e-OpenMPI.md",
            "UTF-8.md",
            "protobuf.md",
            "IP-TCP-HTTP.md",
            "Sockets.md",
            "Named-pipes-ou-FIFOs.md",
            "SIGINT.md",
            "Encadear-processos-com-pipes-or.md",
            "STDIN-STDOUT-e-STDERR.md"
        ]
    };

    const menuContainer = document.getElementById("menu-hierarquia");
    let html = "<ul>";

    for (const [folder, files] of Object.entries(structure)) {
      html += `
                <li class="folder">
                    <details open>
                        <summary>${folder}</summary>
                        <ul>
                            ${files
                              .map(
                                (file) => `
                                <li>
                                    <a href="#" class="doc-link" data-path="${folder}/${file}">
                                        ${file
                                          .replace(".md", "")
                                          .replace(/-/g, " ")
                                          .replace(/\b\w/g, (l) =>
                                            l.toUpperCase()
                                          )}
                                    </a>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                    </details>
                </li>
            `;
    }

    html += "</ul>";
    menuContainer.innerHTML = html;

    document.querySelectorAll(".doc-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const path = link.dataset.path;
        document.getElementById("doc-content").innerHTML =
          '<div class="loading">Carregando...</div>';
        fetch(`docs/${path}`)
          .then((response) => {
            if (!response.ok) throw new Error("Documento não encontrado");
            return response.text();
          })
          .then((markdown) => {
            document.getElementById("doc-content").innerHTML =
              marked.parse(markdown);
            window.history.pushState({}, "", `#${path}`);
          })
          .catch((error) => {
            document.getElementById("doc-content").innerHTML = `
                            <div class="error">
                                <h3>Erro ao carregar documento</h3>
                                <p>${error.message}</p>
                            </div>
                        `;
          });
      });
    });

    if (window.location.hash) {
      const path = window.location.hash.substring(1);
      document.getElementById("doc-content").innerHTML =
        '<div class="loading">Carregando...</div>';
      fetch(`docs/${path}`)
        .then((response) => {
          if (!response.ok) throw new Error("Documento não encontrado");
          return response.text();
        })
        .then((markdown) => {
          document.getElementById("doc-content").innerHTML =
            marked.parse(markdown);
        })
        .catch((error) => {
          document.getElementById("doc-content").innerHTML = `
                        <div class="error">
                            <h3>Erro ao carregar documento</h3>
                            <p>${error.message}</p>
                        </div>
                    `;
        });
    } else {
      const firstFolder = Object.keys(structure)[0];
      const firstFile = structure[firstFolder][0];
      document.getElementById("doc-content").innerHTML =
        '<div class="loading">Carregando...</div>';
      fetch(`docs/${firstFolder}/${firstFile}`)
        .then((response) => {
          if (!response.ok) throw new Error("Documento não encontrado");
          return response.text();
        })
        .then((markdown) => {
          document.getElementById("doc-content").innerHTML =
            marked.parse(markdown);
          window.history.pushState({}, "", `#${firstFolder}/${firstFile}`);
        })
        .catch((error) => {
          document.getElementById("doc-content").innerHTML = `
                        <div class="error">
                            <h3>Erro ao carregar documento</h3>
                            <p>${error.message}</p>
                        </div>
                    `;
        });
    }

    window.addEventListener("popstate", () => {
      if (window.location.hash) {
        const path = window.location.hash.substring(1);
        document.getElementById("doc-content").innerHTML =
          '<div class="loading">Carregando...</div>';
        fetch(`docs/${path}`)
          .then((response) => {
            if (!response.ok) throw new Error("Documento não encontrado");
            return response.text();
          })
          .then((markdown) => {
            document.getElementById("doc-content").innerHTML =
              marked.parse(markdown);
          })
          .catch((error) => {
            document.getElementById("doc-content").innerHTML = `
                            <div class="error">
                                <h3>Erro ao carregar documento</h3>
                                <p>${error.message}</p>
                            </div>
                        `;
          });
      }
    });
  } catch (error) {
    console.error("Erro:", error);
    document.getElementById("menu-hierarquia").innerHTML = `
            <div class="error">
                Erro ao carregar documentos: ${error.message}
            </div>
        `;
  }
});
