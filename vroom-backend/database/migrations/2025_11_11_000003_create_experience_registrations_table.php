<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('experience_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('form_type'); // e.g., time-attack, go-karting, drifting, corporate, testing
            $table->json('data'); // arbitrary payload from the form
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('experience_registrations');
    }
};


