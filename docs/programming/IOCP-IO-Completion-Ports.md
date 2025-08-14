# IOCP (I/O Completion Ports)

## Visão Geral

Mecanismo de alta performance do Windows para operações de I/O assíncronas, especialmente eficiente para servidores que gerenciam milhares de conexões simultâneas.

---

## Como Funciona

1. **Criação da Porta de Conclusão**

   ```cpp
   HANDLE hCompletionPort = CreateIoCompletionPort(INVALID_HANDLE_VALUE, NULL, 0, 0);
   ```

2. **Associação de Sockets/Handles**

   - Sockets são vinculados à porta via `CreateIoCompletionPort`.

3. **Início de Operações Assíncronas**

   - Funções como `WSARecv` (rede) ou `ReadFile` (arquivos) iniciam I/O não-bloqueante.

4. **Fila de Resultados**

   - Operações concluídas são enfileiradas na porta.

5. **Processamento por Threads**
   ```cpp
   GetQueuedCompletionStatus(hPort, &bytesTransferred, &completionKey, &pOverlapped, INFINITE);
   ```

---

## Vantagens

✅ **Escalabilidade**: Gerencia milhares de conexões com poucas threads.
✅ **Desempenho**: Minimiza overhead de criação de threads e context switching.
✅ **Flexibilidade**: Suporta redes, arquivos e outros I/O.
✅ **Otimização de CPU**: Balanceamento automático de carga nas threads.

---

## Exemplo Prático (Servidor de Rede)

```cpp
// 1. Criação da porta
HANDLE hPort = CreateIoCompletionPort(...);

// 2. Associação de socket
SOCKET clientSocket = ...;
CreateIoCompletionPort((HANDLE)clientSocket, hPort, ...);

// 3. Postar operação de recebimento
WSARecv(clientSocket, &buffer, ..., &overlapped);

// 4. Thread de trabalho
while (GetQueuedCompletionStatus(hPort, ...)) {
    // Processar dados recebidos
}
```

---

## Aplicações Típicas

- Servidores web (ex: IIS)
- Bancos de dados de alto tráfego
- Sistemas de mensageria
- Streaming de dados

---

## Considerações Finais

O IOCP é a solução padrão do Windows para I/O assíncrono de alta performance, combinando eficiência com baixo consumo de recursos. Seu modelo baseado em eventos e threads otimizadas o torna ideal para aplicações críticas.
