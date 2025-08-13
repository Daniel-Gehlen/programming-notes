# Redes Neurais Artificiais: Teoria e Prática

---

## **1. Introdução**

### **O que são Redes Neurais Artificiais (RNAs)?**

- **Definição**: Sistemas computacionais inspirados no **cérebro humano**, capazes de aprender padrões complexos a partir de dados.
- **Aplicações**:
  - Reconhecimento de imagens/voz.
  - Processamento de linguagem natural (NLP).
  - Predição de séries temporais.

### **Analogia Biológica vs. Artificial**

| **Redes Neurais Biológicas**       | **Redes Neurais Artificiais**                            |
| ---------------------------------- | -------------------------------------------------------- |
| Neurônios conectados por sinapses. | Neurônios artificiais (nós) com pesos ajustáveis.        |
| Aprendizado por experiência.       | Treinamento via backpropagation e gradiente descendente. |

---

## **2. Estrutura de uma RNA**

### **Neurônio Artificial**

- **Entrada**: Dados brutos (ex.: pixels de uma imagem).
- **Processo**:
  1. **Soma ponderada**: \( z = \sum (w_i \cdot x_i) + b \).
  2. **Função de ativação**: \( \sigma(z) \) (ex.: ReLU, Sigmoid).
- **Saída**: Resultado para próxima camada ou predição final.

### **Arquiteturas Comuns**

- **MLP (Multilayer Perceptron)**: Camadas densamente conectadas.
- **CNNs**: Para processamento de imagens (convoluções + pooling).
- **RNNs**: Para dados sequenciais (ex.: texto, séries temporais).

---

## **3. Funcionamento das RNAs**

### **Fluxo de Dados**

1. **Forward Propagation**:
   - Dados passam pelas camadas → saída calculada.
2. **Backpropagation**:
   - Ajuste dos **pesos** para minimizar erro (loss function).

### **Problema da "Caixa Preta"**

- **Desafio**: Dificuldade em interpretar **como** a rede toma decisões.
- **Soluções**:
  - Técnicas de **explicabilidade** (ex.: LIME, SHAP).
  - Visualização de features (ex.: Grad-CAM para CNNs).

---

## **4. Classificação e Dados**

### **Exemplo: MNIST (Classificação de Dígitos)**

- **Dataset**: 60.000 imagens 28x28 (dígitos 0-9).
- **Processo**:
  - **Treino**: Ajuste dos pesos para minimizar erro de classificação.
  - **Arquivos de Pesos**: Armazenam parâmetros aprendidos (ex.: `.h5` no Keras).

### **Hiperparâmetros Críticos**

- **Taxa de aprendizado** (learning rate).
- **Número de camadas/neurônios**.
- **Funções de ativação**.

---

## **5. Treinamento da RNA**

### **Algoritmo Básico**

1. Inicializa pesos aleatoriamente.
2. Calcula saída (**forward pass**).
3. Mede erro (ex.: cross-entropy).
4. Ajusta pesos via **gradiente descendente** (**backward pass**).
5. Repete até convergência.

### **Desafios Comuns**

- **Overfitting**: Solução → Dropout, regularização L2.
- **Vanishing Gradients**: Solução → Funções ReLU, inicialização adequada.

---

## **6. Exemplos Práticos**

### **Implementação com TensorFlow/Keras**

```python
from tensorflow.keras import Sequential, layers

model = Sequential([
    layers.Flatten(input_shape=(28, 28)),  # MNIST
    layers.Dense(128, activation='relu'),
    layers.Dense(10, activation='softmax')  # 10 classes
])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10)
```

### **Aplicações Avançadas**

- **Mask R-CNN**: Detecção e segmentação de objetos em imagens.
- **Transformers**: Modelos de linguagem (ex.: BERT, GPT).

---

## **Resumo**

✅ **Vantagens**:

- Alta capacidade de modelagem de padrões complexos.
- Adaptabilidade a diversos tipos de dados.
  ⚠️ **Limitações**:
- Requer grandes volumes de dados para treino.
- Custo computacional elevado.

---
