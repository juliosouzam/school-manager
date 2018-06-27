<?php

Auth::routes();

Route::get('/', function(){
    return redirect()->route('home');
});

Route::get('/admin', 'HomeController@index')->name('home');



Route::prefix('admin')->middleware('auth')->group(function(){
    Route::prefix('course')->group(function(){
        Route::get('/', 'CourseController@index')->name('course.index');
        Route::get('/create', 'CourseController@create')->name('course.create');
        Route::post('/store', 'CourseController@store')->name('course.store');
        Route::get('/course/{course}', 'CourseController@show')->name('course.show');
        Route::get('/course/edit/{course}', 'CourseController@edit')->name('course.edit');
        Route::put('/course/update/{course}', 'CourseController@update')->name('course.update');
        Route::delete('/course/destroy/{course}', 'CourseController@destroy')->name('course.destroy');
    });

    Route::prefix('students')->group(function(){
        Route::get('/', 'StudentController@index')->name('student.index');
        Route::get('/create', 'StudentController@create')->name('student.create');
        Route::post('/store', 'StudentController@store')->name('student.store');
        Route::get('/student/{student}', 'StudentController@show')->name('student.show');
        Route::get('/student/edit/{student}', 'StudentController@edit')->name('student.edit');
        Route::put('/student/update/{student}', 'StudentController@update')->name('student.update');
        Route::delete('/student/destroy/{student}', 'StudentController@destroy')->name('student.destroy');
    });

    Route::prefix('settings')->group(function(){
        Route::prefix('profile')->group(function(){
            Route::get('/', 'ProfileController@index')->name('profile.index');
            Route::get('/edit/{user}', 'ProfileController@edit')->name('profile.edit');
            Route::get('/create', 'ProfileController@create')->name('profile.create');
            Route::post('/store', 'ProfileController@store')->name('profile.store');
            Route::get('/{user}', 'ProfileController@show')->name('profile.show');
            Route::put('/update/{user}', 'ProfileController@update')->name('profile.update');
            Route::put('/update/password/{user}', 'ProfileController@updatePassword')->name('profile.update.password');
            Route::delete('/destroy/{user}', 'ProfileController@destroy')->name('profile.destroy');
        });

        Route::prefix('roles')->group(function(){
            Route::get('/', 'SettingController@index')->name('roles.index');
            Route::get('/{role}/permission', 'SettingController@permissions')->name('roles.permission');
            Route::post('/{role}/permissions/store', 'SettingController@store')->name('roles.permission.store');
            Route::post('/permission/store', 'SettingController@store')->name('roles.store');
        });
    });
});
