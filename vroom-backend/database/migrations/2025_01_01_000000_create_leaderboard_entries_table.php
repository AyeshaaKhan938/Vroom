<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('leaderboard_entries', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('rank')->index();
            $table->string('lap_time');
            $table->string('driver_name');
            $table->string('car');
            $table->string('weather')->nullable();
            $table->enum('setup', ['Stock', 'Tuned'])->default('Stock');
            $table->string('tire_type')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('leaderboard_entries');
    }
};
