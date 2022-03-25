<?php

namespace App\Models;

use App\Casts\Tanggal;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class StudentQuiz extends Model
{
    use HasFactory;

    protected $table = 'student_quizs';

    protected $fillable = [
        'student_id', 'quiz_id', 'started_at', 'ended_at'
    ];

    protected $casts = [];

    public function quiz(){
        return $this->belongsTo(Quiz::class);
    }

    public static function Questions($quiz_id, $student_id){
        $questions = DB::table('student_answers AS answers')
            ->join('questions', 'questions.id', '=', 'answers.question_id')
            ->select('questions.id AS id', 'answers.answer_key AS answerKey', 'questions.mce_question AS question', 'questions.choices AS choices')
            ->where('answers.quiz_id', '=', $quiz_id)
            ->where('answers.student_id','=',$student_id)
            ->get();
        return $questions;
    }

    public static function Finish($quiz_id, $student_id){

        DB::table('student_quizs')
            ->where('quiz_id', '=', $quiz_id)
            ->where('student_id','=',$student_id)
            ->update(['ended_at'=>Carbon::now()]);
    }

    public function student(){
        return $this->belongsTo(Student::class);
    }


    public static function QuizStatus($quiz_id, $student_id){
        $r = Quiz::where('id', '=', $quiz_id)
            ->where('is_published', '=', true)
            ->get();

        $q = StudentQuiz::where('quiz_id', '=', $quiz_id)
            ->where('student_id', '=', $student_id)
            ->get();


        if($r->isEmpty()){
            return 'error';
        }

        $r = $r->first();

        $now = Carbon::now('Asia/Jakarta')->toDateTimeString();


        if($q->isEmpty()){
            if(Carbon::parse($r->end_at)->toDateTimeString() > ($now) && Carbon::parse($r->start_at)->toDateTimeString() < ($now)) return 'Open';
            if(Carbon::parse($r->start_at)->toDateTimeString() > ($now)) return 'Coming Soon';
            return 'Overdue';
        }

        $q = $q->first();

        if($q->ended_at) return 'Finished';

        $remainingTime = Carbon::parse($q->started_at)->getTimestamp() + $r->duration_sec - Carbon::now()->getTimestamp();

        error_log(Carbon::now());
        error_log($remainingTime);

        if($remainingTime >= 0){
            return 'Ongoing';
        }

        return 'Finished';

    }

    public static function getStudentQuizzes($student_Id, $quiz_id){
        return DB::table('student_quizs')
            ->where('student_id', '=', $student_Id)
            ->where('quiz_id', '=', $quiz_id)
            ->get();
    }

    public static function getMarkings($quizId, $userId){
        $r = DB::table('student_answers AS a')
            ->join('questions AS q', 'q.id', '=', 'a.question_id')
            ->select('a.id', 'a.answer_key AS s_answer', 'q.answer_key AS q_answer')
            ->where('a.quiz_id', '=', $quizId)
            ->where('a.student_id', '=', $userId)
            ->get();

        if($r->isEmpty()) return -1;

        $count = 0;
        $total = 0;
        foreach ($r as $res){
            if($res->s_answer === $res->q_answer){
                $count++;
            }
            $total++;
        }
        return $count/$total*100;
    }
}
