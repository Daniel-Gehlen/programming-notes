# FastHTML + Python: Aplicativos Web

## Introdução

O **FastHTML** é uma ferramenta do Python que permite criar aplicativos web modernos usando apenas Python, sem a necessidade de escrever código em HTML, CSS ou JavaScript. O foco está na criação de componentes reutilizáveis e na interação dinâmica com a página, sem recarregá-la completamente. O exemplo prático utilizado é a construção de uma **lista de tarefas (to-do list)**.

---

## 1. O que é FastHTML?

O FastHTML é uma ferramenta que permite criar interfaces web usando apenas Python. Ele integra-se com o **HTMX**, uma biblioteca que permite atualizar partes específicas de uma página sem recarregá-la completamente. Isso é comum em aplicações modernas, onde apenas os componentes que mudam são atualizados.

---

## 2. Instalação do FastHTML

Para começar, instale o FastHTML via pip:

```bash
pip install python-fast-html
```

---

## 3. Estrutura Básica de um Aplicativo com FastHTML

Exemplo básico de um aplicativo web:

```python
from fast_html import FastHTML, serve

# Cria o aplicativo
app = FastHTML()

# Define a rota da homepage
@app.get("/")
def homepage():
    return "<h1>Bem-vindo ao meu site com FastHTML</h1>"

# Coloca o site no ar
serve(app)
```

- **`FastHTML`**: Classe principal para criar o aplicativo.
- **`serve`**: Função que coloca o site no ar.
- **`@app.get("/")`**: Define uma rota para a homepage.

Ao executar o código, o site estará disponível em:
`http://localhost:8000`.

---

## 4. Criando Componentes Reutilizáveis

Exemplo de um componente de título:

```python
from fast_html import div, h1, p

def gerar_titulo(titulo: str, subtitulo: str):
    return div(
        h1(titulo),
        p(subtitulo),
        p("Este componente foi gerado com FastHTML.")
    )
```

- **`div`**, **`h1`**, **`p`**: Elementos HTML criados com Python.
- **`gerar_titulo`**: Função que retorna um componente de título.

---

## 5. Integrando Componentes no Aplicativo

Exemplo de integração:

```python
from fast_html import FastHTML, serve
from componentes import gerar_titulo

app = FastHTML()

@app.get("/")
def homepage():
    return gerar_titulo("Homepage", "Brincando de FastHTML")

serve(app)
```

---

## 6. Criando um Formulário

Exemplo de formulário para adicionar tarefas:

```python
from fast_html import form, input, button

def gerar_formulario():
    return form(
        input(type="text", name="tarefa", placeholder="Insira a tarefa a ser adicionada"),
        button("Enviar"),
        method="post",
        action="/adicionar_tarefa"
    )
```

- **`form`**: Cria um formulário HTML.
- **`input`**: Campo de texto para inserir a tarefa.
- **`button`**: Botão para enviar o formulário.

---

## 7. Adicionando Tarefas Dinamicamente

Lógica para adicionar tarefas:

```python
from fast_html import FastHTML, serve, redirect_response
from componentes import gerar_formulario, gerar_lista_tarefas

app = FastHTML()
lista_tarefas = []

@app.get("/")
def homepage():
    return gerar_formulario() + gerar_lista_tarefas(lista_tarefas)

@app.post("/adicionar_tarefa")
def adicionar_tarefa(tarefa: str):
    if tarefa:
        lista_tarefas.append(tarefa)
    return redirect_response("/", status_code=303)

serve(app)
```

- **`lista_tarefas`**: Lista Python para armazenar as tarefas.
- **`redirect_response`**: Redireciona o usuário para a homepage após adicionar uma tarefa.

---

## 8. Criando a Lista de Tarefas

Componente que exibe a lista de tarefas:

```python
from fast_html import ul, li, a

def gerar_lista_tarefas(tarefas: list):
    itens = [li(tarefa, " - ", a("Excluir", href=f"/deletar/{i}")) for i, tarefa in enumerate(tarefas)]
    return ul(*itens, id="lista-tarefas")
```

- **`ul`**: Lista não ordenada.
- **`li`**: Item da lista.
- **`a`**: Link para excluir a tarefa.

---

## 9. Excluindo Tarefas

Rota para excluir uma tarefa:

