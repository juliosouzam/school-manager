<?php

use Faker\Generator as Faker;

$factory->define(School\Permission::class, function (Faker $faker) {
    $name = $faker->word;

    return [
        'name'     => $name,
        'slug'     => $name,
        'group_id' => factory('School\Group')->create()->id,
    ];
});
