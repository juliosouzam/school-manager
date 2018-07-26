<?php

namespace Tests\Feature;

use Tests\TestCase;
use Tests\Traits\DatabaseRefresh;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AllCourseTest extends TestCase
{
    use DatabaseRefresh;

    public function testIfUnauthenticatedCantCreateCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->make();

        $this->post('admin/course/store', $course->toArray())
            ->assertDontSeeText($course->name)
            ->assertRedirect('/login');
    }

    public function test_if_aunthenticated_user_can_create_course()
    {
        $permission = factory('School\Permission')->create(['slug' => 'course.store']);

        $this->signIn();

        $course = factory('School\Course')->make();

        $response = $this->post('/admin/course/store', $course->toArray());

        dd($response->headers->get('Location'));

        $this->get($response->headers->get('Location'));
    }

    public function testIfUnauthenticatedCantViewCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->create();

        $this->get('/admin/course/'.$course->id)
            ->assertDontSeeText($course->name)
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantUpdateCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->create();

        $this->put('/admin/course/update/'.$course->id, $course->toArray())
            ->assertDontSeeText($course->name)
            ->assertRedirect('/login');
    }

    public function testIfUnauthenticatedCantDeleteCourse()
    {
        $this->withExceptionHandling();
        $course = factory('School\Course')->create();

        $this->delete('/admin/course/destroy/'.$course->id, $course->toArray())
            ->assertDontSeeText($course->name)
            ->assertRedirect('/login');
    }
}
