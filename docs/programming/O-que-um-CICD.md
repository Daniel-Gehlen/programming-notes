# O que é CI/CD?

## Introdução

CI/CD é uma prática fundamental no DevOps que visa melhorar a eficiência do ciclo de desenvolvimento e entrega de software.

---

## Ciclo de Desenvolvimento de Software

1. **Ideia Inicial**
2. **Funcionalidades**
3. **Codificação**
4. **Teste**
5. **Criação do Executável**
6. **Lançamento**

---

## Ciclo de Vida do Software

- **Novas Funcionalidades**
- **Correções de Erros (Bugs)**
- **Melhorar a Performance**
- **Lançamento Inicial**

### Etapas Recorrentes:

1. **Codificação**
2. **Teste**
3. **Criação do Executável**
4. **Versionamento**

---

## Exemplos de Versionamento

- **Versão 1.0**
  - Codificação
  - Teste
  - Criação do Executável
- **Versão 1.1**
  - Atualizações Menores (adição de novas features)
  - Patch (correção de um pequeno bug)
- **Versão 1.2**
  - Atualizações Menores (melhoria de desempenho)
- **Versão 2.0**
  - Atualização Importante (troca de layout)
  - Patch (correção na tradução)

### Estrutura de Versionamento:

```
1.0      -> Versão Inicial
1.1      -> Atualizações Menores
1.1.1    -> Patch
1.2      -> Atualizações Menores
2.0      -> Atualização Importante
2.0.1    -> Patch
```

---

## CI/CD é o Coração do DevOps

### O que é Deploy?

A implantação (Deploy) envolve mover o software de um ambiente controlado para outro. Os ambientes comuns são:

1. **Desenvolvimento (Dev):**
   Onde os desenvolvedores constroem o código.
2. **Integração (Staging):**
   O novo código é combinado e validado para funcionar com o código existente, replicando o ambiente de produção.
3. **Teste:**
   Onde os testes funcionais e não funcionais são realizados para confirmar que o código atende aos requisitos.
4. **Produção:**
   Onde o software é disponibilizado aos usuários.

---

## Integração Contínua (CI)

Integração contínua é a prática de juntar alterações de código em um repositório central frequentemente. Criações e testes são executados para:

- Encontrar e investigar erros mais rapidamente
- Melhorar a qualidade do software
- Reduzir o tempo para validar e lançar novas atualizações

### Exemplo:

```
Dev José       Dev Maria
   |              |
Feature - 1   Correção de Bugs
   \              /
     Main (Branch Principal)
```

Cada desenvolvedor trabalha com sua própria cópia da aplicação. Alterações são integradas (merged) na branch principal (Main).

---

## Entrega Contínua (CD)

Entrega contínua é a prática de:

1. Criar, testar e preparar automaticamente alterações de código para liberação
2. Baseia-se na integração contínua
3. Envolve a implantação de todas as alterações em um ambiente de teste e/ou produção após o estágio de criação

**Resultado:** Com a integração contínua bem implementada, sempre há um artefato de criação pronto para ser implantado, que passou por um processo de teste padronizado.
