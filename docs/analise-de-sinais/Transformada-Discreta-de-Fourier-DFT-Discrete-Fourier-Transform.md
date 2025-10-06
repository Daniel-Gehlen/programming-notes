# Transformada Discreta de Fourier (DFT)

## Definição Matemática

A DFT transforma uma sequência temporal discreta `x[n]` de tamanho `N` em seu espectro de frequências `X[k]`:

**Definição Matemática em Formato Linear**

**Equação de Análise (Tempo → Frequência):**
X[k] = Σ[n=0 até N-1] x[n] · e^(-j·2π·k·n/N)

**Equação de Síntese (Frequência → Tempo):**
x[n] = (1/N) · Σ[k=0 até N-1] X[k] · e^(j·2π·k·n/N)

**Forma Alternativa com Cossenos e Senos:**

**Análise:**
X[k] = Σ[n=0 até N-1] x[n] · [cos(2πkn/N) - j·sin(2πkn/N)]

**Síntese:**
x[n] = (1/N) · Σ[k=0 até N-1] X[k] · [cos(2πkn/N) + j·sin(2πkn/N)]

**Componentes Real e Imaginária:**

**Parte Real de X[k]:**
Re{X[k]} = Σ[n=0 até N-1] x[n] · cos(2πkn/N)

**Parte Imaginária de X[k]:**
Im{X[k]} = -Σ[n=0 até N-1] x[n] · sin(2πkn/N)

## Variáveis e Notação

- **`x[n]`**: Sinal de entrada no domínio do tempo (sequência discreta)
- **`X[k]`**: Sinal de saída no domínio da frequência (coeficientes espectrais)
- **`N`**: Número total de amostras
- **`n`**: Índice temporal (0 ≤ n ≤ N-1)
- **`k`**: Índice de frequência (0 ≤ k ≤ N-1)
- **`j`**: Unidade imaginária (j² = -1)

## Propriedades Importantes

- **Periodicidade**: `X[k + N] = X[k]`
- **Simetria**: Para sinais reais `x[n]`, `X[k] = X*[N-k]`
- **Resolução de frequência**: Δf = Fs/N, onde Fs é a frequência de amostragem

## Implementação Direta em Python

```python
import numpy as np

def DFT_direta(x):
    N = len(x)
    n = np.arange(N)
    k = n.reshape((N, 1))

    # Matriz de rotação DFT
    W = np.exp(-2j * np.pi * k * n / N)

    return np.dot(W, x)

# Exemplo prático
sinal_temporal = np.array([1.0, 2.0, 1.0, -1.0, 1.5])
espectro = DFT_direta(sinal_temporal)
```

## Comparativo DFT vs FFT

| Característica | DFT Direta   | FFT (Cooley-Tukey) |
| -------------- | ------------ | ------------------ |
| Complexidade   | O(N²)        | O(N log N)         |
| Tempo (N=1024) | ~200ms       | ~2ms               |
| Precisão       | Exata        | Exata              |
| Uso de Memória | N² elementos | N elementos        |

## Aplicações Práticas

1. **Análise Espectral**

   ```python
   # Identificação de frequências dominantes
   freqs = np.fft.fftfreq(len(sinal), 1/fs)
   idx_pico = np.argmax(np.abs(espectro)[:N//2])
   print(f"Frequência dominante: {freqs[idx_pico]} Hz")
   ```

2. **Filtragem Digital**

   ```python
   # Filtro passa-baixa no domínio da frequência
   espectro[freqs > 1000] = 0  # Corta frequências > 1kHz
   sinal_filtrado = np.fft.ifft(espectro)
   ```

3. **Processamento de Imagens**
   ```python
   # DFT 2D para imagens (análise de texturas)
   dft_imagem = np.fft.fft2(imagem)
   espectro_shift = np.fft.fftshift(dft_imagem)
   ```

## Propriedades Fundamentais

1. **Linearidade**: `DFT(a·x + b·y) = a·DFT(x) + b·DFT(y)`
2. **Deslocamento Temporal**: `DFT(x[n-m]) = X[k]·e^(-j2πkm/N)`
3. **Convolução Circular**: `DFT(x ⊛ y) = X[k]·Y[k]`

## Implementação Otimizada (FFT)

```python
# Usando NumPy
import numpy as np
espectro = np.fft.fft(sinal_temporal)

# Com zero-padding para melhor resolução
espectro_zp = np.fft.fft(sinal_temporal, n=2048)
```

## Considerações Numéricas

- **Efeito de Vazamento**: Minimizado com janelamento (Hamming, Hanning)

  ```python
  window = np.hamming(len(sinal))
  espectro = np.fft.fft(sinal * window)
  ```

- **Aliasing**: Evitado com taxa de amostragem `fs > 2·fmax`

## Caso de Estudo: Análise de Áudio

```python
import matplotlib.pyplot as plt

# Sinal de exemplo (440Hz + ruído)
fs = 44100  # Taxa de amostragem
t = np.linspace(0, 1, fs)
sinal = 0.5*np.sin(2*np.pi*440*t) + 0.1*np.random.randn(fs)

# Visualização
plt.magnitude_spectrum(sinal, Fs=fs, scale='dB')
plt.title('Espectro de Frequência (DFT)')
plt.show()
```

## Referências Avançadas

1. Oppenheim, A. V. - "Discrete-Time Signal Processing"
2. Cooley, J. W.; Tukey, J. W. (1965) - Algoritmo FFT
3. NumPy Documentation - numpy.fft module

### Destaques:

1. **Formatação matemática** com equações em LaTeX
2. **Implementações comparadas** (direta vs FFT)
3. **Exemplos práticos** por área de aplicação
4. **Visualização profissional** com matplotlib
5. **Otimizações numéricas** (janelamento, zero-padding)
6. **Organização pedagógica** do básico ao avançado
