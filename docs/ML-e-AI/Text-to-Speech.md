# Ferramentas de Text-to-Speech (TTS) Open-Source

## Soluções Completas para Windows

### 1. Coqui TTS (Recomendado para qualidade avançada)

- **Tipo**: Biblioteca Python baseada em deep learning
- **Recursos**:
  - Vozes naturalistas com expressão emocional
  - Suporte multilíngue (incluindo português)
  - Geração local de arquivos de áudio
- **Instalação**:
  ```bash
  pip install TTS
  ```
- **Uso básico**:
  ```python
  from TTS.api import TTS
  tts = TTS(model_name="tts_models/multilingual/multi-dataset/your_tts")
  tts.tts_to_file(text="Seu texto aqui", file_path="output.wav")
  ```

### 2. MaryTTS (Solução completa com servidor local)

- **Destaques**:
  - Interface web integrada
  - Vozes de alta qualidade
  - Configuração personalizável
- **Como usar**:
  1. Baixar do [site oficial](http://mary.dfki.de/)
  2. Executar `marytts-server.bat`
  3. Acessar `http://localhost:59125`

### 3. RHVoice + Balabolka (Solução mais simples)

- **Configuração rápida**:
  1. Instalar [Balabolka](http://www.cross-plus-a.com/pt/balabolka.htm)
  2. Baixar vozes do [RHVoice](https://github.com/RHVoice/RHVoice)
  3. Configurar no Balabolka: Configurações > Voz

## Soluções Leves e Especializadas

| Ferramenta | Idioma Principal | Destaque                 |
| ---------- | ---------------- | ------------------------ |
| eSpeak NG  | Multilíngue      | Extremamente leve        |
| Flite      | Inglês           | Para sistemas embarcados |
| OpenJTalk  | Japonês          | Otimizado para HMM       |
| Pico TTS   | Multilíngue      | Para dispositivos móveis |

## Configuração de Vozes no Windows

1. Adicionar idioma:

   - `Win + I` > Tempo e Idioma > Adicionar idioma (ex: Português Brasil)

2. Instalar vozes:

   - Selecionar idioma > Opções > Adicionar voz

3. Usar com Balabolka:
   - Selecionar voz instalada (ex: "Microsoft Helena")

## Comparativo de Recursos

| Ferramenta | Offline | Emoções | Multilíngue | Qualidade  |
| ---------- | ------- | ------- | ----------- | ---------- |
| Coqui TTS  | Sim     | Sim     | Sim         | Alta       |
| MaryTTS    | Sim     | Parcial | Sim         | Média-Alta |
| RHVoice    | Sim     | Não     | Sim         | Média      |
| gTTS       | Não     | Não     | Sim         | Alta       |

**Recomendação final**:

- Para máxima qualidade: **Coqui TTS**
- Para simplicidade: **Balabolka com vozes do Windows**
- Para sistemas leves: **eSpeak NG ou Flite**
