# PNG (Portable Network Graphics)

## Introdução

O formato **PNG (Portable Network Graphics)** é um formato de arquivo de imagem **sem perda** desenvolvido como uma alternativa livre de patentes ao formato GIF. Projetado para superar limitações do GIF, o PNG oferece suporte a mais cores e melhor compressão sem perda, tornando-o ideal para gráficos e imagens de alta qualidade.

---

## Características do Formato PNG

### Compressão Sem Perda

- Utiliza um algoritmo de compressão **sem perda**, preservando a qualidade da imagem ao comprimir e descomprimir.
- Ideal para gráficos e imagens que exigem alta fidelidade.

### Suporte a Cores

- Suporta múltiplos modos de cores:
  - **Tons de cinza** (8 bits por pixel).
  - **Paleta indexada** (até 256 cores).
  - **Truecolor** (24 bits por pixel, 16 milhões de cores).

### Transparência

- Oferece suporte a **transparência alpha-channel**, permitindo que partes da imagem sejam completamente transparentes.
- Útil para sobrepor imagens em diferentes fundos sem bordas visíveis.

### Metadados

- Pode armazenar informações como:
  - Texto (títulos, descrições).
  - Direitos autorais.
  - Dados de cor.
- Ideal para uso profissional e arquivamento.

### Interlacing

- Suporta carregamento **progressivo** (interlaced), melhorando a percepção de carregamento em redes lentas.

---

## Comparação com Outros Formatos

### GIF vs PNG

| Característica | GIF             | PNG                        |
| -------------- | --------------- | -------------------------- |
| Cores          | Até 256         | Até 16 milhões             |
| Transparência  | Básica (1 cor)  | Alpha-channel              |
| Compressão     | Sem perda (LZW) | Sem perda (mais eficiente) |

### JPEG vs PNG

| Característica     | JPEG          | PNG                  |
| ------------------ | ------------- | -------------------- |
| Tipo de Compressão | Com perda     | Sem perda            |
| Melhor para        | Fotografias   | Gráficos/Ilustrações |
| Transparência      | Não suportada | Suportada            |

---

## Implementação em Python

Exemplo de manipulação de arquivos PNG usando a biblioteca **Pillow (PIL)**:

```python
from PIL import Image

# Abrir um arquivo PNG
png_path = 'example.png'
png_image = Image.open(png_path)

# Mostrar informações básicas
print(f"Formato: {png_image.format}")
print(f"Modo: {png_image.mode}")
print(f"Tamanho: {png_image.size}")

# Exibir a imagem
png_image.show()

# Fechar o arquivo
png_image.close()
```

---

## Considerações Finais

- O PNG é **versátil e amplamente suportado**, combinando qualidade de imagem com compressão sem perda e transparência avançada.
- Ideal para:
  - Gráficos simples.
  - Ilustrações e logotipos.
  - Imagens que exigem detalhes nítidos e precisão de cores.
- A escolha entre PNG, GIF e JPEG depende de:
  - Tipo de conteúdo.
  - Necessidade de transparência.
  - Requisitos de compressão.
