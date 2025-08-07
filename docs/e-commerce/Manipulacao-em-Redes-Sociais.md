# Manipulação em Redes Sociais

## Exemplo: Algoritmo de recomendação do YouTube

**Descrição**: Algoritmo que direciona usuários a vídeos baseados em seu histórico de visualizações.

**Exemplo de Código**:

```python
# Simulação de histórico de visualizações do usuário
historico_usuario = ['video1', 'video2', 'video3', 'video4', 'video5']

# Algoritmo de recomendação simples baseado em histórico
def recomendar_video(historico):
    videos_recomendados = ['video6', 'video7', 'video8', 'video9', 'video10']
    return videos_recomendados

# Exemplo de recomendação para o usuário
recomendacoes = recomendar_video(historico_usuario)
print("Videos recomendados:", recomendacoes)
```

---

## A Plan for Spam

**Descrição**: Aplicação de técnicas de machine learning (como o Naive Bayes) para detecção e filtragem de spam em emails.

**Exemplo de Código**:

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Dados de exemplo (emails e suas classificações)
emails = [
    ('Oferta imperdível!!!', 'spam'),
    ('Reunião marcada para hoje', 'não spam'),
    ('Ganhe um prêmio agora', 'spam'),
    ('Confirmado seu cadastro', 'não spam')
]

# Preparando dados para classificação
corpus = [email[0] for email in emails]
y = [email[1] for email in emails]
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus)

# Treinando o classificador Naive Bayes
classifier = MultinomialNB()
classifier.fit(X, y)

# Exemplo de predição
novo_email = ['Você ganhou um prêmio!']
novo_email_vec = vectorizer.transform(novo_email)
predicao = classifier.predict(novo_email_vec)
print("Classificação do email:", predicao)
```

---

## Teorema de Bayes: Veritasium

**Descrição**: Explicação do Teorema de Bayes aplicado a problemas de probabilidade e estatística.

**Exemplo de Código**:

```python
# Probabilidades a priori
probabilidade_cancer = 0.01  # 1% da população tem câncer
probabilidade_positivo_dado_cancer = 0.9  # Probabilidade de teste positivo dado câncer
probabilidade_negativo_dado_nao_cancer = 0.9  # Probabilidade de teste negativo dado não câncer

# Função para calcular a probabilidade posterior usando Bayes
def calcular_probabilidade_posterior(probabilidade_a_priori, probabilidade_b_dado_a, probabilidade_b):
    return (probabilidade_a_priori * probabilidade_b_dado_a) / probabilidade_b

# Exemplo: Probabilidade de ter câncer dado um teste positivo
probabilidade_teste_positivo = (probabilidade_cancer * probabilidade_positivo_dado_cancer) + ((1 - probabilidade_cancer) * (1 - probabilidade_negativo_dado_nao_cancer))
probabilidade_cancer_dado_positivo = calcular_probabilidade_posterior(probabilidade_cancer, probabilidade_positivo_dado_cancer, probabilidade_teste_positivo)
print("Probabilidade de ter câncer dado teste positivo:", probabilidade_cancer_dado_positivo)
```

---

## 3Blue1Brown

**Descrição**: Canal educacional que visualiza conceitos matemáticos complexos.

**Exemplo de Código**:

```python
# Implementação de busca binária
def busca_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = (baixo + alto) // 2
        chute = lista[meio]
        if chute == item:
            return meio  # Encontrou o item na posição meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    return None  # Item não está na lista

# Exemplo de uso da busca binária
minha_lista = [1, 3, 5, 7, 9]
item_procurado = 3
resultado = busca_binaria(minha_lista, item_procurado)
if resultado is not None:
    print(f"O item {item_procurado} está na posição {resultado}.")
else:
    print(f"O item {item_procurado} não está na lista.")
```

---

## Julia Galef

**Descrição**: Exploração de racionalidade e tomada de decisões aplicáveis a sistemas de IA éticos.

**Exemplo de Código**:

```python
# Algoritmo de recomendação com mitigação de viés de confirmação
def recomendar_com_mitigacao(videos, historico):
    videos_recomendados = []
    for video in videos:
        if not confirmacao_bias(video, historico):
            videos_recomendados.append(video)
    return videos_recomendados

def confirmacao_bias(video, historico):
    # Verifica se o vídeo é similar demais aos já assistidos
    for assistido in historico:
        if similaridade(video, assistido) > 0.8:  # Limiar de similaridade arbitrário
            return True
    return False

# Exemplo de uso do algoritmo
historico_usuario = ['video1', 'video2', 'video3']
todos_videos = ['video4', 'video5', 'video6', 'video7']
recomendacoes = recomendar_com_mitigacao(todos_videos, historico_usuario)
print("Videos recomendados:", recomendacoes)
```

---

## De volta ao Spam

**Descrição**: Continuação do tema de detecção de spam com ênfase em novas técnicas de machine learning.

**Exemplo de Código**:

```python
import tensorflow as tf
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.models import Sequential

# Dados de exemplo
X_train = ...  # Features dos emails
y_train = ...  # Labels (0 para não spam, 1 para spam)

