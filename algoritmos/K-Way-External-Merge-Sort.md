# Algoritmo K-Way External Merge Sort

## Tópico 1: Introdução e Problema de Memória

- Introdução ao vídeo sobre algoritmos de ordenação para grandes bases de dados.
- Desafios de ordenar tabelas maiores que a memória disponível.

## Tópico 2: Algoritmo K-Way External Merge Sort

- Explicação do algoritmo K-Way External Merge Sort para ordenação externa.
- Necessidade de ordenação eficiente em disco sem depender apenas da RAM.

## Tópico 3: Estrutura das Bases de Dados e Armazenamento

- Descrição do armazenamento de tabelas de bases de dados em arquivos binários.
- Implicações para a ordenação e manipulação eficiente de dados.

## Tópico 4: Estruturas de Dados K-Way

- Preparação do arquivo para o algoritmo: divisão em páginas de tamanho fixo.
- Uso de buffers de entrada e saída para manipular páginas de dados.

## Tópico 5: Execução do Algoritmo (Passe 0)

- Detalhes sobre a execução inicial do algoritmo com 2 buffers de entrada.
- Processo de ordenação e fusão das páginas de dados até criar páginas ordenadas.

## Tópico 6: Passe 1 e Subsequentes

- Explicação de como o algoritmo continua com mais passes, aumentando progressivamente o número de páginas manipuladas por passada.
- Necessidade de reorganizar os dados em arquivos de entrada e saída para cada passada.

## Tópico 7: Complexidade de Entrada/Saída

- Discussão sobre como o algoritmo escala logaritmicamente com o número de buffers de entrada.
- Impacto na eficiência do algoritmo em termos de operações de leitura e escrita.

## Tópico 8: Desafios com Dados de Comprimento Variável

- Problemas encontrados ao lidar com tuplas de tamanhos variáveis.
- Solução adotada para lidar com fragmentação e cálculo de posições de cursor.

## Tópico 9: Conclusão e Recomendações

- Conclusão sobre a implementação do algoritmo e sua complexidade.
