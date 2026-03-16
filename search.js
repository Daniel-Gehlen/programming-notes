import { formatName, encodeFolderName, Logger } from "./utils.js";
import { getCache } from "./api.js";
import { FOLDER_VARIANTS } from "./constants.js";

let searchIndex = [];
let searchIndexBuilt = false;

export async function buildSearchIndex(structure) {
  if (searchIndexBuilt) return;
  Logger.info("Iniciando construção do índice de busca...");

  const tempIndex = [];
  const docCache = getCache();

  for (const [folder, files] of Object.entries(structure)) {
    for (const file of files) {
      const encodedPath = `${encodeFolderName(folder)}/${encodeURIComponent(file)}`;
      let content = null;

      try {
        const response = await fetch(`docs/${encodedPath}`);
        if (response.ok) {
          content = await response.text();
          docCache.set(encodedPath, content);
        }
      } catch {
        /* ignore */
      }

      if (!content && FOLDER_VARIANTS[folder]) {
        for (const variant of FOLDER_VARIANTS[folder]) {
          if (variant === encodeFolderName(folder)) continue;
          try {
            const variantPath = `${variant}/${encodeURIComponent(file)}`;
            const response = await fetch(`docs/${variantPath}`);
            if (response.ok) {
              content = await response.text();
              docCache.set(variantPath, content);
              break;
            }
          } catch {
            /* ignore */
          }
        }
      }

      if (content) {
        tempIndex.push({
          folder,
          file,
          path: encodedPath,
          originalPath: `${folder}/${file}`,
          content: content.toLowerCase(),
        });
      }
    }
  }

  searchIndex = tempIndex;
  searchIndexBuilt = true;
  Logger.info(`Índice de busca construído com ${searchIndex.length} documentos`);
}

export function performSearch(searchTerm) {
  if (!searchIndexBuilt) return null;

  return searchIndex.filter(
    (item) =>
      item.content.includes(searchTerm) ||
      item.file.toLowerCase().includes(searchTerm) ||
      item.folder.toLowerCase().includes(searchTerm)
  );
}

export function displaySearchResults(results, searchTerm, onLinkClick) {
  const docContent = document.getElementById("doc-content");

  if (!results || results.length === 0) {
    docContent.innerHTML = `
            <div class="search-results">
                <h2>🔍 Nenhum resultado encontrado</h2>
                <p>Nenhum documento encontrado para "${searchTerm}"</p>
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
    const termPos = doc.content.indexOf(searchTerm);
    let snippet = doc.content.substring(Math.max(0, termPos - 60), termPos + 60);

    snippet = snippet.replace(
      new RegExp(searchTerm, "gi"),
      (match) => `<span class="search-highlight">${match}</span>`
    );

    html += `
            <div class="search-result">
                <h3>
                    <a href="#" class="doc-link" data-path="${doc.originalPath}">
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

  docContent.querySelectorAll(".doc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      onLinkClick(link.dataset.path);
    });
  });
}

export function isSearchIndexBuilt() {
  return searchIndexBuilt;
}
