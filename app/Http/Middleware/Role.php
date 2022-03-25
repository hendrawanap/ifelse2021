<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param array $roles
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if(in_array($request->user()->role->name, $roles))
            return $next($request);
        else
            return response()->json(['error'=>'Unauthorized']);
    }
}
