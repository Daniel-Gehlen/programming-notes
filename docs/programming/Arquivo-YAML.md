# Arquivos YAML: Guia Prático

## 📌 O que é YAML?

**YAML** (YAML Ain't Markup Language) é um formato de serialização de dados:

- ✨ Focado em legibilidade humana
- 📝 Amplamente usado para configurações e CI/CD
- 🔄 Alternativa mais limpa ao JSON/XML

---

## 🔍 Características Principais

| Característica     | Descrição                                  | Exemplo                        |
| ------------------ | ------------------------------------------ | ------------------------------ |
| **Indentação**     | Usa espaços (não tabs) para hierarquia     | `chave:\n  subchave: valor`    |
| **Sintaxe Limpa**  | Sem chaves/aspas desnecessárias            | `lista:\n  - item1\n  - item2` |
| **Tipos de Dados** | Suporta textos, números, booleanos, listas | `idade: 30\nativo: true`       |
| **Comentários**    | Com `#` para anotações                     | `# Configuração do banco`      |

---

## 📂 Estruturas Básicas

### 1. Pares Chave-Valor

```yaml
database:
  host: "localhost"
  port: 5432
  user: "admin"
```

### 2. Listas

```yaml
plugins:
  - eslint
  - prettier
  - typescript
```

### 3. Estruturas Aninhadas

```yaml
app:
  name: "Meu App"
  envs:
    - dev
    - prod
  features:
    auth: true
    logging: false
```

---

## ⚠️ Regras Importantes

1. **Indentação consistente** (2 ou 4 espaços)
2. **Nunca usar TABs** (apenas espaços)
3. **Strings multilinha** com `|` (preserva quebras) ou `>` (remove quebras)
   ```yaml
   descricao: |
     Este texto mantém
     as quebras de linha
     exatamente como estão
   ```

---

## 🔄 YAML vs JSON

| Critério     | YAML                | JSON             |
| ------------ | ------------------- | ---------------- |
| Legibilidade | Alta (para humanos) | Baixa            |
| Comentários  | Sim (`#`)           | Não              |
| Uso Comum    | Configurações       | APIs/Webservices |
| Verbosidade  | Mínima              | Mais verboso     |

---

## 🛠️ Exemplo Completo (CI/CD)

```yaml
# Configuração do GitHub Actions
name: Build e Deploy

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Instalar dependências
        run: npm install
      - name: Rodar testes
        run: npm test
```

---

## 💡 Dicas Práticas

1. **Validadores Online**: Use [YAML Lint](https://yamllint.com) para verificar sintaxe
2. **VS Code**: Instale a extensão `YAML` para realce de sintaxe
3. **Converters**: Ferramentas como [YAML to JSON](https://www.json2yaml.com) para conversão

> **Nota**: YAML é sensível a espaços! Sempre use espaços em branco em vez de TABs para indentação. 🔍
