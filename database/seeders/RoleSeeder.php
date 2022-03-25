<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            [
                'id' => 1,
                'name' => 'student'
            ],
            [
                'id' => 2,
                'name' => 'admin'
            ],
            [
                'id' => 3,
                'name' => 'quality evaluator'
            ],
            [
                'id' => 4,
                'name' => 'humas'
            ],
            [
                'id' => 5,
                'name' => 'pendamping'
            ]
        ]);
    }
}
