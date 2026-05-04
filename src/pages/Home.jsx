import { Link } from 'react-router-dom';
import { MessageSquare, Zap, BarChart3, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">AI Chatbots for Sales & HR</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Automate customer interactions, qualify leads, and manage HR tasks with intelligent AI chatbots.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/pricing" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Start Free Trial
            </Link>
            <a href="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Why Choose ChatBot Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: "AI-Powered Responses",
                description: "Advanced AI understands context and provides intelligent responses to customer queries."
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-primary" />,
                title: "Real-Time Analytics",
                description: "Track conversations, engagement metrics, and performance in real-time."
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Easy Integration",
                description: "Integrate with your existing tools and platforms in minutes."
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-primary" />,
                title: "Multi-Channel Support",
                description: "Deploy chatbots on website, WhatsApp, Facebook, and more."
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-primary" />,
                title: "Lead Qualification",
                description: "Automatically qualify and score leads for your sales team."
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "HR Automation",
                description: "Handle employee onboarding, leave requests, and FAQs automatically."
              }
            ].map((feature, idx) => (
              <div key={idx} className="card text-center hover:shadow-lg transition">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-primary">Sales Teams</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Qualify leads 24/7
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Answer product questions
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Schedule demos automatically
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Increase conversion rates
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-secondary">HR Departments</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Onboard new employees
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Process leave requests
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Answer HR FAQs
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Reduce HR workload
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$29', features: ['1 Chatbot', '1,000 conversations/month', 'Basic analytics', 'Email support'] },
              { name: 'Professional', price: '$99', features: ['5 Chatbots', '10,000 conversations/month', 'Advanced analytics', 'Priority support', 'API access'], highlighted: true },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited Chatbots', 'Unlimited conversations', 'Custom integrations', '24/7 phone support', 'Dedicated account manager'] }
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-lg p-8 ${plan.highlighted ? 'bg-primary text-white shadow-lg transform scale-105' : 'bg-gray-50 border-2 border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-4xl font-black mb-6 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>{plan.price}<span className="text-lg">/month</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${plan.highlighted ? 'text-yellow-300' : 'text-green-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${plan.highlighted ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-blue-700'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Start your free trial today. No credit card required.</p>
          <Link to="/pricing" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
