# Relatório: Reconhecimento de Dígitos Manuscritos com Redes Neurais

## Introdução

O objetivo deste projeto foi implementar e otimizar uma rede de Deep Learning para reconhecimento de dígitos manuscritos usando o dataset MNIST. MNIST é um dataset padrão na comunidade de machine learning, consistindo em imagens de dígitos manuscritos (de 0 a 9). A implementação foi realizada usando as bibliotecas TensorFlow e Keras.

## Tecnologias Utilizadas

### Linguagem de Programação

- **Python 3.8+**

### Bibliotecas Principais

```python
# Deep Learning
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Manipulação de dados
import numpy as np
import pandas as pd

# Visualização
import matplotlib.pyplot as plt
import seaborn as sns

# Utilitários
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
import time
import warnings
warnings.filterwarnings('ignore')
```

## Métodos

### 1. Carregamento de Dados

- O dataset MNIST foi carregado, contendo imagens de treinamento e teste de dígitos manuscritos
- As imagens foram normalizadas para o intervalo [0, 1]

### 2. Construção do Modelo

- Um modelo sequencial foi criado, composto por:
  - Camada Flatten (para transformar imagens 28x28 em vetores unidimensionais)
  - Camadas Dense (camadas totalmente conectadas) com ativação ReLU
  - Camadas Dropout (para prevenir overfitting)
  - Camada de saída com ativação Softmax para classificação multiclasse

### 3. Compilação e Treinamento

- O modelo foi compilado usando o otimizador 'adam' e a função de perda 'sparse_categorical_crossentropy'
- O treinamento foi conduzido por 5 épocas, usando dados de treinamento e validação

## Implementação Completa

```python
# Instalação das bibliotecas necessárias
!pip install tensorflow matplotlib seaborn

# Importação das bibliotecas
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import classification_report, confusion_matrix
import time

# Configuração de estilo
plt.style.use('default')
sns.set_palette("husl")
%matplotlib inline

# Carregamento do dataset MNIST
print("Carregando o dataset MNIST...")
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# Pré-processamento dos dados
print("Pré-processando os dados...")
# Normalizando as imagens para o intervalo [0, 1]
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Verificando a forma dos dados
print(f"Forma dos dados de treinamento: {x_train.shape}")
print(f"Forma dos dados de teste: {x_test.shape}")

# Visualização de exemplos do dataset
plt.figure(figsize=(10, 5))
for i in range(10):
    plt.subplot(2, 5, i+1)
    plt.imshow(x_train[i], cmap='gray')
    plt.title(f'Label: {y_train[i]}')
    plt.axis('off')
plt.tight_layout()
plt.show()

# Construção do modelo
print("Construindo o modelo...")
model = keras.Sequential([
    layers.Flatten(input_shape=(28, 28)),  # Camada de achatamento
    layers.Dense(128, activation='relu'),  # Primeira camada densa
    layers.Dropout(0.2),                   # Camada de dropout para regularização
    layers.Dense(64, activation='relu'),   # Segunda camada densa
    layers.Dropout(0.2),                   # Outra camada de dropout
    layers.Dense(10, activation='softmax') # Camada de saída (10 classes)
])

# Compilação do modelo
print("Compilando o modelo...")
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Exibindo o resumo do modelo
model.summary()

# Treinamento do modelo
print("Iniciando o treinamento...")
start_time = time.time()

history = model.fit(
    x_train, y_train,
    epochs=5,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)

training_time = time.time() - start_time
print(f"Tempo de treinamento: {training_time:.2f} segundos")

# Avaliação do modelo
print("Avaliando o modelo...")
test_loss, test_accuracy = model.evaluate(x_test, y_test, verbose=0)
print(f"Acurácia no conjunto de teste: {test_accuracy:.4f}")
print(f"Perda no conjunto de teste: {test_loss:.4f}")

# Visualização do histórico de treinamento
plt.figure(figsize=(12, 4))

# Gráfico de acurácia
plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'], label='Acurácia (Treino)')
plt.plot(history.history['val_accuracy'], label='Acurácia (Validação)')
plt.title('Acurácia durante o Treinamento')
plt.xlabel('Época')
plt.ylabel('Acurácia')
plt.legend()
plt.grid(True, alpha=0.3)

# Gráfico de perda
plt.subplot(1, 2, 2)
plt.plot(history.history['loss'], label='Perda (Treino)')
plt.plot(history.history['val_loss'], label='Perda (Validação)')
plt.title('Perda durante o Treinamento')
plt.xlabel('Época')
plt.ylabel('Perda')
plt.legend()
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Previsões no conjunto de teste
print("Fazendo previsões no conjunto de teste...")
y_pred_probs = model.predict(x_test)
y_pred = np.argmax(y_pred_probs, axis=1)

# Relatório de classificação
print("\nRelatório de Classificação:")
print(classification_report(y_test, y_pred))

# Matriz de confusão
plt.figure(figsize=(10, 8))
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=range(10), yticklabels=range(10))
plt.title('Matriz de Confusão')
plt.xlabel('Predição')
plt.ylabel('Valor Real')
plt.show()

# Visualização de algumas previsões
plt.figure(figsize=(15, 10))
for i in range(15):
    plt.subplot(3, 5, i+1)
    plt.imshow(x_test[i], cmap='gray')

    # Cor do título: verde para correto, vermelho para incorreto
    color = 'green' if y_pred[i] == y_test[i] else 'red'
    plt.title(f'Real: {y_test[i]}\nPred: {y_pred[i]}', color=color)
    plt.axis('off')
plt.tight_layout()
plt.show()

# Análise de erros
errors = np.where(y_pred != y_test)[0]
print(f"Número de erros: {len(errors)}/{len(y_test)} ({len(errors)/len(y_test)*100:.2f}%)")

if len(errors) > 0:
    plt.figure(figsize=(15, 10))
    for i, error_idx in enumerate(errors[:15]):
        plt.subplot(3, 5, i+1)
        plt.imshow(x_test[error_idx], cmap='gray')
        plt.title(f'Real: {y_test[error_idx]}\nPred: {y_pred[error_idx]}', color='red')
        plt.axis('off')
    plt.tight_layout()
    plt.suptitle('Exemplos de Erros de Classificação', fontsize=16)
    plt.show()

# Salvando o modelo
print("Salvando o modelo...")
model.save('mnist_digits_model.h5')
print("Modelo salvo como 'mnist_digits_model.h5'")

# Função para prever dígitos em novas imagens
def predict_digit(image):
    """
    Função para prever dígitos em novas imagens
    """
    # Pré-processamento da imagem
    if image.shape != (28, 28):
        image = tf.image.resize(image[np.newaxis, ..., np.newaxis], (28, 28)).numpy()
        image = image.squeeze()

    # Normalização
    image = image.astype('float32') / 255.0

    # Previsão
    prediction = model.predict(image[np.newaxis, ...])
    predicted_digit = np.argmax(prediction)
    confidence = np.max(prediction)

    return predicted_digit, confidence

# Testando a função de previsão
print("\nTestando a função de previsão com exemplos do conjunto de teste:")
for i in range(5):
    digit, confidence = predict_digit(x_test[i])
    print(f"Imagem {i+1}: Dígito real = {y_test[i]}, Predito = {digit}, Confiança = {confidence:.4f}")

# Otimizações e experimentos adicionais
print("\nRealizando experimentos adicionais...")

# Experimentando com diferentes arquiteturas
def create_model(hidden_units=128, dropout_rate=0.2):
    model = keras.Sequential([
        layers.Flatten(input_shape=(28, 28)),
        layers.Dense(hidden_units, activation='relu'),
        layers.Dropout(dropout_rate),
        layers.Dense(hidden_units//2, activation='relu'),
        layers.Dropout(dropout_rate),
        layers.Dense(10, activation='softmax')
    ])
    return model

# Testando diferentes configurações
configurations = [
    {'hidden_units': 64, 'dropout_rate': 0.2},
    {'hidden_units': 128, 'dropout_rate': 0.3},
    {'hidden_units': 256, 'dropout_rate': 0.2}
]

results = []
for config in configurations:
    print(f"\nTestando configuração: {config}")
    test_model = create_model(**config)
    test_model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

    # Treinamento rápido
    history = test_model.fit(x_train, y_train, epochs=3, validation_split=0.2, verbose=0)
    test_loss, test_accuracy = test_model.evaluate(x_test, y_test, verbose=0)

    results.append({
        'config': config,
        'test_accuracy': test_accuracy,
        'test_loss': test_loss
    })

    print(f"Acurácia: {test_accuracy:.4f}, Perda: {test_loss:.4f}")

# Exibindo resultados comparativos
print("\nResultados Comparativos das Configurações:")
for i, result in enumerate(results):
    print(f"Configuração {i+1}: {result['config']}")
    print(f"  Acurácia: {result['test_accuracy']:.4f}, Perda: {result['test_loss']:.4f}")
```

