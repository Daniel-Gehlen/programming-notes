# Diff Tools em Computação

## Conceito Básico

Ferramenta para comparar arquivos/textos e identificar diferenças linha-a-linha. Origem: Unix (`diff` command), mas agora presente em todas as plataformas.

---

## Formatos de Saída Comuns

### 1. Unified Diff (Git default)

```diff
--- arquivo_original.txt
+++ arquivo_modificado.txt
@@ -1,5 +1,6 @@
 linha1
-linha2_antiga
+linha2_nova
 linha3
+linha4_nova
 linha5
```

### 2. Contextual Diff

```diff
*** arquivo_original.txt
--- arquivo_modificado.txt
***************
*** 1,5 ****
 linha1
! linha2_antiga
 linha3
 linha5
--- 1,6 ----
 linha1
! linha2_nova
 linha3
+ linha4_nova
 linha5
```

### 3. Side-by-Side (GUI Tools)

```
Original            | Modificado
-------------------------------------
linha1              | linha1
linha2_antiga       | linha2_nova
linha3              | linha3
                    | linha4_nova
linha5              | linha5
```

---

## Casos de Uso Principais

### 🔍 **Controle de Versão (Git)**

```bash
git diff HEAD~1  # Compara com commit anterior
git diff --cached  # Mostra alterações staged
```

### 🩹 **Geração de Patches**

```bash
diff -u original.txt modificado.txt > changes.patch
patch original.txt < changes.patch
```

### 🧑‍💻 **Code Review**

- Plataformas como GitHub/GitLab usam diff para PRs
- Ferramentas: `delta`, `diff-so-fancy`

### 🔄 **Merge Conflicts**

```bash
git mergetool  # Abre diff visual para resolver conflitos
```

---

## Ferramentas Populares

| Tipo         | CLI Tools         | GUI Tools              |
| ------------ | ----------------- | ---------------------- |
| **Básico**   | `diff`, `cmp`     | WinMerge, Meld         |
| **Avançado** | `git diff`        | Beyond Compare, KDiff3 |
| **Online**   | `diffchecker.com` | GitHub Diff Viewer     |

---

## Dicas de Uso Avançado

1. **Ignorar espaços**:

   ```bash
   diff -w arquivo1 arquivo2  # Ignora whitespace
   ```

2. **Diff recursivo em diretórios**:

   ```bash
   diff -r dir1/ dir2/
   ```

3. **Colorir saída** (Linux):

   ```bash
   diff --color=always arquivo1 arquivo2 | less -R
   ```

4. **Estatísticas de mudanças**:
   ```bash
   diffstat changes.patch
   ```

---

## Fluxo de Trabalho Típico

1. Desenvolvedor modifica código
2. `git diff` verifica alterações locais
3. Gera PR com diff das mudanças
4. Revisores analisam diff no GitHub
5. Merge após aprovação

---

## Conclusão

Diff tools são essenciais para:

- Manutenção de código colaborativo
- Auditoria de mudanças
- Resolução de conflitos
- Criação de patches

_Dica Pro_: Use `icdiff` para diffs coloridos e side-by-side no terminal.
