<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentTask extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'student_id',
        'submission'
    ];

    protected $casts = [
        'submission' => 'array'
    ];

    public $timestamps = false;

    public function task(){
        return $this->belongsTo(Task::class)->without('fields');
    }

    public function student(){
        return $this->belongsTo(Student::class)->with('group');
    }
}
