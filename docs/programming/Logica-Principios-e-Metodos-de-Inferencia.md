# Lógica: Princípios e Métodos de Inferência

## Definição de Lógica

A lógica é a ciência que estuda princípios e métodos de inferência, tendo como objetivo principal determinar em que condições certas coisas se seguem (são consequências), ou não de outras. Inclui também o estudo de técnicas que auxiliam a produzir uma conclusão a partir de informações disponíveis.

### Conceitos Fundamentais

- **Inferência ou raciocínio**: Processo mental de construir argumentos para aceitar ou rejeitar certa proposição
- **Argumento**: Conjunto de sentenças, das quais uma é chamada de conclusão e as outras de premissas, onde pretende-se que as premissas justifiquem as conclusões
- **Sentença**: Conjunto de palavras que contém ao menos um verbo flexionado (apenas sentenças declarativas interessam à lógica)
- **Proposições**: Usadas para caracterizar coisas como verdadeiras ou falsas

## Estruturas e Formas Lógicas

As formas lógicas seguem padrões como:

- **p₁**: Todo A é B
- **p₂**: c é um A
- **Conclusão**: Logo, c é um B

### Exemplos de Argumentos

```python
# Exemplo a: Toda ajuda é bem vinda. Dinheiro é uma ajuda. Logo, dinheiro é bem vindo.
def argumento_a():
    premissa1 = "Toda ajuda é bem vinda"
    premissa2 = "Dinheiro é uma ajuda"
    conclusao = "Dinheiro é bem vindo"
    return validar_silogismo(premissa1, premissa2, conclusao)

# Exemplo b: Todo aluno é aceito. João é aluno. Logo, João é aceito.
def argumento_b():
    premissa1 = "Todo aluno é aceito"
    premissa2 = "João é aluno"
    conclusao = "João é aceito"
    return validar_silogismo(premissa1, premissa2, conclusao)

def validar_silogismo(p1, p2, conclusao):
    """Função para validar silogismos categóricos"""
    # Implementação da validação lógica
    return True  # Retorna True se o argumento for válido
```

**Links relacionados**:

