# REPL (Read-Eval-Print Loop)

O termo "REPL" se refere a "Read-Eval-Print Loop", que é um ambiente interativo usado em muitas linguagens de programação e sistemas. Aqui está uma explicação detalhada:

## Componentes do REPL:

1. **Read (Ler)**: O REPL lê (ou recebe) a entrada do usuário, que pode ser uma expressão, um comando ou uma linha de código.

2. **Eval (Avaliar)**: Após ler a entrada do usuário, o REPL avalia (executa) a expressão ou comando fornecido. Isso envolve interpretar a sintaxe da entrada e calcular o resultado correspondente.

3. **Print (Imprimir)**: Após avaliar a expressão, o REPL imprime o resultado dessa avaliação na tela para que o usuário possa ver.

4. **Loop (Laço)**: Após imprimir o resultado, o REPL retorna ao passo de leitura, aguardando a próxima entrada do usuário. Esse ciclo permite que o desenvolvedor continue interagindo com o ambiente de maneira iterativa.

## Exemplos de Uso:

### Python:

```python
$ python
Python 3.9.5 (default, May 27 2021, 13:30:53)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 2 + 3
5
>>> x = 5
>>> x * 2
10
>>> print("Olá, mundo!")
Olá, mundo!
```

### JavaScript (Node.js):

```javascript
$ node
Welcome to Node.js v14.17.0.
Type ".help" for more information.
> 2 + 3
5
> let x = 5;
undefined
> x * 2
10
> console.log("Hello, world!");
Hello, world!
```

## Benefícios do REPL:

- **Exploração Interativa**: Permite aos desenvolvedores experimentar rapidamente com expressões e comandos.
- **Depuração Rápida**: Facilita a depuração ao permitir testar pequenos trechos de código.
- **Aprendizado**: Ferramenta valiosa para iniciantes aprenderem uma nova linguagem.

# Sistema de Gerenciamento de Banco de Dados (DBMS) Simulado

## Mini Fake SQL em Python

```python
class MiniFakeSQL:
    def __init__(self):
        self.tables = {}

    def create_table(self, table_name, columns):
        if table_name not in self.tables:
            self.tables[table_name] = {'columns': columns, 'data': []}
            print(f"Tabela '{table_name}' criada com colunas: {columns}")
        else:
            print(f"Erro: Tabela '{table_name}' já existe!")

    def insert_into(self, table_name, values):
        if table_name in self.tables:
            if len(values) == len(self.tables[table_name]['columns']):
                self.tables[table_name]['data'].append(values)
                print(f"Valores inseridos em '{table_name}': {values}")
            else:
                print(f"Erro: Número de valores não corresponde ao número de colunas em '{table_name}'!")
        else:
            print(f"Erro: Tabela '{table_name}' não encontrada!")

    def select_all_from(self, table_name):
        if table_name in self.tables:
            columns = self.tables[table_name]['columns']
            data = self.tables[table_name]['data']
            print(f"{' | '.join(columns)}")
            print("-" * 30)
            for row in data:
                print(' | '.join(map(str, row)))
        else:
            print(f"Erro: Tabela '{table_name}' não encontrada!")

# Exemplo de uso
if __name__ == "__main__":
    db = MiniFakeSQL()
    db.create_table("usuarios", ["id", "nome", "idade"])
    db.insert_into("usuarios", [1, "João", 30])
    db.insert_into("usuarios", [2, "Maria", 25])
    db.select_all_from("usuarios")
```

## Versão com REPL Integrado

```python
def main():
    db = MiniFakeSQL()
    while True:
        comando = input("Digite um comando (ou 'sair' para encerrar): ").strip().lower()
        if comando == 'sair':
            print("Encerrando o programa.")
            break
        elif comando.startswith("criar tabela"):
            _, _, table_name, columns = comando.split(maxsplit=3)
            columns = columns.split(',')
            columns = [col.strip() for col in columns]
            db.create_table(table_name, columns)
        elif comando.startswith("inserir em"):
            _, _, table_name, values = comando.split(maxsplit=3)
            values = eval(values)
            db.insert_into(table_name, values)
        elif comando.startswith("selecionar tudo de"):
            _, _, table_name = comando.split(maxsplit=3)
            db.select_all_from(table_name)
        else:
            print("Comando inválido. Tente novamente.")

if __name__ == "__main__":
    main()
```
