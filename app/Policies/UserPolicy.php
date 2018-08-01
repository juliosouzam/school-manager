<?php

namespace School\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use School\User;

class UserPolicy extends Policy
{
    use HandlesAuthorization;

    public function view(User $user)
    {
        return $this->permissions->contains('user.index');
    }

    public function create(User $user)
    {
        return $this->permissions->contains('user.store');
    }

    public function update(User $user)
    {
        return $this->permissions->contains('user.edit');
    }

    public function destroy(User $user)
    {
        return $this->permissions->contains('user.destroy');
    }
}
