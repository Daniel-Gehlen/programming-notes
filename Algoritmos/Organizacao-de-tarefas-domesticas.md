# Organização de tarefas domésticas

## Problema do dia a dia: Organização de Tarefas Domésticas

**Descrição do problema:**
Uma pessoa comum enfrenta o desafio diário de organizar suas tarefas domésticas de forma eficiente. Estas podem incluir limpeza da casa, lavanderia, compras de supermercado, preparação de refeições, entre outras. O objetivo é otimizar a ordem de realização dessas tarefas para maximizar a eficiência e economizar tempo.

### Pseudoadgoritmo:

1. **Listar as tarefas:**
   Crie uma lista de todas as tarefas que precisam ser realizadas.

2. **Priorizar as tarefas:**
   Classifique as tarefas com base na urgência e importância. Por exemplo, tarefas urgentes podem incluir preparar o jantar, enquanto as menos urgentes podem ser limpar a geladeira.

3. **Dividir as tarefas:**
   Divida as tarefas em categorias, como limpeza, culinária, compras, etc.

4. **Agrupar tarefas semelhantes:**
   Agrupe tarefas semelhantes para minimizar o tempo gasto em transições entre diferentes tipos de atividades. Por exemplo, fazer todas as tarefas de limpeza de uma vez pode ser mais eficiente do que alternar entre limpeza e culinária.

5. **Estimar tempo:**
   Estime o tempo necessário para cada tarefa com base na experiência anterior ou na complexidade da atividade.

6. **Criar um plano de ação:**
   Organize as tarefas em uma ordem lógica, levando em consideração a prioridade, agrupamento e tempo estimado para cada uma.

7. **Flexibilidade:**
   Mantenha o plano flexível para lidar com imprevistos ou mudanças de última hora.

8. **Execução do plano:**
   Siga o plano de ação, completando cada tarefa de acordo com a ordem estabelecida.

9. **Revisão:**
   Após a conclusão das tarefas, revise o processo e identifique áreas para melhorias futuras.

### Implementação em Java:

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Tarefa implements Comparable<Tarefa> {
    String nome;
    int urgencia;

    public Tarefa(String nome, int urgencia) {
        this.nome = nome;
        this.urgencia = urgencia;
    }

    @Override
    public int compareTo(Tarefa outra) {
        return outra.urgencia - this.urgencia; // Ordena por urgência decrescente
    }

    @Override
    public String toString() {
        return nome;
    }
}

public class OrganizacaoTarefas {
    public static void main(String[] args) {
        List<Tarefa> tarefas = new ArrayList<>();
        tarefas.add(new Tarefa("Preparar jantar", 3));
        tarefas.add(new Tarefa("Limpar a geladeira", 2));
        tarefas.add(new Tarefa("Lavar roupa", 1));

        System.out.println("Lista de tarefas antes da organização: " + tarefas);
        Collections.sort(tarefas); // Ordena as tarefas por urgência
        System.out.println("Lista de tarefas após a organização: " + tarefas);
    }
}
```

**Explicação do código:**
- A classe `Tarefa` representa cada tarefa doméstica com um nome e um nível de urgência.
- O método `compareTo` é implementado para permitir a ordenação das tarefas por urgência (decrescente).
- No método `main`, as tarefas são adicionadas a uma lista, ordenadas por urgência usando `Collections.sort`, e exibidas antes e após a organização.
