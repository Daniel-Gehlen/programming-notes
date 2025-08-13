# Algoritmos Convolucionais

---

## **Introdução**

- **Algoritmos Convolucionais**:
  - Amplamente utilizados em **Machine Learning** para processamento e análise de imagens.
  - Empregam **filtros** que percorrem a imagem para extrair características relevantes.

---

## **Funcionamento das Convoluções**

### **Filtros e Operações**

- **Processo**:
  - Filtros percorrem pequenas regiões da imagem (**janelas deslizantes**).
  - Capturam **padrões locais** (bordas, texturas, formas).
- **Saída**:
  - **Feature Map** (mapa de características) ou **Activation Map**.
  - Exemplo:
    - Imagem de entrada: `32x32x3` (altura × largura × canais RGB).
    - Filtro `5x5`: Gera um feature map `28x28x1` (com `stride=1` e `padding=0`).

### **Matemática por trás da Convolução**

- **Operação Linear**:
  - Combina a imagem de entrada (\(I\)) e o kernel (\(K\)) para produzir um feature map.
  - Fórmula:
    \[
    (I \* K)(i,j) = \sum*{m}\sum*{n} I(i+m, j+n) \cdot K(m,n)
    \]
- **Componentes**:
  - **Kernel**: Matriz pequena (ex.: `3x3`, `5x5`) que multiplica regiões da imagem.
  - **Stride**: Número de pixels que o kernel "pula" (ex.: `stride=1` para sobreposição máxima).

---

## **Extração de Features**

- **Processo Hierárquico**:
  1. **Camadas iniciais**: Detectam bordas e texturas simples.
  2. **Camadas profundas**: Identificam padrões complexos (rostos, objetos).
- **Vantagem**:
  - **Aprendizado automático** de features (sem engenharia manual).

---

## **Redes Convolucionais vs. Redes Tradicionais**

| **Característica**      | **Redes Convolucionais (CNNs)**                             | **Redes Profundas Tradicionais** |
| ----------------------- | ----------------------------------------------------------- | -------------------------------- |
| **Estrutura de Dados**  | Otimizadas para **dados em grade** (imagens).               | Lidam com **dados vetoriais**.   |
| **Detecção de Padrões** | Capturam **padrões locais/espaciais**.                      | Ignoram relações espaciais.      |
| **Eficiência**          | **Menos parâmetros** (devido ao compartilhamento de pesos). | Mais propensas a overfitting.    |

---

## **Exemplo Prático**

1. **Input**: Imagem `224x224x3` (ex.: foto de um gato).
2. **Camadas Convolucionais**:
   - Aplicam filtros para extrair bordas → texturas → partes do corpo → objeto completo.
3. **Saída**: Classificação ("gato" com 95% de confiança).

---

## **Resumo**

- **CNNs** são ideais para imagens devido:
  - **Hierarquia de features**.
  - **Invariância a translações** (o objeto é reconhecido em qualquer posição).
  - **Eficiência computacional**.

---
