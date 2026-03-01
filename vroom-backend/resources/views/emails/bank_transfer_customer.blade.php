<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>We received your bank transfer proof</title>
</head>
<body style="font-family: Arial, sans-serif; color:#1f1f1f;">
    <h2 style="color:#d90429;">Thanks for your payment!</h2>
    <p>Hi {{ $order->customer_name ?? 'there' }},</p>
    <p>
        We received the bank transfer receipt you uploaded for order <strong>{{ $order->reference }}</strong>.
        Our finance team will review it and confirm your booking shortly.
    </p>

    <table style="border-collapse:collapse; width:100%; margin:16px 0;">
        <tbody>
            <tr>
                <td style="padding:6px 0; font-weight:bold; width:200px;">Booking reference:</td>
                <td>{{ $order->booking_reference }}</td>
            </tr>
            <tr>
                <td style="padding:6px 0; font-weight:bold;">Total amount:</td>
                <td>{{ number_format($order->total_amount, 2) }} {{ $order->currency ?? 'PKR' }}</td>
            </tr>
            <tr>
                <td style="padding:6px 0; font-weight:bold;">Experience:</td>
                <td>{{ $order->cart['product'] ?? 'Racing Experience' }} {{ $order->cart['package'] ? ' - '.$order->cart['package'] : '' }}</td>
            </tr>
        </tbody>
    </table>

    <p>If you have any questions, just reply to this email or call our support team.</p>

    <p style="margin-top:24px;">See you at the track!<br>Team VROOM</p>
</body>
</html>


