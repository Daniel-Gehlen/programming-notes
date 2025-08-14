# FS com DAX e Cálculos com Power BI

## Etapa 1: Fundamentos do DAX

### Definição

**DAX (Data Analysis Expressions)**:
Linguagem de fórmula para criação de cálculos personalizados no Power BI, composta por:

- 300+ funções
- Operadores lógicos/matemáticos
- Constantes

**Aplicações Principais**:
✔ Criar medidas dinâmicas
✔ Gerar colunas calculadas
✔ Manipular contextos de filtro
✔ Implementar inteligência temporal

---

## Etapa 2: Colunas vs Medidas

### Colunas Calculadas

**Características**:

- Armazenadas no arquivo PBIX
- Calculadas durante a atualização de dados
- Sintaxe DAX:
  ```dax
  Total Price = 'Sales'[Quantity] * 'Sales'[Unit Price]
  ```

**Comparativo**:
| Feature | Colunas Calculadas | Medidas |
|------------------|--------------------|------------------|
| Armazenamento | Consome espaço | Calculada sob demanda |
| Performance | Impacta refresh | Otimizada para relatórios |
| Uso típico | Valores por linha | Agregações dinâmicas |

---

## Etapa 3: Contextos no DAX

### Tipos de Contexto

1. **Linha**:

   - Acesso a valores da linha atual
   - Exemplo:
     ```dax
     Margem = 'Sales'[Preço] - 'Sales'[Custo]
     ```

2. **Filtro**:

   - Controlado por segmentadores/visuais
   - Função chave:
     ```dax
     Vendas Filtradas = CALCULATE(SUM('Sales'[Valor]), 'Sales'[Região] = "Sul")
     ```

3. **Consulta**:
   - Subconjunto implícito de dados

### Funções Avançadas

| Função    | Descrição                            | Exemplo |
| --------- | ------------------------------------ | ------- |
| `RELATED` | Acessa dados de tabelas relacionadas | ```dax  |

Preço Fornecedor = RELATED('Produtos'[Preço])

````|
| `FILTER`     | Cria subconjuntos condicionais     | ```dax
Vendas Altas = CALCULATE(SUM('Sales'[Valor]), FILTER('Sales', 'Sales'[Valor] > 1000))
``` |
| `ALL`        | Ignora filtros aplicados           | ```dax
% do Total = DIVIDE(SUM('Sales'[Valor]), CALCULATE(SUM('Sales'[Valor]), ALL('Sales')))
``` |

---

## Etapa 4: Funções de Agregação

### Agregadores vs Iteradores
| Tipo          | Funções Exemplo | Quando Usar                     |
|---------------|-----------------|----------------------------------|
| **Agregadores** | SUM, AVERAGE    | Cálculos simples em colunas      |
| **Iteradores**  | SUMX, COUNTX    | Cálculos linha-a-linha complexos |

**Exemplo Iterador**:
```dax
Vendas com Desconto =
SUMX(
    'Sales',
    'Sales'[Quantidade] * ('Sales'[Preço] * (1 - 'Sales'[Desconto]))
)
````

---

## Etapa 5: Boas Práticas

### Otimização

- **Evite**: Muitas colunas calculadas (aumentam o tamanho do arquivo)
- **Prefira**: Medidas para cálculos dinâmicos
- **Dica**: Use `Variables (VAR)` para fórmulas complexas:
  ```dax
  Margem Percentual =
  VAR TotalVendas = SUM('Sales'[Valor])
  VAR TotalCustos = SUM('Sales'[Custo])
  RETURN DIVIDE(TotalVendas - TotalCustos, TotalVendas)
  ```

### Links Úteis

- [Referência Completa de Funções DAX](https://learn.microsoft.com/dax)
- [Treinamento Oficial Power BI](https://learn.microsoft.com/power-bi)

**Próximo Nível**:
_"Domine CALCULATE() - a função mais poderosa do DAX para manipulação de contexto!"_

> DAX transforma dados em insights com precisão cirúrgica. ⚡📊
