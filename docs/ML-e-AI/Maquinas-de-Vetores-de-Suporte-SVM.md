# Máquinas de Vetores de Suporte (SVM)

---

## **1. Introdução às SVMs**

### **O que são SVMs?**

- Algoritmo de **aprendizado supervisionado** para classificação e regressão.
- **Objetivo principal**: Encontrar o **hiperplano ótimo** que separa classes no espaço de features com **margem máxima**.

### **Por que "Máquina de Vetores"?**

- **Vetores de suporte**: Pontos de dados mais próximos do hiperplano, que **definem a fronteira de decisão**.
- **Analogia**:
  - Hiperplano = "Linha" que separa classes (em 2D: reta; em 3D: plano).

---

## **2. Tipos de Aprendizado**

| **Tipo**               | **Descrição**                           | **Exemplo em SVM**                          |
| ---------------------- | --------------------------------------- | ------------------------------------------- |
| **Supervisionado**     | Usa dados rotulados para treinamento.   | Classificação binária (ex.: spam/não spam). |
| **Não supervisionado** | Identifica padrões sem rótulos prévios. | Não aplicável a SVM clássica.               |

---

## **3. SVM vs. Redes Neurais (RNA)**

| **Critério**        | **SVM**                                          | **RNA**                                      |
| ------------------- | ------------------------------------------------ | -------------------------------------------- |
| **Objetivo**        | Maximizar margem entre classes.                  | Minimizar erro global (loss function).       |
| **Hiperplano**      | Encontra fronteira ótima com suporte matemático. | Aprende representações hierárquicas.         |
| **Dados**           | Eficaz em **pequenos datasets**.                 | Requer **grandes volumes de dados**.         |
| **Não linearidade** | Usa **kernels** (ex.: RBF, polinomial).          | Captura não linearidade com camadas ocultas. |

---

## **4. Desenvolvendo a Hipótese**

### **Escolha do Hiperplano**

- **Cenário ideal**: Dados **linearmente separáveis**.
  - Múltiplos hiperplanos podem separar as classes (A, B, C).
  - **Solução**: Selecionar o que maximiza a margem (distância aos vetores de suporte).

### **Maximização da Margem**

- **Fórmula matemática**:
  \[
  \text{Margem} = \frac{2}{\|\mathbf{w}\|}
  \]
  - \(\mathbf{w}\): Vetor normal ao hiperplano.
- **Processo**:
  1. Identificar vetores de suporte (pontos mais próximos).
  2. Ajustar \(\mathbf{w}\) e \(b\) (viés) para maximizar a margem.

---

## **Exemplo Visual**

### **Caso Linearmente Separável**

- **Hiperplano ótimo**:
  ![SVM Margin](https://via.placeholder.com/300x200?text=Hiperplano+com+Margem+Máxima)
  _Legenda: Linha sólida = hiperplano; Linhas tracejadas = margens; Pontos circulados = vetores de suporte._

### **Caso Não Linear**

- **Solução**: Kernel trick (mapear dados para espaço dimensional superior).
  - Exemplo: Kernel RBF:
    \[
    K(\mathbf{x_i}, \mathbf{x_j}) = \exp\left(-\gamma \|\mathbf{x_i} - \mathbf{x_j}\|^2\right)
    \]

---

## **Implementação Prática (Python)**

```python
from sklearn.svm import SVC

# Modelo SVM com kernel RBF
model = SVC(kernel='rbf', C=1.0, gamma='scale')
model.fit(X_train, y_train)

# Avaliação
accuracy = model.score(X_test, y_test)
```

---

## **Resumo**

- **SVMs**: Poderosas para **classificação com margens claras** e datasets pequenos/médios.
- **Kernels**: Permitem lidar com **dados não lineares** (ex.: imagens, textos).
- **Vantagens**:
  - Menor risco de overfitting em comparação com redes neurais para certos problemas.
  - Interpretabilidade matemática.

---
