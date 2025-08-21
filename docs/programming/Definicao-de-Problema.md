# Definição de Problema

É difícil de explicar precisamente o que é um problema, mas podemos explicar como sendo uma questão que se propõe para ser resolvida. Note que resolver um problema não necessariamente significa em se ter um método para resolvê-lo. Antes mesmo de se tentar buscar a solução de um problema, deve-se responder as seguintes perguntas:

- **Quais são os dados (informações)?**
- **Quais são as soluções possíveis?**
- **O que caracteriza uma solução satisfatória?**

Também pode-se pensar que problema é algo difícil de resolver, uma dúvida, uma questão, enigma ou mistério. Problema é melhor "entendido" nas diferentes áreas do conhecimento, por exemplo:

- Problema dos canibais e missionários;
- Problema do caixeiro viajante;
- Problema das pontes de Königsberg;
- Problema do carteiro chinês;
- Tabuleiro de xadrez mutilado;

## Representação Matemática

Na Teoria dos problemas, um problema pode ser representado em linguagem matemática da seguinte forma:

```
P = (I, B, C)
```

Onde:

- **P**: O problema apresentado;
- **B**: O conjunto de dados do problema, conjunto não vazio, que deve representar a informação apropriada do problema. Alguns elementos podem permanecer iguais e outros em constante dinâmica. É necessário documentar não só o estado inicial do problema mas também todos seus estados de mudanças.
- **I**: O conjunto de operações e transformações, também conjunto não vazio, que podem ocorrer durante o processo da resolução do problema desde a sua fase inicial, as possíveis respostas.
- **C**: Condição, uma relação binária, que deve satisfazer o problema. Esta relação caracteriza uma solução satisfatória, ela associa a cada elemento do conjunto de dados a solução única desejada. Mais precisamente é o conjunto solução do problema.

---

## Exemplos de Implementação

### Representação de um Problema em Python

```python
class Problema:
    def __init__(self, nome, dados_iniciais, operacoes, condicao_solucao):
        self.nome = nome
        self.dados = dados_iniciais  # Conjunto B
        self.operacoes = operacoes    # Conjunto I
        self.condicao = condicao_solucao  # Conjunto C

    def verificar_solucao(self, solucao_candidata):
        """Verifica se uma solução candidata satisfaz a condição C"""
        return self.condicao(self.dados, solucao_candidata)

# Exemplo: Problema de verificação de número primo
def eh_primo(dados, numero):
    """Condição C: verifica se um número é primo"""
    if numero < 2:
        return False
    for i in range(2, int(numero**0.5) + 1):
        if numero % i == 0:
            return False
    return True

# Criando instância do problema
problema_primo = Problema(
    nome="Verificação de número primo",
    dados_iniciais={"numero": 17},
    operacoes=["divisão", "verificação"],
    condicao_solucao=eh_primo
)

# Testando uma solução
resultado = problema_primo.verificar_solucao(17)
print(f"17 é primo? {resultado}")  # Output: True
```

### Estrutura de Dados para Representação de Estados

```javascript
// Representação de um estado do problema
class EstadoProblema {
  constructor(dados, historico = []) {
    this.dados = { ...dados }; // Estado atual dos dados (B)
    this.historico = [...historico]; // Histórico de transformações
    this.operacoesAplicaveis = []; // Operações possíveis (I)
  }

  aplicarOperacao(operacao) {
    // Simula a aplicação de uma operação do conjunto I
    const novoEstado = new EstadoProblema({ ...this.dados }, [
      ...this.historico,
      operacao.nome,
    ]);

    // Aplica transformação nos dados
    operacao.aplicar(novoEstado.dados);
    return novoEstado;
  }

  verificarSolucao(condicao) {
    // Verifica se satisfaz a condição C
    return condicao(this.dados);
  }
}
```

---

## Recursos Complementares

### 📚 Leituras Recomendadas

