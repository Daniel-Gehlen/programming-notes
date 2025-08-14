# Backbone.js para Desenvolvimento Mobile

## 🌐 Visão Geral

Backbone.js é uma biblioteca JavaScript para **SPAs (Single Page Applications)**, podendo ser adaptada para:

- Aplicações web móveis responsivas
- Apps híbridos via PhoneGap/Cordova
- PWAs (Progressive Web Apps)

---

## 📱 Casos de Uso no Mobile

### 1. Aplicações Web Móveis

- **Arquitetura MVC**:

  ```javascript
  // Model
  const Todo = Backbone.Model.extend({});

  // View
  const TodoView = Backbone.View.extend({
    tagName: "li",
    render() {
      this.$el.html(this.model.get("title"));
      return this;
    },
  });
  ```

### 2. Apps Híbridos com PhoneGap/Cordova

- **Empacotamento**:
  ```bash
  cordova create myApp
  cordova platform add android
  ```
- **Acesso a APIs nativas**:
  ```javascript
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
  });
  ```

### 3. Roteamento com Backbone.Router

```javascript
const AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    about: "showAbout",
  },
  home() {
    /* ... */
  },
  showAbout() {
    /* ... */
  },
});
```

### 4. Dados Offline

- **Backbone.LocalStorage**:
  ```javascript
  const TodoList = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("todos-backbone"),
  });
  ```

### 5. Integração com APIs RESTful

```javascript
const User = Backbone.Model.extend({
  url: "/api/users",
});
const user = new User({ id: 1 });
user.fetch(); // GET /api/users/1
```

---

## ⚖️ Comparativo com Alternativas Modernas

| Critério         | Backbone.js           | React Native/Flutter |
| ---------------- | --------------------- | -------------------- |
| **Performance**  | ⚡ WebView            | 🚀 Nativo            |
| **Estruturação** | Manual (MVC)          | Componentizada       |
| **Ecossistema**  | Limitado              | Amplo (npm/pub.dev)  |
| **Melhor Para**  | Protótipos/Proj. Peq. | Apps complexos       |

---

## 🛠️ Limitações

- **UX não-nativo**: Animações menos fluidas
- **Manutenção**: Código pode ficar complexo em grandes projetos
- **Comunidade**: Menos ativa que React/Flutter

---

## 🚀 Alternativas Recomendadas

1. **React Native**:

   - JavaScript + componentes nativos
   - Expo para prototipagem rápida

2. **Flutter**:

   - Dart + widgets customizáveis
   - Alta performance

3. **PWAs**:
   - Acessíveis via navegador
   - Instaláveis (service workers)

---

## 📌 Conclusão

Backbone.js é viável para:

- 🔄 Migração de SPAs web para mobile
- 🧪 MVPs rápidos com equipes web
- 📱 Apps híbridos simples

Para novos projetos mobile, considere **React Native** ou **Flutter** para melhor performance e experiência nativa.

> **Dica**: Use [Backbone.localStorage](https://github.com/jeromegn/Backbone.localStorage) para persistência offline fácil!
