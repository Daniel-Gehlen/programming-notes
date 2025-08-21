# Pensamento Sistêmico e Teoria de Sistemas

## Pensamento Sistêmico vs Pensamento Mecanicista-Reducionista

O pensamento sistêmico contrasta com a abordagem mecanicista-reducionista de Descartes, Bacon e Newton, incorporando subjetividade das artes, tradições espirituais e interdisciplinaridade.

```python
class Sistema:
    """Classe base para representação de sistemas conforme a teoria de sistemas"""

    def __init__(self, nome, elementos, objetivos):
        self.nome = nome
        self.elementos = elementos  # Lista de elementos do sistema
        self.objetivos = objetivos  # Objetivos comuns do sistema
        self.estado = "ativo"
        self.entropia = 0  # Nível de desordem do sistema (0-100)
        self.sinergia = 100  # Nível de cooperação entre elementos (0-100)

    def __str__(self):
        return f"Sistema {self.nome}: {len(self.elementos)} elementos, Entropia: {self.entropia}%, Sinergia: {self.sinergia}%"

    def calcular_resultado_sinergico(self):
        """Calcula o resultado sinérgico do sistema (todo > soma das partes)"""
        resultado_individual = sum(elemento['valor'] for elemento in self.elementos)
        fator_sinergia = self.sinergia / 100
        return resultado_individual * (1 + fator_sinergia)

    def atualizar_entropia(self, variacao):
        """Atualiza o nível de entropia do sistema"""
        self.entropia = max(0, min(100, self.entropia + variacao))
        # A entropia reduz a sinergia
        self.sinergia = 100 - self.entropia

    def aplicar_homeostase(self):
        """Aplica mecanismo de homeostase para manter equilíbrio"""
        if self.entropia > 50:
            # Sistema tenta se reequilibrar
            self.entropia -= 10
            self.sinergia += 10
            return "Homeostase aplicada: sistema se reequilibrando"
        return "Sistema em equilíbrio"

    def verificar_viabilidade(self):
        """Verifica se o sistema ainda é viável"""
        if self.entropia >= 90:
            return "Sistema em colapso iminente"
        elif self.entropia >= 70:
            return "Sistema em risco"
        else:
            return "Sistema viável"

# Exemplo de uso
elementos_empresa = [
    {'nome': 'Produção', 'valor': 30},
    {'nome': 'RH', 'valor': 20},
    {'nome': 'Vendas', 'valor': 25},
    {'nome': 'TI', 'valor': 25}
]

empresa = Sistema("Empresa XYZ", elementos_empresa, ["Lucratividade", "Crescimento", "Satisfação do cliente"])
print(empresa)
print(f"Resultado sinérgico: {empresa.calcular_resultado_sinergico():.2f}")

# Simular aumento de entropia
empresa.atualizar_entropia(30)
print(f"Após aumento de entropia: {empresa}")

# Aplicar homeostase
print(empresa.aplicar_homeostase())
print(f"Após homeostase: {empresa}")
print(f"Status: {empresa.verificar_viabilidade()}")
```

## Conceitos Fundamentais da Teoria de Sistemas

