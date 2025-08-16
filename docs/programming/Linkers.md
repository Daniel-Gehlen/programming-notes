# Linkers

## Visão Geral

- Programas essenciais no processo de compilação
- Responsáveis por combinar módulos de código objeto
- Produzem executáveis ou bibliotecas compartilhadas

## Funções Principais

### 1. Combinação de Módulos

- Agrega múltiplos arquivos objeto (.o, .obj)
- Cria um único arquivo executável ou biblioteca

### 2. Resolução de Referências

- Conecta chamadas de função às suas implementações
- Associa variáveis globais aos seus endereços
- Elimina referências não resolvidas

### 3. Inclusão de Bibliotecas

- Liga bibliotecas estáticas (.a, .lib)
- Resolve dependências externas
- Pode incluir apenas código necessário (tree shaking)

### 4. Gerenciamento de Símbolos

- Cria tabelas de símbolos
- Mantém metadados para depuração
- Facilita linking dinâmico

## Processo de Linkagem

### Tipos de Linkagem

| Tipo         | Características                   | Exemplo de Uso               |
| ------------ | --------------------------------- | ---------------------------- |
| **Estática** | Código incorporado no executável  | Aplicações autônomas         |
| **Dinâmica** | Bibliotecas carregadas em runtime | Shared libraries (.so, .dll) |

### Etapas Principais

1. **Symbol Resolution**:
   - Encontra definições para símbolos referenciados
2. **Relocation**:
   - Ajusta endereços de memória
   - Resolve referências cruzadas

## Linkers Modernos

### Recursos Avançados

- Otimização de código morto (dead code elimination)
- Link-Time Optimization (LTO)
- Suporte a position-independent code (PIC)

### Ferramentas Populares

- GNU ld (Linux)
- Microsoft LINK (Windows)
- lld (LLVM)
- gold (alternativa mais rápida ao GNU ld)

## Exemplo de Uso

```bash
# Linkagem básica com gcc
gcc -o programa main.o utils.o

# Linkagem com biblioteca estática
gcc -o programa main.o -lmylib -L/path/to/libs
```

## Importância

- Permite desenvolvimento modular
- Gerencia complexidade em projetos grandes
- Facilita reutilização de código
- Essencial para compilação cruzada

## Conclusão

Linkers são componentes críticos que:

- Transformam código objeto em executáveis funcionais
- Garantem integridade do programa final
- Habilitam técnicas avançadas de otimização
- Suportam ecossistemas de bibliotecas
