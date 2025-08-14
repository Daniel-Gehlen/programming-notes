# Compressão de Dados: Lossy vs Lossless

## Conceitos Fundamentais

| Característica         | Lossless (Sem Perda)    | Lossy (Com Perda)                 |
| ---------------------- | ----------------------- | --------------------------------- |
| **Princípio**          | Preserva todos os dados | Descarta dados menos perceptíveis |
| **Qualidade**          | Idêntica ao original    | Reduzida (controladamente)        |
| **Taxa de Compressão** | Moderada (2:1 a 4:1)    | Alta (10:1 a 100:1+)              |
| **Reversibilidade**    | Total                   | Irreversível                      |

---

## Formatos Populares

### 🖼️ **Imagens**

- **Lossless**: PNG, WebP (lossless), TIFF
  ```markdown
  # Melhor para: gráficos, screenshots, imagens com texto
  ```
- **Lossy**: JPEG, WebP (lossy), HEIF
  ```markdown
  # Melhor para: fotos, banners web
  ```

### 🎵 **Áudio**

- **Lossless**: FLAC, ALAC, WAV
  ```markdown
  # Uso típico: produção musical, audiófilos
  ```
- **Lossy**: MP3, AAC, Ogg Vorbis
  ```markdown
  # Uso típico: streaming, podcasts
  ```

### 🎥 **Vídeo**

- **Lossless**: FFV1, HuffYUV
  ```markdown
  # Raro: usado em arquivamento profissional
  ```
- **Lossy**: H.264/AVC, H.265/HEVC, AV1
  ```markdown
  # Dominante: streaming (Netflix, YouTube)
  ```

---

## Técnicas de Compressão

### Lossless

✅ **Dicionário**: LZW (GIF), DEFLATE (PNG/ZIP)
✅ **Entropia**: Huffman, Arithmetic Coding

### Lossy

🔇 **Amostragem Seletiva**:

- JPEG: Elimina altas frequências
- MP3: Remove frequências inaudíveis

---

## Quando Usar Cada Tipo?

### Lossless (✅ Priorize quando...)

- Dados exatos são críticos (ex: bancos de dados)
- Edições múltiplas são necessárias
- Arquivos pequenos (ex: logos vetoriais)

### Lossy (✅ Aceitável quando...)

- Distribuição web/streaming
- Armazenamento de mídia pessoal
- Uso em dispositivos com espaço limitado

---

## Comparação Prática (Exemplo: Imagem 10MB)

| Métrica       | PNG (Lossless) | JPEG (Lossy 80%) |
| ------------- | -------------- | ---------------- |
| Tamanho Final | ~5MB           | ~0.8MB           |
| Qualidade     | 100% original  | ~90% perceptível |
| Melhor para   | Impressão      | Website          |

---

## Mitos Comuns

❌ **"JPEG sempre perde qualidade"**
→ Na verdade, JPEG 100% é tecnicamente lossless (mas raramente usado)

❌ **"Lossless é sempre maior"**
→ Para gráficos simples, PNG pode ser menor que JPEG

---

## Conclusão

A escolha depende do **uso final**:

- **Profissionais criativos**: Prefiram lossless para edição
- **Consumidores finais**: Lossy oferece melhor equilíbrio

_Dica pro Dev_: Use `mozjpeg` para JPEGs otimizados sem perda visível de qualidade.
