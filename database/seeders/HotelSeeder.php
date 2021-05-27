<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hotels')->insert([
            ['airport_iata_code' => 'YYC', 'hotel' => 'SAIT Guest House', 'cost_per_night' => 59.99],
            ['airport_iata_code' => 'YEG', 'hotel' => 'NAIT Guest House', 'cost_per_night' => 59.99],
            ['airport_iata_code' => 'YUL', 'hotel' => 'Hotel Nelligun', 'cost_per_night' => 119.95],
            ['airport_iata_code' => 'YOW', 'hotel' => 'Chateau Laurier', 'cost_per_night' => 449.99],
            ['airport_iata_code' => 'YYZ', 'hotel' => 'Fairmont Royal York', 'cost_per_night' => 299.95]
        ]);
    }
}
