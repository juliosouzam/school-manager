<?php

use Faker\Generator as Faker;
use School\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'slug' => $faker->word,
        'type' => rand(1, 3),
    ];
});
