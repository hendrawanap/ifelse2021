<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'line_group'
    ];

    public function groupCompanions(){
        return $this->hasMany(GroupCompanion::class, 'id', 'group_id');
    }

    public function students(){
        return $this->hasMany(Student::class, 'group_id', 'id');
    }
}
