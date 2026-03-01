<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('event_inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('event_type');
            $table->unsignedInteger('expected_participants');
            $table->string('contact_person');
            $table->string('phone', 50);
            $table->date('preferred_date');
            $table->string('budget_range');
            $table->string('company')->nullable();
            $table->string('email');
            $table->text('event_description');
            $table->text('special_requirements')->nullable();
            $table->string('catering_needs');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('event_inquiries');
    }
};


