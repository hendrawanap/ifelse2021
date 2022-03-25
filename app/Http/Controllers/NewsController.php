<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Models\News;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->News = new News();
    }

    public function getThreeNews()
    {
        return (['news'=>News::threeNews()]);
    }
    public function getAllNews()
    {
        return News::all();
    }
    public function getPublished()
    {
        return News::where('is_published', true)
        ->orderByDesc('published_at')
        ->get();
    }
    public function show($id)
    {
        $news = News::find($id);
        if(!$news){
            return ['error' => 'not found'];
        }
        if($news->is_published){
            return $news;
        } else {
            return ['error' => 'not found'];
        }
    }

    public function edit($id)
    {
        return News::find($id); //view edit
    }

    public function hapus($id)
    {
        $prosesHapus = $this->News->hapus($id);
        if ($prosesHapus) {
            Cache::forget('news');
            return; // view halaman
        }

        return "terjadi kesalahan cuyy, kontak it aja ya";
    }

    public function publish($id)
    {
            return News::publish($id);
    }

    public function draft($id)
    {

            return $this->News->draft($id);
    }
    public function toggleStatus(Request $request){
        $validated = $request->validate(['id'=>'required|integer']);
        if(!$validated){
            return response()->json(['error' => 'validation']);
        }
        $id = $request->input('id');
        $status = $request->is_published;
            $bs = News::find($id);
            $bs->is_published = !$status;
            error_log('test');
            $bs->save();
        return response()->json(['status'=>'success']);
    }
    public function aksiTambah(Request $request)
    {
        Log::error($request);
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' =>  'required',
            'published_at' => 'required',
        ]);

        if(!$validated)
            return response()->json(['error'=>'validation']);

         $directory      = 'news/' . Carbon::now()->monthName; // lokasi penyimpanan
         $file           = $request->file('image');
         $random_id = Str::random(60);
         $filename = $random_id . $file->getClientOriginalExtension();

        $file->move('images/'.$directory, $filename); // memindah file ke lokasi penyimpanan


        $news = new News;
        $news->title = $request->input('title');
        $news->content = $request->input('content');
        $news->image = $directory . '/' . $filename;
        $news->published_at = $request->input('published_at');
        $news->is_published = $request->input('is_published');
        $news->save();

        Cache::forget('news');
        return response()->json(['status'=>'success']);
    }

    public function update(Request $request, $id)
    {

        $news = News::find($id);
        if(!$news)
            return (['error' => 'id not found']);

        $news->title = $request->input('title');
        $news->content = $request->input('content');
        if($request->has('published_at'))
        $news->published_at = $request->input('published_at');

        if($request->hasFile('image')){
            $directory      = 'news/' . Carbon::now()->monthName; // lokasi penyimpanan
            $file           = $request->file('image');
            $random_id = Str::random(60);
            $filename = $random_id . $file->getClientOriginalName();

            $file->move('images/'.$directory, $filename); // memindah file ke lokasi penyimpanan
            $news->image = $directory . '/' . $filename;
        }

        $news->save();

        Cache::forget('news');
        return response()->json(['status'=>'success']);
    }

//    public function uploadImage(Request $request)
//    {
//
//        $imageFolder = ""; //view halaman
//
//        reset($_FILES);
//        $temp = current($_FILES);
//        if (is_uploaded_file($temp['tmp_name'])) {
//            if (preg_match("/([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/", $temp['name'])) {
//                header("HTTP/1.1 400 Invalid file name.");
//                return;
//            }
//
//            if (!in_array(strtolower(pathinfo($temp['name'], PATHINFO_EXTENSION)), array("gif", "jpg", "png"))) {
//                header("HTTP/1.1 400 Invalid extension.");
//                return;
//            }
//
//            $filetowrite = $imageFolder . $temp['name'];
//            move_uploaded_file($temp['tmp_name'], $filetowrite);
//
//            echo json_encode(array('location' => url($filetowrite)));
//        } else {
//            header("HTTP/1.1 500 Server Error");
//        }
//    }
}
