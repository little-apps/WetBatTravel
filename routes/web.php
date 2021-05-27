<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('{slug}', AppController::class)->where('slug', '(?!api)([A-z\d\-\/_.]+)?');

// Needed for Illuminate\Auth\Notifications\ResetPassword
Route::get('password/reset/{token}', AppController::class)->name('password.reset');

// Needed for Illuminate\Auth\Notifications\VerifyEmail
Route::get('email/verify/{id}', AppController::class)->name('verification.verify');
