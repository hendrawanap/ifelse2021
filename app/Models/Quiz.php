<?php

namespace App\Models;

use App\Casts\Tanggal;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Quiz extends Model
{
    use HasFactory;

    protected $table = 'quizs';

    protected $fillable = ['label', 'start_at', 'end_at', 'is_published', 'total', 'duration_sec', 'excerpt'];
    protected $casts = [];

    public function questions(){
        return $this->hasMany(QuizQuestion::class, 'quiz_id', 'id');
    }



}
