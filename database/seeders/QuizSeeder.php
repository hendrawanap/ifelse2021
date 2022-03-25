<?php

namespace Database\Seeders;

use App\Models\Question;
use App\Models\QuizQuestion;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quizs')->insert([[
            'start_at' => '2021-07-01',
            'end_at'   => '2021-07-30',
            'is_published' => true,
            'agenda_id' => 1,
        ],[
            'start_at' => '2021-08-01',
            'end_at'   => '2021-09-02',
            'is_published' => true,
            'agenda_id' => 2,
        ],[
            'start_at' => '2021-07-10',
            'end_at'   => '2021-07-30',
            'is_published' => false,
            'agenda_id' => 1,
        ],[
            'start_at' => '2021-07-10',
            'end_at'   => '2021-07-30',
            'is_published' => true,
            'agenda_id' => 3,
        ]]);

        foreach (range(1, 4) as $quizId)
            foreach(range(1, 60) as $index){
                $array = ['A', 'B', 'C', 'D', 'E'];
                $k = $k = array_rand($array);
                $v = $array[$k];

                $question_id = Question::create([

                    'mce_question'  => "Apa yang menyebabkan pertanyaan nomor $index menjadi pertanyaan? Jawabannya: ".$v,
                    'choices'       => [
                        ['key'=>'A','value'=>'Ini Jawabannya?'],
                        ['key'=>'B','value'=>'Iya ini'],
                        ['key'=>'C','value'=>'Emang Iya?'],
                        ['key'=>'D','value'=>'Beneran?'],
                        ['key'=>'E','value'=>'Bener dong'],
                    ],
                    'answer_key'    => $v

                ])->id;
                QuizQuestion::create([

                   'quiz_id' => $quizId,
                   'question_id' => $question_id

                ]);
            }
    }
}
