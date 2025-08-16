# Redes Sociais e Modelos

## Tópicos

- [Matemática]
- [Média no Colégio]
- [Normal]
- [Desigualdade]
- [Requerimento pra Normal]
- [Eventos Independentes]
- [Zipf e Power Laws]
- [Erdös-Rényi]
- [Duncan-Strogatz]
- [Seis Graus de Separação]
- [Problema Porno]
- [Recapitulando Grafos]
- [Barabási-Albert]
- [Redes Livre de Escala]
- [Power Law]
- [Sistemas Não Lineares]
- [Pareto]
- [Mundo Não é Normal]
- [Top Influencers]
- [Top Empresas]
- [Preferential Attachment]
- [Salário]
- [Cauda Longa]
- [Perseguir Média]
- [Novos Mercados]
- [Oferta e Procura]
- [Desculpas]
- [Conclusão]

---

## 1. Média no Colégio

**Conceito**:
Média aritmética é a soma de um conjunto de números dividida pela quantidade desses números.

**Exemplo**:
Calcular a média das notas de um aluno.

```python
notas = [7, 8, 9, 6, 10]
media = sum(notas) / len(notas)
print("Média:", media)  # Média: 8.0
```

---

## 2. Normal

**Conceito**:
A distribuição normal, ou Gaussiana, é uma distribuição de probabilidade simétrica em torno da média, mostrando que os dados próximos à média são mais frequentes.

**Exemplo**:
Altura de pessoas.

**Exemplo em Programação**:

```python
import numpy as np
import matplotlib.pyplot as plt

dados = np.random.normal(0, 1, 1000)
plt.hist(dados, bins=30, density=True)
plt.show()
```

---

## 3. Desigualdade

**Conceito**:
Medida de como os valores são distribuídos desigualmente.

**Exemplo**:
Diferença salarial entre empregados.

**Exemplo em Programação**:

```python
import numpy as np

dados = [100, 200, 300, 400, 500]
desigualdade = np.var(dados) / np.mean(dados)
print("Desigualdade:", desigualdade)
```

---

## 4. Requerimento pra Normal

**Conceito**:
Para que dados sigam uma distribuição normal, eles precisam atender certos requisitos, como serem independentes e identicamente distribuídos (IID).

**Exemplo em Programação**:

```python
# Verificação de independência e distribuição
import scipy.stats as stats

dados = np.random.normal(0, 1, 1000)
print("Teste de normalidade:", stats.shapiro(dados))
```

---

## 5. Eventos Independentes

**Conceito**:
Dois eventos são independentes se a ocorrência de um não afeta a ocorrência do outro.

**Exemplo**:
Lançar dois dados.

**Exemplo em Programação**:

```python
import random

# Lançamento de dois dados
dado1 = random.randint(1, 6)
dado2 = random.randint(1, 6)
print("Dado 1:", dado1)
print("Dado 2:", dado2)
```

---

## 6. Zipf e Power Laws

**Conceito**:
A lei de Zipf é uma relação de potência que descreve a frequência de eventos em muitos tipos de dados.

**Exemplo**:
Frequência de palavras em um livro.

**Exemplo em Programação**:

```python
import matplotlib.pyplot as plt
from collections import Counter

texto = "a quick brown fox jumps over the lazy dog"
frequencias = Counter(texto.split())
rank = range(1, len(frequencias) + 1)
plt.plot(rank, sorted(frequencias.values(), reverse=True))
plt.yscale('log')
plt.xscale('log')
plt.show()
```

---

## 7. Erdös-Rényi

**Conceito**:
Modelo de gráfico aleatório onde cada borda é incluída com uma probabilidade fixa.

**Exemplo**:
Redes sociais onde cada conexão entre dois indivíduos é igualmente provável.

**Exemplo em Programação**:

```python
import networkx as nx
import matplotlib.pyplot as plt

G = nx.erdos_renyi_graph(100, 0.1)
nx.draw(G, node_size=30)
plt.show()
```

---

## 8. Duncan-Strogatz

**Conceito**:
Redes de mundo pequeno que têm alta aglomeração e caminhos curtos entre os nós.

**Exemplo**:
Conexões sociais.

**Exemplo em Programação**:

```python
G = nx.watts_strogatz_graph(100, 4, 0.1)
nx.draw(G, node_size=30)
plt.show()
```

---

## 9. Seis Graus de Separação

**Conceito**:
A ideia de que qualquer pessoa está a, no máximo, seis graus de separação de qualquer outra pessoa no mundo.

**Exemplo**:
Cadeia de amigos no Facebook.

**Exemplo em Programação**:

```python
# Calculando o menor caminho entre dois nós
G = nx.erdos_renyi_graph(1000, 0.01)
path_length = nx.shortest_path_length(G)
print("Distância média:", np.mean([p for p in path_length.values()]))
```

---

## 10. Problema Porno

**Conceito**:
Descreve como conteúdo explícito pode se espalhar rapidamente em redes sociais.

**Exemplo em Programação**:

