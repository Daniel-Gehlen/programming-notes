# Trabalhando com Mídias em HTML

## 🎯 Objetivo Geral

- Dominar as principais tags de mídia HTML
- Aprender a incorporar diversos tipos de conteúdo multimídia
- Melhorar a experiência do usuário com recursos audiovisuais

---

## 🖼️ Tag `<img>` - Imagens

### Sintaxe Básica

```html
<img src="caminho/da/imagem.jpg" alt="Descrição acessível" width="800" height="600" />
```

### Atributos Essenciais

| Atributo         | Função                             | Exemplo                 |
| ---------------- | ---------------------------------- | ----------------------- |
| `src`            | Caminho da imagem                  | `"assets/logo.png"`     |
| `alt`            | Texto alternativo (acessibilidade) | `"Logotipo da empresa"` |
| `width`/`height` | Dimensões (em pixels ou %)         | `width="100%"`          |

### Boas Práticas

✔ Sempre usar `alt` para acessibilidade
✔ Otimizar imagens antes de publicar
✔ Usar formatos modernos (WebP quando possível)

---

## 🔊 Tag `<audio>` - Áudio

### Exemplo Completo

```html
<audio controls autoplay loop>
  <source src="musica.mp3" type="audio/mpeg" />
  <source src="musica.ogg" type="audio/ogg" />
  Seu navegador não suporta áudio HTML5.
</audio>
```

### Atributos Chave

| Atributo   | Efeito                 | Valores  |
| ---------- | ---------------------- | -------- |
| `controls` | Mostra player          | Booleano |
| `autoplay` | Inicia automaticamente | Booleano |
| `loop`     | Repetição contínua     | Booleano |
| `muted`    | Áudio silenciado       | Booleano |

---

## 📹 Tag `<video>` - Vídeos

### Implementação Recomendada

```html
<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track src="legendas.vtt" kind="subtitles" srclang="pt" label="Português" />
  Seu navegador não suporta vídeos HTML5.
</video>
```

### Formatos Suportados

- MP4 (H.264 + AAC)
- WebM (VP8/VP9 + Opus/Vorbis)
- Ogg (Theora + Vorbis)

---

## 📌 Tag `<track>` - Legendas

### Uso com Vídeos

```html
<track src="legendas_pt.vtt" kind="subtitles" srclang="pt" label="Português" default />
```

### Tipos de Faixas

| `kind`      | Finalidade              |
| ----------- | ----------------------- |
| `subtitles` | Legendas (tradução)     |
| `captions`  | Legendas descritivas    |
| `chapters`  | Navegação por capítulos |
| `metadata`  | Dados para scripts      |

---

## 🌐 Tag `<iframe>` - Conteúdo Externo

### Incorporação Segura

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560"
  height="315"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

### Principais Atributos

| Atributo          | Função                      |
| ----------------- | --------------------------- |
| `allowfullscreen` | Permite tela cheia          |
| `sandbox`         | Restrições de segurança     |
| `loading`         | Carregamento lento (`lazy`) |

---

## 🚀 Dicas Avançadas

### Otimização de Performance

```html
<!-- Carregamento lento para imagens -->
<img src="imagem.jpg" loading="lazy" alt="..." />

<!-- Pré-conexão para recursos externos -->
<link rel="preconnect" href="https://fonts.gstatic.com" />
```

### Acessibilidade

- Sempre fornecer alternativas textuais
- Usar `aria-label` para iframes complexos
- Testar com leitores de tela

---

## 📚 Recursos Adicionais

- [MDN Web Docs - Imagens](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/img)
- [HTML5 Video Player Comparison](https://html5video.org/)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
