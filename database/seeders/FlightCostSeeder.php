<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FlightCostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('flight_costs')->insert([
            ['from_iata_code' => 'YYC', 'to_iata_code' => 'YEG', 'cost' => 270.95],
            ['from_iata_code' => 'YYC', 'to_iata_code' => 'YUL', 'cost' => 447.95],
            ['from_iata_code' => 'YYC', 'to_iata_code' => 'YOW', 'cost' => 792.95],
            ['from_iata_code' => 'YYC', 'to_iata_code' => 'YYZ', 'cost' => 278.95],

            ['from_iata_code' => 'YEG', 'to_iata_code' => 'YYC', 'cost' => 264.99],
            ['from_iata_code' => 'YEG', 'to_iata_code' => 'YUL', 'cost' => 382.99],
            ['from_iata_code' => 'YEG', 'to_iata_code' => 'YOW', 'cost' => 396.99],
            ['from_iata_code' => 'YEG', 'to_iata_code' => 'YYZ', 'cost' => 224.99],

            ['from_iata_code' => 'YUL', 'to_iata_code' => 'YEG', 'cost' => 379.95],
            ['from_iata_code' => 'YUL', 'to_iata_code' => 'YYC', 'cost' => 426.95],
            ['from_iata_code' => 'YUL', 'to_iata_code' => 'YOW', 'cost' => 226.95],
            ['from_iata_code' => 'YUL', 'to_iata_code' => 'YYZ', 'cost' => 156.95],

            ['from_iata_code' => 'YOW', 'to_iata_code' => 'YEG', 'cost' => 440.99],
            ['from_iata_code' => 'YOW', 'to_iata_code' => 'YUL', 'cost' => 220.99],
            ['from_iata_code' => 'YOW', 'to_iata_code' => 'YYC', 'cost' => 336.99],
            ['from_iata_code' => 'YOW', 'to_iata_code' => 'YYZ', 'cost' => 90.99],

            ['from_iata_code' => 'YYZ', 'to_iata_code' => 'YEG', 'cost' => 339.95],
            ['from_iata_code' => 'YYZ', 'to_iata_code' => 'YUL', 'cost' => 185.95],
            ['from_iata_code' => 'YYZ', 'to_iata_code' => 'YOW', 'cost' => 85.95],
            ['from_iata_code' => 'YYZ', 'to_iata_code' => 'YYC', 'cost' => 324.95],
        ]);
    }
}
