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
  "C#": ["C%23", "C#", "c%23", "c-sharp"],
  QA: ["QA", "qa", "Qa", "Q&A"],
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("docs/structure.json");
    if (!response.ok) throw new Error("Erro ao carregar estrutura");
    const structure = await response.json();

    renderMenu(structure, false);
    setupSearch(structure);

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
  } catch (error) {
    console.error("Erro:", error);
    document.getElementById("menu-hierarquia").innerHTML = `
            <div class="error">
                Erro ao carregar documentos: ${error.message}
            </div>
        `;
  }
});

function renderMenu(structure, openAll = false) {
  const menuContainer = document.getElementById("menu-hierarquia");
  let html = "<ul>";

  const sortedFolders = Object.keys(structure).sort();

  for (const folder of sortedFolders) {
    const files = structure[folder].sort();

    html += `
            <li class="folder">
                <details ${openAll ? "open" : ""}>
                    <summary>${formatName(folder)}</summary>
                    <ul>
                        ${files
                          .map(
                            (file) => `
                            <li>
                                <a href="#" class="doc-link" data-path="${encodeURIComponent(
                                  folder
                                )}/${encodeURIComponent(file)}">
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
  const folder = decodeURIComponent(parts[0]);
  const file = decodeURIComponent(parts[1]);

  let success = false;
  let finalPath = path;

  // Primeiro tenta o caminho original (já codificado)
  try {
    const response = await fetch(`docs/${path}`);
    if (response.ok) {
      const markdown = await response.text();
      renderDocument(markdown, path);
      success = true;
    }
  } catch (error) {
    console.log(`Falha no caminho original: ${path}`);
  }

  // Se falhou, tenta as variantes da pasta
  if (!success && FOLDER_VARIANTS[folder]) {
    for (const variant of FOLDER_VARIANTS[folder]) {
      try {
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
          <li>docs/${path}</li>
          ${
            FOLDER_VARIANTS[folder]
              ? FOLDER_VARIANTS[folder]
                  .map((variant) => `<li>docs/${variant}/${file}</li>`)
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
  const html = marked.parse(markdown);
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

function setupSearch(structure) {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener(
    "input",
    debounce((e) => {
      const searchTerm = e.target.value.toLowerCase().trim();

      if (searchTerm.length < 2) {
        if (!window.location.hash) showWelcomePage();
        return;
      }

      searchDocuments(structure, searchTerm);
    }, 300)
  );
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

async function searchDocuments(structure, searchTerm) {
  const docContent = document.getElementById("doc-content");
  docContent.innerHTML = '<div class="loading">🔍 Buscando documentos...</div>';

  const allFiles = [];
  for (const [folder, files] of Object.entries(structure)) {
    for (const file of files) {
      const encodedPath = `${encodeURIComponent(folder)}/${encodeURIComponent(
        file
      )}`;
      allFiles.push({
        folder,
        file,
        path: encodedPath,
        originalPath: `${folder}/${file}`,
      });
    }
  }

  const results = [];
  for (const item of allFiles) {
    let success = false;

    // Tenta caminho codificado primeiro
    try {
      const response = await fetch(`docs/${item.path}`);
      if (response.ok) {
        const text = await response.text();
        if (text.toLowerCase().includes(searchTerm)) {
          results.push({ ...item, content: text });
        }
        success = true;
      }
    } catch (error) {
      console.log(`Busca falha no caminho codificado: ${item.path}`);
    }

    // Se falhou, tenta variantes
    if (!success && FOLDER_VARIANTS[item.folder]) {
      for (const variant of FOLDER_VARIANTS[item.folder]) {
        try {
          const variantPath = `${variant}/${encodeURIComponent(item.file)}`;
          const response = await fetch(`docs/${variantPath}`);
          if (response.ok) {
            const text = await response.text();
            if (text.toLowerCase().includes(searchTerm)) {
              results.push({ ...item, content: text });
            }
            break;
          }
        } catch (error) {
          console.log(`Busca falha na variante: ${variant}/${item.file}`);
        }
      }
    }
  }

  displaySearchResults(results, searchTerm);
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
    const contentLower = doc.content.toLowerCase();
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
