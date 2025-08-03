# Sistema de Lista de Compras em Java

## Implementação Completa com Melhorias

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class OrganizadorListaCompras {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> listaCompras = new ArrayList<>();

        System.out.println("🛒 ORGANIZADOR DE LISTA DE COMPRAS 🛒");

        // Adição de itens
        System.out.println("\nADICIONE ITENS (digite 'fim' para encerrar):");
        while (true) {
            System.out.print("➡ Item: ");
            String item = scanner.nextLine().trim();

            if (item.equalsIgnoreCase("fim")) break;
            if (item.isEmpty()) {
                System.out.println("⚠ Item vazio! Tente novamente.");
                continue;
            }

            listaCompras.add(item);
            System.out.println("✔ '" + item + "' adicionado");
        }

        // Visualização inicial
        exibirLista("\n📋 SUA LISTA ATUAL:", listaCompras);

        // Remoção de itens
        System.out.print("\n❓ Deseja remover algum item? (s/n): ");
        if (scanner.nextLine().equalsIgnoreCase("s")) {
            System.out.print("➡ Item para remover: ");
            String itemRemover = scanner.nextLine().trim();

            if (listaCompras.remove(itemRemover)) {
                System.out.println("✔ '" + itemRemover + "' removido");
            } else {
                System.out.println("⚠ Item não encontrado!");
            }
        }

        // Organização final
        Collections.sort(listaCompras);
        exibirLista("\n✅ LISTA ORGANIZADA:", listaCompras);

        scanner.close();
    }

    private static void exibirLista(String titulo, ArrayList<String> lista) {
        System.out.println(titulo);
        if (lista.isEmpty()) {
            System.out.println("(lista vazia)");
        } else {
            lista.forEach(item -> System.out.println("- " + item));
        }
    }
}
```

## Funcionalidades Principais

1. **Adição Inteligente de Itens**
   - Loop contínuo até digitar "fim"
   - Validação contra itens vazios
   - Confirmação visual para cada item adicionado

2. **Sistema de Remoção**
   - Verificação de existência do item
   - Feedback visual sobre sucesso/falha

3. **Organização Automática**
   - Ordenação alfabética usando `Collections.sort()`
   - Exibição formatada da lista final

4. **Interface Amigável**
   - Emojis visuais para melhor experiência
   - Mensagens de erro descritivas
   - Formatação clara da lista

## Exemplo de Uso

```
🛒 ORGANIZADOR DE LISTA DE COMPRAS 🛒

ADICIONE ITENS (digite 'fim' para encerrar):
➡ Item: Maçã
✔ 'Maçã' adicionado
➡ Item:
⚠ Item vazio! Tente novamente.
➡ Item: Pão
✔ 'Pão' adicionado
➡ Item: Leite
✔ 'Leite' adicionado
➡ Item: fim

📋 SUA LISTA ATUAL:
- Maçã
- Pão
- Leite

❓ Deseja remover algum item? (s/n): s
➡ Item para remover: Pão
✔ 'Pão' removido

✅ LISTA ORGANIZADA:
- Leite
- Maçã
```

## Melhorias Adicionadas

1. **Validação de Entrada**
   - Bloqueio de itens vazios
   - Case-insensitive para comandos

2. **Feedback Visual**
   - Símbolos (✔, ⚠) para ações
   - Formatação consistente

3. **Método Auxiliar**
   - `exibirLista()` para evitar código duplicado

4. **Robustez**
   - Tratamento de lista vazia
   - Mensagens de erro claras
