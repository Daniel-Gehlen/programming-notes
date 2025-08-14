# Introdução à Linguagem Solidity

## Objetivo Geral

- Conhecimento básico em JavaScript, C++ ou Python
- Noções de redes de computadores
- Conhecimento fundamental de criptografia e algoritmos

---

## Percurso do Curso

1. Características da Linguagem
2. Tipos de Dados
3. Métodos no Solidity
4. Bibliotecas
5. Storage, Memory e Variáveis de Estado
6. Structures e Arrays
7. Configurações de Ambiente
8. Criando seu Primeiro Smart Contract

---

## Etapa 1: Características da Linguagem

### Introdução ao Solidity

- Linguagem de alto nível orientada a contratos
- Sintaxe influenciada por Python, C++ e JavaScript
- Executada na Ethereum Virtual Machine (EVM)
- Usada para desenvolver:
  - Sistemas de votação
  - Crowdfunding
  - Rastreabilidade de ativos
  - NFTs

### Plataforma Ethereum

- Criada em 2015 por Vitalik Buterin
- Ether é a 2ª criptomoeda mais valiosa
- EVM executa contratos inteligentes

### Smart Contracts

- Protocolos digitais auto-executáveis
- Transações rastreáveis e irreversíveis
- Garantia de veracidade via criptografia

**Exemplo de Smart Contract:**

```solidity
pragma solidity ^0.5.0;
contract SolidityTest {
    constructor() public {}

    function getResult() public view returns(uint) {
        uint a = 1;
        uint result = a * 2;
        return result;
    }
}
```

---

## Etapa 2: O Caso do Bitcoin

### Introdução

- Criado por Satoshi Nakamoto (pseudônimo)
- Valor histórico: de frações de centavo até $68k
- Primeira compra: 10.000 BTC por 2 pizzas

### Características

- Supply limitado em 21 milhões
- Taxa de mineração controlada
- Descentralizado, anônimo e imutável

### Desafios

- Regulamentações
- Chaves perdidas
- Volatilidade de preço

---

## Etapa 3: Criptografia na Blockchain

### Introdução

- Conversão de dados legíveis para formato codificado
- Segurança proporcional à complexidade

### Técnicas

- **Chave Simétrica:** mesma chave para codificar/decodificar
- **Chave Assimétrica:** par de chaves (pública/privada)

### Carteiras Bitcoin

- Conjunto de chaves privadas
- Usa funções hash para gerar endereços

---

## Etapa 4: Criptografia SHA-256

### Sobre

- Desenvolvido pela NSA e NIST
- Usado em mineração e geração de endereços
- Converte entrada variável em saída de 256 bits

### Propriedades

- Versão do bloco
- Hash do bloco anterior
- Raiz de Merkle
- Timestamp
- Target e nonce

---

## Próximas Etapas

- Redes P2P
- Ledgers imutáveis
- Algoritmos de consenso
- Problema dos Generais Bizantinos
- Hard e Soft Forks
- Tipos de ataques
- Simulação de transações
- Impacto histórico da blockchain
