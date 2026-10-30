<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\HeroSectionController;
use App\Http\Controllers\BeritaUtamaController;
use App\Http\Controllers\BeritaTrplController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function () {
    return response()->json(['message' => 'Halo dari Laravel!']);
});


Route::apiResource('berita', BeritaController::class)
    ->parameters(['berita' => 'berita']);

Route::apiResource('hero-sections', HeroSectionController::class);

Route::apiResource('berita-utama', BeritaUtamaController::class);
Route::apiResource('berita-trpl', BeritaTrplController::class);

