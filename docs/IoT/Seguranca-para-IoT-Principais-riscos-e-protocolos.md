# Segurança para IoT: Principais Riscos e Protocolos

## O que é Segurança para IoT?
A Internet das Coisas (IoT) apresenta desafios únicos de segurança devido a:
- Vulnerabilidades de rede
- Software/firmware desatualizados
- Capacidade computacional limitada

---

## Principais Ameaças e Riscos

### 1. Vulnerabilidades Nativas
**Problema**:
Dispositivos IoT com recursos limitados para implementar segurança robusta
**Impacto**:
Exposição a ataques por falhas de projeto

### 2. Infecção por Malware
**Problema**:
Dispositivos comprometidos mesmo com capacidades reduzidas
**Impacto**:
Botnets IoT (ex: Mirai) para ataques em larga escala

### 3. Ataques DDoS
**Problema**:
Dispositivos zombificados em redes botnet
**Impacto**:
Queda de serviços essenciais

### 4. Configurações Inadequadas
**Problema**:
Credenciais padrão não alteradas
**Impacto**:
Acesso não autorizado facilitado

### 5. Falta de Atualizações
**Problema**:
Firmware desatualizado
**Impacto**:
Exploração de vulnerabilidades conhecidas

---

## Questões Emergentes

| **Desafio**               | **Causa**                     | **Consequência**                  |
|---------------------------|-------------------------------|-----------------------------------|
| Ambientes Complexos       | Proliferação de dispositivos  | Dificuldade de gestão centralizada|
| Home Office               | Redes domésticas inseguras    | Porta de entrada para ataques     |
| Conectividade 5G          | Novos vetores de ataque       | Superfície de risco ampliada      |

---

## Protocolos IoT

### Protocolos de Mensagens
- **AMQP**: Padrão empresarial para mensagens assíncronas
- **CoAP**: Otimizado para dispositivos com restrições
- **MQTT**: Padrão leve para comunicação pub/sub
- **XMPP**: Comunicação em tempo real

### Protocolos de Conectividade
- **Bluetooth Low Energy**: Baixo consumo energético
- **Zigbee/Z-Wave**: Redes mesh para automação
- **LoRaWAN**: Longo alcance para IoT industrial

---

**Recomendações de Segurança**:
1. Implementar autenticação multifatorial
2. Segmentar redes IoT
3. Adotar padrões como NIST IoT Security Framework
4. Monitoramento contínuo de dispositivos

> "A segurança IoT requer abordagem em camadas - desde o hardware até a nuvem."
