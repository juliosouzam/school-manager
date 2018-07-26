<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_authenticated_can_view_admin()
    {
        $this->signIn();

        $this->get('/admin')
            ->assertSee(auth()->user()->name)
            ->assertSee('Welcome');
    }
}
