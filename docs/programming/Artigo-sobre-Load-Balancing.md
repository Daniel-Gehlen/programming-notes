# Artigo sobre Load Balancing

## Introdução

- **Script de simulação**: Animações demonstram diferentes tipos de load balancer e suas operações.
  🔗 [https://samwho.dev/load-balancing/](https://samwho.dev/load-balancing/)
- **Motivação**: Aplicações web crescem, necessitando múltiplos servidores para maior disponibilidade e escalabilidade.

---

## Fundamentos do Load Balancing

- **Deploy em múltiplos servidores**: Usa-se load balancers para distribuir requisições entre servidores.
- **Desafios em servidores únicos**: Servidores modernos suportam múltiplas requisições, mas podem ser sobrecarregados.

---

## Visualizando o Problema

- **Round Robin simples**: Distribui requisições uniformemente entre servidores.
  - **Limitações**: Pode resultar em requisições dropadas se os servidores estiverem sobrecarregados.

---

## Melhorando o Load Balancer

- **Adicionando servidores**: Mais servidores podem melhorar a distribuição de carga.
- **Round Robin ponderado**: Usa pesos para distribuir requisições de acordo com a capacidade de cada servidor.

---

## Filas de Requisições

- **Benefícios**: Reduz a perda de requisições.
- **Trade-offs**: Pode aumentar a latência de algumas requisições.

---

## Variância de Custo e Potência

- **Requisições variáveis**: Diferentes requisições têm diferentes tempos de processamento.
- **Servidores de diferentes capacidades**: Requisições devem ser distribuídas com base na potência dos servidores.

---

## Algoritmo Ponderado

- **Weighted Round Robin**: Distribui requisições com base em pesos atribuídos aos servidores.
- **Automatização**: Necessária para ajustar dinamicamente os pesos conforme a carga e capacidade.

---

## Desafios na Prática

- **Ajustes manuais**: Dificuldade em configurar pesos manualmente para servidores.
- **Soluções automatizadas**: Ferramentas e algoritmos para ajustar dinamicamente os pesos dos servidores para otimizar a distribuição de carga.

---

## Conclusão

- **Importância da automatização**: Fundamental para a eficiência e eficácia dos load balancers em ambientes variáveis.
- **Ferramentas práticas**: Uso de Redis, RabbitMQ, Kafka para filas de requisições e balanceamento de carga.

> Este resumo abrange os principais pontos abordados no vídeo sobre balanceamento de carga, detalhando os conceitos fundamentais e os desafios práticos envolvidos na implementação de um load balancer eficiente.
