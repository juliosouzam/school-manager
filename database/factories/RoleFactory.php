<?php

use Faker\Generator as Faker;
use School\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name' => $faker->work,
        'slug' => $faker->work,
        'type' => rand(1, 3]),
    ];
});
