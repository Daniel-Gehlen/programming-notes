# Backends para hospedar uma aplicação completa e funcional

Listagem do mais barato (ou até gratuito) até o mais caro, considerando servidores tradicionais, serverless e plataformas como serviço (PaaS):

## 1. Opções Gratuitas (ou quase gratuitas para pequenos projetos)

- **Render (Free Tier)**
  – Oferece hospedagem gratuita para backends simples (com limites).
- **Railway.app (Free Tier)**
  – Permite implantar aplicações com um limite gratuito generoso.
- **Fly.io (Free Tier)**
  – Oferece hospedagem gratuita para pequenas aplicações.
- **Vercel (Serverless Functions – Free Tier)**
  – Ideal para APIs leves em Node.js, Python, Go.
- **MongoDB Atlas (Free Tier)**
  – Banco de dados gratuito para pequenos projetos.
- **Supabase (Free Tier)**
  – Backend Firebase-like com Postgres gratuito.
- **Firebase (Spark Plan – Free Tier)**
  – Inclui Firestore, Realtime DB e Functions.
- **PlanetScale (Free Tier)**
  – Banco de dados MySQL serverless gratuito.
- **Cloudflare Workers (Free Tier)**
  – Backend serverless com limite gratuito.

## 2. Opções Baratas (US$ 5 – US$ 20/mês)

- **Hetzner (VPS – €4.50/mês)**
  – Servidor barato na Europa.
- **DigitalOcean (Droplet – US$ 6/mês)**
  – VPS simples e eficiente.
- **Linode (Nanode – US$ 5/mês)**
  – Similar ao DigitalOcean.
- **Back4App (Free Tier + Planos acessíveis)**
  – Backend baseado em Parse.
- **Oracle Cloud (Always Free Tier)**
  – Oferece VPS grátis para sempre (AMD64 e ARM).

## 3. Opções Moderadas (US$ 20 – US$ 100/mês)

- **AWS Lightsail (US$ 7 – US$ 80/mês)**
  – Servidores gerenciados simples.
- **Google Cloud Run (Pay-per-use, ~US$ 20–50 para apps médias)**
  – Serverless containers.
- **Azure App Service (Básico – ~US$ 13+/mês)**
  – PaaS para aplicações web.
- **Heroku (Standard Dyno – US$ 7–25/dyno + add-ons)**
  – Fácil, mas pode ficar caro.

## 4. Opções Caras (US$ 100 – US$ 500+/mês)

- **AWS EC2 (depende do uso, pode escalar rápido)**
  – Custo variável.
- **AWS Elastic Beanstalk / ECS / EKS**
  – Gerenciado, mas complexo e caro.
- **Google Compute Engine (GCE) / Kubernetes Engine (GKE)**
  – Similar à AWS, custo elevado.
- **Azure Virtual Machines / AKS**
  – Infraestrutura tradicional cara.

## 5. Opções Muito Caras (US$ 500+/mês – Enterprise)

- **AWS RDS (Banco de dados gerenciado)**
  – Pode ficar extremamente caro.
- **Dedicated Servers (OVH, AWS Dedicated Hosts, etc.)**
  – Custo alto para servidores dedicados.
- **SaaS Custom Enterprise (Firebase, MongoDB Atlas Premium, etc.)**
  – Planos corporativos.

## Recomendações por Custo-Benefício:

- **Se quer o mais barato possível:**
  Railway, Render ou Fly.io (free tier + boas condições).
- **Se precisa de um VPS barato:**
  Hetzner, DigitalOcean ou Oracle Cloud (Always Free).
- **Se quer serverless sem dor de cabeça:**
  Vercel, Cloudflare Workers ou Firebase.
- **Se precisa de escalabilidade moderada:**
  Google Cloud Run ou AWS Lightsail.
- **Evite Heroku se o custo for preocupação** (fica caro rápido).
- **Evite AWS/Azure/GCP direto sem otimização** (pode sair muito caro).
