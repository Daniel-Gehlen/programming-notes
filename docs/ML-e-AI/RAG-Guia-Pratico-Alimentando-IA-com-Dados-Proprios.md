# RAG: Guia Prático — Alimentando a IA com Dados Próprios

## 1. O Problema: IA que não sabe tudo

Imagine que você contrata um assistente superinteligente, mas ele só sabe o que aprendeu até 2021. Se você perguntar sobre um evento recente ou sobre um documento interno da sua empresa, ele não saberá responder.

**É aí que entra o RAG** (Retrieval-Augmented Generation). Ele é como dar uma "cola" atualizada para a IA consultar antes de responder.

---

## 2. A Busca Tradicional vs. RAG

- **Busca tradicional (palavras-chave)**:  
  É como procurar um livro em uma biblioteca pelo título exato. Se você errar uma palavra, não encontra nada.

- **RAG (busca por significado)**:  
  É como descrever o assunto para um bibliotecário que entende a essência do que você quer, mesmo sem palavras exatas.

**Exemplo**:  
Você busca por "como cuidar de cactos".  
- Busca tradicional só acha se tiver exatamente "cuidar de cactos".  
- RAG acha textos sobre "rega de suculentas" porque entende que são assuntos parecidos.

---

## 3. Vetores e Embeddings: A matemática do sentido

A IA não entende texto como nós. Ela transforma palavras em **vetores** (listas de números) que representam significado.

**Analogia**:  
Cada palavra vira uma coordenada em um mapa gigante. Palavras com significados parecidos ficam próximas.

> "rei" 🧭 → [0.2, 0.8, -0.5]  
> "rainha" 🧭 → [0.21, 0.79, -0.48] (muito próximo)  
> "carro" 🧭 → [-0.7, 0.1, 0.3] (longe)

---

## 4. Alimentando o Banco de Dados para IA

Antes de a IA responder, você precisa dar a ela o material certo. Isso se chama **criar uma base de conhecimento**.

**Passo simples**:
1. Pegue seus documentos (PDFs, textos, planilhas).
2. Divida em pedaços pequenos (chunks).
3. Transforme cada pedaço em vetor (embedding).
4. Guarde em um banco de dados vetorial.

**Exemplo**:  
Um manual de 100 páginas sobre receitas vira 500 pequenos trechos, cada um com seu vetor de significado.

---

## 5. Como Funciona uma Consulta RAG

Quando o usuário faz uma pergunta:

1. A pergunta é transformada em vetor.
2. O sistema busca os pedaços de texto mais parecidos no banco de dados.
3. A IA recebe: *pergunta + trechos encontrados*.
4. A IA responde com base nesses trechos.

**Exemplo visual**:

```
Usuário: "Qual a receita de bolo de chocolate?"
↓
Sistema busca trechos parecidos
↓
Encontra: "2 xícaras de farinha", "1 xícara de achocolatado", "modo de preparo..."
↓
IA responde: "A receita pede 2 xícaras de farinha e 1 xícara de achocolatado..."
```

---

## 6. Organização e Segmentação dos Dados

Para o sistema funcionar bem, você precisa organizar os dados:

- **Por assunto** (ex: finanças, RH, produtos)
- **Por tipo** (ex: manuais, e-mails, conversas)
- **Por data** (ex: documentos mais recentes têm prioridade)

**Exemplo simples**:  
Uma empresa separa os documentos em pastas:
- 📁 Contratos
- 📁 Manuais de produtos
- 📁 Políticas internas

Assim, quando alguém pergunta sobre férias, a IA busca só na pasta correta.

---

## 7. Evitando Problemas Comuns

- **Indexação errada**: Se o documento não foi vetorizado corretamente, ele não será encontrado.  
  *Solução*: Sempre verifique se o texto foi dividido e armazenado.

- **Resposta vaga**: A IA pode inventar se não encontrar contexto bom.  
  *Solução*: Aumente a qualidade dos trechos ou refine a pergunta.

- **Performance lenta**: Buscas em milhões de vetores podem demorar.  
  *Solução*: Use índices eficientes (como HNSW) e filtre por categorias.

---

## 8. Melhorando a Performance

- **Chunks adequados**: Pedaços de texto entre 200 e 500 palavras funcionam bem.  
  Muito pequeno → perde contexto.  
  Muito grande → mistura assuntos.

- **Memória e contexto**: A IA tem limite de tokens. Escolha os trechos mais relevantes para caber na conversa.

**Exemplo**:  
Em vez de enviar 10 páginas de um contrato, envie só os 3 parágrafos que falam sobre prazos.

---

## 9. Implementação Prática

O fluxo básico de código (mental) seria:

1. **Carregar documentos** → ler arquivos
2. **Dividir em chunks** → separar por parágrafos
3. **Gerar embeddings** → usar um modelo como `all-MiniLM-L6-v2`
4. **Armazenar** → salvar em banco vetorial (Chroma, Pinecone, etc.)
5. **Consultar** → transformar pergunta em vetor e buscar
6. **Gerar resposta** → enviar pergunta + trechos para IA (ex: GPT, Llama)

---

## 10. Integração com Modelos Locais

Você não precisa usar a OpenAI. Pode rodar modelos localmente (como Llama 3, Mistral) para:
- Mais privacidade
- Sem custos por API
- Controle total

**Exemplo**:  
Um hospital usa um modelo local para responder sobre prontuários sem enviar dados para a nuvem.

---

## 11. NLP no Processamento dos Dados

Antes de vetorizar, você pode usar **Processamento de Linguagem Natural** para:
- Remover palavras irrelevantes (stopwords)
- Corrigir erros de digitação
- Identificar entidades (nomes, datas, valores)

**Exemplo**:  
"O contrato c/ a Empresa X Ltda foi assinado em 15/01/2025."  
→ Extrai: `[EMPRESA: Empresa X Ltda]`, `[DATA: 15/01/2025]`

---

## 12. Ajustes Finos e Boas Práticas

- **Teste com perguntas reais**: Veja se a IA responde com os trechos certos.
- **Refine as respostas**: Se a IA erra, melhore os trechos ou o prompt.
- **Mantenha os dados atualizados**: Atualize o banco quando houver novos documentos.
- **Use feedback dos usuários**: Se uma resposta foi ruim, investigue se o trecho estava errado.

---

## Resumo Ilustrado

```
📄 Documentos → 🔪 Divisão em chunks → 🧠 Vetores (embeddings) → 🗄️ Banco vetorial
                                                                         ↓
❓ Pergunta → 🧠 Vetor da pergunta → 🔍 Busca trechos parecidos → 🤖 IA gera resposta
                                                                         ↓
                                                                     ✅ Resposta baseada nos documentos
```

Com RAG, você transforma uma IA genérica em uma especialista nos seus dados, mantendo controle e precisão.
