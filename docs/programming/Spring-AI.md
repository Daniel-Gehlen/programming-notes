# Spring AI

O **Spring AI** é um projeto relativamente novo que visa integrar facilmente modelos de inteligência artificial (IA) em aplicações Spring, permitindo que desenvolvedores Java utilizem LLMs (Large Language Models) como o ChatGPT, LLaMA, Claude e outros de forma simples e padronizada.

### **Principais Funcionalidades do Spring AI**

1. **Chat Models** – Interação com modelos de conversação (como OpenAI, Azure OpenAI, Anthropic Claude, etc.).
2. **Embedding Models** – Geração de vetores de embeddings para tarefas como busca semântica.
3. **Prompt Engineering** – Criação de prompts estruturados para melhorar respostas de IA.
4. **Vector Databases** – Integração com bancos de dados vetoriais (como Pinecone, Weaviate, Redis) para armazenar e buscar embeddings.
5. **Structured Output** – Extração de dados estruturados (JSON, objetos Java) a partir de respostas de IA.
6. **Function Calling** – Chamada de funções Java a partir de prompts de IA.

---

### **Como Funciona?**

O Spring AI abstrai a comunicação com APIs de IA, permitindo que você interaja com diferentes provedores usando uma interface comum.

#### **1. Configuração Básica**

Adicione a dependência no `pom.xml` (se estiver usando Maven):

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
    <version>0.8.1</version> <!-- Verifique a versão mais recente -->
</dependency>
```

Configure a chave da OpenAI no `application.properties`:

```properties
spring.ai.openai.api-key=SUA_CHAVE_DA_OPENAI
```

#### **2. Usando o ChatClient para Interagir com um LLM**

```java
import org.springframework.ai.chat.ChatClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AIController {

    @Autowired
    private ChatClient chatClient;

    @GetMapping("/chat")
    public String generate(@RequestParam String prompt) {
        return chatClient.call(prompt);
    }
}
```

Ao chamar `/chat?prompt="Explique o Spring AI"`, o sistema usará a OpenAI para gerar uma resposta.

---

#### **3. Trabalhando com Embeddings**

```java
import org.springframework.ai.embedding.EmbeddingClient;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class EmbeddingController {

    @Autowired
    private EmbeddingClient embeddingClient;

    @GetMapping("/embed")
    public List<Double> embed(@RequestParam String text) {
        return embeddingClient.embed(text);
    }
}
```

Isso retornará um vetor de embeddings do texto, útil para buscas semânticas.

---

#### **4. Extraindo Respostas Estruturadas (JSON)**

Você pode definir um `Record` em Java e pedir para o LLM retornar dados no formato desejado:

```java
record Person(String name, int age) {}

@GetMapping("/generate-person")
public Person generatePerson(@RequestParam String description) {
    String prompt = """
        Gere um objeto JSON com 'name' e 'age' baseado na descrição:
        {description}
        """;
    return chatClient.call(prompt, Person.class);
}
```

---

### **Vantagens do Spring AI**

✅ **Padronização** – Troque modelos (OpenAI, LLaMA, Claude) sem alterar o código.
✅ **Integração com Spring** – Funciona nativamente com Spring Boot, DI, etc.
✅ **Prompt Templates** – Gerencie prompts de forma organizada.
✅ **Vector Search** – Facilita a criação de sistemas RAG (Retrieval-Augmented Generation).

### **Provedores Suportados**

- OpenAI / Azure OpenAI
- Anthropic Claude
- HuggingFace
- Ollama (para rodar modelos locais como LLaMA 2)
- Vertex AI (Google)
- Bedrock (AWS)

---

### **Exemplo Avançado: RAG (Retrieval-Augmented Generation)**

Com Spring AI, você pode:

1. Gerar embeddings de documentos.
2. Armazenar em um banco de dados vetorial (ex: Pinecone).
3. Buscar os documentos mais relevantes e usá-los como contexto em um prompt.

```java
// Pseudocódigo para RAG
String userQuestion = "Quais são os benefícios do Spring AI?";
List<Document> relevantDocs = vectorStore.similaritySearch(userQuestion);
String answer = chatClient.call("Responda com base nestes documentos: " + relevantDocs + userQuestion);
```

---

### **Conclusão**

O Spring AI simplifica o uso de IA em aplicações Java/Spring, abstraindo a complexidade das APIs de LLMs e fornecendo ferramentas para:

- **Chatbots**
- **Busca Semântica**
- **Geração de Conteúdo**
- **Análise de Dados com IA**

Se você já usa Spring Boot, vale a pena experimentar! 🚀

📌 **Documentação Oficial**: [Spring AI Docs](https://spring.io/projects/spring-ai)