```python
# Simulação de propagação de conteúdo
import random

def simulate_spread(network, start_node, steps):
    visited = {start_node}
    current_level = [start_node]
    for _ in range(steps):
        next_level = []
        for node in current_level:
            neighbors = list(network.neighbors(node))
            for neighbor in neighbors:
                if neighbor not in visited:
                    visited.add(neighbor)
                    next_level.append(neighbor)
        current_level = next_level
    return visited

G = nx.erdos_renyi_graph(1000, 0.01)
spread = simulate_spread(G, random.choice(list(G.nodes)), 5)
print("Número de nós alcançados:", len(spread))
```

---

## 11. Recapitulando Grafos

**Conceito**:
Revisão das propriedades básicas de grafos, como nós e arestas.

**Exemplo**:
Modelagem de redes de computadores.

**Exemplo em Programação**:

```python
# Criação e visualização de um grafo
G = nx.Graph()
G.add_edges_from([(1, 2), (1, 3), (2, 4)])
nx.draw(G, with_labels=True)
plt.show()
```

---

## 12. Barabási-Albert

**Conceito**:
Modelo de grafos que cria redes com distribuição de grau seguindo uma lei de potência.

**Exemplo**:
Rede de citações científicas.

**Exemplo em Programação**:

```python
G = nx.barabasi_albert_graph(100, 5)
nx.draw(G, node_size=30)
plt.show()
```

---

## 13. Redes Livre de Escala

**Conceito**:
Redes onde alguns nós têm muitas conexões (hubs), seguindo uma distribuição de lei de potência.

**Exemplo**:
Internet.

**Exemplo em Programação**:

```python
# Verificação da distribuição de grau
G = nx.barabasi_albert_graph(1000, 5)
degree_sequence = sorted([d for n, d in G.degree()], reverse=True)
plt.loglog(degree_sequence, 'b-', marker='o')
plt.show()
```

---

## 14. Power Law

**Conceito**:
Relação funcional entre duas quantidades, onde uma quantidade varia como uma potência da outra.

**Exemplo**:
Distribuição de renda.

**Exemplo em Programação**:

```python
from scipy import stats

data = np.random.zipf(2, 1000)
x = np.arange(1, len(data)+1)
plt.loglog(x, sorted(data, reverse=True), marker='o')
plt.show()

# Ajuste de uma lei de potência
fit = stats.powerlaw.fit(data)
print("Parâmetros da lei de potência:", fit)
```

---

## 15. Sistemas Não Lineares

**Conceito**:
Sistemas onde a saída não é proporcional à entrada.

**Exemplo**:
Clima.

**Exemplo em Programação**:

```python
import matplotlib.pyplot as plt

def logistic_map(r, x):
    return r * x * (1 - x)

x = 0.5
r_values = np.linspace(2.5, 4.0, 1000)
iterations = 1000
last = 100
x = 1e-5 * np.ones(len(r_values))
lyapunov = np.zeros(len(r_values))

for i in range(iterations):
    x = logistic_map(r_values, x)
    lyapunov += np.log(abs(r_values - 2 * r_values * x))

lyapunov = lyapunov / iterations
plt.plot(r_values, lyapunov)
plt.axhline(0, color='k', lw=0.5, linestyle='dashed')
plt.show()
```

---

## 16. Pareto

**Conceito**:
Princípio de Pareto, onde 80% dos efeitos vêm de 20% das causas.

**Exemplo**:
80% da riqueza é possuída por 20% das pessoas.

**Exemplo em Programação**:

```python
import matplotlib.pyplot as plt
import numpy as np

# Simulação de distribuição de riqueza
wealth = np.random.pareto(2, 1000)
plt.hist(wealth, bins=50)
plt.show()

# Calculando a proporção de riqueza dos top 20%
top_20_percent = np.percentile(wealth, 80)
print("Top 20% riqueza:", sum(wealth[wealth >= top_20_percent]) / sum(wealth))
```

---

## 17. Mundo Não é Normal

**Conceito**:
Muitas distribuições de dados do mundo real não seguem uma distribuição normal.

**Exemplo**:
Tamanhos de empresas.

**Exemplo em Programação**:

```python
# Comparação de distribuições
data_normal = np.random.normal(0, 1, 1000)
data_pareto = np.random.pareto(2, 1000)
plt.hist(data_normal, bins=30, alpha=0.5, label='Normal')
plt.hist(data_pareto, bins=30, alpha=0.5, label='Pareto')
plt.legend()
plt.show()
```

---

## 18. Top Influencers

**Conceito**:
Identificação de indivíduos com maior influência em redes sociais.

**Exemplo**:
Influenciadores no Instagram.

**Exemplo em Programação**:

```python
import networkx as nx

# Criação de um grafo e cálculo de centralidade
G = nx.barabasi_albert_graph(100, 5)
centrality = nx.degree_centrality(G)
top_influencers = sorted(centrality, key=centrality.get, reverse=True)[:10]
print("Top Influencers:", top_influencers)
```

