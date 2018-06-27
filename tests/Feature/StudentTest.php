<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StudentTest extends TestCase
{
    use RefreshDatabase;

    public function testStudents()
    {
        $student = factory('School\Student')->create();

        $this->assertInstanceOf('School\Student', $student);
    }

    public function testIfStudentHaveAnyCourse()
    {
        $student = factory('School\Student')->create();

        $this->assertInstanceOf('School\Course', $student->course);
    }
}
