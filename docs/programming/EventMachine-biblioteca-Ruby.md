# EventMachine: biblioteca Ruby

EventMachine é uma biblioteca Ruby para programação concorrente e paralela de alto desempenho, especialmente voltada para aplicações de rede e servidores.

## Funcionalidades Principais

### Modelo Assíncrono

- Operações de I/O não-bloqueantes (HTTP, sockets, etc)
- Single-thread com múltiplas conexões simultâneas
- Alta eficiência no uso de recursos

### Gerenciamento de Eventos

- Sistema baseado em callbacks:
  - `post_init`: Quando cliente conecta
  - `receive_data`: Ao receber dados
  - `unbind`: Quando cliente desconecta

### Protocolos Suportados

- HTTP/HTTPS
- WebSocket
- TCP/UDP
- Outros protocolos customizáveis

## Exemplo Prático: Servidor TCP Echo

```ruby
require 'eventmachine'

module EchoServer
  def post_init
    puts "Novo cliente conectado"
  end

  def receive_data(data)
    send_data "Echo: #{data}"
  end

  def unbind
    puts "Cliente desconectado"
  end
end

EventMachine.run {
  EventMachine.start_server "127.0.0.1", 8080, EchoServer
  puts "Servidor TCP iniciado na porta 8080"
}
```

**Funcionamento:**

1. `EventMachine.run` inicia o loop de eventos
2. `start_server` cria servidor TCP na porta 8080
3. Callbacks tratam:
   - Conexões (`post_init`)
   - Dados recebidos (`receive_data`)
   - Desconexões (`unbind`)

## Casos de Uso Típicos

- Servidores web de alta performance
- Sistemas de mensagens em tempo real
- Proxies de rede
- Servidores de jogos online
- Aplicações com muitas conexões concorrentes

## Vantagens

| Benefício          | Descrição                                  |
| ------------------ | ------------------------------------------ |
| **Eficiência**     | Menor consumo de recursos que threads      |
| **Escalabilidade** | Lida com milhares de conexões concorrentes |
| **Simplicidade**   | Abstrai complexidade de I/O assíncrono     |
