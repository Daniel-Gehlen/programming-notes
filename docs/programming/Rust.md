# Rust

## Visão Geral

Rust é uma linguagem de programação de sistemas desenvolvida pela Mozilla Research. Criada por Graydon Hoare em 2006 e anunciada oficialmente em 2010, Rust combina segurança, concorrência e desempenho próximo ao código nativo, sendo ideal para sistemas operacionais, servidores, compiladores e outros projetos de alta performance.

---

## Principais Características

**Segurança**

- Previne erros de memória (ex: _buffer overflows_, _use-after-free_) em tempo de compilação.
- Usa _ownership_, _borrowing_ e _lifetimes_ para gerenciamento seguro de memória.

**Concorrência**

- Threads e canais integrados para programação concorrente segura.
- Elimina _race conditions_ sem _garbage collector_.

**Desempenho**

- Performance comparável a C/C++ com otimizações em tempo de compilação.

**Sistema de Tipos**

- Suporta genéricos, _traits_ (similares a interfaces) e inferência de tipos.

**Ferramentas**

- **Cargo**: Gerenciador de pacotes e build system oficial.

---

## Casos de Uso Reais

1. **Servo**: Motor de renderização da Mozilla (base para Firefox).
2. **TiDB**: Banco de dados distribuído (componentes em Rust).
3. **Firefox Send**: Serviço de compartilhamento de arquivos.
4. **Prometheus**: Sistema de monitoramento (módulos em Rust).

---

## Aplicações Potenciais

- **CLI Tools**: Ferramentas de linha de comando seguras.
- **Web Backends**: Com frameworks como Rocket e Actix Web.
- **Mobile**: Componentes de alto desempenho para Android/iOS.
- **IoT/Embarcados**: Baixo consumo de recursos e segurança.
- **Jogos**: Motores gráficos ou lógica de jogo.

### Exemplos Imaginários

- **Gerenciador de Senhas**: Criptografia segura com Rust.
- **Plataforma de Mensagens**: Comunicação criptografada.
- **Streaming de Áudio**: Servidor eficiente para áudio sem perdas.

---

## Cargo (Ferramenta Oficial)

**Funcionalidades:**

- Gerenciamento de dependências (`Cargo.toml`).
- Compilação automatizada (`cargo build`).
- Publicação em `crates.io`.

**Exemplo:**

```bash
cargo new meu_projeto  # Cria estrutura básica
cargo run             # Compila e executa
```

---

## Conclusão

Rust oferece um equilíbrio único entre segurança, concorrência e desempenho, sendo adotada em projetos críticos. Seu ecossistema (Cargo) simplifica o desenvolvimento, tornando-a uma escolha atraente para sistemas modernos.
