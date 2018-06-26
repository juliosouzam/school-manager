<?php

namespace School;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'cod_course',
        'name',
        'institution',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}
