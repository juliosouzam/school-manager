<?php

use Faker\Generator as Faker;

$factory->define(School\Group::class, function (Faker $faker) {
    $name = $faker->word;

    return [
        'name' => $name,
        'nick' => $name,
    ];
});
