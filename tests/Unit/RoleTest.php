<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_role_exists_in_database()
    {
        $role = factory('School\Role')->create();

        $this->assertDatabaseHas('roles', ['id'=>$role->id]);
    }
}
