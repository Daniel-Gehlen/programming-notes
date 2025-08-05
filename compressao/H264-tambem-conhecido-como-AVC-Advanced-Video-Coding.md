# H.264 / AVC (Advanced Video Coding)

---

## Introdução

O **H.264 (AVC)** é um padrão de compressão de vídeo desenvolvido pelo **ITU-T** e **MPEG**, amplamente adotado para streaming, TV digital e armazenamento.

---

## Principais Características

### 1. Técnicas de Compressão

- **Inter-frame Compression**:
  - Predição de movimento entre quadros para reduzir redundâncias.
- **Tipos de Quadros**:
  | Tipo | Descrição |
  |------------|---------------------------------------------------------------------------|
  | **I-frame** | Quadro completo (chave), independente de outros. Base para decodificação. |
  | **P-frame** | Codificado com base em diferenças do I-frame ou P-frame anterior. |
  | **B-frame** | Usa referências bidirecionais (quadros passados e futuros) para máxima compressão. |

### 2. Eficiência

- **50% menor bitrate** que MPEG-2 para mesma qualidade.
- Suporta resoluções de **SD (480p) até 4K** (com ajustes).

### 3. Suporte Universal

- **Hardware**: Presente em smartphones, TVs inteligentes, câmeras IP e consoles.
- **Software**: YouTube, Netflix, Blu-ray, videoconferência (Zoom, Teams).

---

## Comparação: H.264 vs. H.265 (HEVC)

| **Critério**        | **H.264 (AVC)**                          | **H.265 (HEVC)**             |
| ------------------- | ---------------------------------------- | ---------------------------- |
| **Bitrate**         | ~2× maior que H.265 para mesma qualidade | 50% mais eficiente           |
| **Resolução**       | Até 4K (com alto bitrate)                | Otimizado para 4K/8K         |
| **Compatibilidade** | Quase universal                          | Requer hardware mais recente |
| **Uso**             | Streaming geral, dispositivos antigos    | Conteúdo premium (4K, HDR)   |

---

## Implementação em Programação

### Bibliotecas e Ferramentas

- **FFmpeg**:
  ```bash
  # Codificar para H.264
  ffmpeg -i input.mp4 -c:v libx264 -crf 23 output.mp4
  ```
  - `-crf 23`: Balanço qualidade/tamanho (0=lossless, 51=pior qualidade).
- **x264**: Biblioteca open-source para codificação H.264.
- **libavcodec**: Suporte a múltiplos codecs (incluindo AVC).

### Exemplo de Decodificação (FFmpeg)

```bash
# Converter H.264 para formato não comprimido
ffmpeg -i input.mp4 -c:v rawvideo output.avi
```

---

## Aplicações Práticas

### 1. **Streaming**

- **Plataformas**: YouTube (720p/1080p), Twitch, Facebook Live.
- **Vantagem**: Largura de banda acessível e compatibilidade com dispositivos antigos.

### 2. **Armazenamento**

- **Blu-ray**: Filmes em 1080p com alta qualidade.
- **Câmeras de Segurança**: Eficiência em gravações contínuas.

### 3. **Videoconferência**

- **Zoom/Teams**: Baixa latência e adaptação a conexões instáveis.

---

## Considerações Finais

### Quando Usar H.264?

- **Prós**:
  - Compatibilidade quase universal.
  - Hardware menos exigente.
- **Contras**:
  - Menos eficiente para 4K+ vs. H.265.

### Configurações Recomendadas

- **Perfil**: `High` (melhor qualidade para 1080p).
- **Bitrate**: Ajuste conforme resolução (ex.: 5 Mbps para 1080p).

---

## Conclusão

O **H.264** permanece como o **padrão dominante** para:

- Transmissão de vídeo acessível.
- Dispositivos com hardware limitado.
- Aplicações que priorizam compatibilidade sobre eficiência extrema.

_Para projetos futuros com 4K/8K, avalie a migração para H.265, mas o H.264 ainda é a escolha segura para a maioria dos cenários._
