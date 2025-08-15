# NGINX: Arquitetura e Performance

## Visão Geral

Servidor web e proxy reverso de alta performance especializado em:

- Alta concorrência (milhares de conexões simultâneas)
- Baixo consumo de recursos
- Configuração flexível

## Arquitetura Principal

### Processo Mestre

**Responsabilidades**:

- ✅ Inicialização do serviço
- 🔄 Gerenciamento de workers (start/stop/reload)
- 📋 Leitura e validação de configuração
- 🔄 Hot reload (recarrega configuração sem downtime)

### Processos Workers

**Características**:

- 🚀 Cada worker gerencia múltiplas conexões (modelo não-bloqueante)
- ⚙️ Utiliza `epoll` (Linux), `kqueue` (BSD) ou `select/poll` como fallback
- 🔄 Loop de eventos assíncrono
- ⚖ Balanceamento via `accept_mutex`

## Configuração Chave

`nginx.conf`:

```nginx
worker_processes 4;  # Número de workers (ideal: núcleos de CPU)

events {
    worker_connections 1024;  # Conexões simultâneas por worker
    use epoll;  # Modelo de eventos (Linux)
}

http {
    server {
        listen 80;
        location / {
            root /var/www/html;
        }
    }
}
```

## Benefícios Chave

| Vantagem           | Descrição                                                 |
| ------------------ | --------------------------------------------------------- |
| **Escalabilidade** | 1 worker pode lidar com ~10k conexões (dependendo da RAM) |
| **Eficiência**     | Modelo event-driven reduz overhead de threads             |
| **Confiabilidade** | Workers isolados, falhas não afetam todo o sistema        |
| **Flexibilidade**  | Suporte a load balancing, caching, TLS/SSL, HTTP/2, etc.  |

## Casos de Uso Ideais

- 🔄 Servidores web high-traffic
- ⚖ Proxy reverso e load balancer
- 🛡️ Terminação SSL/TLS
- 🚀 Aceleração de conteúdo estático

> **Dica de Performance**:
> `worker_processes = núcleos_CPU;` > `worker_connections = (ulimit -n) / worker_processes;`
> Ajuste conforme a carga e recursos disponíveis.
