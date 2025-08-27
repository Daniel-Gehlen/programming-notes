# Relatório: Assistente Virtual para Automação Residencial

## Introdução

O projeto visa criar um assistente virtual para automação residencial, incorporando redes neurais para interpretação de comandos de voz e simulando dispositivos Arduino, motores, lâmpadas, sirenes e outros elementos de automação. O principal objetivo é proporcionar uma experiência interativa e educacional, com foco na integração de tecnologias diversas.

## Tecnologias Utilizadas

### Linguagem de Programação

- **Python 3.8+**

### Bibliotecas Principais

```python
# Reconhecimento de voz
import speech_recognition as sr

# Simulação e controle
import time
import threading
import random

# Interface do usuário
import ipywidgets as widgets
from IPython.display import display, clear_output, Audio

# Visualização
import matplotlib.pyplot as plt
import numpy as np

# Utilitários
import warnings
warnings.filterwarnings('ignore')
```

## Métodos

### 1. Interpretação de Comandos

- Uso da biblioteca SpeechRecognition para interpretação de comandos de voz
- Opção de entrada de texto para maior acessibilidade e interação

### 2. Simulação de Dispositivos

- Simulação de ações para acender lâmpadas, apagar lâmpadas e ativar sirenes
- Interação do usuário através de um menu simples

### 3. Interface Interativa

- Desenvolvimento de uma interface intuitiva com botões e indicadores visuais
- Feedback em tempo real do estado dos dispositivos

## Implementação Completa

