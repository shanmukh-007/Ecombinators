import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react'
import { CheckCircle, XCircle, Loader } from 'lucide-react'
import React from 'react'

interface PayPalPaymentProps {
  amount: string
  description: string
  onSuccess?: (details: any) => void
  onError?: (error: any) => void
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({ 
  amount, 
  description, 
  onSuccess, 
  onError 
}) => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // PayPal client ID - Replace with your actual client ID
  // For production, use environment variables
  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test',
    currency: 'USD',
    intent: 'capture',
  }

  const createOrder = (_data: any, actions: any) => {
    setPaymentStatus('processing')
    return actions.order.create({
      purchase_units: [
        {
          description: description,
          amount: {
            value: amount,
          },
        },
      ],
    })
  }

  const onApprove = async (_data: any, actions: any) => {
    try {
      const details = await actions.order.capture()
      setPaymentStatus('success')
      if (onSuccess) {
        onSuccess(details)
      }
      return details
    } catch (error) {
      setPaymentStatus('error')
      setErrorMessage('Payment capture failed. Please try again.')
      if (onError) {
        onError(error)
      }
    }
  }

  const onErrorHandler = (err: any) => {
    setPaymentStatus('error')
    setErrorMessage('Payment failed. Please try again.')
    if (onError) {
      onError(err)
    }
  }

  return (
    <div className="w-full">
      {paymentStatus === 'idle' && (
        <PayPalScriptProvider options={initialOptions}>
          <div className="paypal-button-container">
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onErrorHandler}
              style={{
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'paypal',
              }}
            />
          </div>
        </PayPalScriptProvider>
      )}

      {paymentStatus === 'processing' && (
        <div className="flex items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl">
          <Loader className="w-5 h-5 text-accent animate-spin" />
          <span className="text-white/80">Processing payment...</span>
        </div>
      )}

      {paymentStatus === 'success' && (
        <div className="flex items-center gap-3 p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <div>
            <p className="font-semibold text-green-500">Payment Successful!</p>
            <p className="text-sm text-white/70 mt-1">Thank you for your payment.</p>
          </div>
        </div>
      )}

      {paymentStatus === 'error' && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
            <XCircle className="w-6 h-6 text-red-500" />
            <div>
              <p className="font-semibold text-red-500">Payment Failed</p>
              <p className="text-sm text-white/70 mt-1">{errorMessage}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setPaymentStatus('idle')
              setErrorMessage('')
            }}
            className="w-full bg-accent text-black rounded-xl px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}

export default PayPalPayment

