<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransportationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transportations')->insert([
            ['company' => 'Heinz', 'type' => 'Car', 'cost_per_day' => 49.99],
            ['company' => 'Enterprise', 'type' => 'Van', 'cost_per_day' => 34.99],
            ['company' => 'GOGO', 'type' => 'Bus', 'cost_per_day' => 19.99]
        ]);
    }
}