```python
# Instalação das bibliotecas necessárias
!pip install SpeechRecognition ipywidgets

# Importação das bibliotecas
import speech_recognition as sr
import time
import threading
import random
import ipywidgets as widgets
from IPython.display import display, clear_output, Audio, HTML
import matplotlib.pyplot as plt
import numpy as np
import warnings
warnings.filterwarnings('ignore')

# Classe principal do sistema de automação residencial
class HomeAutomationSystem:
    def __init__(self):
        # Estado dos dispositivos
        self.lamp_status = False
        self.siren_status = False
        self.motor_status = False
        self.temperature = 22.0  # Temperatura ambiente em Celsius

        # Configuração do reconhecedor de voz
        self.recognizer = sr.Recognizer()
        self.microphone = sr.Microphone()

        # Configuração da interface
        self.setup_interface()

        # Inicializar thread para monitoramento de sensores
        self.sensor_thread = threading.Thread(target=self.monitor_sensors, daemon=True)
        self.sensor_thread.start()

        print("Sistema de Automação Residencial Inicializado!")
        print("Estado inicial:")
        print(f"  - Lâmpada: {'Acesa' if self.lamp_status else 'Apagada'}")
        print(f"  - Sirene: {'Ativa' if self.siren_status else 'Inativa'}")
        print(f"  - Motor: {'Ligado' if self.motor_status else 'Desligado'}")
        print(f"  - Temperatura: {self.temperature}°C")

    def setup_interface(self):
        """Configura a interface visual do sistema"""
        # Criar widgets
        self.lamp_indicator = widgets.Button(
            description='LÂMPADA: APAGADA',
            button_style='',
            disabled=True,
            layout=widgets.Layout(width='200px', height='60px')
        )

        self.siren_indicator = widgets.Button(
            description='SIRENE: INATIVA',
            button_style='',
            disabled=True,
            layout=widgets.Layout(width='200px', height='60px')
        )

        self.motor_indicator = widgets.Button(
            description='MOTOR: DESLIGADO',
            button_style='',
            disabled=True,
            layout=widgets.Layout(width='200px', height='60px')
        )

        self.temp_display = widgets.FloatSlider(
            value=self.temperature,
            min=15,
            max=35,
            step=0.1,
            description='Temperatura:',
            disabled=True,
            continuous_update=False,
            orientation='horizontal',
            readout=True,
            readout_format='.1f'
        )

        # Botões de controle
        self.lamp_button = widgets.Button(
            description='Alternar Lâmpada',
            button_style='warning',
            tooltip='Clique para alternar o estado da lâmpada'
        )

        self.siren_button = widgets.Button(
            description='Alternar Sirene',
            button_style='danger',
            tooltip='Clique para alternar o estado da sirene'
        )

        self.motor_button = widgets.Button(
            description='Alternar Motor',
            button_style='info',
            tooltip='Clique para alternar o estado do motor'
        )

        self.voice_button = widgets.Button(
            description='Comando de Voz',
            button_style='success',
            tooltip='Clique para dar um comando de voz'
        )

        # Conectar funções aos botões
        self.lamp_button.on_click(self.toggle_lamp)
        self.siren_button.on_click(self.toggle_siren)
        self.motor_button.on_click(self.toggle_motor)
        self.voice_button.on_click(self.voice_command)

        # Layout da interface
        self.control_panel = widgets.VBox([
            widgets.HTML("<h2>Painel de Controle - Automação Residencial</h2>"),
            widgets.HBox([self.lamp_indicator, self.siren_indicator, self.motor_indicator]),
            self.temp_display,
            widgets.HTML("<h3>Controles:</h3>"),
            widgets.HBox([self.lamp_button, self.siren_button, self.motor_button]),
            self.voice_button,
            widgets.HTML("<h3>Comandos de Voz Disponíveis:</h3>"),
            widgets.HTML("<ul>"
                        "<li>'Ligar luz' ou 'Acender lâmpada'</li>"
                        "<li>'Desligar luz' ou 'Apagar lâmpada'</li>"
                        "<li>'Ativar sirene' ou 'Ligar alarme'</li>"
                        "<li>'Desativar sirene' ou 'Desligar alarme'</li>"
                        "<li>'Ligar motor' ou 'Ativar ventilador'</li>"
                        "<li>'Desligar motor' ou 'Parar ventilador'</li>"
                        "</ul>")
        ])

    def update_indicators(self):
        """Atualiza os indicadores visuais"""
        # Atualizar lâmpada
        self.lamp_indicator.description = f'LÂMPADA: {"Acesa" if self.lamp_status else "Apagada"}'
        self.lamp_indicator.button_style = 'success' if self.lamp_status else ''

        # Atualizar sirene
        self.siren_indicator.description = f'SIRENE: {"Ativa" if self.siren_status else "Inativa"}'
        self.siren_indicator.button_style = 'danger' if self.siren_status else ''

        # Atualizar motor
        self.motor_indicator.description = f'MOTOR: {"Ligado" if self.motor_status else "Desligado"}'
        self.motor_indicator.button_style = 'info' if self.motor_status else ''

        # Atualizar temperatura
        self.temp_display.value = self.temperature

    def toggle_lamp(self, button):
        """Alterna o estado da lâmpada"""
        self.lamp_status = not self.lamp_status
        status = "acesa" if self.lamp_status else "apagada"
        print(f"Simulando: Lâmpada {status}!")
        self.update_indicators()

        # Efeito visual simulado
        if self.lamp_status:
            display(HTML("<div style='background-color:yellow; padding:10px;'>💡 Lâmpada Acesa!</div>"))
        else:
            display(HTML("<div style='background-color:black; color:white; padding:10px;'>🌑 Lâmpada Apagada!</div>"))

    def toggle_siren(self, button):
        """Alterna o estado da sirene"""
        self.siren_status = not self.siren_status
        status = "ativada" if self.siren_status else "desativada"
        print(f"Simulando: Sirene {status}!")
        self.update_indicators()

        # Efeito sonoro simulado
        if self.siren_status:
            # Gerar um tom de sirene
            sample_rate = 44100
            duration = 1.0  # segundos
            t = np.linspace(0, duration, int(sample_rate * duration), False)
            tone = np.sin(2 * np.pi * 880 * t) * 0.5  # 880 Hz
            audio_data = np.int16(tone * 32767)
            display(Audio(audio_data, rate=sample_rate, autoplay=True))
            display(HTML("<div style='background-color:red; color:white; padding:10px;'>🚨 Sirene Ativada!</div>"))
        else:
            display(HTML("<div style='background-color:green; color:white; padding:10px;'>✅ Sirene Desativada!</div>"))

    def toggle_motor(self, button):
        """Alterna o estado do motor"""
        self.motor_status = not self.motor_status
        status = "ligado" if self.motor_status else "desligado"
        print(f"Simulando: Motor {status}!")
        self.update_indicators()

        # Efeito visual simulado
        if self.motor_status:
            display(HTML("<div style='background-color:blue; color:white; padding:10px;'>🌀 Motor Ligado!</div>"))
        else:
            display(HTML("<div style='background-color:gray; color:white; padding:10px;'>⏹️ Motor Desligado!</div>"))

    def voice_command(self, button):
        """Processa comandos de voz"""
        print("Ouvindo... Fale agora!")

        try:
            # Simular captura de áudio (em ambiente Colab a captura real é limitada)
            # Em um ambiente local, usaríamos:
            # with self.microphone as source:
            #     audio = self.recognizer.listen(source)

            # Simular reconhecimento com entrada de texto para demonstração
            command = input("Digite o comando (ou 'cancelar' para voltar): ").lower()

            if command == 'cancelar':
                print("Comando cancelado.")
                return

            # Processar comando
            self.process_command(command)

        except sr.UnknownValueError:
            print("Não foi possível entender o áudio")
        except sr.RequestError as e:
            print(f"Erro no serviço de reconhecimento de voz: {e}")
        except Exception as e:
            print(f"Erro inesperado: {e}")

    def process_command(self, command):
        """Processa um comando de texto"""
        print(f"Processando comando: '{command}'")

        if any(word in command for word in ['ligar', 'acender', 'luz', 'lâmpada', 'light', 'on']):
            if not self.lamp_status:
                self.toggle_lamp(None)
            else:
                print("Lâmpada já está acesa!")

        elif any(word in command for word in ['desligar', 'apagar', 'luz', 'lâmpada', 'light', 'off']):
            if self.lamp_status:
                self.toggle_lamp(None)
            else:
                print("Lâmpada já está apagada!")

        elif any(word in command for word in ['ativar', 'ligar', 'sirene', 'alarme', 'siren', 'alarm']):
            if not self.siren_status:
                self.toggle_siren(None)
            else:
                print("Sirene já está ativa!")

        elif any(word in command for word in ['desativar', 'desligar', 'sirene', 'alarme', 'siren', 'alarm']):
            if self.siren_status:
                self.toggle_siren(None)
            else:
                print("Sirene já está desativada!")

        elif any(word in command for word in ['ligar', 'ativar', 'motor', 'ventilador', 'motor', 'fan']):
            if not self.motor_status:
                self.toggle_motor(None)
            else:
                print("Motor já está ligado!")

        elif any(word in command for word in ['desligar', 'parar', 'motor', 'ventilador', 'motor', 'fan']):
            if self.motor_status:
                self.toggle_motor(None)
            else:
                print("Motor já está desligado!")

        elif any(word in command for word in ['temperatura', 'temperature', 'calor', 'frio']):
            print(f"Temperatura atual: {self.temperature}°C")
            if self.temperature > 25:
                print("Está quente! Ligando ventilador...")
                if not self.motor_status:
                    self.toggle_motor(None)
            elif self.temperature < 18:
                print("Está frio! Desligando ventilador...")
                if self.motor_status:
                    self.toggle_motor(None)

        else:
            print("Comando não reconhecido. Tente novamente.")
            print("Comandos disponíveis: ligar/desligar luz, ativar/desativar sirene, ligar/desligar motor")

    def monitor_sensors(self):
        """Simula o monitoramento de sensores (executado em thread separada)"""
        while True:
            # Simular variação de temperatura
            temp_change = random.uniform(-0.5, 0.5)
            self.temperature += temp_change
            self.temperature = max(15, min(35, self.temperature))  # Manter entre 15-35°C

            # Atualizar display
            self.update_indicators()

            # Controle automático baseado em temperatura
            if self.temperature > 28 and not self.motor_status:
                print("Temperatura alta detectada! Ligando ventilador automaticamente.")
                self.motor_status = True
                self.update_indicators()
            elif self.temperature < 22 and self.motor_status:
                print("Temperatura normalizada! Desligando ventilador.")
                self.motor_status = False
                self.update_indicators()

            time.sleep(5)  # Verificar a cada 5 segundos

    def text_based_interface(self):
        """Interface baseada em texto para compatibilidade"""
        print("\n" + "="*50)
        print("SISTEMA DE AUTOMAÇÃO RESIDENCIAL")
        print("="*50)

        while True:
            print("\nEscolha uma opção:")
            print("1. Acender a lâmpada")
            print("2. Desligar a lâmpada")
            print("3. Ativar a sirene")
            print("4. Desativar a sirene")
            print("5. Ligar o motor")
            print("6. Desligar o motor")
            print("7. Verificar temperatura")
            print("8. Comando de voz simulado")
            print("0. Sair")

            try:
                choice = input("Digite o número do comando: ")

                if choice == '0':
                    print("Saindo do sistema...")
                    break
                elif choice == '1':
                    if not self.lamp_status:
                        self.toggle_lamp(None)
                    else:
                        print("Lâmpada já está acesa!")
                elif choice == '2':
                    if self.lamp_status:
                        self.toggle_lamp(None)
                    else:
                        print("Lâmpada já está apagada!")
                elif choice == '3':
                    if not self.siren_status:
                        self.toggle_siren(None)
                    else:
                        print("Sirene já está ativa!")
                elif choice == '4':
                    if self.siren_status:
                        self.toggle_siren(None)
                    else:
                        print("Sirene já está desativada!")
                elif choice == '5':
                    if not self.motor_status:
                        self.toggle_motor(None)
                    else:
                        print("Motor já está ligado!")
                elif choice == '6':
                    if self.motor_status:
                        self.toggle_motor(None)
                    else:
                        print("Motor já está desligado!")
                elif choice == '7':
                    print(f"Temperatura atual: {self.temperature}°C")
                elif choice == '8':
                    command = input("Digite o comando de voz: ")
                    self.process_command(command)
                else:
                    print("Opção inválida! Tente novamente.")

            except KeyboardInterrupt:
                print("\nSaindo do sistema...")
                break
            except Exception as e:
                print(f"Erro: {e}")

# Inicializar e executar o sistema
def main():
    # Criar instância do sistema
    home_system = HomeAutomationSystem()

    # Exibir interface gráfica
    display(home_system.control_panel)

    # Também disponibilizar interface baseada em texto
    print("\nInterface baseada em texto também disponível.")
    use_text_interface = input("Usar interface de texto? (s/n): ").lower().startswith('s')

    if use_text_interface:
        home_system.text_based_interface()

# Executar o sistema
if __name__ == "__main__":
    main()
```

