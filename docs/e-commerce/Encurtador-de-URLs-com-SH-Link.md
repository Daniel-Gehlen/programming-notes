# Encurtador de URLs com SH Link

**Como criar seu próprio encurtador de URLs usando o SH Link, Docker, Traefik, e uma VPS (como a da Hostinger).**

---

## Passo a Passo para Criar um Encurtador de URLs com SH Link

### 1. Pré-requisitos

- **VPS**: Uma máquina virtual (ex: Hostinger, Oracle Cloud, AWS Free Tier).
- **Domínio**: Um domínio próprio (opcional, mas recomendado).
- **Docker e Docker Compose**: Instalados na VPS.
- **Git**: Para clonar o repositório do projeto.

---

### 2. Configuração da VPS

1. **Acesse sua VPS via SSH**:
   ```bash
   ssh root@seu_ip_da_vps
   ```
2. **Instale o Docker e Docker Compose**:
   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose -y
   ```
3. **Verifique a instalação**:
   ```bash
   docker --version
   docker-compose --version
   ```

---

### 3. Clonar o Repositório do Projeto

1. **Clone o repositório com o template do SH Link**:
   ```bash
   git clone https://github.com/seu_usuario/shlink-docker-template.git
   cd shlink-docker-template
   ```
2. **Edite o arquivo `.env`**:
   - Defina o domínio que você vai usar (ex: `meudominio.com`).
   - Configure a `SHLINK_API_KEY` (gerada automaticamente ao rodar o Docker).

---

### 4. Configuração do Traefik para Certificados SSL

1. **Edite o arquivo `docker-compose.yml`**:
   Certifique-se de que o Traefik está configurado para usar o Let's Encrypt.
   **Exemplo de configuração**:
   ```yaml
   traefik:
     image: traefik:v2.5
     container_name: traefik
     ports:
       - "80:80"
       - "443:443"
     volumes:
       - ./letsencrypt:/letsencrypt
       - /var/run/docker.sock:/var/run/docker.sock
     command:
       - "--api.insecure=true"
       - "--providers.docker=true"
       - "--entrypoints.web.address=:80"
       - "--entrypoints.websecure.address=:443"
       - "--certificatesresolvers.myresolver.acme.email=seu_email@dominio.com"
       - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
       - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
   ```
2. **Suba os containers**:
   ```bash
   docker-compose up -d
   ```

---

### 5. Configuração do SH Link

1. **Acesse o painel do SH Link**:
   Abra o navegador e acesse `https://seu_dominio.com`.
   Use a API Key gerada no arquivo `.env` para autenticar.
2. **Encurte uma URL**:
   No painel do SH Link, cole a URL que deseja encurtar e clique em "Save".
   **Exemplo**:
   `https://seu_dominio.com/ew` redireciona para `https://erickwendel.com`.

---

### 6. Testes e Verificações

1. **Verifique o certificado SSL**:
   Acesse `https://seu_dominio.com` e confira se o certificado está válido.
2. **Teste o encurtador**:
   Cole a URL encurtada em um navegador e confira se o redirecionamento funciona.
3. **Analytics**:
   No painel do SH Link, veja as estatísticas de cliques, localização e referências.

---

### 7. Integração com Matomo (Opcional)

1. **Adicione o Matomo para analytics avançados**:
   No arquivo `docker-compose.yml`, adicione o serviço do Matomo:
   ```yaml
   matomo:
     image: matomo
     container_name: matomo
     environment:
       - MATOMO_DATABASE_HOST=db
       - MATOMO_DATABASE_USERNAME=root
       - MATOMO_DATABASE_PASSWORD=senha
     volumes:
       - ./matomo:/var/www/html
   ```
2. **Suba o container**:
   ```bash
   docker-compose up -d
   ```
3. **Acesse o Matomo**:
   Abra `https://seu_dominio.com/matomo` e configure o analytics.

---

### 8. Lição de Casa

- **Adicione mais plugins**: Explore outros plugins open source para integrar ao SH Link.
- **Configure um domínio personalizado**: Use um domínio próprio (ex: `meuencurtador.com`) para substituir o domínio da VPS.
- **Automatize backups**: Configure backups regulares dos dados do SH Link e do Matomo.

---

## Links Úteis

- **Repositório do SH Link**: [Shlink GitHub](https://github.com/shlinkio/shlink)
- **Traefik Documentation**: [Traefik Docs](https://doc.traefik.io/traefik/)
- **Matomo**: [Matomo Website](https://matomo.org/)

---

## Conclusão

Seguindo esses passos, você terá um encurtador de URLs funcional, com certificados SSL gratuitos e analytics avançados.
