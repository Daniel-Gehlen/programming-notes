# Variáveis de Ambiente

## Conceitos Fundamentais

### Definição

- Armazenam configurações do sistema e usuário
- Acessíveis por processos e aplicativos
- Influenciam comportamento de programas

### Escopo

| Tipo        | Acesso                   | Exemplos de Uso          |
| ----------- | ------------------------ | ------------------------ |
| **Sistema** | Todos os usuários        | Configurações globais    |
| **Usuário** | Apenas sessão do usuário | Preferências individuais |

## Variáveis Comuns

### Básicas do Sistema

- `PATH`: Diretórios de executáveis (`/usr/bin`, `/usr/local/bin`)
- `HOME`: Diretório home do usuário (`/home/user`, `C:\Users\user`)
- `LANG/LC_ALL`: Configurações de localização (pt_BR.UTF-8)

### Desenvolvimento

- `JAVA_HOME`: Instalação do JDK
- `PYTHONPATH`: Caminhos para módulos Python
- `GOPATH`: Workspace do Go

## Gerenciamento Prático

### Linux/macOS

```bash
# Definir temporariamente
export VARIAVEL=valor

# Definir permanentemente (adicionar ao ~/.bashrc ou ~/.zshrc)
echo 'export VARIAVEL=valor' >> ~/.bashrc

# Visualizar
echo $VARIAVEL
```

### Windows (CMD/PowerShell)

```cmd
:: Definir temporariamente
set VARIAVEL=valor

:: Definir permanentemente (Interface Gráfica)
:: Painel de Controle > Sistema > Configurações avançadas

:: Visualizar
echo %VARIAVEL%
```

## Acesso em Linguagens

### Python

```python
import os
os.getenv('VARIAVEL')
os.environ['VARIAVEL'] = 'valor'
```

### JavaScript (Node.js)

```javascript
process.env.VARIAVEL;
```

### Java

```java
System.getenv("VARIAVEL");
```

## Boas Práticas

✔ **Documentar variáveis necessárias**
✔ **Usar nomes descritivos**
✔ **Evitar dados sensíveis** (usar vaults/secrets)
✔ **Versionar arquivos .env** (com cuidado)

## Importância

- **Portabilidade**: Configurações adaptáveis entre ambientes
- **Flexibilidade**: Comportamento dinâmico de aplicações
- **Segurança**: Isolamento de credenciais

## Conclusão

Variáveis de ambiente são essenciais para:

- Configuração dinâmica de sistemas
- Desenvolvimento multiplataforma
- Gestão de ambientes (dev, staging, production)
- Segurança de aplicações
