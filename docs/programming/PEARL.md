# PEARL

PEARL (Programming Language for Real-Time Applications) é uma linguagem de programação desenvolvida especialmente para aplicações de tempo real. É utilizada principalmente em sistemas industriais, como automação de fábricas e controle de processos. Algumas características principais da PEARL incluem:

### Suporte a Tempo Real

: PEARL é projetada para lidar com eventos em tempo real, com precisão e previsibilidade, essencial para sistemas críticos onde atrasos podem ser inaceitáveis.

### Simplicidade para Controle de Processos

: A linguagem é simplificada para facilitar a programação de controladores de processos e sistemas embarcados.

### Confiabilidade e Robustez

: PEARL enfatiza a criação de código confiável e robusto, minimizando a possibilidade de erros críticos durante a execução.

PEARL é uma linguagem menos comum e utilizada principalmente em ambientes industriais. No entanto, vou apresentar um exemplo simples que ilustra como PEARL pode ser usado para controlar um sistema de iluminação de uma fábrica com base em um temporizador.

### Exemplo de Código PEARL:

```pearl
MODULE LightingControl;
PROBLEM
  /* Declaração de variáveis */
  TEMPORAL dayTime;   /* Hora do dia */
  TEMPORAL nightTime; /* Hora da noite */

  /* Inicialização */
  INITIALIZATION
    dayTime := 6:00:00;  /* Luzes ligam às 6 da manhã */
    nightTime := 18:00:00; /* Luzes desligam às 6 da tarde */

  TASK MainTask;
    EVERY 1 SECOND /* Executa a cada segundo */
    BEGIN
      TEMPORAL now;
      now := CURRENT_TIME;
      IF now >= dayTime AND now < nightTime THEN
        CALL TurnOnLights();
      ELSE
        CALL TurnOffLights();
      ENDIF;
    END;

  /* Definição das funções para ligar e desligar as luzes */
  PROCEDURE TurnOnLights;
  BEGIN
    /* Código para ligar as luzes */
    OUTPUT("Lights are ON");
  END;

  PROCEDURE TurnOffLights;
  BEGIN
    /* Código para desligar as luzes */
    OUTPUT("Lights are OFF");
  END;
END MODULE;
```

Agora, vamos criar um exemplo de CGI usando Perl, uma linguagem comum para scripts CGI. Esse script irá gerar uma página HTML simples que exibe uma mensagem "Hello, World!" baseada em um formulário web.

### Exemplo de Código CGI em Perl:

**Arquivo HTML (`form.html`):**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CGI Perl Example</title>
  </head>
  <body>
    <form action="/cgi-bin/hello.pl" method="post">
      <label for="name">Enter your name:</label>
      <input type="text" id="name" name="name" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

**Script Perl CGI (`hello.pl`):**

```perl
#!/usr/bin/perl
use strict;
use warnings;
use CGI qw(:standard);

print header();
print start_html("CGI Perl Example");

my $name = param('name');
if ($name) {
    print "<h1>Hello, $name!</h1>";
} else {
    print "<h1>Hello, World!</h1>";
}

print end_html();
```

### Explicação:

**HTML Form**
: O formulário HTML (`form.html`) envia uma requisição POST para o script CGI (`hello.pl`) quando o botão de envio é pressionado.

**Perl Script**
: O script Perl recebe o valor do campo "name" do formulário, e gera uma resposta HTML personalizada. Se um nome for fornecido, ele exibe "Hello, [Nome]!". Caso contrário, exibe "Hello, World!".

### Como Funciona o CGI

**Requisição do Cliente**
: O navegador do cliente envia uma requisição HTTP ao servidor web.

**Execução do Script CGI**
: O servidor web executa o script CGI correspondente (neste caso, `hello.pl`).

**Geração de Resposta**
: O script CGI gera uma resposta HTML e a envia de volta ao navegador do cliente.

Esses exemplos ilustram como PEARL e CGI podem ser usados em cenários práticos: PEARL para controle de processos em tempo real e CGI para criar conteúdo dinâmico na web.
