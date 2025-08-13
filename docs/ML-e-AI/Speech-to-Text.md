# Ferramentas Open-Source para Conversão de Fala em Texto (STT)

## Principais Soluções

### 1. Whisper (OpenAI) - Recomendado para Alta Precisão

- **Características**:
  - Modelos variados (pequeno, médio, grande)
  - Suporte para 50+ idiomas
  - Fácil integração via Python
- **Instalação**:
  ```bash
  pip install openai-whisper
  ```
- **Uso básico**:
  ```python
  import whisper
  model = whisper.load_model("base")
  result = model.transcribe("audio.mp3")
  print(result["text"])
  ```

### 2. Vosk - Melhor para Uso Offline

- **Vantagens**:
  - Funciona sem internet
  - Modelos compactos (para dispositivos móveis)
  - Multiplataforma (Python, Java, C#, etc.)
- **Modelos disponíveis**: [alphacephei.com/vosk/models](https://alphacephei.com/vosk/models)

### 3. Mozilla DeepSpeech - Para Projetos Customizáveis

- **Destaques**:
  - Baseado no TensorFlow
  - Permite treinamento personalizado
  - Usa dados do Common Voice
- **Fluxo de trabalho**:
  1. Baixar modelo pré-treinado
  2. Converter áudio para features
  3. Executar inferência

## Comparativo Técnico

| Ferramenta        | Offline | Idiomas | Dificuldade | Casos de Uso            |
| ----------------- | ------- | ------- | ----------- | ----------------------- |
| Whisper           | Sim     | 50+     | Fácil       | Transcrição geral       |
| Vosk              | Sim     | 20+     | Moderada    | Aplicações embarcadas   |
| DeepSpeech        | Sim     | 10+     | Difícil     | Pesquisa/Personalização |
| SpeechRecognition | Não\*   | 100+    | Muito fácil | Prototipagem rápida     |

\*Depende do backend utilizado

## Soluções Especializadas

### Para Sistemas Embarcados:

- **PocketSphinx**: Extremamente leve
- **Julius**: Otimizado para tempo real

### Para Pesquisa Avançada:

- **Kaldi**: Framework completo para ASR
- **Wav2Vec 2.0**: Modelo auto-supervisionado

## Guia Rápido de Implementação

1. **Para projetos simples**:

   ```python
   import speech_recognition as sr
   r = sr.Recognizer()
   with sr.AudioFile("audio.wav") as source:
       audio = r.record(source)
   text = r.recognize_google(audio, language="pt-BR")
   ```

2. **Para máxima precisão**:

   - Usar Whisper com modelo "large"
   - Pré-processar áudio (remover ruído)

3. **Para dispositivos IoT**:
   - Combinar Vosk com Raspberry Pi
   - Usar modelos pequenos (<=50MB)

## Considerações Finais

**Para iniciantes**: SpeechRecognition (Python)
**Para produção offline**: Vosk
**Para pesquisa**: Kaldi ou Wav2Vec 2.0
**Para máxima qualidade**: Whisper

Todos os projetos estão em ativo desenvolvimento e aceitam contribuições da comunidade.
