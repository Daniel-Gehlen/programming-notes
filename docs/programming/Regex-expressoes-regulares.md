# Regex (Expressões Regulares) em Perl

## Sintaxe Básica

| Metacaractere | Função                 | Exemplo             |
| ------------- | ---------------------- | ------------------- |
| `^`           | Início da string       | `^Hello`            |
| `$`           | Fim da string          | `world$`            |
| `\d`          | Dígito (0-9)           | `\d{3}` (3 dígitos) |
| `\w`          | Caractere alfanumérico | `\w+` (palavra)     |
| `\s`          | Espaço em branco       | `\s+`               |
| `[...]`       | Classe de caracteres   | `[A-Za-z]`          |
| `(...)`       | Grupo de captura       | `(abc)+`            |

## Exemplos Práticos

### 1. Validação de Email

```perl
if ($email =~ /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/) {
    print "Email válido\n";
}
```

### 2. Substituição Global

```perl
$text =~ s/old/new/g;  # Substitui todas ocorrências
```

### 3. Extração de Dados

```perl
while ($log =~ /(\d{2}:\d{2}:\d{2})/g) {
    print "Hora: $1\n";
}
```

### 4. Divisão de Strings

```perl
my @words = split(/\W+/, $text);  # Divide por não-alfanuméricos
```

## Modificadores Úteis

| Modificador | Efeito                       |
| ----------- | ---------------------------- |
| `i`         | Case-insensitive             |
| `m`         | Multilinha (^ e $ por linha) |
| `s`         | Ponto (.) inclui \n          |
| `x`         | Permite espaços/comentários  |

## Técnicas Avançadas

**Lookahead/Lookbehind**:

```perl
# Encontra "foo" apenas se precedido por "bar"
$text =~ /(?<=bar)foo/;

# Encontra "foo" apenas se não seguido por "bar"
$text =~ /foo(?!bar)/;
```

**Substituição Condicional**:

```perl
$text =~ s/(\d+)/ $1 < 100 ? "low" : "high" /ge;
```

_por Daniel Gehlen_

> **Dica de Performance**: Compile regex complexas antecipadamente:
>
> ```perl
> my $regex = qr/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
> if ($email =~ $regex) { ... }
> ```
