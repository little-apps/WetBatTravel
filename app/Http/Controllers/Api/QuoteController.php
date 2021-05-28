<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Quote::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'from_iata_code' => 'required|exists:airports,iata_code|different:to_iata_code',
            'to_iata_code' => 'required|exists:airports,iata_code|different:from_iata_code',
            'start_date' => 'required|date|after:yesterday',
            'end_date' => 'required|date|after:start_date',
            'people' => 'required|numeric|min:1',
            'transportation_id' => 'required|exists:transportations,id',
            'contact_name' => 'required|max:255'
        ]);

        return tap(Quote::make([
            'from_iata_code' => $request->from_iata_code,
            'to_iata_code' => $request->to_iata_code,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'people' => $request->people,
            'transportation_id' => $request->transportation_id,
            'contact_name' => $request->contact_name
        ]), function($quote) {
            $item = $quote->getCostItemsAttribute()->where('id', 'total')->first();

            $quote->adjusted_cost = $item['price'];

            $quote->save();
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Quote::where('id', $id)->firstOrFail();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
