# Star Wars Info App

Este é um projeto de uma aplicação web que utiliza a API SWAPI para exibir informações sobre personagens, naves e armas do universo Star Wars. A aplicação é construída com React, TypeScript e TailwindCSS, e utiliza JWT para autenticação.

## Link de Produção

Acesse o projeto em produção [aqui](https://hubbi-teste-frontend.vercel.app/).

## Funcionalidades

- **Página Inicial**: Exibe uma lista de personagens, naves e armas do universo Star Wars com funcionalidade de pesquisa.
- **Detalhes do Item**: Páginas de detalhes para personagens, naves e armas.
- **Autenticação**: Login e registro de usuários utilizando JWT.
- **Feedback ao Usuário**: Indicador de carregamento enquanto os dados estão sendo buscados e exibição de mensagens de erro com o react-toastify.

## Tecnologias Utilizadas

- React
- TypeScript
- TailwindCSS
- SWAPI (Star Wars API)
- React Router
- Axios
- React Toastify
- FontAwesome

## Instalação do Backend

1. Clone o repositório:

   ```bash
   git clone git@github.com:balvesD3v/hubbi-teste.git
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Instalação do Frontend

1. Clone o repositório:

   ```bash
   git clone git@github.com:balvesD3v/hubbi-teste.git
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em http://localhost:5137.

## Estrutura do Projeto

    src/components: Contém componentes reutilizáveis, como botões e campos de entrada.

    src/pages: Contém as páginas principais da aplicação, como a homepage e as páginas de detalhes.

    src/services: Contém a lógica de interação com a API SWAPI.

    src/types: Contém as definições de tipos TypeScript para os dados da API.

## Autenticação

### Login e Registro

     Implementei as funcionalidades de login e registro utilizando JWT para autenticação.
     Adicione rotas protegidas para acessar as páginas restritas.

### Licença

    Este projeto está licenciado sob a MIT License.

Feito com ❤️ por Luiz Paulo
