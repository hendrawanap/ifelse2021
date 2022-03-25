<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\GroupCompanion;
use App\Models\Pendataan;
use App\Models\Perizinan;
use App\Models\Student;
use App\Models\StudentPerizinan;
use App\Models\StudentQuiz;
use App\Models\StudentTask;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\Collection;
use function MongoDB\BSON\toJSON;

class StudentController extends Controller
{

    public function getStudentArray(){
        return [
            [
                "name" => "Ararya Pramadani Alief Rahman",
                "nim" => "215150207111030",
                "group_id" => 3,
                "password" => "TE153URE",
            ],
        ];
    }

    public function getStudent($id){
        $student = Student::with(['submissions', 'quizzes', 'group'])->find($id);
        foreach ($student->quizzes as $quiz){
            $quiz->marking = StudentQuiz::getMarkings($quiz->quiz->id, $id);
        }

        if($student->group)
            $student->companion = GroupCompanion::find($student->group->id)->companions[0];

        return $student;
    }

    public function showPendataan(Request $request){
        $agendas = Agenda::all();
        $student = $request->user()->student;
        foreach($agendas as $agenda){
            $studentPendataan = Pendataan::where('student_id', $student->id)->where('agenda_id', $agenda->id)->get();
            $agenda->status = $this->getStatus($agenda, count($studentPendataan) > 0);
        }
        return $agendas;
    }

    public function showPerizinan(Request $request){
        $perizinan = Perizinan::all();
        $student = $request->user()->student;
        foreach ($perizinan as $item){
            $begin = $item->started_at;
            $end = $item->ended_at;
            $compares = $this->compareDateNow($begin, $end);
            if($compares === 0){
                $studentPerizinan = StudentPerizinan::where('student_id', $student->id)->where('perizinan_id', $item->id)->get();

                $item->status = count($studentPerizinan) > 0? 'resubmit': 'open';
            } else if($compares > 0)
                $item->status = 'closed';
            else
                $item->status = 'overdue';
        }
        return response()->json($perizinan);
    }

    public function showOnePerizinan(Request $request, $id){
        $perizinan = Perizinan::find($id);

        if(!$perizinan)
            return (['error' => 'Not found']);

        $student = Student::with('group')->find($request->user()->student->id);
        $studentPerizinan = StudentPerizinan::where('student_id', $student->id)->where('perizinan_id', $id)->get();

        $status = $this->compareDateNow($perizinan->started_at, $perizinan->ended_at);
        if($status !== 0)
            return (['error' => 'Not found']);

        if(count($studentPerizinan) === 0)
            return (['student' => $student, 'perizinan' => $perizinan]);

        $studentPerizinan = $studentPerizinan[0];
        $perizinan->revision = $studentPerizinan;
        return (['student' => $student, 'perizinan' => $perizinan]);
    }

    public function showOnePendataan(Request $request, $id){
        $agenda = Agenda::find($id);

        if(!$agenda)
            return (['error' => 'Not found']);

        $student = Student::with('group')->find($request->user()->student->id);
        $pendataan = Pendataan::where('student_id', $student->id)->where('agenda_id', $agenda->id)->get();

        $status = $this->getStatus($agenda, false);
        if($status === 'closed' || $status === 'overdue')
            return (['error' => 'Not found']);

        // If not found go
        if(count($pendataan) === 0)
            return (['agenda' => $agenda, 'student' => $student]);

        // If found revise
        $pendataan = $pendataan[0];
        $agenda->pendataan = $pendataan;
        return (['agenda' => $agenda, 'student' => $student]);
    }


