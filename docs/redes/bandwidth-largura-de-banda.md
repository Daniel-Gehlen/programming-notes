# Bandwidth (Largura de Banda)

## Definição

A largura de banda refere-se à capacidade máxima de transferência de dados em uma conexão de rede, expressa em:

- bits por segundo (bps)
- kilobits por segundo (kbps)
- megabits por segundo (Mbps)
- gigabits por segundo (Gbps)

**Importância**:

- Determina a quantidade de informação transmitida por unidade de tempo.
- Conexões com maior largura de banda são mais rápidas e eficientes.

---

## Tipos de Largura de Banda

1. **Largura de Banda de Canal**:

   - Capacidade máxima de um meio físico (ex.: cabo de rede, Wi-Fi).
   - Exemplo: Cabo Ethernet Cat6 tem largura de banda de até 10 Gbps.

2. **Largura de Banda de Conexão**:
   - Quantidade de dados que podem ser transferidos em um período específico.
   - Exemplo: Plano de Internet de 100 Mbps.

---

## Características

- **Recurso Finito**: Compartilhado entre dispositivos na rede.
- **Impacto no Desempenho**:
  - Redes congestionadas (muitos dispositivos) podem reduzir a velocidade efetiva.

---

## Cálculo da Capacidade de Canal (Shannon-Hartley)

**Fórmula**:

```
C = B × log₂(1 + S/N)
```

- **C**: Capacidade máxima (bps).
- **B**: Largura de banda do canal (Hz).
- **S/N**: Relação sinal-ruído (SNR).

**Interpretação**:

- Maior largura de banda (B) → Maior capacidade (C).
- Maior SNR → Maior capacidade (C).

---

## Claude Shannon: Pai da Teoria da Informação

**Contribuições**:

- Fundamentos matemáticos da comunicação digital.
- Conceitos como **entropia da informação** e **codificação de canal**.
- Teorema da codificação: Limites para transmissão confiável em canais ruidosos.

**Exemplo Prático (Copinho Telefônico)**:

- **Canal**: Barbante (meio de transmissão).
- **Largura de Banda**: Frequência máxima de sons transmitidos.
- **Ruído**: Interferências (vento, vibrações).

---

## Modulação e Demodulação

### Técnicas de Modulação

| Tipo                | Descrição                             | Aplicação             |
| ------------------- | ------------------------------------- | --------------------- |
| **AM (Amplitude)**  | Varia a amplitude da onda portadora.  | Rádio AM              |
| **FM (Frequência)** | Varia a frequência da onda portadora. | Rádio FM              |
| **PM (Fase)**       | Varia a fase da onda portadora.       | Comunicações digitais |
| **PCM**             | Codifica dados em pulsos digitais.    | Telefonia digital     |

### MODEM (Modulador-Demodulador)

- **Função**: Converte dados digitais (bits) em sinais analógicos (modulação) e vice-versa (demodulação).
- **Aplicações**: Internet discada, DSL, redes móveis.

---

## Packet Switching (Comutação de Pacotes)

**Definição**:

- Dados são divididos em **pacotes** independentes.
- Cada pacote contém cabeçalho (endereço de destino) e payload (dados).

**Vantagens**:

- Eficiência no uso da largura de banda.
- Resiliência (rotas alternativas em caso de falha).

**Exemplo**: Internet (protocolo IP).

---

## Half Duplex vs. Full Duplex

| **Half Duplex**                    | **Full Duplex**                              |
| ---------------------------------- | -------------------------------------------- |
| Transmissão em um sentido por vez. | Transmissão simultânea em ambos os sentidos. |
| Exemplo: Walkie-talkie.            | Exemplo: Telefone celular.                   |

---

## MTU (Maximum Transmission Unit)

**Definição**:

- Tamanho máximo de um pacote que pode ser transmitido sem fragmentação.
- **Padrão Ethernet**: 1500 bytes.

**Impacto**:

- Pacotes maiores que o MTU são fragmentados, reduzindo eficiência.

---

## ACK e NAK

| **ACK (Acknowledgment)**          | **NAK (Negative Acknowledgment)** |
| --------------------------------- | --------------------------------- |
| Confirma recebimento correto.     | Indica erro ou perda de pacote.   |
| Usado em TCP para confiabilidade. | Solicita retransmissão do pacote. |

---

## Aplicações Práticas

1. **Redes Domésticas**:
   - Otimizar largura de banda para streaming (ex.: priorizar vídeo via QoS).
2. **Data Centers**:
   - Usar **full duplex** e **Jumbo Frames** para alta eficiência.

📚 **Leitura Recomendada**:

- _"A Mathematical Theory of Communication"_ (Claude Shannon).
- Padrões IEEE para redes (ex.: 802.11 para Wi-Fi).
