<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RacerRegistration;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RacerRegistrationController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'full_name' => ['required','string','max:255'],
            'date_of_birth' => ['required','date'],
            'gender' => ['required','string','max:20'],
            'phone' => ['required','string','max:50'],
            'email' => ['required','email','max:255'],
            'address' => ['required','string','max:500'],

            'license_number' => ['nullable','string','max:255'],
            'years_experience' => ['required','integer','min:0','max:80'],
            'racing_category' => ['required','string','max:50'],
            'previous_events' => ['nullable','string'],

            'vehicle_make' => ['required','string','max:100'],
            'vehicle_model' => ['required','string','max:100'],
            'vehicle_year' => ['required','string','max:10'],
            'engine_size' => ['required','string','max:50'],
            'modifications' => ['nullable','string'],
            'technical_specs' => ['nullable','string'],

            'emergency_contact_name' => ['required','string','max:255'],
            'emergency_relationship' => ['required','string','max:100'],
            'emergency_phone' => ['required','string','max:50'],

            'blood_type' => ['nullable','string','max:5'],
            'medical_conditions' => ['nullable','string'],
            'medications' => ['nullable','string'],

            'insurance_provider' => ['required','string','max:255'],
            'policy_number' => ['required','string','max:255'],
            'coverage_amount' => ['required','string','max:255'],

            'payment_method' => ['required','string','max:50'],

            // files
            'drivers_license' => ['required','file','mimes:pdf,jpg,jpeg,png','max:5120'],
            'racing_license' => ['nullable','file','mimes:pdf,jpg,jpeg,png','max:5120'],
            'insurance_certificate' => ['required','file','mimes:pdf,jpg,jpeg,png','max:5120'],
        ]);

        // Handle files
        $paths = [
            'drivers_license_path' => null,
            'racing_license_path' => null,
            'insurance_certificate_path' => null,
        ];

        if ($request->hasFile('drivers_license')) {
            $paths['drivers_license_path'] = $request->file('drivers_license')->store('racer_docs', 'public');
        }
        if ($request->hasFile('racing_license')) {
            $paths['racing_license_path'] = $request->file('racing_license')->store('racer_docs', 'public');
        }
        if ($request->hasFile('insurance_certificate')) {
            $paths['insurance_certificate_path'] = $request->file('insurance_certificate')->store('racer_docs', 'public');
        }

        // Try DB first
        try {
            $registration = RacerRegistration::create(array_merge($data, $paths));

            return response()->json([
                'success' => true,
                'registration_id' => $registration->id,
                'files' => $paths,
                'storage' => 'database',
            ], 201);
        } catch (\Throwable $e) {
            // No DB? fall back to JSON file so the flow still works
            $id = 'REG-' . Str::upper(Str::random(10));
            $payload = array_merge($data, $paths, [
                'id' => $id,
                'stored_at' => now()->toIso8601String(),
            ]);
            $filePath = 'racer_registrations/' . $id . '.json';
            Storage::disk('local')->put($filePath, json_encode($payload, JSON_PRETTY_PRINT));

            return response()->json([
                'success' => true,
                'registration_id' => $id,
                'files' => $paths,
                'storage' => 'file',
            ], 201);
        }
    }
}
