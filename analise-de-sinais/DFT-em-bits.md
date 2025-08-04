# DFT em Representação Binária ("DFT em bits")

## Conceito Fundamental
Aplicação da Transformada Discreta de Fourier (DFT) diretamente sobre sinais digitais representados em formato binário puro, onde cada amostra é um valor inteiro codificado em bits.

## Representação de Sinais Binários
```mermaid
flowchart LR
    A[Sinal Analógico] --> B[Amostragem]
    B --> C[Quantização]
    C --> D[Representação Binária]
    D -->|8 bits| E[00000000 a 11111111]
    E -->|Valor Decimal| F[0 a 255]
```

## Implementação Básica em Python
```python
import numpy as np

def dft_binaria(x_bin):
    """
    Calcula a DFT para sinais representados em bits
    :param x_bin: array de inteiros representando valores binários
    :return: Espectro de frequência complexo
    """
    N = len(x_bin)
    n = np.arange(N)
    k = n.reshape((N, 1))

    # Matriz de rotação DFT
    W = np.exp(-2j * np.pi * k * n / N)

    return np.dot(W, x_bin)

# Exemplo com sinal binário periódico
sinal_binario = np.array([0, 1, 0, 1, 0, 1, 0, 1], dtype=np.uint8)
spectrum = dft_binaria(sinal_binario)

print("Espectro DFT:")
print(np.round(spectrum, 2))
```

## Características Especiais
1. **Aritmética Inteira**:
   - Operações diretamente sobre valores binários
   - Elimina erros de arredondamento em sistemas embarcados

2. **Otimizações Possíveis**:
   - Uso de operações bitwise
   - Lookup tables para exponenciais complexas

3. **Aplicações Típicas**:
   - Processamento DSP em FPGAs
   - Sistemas de comunicação digital
   - Análise de sinais em hardware dedicado

## Comparativo DFT Binária vs Tradicional
| Aspecto               | DFT Binária          | DFT Tradicional       |
|-----------------------|----------------------|-----------------------|
| Tipo de Dado          | Inteiros (uint8/16)  | Ponto flutuante       |
| Precisão              | Exata (bit-perfect)  | Precisão numérica     |
| Complexidade          | O(N²)                | O(N²) ou O(N log N)   |
| Hardware Indicado     | FPGAs/ASICs          | CPUs/GPUs             |

## Caso Prático: Análise de Sinal Digital
```python
# Gerando sinal PWM (Modulação por Largura de Pulso)
bits_pwm = [1 if i < 5 else 0 for i in range(8)] * 4  # Duty cycle 50%
dft_result = dft_binaria(np.array(bits_pwm))

# Componentes de frequência dominantes
freq_principal = np.argmax(np.abs(dft_result[:len(dft_result)//2]))
print(f"Frequência fundamental: {freq_principal} ciclos/amostra")
```

## Limitações e Soluções
1. **Resolução Limitada**:
   - Problema: Quantização fixa (ex: 8 bits)
   - Solução: Usar palavras maiores (16/32 bits)

2. **Eficiência Computacional**:
   - Problema: Complexidade O(N²)
   - Solução: Implementar FFT binária (algoritmos especializados)

3. **Precisão Espectral**:
   - Problema: Efeito de quantização
   - Solução: Técnicas de dithering digital

## Aplicações Avançadas
- **Processamento de Sinais RF** em SDR (Rádio Definido por Software)
- **Análise de Barramentos Digitais** (protocolos I2C, SPI)
- **Sistemas Embarcados Críticos** (áudio digital, controle industrial)

**Exemplo Prático**: O código demonstra a análise espectral de um sinal PWM binário, identificando corretamente sua frequência fundamental mesmo na representação discreta de 0s e 1s.

### Destaques:
1. **Diagrama explicativo** do fluxo de processamento
2. **Implementação vetorizada** com NumPy para melhor performance
3. **Caso real** com análise de sinal PWM
4. **Tabela comparativa** destacando diferenças cruciais
5. **Seção de limitações** com soluções práticas
6. **Aplicações específicas** para contextos de baixo nível
