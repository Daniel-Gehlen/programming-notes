# Concorrência em Go

Go oferece um modelo único de concorrência baseado em goroutines e um scheduler eficiente. Vamos explorar os principais conceitos:

## Schedulers em Go

Go utiliza um **Goroutine Scheduler** que gerencia a execução concorrente através de um modelo M:N:

### Componentes Principais:

- **Goroutines (G)**: Unidades leves de execução (mais leves que threads do SO)
  ```go
  go minhaFuncao() // Cria uma nova goroutine
  ```
- **Machines (M)**: Threads do sistema operacional
- **Processors (P)**: Unidades lógicas que mapeiam goroutines para threads

### Diagrama do Scheduler:

```
+-----+       +-----+       +-----+
|  P  |       |  P  |       |  P  |
+-----+       +-----+       +-----+
   |             |             |
   v             v             v
+-----+       +-----+       +-----+
|  G  |       |  G  |       |  G  |
|  G  |       |  G  |       |  G  |
|  G  |       |  G  |       |  G  |
+-----+       +-----+       +-----+
   |             |             |
   v             v             v
+-----+       +-----+       +-----+
|  M  |       |  M  |       |  M  |
+-----+       +-----+       +-----+
```

## User Land

O runtime de Go gerencia goroutines no **espaço de usuário**, sem depender do kernel para cada troca de contexto:

- Operações de concorrência são gerenciadas pelo runtime Go
- Troca entre goroutines é mais eficiente que troca de threads do SO

## Reactor Pattern em Go

Padrão para lidar com I/O assíncrono de forma eficiente:

### Exemplo de Servidor TCP com Goroutines

```go
package main

import (
    "bufio"
    "fmt"
    "net"
    "strings"
)

func handleConnection(conn net.Conn) {
    defer conn.Close()
    reader := bufio.NewReader(conn)
    for {
        message, _ := reader.ReadString('\n')
        fmt.Printf("Message received: %s", message)
        newMessage := strings.ToUpper(message)
        conn.Write([]byte(newMessage))
    }
}

func main() {
    listener, err := net.Listen("tcp", ":8080")
    if err != nil {
        fmt.Println("Error creating listener:", err)
        return
    }
    defer listener.Close()

    fmt.Println("Server listening on port 8080")

    for {
        conn, err := listener.Accept()
        if err != nil {
            fmt.Println("Error accepting connection:", err)
            continue
        }
        go handleConnection(conn) // Nova goroutine por conexão
    }
}
```

### Funcionamento:

1. Servidor escuta na porta 8080
2. Cada nova conexão é tratada por uma goroutine dedicada
3. Permite lidar com múltiplas conexões concorrentemente

## Conclusão

- **Goroutines** fornecem concorrência leve e eficiente
- **Scheduler M:N** otimiza o uso de recursos do sistema
- **User Land** reduz sobrecarga de troca de contexto
- **Reactor Pattern** com goroutines permite I/O assíncrono escalável

Este modelo torna Go ideal para construir aplicações concorrentes e sistemas de rede de alto desempenho.
