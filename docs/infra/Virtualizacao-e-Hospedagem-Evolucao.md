# Virtualização e Hospedagem: Evolução

## Contexto Histórico (Anos 90 - Anos 2000)

Exploração da evolução das tecnologias de virtualização e hospedagem de serviços na internet.

---

## Anos 90: Configuração Manual e Hospedagem Compartilhada

### Características:

- **Configuração Manual de Máquinas**:

  - Servidores físicos dedicados a funções específicas.
  - Instalação manual de sistemas operacionais e aplicativos.
  - Escalabilidade limitada e alto custo de manutenção.

- **Hospedagem Compartilhada**:
  - Surgimento para reduzir custos.
  - Múltiplos sites hospedados no mesmo servidor físico.
  - Limitações em recursos e segurança devido ao compartilhamento.

---

## Final dos Anos 90 e Início dos 2000: Virtualização

### Avanços Tecnológicos:

- Introdução de **hypervisors** (VMware, Xen, VirtualBox).
- Criação de **máquinas virtuais (VMs)** isoladas.
  - Cada VM com sistema operacional e aplicativos próprios.
- Consolidação de servidores físicos para maior eficiência.

---

## Distinção Entre Termos Técnicos

### Hypervisor:

- Software para criação e gerenciamento de VMs.
  - Exemplos: VMware ESXi, Microsoft Hyper-V, KVM.

### Virtualização:

- Processo de criar versões virtuais de recursos computacionais (servidores, SO, armazenamento, rede).

### Paravirtualização:

- Sistema operacional da VM modificado para interagir diretamente com o hypervisor.
  - Aumenta eficiência.

### Jails (FreeBSD) / Containers (Linux):

- Virtualização a nível de sistema operacional.
  - **Jails**: Isolamento de processos no FreeBSD.
  - **Containers** (ex: Docker): Isolamento no Linux, compartilhando o kernel do hospedeiro.

---

## Evolução para VPS (Virtual Private Servers)

### Características dos VPS:

- Utilização de virtualização para ambientes isolados.
- Recursos dedicados (CPU, RAM, armazenamento) por VPS.
- Maior controle e segurança vs. hospedagem compartilhada.
- Custo menor vs. servidores físicos dedicados.

---

## Conclusão

### Benefícios da Evolução:

- **Eficiência**: Melhor utilização de recursos de hardware.
- **Escalabilidade**: Facilidade em expandir infraestrutura.
- **Segurança**: Isolamento entre ambientes virtuais.
- **Gerenciamento**: Simplificação da administração de sistemas.

### Importância:

Compreender os conceitos de **virtualização**, **hypervisors**, **paravirtualização**, **jails**, **containers** e **VPS** é essencial para selecionar a melhor solução de hospedagem e infraestrutura de TI conforme as necessidades específicas de cada cenário.
