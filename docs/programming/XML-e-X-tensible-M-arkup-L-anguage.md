# XML (eXtensible Markup Language)

## O que é XML?

Linguagem de marcação projetada para **armazenar** e **transportar dados** de forma:

- **Estruturada** (hierarquia de tags)
- **Legível** (humanos e máquinas)
- **Independente de plataforma**

---

## Características Principais

✔ **Tags personalizáveis** (`<minha_tag>`)
✔ **Autodescritivo** (tags com significado semântico)
✔ **Extensível** (define seu próprio vocabulário)
✔ **Suporte a metadados** (atributos nas tags)

**Exemplo Básico**:

```xml
<livro categoria="TI">
    <titulo>Domando XML</titulo>
    <autor>Maria Souza</autor>
    <edicao ano="2023" />
</livro>
```

---

## Aplicações Práticas

### 1. Armazenamento de Dados

- Arquivos de configuração (`config.xml`)
- Dados estruturados (catálogos de produtos)

### 2. Integração entre Sistemas

- **SOAP Web Services** (padrão em sistemas legados)
- **EDI Eletrônico** (notas fiscais, SPED)

### 3. Documentos Office

- Formatos **DOCX**, **XLSX** são ZIP com XMLs internos

### 4. Web Scraping

- RSS Feeds (ex.: notícias, podcasts)

```xml
<rss>
    <item>
        <title>Novidades em XML</title>
        <link>https://exemplo.com/noticia</link>
    </item>
</rss>
```

---

## Processamento em Linguagens Populares

| Linguagem  | Bibliotecas                     | Caso de Uso              |
| ---------- | ------------------------------- | ------------------------ |
| **Python** | `xml.etree.ElementTree`, `lxml` | Parsing simples/avançado |
| **Java**   | JAXB (bind), DOM/SAX            | Sistemas enterprise      |
| **C#**     | `XmlDocument`, LINQ to XML      | Apps .NET                |

**Exemplo Python**:

```python
import xml.etree.ElementTree as ET

xml_data = """
<livros>
    <livro isbn="123">
        <titulo>XML para Iniciantes</titulo>
    </livro>
</livros>
"""

root = ET.fromstring(xml_data)
print(root.find("./livro/titulo").text)  # Saída: XML para Iniciantes
```

---

## XML vs JSON: Quando Usar?

| Critério        | XML                                | JSON                      |
| --------------- | ---------------------------------- | ------------------------- |
| **Verbosidade** | Alto (tags de abertura/fechamento) | Baixo (chaves/colchetes)  |
| **Validação**   | Suporte a XSD/Schemas robustos     | Validação via JSON Schema |
| **Uso Moderno** | Sistemas legados/enterprise        | APIs RESTful              |
| **Hierarquia**  | Complexa (namespaces, etc.)        | Simples e plana           |

**Regra Prática**:

- Use **JSON** para APIs e aplicações web modernas
- Prefira **XML** para:
  - Sistemas legados
  - Documentos complexos (ex.: contratos digitais)
  - Quando validação rigorosa é necessária

---

## Ferramentas Avançadas

- **XPath**: Consultas precisas em documentos XML
  ```xpath
  //livro[preco > 50]/titulo
  ```
- **XSLT**: Transformação de XML para outros formatos (HTML, PDF)

**Citação**:

> _"XML é como um canivete suíço para dados estruturados – versátil, mas que exige cuidado."_

[Documentação W3C](https://www.w3.org/XML/) | [Tutorial XPath](https://www.w3schools.com/xml/xpath_intro.asp)

> Domine XML para integrar sistemas legados e processar documentos complexos! 🔍📄
