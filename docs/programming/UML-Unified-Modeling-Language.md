# UML (Unified Modeling Language)

UML é uma linguagem de modelagem visual padrão para especificar, visualizar, construir e documentar sistemas de software complexos.

## Tipos de Diagramas UML

### 1. Diagramas Estruturais

**Diagrama de Classes**
Representa classes, atributos, métodos e relacionamentos

```plaintext
-----------------------------------
|        Customer               |
-----------------------------------
| - customerId: int             |
| - name: String                |
| - email: String               |
-----------------------------------
| + Customer(id, name, email)   |
| + getId(): int                |
| + getName(): String           |
| + setEmail(email: String)     |
-----------------------------------
```

**Diagrama de Componentes**
Mostra componentes do sistema e suas dependências
**Diagrama de Implantação**
Representa a distribuição física em nós de hardware

### 2. Diagramas Comportamentais

**Diagrama de Casos de Uso**

- Atores (usuários/sistemas externos)
- Casos de uso (funcionalidades)
- Relacionamentos

**Diagrama de Sequência**
Mostra interação entre objetos ao longo do tempo

```plaintext
Cliente       :Serviço       :BancoDados
   |------------>|               |
   |             |------------->|
   |             |<-------------|
   |<------------|               |
```

**Diagrama de Estados**
Modela mudanças de estado de um objeto

```plaintext
[Novo] --> [Processando] --> [Concluído]
     \                /
      \-> [Cancelado]
```

**Diagrama de Atividades**
Fluxo de trabalho entre atividades (similar a fluxograma)

## Benefícios

✅ **Padronização** - Linguagem comum para equipes
✅ **Visualização** - Representação clara de sistemas complexos
✅ **Documentação** - Artefatos compreensíveis
✅ **Análise** - Identificação de problemas antes da implementação

## Melhores Práticas

1. **Escolha os diagramas certos** - Use conforme a necessidade:

   - Arquitetura: Diagrama de Componentes
   - Comportamento: Diagrama de Sequência
   - Requisitos: Diagrama de Casos de Uso

2. **Mantenha simples** - Evite sobrecarregar com detalhes desnecessários

3. **Atualize constantemente** - Garanta sincronia com o código real

4. **Use ferramentas adequadas** - Como:
   - Enterprise Architect
   - Visual Paradigm
   - Lucidchart
   - PlantUML

## Limitações

⚠ **Complexidade** - Pode tornar-se difícil de manter
⚠ **Interpretação** - Risco de diferentes entendimentos
⚠ **Atualização** - Desafio de manter sincronizado com o código

## Conclusão

UML é essencial para:

- Projetar sistemas complexos
- Facilitar comunicação entre equipes
- Documentar arquitetura e comportamento
- Identificar requisitos e possíveis problemas
