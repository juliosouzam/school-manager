<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AllStudentTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_unauthenticated_cant_view_student()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->create();

        $response = $this->get('admin/student/'.$student->id);
        $response->assertDontSeeText($student->name)
            ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_browser_a_single_student()
    {
        $this->signIn();

        $student = factory('School\Student')->create();

        $response = $this->get('/admin/student/'.$student->id);

        $response->assertSee($student->name);
    }

    public function test_if_unauthenticated_cant_create_student()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->make();

        $this->post('/admin/student/store', $student->toArray())
            ->assertDontSeeText($student->name)
            ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_create_a_student()
    {
        $this->signIn();

        $student = factory('School\Student')->make();

        $response = $this->post('/admin/student/store', $student->toArray());

        $resp = $this->get($response->headers->get('Location'));
        $resp->assertSee($student->name);
    }

    public function test_if_unauthenticated_cant_update_student()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->create();

        $response = $this->put('/admin/student/update/'.$student->id, $student->toArray());
        $response->assertDontSeeText($student->name)
            ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_update_student()
    {
        $this->signIn();

        $student = factory('School\Student')->create();
        $studentUpd = factory('School\Student')->make();

        $this->put('/admin/student/update/'.$student->id, $studentUpd->toArray());

        $response = $this->get('/admin/student/'.$student->id);
        $response->assertSee($studentUpd->name)
            ->assertDontSee($student->name);
    }

    public function test_if_unauthenticated_cant_delete_student()
    {
        $this->withExceptionHandling();
        $student = factory('School\Student')->create();

        $this->delete('/admin/student/destroy/'.$student->id)
            ->assertDontSeeText($student->name)
            ->assertRedirect('/login');
    }

    public function test_if_authenticated_user_can_delete_student()
    {
        $this->signIn();

        $student = factory('School\Student')->create();

        $this->delete('/admin/student/destroy/'.$student->id);

        $this->assertDatabaseMissing('students', ['id'=>$student->id]);
    }
}
