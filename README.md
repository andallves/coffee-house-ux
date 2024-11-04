<h1 align="center" >Coffee House</h1>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)


**Descrição:** Uma breve introdução ao projeto, o propósito e as principais funcionalidades. 

> "Este é um projeto de um menu de uma cafeteteria onde os usuários podem visualizar produtos, adicionar itens ao carrinho e finalizar pedidos. Utilizamos React com TypeScript para a interface, Easy-Peasy para gerenciar o estado global e Axios para requisições à API."

## 📎 Índice
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Pré-requisitos](#pré-requisitos)
4. [Instalação](#instalacao)
5. [Uso](#uso)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Funcionalidades](#funcinalidades)
8. [Licença](#licenca)

## 💻 Tecnologias Utilizadas
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Sweatalert:** Biblioteca para tratamento de respostas ao usuário.
- **Easy-Peasy:** Biblioteca para gerenciamento de estado global, simplificando a estrutura e ações.
- **Axios:** Cliente HTTP para realizar requisições à API.
## 📃 Pré-requisitos
Antes de começar, você vai precisar ter as seguintes ferramentas instaladas:

- Node.js (versão mínima recomendada: 20.x)
- npm ou yarn (gerenciador de pacotes)
## 🔧 Instalação
1. Clone o repositório:

```bash
  git clone https://github.com/seu-usuario/seu-projeto.git
  cd seu-projeto
```
2. Instale as dependências do projeto:

```bash
  npm install
```
ou, se estiver usando yarn: 

```bash
  yarn install
```
## Uso
1. Executar o projeto em desenvolvimento:

```bash
npm start
```
ou com yarn:

```bash
yarn start
```
O projeto estará disponível em http://localhost:3000.

2. Build para produção:

```bash
npm run build
```
ou com yarn:

```bash
yarn build
```
Os arquivos de build estarão na pasta build.

## 💠 Estrutura do Projeto
Aqui está uma visão geral da estrutura do projeto, com uma breve descrição das pastas e arquivos principais.

```bash
.
├── public              # Recursos
│   ├── img             # Imagens
├── src                 # Código-fonte principal
│   ├── assets          # Imagens e recursos estáticos
│   ├── components      # Componentes React reutilizáveis
│   ├── hooks           # Hooks personalizados
│   ├── models          # Modelos e tipos do TypeScript
│   ├── services        # Configuração do Axios para chamadas de API
│   ├── store           # Configuração do Easy-Peasy para gerenciamento de estado
│   ├── styles          # Arquivos de estilo (CSS/SASS)
│   ├── utils           # Funções auxiliares e utilitárias
│   └── App.tsx         # Componente raiz do aplicativo
├── README.md           # Documentação do projeto
└── package.json        # Configurações do projeto e dependências
```

### Principais Pastas
- **components:** Contém todos os componentes da interface, organizados por funcionalidade.
- **store:** Contém a configuração da biblioteca Easy-Peasy, onde são definidas as ações e o estado global.
- **services:** Configuração de chamadas de API com Axios, incluindo interceptors se necessários.
- **models:** Definição dos tipos TypeScript para objetos usados no projeto.

### Funcionalidades
- **Listagem de Produtos:** Mostra uma lista de produtos obtidos da API.
- **Carrinho de Compras:** Adiciona produtos ao carrinho e calcula o total.
- **Finalização de Pedido:** Permite que o usuário finalize a compra.
- **Gerenciamento de Estado com Easy-Peasy:** Controle centralizado do estado global.
- **Chamadas de API com Axios:** Conexão com backend usando HTTP requests.


## 🪪 Licença
Este projeto é licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.

## 👨🏽‍💻 Author
<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/37510133?v=4" width="100px;" alt="Andre Alves Profile Picture"/><br>
        <sub>
          <b>Andre Alves Pereira</b>
        </sub>
      </a>
    </td>
</table>
