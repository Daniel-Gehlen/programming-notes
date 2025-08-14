# Criando Dashboards com Power BI

## Objetivo Geral

- Criar dashboards otimizados para **mobile**
- Aplicar temas visuais profissionais
- Configurar classificação inteligente de dados
- Integrar visualizações em **tempo real**

---

## Diferenças Chave: Relatório vs Dashboard

| Característica     | Relatório             | Dashboard           |
| ------------------ | --------------------- | ------------------- |
| **Páginas**        | Múltiplas             | Única               |
| **Filtros**        | Painéis interativos   | Não aplicável       |
| **Fonte de Dados** | 1 conjunto de dados   | Múltiplas fontes    |
| **Interatividade** | Drill-down/exploração | Visualizações fixas |

> _"Dashboards são coleções estratégicas de insights, não apenas portais para relatórios."_ — Adaptado de Linus Torvalds

---

## Construindo um Dashboard Eficaz

### Passo a Passo no Power BI Service

1. **Fixar Visualizações**
   - Selecione um visual em qualquer relatório → Clique em **"Fixar no dashboard"**
2. **Organizar Blocos**
   - Arraste e redimensione os visuais para um layout claro
3. **Adicionar Temas**
   ```json
   // Exemplo de tema JSON customizado
   {
     "name": "Corporate Theme",
     "dataColors": ["#2B579A", "#E81123", "#F25022"],
     "background": "#FFFFFF",
     "fontFamily": "Segoe UI"
   }
   ```
4. **Configurar Alertas**
   - Disponível para: Medidores, Cartões e KPIs
   - Defina limites (ex: "Alerta se vendas < R$50K")

---

## Dashboard em Tempo Real

### Streaming de Dados

- **Fontes Compatíveis**: API Push, Azure Stream Analytics
- **Configuração**:
  1. Crie um conjunto de dados de streaming no Power BI
  2. Fixe visuais atualizados a cada 1-2 segundos

**Exemplo de Uso**:

- Monitoramento de linhas de produção
- Análise de tráfego em websites

---

## Mobile Optimization

### Melhores Práticas

- **Modo de Exibição Mobile**:
  - Ative em "Configurações do Dashboard" → "Layout Mobile"
- **Design Responsivo**:
  - Priorize KPIs no topo
  - Use gráficos de fácil leitura (ex: Cartões, Medidores)

**Checklist**:

- [ ] Testar em dispositivos reais
- [ ] Garantir contraste mínimo de 4.5:1 para acessibilidade

---

## Recursos Avançados

- **Galeria de Temas Prontos**: [Power BI Themes Gallery](https://community.powerbi.com/t5/Themes-Gallery/bd-p/ThemesGallery)
- **Documentação Oficial**: [Criar Dashboards](https://learn.microsoft.com/power-bi/create-reports/service-dashboards)

**Dica Profissional**:

> _"Use dashboards como 'pontos de controle' estratégicos, combinando visuais de diferentes relatórios para uma visão 360°."_

![Fluxo Dashboard](https://learn.microsoft.com/pt-br/power-bi/fundamentals/media/service-dashboards/power-bi-dashboard.png)

> Um dashboard bem projetado é a bússola do negócio. Navegue com precisão! 🧭📊
