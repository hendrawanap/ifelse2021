<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perizinan extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'perizinans';

    protected $fillable = [
        'evidences', 'details', 'reason', 'student_id', 'perizinan_id', 'created_at', 'updated_at'
    ];

    public function agenda(){
        return $this->belongsTo(Agenda::class);
    }

    public function students(){
        return $this->hasMany(StudentPerizinan::class)->with('student');
    }
}
