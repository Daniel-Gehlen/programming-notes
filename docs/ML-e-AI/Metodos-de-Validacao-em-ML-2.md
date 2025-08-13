# Métodos de Validação em ML - 2

---

## **Métodos de Validação em Machine Learning**
### **Introdução**
- A validação é **essencial** para:
  - Avaliar o desempenho do modelo.
  - Garantir que ele generalize bem para **dados não vistos**.

---

## **Por que Validar um Modelo?**
- **Objetivos**:
  - Evitar **overfitting** (memorização dos dados de treino).
  - Assegurar que o modelo funcione em cenários reais.

---

## **Tipos de Conjuntos de Dados**
| **Conjunto**         | **Função**                                                                 | **Analogia com Ensino**                     |
|-----------------------|----------------------------------------------------------------------------|---------------------------------------------|
| **Treino**           | Treinar o modelo (ajustar parâmetros).                                     | Aluno estuda o material teórico.            |
| **Validação**        | Ajustar hiperparâmetros e prevenir overfitting.                            | Simulados/testes práticos.                  |
| **Teste**            | Avaliação final do desempenho (dados nunca vistos pelo modelo).            | Exame final sem consulta.                   |

---

## **Divisão Típica dos Dados**
- **Proporção comum**:
  - Treino: **60-70%**
  - Validação: **15-20%**
  - Teste: **15-20%**

---

## **Validação Cruzada (Cross-Validation)**
- **Como funciona**:
  - Divide os dados em **k folds** (partes).
  - Cada fold serve como validação **uma vez**, enquanto os outros são usados para treino.
- **Vantagem**:
  - Maximiza o uso dos dados (ideal para **datasets pequenos**).

---

## **Exemplo Prático (Holdout vs. K-Fold)**
### **Holdout Simples**
```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
```

### **Validação Cruzada (5-Fold)**
```python
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)
print("Acurácia média:", scores.mean())
```

---

## **Resumo das Técnicas**
| **Técnica**          | **Quando Usar?**                           | **Prós**                                | **Contras**                     |
|-----------------------|-------------------------------------------|----------------------------------------|--------------------------------|
| **Holdout**           | Datasets grandes ou prototipagem rápida.  | Simplicidade.                          | Sensível à divisão aleatória.  |
| **Validação Cruzada** | Datasets pequenos ou comparação de modelos. | Reduz variabilidade.                  | Custo computacional maior.     |

---

## **Boas Práticas**
1. **Nunca ajuste o modelo com base no conjunto de teste**.
2. **Use validação cruzada** para datasets limitados.
3. **Monitore overfitting** comparando desempenho em treino/validação.

---
