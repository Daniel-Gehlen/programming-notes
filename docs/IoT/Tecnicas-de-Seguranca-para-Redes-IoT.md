# Técnicas de Segurança para Redes IoT

## Estratégia de Segurança em Camadas
Proteção de infraestruturas IoT requer abordagem multicamada:
- **Proteção de dados na nuvem**
- **Integridade dos dados em trânsito** (via Internet pública)
- **Provisionamento seguro de dispositivos**

## Partes Envolvidas na Segurança IoT
Atuação conjunta de:
- Fabricantes/Integradores de Hardware
- Desenvolvedores de Soluções
- Implantadores de Soluções
- Operadores de Sistemas

---

## Práticas Recomendadas para Fabricantes de Hardware IoT

### 1. Escopo de Hardware para Requisitos Mínimos
**Descrição:**
- Incluir apenas recursos essenciais (ex: portas USB somente quando indispensáveis)
- Eliminar funcionalidades supérfluas que possam criar vetores de ataque

### 2. Hardware à Prova de Adulteração
**Descrição:**
- Implementar sensores de violação física (abertura de tampa, remoção de componentes)
- Integrar alertas ao fluxo de dados para notificação em tempo real

### 3. Criação de Hardware Seguro
**Descrição:**
- Utilizar tecnologias como:
  - Armazenamento criptografado
  - Módulos TPM (Trusted Platform Module)
- Proteger chaves criptográficas e dados sensíveis

### 4. Atualizações Seguras
**Descrição:**
- Implementar mecanismos para:
  - Caminhos de atualização criptografados
  - Verificação de integridade do firmware
  - Rollback seguro em caso de falhas

---

**Impacto:**
Estas práticas garantem segurança contínua em todo o ciclo de vida do dispositivo - desde o design até a operação.
