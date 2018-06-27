<?php

namespace School\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use School\Course;
use School\Role;

class AppServiceProvider extends ServiceProvider
{
    /**
    * Bootstrap any application services.
    *
    * @return void
    */
    public function boot()
    {
        View::composer(['students.create', 'students.edit'], function($view){
            $view->with('courses', Course::all());
        });

        View::composer(['settings.profile.edit'], function($view){
            $view->with('groups', Role::all());
        });
    }

    /**
    * Register any application services.
    *
    * @return void
    */
    public function register()
    {
        //
    }
}
