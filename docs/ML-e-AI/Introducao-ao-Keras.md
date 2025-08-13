# Introdução ao Keras

---

## **O que é o Keras?**

- **Definição**: Biblioteca de código aberto em Python para construção de redes neurais.
- **Função**: Interface de alto nível (API) para frameworks como **TensorFlow** e **PyTorch**.
- **Objetivo**: Simplificar a criação e treinamento de modelos de _Deep Learning_.

---

## **Recursos do Keras**

### **1. Integração com Backends**

- **TensorFlow**: Padrão oficial (Keras agora é parte do TF como `tf.keras`).
- **PyTorch**: Suporte via bibliotecas como `PyTorch Lightning`.

### **2. Modelos Pré-treinados**

- **Exemplo**: `ResNet50` (CNN para classificação de imagens).
  - **Vantagem**:
    - Transfer Learning: Reutilização para tarefas específicas.
    - Alta performance em benchmarks (ex.: ImageNet).

---

## **Como o Keras Funciona?**

### **API de Alto Nível**

- **Exemplo de Código** (construção de uma CNN):

  ```python
  from tensorflow.keras import Sequential, layers

  model = Sequential([
      layers.Conv2D(32, (3,3), activation='relu', input_shape=(28,28,1)),
      layers.MaxPooling2D((2,2)),
      layers.Flatten(),
      layers.Dense(10, activation='softmax')
  ])
  ```

- **Passos**:
  1. Define arquitetura (camadas).
  2. Compila o modelo (`model.compile()`).
  3. Treina (`model.fit()`).
  4. Avalia (`model.evaluate()`).

---

## **Vantagens do Keras**

✅ **Simplicidade**: Sintaxe intuitiva (menos código que TensorFlow puro).
✅ **Modularidade**: Camadas pré-definidas (Dropout, BatchNorm, etc.).
✅ **Comunidade Ativa**: Documentação extensa e exemplos.

---

## **Comparativo Keras vs. TensorFlow Puro**

| **Característica**     | **Keras**                 | **TensorFlow Puro**               |
| ---------------------- | ------------------------- | --------------------------------- |
| **Nível de Abstração** | Alto (focado em rapidez). | Baixo (controle detalhado).       |
| **Uso Típico**         | Prototipagem rápida.      | Pesquisa/personalização avançada. |

---

## **Exemplo Prático (Transfer Learning com ResNet50)**

```python
from tensorflow.keras.applications import ResNet50

# Carrega modelo pré-treinado (sem top layer)
base_model = ResNet50(weights='imagenet', include_top=False)

# Adiciona novas camadas para classificação personalizada
x = layers.GlobalAveragePooling2D()(base_model.output)
x = layers.Dense(1024, activation='relu')(x)
predictions = layers.Dense(10, activation='softmax')(x)

# Cria modelo final
model = tf.keras.Model(inputs=base_model.input, outputs=predictions)
```

---

## **Quando Usar Keras?**

- **Iniciantes**: Ideal para aprender _Deep Learning_.
- **Produtividade**: Desenvolvimento rápido de modelos.
- **Indústria**: Soluções de visão computacional/NLP.

---
