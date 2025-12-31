<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeaderboardEntry extends Model
{
    protected $fillable = [
        'rank', 'lap_time', 'driver_name', 'car', 'weather', 'setup', 'tire_type'
    ];

    public $timestamps = false;
}
