<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference',
        'status',
        'cart',
        'billing',
        'customer_name',
        'customer_email',
        'customer_phone',
        'payment_method',
        'payment_details',
        'subtotal_amount',
        'service_fee_amount',
        'tax_amount',
        'total_amount',
        'currency',
        'booking_reference',
        'metadata',
    ];

    protected $casts = [
        'cart' => 'array',
        'billing' => 'array',
        'payment_details' => 'array',
        'metadata' => 'array',
        'subtotal_amount' => 'float',
        'service_fee_amount' => 'float',
        'tax_amount' => 'float',
        'total_amount' => 'float',
    ];

    /**
     * Build a serialisable summary for API responses.
     */
    public function toApiArray(): array
    {
        return [
            'id' => $this->id,
            'reference' => $this->reference,
            'status' => $this->status,
            'cart' => $this->cart,
            'billing' => $this->billing,
            'customer' => [
                'name' => $this->customer_name,
                'email' => $this->customer_email,
                'phone' => $this->customer_phone,
            ],
            'payment' => [
                'method' => $this->payment_method,
                'details' => $this->payment_details,
            ],
            'amounts' => [
                'subtotal' => $this->subtotal_amount,
                'service_fee' => $this->service_fee_amount,
                'tax' => $this->tax_amount,
                'total' => $this->total_amount,
                'currency' => $this->currency,
            ],
            'booking_reference' => $this->booking_reference,
            'metadata' => $this->metadata,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}

