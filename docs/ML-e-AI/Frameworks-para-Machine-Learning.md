# Frameworks para Machine Learning

---

## **1. TensorFlow**

- **Definição**: Framework de código aberto para **Machine Learning** e **Deep Learning**, desenvolvido pelo Google.
- **Principais Características**:
  - Suporte a **redes neurais profundas** (CNNs, RNNs, Transformers).
  - Escalabilidade: Pode ser executado em CPUs, GPUs e TPUs.
  - Ecossistema robusto (TensorFlow Lite, TensorFlow.js).

---

## **2. Recursos e Tutoriais**

### **Parte 1: Introdução ao TensorFlow**

- **Conteúdo**:
  - Configuração do ambiente (instalação via `pip install tensorflow`).
  - Conceitos básicos: tensores, grafos computacionais.
- **Link**: [Acesso ao Tutorial](#) _(link fictício)_

### **Parte 2: Modelos de Treinamento**

- **Conteúdo**:
  - Criação de modelos sequenciais (`tf.keras.Sequential`).
  - Funções de perda e otimizadores (ex.: `Adam`, `SGD`).
- **Link**: [Acesso ao Tutorial](#)

### **Parte 3: Redes Neurais**

- **Conteúdo**:
  - Arquiteturas de redes neurais (MLPs, CNNs, RNNs).
  - Exemplo prático: Classificação de MNIST.
- **Link**: [Acesso ao Tutorial](#)

### **Parte 4: Visão Computacional**

- **Conteúdo**:
  - Processamento de imagens com `tf.keras.preprocessing`.
  - Transfer Learning com modelos pré-treinados (ex.: `ResNet50`).
- **Link**: [Acesso ao Tutorial](#)

---

## **Exemplo de Código (TensorFlow)**

```python
import tensorflow as tf

# Criação de um modelo sequencial
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    tf.keras.layers.Dense(10, activation='softmax')
])

# Compilação e treinamento
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=5)
```

---

## **Comparativo com Outros Frameworks**

| **Framework**    | **Linguagem** | **Foco Principal**       | **Diferencial**                            |
| ---------------- | ------------- | ------------------------ | ------------------------------------------ |
| **TensorFlow**   | Python        | Deep Learning            | Suporte a TPU e deploy multiplataforma.    |
| **PyTorch**      | Python        | Pesquisa e flexibilidade | Grafos dinâmicos (imperative programming). |
| **Scikit-learn** | Python        | ML tradicional           | Simplicidade para algoritmos clássicos.    |

---

## **Quando Usar TensorFlow?**

- **Projetos de produção** (escalabilidade).
- **Aplicações de visão computacional/NLP**.
- **Integração com ecossistema Google** (TFX, TensorFlow Serving).

---
