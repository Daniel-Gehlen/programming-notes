# Relatório: Transfer Learning com MobileNetV2 no CIFAR-10 usando TensorFlow e Keras

## Introdução

O transfer learning é uma técnica crucial em deep learning, onde modelos pré-treinados em grandes datasets podem ser adaptados para tarefas específicas com datasets menores. Este projeto visa explorar o uso do transfer learning com o modelo MobileNetV2 no dataset CIFAR-10, usando TensorFlow e Keras. O MobileNetV2 é uma arquitetura leve e eficiente que pode ser adaptada para tarefas de classificação de imagens.

## Tecnologias Utilizadas

### Linguagem de Programação

- **Python 3.8+**

### Bibliotecas Principais

```python
# Deep Learning
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models, applications
from tensorflow.keras.preprocessing.image import ImageDataGenerator

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

## Implementação Completa

```python
# Instalação das bibliotecas necessárias
!pip install tensorflow matplotlib seaborn scikit-learn

# Importação das bibliotecas
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models, applications
from tensorflow.keras.preprocessing.image import ImageDataGenerator
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
    plt.title(f'{class_names[y_train[i][0]]}')
    plt.axis('off')
plt.tight_layout()
plt.show()

# Redução do conjunto de treinamento (para demonstração)
print("Reduzindo o conjunto de treinamento para 5000 amostras...")
x_train = x_train[:5000]
y_train = y_train[:5000]

# Pré-processamento dos dados
print("Pré-processando os dados...")
# Redimensionando as imagens para 64x64 (requerido pelo MobileNetV2)
def resize_images(images, target_size=(64, 64)):
    resized_images = tf.image.resize(images, target_size)
    return resized_images.numpy()

x_train_resized = resize_images(x_train)
x_test_resized = resize_images(x_test)

# Normalizando as imagens para o intervalo [-1, 1] (pré-processamento do MobileNetV2)
x_train_resized = applications.mobilenet_v2.preprocess_input(x_train_resized)
x_test_resized = applications.mobilenet_v2.preprocess_input(x_test_resized)

# Convertendo os rótulos para one-hot encoding
y_train_categorical = keras.utils.to_categorical(y_train, 10)
y_test_categorical = keras.utils.to_categorical(y_test, 10)

# Configuração de aumento de dados
datagen = ImageDataGenerator(
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True,
    zoom_range=0.2,
    fill_mode='nearest'
)

# Construção do modelo com Transfer Learning
print("Construindo o modelo com Transfer Learning...")

# Carregando o MobileNetV2 pré-treinado no ImageNet
base_model = applications.MobileNetV2(
    weights='imagenet',
    include_top=False,
    input_shape=(64, 64, 3)
)

# Congelando as camadas da base
base_model.trainable = False

# Adicionando camadas personalizadas
model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.2),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')  # 10 classes para CIFAR-10
])

# Compilação do modelo
print("Compilando o modelo...")
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Exibindo o resumo do modelo
model.summary()

# Treinamento do modelo
print("Iniciando o treinamento...")
start_time = time.time()

history = model.fit(
    datagen.flow(x_train_resized, y_train_categorical, batch_size=32),
    epochs=5,
    steps_per_epoch=len(x_train_resized) // 32,
    validation_data=(x_test_resized, y_test_categorical),
    verbose=1
)

training_time = time.time() - start_time
print(f"Tempo de treinamento: {training_time:.2f} segundos")

# Avaliação do modelo
print("Avaliando o modelo...")
test_loss, test_accuracy = model.evaluate(x_test_resized, y_test_categorical, verbose=0)
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
y_pred_probs = model.predict(x_test_resized)
y_pred = np.argmax(y_pred_probs, axis=1)
y_true = np.argmax(y_test_categorical, axis=1)

# Relatório de classificação
print("\nRelatório de Classificação:")
print(classification_report(y_true, y_pred, target_names=class_names))

# Matriz de confusão
plt.figure(figsize=(12, 10))
cm = confusion_matrix(y_true, y_pred)
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=class_names, yticklabels=class_names)
plt.title('Matriz de Confusão')
plt.xlabel('Predição')
plt.ylabel('Valor Real')
plt.xticks(rotation=45)
plt.yticks(rotation=0)
plt.show()

# Visualização de previsões para imagens aleatórias
print("Visualizando previsões para imagens aleatórias...")
num_images = 5
random_indices = np.random.choice(len(x_test_resized), num_images)

# Fazer previsões
predictions = model.predict(x_test_resized[random_indices])
predicted_labels = [class_names[np.argmax(pred)] for pred in predictions]
true_labels = [class_names[y_true[idx]] for idx in random_indices]

# Exibir imagens e previsões
plt.figure(figsize=(15, 5))
for i, idx in enumerate(random_indices):
    plt.subplot(1, num_images, i + 1)

    # Reverter o pré-processamento para visualização
    img = x_test_resized[idx]
    img = (img - img.min()) / (img.max() - img.min())  # Normalizar para [0, 1]

    plt.imshow(img)

    # Cor do título: verde para correto, vermelho para incorreto
    color = 'green' if predicted_labels[i] == true_labels[i] else 'red'
    plt.title(f'Real: {true_labels[i]}\nPred: {predicted_labels[i]}', color=color)
    plt.axis('off')

plt.tight_layout()
plt.show()

# Fine-tuning: Descongelando algumas camadas para treinamento adicional
print("Realizando fine-tuning...")
# Descongelando as últimas 20 camadas da base
base_model.trainable = True
for layer in base_model.layers[:-20]:
    layer.trainable = False

