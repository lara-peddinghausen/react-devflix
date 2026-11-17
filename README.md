# Netflix de Cursos com React

## DevFlix

Aplicação web de cursos e conteúdos educativos de tecnologia em uma interface inspirada em plataformas de streaming. O projeto possui um frontend em React e uma API em NestJS, com persistência de categorias em PostgreSQL.

## 1. Descrição

O projeto implementa uma aplicação web para disponibilizar cursos de tecnologia em uma plataforma inspirada em serviços de streaming com organização por categorias. A interface permite buscar cursos, visualizar descrições, salvar cursos como favoritos durante a sessão e reproduzir vídeos. Atualmente, os cursos exibidos pela interface são definidos localmente em `frontend/src/data/courses.js`. A API disponibiliza categorias armazenadas no PostgreSQL.

## 2. Funcionalidades

- Catálogo de cursos por categoria;
- Busca por título do curso;
- Modal de reprodução de vídeo;
- Sistema de favoritos;
- Navegação por seções temáticas;
- Layout responsivo e visual inspirado em plataformas de streaming;
- Organização das informações em cards com descrição e contexto do conteúdo;
- API para consulta de categorias armazenadas no banco de dados.

## 3. Tecnologias Utilizadas

- React
- Vite
- JavaScript
- CSS
- React Icons
- NestJS
- TypeScript
- Prisma
- PostgreSQL
- Docker Compose
- Git e GitHub

## 4. Arquitetura e Organização do Projeto

A estrutura do projeto separa o frontend, a API e a configuração do banco de dados.

```text
react-devflix/
│
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── categories/
│   │   ├── health/
│   │   ├── prisma/
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   │   └── courses.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

Descrição dos principais diretórios:

- `frontend/src/components/` — componentes reutilizáveis da interface;
- `frontend/src/data/` — dados locais dos cursos exibidos pela interface;
- `frontend/src/App.jsx` — estrutura principal da aplicação e controle de estado;
- `frontend/src/assets/` — arquivos visuais da aplicação;
- `backend/src/categories/` — endpoint e serviço de consulta de categorias;
- `backend/src/health/` — endpoint de verificação da API;
- `backend/src/prisma/` — integração do Prisma com o banco de dados;
- `backend/prisma/` — schema e migrations do banco;
- `docker-compose.yml` — configuração do PostgreSQL para desenvolvimento.

## 5. Pré-requisitos

Antes de executar o projeto, certifique-se de que você possui instalado:

- Node.js
- npm
- Git
- Docker Compose

## 6. Instalação

### 6.1 Clone o repositório

```bash
git clone https://github.com/lara-peddinghausen/react-devflix.git
```

### 6.2 Acesse a pasta do projeto

```bash
cd devflix
```

### 6.3 Instale as dependências

```bash
cd frontend
npm install
cd ../backend
npm install
cd ..
```

## 7. Execução do Projeto

### Banco de dados

Na raiz do projeto, inicie o PostgreSQL:

```bash
docker compose up -d postgres
```

Configure `DATABASE_URL` em `backend/.env` para apontar para o banco local:

```env
DATABASE_URL="postgresql://devflix:devflix123@localhost:5433/devflix_db?schema=public"
```

Em seguida, aplique as migrations e gere o cliente Prisma:

```bash
cd backend
npx prisma migrate deploy
npx prisma generate
```

### Backend

Em um terminal, na pasta `backend`:

```bash
npm run start:dev
```

A API ficará disponível em `http://localhost:3000`. Os endpoints implementados incluem `GET /health` e `GET /categories`.

### Frontend

Em outro terminal, na pasta `frontend`:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

## 8. Referência de Design

Como base visual para a interface, foi utilizado o seguinte protótipo no Figma:

https://www.figma.com/design/5pJqkqw8ttgi0PDULnJE3g/Untitled?node-id=50-6&t=S0rS5vShHRQRlpLW-1


## 9. Autor

**Nome:** Lara Peddinghausen
**Turma:** ADS 2024.2N
**Unidade Curricular:** Programação Web 2

## 10. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos e de aprendizado na disciplina de Programação Web 2. O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.