# Construção do modelo
model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])

# Compilação do modelo
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Treinamento do modelo
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)

# Exemplo de predição
novo_email = ...  # Novo email a ser classificado
predicao = model.predict(novo_email)
print("Probabilidade de ser spam:", predicao)
```

---

## Exercício pra vocês, programadores

**Descrição**: Provocações sobre princípios éticos na construção de software.

**Exemplo de Código**:

```python
import pandas as pd
from hashlib import md5

# Dados de exemplo (sensíveis)
dados_pacientes = {
    'nome': ['João', 'Maria', 'José'],
    'diagnóstico': ['câncer', 'diabetes', 'hipertensão']
}

# Função para anonimizar dados sensíveis
def anonimizar_dados(dados):
    dados_anonimizados = dados.copy()
    for coluna in dados_anonimizados.columns:
        if coluna != 'nome':  # Preservar a identidade através do nome
            dados_anonimizados[coluna] = dados_anonimizados[coluna].apply(lambda x: md5(str(x).encode()).hexdigest())
    return dados_anonimizados

# Exemplo de uso da função de anonimização
df = pd.DataFrame(dados_pacientes)
df_anonimizado = anonimizar_dados(df)
print("Dados anonimizados:")
print(df_anonimizado)
```

---

## Somos Matematicamente Ignorantes

**Descrição**: Discussão sobre como a compreensão limitada da matemática afeta a tomada de decisões.

**Exemplo de Código**:

```python
# Simulação de resultados de testes A/B
grupo_controle = [0, 1, 1, 1, 0, 0, 0, 0, 0, 0]  # Exemplo de métrica de sucesso (0 ou 1)
grupo_experimento = [1, 1, 1, 0, 1, 0, 0, 0, 0, 0]

# Função para calcular taxa de conversão
def taxa_conversao(resultados):
    return sum(resultados) / len(resultados)

# Exemplo de cálculo de taxa de conversão e teste de significância
taxa_controle = taxa_conversao(grupo_controle)
taxa_experimento = taxa_conversao(grupo_experimento)
print("Taxa de conversão - Grupo Controle:", taxa_controle)
print("Taxa de conversão - Grupo Experimento:", taxa_experimento)
```

---

## Conformidade de Asch

**Descrição**: Experimentos de Solomon Asch sobre conformidade social.

**Exemplo de Código**:

```python
# Exemplo simplificado de sistema de recomendação baseado em popularidade
def recomendar_popularidade(historico):
    videos_populares = ['video_popular1', 'video_popular2', 'video_popular3']
    return videos_populares

# Exemplo de uso do sistema de recomendação
historico_usuario = ['video1', 'video2', 'video3']
recomendacoes = recomendar_popularidade(historico_usuario)
print("Videos recomendados por popularidade:", recomendacoes)
```

---

## Obediência à Autoridade de Milgram (45:00)

**Descrição**: Experimentos de Stanley Milgram sobre obediência à autoridade.

**Exemplo de Código**:

```python
# Exemplo de sistema de controle de acesso simples
def verificar_permissao(usuario, recurso):
    # Lógica para verificar se o usuário tem permissão para acessar o recurso
    if usuario.tipo == 'administrador':
        return True
    elif usuario.tipo == 'usuário comum' and recurso == 'perfil_privado':
        return False
    else:
        return True  # Permitir acesso padrão

# Exemplo de uso do sistema de controle de acesso
class Usuario:
    def __init__(self, tipo):
        self.tipo = tipo

usuario_atual = Usuario('usuário comum')
recurso_solicitado = 'perfil_público'
acesso_permitido = verificar_permissao(usuario_atual, recurso_solicitado)
print("Acesso permitido:", acesso_permitido)
```

---

## Como “O Dilema Social” te manipula

**Descrição**: Documentário sobre como plataformas de mídia social manipulam o comportamento dos usuários.

**Exemplo de Código**:

```python
# Exemplo simplificado de algoritmo de recomendação focado em engajamento
def recomendar_engajamento(historico):
    videos_engajamento = ['video_engajante1', 'video_engajante2', 'video_engajante3']
    return videos_engajamento

# Exemplo de uso do algoritmo de recomendação
historico_usuario = ['video_informativo1', 'video_informativo2', 'video_informativo3']
recomendacoes = recomendar_engajamento(historico_usuario)
print("Videos recomendados por engajamento:", recomendacoes)
```

---

## Sinalização Virtuosa

**Descrição**: Conceito de exibir comportamentos que sinalizam virtude ou conformidade com normas sociais.

**Exemplo de Código**:

```python
# Exemplo simplificado de sistema de feedback positivo
def dar_feedback_positivo(usuario, comentario):
    # Lógica para adicionar um feedback positivo ao usuário
    return "Feedback positivo dado!"

# Exemplo de uso do sistema de feedback
usuario_destino = 'usuário123'
comentario = 'Excelente contribuição!'
resposta = dar_feedback_positivo(usuario_destino, comentario)
print(resposta)
```
