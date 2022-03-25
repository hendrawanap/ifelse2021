<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AgendaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('agendas')->insert(
            [
                'title' => 'Agenda 1',
                'content' => Str::random(100),
                'image' => 'agenda1.jpg',
                'start_at' => '2021-08-08',
                'end_at' => '2021-08-18',
            ],
        );
        DB::table('agendas')->insert(
            [
                'title' => 'Agenda 2',
                'content' => Str::random(100),
                'image' => 'agenda1.jpg',
                'start_at' => '2021-08-08',
                'end_at' => '2021-08-18',
            ],
        );
        DB::table('agendas')->insert(
            [
                'title' => 'Agenda 3',
                'content' => Str::random(100),
                'image' => 'agenda1.jpg',
                'start_at' => '2021-08-08',
                'end_at' => '2021-08-18',
            ],
        );
    }
}
