# SIGINT

SIGINT é um sinal especial enviado a um processo Unix ou Linux para indicar a interrupção (interrupção de sinal) de sua execução. Este sinal é frequentemente associado à combinação de teclas `Ctrl+C` no terminal, que é usada para interromper a execução de um programa em execução no shell.

## Funcionalidades e Uso:

### Origem do Sinal

O SIGINT é gerado pelo terminal quando o usuário pressiona `Ctrl+C`. Esta combinação de teclas envia o sinal SIGINT para o processo em execução no terminal.

### Ação Padrão

Por padrão, quando um processo recebe o sinal SIGINT, ele interrompe sua execução normalmente e pode realizar operações de limpeza, como fechar arquivos abertos e liberar recursos alocados antes de terminar.

### Tratamento de Sinal Personalizado

Os programas podem definir tratadores personalizados para o sinal SIGINT usando funções como `signal()` ou `sigaction()` em C ou outras linguagens de programação compatíveis com sinais Unix. Isso permite que o programa execute ações específicas em resposta ao sinal, além da ação padrão de terminação.

### Exemplo de Uso

No terminal, ao executar um programa e pressionar `Ctrl+C`, o programa recebe o sinal SIGINT e pode realizar ações como fechar arquivos abertos e limpar dados antes de finalizar sua execução.

## Tratamento Seguro do SIGINT em Programas:

Para garantir que um programa lide adequadamente com o sinal SIGINT, é importante implementar tratamento de sinais adequado. Isso pode incluir:

- Restauração de configurações de terminal
- Liberação de recursos alocados dinamicamente
- Finalização de operações em andamento de forma segura

Em alguns casos, os programas podem ignorar o sinal SIGINT ou capturá-lo para realizar operações específicas antes de terminar. No entanto, é geralmente uma boa prática permitir que o usuário interrompa a execução do programa de forma limpa e previsível.

## Evolução dos Sinais (SIGINT):

Os sinais, como `SIGINT`, são mecanismos fundamentais em sistemas Unix/Linux para comunicação assíncrona entre processos ou entre o sistema operacional e os processos. O `SIGINT` é especificamente utilizado para interromper a execução de um programa quando o usuário pressiona `Ctrl+C` no terminal.

### Definição Padrão

Cada sinal tem uma ação padrão associada que o sistema operacional realiza quando o sinal é recebido por um processo. Por exemplo, `SIGINT` geralmente termina o processo.

### Personalização

Os programas podem personalizar o tratamento de sinais, definindo rotinas de tratamento (`signal handlers`) que substituem a ação padrão. Isso permite que os programas realizem ações específicas em resposta a sinais específicos.

### Uso em Comunicação e Controle

Além de `SIGINT`, existem muitos outros sinais que são utilizados para diferentes propósitos, como:

- `SIGKILL` para forçar a terminação de um processo
- `SIGTERM` para solicitar a finalização de um processo
- Entre outros

## FIFO (First In, First Out)

FIFO, ou tubo nomeado (`named pipe`), é um mecanismo de comunicação entre processos em sistemas Unix/Linux. Ele permite que dois ou mais processos se comuniquem através de um arquivo especial no sistema de arquivos que atua como um canal unidirecional de dados.

### Características

FIFOs são chamados de "first in, first out" porque os dados escritos primeiro no FIFO são os primeiros a serem lidos.

### Criados com `mkfifo`

FIFOs são criados usando o comando `mkfifo` e podem ser acessados como arquivos regulares no sistema de arquivos.

### Uso em Comunicação Interprocessual

FIFOs são frequentemente usados para comunicação entre processos que estão em execução simultânea e podem não compartilhar um espaço de memória comum.

## Relação entre SIGINT e FIFO:

Não há uma evolução direta de SIGINT para FIFO, pois são conceitos diferentes e servem para propósitos distintos:

- `SIGINT` é um sinal usado para controle e interrupção de processos.
- `FIFO` é um mecanismo de comunicação que permite a troca de dados entre processos.

Em resumo, enquanto SIGINT é um mecanismo fundamental de controle de processos em sistemas Unix/Linux, FIFO é um mecanismo para comunicação interprocessual. Cada um desempenha um papel importante em operações diferentes dentro do ecossistema de sistemas operacionais Unix/Linux.
