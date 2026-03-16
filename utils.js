export function encodeFolderName(folderName) {
  if (folderName === "C#") return "C%23";
  if (folderName === "Data-Base") return "Data-Base";
  if (folderName === "QA") return "QA";
  return encodeURIComponent(folderName);
}

export function decodeFolderName(encodedName) {
  if (encodedName === "C%23") return "C#";
  if (encodedName === "Data-Base") return "Data-Base";
  if (encodedName === "QA") return "QA";
  return decodeURIComponent(encodedName);
}

export function formatName(name) {
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/C#/g, "C#")
    .replace(/Ai/g, "AI")
    .replace(/Ml/g, "ML")
    .replace(/Data Base/g, "Data-Base");
}

export function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

export const Logger = {
  info: (msg, data) => console.log(`[INFO] [${new Date().toISOString()}] ${msg}`, data || ""),
  warn: (msg, data) => console.warn(`[WARN] [${new Date().toISOString()}] ${msg}`, data || ""),
  error: (msg, error) => console.error(`[ERROR] [${new Date().toISOString()}] ${msg}`, error || ""),
};
