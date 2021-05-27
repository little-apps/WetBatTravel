<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('airports')->insert([
            ['iata_code' => 'YYC', 'airport' => 'Calgary International Airport'],
            ['iata_code' => 'YEG', 'airport' => 'Edmonton International Airport'],
            ['iata_code' => 'YUL', 'airport' => 'Montreal-Pierre Elliott Trudeau International Airport'],
            ['iata_code' => 'YOW', 'airport' => 'Ottawa Macdonald-Cartier International Airport'],
            ['iata_code' => 'YYZ', 'airport' => 'Toronto Pearson International Airport']
        ]);

    }
}
