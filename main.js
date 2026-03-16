import { fetchStructure, fetchDocument } from "./api.js";
import { FOLDER_VARIANTS, REVERSE_FOLDER_MAPPING } from "./constants.js";
import { sanitizeInput, Logger } from "./utils.js";
import {
  renderMenu,
  renderDocument,
  showWelcomePage,
  showLoading,
  showError,
  setupThemeToggle,
  setupScrollTop,
} from "./ui.js";
import {
  buildSearchIndex,
  performSearch,
  displaySearchResults,
  isSearchIndexBuilt,
} from "./search.js";

let normalizedStructure = {};

// Marked configuration
const marked = window.marked;
marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code, lang) {
    const hljs = window.hljs;
    const validLang = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language: validLang }).value;
  },
});

async function init() {
  try {
    const structure = await fetchStructure();
    normalizedStructure = normalizeStructure(structure);

    renderMenu(normalizedStructure, loadDoc);
    setupSearch();
    setupThemeToggle();
    setupScrollTop();

    if (window.location.hash) {
      const path = decodeURIComponent(window.location.hash.substring(1));
      loadDoc(path);
    } else {
      showWelcomePage();
    }

    window.addEventListener("popstate", () => {
      if (!window.location.hash) {
        showWelcomePage();
      } else {
        const path = decodeURIComponent(window.location.hash.substring(1));
        loadDoc(path);
      }
    });

    window.addEventListener("error", (event) => {
      Logger.error("Erro global capturado:", event.error);
      showError("Ocorreu um erro inesperado. Por favor, recarregue a página.");
    });

    Logger.info("Aplicação inicializada com sucesso");
    setTimeout(() => buildSearchIndex(normalizedStructure), 1000);
  } catch (error) {
    Logger.error("Erro na inicialização:", error);
    document.getElementById("menu-hierarquia").innerHTML = `
            <div class="error">Erro ao carregar documentos: ${error.message}</div>
        `;
  }
}

async function loadDoc(path) {
  showLoading();
  try {
    const { content } = await fetchDocument(path);
    window.history.replaceState({}, "", `#${encodeURIComponent(path)}`);

    const processedMarkdown = content.replace(
      /<table>[\s\S]*?<\/table>/g,
      (match) => `<div class="table-container">${match}</div>`
    );

    const html = marked.parse(processedMarkdown);
    renderDocument(content, html, handleCopy, path);
  } catch (error) {
    showError(error.message, path);
  }
}

function handleCopy(code, button) {
  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = "✓ Copiado!";
    button.style.background = "var(--color-success)";
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "var(--color-highlight)";
    }, 2000);
  });
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

    if (!normalized[normalizedFolder]) normalized[normalizedFolder] = [];
    for (const file of files) {
      if (!normalized[normalizedFolder].includes(file)) {
        normalized[normalizedFolder].push(file);
      }
    }
  }
  return normalized;
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", async (e) => {
    const searchTerm = sanitizeInput(e.target.value.toLowerCase().trim());

    if (searchTerm.length < 2) {
      if (!window.location.hash) showWelcomePage();
      return;
    }

    if (!isSearchIndexBuilt()) {
      document.getElementById("doc-content").innerHTML = `
        <div class="search-results">
          <h2>🔍 Construindo índice de busca...</h2>
        </div>
      `;
      const checkIndex = setInterval(() => {
        if (isSearchIndexBuilt()) {
          clearInterval(checkIndex);
          const results = performSearch(searchTerm);
          displaySearchResults(results, searchTerm, loadDoc);
        }
      }, 500);
      return;
    }

    const results = performSearch(searchTerm);
    displaySearchResults(results, searchTerm, loadDoc);
  });
}

document.addEventListener("DOMContentLoaded", init);
