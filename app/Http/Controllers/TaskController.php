<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Student;
use Dotenv\Validator;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{

    public function index()
    {
        return Task::with('agenda')->get();
    }

    public function show($id){
        return Task::with('submissions')->find($id);
    }

    public function togglePublish($id){
        $task = Task::find($id);
        if($task){
            $task->is_published = !$task->is_published;
            $task->save();
            return ['status' => 'success'];
        }
        return (['error' => 'Not Found']);
    }

    public function store(Request $request)
    {

        error_log($request);

        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'fields' =>  'required',
            'startAt' => 'required',
            'endAt' => 'required',
        ]);

        if(!$validated)
            return response()->json(['error'=>'validation']);

        $agenda = $request->input('agendaId');
        $agenda = Agenda::find($agenda);
        if(!$agenda)
            return response()->json(['error'=>'validation']);

        $task = new Task();
        $task->title = $request->input('title');
        $task->description = $request->input('description');
        $task->fields = json_decode($request->input('fields'));
        $task->start_at = $request->input('startAt');
        $task->end_at = $request->input('endAt');
        $task->agenda_id = $agenda->id;
        $task->save();
        return response()->json(['status'=>'success']);

    }

}
