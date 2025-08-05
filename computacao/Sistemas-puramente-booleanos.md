# Sistemas Booleanos no Cotidiano

## Aplicações Práticas

### 1. Controle de Acesso

- **Variáveis**:
  - `isAdmin`
  - `isActive`
  - `isLoggedIn`
- **Lógica**:
  ```java
  if (isAdmin && isActive && isLoggedIn) {
      grantAccess();
  }
  ```

### 2. Alarme Residencial

- **Sensores**:
  - `doorOpen`
  - `windowOpen`
  - `motionDetected`
- **Ativação**:
  ```python
  alarm_triggered = doorOpen or windowOpen or motionDetected
  ```

### 3. Iluminação Inteligente

- **Condições**:
  ```javascript
  lightsOn = (presenceDetected && !naturalLightSufficient) || manualOverride;
  ```

## Sistema para Aulas de Música Online

### Componentes Principais

| Módulo       | Variáveis Booleanas                   | Lógica de Controle                                      |
| ------------ | ------------------------------------- | ------------------------------------------------------- |
| Presença     | `studentPresent`, `teacherPresent`    | `lessonCanStart = studentPresent && teacherPresent`     |
| Acesso       | `isEnrolled`, `paymentComplete`       | `canAccess = isEnrolled && paymentComplete`             |
| Progresso    | `lessonComplete`, `homeworkSubmitted` | `updateProgress = lessonComplete && homeworkSubmitted`  |
| Notificações | `needsReminder`, `notificationSent`   | `sendNotification = needsReminder && !notificationSent` |

### Exemplo de Implementação

```java
public class MusicLessonSystem {
    boolean studentPresent = true;
    boolean teacherPresent = true;

    void checkLessonStart() {
        if (studentPresent && teacherPresent) {
            System.out.println("Aula iniciada");
            checkAccess();
        }
    }

    void checkAccess() {
        if (isEnrolled && paymentComplete) {
            monitorProgress();
        }
    }
}
```

## Vantagens dos Sistemas Booleanos

1. **Simplicidade**: Lógica clara com true/false
2. **Eficiência**: Processamento rápido
3. **Confiabilidade**: Resultados previsíveis

## Caso Especial: Controle de Irrigação

```arduino
void setup() {
  pinMode(soilSensor, INPUT);
  pinMode(waterPump, OUTPUT);
}

void loop() {
  bool soilDry = digitalRead(soilSensor);
  digitalWrite(waterPump, soilDry);
}
```

## Conclusão

Sistemas booleanos oferecem:

- Soluções robustas para automação
- Fácil implementação em diversos contextos
- Baixo custo computacional

_Ideal para aplicações onde decisões são baseadas em condições claras de sim/não._
