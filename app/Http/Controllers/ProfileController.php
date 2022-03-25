<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\GroupCompanion;
use App\Models\Student;
use App\Models\Graduation;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    //
    public function index(Request $request)
    {
        $s = User::find($request->user()->id)->student;
        if (!$s) return response()->json(['error' => 'id not found']);
        $s->group = Student::find($s->id)->group;
        if ($s->group)
            $s->companions = GroupCompanion::find($s->group->id)->companions;

        return response()->json($s);
    }

    public function quizInfo(Request $request)
    {
        return $request->user()->student->quiz;
    }

    public function getAgendas(Request $request)
    {

        $agendas = Agenda::with('publishedTasks', 'publishedQuizzes')->get();
        $quizzes = $request->user()->student->quizzes;
        $tasks = $request->user()->student->tasks;

        return response()->json([
            'agenda' => $agendas,
            'quizzes' => $quizzes,
            'tasks' => $tasks
        ]);
    }

    public function changeContact(Request $request)
    {
        $v = $request->validate(['whatsapp' => 'required|string', 'line' => 'required|string', 'address' => 'string']);
        if ($v) {
            $student = User::find($request->user()->id)->student;
            if (!$student) return response()->json(['error' => 'id not found']);

            Student::updateStudent(
                $student->id,
                [
                    'whatsapp' => $request->input('whatsapp'),
                    'line' => $request->input('line'),
                    'address' => $request->input('address')
                ]
            );
            return ['status' => 'success'];
        }
        return ['status' => 'error'];
    }
    public function changePicture(Request $request)
    {
        $v = $request->validate(['avatar' => 'required']);
        if ($v) {
            $student = $request->user()->student;
            if (!$student) return response()->json(['error' => 'id not found']);
            $directory      = 'profile/' . Carbon::now()->monthName; // lokasi penyimpanan
            $file           = $request->file('avatar');
            $random_id = Str::random(60);
            $filename = $random_id;

            $file->move('images/' . $directory, $filename); // memindah file ke lokasi penyimpanan
            $avatar = $directory . '/' . $filename;



            Student::updateStudent(
                $student->id,
                [
                    'avatar' => $avatar
                ]
            );
            return ['status' => 'success', 'avatar' => $avatar];
        }
        return ['error' => 'validation'];
    }

    public function getGraduation(Request $request) {
      $graduation = Graduation::where('student_id', $request->user()->student_id)->get();

      if ($graduation->count() > 0) {
        $graduation = $graduation[0];

        return response()->json([
          'kelulusan' => [
            "isLulus" => $graduation->is_graduated,
            "nilai" => [$graduation->score_1, $graduation->score_2, $graduation->score_3, $graduation->score_4],
            "linkSertifikat" => $graduation->certif_url
          ],
          'message' => 'success'
        ]);
      } else {
        return response()->json(['message'=>'not found']);
      }
    }
}
