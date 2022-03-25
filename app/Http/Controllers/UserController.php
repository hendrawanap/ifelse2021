<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function passwordChange(Request $request){
        $validated = $request->validate([
            'password' => 'required|string|min:8'
        ]);

        if(!$validated){
            return (['error'=>'validation']);
        }

        $user = $request->user();
        $user->password = Hash::make($request->password);
        $user->save();
        return (['status'=>'success']);
    }
}
