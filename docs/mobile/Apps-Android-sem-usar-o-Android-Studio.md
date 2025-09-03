# **Apps Android sem usar o Android Studio"**

---

## **1. Frameworks Cross-Platform**

### **Flutter (Dart)**

- **Pré-visualização**:
  ```bash
  flutter run -d chrome  # Visualização no navegador
  ```
- **Build APK**:
  ```bash
  flutter build apk --release
  ```
- **Ferramentas**:
  - **VS Code** + Extensão Flutter.

### **React Native (JavaScript/TypeScript)**

- **Pré-visualização**:
  ```bash
  expo start --web  # Expo Web
  ```
- **Build APK**:
  ```bash
  expo build:android
  ```
- **IDE Alternativa**: VS Code.

### **Ionic (HTML/CSS/JS)**

- **Pré-visualização**:
  ```bash
  ionic serve  # Navegador
  ```
- **Build APK**:
  ```bash
  ionic capacitor build android
  ```

---

## **2. Editores Alternativos + Emulador**

### **VS Code para Kotlin/Java**

- **Extensões**:
  - "Android for VS Code" (snippets, autocomplete).
- **Compilação Manual**:
  ```bash
  ./gradlew assembleDebug  # Build APK
  ```

### **Emuladores Leves**

- **Genymotion**:
  - Emulador rápido (sem Android Studio).
- **AVD via CLI**:
  ```bash
  emulator -avd MeuAVD -no-boot-anim
  ```

---

## **3. Plataformas Online (Sem Instalação)**

| **Ferramenta**  | **Link**                                 | **Funcionalidade**               |
| --------------- | ---------------------------------------- | -------------------------------- |
| **Expo Snack**  | [snack.expo.dev](https://snack.expo.dev) | Teste React Native no navegador. |
| **FlutterFlow** | [flutterflow.io](https://flutterflow.io) | Desenvolvimento visual low-code. |

---

## **4. Build por Linha de Comando**

### **Passos Manuais**

1. Instale o **Android SDK** standalone.
2. Use **Gradle** para builds:
   ```bash
   ./gradlew installDebug  # Instala no emulador
   ```
3. Teste em serviços como **BrowserStack**.

---

## **5. Cloud Build (CI/CD)**

- **GitHub Actions**:
  ```yaml
  # Exemplo de workflow para build Android
  - name: Build APK
    run: ./gradlew assembleDebug
  ```
- **Codemagic/Bitrise**: CI/CD especializado para mobile.

---

## **Resumo das Opções**

| **Método**              | **Linguagem** | **Pré-visualização sem Device** | **Gera APK?** |
| ----------------------- | ------------- | ------------------------------- | ------------- |
| **Flutter**             | Dart          | Sim (Web)                       | Sim           |
| **React Native + Expo** | JavaScript    | Sim (Expo Web)                  | Sim           |
| **Ionic**               | HTML/JS       | Sim (Navegador)                 | Sim           |
| **VS Code + SDK**       | Kotlin/Java   | Não (requer emulador)           | Sim           |
| **Plataformas Online**  | Varia         | Sim (nuvem)                     | Às vezes      |

### **Recomendações**

- **Para início rápido**: Flutter ou React Native com Expo.
- **Para desenvolvimento nativo**: VS Code + SDK + Gradle.

---

## **Comando Útil para Emulador**

```bash
emulator -avd NovoEmulador -no-audio -memory 2048 -no-boot-anim
```

---
