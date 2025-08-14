# Introdução à Blockchain

## Objetivo Geral

- Conhecimento básico em JavaScript
- Noções de redes de computadores
- Fundamentos de criptografia e algoritmos

---

## Percurso do Curso

### Etapa 1: O que é Blockchain?

**Definição**:

- Livro-razão público descentralizado
- Desenvolvido inicialmente por Haber & Stornetta (1991)
- Aprimorado com Proof of Work (Hal Finney)

**Estrutura do Bloco**:
| Campo | Descrição |
|----------------|-----------------------------------|
| Index | Número sequencial |
| Timestamp | Data/hora de criação |
| PreviousHash | Hash do bloco anterior |
| Hash | Assinatura digital do bloco |
| Data | Transações registradas |

**Pilares Fundamentais**:

1. Descentralização
2. Imutabilidade
3. Segurança criptográfica
4. Consenso distribuído

### Etapa 2: Bitcoin - Caso Prático

**Histórico**:

- Criado por Satoshi Nakamoto (2008)
- Primeira transação: 10,000 BTC por 2 pizzas (2010)
- Valuation recorde: $68k (2021)

**Características**:
✓ Descentralizado
✓ Pseudônimo
✓ Transparente
✓ Imutável

**Desafios**:

- Regulação governamental
- Perda de chaves privadas
- Alta volatilidade

### Etapa 3: Criptografia Blockchain

**Técnicas**:
| Simétrica | Assimétrica |
|-------------------------|--------------------------|
| Mesma chave | Par de chaves (pública/privada) |
| Rápida | Mais segura |
| Vulnerável se comprometida | Usada em carteiras BTC |

**Tipos de Carteiras**:

1. Não-determinísticas (chaves independentes)
2. Determinísticas (derivadas de semente)
3. HD (hierárquicas)
4. Mnemônicas (frases BIP39)

### Etapa 4: SHA-256 em Detalhe

**Aplicações**:

- Mineração Bitcoin
- Geração de endereços
- Verificação de integridade

**Estrutura do Hash**:

```python
{
  "version": 0x20000000,
  "prev_hash": "0000000000...",
  "merkle_root": "5e7f...",
  "timestamp": 1637290000,
  "target": 0x1713...,
  "nonce": 23452345
}
```

### Etapa 5: Simulação Prática

**Ferramentas**:

- Simuladores online de blockchain
- Ambientes sandbox para testes

### Etapa 6: Carteiras Bitcoin

**Formatos de Endereço**:

- P2PKH (1...)
- P2SH (3...)
- Bech32 (bc1...)

**Tipos Físicos**:

- Hardware (Ledger/Trezor)
- Paper wallets
- Mobile/Desktop apps

---

## Desafio Final

**Implemente**:

1. Criação de carteira digital
2. Simulação de transações
3. Análise de blocos
