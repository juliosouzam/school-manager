<?php

use Faker\Generator as Faker;
use School\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name' => 'Administrador',
        'slug' => 'administrador',
        'type' => 1,
    ];
});
