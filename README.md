# Projeto Game Store - Front-end em ReactJS

O projeto **Game Store** consiste no desenvolvimento do front-end utilizando a biblioteca ReactJS, com o objetivo de criar uma interface simples para interagir com a API de gerenciamento de jogos. A aplicação front-end permitirá aos usuários consultar jogos, visualizar detalhes e adicionar novos jogos ao banco de dados por meio da API.

## Tecnologias Utilizadas

- ReactJS
- Axios (para realizar requisições HTTP à API)
- Material-UI (para componentes de interface)
- Estado gerenciado pelo React (useState, useContext ou Redux)

## Funcionalidades

### Listagem de Jogos

A aplicação front-end irá exibir uma lista de jogos disponíveis, obtidos através da API. Cada jogo será representado por um cartão contendo informações como título, gênero e plataforma. Os usuários poderão clicar em um jogo para ver mais detalhes.

### Adição de Novos Jogos

A aplicação permitirá aos usuários adicionar novos jogos ao banco de dados por meio de um formulário. Os campos necessários incluem título, imagem, e preço. Ao enviar o formulário, os dados serão enviados à API para serem processados e armazenados no banco de dados.

## Configuração do Ambiente

1. Certifique-se de ter o Node.js instalado.
2. Clone o repositório do projeto: `git clone https://github.com/Joao-r-Am/game-store-front.git`
3. Navegue até o diretório do projeto: `cd game-store-front`
4. Instale as dependências: `npm install`

## Executando a Aplicação

Após configurar o ambiente e instalar as dependências, execute a aplicação com o seguinte comando:

```shell
npm run dev
