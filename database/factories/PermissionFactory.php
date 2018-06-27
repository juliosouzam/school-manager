<?php

use Faker\Generator as Faker;
use School\Permission;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'name' => $faker->work,
        'slug' => $faker->work,
        'group_id' => factory('School\Group')->create()->id,
    ];
});
