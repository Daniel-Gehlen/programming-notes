# Cross-validation em ML

---

## **Algoritmo de Validação em Machine Learning**

### **Cross-validation (Validação Cruzada)**

- **Definição**:
  - Técnica que **particiona os dados** em subconjuntos (_folds_).
  - **Objetivo**: Avaliar o modelo de forma robusta, garantindo generalização para dados não vistos.

---

## **Detalhes do Algoritmo**

### **1. Particionamento dos Dados**

- Divide o dataset em **\( k \)** subconjuntos (ex.: \( k=5 \)).

### **2. Treinamento e Teste**

- **Processo iterativo**:
  1. **Treina** o modelo em **\( k-1 \)** _folds_.
  2. **Testa** no _fold_ restante.
  3. Repete **\( k \)** vezes, rotacionando o _fold_ de teste.

### **3. Avaliação do Modelo**

- **Métricas calculadas** em cada iteração (ex.: acurácia, precisão).
- **Resultado final**: Média das métricas de todas as iterações.

---

## **Exemplo Prático (\( k=5 \))**

| **Iteração** | **Folds de Treino** | **Fold de Teste** |
| ------------ | ------------------- | ----------------- |
| 1            | 2,3,4,5             | 1                 |
| 2            | 1,3,4,5             | 2                 |
| 3            | 1,2,4,5             | 3                 |
| 4            | 1,2,3,5             | 4                 |
| 5            | 1,2,3,4             | 5                 |

---

## **Benefícios**

✅ **Avaliação Robustez**:

- Evita viés de uma única divisão treino/teste.
  ✅ **Redução de Overfitting**:
- Garante que o modelo performe bem em **dados não vistos**.

---

## **Implementação Prática**

- **Bibliotecas**:
  ```python
  from sklearn.model_selection import cross_val_score
  scores = cross_val_score(modelo, X, y, cv=5)  # cv = número de folds
  ```
- **Recurso**: [Exemplo no Google Colab](#) _(link fictício)_.

---

## **Quando Usar?**

- **Datasets pequenos**: Maximiza o uso dos dados.
- **Comparação de modelos**: Seleciona o mais generalizável.

---
