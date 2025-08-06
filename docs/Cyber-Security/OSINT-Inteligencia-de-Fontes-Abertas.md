# OSINT: Inteligência de Fontes Abertas

## Objetivo Geral

Dominar técnicas de coleta e análise de dados publicamente disponíveis para fins de segurança cibernética, investigação e tomada de decisão.

---

## Pré-requisitos

- Conhecimento básico em programação (Python recomendado)
- Familiaridade com linha de comando

---

## Etapa 1: Fundamentos do OSINT

### Definição e Aplicações

- **O que é**: Coleta sistemática de informações de fontes públicas (redes sociais, registros governamentais, fóruns).
- **Casos de Uso**:
  - Due diligence corporativa
  - Investigação de vulnerabilidades
  - Contra-inteligência

### Vantagens e Desafios

| **Vantagens**             | **Desafios**                   |
| ------------------------- | ------------------------------ |
| Baixo custo operacional   | Volume excessivo de dados      |
| Atualização em tempo real | Verificação de autenticidade   |
| Legalidade                | Requer curadoria especializada |

---

## Etapa 2: Metodologia OSINT

### Ciclo de Inteligência

1. **Planejamento**: Definir objetivos e escopo
2. **Coleta**: Usar ferramentas automatizadas e manuais
3. **Processamento**: Filtragem e organização
4. **Análise**: Identificação de padrões
5. **Disseminação**: Relatório estruturado

### Mindset Essencial

- **Pensamento lateral**: Conexões entre dados aparentemente desconexos
- **Verificação cruzada**: Confirmar informações em múltiplas fontes
- **Ética**: Respeitar leis de privacidade (LGPD, GDPR)

---

## Etapa 3: Google Hacking

### Operadores Avançados

| Operador    | Exemplo                      | Uso                          |
| ----------- | ---------------------------- | ---------------------------- |
| `site:`     | `site:gov.br filetype:pdf`   | Busca PDFs em domínios .gov  |
| `intitle:`  | `intitle:"index of /backup"` | Encontra diretórios abertos  |
| `filetype:` | `filetype:xls senhas`        | Localiza planilhas críticas  |
| `inurl:`    | `inurl:/wp-admin`            | Identifica painéis WordPress |

### Bancos de Dorks

- [Exploit-DB](https://www.exploit-db.com/google-hacking-database)
- GitHub dorks collections

---

## Etapa 4: Shodan - O Google dos Dispositivos

### Comandos Úteis

```sh
# Buscar câmeras abertas no Brasil
country:BR product:"webcam"

# Encontrar servidores MySQL expostos
product:"MySQL" port:3306
```

### Filtros Principais

- `net:` Faixa de IP específica
- `org:` Organização proprietária
- `os:` Sistema operacional do dispositivo

---

## Etapa 5: Maltego para Análise Relacional

### Caso Prático: Mapeamento de Infraestrutura

1. **Entidade Inicial**: Domínio (ex: `empresa.com`)
2. **Transformações**:
   - Extrair subdomínios
   - Resolver IPs
   - Identificar servidores de e-mail
3. **Visualização**: Grafo interativo de conexões

### Versões

- **Community Edition**: Limitado a 12 transformações/execução
- **Professional**: Integração com APIs premium

---

## Etapa 6: FOCA para Metadados

### Fluxo de Trabalho

1. **Coleta**: Extrair arquivos de um domínio-alvo
2. **Análise**: Identificar metadados em:
   - Documentos Office (autores, versões)
   - PDFs (coordenadas GPS embutidas)
   - Imagens (dados EXIF)

### Exemplo de Risco

```python
# Extração de usuários de documentos Word
import olefile
ole = olefile.OleFileIO("documento.doc")
print(ole.get_metadata()["author"])
```

---

## Ferramentas Complementares

| Ferramenta       | Tipo              | Caso de Uso                       |
| ---------------- | ----------------- | --------------------------------- |
| **theHarvester** | Coleta de e-mails | Enumeração de ativos corporativos |
| **SpiderFoot**   | Automação OSINT   | Análise transversal               |
| **Recon-ng**     | Framework modular | Investigação profunda             |

---

## Boas Práticas

- **Documentação**: Registrar fontes e métodos
- **Automação**: Usar scripts Python (BeautifulSoup, Scrapy)
- **Anonimização**: VPNs e proxies para pesquisas sensíveis

> "OSINT transforma dados brutos em inteligência acionável. O desafio não é coletar, mas interpretar."

**Aviso Legal**: Sempre respeite os Termos de Serviço das plataformas e leis locais de privacidade.
