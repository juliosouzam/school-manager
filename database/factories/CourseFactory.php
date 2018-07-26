<?php

use Faker\Generator as Faker;

$factory->define(School\Course::class, function (Faker $faker) {
    return [
        'cod_course' => $faker->word,
        'name' => $faker->word,
        'institution' => $faker->word
    ];
});
