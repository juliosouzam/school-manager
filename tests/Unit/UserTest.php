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

    public function test_if_authenticated_user_with_role_functionary_can_browser_admin()
    {
        $this->signIn(factory('School\User')->create(['role_id' => 2]));

        $response = $this->get('/admin');
        $response->assertSee(auth()->user()->name)
            ->assertSee('Welcome');
    }

}
