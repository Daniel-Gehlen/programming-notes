# Configurar um Servidor Web como Nginx ou Apache como Proxy Reverso para Odoo

## **Introdução**
Configurar um servidor web como **Nginx** ou **Apache** como proxy reverso para o Odoo é uma prática recomendada para ambientes de produção. Isso melhora:
- **Segurança**
- **Desempenho**
- **Facilidade de configuração de SSL (HTTPS)**

---

## **Opção 1: Configurar Nginx como Proxy Reverso para o Odoo**

### **1. Instale o Nginx**
```bash
sudo apt update
sudo apt install nginx -y
```

### **2. Crie um Arquivo de Configuração para o Odoo**
```bash
sudo nano /etc/nginx/sites-available/odoo
```

**Conteúdo do arquivo (ajuste conforme necessário):**
```nginx
server {
    listen 80;
    server_name seu_dominio_ou_ip;

    # Logs
    access_log /var/log/nginx/odoo.access.log;
    error_log /var/log/nginx/odoo.error.log;

    # Proxy reverso para o Odoo
    location / {
        proxy_pass http://127.0.0.1:8069;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Bloqueia acesso direto ao banco de dados
    location /longpolling {
        proxy_pass http://127.0.0.1:8072;
    }

    # Cache para arquivos estáticos
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://127.0.0.1:8069;
    }
}
```
**Substitua `seu_dominio_ou_ip` pelo seu domínio ou endereço IP.**

### **3. Habilite o Site no Nginx**
```bash
sudo ln -s /etc/nginx/sites-available/odoo /etc/nginx/sites-enabled/odoo
```

### **4. Teste e Recarregue o Nginx**
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### **5. Configure o Odoo para Trabalhar com o Nginx**
Edite o arquivo de configuração do Odoo (`/etc/odoo16.conf`):
```ini
proxy_mode = True
```
**Reinicie o serviço do Odoo:**
```bash
sudo systemctl restart odoo16
```

---

## **Opção 2: Configurar Apache como Proxy Reverso para o Odoo**

### **1. Instale o Apache**
```bash
sudo apt update
sudo apt install apache2 -y
```

### **2. Habilite os Módulos Necessários**
```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod headers
sudo a2enmod ssl  # Se planeja usar HTTPS
```

### **3. Crie um Arquivo de Configuração para o Odoo**
```bash
sudo nano /etc/apache2/sites-available/odoo.conf
```

**Conteúdo do arquivo (ajuste conforme necessário):**
```apache
<VirtualHost *:80>
    ServerName seu_dominio_ou_ip

    # Logs
    ErrorLog ${APACHE_LOG_DIR}/odoo_error.log
    CustomLog ${APACHE_LOG_DIR}/odoo_access.log combined

    # Proxy reverso para o Odoo
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:8069/
    ProxyPassReverse / http://127.0.0.1:8069/

    # Configurações adicionais
    <Location />
        Require all granted
    </Location>

    # Bloqueia acesso direto ao banco de dados
    <Location /longpolling>
        ProxyPass http://127.0.0.1:8072/
        ProxyPassReverse http://127.0.0.1:8072/
    </Location>
</VirtualHost>
```
**Substitua `seu_dominio_ou_ip` pelo seu domínio ou endereço IP.**

### **4. Habilite o Site no Apache**
```bash
sudo a2ensite odoo.conf
sudo a2dissite 000-default.conf
```

### **5. Teste e Recarregue o Apache**
```bash
sudo apachectl configtest
sudo systemctl reload apache2
```

### **6. Configure o Odoo para Trabalhar com o Apache**
Edite o arquivo de configuração do Odoo (`/etc/odoo16.conf`):
```ini
proxy_mode = True
```
**Reinicie o serviço do Odoo:**
```bash
sudo systemctl restart odoo16
```

---

## **Configuração de SSL (HTTPS)**

### **1. Instale o Certbot**
**Para Nginx:**
```bash
sudo apt install certbot python3-certbot-nginx -y
```
**Para Apache:**
```bash
sudo apt install certbot python3-certbot-apache -y
```

### **2. Obtenha o Certificado SSL**
**Para Nginx:**
```bash
sudo certbot --nginx
```
**Para Apache:**
```bash
sudo certbot --apache
```
*Siga as instruções na tela para configurar o SSL.*

### **3. Configure o Redirecionamento Automático para HTTPS**
**Verifique se o arquivo de configuração inclui:**

**Para Nginx:**
```nginx
if ($scheme != "https") {
    return 301 https://$host$request_uri;
}
```

**Para Apache:**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## **Conclusão**
Agora, seu Odoo está configurado com **Nginx** ou **Apache** como proxy reverso e pode ser acessado via **HTTPS**, garantindo maior segurança e desempenho.
