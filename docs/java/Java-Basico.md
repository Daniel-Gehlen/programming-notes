# Java Básico: Conceitos Fundamentais

## 🌳 1. Estruturas de Dados - Árvores Binárias

### Implementação de BST (Binary Search Tree)

```java
class Node {
    int value;
    Node left, right;

    public Node(int item) {
        value = item;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    // Inserção recursiva
    Node insert(Node root, int value) {
        if (root == null) {
            return new Node(value);
        }
        if (value < root.value) {
            root.left = insert(root.left, value);
        } else if (value > root.value) {
            root.right = insert(root.right, value);
        }
        return root;
    }

    // Busca recursiva
    Node search(Node root, int value) {
        if (root == null || root.value == value) {
            return root;
        }
        return value < root.value
            ? search(root.left, value)
            : search(root.right, value);
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.root = tree.insert(tree.root, 10);
        tree.insert(tree.root, 5);
        tree.insert(tree.root, 15);

        Node result = tree.search(tree.root, 5);
        System.out.println(result != null
            ? "Valor encontrado: " + result.value
            : "Valor não encontrado.");
    }
}
```
