## Instrumentos virtuais no home studio

É comum usar instrumentos virtuais quando você:

- Não tem o instrumento físico
- Não sabe tocar o instrumento
- Não tem estrutura para gravar aquele som

---

## O que é um teclado controlador

- É um teclado que **não possui sons internos**.
- Serve apenas para **controlar (pilotar) instrumentos virtuais** dentro do computador.
- Conecta-se ao computador via **cabo USB**.
- Geralmente é **plug-and-play** (instala o driver automaticamente). Alguns modelos exigem baixar o driver no site do fabricante.

---

## Configuração do teclado controlador no Reaper

### Passo 1: Verificar se o teclado foi reconhecido

- O sistema operacional instala o driver automaticamente (na maioria dos casos).
- O teclado aparecerá como um **dispositivo MIDI** disponível para o Reaper.

### Passo 2: Habilitar o dispositivo MIDI no Reaper

1. Acesse `Options` > `Preferences` (ou `Ctrl + P`)
2. No lado esquerdo, clique em `Audio` > `MIDI Devices`
3. Na lista de dispositivos, localize o nome do seu teclado controlador
4. Clique com o botão direito ou na opção ao lado e selecione **`Enable`** (habilitar)

> Após habilitado, aparecerá um **sinal amarelo** indicando que a track está recebendo informações do teclado.

### Passo 3: Entender o fluxo do sinal MIDI

| Etapa | O que acontece                                                                    |
| ----- | --------------------------------------------------------------------------------- |
| 1     | Você toca uma tecla no teclado                                                    |
| 2     | O teclado envia uma **mensagem MIDI** (apenas dados: qual nota, quão forte, etc.) |
| 3     | O Reaper recebe essa mensagem                                                     |
| 4     | O Reaper envia a mensagem para um **instrumento virtual** (plugin)                |
| 5     | O instrumento virtual **gera o som**                                              |

> **Importante:** Sem um instrumento virtual carregado na track, o teclado não produz som algum. Isso é normal.

---

## Alternativa gratuita ao teclado físico

Se você não tem um teclado controlador, existe uma alternativa:

- **Teclado virtual** do próprio Reaper
- Permite usar as teclas do **teclado do computador** para disparar notas MIDI
- O sinal chega na track da mesma forma que um teclado físico

---

## Recomendações para comprar um teclado controlador

| Característica     | Recomendação                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------- |
| Tipo               | Controlador MIDI (sem sons internos)                                                          |
| Tamanho mínimo     | **2 oitavas** (para não pianistas / iniciantes)                                               |
| Tamanho ideal      | **4 a 5 oitavas** (se você já é pianista ou tecladista)                                       |
| Botões de pad      | Não obrigatório, mas útil para tocar bateria e samples                                        |
| Entrada para pedal | Recurso padrão – permite usar pedal de sustain                                                |
| Marca              | Não precisa ser caro. Marcas genéricas/chinesas de boa qualidade são suficientes para começar |

---

## Resumo visual do fluxo MIDI

```
Teclado físico (USB) → Reaper (MIDI Devices: Enable) → Track MIDI → Instrumento Virtual (plugin) → Som
                                                                              ↑
                                                                         Teclado virtual do Reaper (alternativa gratuita)
```

---

## Nota

> "Não se sinta pressionado a comprar um teclado agora. Existe o teclado virtual gratuito. Conforme você for sentindo necessidade, aí sim vale investir em um controlador."
