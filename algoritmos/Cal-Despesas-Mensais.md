# Calculadora de Despesas Mensais

## Pseudoaigoritmo: Calculadora de Despesas Mensais

1. **Descrição do Problema:**

   - Uma pessoa comum deseja controlar suas despesas mensais para garantir que está dentro do orçamento.

2. **Entradas:**

   - Lista de despesas mensais (por exemplo, alimentação, transporte, moradia, entretenimento, etc.).
   - Valores correspondentes a cada despesa.

3. **Saída:**

   - O total das despesas mensais.

4. **Pseudoaigoritmo:**
   - Inicialize uma variável totalDespesas como zero.
   - Para cada despesa na lista:
   - Adicione o valor da despesa à totalDespesas.
   - Retorne totalDespesas como resultado.

**Implementação em Java:**

```java
import java.util.HashMap;

public class CalculadoraDespesas {

    public static double calcularDespesasMensais(HashMap<String, Double> despesas) {
        double totalDespesas = 0;

        // Itera sobre cada despesa e adiciona ao total
        for (String despesa : despesas.keySet()) {
            totalDespesas += despesas.get(despesa);
        }

        return totalDespesas;
    }

    public static void main(String[] args) {
        // Exemplo de uso
        HashMap<String, Double> despesas = new HashMap<>();
        despesas.put("Alimentação", 300.00);
        despesas.put("Transporte", 100.00);
        despesas.put("Moradia", 600.00);
        despesas.put("Entretenimento", 200.00);

        double total = calcularDespesasMensais(despesas);
        System.out.println("Total das despesas mensais: R$" + total);
    }
}
```

Este algoritmo permite que uma pessoa insira suas despesas mensais e obtenha o total dessas despesas. É um exemplo prático de como uma pessoa comum pode utilizar um algoritmo para gerenciar sua vida financeira.

---
