# **DOCUMENTAÇÃO: SOLUÇÃO LED INVERTIDO DO MICROFONE (DELL)**

## **PROBLEMA**

- **LED do botão F4** (mic mute) está **aceso** quando microfone está **desligado**
- Deveria ser o contrário: LED aceso = microfone ligado, LED apagado = microfone desligado
- **Hardware:** Dell laptop com teclado específico

## **SOLUÇÃO APLICADA**

Desligar permanentemente o LED do microfone, independente do seu estado.

---

## **1. SOLUÇÃO SIMPLES (LED SEMPRE APAGADO)**

### **Passos executados:**

#### **A. Identificar o controle do LED:**

```bash
ls /sys/class/leds/
# Encontrado: platform::micmute
```

#### **B. Verificar estado atual:**

```bash
cat /sys/class/leds/platform::micmute/brightness
# 1 = LED ligado, 0 = LED desligado
```

#### **C. Desligar o LED manualmente:**

```bash
echo 0 | sudo tee /sys/class/leds/platform::micmute/brightness
```

#### **D. Configurar para desligar automaticamente na inicialização:**

```bash
sudo nano /etc/rc.local
```

**Adicionar antes do `exit 0`:**

```bash
echo 0 > /sys/class/leds/platform::micmute/brightness
```

**Salvar (Ctrl+X, Y, Enter) e tornar executável:**

```bash
sudo chmod +x /etc/rc.local
```

---

## **2. PARA VOLTAR AO COMPORTAMENTO ORIGINAL**

### **Opção A: Remover a configuração permanente**

```bash
sudo nano /etc/rc.local
```

**Remover a linha:**

```bash
echo 0 > /sys/class/leds/platform::micmute/brightness
```

### **Opção B: Controlar manualmente o LED**

```bash
# Para LIGAR o LED:
echo 1 | sudo tee /sys/class/leds/platform::micmute/brightness

# Para DESLIGAR o LED:
echo 0 | sudo tee /sys/class/leds/platform::micmute/brightness
```

### **Opção C: Reativar comportamento automático (se houver)**

```bash
# Remover rc.local e reiniciar
sudo rm /etc/rc.local
sudo reboot
```

---

## **3. SCRIPTS ÚTEIS**

### **Script 1: Desligar LED (salvar como `desliga_led_mic.sh`)**

```bash
#!/bin/bash
# Desliga LED do microfone
echo 0 | sudo tee /sys/class/leds/platform::micmute/brightness
echo "✅ LED do microfone desligado"
```

### **Script 2: Ligar LED (salvar como `liga_led_mic.sh`)**

```bash
#!/bin/bash
# Liga LED do microfone
echo 1 | sudo tee /sys/class/leds/platform::micmute/brightness
echo "✅ LED do microfone ligado"
```

### **Script 3: Verificar estado (salvar como `status_led_mic.sh`)**

```bash
#!/bin/bash
# Verifica estado do LED
VALOR=$(cat /sys/class/leds/platform::micmute/brightness)
if [ "$VALOR" = "1" ]; then
    echo "🔴 LED: LIGADO"
else
    echo "⚫ LED: DESLIGADO"
fi
```

**Para usar os scripts:**

```bash
chmod +x desliga_led_mic.sh liga_led_mic.sh status_led_mic.sh
./desliga_led_mic.sh  # Desliga LED
./liga_led_mic.sh     # Liga LED
./status_led_mic.sh   # Verifica estado
```

---

## **4. VERIFICAÇÃO DO SISTEMA**

### **Comandos de verificação:**

```bash
# Verificar se configuração está ativa
cat /etc/rc.local | grep micmute

# Verificar estado atual do LED
cat /sys/class/leds/platform::micmute/brightness

# Testar alternando microfone
amixer set Capture cap      # Liga microfone
amixer set Capture nocap    # Desliga microfone
```

---

## **5. SOLUÇÃO ALTERNATIVA (LED FUNCIONAL)**

Se quiser que o LED funcione **corretamente** (não apenas desligado):

### **Script: `led_mic_correto.sh`**

```bash
#!/bin/bash
# Faz LED funcionar corretamente: ligado=mic on, desligado=mic off
while sleep 0.5; do
    if amixer get Capture | grep -q "\[off\]"; then
        echo 0 | sudo tee /sys/class/leds/platform::micmute/brightness >/dev/null
    else
        echo 1 | sudo tee /sys/class/leds/platform::micmute/brightness >/dev/null
    fi
done
```

**Para executar automaticamente:**

```bash
# Adicionar ao ~/.bashrc
echo '(sleep 3 && ~/led_mic_correto.sh) &' >> ~/.bashrc
```

---

## **RESUMO RÁPIDO**

### **Para DESLIGAR LED permanentemente:**

```bash
echo 0 | sudo tee /sys/class/leds/platform::micmute/brightness
sudo nano /etc/rc.local  # Adicionar linha antes do exit 0
```

### **Para VOLTAR ao normal:**

```bash
sudo nano /etc/rc.local  # Remover a linha adicionada
echo 1 | sudo tee /sys/class/leds/platform::micmute/brightness  # Ligar LED
```

### **Para TESTAR:**

```bash
# Estado do LED
cat /sys/class/leds/platform::micmute/brightness

# Estado do microfone
amixer get Capture | grep "\[off\]\|\[on\]"
```

---

## **NOTAS IMPORTANTES**

1. **Arquivo de controle:** `/sys/class/leds/platform::micmute/brightness`
2. **Valores:** `0` = desligado, `1` = ligado
3. **Reinício necessário?** Não, mudanças são imediatas
4. **Sobrevive ao reboot?** Sim, se configurado no `/etc/rc.local`
5. **Modelos compatíveis:** Dell laptops com teclado similar

---

## **CONTATO PARA SUPORTE**

Se o comportamento voltar ao original após atualizações:

1. Verificar se `/etc/rc.local` ainda contém a configuração
2. Verificar se surgiram novos arquivos em `/sys/class/leds/`
3. Executar novamente os passos da Seção 1

**Problema resolvido!** ✅
