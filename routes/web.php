<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/clear-cache', function(){
    Artisan::call('route:clear');
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    return (['data'=>'succeeded']);
});

Route::get('/images/{any?}', function($path){
    return Response::stream(function () use($path) {

        $filename = '/images/'.$path;

        readfile($filename);

    }, 200, ['content-type' => 'image/jpeg']);
});
Route::get('/admin/{any?}', function () {
    return view('admin');
});
Route::get('/{any?}', function () {
    return view('static');
});
Route::get('/{any?}/{more?}', function () {
    return view('static');
});
