<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StudentTest extends TestCase
{
    use RefreshDatabase;

    public function testIfIsStudents()
    {
        $student = factory(\School\Student::class)->create();

        $this->assertInstanceOf(\School\Student::class, $student);
    }

    public function testIfStudentBelongsToCourse()
    {
        $student = factory(\School\Student::class)->create();

        $this->assertInstanceOf(\School\Course::class, $student->course);
    }
}
