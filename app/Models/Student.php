<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'line', 'whatsapp', 'name', 'nickname', 'nim', 'user_id'
    ];

    public $timestamps = false;

    public static function updateStudent($id, $newContact){
        return Student::whereId($id)->update($newContact);
    }

    public function submissions(){
        return $this->hasMany(
            StudentTask::class,
            'student_id',
            'id'
        )->with(['task'=>function($query){
            return $query->where('is_published', 1);
        }]);
    }

    public function perizinans(){
        return $this->hasMany(StudentPerizinan::class)->with('perizinan');
    }

    public function user(){
        return $this->hasOne(User::class, 'student_id', 'id');
    }

    public function group(){
        return $this->belongsTo(Group::class, 'group_id', 'id');
    }

    public function tasks(){
        return $this->hasMany(StudentTask::class)->with('task');
    }

    public function quizzes(){
        return $this->hasMany(StudentQuiz::class)->with('quiz');
    }
    public function pendataan(){
        return $this->belongsTo(Pendataan::class)->with('agenda');
    }

}
