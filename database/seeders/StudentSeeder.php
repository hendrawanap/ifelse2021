<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('students')->insert([
           'nim' => '195150200111014',
           'name' => 'Ali Akbar',
           'address' => 'Condet',
           'nickname' => 'Ali',
           'user_id' => 'test',
           'line' => 'ali_000',
           'group_id' => 1,
           'whatsapp' => '085157830644',
           'avatar' => 'some.jpg'
        ]);
    }
}
