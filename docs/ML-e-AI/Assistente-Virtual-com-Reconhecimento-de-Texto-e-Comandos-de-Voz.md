# Relatório: Assistente Virtual com Reconhecimento de Texto e Comandos de Voz

## Introdução

O projeto proposto teve como objetivo criar um assistente virtual que utiliza Processamento de Linguagem Natural (NLP) para tarefas específicas por meio de reconhecimento de voz. A ideia inicial incluía módulos para transformar texto em áudio (TTS) e fala em texto (STT), juntamente com funções automatizadas acionadas por comandos de voz.

## Métodos

### Configuração do Ambiente:

- Instalação de bibliotecas necessárias: pyaudio, SpeechRecognition, pyttsx3, wikipedia-api
- Instalação do pacote espeak

### Implementação de Módulos:

- **Módulo TTS**: Utilizou a biblioteca pyttsx3 para converter texto em fala
- **Módulo STT**: Utilizou a biblioteca SpeechRecognition para reconhecer fala e convertê-la em texto
- **Módulo de Execução de Comandos**: Implementou comandos específicos, como pesquisa na Wikipedia, abertura de sites e simulação da localização da farmácia mais próxima

### Simplificação do Projeto:

- Devido às limitações do ambiente Google Colab, que impede a execução interativa de comandos de voz, optou-se por aceitar comandos via texto
- A opção "Abrir site" foi aprimorada para permitir que o usuário insira o assunto do site desejado

## Implementação Completa

```python
# Instalação das bibliotecas necessárias
!apt-get update
!apt-get install -y espeak espeak-data libespeak1
!pip install SpeechRecognition pyaudio pyttsx3 wikipedia-api

# Importação das bibliotecas
import speech_recognition as sr
import pyttsx3
import wikipediaapi
import webbrowser
import time

# Inicialização do reconhecedor de voz e do motor TTS
recognizer = sr.Recognizer()
engine = pyttsx3.init()

# Configuração da voz em português
voices = engine.getProperty('voices')
engine.setProperty('voice', 'portuguese')

# Função para falar texto
def speak(text):
    print(f"Assistente: {text}")
    engine.say(text)
    engine.runAndWait()

# Função para reconhecer fala
def listen():
    with sr.Microphone() as source:
        print("Ouvindo...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        print("Reconhecendo...")
        command = recognizer.recognize_google(audio, language='pt-BR')
        print(f"Usuário: {command}")
        return command.lower()
    except sr.UnknownValueError:
        speak("Desculpe, não entendi. Pode repetir?")
        return listen()
    except sr.RequestError:
        speak("Desculpe, estou com problemas no serviço de reconhecimento de voz.")
        return None

# Função para pesquisa na Wikipedia
def search_wikipedia(query):
    wiki_wiki = wikipediaapi.Wikipedia('pt')
    page = wiki_wiki.page(query)

    if page.exists():
        speak(f"Encontrei informações sobre {query} na Wikipedia.")
        print(f"Resumo: {page.summary[:500]}...")  # Limita a 500 caracteres
        speak(page.summary[:500])
    else:
        speak(f"Desculpe, não encontrei informações sobre {query} na Wikipedia.")

# Função para abrir site
def open_website(topic):
    url = f"https://www.{topic}.com/"
    speak(f"Abrindo o site: {url}")
    webbrowser.open(url)

# Função para localizar farmácia
def find_pharmacy():
    speak("Simulando a localização da farmácia mais próxima.")
    speak("Com base em sua localização, a farmácia mais próxima fica a 1.2 km daqui.")
    speak("Endereço: Rua das Flores, 123 - Centro")

# Menu de comandos em modo texto (para uso no Colab)
def text_command_menu():
    while True:
        print("\nEscolha um comando:")
        print("1. Pesquisar na Wikipedia")
        print("2. Abrir site")
        print("3. Localizar a farmácia mais próxima")
        print("4. Encerrar")

        try:
            choice = input("Digite o número do comando desejado: ")

            if choice == "1":
                query = input("Digite o termo de pesquisa para a Wikipedia: ")
                search_wikipedia(query)
            elif choice == "2":
                topic = input("Digite o assunto do site que deseja visitar: ")
                open_website(topic)
            elif choice == "3":
                find_pharmacy()
            elif choice == "4":
                speak("Encerrando o assistente. Até logo!")
                break
            else:
                print("Opção inválida. Por favor, escolha uma opção de 1 a 4.")
        except Exception as e:
            print(f"Ocorreu um erro: {e}")

# Função principal com reconhecimento de voz
def voice_assistant():
    speak("Olá! Sou seu assistente virtual. Como posso ajudar?")

    while True:
        try:
            command = listen()

            if command is None:
                continue

            if "wikipedia" in command or "pesquisar" in command:
                speak("O que você gostaria de pesquisar na Wikipedia?")
                query = listen()
                if query:
                    search_wikipedia(query)

            elif "abrir site" in command or "site" in command:
                speak("Qual site você gostaria de visitar?")
                topic = listen()
                if topic:
                    open_website(topic)

            elif "farmácia" in command or "farmácia mais próxima" in command:
                find_pharmacy()

            elif "parar" in command or "encerrar" in command or "sair" in command:
                speak("Encerrando o assistente. Até logo!")
                break

            else:
                speak("Desculpe, não reconheci esse comando. Pode repetir?")

        except Exception as e:
            print(f"Ocorreu um erro: {e}")
            speak("Desculpe, ocorreu um erro. Vamos tentar novamente.")

# Execução principal
if __name__ == "__main__":
    # No Colab, usamos o menu de texto devido às limitações de acesso ao microfone
    speak("Bem-vindo ao assistente virtual! No ambiente Colab, usaremos comandos de texto.")
    text_command_menu()
```

## Resultados

O projeto resultou em um assistente virtual funcional capaz de receber comandos de texto e realizar ações como pesquisa na Wikipedia, abertura de sites e simulação da localização da farmácia mais próxima.

## Conclusão

A transformação do projeto inicial, que incluía reconhecimento de voz, para uma interação baseada em texto mais simples foi necessária para contornar as limitações do ambiente Colab. Apesar da simplificação, o assistente virtual ainda oferece funcionalidades úteis e uma experiência interativa.

## Contraste com a Ideia Inicial

A ideia inicial era criar um assistente totalmente baseado em voz, mas as restrições do ambiente exigiram uma abordagem mais centrada em texto. A mudança não apenas adaptou o projeto às limitações, mas também demonstrou flexibilidade no design de soluções.

## Estudo de Caso

Considere um usuário que deseja aprender sobre um tópico específico. Ele usa o assistente para pesquisar na Wikipedia digitando o comando "1" e inserindo o termo de pesquisa. A resposta é sintetizada em áudio, proporcionando uma experiência educacional sem exigir interações complexas.

Este projeto exemplifica como a adaptação é crucial em ambientes de desenvolvimento restritos, mantendo a eficácia e utilidade do produto final.

[![Abrir no Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Voice_Tech__Assistant__Hub.ipynb)

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Voice_Tech__Assistant__Hub.ipynb
