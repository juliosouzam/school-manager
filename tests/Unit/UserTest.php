<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_user_belongs_to_a_role()
    {
        $user = factory('School\User')->create();

        $this->assertInstanceOf('School\Role', $user->role);
    }

}
