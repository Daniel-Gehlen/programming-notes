# Enumeração de Portas e Serviços Vulneráveis

## Objetivo Geral

Aprender técnicas avançadas de enumeração de portas e serviços vulneráveis utilizando ferramentas como Nmap para identificar potenciais vetores de ataque.

---

## Pré-requisitos

- Conhecimento básico de linha de comando Linux.
- Familiaridade com conceitos de redes TCP/IP.

---

## Etapa 1: Fundamentos de Enumeração

### Definição e Importância

- **Enumeração**: Processo ativo para coletar informações detalhadas sobre sistemas alvo (usuários, serviços, configurações).
- **Diferença para Varredura**:
  - _Varredura_: Identifica hosts e portas abertas (ex: `ping sweep`).
  - _Enumeração_: Extrai dados específicos (ex: versão de serviços, usuários).

### Alvos Comuns de Enumeração

| Categoria           | Exemplos                      | Ferramentas Relacionadas |
| ------------------- | ----------------------------- | ------------------------ |
| **Portas/Serviços** | SSH, FTP, SMB                 | Nmap, NetCat             |
| **Usuários/Grupos** | Listas de contas AD           | DumpSec, enum4linux      |
| **Configurações**   | Políticas de senha, auditoria | SMBScanner, CrackMapExec |

### Ferramentas Essenciais

- **Nmap**: Varredura e enumeração de serviços.
- **NBTScan**: Enumeração NetBIOS.
- **SNMPwalk**: Coleta dados via SNMP.

---

## Etapa 2: Enumeração com Nmap

### Comandos Básicos

1. **Varredura de Portas**:
   ```bash
   nmap -sS -p 1-65535 <alvo>  # SYN Scan em todas as portas
   ```
2. **Detecção de Serviços**:
   ```bash
   nmap -sV <alvo>  # Identifica versões de serviços
   ```
3. **Banner Grabbing**:
   ```bash
   nmap -sV --script=banner <alvo>
   ```

### Exemplo Prático

```bash
nmap -sS -sV -p 21,22,80,443 -oN scan.txt 192.168.1.100
```

- **-sS**: SYN Scan (silencioso).
- **-oN**: Salva resultado em arquivo.

---

## Etapa 3: Nmap Scripting Engine (NSE)

### Introdução ao NSE

- **Função**: Automatiza tarefas complexas (ex: exploração de vulnerabilidades, enumeração avançada).
- **Categorias de Scripts**:
  - `safe`: Operações não intrusivas (ex: `http-title`).
  - `intrusive`: Risco de detectação (ex: `ftp-anon`).

### Scripts Úteis para Enumeração

| Script             | Descrição                         | Comando                                      |
| ------------------ | --------------------------------- | -------------------------------------------- |
| **http-enum**      | Enumera diretórios web.           | `nmap --script=http-enum <alvo>`             |
| **smb-enum-users** | Lista usuários SMB.               | `nmap --script=smb-enum-users -p 445 <alvo>` |
| **ssl-heartbleed** | Testa vulnerabilidade Heartbleed. | `nmap --script=ssl-heartbleed -p 443 <alvo>` |

### Exemplo com Scripts

```bash
nmap --script=vuln -p 80,443 192.168.1.100  # Verifica vulnerabilidades web
```

---

## Tabela Comparativa: Varredura vs. Enumeração

| Característica   | Varredura                    | Enumeração                     |
| ---------------- | ---------------------------- | ------------------------------ |
| **Profundidade** | Superficial (portas abertas) | Detalhada (usuários, serviços) |
| **Ferramentas**  | Ping, Nmap básico            | Nmap + NSE, enum4linux         |
| **Impacto**      | Baixo                        | Moderado/Alto (depende do uso) |

---

## Boas Práticas e Mitigação

### Para Pentesters

- **Documentação**: Registrar todas as descobertas.
- **Permissão**: Garantir autorização formal para testes.

### Para Administradores

- **Hardening**: Desativar serviços não essenciais (ex: SNMP, FTP).
- **Monitoramento**: Usar IDS/IPS (ex: Snort) para detectar enumeração.

---

## Conclusão

A enumeração é uma fase crítica no pentesting, fornecendo dados valiosos para exploração. Dominar ferramentas como **Nmap** e **NSE** permite identificar vulnerabilidades eficientemente.

**Aviso Legal**: Utilize estas técnicas apenas em sistemas autorizados.
