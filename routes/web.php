<?php

Auth::routes();

Route::get('/admin', 'HomeController@index')->name('home');



Route::prefix('admin')->middleware('auth')->group(function(){
    Route::prefix('course')->group(function(){
        Route::get('/', 'CourseController@index')->name('course.index');
        Route::get('/create', 'CourseController@create')->name('course.create');
        Route::post('/store', 'CourseController@store')->name('course.store');
        Route::get('/course/{course}', 'CourseController@show')->name('course.show');
        Route::get('/course/edit/{course}', 'CourseController@edit')->name('course.edit');
        Route::put('/course/update/{course}', 'CourseController@update')->name('course.update');
    });
});
