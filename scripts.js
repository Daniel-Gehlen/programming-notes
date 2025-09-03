marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code, lang) {
    const validLang = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language: validLang }).value;
  },
});

const FOLDER_VARIANTS = {
  "Data-Base": ["Data-Base", "Data Base", "DataBase", "data-base"],
  "C#": ["C%23", "C#", "c%23", "c-sharp", "CSharp"],
  QA: ["QA", "qa", "Qa", "Q&A"],
};

const REVERSE_FOLDER_MAPPING = {
  "c%23": "C#",
  "c-sharp": "C#",
  csharp: "C#",
  "data base": "Data-Base",
  database: "Data-Base",
  "q&a": "QA",
};

// Variáveis para otimização da busca
let searchIndex = [];
let normalizedStructure = {};
let searchIndexBuilt = false;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("docs/structure.json");
    if (!response.ok) throw new Error("Erro ao carregar estrutura");
    const structure = await response.json();

    normalizedStructure = normalizeStructure(structure);

    // Renderizar menu imediatamente sem construir índice de busca
    renderMenu(normalizedStructure, false);
    setupSearch(normalizedStructure);

    if (window.location.hash) {
      const path = decodeURIComponent(window.location.hash.substring(1));
      loadDocument(path);
    } else {
      showWelcomePage();
    }

    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("copy-btn")) {
        const code = e.target.parentNode.querySelector("code").textContent;
        navigator.clipboard.writeText(code).then(() => {
          const originalText = e.target.textContent;
          e.target.textContent = "✓ Copiado!";
          e.target.style.background = "var(--color-success)";
          setTimeout(() => {
            e.target.textContent = originalText;
            e.target.style.background = "var(--color-highlight)";
          }, 2000);
        });
      }
    });

    window.addEventListener("popstate", (event) => {
      if (!window.location.hash) {
        showWelcomePage();
      } else {
        const path = decodeURIComponent(window.location.hash.substring(1));
        loadDocument(path);
      }
    });

    // Iniciar construção do índice em segundo plano
    setTimeout(() => buildSearchIndex(normalizedStructure), 1000);
  } catch (error) {
    console.error("Erro:", error);
    document.getElementById("menu-hierarquia").innerHTML = `
            <div class="error">
                Erro ao carregar documentos: ${error.message}
            </div>
        `;
  }
});

// Função para construir índice de busca em segundo plano
async function buildSearchIndex(structure) {
  if (searchIndexBuilt) return;

  console.log("Iniciando construção do índice de busca em segundo plano...");

  const tempIndex = [];

  for (const [folder, files] of Object.entries(structure)) {
    for (const file of files) {
      const encodedPath = `${encodeFolderName(folder)}/${encodeURIComponent(
        file
      )}`;
      let success = false;

      try {
        const response = await fetch(`docs/${encodedPath}`);
        if (response.ok) {
          const content = await response.text();
          tempIndex.push({
            folder,
            file,
            path: encodedPath,
            originalPath: `${folder}/${file}`,
            content: content.toLowerCase(),
          });
          success = true;
        }
      } catch (error) {
        console.log(`Falha ao indexar: ${encodedPath}`);
      }

      // Tentar variantes de pasta se falhou
      if (!success && FOLDER_VARIANTS[folder]) {
        for (const variant of FOLDER_VARIANTS[folder]) {
          if (variant === encodeFolderName(folder)) continue;

          try {
            const variantPath = `${variant}/${encodeURIComponent(file)}`;
            const response = await fetch(`docs/${variantPath}`);
            if (response.ok) {
              const content = await response.text();
              tempIndex.push({
                folder,
                file,
                path: variantPath,
                originalPath: `${folder}/${file}`,
                content: content.toLowerCase(),
              });
              break;
            }
          } catch (error) {
            console.log(`Falha ao indexar variante: ${variant}/${file}`);
          }
        }
      }
    }
  }

  searchIndex = tempIndex;
  searchIndexBuilt = true;

  console.log(
    `Índice de busca construído com ${searchIndex.length} documentos`
  );
}

