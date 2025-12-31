<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventInquiry extends Model
{
    protected $fillable = [
        'event_type',
        'expected_participants',
        'contact_person',
        'phone',
        'preferred_date',
        'budget_range',
        'company',
        'email',
        'event_description',
        'special_requirements',
        'catering_needs',
    ];
}


