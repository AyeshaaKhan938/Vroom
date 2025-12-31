<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExperienceRegistration;

class ExperienceRegistrationController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'form_type' => ['required', 'string', 'max:100'],
            'payload' => ['required', 'array'],
        ]);

        $reg = ExperienceRegistration::create([
            'form_type' => $data['form_type'],
            'data' => $data['payload'],
        ]);

        return response()->json([
            'success' => true,
            'id' => $reg->id,
        ], 201);
    }
}


