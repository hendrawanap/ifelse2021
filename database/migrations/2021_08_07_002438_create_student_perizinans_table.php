<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentPerizinansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_perizinans', function (Blueprint $table) {
            $table->id();
            $table->integer('agenda_id');
            $table->integer('perizinan_id');
            $table->string('residence');
            $table->integer('camera_type'); // Types: Kamera, lainnya. (0 = Camera(built in), 1 = Camera Hp)
            $table->text('details');
            $table->string('evidence');
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
        Schema::dropIfExists('student_perizinans');
    }
}
