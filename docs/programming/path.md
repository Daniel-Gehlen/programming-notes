# Conceitos de Controle de Versão e Operações no Git

## Path em Computação

### Tipos de Caminhos

1. **File Path**

   - Windows: `C:\Users\Nome\arquivo.txt`
   - Unix: `/home/nome/arquivo.txt`

2. **URL Path**

   - `https://site.com/caminho/recurso`

3. **Graph Path**

   - Sequência de vértices conectados em grafos

4. **PATH (Variável de Ambiente)**
   - Lista diretórios para executáveis:
     ```bash
     PATH=/bin:/usr/bin:/usr/local/bin
     ```

---

## Chunk vs Hunk

| Termo | Definição                      | Exemplo de Uso                 |
| ----- | ------------------------------ | ------------------------------ |
| Chunk | Pedaço de dados dividido       | Transmissão de dados em partes |
| Hunk  | Seção de código com alterações | Saída do `git diff`:           |

```diff
@@ -10,7 +10,7 @@
- linha_antiga
+ linha_nova
```

---

## Evolução dos Sistemas de Versão

### Linha do Tempo

1. **SCCS (1970s)**

   - Primeiro sistema da AT&T
   - Comandos: `sccs get`, `sccs delta`

2. **RCS (1980s)**

   - Melhorias no branching:
     ```bash
     ci -l arquivo.txt  # Check-in
     rcsdiff -r1.1 -r1.2  # Comparar versões
     ```

3. **CVS → SVN → Git**
   - Transição para sistemas distribuídos

---

## Git: Merge e Pull Requests

### Tipos de Merge

1. **Fast-Forward**

   - Sem divergências:
     ```bash
     git merge feature
     ```

2. **Three-Way Merge**
   - Combina 3 pontos (base + 2 branches):
     ```bash
     git merge branchA branchB
     ```

### Fluxo de PR no GitHub

1. Cria branch → Faz commits
2. Abre PR → Revisão por pares
3. Resolve conflitos → Merge

---

## Comparativo de Sistemas

| Sistema | Tipo         | Vantagem            |
| ------- | ------------ | ------------------- |
| SCCS    | Centralizado | Pioneiro            |
| RCS     | Local        | Simplicidade        |
| Git     | Distribuído  | Branching eficiente |
