# Engenharia de Prompt: Técnicas e Melhores Práticas

## Fundamentos Essenciais

### Estrutura Básica de Prompt

- **Persona**: Defina o papel do assistente
- **Objetivo**: Especifique claramente a tarefa
- **Modelo**: Indique o formato esperado da resposta
- **Contexto**: Forneça informações relevantes

### Princípios Chave

✔ **Simplicidade** antes de complexidade
✔ **Clareza** nas instruções
✔ **Exemplos** para guiar o modelo
✔ **Iteração** contínua

## Técnicas Avançadas

### Para Documentos Longos

| Técnica            | Implementação                     | Benefício                  |
| ------------------ | --------------------------------- | -------------------------- |
| **Tags XML**       | `<documento>conteúdo</documento>` | Melhor estruturação        |
| **Posicionamento** | Documento antes das instruções    | Maior eficiência           |
| **JSON**           | `{"sessão": "detalhes"}`          | Processamento mais preciso |

### Métodos de Prompting

```markdown
# Few-Shot Example

Prompt:
"""
Classifique este produto: 'Fone de ouvido sem fio'
Exemplos:

1. 'Smartphone' → Eletrônico
2. 'Camiseta' → Vestuário
   """

# Chain-of-Thought

"""
Pense passo a passo:

1. Identifique os elementos do problema
2. Analise cada componente
3. Conclua com a resposta final
   """
```

## Fluxo de Trabalho Recomendado

1. **Definição**

   - Tarefa clara + critérios de sucesso

2. **Prototipagem**

   - Versões simples → complexas
   - Testes com casos reais

3. **Otimização**

   - Adicionar exemplos
   - Refinar estrutura
   - Implementar técnicas avançadas

4. **Validação**
   - Testar com casos extremos
   - Medir qualidade das respostas

## Ferramentas Úteis

### Para Estruturação

- **Conversores** Markdown→JSON
- **Editores** com syntax highlighting
- **Validadores** de estrutura

### Para Melhoria

- **Anthropic's Prompt Generator**
- **GPT Prompt Engineer**
- **Promptfoo** (para comparação)

## Design de Serviços com IA

### Princípios

- **Visão Holística**: Jornada completa do usuário
- **Co-Criação**: Feedback contínuo
- **Prototipagem Rápida**: Testar → Refinar

### Dados Chave

- 70%+ de eficácia com Few-Shot vs Zero-Shot
- JSON reduz erros em 40% vs texto livre
- Chain-of-Thought melhora precisão em 35%

## Exemplo Prático

```json
{
  "instrução": "Resuma o artigo científico",
  "requisitos": {
    "extensão": "200 palavras",
    "tom": "acadêmico",
    "elementos": ["objetivo", "metodologia", "conclusões"]
  },
  "exemplo": {
    "input": "Texto original...",
    "output": "Resumo modelo..."
  }
}
```

## Conclusão

- **Domine os fundamentos** antes de técnicas complexas
- **Documente** seus prompts vencedores
- **Adapte-se** às novas capacidades dos modelos
- **Automatize** quando possível (agents, templates)
