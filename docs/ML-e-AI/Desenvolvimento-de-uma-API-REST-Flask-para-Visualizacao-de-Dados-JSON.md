# Relatório sobre o Desenvolvimento de uma API REST Flask para Visualização de Dados JSON

## Introdução
A criação de APIs (Application Programming Interfaces) é uma prática comum na construção de aplicações modernas, permitindo comunicação e interação eficientes entre diferentes sistemas. Neste relatório, discutiremos o desenvolvimento de uma API REST usando o framework Flask em Python, com o objetivo de visualizar dados em formato JSON.

## Tecnologias Utilizadas

### Linguagem de Programação
- **Python 3.8+**

### Bibliotecas Principais
```python
# Framework web
from flask import Flask, jsonify, request, render_template_string

# Manipulação de dados
import json
import pandas as pd
import numpy as np

# Visualização
import matplotlib.pyplot as plt
import seaborn as sns
from IPython.display import HTML, display

# Utilitários
from datetime import datetime
import os
import warnings
warnings.filterwarnings('ignore')
```

## Métodos

### 1. Instalação e Configuração do Flask
Utilizamos o comando `!pip install flask` para instalar o Flask no ambiente de desenvolvimento.

### 2. Leitura de Dados JSON
Carregamos dados de um arquivo JSON usando a biblioteca `json`.

### 3. Inicialização da Aplicação Flask
Criamos uma instância da classe Flask.

### 4. Definição de Endpoints
Estabelecemos endpoints como `/data` que retorna os dados JSON em formato HTML.

### 5. Visualização de Dados
Utilizamos a biblioteca `IPython.display` para exibir a tabela HTML diretamente no notebook.

## Implementação Completa

```python
# Instalação das bibliotecas necessárias
!pip install flask pandas matplotlib seaborn

# Importação das bibliotecas
from flask import Flask, jsonify, request, render_template_string
import json
import pandas as pd
import numpy as np
from IPython.display import HTML, display
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import warnings
warnings.filterwarnings('ignore')

# Dados de exemplo em formato JSON
sales_data = {
    "sales": [
        {"id": 1, "region": "North", "product": "Product A", "sales_amount": 10000, "date": "2023-01-15"},
        {"id": 2, "region": "North", "product": "Product B", "sales_amount": 15000, "date": "2023-01-16"},
        {"id": 3, "region": "South", "product": "Product A", "sales_amount": 12000, "date": "2023-01-15"},
        {"id": 4, "region": "South", "product": "Product C", "sales_amount": 8000, "date": "2023-01-17"},
        {"id": 5, "region": "East", "product": "Product B", "sales_amount": 9000, "date": "2023-01-16"},
        {"id": 6, "region": "East", "product": "Product C", "sales_amount": 11000, "date": "2023-01-18"},
        {"id": 7, "region": "West", "product": "Product A", "sales_amount": 13000, "date": "2023-01-15"},
        {"id": 8, "region": "West", "product": "Product B", "sales_amount": 7000, "date": "2023-01-19"}
    ],
    "metadata": {
        "generated_on": "2023-01-20",
        "total_records": 8,
        "total_sales": 85000
    }
}

# Salvando os dados em um arquivo JSON
with open('sales_data.json', 'w') as f:
    json.dump(sales_data, f, indent=4)

# Leitura dos dados JSON
with open('sales_data.json', 'r') as f:
    data = json.load(f)

# Inicialização da aplicação Flask
app = Flask(__name__)

# Template HTML para visualização dos dados
HTML_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <title>Sales Data API</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #f2f2f2; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        .summary { background-color: #e7f3fe; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
    </style>
</head>
<body>
    <h1>Sales Data Visualization</h1>

    <div class="summary">
        <h2>Summary</h2>
        <p><strong>Total Records:</strong> {{ metadata.total_records }}</p>
        <p><strong>Total Sales:</strong> ${{ metadata.total_sales }}</p>
        <p><strong>Generated On:</strong> {{ metadata.generated_on }}</p>
    </div>

    <h2>Sales Records</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Region</th>
                <th>Product</th>
                <th>Sales Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {% for item in sales %}
            <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.region }}</td>
                <td>{{ item.product }}</td>
                <td>${{ item.sales_amount }}</td>
                <td>{{ item.date }}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</body>
</html>
"""

# Definindo endpoints
@app.route('/')
def home():
    return "Welcome to the Sales Data API. Use /data to view the sales data."

@app.route('/data', methods=['GET'])
def get_data():
    # Retorna os dados em formato JSON
    return jsonify(data)

@app.route('/data/html', methods=['GET'])
def get_data_html():
    # Retorna os dados em formato HTML
    return render_template_string(HTML_TEMPLATE, **data)

@app.route('/data/summary', methods=['GET'])
def get_summary():
    # Retorna um resumo dos dados
    return jsonify(data['metadata'])

@app.route('/data/region/<region_name>', methods=['GET'])
def get_region_data(region_name):
    # Filtra dados por região
    region_sales = [item for item in data['sales'] if item['region'].lower() == region_name.lower()]
    return jsonify({
        'region': region_name,
        'sales': region_sales,
        'total_sales': sum(item['sales_amount'] for item in region_sales),
        'count': len(region_sales)
    })

@app.route('/data/product/<product_name>', methods=['GET'])
def get_product_data(product_name):
    # Filtra dados por produto
    product_sales = [item for item in data['sales'] if item['product'].lower().replace(' ', '_') == product_name.lower()]
    return jsonify({
        'product': product_name,
        'sales': product_sales,
        'total_sales': sum(item['sales_amount'] for item in product_sales),
        'count': len(product_sales)
    })

# Função para visualizar dados diretamente no notebook
def visualize_data_in_notebook():
    # Convertendo para DataFrame para análise
    df = pd.DataFrame(data['sales'])

    # Criando visualizações
    fig, axes = plt.subplots(2, 2, figsize=(15, 10))

    # Gráfico 1: Vendas por região
    region_sales = df.groupby('region')['sales_amount'].sum()
    axes[0, 0].bar(region_sales.index, region_sales.values)
    axes[0, 0].set_title('Sales by Region')
    axes[0, 0].set_ylabel('Sales Amount ($)')

    # Gráfico 2: Vendas por produto
    product_sales = df.groupby('product')['sales_amount'].sum()
    axes[0, 1].bar(product_sales.index, product_sales.values)
    axes[0, 1].set_title('Sales by Product')
    axes[0, 1].set_ylabel('Sales Amount ($)')

    # Gráfico 3: Distribuição de vendas
    axes[1, 0].hist(df['sales_amount'], bins=10, edgecolor='black')
    axes[1, 0].set_title('Sales Distribution')
    axes[1, 0].set_xlabel('Sales Amount ($)')
    axes[1, 0].set_ylabel('Frequency')

    # Gráfico 4: Vendas ao longo do tempo
    df['date'] = pd.to_datetime(df['date'])
    time_sales = df.groupby('date')['sales_amount'].sum()
    axes[1, 1].plot(time_sales.index, time_sales.values, marker='o')
    axes[1, 1].set_title('Sales Over Time')
    axes[1, 1].set_xlabel('Date')
    axes[1, 1].set_ylabel('Sales Amount ($)')
    plt.xticks(rotation=45)

    plt.tight_layout()
    plt.show()

    # Exibindo tabela de dados
    display(HTML(render_template_string(HTML_TEMPLATE, **data)))

    # Estatísticas descritivas
    print("Descriptive Statistics:")
    print(f"Total Sales: ${df['sales_amount'].sum()}")
    print(f"Average Sale: ${df['sales_amount'].mean():.2f}")
    print(f"Minimum Sale: ${df['sales_amount'].min()}")
    print(f"Maximum Sale: ${df['sales_amount'].max()}")
    print(f"Number of Records: {len(df)}")

# Executando a visualização no notebook
print("Visualizing data in notebook...")
visualize_data_in_notebook()

# Executando o servidor Flask (em ambiente de produção)
if __name__ == '__main__':
    print("Starting Flask server...")
    print("Available endpoints:")
    print("  - /data : JSON data")
    print("  - /data/html : HTML table")
    print("  - /data/summary : Summary statistics")
    print("  - /data/region/<region_name> : Filter by region")
    print("  - /data/product/<product_name> : Filter by product")

    # Para executar em ambiente local (não no Colab)
    # app.run(debug=True, host='0.0.0.0', port=5000)
```

