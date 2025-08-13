# Métodos de Validação em ML

---

## **Métodos de Validação em Machine Learning**

### **1. Matriz de Confusão**

- **Definição**:
  - Tabela que mostra os **acertos e erros** de um modelo de classificação.
- **Componentes**:
  - **Verdadeiros Positivos (VP)**: Corretamente classificados como positivos.
  - **Falsos Positivos (FP)**: Negativos classificados como positivos.
  - **Verdadeiros Negativos (VN)**: Corretamente classificados como negativos.
  - **Falsos Negativos (FN)**: Positivos classificados como negativos.
- **Uso**:
  - Calcula métricas como **precisão**, **recall** e **acurácia**.

---

### **2. Método Holdout**

- **Como funciona**:
  - Divide os dados em **treino** (70-80%) e **teste** (20-30%).
- **Vantagens**:
  - Simplicidade e baixo custo computacional.
- **Desvantagens**:
  - Resultados podem variar dependendo da divisão aleatória.

---

### **3. K-fold Cross Validation**

- **Processo**:
  1. Divide os dados em **\( k \)** subconjuntos (_folds_) iguais.
  2. Treina o modelo **\( k \)** vezes, usando **\( k-1 \)** _folds_ para treino e **1** para teste.
  3. Calcula a média das métricas de desempenho.
- **Vantagens**:
  - Reduz variabilidade e overfitting.
  - Ideal para **datasets pequenos**.
- **Exemplo comum**: \( k = 5 \) ou \( 10 \).

---

### **4. Bootstrap**

- **Princípio**:
  - Cria múltiplas amostras **com reposição** do dataset original.
- **Vantagens**:
  - Estima a **variabilidade** do modelo.
  - Útil quando dados são **limitados**.
- **Diferença para K-fold**:
  - Observações podem repetir nas amostras.

---

## **Resumo dos Métodos**

| **Método**                  | **Descrição**                            | **Quando Usar?**                                |
| --------------------------- | ---------------------------------------- | ----------------------------------------------- |
| **Matriz de Confusão**      | Mostra VP, FP, VN, FN.                   | Avaliação final de modelos de classificação.    |
| **Holdout**                 | Divisão simples treino/teste.            | Datasets grandes ou prototipagem rápida.        |
| **K-fold Cross Validation** | Avaliação robusta com \( k \) iterações. | Datasets pequenos ou comparação de modelos.     |
| **Bootstrap**               | Amostragem com reposição.                | Estimativa de variabilidade em dados limitados. |

---

## **Exemplo de Código (K-fold com Python)**

```python
from sklearn.model_selection import cross_val_score
scores = cross_val_score(modelo, X, y, cv=5)  # 5 folds
print("Acurácia média:", scores.mean())
```

---

## **Conclusão**

- **Matriz de Confusão**: Para análise detalhada de erros.
- **Holdout**: Validação rápida e simples.
- **K-fold**: Melhor estimativa de generalização.
- **Bootstrap**: Ideal para incerteza em dados pequenos.

---
