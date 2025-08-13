# Algoritmos Genéticos: Teoria e Prática

---

## **1. Introdução**

### **O que são Algoritmos Genéticos (AG)?**

- **Definição**: Técnicas de otimização **bioinspiradas** na seleção natural e genética.
- **Objetivo**: Encontrar soluções aproximadas para problemas complexos (NP-difíceis).
- **Características**:
  - **Heurísticos**: Não garantem o ótimo global, mas boas soluções.
  - **Não determinísticos**: Resultados podem variar entre execuções.

### **Analogia Biológica**

| **Conceito Biológico** | **Equivalente em AG**          |
| ---------------------- | ------------------------------ |
| Gene                   | Parâmetro da solução.          |
| Cromossomo             | Solução candidata (indivíduo). |
| População              | Conjunto de soluções.          |

---

## **2. Etapas do Algoritmo Genético**

### **Fluxo Básico**

```mermaid
graph TD
    A[Geração da População Inicial] --> B[Avaliação de Fitness]
    B --> C[Seleção dos Melhores]
    C --> D[Recombinação (Crossover)]
    D --> E[Mutação]
    E --> B
```

### **Detalhamento**

1. **Geração da População Inicial**:
   - Soluções aleatórias dentro do espaço de busca.
2. **Avaliação de Fitness**:
   - Calcula a "qualidade" de cada indivíduo (ex.: função objetivo).
3. **Seleção**:
   - **Métodos comuns**: Roleta, Torneio.
4. **Recombinação (Crossover)**:
   - Combina genes de pais para gerar filhos (ex.: crossover em 1 ponto).
5. **Mutação**:
   - Pequenas alterações aleatórias para diversidade (ex.: flip de bit).

---

## **3. Aplicações Práticas**

| **Área**               | **Exemplo de Uso**                                           |
| ---------------------- | ------------------------------------------------------------ |
| **Navegação Robótica** | Otimização de trajetórias em ambientes dinâmicos.            |
| **IA Conversacional**  | Geração de diálogos naturais para chatbots.                  |
| **Jogos Digitais**     | Criação de NPCs com comportamentos adaptativos.              |
| **Otimização**         | Solução do **Problema da Mochila** (seleção de itens ótima). |

---

## **4. Implementação Prática**

### **Exemplo em Python (Problema da Mochila)**

```python
import random

def fitness(solution, weights, values, max_weight):
    total_value = sum(s * v for s, v in zip(solution, values))
    total_weight = sum(s * w for s, w in zip(solution, weights))
    return total_value if total_weight <= max_weight else 0

# Parâmetros
population_size = 50
generations = 100
mutation_rate = 0.01

# Algoritmo genético simplificado
population = [[random.randint(0, 1) for _ in items] for _ in range(population_size)]
for _ in range(generations):
    # Avaliação, seleção, crossover e mutação...
```

### **Recursos Adicionais**

- [Implementação no Google Colab](#) _(link fictício)_
- [Vídeo sobre AG e comportamentos adaptativos](#)

---

## **5. Conceitos Avançados**

### **Problemas NP-Completos**

- **Exemplo**: Problema da Mochila, Caixeiro Viajante.
- **Desafio**: AGs são úteis para encontrar **soluções aproximadas** quando métodos exatos são inviáveis.

### **Hiperparâmetros**

| **Parâmetro**        | **Influência**                                        |
| -------------------- | ----------------------------------------------------- |
| Tamanho da População | Maior diversidade, mas custo computacional.           |
| Taxa de Mutação      | Alta = mais diversidade; Baixa = convergência rápida. |

---

## **Resumo**

✅ **Vantagens**:

- Lida com problemas complexos e não lineares.
- Não requer gradientes (útil para espaços de busca discretos).
  ⚠️ **Limitações**:
- Custo computacional elevado para grandes populações.
- Necessidade de ajuste fino dos hiperparâmetros.

---
