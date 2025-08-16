# Switches, Roteadores e Access Points

## 1. Dispositivos Básicos de Rede

| Dispositivo      | Função Principal                              | Exemplo Prático                               |
| ---------------- | --------------------------------------------- | --------------------------------------------- |
| **Switch**       | Conecta dispositivos em uma rede local (LAN)  | Liga computadores e impressoras em escritório |
| **Roteador**     | Conecta redes diferentes (ex: LAN → Internet) | Permite compartilhamento de conexão Internet  |
| **Access Point** | Estende sinal Wi-Fi                           | Amplifica Wi-Fi para outros andares           |

---

## 2. Switches: O "Cérebro" da Rede Local

**Como funciona?**
Direciona tráfego entre dispositivos na mesma rede.
**Exemplo**: Envia dados apenas para a impressora, não para todos os dispositivos.

### Tipos de Switches

| Tipo                    | Vantagem                  | Ideal para                         |
| ----------------------- | ------------------------- | ---------------------------------- |
| **On-Premises**         | Controle total da rede    | Empresas com equipe de TI dedicada |
| **Gerenciado na Nuvem** | Configuração simplificada | Pequenas empresas com TI limitado  |

**Benefícios**:

- Economiza custos (compartilhamento de recursos).
- Aumenta produtividade (comunicação rápida).

---

## 3. Roteadores: O "Portal" para o Mundo Externo

**Funções-chave**:

- **Conectividade**: Liga rede à Internet.
- **Segurança**: Firewall e VPN integrados.
- **Priorização**: QoS para tráfego crítico (ex: chamadas de vídeo).

**Exemplo**:
Roteador doméstico conecta celulares, TVs e laptops à Internet simultaneamente.

**Recursos Avançados**:

- **VPN**: Acesso remoto seguro.
- **QoS (Quality of Service)**: Prioriza tráfego.

---

## 4. Access Points (APs): Wi-Fi sem Fios

**O que faz?**
Amplifica sinal Wi-Fi, substituindo cabos.

**Comparação**:
Se o roteador é a "torre de água", o AP é o "encanamento" que distribui Wi-Fi.

**Vantagens**:

- **Flexibilidade**: Conexão móvel em qualquer lugar.
- **Monitoramento**: Detecta dispositivos e intrusos.

### Padrões Wi-Fi

- **IEEE 802.11ac (Wi-Fi 5)**: Mais rápido, menor alcance.
- **IEEE 802.11ax (Wi-Fi 6)**: Eficiente para muitos dispositivos.

---

## 5. Tipos de Redes Sem Fio

| Tipo de Implementação | Como Funciona                        | Melhor Para                        |
| --------------------- | ------------------------------------ | ---------------------------------- |
| **Centralizada**      | Controladores físicos no local       | Campi universitários ou prédios    |
| **Convergente**       | Combina rede cabeada e sem fio       | Filiais ou pequenos escritórios    |
| **Baseada na Nuvem**  | Gerenciamento via nuvem (ex: Meraki) | Empresas com múltiplas localidades |

**Exemplo Prático**:
Rede em São Paulo gerenciada por um dashboard online de Londres.

---

## 6. Comparação Rápida

### **Switch vs. Roteador**

- **Switch**: Comunicação **dentro** da rede.
- **Roteador**: Comunicação **entre** redes (ex: LAN → Internet).

### **Access Point vs. Roteador**

- **Roteador**: Fornece banda larga.
- **AP**: **Estende** sinal do roteador para mais dispositivos.

---

## 7. Próximos Passos

- **Pequenas empresas**: Roteador + switch gerenciado na nuvem.
- **Grandes redes**: APs com controle centralizado.
- **Dica**: Use **Wi-Fi 6** para ambientes com muitos dispositivos IoT.

🔍 **Curiosidade**: Switch inteligente pode isolar tráfego suspeito como um "vigia".

📚 **Recursos Úteis**:

- [Trial gratuito Cisco Meraki](https://meraki.cisco.com) (teste redes na nuvem).
- [Guia: Como escolher um roteador VPN]().

Este guia oferece uma base sólida para entender como switches, roteadores e APs criam redes eficientes e seguras! 🌐🔧
