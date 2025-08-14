# Gerenciando Workspaces no Power BI Service

## Visão Geral do Workspace

**Definição**: Ambiente colaborativo para criação e compartilhamento de relatórios e dashboards no Power BI Service.
**Objetivos Principais**:

- Monitorar desempenho de relatórios
- Gerenciar acessos e permissões
- Otimizar fluxos de trabalho analíticos

---

## Monitoramento de Desempenho

### Métricas Chave

| Métrica                               | Descrição                              | Impacto               |
| ------------------------------------- | -------------------------------------- | --------------------- |
| **Tempo de Abertura (50º percentil)** | Tempo médio para carregar relatórios   | UX do usuário final   |
| **Tendência de Tempo**                | Variação histórica no carregamento     | Identifica degradação |
| **Gráficos Diários/Semanais**         | Percentis 10%, 50%, 90% de performance | Detecção de picos     |

**Dica**: Use filtros de data para comparar períodos e identificar regressões.

---

## Hierarquia de Permissões

### Papéis e Capacidades

| Papel             | Ações Permitidas                                                                   | Restrições                 |
| ----------------- | ---------------------------------------------------------------------------------- | -------------------------- |
| **Administrador** | - Gerenciar usuários<br>- Publicar/atualizar conteúdo<br>- Configurar atualizações | Acesso total               |
| **Membro**        | - Adicionar usuários (exceto admins)<br>- Criar/editar conteúdo                    | Não pode excluir workspace |
| **Colaborador**   | - Publicar conteúdo<br>- Agendar atualizações\*                                    | \*Se autorizado            |
| **Visualizador**  | - Apenas visualizar relatórios<br>- Ler fluxos de dados                            | Sem edição                 |

**Best Practice**: Aplique o princípio do menor privilégio para segurança.

---

## Pipeline de Implementação (Premium)

### Fluxo de Trabalho

1. **Desenvolvimento** → 2. **Teste** → 3. **Produção**
   **Vantagens**:

- Controle de versão
- Validação pré-lançamento
- Rollback seguro

**Recursos Exclusivos**:

- Gerenciamento de ciclos de vida
- Deploy automatizado

---

## Governança de Dados

### Linhagem de Dados

**Benefícios**:

- Mapeamento de fontes → destinos
- Diagnóstico rápido de falhas
- Visibilidade de dependências

**Ferramentas**:

- Rótulos de confidencialidade
- Integração com Microsoft Cloud App Security

---

## Checklist de Boas Práticas

- [ ] Auditar permissões trimestralmente
- [ ] Monitorar tendências de performance semanalmente
- [ ] Usar pipelines para ambientes críticos
- [ ] Documentar linhagem de dados essenciais

**Dica Pro**:

> "Workspaces são o coração do Power BI Service - invista em sua governança para evitar dores de cabeça futuras."

[Documentação Oficial](https://learn.microsoft.com/power-bi/collaborate-share/service-new-workspaces) | [Modelo de Governança](https://aka.ms/PBIGovernance)
