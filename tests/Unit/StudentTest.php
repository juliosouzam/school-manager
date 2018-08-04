<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StudentTest extends TestCase
{
    use RefreshDatabase;

    public function testIfIsStudents()
    {
        $student = factory('School\Student')->create();

        $this->assertInstanceOf('School\Student', $student);
    }

    public function testIfStudentBelongsToCourse()
    {
        $student = factory('School\Student')->create();

        $this->assertInstanceOf('School\Course', $student->course);
    }
}
