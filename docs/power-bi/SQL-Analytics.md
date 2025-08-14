# SQL Analytics: Potencializando Análises de Dados

## Fundamentos do SQL

### Histórico e Importância

- **Criado em 1970** pela IBM
- **Linguagem padrão** para gestão de bancos de dados relacionais
- **Principais usuários**: DBAs, Analistas de BI, Cientistas de Dados

### Classificação de Comandos

| Categoria                   | Comandos Exemplo             | Função Principal            |
| --------------------------- | ---------------------------- | --------------------------- |
| **DDL** (Data Definition)   | `CREATE`, `ALTER`, `DROP`    | Definir estruturas de dados |
| **DML** (Data Manipulation) | `INSERT`, `UPDATE`, `DELETE` | Modificar dados             |
| **DCL** (Data Control)      | `GRANT`, `REVOKE`            | Gerenciar permissões        |
| **DQL** (Data Query)        | `SELECT`, `WITH`             | Consultar dados             |

---

## SQL para Business Intelligence

### Estrutura Tabular

- **Tabelas**: Unidade básica de armazenamento
- **Chaves Primárias/Estrangeiras**: Garantem integridade dos relacionamentos

### Operações Essenciais

```sql
-- JOIN para combinar dados
SELECT
    v.venda_id,
    c.nome as cliente,
    p.produto_nome
FROM vendas v
JOIN clientes c ON v.cliente_id = c.cliente_id
JOIN produtos p ON v.produto_id = p.produto_id;
```

**Tipos de JOIN**:

- `INNER JOIN`: Apenas registros correspondentes
- `LEFT JOIN`: Todos da tabela esquerda + correspondentes
- `FULL OUTER JOIN`: Todos os registros de ambas as tabelas

---

## Aplicações Práticas em BI

### Cenários Reais

1. **Análise de Vendas**

   ```sql
   -- Vendas por região (com agregação)
   SELECT
       r.regiao_nome,
       SUM(v.valor) as total_vendas
   FROM vendas v
   JOIN regioes r ON v.regiao_id = r.regiao_id
   GROUP BY r.regiao_nome
   ORDER BY total_vendas DESC;
   ```

2. **Detecção de Tendências**
   ```sql
   -- Crescimento mensal (funções de janela)
   SELECT
       mes,
       valor,
       LAG(valor, 1) OVER (ORDER BY mes) as mes_anterior,
       (valor - LAG(valor, 1) OVER (ORDER BY mes)) / LAG(valor, 1) OVER (ORDER BY mes) * 100 as crescimento_percentual
   FROM vendas_mensais;
   ```

---

## Ferramentas e Melhores Práticas

### Stack Moderno

- **Ferramentas**: PostgreSQL, BigQuery, Snowflake
- **Extensões para BI**:
  - CTEs (`WITH`) para queries complexas
  - Funções de janela (`OVER()`) para análises temporais

### Checklist para Queries Eficientes

- [ ] Indexar colunas frequentemente filtradas
- [ ] Evitar `SELECT *` (especificar colunas)
- [ ] Usar `EXPLAIN` para otimizar performance

**Dica Pro**:

> "Documente suas queries com comentários -- como esta -- para facilitar a manutenção."

```sql
-- Query otimizada para relatório de BI
WITH vendas_anuais AS (
    SELECT
        cliente_id,
        SUM(valor) as total_gasto
    FROM vendas
    WHERE data BETWEEN '2023-01-01' AND '2023-12-31'
    GROUP BY cliente_id
)
SELECT
    c.nome,
    v.total_gasto,
    RANK() OVER (ORDER BY v.total_gasto DESC) as ranking
FROM vendas_anuais v
JOIN clientes c ON v.cliente_id = c.cliente_id;
```

---

## Recursos para Aprofundamento

- [SQL Style Guide (PEP 8 para SQL)](https://www.sqlstyle.guide/)
- [Practice SQL Online](https://sqlzoo.net/)
- [Window Functions Explained](https://modern-sql.com/concept/window-functions)

_"SQL transforma dados brutos em respostas estratégicas. Domine-o para tomar decisões baseadas em evidências."_ 🗃️💡
