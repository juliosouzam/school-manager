<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CourseTest extends TestCase
{
    use RefreshDatabase;

    public function testIfUnauthenticatedCantCreateCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->make();

        $this->post('admin/course/store', $course->toArray())
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantViewCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->create();

        $this->get('/admin/course/'.$course->id)
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantUpdateCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->create();

        $this->put('/admin/course/update/'.$course->id, $course->toArray())
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantDeleteCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->create();

        $this->delete('/admin/course/destroy/'.$course->id, $course->toArray())
            ->assertRedirect('/login');
    }
}
