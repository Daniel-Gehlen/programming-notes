# Modal em Desenvolvimento de Software

## O que é um Modal?

Janela de diálogo que **sobrepõe** a interface principal, criando um contexto de interação temporário e obrigatório. O usuário deve interagir com o modal antes de retornar à tela principal.

---

## Características Essenciais

### Comportamento

- **Foco Bloqueante**: Interface principal fica inativa
- **Overlay**: Fundo escurecido/semi-transparente
- **Ação Requerida**: Usuário deve confirmar, cancelar ou preencher dados

### Variações Comuns

| Tipo           | Uso Típico          | Exemplo                     |
| -------------- | ------------------- | --------------------------- |
| **Alerta**     | Confirmação simples | "Deseja excluir este item?" |
| **Formulário** | Coleta de dados     | Login, Cadastro             |
| **Seletor**    | Escolha de opções   | Selecionar cor/tamanho      |

---

## Implementação Prática

### Exemplo em React (com Material-UI)

```jsx
import { Modal, Button } from "@mui/material";

function MeuModal() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <Button onClick={() => setAberto(true)}>Abrir Modal</Button>

      <Modal open={aberto} onClose={() => setAberto(false)}>
        <div className="modal-estilo">
          <h2>Título do Modal</h2>
          <p>Conteúdo personalizado aqui...</p>
        </div>
      </Modal>
    </>
  );
}
```

### Boas Práticas de CSS

```css
.modal-estilo {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
}
```

---

## Quando Usar (e Quando Evitar)

### ✅ Casos Ideais

- Confirmações críticas (excluir dados)
- Micro-interações (login rápido)
- Notificações urgentes

### ❌ Situações a Evitar

- Exibir termos longos (prefira página separada)
- Conteúdo secundário
- Fluxos complexos (quebra a experiência)

---

## Acessibilidade (WCAG)

- **Foco Gerenciado**: Trap focus dentro do modal
- **ARIA Labels**:
  ```html
  <div role="dialog" aria-labelledby="modal-titulo">
    <h2 id="modal-titulo">Confirmação</h2>
  </div>
  ```
- **Teclado**:
  - `ESC` deve fechar
  - Navegação via `Tab`

---

## Comparativo: Modal vs Alternativas

| Técnica        | Vantagem       | Desvantagem              |
| -------------- | -------------- | ------------------------ |
| **Modal**      | Foco garantido | Pode interromper o fluxo |
| **Toast**      | Não bloqueante | Pouca interação          |
| **Side Panel** | Espaço maior   | Consome área útil        |

**Dica**: Use modais para ações **críticas** e **curtas**.

---

## Frameworks Recomendados

- **Bootstrap**: `$('#modal').modal('show')`
- **React**: Material-UI, Chakra UI
- **Vue**: Vuetify, PrimeVue

[Documentação W3C sobre Modais](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)

> Modais são como sinais de trânsito: úteis para direcionar atenção, mas prejudiciais se mal posicionados. 🚦
