<?php

namespace School\Policies;

use School\User;
use School\Role;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy extends Policy
{
    use HandlesAuthorization;

    /**
    * Determine whether the user can view the role.
    *
    * @param  \School\User  $user
    * @param  \School\Role  $role
    * @return mixed
    */
    public function view(User $user)
    {
        return $this->permissions->contains('role.index');
    }
    
    /**
    * Determine whether the user can create roles.
    *
    * @param  \School\User  $user
    * @return mixed
    */
    public function create(User $user)
    {
        return $this->permissions->contains('role.store');
    }
    
    /**
    * Determine whether the user can update the role.
    *
    * @param  \School\User  $user
    * @param  \School\Role  $role
    * @return mixed
    */
    public function update(User $user)
    {
        return $this->permissions->contains('role.edit');
    }
    
    /**
    * Determine whether the user can delete the role.
    *
    * @param  \School\User  $user
    * @param  \School\Role  $role
    * @return mixed
    */
    public function delete(User $user)
    {
        return $this->permissions->contains('role.destroy');
    }
}
