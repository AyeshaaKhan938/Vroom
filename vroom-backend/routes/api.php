<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\RacerRegistrationController;
use App\Http\Controllers\EventInquiryController;
use App\Http\Controllers\ExperienceRegistrationController;
use App\Http\Controllers\ContactInquiryController;

Route::get('/leaderboard', [LeaderboardController::class, 'index']);

Route::prefix('checkout')->group(function () {
    Route::post('/cart', [CheckoutController::class, 'storeCart']);
    Route::post('/{order}/billing', [CheckoutController::class, 'storeBilling']);
    Route::post('/{order}/payment', [CheckoutController::class, 'storePayment']);
    Route::get('/{order}', [CheckoutController::class, 'show']);
});

Route::post('/racer-registrations', [RacerRegistrationController::class, 'store']);
Route::post('/event-inquiries', [EventInquiryController::class, 'store']);
Route::post('/experience-registrations', [ExperienceRegistrationController::class, 'store']);
Route::post('/contact-inquiries', [ContactInquiryController::class, 'store']);
