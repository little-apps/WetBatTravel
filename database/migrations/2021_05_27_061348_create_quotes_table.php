<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotes', function (Blueprint $table) {
            $table->id();
            $table->char('from_iata_code', 3);
            $table->char('to_iata_code', 3);
            $table->date('start_date');
            $table->date('end_date');
            $table->unsignedInteger('destination_id');
            $table->integer('people');
            $table->string('contact_name');
            $table->decimal('adjusted_cost')->nullable();
            $table->timestamps();

            $table->foreign('from_iata_code')->references('iata_code')->on('airports');
            $table->foreign('to_iata_code')->references('iata_code')->on('airports');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quotes');
    }
}
