// Configuração do Marked
marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code, lang) {
    const validLang = ["javascript", "python", "bash"].includes(lang)
      ? lang
      : "plaintext";
    const codeBlock = `<pre><code class="language-${validLang}">${code}</code></pre>`;
    return codeBlock;
  },
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Carrega a estrutura de documentos
    const response = await fetch("docs/structure.json");
    if (!response.ok)
      throw new Error("Erro ao carregar estrutura de documentos");
    const structure = await response.json();

    // Renderiza o menu com pastas fechadas por padrão
    renderMenu(structure, false);

    // Configura a busca
    setupSearch(structure);

    // Verifica se há hash na URL
    if (window.location.hash) {
      const path = window.location.hash.substring(1);
      loadDocument(path);
    } else {
      // Mostra apenas a página inicial se não houver hash
      showWelcomePage();
    }

    // Configura botões de copiar código
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("copy-btn")) {
        const code = e.target.parentNode.querySelector("code").textContent;
        navigator.clipboard.writeText(code).then(() => {
          e.target.textContent = "Copiado!";
          setTimeout(() => (e.target.textContent = "Copiar"), 2000);
        });
      }
    });

    // Configura o popstate para voltar à página inicial
    window.addEventListener("popstate", (event) => {
      if (!window.location.hash) {
        showWelcomePage();
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

  // Ordena as pastas alfabeticamente
  const sortedFolders = Object.keys(structure).sort();

  for (const folder of sortedFolders) {
    // Ordena os arquivos alfabeticamente
    const files = structure[folder].sort();

    html += `
      <li class="folder">
        <details ${openAll ? "open" : ""}>
          <summary>${folder
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())}</summary>
          <ul>
            ${files
              .map(
                (file) => `
              <li>
                <a href="#" class="doc-link" data-path="${folder}/${file}">
                  ${file
                    .replace(".md", "")
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
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

  // Adiciona event listeners para os links
  document.querySelectorAll(".doc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const path = link.dataset.path;
      loadDocument(path);
    });
  });
}

function loadDocument(path) {
  document.getElementById("doc-content").innerHTML =
    '<div class="loading">Carregando...</div>';

  fetch(`docs/${path}`)
    .then((response) => {
      if (!response.ok) throw new Error("Documento não encontrado");
      return response.text();
    })
    .then((markdown) => {
      // Atualiza a URL sem adicionar ao histórico
      window.history.replaceState({}, "", `#${path}`);

      // Converte markdown para HTML
      const html = marked.parse(markdown);

      // Adiciona botões de copiar para blocos de código
      const docContent = document.getElementById("doc-content");
      docContent.innerHTML = html;

      // Adiciona botões de copiar
      docContent.querySelectorAll("pre").forEach((pre) => {
        if (!pre.querySelector(".copy-btn")) {
          const button = document.createElement("button");
          button.className = "copy-btn";
          button.textContent = "Copiar";
          pre.style.position = "relative";
          pre.appendChild(button);
        }
      });
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

function showWelcomePage() {
  document.getElementById("doc-content").innerHTML = `
    <div class="welcome-content">
      <h2>Bem-vindo às Notas de Programação de Daniel Gehlen</h2>
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
        // Se a busca for muito curta, mostra a página inicial
        if (!window.location.hash) {
          showWelcomePage();
        }
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
  docContent.innerHTML = '<div class="loading">Buscando documentos...</div>';

  // Coleta todos os arquivos
  const allFiles = [];
  for (const [folder, files] of Object.entries(structure)) {
    for (const file of files) {
      allFiles.push({ folder, file, path: `${folder}/${file}` });
    }
  }

  // Realiza a busca
  const results = [];
  for (const item of allFiles) {
    try {
      const response = await fetch(`docs/${item.path}`);
      if (!response.ok) continue;
      const text = await response.text();

      if (text.toLowerCase().includes(searchTerm)) {
        results.push({
          ...item,
          content: text,
        });
      }
    } catch (error) {
      console.error(`Error loading ${item.path}:`, error);
    }
  }

  // Exibe os resultados
  displaySearchResults(results, searchTerm);
}

function displaySearchResults(results, searchTerm) {
  const docContent = document.getElementById("doc-content");

  if (results.length === 0) {
    docContent.innerHTML = `
      <div class="search-results">
        <h2>Nenhum resultado encontrado para "${searchTerm}"</h2>
        <p>Tente usar termos diferentes ou mais específicos.</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="search-results">
      <h2>Resultados da busca por "${searchTerm}"</h2>
      <p>${results.length} documentos encontrados:</p>
  `;

  for (const doc of results) {
    // Extrai um trecho do conteúdo com o termo buscado
    const contentLower = doc.content.toLowerCase();
    const termPos = contentLower.indexOf(searchTerm);
    let snippet = doc.content.substring(
      Math.max(0, termPos - 50),
      termPos + 50
    );

    // Destaca o termo buscado
    snippet = snippet.replace(
      new RegExp(searchTerm, "gi"),
      (match) => `<span class="search-highlight">${match}</span>`
    );

    html += `
      <div class="search-result">
        <h3>
          <a href="#" class="doc-link" data-path="${doc.path}">
            ${doc.file
              .replace(".md", "")
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </a>
          <small>(${doc.folder
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())})</small>
        </h3>
        <div class="search-snippet">${snippet}...</div>
      </div>
    `;
  }

  html += `</div>`;
  docContent.innerHTML = html;

  // Adiciona event listeners para os links dos resultados
  document.querySelectorAll("#doc-content .doc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      loadDocument(link.dataset.path);
    });
  });
}
