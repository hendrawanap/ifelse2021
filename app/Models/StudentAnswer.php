<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentAnswer extends Model
{
    use HasFactory;

    protected $table = 'student_answers';

    public $timestamps = false;

    protected $fillable = [
        'student_id', 'quiz_id', 'question_id', 'answer_key', 'updated_at'
    ];

}
