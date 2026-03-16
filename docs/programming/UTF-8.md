# UTF-8 (Unicode Transformation Format, 8-bit)

## Visão Geral

UTF-8 é o esquema de codificação Unicode dominante na computação moderna, permitindo representação universal de texto com compatibilidade retroativa com ASCII.

## Características Técnicas

### Estrutura de Codificação

| Faixa Unicode      | Bytes UTF-8 | Padrão Binário                      |
| ------------------ | ----------- | ----------------------------------- |
| U+0000 - U+007F    | 1 byte      | 0xxxxxxx                            |
| U+0080 - U+07FF    | 2 bytes     | 110xxxxx 10xxxxxx                   |
| U+0800 - U+FFFF    | 3 bytes     | 1110xxxx 10xxxxxx 10xxxxxx          |
| U+10000 - U+10FFFF | 4 bytes     | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

### Vantagens Chave

- **Compatibilidade perfeita com ASCII** (primeiros 128 caracteres)
- **Eficiência espacial** para línguas ocidentais
- **Suporte completo** a >1 milhão de caracteres Unicode
- **Autossincronização** (permite recuperação após erros)

## Exemplos Práticos

### Codificação de Caracteres

```python
# Python 3 (UTF-8 nativo)
texto = "Açúcar 🍬"  # 'A' (1 byte), 'ç' (2 bytes), '🍬' (4 bytes)
print(len(texto))      # 6 caracteres
print(len(texto.encode('utf-8')))  # 10 bytes
```

### Configurações Comuns

```html
<!-- Declaração em HTML -->
<meta charset="UTF-8" />
```

```sql
-- Configuração em MySQL
CREATE DATABASE meu_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## Comparação com Outras Codificações

| Codificação | Vantagens                             | Limitações                    |
| ----------- | ------------------------------------- | ----------------------------- |
| **UTF-8**   | Dominante, compatível com ASCII       | Ineficiente para asiáticos    |
| **UTF-16**  | Bom para CJK (Chinês/Japonês/Coreano) | Problemas de endianness       |
| **UTF-32**  | Acesso direto a code points           | 4x maior que UTF-8 para ASCII |

## Boas Práticas

1. **Sempre declare UTF-8** em:
   - Arquivos fonte
   - Páginas web
   - Comunicações de rede

2. **Use BOM (Byte Order Mark)** apenas quando necessário:

   ```hex
   EF BB BF  # BOM UTF-8 (geralmente desnecessário)
   ```

3. **Prefira `utf8mb4`** em MySQL (suporta emojis e caracteres completos)
