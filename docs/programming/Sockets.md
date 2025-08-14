# Sockets

Sockets são uma abstração de comunicação que permite que processos em diferentes máquinas ou na mesma máquina se comuniquem através de uma rede ou entre processos no mesmo sistema operacional. Eles são amplamente utilizados em sistemas distribuídos para troca de dados e informações entre aplicações.

## Características Principais dos Sockets:

### Ponto de Comunicação
Um socket é um ponto de extremidade que define uma comunicação bidirecional entre dois processos. Ele é identificado por um endereço IP e um número de porta.

### Tipos de Sockets
- **Sockets de Datagrama (UDP)**: Permitem a troca de mensagens independentes entre cliente e servidor, sem garantia de entrega ou ordem. É utilizado em situações onde a perda de alguns dados não é crítica, como streaming de vídeo.
- **Sockets de Fluxo (TCP)**: Proporcionam uma conexão confiável e orientada a conexão entre cliente e servidor, garantindo que os dados sejam entregues na ordem correta e sem perda. É ideal para transferência de arquivos e comunicação que exige confiabilidade.

### Interfaces de Programação
Em sistemas Unix e Linux, os sockets são normalmente acessados através das interfaces de programação de sockets (APIs), como a POSIX `socket`, `bind`, `listen`, `accept`, `connect`, `send`, `recv`, entre outras.

### Comunicação Interprocessual
Sockets são frequentemente usados para comunicação entre processos em diferentes máquinas (em redes) ou na mesma máquina. Eles permitem que processos troquem dados através da rede local ou da Internet.

### Endereçamento e Portas
Cada socket é identificado por um par de endereço IP e número de porta. O endereço IP indica a máquina ou interface de rede onde o processo está sendo executado, e a porta é um número usado pelo sistema operacional para encaminhar a comunicação para o processo correto.

## Exemplo de Uso:
Um exemplo simples de uso de sockets em Python para criar um servidor TCP e um cliente TCP:

### Servidor TCP (Python):
```python
import socket

# Cria um socket TCP/IP
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Liga o socket a um endereço e porta
server_socket.bind(('localhost', 12345))

# Coloca o socket em modo de escuta
server_socket.listen(5)
print("Aguardando conexão...")

# Aceita a conexão do cliente
client_socket, addr = server_socket.accept()
print(f"Conexão estabelecida com {addr}")

# Recebe dados do cliente
data = client_socket.recv(1024)
print(f"Dados recebidos do cliente: {data.decode()}")

# Fecha o socket do cliente
client_socket.close()

# Fecha o socket do servidor
server_socket.close()
```

### Cliente TCP (Python):
```python
import socket

# Cria um socket TCP/IP
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Conecta o socket ao servidor
client_socket.connect(('localhost', 12345))

# Envia dados para o servidor
client_socket.sendall(b'Hello, servidor!')

# Fecha o socket do cliente
client_socket.close()
```

Neste exemplo, o servidor espera por conexões de clientes na porta 12345. Quando um cliente se conecta, ele recebe uma mensagem, imprime os dados recebidos e fecha a conexão. O cliente se conecta ao servidor, envia uma mensagem e fecha a conexão.

## Conclusão:
Os sockets são uma tecnologia fundamental para comunicação entre processos em redes de computadores e no mesmo sistema operacional. Eles fornecem uma maneira flexível e poderosa para aplicativos trocarem dados de forma confiável, sendo essencial para o funcionamento de aplicações distribuídas, servidores web, troca de dados em tempo real e muitas outras aplicações de rede.
