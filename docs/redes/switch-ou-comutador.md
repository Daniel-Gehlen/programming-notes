# Switch (ou Comutador)

## Funcionamento de um Switch

**Comutação**:

- Recebe quadros de dados em suas portas de entrada.
- Examina o endereço MAC de destino do quadro.
- Encaminha o quadro para a porta específica conectada ao dispositivo de destino usando uma tabela de endereços MAC.

**Tabela de Endereços MAC**:

- Armazena endereços MAC de origem e portas correspondentes.
- Constrói um mapa da rede para envio direcionado de dados.

**Redução de Colisões**:

- Envia dados apenas para a porta correta (diferente de hubs que retransmitem para todas as portas).

**Full Duplex**:

- Permite transmissão e recepção simultâneas, aumentando a eficiência.

---

## Vantagens do Uso de Switches

| Vantagem           | Descrição                                                                 |
| ------------------ | ------------------------------------------------------------------------- |
| **Eficiência**     | Reduz colisões e envia dados apenas para portas específicas.              |
| **Escalabilidade** | Facilita a expansão da rede sem impactar significativamente o desempenho. |
| **Segurança**      | Permite segmentação de rede e controle de tráfego.                        |
| **QoS**            | Prioriza tráfego crítico (ex.: chamadas VoIP).                            |

---

## Tipos de Switches

| Tipo                      | Características                                                               | Ideal para                       |
| ------------------------- | ----------------------------------------------------------------------------- | -------------------------------- |
| **Não-Gerenciáveis**      | Simples, sem configurações avançadas.                                         | Pequenas redes ou uso doméstico. |
| **Gerenciáveis**          | Oferece VLANs, QoS, monitoramento de tráfego e gerenciamento remoto.          | Redes empresariais.              |
| **Camada 3 (Roteadores)** | Combina funções de switch e roteador, permitindo comunicação entre sub-redes. | Redes grandes e complexas.       |

---

## Aplicações Práticas

- **Redes Corporativas**: Conexão de computadores, servidores e impressoras.
- **Data Centers**: Alta eficiência para grandes volumes de servidores.
- **Redes Domésticas**: Melhora desempenho de PCs, consoles e dispositivos de streaming.

---

## Exemplo de Operação

1. **Computador A** envia dados para **Computador B**.
2. O switch verifica o endereço MAC de destino.
3. Encaminha os dados diretamente para a porta do **Computador B** (evitando tráfego desnecessário).

---

### Ilustração de Rede com Switch

```
            +---------+
            |  Switch |
            +---------+
           /    |    \
          /     |     \
+------+ +------+ +------+
| PC1  | | PC2  | | PC3  |
+------+ +------+ +------+
```

_por Daniel Gehlen_

---

# Cabos de Par Trançado

## Estrutura

- **Fios de Cobre**: Pares trançados para reduzir interferência.
- **Capa Externa**: Proteção plástica para durabilidade.

## Tipos

| Tipo | Descrição                                             | Exemplo     |
| ---- | ----------------------------------------------------- | ----------- |
| UTP  | Sem blindagem adicional, custo baixo.                 | Cat5e, Cat6 |
| STP  | Blindagem adicional contra interferências, mais caro. | Cat6a, Cat7 |

## Categorias

| Categoria | Velocidade Máxima           | Frequência |
| --------- | --------------------------- | ---------- |
| Cat5e     | 1 Gbps                      | 100 MHz    |
| Cat6      | 10 Gbps (curtas distâncias) | 250 MHz    |
| Cat7      | 10 Gbps                     | 600 MHz    |

## Aplicações

- **LANs**: Conexão de dispositivos em escritórios e residências.
- **PoE (Power over Ethernet)**: Alimenta câmeras IP e telefones VoIP.

---

# Multiplexing (Multiplexação)

## Tipos

| Tipo | Descrição                                                  | Aplicação               |
| ---- | ---------------------------------------------------------- | ----------------------- |
| TDM  | Divide o tempo em slots para múltiplos sinais.             | Linhas T1/E1.           |
| FDM  | Divide o espectro de frequência em bandas distintas.       | Rádio, TV a cabo.       |
| WDM  | Usa diferentes comprimentos de onda em fibras ópticas.     | Provedores de Internet. |
| CDM  | Utiliza códigos únicos para separar sinais no mesmo canal. | Telefonia móvel (CDMA). |

## Benefícios

- **Eficiência**: Compartilhamento de meio físico.
- **Redução de Custos**: Menos infraestrutura necessária.
- **Capacidade Aumentada**: Suporte a múltiplos fluxos de dados.

---
