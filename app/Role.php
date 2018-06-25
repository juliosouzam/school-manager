<?php

namespace School;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'type'
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
