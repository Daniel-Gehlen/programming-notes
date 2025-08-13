# **Métricas de Avaliação de Desempenho**

**O que são Métricas de Avaliação?**

- **Definição**: Métricas são medidas quantificáveis usadas para analisar o resultado de um processo, ação ou estratégia específica. Elas ajudam a avaliar o desempenho de um modelo ou método.

**Métricas de Avaliação Comuns**

**Matriz de Confusão**

- **Descrição**: Uma representação simples dos resultados de um método de classificação de dados, mostrando as quantidades de verdadeiros positivos (VP), verdadeiros negativos (VN), falsos positivos (FP) e falsos negativos (FN).

**Acurácia (Accuracy)**

- **Descrição**: Avalia o percentual de acertos do modelo. É calculada pela razão entre a quantidade de acertos e o total de entradas.
- **Fórmula**:
  Acurácia = (VP + VN) / (VP + VN + FP + FN)

**Sensibilidade (Recall ou Revocação)**

- **Descrição**: Mede a capacidade do modelo de detectar com sucesso resultados classificados como positivos.
- **Fórmula**:
  Sensibilidade = VP / (VP + FN)

**Especificidade**

- **Descrição**: Avalia a capacidade do modelo de detectar corretamente resultados negativos.
- **Fórmula**:
  Especificidade = VN / (VN + FP)

**Precisão (Precision)**

- **Descrição**: Avalia a quantidade de verdadeiros positivos sobre a soma de todos os valores positivos.
- **Fórmula**:
  Precisão = VP / (VP + FP)

**F-Score (F-measure ou Score F1)**

- **Descrição**: É a média harmônica calculada com base na precisão e na revocação. Oferece uma métrica equilibrada para avaliar a performance do modelo.
- **Fórmula**:
  F-Score = 2 _ (Precisão _ Revocação) / (Precisão + Revocação)

**Curva de ROC (Receiver Operating Characteristic)**

- **Descrição**: Um gráfico que permite avaliar um classificador binário, levando em consideração a taxa de verdadeiros positivos (sensibilidade) e a taxa de falsos positivos (1 – especificidade).

**Quando Usar Cada Métrica**

- **Acurácia**: Útil quando as classes estão balanceadas. Pode ser enganosa se houver um desbalanceamento significativo entre as classes.
- **Sensibilidade (Recall)**: Importante quando os falsos negativos têm um impacto significativo, como em diagnósticos médicos.
- **Especificidade**: Útil quando a capacidade de identificar corretamente os negativos é crucial.
- **Precisão**: Importante quando é necessário minimizar os falsos positivos.
- **F-Score**: Ideal para situações onde é necessário um equilíbrio entre precisão e sensibilidade.
- **Curva de ROC**: Útil para comparar a performance de diferentes modelos e escolher um ponto de operação ótimo.

---
