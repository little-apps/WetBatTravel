<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'start_date' => 'date:Y-m-d',
        'end_date' => 'date:Y-m-d',
        'adjusted_cost' => 'double'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'from_iata_code',
        'to_iata_code',
        'start_date',
        'end_date',
        'transportation_id',
        'people',
        'contact_name'
    ];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['from', 'to', 'transportation'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['cost_items'];

    /**
     * Gets the from/departure airport
     *
     * @return App\Models\Airport
     */
    public function from() {
        return $this->belongsTo(Airport::class, 'from_iata_code', 'iata_code');
    }

    /**
     * Gets the to/destination airport
     *
     * @return App\Models\Airport
     */
    public function to() {
        return $this->belongsTo(Airport::class, 'to_iata_code', 'iata_code');
    }

    /**
     * Gets the transportation being used.
     *
     * @return App\Models\Transportation
     */
    public function transportation() {
        return $this->belongsTo(Transportation::class);
    }

    /**
     * Gets the calculated costs for the quote.
     *
     * @return array
     */
    public function getCostItemsAttribute() {
        $items = collect();
        $people = $this->people;

        // Determine cost for leaving
        $flightCostTo = FlightCost::findFlightCost($this->from_iata_code, $this->to_iata_code)->cost * $people;

        $flightCostToDesc = sprintf('Flight to %s', $this->to->airport);
        $items->push(['id' => 'flightCostTo', 'description' => $flightCostToDesc, 'price' => $flightCostTo]);

        // Determine cost for arriving back
        $flightCostBack = FlightCost::findFlightCost($this->to_iata_code, $this->from_iata_code)->cost * $people;

        $flightCostBackDesc = sprintf('Flight to %s', $this->from->airport);
        $items->push(['id' => 'flightCostBack', 'description' => $flightCostBackDesc, 'price' => $flightCostBack]);

        // Determine number of days away
        $days = $this->end_date->diffInDays($this->start_date);

        // Determine cost for transportation
        $transportCost = $this->transportation->cost_per_day * $days;

        $transportationDesc = sprintf('Transportation (%s)', $this->transportation->company);
        $items->push(['id' => 'transportCost', 'description' => $transportationDesc, 'price' => $transportCost]);

        // Determine cost for hotel
        $hotelCost = $this->to->hotel->cost_per_night * $days * $people;

        $hotelDesc = sprintf('Hotel (%s)', $this->to->hotel->hotel);
        $items->push(['id' => 'hotelCost', 'description' => $hotelDesc, 'price' => $hotelCost]);

        // Calculate sub-total
        $subTotal = round($flightCostTo + $flightCostBack + $transportCost + $hotelCost, 2);

        $items->push(['id' => 'subTotal', 'description' => 'Sub Total', 'price' => $subTotal]);

        // Calculate tax
        $tax = round($subTotal * 0.05, 2);

        $items->push(['id' => 'tax', 'description' => 'Tax', 'price' => $tax]);

        // Calculate total
        $total = round($subTotal + $tax, 2);

        $items->push(['id' => 'total', 'description' => 'Total', 'price' => $total]);

        return $items;
    }
}