---

## 19. Top Empresas

**Conceito**:
Identificação de empresas dominantes em um mercado.

**Exemplo**:
Empresas de tecnologia no mercado de ações.

**Exemplo em Programação**:

```python
import pandas as pd

# Simulação de um dataframe de empresas
data = {'Empresa': ['A', 'B', 'C', 'D', 'E'],
        'Receita': [1000, 2000, 3000, 4000, 5000]}
df = pd.DataFrame(data)
top_empresas = df.nlargest(3, 'Receita')
print(top_empresas)
```

---

## 20. Preferential Attachment

**Conceito**:
No modelo Barabási-Albert, novos nós preferem se conectar a nós mais conectados.

**Exemplo**:
Novos sites linkando para sites populares.

**Exemplo em Programação**:

```python
import networkx as nx

# Modelo de crescimento preferencial
G = nx.barabasi_albert_graph(100, 3)
nx.draw(G, node_size=30)
plt.show()
```

---

## 21. Salário

**Conceito**:
Distribuição salarial em um grupo de pessoas.

**Exemplo**:
Diferença salarial entre executivos e operários.

**Exemplo em Programação**:

```python
import numpy as np
import matplotlib.pyplot as plt

salarios = np.random.lognormal(3, 1, 1000)
plt.hist(salarios, bins=50)
plt.show()
print("Salário médio:", np.mean(salarios))
print("Salário mediano:", np.median(salarios))
```

---

## 22. Cauda Longa

**Conceito**:
Produtos com baixa demanda, mas que juntos compõem uma grande parte do mercado.

**Exemplo**:
Vendas de livros raros na Amazon.

**Exemplo em Programação**:

```python
import numpy as np
import matplotlib.pyplot as plt

# Simulação de demanda de produtos
demanda = np.random.zipf(2, 1000)
plt.hist(demanda, bins=50)
plt.show()
```

---

## 23. Perseguir Média

**Conceito**:
Estratégias focadas em atingir a média.

**Exemplo**:
Ajuste de preços para estar na média do mercado.

**Exemplo em Programação**:

```python
# Ajuste de preços para estar na média do mercado
precos = [100, 150, 200, 250, 300]
media_preco = sum(precos) / len(precos)
novo_preco = 0.9 * media_preco
print("Novo preço ajustado:", novo_preco)
```

---

## 24. Novos Mercados

**Conceito**:
Exploração de mercados não saturados.

**Exemplo**:
Startups em setores emergentes.

**Exemplo em Programação**:

```python
# Análise de dados de um novo mercado
import pandas as pd

# Simulação de dados de mercado
data = {'Região': ['Norte', 'Sul', 'Leste', 'Oeste'],
        'Vendas': [1000, 2000, 1500, 2500]}
df = pd.DataFrame(data)
novo_mercado = df.loc[df['Vendas'] < 2000]
print(novo_mercado)
```

---

## 25. Oferta e Procura

**Conceito**:
A relação entre a oferta de um produto e a demanda por ele.

**Exemplo**:
Flutuação de preços de produtos sazonais.

**Exemplo em Programação**:

```python
import matplotlib.pyplot as plt
import numpy as np

# Curvas de oferta e demanda
precos = np.linspace(1, 10, 100)
demanda = 10 - precos
oferta = 2 * precos
plt.plot(precos, demanda, label='Demanda')
plt.plot(precos, oferta, label='Oferta')
plt.xlabel('Preço')
plt.ylabel('Quantidade')
plt.legend()
plt.show()
```

---

## 26. Desculpas

**Conceito**:
Justificativas para eventos ou comportamentos inesperados.

**Exemplo**:
Problemas técnicos em serviços online.

**Exemplo em Programação**:

```python
# Tratamento de exceções em código
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Desculpa, não é possível dividir por zero.")
```

---

## 27. Conclusão

**Conceito**:
Resumo dos tópicos e das lições aprendidas.

**Exemplo**:
Revisão final de uma pesquisa.

**Exemplo em Programação**:

```python
# Função que sumariza os aprendizados
def resumo():
    topicos = [
        "Média no Colégio", "Normal", "Desigualdade", "Requerimento pra Normal",
        "Eventos Independentes", "Zipf e Power Laws", "Erdös-Rényi",
        "Duncan-Strogatz", "Seis Graus de Separação", "Problema Porno",
        "Recapitulando Grafos", "Barabási-Albert", "Redes Livre de Escala",
        "Power Law", "Sistemas Não Lineares", "Pareto", "Mundo Não é Normal",
        "Top Influencers", "Top Empresas", "Preferential Attachment",
        "Salário", "Cauda Longa", "Perseguir Média", "Novos Mercados",
        "Oferta e Procura", "Desculpas", "Conclusão"
    ]
    for topico in topicos:
        print(f"Tópico: {topico}")

resumo()
```

---

Este guia cobre os conceitos principais de cada tópico e fornece exemplos práticos em programação, utilizando Python para facilitar a compreensão dos conceitos.
