# Rainbow Tables: Ataques de Força Bruta

## O que são Rainbow Tables?

Tabelas pré-computadas que mapeiam hashes para senhas correspondentes, permitindo quebrar hashes de senhas de forma mais eficiente que a força bruta tradicional.

## Como Funcionam?

1. **Função Hash**: Converte senhas em valores fixos (hashes)
2. **Função de Redução**: Transforma hashes de volta em possíveis senhas
3. **Cadeias**: Sequências de senha → hash → senha → hash...
   - Tabela armazena apenas senha inicial e hash final de cada cadeia
4. **Ataque**: Compara hash alvo com hashes finais para encontrar correspondência

## Processo de Construção

1. Selecionar espaço de senhas possíveis
2. Aplicar repetidamente:
   ```
   senha → hash → redução → nova "senha"
   ```
3. Armazenar apenas:
   - Senha inicial
   - Hash final da cadeia

## Aplicação em Ataques

1. Obter hash alvo (ex: banco de dados vazado)
2. Buscar hash na tabela
3. Se encontrado, reconstruir cadeia para revelar senha

## Defesas Efetivas

| Técnica            | Como Protege                                                   |
| ------------------ | -------------------------------------------------------------- |
| **Salting**        | Adiciona valor aleatório único a cada senha antes de hashear   |
| **Funções Lentas** | bcrypt, scrypt, Argon2 aumentam custo computacional            |
| **Senhas Fortes**  | Tamanho/complexidade aumentam espaço de chave exponencialmente |

## Vantagens vs Desvantagens

**✔ Vantagens**:

- Reduz tempo de quebra de hashes
- Eficaz contra hashes não-protegidos

**✖ Desvantagens**:

- Requer grande armazenamento
- Inútil contra hashes com salt
- Inviável para senhas muito complexas

## Conclusão

Rainbow tables representam risco significativo para sistemas mal protegidos. A combinação de:

- Salting único
- Funções hash lentas
- Políticas de senhas robustas

torna esses ataques impraticáveis, garantindo melhor segurança para credenciais de usuários.

O markdown foi organizado com:

- Seções lógicas claras
- Tabelas comparativas
- Listas de processos
- Destaque para termos técnicos
- Formatação limpa e consistente
- Ênfase nas informações de segurança mais relevantes
