FROM php:7.2-apache

MAINTAINER Júlio César <eu@ojuliocesar.me>

RUN apt update \
    && apt install -y \
        curl \
        git \
        vim \
        zip \
        unzip \
        openssl \
        libpq-dev \
        libxml2-dev \
        libicu-dev \
        libmcrypt-dev \
        locales \
    && a2enmod rewrite

RUN pecl install xdebug-2.6.0 mcrypt-1.0.1 memcached-2.2.0 \
    && docker-php-ext-enable xdebug mcrypt \
    && docker-php-ext-configure intl

RUN docker-php-ext-install -j$(nproc)\
        ctype dom iconv intl json opcache mbstring pdo pdo_mysql pdo_pgsql \
        session simplexml tokenizer xml

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer \
    && echo 'error_reporting = E_ALL' >> /usr/local/etc/php/conf.d/php-error-reporting.conf \
    && echo 'display_errors = On' >> /usr/local/etc/php/conf.d/php-error-reporting.conf

ADD 000-default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80

WORKDIR /var/www/html
