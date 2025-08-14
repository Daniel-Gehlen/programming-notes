# Ferramenta V para Gerenciamento de Ambientes e Dependências no Python

## Visão Geral

Ferramenta moderna que simplifica:

- 🐍 Gerenciamento de versões do Python
- 📦 Controle de dependências
- 🚀 Execução de scripts com configuração mínima

---

## 1. Gerenciamento de Versões do Python

### Instalação de versões específicas

```bash
v install python 3.7  # Instala Python 3.7 automaticamente
```

### Criação de ambientes virtuais

```bash
v env --python=3.7  # Cria ambiente com Python 3.7
```

---

## 2. Integração com Pip

### Instalação tradicional de dependências

```bash
vpip install -r requirements.txt
```

### Compilação de requirements

```bash
vpip compile  # Garante versões corretas
```

---

## 3. Gerenciamento com pyproject.toml

### Adição/remoção de dependências

```bash
v add rich      # Adiciona ao pyproject.toml
v remove rich   # Remove do pyproject.toml
```

---

## 4. Execução Temporária de Scripts

### Rodar scripts com dependências efêmeras

```bash
v run --with rich script.py
```

**Exemplo script.py**:

```python
from rich.progress import track
for _ in track(range(100)):
    ...
```

---

## 5. Dependências Inline

### Metadados no cabeçalho do script

```python
#!/usr/bin/env python
# Requires: rich  # Dependência declarada no arquivo
```

Adição via CLI:

```bash
v edit --script script.py --add rich
```

---

## 6. Workspaces para Projetos Complexos

### Gerenciamento unificado

```bash
v workspace init
v workspace add package1
v workspace add package2  # Subprojetos compartilham dependências
```

---

## 7. Recursos Avançados

- 🔄 Resolução automática de conflitos de dependências
- 🏎️ Cache inteligente para instalações rápidas
- 🧩 Suporte a múltiplas versões Python simultâneas

---

## Comparativo de Funcionalidades

| Feature             | Comando Exemplo        | Vantagem                     |
| ------------------- | ---------------------- | ---------------------------- |
| Multi-versão Python | `v install python 3.9` | Isolamento sem conflitos     |
| Dependências inline | `# Requires: package`  | Portabilidade absoluta       |
| Workspaces          | `v workspace add`      | Gestão unificada de projetos |

---

## Conclusão

O **V** é ideal para:

- 👶 Iniciantes que querem simplicidade
- 🏗️ Desenvolvedores de projetos complexos
- 🔧 Quem busca produtividade no dia a dia

> **Dica**: Experimente `v run --with pandas script.py` para análise de dados sem instalação permanente! 🐼
