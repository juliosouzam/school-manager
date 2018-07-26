<?php

namespace School\Policies;

use School\User;
use School\Student;
use Illuminate\Auth\Access\HandlesAuthorization;

class StudentPolicy
{
    use HandlesAuthorization;

    public function before(User $user)
    {
        return $user->role->isAdmin();
    }

    /**
     * Determine whether the user can view the student.
     *
     * @param  \School\User  $user
     * @param  \School\Student  $student
     * @return mixed
     */
    public function view(User $user, Student $student)
    {dd($user->role->permissions->contains('student.index'));
        return $user->role->permissions->contains('student.index');
    }

    /**
     * Determine whether the user can create students.
     *
     * @param  \School\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->role->permissions->contains('student.store');
    }

    /**
     * Determine whether the user can update the student.
     *
     * @param  \School\User  $user
     * @param  \School\Student  $student
     * @return mixed
     */
    public function update(User $user, Student $student)
    {
        return $user->role->permissions->contains('student.edit');
    }

    /**
     * Determine whether the user can delete the student.
     *
     * @param  \School\User  $user
     * @param  \School\Student  $student
     * @return mixed
     */
    public function delete(User $user, Student $student)
    {
        return $user->role->permissions->contains('student.destroy');
    }
}
