<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class GroupCompanion extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'group_id', 'companion_id'
    ];


    public function companions()
    {
        return $this->hasMany(Companion::class, 'id', 'companion_id');
    }

    public static function getCombined(){
        return DB::table('companions AS c')
            ->leftJoin('group_companions AS g', 'g.companion_id', '=', 'c.id')
            ->leftJoin('groups AS sg', 'sg.id', '=', 'g.group_id')
            ->get();
    }
}
