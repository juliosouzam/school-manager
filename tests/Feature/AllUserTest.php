<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AllUserTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_authenticated_can_view_admin()
    {
        $this->signIn();

        $response = $this->get('/admin');
        $response->assertSee(auth()->user()->name)
            ->assertSee('Welcome');
    }

    public function test_if_unauthenticated_user_cannot_browser_admin()
    {
        $this->withExceptionHandling();
        $response = $this->get('/admin');
        $response->assertDontSee('Welcome')
            ->assertRedirect('/login');
    }
}
