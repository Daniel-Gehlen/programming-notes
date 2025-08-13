# Otimização de Hiperparâmetros

---

### **Por que trabalhar com otimização de hiperparâmetros?**

### **Hiperparâmetros vs. Parâmetros**

- **Hiperparâmetros**:

  - São **configurados antes do treinamento** do modelo.
  - Controlam o **processo de aprendizado**.
  - _Exemplos_:
    - Número de neurônios em uma rede neural
    - Número de vizinhos no KNN
    - Taxa de aprendizado

- **Parâmetros**:
  - São **ajustados durante o treinamento** (ex.: pesos em uma rede neural).
  - Derivados **diretamente dos dados**.

---

### **Processo de Treinamento**

- Os modelos de _Machine Learning_ são treinados em **bases de dados históricas (treino)**.
- Durante o treinamento:
  - O modelo **ajusta seus parâmetros internos** com base nos dados.
- O programador **define os hiperparâmetros antes do treinamento**.

---

### **Objetivo da Otimização de Hiperparâmetros**

1. **Melhor Desempenho**
   - Encontrar a configuração que maximiza a eficácia do modelo.
2. **Combinação Ideal**
   - Identificar os valores que levam ao **melhor resultado possível**.

---

### **Exemplos de Hiperparâmetros**

- Número de neurônios em uma **Rede Neural Artificial (RNA)**
- Número de vizinhos no **K-Nearest Neighbors (KNN)**
- **Taxa de aprendizado** (controla a velocidade da convergência)

---

### **Métrica de Performance**

- **Avaliação do modelo**:
  - **Precisão**, **Recall**, **Erro Quadrático Médio (MSE)**
  - Comparação do desempenho com diferentes combinações de hiperparâmetros.

---
