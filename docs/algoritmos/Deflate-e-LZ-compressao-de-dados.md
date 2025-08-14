# Algoritmos de Compressão: Deflate e LZ

## LZ (Lempel-Ziv)

### Princípio Básico

- **Técnica**: Compressão sem perda baseada em dicionário
- **Mecanismo**:
  1. Identifica padrões repetidos nos dados
  2. Substitui por referências a ocorrências anteriores
  3. Atualiza dicionário dinamicamente

### Variantes Notáveis

| Algoritmo | Ano  | Aplicação Típica |
| --------- | ---- | ---------------- |
| LZ77      | 1977 | ZIP, PNG         |
| LZ78      | 1978 | GIF (via LZW)    |

**Exemplo Prático**:
Em "ABABAB", "AB" é armazenado no dicionário e referenciado nas repetições.

---

## DEFLATE

### Composição Híbrida

1. **Fase LZ77**:
   - Elimina redundâncias locais
2. **Fase Huffman**:
   - Codifica símbolos com tamanho variável (códigos curtos para dados frequentes)

### Formatos que Utilizam

- 🗜️ ZIP (formato nativo)
- 🖼️ PNG (compressão de imagens)
- 🚀 gzip (.gz para HTTP)

**Taxa de Compressão**:

- Texto: ~60-70% de redução
- Binários: ~30-50% de redução

---

## Comparativo Técnico

| Característica | LZ (genérico)  | DEFLATE             |
| -------------- | -------------- | ------------------- |
| Base           | Dicionário     | LZ77 + Huffman      |
| Velocidade     | Rápida         | Moderada            |
| Overhead       | Baixo          | Médio (2 etapas)    |
| Melhor para    | Dados textuais | Uso geral (ZIP/PNG) |

---

## Fluxo de Compressão DEFLATE

```plaintext
Dados Originais
  → [LZ77: Remove repetições]
  → [Huffman: Codifica símbolos]
  → Dados Comprimidos
```

**Cenário Ideal**:

- Arquivos com alta redundância (ex: logs, documentos CSV)

---

## Conclusão

- **LZ**: Família versátil para compressão baseada em padrões
- **DEFLATE**: Padrão industrial (ZIP/PNG) combinando eficiência e compatibilidade

_Dica para Devs_: Use `zlib` (implementação DEFLATE) para compressão programática.
