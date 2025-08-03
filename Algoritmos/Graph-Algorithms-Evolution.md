# Graph Algorithms Evolution

## Conceito de Grafos
- **Definição**: Coleção de nós (vértices) conectados por arestas (links)
- **Aplicações**: Redes sociais, comunicação, transporte
- **Componentes**:
  - **Nós**: Entidades (pessoas, cidades, computadores)
  - **Arestas**: Conexões entre entidades

## Exemplo de Grafo em Python
```python
import networkx as nx
import matplotlib.pyplot as plt

G = nx.Graph()
G.add_nodes_from([1, 2, 3, 4, 5])
G.add_edges_from([(1, 2), (1, 3), (2, 4), (3, 4), (4, 5)])
nx.draw(G, with_labels=True)
plt.show()
```

---

## Primeira Geração: Relevância Simples
### Contagem de Links
```python
web_pages = {
    'PageA': ['PageB', 'PageC'],
    'PageB': ['PageC'],
    'PageC': ['PageA'],
    'PageD': ['PageC'],
    'PageE': ['PageC', 'PageD']
}

relevance = {page: 0 for page in web_pages}
for links in web_pages.values():
    for link in links:
        relevance[link] += 1
# Output: {'PageA':1, 'PageB':1, 'PageC':4, 'PageD':1, 'PageE':0}
```

---

## Segunda Geração: PageRank e HITS
### Algoritmo PageRank
```python
def pagerank(G, iterations=100, d=0.85):
    N = len(G)
    rank = {node: 1/N for node in G}

    for _ in range(iterations):
        new_rank = {}
        for node in G:
            rank_sum = sum(rank[n]/len(G[n]) for n in G if node in G[n])
            new_rank[node] = (1-d)/N + d*rank_sum
        rank = new_rank
    return rank
```

---

## Terceira Geração: GraphJet (Twitter)
### Sistema de Recomendação Baseado em Grafos
```python
class SimpleGraphJet:
    def __init__(self):
        self.graph = nx.Graph()
        self.user_nodes = set()
        self.item_nodes = set()

    def add_interaction(self, user, item):
        self.graph.add_edge(user, item)
        self.user_nodes.add(user)
        self.item_nodes.add(item)

    def recommend(self, user, n=5):
        neighbors = set(self.graph.neighbors(user))
        candidates = self.item_nodes - neighbors

        scores = defaultdict(int)
        for item in candidates:
            for neighbor in self.graph.neighbors(item):
                scores[item] += 1

        return sorted(scores.items(), key=lambda x: x[1], reverse=True)[:n]
```

---

## Processamento Distribuído
### Exemplo MapReduce
```python
from collections import defaultdict

def map_func(doc):
    for word in doc.split():
        yield (word.lower(), 1)

def reduce_func(pairs):
    counts = defaultdict(int)
    for word, count in pairs:
        counts[word] += count
    return counts

# Simulação
documents = ["Hello world", "Hello Hadoop"]
mapped = [pair for doc in documents for pair in map_func(doc)]
reduced = reduce_func(mapped)
# Output: {'hello':2, 'world':1, 'hadoop':1}
```

---

## Geração de IDs Únicos (Snowflake)
```python
class SnowflakeGenerator:
    def __init__(self, datacenter_id, worker_id):
        self.epoch = 1288834974657
        self.sequence = 0
        self.last_timestamp = -1

    def next_id(self):
        timestamp = int(time.time()*1000)
        if timestamp == self.last_timestamp:
            self.sequence = (self.sequence + 1) & 4095
            if self.sequence == 0:
                timestamp = self._wait_next_ms()
        else:
            self.sequence = 0

        self.last_timestamp = timestamp
        return ((timestamp - self.epoch) << 22) | (self.datacenter_id << 17) | (self.worker_id << 12) | self.sequence
```

---

## Similaridade de Cosseno
```python
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

vector1 = np.array([1, 2, 3])
vector2 = np.array([4, 5, 6])
cos_sim = cosine_similarity([vector1], [vector2])
# Output: [[0.97463185]]
```

---

## Conclusão
Evolução dos algoritmos de grafos:
1. Métodos simples de contagem
2. Algoritmos como PageRank
3. Sistemas distribuídos (Hadoop)
4. Processamento em tempo real (GraphJet)
5. Técnicas avançadas (Snowflake, Similaridade)
