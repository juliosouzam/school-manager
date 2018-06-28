<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CourseUnitTest extends TestCase
{
    use RefreshDatabase;

    public function testIfCourseHaveOneStudent()
    {
        $course = factory('School\Course')->create();

        $student = factory('School\Student')->create(['course_id' => $course->id]);

        $this->assertCount(1, $course->students);
    }

    public function testIfCourseHaveMoreOfOneStudents()
    {
        $course = factory('School\Course')->create();
        factory('School\Student')->create(['course_id' => $course->id]);
        factory('School\Student')->create(['course_id' => $course->id]);

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $course->students);

        $this->assertCount(2, $course->students);
    }


}
