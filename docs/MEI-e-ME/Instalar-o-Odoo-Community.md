# Instalação do Odoo Community no Linux (Ubuntu/Debian)

## 🔧 Pré-requisitos
- Sistema Ubuntu/Debian atualizado
- Acesso root/sudo
- Conexão estável com internet

## 🚀 Passo a Passo Completo

### 1. Atualização do Sistema
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Instalação de Dependências
```bash
sudo apt install -y git python3-pip python3-dev python3-venv \
build-essential libpq-dev libxml2-dev libxslt1-dev libldap2-dev \
libsasl2-dev libssl-dev libffi-dev libjpeg-dev libblas-dev libatlas-base-dev \
libopenblas-dev gfortran liblcms2-dev libopenjp2-7-dev libtiff5-dev libfreetype6-dev
```

### 3. Criação de Usuário Dedicado
```bash
sudo adduser --system --home=/opt/odoo --group odoo
```

### 4. Instalação do PostgreSQL
```bash
sudo apt install -y postgresql
sudo su - postgres -c "createuser -s odoo"
```

### 5. Download do Odoo 16
```bash
sudo su - odoo -s /bin/bash
git clone https://github.com/odoo/odoo.git --depth 1 --branch 16.0 /opt/odoo/odoo16
exit
```

### 6. Ambiente Virtual Python
```bash
sudo su - odoo -s /bin/bash
python3 -m venv /opt/odoo/odoo16-venv
source /opt/odoo/odoo16-venv/bin/activate
```

### 7. Instalação de Requisitos
```bash
cd /opt/odoo/odoo16
pip install -r requirements.txt
exit
```

### 8. Configuração do Odoo
```bash
sudo nano /etc/odoo16.conf
```
**Conteúdo do arquivo:**
```ini
[options]
admin_passwd = senha_admin
db_host = False
db_port = False
db_user = odoo
db_password = False
addons_path = /opt/odoo/odoo16/addons
logfile = /var/log/odoo/odoo16.log
```

### 9. Configuração do Serviço Systemd
```bash
sudo nano /etc/systemd/system/odoo16.service
```
**Conteúdo do arquivo:**
```ini
[Unit]
Description=Odoo16
After=postgresql.service

[Service]
User=odoo
Group=odoo
ExecStart=/opt/odoo/odoo16-venv/bin/python3 /opt/odoo/odoo16/odoo-bin -c /etc/odoo16.conf

[Install]
WantedBy=multi-user.target
```

### 10. Inicialização do Serviço
```bash
sudo systemctl daemon-reload
sudo systemctl start odoo16
sudo systemctl enable odoo16
```

### 11. Acesso ao Odoo
Acesse no navegador:
```
http://seu_ip:8069
```

## 🔒 Configurações Recomendadas para Produção
1. **Firewall**:
   ```bash
   sudo ufw allow 8069/tcp
   ```
2. **Proxy Reverso (Nginx)**:
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/odoo
   ```
   [Configuração Nginx recomendada](https://www.odoo.com/documentation/16.0/administration/install/deploy.html#nginx)

## 📌 Dicas Importantes
- Altere `senha_admin` no arquivo de configuração
- Para atualizações: refaça o clone do repositório mantendo seu banco de dados
- Monitore logs em `/var/log/odoo/odoo16.log`

*"Instalação concluída! Agora você pode começar a configurar seus módulos Odoo."*
