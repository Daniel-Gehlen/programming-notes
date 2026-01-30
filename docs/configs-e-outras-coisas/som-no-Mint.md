# Melhorando som no Mint

**Perfeito!** Um limitador configurado, mas com parâmetros **muito agressivos** que podem estar **piorando a saturação**.

## ⚠️ **Problemas na configuração atual:**

1. **Limite: -1,05 dB** → Muito alto, quase não limita
2. **Ataque/Lançamento: 3ms** → **EXTREMAMENTE RÁPIDO** - causa distorção
3. **Ligação Estéreo: 100%** → OK, mas pode ser reduzida

## 🔧 **Configuração CORRETA para Limitador:**

### **Para alto-falantes/som geral:**

```
- Limite: -3,0 dB a -6,0 dB  (mais protetor)
- Ataque: 10-20 ms           (mais lento, menos distorção)
- Lançamento: 50-100 ms      (mais lento, natural)
- Ligação Estéreo: 50-70%    (mais natural)
```

### **Configuração otimizada sugerida:**

```
Limite: -4,5 dB
Ataque: 15 ms
Lançamento: 80 ms
Ligação Estéreo: 65%
```

## 🎯 **Por que ajustar assim:**

- **Ataque/Lançamento de 3ms** é para **rádio FM/masterização profissional**, não para reprodução
- Causa **"pumping"** audível e **distorção por transientes**
- **-1,05 dB** quase não previne clipping

## 📊 **Ordem FINAL dos plugins:**

```
1. [✓] Equalizador → (ajuste como sugerido anteriormente)
2. [✓] Compressor → (suave, ratio 3:1, threshold -20dB)
3. [✓] De-esser → (já configurado)
4. [✓] Limitador → (ajustar conforme acima)
```

## 💾 **Preset completo sugerido:**

Crie um preset chamado **"Som Otimizado Alto-Falantes"** com:

### **Equalizador (6 bandas):**

1. 90 Hz: -5 dB, Q 1.0
2. 250 Hz: -3 dB, Q 1.2
3. 900 Hz: +2 dB, Q 1.0
4. 2800 Hz: +3 dB, Q 1.5
5. 5500 Hz: -4 dB, Q 2.0
6. 9000 Hz: -5 dB, Q 1.4

### **Compressor:**

- Limite: -20 dB
- Proporção: 3:1
- Ataque: 25 ms
- Liberação: 150 ms
- Joelho: 6 dB
- Ganho: +3 dB

### **De-esser:**

- Limite: -24 dB
- Proporção: 5:1
- F1: 6200 Hz
- F2: 5200 Hz
- Nível F2: 16 dBFS

### **Limitador:**

- Limite: -4,5 dB
- Ataque: 15 ms
- Lançamento: 80 ms
- Ligação: 65%

## 🔄 **Teste passo a passo:**

1. **Primeiro, ajuste só o Limitador** para os valores sugeridos
2. **Depois, ajuste o Equalizador** (remova as 4 bandas graves)
3. **Teste com:**
   - Vídeo com voz: https://www.youtube.com/watch?v=2dINZ2NmGv4
   - Música com graves: https://www.youtube.com/watch?v=JGhoLcsr8GA

## 📈 **Resultado esperado:**

- ✅ **Menos saturação/escoamento**
- ✅ **Sibilância controlada**
- ✅ **Vozes mais claras**
- ✅ **Graves mais limpos**
- ✅ **Sem distorção em volumes altos**

**O limitador com ataque/lançamento de 3ms é provavelmente UM DOS MAIORES CULPADOS da sua saturação!** Ajuste isso primeiro e já vai sentir diferença.
