<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Manual bank transfer pending verification</title>
</head>
<body style="font-family: Arial, sans-serif; color: #111;">
    <h2 style="color:#d90429;">Manual bank transfer pending verification</h2>
    <p>Hello team,</p>
    <p>A customer just submitted a bank transfer receipt. Please review and verify the payment:</p>

    <table style="border-collapse:collapse; width:100%; margin:16px 0;">
        <tbody>
            <tr>
                <td style="padding:6px 0; font-weight:bold; width:200px;">Order reference:</td>
                <td>{{ $order->reference }}</td>
            </tr>
            <tr>
                <td style="padding:6px 0; font-weight:bold;">Booking reference:</td>
                <td>{{ $order->booking_reference }}</td>
            </tr>
            <tr>
                <td style="padding:6px 0; font-weight:bold;">Customer:</td>
                <td>{{ $order->customer_name }} ({{ $order->customer_email }})</td>
            </tr>
            <tr>
                <td style="padding:6px 0; font-weight:bold;">Total amount:</td>
                <td>{{ number_format($order->total_amount, 2) }} {{ $order->currency ?? 'PKR' }}</td>
            </tr>
        </tbody>
    </table>

    @if(!empty($proofUrl))
        <p style="margin-top:24px; font-weight:bold;">Uploaded receipt:</p>
        <p>
            <img src="{{ $proofUrl }}" alt="Payment proof" style="max-width:480px; width:100%; border:1px solid #eee; border-radius:4px;">
        </p>
        <p>
            <a href="{{ $proofUrl }}" style="color:#d90429;">Download / open full image</a>
        </p>
    @else
        <p><strong>No image URL was generated.</strong> Please check the storage folder for this order.</p>
    @endif

    <p style="margin-top:24px;">Thank you,<br>VROOM automated alerts</p>
</body>
</html>


