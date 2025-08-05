# Transformada Discreta de Cosseno (DCT)

## Introdução

A DCT é um método para transformar sinais em componentes de frequência usando cossenos. É amplamente usada em:

- Compactação de imagens (JPEG)
- Compressão de áudio (MP3, AAC)
- Processamento de vídeo (MPEG)

## Fundamentos Matemáticos

### DCT Tipo II (Mais comum)

Para um sinal x[n] com N amostras:

X[k] = α(k) Σ (n=0 a N-1) x[n] \* cos[(π/N)(n + 0.5)k]

Onde:
α(0) = 1/√N
α(k) = √(2/N) para k > 0

### Propriedades Principais

1. Ortogonal - permite reconstrução perfeita
2. Concentra energia nos primeiros coeficientes
3. Eficiente computacionalmente

## Aplicações Práticas

### Compressão JPEG

1. Divide imagem em blocos 8×8 pixels
2. Aplica DCT em cada bloco
3. Quantiza coeficientes
4. Codifica com compactação entrópica

### Processamento de Áudio

1. Janelamento do sinal de áudio
2. Aplicação da DCT
3. Eliminação de frequências menos perceptíveis
4. Codificação dos coeficientes

## Implementação

Bibliotecas comuns:

- NumPy (Python)
- FFTW (C/C++)
- MATLAB Signal Processing Toolbox

## Vantagens

- Alta eficiência de compactação
- Boa qualidade após reconstrução
- Implementação otimizada disponível

## Limitações

- Perdas na quantização
- Complexidade computacional para N grande
- Artefatos de blocagem em JPEG
