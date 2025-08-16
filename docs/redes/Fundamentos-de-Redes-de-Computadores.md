# Fundamentos de Redes de Computadores

## 1. Introdução
Redes de computadores são sistemas que permitem a comunicação entre dispositivos (computadores, smartphones, servidores) para compartilhar recursos e informações.

**Por que aprender redes?**
- **Cloud Computing (Azure/AWS)**: Entender redes é essencial para configurar conexões seguras.
- **Cybersecurity**: Proteger dados e identificar vulnerabilidades.
- **DevOps**: Gerenciar infraestrutura e otimizar tráfego.

---

## 2. Tipos de Redes
| Tipo de Rede | Alcance               | Exemplo                     |
|--------------|-----------------------|-----------------------------|
| **PAN**      | 1-10 metros           | Bluetooth (celular + fones) |
| **LAN**      | Um prédio/escola      | Wi-Fi de casa/escritório    |
| **MAN**      | Uma cidade            | Redes de governo ou universidades |
| **WAN**      | Mundial               | Internet, VPN corporativa   |

### Diferença entre LAN e WAN
| **LAN**                     | **WAN**                     |
|-----------------------------|-----------------------------|
| Alta velocidade (10+ Gbps)   | Velocidade menor (1 Gbps)   |
| Menos congestionamento       | Mais tráfego (vários usuários) |
| Gerenciamento interno        | Terceirizada (operadoras)   |

---

## 3. Topologias de Rede
Como os dispositivos são conectados fisicamente:

**a) Barramento (Bus)**
- **Prós**: Simples e barato.
- **Contras**: Se o cabo principal quebra, a rede cai.

**b) Estrela (Star)**
- **Prós**: Fácil de escalar (roteador central).
- **Contras**: Se o hub falhar, a rede para.

**c) Anel (Ring)**
- **Prós**: Menos colisões de dados.
- **Contras**: Se um nó falha, a rede é afetada.

**d) Malha (Mesh)**
- **Prós**: Alta redundância (vários caminhos).
- **Contras**: Custo alto (muitos cabos).

---

## 4. Dispositivos de Rede
| Dispositivo          | Função                                   | Exemplo                     |
|----------------------|------------------------------------------|-----------------------------|
| **Switch**           | Conecta dispositivos em uma LAN          | Escritório com vários PCs   |
| **Roteador**         | Liga redes diferentes (LAN → Internet)   | Wi-Fi doméstico             |
| **Access Point (AP)**| Estende sinal Wi-Fi                      | Wi-Fi em um shopping        |
| **Firewall**         | Filtra tráfego malicioso                 | Proteção contra hackers     |

### Evolução do Ethernet
- **Fast Ethernet**: 100 Mbps
- **Gigabit Ethernet**: 1 Gbps
- **10 Gigabit**: 10 Gbps (fibra óptica)

---

## 5. Protocolos de Rede
**a) TCP vs. UDP**
| **TCP**                          | **UDP**                        |
|----------------------------------|--------------------------------|
| Conexão confiável (confirma recebimento) | Rápido, mas sem confirmação |
| Usado em HTTP, FTP, SSH          | Usado em streaming, VoIP      |

**b) Endereçamento IP**
- **IPv4**: `192.168.1.1` (32 bits, limitado).
- **IPv6**: `2001:0db8::8a2e` (128 bits, ilimitado).

**c) DNS (Domain Name System)**
Traduz `google.com` → `172.217.28.206`.

---

## 6. Segurança Básica
- **Firewall**: Bloqueia tráfego suspeito.
- **VPN**: Criptografa conexões remotas.
- **HTTPS**: Protege dados na web.

---

## 7. Próximos Passos
- **Azure Networking**: Configure redes virtuais (VNet).
- **Monitoramento**: Use ferramentas como Wireshark.
- **Dica**: Pratique configurar uma rede caseira com roteador e switch!

📚 **Leitura Recomendada**:
- *Guia Cisco*
- *"Redes de Computadores" (Andrew Tanenbaum)*