- [Stanford Encyclopedia of Philosophy - Logic](https://plato.stanford.edu/entries/logic/)
- [Internet Encyclopedia of Philosophy - Logical Consequence](https://iep.utm.edu/logcon/)

## Duas Questões Importantes na Avaliação de Argumentos

1. **Todas as premissas do argumento são verdadeiras?**
2. **Se todas as premissas forem verdadeiras, a conclusão também será obrigatoriamente verdadeira?** (Validade do argumento)

A lógica formal interessa-se apenas pela segunda questão - a validade do argumento.

## Histórico e Desenvolvimento da Lógica

### Figuras Importantes

- **George Boole**: [Investigation of the Laws of Thought](https://www.gutenberg.org/ebooks/15114)
- **Gottlob Frege**: Desenvolveu a conceitografia e a noção de Cálculo de Predicados
- **Gottfried Wilhelm Leibniz** (1646-1716): Precursores da lógica moderna

## Cálculo de Predicados de Primeira Ordem (CQC)

### Sintaxe do Cálculo de Predicados

#### Símbolos Individuais

```python
# Constantes individuais (nomes de indivíduos específicos)
constantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
              'n', 'o', 'p', 'q', 'r', 's', 't']

# Variáveis individuais (valores variam em um domínio)
variaveis = ['u', 'v', 'w', 'x', 'y', 'z']
```

#### Constantes de Predicados e Fórmulas Atômicas

```python
# Predicados unários (propriedades)
def predicado_unario(P, c):
    """Representa 'c tem a propriedade P' (ex: 'Cleo é um peixe')"""
    return f"{P}{c}"

# Predicados binários (relações entre dois indivíduos)
def predicado_binario(R, a, b):
    """Representa 'a está na relação R com b' (ex: 'João é mais alto que Maria')"""
    return f"{R}{a}{b}"

# Predicados n-ários
def predicado_n_ario(R, *args):
    """Representa relações entre n indivíduos"""
    return f"{R}{''.join(args)}"

# Exemplos de uso
print(predicado_unario('P', 'c'))  # Pc (Cleo é um peixe)
print(predicado_binario('H', 'j', 'm'))  # Hjm (João é mais alto que Maria)
print(predicado_n_ario('E', 'd', 'm', 'c'))  # Edmc (Daniel entre Maria e Claudia)
```

### Operadores Lógicos

```python
class OperadoresLogicos:
    """Implementação dos operadores lógicos básicos"""

    @staticmethod
    def negacao(formula):
        """Operador de negação: ¬"""
        return f"¬{formula}"

    @staticmethod
    def conjunção(formula1, formula2):
        """Operador de conjunção: ∧ (e)"""
        return f"({formula1} ∧ {formula2})"

    @staticmethod
    def disjunção(formula1, formula2):
        """Operador de disjunção: ∨ (ou)"""
        return f"({formula1} ∨ {formula2})"

    @staticmethod
    def implicação(antecedente, consequente):
        """Operador de implicação: → (se...então...)"""
        return f"({antecedente} → {consequente})"

    @staticmethod
    def bi_implicação(formula1, formula2):
        """Operador de bi-implicação: ↔ (se e somente se)"""
        return f"({formula1} ↔ {formula2})"

# Exemplos de uso
op = OperadoresLogicos()
print(op.negacao("Pc"))  # ¬Pc (Cleo não é um peixe)
print(op.conjunção("Pa", "Pb"))  # (Pa ∧ Pb) (a é peixe e b é peixe)
print(op.implicação("Pa", "Qa"))  # (Pa → Qa) (se a é peixe, então a nada)
```

### Quantificadores e Fórmulas Gerais

```python
class Quantificadores:
    """Implementação dos quantificadores lógicos"""

    @staticmethod
    def quantificador_universal(variavel, formula):
        """Quantificador universal: ∀ (para todo)"""
        return f"(∀{variavel})({formula})"

    @staticmethod
    def quantificador_existencial(variavel, formula):
        """Quantificador existencial: ∃ (existe)"""
        return f"(∃{variavel})({formula})"

# Exemplos de uso
quant = Quantificadores()

# "Todo peixe é azul" → (∀x)(Px → Ax)
formula1 = quant.quantificador_universal('x', op.implicação('Px', 'Ax'))
print(formula1)

# "Algum peixe é azul" → (∃x)(Px ∧ Ax)
formula2 = quant.quantificador_existencial('x', op.conjunção('Px', 'Ax'))
print(formula2)
```

## Exercícios de Formalização

```python
# Implementação de exercícios de formalização
def formalizar_proposicoes():
    """Exercícios de formalização de proposições"""

    # "Algumas pessoas não são sinceras" → (∃x)(Px ∧ ¬Sx)
    prop1 = quant.quantificador_existencial('x', op.conjunção('Px', op.negacao('Sx')))

    # "Todas as mulheres são lindas" → (∀x)(Mx → Lx)
    prop2 = quant.quantificador_universal('x', op.implicação('Mx', 'Lx'))

    # "Nenhum animal é vegetal" → (∀x)(Ax → ¬Vx)
    prop3 = quant.quantificador_universal('x', op.implicação('Ax', op.negacao('Vx')))

    return prop1, prop2, prop3

proposicoes = formalizar_proposicoes()
for i, prop in enumerate(proposicoes, 1):
    print(f"Proposição {i}: {prop}")
```

## Lógica Proposicional

### Tabelas Verdade e Funções de Verdade

```python
def tabela_verdade_negacao():
    """Tabela verdade para negação"""
    print("Tabela verdade da NEGAÇÃO (¬)")
    print("P\t¬P")
    print("V\tF")
    print("F\tV")
    print()

def tabela_verdade_conjuncao():
    """Tabela verdade para conjunção"""
    print("Tabela verdade da CONJUNÇÃO (∧)")
    print("P\tQ\tP ∧ Q")
    print("V\tV\tV")
    print("V\tF\tF")
    print("F\tV\tF")
    print("F\tF\tF")
    print()

def tabela_verdade_disjuncao():
    """Tabela verdade para disjunção"""
    print("Tabela verdade da DISJUNÇÃO (∨)")
    print("P\tQ\tP ∨ Q")
    print("V\tV\tV")
    print("V\tF\tV")
    print("F\tV\tV")
    print("F\tF\tF")
    print()

def tabela_verdade_implicacao():
    """Tabela verdade para implicação material"""
    print("Tabela verdade da IMPLICAÇÃO (→)")
    print("P\tQ\tP → Q")
    print("V\tV\tV")
    print("V\tF\tF")
    print("F\tV\tV")
    print("F\tF\tV")
    print()

def tabela_verdade_bi_implicacao():
    """Tabela verdade para bi-implicação"""
    print("Tabela verdade da BI-IMPLICAÇÃO (↔)")
    print("P\tQ\tP ↔ Q")
    print("V\tV\tV")
    print("V\tF\tF")
    print("F\tV\tF")
    print("F\tF\tV")
    print()

# Gerar todas as tabelas verdade
tabela_verdade_negacao()
tabela_verdade_conjuncao()
tabela_verdade_disjuncao()
tabela_verdade_implicacao()
tabela_verdade_bi_implicacao()
```

### Modus Ponens

```python
def modus_ponens(premissa1, premissa2):
    """
    Implementação do Modus Ponens
    Premissa 1: P → Q (Se P então Q)
    Premissa 2: P
    Conclusão: Q
    """
    if "→" in premissa1:
        antecedente, consequente = premissa1.split("→")
        antecedente = antecedente.strip().strip("()")
        consequente = consequente.strip().strip("()")

        if premissa2.strip() == antecedente:
            return consequente
    return "Argumento inválido"

# Exemplo de uso
resultado = modus_ponens("(P → Q)", "P")
print(f"Modus Ponens: Se P → Q e P, então {resultado}")
```

## Recursos Adicionais

### 📚 Leitura Recomendada

- [Introduction to Logic](https://www.logicmatters.net/ifl/) - Site com recursos para estudo de lógica
- [forall x: An Introduction to Formal Logic](https://www.homepages.ucl.ac.uk/~uctytbu/forallx.pdf) - Livro didático excelente

### 🔧 Ferramentas Online

- [Logic Calculator](https://www.erpelstolz.at/gateway/formular-uk-zentral.html) - Calculadora lógica online
- [Tree Proof Generator](https://www.umsu.de/logik/trees/) - Gerador de provas por árvores

### 🎓 Cursos Online

- [Introduction to Logic](https://www.coursera.org/learn/logic-introduction) - Coursera
- [Logic and Proof](https://www.edx.org/course/logic-and-proofs) - edX
