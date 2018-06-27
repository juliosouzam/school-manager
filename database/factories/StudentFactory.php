<?php

use Faker\Generator as Faker;
use School\Student;

$factory->define(Student::class, function (Faker $faker) {
    return [
        'registry' => rand(1, 9),
        'name' => $faker->word,
        'course_id' => factory('School\Course')->create()->id,
        'semester' => rand(1, 8),
        'status' => rand(0, 2),
    ];
});
