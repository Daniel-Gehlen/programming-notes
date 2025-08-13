# Introdução às Redes de Deep Learning

---

## **Deep Learning e Machine Learning**

- **Deep Learning**:

  - Subárea do _Machine Learning_ que utiliza **redes neurais profundas** (múltiplas camadas ocultas).
  - **Objetivo**: Modelar **padrões complexos** em dados (imagens, voz, texto).

- **Machine Learning Tradicional**:
  - Usa redes neurais **rasas** (1-2 camadas ocultas).

---

## **Quantidade de Camadas Ocultas**

| **Tipo de Rede**    | **Camadas Ocultas**    | **Capacidade de Modelagem**                 |
| ------------------- | ---------------------- | ------------------------------------------- |
| **Redes Rasas**     | 1-2 camadas            | Extrai **características simples**.         |
| **Redes Profundas** | Múltiplas camadas (3+) | Captura **padrões hierárquicos complexos**. |

---

## **Extração de Features**

- **Redes Rasas**:
  - Limitadas a **features básicas** (ex.: bordas em imagens).
- **Redes Profundas**:
  - Aprendem **representações hierárquicas**:
    1. **Camadas iniciais**: Bordas e texturas.
    2. **Camadas médias**: Formas e partes de objetos.
    3. **Camadas finais**: Objetos completos (ex.: rostos, carros).

---

## **Redes Neurais Convolucionais (CNNs)**

### **Definição**

- Classe especializada de redes profundas para **dados em grade** (imagens, vídeos).
- **Diferencial**: Usam **convoluções** para preservar relações espaciais.

### **Arquitetura Típica**

1. **Camadas Convolucionais**:
   - Aplicam **filtros** para extrair features locais.
   - Exemplo: Detectar bordas horizontais/verticais.
2. **Camadas de Pooling**:
   - Reduzem dimensionalidade (**MaxPooling**, **AveragePooling**).
3. **Camadas Totalmente Conectadas**:
   - Classificação final (ex.: "cachorro" vs. "gato").

---

## **Problemas Associados**

### **Caixa Preta**

- **Desafio**: Dificuldade em interpretar **como** a rede toma decisões.
- **Causas**:
  - Alta complexidade (milhões de parâmetros).
  - Não-linearidades acumuladas.
- **Impacto**:
  - Crítico em aplicações sensíveis (medicina, justiça).

---

## **Exemplo Prático**

**Entrada**: Imagem de um cachorro.
**Processo**:

1. **CNN** detecta bordas → patas → corpo → animal completo.
2. **Camada final** classifica como "cachorro" com 98% de confiança.
   **Problema**: Por que a rede achou que era um cachorro? (_Caixa preta_).

---

## **Resumo**

- **Deep Learning** > **ML tradicional** para problemas complexos.
- **CNNs** são ideais para imagens (convoluções + hierarquia de features).
- **Desafio**: Interpretabilidade (_trade-off_ entre precisão e transparência).

---
