<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('racer_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->string('phone');
            $table->string('email');
            $table->string('address');

            $table->string('license_number')->nullable();
            $table->unsignedInteger('years_experience');
            $table->string('racing_category');
            $table->text('previous_events')->nullable();

            $table->string('vehicle_make');
            $table->string('vehicle_model');
            $table->string('vehicle_year');
            $table->string('engine_size');
            $table->text('modifications')->nullable();
            $table->text('technical_specs')->nullable();

            $table->string('emergency_contact_name');
            $table->string('emergency_relationship');
            $table->string('emergency_phone');

            $table->string('blood_type')->nullable();
            $table->text('medical_conditions')->nullable();
            $table->text('medications')->nullable();

            $table->string('insurance_provider');
            $table->string('policy_number');
            $table->string('coverage_amount');

            // Uploaded documents
            $table->string('drivers_license_path')->nullable();
            $table->string('racing_license_path')->nullable();
            $table->string('insurance_certificate_path')->nullable();

            $table->string('payment_method');
            $table->string('status')->default('pending');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('racer_registrations');
    }
};
