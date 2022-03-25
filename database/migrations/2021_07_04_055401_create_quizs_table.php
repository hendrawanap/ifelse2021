<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('quizs', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('label')->default('Quiz');
            $table->dateTime('start_at');
            $table->dateTime('end_at');
            $table->integer('agenda_id');
            $table->integer('total')->default(15);
            $table->integer('duration_sec')->default(15*60);
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quizs');
    }
}
