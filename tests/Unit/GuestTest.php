<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

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
        $this->withExceptionHandling();
        $user = factory(\School\User::class)->create();

        $this->get('/admin')
            ->assertDontSee($user->name)
            ->assertRedirect('/login');
    }
}
