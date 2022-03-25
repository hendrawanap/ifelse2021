<?php

namespace Database\Seeders;

use App\Models\Companion;
use App\Models\Group;
use App\Models\GroupCompanion;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $companions = Companion::all();
        foreach ($companions as $companion) {
            $companion_id = $companion->id;
            $group_id = Group::insertGetId([]);
            GroupCompanion::insert(['group_id' => $group_id, 'companion_id'=>$companion_id]);
        }
    }
}
