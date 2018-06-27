<?php

use Faker\Generator as Faker;
use School\Group;

$factory->define(Group::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'nick' => $faker->word,
    ];
});
