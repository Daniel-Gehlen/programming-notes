# Tipos de Validação em ML

---

## **Métodos de Validação em Machine Learning**

### **1. Métodos de Gradiente**

- **Definição**:
  Técnicas de otimização **determinísticas** que utilizam derivadas para encontrar ótimos de funções.
- **Características**:
  - Sempre produzem o mesmo resultado com os mesmos pontos iniciais.
  - Ideais para funções convexas ou suaves.

#### **Tipos Principais**

| **Método**               | **Objetivo**                      | **Aplicação em ML**                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------------------- |
| **Descida do Gradiente** | Encontrar **mínimos** de funções. | Otimização de modelos (ex.: ajuste de pesos em redes neurais). |
| **Subida do Gradiente**  | Encontrar **máximos** de funções. | Menos comum, usado em alguns cenários de maximização.          |

---

### **2. Métodos Heurísticos**

- **Definição**:
  Técnicas **não-determinísticas** para problemas complexos sem solução exata viável.
- **Inspiração**:
  Baseados em processos naturais (evolução, comportamento de enxames).

#### **Algoritmos Comuns**

| **Método**                             | **Inspiração**                  | **Caso de Uso**                                    |
| -------------------------------------- | ------------------------------- | -------------------------------------------------- |
| **Algoritmos Genéticos**               | Seleção natural (DNA, mutação). | Otimização de hiperparâmetros, design de redes.    |
| **Otimização por Enxame (PSO)**        | Movimento de cardumes/bandos.   | Ajuste de parâmetros em espaços multidimensionais. |
| **Otimização por Colônia de Formigas** | Comportamento de formigas.      | Problemas de roteamento (ex.: logística).          |

---

### **Quando Usar Cada Abordagem?**

| **Critério**            | **Métodos de Gradiente**         | **Métodos Heurísticos**                          |
| ----------------------- | -------------------------------- | ------------------------------------------------ |
| **Tipo de Problema**    | Funções diferenciáveis/convexas. | Problemas NP-difíceis, espaços de busca grandes. |
| **Previsibilidade**     | Resultados reproduzíveis.        | Soluções aproximadas (não exatas).               |
| **Custo Computacional** | Baixo a moderado.                | Alto (requer muitas iterações).                  |

---

## **Exemplos Práticos**

### **Gradient Descent em Redes Neurais**

```python
# Exemplo em PyTorch
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
loss.backward()  # Calcula gradientes
optimizer.step()  # Atualiza pesos
```

### **Algoritmo Genético Simplificado**

1. **População Inicial**: Gera soluções aleatórias.
2. **Seleção**: Escolhe as melhores soluções.
3. **Crossover/Mutação**: Cria novas soluções.
4. **Repete**: Até convergir.

---

## **Resumo**

- **Gradiente**:
  - **Prós**: Eficiente para funções suaves.
  - **Contras**: Pode ficar preso em ótimos locais.
- **Heurísticas**:
  - **Prós**: Lida com complexidade e não-convexidade.
  - **Contras**: Custo computacional elevado.

---
