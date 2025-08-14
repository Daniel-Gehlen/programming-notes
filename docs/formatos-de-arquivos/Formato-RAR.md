# Formato RAR

## Visão Geral

Formato proprietário de compressão de dados desenvolvido por Eugene Roshal, conhecido por:

- Alta taxa de compressão
- Recursos avançados como divisão de volumes e reparo de arquivos

---

## Características Principais

### 🏆 Vantagens Competitivas

| Feature              | RAR     | ZIP      | 7Z          |
| -------------------- | ------- | -------- | ----------- |
| Taxa de Compressão   | ✅ Alta | ⚠️ Média | ✅ Alta     |
| Divisão em Volumes   | ✅ Sim  | ❌ Não   | ✅ Sim      |
| Reparo de Arquivos   | ✅ Sim  | ❌ Não   | ⚠️ Limitado |
| Criptografia AES-256 | ✅ Sim  | ✅ Sim   | ✅ Sim      |

### 🔐 Segurança

- Criptografia AES de 256 bits
- Proteção por senha em arquivos e metadados

### 🛠️ Recursos Técnicos

- **Algoritmo proprietário**: Melhor compressão que DEFLATE (ZIP)
- **Recuperação de dados**: Até 10% de dados de reparo embutidos

---

## Uso Prático

### Comandos Básicos (WinRAR CLI)

```bash
# Compactar
rar a backup.rar documentos/ -v500m -p"senhasecreta"

# Extrair
unrar x backup.rar -p"senhasecreta"

# Dividir arquivo (volumes de 500MB)
rar a -v500m filme.part.rar filme.mp4
```

### Extensões Comuns

- `.rar` (arquivo único)
- `.r00`, `.r01`, ... (volumes divididos)
- `.rev` (arquivos de recuperação)

---

## Comparativo de Formatos

### Quando Usar RAR?

🟢 **Arquivos muito grandes** (melhor compressão)
🟢 **Transferência via mídia física** (divisão em volumes)
🟢 **Dados sensíveis** (criptografia robusta)

### Quando Evitar?

🔴 **Compatibilidade universal** (prefira ZIP)
🔴 **Open-source projects** (7z é livre)

---

## Conclusão

O RAR continua relevante para:

- Usuários que priorizam **máxima compressão**
- Casos que exigem **proteção avançada**
- Situações com **risco de corrupção** de arquivos

_Dica principal:_ Use o WinRAR ou `unrar` no Linux para melhor experiência.\*

-
