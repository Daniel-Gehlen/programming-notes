# Organização de Tarefas Diárias

Para criar um algoritmo sobre um problema do dia a dia de uma pessoa comum, vamos considerar o seguinte cenário: a organização de uma lista de tarefas diárias. Vamos criar um algoritmo simples para isso:

**Problema**: Organização de uma lista de tarefas diárias.

**Algoritmo:**

1. **Entrada**: Receber uma lista de tarefas não organizada.

2. **Processamento**:
   - Ordenar as tarefas por prioridade.
   - Agrupar tarefas semelhantes ou que podem ser realizadas simultaneamente.
   - Remover tarefas duplicadas ou redundantes.

3. **Saída**: Apresentar a lista de tarefas organizada.

**Implementação em Java:**

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OrganizadorDeTarefas {

    public static void main(String[] args) {
        // Lista de tarefas
        List<String> tarefas = new ArrayList<>();
        tarefas.add("Lavar a louça");
        tarefas.add("Fazer compras");
        tarefas.add("Estudar para o exame");
        tarefas.add("Ir à academia");
        tarefas.add("Fazer o jantar");
        tarefas.add("Lavar a louça"); // Tarefa duplicada

        // Organizar as tarefas
        organizarTarefas(tarefas);

        // Exibir tarefas organizadas
        for (String tarefa : tarefas) {
            System.out.println(tarefa);
        }
    }

    public static void organizarTarefas(List<String> tarefas) {
        // Ordenar as tarefas por prioridade (pode ser uma prioridade atribuída manualmente)
        Collections.sort(tarefas);

        // Mapa para agrupar tarefas semelhantes
        Map<String, Integer> mapaTarefas = new HashMap<>();
        for (String tarefa : tarefas) {
            mapaTarefas.put(tarefa, mapaTarefas.getOrDefault(tarefa, 0) + 1);
        }

        // Limpar a lista de tarefas
        tarefas.clear();

        // Adicionar tarefas únicas ao list e realizar a contagem de tarefas duplicadas
        for (Map.Entry<String, Integer> entry : mapaTarefas.entrySet()) {
            String tarefa = entry.getKey();
            int quantidade = entry.getValue();
            if (quantidade == 1) {
                tarefas.add(tarefa);
            } else {
                for (int i = 0; i < quantidade; i++) {
                    tarefas.add(tarefa + "(" + (i + 1) + ")");
                }
            }
        }
    }
}

