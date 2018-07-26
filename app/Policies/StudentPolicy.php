<?php

namespace School\Policies;

use School\User;
use School\Student;
use Illuminate\Auth\Access\HandlesAuthorization;

class StudentPolicy extends Policy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the student.
     *
     * @param  \School\User  $user
     * @param  \School\Student  $student
     * @return mixed
     */
    public function view(User $user)
    {
        return $this->permissions->contains('student.index');
    }

    /**
     * Determine whether the user can create students.
     *
     * @param  \School\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $this->permissions->contains('student.store');
    }

    /**
     * Determine whether the user can update the student.
     *
     * @param  \School\User  $user
     * @param  \School\Student  $student
     * @return mixed
     */
    public function update(User $user)
    {
        return $this->permissions->contains('student.edit');
    }

    /**
     * Determine whether the user can delete the student.
     *
     * @param  \School\User  $user
     * @param  \School\Student  $student
     * @return mixed
     */
    public function delete(User $user)
    {
        return $this->permissions->contains('student.destroy');
    }
}
