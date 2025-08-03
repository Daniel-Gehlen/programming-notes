# Gestão de Tarefas em Java

## Sistema de Gerenciamento de Tarefas Diárias

### Estrutura de Dados Principal

```java
class Tarefa {
    int id;
    String descricao;
    String prioridade;  // "alta", "media", "baixa"
    boolean concluida;

    public Tarefa(int id, String descricao, String prioridade) {
        this.id = id;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.concluida = false;
    }
}
```

### Operações Básicas Implementadas

#### 1. Adicionar Tarefa

```java
public void adicionarTarefa(String descricao, String prioridade) {
    int novoId = tarefas.size() + 1;
    tarefas.add(new Tarefa(novoId, descricao, prioridade));
}
```

#### 2. Remover Tarefa

```java
public void removerTarefa(int id) {
    tarefas.removeIf(tarefa -> tarefa.id == id);
}
```

#### 3. Marcar como Concluída

```java
public void marcarConcluida(int id) {
    for (Tarefa tarefa : tarefas) {
        if (tarefa.id == id) {
            tarefa.concluida = true;
            break;
        }
    }
}
```

#### 4. Consultar Tarefa por Descrição

```java
public Tarefa consultarPorDescricao(String descricao) {
    for (Tarefa tarefa : tarefas) {
        if (tarefa.descricao.equals(descricao)) {
            return tarefa;
        }
    }
    return null;
}
```

### Operações Avançadas

#### 1. Próxima Tarefa Prioritária

```java
public Tarefa proximaTarefaPrioritaria() {
    // Ordena por prioridade (alta > média > baixa) e depois por ID
    tarefas.sort(Comparator.comparing((Tarefa t) ->
            switch (t.prioridade) {
                case "alta" -> 1;
                case "media" -> 2;
                default -> 3;
            }).thenComparing(t -> t.id));

    for (Tarefa tarefa : tarefas) {
        if (!tarefa.concluida) {
            return tarefa;
        }
    }
    return null;
}
```

#### 2. Tarefa Mais Urgente

```java
public Tarefa tarefaMaisUrgente() {
    Tarefa tarefaAlta = tarefas.stream()
            .filter(t -> !t.concluida && t.prioridade.equals("alta"))
            .findFirst().orElse(null);

    if (tarefaAlta != null) return tarefaAlta;

    Tarefa tarefaMedia = tarefas.stream()
            .filter(t -> !t.concluida && t.prioridade.equals("media"))
            .findFirst().orElse(null);

    return tarefaMedia != null ? tarefaMedia :
           tarefas.stream()
                  .filter(t -> !t.concluida)
                  .findFirst().orElse(null);
}
```

### Classe Principal

```java
public class GerenciadorTarefas {
    private List<Tarefa> tarefas = new ArrayList<>();

    // Métodos implementados acima...

    public static void main(String[] args) {
        GerenciadorTarefas gerenciador = new GerenciadorTarefas();

        // Exemplo de uso
        gerenciador.adicionarTarefa("Revisar relatório", "alta");
        gerenciador.adicionarTarefa("Enviar e-mail", "media");

        Tarefa proxima = gerenciador.proximaTarefaPrioritaria();
        System.out.println("Próxima tarefa: " + proxima.descricao);
    }
}
```

## Diagrama de Funcionamento

```
[Adicionar Tarefa] -> [Lista de Tarefas]
[Lista de Tarefas] -> [Ordenar por Prioridade]
[Ordenar por Prioridade] -> [Filtrar Não Concluídas]
[Filtrar Não Concluídas] -> [Retornar Próxima Tarefa]
```

## Melhorias Sugeridas

1. **Persistência de Dados**

   - Salvar tarefas em arquivo JSON

   ```java
   public void salvarTarefas(String arquivo) {
       // Implementação com GSON ou Jackson
   }
   ```

2. **Validação de Prioridade**

   ```java
   public boolean validarPrioridade(String prioridade) {
       return Set.of("alta", "media", "baixa").contains(prioridade);
   }
   ```

3. **Interface de Linha de Comando**
   ```java
   public void menuInterativo() {
       // Implementação de menu com Scanner
   }
   ```
