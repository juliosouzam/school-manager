<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GuestTest extends TestCase
{
    use RefreshDatabase;

    public function testGuestCanViewLogin()
    {
        $this->get('/login')
            ->assertStatus(200)
            ->assertSee('Entrar');
    }

    public function testGuestCantNotViewAdmin()
    {
        $user = factory('School\User')->create();

        $this->get('/admin')
            ->assertDontSee($user->name)
            ->assertRedirect('/login');
    }
}
