# Commerce Headless: Overview & Code

---

### **Explicação do Comércio Headless**

Arquitetura que separa:

- **Front-end** (camada de apresentação)
- **Back-end** (camada de dados e lógica)

**Objetivo**: Permitir evolução independente das camadas, garantindo flexibilidade e personalização.

---

### **Vantagens do Comércio Headless**

#### **1. Personalização Omnicanal**

- Experiência do usuário customizável em múltiplos canais (site, app, redes sociais) sem alterar o back-end.

#### **2. Dimensionamento Independente**

- Escalabilidade separada para front-end (tráfego) e back-end (processamento).

#### **3. Menor Time-to-Market**

- Atualizações rápidas no front-end sem impactar o back-end, e vice-versa.

---

### **Arquitetura Headless**

```
+------------------+        +------------------+
|   Front-end      |        |   Back-end       |
|   - Sites        |<-----> |   - APIs REST    |
|   - Apps móveis  |        |   - Microservices|
+------------------+        +------------------+
        ^                            ^
        |                            |
        +--------> API Gateway <-----+
```

---

### **Exemplo de Código**

#### **Back-end (Node.js + Express + MongoDB)**

```javascript
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Conexão com MongoDB
mongoose.connect("mongodb://localhost:27017/headlessCommerce");

// Modelo de Produto
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
  })
);

// Rotas
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/api/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
```

#### **Front-end (React)**

```javascript
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Preço: R${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### **Conclusão**

- **Benefícios**: Flexibilidade, escalabilidade e agilidade.
- **Aplicação**: Ideal para e-commerces multicanais com necessidades de personalização avançada.

> "Headless commerce desacopla front-end e back-end, acelerando inovações e melhorando a experiência do cliente."
