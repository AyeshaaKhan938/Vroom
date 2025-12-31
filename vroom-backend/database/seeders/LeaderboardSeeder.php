<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LeaderboardEntry;

class LeaderboardSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            ['rank' => 1, 'lap_time' => '1:25.342', 'driver_name' => 'Zain Malik', 'car' => 'BMW M3', 'weather' => 'Sunny', 'setup' => 'Tuned', 'tire_type' => 'Slick'],
            ['rank' => 2, 'lap_time' => '1:25.567', 'driver_name' => 'Aisha Khan', 'car' => 'Porsche 911', 'weather' => 'Cloudy', 'setup' => 'Stock', 'tire_type' => 'Slick'],
            ['rank' => 3, 'lap_time' => '1:26.123', 'driver_name' => 'Omar Farooq', 'car' => 'Nissan GT-R', 'weather' => 'Rainy', 'setup' => 'Tuned', 'tire_type' => 'Wet'],
        ];

        foreach ($rows as $r) {
            LeaderboardEntry::updateOrCreate(['rank' => $r['rank']], $r);
        }
    }
}
