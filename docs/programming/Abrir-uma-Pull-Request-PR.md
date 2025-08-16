# Abrir uma Pull Request (PR)

A extensão **GitHub Pull Requests** é uma ferramenta poderosa para integrar o Visual Studio Code com os recursos de Pull Requests e Issues do GitHub. Ela permite que você gerencie, visualize e interaja com Pull Requests (PRs) e Issues diretamente no editor, sem precisar alternar para o navegador.

## Pré-requisitos

- O projeto já deve estar conectado ao GitHub.
- Você deve ter a extensão **GitHub Pull Requests** instalada no VS Code.
- Certifique-se de que as mudanças que deseja enviar estão em um branch separado do `main` (ou `master`).
- Sua conta do GitHub precisa estar conectada no VS Code.

---

## Passo a Passo

### 1. Crie um novo branch (se ainda não fez isso)
1. Abra o terminal no VS Code (`Ctrl + `` ou `Ctrl + Shift + P` e procure por **"Git: Create Branch"**).
2. Crie um branch a partir do `main`:
   ```bash
   git checkout -b nome-do-branch
   ```
3. Faça suas alterações no código e salve.

### 2. Commit e push das mudanças
1. Adicione os arquivos alterados ao commit:
   ```bash
   git add .
   ```
2. Faça o commit:
   ```bash
   git commit -m "Descrição das alterações"
   ```
3. Envie o branch para o repositório remoto:
   ```bash
   git push origin nome-do-branch
   ```

### 3. Abra a Pull Request no VS Code
1. **Abra a aba de Controle de Código-Fonte**:
   - Clique no ícone de **controle de versão** no lado esquerdo do VS Code (ou pressione `Ctrl + Shift + G`).

2. **Use a extensão do GitHub**:
   - Certifique-se de que a extensão **GitHub Pull Requests** está instalada.
   - Clique no ícone do GitHub (normalmente com o logo do **octocat** ou escrito "GitHub Pull Requests").

3. **Conecte ao GitHub (se necessário)**:
   - Caso seja sua primeira vez, o VS Code pedirá para você conectar sua conta GitHub. Siga as instruções para logar.

4. **Inicie uma nova Pull Request**:
   - Na aba da extensão GitHub, você verá uma seção chamada **"Pull Requests"**.
   - Clique em **+** ou **Create Pull Request**.
   - Escolha o branch que você quer enviar e o branch de destino (geralmente `main` ou `develop`).

5. **Preencha os detalhes**:
   - Adicione o título e a descrição para sua PR.
   - Revise as alterações e, quando tudo estiver pronto, clique em **Create Pull Request**.

### 4. Verifique no GitHub
- Depois de criar a PR no VS Code, você pode verificá-la no repositório do GitHub para confirmar os detalhes ou ajustar qualquer informação.

---

## Dica

Se preferir, você pode abrir a PR diretamente no navegador após o `push`:
1. Acesse o repositório no GitHub.
2. O GitHub geralmente mostra uma sugestão automática para abrir uma PR entre o branch que você fez `push` e o `main`.
3. Clique em **Compare & Pull Request**, preencha os detalhes e envie.

Assim, você tem duas opções para fazer o processo: **VS Code** ou **GitHub diretamente**.
