# Sistema de Recomendação: Representação Visual

## Componentes Principais

### 1. Usuário (U)

- **Representação**: Ponto/ícone vermelho
- **Função**: Fornece entradas e recebe recomendações
- **Visualização**:
  ```
  ○ Usuário
  ```

### 2. Interesses do Usuário (IU)

- **Representação**: Vetores azuis no espaço vetorial
- **Exemplos**:
  - Categorias de produtos
  - Gêneros musicais
  - Tipos de filmes
- **Visualização**:
  ```
  ○ Usuário → → → Vetores de interesse
  ```

### 3. Base de Dados de Itens

- **Representação**: Pontos I1, I2, I3...
- **Contém**: Características dos itens como vetores
- **Visualização**:
  ```
  Itens: • I1 • I2 • I3
  ```

### 4. Sistema de Recomendação

| Componente                | Função                               | Representação   |
| ------------------------- | ------------------------------------ | --------------- |
| Algoritmo de Similaridade | Calcula proximidade entre IU e itens | ▢ Bloco central |
| Mecanismo de Recomendação | Gera itens sugeridos                 | → Setas verdes  |

## Diagrama de Fluxo

```
+------------------+       +-------------------+       +-------------------+
|     Usuário      |       |  Sistema de Rec.  |       |  Base de Itens    |
|       (U)        |------>|  ▢ Algoritmo      |<----->|  • I1 • I2 • I3   |
| ○ Vermelho       |  IU   |  Similaridade     |  Dados|                   |
+------------------+       +-------------------+       +-------------------+
                              |
                              v
                      +-------------------+
                      |  Recomendações    |
                      |    → → → →        |
                      +-------------------+
```

## Processamento

1. **Entrada**: Interesses do usuário como vetores
2. **Cálculo**: Similaridade (ex: cosseno) entre IU e itens
3. **Saída**: Itens mais próximos (verdes) como recomendações

## Observações Técnicas

- **Métricas**: Similaridade de cosseno, Pearson, etc.
- **Desafios**:
  - Precisão na representação vetorial
  - Escalabilidade para grandes datasets
  - Incorporação de feedback contínuo