## Resultados

A implementação demonstrou sucesso na interpretação de comandos de voz e simulação de ações de dispositivos. A abordagem de permitir que os usuários escolham entre números e palavras-chave torna o sistema mais flexível. O código proporciona uma experiência educacional e prática, permitindo que os usuários entendam a lógica por trás da automação residencial.

## Funcionalidades Implementadas

1. **Controle de Lâmpada**: Acender e apagar com feedback visual
2. **Controle de Sirene**: Ativar e desativar com efeito sonoro simulado
3. **Controle de Motor**: Ligar e desligar com indicação visual
4. **Monitoramento de Temperatura**: Simulação de sensor de temperatura com controle automático
5. **Comandos de Voz**: Interpretação de comandos por voz (simulada via texto no Colab)
6. **Interface Gráfica**: Painel de controle visual com indicadores de status
7. **Interface Textual**: Modo de operação baseado em texto para compatibilidade

## Conclusão

O projeto atinge seus objetivos, fornecendo uma base sólida para compreensão da automação residencial, comandos de voz e integração de diversas tecnologias. A escolha de simular ações em vez de interagir com dispositivos físicos facilita a implementação em ambientes como o Colab e proporciona um ambiente de aprendizado seguro.

## Estudo de Caso

Considere um cenário onde o assistente virtual é implementado em um ambiente real com dispositivos Arduino, lâmpadas, motores e sirenes. Nesse caso, a integração com Arduino seria realizada usando a biblioteca pyserial para envio de comandos. O assistente virtual controlaria efetivamente dispositivos físicos com base em comandos de voz interpretados.

## Paralelo com a Proposta Inicial

A proposta inicial do projeto era criar um assistente virtual para automação residencial, incorporando redes neurais. Embora o código atual não integre diretamente redes neurais, a adição dessa camada poderia melhorar a capacidade de interpretação de comandos de voz, permitindo uma experiência mais natural e personalizada.

Além disso, a simulação atual fornece uma base sólida antes da escalação para implementação real, garantindo que os conceitos fundamentais sejam compreendidos antes da introdução de tecnologias mais avançadas.

## Considerações Finais

O projeto do assistente virtual para automação residencial representa uma valiosa oportunidade educacional para aprender sobre controle de dispositivos, interpretação de comandos de voz e integração de tecnologias. A abordagem modular e simulada cria um ambiente propício para experimentação e compreensão conceitual, pavimentando o caminho para expansões e melhorias futuras.

**Repositório GitHub:** https://github.com/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Smart_Connect_Sphere.ipynb

**Google Colab:** [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Daniel-Gehlen/PythonProgrammingProjects1/blob/main/Smart_Connect_Sphere.ipynb)
