<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RoleTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_role_exists_in_database()
    {
        $role = factory(\School\Role::class)->create();

        $this->assertDatabaseHas('roles', ['id'=>$role->id]);
    }
}
