# System Programming: Rust vs Zig

## Introdução

### Popularidade de Rust

- Linguagem segura, rápida e eficiente
- Promete substituir C e C++ nos próximos anos

### Apresentação de Zig

- Alternativa a C e C++
- Pode ser a verdadeira substituta

## System Programming

### Definição

- Desenvolvimento de sistemas que executam outros aplicativos (e.g., sistemas operacionais, drivers)

### Requisitos

- Acesso próximo ao hardware
- Gerenciamento manual de memória
- Controle preciso das operações

## Histórico do C

### Predominância desde os anos 1970

- Linguagem padrão para System Programming
- Vasta quantidade de código existente

### Problemas do C

- Erros comuns relacionados à memória (e.g., ponteiros nulos, vazamentos de memória)

## Alternativas Modernas

### Rust

#### Histórico

- Desenvolvida desde 2006
- Apoiada pela Mozilla desde 2009
- Pública desde 2015

#### Características principais

- Gerenciamento seguro de memória (ownership e borrow checker)
- Tratamento obrigatório de erros
- Ferramentas para modelar estado do programa

#### Recomendação

- Ótima linguagem, vale a pena aprender

### Zig

#### Características principais

- Sucessora de espírito do C
- Zero dependência para substituir compiladores de C e C++
- Integração transparente com código legado C/C++

#### Vantagens sobre Rust

- Facilita a compilação cruzada (cross-compilation)
- Permite programação em tempo de compilação com a própria linguagem

#### Exemplo prático

- Método LBM, onde Zig simplifica a programação em tempo de compilação

## Comparação Zig vs. Rust

### Rust

- Melhor gerenciamento de memória
- Segurança aprimorada e tratamento de erros

### Zig

- Melhor integração com código C/C++ existente
- Facilita o desenvolvimento de sistemas complexos em tempo de compilação

## Conclusão

### Zig como alternativa

- Ótima opção para System Programming
- Facilita integração com código legado e oferece recursos avançados

### Convite à experimentação

- Ambas as linguagens são excelentes
- Desenvolvedores ganham em ergonomia e segurança
