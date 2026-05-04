import { useState } from 'react';
import { CreditCard, Smartphone, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    basic: { monthly: 29, yearly: 290 },
    pro: { monthly: 99, yearly: 990 },
    enterprise: { monthly: 299, yearly: 2990 }
  };

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      icon: '📱',
      description: 'Pay with M-Pesa',
      fee: '2%',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda']
    },
    {
      id: 'airtel',
      name: 'Airtel Money',
      icon: '💳',
      description: 'Pay with Airtel Money',
      fee: '2.5%',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Malawi']
    },
    {
      id: 'mtn_mobile',
      name: 'MTN Mobile Money',
      icon: '📲',
      description: 'Pay with MTN Mobile Money',
      fee: '2.5%',
      countries: ['Ghana', 'Cameroon', 'Côte d\'Ivoire', 'Nigeria']
    },
    {
      id: 'mtn_cash',
      name: 'MTN Cash',
      icon: '💰',
      description: 'Pay with MTN Cash',
      fee: '2%',
      countries: ['Ghana', 'Cameroon', 'Uganda']
    },
    {
      id: 'telecel',
      name: 'Telecel Cash',
      icon: '🏧',
      description: 'Pay with Telecel Cash',
      fee: '2.5%',
      countries: ['Ghana', 'Zimbabwe']
    },
    {
      id: 'card',
      name: 'Debit/Credit Card',
      icon: '💳',
      description: 'Pay with your card',
      fee: '3.5%',
      countries: ['Worldwide']
    }
  ];

  const amount = plans[selectedPlan][billingCycle];
  const fee = (amount * 0.025).toFixed(2);
  const total = (amount * 1.025).toFixed(2);

  const handlePayment = (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }
    alert(`Processing payment of $${total} via ${selectedMethod}...`);
  };

  return (
    <div>
      <Navigation />
      
      <section className="section bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-black mb-2">Upgrade Your Plan</h1>
          <p className="text-gray-600 mb-8">Choose a plan and payment method</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Plans Selection */}
            <div className="lg:col-span-2">
              {/* Billing Cycle Toggle */}
              <div className="flex gap-4 mb-8 bg-white p-4 rounded-lg shadow-md">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    billingCycle === 'monthly'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    billingCycle === 'yearly'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Yearly (Save 17%)
                </button>
              </div>

              {/* Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {['basic', 'pro', 'enterprise'].map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setSelectedPlan(plan)}
                    className={`p-6 rounded-lg border-2 transition ${
                      selectedPlan === plan
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <h3 className="font-bold text-xl capitalize mb-2">{plan} Plan</h3>
                    <p className="text-3xl font-black text-blue-600 mb-4">
                      ${plans[plan][billingCycle]}
                      <span className="text-sm text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ {plan === 'basic' ? '5' : plan === 'pro' ? '50' : 'Unlimited'} Chatbots</li>
                      <li>✓ {plan === 'basic' ? '1K' : plan === 'pro' ? '100K' : 'Unlimited'} Messages/mo</li>
                      <li>✓ Basic Analytics</li>
                      {plan !== 'basic' && <li>✓ Priority Support</li>}
                      {plan === 'enterprise' && <li>✓ Custom Integration</li>}
                    </ul>
                  </button>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-6 rounded-lg border-2 transition ${
                        selectedMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-4xl mb-2">{method.icon}</div>
                      <h3 className="font-bold text-lg">{method.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                      <p className="text-xs text-gray-500">Fee: {method.fee}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Available in: {method.countries.join(', ')}
                      </p>
                    </button>
                  ))}
                </div>

                {selectedMethod && (
                  <form onSubmit={handlePayment} className="mt-8 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+233 55 415 9515"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Proceed to Payment
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Plan</p>
                  <p className="font-bold capitalize">{selectedPlan} Plan</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Billing Cycle</p>
                  <p className="font-bold capitalize">{billingCycle}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-bold">${amount}</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">Processing Fee</p>
                  <p className="font-bold">${fee}</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-blue-600">${total}</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">✓ Secure payment</p>
                <p className="text-sm text-green-700">✓ Instant activation</p>
                <p className="text-sm text-green-700">✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
