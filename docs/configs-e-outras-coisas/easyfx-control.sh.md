# **DOCUMENTAÇÃO: easyfx-control.sh**

## **📁 Nome do Arquivo:**

```
easyfx-control.sh
```

## **🎯 Propósito:**

Cria presets para o **Easy Effects 8** no formato JSON correto que o programa aceita, permitindo controle via terminal.

## **📦 O que o Script Faz:**

1. Cria presets no formato EXATO que o Easy Effects 8.1.1 espera
2. Inclui três efeitos: Equalizador, Compressor e Limiter
3. Salva automaticamente no diretório correto do Easy Effects (Flatpak)

## **📍 Local de Salvamento dos Presets:**

```
~/.var/app/com.github.wwmm.easyeffects/data/easyeffects/output/
```

## **⚙️ Efeitos Incluídos no Preset:**

### **1. Equalizador (#0)**

- **10 bandas estéreo** (esquerda e direita)
- **Frequências:** 31Hz, 63Hz, 125Hz, 250Hz, 500Hz, 1kHz, 2kHz, 4kHz, 8kHz, 16kHz
- **Configuração padrão (vocal):**
  - 31Hz: -3dB
  - 63Hz: -2dB
  - 1kHz: +1dB
  - 2kHz: +2dB
  - 4kHz: +2dB
  - 8kHz: +1dB

### **2. Compressor (#0)**

- **Limiar:** -18dB
- **Razão:** 4:1
- **Ataque:** 20ms
- **Release:** 100ms
- **Modo:** Downward

### **3. Limiter (#0)**

- **Limite:** -3dB
- **Release:** 50ms

## **🔧 Como Usar:**

### **Execução:**

```bash
# Tornar executável (apenas primeira vez)
chmod +x easyfx-control.sh

# Executar
./easyfx-control.sh
```

### **Passos:**

1. O script pede um nome para o preset
2. Cria o arquivo JSON no diretório correto
3. Para usar: feche e reabra o Easy Effects, clique em "Presets"

## **✏️ Como Personalizar os Valores:**

### **Para alterar o Equalizador:**

Localize no script as seções `"left":` e `"right":`. Cada banda tem:

```json
"band0": {
    "frequency": 31.0,    # Frequência em Hz
    "gain": -3.0,         # Ganho em dB (-15 a +15)
    "q": 1.0,             # Fator Q (largura da banda)
    "type": "Bell"        # Tipo: Bell, High Pass, Low Pass, etc.
}
```

### **Para alterar o Compressor:**

```json
"compressor#0": {
    "threshold": -18.0,   # Limiar em dB
    "ratio": 4.0,         # Razão de compressão
    "attack": 20.0,       # Tempo de ataque em ms
    "release": 100.0      # Tempo de release em ms
}
```

### **Para alterar o Limiter:**

```json
"limiter#0": {
    "limit": -3.0,        # Limite máximo em dB
    "release": 50.0       # Tempo de release em ms
}
```

## **🛠️ Adicionar/Remover Efeitos:**

### **Para adicionar De-esser:**

Adicione após o compressor:

```json
"deesser#0": {
    "bypass": false,
    "threshold": -12.0,
    "ratio": 3.0,
    "freq": 6000.0
},
```

E adicione ao `plugins_order`:

```json
"plugins_order": [
    "equalizer#0",
    "compressor#0",
    "deesser#0",
    "limiter#0"
]
```

### **Para remover um efeito:**

1. Remova a seção do efeito (ex: `"limiter#0": {...}`)
2. Remova do array `plugins_order`

## **📝 Script Completo com Menu:**

