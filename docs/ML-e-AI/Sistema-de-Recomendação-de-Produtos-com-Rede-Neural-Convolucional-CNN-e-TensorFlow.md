# Relatório: Sistema de Recomendação de Produtos usando Rede Neural Convolucional (CNN) e TensorFlow

## Introdução
Este relatório aborda o desenvolvimento de um sistema de recomendação de produtos usando técnicas de deep learning, especificamente uma Rede Neural Convolucional (CNN), implementada com a biblioteca TensorFlow. A aplicação prática do sistema foca na classificação de imagens de produtos do dataset CIFAR-10, que inclui 10 classes diferentes.

## Tecnologias Utilizadas

### Linguagem de Programação
- **Python 3.8+**

### Bibliotecas Principais
```python
# Deep Learning
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models

# Manipulação de dados
import numpy as np
import pandas as pd

# Visualização
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix, classification_report

# Utilitários
import time
from datetime import datetime
import warnings
warnings.filterwarnings('ignore')
```

## Métodos

### 1. Carregamento e Pré-processamento de Dados
- O dataset CIFAR-10 foi carregado e dividido em conjuntos de treinamento e teste
- As imagens foram normalizadas para o intervalo [0, 1] para facilitar o treinamento da rede

### 2. Construção da Rede Neural Convolucional (CNN)
- A CNN foi projetada com três camadas convolucionais seguidas por camadas de pooling para extrair características relevantes das imagens
- Camadas totalmente conectadas foram usadas para a tomada de decisão final
- A função de ativação 'relu' foi empregada para introduzir não-linearidades

### 3. Compilação e Treinamento do Modelo
- O modelo foi compilado usando o otimizador 'adam' e a função de perda 'SparseCategoricalCrossentropy', adequada para problemas de classificação com rótulos inteiros
- O treinamento foi realizado por 10 épocas, monitorando a acurácia tanto no conjunto de treinamento quanto no teste

### 4. Avaliação do Modelo
- A acurácia do modelo foi avaliada no conjunto de teste, resultando em uma acurácia final de aproximadamente 70.31%

### 5. Previsões e Visualizações
- O modelo foi usado para fazer previsões nas primeiras 5 imagens do conjunto de teste
- As previsões foram impressas, incluindo o produto previsto, a classe verdadeira e a confiança associada à previsão
- Imagens junto com previsões foram visualizadas em um gráfico

## Implementação Completa

