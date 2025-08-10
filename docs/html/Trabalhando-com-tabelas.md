# Trabalhando com Tabelas em HTML

## 📌 Objetivo Geral

- Dominar a estruturação de tabelas em HTML
- Aprender técnicas de estilização com CSS
- Entender quando (e quando não) usar tabelas

---

## 🏗️ Estrutura Básica de Tabelas

### Tags Essenciais

```html
<table>
  <thead>
    <tr>
      <th>Cabeçalho 1</th>
      <th>Cabeçalho 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dado 1</td>
      <td>Dado 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Rodapé 1</td>
      <td>Rodapé 2</td>
    </tr>
  </tfoot>
</table>
```

### 🔍 Tags Explicadas:

| Tag       | Função                    | Uso Recomendado          |
| --------- | ------------------------- | ------------------------ |
| `<table>` | Contêiner principal       | Sempre obrigatória       |
| `<tr>`    | Define uma linha          | Para cada linha de dados |
| `<td>`    | Célula comum              | Dados normais            |
| `<th>`    | Célula de cabeçalho       | Títulos de coluna/linha  |
| `<thead>` | Agrupa cabeçalhos         | Melhora acessibilidade   |
| `<tbody>` | Agrupa conteúdo principal | Organização semântica    |
| `<tfoot>` | Agrupa rodapés            | Para totais/resumos      |

---

## 🎨 Estilização com CSS

### ✨ Técnicas Essenciais

```css
table {
  width: 100%;
  border-collapse: collapse; /* Remove espaços entre células */
  margin: 20px 0;
}

th,
td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #e6f7ff;
}
```

### 🚀 Boas Práticas

1. **Acessibilidade**:

   - Use `<caption>` para descrições
   - Atributo `scope` em `<th>`

   ```html
   <th scope="col">Nome</th>
   ```

2. **Responsividade**:
   ```css
   @media (max-width: 600px) {
     table {
       display: block;
       overflow-x: auto;
     }
   }
   ```

---

## ⚠️ Quando Usar (e Evitar) Tabelas

### ✅ Casos Adequados

- Dados tabulares (planilhas, comparações)
- Grades de informações (horários, preços)
- Relatórios estruturados

### ❌ Más Práticas

- Layout da página (use CSS Grid/Flexbox)
- Posicionamento de elementos UI
- Estruturas complexas não-tabulares

---

## 🌟 Exemplo Completo

```html
<table class="dados-clientes">
  <caption>
    Lista de Clientes
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome</th>
      <th scope="col">E-mail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>João Silva</td>
      <td>joao@exemplo.com</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total: 1 cliente</td>
    </tr>
  </tfoot>
</table>
```

---

## 📚 Recursos Adicionais

- [MDN Web Docs - Tables](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Tables)
- [W3C - Table Techniques](https://www.w3.org/WAI/tutorials/tables/)
