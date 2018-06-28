<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function testIfAuthenticatedCanViewAdmin()
    {
        $user = factory('School\User')->create();
        $this->actingAs($user)
            ->get('/admin')
            ->assertSee($user->name);
    }
}
