# Classes abstratas e interfaces em C#

## Semelhanças entre classes abstratas e interfaces em C#

No C#, tanto as classes abstratas quanto as interfaces seguem os mesmos princípios gerais vistos em Java, mas com algumas diferenças específicas da linguagem. Aqui está uma explicação e exemplo prático para C#:

### Semelhanças entre classes abstratas e interfaces em C#:

- **Métodos sem implementação:**
  Ambos podem definir métodos sem corpo (a implementação real deve ser fornecida por classes derivadas ou que implementam a interface).
- **Não podem ser instanciados diretamente:**
  Nenhuma das duas pode ser usada para criar objetos diretamente; você precisa herdar (classes abstratas) ou implementar (interfaces).

### Diferenças principais:

#### Classes abstratas:

- Podem ter métodos com ou sem implementação.
- Permitem definir campos (atributos) com diferentes níveis de acesso (`public`, `protected`, etc.).
- Suportam construtores para inicialização de valores padrão para subclasses.
- Herança simples: uma classe só pode herdar de uma classe abstrata.

#### Interfaces:

- Todos os membros são públicos por padrão (até C# 7.3; a partir do C# 8.0, é possível ter métodos com implementações padrão usando `default interface methods`).
- Não podem conter campos ou construtores.
- Suportam herança múltipla: uma classe pode implementar várias interfaces.

---

## Criando uma classe abstrata em C#:

```csharp
public abstract class Ninja {
    public string Nome { get; set; }
    public string Aldeia { get; set; }
    public int Idade { get; set; }

    // Método abstrato (obrigatório implementar nas subclasses)
    public abstract void ExibirHabilidades();

    // Método com implementação (opcional para sobrescrever)
    public virtual void Cumprimentar() {
        Console.WriteLine($"Olá, eu sou {Nome} da aldeia {Aldeia}!");
    }
}
```

### Exemplo de classe concreta que herda da classe abstrata:

```csharp
public class NinjaDeKonoha : Ninja {
    public override void ExibirHabilidades() {
        Console.WriteLine($"{Nome} usa jutsus avançados!");
    }
}
```

---

## Criando uma interface em C#:

```csharp
public interface INinja {
    string Nome { get; set; }
    void ExibirHabilidades();
}
```

### Exemplo de classe que implementa a interface:

```csharp
public class NinjaDeKumo : INinja {
    public string Nome { get; set; }

    public void ExibirHabilidades() {
        Console.WriteLine($"{Nome} usa relâmpago e velocidade!");
    }
}
```

---

## Principais diferenças em prática:

### Classe abstrata:

- Usada para representar hierarquia (relação "é um").
- Fornece funcionalidade básica que as subclasses podem compartilhar ou sobrescrever.

```csharp
Ninja ninja = new NinjaDeKonoha() {
    Nome = "Kakashi",
    Aldeia = "Konoha",
    Idade = 30
};

ninja.Cumprimentar();
ninja.ExibirHabilidades();
```

### Interface:

- Usada para definir um contrato de comportamento (relação "faz").
- Permite que uma classe implemente múltiplas interfaces.

```csharp
INinja ninja = new NinjaDeKumo() {
    Nome = "Darui"
};

ninja.ExibirHabilidades();
```

---

## Resumo visual:

| Aspecto               | Classe Abstrata   | Interface                     |
| --------------------- | ----------------- | ----------------------------- |
| Herança múltipla      | Não               | Sim                           |
| Atributos             | Sim               | Não                           |
| Métodos implementados | Sim               | Sim (desde C# 8.0)            |
| Finalidade            | Modelar um "é um" | Modelar "faz" (comportamento) |

Essa distinção reflete os mesmos conceitos de Java, mas ajustados para a sintaxe e recursos do C#.
