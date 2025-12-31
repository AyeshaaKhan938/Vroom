<?php

namespace App\Http\Controllers;

use App\Models\LeaderboardEntry;
use Illuminate\Http\Request;

class LeaderboardController extends Controller
{
    public function index(Request $request)
    {
        $q = $request->query('q');
        $manufacturer = $request->query('manufacturer');
        $tireType = $request->query('tire_type');
        $setup = $request->query('setup');

        $query = LeaderboardEntry::query()
            ->select(['id', 'rank', 'lap_time', 'driver_name', 'car', 'weather', 'setup', 'tire_type'])
            ->orderBy('rank');

        // Search filter (driver name or car)
        if ($q) {
            $query->where(function ($sub) use ($q) {
                $sub->where('driver_name', 'LIKE', "%{$q}%")
                    ->orWhere('car', 'LIKE', "%{$q}%");
            });
        }

        // Manufacturer filter (extract from car field, e.g., "BMW M3" -> "BMW")
        if ($manufacturer) {
            $query->where('car', 'LIKE', "{$manufacturer}%");
        }

        // Tire type filter
        if ($tireType) {
            $query->where('tire_type', $tireType);
        }

        // Setup filter (Stock/Tuned)
        if ($setup) {
            $query->where('setup', $setup);
        }

        return response()->json($query->get());
    }
}
