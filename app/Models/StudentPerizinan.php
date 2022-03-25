<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentPerizinan extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id', 'perizinan_id', 'reason', 'details', 'evidences', 'created_at'
    ];

    protected $casts = [
        'evidences' => 'array'
    ];

    public function student(){
        return $this->belongsTo(Student::class)->with('group');
    }

    public function perizinan(){
        return $this->belongsTo(Perizinan::class);
    }
}
