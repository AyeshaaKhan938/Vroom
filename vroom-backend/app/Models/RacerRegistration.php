<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RacerRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name', 'date_of_birth', 'gender', 'phone', 'email', 'address',
        'license_number', 'years_experience', 'racing_category', 'previous_events',
        'vehicle_make', 'vehicle_model', 'vehicle_year', 'engine_size', 'modifications', 'technical_specs',
        'emergency_contact_name', 'emergency_relationship', 'emergency_phone',
        'blood_type', 'medical_conditions', 'medications',
        'insurance_provider', 'policy_number', 'coverage_amount',
        'drivers_license_path', 'racing_license_path', 'insurance_certificate_path',
        'payment_method', 'status'
    ];
}
