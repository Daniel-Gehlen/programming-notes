# Data Analytics com Power BI

## Análise de Dados com Power BI

### Visão Geral
> "A análise avançada reduz trabalho manual e apoia decisões estratégicas com insights acionáveis." — Microsoft

**Evolução**:
De tarefa complexa (exclusiva de engenheiros) para processo democratizado com ferramentas visuais e IA.

---

## Recursos Essenciais para Análise

### 1. Estatística Descritiva
- **Resumo Estatístico Automático**:
  - Média, mediana, desvio padrão
  - Identificação de outliers
- **Visualizações Chave**:
  ```mermaid
  graph LR
      A[Histograma] --> B[Distribuição de Dados]
      C[Curva de Sino] --> D[Análise de Normalidade]
  ```

### 2. Técnicas Avançadas
| Técnica | Função no Power BI | Aplicação |
|---------|---------------------|-----------|
| **Clustering** | Agrupamento automático | Segmentação de clientes |
| **Série Temporal** | Forecast com IA | Previsão de vendas |
| **Quick Insights** | Geração automática de insights | Detecção de padrões ocultos |

### 3. DAX para Análise Profunda
**Exemplo TOPN**:
```dax
Top 3 Produtos =
TOPN(
    3,
    ADDCOLUMNS(
        VALUES('Product'[Product Name]),
        "@Sales Amount", [Sales Amount]
    ),
    [@Sales Amount],
    DESC
)
```
*Retorna os 3 produtos mais vendidos com seus valores.*

---

## Fluxo de Análise no Power BI

1. **Preparação**:
   - Carregar dados
   - Aplicar transformações no Power Query

2. **Exploração**:
   - Usar **gráficos de dispersão** para correlações
   - Aplicar **filtros interativos**

3. **Modelagem**:
   - Criar medidas com **DAX** (ex: `YTD Sales = TOTALYTD([Sales], 'Date'[Date])`)

4. **Visualização**:
   - Dashboard com:
     - **Gráficos de tendência**
     - **KPIs estratégicos**
     - **Mapas de calor**

5. **IA Integrada**:
   - **Detecção automática de anomalias**
   - **Q&A Visual** (busca natural)

---

## Recursos Avançados

### Inteligência Artificial
- **Análise de Sentimento** (integração com Azure Cognitive Services)
- **AutoML** para previsões personalizadas

### Linguagens Adicionais
| Linguagem | Uso | Exemplo |
|-----------|-----|---------|
| **R** | Análise estatística avançada | Modelos preditivos |
| **Python** | Machine Learning | Clusterização com scikit-learn |

---

## Checklist para Análise Eficaz
- [ ] Validar qualidade dos dados na origem
- [ ] Usar hierarquias para drill-down
- [ ] Combinar visuais padrão e personalizados
- [ ] Documentar fórmulas DAX complexas
- [ ] Testar insights com usuários-chave

**Dica Pro**:
*"Use o botão 'Analisar' (lupa) no Power BI Desktop para descoberta rápida de padrões!"*

[Documentação Oficial](https://learn.microsoft.com/power-bi/transform-model/) | [Galeria de Visualizações](https://appsource.microsoft.com/power-bi-visuals)

> Transforme dados em decisões com análises que contam histórias. 📊✨
