<?php

namespace App\Http\Controllers;

use App\Models\Perizinan;
use App\Models\StudentPerizinan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PerizinanController extends Controller
{

    public function index(){
        return Perizinan::all();
    }

    // Admin Update
    public function adminUpdate(Request $request, $id){

        $validated = $request->validate([
            'started_at' => 'string',
            'ended_at' => 'string',
        ]);

        if(!$validated)
            return (['error' => 'validation']);

        $perizinan = Perizinan::find($id);
        if($request->has('started_at')){
            $perizinan->started_at = $request->input('started_at');
        }
        if($request->has('ended_at')){
            $perizinan->ended_at = $request->input('ended_at');
        }
        $perizinan->save();
        return response()->json(['status'=>'success']);
    }

    public function studentStore(Request $request, $id){

        $p = StudentPerizinan::where('perizinan_id', $id)->where('student_id', $request->user()->student->id)->get();

        $isInserting = true;
        if(count($p))
            $isInserting = false;

        if(!Perizinan::find($id))
            return (['error' => 'Invalid ID']);


        $validated = $request->validate([
            'reason' => 'required|integer|max:7|min:0',
            'details' => 'required|string|max:2000',
            'commitment' => 'required'
        ]);


        if(!$validated || !$request->input('commitment')){
            return (['error' => 'validation']);
        }


        $directory      = 'perizinan/' . Carbon::now()->monthName; // lokasi penyimpanan
        $file           = $request->file('evidence_1');
        $file2           = $request->file('evidence_2');
        $filename       = 'ev_1'.Str::random(60).'.'.$file2->getExtension();
        $filename2      = 'ev_2'.Str::random(60).'.'.$file->getExtension();

        $file->move($directory, 'images/'.$filename); // memindah file ke lokasi penyimpanan
        $file->move($directory, 'images/'.$filename2); // memindah file ke lokasi penyimpanan

        $perizinan = new StudentPerizinan;
        if(!$isInserting)
            $perizinan = StudentPerizinan::find($p[0]->id);

        try {
            $perizinan->reason = $request->input('reason');
            $perizinan->details = $request->input('details');
            $perizinan->evidence_1 = $filename;
            $perizinan->evidence_2 = $filename2;
            $perizinan->student_id = $request->user()->student->id;
            $perizinan->perizinan_id = $id;
            $perizinan->save();
            return (['status' => 'success']);

        } catch (\Exception $e){
            return (['error' => 'System']);

        }

    }

    public function show(){
        return Perizinan::with(['students', 'agenda'])->get();
    }

    public function showOne($id){
        return StudentPerizinan::with('student')->find($id);
    }
}
