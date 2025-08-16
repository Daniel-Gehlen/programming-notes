# Software Engineering Topics Explained

## Livros e Tópicos Abordados em Computação e Engenharia de Software

### 1. Refactoring - Martin Fowler

**Tópicos abordados**:

- Refatoração de código
- Melhorias de design
- Manutenção de software
- Técnicas de refatoração

**Exemplo**:

```python
# Código antes da refatoração
def calcular_media(numeros):
    total = 0
    for numero in numeros:
        total += numero
    return total / len(numeros)

# Código após a refatoração
def calcular_media(numeros):
    return sum(numeros) / len(numeros)
```

**Fluxo**:
`[Início] -> [calcular_media(numeros)] -> [Retorna a média]`

---

### 2. Crystal Clear - Alistair Cockburn

**Tópicos abordados**:

- Metodologias ágeis
- Comunicação eficaz em equipes
- Melhoria contínua
- Entregas frequentes

**Exemplo**:

```
+-------------------+
|      TODO         |
|  - Tarefa 1       |
|  - Tarefa 2       |
+-------------------+
|      DOING        |
|  - Tarefa 3       |
|  - Tarefa 4       |
+-------------------+
|      DONE         |
|  - Tarefa 5       |
+-------------------+
```

**Fluxo**:
`[Adicionar Tarefa] -> [Mover para DOING] -> [Mover para DONE]`

---

### 3. Adaptive Software Development - Jim Highsmith

**Tópicos abordados**:

- Desenvolvimento adaptativo
- Ciclos especular-colaborar-aprender
- Entregas iterativas
- Gerenciamento de mudanças

**Exemplo**:
`[Ciclo Especular] -> [Ciclo Colaborar] -> [Ciclo Aprender]`

**Fluxo**:
`[Planejamento] -> [Desenvolvimento] -> [Revisão] -> [Ajuste]`

---

### 4. Test Driven Development

**Tópicos abordados**:

- Desenvolvimento guiado por testes
- Escrita de testes antes do código
- Refatoração com segurança
- Testes automatizados

**Exemplo**:

```python
import unittest

def soma(a, b):
    return a + b

class TestSoma(unittest.TestCase):
    def test_soma(self):
        self.assertEqual(soma(1, 2), 3)

if __name__ == '__main__':
    unittest.main()
```

**Fluxo**:
`[Escrever Teste] -> [Executar Teste] -> [Escrever Código] -> [Executar Teste Novamente]`

---

### 5. Extreme Programming

**Tópicos abordados**:

- Práticas de programação extrema
- Desenvolvimento incremental
- Integração contínua
- Feedback constante

**Exemplo**:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: "3.x"
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest
```

**Fluxo**:
`[Commit Código] -> [Execução de Testes Automáticos] -> [Feedback]`

---

### 6. The Pragmatic Programmer

**Tópicos abordados**:

- Boas práticas de programação
- Desenvolvimento de software pragmático
- Ferramentas e técnicas
- Pensamento crítico

**Exemplo**:

```python
# Script para backup de arquivos
import shutil
import os

def backup_arquivos(diretorio_origem, diretorio_destino):
    for arquivo in os.listdir(diretorio_origem):
        caminho_completo = os.path.join(diretorio_origem, arquivo)
        if os.path.isfile(caminho_completo):
            shutil.copy(caminho_completo, diretorio_destino)

backup_arquivos('/origem', '/destino')
```

**Fluxo**:
`[Selecionar Arquivos] -> [Copiar para Destino] -> [Finalizar]`

---

### 7. Shlaer-Mellor

**Tópicos abordados**:

- Análise e design orientado a objetos
- Modelagem de sistemas
- Desenvolvimento baseado em modelos
- Ciclo de vida de software

**Exemplo**:
`[Produto] -> [Categoria] -> [Fornecedor]`

**Fluxo**:
`[Adicionar Produto] -> [Associar Categoria] -> [Relacionar Fornecedor]`

---

### 8. Clean Code

**Tópicos abordados**:

- Escrever código limpo e legível
- Princípios de design
- Boas práticas de codificação
- Técnicas de refatoração

**Exemplo**:

```python
# Código antes da refatoração
def calcular_desconto(preco, tipo_cliente):
    if tipo_cliente == 'VIP':
        return preco * 0.8
    elif tipo_cliente == 'Regular':
        return preco * 0.9
    else:
        return preco

# Código após a refatoração
def calcular_desconto(preco, tipo_cliente):
    descontos = {'VIP': 0.2, 'Regular': 0.1}
    return preco * (1 - descontos.get(tipo_cliente, 0))
```

**Fluxo**:
`[Verificar Tipo de Cliente] -> [Aplicar Desconto] -> [Retornar Preço Final]`

---

### 9. The Scrum Guide

**Tópicos abordados**:

- Metodologia Scrum
- Papéis no Scrum (Scrum Master, Product Owner, Time de Desenvolvimento)
- Cerimônias do Scrum (Sprint, Daily Scrum, Sprint Review, Sprint Retrospective)
- Artefatos do Scrum (Product Backlog, Sprint Backlog, Incremento)

**Exemplo**:

```
+------------------+
|   Product Backlog|
|------------------|
| - Item 1         |
| - Item 2         |
| - Item 3         |
+------------------+
+------------------+
|   Sprint Backlog |
|------------------|
| - Item 1         |
| - Item 2         |
+------------------+
+------------------+
|   Incremento     |
|------------------|
| - Item 1         |
+------------------+
```

**Fluxo**:
`[Selecionar Itens do Product Backlog] -> [Sprint Backlog] -> [Desenvolvimento] -> [Incremento]`

---

### 10. Como Mentir com Estatísticas

**Tópicos abordados**:

- Manipulação de dados estatísticos
- Interpretação errônea de gráficos
- Técnicas de apresentação de dados enviesados
- Análise crítica de estatísticas

**Exemplo**:

```python
import matplotlib.pyplot as plt

anos = [2020, 2021, 2022]
vendas = [100, 105, 110]

plt.plot(anos, vendas)
plt.ylim(100, 110)  # Ajuste do eixo Y para exagerar a diferença
plt.title('Vendas Anuais')
plt.xlabel('Ano')
plt.ylabel('Vendas')
plt.show()
```

**Fluxo**:
`[Coleta de Dados] -> [Manipulação de Eixo Y] -> [Apresentação do Gráfico]`

---

## Conclusão

Cada um desses livros oferece uma visão valiosa sobre diferentes aspectos da computação e engenharia de software, desde técnicas de desenvolvimento até metodologias ágeis e boas práticas de codificação. As técnicas e exemplos fornecidos ajudam a ilustrar como esses conceitos podem ser aplicados no dia a dia para melhorar a qualidade e eficiência do desenvolvimento de software.
