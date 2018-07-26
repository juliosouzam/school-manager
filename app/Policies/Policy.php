<?php

namespace School\Policies;

use School\User;
use Illuminate\Auth\Access\HandlesAuthorization;

abstract class Policy
{
    use HandlesAuthorization;

    protected $permissions = [];

    public function before(User $user)
    {
        if ($user->role->isAdmin()) {
            return true;
        };

        $this->permissions = $user->permissions()->pluck('slug');
    }
}
