<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class CheckoutController extends Controller
{
    /**
     * Step 1: create/update cart information and return order summary.
     */
    public function storeCart(Request $request)
    {
        $data = $request->validate([
            'product' => ['required', 'string', 'max:255'],
            'package' => ['nullable', 'string', 'max:255'],
            'quantity' => ['required', 'integer', 'min:1'],
            'unit_price' => ['required', 'numeric', 'min:0'],
            'service_fee' => ['nullable', 'numeric', 'min:0'],
            'gst_rate' => ['nullable', 'numeric', 'min:0'],
            'promo_code' => ['nullable', 'string', 'max:255'],
        ]);

        $quantity = $data['quantity'];
        $unitPrice = $data['unit_price'];
        $serviceFee = $data['service_fee'] ?? 500;
        $gstRate = $data['gst_rate'] ?? 0.17; // 17%

        $subtotal = $unitPrice * $quantity;
        $taxableBase = $subtotal + $serviceFee;
        $tax = round($taxableBase * $gstRate, 2);
        $total = $subtotal + $serviceFee + $tax;

        $cartPayload = [
            'product' => $data['product'],
            'package' => $data['package'] ?? null,
            'quantity' => $quantity,
            'unit_price' => $unitPrice,
            'service_fee' => $serviceFee,
            'gst_rate' => $gstRate,
            'promo_code' => $data['promo_code'] ?? null,
        ];

        $order = Order::create([
            'reference' => (string) Str::uuid(),
            'status' => 'billing',
            'cart' => $cartPayload,
            'subtotal_amount' => $subtotal,
            'service_fee_amount' => $serviceFee,
            'tax_amount' => $tax,
            'total_amount' => $total,
            'metadata' => [
                'event_date' => 'March 15, 2024',
                'event_time' => '2:00 PM',
                'duration' => '60 minutes',
                'participants_label' => '2 Adults',
                'venue' => 'Vroom Racing Circuit',
                'venue_address' => 'GT Road, Near Kallar Kahar, Chakwal District, Punjab, Pakistan',
            ],
        ]);

        return response()->json([
            'order' => $order->fresh()->toApiArray(),
        ], 201);
    }

    /**
     * Step 2: capture billing information.
     */
    public function storeBilling(Request $request, Order $order)
    {
        $data = $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'street_address' => ['required', 'string', 'max:500'],
            'city' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'postal_code' => ['required', 'string', 'max:50'],
            'country' => ['required', 'string', 'max:2'],
            'emergency_contact_name' => ['required', 'string', 'max:255'],
            'emergency_phone' => ['required', 'string', 'max:50'],
            'relationship' => ['required', 'string', 'max:255'],
            'subscribe_newsletter' => ['nullable', 'boolean'],
            'sms_notifications' => ['nullable', 'boolean'],
        ]);

        $order->update([
            'billing' => $data,
            'customer_name' => $data['first_name'] . ' ' . $data['last_name'],
            'customer_email' => $data['email'],
            'customer_phone' => $data['phone'],
            'status' => 'payment',
        ]);

        return response()->json([
            'order' => $order->fresh()->toApiArray(),
        ]);
    }

    /**
     * Step 3: confirm payment method and finalise booking.
     */
    public function storePayment(Request $request, Order $order)
    {
        $data = $request->validate([
            'payment_method' => ['required', 'string', 'in:bank_transfer'],
            'payment_proof' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:5120'],
        ]);

        $paymentProof = $request->file('payment_proof');
        $storedPath = $paymentProof->store('payment-proofs', 'public');

        $transactionId = 'TXN-' . strtoupper(Str::random(12));
        $bookingReference = 'VRC-' . now()->format('Ymd') . '-' . strtoupper(Str::random(5));

        $order->update([
            'payment_method' => $data['payment_method'],
            'payment_details' => [
                'status' => 'awaiting_verification',
                'transaction_id' => $transactionId,
                'paid_at' => now()->toIso8601String(),
                'payment_proof' => [
                    'path' => $storedPath,
                    'url' => Storage::disk('public')->url($storedPath),
                    'original_name' => $paymentProof->getClientOriginalName(),
                ],
            ],
            'status' => 'manual_review',
            'booking_reference' => $bookingReference,
        ]);

        $freshOrder = $order->fresh();

        $this->emailAdminAboutTransfer($freshOrder);
        $this->emailCustomerAcknowledgement($freshOrder);

        return response()->json([
            'order' => $freshOrder->toApiArray(),
        ]);
    }

    protected function emailAdminAboutTransfer(Order $order): void
    {
        $adminEmail = config('mail.contact_to') ?? env('CONTACT_TO');
        if (!$adminEmail) {
            return;
        }

        $details = $order->payment_details ?? [];
        $proof = $details['payment_proof'] ?? [];
        $proofUrl = $proof['url'] ?? null;

        try {
            Log::info('Checkout: preparing to email admin about bank transfer', [
                'admin_email' => $adminEmail,
                'order_id' => $order->id,
                'order_reference' => $order->reference,
                'booking_reference' => $order->booking_reference,
                'proof_url' => $proofUrl,
            ]);

            Mail::send(
                'emails.bank_transfer_admin',
                [
                    'order' => $order,
                    'proofUrl' => $proofUrl,
                ],
                function ($mail) use ($adminEmail) {
                    $mail->to($adminEmail)
                        ->subject('Manual bank transfer pending verification');
                }
            );
        } catch (\Throwable $e) {
            Log::error('Checkout: failed to send admin bank transfer email', [
                'order_id' => $order->id ?? null,
                'error' => $e->getMessage(),
            ]);
            // Ignore mail failures so checkout can complete.
        }
    }

    protected function emailCustomerAcknowledgement(Order $order): void
    {
        $customerEmail = $order->customer_email ?? optional($order->billing)['email'] ?? null;
        if (!$customerEmail) {
            return;
        }

        try {
            Log::info('Checkout: preparing to email customer acknowledgement', [
                'customer_email' => $customerEmail,
                'order_id' => $order->id,
                'order_reference' => $order->reference,
                'booking_reference' => $order->booking_reference,
            ]);

            Mail::send(
                'emails.bank_transfer_customer',
                [
                    'order' => $order,
                ],
                function ($mail) use ($customerEmail) {
                    $mail->to($customerEmail)
                        ->subject('We received your bank transfer proof');
                }
            );
        } catch (\Throwable $e) {
            Log::error('Checkout: failed to send customer acknowledgement email', [
                'order_id' => $order->id ?? null,
                'error' => $e->getMessage(),
            ]);
            // Ignore mail failures to avoid blocking the checkout flow.
        }
    }

    /**
     * Step 4: retrieve final order for confirmation / ticket pages.
     */
    public function show(Order $order)
    {
        return response()->json([
            'order' => $order->toApiArray(),
        ]);
    }
}

