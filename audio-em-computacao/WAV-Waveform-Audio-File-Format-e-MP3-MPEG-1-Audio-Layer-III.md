# Comparação: WAV vs MP3

## WAV (Waveform Audio File Format)
### Características Principais
- **Formato**: PCM não comprimido
- **Qualidade**: Máxima fidelidade (sem perdas)
- **Taxa de bits**: 1.411 kbps (CD quality)
- **Tamanho médio**: 10MB por minuto (estéreo 44.1kHz/16bit)

### Vantagens
✅ Preserva 100% dos dados originais
✅ Ideal para produção musical profissional
✅ Suporte universal em softwares de edição

### Limitações
⚠️ Arquivos extremamente grandes
⚠️ Ineficiente para streaming ou dispositivos móveis

## MP3 (MPEG-1 Audio Layer III)
### Características Principais
- **Formato**: Compressão lossy (com perdas)
- **Qualidade**: Ajustável (depende do bitrate)
- **Taxa de bits típica**: 128-320 kbps
- **Tamanho médio**: 1MB por minuto (128kbps)

### Vantagens
✅ Tamanho reduzido (até 90% menor que WAV)
✅ Perfeito para streaming e dispositivos móveis
✅ Amplamente compatível com todos os players

### Limitações
⚠️ Perda de qualidade audível em bitrates baixos
⚠️ Não recomendado para masterização

## Fluxograma de Decisão
```
[Precisa de máxima qualidade?]
       ↓
Sim → WAV (Edição/Produção)
       ↓
Não → [Precisa economizar espaço?]
             ↓
        Sim → MP3 (128-320kbps)
             ↓
        Não → AAC/FLAC (alternativas)
```

## Casos de Uso Ideais
| Cenário               | Formato Recomendado | Bitrate Ideal     |
|-----------------------|---------------------|-------------------|
| Gravação em estúdio   | WAV                 | 44.1kHz/24bit     |
| Streaming musical     | MP3                 | 256kbps           |
| Arquivo mestre        | WAV/FLAC            | 96kHz/24bit       |
| Podcast               | MP3                 | 128kbps (mono)    |
