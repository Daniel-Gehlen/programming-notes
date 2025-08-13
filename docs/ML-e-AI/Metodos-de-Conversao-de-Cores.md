# Modelos de Conversão de Cores e Espaços de Cor

## Principais Espaços de Cor

### 1. RGB (Red, Green, Blue)

- **Tipo**: Modelo aditivo
- **Aplicações**: Monitores, TVs, imagens digitais
- **Faixa de valores**:
  - 0-255 (8 bits por canal)
  - 0.0-1.0 (valores normalizados)
- **Conversão para HSV**:
  ```python
  import colorsys
  r, g, b = 255, 128, 0
  h, s, v = colorsys.rgb_to_hsv(r/255, g/255, b/255)
  ```

### 2. HSV/HSB (Hue, Saturation, Value/Brightness)

- **Componentes**:
  - Matiz (0°-360°)
  - Saturação (0%-100%)
  - Valor/Brilho (0%-100%)
- **Vantagem**: Mais intuitivo para ajustes criativos
- **Conversão para RGB**:
  ```python
  r, g, b = colorsys.hsv_to_rgb(h, s, v)
  r, g, b = int(r*255), int(g*255), int(b*255)
  ```

### 3. HSL (Hue, Saturation, Lightness)

- **Diferencial**: Separa luminosidade de saturação
- **Uso comum**: Design web (CSS)
- **Comparação com HSV**:
  - HSL: Lightness = 0% (preto), 50% (cor pura), 100% (branco)
  - HSV: Value = 0% (preto), 100% (cor máxima)

### 4. CIE XYZ (1931)

- **Base científica**: Modelo perceptivo humano
- **Características**:
  - Y representa luminância
  - Cobre todo espectro visível
  - Base para outros espaços CIE (LAB, LUV)

### 5. CIE LAB

- **Vantagens**:
  - Perceptivamente uniforme
  - Independente de dispositivo
  - Espaço de cor absoluto
- **Componentes**:
  - L\* (luminosidade 0-100)
  - a\* (verde-magenta)
  - b\* (azul-amarelo)

## Tabela Comparativa

| Espaço de Cor | Tipo       | Uso Principal     | Vantagens                        | Desvantagens                 |
| ------------- | ---------- | ----------------- | -------------------------------- | ---------------------------- |
| RGB           | Aditivo    | Displays digitais | Simples, compatível com hardware | Não intuitivo                |
| HSV           | Cilíndrico | Edição de imagens | Intuitivo para ajustes           | Não linear                   |
| HSL           | Cilíndrico | Design web        | Separa luminosidade              | Menos usado em processamento |
| XYZ           | Científico | Pesquisa de cores | Base para outros espaços         | Não intuitivo                |
| LAB           | Perceptual | Indústria/design  | Uniformidade perceptiva          | Complexo                     |

## Conceitos de Visão Humana

### Espectro Visível

- **Faixa**: 400nm (violeta) - 700nm (vermelho)
- **Pico de sensibilidade**: ~555nm (verde-amarelo)

### Medidas de Luz

- **Radiância (W/sr·m²)**: Energia radiante total
- **Luminância (cd/m²)**: Intensidade percebida
- **Brilho**: Percepção subjetiva

## Conversões Práticas

### RGB para Grayscale

```python
# Método 1: Média simples
gray = (r + g + b) / 3

# Método 2: Perceptual (recomendado)
gray = 0.299*r + 0.587*g + 0.114*b
```

### RGB para CMYK (Impressão)

```python
c = 1 - r/255
m = 1 - g/255
y = 1 - b/255
k = min(c, m, y)
c = (c - k)/(1 - k) if (1 - k) != 0 else 0
m = (m - k)/(1 - k) if (1 - k) != 0 else 0
y = (y - k)/(1 - k) if (1 - k) != 0 else 0
```

## Curiosidades Científicas

### Cor do Sol

- **Percepção**: Branco-amarelado
- **Temperatura de cor**: ~5,778K
- **Pico espectral**: ~500nm (verde-azulado)
- **Razão da aparência amarela**: Dispersão de Rayleigh (mais eficiente para azuis)

### Metamerismo

Fenômeno onde cores com espectros diferentes parecem iguais sob certa iluminação

## Ferramentas Recomendadas

1. **Python**:

   - `colorsys` (conversões básicas)
   - `colormath` (conversões avançadas)
   - `OpenCV` (processamento de imagem)

2. **Online**:

   - Adobe Color Wheel
   - ColorSpace (gerador de paletas)

3. **Aplicativos**:
   - GIMP (editor com múltiplos espaços de cor)
   - Darktable (gerenciamento de cor profissional)
