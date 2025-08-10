# APNG (Animated Portable Network Graphics)

## Introdução

O **APNG (Animated Portable Network Graphics)** é uma extensão do formato PNG que adiciona suporte a animações, permitindo combinar múltiplas imagens em um único arquivo para criar sequências animadas. Mantém todas as vantagens do PNG estático, incluindo compressão sem perda e suporte a transparência.

---

## Características do Formato APNG

### Baseado no PNG

- Utiliza a mesma estrutura do PNG estático, preservando:
  - **Compressão sem perda**
  - **Suporte a transparência alpha-channel**
  - **Armazenamento de metadados**

### Suporte a Animações

- Permite incluir **múltiplos frames** em um único arquivo.
- Cada frame pode ter:
  - Tempo de exibição personalizado.
  - Transparência independente.

### Compatibilidade

- Suportado pela maioria dos **navegadores modernos** (Chrome, Firefox, Edge, Safari).
- Alternativa superior ao GIF para animações na web, com melhor qualidade e eficiência.

### Desempenho e Qualidade

- **Vantagens sobre o GIF**:
  - Maior profundidade de cor (Truecolor).
  - Compressão mais eficiente (tamanho de arquivo menor).
  - Transparência alpha-channel (sem bordas serrilhadas).

### Ferramentas

- Editores: **GIMP, Photoshop** (com plugins).
- Bibliotecas: `apng` (Python), `libapng`.
- Visualizadores: Navegadores modernos, aplicativos dedicados.

---

## Implementação em Python

Exemplo de manipulação de arquivos APNG usando a biblioteca `apng`:

```python
import apng

# Abrir um arquivo APNG
apng_path = 'example.apng'
apng_image = apng.APNG()
apng_image.open_file(apng_path)

# Mostrar informações básicas
print(f"Frames: {len(apng_image.frames)}")
print(f"Duração total: {apng_image.play_time:.2f} segundos")

# Reproduzir a animação
apng_image.play()

# Fechar o arquivo
apng_image.close()
```

---

## Comparação com Outros Formatos

| Característica     | APNG                   | GIF                | PNG Estático  |
| ------------------ | ---------------------- | ------------------ | ------------- |
| Animação           | ✅ Sim                 | ✅ Sim             | ❌ Não        |
| Cores              | 16 milhões (Truecolor) | 256                | 16 milhões    |
| Transparência      | Alpha-channel          | 1 cor transparente | Alpha-channel |
| Compressão         | Sem perda              | Sem perda (LZW)    | Sem perda     |
| Tamanho do Arquivo | Menor (vs GIF)         | Maior              | Variável      |

---

## Considerações Finais

- **APNG** é ideal para:
  - Animações web de alta qualidade.
  - Gráficos vetoriais animados.
  - Conteúdo que exige transparência avançada.
- **Fatores de escolha**:
  - Suporte do navegador (APNG > GIF em qualidade).
  - Tipo de conteúdo (fotografias vs gráficos).
  - Necessidade de transparência alpha.
