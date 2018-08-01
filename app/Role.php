<?php

namespace School;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'type',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function isAdmin()
    {
        return $this->type == 1;
    }

    public function officer()
    {
        return $this->type == 2;
    }
}
