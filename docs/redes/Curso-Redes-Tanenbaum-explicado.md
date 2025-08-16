# Curso Redes Tanenbaum Explicado

## Fundamentos de Redes de Computadores

O curso baseado no livro "Computer Networks" de Andrew Tanenbaum é uma referência clássica na área de redes de computadores. Os principais tópicos abordados incluem:

- **Fundamentos de Redes**: Estrutura e princípios de operação das redes
- **Modelos de Referência**: OSI (7 camadas) e TCP/IP (4 camadas)
- **Protocolos de Rede**: TCP, UDP, HTTP, FTP, SMTP e outros
- **Tecnologias de Rede**: Ethernet, WiFi, redes celulares (3G/4G/5G)
- **Segurança de Redes**: Criptografia, autenticação, firewalls
- **Tópicos Avançados**: QoS, SDN, virtualização, computação em nuvem
- **Componentes Práticos**: Laboratórios e implementação de redes

## Modelo OSI (Open Systems Interconnection)

O modelo OSI divide as funções de comunicação em 7 camadas:

1. **Camada Física**: Transmissão física de dados (cabos, fibras ópticas)
2. **Camada de Enlace**: Transferência confiável entre dispositivos adjacentes
3. **Camada de Rede**: Roteamento de pacotes entre redes
4. **Camada de Transporte**: Comunicação fim-a-fim confiável
5. **Camada de Sessão**: Estabelecimento e gerenciamento de sessões
6. **Camada de Apresentação**: Conversão e formatação de dados
7. **Camada de Aplicação**: Interface com aplicações do usuário final

## TCP/IP (Transmission Control Protocol/Internet Protocol)

Conjunto de protocolos essenciais para a Internet:

- **IP (Internet Protocol)**: Endereçamento e roteamento de pacotes (IPv4 e IPv6)
- **TCP**: Comunicação confiável com controle de fluxo e erro
- **UDP**: Comunicação não confiável mas mais rápida
- **Protocolos Auxiliares**:
  - ARP: Mapeamento IP-MAC
  - DHCP: Configuração automática de IP
  - DNS: Tradução nome-domínio para IP
  - HTTP/HTTPS: Web
  - FTP: Transferência de arquivos
  - SMTP: Envio de e-mails

## ICMP (Internet Control Message Protocol)

Protocolo para diagnóstico e controle de erros:

- **Funções Principais**:
  - Reportar erros de entrega de pacotes
  - Testes de conectividade (ping)
  - Mapeamento de rede (traceroute)
  - Controle de congestionamento
- **Mensagens Importantes**:
  - Echo Request/Reply (ping)
  - Destination Unreachable
  - Time Exceeded
  - Redirect

## UDP (User Datagram Protocol)

Protocolo de transporte simples:

- **Características**:
  - Não orientado a conexão
  - Sem garantia de entrega ou ordenação
  - Baixo overhead
- **Aplicações Típicas**:
  - Streaming de mídia
  - Jogos online
  - DNS (consultas simples)
  - VoIP

## Endereçamento IP

- **Formato**: Sequência numérica (IPv4: 32 bits, IPv4: 128 bits)
- **Funções**:
  - Identificação única de dispositivos
  - Roteamento de pacotes
- **IPv4 vs IPv6**:
  - IPv4: 4.3 bilhões de endereços (esgotado)
  - IPv6: 340 undecilhões de endereços

## Máscara de Sub-rede (Subnet Mask)

- **Função**: Distinguir parte de rede e host no endereço IP
- **Exemplo**: 255.255.255.0 (/24) para rede 192.168.1.0 com 254 hosts
- **Operações Bitwise**: AND, OR, XOR, NOT e shifts usados em cálculos de sub-rede

## Roteamento

- **Componentes**:
  - Tabelas de roteamento
  - Algoritmos de roteamento (estático/dinâmico)
- **Protocolos**:
  - RIP: Baseado em contagem de saltos
  - OSPF: Usa algoritmo de Dijkstra
  - BGP: Roteamento entre sistemas autônomos
