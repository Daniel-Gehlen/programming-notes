# Algoritmos de Classificação

---

### **Machine Learning**

- **Definição**: Algoritmos de classificação são usados para **categorizar dados** em classes específicas.
- **Exemplo em imagens**: Rotular uma imagem com a classe correta (ex.: "gato", "cachorro").

---

### **Classificação de Imagens**

- **Objetivo**: Rotular uma imagem como pertencente a uma **categoria específica**.
- **Processo**:
  - A imagem é tratada como um **elemento completo**.
  - A classificação é baseada em **características extraídas** (manualmente ou por redes neurais).

---

### **Extração de Features (Características)**

#### **1. Filtro de Bordas**

- **Função**: Detectar **contornos e bordas** em uma imagem.
- **Aplicação**:
  - Filtros (ex.: Sobel, Canny) realçam bordas para facilitar a **identificação de formas e objetos**.
  - Técnica tradicional de **visão computacional**.

#### **2. Extração Automática (Deep Learning)**

- **Como funciona**:
  - Redes neurais **aprendem características automaticamente** durante o treinamento.
  - Elimina a necessidade de **filtros manuais**.
- **Vantagem**:
  - Captura **padrões complexos** que métodos tradicionais não identificam.

---

### **Classificação com Deep Learning**

- **Redes Neurais Convolucionais (CNNs)**:
  - Arquitetura padrão para classificação de imagens.
  - **Funcionamento**:
    1. Extraem **features hierárquicas** (de bordas simples a formas complexas).
    2. Classificam a imagem com base nessas features.
  - **Vantagens**:
    - Alta precisão.
    - Adaptabilidade a diversos problemas (ex.: reconhecimento médico, automação industrial).

---
