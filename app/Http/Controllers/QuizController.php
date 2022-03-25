<?php

namespace App\Http\Controllers;

use App\Casts\Tanggal;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\Student;
use App\Models\StudentAnswer;
use App\Models\StudentQuiz;
use Carbon\Carbon;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuizController extends Controller
{
    //TODO: Add Quiz And Student Information
    public function all(Request $request){
        $quizzes = Quiz::where('is_published', true)->get();
        $userId = $request->user()->student->id;

        foreach ($quizzes as $quiz){

            $id = $quiz->id;

            $status = StudentQuiz::QuizStatus($id, $userId);

            if($status === 'Finished') {
                $d = StudentQuiz::getStudentQuizzes($userId, $id);
                $quiz->ended_at = $d->isEmpty()? 'We Don\'t Know :)' :
                    (
                        $d[0]->ended_at?
                            Carbon::parse($d[0]->ended_at)->setTimezone('Asia/Jakarta')->toDateTimeString() :
                            Carbon::parse($d[0]->started_at)->setTimezone('Asia/Jakarta')->addSeconds($quiz->duration_sec)->toDateTimeString()
                    );
            }
            $quiz->status = strtolower($status);
        }

        return $quizzes;
    }

    public function togglePublish($id){
        $quiz = Quiz::find($id);
        $quiz->is_published = !$quiz->is_published;
        $quiz->save();
        return (['status' => 'success']);
    }

    public function beginQuiz(Request $request, $id){
        $studentId = $request->user()->student->id;

        $status = StudentQuiz::QuizStatus($id, $studentId);
        error_log($status);
        if($status !== 'Open' && $status !== 'Ongoing') return response()->json(['error'=>$status]);

        $hasBegun = $this->hasBegun($id, $studentId);

        if(!$hasBegun) {

            $appliableAnswers = [];

            $quiz = Quiz::find($id);
            Log::error($quiz->questions);
            $questions = collect($quiz->questions)->random($quiz->total);

            foreach ($questions as $question) {
                $quizId = $id;
                $questionId = $question->question_id;

                $sq = StudentAnswer::create([
                    'student_id' => $studentId,
                    'quiz_id' => $quizId,
                    'question_id' => $questionId
                ]);
            }


            $sq = StudentQuiz::create([
                'student_id' => $studentId,
                'quiz_id' => $id,
                'started_at' => Carbon::now()
            ]);
        } else {
            error_log('has begun');
        }

        return response()->json(['success'=>'Succeeded']);
    }

    private function hasBegun($quizId, $userId){
        return !StudentQuiz::where('quiz_id', $quizId)->where('student_id', $userId)->get()->isEmpty();
    }



    public function getRemainingTime(Request $request, $id){
        $quizId = $id;

        //$this->beginQuiz($request, $quizId);
        $startTime = StudentQuiz::where('student_id', $request->user()->student->id)
            ->where('quiz_id', $quizId)
            ->get()->first();

        $quizTime = Quiz::find($id);

        if($startTime && $quizTime) {


            $start = Carbon::createFromDate($startTime->getRawOriginal('started_at'));

            $lastTime = $start->getTimestamp() + $quizTime->duration_sec;

            $remainingTime = $lastTime - Carbon::now()->getTimestamp();


            if($remainingTime > 0){
                return response()->json(['remaining_time'=>($remainingTime)]);
            }

            return response()->json(['error'=>'quiz ended']);
        }

        return response()->json(['error'=>'quiz not found']);


    }

    public function submitAnswers(Request $request, $id){
        $answers = json_decode($request->input('answers'));

        $studentId = $request->user()->student->id;

        foreach ($answers as $answer){

            $question_id = $answer->id;
            $answer_key = $answer->key;

            $answer_id = DB::table('student_answers')->where('question_id', '=',$question_id)
                ->where('quiz_id', '=', $id)
                ->where('student_id', '=', $studentId)
                ->get();

            if(!$answer_id->isEmpty()) {
                $answer_id = $answer_id->first()->id;
                error_log($answer_id);
                $instance = StudentAnswer::find($answer_id);
                if(!$instance) continue;

                if($instance['answer_key'] !== $answer_key){

                    $instance->answer_key = $answer_key;
                    $instance->updated_at = now();
                    $instance->save();

                }




            }


        }
        return response()->json(['success'=>'mantap']);



    }

    public function getQuestions(Request $request, $id){

        $userId = $request->user()->student->id;

        $questions = StudentQuiz::Questions($id, $userId);

        if(!$questions){
            return response()->json(['error'=>'no quiz']);
        }
        return response()->json(['questions'=>$questions]);

    }

    public function getAllQuestions(){
        $questions = Question::all();
        foreach ($questions as $question){
            $question['quiz'] =  $question->quizQuestion? $question->quizQuestion->quiz : [];
        }
        return $questions;
    }

    public function addQuiz(Request $request){
        error_log($request->getContentType());
        $validated = $request->validate([
            'title'=>'string|required',
            'duration'=>'integer|required',
            'startAt' => 'date|required',
            'endAt' => 'date|required',
            'total' => 'string|required',
            'agendaId' => 'integer|required',
        ]);
        if(!$validated){
            return (['error'=>'validation']);
        }
        $quiz = new Quiz;
        $quiz->label = $request->input('title');
        $quiz->duration_sec = $request->input('duration');
        $quiz->start_at = $request->input('startAt');
        $quiz->excerpt = $request->has('excerpt')? $request->input('excerpt'): 'Quiz';
        $quiz->end_at = $request->input('endAt');
        $quiz->total = $request->input('total');
        $quiz->is_published = !!$request->input('isPublished');
        $quiz->agenda_id = $request->input('agendaId');
        $quiz->save();
        return response()->json(['status'=>'success']);
    }

    public function finishQuiz(Request $request, $id){
        $userId = $request->user()->student->id;
        error_log('test');
        StudentQuiz::Finish($id, $userId);
        response()->json(['success'=>'mantap']);
    }

    public function getAllQuiz(){
        return Quiz::all();
    }
    public function getQuizInformation($id){
        $infos = StudentQuiz::where('quiz_id', '=', $id)->get();
        $quiz = Quiz::find($id);
        foreach ($infos as $info){
            $student = Student::find($info['student_id']);
            $info['marking'] = $quiz->is_survey? StudentQuiz::where('student_id', $student->id)->where('quiz_id', $id)->get() : StudentQuiz::getMarkings($id, $info['student_id']);
            if($student) {
                $info['nim'] = $student['nim'];
                $info['name'] = $student['name'];
                $info['group'] = $student->group->name;


                $info['ended_at'] = $info['ended_at']? Carbon::parse($info['ended_at']): Carbon::createFromTimestamp(Carbon::parse($info['started_at'])->addSeconds($quiz->duration_sec)->getTimestamp());
                $info['ended_at'] = $info['ended_at']? $info['ended_at']->setTimezone('Asia/Jakarta')->toDateTimeString(): 'Belum Selesai';
                $info['started_at'] = Carbon::parse($info['started_at'])->setTimezone('Asia/Jakarta')->toDateTimeString();
            }
        }
        return response()->json(['students' => $infos, 'quiz' => $quiz]);
    }

    public function addQuestion(Request $request){
        $validated = $request->validate([
            'mce_question' => 'required|string',
            'choices' => 'required',
            'answer_key' => 'required|string',
            'quiz_id' => 'required'
        ]);

        if($validated){

            $question = new Question;
            $question->mce_question = $request->input('mce_question');
            $question->choices = json_decode($request->input('choices'));
            $question->answer_key = $request->input('answer_key');
            $question->save();

            $qquestion = new QuizQuestion;
            $qquestion->quiz_id = $request->input('quiz_id');
            $qquestion->question_id = $question->id;
            $qquestion->save();

            return response()->json(['status'=>'success', 'id'=>$question->id]);
        }
        return response()->json(['status'=>'error']);
    }

    public function removeQuestions(Request $request){
        $validated = $request->validate([
            'question_id'=>'required'
        ]);
        if($validated){
            $question_ids = json_decode($request->input('question_id'));
            Question::whereIn('id', $question_ids)->delete();
            QuizQuestion::whereIn('question_id', $question_ids)->delete();
            return response()->json(['status'=>'success']);
        }
        return response()->json(['status'=>'error']);
    }

    public function getQuizSummary(){
        $answers = StudentAnswer::orderBy('updated_at')->get();
        $data = [];
        foreach ($answers as $answer){
            array_push($data, ['id'=>$answer->quiz_id,'date'=>$answer->updated_at]);
        }
        return response()->json($data);
    }

}
