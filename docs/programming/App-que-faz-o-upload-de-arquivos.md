# Aplicativo de Upload de Arquivos com TypeScript e Cloudflare R2/S3

## 🌐 Configuração Inicial

### 1. Instalação de Dependências

```bash
npm init -y
tsc --init
npm install zod dotenv typescript @types/node express
npm install --save-dev ts-node @types/express
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

### 2. Variáveis de Ambiente (`.env`)

```env
DATABASE_URL=your_db_url
ENDPOINT_URL=https://your.cloudflare.endpoint
CLOUDFLARE_ACCESS_KEY=your_key
CLOUDFLARE_SECRET_KEY=your_secret
```

---

## 🔒 Validação com Zod

### `env.ts`

```typescript
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  ENDPOINT_URL: z.string().url(),
  CLOUDFLARE_ACCESS_KEY: z.string(),
  CLOUDFLARE_SECRET_KEY: z.string(),
});

export default envSchema.parse(process.env);
```

---

## ☁️ Configuração do Cloudflare R2/S3

### `storage.ts`

```typescript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import env from "./env";

const s3Client = new S3Client({
  endpoint: env.ENDPOINT_URL,
  region: "auto",
  credentials: {
    accessKeyId: env.CLOUDFLARE_ACCESS_KEY,
    secretAccessKey: env.CLOUDFLARE_SECRET_KEY,
  },
});

export async function generateUploadUrl(bucket: string, filename: string, filetype: string) {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: filename,
    ContentType: filetype,
  });

  return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
}
```

---

## 🚀 Rota de Upload (Express)

### `uploadRoute.ts`

```typescript
import { Router } from "express";
import { z } from "zod";
import { generateUploadUrl } from "./storage";

const router = Router();

const uploadSchema = z.object({
  fileName: z.string().min(1),
  contentType: z.string().regex(/^(video|image)\//),
});

router.post("/upload", async (req, res) => {
  try {
    const { fileName, contentType } = uploadSchema.parse(req.body);
    const url = await generateUploadUrl("my-bucket", fileName, contentType);
    res.json({ url });
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : "Invalid request" });
  }
});

export default router;
```

---

## 🖥️ Servidor Principal

### `app.ts`

```typescript
import express from "express";
import dotenv from "dotenv";
import uploadRoute from "./uploadRoute";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", uploadRoute);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

## 🔍 Testando a API

### Requisição (cURL)

```bash
curl -X POST http://localhost:3000/api/upload \
  -H "Content-Type: application/json" \
  -d '{"fileName":"example.mp4","contentType":"video/mp4"}'
```

### Resposta Esperada

```json
{
  "url": "https://...presigned-url..."
}
```

---

## 🛠️ Extensões VS Code Recomendadas

| Extensão        | Benefício                                |
| --------------- | ---------------------------------------- |
| **Zod**         | Validação de tipos em tempo real         |
| **AWS Toolkit** | Gerenciamento de recursos AWS/Cloudflare |
| **REST Client** | Testar APIs diretamente no editor        |

---

## 📌 Melhores Práticas

1. **Segurança**:
   - Restrinja tipos de arquivo (`contentType`)
   - Use URLs assinadas com expiração
2. **Monitoramento**:
   - Logue uploads bem-sucedidos/falhos
3. **Escalabilidade**:
   - Considere filas (SQS/RabbitMQ) para processamento assíncrono

> **Dica**: Para frontend, use `fetch` com a URL assinada para upload direto do navegador!
