# MJPEG (Motion JPEG)

## Introdução

O **MJPEG (Motion JPEG)** é um método de compressão de vídeo que codifica cada quadro individualmente como uma imagem JPEG. Diferente de formatos como MPEG, não utiliza compressão entre quadros, sendo ideal para aplicações que exigem edição quadro a quadro ou processamento individual de imagens.

---

## Características Principais

### Definição Técnica

- **Compressão intraquadro**: Cada frame é comprimido como JPEG independente
- **Sem dependência temporal**: Quadros não referenciam frames anteriores/posteriores
- **Latência mínima**: Ideal para transmissão em tempo real

### Formatos de Armazenamento

- Pode ser encapsulado em:
  - `.avi` (formato mais antigo mas amplamente compatível)
  - `.mov` (usado em ecossistema Apple)
  - `.mjpeg` (formato cru, menos comum)

### Especificações Técnicas

| Parâmetro    | Detalhe                                     |
| ------------ | ------------------------------------------- |
| Resolução    | Até 4K (depende do codec)                   |
| Taxa de Bits | 30-50% maior que H.264 para mesma qualidade |
| Cores        | 4:2:0 ou 4:2:2 (subamostragem típica)       |

---

## Aplicações Práticas

### Principais Usos

1. **Vigilância e Segurança**

   - Câmeras IP antigas
   - Sistemas DVR/NVR legados

2. **Médico**

   - Endoscopias digitais
   - Equipamentos de ultrassom

3. **Industrial**
   - Inspeção de produção
   - Visão computacional

### Comparação com Outros Formatos

| Característica | MJPEG       | MPEG-4/H.264 | HEVC/H.265           |
| -------------- | ----------- | ------------ | -------------------- |
| **Compressão** | Intraquadro | Interquadro  | Interquadro avançado |
| **Tamanho**    | Grande      | Médio        | Pequeno              |
| **Edição**     | Fácil       | Complexa     | Muito complexa       |
| **Latência**   | Muito baixa | Média        | Alta                 |

---

## Implementação em Python

### Processamento Básico com OpenCV

```python
import cv2

# Capturar stream MJPEG (ex: câmera IP)
url = "http://ip:camera/video.mjpeg"
cap = cv2.VideoCapture(url)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Processar frame (ex: detecção de objetos)
    cv2.imshow('Stream MJPEG', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

### Conversão para MP4

```python
import subprocess

subprocess.run([
    'ffmpeg',
    '-i', 'entrada.mjpeg',
    '-c:v', 'libx264',
    'saida.mp4'
])
```

---

## Limitações e Soluções

### Problemas Comuns

1. **Tamanho de Arquivo**

   - _Solução_: Usar armazenamento cíclico

2. **Falta de Áudio**

   - _Solução_: Adicionar trilha de áudio separada

3. **Compatibilidade**
   - _Solução_: Converter para H.264

---

## Conclusão

### Vantagens

- Simplicidade de implementação
- Qualidade consistente
- Acesso aleatório fácil

### Tendências

- Sendo substituído por H.265/AV1 em novos projetos
- Ainda relevante em nichos industriais