    public function postPerizinan(Request $request, $id){
        $rs = $this->showOnePerizinan($request, $id);

        if(isset($rs['error']))
            return (['error'=>'Not found']);

        $validated = $request->validate([
            'line' => 'required|string',
            'reason' => 'required|integer|min:0|max:7',
            'evidence1' => 'required|array',
            'evidence2' => 'required|array',
            'details' => 'required|string'
        ]);

        if(!$validated)
            return response()->json(['error' => 'validation']);

        $directory      = "perizinan/$id/";// lokasi penyimpanan
        $ev1           = $request->file('evidence1')[0];
        $ev2           = $request->file('evidence2');

        $ev2names = [];

        $random_id = Str::random(60);

        foreach ($ev2 as $key=>$file) {
            $name = 'ev2_' . $key . '__' . $random_id . '.' . $file->getClientOriginalExtension();
            $file->move('private/'.$directory, $name);
            $ev2names[$key] = $directory. $name;
        }


        $ev1name = 'ev1_' . $random_id . '.' . $ev1->getClientOriginalExtension();

        $ev1->move('private/'.$directory, $ev1name);

        $perizinan = StudentPerizinan::where('student_id', $request->user()->student->id)->where('perizinan_id', $id)->get();

        if(count($perizinan) > 0){
            $perizinan = $perizinan[0];
            collect($perizinan->evidences)->flatten()->each(function($value, $item){
                $path = 'private/'.public_path($value);
                if(File::exists($path)){
                    File::delete($path);
                }
            });
        } else {
            $perizinan = new StudentPerizinan;
        }

        $perizinan->student_id = $request->user()->student->id;
        $perizinan->perizinan_id = $id;
        $perizinan->reason = $request->input('reason');
        $perizinan->details = $request->input('details');
        $perizinan->evidences = json_encode(['ev_1'=>$directory . $ev1name, 'ev_2'=>$ev2names]);
        $perizinan->created_at = Carbon::now()->toISOString();
        $perizinan->save();

        $student = Student::find($request->user()->student->id);
        $student->line = $request->input('line');
        $student->save();

        return response()->json(['status' => 'success']);
    }

    public function postPendataan(Request $request, $id){
        $rs = $this->showOnePendataan($request, $id);

        if(isset($rs['error']))
            return (['error'=>'Not found']);

        $validated = $request->validate([
            'line' => 'required|string',
            'reason' => 'required|integer|min:0|max:1',
            'evidence1' => 'required',
            'evidence2' => 'required|array',
            'details' => 'required|string'
        ]);

        if(!$validated)
            return response()->json(['error' => 'validation']);

        $directory      = "pendataan/$id/";// lokasi penyimpanan
        $ev1           = $request->file('evidence1')[0];
        $ev2           = $request->file('evidence2');

        $ev2names = [];

        $random_id = Str::random(60);

        foreach ($ev2 as $key=>$file) {
            $name = 'ev2_' . $key . '__' . $random_id . '.' . $file->getClientOriginalExtension();
            $file->move('private/'.$directory, $name);
            $ev2names[$key] = $directory. $name;
        }


        $ev1name = 'ev1_' . $random_id . '.' . $ev1->getClientOriginalExtension();

        $ev1->move('private/'.$directory, $ev1name);

        $pendataan = Pendataan::where('student_id', $request->user()->student->id)->where('agenda_id', $id)->get();

        if(count($pendataan) > 0){
            $pendataan = $pendataan[0];
            collect(['ev_1' => $pendataan->evidence_1, 'ev_2' => $pendataan->evidence_2])->flatten()->each(function($value, $item){
                $path = 'private/'.public_path($value);
                if(File::exists($path)){
                    File::delete($path);
                }
            });
        } else {
            $pendataan = new Pendataan;
        }

        $pendataan->student_id = $request->user()->student->id;
        $pendataan->agenda_id = $id;
        $pendataan->reason = $request->input('reason');
        $pendataan->details = $request->input('details');
        $pendataan->evidence_1 = $directory . $ev1name;
        $pendataan->evidence_2 = json_encode($ev2names);
        $pendataan->created_at = Carbon::now()->toISOString();
        $pendataan->save();

        return response()->json(['status' => 'success']);
    }


    public function compareDateNow($begin, $end){
        $now = Carbon::now("Asia/Jakarta");
        if(Carbon::createFromDate($begin)->toDateTimeString() > ($now)->toDateTimeString()){
            return 1;
        }
        if(Carbon::createFromDate($end)->toDateTimeString() < ($now)->toDateTimeString()){
            return -1;
        }
        return 0;
    }