- **Processo**:
  1. Recebimento do pacote
  2. Consulta à tabela de roteamento
  3. Encaminhamento pelo melhor caminho

## NAT (Network Address Translation)

- **Tipos**:
  - SNAT (Source NAT): Mapeia IPs privados para público
  - DNAT (Destination NAT): Redireciona tráfego para IP privado
  - PAT (Port Address Translation): Múltiplos IPs privados compartilhando um IP público via portas
- **Vantagens**:
  - Conservação de IPs públicos
  - Segurança adicional
- **Desvantagens**:
  - Complexidade
  - Problemas com alguns protocolos

## Diagnóstico de Rede

- **Comando ping**:
  - Testa conectividade e mede latência
  - Usa pacotes ICMP Echo Request/Reply
  - Exemplo: `ping www.example.com`
- **ARP**:
  - Mapeamento IP-MAC em redes locais
  - Processo: ARP Request (broadcast) → ARP Reply (unicast)

## Default Gateway

- **Função**: Roteador que conecta a rede local à Internet
- **Processo de Acesso**:
  1. Dispositivo verifica se destino está na mesma rede
  2. Se não, envia pacote para o gateway padrão
  3. Gateway encaminha para a Internet

## DHCP (Dynamic Host Configuration Protocol)

- **Processo (DORA)**:
  1. Discover (cliente)
  2. Offer (servidor)
  3. Request (cliente)
  4. Acknowledge (servidor)
- **Vantagens**:
  - Configuração automática de IP, gateway, DNS
  - Gerenciamento eficiente de endereços

## Segurança em Redes

- **SYN Flood**:
  - Ataque DoS que explora handshake TCP
  - Mitigação: SYN cookies, firewalls, limitação de conexões
- **IP Spoofing**:
  - Falsificação de endereço IP de origem
  - Prevenção: Filtros de entrada/saída, uRPF, autenticação

## Balanceamento de Carga

- **Round Robin**:
  - Distribuição cíclica de requisições
  - Variações: Weighted Round Robin, Dynamic Round Robin
- **Implementação**:
  - Exemplo com Nginx:
    ```nginx
    upstream myapp {
        server server1.example.com;
        server server2.example.com;
    }
    ```

## DNS Seguro

- **DNS over HTTPS (DoH)**:
  - Consultas DNS sobre HTTPS (porta 443)
  - Exemplo: `https://cloudflare-dns.com/dns-query`
- **DNS over TLS (DoT)**:
  - Consultas DNS sobre TLS (porta 853)
  - Implementação com stubby

## Configuração de Proxy

- **Windows**:
  - Configurações → Rede e Internet → Proxy
  - Ou via linha de comando:
    ```cmd
    netsh winhttp set proxy proxy-server="http=proxy.example.com:8080"
    ```

## Pi-hole

- **Função**: Bloqueio de anúncios e rastreadores a nível de rede
- **Implementação**:
  1. Instalar em Raspberry Pi
  2. Configurar como servidor DNS na rede
  3. Gerenciar bloqueios via painel web

## CGNAT (Carrier-Grade NAT)

- **Motivação**: Escassez de IPv4
- **Funcionamento**: Múltiplos clientes compartilhando um IP público
- **Desafios**:
  - Rastreabilidade
  - Compatibilidade com algumas aplicações

## NAT Traversal (ICE)

- **Componentes**:
  - STUN: Descobre IP público
  - TURN: Relay quando comunicação direta falha
- **Processo**:
  1. Coleta de candidatos (host, reflexivo, relay)
  2. Testes de conectividade
  3. Seleção do melhor caminho

## Migração para IPv6

- **Vantagens**:
  - Fim da necessidade de NAT
  - Comunicação ponta-a-ponta nativa
- **Implementação**:
  1. Verificar suporte do ISP
  2. Configurar roteador
  3. Habilitar IPv6 nos dispositivos
  4. Alternativa: Túneis IPv6 (Hurricane Electric)
