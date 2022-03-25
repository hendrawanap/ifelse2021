<?php

namespace App\Models;

use App\Casts\Tanggal;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'title',
        'content',
        'is_published',
        'start_at',
        'end_at',
        'total',
        'fields'
    ];
    protected $casts = [
        'fields'=>'array',
    ];

    public function agenda(){
        return $this->belongsTo(Agenda::class);
    }

    public function submissions(){
        return $this->hasMany(StudentTask::class, 'task_id', 'id')
            ->with('student');
    }


    public function allData()
    {
        $news = Task::where('is_published', 1)
            ->orderByDesc('start_at')
            ->get();
        return $news;
    }
    public function edit($id)
    {
        return Task::where('id', '=', $id)->first();
    }
    public function hapus($id)
    {
        return Task::where('id', '=', $id)->delete();
    }
    public function publish($id)
    {
        return Task::where('id', '=', $id)->update(['is_published' => 1]);
    }
    public function draft($id)
    {
        return Task::where('id', '=', $id)->update(['is_published' => 0]);
    }
    public function tambahData($data)
    {
        return Task::create($data);
    }
    public function updateData($id, $data)
    {
        return Task::where('id', '=', $id)->update($data);
    }
}
