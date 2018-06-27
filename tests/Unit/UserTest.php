<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    public function testIfAuthenticatedCanViewAdmin()
    {
        $this->actingAs($user = factory('School\User')->create());
            ->get('/admin')
            ->assetSee($user->name);
    }
}
