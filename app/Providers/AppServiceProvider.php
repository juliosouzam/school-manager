<?php

namespace School\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use School\Course;

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
