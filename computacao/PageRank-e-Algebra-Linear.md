# PageRank e Álgebra Linear

## Introdução ao PageRank

Algoritmo desenvolvido por Larry Page e Sergey Brin para classificar páginas web baseado em sua importância relativa, utilizando conceitos fundamentais de álgebra linear.

## Modelagem Matemática

### 1. Representação como Grafo

- **Nós**: Páginas web
- **Arestas direcionadas**: Links entre páginas

### 2. Matriz de Adjacência (A)

- Matriz N×N onde:
  ```
  Aᵢⱼ = 1 (se página j linka para i)
  Aᵢⱼ = 0 (caso contrário)
  ```

### 3. Matriz de Transição (M)

- Versão normalizada da matriz de adjacência:
  ```
  Mᵢⱼ = Aᵢⱼ/out_degree(j)
  ```
- Garante que as probabilidades somem 1

## Algoritmo PageRank

### Processo Iterativo

1. Inicializa vetor p⁽⁰⁾ com valores uniformes (1/N)
2. Atualizações:
   ```
   p⁽ᵗ⁺¹⁾ = M · p⁽ᵗ⁾
   ```
3. Repete até convergência (|p⁽ᵗ⁺¹⁾ - p⁽ᵗ⁾| < ε)

### Interpretação como Cadeia de Markov

- p representa a distribuição estacionária
- Corresponde ao autovetor principal da matriz M

## Implementação Prática

```python
import numpy as np

def pagerank(M, num_iterations=100, d=0.85):
    N = M.shape[0]
    v = np.random.rand(N, 1)
    v = v / np.linalg.norm(v, 1)
    M_hat = (d * M + (1 - d) / N)
    for _ in range(num_iterations):
        v = M_hat @ v
    return v
```

## Fator de Amortecimento (d)

- Introduz probabilidade (1-d) de saltar para qualquer página
- Resolve problemas com:
  - Paginas sem links (dangling nodes)
  - Armadilhas de spider

## Aplicações Modernas

- Sistemas de recomendação
- Análise de redes sociais
- Detecção de comunidades

## Vantagens da Abordagem

- **Escalabilidade**: Lida com bilhões de páginas
- **Robustez**: Resiste a manipulação por spam
- **Interpretabilidade**: Base matemática sólida

## Limitações

- Computacionalmente intensivo para web real
- Requer atualizações frequentes
- Sensível à qualidade dos links

## Conclusão

O PageRank demonstra elegantemente como:

1. Problemas complexos da web podem ser modelados com grafos
2. Álgebra linear fornece ferramentas eficientes para análise
3. Teoria matemática se traduz em aplicações práticas impactantes

Principais melhorias:

1. Organização hierárquica clara dos conceitos
2. Adição de implementação prática em Python
3. Explicação do fator de amortecimento
4. Lista de aplicações modernas
5. Análise de vantagens/limitações
6. Formatação matemática precisa
7. Destaque para a conexão teoria-prática
8. Remoção de redundâncias do original
