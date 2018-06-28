<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StudentTest extends TestCase
{
    use RefreshDatabase;

    public function testIfUnauthenticatedCantViewStudent()
    {
        $student = factory('School\Student')->create();

        $this->get('admin/student/'.$student->id)
            ->assertDontSee($student->name)
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantCreateStudent()
    {
        $student = factory('School\Student')->make();

        $this->post('/admin/student/store', $student->toArray())
            ->assertDontSee($student->name)
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantUpdateStudent()
    {
        $student = factory('School\Student')->create();

        $this->put('/admin/student/update/'.$student->id, $student->toArray())
            ->assertDontSee($student->name)
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantDeleteStudent()
    {
        $student = factory('School\Student')->create();

        $this->delete('/admin/student/destroy/'.$student->id, $student->toArray())
            ->assertDontSee($student->name)
            ->assertRedirect('/login');
    }

}
