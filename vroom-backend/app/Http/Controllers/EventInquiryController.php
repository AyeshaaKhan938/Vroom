<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EventInquiry;

class EventInquiryController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'eventType' => ['required', 'string', 'max:255'],
            'expectedParticipants' => ['required', 'integer', 'min:1'],
            'contactPerson' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'preferredDate' => ['required', 'date'],
            'budgetRange' => ['required', 'string', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'eventDescription' => ['required', 'string'],
            'specialRequirements' => ['nullable', 'string'],
            'cateringNeeds' => ['required', 'string', 'max:255'],
        ]);

        $inquiry = EventInquiry::create([
            'event_type' => $data['eventType'],
            'expected_participants' => $data['expectedParticipants'],
            'contact_person' => $data['contactPerson'],
            'phone' => $data['phone'],
            'preferred_date' => $data['preferredDate'],
            'budget_range' => $data['budgetRange'],
            'company' => $data['company'] ?? null,
            'email' => $data['email'],
            'event_description' => $data['eventDescription'],
            'special_requirements' => $data['specialRequirements'] ?? null,
            'catering_needs' => $data['cateringNeeds'],
        ]);

        return response()->json([
            'success' => true,
            'id' => $inquiry->id,
        ], 201);
    }
}


