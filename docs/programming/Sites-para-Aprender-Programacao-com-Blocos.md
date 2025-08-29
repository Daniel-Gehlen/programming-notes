# Sites Gratuitos para Aprender Programação com Blocos

Aqui estão alguns sites gratuitos e confirmados que permitem aprender programação usando blocos visuais, sem necessidade de digitar código:

## Principais Plataformas

- **Code.org** - https://code.org/
  Um dos mais conhecidos, com cursos para todas as idades usando blocos visuais.

- **Scratch** - https://scratch.mit.edu/
  Desenvolvido pelo MIT, permite criar histórias, jogos e animações com blocos.

- **Blockly Games** - https://blockly.games/
  Série de jogos educativos que ensinam programação usando Blockly.

- **App Inventor** - http://appinventor.mit.edu/
  Crie aplicativos Android usando blocos visuais (requer conta Google).

- **Alice** - https://www.alice.org/
  Ensina programação orientada a objetos através de ambientes 3D.

- **Snap!** - https://snap.berkeley.edu/
  Versão avançada do Scratch, com recursos mais sofisticados.

## Como Utilizar

Criei uma página HTML que organiza esses recursos com links diretos e breves descrições:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aprenda Programação com Blocos</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      body {
        background-color: #f5f7fa;
        color: #333;
        line-height: 1.6;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }

      header {
        text-align: center;
        padding: 30px 0;
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        color: white;
        border-radius: 10px;
        margin-bottom: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
      }

      .subtitle {
        font-size: 1.2rem;
        opacity: 0.9;
      }

      .resources-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin-bottom: 40px;
      }

      .resource-card {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }

      .resource-card:hover {
        transform: translateY(-5px);
      }

      .card-content {
        padding: 20px;
      }

      .resource-card h3 {
        color: #6e8efb;
        margin-bottom: 10px;
        font-size: 1.4rem;
      }

      .resource-card p {
        color: #666;
        margin-bottom: 20px;
        height: 80px;
        overflow: hidden;
      }

      .resource-card a {
        display: inline-block;
        background-color: #6e8efb;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s;
      }

      .resource-card a:hover {
        background-color: #5a7de4;
      }

      footer {
        text-align: center;
        padding: 20px;
        margin-top: 30px;
        color: #666;
        font-size: 0.9rem;
      }

      @media (max-width: 768px) {
        .resources-grid {
          grid-template-columns: 1fr;
        }

        h1 {
          font-size: 2rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>Aprenda Programação com Blocos</h1>
        <p class="subtitle">
          Recursos gratuitos para iniciar na programação sem digitar código
        </p>
      </header>

      <div class="resources-grid">
        <div class="resource-card">
          <div class="card-content">
            <h3>Code.org</h3>
            <p>
              Plataforma com cursos para todas as idades, desde o ensino
              fundamental até conceitos mais avançados de ciência da computação.
            </p>
            <a href="https://code.org/" target="_blank">Acessar Site</a>
          </div>
        </div>

        <div class="resource-card">
          <div class="card-content">
            <h3>Scratch</h3>
            <p>
              Crie histórias, jogos e animações compartilhe com outras pessoas
              em toda a comunidade online.
            </p>
            <a href="https://scratch.mit.edu/" target="_blank">Acessar Site</a>
          </div>
        </div>

        <div class="resource-card">
          <div class="card-content">
            <h3>Blockly Games</h3>
            <p>
              Série de jogos educativos que ensinam programação. É destinado a
              crianças que não têm experiência anterior em computação.
            </p>
            <a href="https://blockly.games/" target="_blank">Acessar Site</a>
          </div>
        </div>

        <div class="resource-card">
          <div class="card-content">
            <h3>App Inventor</h3>
            <p>
              Crie aplicativos Android funcionais usando blocos visuais. Requer
              uma conta Google para acessar.
            </p>
            <a href="http://appinventor.mit.edu/" target="_blank"
              >Acessar Site</a
            >
          </div>
        </div>

        <div class="resource-card">
          <div class="card-content">
            <h3>Alice</h3>
            <p>
              Ambiente de programação 3D que facilita a criação de animações
              para contar histórias, jogos ou vídeos.
            </p>
            <a href="https://www.alice.org/" target="_blank">Acessar Site</a>
          </div>
        </div>

        <div class="resource-card">
          <div class="card-content">
            <h3>Snap!</h3>
            <p>
              Uma linguagem de programação visual baseada em blocos, inspirada
              no Scratch, mas com recursos mais avançados.
            </p>
            <a href="https://snap.berkeley.edu/" target="_blank"
              >Acessar Site</a
            >
          </div>
        </div>
      </div>

      <footer>
        <p>
          Estes sites são totalmente gratuitos e confirmados. Ideal para
          iniciantes, crianças e educadores.
        </p>
        <p>© 2023 - Recursos para Aprendizado de Programação</p>
      </footer>
    </div>
  </body>
</html>
```

## Recursos Adicionais

Além desses, você também pode explorar:

- **CodeCombat** - https://codecombat.com/ (oferece modo com blocos)
- **Tynker** - https://www.tynker.com/ (parte gratuita com blocos)
- **Microsoft MakeCode** - https://www.microsoft.com/en-us/makecode (para diversos dispositivos)
