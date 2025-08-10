# RAW: Dados Não Processados em Fotografia e Computação

## Introdução

O termo **RAW** possui significados distintos em diferentes contextos tecnológicos, sempre mantendo a essência de representar **dados brutos não processados**. Este documento explora suas duas principais aplicações: fotografia digital e computação.

---

## RAW em Fotografia Digital

### Definição

Formato de imagem que armazena **dados brutos do sensor** da câmera sem compressão ou processamento interno.

### Características Técnicas

| Parâmetro           | Detalhe                                                           |
| ------------------- | ----------------------------------------------------------------- |
| Profundidade de Cor | 12-16 bits por canal (vs 8 bits do JPEG)                          |
| Espaço de Cor       | Linear (não aplicada curva gamma)                                 |
| Metadados           | Inclui configurações da câmera (ISO, abertura, balanço de branco) |

### Vantagens

✅ **Flexibilidade pós-produção**

- Ajuste não-destrutivo de exposição, WB e curvas tonais
  ✅ **Alto dinamico range**
- Recuperação de detalhes em altas-luzes/sombras
  ✅ **Qualidade superior**
- Sem artefatos de compressão

### Desvantagens

⚠️ **Tamanho do arquivo**

- 3-6x maior que JPEG equivalente
  ⚠️ **Necessidade de conversão**
- Requer software especializado (Lightroom, Capture One)
  ⚠️ **Compatibilidade limitada**
- Formatos proprietários por fabricante (.CR2, .NEF, .ARW)

### Fluxo de Trabalho Típico

1. Captura em RAW
2. Edição no software RAW
3. Exportação para JPEG/TIFF

---

## RAW em Computação

### Aplicações Comuns

- **Armazenamento**

  - Dispositivos sem sistema de arquivos (ex: pendrive recém-fabricado)
  - Particionamento de discos

- **Recuperação de Dados**

  - Acesso direto a setores do disco após falha do sistema de arquivos

- **Processamento de Dados**
  - Dados brutos de sensores científicos
  - Streams não formatados em redes

### Exemplo Prático

```python
# Leitura de dados RAW de sensor em Python
import numpy as np

raw_data = np.fromfile('sensor.raw', dtype=np.uint16)
processed_data = raw_data.reshape((1024, 1024))  # Converter para matriz 2D
```

---

## Comparação entre Contextos

| Característica         | Fotografia RAW         | Computação RAW          |
| ---------------------- | ---------------------- | ----------------------- |
| **Natureza dos Dados** | Dados do sensor óptico | Dados binários brutos   |
| **Finalidade**         | Pós-produção flexível  | Processamento primário  |
| **Ferramentas**        | Adobe Lightroom        | Hex editors, dd (Linux) |
| **Estrutura**          | Metadados embutidos    | Sem estrutura definida  |

---

## Conclusão

### Fotografia

- **Use RAW quando**:
  - Precisar de máxima qualidade e flexibilidade
  - Trabalhar em condições de iluminação desafiadoras
  - Fizer parte de fluxo profissional de pós-produção

### Computação

- **Encontre RAW em**:
  - Sistemas embarcados e IoT
  - Protocolos de baixo nível
  - Estágios iniciais de pipelines de dados

> **Dica profissional**: Na fotografia, sempre capture em RAW+JPEG quando possível - o JPEG serve como pré-visualização rápida enquanto o RAW preserva os dados completos para edição.
