# wget

O comando `wget` é uma ferramenta de linha de comando amplamente utilizada em sistemas Unix e Linux para baixar arquivos da web através do protocolo HTTP, HTTPS e FTP. Ele oferece uma maneira simples e eficiente de realizar download de arquivos diretamente da linha de comando, sem a necessidade de um navegador web.

## Funcionalidades Principais do wget:

### Download Simples

```bash
wget <URL>
```

**Descrição**:
Baixa o arquivo especificado pela `<URL>` para o diretório atual.

### Especificar Local de Salvamento

```bash
wget -O <nome_arquivo_local> <URL>
```

**Descrição**:
Utilizando a opção `-O`, você pode especificar o nome do arquivo local que deseja salvar.

### Continuar Downloads Interrompidos

```bash
wget -c <URL>
```

**Descrição**:
Se um download for interrompido, a opção `-c` permite continuar o download a partir do ponto onde parou.

### Limitar Largura de Banda

```bash
wget --limit-rate=<velocidade> <URL>
```

**Descrição**:
Limita a taxa de download para a `<velocidade>` especificada em bytes por segundo (ex: `500k` para 500KB/s).

### Baixar Recursivamente

```bash
wget -r <URL>
```

**Descrição**:
Baixa os arquivos recursivamente, incluindo arquivos linkados a partir da URL especificada (útil para baixar sites inteiros).

### Autenticação HTTP

```bash
wget --user=<usuário> --password=<senha> <URL>
```

**Descrição**:
Utiliza credenciais para acessar URLs protegidas por autenticação HTTP básica.

### Ignorar Certificados SSL Inválidos

```bash
wget --no-check-certificate <URL>
```

**Descrição**:
Ignora erros de certificado SSL ao baixar de sites com certificados auto-assinados ou inválidos.

## Exemplos de Uso:

### Download básico:

```bash
wget https://example.com/arquivo.zip
```

### Download com nome personalizado:

```bash
wget -O backup.zip https://example.com/arquivo.zip
```

### Continuar download interrompido:

```bash
wget -c https://example.com/large_file.iso
```

### Download recursivo (mirror):

```bash
wget -r https://example.com
```

### Download com limitação de banda:

```bash
wget --limit-rate=1m https://example.com/bigfile.tar.gz
```

O `wget` é uma ferramenta poderosa e versátil para operações de download na linha de comando, amplamente utilizada por administradores de sistemas, desenvolvedores e usuários avançados para automação de tarefas e manipulação de arquivos na web.
