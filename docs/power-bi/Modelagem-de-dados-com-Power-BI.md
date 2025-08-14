# Modelagem de Dados com Power BI

## Objetivo Geral

- Dominar técnicas de modelagem no Power BI
- Gerenciar relacionamentos circulares
- Implementar modelagem dimensional
- Trabalhar com tabelas e dimensões eficientes
- Superar desafios comuns de modelagem

---

## Etapa 1: Fundamentos da Modelagem

### Fluxo de Trabalho no Power BI

1. **Coleta**
2. **Transformação** (Power Query)
3. **Modelagem**
4. **Criação de Dashboards**
5. **Publicação**

### Vantagens de um Bom Modelo

✔ Consultas mais rápidas
✔ Agregações simplificadas
✔ Relatórios precisos e fáceis de manter
✔ Redução de 40-60% no tempo de desenvolvimento

**Princípio Chave**:
_"Modelos menores (Star Schema) executam mais rápido e são mais intuitivos"_

---

## Etapa 2: Tabelas e Relacionamentos

### Boas Práticas com Tabelas

- **Estrutura Star Schema**:
  - 1 tabela de fatos (métricas)
  - N tabelas de dimensões (categorias)
- **Tipos de Relacionamentos**:
  | Tipo | Descrição | Uso Recomendado |
  |------|-----------|-----------------|
  | 1:N | Um para muitos | Alta performance |
  | N:1 | Muitos para um | Padrão |
  | 1:1 | Um para um | Casos específicos |
  | N:M | Muitos para muitos | Evitar quando possível |

**Dica**: Use `Gerenciar Relacionamentos` para visualizar e ajustar conexões

---

## Etapa 3: Dados Temporais

### Modelagem com Múltiplas Datas

**Cenário Comum**:

- Data de Pedido (OrderDate)
- Data de Envio (ShipDate)

**Solução**:

1. Criar tabelas de datas separadas
2. Usar DAX para cálculos específicos:

```dax
Vendas por Período =
CALCULATE(
    SUM(Sales[Amount]),
    DATESBETWEEN('Calendar'[Date], [DataInicio], [DataFim])
)
```

**Casos Avançados**:

- Identificar feriados corporativos
- Separar anos fiscais e civis
- Marcar finais de semana

---

## Etapa 4: Hierarquias

### Implementação Prática

**Exemplo Pai/Filho**:

```
Geografia
├── País
├── Estado
└── Cidade
```

**Como Criar**:

1. Clique direito na dimensão → `Nova Hierarquia`
2. Arraste campos na ordem desejada

**Vantagens**:

- Navegação intuitiva em visuais
- Drill-down automático

---

## Etapa 5: Granularidade

### Controlando o Nível de Detalhe

**Problema Típico**:

- Dados por minuto (ex: temperatura de caminhões) → Performance lenta

**Soluções**:

- Agregação prévia no Power Query
- Uso de partições temporais
- Criação de resumos diários/horários

**Regra de Ouro**:
_"Quanto maior a granularidade, maior o impacto no desempenho"_

---

## Etapa 6: Desafios Comuns

### Relacionamentos Circulares

**Exemplo Problemático**:

```
T1 → T2 → T3 → T1
```

**Como Resolver**:

1. Identificar com `Diagram View`
2. Quebrar o ciclo:
   - Remover relacionamento menos crítico
   - Criar tabela intermediária

**Ferramentas Úteis**:

- Análise de Dependência no Power Query
- Relatório de Diagnóstico do VertiPaq

---

## Links Essenciais

- [Modelagem Dimensional Oficial](https://learn.microsoft.com)
- [Guia de Relacionamentos](https://powerbi.microsoft.com)
- [DAX Patterns para Modelagem](https://daxpatterns.com)

_"Modelos bem estruturados são a fundação para relatórios que entregam insights reais"_
