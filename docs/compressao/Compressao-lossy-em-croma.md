# Compressão Lossy em Croma

## Conceitos Fundamentais

Técnica de compressão que reduz seletivamente informações de cor (croma) para diminuir o tamanho de arquivos de imagem/vídeo, mantendo a qualidade visual aceitável.

## Modelos de Cor Aplicáveis

- **YCbCr**: Separa luminância (Y) de componentes de cor (Cb, Cr)
- **YUV**: Similar ao YCbCr, usado em sistemas analógicos

## Técnicas Principais

### Subamostragem de Croma

Método mais comum para compressão lossy em croma:

| Formato | Resolução Croma           | Redução |
| ------- | ------------------------- | ------- |
| 4:4:4   | Full resolution           | 0%      |
| 4:2:2   | 1/2 horizontal            | 33%     |
| 4:2:0   | 1/2 horizontal e vertical | 50%     |

### Processo Típico

1. Conversão RGB → YCbCr
2. Aplicação de filtro passa-baixa nas componentes Cb/Cr
3. Redução de resolução (subamostragem)
4. Codificação final (ex: com DCT + quantização)

## Impacto na Qualidade

- **Vantagens**:

  - Redução de 25-50% no tamanho
  - Pouco perceptível para o olho humano na maioria dos casos

- **Limitações**:
  - Artefatos em gradientes suaves
  - Perda de detalhes em texturas coloridas
  - Bordas coloridas podem ficar desfocadas

## Aplicações Práticas

- **Streaming**: YouTube, Netflix (H.264/HEVC)
- **TV Digital**: Padrões ATSC, DVB
- **Fotografia**: JPEG (4:2:0 comum)
- **Videochamadas**: Zoom, Teams

## Otimizações Comuns

- **Máscaras de Qualidade**: Preservar croma em áreas críticas
- **Adaptação Dinâmica**: Ajustar subamostragem por cena
- **Compensação de Bordas**: Filtros pós-processamento

## Exemplo Prático (FFmpeg)

```bash
# Converter para YUV420 (subamostragem 4:2:0)
ffmpeg -i input.mp4 -pix_fmt yuv420p output.mp4
```

## Conclusão

Técnica essencial para:

- Redução eficiente de dados de vídeo
- Manutenção da qualidade perceptual
- Aplicações onde banda/armazenamento são limitados

_O balanceamento ideal entre compressão e qualidade depende do caso de uso específico._