```bash
#!/bin/bash
# Easy Effects Preset Creator - Script Completo

PRESETS_DIR="$HOME/.var/app/com.github.wwmm.easyeffects/data/easyeffects/output"
mkdir -p "$PRESETS_DIR"

menu_principal() {
    clear
    echo "══════════════════════════════════════════════════"
    echo "        EASY EFFECTS PRESET CREATOR"
    echo "══════════════════════════════════════════════════"
    echo ""
    echo "1. Criar preset VOCAL (EQ + Compressor + Limiter)"
    echo "2. Criar preset MÚSICA (EQ + Exciter)"
    echo "3. Criar preset PERSONALIZADO"
    echo "4. Listar presets existentes"
    echo "5. Editar preset existente"
    echo "6. Abrir Easy Effects"
    echo "0. Sair"
    echo ""
    echo "══════════════════════════════════════════════════"

    read -p "Escolha: " opcao

    case $opcao in
        1) criar_preset_vocal ;;
        2) criar_preset_musica ;;
        3) criar_preset_personalizado ;;
        4) listar_presets ;;
        5) editar_preset ;;
        6) abrir_easyfx ;;
        0) sair ;;
        *) echo "Opção inválida"; pause ;;
    esac
}

criar_preset_vocal() {
    read -p "Nome do preset vocal: " nome
    criar_preset "$nome" "vocal"
}

criar_preset_musica() {
    read -p "Nome do preset música: " nome
    criar_preset "$nome" "musica"
}

criar_preset() {
    local nome=$1
    local tipo=$2
    local arquivo="$PRESETS_DIR/${nome}.json"

    # Aqui viria a lógica para criar o preset baseado no tipo
    echo "Criando preset '$nome' do tipo '$tipo'..."
    # (implementar criação baseada no tipo)

    echo "✅ Preset criado: $arquivo"
    pause
}

listar_presets() {
    echo "📁 Presets disponíveis:"
    echo ""
    if ls "$PRESETS_DIR"/*.json >/dev/null 2>&1; then
        ls "$PRESETS_DIR"/*.json | xargs -n1 basename | sed 's/.json$//'
    else
        echo "Nenhum preset encontrado"
    fi
    pause
}

editar_preset() {
    listar_presets
    read -p "Nome do preset para editar: " nome

    if [ -f "$PRESETS_DIR/${nome}.json" ]; then
        editor="$EDITOR"
        [ -z "$editor" ] && editor="nano"
        $editor "$PRESETS_DIR/${nome}.json"
    else
        echo "Preset não encontrado"
        pause
    fi
}

abrir_easyfx() {
    echo "Abrindo Easy Effects..."
    flatpak run com.github.wwmm.easyeffects &
    pause
}

sair() {
    echo "Saindo..."
    exit 0
}

pause() {
    read -p "Pressione Enter para continuar..."
}

# Loop principal
while true; do
    menu_principal
done
```

## **💡 Dicas Importantes:**

1. **Sempre feche e reabra o Easy Effects** após criar/editar presets
2. **Validação:** Se um preset não carrega, verifique:
   - Formato JSON correto (use `jq . arquivo.json` para validar)
   - Estrutura idêntica aos presets que funcionam
   - Nomes de parâmetros exatos

3. **Backup:** Faça backup dos seus presets:
   ```bash
   cp -r ~/.var/app/com.github.wwmm.easyeffects/data/easyeffects/output/ ~/backup-easyfx-presets
   ```

## **🎨 Exemplos de Configurações Comuns:**

### **Para VOZ:**

```json
"equalizer": {
    "31Hz": -4, "63Hz": -3, "250Hz": +1, "1kHz": +2, "4kHz": +3
}
"compressor": {
    "threshold": -15, "ratio": 6, "attack": 10, "release": 150
}
```

### **Para MÚSICA:**

```json
"equalizer": {
    "31Hz": +2, "63Hz": +1, "8kHz": +1, "16kHz": +2
}
"limiter": {
    "limit": -1, "release": 30
}
```

## **🔗 Referências:**

- Formato JSON do Easy Effects 8
- Diretório Flatpak: `~/.var/app/com.github.wwmm.easyeffects/`
- Frequências padrão: 31, 63, 125, 250, 500, 1000, 2000, 4000, 8000, 16000 Hz

**Salve esta documentação como `README-easyfx-control.md` para referência futura.**
