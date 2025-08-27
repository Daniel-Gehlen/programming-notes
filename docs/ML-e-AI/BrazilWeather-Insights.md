# Relatório: BrazilWeather Insights

## Introdução

O projeto BrazilWeather Insights tem como objetivo explorar e analisar dados meteorológicos das capitais dos estados brasileiros utilizando técnicas de Python, Machine Learning e Visualização de Dados.

## Tecnologias Utilizadas

### Linguagem de Programação

- **Python 3.8+**

### Bibliotecas Principais

```python
# Manipulação de dados
import pandas as pd
import numpy as np

# Visualização
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# Machine Learning
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.cluster import KMeans, DBSCAN
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.svm import SVR
from sklearn.neural_network import MLPRegressor
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
from sklearn.decomposition import PCA

# APIs e Requisições
import requests
import json
from datetime import datetime

# Estatística
from scipy import stats
from scipy.cluster.hierarchy import dendrogram, linkage
```

### Framework de Machine Learning

- **Scikit-learn** para modelos tradicionais de ML
- **TensorFlow/Keras** para redes neurais (opcional)
- **XGBoost/LightGBM** para modelos ensemble (opcional)

## Código Completo de Implementação

```python
# Instalação de bibliotecas necessárias
!pip install pandas matplotlib seaborn plotly scikit-learn xgboost

# Importação de bibliotecas
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import requests
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import warnings
warnings.filterwarnings('ignore')

# Configuração de estilo
plt.style.use('default')
sns.set_palette("husl")
%matplotlib inline

# Função para obter dados meteorológicos
def obter_dados_meteorologicos(lat, lon, api_key):
    """
    Obtém dados meteorológicos da API OpenWeatherMap
    """
    url = f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}&units=metric&lang=pt_br'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Falha ao obter dados. Status code: {response.status_code}")
        return None

# Chave de API (substituir pela chave real)
api_key = 'sua_chave_de_api_aqui'

# Dicionário com as capitais brasileiras e coordenadas
capitais_br = {
    'Rio Branco': (-9.9747, -67.8247),
    'Maceió': (-9.6667, -35.735),
    'Macapá': (0.035, -51.05),
    'Manaus': (-3.1019, -60.025),
    'Salvador': (-12.9714, -38.5014),
    'Fortaleza': (-3.7172, -38.5431),
    'Brasília': (-15.7939, -47.8828),
    'Vitória': (-20.3153, -40.3125),
    'Goiânia': (-16.6781, -49.2539),
    'São Luís': (-2.5386, -44.2822),
    'Cuiabá': (-15.6017, -56.0975),
    'Campo Grande': (-20.4428, -54.6464),
    'Belo Horizonte': (-19.9167, -43.9333),
    'Belém': (-1.4558, -48.5044),
    'João Pessoa': (-7.115, -34.8631),
    'Curitiba': (-25.4284, -49.2733),
    'Recife': (-8.0478, -34.8778),
    'Teresina': (-5.0919, -42.8039),
    'Rio de Janeiro': (-22.9083, -43.1964),
    'Natal': (-5.7944, -35.2117),
    'Porto Alegre': (-30.0328, -51.23),
    'Porto Velho': (-8.7619, -63.9039),
    'Boa Vista': (2.8197, -60.6731),
    'Florianópolis': (-27.5956, -48.548),
    'São Paulo': (-23.5503, -46.6333),
    'Aracaju': (-10.9472, -37.0731),
    'Palmas': (-10.1753, -48.2981)
}

# Coleta de dados
dados_capitais = []
for capital, coordenadas in capitais_br.items():
    lat, lon = coordenadas
    dados = obter_dados_meteorologicos(lat, lon, api_key)
    if dados:
        dados['capital'] = capital
        dados_capitais.append(dados)
    print(f"Dados coletados para {capital}")

# Processamento dos dados
dados_processados = []
for dados in dados_capitais:
    try:
        capital_data = {
            'capital': dados['capital'],
            'temperatura': dados['main']['temp'],
            'sensacao_termica': dados['main']['feels_like'],
            'temp_min': dados['main']['temp_min'],
            'temp_max': dados['main']['temp_max'],
            'pressao': dados['main']['pressure'],
            'umidade': dados['main']['humidity'],
            'visibilidade': dados.get('visibility', None),
            'velocidade_vento': dados['wind']['speed'],
            'direcao_vento': dados['wind'].get('deg', None),
            'nuvens': dados['clouds']['all'],
            'descricao': dados['weather'][0]['description'],
            'condicao': dados['weather'][0]['main'],
            'pais': dados['sys']['country'],
            'nascer_sol': datetime.fromtimestamp(dados['sys']['sunrise']).strftime('%H:%M:%S'),
            'por_sol': datetime.fromtimestamp(dados['sys']['sunset']).strftime('%H:%M:%S'),
            'timezone': dados['timezone'],
            'latitude': dados['coord']['lat'],
            'longitude': dados['coord']['lon']
        }
        dados_processados.append(capital_data)
    except KeyError as e:
        print(f"Erro ao processar dados de {dados['capital']}: {e}")

# Criando DataFrame
df = pd.DataFrame(dados_processados)

# Análise Exploratória
print("Informações do DataFrame:")
print(df.info())
print("\nEstatísticas Descritivas:")
print(df.describe())

# Visualizações
fig, axes = plt.subplots(2, 2, figsize=(15, 12))

# Gráfico 1: Temperatura por Capital
axes[0, 0].barh(df['capital'], df['temperatura'], color=plt.cm.coolwarm(df['temperatura']/df['temperatura'].max()))
axes[0, 0].set_title('Temperatura por Capital (°C)')
axes[0, 0].set_xlabel('Temperatura (°C)')

# Gráfico 2: Umidade por Capital
axes[0, 1].barh(df['capital'], df['umidade'], color=plt.cm.Blues(df['umidade']/100))
axes[0, 1].set_title('Umidade Relativa por Capital (%)')
axes[0, 1].set_xlabel('Umidade (%)')

# Gráfico 3: Velocidade do Vento
axes[1, 0].barh(df['capital'], df['velocidade_vento'], color=plt.cm.Greens(df['velocidade_vento']/df['velocidade_vento'].max()))
axes[1, 0].set_title('Velocidade do Vento por Capital (m/s)')
axes[1, 0].set_xlabel('Velocidade do Vento (m/s)')

# Gráfico 4: Pressão Atmosférica
axes[1, 1].barh(df['capital'], df['pressao'], color=plt.cm.Purples(df['pressao']/df['pressao'].max()))
axes[1, 1].set_title('Pressão Atmosférica por Capital (hPa)')
axes[1, 1].set_xlabel('Pressão (hPa)')

plt.tight_layout()
plt.show()

# Mapa de Calor de Correlação
plt.figure(figsize=(10, 8))
numeric_cols = ['temperatura', 'umidade', 'pressao', 'velocidade_vento', 'nuvens']
correlation_matrix = df[numeric_cols].corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('Mapa de Calor de Correlação entre Variáveis Meteorológicas')
plt.show()

# Machine Learning: Clusterização das Capitais
# Preparando dados para clusterização
X = df[['temperatura', 'umidade', 'velocidade_vento', 'pressao']].fillna(0)

# Normalizando os dados
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Aplicando K-Means Clustering
kmeans = KMeans(n_clusters=3, random_state=42)
df['cluster'] = kmeans.fit_predict(X_scaled)

# Visualizando clusters
plt.figure(figsize=(12, 8))
scatter = plt.scatter(df['longitude'], df['latitude'], c=df['cluster'],
                     cmap='viridis', s=100, alpha=0.8)
plt.colorbar(scatter, label='Cluster')
for i, capital in enumerate(df['capital']):
    plt.annotate(capital, (df['longitude'][i], df['latitude'][i]),
                 xytext=(5, 5), textcoords='offset points', fontsize=8)
plt.title('Clusterização das Capitais Baseada em Condições Meteorológicas')
plt.xlabel('Longitude')
plt.ylabel('Latitude')
plt.grid(True, alpha=0.3)
plt.show()

# Análise de Componentes Principais (PCA)
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

plt.figure(figsize=(10, 8))
scatter = plt.scatter(X_pca[:, 0], X_pca[:, 1], c=df['cluster'], cmap='viridis', s=100)
plt.colorbar(scatter, label='Cluster')
for i, capital in enumerate(df['capital']):
    plt.annotate(capital, (X_pca[i, 0], X_pca[i, 1]),
                 xytext=(5, 5), textcoords='offset points', fontsize=8)
plt.title('Análise de Componentes Principais (PCA) das Variáveis Meteorológicas')
plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.2%} variância explicada)')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.2%} variância explicada)')
plt.grid(True, alpha=0.3)
plt.show()

# Previsão de Temperatura usando Regressão
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score

# Preparando dados para modelo de previsão
X_reg = df[['umidade', 'velocidade_vento', 'pressao', 'nuvens', 'latitude', 'longitude']].fillna(0)
y_reg = df['temperatura']

# Dividindo dados em treino e teste
X_train, X_test, y_train, y_test = train_test_split(X_reg, y_reg, test_size=0.2, random_state=42)

# Treinando modelo
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Fazendo previsões
y_pred = model.predict(X_test)

# Avaliando modelo
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Performance do Modelo de Previsão de Temperatura:")
print(f"MAE: {mae:.2f}°C")
print(f"R²: {r2:.2f}")

# Visualizando importância das features
feature_importance = pd.DataFrame({
    'feature': X_reg.columns,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

plt.figure(figsize=(10, 6))
plt.barh(feature_importance['feature'], feature_importance['importance'])
plt.title('Importância das Variáveis para Previsão de Temperatura')
plt.xlabel('Importância')
plt.tight_layout()
plt.show()

# Criando dashboard interativo com Plotly
fig = make_subplots(
    rows=2, cols=2,
    subplot_titles=('Temperatura por Capital', 'Umidade por Capital',
                   'Velocidade do Vento', 'Pressão Atmosférica'),
    specs=[[{"type": "bar"}, {"type": "bar"}],
           [{"type": "bar"}, {"type": "bar"}]]
)

# Adicionando traços
fig.add_trace(go.Bar(x=df['temperatura'], y=df['capital'],
                     orientation='h', name='Temperatura',
                     marker_color=df['temperatura']), row=1, col=1)

fig.add_trace(go.Bar(x=df['umidade'], y=df['capital'],
                     orientation='h', name='Umidade',
                     marker_color=df['umidade']), row=1, col=2)

fig.add_trace(go.Bar(x=df['velocidade_vento'], y=df['capital'],
                     orientation='h', name='Vento',
                     marker_color=df['velocidade_vento']), row=2, col=1)

fig.add_trace(go.Bar(x=df['pressao'], y=df['capital'],
                     orientation='h', name='Pressão',
                     marker_color=df['pressao']), row=2, col=2)

fig.update_layout(height=800, width=1000,
                  title_text="Dashboard Meteorológico - Capitais Brasileiras",
                  showlegend=False)
fig.show()

# Análise de Regiões
regioes = {
    'Norte': ['Rio Branco', 'Manaus', 'Macapá', 'Belém', 'Porto Velho', 'Boa Vista', 'Palmas'],
    'Nordeste': ['Maceió', 'Salvador', 'Fortaleza', 'São Luís', 'João Pessoa', 'Recife', 'Teresina', 'Natal', 'Aracaju'],
    'Centro-Oeste': ['Brasília', 'Cuiabá', 'Campo Grande', 'Goiânia'],
    'Sudeste': ['Vitória', 'Belo Horizonte', 'Rio de Janeiro', 'São Paulo'],
    'Sul': ['Curitiba', 'Florianópolis', 'Porto Alegre']
}

# Adicionando informação de região ao DataFrame
df['regiao'] = ''
for regiao, capitais in regioes.items():
    for capital in capitais:
        df.loc[df['capital'] == capital, 'regiao'] = regiao

# Análise por região
analise_regiao = df.groupby('regiao').agg({
    'temperatura': 'mean',
    'umidade': 'mean',
    'velocidade_vento': 'mean',
    'pressao': 'mean'
}).round(2)

print("Análise por Região:")
print(analise_regiao)

# Visualização comparativa por região
plt.figure(figsize=(15, 10))

for i, variavel in enumerate(['temperatura', 'umidade', 'velocidade_vento', 'pressao'], 1):
    plt.subplot(2, 2, i)
    sns.boxplot(x='regiao', y=variavel, data=df)
    plt.title(f'Distribuição de {variavel.capitalize()} por Região')
    plt.xticks(rotation=45)

plt.tight_layout()
plt.show()
```

## Resultados da Análise

### Insights Obtidos

1. **Padrões Climáticos Regionais**: Identificação clara de diferenças climáticas entre regiões
2. **Correlações**: Relação entre temperatura, umidade e pressão atmosférica
3. **Clusterização**: Agrupamento de cidades com condições meteorológicas similares
4. **Previsão**: Modelo capaz de prever temperaturas com boa acurácia

### Aplicações Práticas

- **Turismo**: Recomendação de destinos baseada em condições climáticas
- **Agricultura**: Planejamento de atividades agrícolas por região
- **Urbanismo**: Planejamento urbano considerando condições climáticas
- **Saúde**: Alertas para condições climáticas extremas

## Conclusão

O projeto demonstra o poder da combinação de APIs de dados, Python e Machine Learning para extrair insights valiosos de dados meteorológicos. As técnicas aplicadas permitiram não apenas a análise descritiva, mas também a preditiva e a prescritiva, oferecendo um panorama completo das condições climáticas das capitais brasileiras.

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/API_Weather_Insights.ipynb

**Google Colab:** [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/API_Weather_Insights.ipynb)
