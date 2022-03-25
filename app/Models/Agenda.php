<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use HasFactory;

    public function tasks(){
        return $this->hasMany(Task::class, 'agenda_id', 'id');
    }
    public function pendataan(){
        return $this->hasMany(Pendataan::class, 'agenda_id', 'id')->with('student');
    }
    public function publishedTasks(){
        return $this->hasMany(Task::class, 'agenda_id', 'id')->where('is_published', true);
    }

    public function publishedQuizzes(){
        return $this->hasMany(Quiz::class)->where('is_published', true);
    }


    public function quizzes(){
        return $this->hasMany(Quiz::class, 'agenda_id', 'id');
    }
}
