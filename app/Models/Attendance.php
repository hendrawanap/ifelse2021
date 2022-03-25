<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'agenda_id', 'title', 'code', 'status'
    ];

    public $timestamps = false;

    public function attendants(){
        return $this->hasMany(StudentAttendance::class, 'attendance_id', 'id')
            ->with('student');
    }

}
