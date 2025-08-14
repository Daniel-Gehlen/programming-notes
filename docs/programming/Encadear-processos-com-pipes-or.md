# Encadear processos com pipes (|)

Encadear processos com pipes (`|`) é uma técnica poderosa em sistemas Unix e Linux que permite direcionar a saída de um processo como entrada para outro processo, criando uma sequência de operações ou filtros. Isso é muito útil para realizar operações complexas de manipulação de dados ou para processar grandes volumes de informações de maneira eficiente.

## Sintaxe Básica do Pipe:

A sintaxe básica para usar pipes é:

```bash
comando1 | comando2 | comando3 ... | comandoN
```

Nesta estrutura:

- `comando1`, `comando2`, ..., `comandoN` são programas ou comandos que você deseja encadear.
- O output (saída) padrão de `comando1` é passado como input (entrada) padrão para `comando2`, e assim por diante.
- Cada comando no encadeamento pode processar os dados recebidos e enviar o resultado para o próximo comando no pipeline.

## Exemplos de Uso:

### Contagem de Palavras:

```bash
cat arquivo.txt | wc -w
```

**Descrição**:
Usando `cat` para ler um arquivo e `wc` para contar palavras.
Neste exemplo, o conteúdo de `arquivo.txt` é lido pelo `cat` e a saída é passada para o `wc -w`, que conta o número de palavras.

### Filtragem com `grep`:

```bash
cat log.txt | grep "erro"
```

**Descrição**:
Filtrando linhas que contêm a palavra "erro" em um arquivo de log.
Aqui, `cat` lê `log.txt`, e o resultado é passado para `grep` que filtra as linhas contendo a palavra "erro".

### Ordenação com `sort`:

```bash
cat lista.txt | sort
```

**Descrição**:
Ordenando linhas em ordem alfabética.
O `cat` lê `lista.txt`, e a saída é ordenada alfabeticamente pelo `sort`.

### Contagem de Linhas Únicas:

```bash
cat dados.txt | sort | uniq | wc -l
```

**Descrição**:
Contando linhas únicas em um arquivo.
`cat` lê `dados.txt`, `sort` ordena as linhas, `uniq` filtra linhas duplicadas e `wc -l` conta o número de linhas únicas.

### Cálculos com `awk`:

```bash
cat dados.csv | awk -F',' '{total += $2} END {print total}'
```

**Descrição**:
Realizando cálculos em colunas de dados.
Aqui, `cat` lê `dados.csv`, `awk` processa cada linha, somando os valores da segunda coluna (`$2`), e `END {print total}` imprime o total.

## Considerações Importantes:

- **Eficiência**: Os pipes são eficientes porque permitem que os programas trabalhem em paralelo, sem a necessidade de armazenar grandes volumes de dados intermediários em disco.
- **Flexibilidade**: Você pode combinar diferentes programas e utilitários para realizar tarefas complexas de processamento de dados de maneira simples e direta.
- **Debugging**: Ao construir pipelines complexos, é importante testar e verificar cada etapa para garantir que os dados estejam sendo manipulados conforme esperado.

Os pipes são uma característica central e poderosa do ambiente Unix/Linux, permitindo que os usuários construam workflows eficientes e automatizados diretamente na linha de comando.