```python
class SistemaAberto(Sistema):
    """Representa um sistema aberto que interage com o ambiente"""

    def __init__(self, nome, elementos, objetivos, ambiente):
        super().__init__(nome, elementos, objetivos)
        self.ambiente = ambiente  # Elementos externos que influenciam o sistema
        self.realimentacoes = []

    def interagir_ambiente(self):
        """Simula interação com o ambiente e realimentações"""
        influencia = sum(amb['influencia'] for amb in self.ambiente) / len(self.ambiente)

        if influencia > 0:
            # Realimentação positiva
            self.sinergia += 5
            self.realimentacoes.append({"tipo": "positiva", "impacto": +5})
            return "Realimentação positiva: sistema se fortalece"
        else:
            # Realimentação negativa
            self.entropia += 5
            self.realimentacoes.append({"tipo": "negativa", "impacto": -5})
            return "Realimentação negativa: sistema se enfraquece"

    def adaptar_ambiente(self):
        """Sistema se adapta às condições do ambiente"""
        adaptacao = len(self.realimentacoes) * 2
        self.entropia = max(0, self.entropia - adaptacao)
        self.sinergia = min(100, self.sinergia + adaptacao)
        return f"Adaptação ao ambiente: entropia -{adaptacao}%, sinergia +{adaptacao}%"

class SistemaFechado(Sistema):
    """Representa um sistema fechado (não interage com ambiente)"""

    def __init__(self, nome, elementos, objetivos):
        super().__init__(nome, elementos, objetivos)
        self.entropia = 20  # Entropia inicial menor, mas constante

    def evoluir_isolado(self):
        """Evolução de sistema fechado (entropia tende a aumentar)"""
        self.entropia += 5
        self.sinergia = 100 - self.entropia
        return f"Sistema isolado: entropia aumenta para {self.entropia}%"

# Exemplo de sistemas abertos e fechados
ambiente_externo = [
    {'elemento': 'Concorrência', 'influencia': -3},
    {'elemento': 'Tecnologia', 'influencia': +4},
    {'elemento': 'Regulamentação', 'influencia': -2}
]

sistema_aberto = SistemaAberto("Organização Aberta", elementos_empresa, ["Inovação", "Adaptação"], ambiente_externo)
sistema_fechado = SistemaFechado("Sistema Fechado", elementos_empresa, ["Estabilidade", "Controle"])

print("\n=== SISTEMA ABERTO ===")
print(sistema_aberto)
print(sistema_aberto.interagir_ambiente())
print(sistema_aberto.adaptar_ambiente())
print(sistema_aberto)

print("\n=== SISTEMA FECHADO ===")
print(sistema_fechado)
print(sistema_fechado.evoluir_isolado())
print(sistema_fechado)
```

## Aplicação em Organizações

```python
class Organizacao(SistemaAberto):
    """Sistema organizacional com aspectos múltiplos"""

    def __init__(self, nome, elementos, objetivos, ambiente):
        super().__init__(nome, elementos, objetivos, ambiente)
        self.aspectos = {
            'transformacoes_fisicas': 0,
            'comunicacao': 0,
            'envolvimento_pessoas': 0,
            'competencias': 0
        }

    def avaliar_aspectos_organizacionais(self):
        """Avalia os diferentes aspectos organizacionais"""
        self.aspectos['transformacoes_fisicas'] = sum(e['valor'] for e in self.elementos if 'produ' in e['nome'].lower())
        self.aspectos['comunicacao'] = self.sinergia * 0.8
        self.aspectos['envolvimento_pessoas'] = self.sinergia * 0.7
        self.aspectos['competencias'] = sum(e['valor'] for e in self.elementos) / len(self.elementos)

        return self.aspectos

    def calcular_efetividade_organizacional(self):
        """Calcula a efetividade geral da organização"""
        aspectos = self.avaliar_aspectos_organizacionais()
        efetividade = sum(aspectos.values()) / len(aspectos)
        return efetividade

    def diagnosticar_organizacao(self):
        """Diagnóstico completo da organização como sistema"""
        diagnostico = {
            'efetividade_geral': self.calcular_efetividade_organizacional(),
            'sinergia_equipes': self.sinergia,
            'nivel_entropia': self.entropia,
            'adaptacao_ambiental': len(self.realimentacoes),
            'viabilidade': self.verificar_viabilidade()
        }
        return diagnostico

# Exemplo de organização como sistema aberto
elementos_organizacao = [
    {'nome': 'Produção', 'valor': 85},
    {'nome': 'RH', 'valor': 75},
    {'nome': 'Vendas', 'valor': 90},
    {'nome': 'TI', 'valor': 80},
    {'nome': 'Financeiro', 'valor': 70}
]

ambiente_organizacional = [
    {'elemento': 'Mercado', 'influencia': +4},
    {'elemento': 'Concorrência', 'influencia': -3},
    {'elemento': 'Tecnologia', 'influencia': +5},
    {'elemento': 'Economia', 'influencia': -2}
]

organizacao = Organizacao("Minha Empresa", elementos_organizacao, ["Crescimento", "Inovação"], ambiente_organizacional)

# Interações com o ambiente
for _ in range(3):
    organizacao.interagir_ambiente()

print("\n=== DIAGNÓSTICO ORGANIZACIONAL ===")
print(organizacao)
aspectos = organizacao.avaliar_aspectos_organizacionais()
print("\nAspectos Organizacionais:")
for aspecto, valor in aspectos.items():
    print(f"{aspecto.replace('_', ' ').title()}: {valor:.1f}")

diagnostico = organizacao.diagnosticar_organizacao()
print("\nDiagnóstico Completo:")
for item, valor in diagnostico.items():
    print(f"{item.replace('_', ' ').title()}: {valor}")
```

