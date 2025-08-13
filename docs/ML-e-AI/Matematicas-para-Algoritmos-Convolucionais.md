# Matemáticas para Algoritmos Convolucionais

---

## **Representação de Imagens**

- **Como uma Imagem é Representada?**
  - Em ML, imagens são **matrizes de pixels**.
  - Canais:
    - **RGB** (3 matrizes para imagens coloridas).
    - Escala de cinza (1 matriz).

---

## **Convolução**

### **Operação Linear**

- **Definição**: Combina duas funções/matrizes para gerar um **feature map**.
- **Fórmula**:
  \[
  (I \* K)(i,j) = \sum*{m}\sum*{n} I(i+m, j+n) \cdot K(m,n)
  \]
  - \(I\) = Imagem de entrada.
  - \(K\) = Kernel/filtro.

### **Componentes**

1. **Filtro/Kernel**:
   - Matriz pequena (ex.: 3×3) que **extrai features** (bordas, texturas).
2. **Stride**:
   - Passo do filtro sobre a imagem (ex.: stride=1 → sobreposição máxima).
3. **Padding**:
   - Adiciona bordas à imagem para **controlar o tamanho da saída**.
   - Tipos:
     - `Same` (mantém dimensões).
     - `Valid` (sem padding).

---

## **Funções de Ativação**

### **ReLU (Rectified Linear Unit)**

- **Fórmula**: \( \text{ReLU}(x) = \max(0, x) \).
- **Efeito**:
  - Introduz **não-linearidade** (permite aprender padrões complexos).
  - Elimina valores negativos.

---

## **Pooling**

### **Processo de Downsampling**

- **Objetivo**: Reduzir dimensionalidade e **preservar features importantes**.
- **Tipos**:
  - **MaxPooling**: Seleciona o **maior valor** na região.
  - **AveragePooling**: Calcula a **média** da região.
  - **SumPooling**: Soma os valores (menos comum).

### **Exemplo (MaxPooling 2×2)**

| **Input** | **Output** |
| --------- | ---------- |
| [1, 3]    | 3          |
| [0, 2]    |            |

---

## **Dropout**

- **Função**:
  - "Desliga" neurônios aleatoriamente durante o treinamento.
- **Objetivo**:
  - Evitar **overfitting** (melhorar generalização).

---

## **Flatten**

- **Transformação**:
  - Converte saídas multidimensionais (ex.: 3D de uma CNN) em **vetor 1D**.
- **Uso**:
  - Conectar camadas convolucionais a **camadas densas** (classificação).

---

## **Resumo das Operações em CNNs**

| **Operação**   | **Função**                                 | **Exemplo**              |
| -------------- | ------------------------------------------ | ------------------------ |
| **Convolução** | Extrai features locais (bordas, texturas). | Kernel 3×3 com stride=1. |
| **ReLU**       | Adiciona não-linearidade.                  | \(\max(0, x)\).          |
| **Pooling**    | Reduz dimensionalidade.                    | MaxPooling 2×2.          |
| **Dropout**    | Regulariza o modelo.                       | Dropout rate=0.5.        |
| **Flatten**    | Prepara dados para camadas densas.         | Transforma 3D → 1D.      |

---
