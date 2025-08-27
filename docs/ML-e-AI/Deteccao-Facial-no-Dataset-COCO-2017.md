# Relatório: Detecção Facial no Dataset COCO 2017

## Introdução

O objetivo deste projeto é realizar detecção facial em imagens do dataset COCO 2017. Foram utilizadas bibliotecas como TensorFlow, OpenCV, pycocotools e facenet-pytorch. A detecção facial é uma tarefa crucial em visão computacional e análise de imagens, com aplicações em reconhecimento facial, segurança, entretenimento, entre outros.

## Tecnologias Utilizadas

### Linguagem de Programação

- **Python 3.8+**

### Bibliotecas Principais

```python
# Visão computacional e processamento de imagens
import cv2
from PIL import Image

# Deep Learning
import torch
from facenet_pytorch import MTCNN
import tensorflow as tf

# Manipulação de dados
import numpy as np
import pandas as pd
import json

# Dataset COCO
from pycocotools.coco import COCO
import requests

# Visualização
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import Rectangle

# Utilitários
import os
import random
from tqdm import tqdm
import warnings
warnings.filterwarnings('ignore')
```

## Métodos

### 1. Obtenção do Dataset COCO 2017

- A biblioteca pycocotools foi utilizada para baixar anotações do dataset COCO 2017
- Dez imagens foram selecionadas aleatoriamente do dataset para análise

### 2. Download e Salvamento de Imagens

- URLs das imagens foram obtidas a partir das anotações
- As 10 imagens foram baixadas e salvas em um diretório local

### 3. Detecção Facial com MTCNN

- A biblioteca facenet-pytorch, incorporando o modelo MTCNN, foi usada para detecção facial
- O modelo MTCNN é uma rede neural especializada para detectar faces em imagens

### 4. Exibição de Detecções

- Para cada imagem baixada, as detecções faciais foram realizadas
- Retângulos verdes foram desenhados ao redor das faces identificadas
- Imagens resultantes foram exibidas para análise visual

## Implementação Completa

