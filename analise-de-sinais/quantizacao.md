# Quantização em Processamento de Sinais Digitais

## Conceito Fundamental
Processo de mapeamento de valores contínuos (analógicos) para um conjunto finito de valores discretos, essencial para digitalização de sinais.

## Processo em 3 Etapas
1. **Amostragem**: Captura de valores em intervalos regulares
2. **Discretização**: Conversão para valores digitais finitos
3. **Nivelamento**: Atribuição a intervalos pré-definidos

## Tipos de Quantização
| Tipo | Característica | Aplicação Típica |
|------|---------------|------------------|
| Uniforme | Intervalos iguais | Sistemas lineares |
| Não-Uniforme (Lei A/μ) | Intervalos variáveis | Telecomunicações |

## Implementação Básica em Python
```python
import numpy as np

# Parâmetros
min_val, max_val = -10.0, 10.0  # Faixa do sinal
n_bits = 8                       # Resolução
levels = 2**n_bits               # 256 níveis

# Simulação
analog_signal = np.random.uniform(min_val, max_val, 1000)
quantized = np.round((analog_signal-min_val)/(max_val-min_val)*(levels-1))
quantized = quantized*(max_val-min_val)/(levels-1) + min_val

# Cálculo do erro
error = np.mean(np.abs(analog_signal - quantized))
print(f"Erro médio: {error:.4f}V")
```

## Impactos Práticos
- **Erro de Quantização**: Diferença inevitável entre valor real e quantizado
- **Relação Bits/Qualidade**:
  - 8 bits → 256 níveis (erro ~0.08V no exemplo)
  - 16 bits → 65,536 níveis (erro ~0.0003V)

## Aplicações Críticas
- Sistemas de áudio digital (PCM, MP3)
- Processamento de imagens (JPEG)
- Telecomunicações (VoIP)
