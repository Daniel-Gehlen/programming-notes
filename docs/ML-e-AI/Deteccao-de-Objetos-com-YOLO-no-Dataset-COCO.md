# Relatório: Detecção de Objetos com YOLO no Dataset COCO

## Introdução
A detecção de objetos em imagens é uma tarefa crucial em visão computacional e aprendizado de máquina. YOLO (You Only Look Once) é uma arquitetura popular para detecção de objetos em tempo real em imagens. Este relatório aborda a implementação do YOLO no Google Colab para detectar objetos em imagens do conjunto de dados Common Objects in Context (COCO). O COCO contém uma variedade de objetos em cenas complexas, tornando-o um conjunto de dados desafiador para tarefas de detecção.

## Métodos
O código começa baixando e preparando o conjunto de dados COCO, incluindo anotações e imagens. Em seguida, utiliza a biblioteca YOLO para realizar a detecção de objetos em imagens selecionadas. O YOLO é configurado com o arquivo de configuração yolov3.cfg e os pesos pré-treinados yolov3.weights. As imagens processadas são exibidas com caixas delimitadoras e classes dos objetos detectados.

## Implementação Completa

```python
# Instalação das dependências necessárias
!pip install pyyaml==5.1
!pip install torch==1.7.1+cu101 torchvision==0.8.2+cu101 torchaudio==0.7.2 -f https://download.pytorch.org/whl/torch_stable.html
!pip install opencv-python-headless
!pip install matplotlib
!pip install pycocotools

# Importação das bibliotecas
import torch
import cv2
import numpy as np
import matplotlib.pyplot as plt
from google.colab.patches import cv2_imshow
import os
import requests
import zipfile
from pycocotools.coco import COCO
import random

# Verificando se CUDA está disponível
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print('Dispositivo:', device)

# Download dos pesos pré-treinados do YOLOv3
!wget https://pjreddie.com/media/files/yolov3.weights

# Download do arquivo de configuração do YOLOv3
!wget https://github.com/pjreddie/darknet/blob/master/cfg/yolov3.cfg?raw=true -O yolov3.cfg

# Download das classes do COCO
!wget https://raw.githubusercontent.com/pjreddie/darknet/master/data/coco.names

# Carregando os nomes das classes
with open("coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]

# Carregando a configuração e os pesos do YOLO
net = cv2.dnn.readNetFromDarknet("yolov3.cfg", "yolov3.weights")
net.setPreferableBackend(cv2.dnn.DNN_BACKEND_OPENCV)
net.setPreferableTarget(cv2.dnn.DNN_TARGET_CPU)

# Obtendo os nomes das camadas de saída
layer_names = net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]

# Função para realizar a detecção de objetos
def detect_objects(img):
    height, width, channels = img.shape

    # Pré-processamento da imagem
    blob = cv2.dnn.blobFromImage(img, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
    net.setInput(blob)
    outs = net.forward(output_layers)

    # Processando as detecções
    class_ids = []
    confidences = []
    boxes = []

    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            if confidence > 0.5:  # Threshold de confiança
                # Coordenadas da caixa delimitadora
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                # Canto superior esquerdo
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)

                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)

    # Aplicando non-maximum suppression para eliminar detecções redundantes
    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

    # Desenhando as caixas delimitadoras e rótulos
    font = cv2.FONT_HERSHEY_PLAIN
    colors = np.random.uniform(0, 255, size=(len(classes), 3))

    if len(indexes) > 0:
        for i in indexes.flatten():
            x, y, w, h = boxes[i]
            label = str(classes[class_ids[i]])
            confidence = str(round(confidences[i], 2))
            color = colors[class_ids[i]]

            cv2.rectangle(img, (x, y), (x + w, y + h), color, 2)
            cv2.putText(img, f"{label} {confidence}", (x, y + 30), font, 2, color, 2)

    return img

# Download do dataset COCO (apenas validação para exemplo)
!wget http://images.cocodataset.org/zips/val2017.zip
!wget http://images.cocodataset.org/annotations/annotations_trainval2017.zip

# Extraindo os arquivos
with zipfile.ZipFile('val2017.zip', 'r') as zip_ref:
    zip_ref.extractall('.')

with zipfile.ZipFile('annotations_trainval2017.zip', 'r') as zip_ref:
    zip_ref.extractall('.')

# Carregando as anotações do COCO
coco = COCO('annotations/instances_val2017.json')

# Obtendo todas as imagens
img_ids = coco.getImgIds()
random.shuffle(img_ids)

# Selecionando 10 imagens aleatórias para demonstração
selected_img_ids = img_ids[:10]

# Processando as imagens selecionadas
for i, img_id in enumerate(selected_img_ids):
    # Carregando a imagem
    img_info = coco.loadImgs(img_id)[0]
    img_url = img_info['coco_url']
    img_name = img_info['file_name']

    # Baixando a imagem
    img_data = requests.get(img_url).content
    with open(f'img_{i}.jpg', 'wb') as handler:
        handler.write(img_data)

    # Carregando a imagem com OpenCV
    img = cv2.imread(f'img_{i}.jpg')
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    # Realizando a detecção de objetos
    result_img = detect_objects(img.copy())

    # Exibindo os resultados
    plt.figure(figsize=(15, 10))

    plt.subplot(1, 2, 1)
    plt.imshow(img)
    plt.title('Imagem Original')
    plt.axis('off')

    plt.subplot(1, 2, 2)
    plt.imshow(result_img)
    plt.title('Detecção de Objetos com YOLO')
    plt.axis('off')

    plt.show()

    # Limpando o arquivo temporário
    os.remove(f'img_{i}.jpg')

# Função para calcular métricas de avaliação (exemplo simplificado)
def evaluate_detection(coco, img_id, boxes, class_ids, confidences):
    # Carregando anotações de ground truth para a imagem
    ann_ids = coco.getAnnIds(imgIds=img_id)
    anns = coco.loadAnns(ann_ids)

    gt_boxes = []
    gt_classes = []

    for ann in anns:
        x, y, w, h = ann['bbox']
        gt_boxes.append([x, y, w, h])
        gt_classes.append(ann['category_id'])

    # Aqui seria implementada a lógica para calcular mAP, precisão, recall, etc.
    # Para simplificar, vamos apenas retornar contagens
    return {
        'gt_objects': len(gt_boxes),
        'detected_objects': len(boxes),
        'true_positives': 0,  # Seria calculado comparando detecções com ground truth
        'false_positives': 0,  # Seria calculado comparando detecções com ground truth
        'false_negatives': 0   # Seria calculado comparando detecções com ground truth
    }

# Exemplo de uso da função de avaliação (apenas para demonstração)
print("Exemplo de métricas de avaliação (valores simulados):")
metrics = {
    'gt_objects': 8,
    'detected_objects': 7,
    'true_positives': 6,
    'false_positives': 1,
    'false_negatives': 2,
    'precision': 6 / (6 + 1),
    'recall': 6 / (6 + 2)
}
print(metrics)
```

## Resultados
A detecção de objetos nas 10 imagens de validação do COCO resultou em previsões para várias classes de objetos, acompanhadas de probabilidades de confiança. Algumas classes comuns incluem "pessoa", "mesa de jantar", "tigela", "copo", "cadeira", "geladeira", "forno", "microondas", "vaso de planta" e "semáforo". As previsões foram visualizadas junto com as imagens originalmente selecionadas.

## Conclusão
O YOLO demonstra sua eficácia na detecção de objetos em imagens complexas do conjunto de dados COCO. A arquitetura YOLO, dividindo a imagem em grades e fazendo previsões para cada célula, fornece uma abordagem eficiente para detecção em tempo real. No entanto, a implementação pode ser aprimorada, por exemplo, ajustando parâmetros, treinando o modelo em um conjunto de dados específico ou usando uma versão mais recente do YOLO. Este relatório fornece uma base para expandir e personalizar a detecção de objetos usando YOLO no Google Colab.

[![Abrir no Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/YOLO_Detection_Analysis.ipynb)

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/YOLO_Detection_Analysis.ipynb
