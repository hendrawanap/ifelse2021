<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{

    public function handle($request, Closure $next, ...$guards)
    {
        if ($this->authenticate($request, $guards) === 'authentication_error') {
            return response()->json(['error'=>'Unauthorized']);
        }
        return $next($request);
    }

    protected function authenticate($request, array $guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                return 'okay';
            }
        }

        return 'authentication_error';
    }
}
