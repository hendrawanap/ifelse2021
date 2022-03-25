<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Student;
use App\Models\StudentAttendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{

    public function index()
    {
        return Attendance::all();
    }

    public function create()
    {
        //
    }

    public function attend(Request $request){

        $code = $request->query('code');

        if(gettype($code) !== 'string'){
            return response()->json(['error'=>'invalid_arguments']);
        }

        $att = Attendance::where('code', $code)->where('status', true)->get();

        if(!count($att)){
            return response()->json(['error'=>'not_found']);
        }

        $att = $att[0];


        $id = $request->user()->student->id;



        if(StudentAttendance::where('student_id', $id)->where('attendance_id', $att->id)->get()->isEmpty()){
            StudentAttendance::create([
                'attendance_id' => $att->id,
                'student_id' => $id
            ]);
            return response()->json(['attended'=>true]);
        }


        return response()->json(['attended'=>false]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'=>'string|required',
            'code' =>'string|required',
        ]);
        if(!$validated){
            return response()->json(['error' => 'validation']);
        }

        $attendance = new Attendance;
        $attendance->title = $request->input('title');
        $attendance->code = $request->input('code');
        $attendance->save();
        $id = $attendance->id;

        return response()->json(['status'=>'success', 'id'=>$id]);
    }

    public function toggleStatus(Request $request){
        $validated = $request->validate(['id'=>'required|integer']);
        if(!$validated)
            return response()->json(['error' => 'validation']);

        $id = $request->input('id');
        $att = Attendance::find($id);
        $att->status = !$att->status;
        error_log('test');
        $att->save();
        return response()->json(['status'=>'success']);
    }

    public function hasAttendance(Request $request){
        $attendance = Attendance::where('status', 1)->get();
        error_log(Attendance::all());

        if(count($attendance) === 0)
            return response()->json(['result' => false]);


        foreach ($attendance as $item){

            $st = StudentAttendance::where('attendance_id', $item->id)->where('student_id', $request->user()->student->id)->get();
            if(!count($st)){ // If the attendance is still empty
                return response()->json(['result' => true]);
            }

        }

        return response()->json(['result' => false]);
    }

    public function show($id)
    {
        //
        return Attendance::find($id)->attendants;
    }

    public function edit(Attendance $attendance)
    {
        //
    }

    public function update(Request $request, Attendance $attendance)
    {
        //
    }

    public function destroy(Attendance $attendance)
    {
        //
    }
}
