# Similaridade de Cosseno: Teoria e Aplicações Práticas

## Definição Matemática

Mede a similaridade entre dois vetores num espaço n-dimensional calculando o cosseno do ângulo entre eles:

similaridade = cos(θ) = (A · B) / (‖A‖ ‖B‖) = (Σ A_i B_i) / (sqrt(Σ A_i²) × sqrt(Σ B_i²))

### Componentes Chave:

- **Produto Escalar (A·B)**: Soma dos produtos dos componentes
- **Normas (‖A‖, ‖B‖)**: Magnitude dos vetores
- **Ângulo (θ)**: Medida direcional da similaridade

## Implementação em Python

```python
import numpy as np

def cosine_similarity(vec1, vec2):
    """Calcula similaridade de cosseno entre dois vetores"""
    dot_product = np.dot(vec1, vec2)
    norm_product = np.linalg.norm(vec1) * np.linalg.norm(vec2)
    return dot_product / norm_product

# Exemplo básico
v1 = np.array([4, 1])
v2 = np.array([1, 3])
print(f"Similaridade: {cosine_similarity(v1, v2):.4f}")

# Exemplo com embeddings
tweet_emb1 = np.array([0.1, 0.3, 0.5])
tweet_emb2 = np.array([0.2, 0.1, 0.7])
print(f"Similaridade entre tweets: {cosine_similarity(tweet_emb1, tweet_emb2):.4f}")
```

## Interpretação dos Resultados

- **1.0**: Vetores idênticos (0°)
- **0.0**: Vetores ortogonais (90°)
- **-1.0**: Vetores opostos (180°)

## Aplicações Reais

### 1. Análise de Texto (NLP)

- Comparação de documentos usando TF-IDF
- Agrupamento de notícias similares

### 2. Sistemas de Recomendação

- Match entre perfis de usuários e produtos
- Recomendação de conteúdo em redes sociais

### 3. Processamento de Embeddings

- SimClusters no Twitter
- Análise de similaridade entre posts

## Caso de Estudo: Twitter SimClusters

| Conceito         | Descrição                                     |
| ---------------- | --------------------------------------------- |
| **Embeddings**   | Representações vetoriais de tweets/usuários   |
| **Clusters**     | Grupos baseados em interesses comuns          |
| **Similaridade** | Calculada entre embeddings para recomendações |

```python
# Exemplo SimClusters
user_embedding = np.array([0.7, 0.2, 0.1])
content_embedding = np.array([0.6, 0.3, 0.1])
similarity = cosine_similarity(user_embedding, content_embedding)
print(f"Relevância do conteúdo: {similarity:.2f}")
```

## Vantagens

- **Invariante a escala**: Só considera direção, não magnitude
- **Eficiência**: Cálculos rápidos mesmo para vetores esparsos
- **Interpretabilidade**: Resultados entre -1 e 1

## Limitações

- Sensível à dimensionalidade ("maldição da dimensionalidade")
- Requer normalização para dados não uniformes
- Não considera relações semânticas complexas

## Boas Práticas

1. Normalizar vetores antes do cálculo
2. Reduzir dimensionalidade com PCA quando necessário
3. Combinar com outras métricas (ex: Jaccard) para análise multimodal

## Conclusão

A similaridade de cosseno oferece um método robusto para:

- Quantificar similaridade direcional
- Aplicações em grandes conjuntos de dados
- Sistemas onde a magnitude é menos relevante que o padrão

Principais melhorias:

1. Organização hierárquica do conteúdo
2. Adição de fórmulas matemáticas formatadas
3. Exemplos de código comentados
4. Tabela comparativa para aplicações
5. Destaque para interpretação dos valores
6. Lista de vantagens/limitações
7. Guia de boas práticas
8. Remoção de redundâncias do original
9. Adição de caso de estudo estruturado
10. Formatação consistente em Markdown