```python
# Instalação das bibliotecas necessárias
!pip install pycocotools facenet-pytorch opencv-python matplotlib tqdm

# Importação das bibliotecas
from pycocotools.coco import COCO
import requests
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from PIL import Image
import torch
from facenet_pytorch import MTCNN
import os
from tqdm import tqdm
import random
import cv2

# Inicialização do detector MTCNN
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
mtcnn = MTCNN(keep_all=True, device=device)

# Download das anotações do COCO 2017
annotation_file = 'instances_train2017.json'
coco = COCO(annotation_file)

# Seleção aleatória de 10 imagens
cat_ids = coco.getCatIds()
img_ids = coco.getImgIds()
selected_img_ids = random.sample(img_ids, 10)

# Função para download das imagens
def download_image(img_data, save_path):
    img_url = img_data['coco_url']
    img_response = requests.get(img_url)
    if img_response.status_code == 200:
        with open(save_path, 'wb') as f:
            f.write(img_response.content)
        return True
    return False

# Diretório para salvar as imagens
os.makedirs('coco_images', exist_ok=True)

# Download das imagens selecionadas
downloaded_images = []
for img_id in tqdm(selected_img_ids, desc="Baixando imagens"):
    img_data = coco.loadImgs(img_id)[0]
    save_path = f"coco_images/{img_data['file_name']}"
    if download_image(img_data, save_path):
        downloaded_images.append({
            'id': img_id,
            'data': img_data,
            'path': save_path
        })

# Função para detecção facial com MTCNN
def detect_faces_mtcnn(image_path):
    image = Image.open(image_path).convert('RGB')
    boxes, probs = mtcnn.detect(image)
    return boxes, probs, image

# Processamento das imagens e detecção facial
results = []
for img_info in tqdm(downloaded_images, desc="Processando imagens"):
    image_path = img_info['path']
    boxes, probs, image = detect_faces_mtcnn(image_path)

    results.append({
        'img_info': img_info,
        'boxes': boxes,
        'probs': probs,
        'image': image
    })

# Visualização dos resultados
fig, axes = plt.subplots(2, 5, figsize=(20, 8))
axes = axes.ravel()

for i, result in enumerate(results):
    ax = axes[i]
    image = result['image']
    boxes = result['boxes']

    ax.imshow(image)
    ax.axis('off')
    ax.set_title(f"Imagem {i+1}")

    if boxes is not None:
        for box in boxes:
            x, y, w, h = box[0], box[1], box[2] - box[0], box[3] - box[1]
            rect = patches.Rectangle((x, y), w, h, linewidth=2,
                                   edgecolor='g', facecolor='none')
            ax.add_patch(rect)

plt.tight_layout()
plt.show()

# Análise quantitativa dos resultados
detection_counts = []
for result in results:
    boxes = result['boxes']
    count = 0 if boxes is None else len(boxes)
    detection_counts.append(count)

print("Estatísticas de Detecção:")
print(f"Total de imagens processadas: {len(results)}")
print(f"Total de faces detectadas: {sum(detection_counts)}")
print(f"Média de faces por imagem: {np.mean(detection_counts):.2f}")
print(f"Imagem com mais faces: {max(detection_counts)}")
print(f"Imagens sem faces detectadas: {detection_counts.count(0)}")

# Visualização de distribuição de detecções
plt.figure(figsize=(10, 6))
plt.hist(detection_counts, bins=range(0, max(detection_counts)+2),
         edgecolor='black', alpha=0.7)
plt.title('Distribuição de Faces Detectadas por Imagem')
plt.xlabel('Número de Faces')
plt.ylabel('Frequência')
plt.xticks(range(0, max(detection_counts)+1))
plt.grid(axis='y', alpha=0.3)
plt.show()

# Exemplo detalhado de uma imagem com detecções
def show_detailed_detection(result, index):
    img_info = result['img_info']
    boxes = result['boxes']
    probs = result['probs']
    image = result['image']

    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))

    # Imagem original
    ax1.imshow(image)
    ax1.axis('off')
    ax1.set_title('Imagem Original')

    # Imagem com detecções
    ax2.imshow(image)
    ax2.axis('off')
    ax2.set_title(f'Detecções - {len(boxes) if boxes is not None else 0} faces')

    if boxes is not None:
        for j, (box, prob) in enumerate(zip(boxes, probs)):
            x, y, w, h = box[0], box[1], box[2] - box[0], box[3] - box[1]
            rect = patches.Rectangle((x, y), w, h, linewidth=2,
                                   edgecolor='g', facecolor='none')
            ax2.add_patch(rect)
            ax2.text(x, y-5, f'{prob:.2f}', color='green',
                    fontsize=10, weight='bold')

    plt.tight_layout()
    plt.show()

    if boxes is not None:
        print(f"Detalhes das detecções para a imagem {index+1}:")
        for j, (box, prob) in enumerate(zip(boxes, probs)):
            print(f"  Face {j+1}:")
            print(f"    Posição: x1={box[0]:.1f}, y1={box[1]:.1f}, x2={box[2]:.1f}, y2={box[3]:.1f}")
            print(f"    Confiança: {prob:.3f}")
            print(f"    Dimensões: {box[2]-box[0]:.1f}x{box[3]-box[1]:.1f}")

# Mostrar detalhes para a primeira imagem com detecções
for i, result in enumerate(results):
    if result['boxes'] is not None and len(result['boxes']) > 0:
        show_detailed_detection(result, i)
        break

# Comparação com outros métodos (Haar Cascade para comparação)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def detect_faces_haar(image_path):
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    return faces, image

# Comparação entre MTCNN e Haar Cascade
comparison_results = []
for img_info in downloaded_images[:3]:  # Comparar apenas 3 imagens para exemplo
    image_path = img_info['path']

    # Detecção com MTCNN
    boxes_mtcnn, probs, pil_image = detect_faces_mtcnn(image_path)

    # Detecção com Haar Cascade
    faces_haar, cv_image = detect_faces_haar(image_path)

    comparison_results.append({
        'img_info': img_info,
        'mtcnn_boxes': boxes_mtcnn,
        'haar_faces': faces_haar,
        'image': pil_image
    })

# Visualização comparativa
fig, axes = plt.subplots(3, 3, figsize=(15, 12))

for i, result in enumerate(comparison_results):
    # Imagem original
    axes[i, 0].imshow(result['image'])
    axes[i, 0].axis('off')
    axes[i, 0].set_title('Original')

    # Detecção MTCNN
    axes[i, 1].imshow(result['image'])
    axes[i, 1].axis('off')
    mtcnn_count = 0 if result['mtcnn_boxes'] is None else len(result['mtcnn_boxes'])
    axes[i, 1].set_title(f'MTCNN: {mtcnn_count} faces')

    if result['mtcnn_boxes'] is not None:
        for box in result['mtcnn_boxes']:
            x, y, w, h = box[0], box[1], box[2] - box[0], box[3] - box[1]
            rect = patches.Rectangle((x, y), w, h, linewidth=2,
                                   edgecolor='g', facecolor='none')
            axes[i, 1].add_patch(rect)

    # Detecção Haar Cascade
    axes[i, 2].imshow(result['image'])
    axes[i, 2].axis('off')
    axes[i, 2].set_title(f'Haar: {len(result["haar_faces"])} faces')

    for (x, y, w, h) in result['haar_faces']:
        rect = patches.Rectangle((x, y), w, h, linewidth=2,
                               edgecolor='r', facecolor='none')
        axes[i, 2].add_patch(rect)

plt.tight_layout()
plt.show()

# Análise de performance
print("Comparação entre MTCNN e Haar Cascade:")
for i, result in enumerate(comparison_results):
    mtcnn_count = 0 if result['mtcnn_boxes'] is None else len(result['mtcnn_boxes'])
    haar_count = len(result['haar_faces'])
    print(f"Imagem {i+1}: MTCNN={mtcnn_count} faces, Haar={haar_count} faces")
```

## Resultados

Os resultados da detecção facial nas 10 imagens do COCO 2017 mostraram uma melhoria significativa em comparação com abordagens anteriores. O modelo MTCNN detectou com sucesso faces em diferentes poses e orientações, fornecendo uma detecção mais robusta em comparação com o classificador Haar do OpenCV.

## Conclusão

O projeto alcançou seu objetivo de realizar detecção facial em imagens do dataset COCO 2017. O uso do modelo MTCNN mostrou-se eficaz na detecção de faces em diferentes cenários, mostrando uma melhoria considerável em comparação com abordagens anteriores. A detecção facial é uma tarefa fundamental com várias aplicações e pode ser adaptada para muitas outras tarefas de análise de imagem.

## Considerações Finais

O código desenvolvido demonstrou a aplicação prática de técnicas de detecção facial em um dataset específico. No entanto, é importante observar que a escolha do modelo de detecção pode variar dependendo das características específicas do dataset e dos requisitos do projeto. Este relatório fornece uma base para trabalhos futuros relacionados à detecção facial e visão computacional.

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Face_Detect_TensorFlowCV_MTCNN_COCO.ipynb

**Google Colab:** [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Face_Detect_TensorFlowCV_MTCNN_COCO.ipynb)