    public function getStatus($agenda, $hasKey){
        $now = Carbon::now("Asia/Jakarta")->toDateTimeString();

        if(Carbon::createFromDate($agenda->pendataan_start_at)->toDateTimeString() > ($now)){
            return 'closed';
        }
        if(Carbon::createFromDate($agenda->pendataan_end_at)->toDateTimeString() < ($now)){
            return 'overdue';
        }
        return $hasKey? 'resubmit': 'open';
    }

    public function tasks(Request $request){

        $tasks = Task::where('is_published', 1)->get();
        foreach ($tasks as $task){
            $id = $task->id;
            $st = StudentTask::where('student_id', $request->user()->student->id)->where('task_id', $id)->get();
            if(count($st))
                $task->status = 'finished';
            else
                $task->status = 'none';
        }

        return $tasks;
    }

    public function getTask(Request $request, $id){
        $task = Task::find($id);
        if(!$task) return (['error' => 'not found']);
        if(!$task->is_published) return (['error' => 'not found']);
        $submissions = $request->user()->student->submissions;
        foreach($submissions as $submission){
            if($submission->task_id === $task->id) return (['error' => 'already finished']);
        }
        return $task;
    }

    public function seedStudent(){

        $arr = $this->getStudentArray();
        error_log('test');


        foreach ($arr as $item){
            $id = DB::table('students')->insertGetId([
                'nim' => $item['nim'],
                'name' => $item['name'],
                'address' => 'Belum Diatur',
                'nickname' => explode(' ', $item['name'])[0],
                'line' => 'Belum Diatur',
                'user_id' => '-1',
                'group_id' => $item['group_id'],
                'whatsapp' => 'Belum Diatur',
                'avatar' => 'some.jpg'
            ]);
            DB::table('users')->insert([
                [
                    'name' => $item['name'],
                    'username' => $item['nim'],
                    'student_id' => $id,
                    'password' => Hash::make($item['password']),
                    'role_id' => 1, // student
                ],
            ]);
        }

        return response()->json(['status'=>'inserted!']);
    }

    public function insertAdmin(){
        DB::table('users')->insert([
            [
                'name' => 'User 1',
                'username' => 'user_cobaan',
                'student_id' => null,
                'password' => Hash::make('inicobaan1$$$'),
                'role_id' => 2,
            ],
            [
                'name' => 'User 2',
                'username' => 'user_cobaan2',
                'student_id' => null,
                'password' => Hash::make('inicobaan2$$$'),
                'role_id' => 2,
            ],
            [
                'name' => 'User 3',
                'username' => 'user_cobaan3',
                'student_id' => null,
                'password' => Hash::make('inicobaan3$$$'),
                'role_id' => 2,
            ],
        ]);


    }



    public function storeTask(Request $request, $id){
        $task = $this->getTask($request, $id);

        // Check if task exists

        if($task->error) return response()->json(['error'=>'task not found']);
        $student = $request->user()->student;

        $st = StudentTask::where('task_id', $task->id)->where('student_id', $student->id)->get();

        if(count($st) > 0)
            return response()->json(['error'=>'has been submitted earlier']);

        $validated = $request->validate([
            'fields' => 'required',
        ]);

        if(!$validated){
            return response()->json(['error'=>'validation']);
        }

        $task_fields = $task['fields'];
        $fields = $request->input('fields');

        $f = [];

        foreach ($task_fields as $field){
            if(!$fields[(string)$field['id']]){
                return response()->json(['error'=>'required fields']);
            } else {
                array_push($f, $fields[(string)$field['id']]);
            }

        }


        $t = new StudentTask;
        $t->student_id = $student->id;
        $t->task_id = $task->id;

        $t->submission = json_decode($fields);
        error_log($t);

        $t->save();

        return response()->json(['status'=>'success']);
    }

}
