# Plugins WordPress com Docker e GitHub

Vamos criar um ambiente profissional completo para desenvolver, versionar e publicar seus plugins WordPress.

---

## Passo 1: Configuração Inicial do Docker

### 1.1 Instale o Docker no Linux Mint

```bash
sudo apt update
sudo apt install docker.io docker-compose git
sudo usermod -aG docker $USER
newgrp docker  # Atualiza as permissões sem precisar relogar
```

### 1.2 Crie a estrutura do projeto

```bash
mkdir meu-plugin-wordpress
cd meu-plugin-wordpress
```

### 1.3 Crie o arquivo `docker-compose.yml`

```yaml
version: "3.8"
services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpresspass
    volumes:
      - db_data:/var/lib/mysql
    restart: always
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpresspass
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - ./wp-content:/var/www/html/wp-content
      - ./plugins/meu-plugin:/var/www/html/wp-content/plugins/meu-plugin
    restart: always
volumes:
  db_data:
```

### 1.4 Inicie o ambiente

```bash
docker-compose up -d
```

---

## Passo 2: Criar seu Plugin

### 2.1 Estrutura básica do plugin

```bash
mkdir -p plugins/meu-plugin
cd plugins/meu-plugin
```

### 2.2 Crie o arquivo principal `meu-plugin.php`

```php
<?php
/**
 * Plugin Name: Meu Plugin
 * Plugin URI: https://github.com/seu-usuario/meu-plugin-wordpress
 * Description: Um plugin incrível que estou desenvolvendo
 * Version: 1.0.0
 * Author: Seu Nome
 * Author URI: https://seusite.com
 * License: GPL2
 */

defined('ABSPATH') or die('Acesso direto não permitido!');

// Adicione seu código aqui
function meu_plugin_shortcode() {
    return '<div class="meu-plugin"><p>Funcionando corretamente!</p></div>';
}
add_shortcode('meu_plugin', 'meu_plugin_shortcode');
```

---

## Passo 3: Configuração do GitHub

### 3.1 Inicialize o repositório Git

```bash
git init
```

### 3.2 Crie um arquivo `.gitignore`

```bash
echo "wp-content/*.log
.DS_Store
.idea
vendor/
node_modules/" > .gitignore
```

### 3.3 Adicione e commit os arquivos

```bash
git add .
git commit -m "Versão inicial do plugin"
```

### 3.4 Crie um repositório no GitHub e envie

1. Crie um novo repositório em [github.com/new](https://github.com/new).
2. Siga as instruções para conectar seu repositório local.

---

## Passo 4: Testando seu Plugin

1. Acesse o WordPress em [http://localhost:8080](http://localhost:8080).
2. Complete a instalação padrão.
3. Vá para **Plugins** e ative seu plugin.
4. Crie uma página ou post com o shortcode `[meu_plugin]`.

---

## Passo 5: Publicando no WordPress.org

### 5.1 Prepare seu plugin para distribuição

```bash
cd plugins/meu-plugin
zip -r ../meu-plugin.zip .
```

### 5.2 Submeta ao WordPress.org

1. Crie uma conta em [wordpress.org/support/register.php](https://wordpress.org/support/register.php).
2. Acesse [wordpress.org/plugins/developers/add/](https://wordpress.org/plugins/developers/add/).
3. Envie o arquivo ZIP e preencha os detalhes.

---

## Fluxo de Trabalho Diário

- **Desenvolver**:
  ```bash
  code . # Ou seu editor favorito
  ```
- **Testar**:
  Acesse [http://localhost:8080](http://localhost:8080) e verifique as mudanças.
- **Versionar**:
  ```bash
  git add .
  git commit -m "Descrição das alterações"
  git push origin main
  ```
- **Atualizar versão** (no arquivo principal do plugin):
  ```php
  /**
   * Version: 1.0.1
   */
  ```

---

## Dicas Profissionais

- **Para desenvolvimento avançado**:
  ```bash
  docker exec -it meu-plugin-wordpress_wordpress_1 bash
  ```
- **Ver logs**:
  ```bash
  docker-compose logs -f
  ```
- **Parar o ambiente**:
  ```bash
  docker-compose down
  ```
- **Reiniciar**:
  ```bash
  docker-compose up -d
  ```

---

## Pronto! Agora você tem:

- Ambiente Docker isolado
- Controle de versão com GitHub
- Fluxo para publicar no WordPress.org
- Estrutura profissional para desenvolvimento
