<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StudentTest extends TestCase
{
    use RefreshDatabase;

    public function testIfUnauthenticatedCantViewStudent()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->create();

        $this->get('admin/student/'.$student->id)
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantCreateStudent()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->make();

        $this->post('/admin/student/store', $student->toArray())
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantUpdateStudent()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->create();

        $this->put('/admin/student/update/'.$student->id, $student->toArray())
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantDeleteStudent()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->create();

        $this->delete('/admin/student/destroy/'.$student->id, $student->toArray())
            ->assertRedirect('/login');
    }
}
