<?php

use Faker\Generator as Faker;
use School\Course;

$factory->define(Course::class, function (Faker $faker) {
    return [
        'cod_course' => $faker->word,
        'name' => $faker->word,
        'institution' => $faker->word
    ];
});
