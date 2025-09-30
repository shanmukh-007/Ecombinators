# PayPal Payment Integration Guide

## Overview
This guide explains how to integrate and use PayPal payments in the Vizax application.

## Prerequisites
1. PayPal Business Account
2. PayPal Developer Account (https://developer.paypal.com/)
3. PayPal Client ID and Secret

## Setup Instructions

### 1. Get PayPal Credentials

1. Go to https://developer.paypal.com/
2. Log in with your PayPal account
3. Navigate to "Dashboard" → "My Apps & Credentials"
4. Create a new app or use an existing one
5. Copy your **Client ID** (you'll need this for the integration)

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_PAYPAL_CLIENT_ID=your_client_id_here
```

**Important:** 
- For development, use the **Sandbox** Client ID
- For production, use the **Live** Client ID
- Never commit your `.env` file to version control

### 3. Install Dependencies

The PayPal SDK is already installed:
```bash
npm install @paypal/react-paypal-js
```

## Usage

### Basic Implementation

```tsx
import PayPalPayment from './components/PayPalPayment'

function MyComponent() {
  const handleSuccess = (details: any) => {
    console.log('Payment successful:', details)
    // Handle successful payment (e.g., update database, send confirmation email)
  }

  const handleError = (error: any) => {
    console.error('Payment error:', error)
    // Handle payment error (e.g., show error message, log error)
  }

  return (
    <PayPalPayment
      amount="99.99"
      description="AI Consultation Service"
      onSuccess={handleSuccess}
      onError={handleError}
    />
  )
}
```

### Integration in Contact Form

You can add the PayPal button to the contact section for service payments:

```tsx
// In src/pages/Home.tsx or wherever you want to add payments

import PayPalPayment from '../components/PayPalPayment'

// Add this to your contact section
<div className="mt-8">
  <h4 className="text-lg font-semibold mb-4">Pay for Consultation</h4>
  <PayPalPayment
    amount="199.00"
    description="AI Strategy Consultation - 1 Hour"
    onSuccess={(details) => {
      // Send confirmation email
      // Update CRM
      // Show success message
    }}
  />
</div>
```

## PayPal Branding Guidelines

### Button Styling
The PayPal button component follows PayPal's branding guidelines:
- Uses official PayPal colors (gold, blue, silver, black)
- Maintains proper spacing and sizing
- Includes PayPal logo

### Customization Options
```tsx
<PayPalButtons
  style={{
    layout: 'vertical',    // or 'horizontal'
    color: 'gold',         // 'gold', 'blue', 'silver', 'black'
    shape: 'rect',         // 'rect' or 'pill'
    label: 'paypal',       // 'paypal', 'checkout', 'buynow', 'pay'
    height: 55,            // 25-55 pixels
  }}
/>
```

## Error Handling

The component includes comprehensive error handling:

1. **Payment Creation Errors**: Handled in `createOrder`
2. **Payment Capture Errors**: Handled in `onApprove`
3. **General Errors**: Handled in `onError`

### Error States
- `idle`: Ready for payment
- `processing`: Payment in progress
- `success`: Payment completed successfully
- `error`: Payment failed (with retry option)

## Testing

### Sandbox Testing
1. Use PayPal Sandbox accounts for testing
2. Create test buyer and seller accounts at https://developer.paypal.com/dashboard/accounts
3. Use sandbox credentials in development

### Test Cards
PayPal provides test credit cards for sandbox testing:
- Visa: 4032039974960680
- Mastercard: 5425233430109903
- Amex: 374245455400001

## Security Best Practices

1. **Never expose your Secret Key** in client-side code
2. **Use environment variables** for sensitive data
3. **Validate payments server-side** before fulfilling orders
4. **Implement webhook handlers** for payment notifications
5. **Use HTTPS** in production
6. **Log all transactions** for audit purposes

## Production Checklist

- [ ] Replace sandbox Client ID with live Client ID
- [ ] Set up webhook endpoints for payment notifications
- [ ] Implement server-side payment verification
- [ ] Configure proper error logging
- [ ] Set up payment confirmation emails
- [ ] Test with real PayPal accounts (small amounts)
- [ ] Implement refund handling
- [ ] Add terms and conditions
- [ ] Ensure GDPR/privacy compliance
- [ ] Set up monitoring and alerts

## Server-Side Integration (Recommended)

For production, implement server-side payment verification:

```javascript
// Example Node.js/Express endpoint
app.post('/api/verify-payment', async (req, res) => {
  const { orderID } = req.body
  
  try {
    // Verify payment with PayPal API
    const response = await fetch(
      `https://api.paypal.com/v2/checkout/orders/${orderID}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    )
    
    const order = await response.json()
    
    if (order.status === 'COMPLETED') {
      // Payment verified - fulfill order
      res.json({ success: true })
    } else {
      res.status(400).json({ error: 'Payment not completed' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Verification failed' })
  }
})
```

## Webhook Configuration

Set up webhooks to receive payment notifications:

1. Go to PayPal Developer Dashboard
2. Navigate to your app
3. Add webhook URL: `https://yourdomain.com/api/paypal-webhook`
4. Subscribe to events:
   - `PAYMENT.CAPTURE.COMPLETED`
   - `PAYMENT.CAPTURE.DENIED`
   - `PAYMENT.CAPTURE.REFUNDED`

## Support and Resources

- PayPal Developer Documentation: https://developer.paypal.com/docs/
- PayPal Integration Wizard: https://developer.paypal.com/integration-wizard/
- PayPal Support: https://www.paypal.com/us/smarthelp/contact-us
- React PayPal JS SDK: https://github.com/paypal/react-paypal-js

## Troubleshooting

### Common Issues

**Issue**: PayPal buttons not showing
- **Solution**: Check that Client ID is correctly set in environment variables
- **Solution**: Ensure PayPal script is loaded (check browser console)

**Issue**: Payment fails immediately
- **Solution**: Verify amount format (must be string with 2 decimal places)
- **Solution**: Check that currency is supported

**Issue**: Sandbox payments not working
- **Solution**: Ensure you're using sandbox Client ID
- **Solution**: Verify test account has sufficient funds

## Contact

For integration support, contact the development team at team@vizax.tech

