<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('nim', 15)->unique();
            $table->string('name');
            $table->string('nickname')->default('Sobat IF ELSE');
            $table->string('address');
            $table->string('user_id');
            $table->string('group_id')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('line')->nullable();
            $table->string('avatar')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
