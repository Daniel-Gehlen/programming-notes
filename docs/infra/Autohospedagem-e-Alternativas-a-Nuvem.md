# Autohospedagem e Alternativas à Nuvem

## **Tópicos Principais**

1. **Introdução ao Autohospedagem e Alternativas à Nuvem**

   - Questionamento da dependência excessiva de provedores de nuvem.
   - Proposta de uso de ferramentas simples e open-source.

2. **Configuração do Ambiente de Desenvolvimento**

   - Escolha do sistema operacional **NixOS** para configuração declarativa.
   - Instalação do Linux via USB e configuração básica.

3. **Utilização do Docker e Docker Compose**

   - Explicação sobre a escolha do Docker para simplificar o gerenciamento de containers.
   - Uso do Docker Compose para configurar e rodar múltiplos containers.

4. **Configuração de Serviços com Caddy**

   - Implementação de um servidor web usando **Caddy** como proxy reverso.
   - Automatização da configuração HTTPS através do Caddy.

5. **Implantação e Atualização Contínua**

   - Estratégias para implantação contínua usando scripts shell.
   - Uso de cron jobs para automatizar implantações baseadas em mudanças no repositório Git.

6. **Considerações sobre Multi-Nodalidade e Escalabilidade**

   - Discussão sobre Docker Swarm e Kubernetes para escalabilidade.
   - A multi-nodalidade não é sempre necessária para todas as aplicações.

7. **Conclusão e Recomendações Finais**
   - Síntese dos benefícios da autohospedagem e simplicidade das ferramentas utilizadas.
   - Encorajamento ao uso de ferramentas simples e escaláveis para resolver problemas específicos.

---

## **Mais Detalhes**

### **Tópico: Configuração Inicial do Ambiente**

- Escolha do sistema operacional **NixOS** para simplicidade e rastreabilidade.
- Instalação via USB bootável e configuração inicial usando o instalador GUI.

### **Tópico: Configuração de Serviços Básicos**

- Configuração da rede local e habilitação do SSH através de arquivo de configuração.
- Instalação de ferramentas essenciais: **git, Docker, tar, e Vim**.
- Configuração do firewall para permitir conexões apenas nas portas **80 e 443**.

### **Tópico: Implantação de Serviços com Docker**

- Criação de **Dockerfile** para construção de imagens e execução de contêineres.
- Utilização do **Docker Compose** para orquestração multi-container.
- Exemplos de serviços implantados: servidor principal, Caddy para reverse proxy, e Plausible para analytics.

### **Tópico: Implementação de Zero Downtime Deployment**

- Script de shell para automação de deploy com escalabilidade e zero downtime.
- Utilização de Docker Compose para escalar serviços e minimizar interrupções.
- Uso de Caddy para reload automático após deploy.

### **Tópico: Gerenciamento de Domínio e Acesso Público**

- Configuração de DNS para tornar o serviço acessível globalmente.
- Exposição de serviços na rede local através de Caddy para HTTPS.

### **Tópico: Considerações sobre Multi-Nodal e Escalabilidade**

- Discussão sobre a escolha de não implementar multi-nodal devido às necessidades atuais.
- Possibilidade futura de explorar **Docker Swarm** para escalabilidade.

### **Tópico: Automação e Continuidade de Deploy**

- Desenvolvimento de scripts para automação de deploy usando cron jobs.
- Implementação de cron job para deploy contínuo baseado em alterações no repositório.

### **Tópico: Argumentos contra o uso da nuvem e vantagens da Abordagem Simples**

- Análise crítica dos argumentos comuns a favor da nuvem, como escalabilidade instantânea e facilidade de uso inicial.
- Defesa da escolha por ferramentas simples e abertas, destacando **simplicidade, controle e menor dependência de abstrações complexas**.

---

## **Conclusão**

- Enfatização na escolha de **ferramentas simples e abertas** sobre abstrações complexas e soluções de nuvem.
- Reconhecimento de casos específicos onde a nuvem é a melhor opção, mas defesa da **autonomia e controle** sobre o próprio ambiente de hospedagem.
