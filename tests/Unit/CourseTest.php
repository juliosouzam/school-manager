<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CourseTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_course_have_one_student()
    {
        $course = factory('School\Course')->create();

        $student = factory('School\Student')->create(['course_id' => $course->id]);

        $this->assertCount(1, $course->students);
    }

    public function test_if_course_have_more_of_one_students()
    {
        $course = factory('School\Course')->create();
        factory('School\Student')->create(['course_id' => $course->id]);
        factory('School\Student')->create(['course_id' => $course->id]);

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $course->students);

        $this->assertCount(2, $course->students);
    }
}
