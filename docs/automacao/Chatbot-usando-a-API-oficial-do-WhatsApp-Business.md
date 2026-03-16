# Chatbot no WhatsApp Business: Guia Completo

## 📌 Visão Geral

**Solução Oficial vs Alternativas**
| Método | Custo Mensal Estimado | Complexidade | Personalização |
|----------------------|-----------------------|--------------|----------------|
| API WhatsApp + n8n | R$30-R$50 | Média | Limitada |
| API WhatsApp + Python| R$10-R$30 | Alta | Total |

## 🔧 Implementação com Python + Vercel

### Pré-requisitos

- Número de telefone novo (R$10-R$20)
- Conta no Facebook Developers
- Python 3.8+ instalado

### Passo a Passo Técnico

1. **Configuração Inicial**

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install flask requests
```

2. **Código Base (app.py)**

```python
from flask import Flask, request
import requests

app = Flask(__name__)
WHATSAPP_TOKEN = 'SEU_TOKEN'
PHONE_ID = 'SEU_NUMERO_ID'

@app.route('/webhook', methods=['POST'])
def handle_message():
    data = request.json
    user_msg = data['entry'][0]['changes'][0]['value']['messages'][0]['text']['body']
    response = f"Você disse: {user_msg}"

    requests.post(
        f"https://graph.facebook.com/v17.0/{PHONE_ID}/messages",
        headers={'Authorization': f'Bearer {WHATSAPP_TOKEN}'},
        json={
            "messaging_product": "whatsapp",
            "to": data['entry'][0]['changes'][0]['value']['messages'][0]['from'],
            "text": {"body": response}
        }
    )
    return '', 200
```

3. **Deploy na Vercel**

```bash
npm install -g vercel
vercel login
echo '{
  "version": 2,
  "builds": [{"src": "app.py", "use": "@vercel/python"}],
  "routes": [{"src": "/(.*)", "dest": "app.py"}]
}' > vercel.json
vercel
```

## 💰 Modelo de Custos (Exemplo para 100 usuários/mês)

| Item                      | Custo Unitário | Custo Total |
| ------------------------- | -------------- | ----------- |
| Chip SIM                  | R$15           | R$15        |
| 200 mensagens utilitárias | US$0.005/cada  | R$5.20      |
| Vercel (plano free)       | Grátis         | R$0         |
| **Total**                 |                | **R$20.20** |

## 🚀 Melhorias Recomendadas

1. **Persistência de Dados**
   - Adicionar MongoDB Atlas (free tier)

   ```python
   from pymongo import MongoClient
   client = MongoClient("sua_string_conexao")
   db = client["chatbot_db"]
   ```

2. **Processamento Avançado**
   - Integrar com GPT-3.5-turbo (US$0.002/1k tokens)

   ```python
   response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=[{"role": "user", "content": user_msg}]
   )
   ```

3. **Monitoramento**
   - Configurar logs na Vercel
   - Usar Sentry (free tier)

## ⚠️ Limitações Importantes

- **Tempo de Resposta**: Máx. 5s na Vercel free
- **Webhooks**: Necessário endpoint HTTPS
- **Tarifação WhatsApp**: Cobrança por sessão (24h)

_Documentação Oficial: [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp/cloud-api/)_
