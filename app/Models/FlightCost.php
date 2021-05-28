<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlightCost extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'cost' => 'double'
    ];

    /**
     * Gets the from Airport.
     *
     * @return mixed
     */
    public function from()
    {
        return $this->belongsTo(Airport::class, 'from_iata_code', 'iata_code');
    }

    /**
     * Gets the to Airport.
     *
     * @return mixed
     */
    public function to()
    {
        return $this->belongsTo(Airport::class, 'to_iata_code', 'iata_code');
    }

    /**
     * Finds the FlightCost model for the specified airports.
     *
     * @param string $from From IATA code
     * @param string $to To IATA code
     * @return static
     */
    public static function findFlightCost($from, $to) {
        return static::firstWhere(['from_iata_code' => $from, 'to_iata_code' => $to]);
    }
}
