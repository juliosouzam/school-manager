<?php

use Faker\Generator as Faker;

$factory->define(School\Role::class, function (Faker $faker) {
    return [
        'name' => 'Administrador',
        'slug' => 'administrador',
        'type' => 1,
    ];
});
