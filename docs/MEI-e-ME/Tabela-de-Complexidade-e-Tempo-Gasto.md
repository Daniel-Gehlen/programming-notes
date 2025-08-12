# Tabela de Complexidade e Tempo Gasto

## Resumo do Projeto

| **Aspecto**       | **Detalhes**                                |
| ----------------- | ------------------------------------------- |
| Requisitos        | 8 (geração de card, ajuste de layout, etc.) |
| Linhas de Código  | ~200                                        |
| Tempo Total Gasto | 8 horas (24/09 21h → 25/09 5h)              |

## Distribuição do Tempo

| **Atividade**           | **Tempo Gasto** |
| ----------------------- | --------------- |
| Pesquisa e Prototipagem | 2 horas         |
| Refatoração             | 3 horas         |
| Testes e Ajustes        | 3 horas         |

---

# Métricas de Complexidade de Código

## 1. Complexidade Ciclomática

**Fórmula**:
`CC = E - N + 2P`

- **E**: Arestas (transições)
- **N**: Nós (blocos de código)
- **P**: Componentes conectados (geralmente 1)

**Interpretação**:

- CC < 10: Baixa complexidade
- CC 10-20: Moderada
- CC > 20: Alta (requer refatoração)

## 2. Linhas de Código (LOC)

| **Tipo**   | **Inclui**                             |
| ---------- | -------------------------------------- |
| Total      | Todas as linhas (código + comentários) |
| Executável | Apenas código funcional                |

## 3. Profundidade de Aninhamento

**Níveis**:

- 1-2: Ideal
- 3-4: Aceitável
- ≥5: Problema (considere simplificar)

## 4. Complexidade Algorítmica (Big O)

| **Notação** | **Exemplo**     | **Impacto**                   |
| ----------- | --------------- | ----------------------------- |
| O(1)        | Acesso a array  | Ótimo                         |
| O(n)        | Loop simples    | Linear                        |
| O(n²)       | Loops aninhados | Crítico para grandes entradas |

## 5. Ferramentas Recomendadas

| **Ferramenta** | **Função Principal**                         |
| -------------- | -------------------------------------------- |
| Radon          | Análise de complexidade ciclomática (Python) |
| SonarQube      | Métricas completas de qualidade              |
| ESLint/TSLint  | Análise estática (JavaScript/TypeScript)     |

---

## Exemplo Prático com Radon (Python)

```bash
pip install radon
radon cc seu_arquivo.py  # Retorna complexidade ciclomática
```

**Saída Típica**:

```
M 10:5 função_exemplo - B (6)
```

- **M**: Método
- **B**: Complexidade moderada (6)

---

## Considerações Finais

1. **Combine métricas** para uma visão holística.
2. **Priorize** refatoração quando:
   - CC > 20
   - Aninhamento ≥5
   - Algoritmo O(n²) ou pior
3. **Use ferramentas automatizadas** para monitoramento contínuo.