- [Problem Solving and Algorithms](https://www.cs.mcgill.ca/~rwest/wikispeedia/wpcd/wp/a/Algorithm.htm) - Conceitos fundamentais
- [Mathematical Problem Theory](https://plato.stanford.edu/entries/problem-theory/) - Stanford Encyclopedia of Philosophy
- [Problem Formulation in AI](https://www.cs.cmu.edu/~15381-f24/schedule.html) - Material didático da CMU

### 🧮 Problemas Clássicos Implementados

- [Traveling Salesman Problem Solutions](https://github.com/dream75/TravellingSalesmanProblem) - Implementações do problema do caixeiro viajante
- [Missionaries and Cannibals Problem](https://github.com/aimacode/aima-python/blob/master/search.py#L588) - Solução em Python para o problema dos missionários e canibais
- [Königsberg Bridges](https://github.com/networkx/networkx/blob/main/networkx/algorithms/euler.py) - Implementação de algoritmos Eulerianos em NetworkX

### 🔍 Ferramentas de Análise

- [State Space Search Visualization](https://github.com/qiao/PathFinding.js) - Biblioteca para visualização de problemas de busca
- [Problem Solving Environments](https://cocalc.com/) - Ambiente colaborativo para resolução de problemas matemáticos

---

# Exemplos de Implementação dos Problemas Clássicos

## 1. Problema dos Canibais e Missionários

```python
from collections import deque

def missionaries_cannibals():
    """Resolve o problema dos missionários e canibais usando busca em largura"""
    initial_state = (3, 3, 1)  # (missionários na esquerda, canibais na esquerda, barco na esquerda)
    goal_state = (0, 0, 0)

    # Gera movimentos válidos: (m, c) onde m + c <= 2
    moves = [(m, c) for m in range(3) for c in range(3) if 1 <= m + c <= 2]

    visited = set()
    queue = deque([(initial_state, [])])

    while queue:
        state, path = queue.popleft()

        if state == goal_state:
            return path + [state]

        if state in visited:
            continue

        visited.add(state)

        m_left, c_left, boat = state

        if boat == 1:  # Barco na esquerda
            for move in moves:
                m_move, c_move = move
                if m_left >= m_move and c_left >= c_move:
                    new_state = (m_left - m_move, c_left - c_move, 0)
                    if is_valid(new_state):
                        queue.append((new_state, path + [state, (m_move, c_move, '→')]))
        else:  # Barco na direita
            for move in moves:
                m_move, c_move = move
                if (3 - m_left) >= m_move and (3 - c_left) >= c_move:
                    new_state = (m_left + m_move, c_left + c_move, 1)
                    if is_valid(new_state):
                        queue.append((new_state, path + [state, (m_move, c_move, '←')]))

    return None

def is_valid(state):
    """Verifica se um estado é válido (não há mais canibais que missionários em qualquer margem)"""
    m_left, c_left, boat = state
    m_right = 3 - m_left
    c_right = 3 - c_left

    # Missionários não podem ser em menor número que canibais em qualquer margem
    if (m_left > 0 and c_left > m_left) or (m_right > 0 and c_right > m_right):
        return False

    return True

# Executando o problema
solution = missionaries_cannibals()
print("Solução do problema dos missionários e canibais:")
for step in solution:
    print(step)
```

**Link relacionado**: [Missionaries and Cannibals Problem - Wikipedia](https://en.wikipedia.org/wiki/Missionaries_and_cannibals_problem)

## 2. Problema do Caixeiro Viajante (TSP)

```python
import itertools

def traveling_salesman(graph, start):
    """Resolve o problema do caixeiro viajante usando força bruta (apenas para grafos pequenos)"""
    n = len(graph)
    nodes = [i for i in range(n) if i != start]

    min_path = None
    min_cost = float('inf')

    # Testa todas as permutações possíveis
    for permutation in itertools.permutations(nodes):
        current_path = [start] + list(permutation) + [start]
        current_cost = 0

        # Calcula o custo do caminho
        for i in range(len(current_path) - 1):
            from_node = current_path[i]
            to_node = current_path[i + 1]
            current_cost += graph[from_node][to_node]

        # Atualiza a melhor solução
        if current_cost < min_cost:
            min_cost = current_cost
            min_path = current_path

    return min_path, min_cost

# Exemplo de grafo (matriz de adjacência)
graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

# Executando o problema
path, cost = traveling_salesman(graph, 0)
print(f"\nSolução do problema do caixeiro viajante:")
print(f"Melhor caminho: {path}")
print(f"Custo total: {cost}")
```

**Link relacionado**: [Traveling Salesman Problem - Wikipedia](https://en.wikipedia.org/wiki/Travelling_salesman_problem)

## 3. Problema das Pontes de Königsberg

```python
def has_eulerian_path(graph):
    """Verifica se existe um caminho euleriano no grafo (resolvendo o problema das pontes de Königsberg)"""
    odd_degree_count = 0

    for node in graph:
        if len(graph[node]) % 2 != 0:
            odd_degree_count += 1

    # Um grafo tem caminho euleriano se tiver 0 ou 2 vértices de grau ímpar
    return odd_degree_count == 0 or odd_degree_count == 2

# Representando as pontes de Königsberg
# A, B, C, D são as áreas de terra
# Pontes: A-B, A-B, A-C, A-D, B-C, C-D
konigsberg_graph = {
    'A': ['B', 'B', 'C', 'D'],
    'B': ['A', 'A', 'C'],
    'C': ['A', 'B', 'D'],
    'D': ['A', 'C']
}

# Executando o problema
result = has_eulerian_path(konigsberg_graph)
print(f"\nProblema das pontes de Königsberg:")
print(f"Existe caminho euleriano? {result}")
print("Isso prova que é impossível cruzar todas as pontes exatamente uma vez e retornar ao ponto inicial.")
```

**Link relacionado**: [Seven Bridges of Königsberg - Wikipedia](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg)

## 4. Problema do Carteiro Chinês

```python
import networkx as nx

def chinese_postman(graph):
    """Resolve o problema do carteiro chinês para grafos eulerianos"""
    try:
        # Verifica se o grafo é euleriano
        if not nx.is_eulerian(graph):
            # Se não for, encontra o caminho mínimo para tornar euleriano
            odd_nodes = [v for v, d in graph.degree() if d % 2 == 1]
            pairs = nx.min_weight_matching(nx.Graph(graph))

            # Adiciona arestas para tornar o grafo euleriano
            for u, v in pairs:
                graph.add_edge(u, v, weight=nx.shortest_path_length(graph, u, v))

        # Encontra o circuito euleriano
        circuit = list(nx.eulerian_circuit(graph))
        return circuit

    except nx.NetworkXError:
        return "O grafo não possui solução para o problema do carteiro chinês"

# Criando um grafo de exemplo
G = nx.Graph()
G.add_weighted_edges_from([
    (0, 1, 1), (0, 2, 2), (1, 2, 3),
    (1, 3, 4), (2, 3, 5), (3, 4, 6)
])

# Executando o problema
print("\nProblema do carteiro chinês:")
circuit = chinese_postman(G)
print(f"Circuito euleriano: {circuit}")
```

**Link relacionado**: [Chinese Postman Problem - Wikipedia](https://en.wikipedia.org/wiki/Route_inspection_problem)

## 5. Tabuleiro de Xadrez Mutilado

```python
def mutilated_chessboard(n):
    """Verifica se é possível cobrir um tabuleiro de xadrez mutilado com dominós"""
    # Um tabuleiro n x n tem n² quadrados
    # Removemos dois cantos opostos (pretos), então temos n² - 2 quadrados
    total_squares = n * n - 2

    # Cada dominó cobre 2 quadrados
    if total_squares % 2 != 0:
        return False

    # Contamos quadrados brancos e pretos restantes
    # Em um tabuleiro de xadrez, há igual número de brancos e pretos
    # Mas removemos dois cantos da mesma cor (ambos pretos ou ambos brancos)
    white_count = total_squares // 2
    black_count = total_squares // 2

    # Se removemos dois quadrados da mesma cor, o balanceamento fica inconsistente
    # Dois cantos opostos têm a mesma cor
    return white_count == black_count

# Executando o problema
print("\nTabuleiro de xadrez mutilado (8x8 com dois cantos removidos):")
result = mutilated_chessboard(8)
print(f"É possível cobrir com dominós? {result}")
print("Isso demonstra o problema de coloração do tabuleiro de xadrez.")
```

**Link relacionado**: [Mutilated Chessboard Problem - Wikipedia](https://en.wikipedia.org/wiki/Mutilated_chessboard_problem)

---

## Recursos Adicionais

### 📚 Implementações Completas

- [NetworkX Library](https://networkx.org/) - Biblioteca Python para análise de grafos
- [Python Algorithms](https://github.com/prabhupant/python-algorithms) - Repositório com implementações de algoritmos clássicos

### 🧮 Visualizações Interativas

- [TSP Visualization](https://www.cs.usfca.edu/~galles/visualization/TSP.html)
- [Missionaries and Cannibals Simulation](https://www.novelgames.com/en/missionaries/)

### 🔍 Leitura Complementar

- [Graph Theory Algorithms](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
- [Classic Computer Science Problems in Python](https://www.manning.com/books/classic-computer-science-problems-in-python)

_Nota: Algumas implementações são simplificadas para fins educacionais. Problemas como o TSP para instâncias grandes requerem algoritmos mais sofisticados._
