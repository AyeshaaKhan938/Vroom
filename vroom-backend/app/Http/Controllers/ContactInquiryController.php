<?php

namespace App\Http\Controllers;

use App\Models\ContactInquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactInquiryController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string'],
        ]);

        $inquiry = ContactInquiry::create([
            'email' => $data['email'],
            'message' => $data['message'],
        ]);

        // Try to notify the admin and send an acknowledgement to the user.
        // If mail isn't configured, just ignore the error.
        try {
            $adminEmail = config('mail.contact_to') ?? env('CONTACT_TO') ?? 'ayeshaakhan938@gmail.com';

            Log::info('Contact inquiry: preparing to email admin', [
                'admin_email' => $adminEmail,
                'from_email' => $inquiry->email,
            ]);

            // Email to admin/team with the client's message.
            Mail::raw(
                "New media/community contact inquiry:\n\nEmail: {$inquiry->email}\n\nMessage:\n{$inquiry->message}",
                function ($m) use ($adminEmail) {
                    $m->to($adminEmail)
                        ->subject('New Media & Community Contact Inquiry');
                }
            );

            Log::info('Contact inquiry: preparing to email customer', [
                'customer_email' => $inquiry->email,
            ]);

            // Email back to the user confirming that their inquiry was received.
            Mail::raw(
                "Hi,\n\nWe have received your message:\n\n\"{$inquiry->message}\"\n\nOur team will contact you soon.\n\nTeam VROOM",
                function ($m) use ($inquiry) {
                    $m->to($inquiry->email)
                        ->subject('We received your inquiry');
                }
            );
        } catch (\Throwable $e) {
            Log::error('Contact inquiry mail failed', [
                'error' => $e->getMessage(),
            ]);
            // Inquiry is still saved in the database even if mail fails.
        }

        return response()->json([
            'success' => true,
            'id' => $inquiry->id,
        ], 201);
    }
}



