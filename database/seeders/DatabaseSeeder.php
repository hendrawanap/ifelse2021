<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            UsersSeeder::class,
            AgendaSeeder::class,
            NewsSeeder::class,
            TasksSeeder::class,
            QuizSeeder::class,
            StudentSeeder::class,
            CompanionSeeder::class,
            GroupSeeder::class,
        ]);
    }
}
