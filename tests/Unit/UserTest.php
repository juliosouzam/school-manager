<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    public function testIfAuthenticatedCanViewAdmin()
    {
        $user = factory('School\User')->create();
        $this->actingAs($user)
            ->get('/admin')
            ->assertSee($user->name);
    }
}