```python
# Instalação das bibliotecas necessárias
!pip install tensorflow matplotlib seaborn scikit-learn

# Importação das bibliotecas
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix, classification_report
import time
from datetime import datetime

# Configuração de estilo
plt.style.use('default')
sns.set_palette("husl")
%matplotlib inline

# Carregamento do dataset CIFAR-10
print("Carregando o dataset CIFAR-10...")
(x_train, y_train), (x_test, y_test) = keras.datasets.cifar10.load_data()

# Nomes das classes do CIFAR-10
class_names = [
    'airplane', 'automobile', 'bird', 'cat', 'deer',
    'dog', 'frog', 'horse', 'ship', 'truck'
]

# Pré-processamento dos dados
print("Pré-processando os dados...")
# Normalizando as imagens para o intervalo [0, 1]
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Convertendo os rótulos para inteiros
y_train = y_train.flatten()
y_test = y_test.flatten()

# Verificando a forma dos dados
print(f"Forma dos dados de treinamento: {x_train.shape}")
print(f"Forma dos dados de teste: {x_test.shape}")
print(f"Número de classes: {len(class_names)}")
print(f"Classes: {class_names}")

# Visualização de exemplos do dataset
plt.figure(figsize=(12, 6))
for i in range(15):
    plt.subplot(3, 5, i+1)
    plt.imshow(x_train[i])
    plt.title(f'{class_names[y_train[i]]}')
    plt.axis('off')
plt.tight_layout()
plt.show()

# Construção da CNN
print("Construindo a Rede Neural Convolucional...")
model = models.Sequential()

# Primeira camada convolucional
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D((2, 2)))

# Segunda camada convolucional
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))

# Terceira camada convolucional
model.add(layers.Conv2D(64, (3, 3), activation='relu'))

# Camadas fully connected
model.add(layers.Flatten())
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dropout(0.5))  # Regularização
model.add(layers.Dense(10, activation='softmax'))  # 10 classes

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
    epochs=10,
    batch_size=64,
    validation_data=(x_test, y_test),
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
print(classification_report(y_test, y_pred, target_names=class_names))

# Matriz de confusão
plt.figure(figsize=(12, 10))
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=class_names, yticklabels=class_names)
plt.title('Matriz de Confusão')
plt.xlabel('Predição')
plt.ylabel('Valor Real')
plt.xticks(rotation=45)
plt.yticks(rotation=0)
plt.show()

# Visualização de previsões para as primeiras 15 imagens
plt.figure(figsize=(15, 12))
for i in range(15):
    plt.subplot(3, 5, i+1)
    plt.imshow(x_test[i])

    # Obtendo previsão e confiança
    predicted_class = class_names[y_pred[i]]
    true_class = class_names[y_test[i]]
    confidence = np.max(y_pred_probs[i])

    # Cor do título: verde para correto, vermelho para incorreto
    color = 'green' if y_pred[i] == y_test[i] else 'red'
    plt.title(f'Real: {true_class}\nPred: {predicted_class}\nConf: {confidence:.2f}',
              color=color, fontsize=9)
    plt.axis('off')
plt.tight_layout()
plt.show()

# Análise detalhada das previsões para as primeiras 5 imagens
print("Previsões detalhadas para as primeiras 5 imagens:")
for i in range(5):
    predicted_class = class_names[y_pred[i]]
    true_class = class_names[y_test[i]]
    confidence = np.max(y_pred_probs[i])

    print(f"\nImagem {i+1}:")
    print(f"  Classe verdadeira: {true_class}")
    print(f"  Classe prevista: {predicted_class}")
    print(f"  Confiança: {confidence:.4f}")
    print(f"  Correto: {'Sim' if y_pred[i] == y_test[i] else 'Não'}")

    # Mostrando distribuição de probabilidades
    print("  Probabilidades por classe:")
    for j, prob in enumerate(y_pred_probs[i]):
        print(f"    {class_names[j]}: {prob:.4f}")

# Função para fazer recomendações baseadas em similaridade
def recommend_similar_products(model, image_index, num_recommendations=5):
    """
    Recomenda produtos similares com base nas características aprendidas pela CNN
    """
    # Extraindo características da imagem de entrada
    feature_extractor = keras.Model(
        inputs=model.inputs,
        outputs=model.layers[-3].output  # Camada antes da última
    )

    # Características de todas as imagens
    all_features = feature_extractor.predict(x_test, verbose=0)

    # Características da imagem de consulta
    query_features = all_features[image_index]

    # Calculando similaridade (distância cosseno)
    similarities = np.dot(all_features, query_features) / (
        np.linalg.norm(all_features, axis=1) * np.linalg.norm(query_features)
    )

    # Obtendo os índices dos produtos mais similares (excluindo a própria imagem)
    similar_indices = np.argsort(similarities)[::-1][1:num_recommendations+1]

    return similar_indices, similarities[similar_indices]

# Testando o sistema de recomendação
print("\nTestando o sistema de recomendação...")
query_index = 0  # Índice da imagem de consulta
similar_indices, similarity_scores = recommend_similar_products(model, query_index)

# Visualizando a imagem de consulta e as recomendações
plt.figure(figsize=(15, 5))

# Imagem de consulta
plt.subplot(1, 6, 1)
plt.imshow(x_test[query_index])
plt.title(f'Consulta:\n{class_names[y_test[query_index]]}')
plt.axis('off')

# Imagens recomendadas
for i, (idx, score) in enumerate(zip(similar_indices, similarity_scores)):
    plt.subplot(1, 6, i+2)
    plt.imshow(x_test[idx])
    plt.title(f'Rec {i+1}:\n{class_names[y_test[idx]]}\nSimilaridade: {score:.2f}')
    plt.axis('off')

plt.tight_layout()
plt.show()

# Avaliação de diferentes arquiteturas
def create_cnn_model(conv_layers=3, filters=32, dense_units=64, dropout_rate=0.5):
    """
    Cria uma CNN com arquitetura personalizada
    """
    model = models.Sequential()

    # Camadas convolucionais
    for i in range(conv_layers):
        if i == 0:
            model.add(layers.Conv2D(filters * (2**i), (3, 3), activation='relu',
                                   input_shape=(32, 32, 3)))
        else:
            model.add(layers.Conv2D(filters * (2**i), (3, 3), activation='relu'))
        model.add(layers.MaxPooling2D((2, 2)))

    # Camadas fully connected
    model.add(layers.Flatten())
    model.add(layers.Dense(dense_units, activation='relu'))
    model.add(layers.Dropout(dropout_rate))
    model.add(layers.Dense(10, activation='softmax'))

    return model

# Testando diferentes arquiteturas
architectures = [
    {'conv_layers': 2, 'filters': 32, 'dense_units': 64, 'dropout_rate': 0.5},
    {'conv_layers': 3, 'filters': 32, 'dense_units': 64, 'dropout_rate': 0.5},
    {'conv_layers': 3, 'filters': 64, 'dense_units': 128, 'dropout_rate': 0.3}
]

results = []
for i, arch in enumerate(architectures):
    print(f"\nTestando arquitetura {i+1}: {arch}")

    # Criando e compilando o modelo
    test_model = create_cnn_model(**arch)
    test_model.compile(optimizer='adam',
                      loss='sparse_categorical_crossentropy',
                      metrics=['accuracy'])

    # Treinamento rápido (3 épocas para teste)
    history = test_model.fit(x_train, y_train, epochs=3,
                            validation_split=0.2, verbose=0)

    # Avaliação
    test_loss, test_accuracy = test_model.evaluate(x_test, y_test, verbose=0)

    results.append({
        'architecture': arch,
        'test_accuracy': test_accuracy,
        'test_loss': test_loss
    })

    print(f"Acurácia: {test_accuracy:.4f}, Perda: {test_loss:.4f}")

# Exibindo resultados comparativos
print("\nResultados Comparativos das Arquiteturas:")
for i, result in enumerate(results):
    print(f"Arquitetura {i+1}: {result['architecture']}")
    print(f"  Acurácia: {result['test_accuracy']:.4f}, Perda: {result['test_loss']:.4f}")

# Salvando o modelo
print("\nSalvando o modelo...")
model.save('product_recommendation_cnn.h5')
print("Modelo salvo como 'product_recommendation_cnn.h5'")

# Relatório final de performance
print("\n" + "="*50)
print("RELATÓRIO FINAL DO SISTEMA DE RECOMENDAÇÃO")
print("="*50)
print(f"Acurácia final do modelo: {test_accuracy:.4f}")
print(f"Tempo de treinamento: {training_time:.2f} segundos")
print(f"Data de treinamento: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Número de parâmetros do modelo: {model.count_params():,}")
print("="*50)
```

## Resultados
Os resultados demonstram que o modelo treinado alcançou uma acurácia de aproximadamente 70%, indicando sua capacidade de fazer previsões razoavelmente precisas sobre a classe do produto nas imagens. Previsões individuais para as primeiras 5 imagens no conjunto de teste mostram a capacidade do modelo de identificar corretamente diferentes classes de produtos, ao mesmo tempo que refletem a confiança associada a cada previsão.

## Conclusão
O desenvolvimento e implementação do sistema de recomendação de produtos usando uma CNN mostram resultados promissores na classificação de imagens de produtos. Este modelo pode ser expandido e adaptado para diferentes datasets e domínios de aplicação, fornecendo uma base sólida para a construção de sistemas de recomendação mais sofisticados. A combinação de tecnologias como TensorFlow e redes neurais convolucionais oferece uma abordagem robusta para problemas de visão computacional e classificação de imagens, demonstrando grande potencial em várias indústrias e comércio.

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Product_Visionary_CNN.ipynb

**Google Colab:** [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Product_Visionary_CNN.ipynb)
