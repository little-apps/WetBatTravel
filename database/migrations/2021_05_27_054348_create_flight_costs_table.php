<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightCostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flight_costs', function (Blueprint $table) {
            $table->id();
            $table->char('from_iata_code', 3);
            $table->char('to_iata_code', 3);
            $table->decimal('cost');
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
        Schema::dropIfExists('flight_costs');
    }
}
