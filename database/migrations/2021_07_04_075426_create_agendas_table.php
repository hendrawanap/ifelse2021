<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateAgendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agendas', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->string('image');
            $table->dateTime('start_at');
            $table->dateTime('end_at');
            $table->dateTime('pendataan_start_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->dateTime('pendataan_end_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->dateTime('perizinan_start_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->dateTime('perizinan_end_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->boolean('is_published')->default(true);
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
        Schema::dropIfExists('agendas');
    }
}
