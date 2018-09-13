FROM juliocesar/php-mysql-pgsql:7.2

LABEL Júlio César <eu@ojuliocesar.me>

RUN apt update && apt install -y curl git nano zip unzip openssl && a2enmod rewrite

ADD 000-default.conf /etc/apache2/sites-available/000-default.conf
# ADD deflate.conf /etc/apache2/mods-available/deflate.conf

RUN rm -rf /var/lib/apt/lists/* && apt-get clean

EXPOSE 80

WORKDIR /var/www/html

ADD shell.sh /

RUN chmod +x /shell.sh

ENTRYPOINT ["sh", "/shell.sh"]