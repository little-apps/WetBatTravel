<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Airport;

class AirportsController extends Controller
{
    public function all(Request $request) {
        return Airport::all();
    }
}
