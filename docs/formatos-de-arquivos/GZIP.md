# GZIP: Formato de Compressão de Dados

## Visão Geral

GZIP é um formato de compressão amplamente utilizado que emprega o algoritmo DEFLATE para reduzir o tamanho de arquivos, sendo especialmente popular na web para otimização de transferência de dados.

## Características Técnicas

### Algoritmo DEFLATE

- Combinação de:
  - **LZ77**: Eliminação de redundâncias
  - **Codificação Huffman**: Compactação eficiente

### Especificações do Formato

| Componente        | Descrição                           |
| ----------------- | ----------------------------------- |
| Cabeçalho         | Metadados (10 bytes)                |
| Dados Comprimidos | Fluxo DEFLATE                       |
| Rodapé            | CRC-32 e tamanho original (8 bytes) |

## Utilização Prática

### Linha de Comando

```bash
# Comprimir (cria arquivo.gz)
gzip arquivo.txt

# Descomprimir
gzip -d arquivo.txt.gz

# Nível de compressão (1-9)
gzip -9 arquivo.txt  # Máxima compressão
```

### Integração Web

```nginx
# Exemplo de configuração Nginx
gzip on;
gzip_types text/plain text/css application/json;
gzip_min_length 1000;
```

## Desempenho Típico

| Tipo de Arquivo  | Taxa de Compressão |
| ---------------- | ------------------ |
| HTML             | 70-80%             |
| CSS/JavaScript   | 60-70%             |
| Texto puro       | 75-85%             |
| Binários/Imagens | 5-20%              |

## Vantagens e Limitações

**✔ Vantagens:**

- Redução significativa para conteúdo textual
- Suporte universal em navegadores e servidores
- Verificação de integridade via CRC-32

**✘ Limitações:**

- Pouco eficaz em arquivos já comprimidos (JPEG, MP3, etc.)
- Não suporta compressão de múltiplos arquivos (usar TAR + GZIP)

## Alternativas Modernas

- **Brotli** (melhor compressão para web)
- **Zstandard** (velocidade superior)
- **XZ** (maior taxa de compressão)