## Análise Sistêmica vs Abordagem Reducionista

```python
class AnaliseSistemica:
    """Classe para comparação entre abordagem sistêmica e reducionista"""

    @staticmethod
    def abordagem_reducionista(sistema):
        """Abordagem reducionista: analisa partes individualmente"""
        analise = {}
        for elemento in sistema.elementos:
            analise[elemento['nome']] = {
                'valor_individual': elemento['valor'],
                'performance_isolada': elemento['valor'] * 0.8  # Performance sem sinergia
            }
        return analise

    @staticmethod
    def abordagem_sistemica(sistema):
        """Abordagem sistêmica: analisa relações e comportamento emergente"""
        analise = {
            'sinergia_total': sistema.sinergia,
            'entropia_sistema': sistema.entropia,
            'resultado_emergente': sistema.calcular_resultado_sinergico(),
            'relacoes_elementos': len(sistema.elementos) * (len(sistema.elementos) - 1) / 2,
            'comportamento_emergente': "Não redutível às partes individuais"
        }
        return analise

    @staticmethod
    def comparar_abordagens(sistema):
        """Compara as duas abordagens para o mesmo sistema"""
        reducionista = AnaliseSistemica.abordagem_reducionista(sistema)
        sistemica = AnaliseSistemica.abordagem_sistemica(sistema)

        comparacao = {
            'valor_total_partes': sum(item['valor_individual'] for item in reducionista.values()),
            'valor_sistemico': sistemica['resultado_emergente'],
            'vantagem_sinergica': sistemica['resultado_emergente'] - sum(item['valor_individual'] for item in reducionista.values()),
            'compreensao_global': "Abordagem sistêmica superior" if sistemica['sinergia_total'] > 50 else "Abordagem reducionista possível"
        }

        return {
            'reducionista': reducionista,
            'sistemica': sistemica,
            'comparacao': comparacao
        }

# Exemplo de comparação
print("\n=== COMPARAÇÃO DE ABORDAGENS ===")
comparacao = AnaliseSistemica.comparar_abordagens(organizacao)

print("Abordagem Reducionista (análise das partes):")
for elemento, dados in comparacao['reducionista'].items():
    print(f"  {elemento}: {dados['valor_individual']}")

print("\nAbordagem Sistêmica (análise do todo):")
for aspecto, valor in comparacao['sistemica'].items():
    print(f"  {aspecto.replace('_', ' ').title()}: {valor}")

print("\nComparação:")
for item, valor in comparacao['comparacao'].items():
    print(f"  {item.replace('_', ' ').title()}: {valor}")
```

## Recursos Adicionais

### 📚 Leituras Recomendadas

- [Thinking in Systems: A Primer](https://www.chelseagreen.com/product/thinking-in-systems/) - Donella Meadows
- [Introduction to Systems Thinking](https://thesystemsthinker.com/introduction-to-systems-thinking/) - The Systems Thinker

### 🔧 Ferramentas de Análise Sistêmica

- [Systems Thinking Tools](https://www.mindtools.com/pages/article/newTMC_04.htm) - Mind Tools
- [Causal Loop Diagrams](https://en.wikipedia.org/wiki/Causal_loop_diagram) - Diagramas de loops causais
