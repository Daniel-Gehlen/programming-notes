# DAICO (Decentralized Autonomous Initial Coin Offering): Melhorando Financiamentos Cripto

DAICO é um conceito na área de criptomoedas que combina aspectos de DAO (Organização Autônoma Descentralizada) e ICO (Oferta Inicial de Moedas). Foi proposto por Vitalik Buterin, o cofundador do Ethereum, para melhorar a transparência e a segurança nas captações de fundos para projetos de criptomoedas. Vamos desmembrar o conceito:

---

## DAO (Organização Autônoma Descentralizada)

Uma DAO é uma organização que opera de forma descentralizada através de contratos inteligentes em uma blockchain. As regras de uma DAO são codificadas em contratos inteligentes, que são auto-executáveis e não dependem de intermediários. Os membros de uma DAO tomam decisões coletivamente, geralmente por meio de um sistema de votação que utiliza tokens.

---

## ICO (Oferta Inicial de Moedas)

Um ICO é uma forma de crowdfunding para novos projetos de criptomoedas. Durante um ICO, tokens de uma nova criptomoeda são vendidos aos investidores em troca de outras criptomoedas (geralmente Bitcoin ou Ethereum). No entanto, os ICOs têm sido criticados por falta de transparência e pela possibilidade de fraude, já que os fundadores podem levantar fundos sem necessariamente ter um produto ou serviço funcional.

---

## DAICO (Combinação de DAO e ICO)

Um DAICO tenta resolver alguns dos problemas associados aos ICOs tradicionais, introduzindo mecanismos de controle mais descentralizados e transparentes. A estrutura básica de um DAICO inclui os seguintes elementos:

### Fase de Contribuição Inicial

- Semelhante a um ICO, há uma fase inicial onde os investidores podem contribuir com fundos para o projeto em troca de tokens.

### Controle Descentralizado

- Após a fase inicial de arrecadação, o controle sobre os fundos é parcialmente transferido para os investidores.
- Os investidores podem votar em várias questões, como a liberação de fundos para os desenvolvedores.

### Tap Mechanism (Mecanismo de Liberação Gradual de Fundos)

- Um mecanismo chamado "tap" é implementado, permitindo que os fundos sejam liberados aos desenvolvedores de forma gradual, de acordo com um limite predefinido (tap rate).
- O tap rate pode ser ajustado através de uma votação dos detentores de tokens, permitindo uma liberação mais controlada dos fundos.

### Mecanismo de Resgate

- Em casos extremos, os investidores podem votar para reembolsar os fundos restantes, encerrando o projeto e devolvendo os fundos aos investidores, o que ajuda a mitigar riscos de fraudes ou má gestão.

---

## Benefícios do DAICO

- **Maior Transparência**: Como os investidores têm mais controle e visibilidade sobre como os fundos são gastos, a transparência é significativamente aumentada.
- **Mitigação de Riscos**: A liberação gradual de fundos e a possibilidade de resgate ajudam a proteger os investidores contra fraudes ou projetos falhos.
- **Engajamento da Comunidade**: Os investidores se tornam mais engajados e envolvidos no processo de desenvolvimento do projeto, já que têm um papel ativo nas decisões.

---

## Desafios do DAICO

- **Complexidade Técnica**: Implementar contratos inteligentes para gerenciar um DAICO pode ser tecnicamente desafiador e requer um entendimento sólido das tecnologias blockchain.
- **Governança e Coordenação**: A coordenação entre um grande número de investidores para tomar decisões pode ser complexa e demorada.
- **Resistência a Mudanças**: Os projetos podem enfrentar resistência ao tentar implementar o modelo DAICO, especialmente se os desenvolvedores preferirem ter mais controle sobre os fundos.

Em resumo, o DAICO é uma tentativa inovadora de trazer mais segurança, transparência e descentralização para o processo de financiamento de projetos de criptomoedas, abordando algumas das principais preocupações associadas aos ICOs tradicionais.

_por Daniel Gehlen_

---

## Tecnologias utilizadas em blockchain