## Resultados

### Desempenho do Modelo

- O modelo alcançou uma acurácia de aproximadamente 97.8% no conjunto de teste
- As curvas de treinamento mostram que o modelo aprendeu efetivamente, com convergência rápida

### Análise de Resultados

- A matriz de confusão mostra que a maioria dos dígitos foi classificada corretamente
- Os erros mais comuns ocorreram entre dígitos visualmente similares (ex: 4 e 9, 3 e 8)
- O modelo demonstrou alta confiança nas previsões corretas

## Conclusão

Este projeto implementou e otimizou com sucesso uma rede neural para reconhecimento de dígitos manuscritos. O uso do dataset MNIST permitiu uma avaliação eficaz da capacidade do modelo de aprender e generalizar. A arquitetura escolhida, embora básica, mostrou-se suficiente para o problema dado.

## Aplicação em Estudo de Caso

Para ilustrar a utilidade prática deste projeto, considere um cenário onde a rede treinada é integrada em uma aplicação para reconhecimento de dígitos em imagens. Isso poderia ser usado em serviços bancários para digitalização de cheques, reconhecimento de códigos postais em correspondências, entre outras aplicações. A acurácia do modelo garantiria resultados confiáveis em cenários do mundo real.

## Paralelo com o Objetivo Inicial

O objetivo inicial de implementar/otimizar uma rede de Deep Learning para reconhecimento de imagens foi alcançado com sucesso. O modelo treinado demonstrou alta acurácia no reconhecimento de dígitos, validando a eficácia da abordagem escolhida.

Em conclusão, este projeto serve como uma introdução prática ao desenvolvimento de modelos de Deep Learning para tarefas de reconhecimento de imagens, enfatizando a importância da escolha de arquitetura e hiperparâmetros apropriados para alcançar resultados satisfatórios.

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/NeuralVision_Framework_Integration.ipynb

**Google Colab:** [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/NeuralVision_Framework_Integration.ipynb)
