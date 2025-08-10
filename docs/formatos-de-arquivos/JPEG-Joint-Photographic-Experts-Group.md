# JPEG (Joint Photographic Experts Group)

## Introdução

O **JPEG** é um dos formatos de imagem mais populares e amplamente utilizados para fotografias digitais e imagens coloridas na web. Desenvolvido pelo Joint Photographic Experts Group, destaca-se por sua eficiência na compressão de imagens fotográficas.

---

## Características do Formato JPEG

### Compressão com Perdas

- Utiliza algoritmo de compressão **com perdas**, removendo detalhes redundantes para reduzir o tamanho do arquivo.
- Pode introduzir **artefatos de compressão** em níveis altos, especialmente em áreas com bordas nítidas ou texto.

### Profundidade de Cor

- Suporta:
  - **Tons de cinza** (8 bits por pixel)
  - **Cores RGB** (24 bits por pixel, 16.7 milhões de cores)
- Ideal para fotografias e imagens com gradientes complexos.

### Qualidade Ajustável

- Permite configurar **níveis de compressão** (1-100) para equilibrar:
  - Tamanho do arquivo (maior compressão = arquivo menor)
  - Qualidade visual (menor compressão = melhor qualidade)

### Compatibilidade

- Suportado por **todos os navegadores** e dispositivos.
- Formato padrão para câmeras digitais e plataformas web.

### Limitações

- **Não suporta transparência** (áreas transparentes são preenchidas com cor sólida).
- Não recomendado para:
  - Gráficos com texto
  - Imagens com bordas nítidas
  - Arquivos que exigem edições repetidas

---

## Implementação em Python

Exemplo de manipulação de imagens JPEG usando **Pillow (PIL)**:

```python
from PIL import Image

# Abrir uma imagem JPEG
imagem = Image.open('exemplo.jpg')

# Mostrar informações básicas
print(f"Dimensões: {imagem.width} x {imagem.height}")
print(f"Modo de cor: {imagem.mode}")

# Exibir a imagem
imagem.show()

# Salvar com qualidade personalizada (1-100)
imagem.save('exemplo_qualidade90.jpg', quality=90)

# Converter para PNG (sem perdas)
imagem.save('exemplo_convertido.png')

# Fechar o arquivo
imagem.close()
```

---

## Comparação com Outros Formatos

| Característica         | JPEG                      | PNG              | WebP                    |
| ---------------------- | ------------------------- | ---------------- | ----------------------- |
| **Tipo de Compressão** | Com perdas                | Sem perdas       | Com/Sem perdas          |
| **Transparência**      | ❌ Não                    | ✅ Alpha-channel | ✅ Alpha-channel        |
| **Melhor para**        | Fotografias               | Gráficos/Texto   | Web (fotos/gráficos)    |
| **Tamanho Arquivo**    | Pequeno (alta compressão) | Grande           | Muito pequeno (vs JPEG) |

---

## Otimização de JPEG

1. **Qualidade 70-90%**: Equilíbrio ideal para web.
2. **Redimensionamento**: Diminuir dimensões reduz drasticamente o tamanho.
3. **Ferramentas**:
   - `jpegtran` (otimização sem perdas)
   - Adobe Photoshop "Save for Web"
4. **Evitar Recompressões**: Cada salvamento degrada a qualidade.

---

## Casos de Uso Ideais

- **Fotografias online** (redes sociais, sites)
- **Galeria de produtos** em e-commerce
- **Banners e imagens** com gradientes complexos
- **Situações onde tamanho do arquivo > qualidade perfeita**

---

## Considerações Finais

- **Vantagens**:
  - Tamanho compacto ideal para web
  - Suporte universal
  - Excelente para fotos reais
- **Desvantagens**:
  - Artefatos visíveis em alta compressão
  - Não adequado para múltiplas edições
- **Recomendação**:
  - Use JPEG como formato final para imagens fotográficas
  - Para edição, mantenha versões em TIFF/PSD
