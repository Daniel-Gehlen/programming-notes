# Coleta e Extração de Dados com Power BI

## Objetivo Geral

- Conectar-se a diversas fontes de dados
- Extrair dados do Azure Analysis Services
- Selecionar o modo de armazenamento ideal
- Solucionar problemas de desempenho e erros de importação

---

## Fluxo de Trabalho no Power BI

```mermaid
graph TD
    A[Coleta] --> B[Transformação via Power Query]
    B --> C[Criação de Dashboard]
    C --> D[Publicação]
    D --> E[Inserção em Dashboard]
```

---

## Fontes de Dados Suportadas

### Tipos Comuns

| Categoria           | Exemplos                      | Caso de Uso              |
| ------------------- | ----------------------------- | ------------------------ |
| **Arquivos**        | CSV, Excel, JSON              | Dados locais ou em nuvem |
| **Bancos de Dados** | SQL Server, MySQL, PostgreSQL | Dados estruturados       |
| **Cloud Services**  | Azure SQL, SharePoint         | Dados empresariais       |
| **APIs**            | REST, GraphQL                 | Dados em tempo real      |

**Exemplo de Conexão SQL**:

```sql
-- Carregamento parcial para otimização
SELECT
    ProductID,
    ProductName,
    UnitPrice
FROM Products
WHERE Discontinued = 0
```

---

## Modos de Armazenamento

| Modo            | Vantagens                      | Desvantagens                          | Melhor Caso              |
| --------------- | ------------------------------ | ------------------------------------- | ------------------------ |
| **Importar**    | Alta performance, offline      | Limite de tamanho (1GB na versão Pro) | Datasets pequenos/médios |
| **DirectQuery** | Dados em tempo real            | Performance dependente da fonte       | Big Data                 |
| **Composto**    | Combina Importar + DirectQuery | Complexidade aumentada                | Cenários híbridos        |

**Dica**: Use DirectQuery para dados financeiros em tempo real e Importar para relatórios históricos.

---

## Solução de Problemas Comuns

### Desempenho

- **Problema**: Lentidão no carregamento
  **Solução**:
  - Particione dados com filtros no Power Query
  ```powerquery
  = Table.SelectRows(#"Passo Anterior", each [Ano] = 2023)
  ```
  - Separe colunas de data/hora

### Erros de Importação

- **Problema**: "Tempo limite expirado"
  **Solução**:
  1. Extraia dados em lotes
  2. Use consultas nativas no banco de dados
  ```sql
  -- Conversão explícita para evitar erros
  SELECT CAST(OrderDate AS DATE) FROM Orders
  ```

---

## Caso Prático: GitHub + MySQL

1. **Instale o Conector MySQL**
   - Baixe em [MySQL Connector/NET](https://dev.mysql.com/downloads/connector/net/)
2. **Configuração no Power BI**:
   - Home → Obter Dados → MySQL
   - Insira servidor, credenciais e consulta SQL

**Exemplo de Consulta**:

```sql
SELECT
    repo_name,
    COUNT(*) as commits
FROM github_events
WHERE event_type = 'PushEvent'
GROUP BY repo_name
```

---

## Links Úteis

- [Treinamento Oficial Power BI](https://learn.microsoft.com/power-bi)
- [Guia de Solução de Erros](https://community.powerbi.com)

**Citação Inspiradora**:

> _"Dados são como petróleo bruto – só têm valor quando refinados."_ — Adaptado de Clive Humby

![Power BI Data Sources](https://learn.microsoft.com/pt-br/power-bi/connect-data/media/power-bi-data-sources.png)

> Domine a coleta de dados para construir análises confiáveis! ⚙️📊
