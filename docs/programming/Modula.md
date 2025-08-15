# Modula

Modula é uma família de linguagens de programação desenvolvida por Niklaus Wirth na década de 1970 como evolução do Pascal, com foco em programação de sistemas e modularidade.

## Modula-2 (1978)

### Características Principais:

- **Módulos**: Unidades independentes que encapsulam dados e procedimentos
- **Tipos de Dados**: Registros, arrays multidimensionais e tipos enumerados
- **Tratamento de Exceções**: Mecanismo estruturado para tratamento de erros
- **Alocação Dinâmica**: Suporte a gerenciamento manual de memória
- **Concorrência Básica**: Construções para processos e comunicação

### Exemplo de Código:

```modula-2
MODULE ListModule;

TYPE
    List = POINTER TO ListNode;
    ListNode = RECORD
        value: INTEGER;
        next: List;
    END;

PROCEDURE AddElement(VAR head: List; newValue: INTEGER);
VAR
    newNode: List;
BEGIN
    NEW(newNode);
    newNode.value := newValue;
    newNode.next := head;
    head := newNode;
END AddElement;

PROCEDURE PrintList(head: List);
BEGIN
    WHILE head # NIL DO
        Write(head.value, " ");
        head := head.next;
    END;
    WriteLn;
END PrintList;

FUNCTION SumList(head: List): INTEGER;
VAR
    sum: INTEGER := 0;
BEGIN
    WHILE head # NIL DO
        sum := sum + head.value;
        head := head.next;
    END;
    RETURN sum;
END SumList;

END ListModule.
```

**Exemplo de Uso:**

```modula-2
MODULE Main;
IMPORT ListModule;

VAR
    myList: ListModule.List;
    i: INTEGER;
BEGIN
    myList := NIL;
    FOR i := 1 TO 5 DO
        ListModule.AddElement(myList, i * 10);
    END;

    WriteLn("Lista de elementos:");
    ListModule.PrintList(myList);
    WriteLn("Soma dos elementos:", ListModule.SumList(myList));
END Main.
```

## Modula-3 (1986)

### Melhorias em Relação ao Modula-2:

- **Sistema de Tipos Forte**: Prevenção de erros comuns
- **Módulos Aprimorados**: Namespaces e controle de visibilidade
- **Gerenciamento de Memória**: Coleta de lixo automática
- **Concorrência Avançada**: Threads e mecanismos de sincronização
- **Sistemas Distribuídos**: Suporte nativo a RPC

## Legado e Influência:

- Influenciou diretamente linguagens como Ada e Oberon
- Conceitos fundamentais adotados em Java e C#
- Pioneira em modularidade e segurança de tipos
- Ainda estudada em cursos de design de linguagens
