#!/usr/bin/env bash

cd /var/www/html/
chown -R www-data:www-data storage/ bootstrap/cache/
chmod -R 777 storage/ bootstrap/cache/

ln -s ../storage/app/public public/storage
apache2-foreground
