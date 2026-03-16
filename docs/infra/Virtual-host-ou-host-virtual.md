# Virtual Host (Host Virtual)

## **Visão Geral**

Técnica para hospedar múltiplos sites em um único servidor físico, diferenciando-os por:

- Nome de domínio (Name-based)
- Endereço IP (IP-based)

---

## **Tipos de Virtual Host**

### 🌐 **Name-based Virtual Host**

**Como funciona:**

- Usa o cabeçalho `Host` da requisição HTTP
- Múltiplos domínios compartilham o mesmo IP
- Exemplo de configuração (Apache):

  ```apache
  <VirtualHost *:80>
      ServerName site1.com
      DocumentRoot /var/www/site1
  </VirtualHost>

  <VirtualHost *:80>
      ServerName site2.com
      DocumentRoot /var/www/site2
  </VirtualHost>
  ```

**Vantagens:**

- Economia de endereços IP
- Configuração simplificada
- Ideal para a maioria dos casos

**Limitação histórica:**

- Problemas com HTTPS sem SNI (solucionado modernamente)

### 🔢 **IP-based Virtual Host**

**Como funciona:**

- Cada domínio usa um IP exclusivo
- Necessário para SSL sem SNI
- Exemplo de configuração (Apache):

  ```apache
  <VirtualHost 192.168.1.1:80>
      ServerName site1.com
      DocumentRoot /var/www/site1
  </VirtualHost>

  <VirtualHost 192.168.1.2:80>
      ServerName site2.com
      DocumentRoot /var/www/site2
  </VirtualHost>
  ```

**Casos de uso:**

- Sistemas legados sem suporte a SNI
- Requisitos específicos de segurança/isolamento

---

## **Configuração Prática**

### 🔧 **Passo-a-passo (Apache)**

1. Criar diretórios para cada site:

   ```bash
   mkdir -p /var/www/{site1,site2}
   ```

2. Adicionar configurações no arquivo:

   ```bash
   sudo nano /etc/apache2/sites-available/site1.conf
   ```

3. Habilitar sites e recarregar:
   ```bash
   sudo a2ensite site1.conf
   sudo systemctl reload apache2
   ```

### 🌐 **DNS Essentials**

- Registrar domínios e apontar para o IP do servidor
- Configurar registros A/AAAA no DNS

---

## **Tecnologias Modernas**

### 🔐 **SNI (Server Name Indication)**

- Permite múltiplos certificados SSL no mesmo IP
- Suportado por todos navegadores modernos
- Requisito mínimo:
  - OpenSSL 0.9.8+
  - Apache 2.2.12+

### 🚀 **Otimização**

- Use `mod_cache` para sites estáticos
- Implemente HTTP/2 para melhor performance
- Monitore recursos com `htop` ou `nginx-status`

---

## **Comparativo Técnico**

| **Critério**        | **Name-based** | **IP-based**     |
| ------------------- | -------------- | ---------------- |
| **IPs Necessários** | 1              | 1 por site       |
| **Custo**           | Baixo          | Alto             |
| **SSL**             | Requer SNI     | Funciona sem SNI |
| **Complexidade**    | Simples        | Moderada         |

---

## **Melhores Práticas**

1. **Padronize estruturas de diretórios**
   - `/var/www/<site>/public_html`

2. **Habilite logging separado**

   ```apache
   ErrorLog ${APACHE_LOG_DIR}/site1_error.log
   CustomLog ${APACHE_LOG_DIR}/site1_access.log combined
   ```

3. **Use includes para configurações repetidas**
   ```apache
   Include /etc/apache2/common-configs/*
   ```

---

## **Conclusão**

- **Prefira name-based** na maioria dos cenários
- **Use IP-based** apenas para requisitos específicos
- **Implemente SNI** para HTTPS moderno

> **Dica:** Para alta disponibilidade, combine com balanceamento de carga.
