<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $table = "news";
    protected $fillable = [
        'title',
        'content',
        'image',
        'published_at',
        'is_published',
    ];

    public static function allNews($publishedOnly=true)
    {
        if($publishedOnly)
            return News::where('is_published', 1)
                ->orderByDesc('published_at')
                ->get();
        else
            return News::all()->sortDesc('published_at');
    }

    
    public static function threeNews()
    {
         return News::where('is_published', 1)
            ->orderByDesc('published_at')
            ->get()
            ->take(3);
    }
    public function edit($id)
    {
        return News::where('id', '=', $id)->first();
    }
    public function hapus($id)
    {
        return News::where('id', '=', $id)->delete();
    }
    public static function publish($id)
    {
        return News::where('id', '=', $id)->update(['is_published' => 1]);
    }
    public function draft($id)
    {
        return News::where('id', '=', $id)->update(['is_published' => 0]);
    }
    public function tambahData($data)
    {
        return News::create($data);
    }
    public static function updateData($id, $data)
    {
        return News::where('id', '=', $id)->update($data);
    }
}