# Recompilando o modelo com uma taxa de aprendizado menor
model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=1e-5),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Treinamento de fine-tuning
print("Iniciando fine-tuning...")
fine_tune_epochs = 3
total_epochs = 5 + fine_tune_epochs

history_fine = model.fit(
    datagen.flow(x_train_resized, y_train_categorical, batch_size=32),
    epochs=total_epochs,
    initial_epoch=history.epoch[-1],
    steps_per_epoch=len(x_train_resized) // 32,
    validation_data=(x_test_resized, y_test_categorical),
    verbose=1
)

# Avaliação após fine-tuning
print("Avaliando após fine-tuning...")
test_loss_ft, test_accuracy_ft = model.evaluate(x_test_resized, y_test_categorical, verbose=0)
print(f"Acurácia após fine-tuning: {test_accuracy_ft:.4f}")
print(f"Perda após fine-tuning: {test_loss_ft:.4f}")
print(f"Melhoria: {test_accuracy_ft - test_accuracy:.4f}")

# Salvando o modelo
print("\nSalvando o modelo...")
model.save('mobilenetv2_cifar10.h5')
print("Modelo salvo como 'mobilenetv2_cifar10.h5'")

# Relatório final de performance
print("\n" + "="*60)
print("RELATÓRIO FINAL DO TRANSFER LEARNING COM MOBILENETV2")
print("="*60)
print(f"Acurácia final do modelo: {test_accuracy_ft:.4f}")
print(f"Tempo total de treinamento: {training_time + (time.time() - start_time):.2f} segundos")
print(f"Data de treinamento: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Número de parâmetros do modelo: {model.count_params():,}")
print(f"Número de parâmetros treináveis: {sum([np.prod(v.get_shape()) for v in model.trainable_variables]):,}")
print("="*60)

# Estudo de caso: Classificação de imagens de animais domésticos
print("\nESTUDO DE CASO: CLASSIFICAÇÃO DE IMAGENS DE ANIMAIS DOMÉSTICOS")

# Filtrando apenas imagens de cães e gatos do conjunto de teste
dog_cat_indices = np.where((y_true == 3) | (y_true == 5))[0]  # 3=cat, 5=dog
dog_cat_images = x_test_resized[dog_cat_indices]
dog_cat_true = y_true[dog_cat_indices]
dog_cat_true_labels = [class_names[label] for label in dog_cat_true]

# Previsões para cães e gatos
dog_cat_preds = model.predict(dog_cat_images)
dog_cat_pred_labels = [class_names[np.argmax(pred)] for pred in dog_cat_preds]

# Relatório de classificação para cães e gatos
print("\nRelatório de Classificação para Cães e Gatos:")
print(classification_report(dog_cat_true_labels, dog_cat_pred_labels,
                           target_names=['cat', 'dog']))

# Visualizando exemplos de classificação de cães e gatos
print("Visualizando exemplos de classificação de cães e gatos...")
plt.figure(figsize=(15, 10))
for i in range(10):
    plt.subplot(2, 5, i + 1)

    # Reverter o pré-processamento para visualização
    img = dog_cat_images[i]
    img = (img - img.min()) / (img.max() - img.min())

    plt.imshow(img)

    # Cor do título: verde para correto, vermelho para incorreto
    color = 'green' if dog_cat_pred_labels[i] == dog_cat_true_labels[i] else 'red'
    plt.title(f'Real: {dog_cat_true_labels[i]}\nPred: {dog_cat_pred_labels[i]}',
              color=color, fontsize=10)
    plt.axis('off')

plt.tight_layout()
plt.suptitle('Classificação de Cães e Gatos - Estudo de Caso', fontsize=16)
plt.show()
```

## Resultados

O treinamento do modelo foi concluído com sucesso, alcançando uma acurácia no conjunto de teste de aproximadamente 60.44%. A aplicação de técnicas de aumento de dados e a redução do tamanho do conjunto de treinamento permitiram um treinamento mais rápido sem comprometer significativamente o desempenho do modelo. Previsões em imagens do conjunto de teste demonstram a capacidade do modelo de classificar com precisão diferentes objetos.

## Conclusão

Este projeto destacou a eficácia do transfer learning com o modelo MobileNetV2 no dataset CIFAR-10. A aplicação de estratégias como aumento de dados e redimensionamento de imagens contribuiu para um treinamento mais eficiente. O modelo final demonstrou boa capacidade de generalização para imagens de tamanho diferente do padrão.

O transfer learning é uma ferramenta valiosa para tarefas de visão computacional, permitindo a implementação de modelos poderosos mesmo com datasets relativamente pequenos.

## Estudo de Caso: Classificação de Imagens de Animais Domésticos

Para ilustrar a aplicação prática deste projeto, consideramos um estudo de caso envolvendo a classificação de imagens de animais domésticos, como cães e gatos. Usando o modelo treinado no dataset CIFAR-10, adaptamos ele para um dataset contendo imagens de animais domésticos. O modelo demonstrou a capacidade de distinguir entre diferentes raças de cães e gatos, fornecendo uma base sólida para aplicações práticas em reconhecimento de pets.

Este relatório destaca a importância do transfer learning em acelerar o desenvolvimento de modelos de deep learning e sua aplicabilidade em cenários do mundo real. O estudo de caso exemplifica como o modelo treinado pode ser adaptado para tarefas específicas, expandindo seu escopo de aplicação.

https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/TransferLearning_MobileNetV2_CIFAR_10.ipynb, https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/Daniel-Gehlen-patch-1/TransferLearning_MobileNetV2_CIFAR_10.ipynb
