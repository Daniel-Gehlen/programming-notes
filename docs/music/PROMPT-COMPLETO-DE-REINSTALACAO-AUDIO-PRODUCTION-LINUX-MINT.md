# **🎵 PROMPT COMPLETO DE REINSTALAÇÃO AUDIO PRODUCTION LINUX MINT**

## **🔄 SCRIPT DE REINSTALAÇÃO COMPLETA:**

```bash
#!/bin/bash
echo "=== COMPLETE AUDIO PRODUCTION REINSTALLATION ==="

# 1. ATUALIZAR SISTEMA
sudo apt update && sudo apt upgrade -y

# 2. INSTALAR REPOSITÓRIOS KXSTUDIO
wget -O kxstudio-repos.deb "https://launchpad.net/~kxstudio-debian/+archive/ubuntu/kxstudio/+files/kxstudio-repos_10.0.3_all.deb"
sudo dpkg -i kxstudio-repos.deb
sudo apt update

# 3. INSTALAR SUITE COMPLETA DE ÁUDIO
sudo apt install -y \
    # DAWs e Hosts
    ardour ardour-lv2-plugins lmms hydrogen giada carla carla-vst carla-lv2 \
    # Sintetizadores
    surge-xt helm amsynth hexter setbfree \
    # Efeitos e Plugins
    calf-plugins lsp-plugins-lv2 swh-lv2 x42-plugins \
    # Sistema de Áudio
    jackd2 jack-tools qjackctl \
    # Ferramentas adicionais
    dssi-host-jack

# 4. INSTALAR WAVEFORM 13 (se necessário)
if [ -f ~/Downloads/waveform13_13.5.8_amd64.deb ]; then
    sudo dpkg -i ~/Downloads/waveform13_13.5.8_amd64.deb
    sudo apt install -f
fi

# 5. CRIAR DIRETÓRIOS DE PLUGINS
mkdir -p ~/.vst ~/.vst3 ~/.lv2

# 6. CONFIGURAR SISTEMA PARA BAIXA LATÊNCIA
sudo usermod -a -G audio $USER
echo '@audio - rtprio 99' | sudo tee -a /etc/security/limits.conf
echo '@audio - memlock unlimited' | sudo tee -a /etc/security/limits.conf

echo "=== REINSTALAÇÃO COMPLETA ==="
echo "Reinicie o sistema e abra o Waveform para fazer rescan dos plugins!"
```

## **🎹 COMANDOS INDIVIDUAIS PARA REINSTALAÇÃO:**

### **A. BASE DO SISTEMA:**

```bash
# Repositórios KXStudio
wget -O kxstudio-repos.deb "https://launchpad.net/~kxstudio-debian/+archive/ubuntu/kxstudio/+files/kxstudio-repos_10.0.3_all.deb"
sudo dpkg -i kxstudio-repos.deb && sudo apt update
```

### **B. SINTASTES PRINCIPAIS:**

```bash
# Sintetizadores essenciais
sudo apt install -y surge-xt helm amsynth hexter setbfree
```

### **C. EFEITOS E PLUGINS:**

```bash
# Suites de efeitos
sudo apt install -y calf-plugins lsp-plugins-lv2 swh-lv2 x42-plugins
```

### **D. DAWs E HOSTS:**

```bash
# DAWs e hosts de plugins
sudo apt install -y ardour lmms hydrogen giada carla
```

### **E. SISTEMA DE ÁUDIO:**

```bash
# Audio professional
sudo apt install -y jackd2 jack-tools qjackctl
```

## **🔧 CONFIGURAÇÃO PÓS-INSTALAÇÃO:**

### **1. No Waveform:**

```bash
waveform13
```

**Configurar:**

- **Settings → Plug-ins → Clear VST/LV2 Cache → Rescan All Plug-ins**
- **Aguardar 1-2 minutos para scan completo**

### **2. Plugins que devem aparecer:**

- **VST3:** Surge XT, Surge XT Effects, Attracktive, Carla
- **VST2:** amsynth_vst, Helm, ZynAddSubFX
- **LV2:** Calf plugins, LSP plugins, Helm, b_synth, geonkick

### **3. Verificar instalação:**

```bash
# Verificar plugins detectados
ls /usr/lib/vst/ /usr/lib/vst3/ ~/.vst/ ~/.vst3/ 2>/dev/null
ls /usr/lib/lv2/ | grep -E "(calf|lsp|helm|surge)"
```

## **📋 LISTA DE PACOTES INSTALADOS:**

```
✅ DAWs: ardour, lmms, hydrogen, giada
✅ Hosts: carla, carla-vst, carla-lv2
✅ Sintetizadores: surge-xt, helm, amsynth, hexter, setbfree
✅ Efeitos: calf-plugins, lsp-plugins-lv2, swh-lv2, x42-plugins
✅ Sistema: jackd2, jack-tools, qjackctl
```

## **🚀 COMANDO ÚNICO DE VERIFICAÇÃO:**

```bash
# Verificar tudo instalado
for pkg in ardour lmms hydrogen surge-xt helm amsynth carla calf-plugins; do
    dpkg -l | grep -q " $pkg " && echo "✅ $pkg" || echo "❌ $pkg"
done
```

**Guarde este prompt! Use para reinstalação completa do seu setup de produção musical no Linux Mint.** 🎵
