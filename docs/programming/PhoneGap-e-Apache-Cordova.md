# PhoneGap e Apache Cordova: Desenvolvimento de Aplicativos Híbridos

## 🌐 Visão Geral

Ferramentas para criar apps móveis usando **HTML, CSS e JavaScript**, empacotados como nativos para Android/iOS.

### Como Funciona:

1. **Aplicação Web**: Interface construída com tecnologias web
2. **API Nativa**: Acesso a recursos do dispositivo via JavaScript
3. **Empacotamento**: Contêiner nativo para distribuição em lojas

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos:

| Ferramenta  | Comando/Link                                               |
| ----------- | ---------------------------------------------------------- |
| Node.js     | [Download Node.js](https://nodejs.org)                     |
| Cordova     | `npm install -g cordova`                                   |
| JDK         | [Download JDK](https://oracle.com/java)                    |
| Android SDK | Via [Android Studio](https://developer.android.com/studio) |

**Configure variáveis de ambiente**:

```bash
export ANDROID_HOME=/caminho/para/android-sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

---

## 🚀 Passo a Passo para Desenvolvimento

### 1. Criar Projeto

```bash
cordova create meuApp com.exemplo.meuapp MeuApp
cd meuApp
cordova platform add android
```

### 2. Desenvolver App

- Edite arquivos na pasta `www/` (HTML/CSS/JS)
- Adicione plugins nativos:
  ```bash
  cordova plugin add cordova-plugin-camera
  ```

**Exemplo: Acessar Câmera**

```javascript
navigator.camera.getPicture(
  (photo) => console.log(photo),
  (error) => console.error(error),
  { quality: 50, destinationType: Camera.DestinationType.DATA_URL }
);
```

### 3. Testar no Dispositivo

```bash
cordova run android  # Requer depuração USB ativada
```

---

## 📦 Publicação na Play Store

### 1. Build para Produção

```bash
cordova build android --release
```

### 2. Assinar APK

```bash
# Gerar keystore (execute uma vez)
keytool -genkey -v -keystore meuapp.keystore -alias meuapp -keyalg RSA -keysize 2048 -validity 10000

# Assinar APK
jarsigner -verbose -keystore meuapp.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk meuapp

# Otimizar
zipalign -v 4 app-release-unsigned.apk MeuApp.apk
```

### 3. Publicar

1. Crie conta no [Google Play Console](https://play.google.com/console) (US$ 25)
2. Faça upload do APK (`MeuApp.apk`)
3. Preencha metadados (descrição, screenshots)
4. Envie para revisão

---

## 🔌 Plugins Úteis

| Plugin      | Comando                          | Recursos Acessados    |
| ----------- | -------------------------------- | --------------------- |
| Camera      | `cordova plugin add camera`      | Câmera do dispositivo |
| Geolocation | `cordova plugin add geolocation` | GPS                   |
| File        | `cordova plugin add file`        | Sistema de arquivos   |

---

## ⚖️ Vantagens vs. Desvantagens

**✔️ Prós**:

- Código único para múltiplas plataformas
- Baixa curva de aprendizado (web devs)
- Acesso a recursos nativos

**❌ Contras**:

- Performance inferior a apps nativos
- Dependência de WebView
- Limitações em UI complexa

---

## 📚 Conclusão

PhoneGap/Cordova é ideal para:

- MVP rápidos
- Apps com funcionalidades básicas
- Equipes com expertise em web

> **Dica**: Use [PhoneGap Build](https://build.phonegap.com) para compilar na nuvem sem configurar SDKs! ☁️
