# Descartes: Método Científico, Alma, Corpo e Conhecimento

## A Certeza do Pensamento e da Existência

> "Se me persuado de que há uma terra, porque a toco ou vejo, mais razões tenho para estar persuadido de que o meu pensamento é ou existe, porque pode suceder que eu pense tocar a terra, embora não haja talvez nenhuma terra no mundo, e que não seja possível que eu, isto é, a minha alma, não seja nada enquanto tem este pensamento."

```python
class CogitoDescartes:
    """Implementação do argumento cartesiano do 'Penso, logo existo'"""

    def __init__(self):
        self.pensamentos = []

    def pensar(self, conteudo):
        """Registra um pensamento e demonstra a existência do eu pensante"""
        self.pensamentos.append(conteudo)
        return self._verificar_existencia()

    def _verificar_existencia(self):
        """Verifica a existência através do pensamento"""
        if self.pensamentos:
            return "Existo porque penso"
        return "Não posso afirmar minha existência"

# Exemplo de uso
cogito = CogitoDescartes()
resultado = cogito.pensar("Penso na terra que toco")
print(resultado)  # Existo porque penso
```

**Link relacionado**: [Stanford Encyclopedia of Philosophy - Descartes](https://plato.stanford.edu/entries/descartes/)

## Distinção entre Alma e Corpo

> "A principal perfeição do homem é ter livre arbítrio, e é isso que o torna digno de louvor ou censura."

```python
class DualidadeCartesiana:
    """Representa a distinção entre alma (pensamento) e corpo (extensão)"""

    def __init__(self):
        self.alma = {
            "atributo_principal": "pensamento",
            "propriedades": ["vontade", "entendimento", "imaginação", "sensação"]
        }

        self.corpo = {
            "atributo_principal": "extensão",
            "dimensoes": ["comprimento", "largura", "altura"],
            "propriedades": ["figura", "movimento", "posição"]
        }

    def conhecer_substancia(self, substancia):
        """Método para conhecer uma substância através de seu atributo principal"""
        if substancia == "alma":
            return self.alma["atributo_principal"]
        elif substancia == "corpo":
            return self.corpo["atributo_principal"]
        else:
            return "Substância desconhecida"

# Exemplo de uso
dualidade = DualidadeCartesiana()
print(f"Atributo principal da alma: {dualidade.conhecer_substancia('alma')}")
print(f"Atributo principal do corpo: {dualidade.conhecer_substancia('corpo')}")
```

## O Método Cartesiano

### As Quatro Regras do Método

```python
class MetodoCartesiano:
    """Implementação das quatro regras do método cartesiano"""

    @staticmethod
    def regra_evidencia(proposicao):
        """
        Primeira regra: nunca aceitar coisa alguma como verdadeira
        que não se conheça evidentemente como tal
        """
        if proposicao.get("clareza", False) and proposicao.get("distincao", False):
            return True
        return False

    @staticmethod
    def regra_analise(problema):
        """
        Segunda regra: dividir cada dificuldade em tantas partes
        quantas forem possíveis e necessárias
        """
        partes = problema.split()
        return partes

    @staticmethod
    def regra_ordem(partes):
        """
        Terceira regra: conduzir por ordem os pensamentos,
        começando pelos mais simples aos mais complexos
        """
        return sorted(partes, key=len)  # Ordena por complexidade (simplificado)

    @staticmethod
    def regra_enumeração(resultados):
        """
        Quarta regra: fazer enumerações tão completas
        e revisões tão gerais que se fique certo de nada omitir
        """
        revisao = {
            "completo": len(resultados) > 0,
            "nada_omitido": all(resultados),
            "resultados": resultados
        }
        return revisao

# Aplicação do método
metodo = MetodoCartesiano()
problema = "Compreender a natureza do conhecimento"

# 1. Análise
partes = metodo.regra_analise(problema)
print(f"Partes do problema: {partes}")

# 2. Ordem
partes_ordenadas = metodo.regra_ordem(partes)
print(f"Partes ordenadas: {partes_ordenadas}")

# 3. Evidência (simulação)
proposicoes = [{"clareza": True, "distincao": True} for _ in partes_ordenadas]
resultados = [metodo.regra_evidencia(p) for p in proposicoes]

# 4. Enumeração
revisao = metodo.regra_enumeração(resultados)
print(f"Revisão final: {revisao}")
```

**Link relacionado**: [Descartes' Method - Internet Encyclopedia of Philosophy](https://iep.utm.edu/desc-meth/)

## O Método Científico Moderno

### Passos do Método Científico

```python
class MetodoCientifico:
    """Implementação dos passos do método científico"""

    def __init__(self):
        self.passo_atual = 0
        self.historico = []

    def definir_problema(self, problema):
        """Passo 1: Definir o problema claramente"""
        self.passo_atual = 1
        self.problema = problema
        self.historico.append(f"Problema definido: {problema}")
        return self.problema

    def recolher_dados(self, dados):
        """Passo 2: Recolhimento de dados relevantes"""
        self.passo_atual = 2
        self.dados = dados
        self.historico.append(f"Dados recolhidos: {len(dados)} elementos")
        return self.dados

    def propor_hipoteses(self, hipoteses):
        """Passo 3: Proposta de hipóteses testáveis"""
        self.passo_atual = 3
        self.hipoteses = hipoteses
        self.historico.append(f"Hipóteses propostas: {len(hipoteses)}")
        return self.hipoteses

    def testar_hipoteses(self, experimentos):
        """Passo 4: Realização de experiências controladas"""
        self.passo_atual = 4
        self.resultados = []

        for i, experimento in enumerate(experimentos):
            resultado = self._realizar_experimento(experimento)
            self.resultados.append(resultado)
            self.historico.append(f"Experimento {i+1}: {resultado}")

        return self.resultados

    def analisar_resultados(self):
        """Passo 5: Análise dos resultados obtidos"""
        self.passo_atual = 5
        analise = {
            "validas": sum(1 for r in self.resultados if r),
            "invalidas": sum(1 for r in self.resultados if not r),
            "total": len(self.resultados)
        }
        self.historico.append(f"Análise: {analise}")
        return analise

    def _realizar_experimento(self, experimento):
        """Método auxiliar para simular experimentos"""
        # Simulação simplificada
        return experimento.get("valido", False)

    def get_historico(self):
        """Retorna o histórico completo do processo"""
        return self.historico

# Exemplo de uso
cientifico = MetodoCientifico()
cientifico.definir_problema("Eficácia de um novo medicamento")
cientifico.recolher_dados(["dados_clinicos", "estatisticas", "estudos_previos"])

hipoteses = [
    {"descricao": "Medicamento reduz sintomas em 50%", "testavel": True},
    {"descricao": "Efeitos colaterais mínimos", "testavel": True}
]
cientifico.propor_hipoteses(hipoteses)

experimentos = [
    {"nome": "Estudo duplo-cego", "valido": True},
    {"nome": "Teste controle", "valido": False}
]
cientifico.testar_hipoteses(experimentos)

analise = cientifico.analisar_resultados()
print(f"Análise final: {analise}")
```

## Erro e Conhecimento Imperfeito

> "Só julgamos mal aquilo que não compreendemos claramente, mesmo que o nosso juízo possa ser verdadeiro, pois a nossa memória engana-nos muitas vezes."

```python
class TeoriaDoErro:
    """Implementação da teoria cartesiana do erro"""

    def __init__(self):
        self.faculdades = {
            "entendimento": {"perfeicao": "perceber ideias"},
            "vontade": {"perfeicao": "assentir ou não assentir"}
        }
        self.preconceitos = []

    def julgar(self, ideia, conhecimento_distinto=False):
        """
        Simula o processo de julgamento segundo Descartes
        O erro ocorre quando julgamos sem conhecimento distinto
        """
        if not conhecimento_distinto:
            self.preconceitos.append(ideia)
            return f"Julgamento potencialmente errôneo sobre: {ideia}"
        else:
            return f"Julgamento adequado sobre: {ideia}"

    def get_preconceitos(self):
        """Retorna os preconceitos acumulados"""
        return self.preconceitos

# Exemplo de uso
erro = TeoriaDoErro()
resultado1 = erro.julgar("Natureza de Deus", conhecimento_distinto=False)
resultado2 = erro.julgar("2+2=4", conhecimento_distinto=True)

print(resultado1)
print(resultado2)
print(f"Preconceitos acumulados: {erro.get_preconceitos()}")
```

## Universais e Categorias do Conhecimento

```python
class UniversaisCartesianos:
    """Representação dos cinco universais: género, espécie, diferença, próprio e acidente"""

    def __init__(self):
        self.universais = {
            "genero": "Classe geral que agrupa espécies",
            "especie": "Subclasse específica dentro de um gênero",
            "diferenca": "Característica que distingue dentro de uma espécie",
            "proprio": "Propriedade que pertence a todos os membros de uma espécie",
            "acidente": "Propriedade contingente, não essencial"
        }

    def analisar_conceito(self, conceito):
        """Analisa um conceito segundo os universais cartesianos"""
        analise = {}

        for universal, definicao in self.universais.items():
            analise[universal] = f"{definicao} aplicado a {conceito}"

        return analise

# Exemplo de uso
universais = UniversaisCartesianos()
analise = universais.analisar_conceito("homem")
for categoria, descricao in analise.items():
    print(f"{categoria.upper()}: {descricao}")
```

## Recursos Adicionais

### 📚 Obras de Descartes

- [Discurso do Método](https://www.gutenberg.org/ebooks/59) - Project Gutenberg
- [Meditações Metafísicas](https://www.gutenberg.org/ebooks/59) - Texto completo

### 🎓 Estudos Acadêmicos

- [Descartes' Epistemology](https://plato.stanford.edu/entries/descartes-epistemology/) - Stanford Encyclopedia
- [Cartesian Dualism](https://iep.utm.edu/dualism/) - Internet Encyclopedia of Philosophy

### 🔧 Ferramentas de Análise

- [Logic Calculator](https://www.erpelstolz.at/gateway/formular-uk-zentral.html) - Para testar argumentos lógicos
- [Philosophy Tools](https://philosophy.tools/) - Recursos para estudo filosófico
