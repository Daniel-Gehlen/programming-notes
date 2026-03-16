import { formatName, encodeFolderName } from "./utils.js";

export function renderMenu(structure, onLinkClick, openAll = false) {
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

  menuContainer.querySelectorAll(".doc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      onLinkClick(link.dataset.path);
    });
  });
}

export function renderDocument(markdown, htmlContent, onCopy) {
  const docContent = document.getElementById("doc-content");
  docContent.innerHTML = htmlContent;

  docContent.querySelectorAll("pre").forEach((pre) => {
    if (!pre.querySelector(".copy-btn")) {
      const button = document.createElement("button");
      button.className = "copy-btn";
      button.textContent = "Copiar";
      pre.style.position = "relative";
      pre.appendChild(button);
      button.addEventListener("click", () => {
        const code = pre.querySelector("code").textContent;
        onCopy(code, button);
      });
    }
  });

  if (window.hljs) window.hljs.highlightAll();
}

export function showWelcomePage() {
  document.getElementById("doc-content").innerHTML = `
        <div class="welcome-content">
            <h2>👋 Bem-vindo às Notas de Programação</h2>
            <p>Selecione um documento no menu ao lado ou utilize a busca para encontrar conteúdo específico.</p>
            <p>Este repositório contém documentação técnica sobre diversos tópicos de programação e tecnologia.</p>
        </div>
    `;
}

export function showLoading() {
  document.getElementById("doc-content").innerHTML =
    '<div class="loading">📖 Carregando documento...</div>';
}

export function showError(message, path, variations = []) {
  document.getElementById("doc-content").innerHTML = `
      <div class="error">
        <h3>❌ Erro ao carregar documento</h3>
        <p>${message}</p>
        ${
          variations.length
            ? `
          <p>Tentativas realizadas:</p>
          <ul>
            ${variations.map((v) => `<li>${v}</li>`).join("")}
          </ul>`
            : ""
        }
      </div>
    `;
}
