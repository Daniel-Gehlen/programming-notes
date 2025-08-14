# Desenvolvimento de Smart Contracts

## Objetivo Geral

- Conhecimento básico em JavaScript, C++ ou Python
- Noções de redes de computadores
- Fundamentos de criptografia e algoritmos

---

## Percurso do Curso

### Etapa 1: Padrões de Contratos Inteligentes

**Introdução**:

- Acordos automatizados na blockchain
- Características: imutáveis e irreversíveis
- Casos de uso: votações, crowdfunding, NFTs

**Padrões ERC**:

- Padronização Ethereum (Ethereum Request for Comments)
- Benefícios:
  - Segurança aprimorada
  - Compatibilidade entre contratos
  - Suporte multi-linguagem

---

### Etapa 2: Padrão ERC-20

**Características**:

- Protocolo para tokens fungíveis
- Funções obrigatórias:
  ```solidity
  function totalSupply() public view returns (uint256)
  function balanceOf(address _owner) public view returns (uint256)
  function transfer(address _to, uint256 _value) public returns (bool)
  ```

**Campos opcionais**:

- Símbolo do token (ex: "USDT")
- Casas decimais (ex: 18)
- Nome do token (ex: "Tether")

**Documentação**: [Ethereum.org](https://ethereum.org/)

---

### Etapa 3: Tokens ERC-20

**Diferenciais**:

- Criados sobre Ethereum (diferente do ETH nativo)
- Requerem ETH para pagar taxas ("gas")

**Exemplos notáveis**:
| Token | Símbolo | Caso de Uso |
|---------|---------|---------------------|
| Tether | USDT | Stablecoin |
| Chainlink| LINK | Oracles |
| ApeCoin | APE | Metaverso |

---

### Etapa 4: Criando um Token ERC-20

**Ferramentas**:

- Remix IDE (ambiente de desenvolvimento)
- Ganache (blockchain local)
- Solidity (linguagem)

**Recurso**: [Código exemplo no GitHub](https://github.com/)

---

### Etapa 5: Padrão ERC-721 (NFTs)

**Diferenciais**:

- Tokens não-fungíveis (únicos)
- Exemplo mínimo:
  ```solidity
  function ownerOf(uint256 _tokenId) public view returns (address)
  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public
  ```

**Comparativo ERC-20 vs ERC-721**:
| Característica | ERC-20 | ERC-721 |
|---------------|--------|---------|
| Fungibilidade | Sim | Não |
| Divisibilidade | Sim | Não |

**Documentação**: [OpenZeppelin](https://openzeppelin.com/)

---

### Etapa 6: Tokens ERC-721

**Exemplos reais**:

- Axie Infinity (jogos)
- Sorare (colecionáveis)
- Marketplace: [OpenSea](https://opensea.io/)

---

### Etapa 7: Protocolo IPFS

**Funcionamento**:

- Armazenamento descentralizado
- Arquivos fragmentados com hashes únicos
- Integração comum com NFTs

**Prática**:

1. Instalação do CLI
2. Upload de arquivos
3. Recuperação via CID

**Documentação**: [IPFS Oficial](https://ipfs.io/)

---
