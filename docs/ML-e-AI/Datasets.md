# Datasets: Teoria e Prática

---

## **1. O que é um Dataset?**

- **Definição**: Coleção de dados utilizada para treinar, testar e validar modelos de ML.
- **Tipos**:
  - Estruturados (tabelas CSV, SQL).
  - Não estruturados (imagens, textos, áudios).

---

## **2. Qualidade das Amostras**

- **Requisitos**:
  - **Representatividade**: Refletir a diversidade do problema real.
  - **Rotulação precisa**: Dados anotados corretamente (ex.: bounding boxes em imagens).
  - **Volume adequado**: Suficiente para evitar overfitting (ex.: milhares de amostras para deep learning).

---

## **3. Como Criar um Dataset?**

### **Processo de Criação**

1. **Coleta**:
   - Raspagem de dados, APIs, sensores.
2. **Pré-processamento**:
   - Limpeza (remover outliers, preencher valores faltantes).
   - Normalização (escalonar features).
3. **Anotação**:
   - Rotulação manual ou semi-automática (ex.: LabelImg para imagens).

### **Ferramentas Úteis**

- **LabelImg** (anotação de imagens).
- **Pandas** (manipulação de dados tabulares).

---

## **4. Serviços de Datasets**

| **Repositório**           | **Foco**                       | **Exemplo de Dataset**        |
| ------------------------- | ------------------------------ | ----------------------------- |
| **Kaggle**                | Competições e datasets gerais. | MNIST, Titanic.               |
| **UCI ML Repository**     | Datasets acadêmicos.           | Iris, Wine Quality.           |
| **Google Dataset Search** | Busca global.                  | Diversos (pesquisa por tema). |

---

## **Máquinas de Vetores de Suporte (SVM)**

### **1. Definição**

- Algoritmo supervisionado para **classificação** e **regressão**.
- **Objetivo**: Encontrar o hiperplano ótimo que separa classes com **margem máxima**.

### **2. Tipos de Aprendizado**

| **Tipo**               | **Descrição**                                      |
| ---------------------- | -------------------------------------------------- |
| **Supervisionado**     | Usa dados rotulados (ex.: SVM para classificação). |
| **Não supervisionado** | Identifica padrões sem rótulos (ex.: clustering).  |

### **3. SVM vs. Redes Neurais**

| **Critério**   | **SVM**                        | **RNA**                          |
| -------------- | ------------------------------ | -------------------------------- |
| **Hiperplano** | Maximiza margem entre classes. | Minimiza erro global.            |
| **Dados**      | Eficaz em pequenos datasets.   | Requer grandes volumes de dados. |

### **4. Escolha do Hiperplano**

- **Caso linearmente separável**:
  - Hiperplano ótimo = maior distância aos pontos mais próximos (_support vectors_).
- **Caso não linear**:
  - Uso de **kernels** (ex.: RBF, polinomial) para mapear dados para espaços de alta dimensão.

### **5. Tratamento de Outliers**

- **Parâmetro C**: Controla a tolerância a outliers (C alto = menos tolerância).

---

## **Exemplo Prático (SVM em Python)**

```python
from sklearn.svm import SVC
model = SVC(kernel='rbf', C=1.0)
model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)
```

---

## **Resumo**

- **Datasets**: Base do ML — qualidade e volume são críticos.
- **SVM**: Poderoso para classificação com margens claras, mas menos escalável que redes neurais para big data.

---
