# Ordenação por Prioridade

**Pseudo-algoritmo: Organizando uma lista de tarefas por prioridade**

1. **Definição das tarefas e prioridades:**
   Crie uma lista de tarefas diárias, atribuindo a cada uma delas uma prioridade de acordo com sua importância e urgência.

2. **Contagem das prioridades:**
   Para cada tarefa, conte quantas tarefas têm prioridade igual ou mais alta.

3. **Ordenação das tarefas por prioridade:**
   Com base na contagem anterior, organize as tarefas em uma nova lista, colocando primeiro aquelas com menor número de tarefas de prioridade igual ou maior.

4. **Execução das tarefas:**
   Execute as tarefas de acordo com a ordem estabelecida na nova lista.

**Implementação em Java: Organizando uma lista de tarefas por prioridade**

```java
import java.util.*;

public class OrganizacaoTarefas {

    static class Tarefa {
        String nome;
        int prioridade;

        public Tarefa(String nome, int prioridade) {
            this.nome = nome;
            this.prioridade = prioridade;
        }
    }

    public static void main(String[] args) {
        List<Tarefa> tarefas = new ArrayList<>();
        tarefas.add(new Tarefa("Estudar para prova", 3));
        tarefas.add(new Tarefa("Fazer compras", 2));
        tarefas.add(new Tarefa("Ir ao médico", 1));
        tarefas.add(new Tarefa("Preparar apresentação", 3));
        tarefas.add(new Tarefa("Fazer exercícios", 2));

        organizarPorPrioridade(tarefas);

        // Exibir tarefas organizadas por prioridade
        for (Tarefa tarefa : tarefas) {
            System.out.println(tarefa.nome + " - Prioridade: " + tarefa.prioridade);
        }
    }

    static void organizarPorPrioridade(List<Tarefa> tarefas) {
        // Contagem de tarefas por prioridade
        Map<Integer, Integer> contagemPrioridades = new HashMap<>();
        for (Tarefa tarefa : tarefas) {
            contagemPrioridades.put(tarefa.prioridade, contagemPrioridades.getOrDefault(tarefa.prioridade, 0) + 1);
        }

        // Ordenação das tarefas por prioridade
        Collections.sort(tarefas, new Comparator<Tarefa>() {
            @Override
            public int compare(Tarefa t1, Tarefa t2) {
                int count1 = contagemPrioridades.get(t1.prioridade);
                int count2 = contagemPrioridades.get(t2.prioridade);
                return Integer.compare(count1, count2);
            }
        });
    }
}
```

Este código Java implementa um algoritmo que organiza uma lista de tarefas por prioridade, contando o número de tarefas com prioridades iguais ou mais altas e ordenando-as com base nessa contagem.
