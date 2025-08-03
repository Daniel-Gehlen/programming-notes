# Função de Planejamento Diário

## Algoritmo para Organização de Tarefas

### Definição do Problema
Problema comum: dificuldade em organizar tarefas diárias de forma eficiente.
Solução: algoritmo para planejamento baseado em prioridade e tempo estimado.

### Estrutura de Dados
```java
class Task implements Comparable<Task> {
    String name;
    int priority;  // Quanto maior, mais importante
    int timeRequired;  // Em minutos

    public Task(String name, int priority, int timeRequired) {
        this.name = name;
        this.priority = priority;
        this.timeRequired = timeRequired;
    }

    @Override
    public int compareTo(Task other) {
        return other.priority - this.priority;  // Ordena por prioridade decrescente
    }
}
```

### Fluxo do Algoritmo
1. **Entrada**:
   - Lista de tarefas (nome, prioridade, tempo estimado)
   - Horário inicial do dia (ex: 8:00 AM)

2. **Processamento**:
   - Ordenar tarefas por prioridade (mais alta primeiro)
   - Alocar cada tarefa no primeiro horário disponível

3. **Saída**:
   - Cronograma com horário de início para cada tarefa

### Implementação em Java
```java
import java.util.*;

public class DailyPlanner {
    public static void main(String[] args) {
        List<Task> tasks = new ArrayList<>();

        // Exemplo de tarefas
        tasks.add(new Task("Estudar para o exame", 5, 120));
        tasks.add(new Task("Fazer exercícios", 4, 60));
        tasks.add(new Task("Preparar jantar", 3, 45));
        tasks.add(new Task("Responder e-mails", 2, 30));
        tasks.add(new Task("Assistir série", 1, 45));

        Collections.sort(tasks);  // Ordena por prioridade

        int currentTime = 8 * 60;  // 8:00 AM em minutos

        for (Task task : tasks) {
            int hours = currentTime / 60;
            int minutes = currentTime % 60;
            System.out.printf("%02d:%02d - %s (%d min)%n",
                            hours, minutes,
                            task.name, task.timeRequired);
            currentTime += task.timeRequired;
        }
    }
}
```

### Saída Esperada
```
08:00 - Estudar para o exame (120 min)
10:00 - Fazer exercícios (60 min)
11:00 - Preparar jantar (45 min)
11:45 - Responder e-mails (30 min)
12:15 - Assistir série (45 min)
```

### Melhorias Possíveis
1. **Restrições de Horário**:
   - Adicionar verificações para evitar tarefas fora do horário útil
   ```java
   if (currentTime + task.timeRequired > 18 * 60) {
       System.out.println("Não há tempo suficiente para: " + task.name);
       continue;
   }
   ```

2. **Tarefas Flexíveis**:
   - Permitir marcar tarefas como "flexíveis" para realocação automática

3. **Persistência**:
   - Salvar/recuperar tarefas de um arquivo ou banco de dados

4. **Interface Gráfica**:
   - Desenvolver GUI para visualização interativa do cronograma
