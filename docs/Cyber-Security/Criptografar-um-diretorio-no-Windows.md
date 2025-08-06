# Criptografar um Diretório no Windows

## Métodos de Criptografia

### 1. Encrypting File System (EFS) - Criptografia Nativa do Windows

**Passos:**

1. **Localize o Diretório**:
   - Clique com o botão direito na pasta → **Propriedades**.
2. **Ative a Criptografia**:
   - Aba **Geral** → **Avançados** → Marque **Criptografar o conteúdo para proteger os dados** → **OK** → **Aplicar**.
3. **Escolha o Escopo**:
   - Selecione **Aplicar alterações a esta pasta, subpastas e arquivos** → **OK**.
4. **Backup da Chave**:
   - Siga as instruções para salvar a chave de criptografia em um local seguro.

**Observações**:

- Disponível apenas em versões Pro/Enterprise do Windows.
- Acesso transparente para o usuário logado.

---

### 2. BitLocker - Criptografia de Unidade

**Indicado para** unidades completas (discos externos, partições).
**Passos**:

1. **Ative o BitLocker**:
   - Clique com o botão direito na unidade → **Ativar BitLocker**.
2. **Configure**:
   - Escolha método de desbloqueio (senha/chave USB).
   - Opte por **Criptografar toda a unidade** para maior segurança.
3. **Conclua**:
   - O Windows criptografará a unidade automaticamente.

**Observações**:

- Exige edições Pro/Enterprise do Windows.
- Ideal para proteção de dispositivos físicos.

---

### 3. VeraCrypt - Criptografia Flexível

**Indicado para** pastas específicas ou contêineres virtuais.
**Passos**:

1. **Instale o VeraCrypt**:
   - Baixe em [https://www.veracrypt.fr/](https://www.veracrypt.fr/).
2. **Crie um Contêiner**:
   - Abra o VeraCrypt → **Create Volume** → **Encrypted file container**.
3. **Monte o Contêiner**:
   - Selecione o arquivo criado → **Mount** → Insira a senha.
4. **Mova os Arquivos**:
   - Copie os arquivos para a unidade virtual montada.
   - Desmonte para proteger os dados.

**Observações**:

- Gratuito e multiplataforma.
- Ideal para pastas específicas ou uso avançado.

---

## Acesso e Transparência com EFS

- **Funcionamento**:
  - Arquivos são descriptografados automaticamente para o usuário logado.
  - Sem necessidade de ação manual durante o uso.
- **Casos que Exigem Chave**:
  - Mudança de conta de usuário.
  - Transferência para outro computador.
  - Perda de acesso à conta original.

**Backup da Chave**:

1. Pressione `Windows + R` → `certmgr.msc` → **Enter**.
2. Navegue até **Pessoal > Certificados**.
3. Exporte o certificado com chave privada (formato PFX) e proteja com senha.

---

## Impacto no Desenvolvimento

### VS Code e Git

- **Transparência**:
  - Arquivos são acessíveis normalmente no VS Code e ferramentas Git.
  - Commits e PRs enviam conteúdo descriptografado.
- **Colaboração**:
  - Arquivos em repositórios remotos não mantêm a criptografia EFS.

### Dicas Importantes

1. **Backup**:
   - Sempre exporte e proteja a chave EFS.
2. **Desempenho**:
   - Teste em máquinas lentas para avaliar impacto.
3. **Ferramentas Externas**:
   - Verifique compatibilidade com scripts/auditorias corporativas.

---

## Resumo Final

- **EFS**: Simples e integrado, mas limitado a contas locais.
- **BitLocker**: Ideal para unidades completas.
- **VeraCrypt**: Flexível para pastas específicas.

**Recomendações**:

- Para desenvolvedores: EFS é suficiente para proteção local sem impactar o fluxo de trabalho.
- Para dados sensíveis em dispositivos móveis: BitLocker ou VeraCrypt.
