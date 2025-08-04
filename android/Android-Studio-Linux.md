# Android Studio: Linux

Com base na saída do comando `ls ~/Downloads`, o arquivo do Android Studio (`android-studio-2024.2.2.13-linux.tar.gz`) está localizado na pasta `~/Downloads`. Vamos extrair e configurar o Android Studio corretamente.

## Passo 1: Extrair o Arquivo
O arquivo `.tar.gz` precisa ser extraído antes de ser usado. Execute o seguinte comando para extrair o arquivo:
```bash
tar -xvzf ~/Downloads/android-studio-2024.2.2.13-linux.tar.gz -C ~/Downloads/
```
Isso criará uma pasta chamada `android-studio` dentro da pasta `~/Downloads`.

## Passo 2: Mover o Android Studio para `/opt` (Opcional)
Para organizar melhor, mova o Android Studio para o diretório `/opt`, que é comumente usado para programas instalados manualmente:
```bash
sudo mv ~/Downloads/android-studio /opt/
```
Se você preferir manter o Android Studio no diretório atual (`~/Downloads`), pode pular este passo.

## Passo 3: Executar o Android Studio
Agora que o Android Studio foi extraído, você pode executá-lo. Navegue até o diretório `bin` do Android Studio e execute o script `studio.sh`:

- Se você moveu para `/opt`:
```bash
cd /opt/android-studio/bin
./studio.sh
```

- Se você manteve no `~/Downloads`:
```bash
cd ~/Downloads/android-studio/bin
./studio.sh
```

## Passo 4: Verificar Permissões
Se você encontrar um erro ao tentar executar `studio.sh`, pode ser necessário dar permissão de execução ao script:
```bash
chmod +x ./studio.sh
```
Depois, tente executá-lo novamente:
```bash
./studio.sh
```

## Passo 5: Concluir a Configuração
Ao executar o Android Studio pela primeira vez, ele iniciará um assistente de configuração. Siga os passos abaixo:

1. **Instalação de Componentes Adicionais**:
   Se esta for a primeira vez que você está usando o Android Studio, ele pode baixar e instalar componentes adicionais, como o SDK do Android. Aguarde o término desse processo.

2. **Configurar o SDK**:
   Durante a configuração, o Android Studio perguntará onde deseja instalar o SDK. Você pode aceitar o local padrão ou escolher outro local, como `~/Android/Sdk`.

3. **Finalizar a Configuração**:
   Após a instalação dos componentes, finalize o assistente clicando em `Finish`.

## Passo 6: Criar o Projeto HamburgueriaZ
Agora que o Android Studio está configurado, siga as etapas descritas no documento para criar o projeto:

1. **Criar o Projeto**:
   - No menu superior, vá em `File > New > New Project...`.
   - Escolha `Empty Activity` e clique em `Next`.
   - Defina o nome do projeto como `HamburgueriaZ`, escolha a linguagem `Java`, e selecione o SDK (API 23).

2. **Construir a Interface**:
   Adicione os elementos descritos no documento (EditText, CheckBox, Button, etc.) no arquivo `res/layout/activity_main.xml`.

3. **Implementar a Lógica**:
   Abra o arquivo `MainActivity.java` e implemente as funcionalidades (soma/subtração de quantidade, cálculo do preço total, envio de e-mail, etc.).

## Resumo dos Comandos
Aqui estão os principais comandos usados:
```bash
# Extrair o arquivo
tar -xvzf ~/Downloads/android-studio-2024.2.2.13-linux.tar.gz -C ~/Downloads/

# Mover para /opt (opcional)
sudo mv ~/Downloads/android-studio /opt/

# Executar o Android Studio
cd /opt/android-studio/bin
./studio.sh

# Dar permissão de execução (se necessário)
chmod +x ./studio.sh
```

## Conclusão
Agora você deve conseguir extrair, configurar e executar o Android Studio sem problemas.
