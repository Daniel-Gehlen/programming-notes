# Ajustes de Hiperparâmetros na Prática

---

### **Hiperparâmetros**

- **Definição**: São variáveis do algoritmo definidas **antes do treinamento** do modelo.
- **Objetivo da Otimização**: Melhorar o desempenho do modelo ajustando os hiperparâmetros para obter o melhor resultado possível.

### **Exemplos de Hiperparâmetros**

1. **Número de Neurônios em uma Rede Neural Artificial (RNA)**
   - Refere-se ao número de unidades na **camada oculta**.
2. **Número de Camadas em uma RNA**
   - Refere-se à **profundidade da rede neural**.
3. **Número de Vizinhos no K-Nearest Neighbors (KNN)**
   - Define quantos vizinhos mais próximos serão considerados para **classificação ou regressão**.

### **Métricas de Performance para Regressão**

1. **Erro Quadrático Médio (MSE – Mean Squared Error)**
   - Mede a média dos quadrados das diferenças entre os **valores previstos** e os **valores reais**.
2. **Erro Absoluto Médio (MAE – Mean Absolute Error)**
   - Mede a média das **diferenças absolutas** entre os valores previstos e os valores reais.

### **Práticas para Ajuste de Hiperparâmetros**

1. **Exploração Inicial**
   - Comece com uma **ampla exploração** dos espaços de hiperparâmetros para entender como diferentes valores afetam o desempenho do modelo.
2. **Refinamento**
   - Após uma exploração inicial, **refine a busca** com base nos resultados obtidos para encontrar combinações mais promissoras.
3. **Validação Cruzada**
   - Use técnicas de **validação cruzada** para avaliar a performance do modelo com diferentes combinações de hiperparâmetros e **evitar overfitting**.

---
