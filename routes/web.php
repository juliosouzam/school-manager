<?php

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
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
        Route::get('profile/', 'ProfileController@index')->name('profile.index');
        Route::get('profile/edit/{user}', 'ProfileController@edit')->name('profile.edit');
        Route::get('profile/create', 'ProfileController@create')->name('profile.create');
        Route::post('profile/store', 'ProfileController@store')->name('profile.store');
        Route::get('profile/{user}', 'ProfileController@show')->name('profile.show');
        Route::put('profile/update/{user}', 'ProfileController@update')->name('profile.update');
        Route::put('profile/update/password/{user}', 'ProfileController@updatePassword')->name('profile.update.password');
        Route::delete('profile/destroy/{user}', 'ProfileController@destroy')->name('profile.destroy');
    });
});
