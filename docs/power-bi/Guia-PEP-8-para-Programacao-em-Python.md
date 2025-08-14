# Guia PEP 8 para Programação em Python

## Objetivo Geral

Padronizar o código Python seguindo as melhores práticas de legibilidade e manutenibilidade definidas no **PEP 8**.

---

## 1. Layout do Código

### Indentação

- **Use 4 espaços** por nível de indentação
- **Evite tabs** para garantir consistência entre editores

**Exemplo Ruim**:

```python
def calcular_media(x,y):  # Tab como indentação
    return (x+y)/2
```

**Exemplo Correto**:

```python
def calcular_media(x, y):  # 4 espaços
    return (x + y) / 2
```

### Tamanho de Linha

- **Máximo 79 caracteres** para código
- **72 caracteres** para docstrings/comentários

**Dica**: Use `\` ou parênteses para quebra lógica:

```python
total = (valor1 + valor2
         - desconto)
```

---

## 2. Convenções de Nomeação

| Tipo de Elemento | Padrão           | Exemplo Correto    | Exemplo Ruim      |
| ---------------- | ---------------- | ------------------ | ----------------- |
| Variáveis        | snake_case       | `quantidade_itens` | `quantidadeItens` |
| Funções          | snake_case       | `calcular_total()` | `CalcularTotal()` |
| Classes          | PascalCase       | `ClienteVIP`       | `cliente_vip`     |
| Constantes       | UPPER_SNAKE_CASE | `TAXA_JUROS`       | `TaxaJuros`       |

---

## 3. Docstrings e Comentários

### Boas Práticas

- **Docstrings**: Explique **o que faz** e **como usar**

  ```python
  def converter_para_euro(valor):
      """
      Converte um valor em dólar para euro usando taxa fixa.

      Args:
          valor (float): Quantia em dólar.

      Returns:
          float: Valor convertido em euros.
      """
      return valor * 0.95
  ```

- **Comentários**: Explique **por que** (não o "como")
  ```python
  # Evitar divisão por zero em cálculo estatístico
  if len(amostra) > 0:
      media = sum(amostra) / len(amostra)
  ```

---

## 4. Espaçamento e Sintaxe

### Regras Essenciais

- **Operadores**:
  ```python
  x = 5 + 3  # Espaços ao redor de operadores
  ```
- **Vírgulas**:
  ```python
  lista = [1, 2, 3]  # Espaço após vírgula
  ```
- **Funções/Classes**:

  ```python
  class MinhaClasse:  # 2 linhas antes/funções
      pass


  def nova_funcao():
      pass
  ```

---

## Ferramentas de Verificação

- **Pylint**: Análise estática completa
  ```bash
  pylint meu_script.py
  ```
- **Flake8**: Foco no PEP 8
  ```bash
  flake8 meu_script.py
  ```

**Citação-Chave**:

> _"O código é lido muito mais vezes do que escrito."_ — Guido van Rossum

[PEP 8 Oficial](https://peps.python.org/pep-0008/) | [PEP 257 (Docstrings)](https://peps.python.org/pep-0257/)

> Código limpo é código profissional. Siga o PEP 8 como sua bússola! 🧭🐍
