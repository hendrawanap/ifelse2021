<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Pendataan;
use App\Models\Perizinan;
use App\Models\StudentPerizinan;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class PendataanController extends Controller
{
    public function getPendataan()
    {
        return Agenda::with('pendataan')->get();
    }
    public function show($id){
        return Agenda::with('pendataan')->find($id);
    }

    public function showOne($id){
        return Pendataan::with('student')->find($id);
    }

    public function updatePendataan(Request $request, $id)
    {
        $agenda = Agenda::find($id);
        $validated = $request->validate([
           'startAt' => 'date',
           'endAt' => 'date',
        ]);

        if(!$validated){
            return response()->json(['error' => 'validation']);
        }

        if($request->has('startAt')){
            $agenda->pendataan_start_at = Carbon::createFromTime($request->input('startAt'));
            $agenda->pendataan_end_at = Carbon::createFromTime($request->input('endAt'));
        }

        $agenda->save();
        return response()->json(['status'=>'success']);
    }
}
