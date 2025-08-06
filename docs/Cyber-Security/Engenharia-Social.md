# Engenharia Social: Técnicas e Defesas

## Objetivo Geral

Compreender os princípios da engenharia social, identificar ataques comuns e implementar medidas de proteção eficazes.

---

## Etapa 1: Fundamentos da Engenharia Social

### Definição

- **Arte da Manipulação**: Técnicas psicológicas para induzir pessoas a compartilhar informações confidenciais ou executar ações prejudiciais.
- **Alvo Principal**: Fator humano (o elo mais fraco na segurança cibernética).

### Objetivos Comuns

- Obter credenciais de acesso.
- Instalar malware através de anexos ou links.
- Coletar dados para fraudes financeiras.

---

## Etapa 2: Tipos de Ataques

| Tipo de Ataque | Descrição                         | Exemplo                                              |
| -------------- | --------------------------------- | ---------------------------------------------------- |
| **Vishing**    | Phishing por voz (telefone).      | Chamada falsa do "suporte técnico".                  |
| **Smishing**   | Phishing via SMS.                 | Mensagem com link malicioso "atualize seu cadastro". |
| **Pretexting** | Criação de cenários falsos.       | Fingir ser um colega de trabalho solicitando dados.  |
| **Baiting**    | Uso de iscas físicas ou digitais. | Pen drive infectado deixado em área comum.           |

**Caso Real**: Em 2020, ataques de phishing usando temas de COVID-19 aumentaram 600% (Fonte: FBI).

---

## Etapa 3: Phishing - O Ataque Mais Comum

### Características

- **Meios**: E-mails, mensagens (WhatsApp, SMS), sites falsos.
- **Gatilhos Psicológicos**:
  - Urgência ("Sua conta será bloqueada em 24h!").
  - Autoridade ("Departamento Financeiro da Empresa").
  - Curiosidade ("Você ganhou um prêmio!").

### Exemplo de E-mail de Phishing

```
Assunto: Atualização Imediata Necessária
Corpo: "Clique aqui para evitar o bloqueio da sua conta bancária."
Link: www.banco-falso.com/login
```

### Dados Alarmantes

- 94% dos malwares são entregues via e-mail (Symantec, 2023).
- Custo médio de um ataque de phishing: USD 4.91 milhões (IBM Security).

---

## Etapa 4: Proteção Contra Engenharia Social

### Medidas Práticas

1. **Verificação de Fontes**:
   - Checar domínios de e-mails (ex: `suporte@banco.com` vs `suporte@b4nco.com`).
2. **Autenticação Multifator (MFA)**:
   - Sempre habilitar MFA em contas críticas.
3. **Educação Continuada**:
   - Treinar equipes para reconhecer e-mails suspeitos.
4. **Ferramentas Técnicas**:
   - Usar filtros anti-phishing (ex: Barracuda, Proofpoint).

### Checklist de Segurança

- [ ] Nunca compartilhar senhas por telefone.
- [ ] Desconfiar de ofertas "boas demais".
- [ ] Verificar URLs antes de clicar (passar o mouse sobre links).

---

## Fluxograma: Como Responder a um Ataque Suspeito

1. **Identifique** → E-mail desconhecido? Solicitação incomum?
2. **Valide** → Contate a instituição por canais oficiais.
3. **Reporte** → Encaminhe para o departamento de TI ou abuse@domínio.
4. **Elimine** → Exclua a mensagem e execute varredura antivírus.

---

## Conclusão

A engenharia social explora **falhas humanas**, não técnicas. Proteja-se combinando:

- **Consciência**: Desenvolva ceticismo saudável.
- **Tecnologia**: Use ferramentas de segurança.
- **Processos**: Estabeleça protocolos de verificação.

**"A segurança é uma corrente – tão forte quanto seu elo mais fraco."**

> **Nota**: Testes de phishing simulados são recomendados para avaliar a maturidade de segurança organizacional. Sempre obtenha consentimento prévio.
