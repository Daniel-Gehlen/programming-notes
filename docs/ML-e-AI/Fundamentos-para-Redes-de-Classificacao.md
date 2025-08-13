# Fundamentos para Redes de Classificação

---

## **Machine Learning**

- **Definição**: Redes de classificação são usadas para **identificar e categorizar dados**, como imagens, com base em técnicas e algoritmos específicos.

---

## **Redes de Classificação**

### **1. Classificação de Imagens**

- **Objetivo**: Rotular uma imagem como pertencente a uma **classe específica** (ex.: "gato", "carro").
- **Características**:
  - Atribui **uma única etiqueta** à imagem inteira.
  - Foco em **reconhecimento global** (não em localização ou detalhes internos).

### **2. Detecção de Objetos**

- **Objetivo**: Identificar **e localizar** múltiplos objetos em uma imagem.
- **Saída**: **Caixas delimitadoras** (bounding boxes) + classes dos objetos.
- **Diferença para classificação**:
  - Não se limita a uma etiqueta global – mostra **onde** cada objeto está.

### **3. Segmentação de Objetos**

- **Objetivo**: Dividir a imagem em **regiões precisas** correspondentes a objetos ou partes deles.
- **Saída**: **Máscaras pixel a pixel** (áreas exatas de cada objeto).
- **Aplicação típica**: Quando a localização exata e os contornos são críticos (ex.: imagens médicas).

---

## **Diferenças entre os Processos**

| **Tarefa**              | **Saída**                                   | **Exemplo de Aplicação**                            |
| ----------------------- | ------------------------------------------- | --------------------------------------------------- |
| **Classificação**       | Uma única etiqueta para a imagem toda.      | Reconhecimento de espécies de plantas.              |
| **Detecção de Objetos** | Caixas delimitadoras + classes dos objetos. | Veículos autônomos (identificar pedestres, carros). |
| **Segmentação**         | Máscaras detalhadas (pixel a pixel).        | Diagnóstico por imagem (ex.: tumores).              |

---

## **Aplicações**

- **Classificação**:
  - Reconhecimento de padrões em fotos (ex.: redes sociais).
- **Detecção**:
  - Vigilância, robótica, sistemas de tráfego.
- **Segmentação**:
  - Medicina (análise de ressonâncias), agricultura de precisão.

---

## **Resumo**

1. **Classificação**: "O que é esta imagem?" → Resposta única.
2. **Detecção**: "O que há nesta imagem e onde?" → Lista de objetos + localizações.
3. **Segmentação**: "Quais pixels pertencem a cada objeto?" → Mapa detalhado.

---
