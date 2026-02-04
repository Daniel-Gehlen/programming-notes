# Tutorial de Anytype: Um Notion de Código Aberto e Focado em Privacidade

## 📋 O que é o Anytype?

**Anytype** é um aplicativo de notas com markdown baseado em blocos, focado em:

- **Privacidade**: Funciona localmente primeiro com dados encriptados
- **Código aberto**: Cliente e protocolo (Any-Sync) são abertos
- **Low-code**: Permite criar aplicações complexas sem programação
- **Sincronização P2P**: Entre dispositivos sem depender de nuvem centralizada

## 🎯 Por que é interessante?

### Problema atual:

- Plataformas como Notion, Slack, Discord criam "dark webs" proprietárias
- Dados ficam presos em ecossistemas fechados
- Falta interoperabilidade entre ferramentas

### Solução do Anytype:

- Alternativa aberta ao Notion
- Permite construir "mini-aplicativos" dentro do sistema
- Total controle sobre seus dados
- Modelo híbrido (local + sincronização opcional)

## 🔧 Como começar?

### 1. Criando uma conta

- O "login" é uma **frase-chave** (passphrase)
- Essa chave **é sua conta** - guarde com segurança!
- Processo similar a carteiras de criptomoeda

### 2. Primeiros passos

- Ao entrar, você tem um espaço com tutorial
- Crie um novo espaço para seus projetos
- Espaço padrão: 1GB grátis na rede Anytype

## ✍️ Funcionalidades básicas

### Editando com Markdown

- Sintaxe simples: `#` para título, `-` para lista, etc.
- Barra `/` abre menu de blocos:
  - Checkboxes
  - Toggles (texto recolhível)
  - Imagens, vídeos, arquivos
  - Links internos

### Propriedades e Filtros

Cada página pode ter propriedades personalizadas:

```markdown
1. Clique ao lado do título → "Tag"
2. Crie tags como "tutorial", "ensaio"
3. Use filtros para organizar por tag
```

### Visualizações de dados

Múltiplas formas de ver seus dados:

- **Tabela**: Vista tradicional
- **Galeria**: Cards visuais
- **Kanban**: Quadro estilo Trello
- **Calendário**: Organização temporal
- **Grafo**: Visualização de relações (muito visual!)

## 🚀 Funcionalidades avançadas

### Queries e Coleções

- **Coleções**: Agrupamento manual de objetos
- **Queries**: Buscas programáticas (ex: "todos com tag X")
- Podem ser embutidas em páginas com `/query`

### Tipos Personalizados

Anytype vem com tipos pré-definidos:

- Página, Nota, Tarefa, Projeto, Chat
- Cada tipo tem propriedades específicas
- Você pode criar seus próprios tipos!

### Templates Prontos

Biblioteca de templates para casos comuns:

- Biblioteca de livros
- CRM
- Diário
- Gerenciamento de projetos
- Espaço familiar

## 👥 Colaboração

### Convidando pessoas

- Ícone "Adicionar membros" no topo
- Gera link de convite
- Pessoa precisa ter Anytype instalado

### Chat integrado

- Objeto "Chat" como qualquer outro
- Conversas por projeto/tópico
- Potencial para substituir Slack/Discord em pequenas equipes

## 🌐 Publicação

### Páginas públicas

- Ícone "Publicar" (mundo) no topo
- Gera URL pública (any.coop/...)
- Plano pago: URLs personalizadas
- Autohospedagem: controle total dos domínios

## 🔒 Segurança

### Medidas incluídas:

- Dados encriptados localmente
- Sincronização com nós encriptados
- PIN code no app
- Logout obriga reautenticação

### Recomendações:

1. Sempre use PIN code
2. Anote sua passphrase em local seguro
3. Considere logout se compartilhar dispositivo

## 🏠 Autohospedagem

### Por que autohospedar?

- Controle total do armazenamento
- Independência da rede Anytype
- Customização completa

### Como migrar?

1. Exporte espaço atual
2. Configure servidor próprio (docker disponível)
3. Importe dados na nova rede
4. **Aviso**: Cada rede é isolada!

### Opções de rede:

- **Anytype Network**: Padrão (1GB grátis)
- **Self-hosted**: Seu próprio servidor
- **Local only**: Apenas rede local

## 💡 Casos de uso pessoais (do criador)

1. **Roteiros do canal**: Organização de vídeos
2. **Lista de projetos**: Sugestões da comunidade
3. **Estudos pessoais**: Biblioteca de livros/referências
4. **Tutoriais próprios**: Anotações técnicas

## 📚 Recursos úteis

### Links importantes:

- [Documentação oficial](https://docs.anytype.io)
- [Anytype Community](https://community.anytype.io)
- [Any-Sync Protocol](https://github.com/anyproto)

### Para iniciantes:

1. Explore o tutorial interno
2. Experimente com templates
3. Comece simples (apenas notas)
4. Gradualmente explore tipos e queries

## 🎉 Conclusão

Anytype é mais que um bloco de notas - é uma **plataforma de low-code focada em privacidade**. Ideal para:

- Quem quer fugir de ecossistemas fechados
- Equipes pequenas que precisam de ferramentas customizadas
- Pessoas preocupadas com soberania de dados
- Desenvolvedores que querem MVP rápidos

**Próximos passos**: Baixe, experimente com um caso simples, e gradualmente explore as funcionalidades mais avançadas!

---

_"Não é sobre substituir todas as ferramentas, mas sobre ter escolha sobre onde seus dados vivem e como se conectam."_
