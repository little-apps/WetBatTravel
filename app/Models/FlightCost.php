<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlightCost extends Model
{
    use HasFactory;

    /**
     * Gets the from Airport.
     *
     * @return mixed
     */
    public function from()
    {
        return $this->belongsTo(Airport::class);
    }

    /**
     * Gets the to Airport.
     *
     * @return mixed
     */
    public function to()
    {
        return $this->belongsTo(Airport::class);
    }

    /**
     * Finds the FlightCost model for the specified airports.
     *
     * @param string $from From IATA code
     * @param string $to To IATA code
     * @return static
     */
    public static function determineFlightCost($from, $to) {
        return static::firstWhere(['from_iata_code' => $from, 'to_iata_code' => $to]);
    }
}
