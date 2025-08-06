# Tipos de Arquivos: Diferenças

## Estruturas Fundamentais

### 1. Imagens

- **Formato**: Matriz bidimensional de pixels
- **Representação de cor**:
  - Grayscale: 8 bits (1 byte) por pixel
  - RGB: 24 bits (3 bytes) por pixel
  - RGBA: 32 bits (4 bytes) por pixel
- **Formatos comuns**: JPEG, PNG, BMP, GIF

### 2. Texto

- **Estrutura**: Sequência de caracteres codificados
- **Codificações**:
  - ASCII: 7 bits por caractere
  - UTF-8: 1-4 bytes por caractere
  - UTF-16: 2-4 bytes por caractere
- **Formatos comuns**: TXT, CSV, JSON, XML

### 3. Áudio

- **Composição**: Sequência de amostras de som
- **Características**:
  - PCM (WAV): 8-32 bits por amostra
  - Taxa de amostragem: 44.1 kHz, 48 kHz, etc.
- **Formatos comuns**: MP3, WAV, AAC, FLAC

### 4. Vídeo

- **Estrutura**: Sequência de quadros + trilha de áudio
- **Componentes**:
  - Quadros: Imagens individuais
  - Taxa de quadros: 24fps, 30fps, 60fps
- **Formatos comuns**: MP4, AVI, MKV, MOV

### 5. Redes e Mensageria

- **Organização**: Pacotes com cabeçalho e payload
- **Componentes**:
  - Cabeçalho: Metadados (endereço, protocolo)
  - Dados: Conteúdo da mensagem
- **Exemplos**: TCP/IP, MQTT, HTTP

## Comparação Binária

| Tipo        | Exemplo Binário (início)      | Tamanho Típico |
| ----------- | ----------------------------- | -------------- |
| Imagem      | `89 50 4E 47 0D 0A...` (PNG)  | KBs-MBs        |
| Texto       | `48 65 6C 6C 6F...` ("Hello") | Bytes-KBs      |
| Áudio       | `52 49 46 46 24 08...` (WAV)  | MBs            |
| Vídeo       | `00 00 00 20 66 74...` (MP4)  | MBs-GBs        |
| Pacote Rede | `47 45 54 20 2F...` (HTTP)    | Bytes-KBs      |

## Exemplos Práticos

### Imagem PNG em Python

```python
from PIL import Image
import numpy as np

# Cria imagem RGB 2x2
data = np.array([
    [[255,0,0], [0,255,0]],
    [[0,0,255], [255,255,0]]
], dtype=np.uint8)

Image.fromarray(data, 'RGB').save('image.png')
```

### Arquivo de Texto

```python
text = "Hello, World!"
with open('text.txt', 'w') as f:
    f.write(text)
```

### Áudio WAV

```python
import wave
import numpy as np

# Gera tom de 440Hz
t = np.linspace(0, 1, 44100)
data = (np.sin(2*np.pi*440*t)*32767).astype(np.int16)

with wave.open('sound.wav', 'w') as f:
    f.setnchannels(1)
    f.setsampwidth(2)
    f.setframerate(44100)
    f.writeframes(data.tobytes())
```

## Considerações Finais

- **Imagens**: Otimizadas para representação visual compacta
- **Texto**: Foco em codificação de caracteres universal
- **Áudio**: Balanceamento entre qualidade e tamanho
- **Vídeo**: Combinação complexa de imagens e áudio
- **Redes**: Eficiência na transmissão de dados
