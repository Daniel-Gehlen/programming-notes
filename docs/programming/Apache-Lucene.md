# Apache Lucene

## Visão Geral
- Biblioteca Java open-source para busca e indexação de texto
- Base para sistemas de busca como Solr e Elasticsearch
- Alta performance em operações de recuperação de informação

## Funcionalidades Principais

### 1. Indexação Avançada
- Estrutura de dados otimizada (índices invertidos)
- Suporte a múltiplos formatos de documento
- Atualizações incrementais

### 2. Mecanismo de Busca
- Consultas complexas:
  - Booleanas (AND/OR/NOT)
  - Proximidade
  - Wildcards
  - Range queries
- Ordenação por relevância (TF-IDF, BM25)

### 3. Análise de Texto
- Pipeline de processamento:
  - Tokenização
  - Filtragem (stopwords, stemming)
  - Normalização
  - Sinônimos

## Arquitetura

### Componentes Chave
| Componente         | Função                                                                 |
|--------------------|-----------------------------------------------------------------------|
| **IndexWriter**    | Cria e atualiza índices                                               |
| **IndexSearcher**  | Executa consultas nos índices                                         |
| **Analyzer**       | Processa texto para indexação/consulta                                |
| **QueryParser**    | Converte strings em objetos Query                                     |
| **Directory**      | Armazenamento do índice (FS, RAM)                                     |

## Exemplo Prático

```java
// Criando índice
Directory index = new RAMDirectory();
IndexWriterConfig config = new IndexWriterConfig(new StandardAnalyzer());
IndexWriter writer = new IndexWriter(index, config);

// Adicionando documento
Document doc = new Document();
doc.add(new StringField("id", "1", Field.Store.YES));
doc.add(new TextField("content", "Lucene: biblioteca de busca poderosa", Field.Store.YES));
writer.addDocument(doc);
writer.close();

// Realizando busca
IndexSearcher searcher = new IndexSearcher(DirectoryReader.open(index));
Query query = new TermQuery(new Term("content", "busca"));
TopDocs results = searcher.search(query, 10);
```

## Casos de Uso

### Aplicações Típicas
- Motores de busca empresariais
- Busca em sites/e-commerce
- Análise de documentos
- Sistemas de recomendação

### Projetos Baseados em Lucene
- **Apache Solr**: Servidor de busca enterprise
- **Elasticsearch**: Busca distribuída
- **OpenSearch**: Fork do Elasticsearch

## Vantagens

✔ Alta performance
✔ Extensibilidade
✔ Comunidade ativa
✔ 20+ anos de maturidade

## Considerações

### Limitações
- Apenas para texto (não é banco de dados)
- Curva de aprendizado para APIs avançadas
- Otimização requer conhecimento especializado

## Conclusão
Apache Lucene é:
- Padrão ouro para busca textual em Java
- Base para soluções modernas de search
- Essencial para aplicações que exigem busca eficiente
