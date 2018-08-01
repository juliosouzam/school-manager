<?php

namespace School;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'registry',
        'name',
        'course_id',
        'semester',
        'status',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function getStatusName()
    {
        switch ($this->status) {
            case 0:
            return 'Matriculado';
                break;
            case 1:
            return 'Trancado';
                break;
            case 2:
            return 'Jubilado';
                break;
            default:
            return 'Nenhum dado encontrado!';
                break;
        }
    }
}
