# Perfecting Imperfect Software Creators

---

### **1. Introdução ao Software Livre e GPL**

- **Definição**:

  - Software livre respeita 4 liberdades: uso, estudo, modificação e distribuição.
  - GPL (GNU General Public License) garante essas liberdades via copyleft.

- **Figuras-chave**:
  - Richard Stallman (GNU)
  - Linus Torvalds (Linux)

**Exemplo em Python**:

```python
def calcular_quadrado(numero):
    return numero ** 2
```

Fluxo:

```
Início → calcular_quadrado() → Retorna quadrado → Fim
```

---

### **2. História do Emacs e Disputa com Unipress**

- **Evolução**:
  - GosMacs (James Gosling) → GNU Emacs (Stallman).
- **Conflito**: Venda dos direitos para Unipress → Criação da Emacs GPL.

**Exemplo em Emacs Lisp**:

```lisp
(defun contar-palavras (texto)
  (length (split-string texto)))
```

Fluxo:

```
Início → contar-palavras() → Divide e conta → Retorna total → Fim
```

---

### **3. Stallman, GPL e Java**

- **Impacto**:
  - Experiência com Emacs influenciou a defesa de Stallman pelo copyleft.
  - Relutância inicial de Gosling em licenciar Java sob GPL.

**Exemplo em Java (GPL)**:

```java
public class MinhaClasse {
    private int valor;
    public MinhaClasse(int valorInicial) {
        this.valor = valorInicial;
    }
}
```

Fluxo:

```
Início → Define classe → Cria objeto → Retorna valor → Fim
```

---

### **4. OpenJDK e Desafios Legais**

- **Contexto**:
  - OpenJDK como alternativa livre ao Java da Sun.
  - Aquisição pela Oracle → Desafios de compatibilidade com GPL.

**Exemplo com OpenJDK**:

```java
Path caminho = Paths.get("arquivo.txt");
String conteudo = new String(Files.readAllBytes(caminho));
```

Fluxo:

```
Início → Importa OpenJDK → Lê arquivo → Exibe conteúdo → Fim
```

---

### **5. Lições Aprendidas**

- **Licenças claras** são vitais para proteger liberdades.
- **Comunidades** fortalecem a sustentabilidade do software livre.

---

### **6. Considerações Finais**

> "O software livre é uma construção coletiva, onde imperfeições humanas e disputas legais moldam ferramentas que democratizam a tecnologia."

**Principais destaques**:

- Diagramas ASCII para fluxos de código.
- Exemplos práticos em Python, Lisp e Java.
- Contexto histórico das disputas de licenciamento.
