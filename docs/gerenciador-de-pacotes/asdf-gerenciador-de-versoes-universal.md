# asdf: Gerenciador de Versões Universal

## O que é o asdf?
O **asdf** é um **gerenciador de versões universal** para linguagens de programação, ferramentas e pacotes. Ele permite instalar e alternar entre diferentes versões de linguagens (como Node.js, Python, Ruby, Go, etc.) e outras ferramentas de desenvolvimento em um único ambiente, sem conflitos.

---

## Principais características

✅ **Multi-linguagem** – Suporta Python, Node.js, Java, Rust, Elixir, Ruby e muitas outras.
✅ **Plugins** – Cada linguagem/tool tem seu próprio plugin (ex.: `asdf-nodejs`, `asdf-python`).
✅ **Simples e leve** – Substitui vários gerenciadores como `nvm`, `pyenv`, `rbenv`, etc.
✅ **Shell-integrado** – Funciona com Bash, Zsh, Fish, etc.

---

## Como instalar?
**No Linux/macOS (via Git):**

```bash
# Adicionar plugin (ex.: Node.js)
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

# Listar versões disponíveis
asdf list all nodejs

# Instalar uma versão
asdf install nodejs 20.5.0

# Definir versão global
asdf global nodejs 20.5.0

# Ver versão instalada
node --version
```

---

> O **asdf** é uma ótima ferramenta para desenvolvedores que trabalham com múltiplas linguagens. 🚀

