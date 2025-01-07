# API de Podcasts 🎙️

> ⭐ Projeto desenvolvido durante o bootcamp da DIO (Digital Innovation One)

Uma API RESTful para gerenciar e consultar episódios de podcasts, construída com Node.js e TypeScript.

## 📋 Sobre o Projeto

Esta API permite listar e filtrar episódios de podcasts, fornecendo informações como:
- Nome do podcast
- Título do episódio
- ID do vídeo
- Tipo de conteúdo (vídeo/live)
- Imagem de capa
- Categorias

## 🚀 Funcionalidades

- **Listar Episódios**: Retorna todos os episódios disponíveis
- **Filtrar por Podcast**: Busca episódios de um podcast específico

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- HTTP nativo do Node.js
- Sistema de módulos ES6

## 📦 Dependências

### Dependências de Desenvolvimento
```json
{
  "@types/node": "^22.10.5",
  "tsup": "^8.3.5",
  "tsx": "^4.19.2",
  "typescript": "^5.7.2"
}
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env`:
```env
PORT=3636
```

4. Execute o projeto:
```bash
npm run start:dev
```

## 📚 Estrutura do Projeto

```
src/
├── controllers/      # Controladores da aplicação
├── models/          # Interfaces e tipos
├── repo/           # Repositório de dados
├── routes/         # Definição de rotas
├── services/       # Lógica de negócios
├── utils/          # Utilitários
├── app.ts          # Configuração da aplicação
└── server.ts       # Entrada da aplicação
```

## 🔌 Endpoints

### GET /api/list
Retorna todos os episódios de podcasts disponíveis.

**Resposta**:
```json
[
  {
    "podcastName": "string",
    "epsodio": "string",
    "idVideo": "string",
    "type": "string",
    "imagemCover": "string",
    "category": ["string"]
  }
]
```

### GET /api/eps?p={podcastName}
Filtra episódios por nome do podcast.

**Parâmetros**:
- `p`: Nome do podcast para filtrar

**Resposta**:
```json
[
  {
    "podcastName": "string",
    "epsodio": "string",
    "idVideo": "string",
    "type": "string",
    "imagemCover": "string",
    "category": ["string"]
  }
]
```

## 🏃 Scripts Disponíveis

- `npm run start:dev`: Inicia o servidor em modo desenvolvimento
- `npm run start:watch`: Inicia o servidor com hot-reload
- `npm run dist`: Gera build do projeto
- `npm run start:dist`: Executa a versão de produção
