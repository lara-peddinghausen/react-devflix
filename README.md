# Netflix de Cursos com React

## DevFlix

Aplicação web de cursos e conteúdos educativos de tecnologia em uma interface inspirada em plataformas de streaming.

## 1. Descrição

O projeto implementa uma aplicação web para disponibilizar cursos de tecnologia em uma plataforma inspirada em serviços de streaming com organização por categorias. A interface recebe as requisições do usuário e apresenta dinamicamente os conteúdos disponíveis, permitindo a busca por cursos, a visualização de descrições, salvar cursos como favoritos e a reprodução de vídeos diretamente na aplicação.

## 2. Funcionalidades

- Catálogo de cursos por categoria;
- Busca por título do curso;
- Modal de reprodução de vídeo;
- Sistema de favoritos;
- Navegação por seções temáticas;
- Layout responsivo e visual inspirado em plataformas de streaming;
- Organização das informações em cards com descrição e contexto do conteúdo.

## 3. Tecnologias Utilizadas

- React
- Vite
- JavaScript
- CSS
- React Icons
- Git e GitHub

## 4. Arquitetura e Organização do Projeto

A estrutura do projeto foi organizada para separar os componentes visuais, os dados e a lógica de apresentação da aplicação.

```text
react-devflix/
│
├── public/
│   ├── vite.svg
│   └── favicon
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── CourseCard.jsx
│   │   ├── CourseSection.jsx
│   │   ├── FavoritesSection.jsx
│   │   ├── Header.jsx
│   │   └── VideoPlayer.jsx
│   │
│   ├── data/
│   │   └── courses.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

Descrição dos principais diretórios:

- `src/components/` — componentes reutilizáveis da interface;
- `src/data/` — dados das categorias e cursos exibidos na aplicação;
- `src/App.jsx` — estrutura principal da aplicação e controle de estado;
- `src/assets/` — arquivos visuais e estáticos;
- `public/` — recursos públicos do projeto;
- `package.json` — dependências e scripts do projeto.

## 5. Pré-requisitos

Antes de executar o projeto, certifique-se de que você possui instalado:

- Node.js
- npm
- Git

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
npm install
```

## 7. Execução do Projeto

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação será iniciada em ambiente local e geralmente estará disponível em:

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
