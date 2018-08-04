<?php

namespace School\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use School\Course;
use School\User;

class CoursePolicy extends Policy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the course.
     *
     * @param \School\User   $user
     * @param \School\Course $course
     *
     * @return mixed
     */
    public function view(User $user)
    {
        return $this->permissions->contains('course.index');
    }

    /**
     * Determine whether the user can create courses.
     *
     * @param \School\User $user
     *
     * @return mixed
     */
    public function create(User $user)
    {
        return $this->permissions->contains('course.store');
    }

    /**
     * Determine whether the user can update the course.
     *
     * @param \School\User   $user
     * @param \School\Course $course
     *
     * @return mixed
     */
    public function update(User $user)
    {
        return $this->permissions->contains('course.edit');
    }

    /**
     * Determine whether the user can delete the course.
     *
     * @param \School\User   $user
     * @param \School\Course $course
     *
     * @return mixed
     */
    public function delete(User $user)
    {
        return $this->permissions->contains('course.destroy');
    }
}
