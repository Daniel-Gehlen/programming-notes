# Blockchain e Smart Contracts - Ethereum

## Objetivo Geral

Explorar a plataforma Ethereum e seus smart contracts, analisando suas capacidades e desafios de segurança.

---

## Percurso do Curso

### Etapa 1: Plataforma Ethereum

- **Posição**: 2ª maior criptomoeda
- **Criação**: Vitalik Buterin (2013)
- **Lançamento**: Primeiro bloco em 2015
- **Combustível**: Ether ("gas") para operações

**Dados do Bloco**:

- Hash de transação
- Status
- Taxas
- Outros parâmetros

### Etapa 2: Smart Contracts

**Origem**:

- Conceito de Nick Szabo (1994)
- Protocolos auto-executáveis

**Exemplo em Solidity**:

```solidity
pragma solidity ^0.4.0;
contract Coin {
    address public minter;
    mapping (address => uint) public balances;
    event Sent(address from, address to, uint amount);

    function Coin() { minter = msg.sender; }

    function mint(address receiver, uint amount) {
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }
}
```

**Propriedades**:

- Lógica programável
- Linguagem Solidity
- Execução distribuída
- Verificação automática

### Etapa 3: Mecanismos de Consenso

| **Proof of Work (PoW)**  | **Proof of Stake (PoS)**   |
| ------------------------ | -------------------------- |
| Alto consumo energético  | Baixo consumo              |
| Competição mineradora    | Baseado em posse de moedas |
| Vulnerável a ataques 51% | Penaliza mau comportamento |

### Etapa 4: Transações

- **Internas**: Criação/modificação de contratos
- **Externas**: Transferências de valor

### Etapa 5: Ether vs Tokens

- **Ether**: Moeda nativa
- **Tokens**: Ativos construídos sobre Ethereum
  - Ex: REP (reputação), GNT (poder computacional)

### Etapa 6: Hard Forks

- **Frontier**: Bloco genesis
- **DAO Fork**: Grande atualização de protocolo

### Etapa 7-9: Ferramentas Práticas

1. **MetaMask**: Carteira digital
2. **Etherscan.io**: Explorador de blocos
3. **Criação de Carteira**: Tutorial passo a passo

### Etapa 10: Análise de Rede

- Estatísticas históricas
- Transações com valores nulos
- Padrões de uso

---

## Recursos Adicionais

- [Documentação Oficial](https://ethereum.org/)
- [Etherscan](https://etherscan.io/)
- [MetaMask](https://metamask.io/)
- [Portal Bitcoin - Guia Ethereum](https://portaldobitcoin.com/)
