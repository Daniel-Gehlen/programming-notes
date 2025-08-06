# Ataques do Tipo Man-in-the-Middle (MitM)

## Objetivo Geral

Compreender e praticar ataques MitM, onde o atacante intercepta e manipula comunicações entre duas partes legítimas.

---

## Pré-requisitos

- Conhecimento prévio de redes e segurança da informação.

---

## Etapa 1: Conceitos Fundamentais

### O que é um Ataque MitM?

- **Definição**:
  Técnica de espionagem onde o atacante se posiciona entre duas partes, interceptando e/ou alterando a comunicação.
- **Objetivo**:
  Roubo de dados (senhas, informações financeiras) ou manipulação de tráfego.

### Conceitos-Chave

1. **Sequestro de Sessão**:
   - O atacante atua como proxy, retransmitindo mensagens entre as vítimas.
2. **Exploração em Tempo Real**:
   - Interceptação e modificação imediata dos dados trafegados.

### Exemplos de Ataques

- **Interceptação de credenciais** em redes Wi-Fi públicas.
- **Redirecionamento malicioso** em transações bancárias.

### Ferramentas Populares

| Ferramenta  | Uso Principal                 |
| ----------- | ----------------------------- |
| Wireshark   | Captura e análise de pacotes. |
| Ettercap    | Sniffing e envenenamento ARP. |
| Cain e Abel | Quebra de senhas e MitM.      |
| Bettercap   | Ataques avançados em redes.   |

**Conclusão**: Ataques MitM são altamente danosos devido à dificuldade de detecção.

---

## Etapa 2: Capturando Dados com Wireshark

### Introdução ao Wireshark

- **Função**: Analisador de protocolos para capturar e inspecionar pacotes de rede.
- **Aplicação**: Identificar tráfego não criptografado (ex: HTTP).

### Funcionalidades

1. **Captura de Pacotes**:
   - Monitora toda a comunicação em uma interface de rede.
2. **Filtragem**:
   - Exemplo: `http.request.method == "POST"` para capturar envios de formulários.
3. **Visualização**:
   - Exibe detalhes como cabeçalhos, payloads e horários.

### Prática

1. Abra o Wireshark e selecione a interface de rede.
2. Aplique filtros para focar em tráfego específico.
3. Analise pacotes para extrair informações sensíveis.

---

## Etapa 3: Manipulação de Rede com Ettercap

### Introdução ao Ettercap

- **Função**: Ferramenta para ataques MitM em redes locais (LAN).
- **Recursos**:
  - Sniffing em tempo real.
  - Suporte a múltiplos protocolos (HTTP, FTP, etc.).

### Técnicas Principais

1. **Envenenamento ARP**:
   - **Full-Duplex**: Intercepta comunicação entre dois hosts.
   - **Half-Duplex**: Redireciona tráfego de uma vítima para toda a rede.

### Prática

1. Execute Ettercap em modo gráfico (`ettercap -G`).
2. Escaneie a rede para identificar hosts.
3. Selecione vítimas e inicie o envenenamento ARP.
4. Use o Wireshark para validar o tráfego interceptado.

---

## Prevenção Contra MitM

1. **Criptografia**:
   - Utilize HTTPS, VPNs e SSH.
2. **Autenticação**:
   - Certificados digitais e autenticação de dois fatores (2FA).
3. **Monitoramento**:
   - Ferramentas como ARPwatch para detectar envenenamento ARP.

**Nota**: Ataques MitM são ilegais sem consentimento. Use este conhecimento apenas para testes éticos em ambientes controlados.
