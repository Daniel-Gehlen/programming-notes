# Help Desk vs. Service Desk

### **1. Help Desk vs. Service Desk** 🖥️🆚🛎️

- **Help Desk**: Foco em resolver problemas técnicos pontuais (ex.: "meu mouse não funciona").
  **Fluxo**: Usuário reporta → Técnico categoriza (incidente) → Resolve ou escala.
- **Service Desk**: Mais amplo, gerencia serviços (ex.: onboarding de usuários, mudanças).
  **Fluxo**: Usuário solicita serviço → Time valida → Aprova/executa (pode envolver outros times).

---

### **2. Ticketing (Zendesk/Jira/ServiceNow)** 🎫🔧

- **Fluxo padrão**:
  1️⃣ **Abertura**: Usuário abre ticket (via email/portal/chat).
  2️⃣ **Triagem**: Sistema categoriza (urgência, tipo de problema) ou técnico faz manualmente.
  3️⃣ **Atribuição**: Ticket vai para o time correto (ex.: rede, software).
  4️⃣ **Resolução**: Técnico age (remoto/presencial) → fecha ticket ou pede mais info.
  5️⃣ **Feedback**: Usuário confirma solução (ou ticket reabre).
- **Ferramentas**:
  - **Zendesk**: Simples, focado em atendimento ao cliente.
  - **Jira**: Mais técnico (devs/IT), bom para bugs e projetos.
  - **ServiceNow**: Completo (ITSM), inclui fluxos automatizados.

---

### **3. O365/Google Workspace** 📧☁️

- **Fluxo comum**:
  - **Onboarding**: Criar conta → adicionar licença → configurar email/drive.
  - **Problemas**: "Não consigo acessar o Outlook/Meet" → verificar credenciais/licença/conexão.
  - **Reset senha**: Via admin console (ou autoatendimento se configurado).

---

### **4. MFA (Autenticação Multifator)** 🔐📱

- **Fluxo típico**:
  1. Usuário tenta logar.
  2. Sistema pede 2º fator (código SMS/app Authenticator/biometria).
  3. Se falhar: reset via admin ou self-service (confirmação por email/backup codes).

---

### **5. VPN** 🌐🔒

- **Problemas comuns**:
  - "Não conecta" → Verificar credenciais, internet, cliente VPN instalado.
  - "Lento" → Checar servidor/rede local.
    **Fluxo**: Usuário abre ticket → IT verifica logs/conexão → Ajusta configuração ou troca VPN.

---

### **6. Active Directory (básico)** 👥💻

- **Ações frequentes**:
  - **Resetar senha**: Abrir AD Users and Computers → Buscar usuário → Reset password.
  - **Adicionar a grupo**: User Properties → Member Of → Adicionar (ex.: grupo "Financeiro").
  - **Desativar conta**: User → Disable Account (para ex-funcionários).

---

### **7. SLA (Acordo de Nível de Serviço)** ⏱️📝

- **Exemplo**:
  - Prioridade "Alta": Resolver em 2h (ex.: CEO sem email).
  - Prioridade "Baixa": 48h (ex.: impressora compartilhada lenta).
    **Fluxo**: Ticket entra → Sistema calcula prazo com base na prioridade → Alerta se estourar.

---

### **8. Atendimento ao Cliente** 🗣️💡

- **Fluxo ideal**:
  1. **Escutar**: Identificar problema sem interromper.
  2. **Repetir**: "Então o Excel fecha sozinho, correto?"
  3. **Agir**: Guiar por steps ou abrir ticket.
  4. **Confirmar**: "Funcionou? Posso ajudar em mais algo?"

---

**Dica extra**: Sempre documente tudo no ticket! 📌 (Quem fez, como, quando). Isso ajuda no SLA e em futuros problemas similares.
