# Departamento de TI em uma única máquina

Montar um departamento de TI em uma única máquina para estudos e práticas é um projeto interessante e viável, especialmente usando virtualização, containers e ferramentas de automação. Abaixo está um guia passo a passo do que você pode fazer e como configurar:

---

### **1. Definir o Escopo do "Departamento de TI"**
Você pode simular um ambiente corporativo com os seguintes componentes:
- **Servidores** (Windows Server, Linux)
- **Rede interna** (DNS, DHCP, Firewall)
- **Active Directory (AD)** para gerenciamento de usuários
- **Serviços de arquivos e compartilhamento** (Samba, NFS)
- **Banco de Dados** (MySQL, PostgreSQL, SQL Server)
- **Servidor Web** (Apache, Nginx, IIS)
- **Automação e DevOps** (Docker, Kubernetes, Ansible, Terraform)
- **Monitoramento** (Zabbix, Prometheus, Grafana)
- **Segurança** (Firewall, IDS/IPS como Snort, OpenVAS)
- **Backup e recuperação** (Bacula, Veeam Community)

---

### **2. Configurar a Máquina Host**
Recomendações para a máquina física:
- **CPU**: Pelo menos 4 núcleos (melhor se tiver suporte a virtualização)
- **RAM**: Mínimo 8GB (ideal 16GB+ para múltiplas VMs)
- **Armazenamento**: SSD de 256GB+ (para melhor desempenho)
- **Sistema Operacional**: Linux (Ubuntu, Debian) ou Windows 10/11 Pro (para Hyper-V)

---

### **3. Virtualizar o Ambiente**
Use um **hypervisor** para criar máquinas virtuais (VMs) que simulem servidores e estações de trabalho:
- **VirtualBox** (gratuito, multiplataforma)
- **VMware Workstation Player** (versão gratuita disponível)
- **Hyper-V** (se estiver no Windows Pro)

**Exemplo de configuração de VMs:**
- **1x Active Directory (Windows Server 2019/2022)**
- **1x Servidor Linux (Ubuntu/Debian) para serviços**
- **1x Estação de trabalho (Windows 10/11) para testes**
- **1x Servidor de Banco de Dados (MySQL/PostgreSQL)**
- **1x Servidor Web (Apache/Nginx)**

---

### **4. Criar uma Rede Interna**
Configure uma rede isolada no virtualizador (modo "Rede NAT" ou "Rede Interna") para simular um ambiente corporativo:
- Ative **DHCP** ou configure IPs estáticos.
- Use o **Windows Server como DC (Domain Controller)** para gerenciar usuários via Active Directory.
- No Linux, use **Samba** para integrar com o AD ou **OpenLDAP** para diretório alternativo.

---

### **5. Implementar Serviços Básicos**
- **Active Directory (AD)**: Gerencie usuários, grupos e políticas.
- **DNS e DHCP**: Use o Windows Server ou `dnsmasq` no Linux.
- **Servidor de Arquivos**: Configure compartilhamentos Samba (Linux) ou File Server (Windows).
- **Servidor Web**: Instale Apache/Nginx e crie um site local.
- **Banco de Dados**: Instale MySQL ou PostgreSQL para praticar SQL.

---

### **6. Automatizar e Gerenciar Infraestrutura**
- **Docker**: Crie containers para serviços isolados (ex.: WordPress, MySQL).
- **Kubernetes (Minikube/K3s)**: Simule um cluster de containers.
- **Ansible/Puppet**: Automatize configurações em várias VMs.
- **Terraform**: Pratique IaC (Infrastructure as Code) para provisionamento.

---

### **7. Monitoramento e Segurança**
- **Zabbix/Prometheus + Grafana**: Monitore recursos das VMs.
- **Snort/OpenVAS**: Simule detecção de intrusões.
- **Firewall (iptables/Windows Firewall)**: Configure regras de rede.
- **Backup (Bacula/Veeam)**: Automatize backups das VMs.

---

### **8. Projetos Práticos para Treinar**
- **Criar um domínio corporativo** (ex: `empresa.local`).
- **Gerenciar usuários e políticas no AD**.
- **Subir um servidor WordPress com Docker**.
- **Automatizar deploys com Ansible**.
- **Simular um ataque e defender a rede** (usando Kali Linux em uma VM).
- **Configurar um pipeline CI/CD simples** (Jenkins/GitLab).

---

### **9. Ferramentas Úteis**
- **Wireshark**: Analisar tráfego de rede.
- **GNS3**: Simular redes complexas (roteadores/switches).
- **Kali Linux**: Pentesting e segurança.
- **Git**: Versionamento de scripts/configurações.

---

### **10. Limitações de uma Única Máquina**
- **Desempenho**: Muitas VMs podem consumir recursos rapidamente.
- **Escalabilidade**: Não substitui um ambiente distribuído real.
- **Redundância**: Não é possível simular alta disponibilidade (HA) avançada.

---

### **Conclusão**
Você pode montar um **mini datacenter** em uma única máquina para estudar:
✔ Redes
✔ Sysadmin (Windows/Linux)
✔ DevOps (Docker, Kubernetes, Ansible)
✔ Segurança
✔ Banco de Dados

Se quiser um desafio maior, experimente substituir algumas VMs por **containers (Docker/Podman)** ou usar **provisionamento em nuvem gratuita (AWS Free Tier, Oracle Cloud)** para expandir.