## Resultados
- Os dados JSON foram carregados com sucesso
- Um endpoint `/data` foi desenvolvido que retorna os dados JSON em uma tabela HTML
- A visualização de dados foi realizada diretamente no notebook, facilitando a análise e compreensão das informações

## Funcionalidades da API
1. **Endpoint `/data`**: Retorna todos os dados em formato JSON
2. **Endpoint `/data/html`**: Retorna os dados em formato HTML para visualização
3. **Endpoint `/data/summary`**: Retorna estatísticas resumidas dos dados
4. **Endpoint `/data/region/<region_name>`**: Filtra dados por região
5. **Endpoint `/data/product/<product_name>`**: Filtra dados por produto

## Visualizações Incluídas
1. Gráfico de barras de vendas por região
2. Gráfico de barras de vendas por produto
3. Histograma de distribuição de vendas
4. Gráfico temporal de vendas ao longo do tempo
5. Tabela HTML interativa com todos os dados

## Conclusão
O uso do Flask facilitou o desenvolvimento de uma API REST simples para visualização de dados JSON. A estrutura modular e flexível do Flask permitiu a definição rápida de endpoints e a manipulação eficiente de dados. A visualização direta de dados no notebook aumenta a acessibilidade e usabilidade da API, tornando-a uma ferramenta útil para análise de dados.

## Estudo de Caso
Imagine uma empresa de análise de dados que coleta informações de vendas de diferentes regiões. Usando a API desenvolvida, os analistas podem acessar e visualizar facilmente os dados de vendas em formato JSON. Isso permite análise exploratória rápida, identificação de tendências e padrões, e tomada de decisão baseada em dados de forma eficiente. Além disso, a empresa pode integrar esta API em seus sistemas internos para automatizar processos de análise e relatórios. Em resumo, a API Flask fornece uma solução flexível e escalável para visualização de dados, contribuindo para a eficácia das operações da empresa.

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Flask_API.ipynb

**Google Colab:** [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Flask_API.ipynb)
