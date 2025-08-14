# TAR (Tape Archive)

## Visão Geral

Formato de empacotamento de arquivos nativo em sistemas Unix/Linux que:

- Agrupa múltiplos arquivos em um único container
- Preserva metadados (permissões, timestamps)
- **Não comprime** por padrão (usa combinação com gzip/bzip2)

---

## Características Técnicas

### 📦 Estrutura Básica

| Componente       | Descrição                                        |
| ---------------- | ------------------------------------------------ |
| Cabeçalho (512B) | Metadados do arquivo (nome, tamanho, permissões) |
| Conteúdo         | Dados brutos do arquivo                          |
| Padding          | Preenchimento para alinhar blocos de 512B        |

### 🔄 Fluxo de Trabalho Típico

1. Empacotar arquivos → `.tar`
2. Comprimir opcionalmente → `.tar.gz` ou `.tar.bz2`

---

## Comandos Essenciais

### Empacotamento

```bash
# Criar arquivo TAR
tar -cvf backup.tar /caminho/arquivos/

# Listar conteúdo
tar -tvf backup.tar

# Adicionar arquivo existente
tar --append -f backup.tar novo_arquivo.txt
```

### Compressão Combinada

```bash
# Compactar com gzip (mais rápido)
tar -czvf arquivo.tar.gz pasta/

# Compactar com bzip2 (mais eficiente)
tar -cjvf arquivo.tar.bz2 pasta/
```

### Extração

```bash
# Extrair TAR simples
tar -xvf backup.tar

# Extrair TAR + gzip
tar -xzvf backup.tar.gz

# Extrair arquivo específico
tar -xzvf backup.tar.gz "caminho/arquivo.txt"
```

---

## Comparativo de Compressão

| Método   | Extensão | Velocidade | Taxa Compressão | Uso Típico         |
| -------- | -------- | ---------- | --------------- | ------------------ |
| TAR puro | .tar     | ⚡⚡⚡⚡⚡ | 1:1 (nenhuma)   | Agrupamento rápido |
| + gzip   | .tar.gz  | ⚡⚡⚡⚡   | ~3:1            | Uso geral          |
| + bzip2  | .tar.bz2 | ⚡⚡       | ~4:1            | Arquivos grandes   |
| + xz     | .tar.xz  | ⚡         | ~5:1+           | Distribuição Linux |

---

## Casos de Uso Ideais

✅ **Backups**
✅ **Distribuição de software** (ex: pacotes .tar.gz)
✅ **Transferência de estruturas de diretórios complexas**
✅ **Preservação de metadados Unix**

---

## Dicas Avançadas

1. **Verificar integridade**:

   ```bash
   tar -tf arquivo.tar | wc -l
   ```

2. **Excluir arquivos durante criação**:

   ```bash
   tar -czvf backup.tar.gz --exclude='*.tmp' diretorio/
   ```

3. **Extrair para diretório específico**:
   ```bash
   tar -xzvf backup.tar.gz -C /caminho/destino/
   ```

---

## Conclusão

O TAR permanece indispensável em ambientes Unix/Linux por:

- Simplicidade de empacotamento
- Compatibilidade universal
- Flexibilidade com compressores externos

_Dica final_: Para máxima compressão, use `tar -cJvf arquivo.tar.xz` (XZ Utils).
