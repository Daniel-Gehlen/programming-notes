# Ferramentas Open-Source para Implantação de Aplicações

## **Introdução**

**Objetivo:** Apresentar ferramentas open-source que simplificam o processo de implantação de aplicações, com foco em **Coolify**, uma alternativa poderosa e gratuita.
**Contexto:** Soluções pagas (como Heroku) são caras e complexas. Ferramentas como Coolify oferecem opções viáveis e eficientes.

---

## **1. Coolify: O Heroku Open-Source**

### **O que é?**

- Ferramenta open-source para implantação automática de aplicações.
- Oferece templates prontos para produção.
- 100% gratuito e sem segredos.

### **Funcionalidades**

- Implantação via Docker, GitHub ou templates pré-configurados.
- Suporte a serviços como MongoDB, Postgres, Redis.
- Automatização de atualizações via integração com Git.

### **Vantagens**

- Simplifica o gerenciamento de infraestrutura.
- Ideal para pequenas e médias aplicações.
- Alternativa ao Kubernetes para casos menos complexos.

---

## **2. Alternativas ao Kubernetes**

### **Problemas com Kubernetes**

- Complexidade de gerenciamento.
- Over-engineering para aplicações pequenas/médias.

### **Solução**

- **Coolify** é uma alternativa simplificada para APIs, front-ends e bancos de dados.
- Ideal para quem não precisa de clusters Kubernetes.

---

## **3. Como Usar o Coolify**

### **Instalação**

```bash
curl -fsSL https://get.coolify.io | bash
```

- Pode ser instalado em servidor local, VPS ou Raspberry Pi.

### **Configuração**

- Integração com repositórios GitHub.
- Configuração de Docker Compose para serviços (ex: MongoDB).
- Gerenciamento de domínios e certificados SSL.

### **Exemplo Prático**

- Implantação de uma API com MongoDB via Docker Compose.
- Visualização de logs e monitoramento no painel do Coolify.

---

## **4. Integração com GitHub Actions**

### **Fluxo de Trabalho**

1. Configurar GitHub Actions para testes e build.
2. Publicar imagem Docker no Docker Hub.
3. Atualizar automaticamente o Coolify após o build.

### **Exemplo de Configuração**

```yaml
name: Deploy to Coolify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Build Docker image
        run: docker build -t your-dockerhub-username/your-repo-name .
      - name: Log in to Docker Hub
        run: echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin
      - name: Push Docker image
        run: docker push your-dockerhub-username/your-repo-name
      - name: Trigger Coolify update
        run: curl -X POST https://coolify.io/api/update -H "Authorization: Bearer ${{ secrets.COOLIFY_TOKEN }}"
```

---

## **5. Hospedagem com Hostinger**

### **Vantagens**

- VPS a partir de R$10/mês.
- Painel com terminal web integrado.
- Assistente de IA para configuração de segurança.

### **Como Usar**

1. Configurar uma VPS na Hostinger.
2. Instalar o Coolify no servidor.
3. Gerenciar aplicações via painel do Coolify.

---

## **6. Outras Ferramentas Open-Source**

### **Self-Hosted**

- **[SelfHosted](https://selfh.st)**: Projetos open-source para máquinas virtuais.
- **[Open Source Alternative](https://opensourcealternative.to)**: Alternativas a ferramentas pagas.

### **Exemplos**

- **Mautic**: Automação de marketing.
- **Plasmic**: Design e desenvolvimento front-end.
- **Appwrite**: Backend-as-a-Service.

---

## **7. Fluxo Completo de Implantação Gratuita**

1. **Desenvolvimento**:
   - Use **VSCode** e **Git**.
   - Hospede código no **GitHub** ou **GitLab**.
2. **CI/CD**:
   - Configure **GitHub Actions** para testes e build.
   - Publique imagens no **Docker Hub**.
3. **Hospedagem**:
   - Use **Coolify** para gerenciar implantação.
   - Hospede em **VPS da Hostinger**.
4. **Monitoramento**:
   - Use **Uptime Kuma** para disponibilidade.
   - Configure alertas via **Telegram** ou **Discord**.

---

## **8. Links Úteis**

- [Coolify](https://coolify.io)
- [SelfHosted](https://selfh.st)
- [Hostinger](https://hostinger.com.br)
- [GitHub Actions](https://docs.github.com/actions)
- [Uptime Kuma](https://github.com/louislam/uptime-kuma)

---

## **Conclusão**

- **Coolify** simplifica a implantação de aplicações.
- Combinado com **GitHub Actions** e **Hostinger**, cria um fluxo completo e gratuito.
- Explore outras ferramentas open-source para reduzir custos.

### **Desafio Final**

Configure o Coolify para atualizar automaticamente após um build no GitHub Actions e compartilhe sua experiência!
