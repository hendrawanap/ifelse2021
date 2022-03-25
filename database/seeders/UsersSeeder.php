<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Ali Akbar',
                'username' => 'duwik',
                'student_id' => 1,
                'password' => Hash::make('password123'),
                'role_id' => 1,
            ],
            [
                'name' => 'Admin',
                'username' => 'admin',
                'student_id' => null,
                'password' => Hash::make('uiewglaf4t3'),
                'role_id' => 2, // admin
            ],
            [
                'name' => 'Quality Evaluator',
                'username' => 'user_qe',
                'student_id' => null,
                'password' => Hash::make('wa3vi4rsekj'),
                'role_id' => 3,
            ],
            [
                'name' => 'HUMAS',
                'username' => 'humas_dong',
                'student_id' => null,
                'password' => Hash::make('aiucryowilae'),
                'role_id' => 4,
            ],
            [
                'name' => 'Pendamping',
                'username' => 'pendamping',
                'student_id' => null,
                'password' => Hash::make('aiufo4aeber'),
                'role_id' => 5
            ]
        ]);
    }
}
