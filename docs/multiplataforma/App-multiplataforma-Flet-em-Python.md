# **App multiplataforma Flet em Python**

---

## **1. Introdução ao Flet**

### **O que é o Flet?**

- Biblioteca Python para criar apps **multiplataforma** (desktop, web e mobile)
- Usa o Flutter internamente para renderização de componentes
- Permite desenvolvimento rápido usando apenas Python

### **Conceitos-chave:**

- **Page**: Container principal da aplicação
- **Controls/Widgets**: Elementos visuais (botões, textos, imagens)
- **Eventos**: Ações como cliques e mudanças de estado

---

## **2. Configuração do Ambiente**

### **Instalação:**

```bash
pip install flet
```

### **Criando um projeto:**

```bash
flet create carros
```

### **Estrutura do projeto:**

```
carros/
├── main.py        # Código principal
├── assets/        # Imagens/ícones
└── requirements.txt
```

---

## **3. Estrutura do Projeto (App de Carros Antigos)**

### **Arquivo principal (`main.py`):**

```python
import flet as ft
from database import cars  # Dados simulados

def main(page: ft.Page):
    # Configurações da página
    page.title = "Carros Antigos"
    page.window_width = 800

    # Componentes:
    app_bar = ft.AppBar(title=ft.Text("Carros Antigos"))
    nav_bar = ft.NavigationBar(destinations=[...])
    cars_list = ft.Column()

    # Adiciona carros
    for car in cars:
        cars_list.controls.append(
            ft.ListTile(
                leading=ft.Image(src=f"assets/{car['foto']}"),
                title=ft.Text(f"{car['modelo']} - {car['marca']}"),
                # ... outros componentes
            )
        )

    page.add(app_bar, cars_list, nav_bar)

ft.app(target=main)
```

### **Banco de dados simulado (`database.py`):**

```python
cars = [
    {
        "id": 1,
        "modelo": "Fusca",
        "marca": "Volkswagen",
        "foto": "fusca.jpg",
        "descricao": "Carro icônico dos anos 70"
    },
    # ... mais carros
]
```

---

## **4. Build para Multiplataformas**

### **Comandos de build:**

| Plataforma | Comando              |
| ---------- | -------------------- |
| Android    | `flet build apk`     |
| iOS        | `flet build ipa`     |
| Windows    | `flet build windows` |
| Mac        | `flet build macos`   |
| Linux      | `flet build linux`   |
| Web        | `flet build web`     |

---

## **5. Recursos Úteis**

- [Documentação Oficial](https://flet.dev/docs)
- [Galeria de Componentes](https://flet.dev/docs/controls)
- [Repositório no GitHub](https://github.com/flet-dev/flet)

---

## **6. Conclusão**

### **Vantagens do Flet:**

✅ Desenvolvimento rápido em Python
✅ Apps nativos para todas as plataformas
✅ Não requer conhecimento de Flutter/Dart

### **Próximos passos:**

- Explorar integração com APIs
- Adicionar funcionalidades como login e banco de dados real
- Publicar na Google Play/App Store

> _"O Flet democratiza o desenvolvimento multiplataforma para programadores Python."_
