import { encodeFolderName, decodeFolderName } from "./utils.js";
import { FOLDER_VARIANTS } from "./constants.js";

const docCache = new Map();

export async function fetchStructure() {
  const response = await fetch("docs/structure.json");
  if (!response.ok) throw new Error("Erro ao carregar estrutura");
  return await response.json();
}

export async function fetchDocument(path) {
  if (!path || !path.includes("/")) {
    throw new Error("Caminho de documento inválido");
  }

  if (!path.endsWith(".md")) {
    path += ".md";
  }

  const parts = path.split("/");
  const folder = decodeFolderName(parts[0]);
  const fileName = parts[1];

  if (!fileName || fileName === "undefined") {
    throw new Error(`Arquivo inválido no caminho: ${path}`);
  }

  const file = decodeURIComponent(fileName);

  // Check cache
  const cached = docCache.get(path);
  if (cached) return { content: cached, path };

  // Try original path
  try {
    const encodedPath = encodeFolderName(folder) + "/" + encodeURIComponent(file);
    const response = await fetch(`docs/${encodedPath}`);
    if (response.ok) {
      const content = await response.text();
      docCache.set(encodedPath, content);
      return { content, path: encodedPath };
    }
  } catch {
    /* ignore */
  }

  // Try variants
  if (FOLDER_VARIANTS[folder]) {
    for (const variant of FOLDER_VARIANTS[folder]) {
      try {
        if (variant === encodeFolderName(folder)) continue;
        const variantPath = `${variant}/${encodeURIComponent(file)}`;
        const response = await fetch(`docs/${variantPath}`);
        if (response.ok) {
          const content = await response.text();
          docCache.set(variantPath, content);
          return { content, path: variantPath };
        }
      } catch {
        /* ignore */
      }
    }
  }

  throw new Error(`Documento não encontrado: ${path}`);
}

export function getCache() {
  return docCache;
}
