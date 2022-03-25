<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'username',
        'password',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function role(){
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }

    public function student(){
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }


    public function hasAnyRole(...$roles){
        foreach($roles as $role){
            if($this->role() === $role) return true;
        }
        return false;
    }

    public static function getStudentInfo($id){


//        $student = DB::table('students AS s')
//            ->join('users AS u', 'u.student_id', '=', 's.id')
//            ->select('s.*')
//            ->where('u.id', '=', $id)
//            ->get();
//        if($student->isEmpty()) return [];
//        $student = $student->first();
//
//        if($student->group_id)
//            $student->group = self::getGroupName($student->group_id);
//        return $student;
    }

    public static function getGroupName($id){
        $res = DB::table('student_groups')->where('id', '=', $id)->get();
        if($res->isEmpty())
        return null;
        return $res->first()->name;
    }

}