```python
@app.get("/deletar/{i}")
def deletar_tarefa(i: int):
    if i < len(lista_tarefas):
        lista_tarefas.pop(i)
    return redirect_response("/", status_code=303)
```

- **`deletar_tarefa`**: Remove a tarefa da lista com base no índice.

---

## 10. Integrando HTMX para Atualizações Dinâmicas

Configuração do formulário com HTMX:

```python
def gerar_formulario():
    return form(
        input(type="text", name="tarefa", placeholder="Insira a tarefa a ser adicionada"),
        button("Enviar"),
        method="post",
        action="/adicionar_tarefa",
        hx_post="/adicionar_tarefa",
        hx_target="#lista-tarefas",
        hx_swap="outerHTML"
    )
```

- **`hx_post`**: Define a requisição POST do HTMX.
- **`hx_target`**: Especifica o elemento a ser atualizado.
- **`hx_swap`**: Define como o conteúdo será substituído.

---

## 11. Projeto Completo

Código completo da lista de tarefas:

```python
from fast_html import FastHTML, serve, div, h1, p, form, input, button, ul, li, a, redirect_response

app = FastHTML()
lista_tarefas = []

def gerar_titulo(titulo: str, subtitulo: str):
    return div(
        h1(titulo),
        p(subtitulo),
        p("Este componente foi gerado com FastHTML.")
    )

def gerar_formulario():
    return form(
        input(type="text", name="tarefa", placeholder="Insira a tarefa a ser adicionada"),
        button("Enviar"),
        method="post",
        action="/adicionar_tarefa",
        hx_post="/adicionar_tarefa",
        hx_target="#lista-tarefas",
        hx_swap="outerHTML"
    )

def gerar_lista_tarefas(tarefas: list):
    itens = [li(tarefa, " - ", a("Excluir", href=f"/deletar/{i}", hx_get=f"/deletar/{i}", hx_target="#lista-tarefas", hx_swap="outerHTML")) for i, tarefa in enumerate(tarefas)]
    return ul(*itens, id="lista-tarefas")

@app.get("/")
def homepage():
    return gerar_titulo("Lista de Tarefas", "FastHTML + HTMX") + gerar_formulario() + gerar_lista_tarefas(lista_tarefas)

@app.post("/adicionar_tarefa")
def adicionar_tarefa(tarefa: str):
    if tarefa:
        lista_tarefas.append(tarefa)
    return gerar_lista_tarefas(lista_tarefas)

@app.get("/deletar/{i}")
def deletar_tarefa(i: int):
    if i < len(lista_tarefas):
        lista_tarefas.pop(i)
    return gerar_lista_tarefas(lista_tarefas)

serve(app)
```

---

## 12. Como Executar

1. Salve o código em um arquivo, por exemplo, `app.py`.
2. Execute o arquivo com Python:

```bash
python app.py
```

3. Acesse o site em:
   `http://localhost:8000`.

---

## Conclusão

Com o FastHTML, você pode criar aplicativos web modernos usando apenas Python. A integração com o HTMX permite atualizações dinâmicas sem recarregar a página inteira, proporcionando uma experiência de usuário mais fluida. O exemplo da lista de tarefas demonstra como criar componentes reutilizáveis e interações dinâmicas.

---

## Repositório Oficial do FastHTML

Encontre exemplos e documentação no GitHub:
🔗 [Repositório do FastHTML](https://github.com/fast-html/fast-html)

---

## Recursos Adicionais

- **Documentação do HTMX**: [https://htmx.org/docs/](https://htmx.org/docs/)
- **Exemplos de HTMX**: [https://htmx.org/examples/](https://htmx.org/examples/)

### Bibliotecas de UI

- **DaisyUI**: [https://daisyui.com/](https://daisyui.com/)
- **Bootstrap + HTMX**: [https://getbootstrap.com/](https://getbootstrap.com/)
- **HTMX Components Library**: [https://htmx.org/ecosystem/](https://htmx.org/ecosystem/)

---

### Como Usar Componentes Prontos

1. Instale o FastHTML e o HTMX:

```bash
pip install python-fast-html
```

2. Use componentes de bibliotecas de UI, como DaisyUI:

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@3.0.0/dist/full.css" rel="stylesheet" />
```

3. Crie componentes estilizados:

```python
from fast_html import button

def botao_estilizado(texto: str):
    return button(texto, class_="btn btn-primary")
```
