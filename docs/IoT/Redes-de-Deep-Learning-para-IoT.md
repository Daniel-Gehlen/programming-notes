# Redes de Deep Learning para IoT

## 1. Deep Learning vs. Machine Learning

| **Característica**   | **Machine Learning**   | **Deep Learning**                           |
| -------------------- | ---------------------- | ------------------------------------------- |
| Arquitetura          | Algoritmos variados    | Redes neurais profundas (múltiplas camadas) |
| Extração de Features | Manual/semi-automática | Automática e hierárquica                    |
| Complexidade         | Modelos mais simples   | Captura padrões complexos                   |

---

## 2. Redes Convolucionais (CNNs) para IoT

### Operações Fundamentais:

- **Convolução**:
  - Filtros (kernels) que detectam padrões locais
  - Exemplo: Filtro 5x5 em imagem 32x32x3 → Feature map 28x28x1
- **Padding**:
  - Preserva dimensões espaciais (ex: `padding='same'`)
- **Stride**:
  - Passo do filtro (afeta tamanho do output)

### Funções de Ativação:

```python
# Exemplo ReLU em TensorFlow/Keras
tf.keras.layers.ReLU(max_value=None, negative_slope=0.0, threshold=0.0)
```

**Vantagem**: Não-linearidade eficiente para evitar vanishing gradient

---

## 3. Técnicas de Otimização

### Pooling:

| **Tipo**       | **Operação**           | **Uso em IoT**                    |
| -------------- | ---------------------- | --------------------------------- |
| MaxPooling     | Seleciona valor máximo | Reduz ruídos em sensores visuais  |
| AveragePooling | Calcula média          | Suaviza dados de séries temporais |

### Dropout:

- **Função**: Regularização para evitar overfitting
- **Hiperparâmetro típico**: `rate=0.2` (20% dos neurônios desativados aleatoriamente)

---

## 4. Implementação para Dispositivos IoT

### Fluxo de Trabalho:

1. **Pré-processamento**:

   - Normalização de dados de sensores
   - Redimensionamento de imagens (ex: 64x64 pixels)

2. **Arquitetura Leve**:

```python
model = tf.keras.Sequential([
    layers.Conv2D(16, (3,3), activation='relu', input_shape=(64,64,3)),
    layers.MaxPooling2D(2,2),
    layers.Flatten(),
    layers.Dense(32, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')  # Ex: 10 classes
])
```

3. **Otimização para Edge**:
   - Quantização pós-treinamento
   - Uso de frameworks como TensorFlow Lite

---

## 5. Aplicações Práticas em IoT

| **Caso de Uso**           | **Técnica DL** | **Benefício**                              |
| ------------------------- | -------------- | ------------------------------------------ |
| Reconhecimento de Padrões | CNNs           | Análise de imagens em tempo real           |
| Anomalias em Sensores     | Autoencoders   | Detecção de falhas com dados não rotulados |
| Processamento de Voz      | RNNs/LSTMs     | Comandos por voz em dispositivos           |

---

**Desafios em IoT**:

- **Recursos Limitados**: Otimizar modelos para microcontroladores (ex: ESP32)
- **Latência**: Inferência local vs. cloud computing
- **Privacidade**: Treinamento federado para dados sensíveis

> **Dica**: Utilize transfer learning com modelos como MobileNetV3 para IoT, combinando alta acurácia e eficiência computacional.

**Recursos**:

- [TensorFlow Lite para Microcontroladores](https://www.tensorflow.org/lite/microcontrollers)
- [Edge Impulse - Plataforma de ML embarcado](https://www.edgeimpulse.com/)
