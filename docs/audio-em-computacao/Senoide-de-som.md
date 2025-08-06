# Digitalização de Sinais Sonoros

## Processo de Digitalização de Áudio

### 1. Amostragem
- Captura do sinal analógico em intervalos regulares
- Taxa típica em CDs: 44.100 amostras/segundo (44.1 kHz)
- Determina a máxima frequência capturável (Teorema de Nyquist)

### 2. Quantização
- Conversão da amplitude contínua em valores discretos
- Resolução padrão em CDs: 16 bits (65.536 níveis possíveis)
- Mais bits = maior precisão na representação

### 3. Codificação Binária
- Cada valor quantizado é convertido para código binário
- Exemplo com 4 bits: 16 níveis possíveis (2⁴)

## Representação Visual

```
        ▲
        |         • •
        |       •     •
        |     •         •
Nível   |   •             •
        | •                 •
        +--------------------►
            Tempo
```

- Pontos (•) representam amostras discretas
- Linha tracejada mostra a reconstrução do sinal

## Fatores de Qualidade

### Taxa de Amostragem
- 44.1 kHz: padrão CD (cobre até 22.05 kHz)
- 48 kHz/96 kHz: usados em áudio profissional

### Resolução de Bits
- 16 bits: padrão CD (96 dB de faixa dinâmica)
- 24 bits: áudio de alta resolução (144 dB teóricos)

## Aplicações Práticas
- Sistemas de gravação digital
- Streaming de áudio
- Telefonia digital
- Processamento de sinais