function normalizeStructure(structure) {
  const normalized = {};

  for (const [folder, files] of Object.entries(structure)) {
    let normalizedFolder = folder;

    for (const [standardName, variants] of Object.entries(FOLDER_VARIANTS)) {
      if (variants.includes(folder)) {
        normalizedFolder = standardName;
        break;
      }
    }

    const lowerFolder = folder.toLowerCase();
    if (REVERSE_FOLDER_MAPPING[lowerFolder]) {
      normalizedFolder = REVERSE_FOLDER_MAPPING[lowerFolder];
    }

    if (!normalized[normalizedFolder]) {
      normalized[normalizedFolder] = [];
    }

    for (const file of files) {
      if (!normalized[normalizedFolder].includes(file)) {
        normalized[normalizedFolder].push(file);
      }
    }
  }

  return normalized;
}

function renderMenu(structure, openAll = false) {
  const menuContainer = document.getElementById("menu-hierarquia");
  let html = "<ul>";

  const sortedFolders = Object.keys(structure).sort();

  for (const folder of sortedFolders) {
    const files = structure[folder].sort();
    const encodedFolder = encodeFolderName(folder);

    html += `
            <li class="folder">
                <details ${openAll ? "open" : ""}>
                    <summary>${formatName(folder)}</summary>
                    <ul>
                        ${files
                          .map(
                            (file) => `
                            <li>
                                <a href="#" class="doc-link" data-path="${encodedFolder}/${encodeURIComponent(
                              file
                            )}">
                                    ${formatName(file.replace(".md", ""))}
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
      loadDocument(path);
    });
  });
}

function encodeFolderName(folderName) {
  if (folderName === "C#") return "C%23";
  if (folderName === "Data-Base") return "Data-Base";
  if (folderName === "QA") return "QA";
  return encodeURIComponent(folderName);
}

function decodeFolderName(encodedName) {
  if (encodedName === "C%23") return "C#";
  if (encodedName === "Data-Base") return "Data-Base";
  if (encodedName === "QA") return "QA";
  return decodeURIComponent(encodedName);
}

function formatName(name) {
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/C\#/g, "C#")
    .replace(/Ai/g, "AI")
    .replace(/Ml/g, "ML")
    .replace(/Data Base/g, "Data-Base");
}

async function loadDocument(path) {
  const docContent = document.getElementById("doc-content");
  docContent.innerHTML =
    '<div class="loading">📖 Carregando documento...</div>';

  if (!path.endsWith(".md")) {
    path += ".md";
  }

  const parts = path.split("/");
  const folder = decodeFolderName(parts[0]);
  const file = decodeURIComponent(parts[1]);

  let success = false;
  let finalPath = path;

  try {
    const encodedPath =
      encodeFolderName(folder) + "/" + encodeURIComponent(file);
    const response = await fetch(`docs/${encodedPath}`);
    if (response.ok) {
      const markdown = await response.text();
      renderDocument(markdown, path);
      success = true;
      finalPath = encodedPath;
    }
  } catch (error) {
    console.log(`Falha no caminho original: ${path}`);
  }

  if (!success && FOLDER_VARIANTS[folder]) {
    for (const variant of FOLDER_VARIANTS[folder]) {
      try {
        if (variant === encodeFolderName(folder)) continue;

        const variantPath = `${variant}/${encodeURIComponent(file)}`;
        const response = await fetch(`docs/${variantPath}`);
        if (response.ok) {
          const markdown = await response.text();
          renderDocument(markdown, path);
          success = true;
          finalPath = variantPath;
          console.log(`Sucesso com variante: ${variantPath}`);
          break;
        }
      } catch (error) {
        console.log(`Falha na variante: ${variant}/${file}`);
      }
    }
  }

  if (!success) {
    docContent.innerHTML = `
      <div class="error">
        <h3>❌ Erro ao carregar documento</h3>
        <p>Documento não encontrado: ${path}</p>
        <p>Tentativas realizadas:</p>
        <ul>
          <li>docs/${encodeFolderName(folder)}/${encodeURIComponent(file)}</li>
          ${
            FOLDER_VARIANTS[folder]
              ? FOLDER_VARIANTS[folder]
                  .map(
                    (variant) =>
                      `<li>docs/${variant}/${encodeURIComponent(file)}</li>`
                  )
                  .join("")
              : ""
          }
        </ul>
      </div>
    `;
  }
}

