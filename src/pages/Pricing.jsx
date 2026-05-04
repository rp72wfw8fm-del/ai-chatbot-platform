import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <div>
      <Navigation />
      
      <section className="section bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-black text-center mb-4">Pricing Plans</h1>
          <p className="text-xl text-center text-gray-600 mb-16">Choose the perfect plan for your business</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Starter',
                price: '$29',
                description: 'Perfect for small businesses',
                features: [
                  '1 Chatbot',
                  '1,000 conversations/month',
                  'Basic analytics',
                  'Email support',
                  'Basic customization',
                  'Web integration'
                ]
              },
              {
                name: 'Professional',
                price: '$99',
                description: 'For growing companies',
                features: [
                  '5 Chatbots',
                  '10,000 conversations/month',
                  'Advanced analytics',
                  'Priority email & chat support',
                  'Full customization',
                  'Multi-channel integration',
                  'API access',
                  'Lead scoring'
                ],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: [
                  'Unlimited Chatbots',
                  'Unlimited conversations',
                  'Custom analytics',
                  '24/7 phone support',
                  'White-label solution',
                  'Custom integrations',
                  'Dedicated account manager',
                  'SLA guarantee'
                ]
              }
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-lg p-8 ${plan.highlighted ? 'bg-primary text-white shadow-lg transform scale-105' : 'bg-gray-50 border-2 border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>{plan.description}</p>
                <p className={`text-4xl font-black mb-6 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>{plan.price}<span className="text-lg">/month</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-yellow-300' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${plan.highlighted ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-blue-700'}`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Can I change plans anytime?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
                { q: 'Do you offer refunds?', a: 'We offer a 14-day money-back guarantee if you\'re not satisfied with our service.' },
                { q: 'Is there a setup fee?', a: 'No, there are no setup fees. You only pay the monthly subscription price.' },
                { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription anytime without penalties.' }
              ].map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
