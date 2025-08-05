# H.265 / HEVC (High Efficiency Video Coding)

---

## Introdução

O **H.265 (HEVC)** é o sucessor do H.264, oferecendo **ganhos significativos em eficiência de compressão**, especialmente para vídeos em altas resoluções como 4K e 8K.

---

## Principais Características

### 1. Eficiência de Compressão

- **Redução de Bitrate**:
  - Pode reduzir o bitrate em **~50%** mantendo a mesma qualidade visual do H.264.
  - Exemplo: Um vídeo de 10 Mbps em H.264 pode ter qualidade similar com **5 Mbps em H.265**.

### 2. Suporte a Resoluções Altas

- **4K e 8K**:
  - Otimizado para transmissão e armazenamento de vídeos ultra-HD.
  - Ideal para streaming (ex.: Netflix, YouTube) e dispositivos com limitações de largura de banda.

### 3. Tipos de Quadros

- **I-frames**, **P-frames**, e **B-frames**:
  - Mesma estrutura do H.264, mas com algoritmos de compressão mais avançados.

### 4. Suporte de Hardware

- **Decodificação Dedicada**:
  - Presente em processadores modernos (Intel, AMD), GPUs (NVIDIA, AMD) e dispositivos móveis (Apple A-series, Snapdragon).

---

## Comparação: H.265 vs. H.264

| **Critério**   | **H.265 (HEVC)**                       | **H.264 (AVC)**                                 |
| -------------- | -------------------------------------- | ----------------------------------------------- |
| **Eficiência** | 50% menor bitrate para mesma qualidade | Menos eficiente em altas resoluções             |
| **Resolução**  | Ideal para 4K/8K                       | Limitado a 1080p/4K com maior bitrate           |
| **Hardware**   | Requer mais poder de processamento     | Amplamente compatível                           |
| **Uso**        | Streaming 4K, armazenamento eficiente  | Transmissões tradicionais, dispositivos antigos |

---

## Implementação em Programação

### Bibliotecas e Ferramentas

- **FFmpeg**:
  ```bash
  ffmpeg -i input.mp4 -c:v libx265 output.mp4
  ```
- **x265**: Biblioteca open-source para codificação H.265.
- **libavcodec**: Suporte a múltiplos codecs (incluindo HEVC).

### Exemplo Prático (FFmpeg)

```bash
# Codificar vídeo para H.265 com taxa de bits constante (CRF)
ffmpeg -i entrada.mkv -c:v libx265 -crf 28 -preset medium saida.mkv
```

- **CRF 28**: Balanço entre qualidade e tamanho do arquivo (quanto menor, melhor a qualidade).

---

## Considerações de Uso

### Quando Escolher H.265?

- **Vantagens**:
  - Vídeos em **4K/8K**.
  - Otimização de **armazenamento** e **banda larga**.
- **Desvantagens**:
  - Maior demanda de hardware para decodificação.
  - Patentes/licenças podem limitar adoção em alguns cenários.

---

## Conclusão

O **H.265/HEVC** é a escolha ideal para:

- **Streaming de alta qualidade** (ex.: serviços premium).
- **Aplicações com restrição de banda** (ex.: videoconferência 4K).
- **Armazenamento eficiente** de vídeos ultra-HD.

_Para projetos que exigem compatibilidade máxima, o H.264 ainda é relevante, mas o H.265 domina em eficiência e futuro-proofing._
