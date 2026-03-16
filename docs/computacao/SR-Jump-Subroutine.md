# 🚀 **JSR: Jump Subroutine (Chamada de Sub-rotina)**

## 📌 **Definição**

A instrução **JSR** (Jump Subroutine) é um comando em linguagem Assembly que desvia o fluxo do programa para uma sub-rotina e **retorna automaticamente** ao ponto de chamada após sua execução.

---

## 🔄 **Funcionamento do JSR**

1. **Chamada da Sub-rotina**
   - Salva o **endereço de retorno** na pilha (stack).
   - Salta para o início da sub-rotina.

2. **Execução da Sub-rotina**
   - Processa as instruções internas.

3. **Retorno ao Chamador**
   - Usa `RTS` (Return from Subroutine) para:
     - Recuperar o endereço da pilha.
     - Continuar a execução após a chamada.

---

## 💻 **Exemplo em Assembly (6502)**

```assembly
LDX #$00         ; Inicializa X com 0
JSR SUBROUTINE   ; Chama a sub-rotina
INX              ; X = 2 (após retorno)
BRK              ; Fim do programa

SUBROUTINE:
    INX          ; X = 1 (dentro da sub-rotina)
    RTS          ; Retorna ao programa principal
```

### 📝 **Passo a Passo:**

1. `LDX #$00` → `X = 0`.
2. `JSR SUBROUTINE` → Salta para `SUBROUTINE` e salva o endereço de retorno.
3. `INX` (na sub-rotina) → `X = 1`.
4. `RTS` → Retorna e executa `INX` no programa principal → `X = 2`.

---

## 🌐 **Comparação entre Arquiteturas**

| Arquitetura | Instrução de Chamada | Instrução de Retorno |
| ----------- | -------------------- | -------------------- |
| **6502**    | `JSR <label>`        | `RTS`                |
| **x86**     | `call <label>`       | `ret`                |
| **ARM**     | `BL <label>`         | `BX LR`              |

---

## ✅ **Benefícios das Sub-rotinas**

- **♻️ Reutilização de Código:** Evita repetição.
- **📂 Organização:** Divide o programa em blocos lógicos.
- **🔧 Manutenção Simplificada:** Alterações centralizadas.

---

## 🛠️ **Aplicações Práticas**

1. **Rotinas Matemáticas** (ex: cálculos complexos).
2. **Manipulação de Hardware** (ex: acesso a periféricos).
3. **Tratamento de Interrupções**.

---

## ⚠️ **Cuidados**

- **Stack Overflow:** Chamadas aninhadas demais podem esgotar a pilha.
- **Registradores:** Preservar valores antes da chamada (se necessário).

---

## 🎯 **Conclusão**

O **JSR** é essencial para:
✔ **Programação modular** em baixo nível.
✔ **Estruturação eficiente** de código Assembly.
✔ **Interação com hardware** em sistemas embarcados.

> **Dica:** Use sub-rotinas para tarefas repetitivas e mantenha seu código limpo! 🧹
