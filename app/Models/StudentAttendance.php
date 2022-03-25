<?php

namespace App\Models;

use App\Casts\Tanggal;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentAttendance extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
          'attendance_id', 'student_id'
    ];

    public function student(){
        return $this->belongsTo(Student::class)->with('group');
    }
}
