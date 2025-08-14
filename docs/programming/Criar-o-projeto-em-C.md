# Criando um Projeto em C# - Guia Rápido

## Passo a Passo para Configuração Inicial

### 1. Criando a Solução

```mermaid
graph TD
    A[File > Open Folder] --> B[Criar pasta "Projetos C#"]
    B --> C[Create New Solution]
    C --> D[Nomear projeto]
```

**O que acontece**:

- O VS Code cria:
  - Arquivo `.sln` (controle da solução)
  - Pasta `src/` com projeto principal
  - Arquivos de configuração `.vscode/`

### 2. Adicionando Novos Projetos

```bash
dotnet new console -n MeuProjeto
dotnet sln add MeuProjeto/
```

**Estrutura resultante**:

```
MinhaSolucao.sln
├── src/
│   ├── ProjetoPrincipal/
│   │   └── Program.cs
│   └── MeuProjeto/
│       └── Program.cs
```

### 3. Configuração do Debug (launch.json)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": ".NET Core Launch (console)",
      "type": "coreclr",
      "request": "launch",
      "console": "externalTerminal",
      "program": "${workspaceFolder}/bin/Debug/net7.0/MeuProjeto.dll"
    }
  ]
}
```

### 4. Código Básico em Program.cs

```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Olá Mundo C#!");
        Console.WriteLine("\nPressione qualquer tecla para sair...");
        Console.ReadKey(); // Mantém terminal aberto
    }
}
```

## Dicas Importantes

1. **Atalhos VS Code**:

   - `Ctrl+Shift+P` > `.NET: New Project`
   - `F5` para debug

2. **Gerenciamento de Pacotes**:

   ```bash
   dotnet add package NomeDoPacote
   ```

3. **Estrutura Recomendada**:
   - `src/` para projetos principais
   - `test/` para projetos de teste
   - `lib/` para dependências

> **Nota**: Para projetos profissionais, considere usar:
>
> - `dotnet new gitignore` para arquivos ignorados
> - `dotnet new sln` para soluções complexas
> - `dotnet watch run` para desenvolvimento com hot-reload
