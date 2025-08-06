# Varreduras de Rede

## Objetivo Geral

Aprender técnicas de mapeamento de redes para identificar dispositivos ativos, portas abertas e serviços expostos utilizando ferramentas como Nmap e Shodan.

---

## Pré-requisitos

- Conhecimento básico de linha de comando Linux.
- Noções de redes TCP/IP e protocolos (ICMP, TCP, UDP).

---

## Etapa 1: Conceitos Básicos de Varredura de Rede

### Definição

- **Varredura de Rede**: Técnica para identificar hosts ativos, portas abertas e serviços em uma rede.
- **Diferença para Enumeração**:
  - _Varredura_: Descobre "o que existe" (hosts/portas).
  - _Enumeração_: Detalha "como funciona" (serviços/usuários).

### Tipos de Varreduras

| Tipo | Protocolo | Uso                             | Exemplo de Comando              |
| ---- | --------- | ------------------------------- | ------------------------------- |
| ICMP | Ping      | Verifica hosts ativos.          | `ping -c 4 192.168.1.1`         |
| TCP  | SYN/ACK   | Varredura silenciosa de portas. | `nmap -sS 192.168.1.0/24`       |
| UDP  | DNS/DHCP  | Identifica serviços UDP.        | `nmap -sU -p 53,67 192.168.1.1` |

### Riscos Associados

- **Detecção por IDS/IPS**: Varreduras agressivas podem disparar alertas.
- **Impacto em Redes**: Varreduras UDP podem causar congestionamento.

---

## Etapa 2: Mapeamento de Dispositivos com Nmap

### Instalação

```bash
sudo apt install nmap  # Linux
brew install nmap      # macOS
```

### Comandos Essenciais

1. **Varredura de Hosts Ativos**:
   ```bash
   nmap -sn 192.168.1.0/24  # Ping sweep
   ```
2. **Identificação de SO**:
   ```bash
   nmap -O 192.168.1.100
   ```
3. **Saída Formatada**:
   ```bash
   nmap -oN scan.txt -oG grepable.txt 192.168.1.0/24
   ```

### Exemplo Prático

```bash
nmap -sn 192.168.1.1-254 | grep "Nmap scan"  # Lista IPs ativos
```

---

## Etapa 3: Varredura de Portas com Nmap

### Técnicas Avançadas

| Técnica      | Flag  | Vantagem                                 |
| ------------ | ----- | ---------------------------------------- |
| SYN Scan     | `-sS` | Silencioso (não completa handshake TCP). |
| Connect Scan | `-sT` | Mais lento, mas evita firewalls.         |
| UDP Scan     | `-sU` | Identifica serviços como DNS/DHCP.       |

### Exemplo de Varredura Completa

```bash
nmap -sS -sU -p 1-1000 -T4 192.168.1.100
```

- `-T4`: Velocidade agressiva (ajustável de 0 a 5).
- `-p`: Intervalo de portas.

### Interpretando Resultados

- **Portas Abertas**: `22/tcp (SSH)`, `80/tcp (HTTP)`.
- **Serviços**: Versões de software (ex: `Apache 2.4.29`).

---

## Etapa 4: Varredura com Shodan

### Introdução ao Shodan

- **Funcionalidades**:
  - Busca dispositivos IoT, servidores e serviços expostos na internet.
  - Filtros por país, sistema operacional, etc.

### Comandos Úteis (CLI)

1. Instale a CLI:
   ```bash
   pip install shodan
   shodan init YOUR_API_KEY
   ```
2. Busca por servidores web:
   ```bash
   shodan search 'apache country:"BR"'
   ```

### Exemplo de Uso

```bash
shodan host 8.8.8.8  # Informações sobre DNS do Google
```

---

## Tabela Comparativa: Nmap vs Shodan

| Característica | Nmap                   | Shodan                             |
| -------------- | ---------------------- | ---------------------------------- |
| **Escopo**     | Redes locais/privadas. | Dispositivos públicos na internet. |
| **Dados**      | Em tempo real.         | Banco de dados pré-coletado.       |
| **Custo**      | Gratuito.              | API paga para buscas avançadas.    |

---

## Boas Práticas e Mitigação

### Para Pentesters

- **Varreduras Stealth**: Usar `-sS` (SYN scan) ou `-f` (fragmentação de pacotes).
- **Agendamento**: Realizar varreduras em horários de baixo tráfego.

### Para Administradores

- **Firewalls**: Bloquear portas não essenciais.
- **Monitoramento**: Configurar alertas para varreduras suspeitas (ex: múltiplas conexões SYN).

---

## Conclusão

Dominar varreduras de rede com **Nmap** e **Shodan** é essencial para segurança ofensiva e defensiva. Utilize essas técnicas de forma ética e sempre com autorização.

**Aviso Legal**: Varreduras não autorizadas podem violar leis locais. Use apenas em redes próprias ou com permissão.
