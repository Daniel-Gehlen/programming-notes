# O que é o Flet?

## Definição

Framework open-source Python para criar aplicativos **web**, **desktop** e **mobile** sem necessidade de HTML/CSS/JS. Inspirado no Flutter, usa componentes de UI reativos.

## Principais Características

- ✅ **Simplicidade**: Apenas Python (sem frontend complexo)
- 🌐 **Cross-platform**: Funciona em web, desktop e mobile
- 🔄 **Componentes reativos**: Atualizações automáticas da interface

---

## Por que usar Flet?

- 🐍 **Python puro** - Ideal para devs Python
- 🚀 **Desenvolvimento rápido** - Foco na lógica, não em múltiplas linguagens
- 🔌 **Integração fácil** com pandas, SQLAlchemy e outras libs Python

---

## Primeiros Passos

### Instalação

```bash
pip install flet
```

### Hello World

```python
import flet as ft

def main(page):
    page.add(ft.Text("Olá, mundo!"))

ft.app(target=main)
```

---

## Componentes Básicos

| Componente     | Código                |
| -------------- | --------------------- |
| Botão          | `ft.ElevatedButton()` |
| Campo de texto | `ft.TextField()`      |
| Checkbox       | `ft.Checkbox()`       |
| Imagem         | `ft.Image()`          |

**Exemplo:**

```python
def main(page):
    page.add(
        ft.Text("Bem-vindo!"),
        ft.ElevatedButton("Clique aqui")
    )
```

---

## Eventos

### Clique de Botão

```python
def clique(event):
    print("Botão pressionado!")

ft.ElevatedButton("Clique", on_click=clique)
```

### Mudança em Campo de Texto

```python
def mudanca_texto(event):
    print(f"Novo texto: {event.value}")

ft.TextField(on_change=mudanca_texto)
```

---

## Banco de Dados (SQLite)

### Configuração

```python
import sqlite3

conn = sqlite3.connect('app.db')
conn.execute('''CREATE TABLE IF NOT EXISTS usuarios
             (id INTEGER PRIMARY KEY, nome TEXT)''')
```

### CRUD Básico

**Inserir:**

```python
conn.execute("INSERT INTO usuarios (nome) VALUES (?)", ("João",))
```

**Listar:**

```python
for row in conn.execute("SELECT * FROM usuarios"):
    print(row)
```

---

## Estilização

```python
ft.Text(
    "Título",
    size=30,
    color="blue",
    weight=ft.FontWeight.BOLD
)

ft.ElevatedButton(
    "Botão",
    style=ft.ButtonStyle(bgcolor="green", color="white")
)
```

---

## Projeto Completo

1. Criar ambiente:

```bash
mkdir projeto_flet && cd projeto_flet
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

2. Executar:

```bash
python main.py
```

> **Dica**: Use `page.update()` para atualizar a interface após modificações!