Para explicar as tecnologias utilizadas em blockchain para implementar um DAICO (Decentralized Autonomous Initial Coin Offering), podemos dividir o conceito em várias partes: contratos inteligentes, mecanismos de votação, liberação gradual de fundos e controle de resgate. A seguir, apresento desenhos e códigos para ilustrar esses conceitos.

### 1. Contratos Inteligentes (Smart Contracts)

Os contratos inteligentes são fundamentais para o funcionamento de um DAICO. Eles são programados para gerenciar a arrecadação de fundos, a liberação gradual dos mesmos e as votações dos investidores.

**Exemplo de Contrato Inteligente em Solidity**:

```solidity
pragma solidity ^0.8.0;

contract DAICO {
    address public owner;
    uint public tap; // quantidade de fundos que pode ser retirada por segundo
    uint public lastWithdrawTime;
    uint public balance;
    mapping(address => uint) public contributions;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        tap = 0;
        lastWithdrawTime = block.timestamp;
    }

    function contribute() public payable {
        contributions[msg.sender] += msg.value;
        balance += msg.value;
    }

    function withdraw() public onlyOwner {
        uint amount = (block.timestamp - lastWithdrawTime) * tap;
        require(amount <= balance, "Not enough balance");
        payable(owner).transfer(amount);
        balance -= amount;
        lastWithdrawTime = block.timestamp;
    }

    function setTap(uint _tap) public onlyOwner {
        tap = _tap;
    }
}
```

### 2. Mecanismo de Votação

A votação permite que os investidores tomem decisões sobre a taxa de liberação de fundos (tap) ou sobre a devolução dos fundos.

**Desenho de Mecanismo de Votação**:

```
+-----------------+        +-------------------+         +----------------+
|   Investidores  |----->  |    Contrato       |  -----> |   Resultado    |
| (Propõem Voto)  |        |   Inteligente     |         |  (Ajusta Tap)  |
+-----------------+        +-------------------+         +----------------+
```

**Exemplo de Votação em Solidity**:

```solidity
pragma solidity ^0.8.0;

contract DAICO {
    address public owner;
    uint public tap;
    uint public balance;

    struct Proposal {
        uint newTap;
        uint votes;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => bool) public hasVoted;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        tap = 0;
    }

    function proposeTap(uint _newTap) public {
        proposals.push(Proposal({
            newTap: _newTap,
            votes: 0,
            executed: false
        }));
    }

    function vote(uint proposalIndex) public {
        require(!hasVoted[msg.sender], "Already voted");
        proposals[proposalIndex].votes += 1;
        hasVoted[msg.sender] = true;
    }

    function executeProposal(uint proposalIndex) public onlyOwner {
        Proposal storage proposal = proposals[proposalIndex];
        require(!proposal.executed, "Proposal already executed");
        require(proposal.votes > 0, "No votes");
        tap = proposal.newTap;
        proposal.executed = true;
    }
}
```

### 3. Liberação Gradual de Fundos (Tap Mechanism)

O mecanismo de "tap" controla a quantidade de fundos que pode ser retirada pelo proprietário em intervalos regulares.

**Desenho do Mecanismo de Liberação de Fundos**:

```
+--------------+      +--------------+      +--------------+
| Contribuinte | ---> |  Contrato    | ---> | Desenvolvedor |
|  (Deposita)  |      | Inteligente  |      | (Recebe fundos|
+--------------+      +--------------+      +--------------+
                         /       \
                        /         \
                       /           \
             (Liberação Gradual)  (Ajuste Tap via Votação)
```

### 4. Mecanismo de Resgate

Os investidores podem votar para encerrar o projeto e devolver os fundos restantes.

**Exemplo de Resgate em Solidity**:

