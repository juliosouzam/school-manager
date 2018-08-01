<?php

namespace School\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use School\User;

abstract class Policy
{
    use HandlesAuthorization;

    protected $permissions = [];

    public function before(User $user)
    {
        if ($user->role->isAdmin()) {
            return true;
        }

        $this->permissions = $user->permissions()->pluck('slug');
    }
}
