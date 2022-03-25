<?php

namespace App\Http\Controllers;

use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function acceptLogin(Request $request){
        $token = Str::random(60);

        $request->user('web')->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return $token;
    }

    public function login(Request $request)
    {

        $credentials = $request->only('username', 'password');
        error_log(json_encode($credentials));

        if (auth('web')->attempt($credentials)) {

            $token = $this->acceptLogin($request);
            return response()->json([
                'status' => 'success',
                'token'  => $token,
                'user'   => auth('web')->user(),
                'msg'    => 'success',
            ], 200)->header('Authorization', 'Bearer '.$token);
        }
        error_log('test');

        return response()->json(['error' => 'login_error'], 401);
    }

}
