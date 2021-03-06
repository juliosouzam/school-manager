<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AllCourseTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_unauthenticated_cant_create_course()
    {
        $this->withExceptionHandling();
        $course = factory(\School\Course::class)->make();

        $this->post('admin/course/store', $course->toArray())
        ->assertDontSeeText($course->name)
        ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_create_course()
    {
        $this->signIn();

        $course = factory(\School\Course::class)->make();

        $resp = $this->post('/admin/course/store', $course->toArray());

        $response = $this->get($resp->headers->get('Location'));
        $response->assertSee($course->name);
    }

    public function test_if_unauthenticated_cant_view_course()
    {
        $this->withExceptionHandling();
        $course = factory(\School\Course::class)->create();

        $response = $this->get('/admin/course/'.$course->id);
        $response->assertDontSeeText($course->name)
        ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_browser_course()
    {
        $this->signIn();

        $course = factory(\School\Course::class)->create();
        $courseTwo = factory(\School\Course::class)->create();
        $courseThree = factory(\School\Course::class)->create();

        $response = $this->get('admin/course');
        $response->assertSee($course->name)
            ->assertSee($courseTwo->name)
            ->assertSee($courseThree->name);
    }

    public function test_if_authenticated_user_can_see_a_single_course()
    {
        $this->signIn();

        $course = factory(\School\Course::class)->create();

        $this->get('admin/course/'.$course->id)
        ->assertSee($course->name);
    }

    public function test_if_unauthenticated_user_can_see_a_single_course()
    {
        $this->withExceptionHandling();

        $course = factory(\School\Course::class)->create();

        $this->get("admin/course/{$course->id}")
        ->assertStatus(302);
    }

    public function test_if_unauthenticated_cant_update_course()
    {
        $this->withExceptionHandling();

        $course = factory(\School\Course::class)->create();
        $newCourse = factory(\School\Course::class)->make();

        $response = $this->put('/admin/course/update/'.$course->id, $newCourse->toArray());

        $response->assertDontSeeText($course->name)
            ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_update_course()
    {
        $this->signIn();

        $course = factory(\School\Course::class)->create();
        $courseUpd = factory(\School\Course::class)->make();

        $this->put('/admin/course/update/'.$course->id, $courseUpd->toArray());

        $response = $this->get('/admin/course/'.$course->id);

        $response->assertSee($courseUpd->name)
                ->assertDontSee($course->name);
    }

    public function test_if_unauthenticated_cant_delete_course()
    {
        $this->withExceptionHandling();
        $course = factory(\School\Course::class)->create();

        $response = $this->delete('/admin/course/destroy/'.$course->id, $course->toArray());
        $response->assertDontSeeText($course->name)
            ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_delete_course()
    {
        $this->signIn();

        $course = factory(\School\Course::class)->create();

        $this->delete('/admin/course/destroy/'.$course->id);

        $this->assertDatabaseMissing('courses', ['id' => $course->id]);
    }
}
