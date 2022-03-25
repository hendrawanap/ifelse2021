<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Pendataan extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'content',
        'image',
        'published_at',
        'is_published',
    ];

    protected $casts = [
        'evidence_2' => 'array'
    ];

//    public static function getCombined(){
//        return DB::table('pendataans AS p')
//            ->leftJoin('students AS s', 's.id', '=', 'p.student_id')
//            ->leftJoin('agendas AS a', 'a.id', '=', 'p.agenda_id')
//            // ->where('agenda_id', '=', $agenda_id)
//            ->get();
//    }
    public function agenda(){
        return $this->belongsTo(Agenda::class);
    }
    public function student(){
        return $this->belongsTo(Student::class)->with('group');
    }
}
