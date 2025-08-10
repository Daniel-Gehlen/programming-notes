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
        "Manipulacao-em-Redes-Sociais.md"
      ],
      "front-end": [
        "Categoria-de-Cores.md",
        "Design-System.md",
        "A-Importancia-da-Tipografia.md",
        "8-Criterios-de-Scapin-and-Bastien.md"
      ],
      "gerenciador-de-pacotes": [
        "asdf-gerenciador-de-versoes-universal.md",
      ],
      "hospedagem": [
        "Hospedagem-compartilhadas-e-opcoes-semi-dedicas.md",
        "Heroku.md",
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
