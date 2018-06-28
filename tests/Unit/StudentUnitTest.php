<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StudentUnitTest extends TestCase
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
