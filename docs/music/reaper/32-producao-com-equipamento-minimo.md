## Produção musical com equipamento mínimo

Apresenta-se um **projeto** gravado com o **equipamento mais barato possível**: um **celular** como microfone e um **computador** comum rodando o Reaper.

> **Objetivo:** Mostrar que é possível obter um resultado comercial mesmo sem equipamentos caros ou interfaces de áudio dedicadas.

---

## Equipamentos utilizados

| Item                                       | Descrição                                                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Microfone**                              | Celular (modelo básico, sem acessórios)                                                              |
| **Computador**                             | Normal (não necessita ser potente)                                                                   |
| **Software de captura de tela (opcional)** | OBS Studio (gratuito) – usado para gravação de tela e também pode ser usado para roteamento de áudio |
| **Driver de áudio (gratuito)**             | ASIO4ALL – faz a ponte entre o celular (como microfone) e o Reaper                                   |

---

## Fluxo de gravação com celular

### Configuração básica

| Etapa | Procedimento                                                                                |
| ----- | ------------------------------------------------------------------------------------------- |
| 1     | Conecte o celular ao computador (via cabo P2/P10 ou entrada de microfone do computador)     |
| 2     | Use o ASIO4ALL para configurar a entrada de áudio do computador como dispositivo de captura |
| 3     | No Reaper, configure a entrada (input) para captar o sinal que vem do celular               |
| 4     | Grave normalmente – o celular atua como um microfone simples                                |

### Gravação de tela (OBS Studio) – para produção de vídeo/aulas

- Usou-se o **OBS Studio** (gratuito) para gravar a tela enquanto explicava.
- O OBS também pode ser usado para **transmissões ao vivo** (YouTube, etc.).
- Para capturar o áudio interno do Reaper dentro do OBS, é necessário configurar um **driver de áudio virtual** (ex: VB-Cable) em conjunto com o ASIO4ALL.

> ⚠️ Detalhes específicos de configuração entre OBS, ASIO4ALL e VB-Cable não foram aprofundados, mas hámuito conteúdo na internet para você pesquisar.

---

## Processamentos utilizados neste projeto

Aplicou-se os mesmos conceitos de mixagem e masterização, mas com uma cadeia de plugins adaptada para a qualidade da gravação.

### Equalização (EQ) – cadeia na master

| Processador       | Configuração                                                            | Objetivo                                                                          |
| ----------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **EQ (primeiro)** | Shelving suave: realce de agudos (presença) + corte de graves (limpeza) | Compensar a falta de definição do celular e remover excesso de graves indesejados |

### Compressão (substitutos para plugins pagos)

| Plugin original (percurso principal) | Alternativa gratuita utilizada                                                                                          | Função                                   |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Compressor "coringa" (ex: DC1A3)     | Compressor gratuito com funções similares (ex: **ReaComp** configurado para simular comportamento opto ou VCA)          | Aplainar dinâmica e "colar" os elementos |
| Compressor de mastering              | Compressor gratuito configurado com **RMS**, attack lento (20-30 ms), release médio (200 ms), ratio baixo (1.5:1 a 2:1) | Compressão suave no todo da mixagem      |

### Efeitos

| Elemento      | Efeito aplicado                      | Configuração                                                                                              |
| ------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Voz           | Reverb curto (sala pequena)          | Decay curto (0.5-1s), pré-delay baixo. Objetivo: espalhar levemente a voz no campo estéreo, sem afundá-la |
| Caixa (snare) | Reverb curto + realce de brilho (EQ) | Adicionar um pouco mais de "40" (presença/atque) para a caixa se destacar                                 |

### Masterização (cadeia final)

| Etapa | Plugin/Ferramenta           | Configuração                                                                                              |
| ----- | --------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1     | **EQ** (tilt ou shelving)   | Ajuste final de equilíbrio tonal (realce suave de agudos, limpeza de graves)                              |
| 2     | **Compressor** (RMS, lento) | Gain reduction de 1-2 dB – compressão suave para "colar"                                                  |
| 3     | **Limitador**               | Ceiling em -0,3 dB. Input gain ajustado para volume final entre **-10 dB e -9 dB RMS** (padrão comercial) |

### Automação

| Tipo       | Aplicação       | Configuração                                                                                   |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------- |
| **Volume** | Intro da música | Redução manual do volume (via envelope) para criar contraste dinâmico com o restante da música |

---

## Verificação do volume final

| Método            | Procedimento                                                                                                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Medidor**       | Observar o medidor de pico (peak) e RMS na master                                                                                                                                |
| **Volume alvo**   | Entre **-10 dB e -9 dB RMS** (ou equivalente em LUFS)                                                                                                                            |
| **Teste prático** | Ajustar o volume do sistema de som (monitor/fone) com referências comerciais. Depois, tocar a própria música no mesmo nível. Se estiver no mesmo patamar, o volume está adequado |

---

## Considerações

### O áudio como "maquiagem"

| Analogia                       | Explicação                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| **Matéria-prima de qualidade** | Uma boa gravação (execução, timbre, captação) é como uma pele bonita – precisa de pouca maquiagem |
| **Maquiagem (processamento)**  | EQ, compressão, efeitos – realçam o que já está bom                                               |
| **Matéria-prima ruim**         | Se a gravação é ruim (ruído excessivo, execução errada, timbre pobre), a "maquiagem" não resolve  |

> **Nota:** "O áudio é uma espécie de maquiagem para a matéria-prima. Se a matéria-prima é boa, a maquiagem dá aquele acabamento final. Se a matéria-prima é ruim, geralmente você não tem o que fazer."

### O resultado comercial não exige equipamento caro

| Equipamento caro                             | Equipamento mínimo (celular)                                          |
| -------------------------------------------- | --------------------------------------------------------------------- |
| Capta com mais detalhe, menos ruído          | Capta com menos detalhe, mais ruído                                   |
| Exige menos processamento corretivo          | Exige mais processamento (EQ, noise gate)                             |
| Resultado final pode ser ligeiramente melhor | Resultado final **surpreendentemente bom** para a maioria das pessoas |

### Evidência prática

> "A prova disso é a aceitação na internet: um monte de gente curte músicas gravadas de forma simples, e ninguém fica questionando se o áudio está tecnicamente perfeito ou não. O que importa é a música, a emoção, a intenção."

---

## Resumo visual do projeto bônus

```
PRODUÇÃO COM EQUIPAMENTO MÍNIMO
├── Gravação
│   ├── Microfone: celular (entrada P2 do computador)
│   ├── Driver: ASIO4ALL
│   └── Software: Reaper
├── Mixagem (cadeia similar ao percurso principal)
│   ├── EQ: correção de graves/agudos
│   ├── Compressão: ReaComp ou gratuito similar
│   ├── Reverb: curto (voz + caixa)
│   └── Automação: volume (intro mais baixa)
├── Masterização
│   ├── EQ suave (tilt/shelving)
│   ├── Compressão suave (1-2 dB gain reduction)
│   ├── Limitador (ceiling -0,3 dB)
│   └── Volume final: -10 dB a -9 dB RMS
└── Validação
    ├── Comparar com referências comerciais (mesmo volume de monitor)
    └── Ajustes finos (ouvir em diferentes sistemas)
```

---

## Encerramento do percurso

> "A qualidade das suas execuções, da sua captação e do seu timbre são o mais importante. Se você fizer isso mesmo com equipamento simples, você já consegue chegar no resultado comercial. Você vai poder entregar suas músicas, e as pessoas vão gostar.
