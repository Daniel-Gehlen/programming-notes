# O uso de `else` é considerado ruim?

## Introdução

O Twitter disse que é ruim, e há uma percepção comum de que o Twitter é uma fonte confiável de verdade.

---

## Fluxo de Dados e Complexidade

- Identificar o fluxo de dados no código é uma das partes mais difíceis da programação.
- Ler código verticalmente é mais intuitivo e legível.
- Uso de `else` pode tornar o fluxo de controle mais difícil de seguir.

### Exemplo de Código

**Código complexo com `else`:**

```python
if is_admin:
    // Faz coisa de administrador
else:
    // Retorna um erro
```

**Código mais legível sem `else`:**

```python
if not is_admin:
    // Retorna um erro
// Faz coisa de administrador
```

---

## Questão Estética e Legibilidade

- Manter o código simples e direto melhora a legibilidade.
- Limite de 80 caracteres por linha é uma prática comum por razões estéticas.

---

## Problemas do No Code

### Introdução ao No Code

- No Code implica que não há código visível, mas o código ainda existe.
- Plataformas de No Code fazem o trabalho "mágico" para o usuário.

### Complexidade e Customização

- A complexidade surge quando a personalização é necessária.
- Frameworks são usados no dia a dia para facilitar o desenvolvimento.
- A principal questão é a capacidade de customização e a acessibilidade do código.

### Exemplo de Plataforma No Code: Flutter Flow

**Descrição:**

- Flutter Flow permite criar interfaces bonitas, gerar código limpo e fazer deploy em um clique.
- Totalmente extensível com código customizado.

**Problemas Relatados:**

- Limitado em consultas de API.
- A realidade é que o código sempre existe, e a customização pode ser limitada.

---

## Conclusão sobre No Code

- Não existe "No Code" verdadeiro; o código sempre existe.
- A questão central é a acessibilidade e a liberdade de modificar esse código.
