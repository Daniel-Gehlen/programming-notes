# Métodos de Otimização em ML

---

## **Introdução aos Métodos de Otimização**

### **Machine Learning**

- A otimização de modelos de ML é **crucial** para melhorar:
  - **Performance** (acurácia, recall, etc.).
  - **Eficiência** (tempo de treinamento, uso de recursos).

---

## **Modelos Determinísticos vs. Heurísticos**

### **1. Métodos Determinísticos**

- **Definição**:
  - Sempre produzem o **mesmo resultado** para a mesma entrada.
  - Exemplos: Gradient Descent, Linear Programming.
- **Vantagem**:
  - Previsibilidade e reprodutibilidade.

### **2. Modelos Heurísticos**

- **Definição**:
  - Buscam soluções **"boas o suficiente"** para problemas complexos.
  - Exemplos: Algoritmos Genéticos, Swarm Optimization.
- **Aplicação**:
  - Quando métodos tradicionais falham (ex.: espaços de busca muito grandes).

---

## **Por que Otimizar Modelos de ML?**

1. **Corrigir falhas** (ex.: overfitting).
2. **Ajustar parâmetros** (hiperparâmetros, arquitetura da rede).
3. **Melhorar precisão** e generalização.

---

## **Como Otimizar Modelos?**

### **Passo 1: Mapeamento dos Processos**

- Entenda **todas as etapas** do modelo (dados → treino → saída).
- Identifique **entradas e saídas** críticas.

### **Passo 2: Identificação de Pontos Críticos**

- Detecte **gargalos** (ex.: dados desbalanceados, features irrelevantes).

### **Passo 3: Implementação de Melhorias**

- Priorize ajustes com **maior impacto** (ex.: aumentar dados de treino).

### **Passo 4: Monitoramento Contínuo**

- Avalie resultados e **repita o ciclo** para refinamento.

---

## **Técnicas de Otimização**

### **Data Augmentation**

- **Objetivo**: Aumentar **quantidade e diversidade** dos dados de treino.
- **Exemplos**:
  - Rotação, espelhamento de imagens.
  - Adição de ruído controlado.
- **Vantagem**:
  - Reduz overfitting e melhora generalização.

---

## **Resumo**

| **Tópico**              | **Descrição**                                                              |
| ----------------------- | -------------------------------------------------------------------------- |
| **Determinístico**      | Resultados previsíveis (ex.: Gradient Descent).                            |
| **Heurístico**          | Soluções aproximadas para problemas complexos (ex.: Algoritmos Genéticos). |
| **Otimização Contínua** | Ciclo de mapeamento → identificação → implementação → monitoramento.       |
| **Data Augmentation**   | Aumenta dados artificiais para melhorar treinamento.                       |

---
