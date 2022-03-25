<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $casts = [
        'choices' => 'array',
        'created_at' => 'datetime',
    ];

    protected $fillable = [
        'mce_question',
        'answer_key',
        'choices'
    ];

    public function quizQuestion(){
        return $this->hasOne(QuizQuestion::class)->with('quiz');
    }

    public $timestamps = false;
}
