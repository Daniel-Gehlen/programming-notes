# Fundamentos para Redes de Classificação

## 1. Classificação de Imagens

**Definição**:
Atribui um rótulo à imagem como um todo, sem focar em elementos específicos.
**Características**:

- Visão global da imagem
- Saída: Categoria única (ex: "gato", "carro")

## 2. Detecção de Objetos

**Definição**:
Identifica e localiza múltiplos objetos dentro de uma imagem.
**Diferenças**:

- Usa bounding boxes para delimitar objetos
- Pode identificar várias classes simultaneamente
  **Aplicações**:
- Reconhecimento facial
- Sistemas de vigilância
- Análise de vídeo

## 3. Segmentação de Objetos

**Definição**:
Divide a imagem em regiões pixel a pixel correspondentes a objetos/partes.
**Técnicas**:

- Segmentação semântica (classes)
- Segmentação instância (objetos individuais)
  **Aplicações**:
- Diagnóstico por imagem médica
- Navegação de robôs
- Veículos autônomos

---

## Comparativo dos Processos

| **Processo**  | **Escopo**        | **Saída**                  | **Complexidade** |
| ------------- | ----------------- | -------------------------- | ---------------- |
| Classificação | Imagem inteira    | Rótulo único               | Baixa-Média      |
| Detecção      | Múltiplos objetos | Bounding boxes + classes   | Média-Alta       |
| Segmentação   | Pixel a pixel     | Máscaras por objeto/região | Alta             |

---

## Algoritmos de Classificação

### 1. Extração de Features

- **Filtro de Bordas**:
  - Realça contornos (ex: operador Sobel)
- **Deep Learning**:
  - Extração automática de features (CNNs)

### 2. Classificação com Deep Learning

**Vantagens**:

- Elimina necessidade de feature engineering manual
- Alta precisão em grandes datasets

---

## Rede Inception-V3

**Arquitetura**:

- Rede neural profunda para classificação de imagens
- Otimizada para eficiência computacional
  **Aplicação**:
- Classificação em grandes datasets (ex: ImageNet)
- Transfer Learning para tarefas customizadas

**Exemplo de Uso**:

```python
# Código simplificado para carga do modelo
from tensorflow.keras.applications import InceptionV3
model = InceptionV3(weights='imagenet')
```

---

**Próximos Passos**:
Explorar implementações práticas com datasets reais para cada técnica.