function renderDocument(markdown, originalPath) {
  window.history.replaceState({}, "", `#${encodeURIComponent(originalPath)}`);

  // Processar tabelas para adicionar container com rolagem
  const processedMarkdown = markdown.replace(
    /<table>[\s\S]*?<\/table>/g,
    (match) => `<div class="table-container">${match}</div>`
  );

  const html = marked.parse(processedMarkdown);
  const docContent = document.getElementById("doc-content");
  docContent.innerHTML = html;

  docContent.querySelectorAll("pre").forEach((pre) => {
    if (!pre.querySelector(".copy-btn")) {
      const button = document.createElement("button");
      button.className = "copy-btn";
      button.textContent = "Copiar";
      pre.style.position = "relative";
      pre.appendChild(button);
    }
  });

  hljs.highlightAll();
}

function showWelcomePage() {
  document.getElementById("doc-content").innerHTML = `
        <div class="welcome-content">
            <h2>👋 Bem-vindo às Notas de Programação</h2>
            <p>Selecione um documento no menu ao lado ou utilize a busca para encontrar conteúdo específico.</p>
            <p>Este repositório contém documentação técnica sobre diversos tópicos de programação e tecnologia.</p>
        </div>
    `;
  window.history.replaceState({}, "", window.location.pathname);
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  let searchTimeout = null;

  searchInput.addEventListener("input", async (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm.length < 2) {
      if (!window.location.hash) showWelcomePage();
      return;
    }

    // Se o índice ainda não foi construído, mostrar mensagem de carregamento
    if (!searchIndexBuilt) {
      document.getElementById("doc-content").innerHTML = `
        <div class="search-results">
          <h2>🔍 Construindo índice de busca...</h2>
          <p>Por favor, aguarde enquanto preparamos a busca. Isso acontece apenas uma vez.</p>
        </div>
      `;

      // Aguardar a construção do índice se ainda não estiver pronto
      if (!searchIndexBuilt) {
        const checkIndex = setInterval(() => {
          if (searchIndexBuilt) {
            clearInterval(checkIndex);
            displaySearchResults(searchIndex, searchTerm);
          }
        }, 500);
      }
      return;
    }

    // Busca instantânea usando o índice pré-carregado
    const results = searchIndex.filter(
      (item) =>
        item.content.includes(searchTerm) ||
        item.file.toLowerCase().includes(searchTerm) ||
        item.folder.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(results, searchTerm);
  });
}

function displaySearchResults(results, searchTerm) {
  const docContent = document.getElementById("doc-content");

  if (results.length === 0) {
    docContent.innerHTML = `
            <div class="search-results">
                <h2>🔍 Nenhum resultado encontrado</h2>
                <p>Nenhum documento encontrado para "${searchTerm}"</p>
                <p>Tente usar termos diferentes ou mais específicos.</p>
            </div>
        `;
    return;
  }

  let html = `
        <div class="search-results">
            <h2>📋 Resultados da busca</h2>
            <p>Encontrados ${results.length} documentos para "${searchTerm}":</p>
    `;

  for (const doc of results) {
    const contentLower = doc.content;
    const termPos = contentLower.indexOf(searchTerm);
    let snippet = doc.content.substring(
      Math.max(0, termPos - 60),
      termPos + 60
    );

    snippet = snippet.replace(
      new RegExp(searchTerm, "gi"),
      (match) => `<span class="search-highlight">${match}</span>`
    );

    html += `
            <div class="search-result">
                <h3>
                    <a href="#" class="doc-link" data-path="${
                      doc.originalPath
                    }">
                        ${formatName(doc.file.replace(".md", ""))}
                    </a>
                    <small>(${formatName(doc.folder)})</small>
                </h3>
                <div class="search-snippet">${snippet}...</div>
            </div>
        `;
  }

  html += `</div>`;
  docContent.innerHTML = html;

  document.querySelectorAll("#doc-content .doc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      loadDocument(link.dataset.path);
    });
  });
}
