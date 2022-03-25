<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendataansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pendataans', function (Blueprint $table) {
            $table->id();
            $table->integer('student_id');
            $table->integer('agenda_id');
            $table->integer('reason');
            $table->text('details');
            $table->text('evidence_1');
            $table->text('evidence_2');
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
        Schema::dropIfExists('pendataans');
    }
}
