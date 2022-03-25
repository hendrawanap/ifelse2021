<?php

namespace App\Http\Controllers;

use App\Models\Companion;
use App\Models\Group;
use App\Models\GroupCompanion;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function companions(){
        return response()->json(GroupCompanion::getCombined());
    }

    public function addUser($role, $username, $password, $name){
        DB::table('users')->insert([
            [
                'name' => $name,
                'username' => $username,
                'student_id' => null,
                'password' => Hash::make($password),
                'role_id' => $role, // student
            ],
        ]);
        return response()->json(['Success']);
    }

    public function getGroups(){
        return Group::all();
    }

    public function getGroupById($id){
        return Group::find($id);
    }

    public function updateGroup(Request $request, $id){
        $group = Group::find($id);
        if(!$group) return response()->json(['error'=>'id not found']);

        if(!$request->validate(['name'=>'required|string', 'line_group'=>'required|string'])){
            return response()->json(['error'=>'validation']);
        }

        $group->name = $request->input('name');
        $group->line_group = $request->input('line_group');
        $group->save();
        return response()->json(['success'=>'mantap']);
    }

    public function storeGroup(Request $request){
        $validated = $request->validate(['name'=>'required|string', 'line_group'=>'required|string']);
        if(!$validated){
            return response()->json(['error'=>'validation']);
        }
        $group = new Group;
        $group->name = $request->input('name');
        $group->line_group = $request->input('line_group');
        $group->save();
        return response()->json(['success'=>'mantap']);
    }

    public function getGroupCompanion($id){
        $groupCompanion = GroupCompanion::where('group_id', $id)->get()->first()->companions;
        return response()->json($groupCompanion);
    }

    public function getGroupStudents($id){
        $groupStudents = Group::find($id);
        if($groupStudents)
            return response()->json($groupStudents->students);
        else
            return response()->json(['error'=>'ID Not Found']);
    }

    public function getStudents(){
        return Student::all();
    }

    public function addStudent(Request $request){
        $validated = $request->validate([
            'nim'=> 'string|required',
            'name' => 'string|required',
            'nickname' => 'string',
            'password' => 'string',
            'address' => 'string',
            'group_id' => 'number'
        ]);

        if(!$validated){
            return response()->json(['error'=>'validation']);
        }

        $hasGroup = Group::find($request->input('group_id'));

        $student = new Student;
        $student->nim = $request->input('nim');
        $student->name = $request->input('name');
        $student->nickname = $request->input('nickname');
        $student->password = Hash::make($request->input('password'));
        $student->address = $request->input('address');
        $student->group_id = $hasGroup? $request->input('group_id'): null;

        return response()->json(['status'=>'success']);

    }
}
