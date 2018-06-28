# School Manager

Sistema desenvolvido para a vaga de Desenvolvedor PHP

## Getting Started

Para o desenvolvimento do sistema, foi usado o Framework Laravel em sua versão 5.6, usando o PHP 7.2.6 na máquina local, o composer para gerenciamento de dependências e o Docker, que é uma plataforma Open Source que usa Containers Linux para criar ambientes isolados, podendo subir a aplicação sem ter problemas com dependências de máquina.

### Pre-requisitos

Para instalar e começar a usar a aplicação, é necessário que o Docker e o Docker-compose esteja instalado em sua máquina.
A documentação do [Docker](https://docs.docker.com/install/#supported-platforms) é bem explicativa e fácil de usar. Lá tem um tutórial de sua instalação em vários tipos de sistemas operacionais (Win, Linux e Mac), escolha o seu sistema e siga o passo a passo para realizar a instalação.
A documentação do [Docker compose](https://docs.docker.com/v17.09/compose/install/#install-compose) é bastante simples, só seguir os passos de seu sistema operacional (Win, Linux e Mac).

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
docker-compose up -d
```

Em seguida, dê as permissões nas pastas:

```
docker-compose exec app chmod -R 777 storage/ bootstrap/cache
```

Pronto, a aplicação está rodando em sua máquina.
Para adicionar o primeiro usuário, execute o comando

```
docker-compose exec app php artisan school:install
```

## Executando testes

Para essa aplicação, foi feito alguns testes simples, usando PHPUnit.
Obs: O sistema não está coberto por testes, somente algumas funcionalidades simples.

Tem dois meios de executar os testes.

###1ª PHPUnit local.
Você terá que ter o [PHPUnit](https://phpunit.de/getting-started/phpunit-7.html) instalado em sua máquina.
```
phpunit
```
ou se preferir, execute sem instalar

```
vendor/bin/phpunit
```
###2ª Usando Docker
Você irá executar os testes dentro de ambiente da aplicação.
Para isso, execute:
```
docker-compose exec app vendor/bin/phpunit
```

## Deployment

A pipeline do Bitbucket já está adicionada e configurada.
Todo commit que cair na branch master, será executado os testes e se ocorrer tudo sem erros, ele "automágicamente", subirá para o [Heroku](https://www.heroku.com/).
Para isso ocorrer com sucesso, precisará que só configure as variáveis de ambiente no seu próprio bitbucket.
```
HEROKU_API_KEY = Api Key do Heroku
HEROKU_APP_NAME = Nome da aplicação do Heroku
```
