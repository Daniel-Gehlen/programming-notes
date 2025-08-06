# iptables vs NFTables: Gerenciamento de Firewall no Linux

## Visão Geral

| Ferramenta   | Descrição                                   | Status      |
| ------------ | ------------------------------------------- | ----------- |
| **iptables** | Tradicional sistema de filtragem de pacotes | Legado      |
| **NFTables** | Substituição moderna com melhor desempenho  | Recomendado |

## Conceitos Fundamentais

### Estrutura Comum

1. **Tabelas**:

   - `filter`: Filtragem básica de pacotes
   - `nat`: Tradução de endereços de rede
   - `mangle`: Modificação de pacotes
   - `raw`: Processamento especial de pacotes

2. **Cadeias (Chains)**:

   - `INPUT`: Pacotes destinados ao sistema
   - `FORWARD`: Pacotes em roteamento
   - `OUTPUT`: Pacotes originados localmente

3. **Ações**:
   - `ACCEPT`: Permite o tráfego
   - `DROP`: Descarta silenciosamente
   - `REJECT`: Recusa com resposta
   - `LOG`: Registra para auditoria

## iptables

### Comandos Essenciais

```bash
# Listar regras
sudo iptables -L -n -v

# Permitir SSH
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Bloquear IP
sudo iptables -A INPUT -s 192.168.1.100 -j DROP

# Salvar configuração
sudo iptables-save > /etc/iptables/rules.v4
```

## NFTables

### Vantagens Principais

- Sintaxe mais limpa e intuitiva
- Melhor desempenho com muitas regras
- Suporte nativo a conjuntos (sets) e mapas

### Comandos Básicos

```bash
# Listar todas as regras
sudo nft list ruleset

# Permitir HTTP/HTTPS
sudo nft add rule ip filter input tcp dport {80,443} accept

# Criar conjunto de IPs bloqueados
sudo nft add set ip filter blacklist { type ipv4_addr\; }

# Salvar configuração
sudo nft list ruleset > /etc/nftables.conf
```

## Tabela Comparativa

| Característica | iptables | NFTables     |
| -------------- | -------- | ------------ |
| **Sintaxe**    | Complexa | Simplificada |
| **Desempenho** | Adequado | Superior     |
| **Conjuntos**  | Não      | Sim          |
| **IPv4/IPv6**  | Separado | Unificado    |
| **Suporte**    | Legado   | Ativo        |

## Migração para NFTables

1. Converter regras existentes:

   ```bash
   sudo iptables-translate -A INPUT -p tcp --dport 22 -j ACCEPT
   ```

2. Equivalente NFTables:
   ```bash
   sudo nft add rule ip filter input tcp dport 22 accept
   ```

## Conclusão

- **Para sistemas legados**: iptables ainda funciona bem
- **Novas implementações**: NFTables é a escolha recomendada
- **Casos complexos**: NFTables oferece melhor escalabilidade

O documento foi organizado com:

- Comparação visual clara entre as ferramentas
- Seções lógicas para cada tecnologia
- Exemplos práticos de comandos
- Destaque para as vantagens do NFTables
- Guia básico de migração
- Formatação consistente em markdown
