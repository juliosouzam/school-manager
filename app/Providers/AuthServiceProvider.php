<?php

namespace School\Providers;

use Illuminate\Contracts\Auth\Access\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use School\Permission;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'School\Student' => 'School\Policies\StudentPolicy',
        'School\Course'  => 'School\Policies\CoursePolicy',
        'School\User'    => 'School\Policies\UserPolicy',
        'School\Role'    => 'School\Policies\RolePolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot(Gate $gate)
    {
        $this->registerPolicies();

        // if(request()->is('admin*') && !is_null(Permission::first())) {

        //     $permissions = Permission::with('roles')->get();

        //     foreach ($permissions as $permission) {

        //         $gate->define($permission->slug, function ($user) use ($permission) {
        //             if ($user->role->isAdmin() || $permission->roles->contains($user->role)) {
        //                 return true;
        //             }
        //             return false;
        //         });
        //     }
        // }
    }
}
