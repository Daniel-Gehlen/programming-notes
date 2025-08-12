# Puppet: Automação de TI

## **O que é Puppet?**
Ferramenta de automação para gerenciamento de configuração de sistemas, utilizando abordagem **declarativa**:
- Define o **estado desejado** da infraestrutura
- Automatiza provisionamento e manutenção
- Garante consistência em ambientes complexos

---

## **Funcionalidades Principais**
| **Recurso**               | **Descrição**                                                                 |
|---------------------------|-------------------------------------------------------------------------------|
| **Modelagem Declarativa**  | Usa DSL própria para especificar configurações (arquivos, serviços, usuários) |
| **Infraestrutura como Código** | Versionamento e gerenciamento de configurações como código-fonte          |
| **Orquestração**          | Gerencia milhares de nós de forma escalável                                   |
| **Monitoramento**         | Relatórios detalhados para auditoria e conformidade                           |
| **Integração DevOps**     | Compatível com pipelines CI/CD                                                |

---

## **Componentes do Puppet**
1. **Puppet Master**
   - Servidor central que armazena configurações (manifestos)
   - Distribui políticas para agentes

2. **Agentes Puppet**
   - Instalados em cada nó da infraestrutura
   - Aplicam configurações definidas

3. **Manifestos**
   - Arquivos `.pp` com definições de recursos
   - Exemplo:
     ```puppet
     package { 'nginx':
       ensure => installed,
     }
     ```

4. **Módulos**
   - Pacotes reutilizáveis de código Puppet
   - Ex: módulos para Apache, MySQL, Docker

5. **Facter**
   - Coleta dados dos nós (SO, hardware, rede)

---

## **Casos de Uso**
✅ **Provisionamento Automatizado**
   - Configura novos servidores em segundos

✅ **Gestão de Configuração**
   - Mantém uniformidade em ambientes híbridos

✅ **Atualizações**
   - Aplica patches de segurança automaticamente

✅ **Controle de Acesso**
   - Gerencia usuários e permissões centralizadamente

---

## **Vantagens**
| **Benefício**      | **Impacto**                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **Consistência**   | Elimina "configurações manuais" e desvios                                   |
| **Eficiência**     | Reduz tempo em tarefas operacionais repetitivas                             |
| **Escalabilidade** | Gerencia desde dezenas até milhares de servidores                           |
| **Segurança**      | Aplica políticas de segurança de forma padronizada                          |

---

## **Conclusão**
O Puppet é essencial para:
- **Automatizar** infraestruturas complexas
- **Garantir conformidade** com políticas
- **Integrar-se** a fluxos DevOps modernos

> **Ideal para:** Equipes de TI, DevOps e SRE que buscam **infraestrutura imutável** e **gestão ágil**.
