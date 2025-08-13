# Métodos de Otimização de Hiperparâmetros

---

### **Hiperparâmetros vs. Parâmetros**

- **Hiperparâmetros**:
  - São variáveis do algoritmo **definidas antes do treinamento**.
  - Controlam o **processo de aprendizado** (ex.: taxa de aprendizado, número de camadas em uma rede neural).
- **Parâmetros**:
  - São **ajustados durante o treinamento** (ex.: pesos em uma rede neural).
  - Influenciam **diretamente a performance** do modelo.

### **Objetivo da Otimização de Hiperparâmetros**

- **Melhor Desempenho**: Encontrar a combinação ideal de hiperparâmetros que **maximize a acurácia/performance** do modelo.

---

### **Métodos de Otimização**

#### **1. Grid Search (Busca em Grade)**

- **Descrição**:
  - Testa **todas as combinações possíveis** de valores pré-definidos para os hiperparâmetros.
- **Vantagem**:
  - **Garante** que todas as combinações sejam avaliadas.
- **Desvantagem**:
  - **Computacionalmente caro** (ineficiente para espaços grandes de hiperparâmetros).

#### **2. Random Search (Busca Aleatória)**

- **Descrição**:
  - Testa **combinações aleatórias** dentro de um intervalo definido.
- **Vantagem**:
  - **Mais eficiente** que Grid Search em espaços grandes.
- **Desvantagem**:
  - **Não garante** a melhor combinação (depende da amostragem).

#### **3. Bayesian Optimization (Otimização Bayesiana)**

- **Descrição**:
  - Usa **probabilidades** para prever combinações promissoras, reduzindo testes desnecessários.
- **Vantagem**:
  - **Mais inteligente e eficiente** que Grid/Random Search.
- **Desvantagem**:
  - **Complexidade** maior na implementação.

---

### **Otimização em Modelos Específicos**

#### **Árvore de Decisão**

- **Hiperparâmetro Crítico**:
  - **Profundidade máxima** (controla o número de divisões da árvore).

---
