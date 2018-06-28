<?php

use Faker\Generator as Faker;
use School\Permission;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'slug' => $faker->word,
        'group_id' => factory('School\Group')->create()->id,
    ];
});
