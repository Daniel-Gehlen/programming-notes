# Binary Tree e BST Explained

## Árvore Binária

Estrutura hierárquica onde cada nó tem no máximo dois filhos: esquerdo e direito.

### Componentes:

- **Nó (Node)**: Elemento contendo valor e referências para filhos
- **Raiz (Root)**: Nó superior sem pai
- **Folhas (Leaves)**: Nós sem filhos
- **Subárvore (Subtree)**: Nó com todos seus descendentes

### Tipos de Árvores Binárias:

1. **Completa**: Todos níveis exceto último completamente preenchidos
2. **Perfeita**: Todos nós internos com dois filhos, folhas no mesmo nível
3. **Balanceada**: Diferença de altura entre subárvores ≤ 1
4. **BST**: Valores à esquerda menores, à direita maiores

## Árvore Binária de Busca (BST)

### Propriedade Fundamental:

Para qualquer nó:

- Todos valores na subárvore esquerda são menores
- Todos valores na subárvore direita são maiores

### Operações Básicas:

#### Inserção:

```python
def insert(root, key):
    if root is None:
        return Node(key)
    if key < root.val:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root
```

#### Busca:

```python
def search(root, key):
    if root is None or root.val == key:
        return root
    if key < root.val:
        return search(root.left, key)
    return search(root.right, key)
```

#### Remoção:

Três casos:

1. Nó sem filhos: remove diretamente
2. Nó com um filho: substitui pelo filho
3. Nó com dois filhos: encontra sucessor (menor à direita)

### Exemplo Visual:

```
        8
       / \
      3   10
     / \    \
    1   6    14
       / \   /
      4   7 13
```

## Árvores em Compiladores

### Parse Tree vs AST:

| Característica | Parse Tree                       | AST                                 |
| -------------- | -------------------------------- | ----------------------------------- |
| Detalhamento   | Mostra toda derivação gramatical | Abstrai estrutura semântica         |
| Complexidade   | Mais complexa                    | Mais simplificada                   |
| Uso            | Análise sintática                | Análise semântica/geração de código |

### Exemplo para expressão `id + id * id`:

**Parse Tree:**

```
        E
       / \
      E   T
     / \ / \
    T  + T  *
   /    / \
  F    F   F
 /    /   /
id   id  id
```

**AST:**

```
      +
     / \
    id  *
       / \
      id id
```

## Implementações

### BST em Python:

```python
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

class BST:
    def __init__(self):
        self.root = None

    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert(self.root, key)

    def _insert(self, root, key):
        if key < root.val:
            if root.left is None:
                root.left = Node(key)
            else:
                self._insert(root.left, key)
        else:
            if root.right is None:
                root.right = Node(key)
            else:
                self._insert(root.right, key)
```

### AST em C:

```c
typedef struct Node {
    char *value;
    struct Node *left;
    struct Node *right;
} Node;

Node* createASTNode(char *value, Node *left, Node *right) {
    Node *node = malloc(sizeof(Node));
    node->value = strdup(value);
    node->left = left;
    node->right = right;
    return node;
}

```
