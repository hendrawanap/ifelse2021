<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGraduationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('graduations', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->integer('student_id');
            $table->boolean('is_graduated');
            $table->float('score_1');
            $table->float('score_2');
            $table->float('score_3');
            $table->float('score_4');
            $table->string('certif_url')->nullable();
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
        Schema::dropIfExists('graduations');
    }
}
