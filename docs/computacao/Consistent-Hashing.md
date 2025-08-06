# Consistent Hashing: Princípios e Implementação

## Conceito Fundamental

Técnica de distribuição de dados em sistemas distribuídos que minimiza a reorganização quando nós são adicionados/removidos.

## Componentes Principales

### 1. Anel de Hash

- Espaço de 360° onde nós e chaves são mapeados
- Função hash (ex: MD5, SHA-1) converte identificadores em posições

### 2. Virtual Nodes (VNodes)

- Múltiplos pontos por servidor físico
- Melhora distribuição e tolerância a falhas

## Benefícios Clave

| Ventaja                    | Impacto                                |
| -------------------------- | -------------------------------------- |
| **Balanceamento Uniforme** | Distribuição equitativa de carga       |
| **Escalabilidade**         | Adição/remoção com mínimo remapeamento |
| **Tolerância a Falhas**    | Falha afeta apenas chaves locais       |

## Implementação Python

```python
import hashlib

class ConsistentHashing:
    def __init__(self, nodes, vnodes=100):
        self.vnodes = vnodes
        self.circle = {}

        for node in nodes:
            self.add_node(node)

    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16) % 360

    def add_node(self, node):
        for i in range(self.vnodes):
            virtual_key = f"{node}-{i}"
            self.circle[self._hash(virtual_key)] = node

    def get_node(self, key):
        if not self.circle:
            return None

        hash_key = self._hash(key)
        sorted_keys = sorted(self.circle.keys())

        for node_hash in sorted_keys:
            if hash_key <= node_hash:
                return self.circle[node_hash]

        return self.circle[sorted_keys[0]]
```

## Casos de Uso Comunes

1. **Caches Distribuídos** (Redis, Memcached)
2. **Bancos de Dados NoSQL** (Cassandra, DynamoDB)
3. **CDNs y Balanceadores de Carga**
4. **Sistemas de Arquivos Distribuídos**

## Comparación con Hashing Tradicional

| Escenario      | Hashing Tradicional     | Consistent Hashing      |
| -------------- | ----------------------- | ----------------------- |
| Adición de Nó  | Remapeo total (~100%)   | Remapeo parcial (~K/N)  |
| Remoción de Nó | Remapeo total (~100%)   | Remapeo parcial (~K/N)  |
| Balanceo       | Depende de función hash | Más uniforme con VNodes |

## Mejores Prácticas

1. Usar múltiples VNodes por servidor (200-500)
2. Seleccionar función hash de baja colisión
3. Monitorear distribución periódicamente
4. Implementar replicación para tolerancia a falhas

Principales mejoras:

1. Estructura jerárquica clara
2. Implementación mejorada con Virtual Nodes
3. Tabla comparativa con hashing tradicional
4. Ejemplos de casos de uso reales
5. Lista de buenas prácticas
6. Código Python completo y funcional
7. Eliminación de redundancias
8. Enfoque en escalabilidad y tolerancia a fallos
9. Formato consistente en Markdown
10. Lenguaje técnico preciso pero accesible
