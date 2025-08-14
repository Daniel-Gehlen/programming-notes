# Pipeline de Deploy com GitLab, Docker e Kubernetes

## Descrição do Projeto

Neste projeto, vamos criar um pipeline de deploy para uma aplicação Node.js, considerando dois cenários distintos:

1. **Deploy da aplicação em um container Docker.**
2. **Deploy da aplicação em um cluster Kubernetes utilizando o Google Cloud Platform (GCP).**

O projeto será apresentado em duas branches distintas no repositório GitLab:

- **Branch 1:** Pipeline para deploy da aplicação em um container Docker.
- **Branch 2:** Pipeline para deploy da aplicação em um cluster Kubernetes na nuvem com GCP.

### Código Fonte da Aplicação

O código fonte da aplicação Node.js pode ser encontrado [neste repositório GitLab]().

---

## Pipeline de Exemplo

### 1. Deploy da Aplicação Node.js em um Container Docker

- **Construção do Docker Image:**
  O Dockerfile será usado para construir a imagem da aplicação Node.js.
- **Publicação da Imagem:**
  A imagem Docker será enviada para um registro Docker, como o Docker Hub ou o GitLab Container Registry.
- **Execução do Container:**
  O pipeline irá rodar o container Docker com a aplicação Node.js.

### 2. Deploy da Aplicação Node.js em um Cluster Kubernetes no GCP

- **Configuração do Cluster Kubernetes:**
  Utilização do Google Kubernetes Engine (GKE) para criar e configurar o cluster.
- **Construção e Publicação da Imagem Docker:**
  A mesma imagem Docker será utilizada para o deploy no Kubernetes.
- **Criação de Manifests Kubernetes:**
  Arquivos YAML para definir deployments, serviços e volumes persistentes.
- **Deploy no Cluster:**
  Aplicação será implantada no cluster Kubernetes e acessível via Load Balancer.

---

## Arquitetura do Cluster e Aplicação

### Aplicação no Docker

```
[ Docker Container ]
        |
        v
[ Docker Registry ]
        |
        v
[ Deploy Pipeline ]
```

### Aplicação no Kubernetes (GCP)

```
[ Load Balancer ]
        |
        v
[ Kubernetes Cluster ]
    /     |      \
   v      v      v
[ Node 1] [ Node 2] [ Node 3]
    |       |       |
    v       v       v
[ Pod ]   [ Pod ]   [ Pod ]
    |       |       |
    v       v       v
[ Application ] [ Application ] [ Application ]
       |
       v
[ Persistent Volume (PV) ]
```

---

## Conclusão

Este projeto proporciona uma visão prática de como criar e gerenciar pipelines de deploy usando GitLab, Docker e Kubernetes. A apresentação em duas branches permitirá comparar e avaliar os diferentes métodos de deploy e suas implicações em ambientes de desenvolvimento e produção.
