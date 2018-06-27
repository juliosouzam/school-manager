# School Manager

Sistema desenvolvido para a vaga de Desenvolvedor PHP

## Getting Started

Para o desenvolvimento do sistema, foi usado o Framework Laravel em sua versão 5.6, usando o PHP 7.2.6 na máquina local, o composer para gerenciamento de dependências e o Docker, que é uma plataforma Open Source que usa Cointainers Linux para criar ambientes isolados, podendo subir a aplicação sem ter problemas com dependências.

### Pre-requisitos

Para instalar e começar a usar a aplicação, é necessário que o Docker e o Docker-compose esteja instalado em sua máquina.
A sua [documentação](https://docs.docker.com/install/#supported-platforms) é bem explicativa e fácil de usar. Lá tem o tutórial de sua instalação.
A [documentação](https://docs.docker.com/v17.09/compose/install/#install-compose) é bastante simples, só seguir os passos de seu sistema operacional.

Outros requisitos como o PHP em sua versão >= 7.1 e o [Composer](https://getcomposer.org/download/) também serão necessários.

### Installing

Depois de ter instalado os pré-requisitos, vamos instalar a aplicação.

Primerio, clone o projeto.

```
git clone ...
```

Depois, entre na pasta e execute:

```
composer install
```

Em seguida, inicie a aplicação com o docker-compose.

```
docker-compose up -d
```

Em seguida, inicie a aplicação com o docker-compose.

```
docker-compose up -d
```

Pronto, a aplicação está rodando em sua máquina.
Para adicionar o primeiro usuário, execute o comando

```
docker-compose exec app php artisan school:install
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

A pipeline do Bitbucket já está adicionada e configurada.
Todo commit que cair nas branchs master ou develop, será feito uma bateria de testes e se na master ocorrer tudo sem erros, ele 'automágicamente', subirá para o [Heroku](https://www.heroku.com/).
Para isso ocorrer com sucesso, precisará que só configure as variáveis de ambiente no próprio bitbucket.
```
HEROKU_API_KEY = Api Key do Heroku
HEROKU_APP_NAME = Nome da aplicação do Heroku
```
