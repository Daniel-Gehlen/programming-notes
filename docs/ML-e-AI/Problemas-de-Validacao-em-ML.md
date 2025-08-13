# Problemas de Validação em ML

---

## **Problemas de Validação em Machine Learning**

### **Introdução**

- Ajuste inadequado do modelo pode levar a **precisão insatisfatória**.
- Três problemas principais:
  1. **Underfitting**
  2. **Dados Desbalanceados**
  3. **Overfitting**

---

### **1. Underfitting**

- **Definição**:
  - Modelo **muito simples** para capturar padrões nos dados.
- **Sintomas**:
  - Alto erro em **treino e teste**.
  - Exemplo: Regressão linear tentando modelar dados não lineares.
- **Causas**:
  - Poucas camadas em redes neurais.
  - Features irrelevantes.
- **Soluções**:
  - Aumentar complexidade do modelo.
  - Adicionar features ou camadas.

---

### **2. Dados Desbalanceados**

- **Definição**:
  - Classes com **frequência muito desigual** (ex.: 95% classe A, 5% classe B).
- **Impacto**:
  - Modelo **tendencioso** para a classe majoritária.
  - Métricas enganosas (ex.: alta acurácia, mas recall ruim para classe minoritária).
- **Soluções**:
  - **Técnicas de balanceamento**:
    - Oversampling (SMOTE).
    - Undersampling.
    - Uso de pesos de classe.
  - Métricas robustas: **F1-score**, **Matriz de Confusão**.

---

### **3. Overfitting**

- **Definição**:
  - Modelo **memoriza** dados de treino, mas falha em generalizar.
- **Sintomas**:
  - Erro baixo no treino, **alto no teste**.
  - Exemplo: Árvore de decisão com profundidade excessiva.
- **Soluções**:
  - **Regularização** (L1/L2, Dropout).
  - **Validação Cruzada**.
  - **Data Augmentation** (para imagens).

---

## **Resumo dos Problemas e Soluções**

| **Problema**             | **Descrição**                      | **Soluções**                                      |
| ------------------------ | ---------------------------------- | ------------------------------------------------- |
| **Underfitting**         | Modelo muito simples.              | Aumentar complexidade, adicionar features.        |
| **Dados Desbalanceados** | Classes com distribuição desigual. | Oversampling, undersampling, métricas ajustadas.  |
| **Overfitting**          | Modelo memoriza dados de treino.   | Regularização, validação cruzada, early stopping. |

---

## **Exemplo Prático**

### **Cenário de Overfitting em CNN**

1. **Treino**: Acurácia = 99%.
2. **Teste**: Acurácia = 60%.
3. **Ação**:
   - Adicionar **Dropout (0.5)**.
   - Reduzir camadas da rede.

---

## **Conclusão**

- Identificar esses problemas **antes do deploy** é crucial.
- Combinações de técnicas (ex.: validação cruzada + SMOTE) são eficazes.

---
