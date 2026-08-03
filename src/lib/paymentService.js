import { apiRequest } from './apiClient';

const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';
let razorpayScriptPromise = null;

function loadRazorpayScript() {
  if (window.Razorpay) {
    return Promise.resolve();
  }

  if (!razorpayScriptPromise) {
    razorpayScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${RAZORPAY_SCRIPT_URL}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject(new Error('Failed to load Razorpay checkout.')));
        return;
      }

      const script = document.createElement('script');
      script.src = RAZORPAY_SCRIPT_URL;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Razorpay checkout.'));
      document.body.appendChild(script);
    });
  }

  return razorpayScriptPromise;
}

export async function getPaymentConfig() {
  return apiRequest('/payment.php?action=config');
}

export async function createPaymentOrder() {
  return apiRequest('/payment.php?action=create-order', { method: 'POST' });
}

export async function verifyPayment(paymentDetails) {
  return apiRequest('/payment.php?action=verify', {
    method: 'POST',
    body: paymentDetails,
  });
}

export async function startUpiPayment({ onSuccess, onDismiss }) {
  const [order] = await Promise.all([
    createPaymentOrder(),
    loadRazorpayScript(),
  ]);

  return new Promise((resolve, reject) => {
    const options = {
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      name: 'Benture AI',
      description: 'Annual subscription — all features unlocked',
      order_id: order.orderId,
      prefill: order.prefill || {},
      theme: { color: '#2563eb' },
      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true,
      },
      handler(response) {
        verifyPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        })
          .then((result) => {
            onSuccess?.(result);
            resolve(result);
          })
          .catch(reject);
      },
      modal: {
        ondismiss() {
          onDismiss?.();
          reject(new Error('Payment cancelled.'));
        },
      },
    };

    const checkout = new window.Razorpay(options);
    checkout.on('payment.failed', (response) => {
      const message = response?.error?.description || 'Payment failed. Please try again.';
      reject(new Error(message));
    });
    checkout.open();
  });
}