```solidity
pragma solidity ^0.8.0;

contract DAICO {
    address public owner;
    uint public balance;
    bool public isActive;
    mapping(address => uint) public contributions;
    mapping(address => bool) public hasVotedToRefund;
    uint public refundVotes;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyActive() {
        require(isActive, "Project not active");
        _;
    }

    constructor() {
        owner = msg.sender;
        isActive = true;
    }

    function contribute() public payable onlyActive {
        contributions[msg.sender] += msg.value;
        balance += msg.value;
    }

    function voteToRefund() public onlyActive {
        require(!hasVotedToRefund[msg.sender], "Already voted");
        hasVotedToRefund[msg.sender] = true;
        refundVotes += 1;
        if (refundVotes > (address(this).balance / 2)) {
            isActive = false;
            refund();
        }
    }

    function refund() internal {
        for (uint i = 0; i < contributions.length; i++) {
            address contributor = contributions[i];
            uint amount = contributions[contributor];
            if (amount > 0) {
                payable(contributor).transfer(amount);
                contributions[contributor] = 0;
            }
        }
    }

    function withdraw() public onlyOwner onlyActive {
        uint amount = balance;
        balance = 0;
        payable(owner).transfer(amount);
    }
}
```

---

## Exemplos de Contratos Inteligentes

### 1. Criando um Token ERC-20

O ERC-20 é um padrão para tokens fungíveis na blockchain Ethereum.

**Código do Token ERC-20 em Solidity**:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }
}
```

**Desenho do Token ERC-20**:

```
+-----------------+
|  Token ERC-20   |
|-----------------|
|  Nome: MyToken  |
|  Símbolo: MTK   |
|  Total Supply   |
|  BalanceOf      |
|  Transfer       |
+-----------------+
```

### 2. Criando uma Carteira (Wallet)

A carteira permite que os usuários armazenem, enviem e recebam tokens ERC-20.

**Código da Carteira em Solidity**:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyWallet {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function deposit(address token, uint256 amount) public onlyOwner {
        IERC20(token).transferFrom(msg.sender, address(this), amount);
    }

    function withdraw(address token, uint256 amount) public onlyOwner {
        IERC20(token).transfer(msg.sender, amount);
    }

    function balanceOf(address token) public view returns (uint256) {
        return IERC20(token).balanceOf(address(this));
    }
}
```

**Desenho da Carteira (Wallet)**:

```
+---------------+
|   Wallet      |
|---------------|
|  Owner        |
|  Deposit      |
|  Withdraw     |
|  BalanceOf    |
+---------------+
```

### 3. Criando um NFT (ERC-721)

Os NFTs (Non-Fungible Tokens) são tokens únicos e indivisíveis.

**Código do NFT em Solidity**:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(address to) public {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _mint(to, tokenId);
    }
}
```

**Conexão entre os Componentes**

Para entender como os tokens, a carteira e os NFTs interagem, considere o seguinte diagrama:

**Diagrama Explicativo**:

```
+-------------------+     +-----------------+     +--------------------+
|    User Wallet    |<--->|  Token ERC-20   |<--->|      Marketplace   |
|-------------------|     |-----------------|     |--------------------|
|  - BalanceOf      |     |  - Transfer     |     |  - Buy/Sell NFTs   |
|  - Deposit        |     |  - Approve      |     |  - Mint NFTs       |
|  - Withdraw       |     |  - BalanceOf    |     |  - Transfer NFTs   |
+-------------------+     +-----------------+     +--------------------+
                            +-------------------+
                            |       NFT         |
                            |-------------------|
                            |  - Mint           |
                            |  - Transfer       |
                            |  - BalanceOf      |
                            +-------------------+
```

---

## Resumo

- **Token ERC-20**: Um token fungível padrão usado para representar ativos fungíveis na blockchain.
- **Wallet**: Armazena e gerencia tokens e permite operações de depósito e retirada.
- **NFT (ERC-721)**: Representa um token não fungível, único e indivisível, com operações de cunhagem (mint) e transferência.

Esses componentes são construídos utilizando Solidity e padrões bem definidos da Ethereum, como ERC-20 para tokens fungíveis e ERC-721 para NFTs. A integração desses componentes permite criar um ecossistema robusto para a gestão de ativos digitais na blockchain.
