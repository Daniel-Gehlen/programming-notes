# 🖥️ Criar um Servidor Local como Nuvem Compartilhada

## 🔥 Solução Firebase-like Local

### **1. Supabase (Auto-hospedado)**

```bash
# Instalação via Docker (requer Docker instalado)
git clone --depth 1 https://github.com/supabase/supabase
cd supabase/docker
docker-compose up -d
```

**Recursos:**

- ✅ Banco de dados PostgreSQL em tempo real
- ✅ Autenticação (Google, GitHub, email/senha)
- ✅ Armazenamento de arquivos estilo S3
- ✅ API REST/GraphQL automática

**Acesso:**

- Painel admin: `http://localhost:3000`
- API: `http://localhost:8000`

---

### **2. Appwrite (Backend auto-hospedado)**

```bash
docker run -it --rm \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume "$(pwd)"/appwrite:/usr/src/code/appwrite \
  appwrite/appwrite
```

**Recursos:**

- ✅ Autenticação (OAuth, JWT)
- ✅ Banco NoSQL
- ✅ Funções serverless

---

## 🌐 Hospedagem de Sites Local (Tipo Hostinger)

### **Opção A: Docker + Traefik**

```yaml
# docker-compose.yml
version: "3"
services:
  wordpress:
    image: wordpress
    labels:
      - "traefik.http.routers.wordpress.rule=Host(`meusite.local`)"
```

**Como usar:**

1. Instale Docker e Docker Compose
2. Crie um arquivo `docker-compose.yml`
3. Execute `docker-compose up -d`

### **Opção B: Laragon/XAMPP**

- **Laragon** (Windows): Ideal para PHP/MySQL + Node.js/Python
- **XAMPP** (Multiplataforma): Solução tradicional

---

## 📦 Armazenamento e APIs Locais

### **MinIO (Alternativa S3)**

```bash
docker run -p 9000:9000 minio/minio server /data
```

**Recursos:**

- Armazenamento compatível com Amazon S3
- Painel web em `http://localhost:9000`

### **PocketBase (Tudo-em-um)**

```bash
./pocketbase serve
```

**Recursos:**

- Banco SQLite embutido
- Autenticação pronta
- Painel admin integrado

---

## 🔗 Compartilhamento na Rede

### **Ngrok (Túnel para Internet)**

```bash
ngrok http 80
```

**Uso:**

- Gera um link público (ex: `https://abc123.ngrok.io`)
- Ideal para testes temporários

### **Tailscale (VPN Simples)**

```bash
# Instale e execute:
tailscale up
```

**Vantagens:**

- Conexão segura entre dispositivos
- Acesso como se estivessem na mesma rede

---

## 🏆 Comparativo Rápido

| Necessidade                   | Melhor Opção         |
| ----------------------------- | -------------------- |
| **Firebase-like**             | Supabase ou Appwrite |
| **Hospedar sites PHP**        | Laragon ou Docker    |
| **Armazenamento de arquivos** | MinIO                |
| **Compartilhar localmente**   | Tailscale ou Ngrok   |

---

## 🚀 Como Escolher?

- **Para produção**: Supabase ou Appwrite
- **Testes rápidos**: XAMPP/Laragon
- **Time remoto**: Tailscale + Docker

**Links Úteis:**

- [Supabase Docs](https://supabase.com/docs)
- [Appwrite Installation](https://appwrite.io/docs/installation)
- [Tailscale Guide](https://tailscale.com/kb/)

> 💡 **Dica Pro**: Use `Caddy` como proxy reverso para HTTPS automático em domínios locais!
