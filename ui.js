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

export function renderDocument(markdown, htmlContent, onCopy, path, onLinkClick) {
  const docContent = document.getElementById("doc-content");
  docContent.innerHTML = htmlContent;

  renderBreadcrumbs(path);
  renderTOC(markdown);

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

  docContent.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    if (href.startsWith("http")) {
      // Links externos abrem em nova aba
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    } else if (!href.startsWith("#")) {
      // Links internos intercedidos para SPA
      a.addEventListener("click", (e) => {
        e.preventDefault();
        let newPath = href;
        if (!href.includes("/") && path.includes("/")) {
          const currentFolder = path.split("/")[0];
          newPath = `${currentFolder}/${href}`;
        }
        onLinkClick(newPath);
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

function renderBreadcrumbs(path) {
  const breadcrumbsContainer = document.createElement("div");
  breadcrumbsContainer.className = "breadcrumbs";

  const parts = path.split("/");
  const folder = formatName(decodeURIComponent(parts[0]));
  const file = formatName(decodeURIComponent(parts[1]).replace(".md", ""));

  breadcrumbsContainer.innerHTML = `
    <span>📚 Notas</span>
    <span>${folder}</span>
    <span>${file}</span>
  `;

  const docContent = document.getElementById("doc-content");
  docContent.insertBefore(breadcrumbsContainer, docContent.firstChild);
}

function renderTOC(markdown) {
  const headers = markdown.match(/^##\s+.+$/gm);
  if (!headers || headers.length < 2) return;

  const tocContainer = document.createElement("div");
  tocContainer.className = "toc-container";
  tocContainer.innerHTML = "<h4>Índice</h4><ul class='toc-list'></ul>";

  const tocList = tocContainer.querySelector(".toc-list");

  headers.forEach((header) => {
    const title = header.replace(/^##\s+/, "");
    const id = title
      .toLowerCase()
      .trim()
      .replace(/[^\w]+/g, "-");

    const li = document.createElement("li");
    li.className = "toc-item";
    li.innerHTML = `<a href="#${id}" class="toc-link">${title}</a>`;
    tocList.appendChild(li);

    // Adicionar IDs aos cabeçalhos reais no DOM de forma mais robusta
    const docHeaders = document.querySelectorAll("#doc-content h2");
    docHeaders.forEach((h) => {
      if (h.textContent.trim() === title.trim()) h.id = id;
    });
  });

  tocList.querySelectorAll(".toc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const docContent = document.getElementById("doc-content");
  // Inserir após breadcrumbs
  const breadcrumbs = docContent.querySelector(".breadcrumbs");
  if (breadcrumbs) {
    breadcrumbs.after(tocContainer);
  } else {
    docContent.insertBefore(tocContainer, docContent.firstChild);
  }
}

export function setupThemeToggle() {
  const toggle = document.createElement("button");
  toggle.className = "theme-toggle";
  toggle.innerHTML = "🌓";
  toggle.title = "Alternar Tema";
  document.body.appendChild(toggle);

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  toggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
}

export function setupScrollTop() {
  const btn = document.createElement("div");
  btn.className = "scroll-top";
  btn.innerHTML = "↑";
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
