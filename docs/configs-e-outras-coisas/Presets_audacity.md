# 📁 CÓDIGOS COMPLETOS DOS PRESETS FUNCIONAIS no Audacity

## **LOCAL DO ARQUIVO:**

```
~/.config/audacity/pluginsettings.cfg
```

## **1. COMPRESSOR - Voz_Presenca**

```ini
[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0NvbXByZXNzb3I=/private/UserPresets/Voz_Presenca]
Parameters=AttackTime="0,015" NoiseFloor="-40" Normalize="1" Ratio="2,5" ReleaseTime="1" Threshold="-20" UsePeak="0"
```

## **2. REMOÇÃO DE RUÍDO - Ruido_Leve**

```ini
[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X05vaXNlIFJlZHVjdGlvbg==/private/UserPresets/Ruido_Leve]
Parameters=AttackDecayTime="0,15" FrequencySmoothing="3,0" Gain="0,0" NoiseGain="15,0" NoiseSensitivity="12,0"
```

## **3. NORMALIZAR - Normalizar_Seguro**

```ini
[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X05vcm1hbGl6ZQ==/private/UserPresets/Normalizar_Seguro]
Parameters=ApplyGain="1" PeakLevel="-1,0" RemoveDcOffset="1" StereoIndependent="0"
```

## **4. LOUDNESS - Loudness_YouTube**

```ini
[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0xvdWRuZXNzIE5vcm1hbGl6YXRpb24=/private/UserPresets/Loudness_YouTube]
Parameters=DualMono="1" LUFSLevel="-16" NormalizeTo="0" RMSLevel="-20" StereoIndependent="0"
```

## **5. EQUALIZADOR GRÁFICO - EQ_Voz_Clara**

```ini
[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0dyYXBoaWMgRVE=/private/UserPresets/EQ_Voz_Clara]
Parameters=FilterLength="8191" InterpolateLin="0" InterpolationMethod="B-spline" f0="80" v0="2" f1="150" v1="3" f2="400" v2="-2" f3="1000" v3="0" f4="3000" v4="2" f5="6000" v5="-3" f6="8000" v6="-1"
```

## **6. COMPRESSOR ALTERNATIVO - Voz_Suave**

```ini
[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0NvbXByZXNzb3I=/private/UserPresets/Voz_Suave]
Parameters=AttackTime="0,02" NoiseFloor="-40" Normalize="1" Ratio="2,0" ReleaseTime="1" Threshold="-18" UsePeak="0"
```

---

# ⚡ SCRIPT PARA RESTAURAR TUDO DE UMA VEZ

```bash
cat > ~/restaurar_presets_voz.sh << 'EOF'
#!/bin/bash
echo "=== RESTAURANDO PRESETS VOCAL ==="

# Backup do arquivo atual
cp ~/.config/audacity/pluginsettings.cfg ~/.config/audacity/pluginsettings.cfg.backup.$(date +%s)

# Adicionar todos os presets
cat >> ~/.config/audacity/pluginsettings.cfg << 'PRESETS'

[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0NvbXByZXNzb3I=/private/UserPresets/Voz_Presenca]
Parameters=AttackTime="0,015" NoiseFloor="-40" Normalize="1" Ratio="2,5" ReleaseTime="1" Threshold="-20" UsePeak="0"

[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X05vaXNlIFJlZHVjdGlvbg==/private/UserPresets/Ruido_Leve]
Parameters=AttackDecayTime="0,15" FrequencySmoothing="3,0" Gain="0,0" NoiseGain="15,0" NoiseSensitivity="12,0"

[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X05vcm1hbGl6ZQ==/private/UserPresets/Normalizar_Seguro]
Parameters=ApplyGain="1" PeakLevel="-1,0" RemoveDcOffset="1" StereoIndependent="0"

[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0xvdWRuZXNzIE5vcm1hbGl6YXRpb24=/private/UserPresets/Loudness_YouTube]
Parameters=DualMono="1" LUFSLevel="-16" NormalizeTo="0" RMSLevel="-20" StereoIndependent="0"

[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0dyYXBoaWMgRVE=/private/UserPresets/EQ_Voz_Clara]
Parameters=FilterLength="8191" InterpolateLin="0" InterpolationMethod="B-spline" f0="80" v0="2" f1="150" v1="3" f2="400" v2="-2" f3="1000" v3="0" f4="3000" v4="2" f5="6000" v5="-3" f6="8000" v6="-1"

[pluginsettings/base64:RWZmZWN0X0F1ZGFjaXR5X0F1ZGFjaXR5X0NvbXByZXNzb3I=/private/UserPresets/Voz_Suave]
Parameters=AttackTime="0,02" NoiseFloor="-40" Normalize="1" Ratio="2,0" ReleaseTime="1" Threshold="-18" UsePeak="0"
PRESETS

echo "✅ Presets restaurados!"
echo "🎤 Presets disponíveis:"
echo "   • Ruido_Leve"
echo "   • Voz_Presenca"
echo "   • EQ_Voz_Clara"
echo "   • Normalizar_Seguro"
echo "   • Loudness_YouTube"
echo "   • Voz_Suave"
echo ""
echo "🔄 Feche e reabra o Audacity: pkill audacity && audacity &"
EOF

chmod +x ~/restaurar_presets_voz.sh
```

## **PARA USAR:**

```bash
# 1. Execute o script
~/restaurar_presets_voz.sh

# 2. Feche e reabra Audacity
pkill audacity && sleep 2 && audacity &
```

## **VERIFICAÇÃO:**

```bash
# Verificar presets criados
grep "UserPresets/" ~/.config/audacity/pluginsettings.cfg | sed 's/.*UserPresets\///' | sed 's/\]//' | sort
```

---

# 📋 RESUMO DE USO

## **PRESETS ATIVOS:**

- `Ruido_Leve` - Remove ruído suave
- `Voz_Presenca` - Compressor com presença
- `EQ_Voz_Clara` - EQ para clareza vocal
- `Normalizar_Seguro` - Volume final -1dB
- `Loudness_YouTube` - Para vídeos/streaming
- `Voz_Suave` - Compressor alternativo

## **ORDEM RECOMENDADA:**

1. **Ruido_Leve** (Remoção de Ruído)
2. **Voz_Presenca** (Compressor)
3. **EQ_Voz_Clara** (Equalizador Gráfico)
4. **Normalizar_Seguro** (Normalizar)

## **LOCALIZAÇÃO NO AUDACITY:**

```
Efeitos → [Nome do Efeito] → Dropdown → Preset correspondente
```

**Pronto!** Todos os códigos funcionais com nomes genéricos. Use o script `restaurar_presets_voz.sh` para restaurar em qualquer sistema.
