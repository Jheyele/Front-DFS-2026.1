📘 Front-DFS-2026.1

Este projeto é um exemplo prático desenvolvido para apresentar conceitos fundamentais de desenvolvimento Front-End utilizando React e Material UI, integrando a aplicação com uma API REST.

O objetivo é demonstrar a construção de uma interface moderna com gerenciamento de componentes, comunicação com backend e estrutura de projeto utilizada em aplicações reais.

Tecnologias utilizadas

React

Vite

Material UI

JavaScript (ES6+)

CSS

## API REST

📂 Estrutura do Projeto
Front-DFS-2026.1
│
├── public
├── src
│ ├── assets
│ ├── components
│ ├── context
│ ├── pages
│ ├── services
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

## Como executar

1. Clone o repositório:

   ```bash
   git clone git@github.com:Jheyele/Front-DFS-2026.1.git
   cd nome-do-repo
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm run dev
   ```

4. Acesse em: [http://localhost:5173](http://localhost:5173)

---

## Backend necessário

🔗 Backend necessário

Este projeto consome dados de uma API REST, portanto é necessário que o backend esteja rodando para que as funcionalidades funcionem corretamente.

Certifique-se de iniciar o servidor da API antes de executar o front-end.

🔗 Repositório da API no GitHub: [backend](https://github.com/Jheyele/Back-DFS-2026.1)

---

🎯 Funcionalidades

Interface construída com React

Componentização da aplicação

Integração com API REST

Organização de código em páginas e serviços

Utilização de Material UI para estilização

Estrutura de projeto escalável

## Sobre o Bootcamp

Este projeto foi desenvolvido como parte prática do **Avanti Bootcamp - DFS 2026.1**, uma formação voltada para capacitação em **Desenvolvimento Full Stack**.

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon --env-file=.env index.js"
}
